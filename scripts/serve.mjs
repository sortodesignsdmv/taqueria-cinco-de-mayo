import {build} from './build.mjs';
import {watch} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve,dirname,extname,sep} from 'node:path';
const root = dirname(dirname(fileURLToPath(import.meta.url)));
await build();
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.woff2':'font/woff2'};
const server = Bun.serve({hostname:'127.0.0.1',port:4321,async fetch(req){
  let path;
  try { path=decodeURIComponent(new URL(req.url).pathname); } catch {return new Response('Bad request',{status:400});}
  if (!extname(path)) path=path.replace(/\/$/,'')+'/index.html';
  const filePath=resolve(root,'dist','.'+path);
  if (!filePath.startsWith(resolve(root,'dist')+sep)) return new Response('Forbidden',{status:403});
  const file=Bun.file(filePath);
  if (await file.exists()) return new Response(file,{headers:{'Content-Type':types[extname(path)]||'application/octet-stream','Cache-Control':'no-cache'}});
  return new Response(Bun.file(resolve(root,'dist/404.html')),{status:404,headers:{'Content-Type':'text/html; charset=utf-8'}});
}});
if (!process.argv.includes('--production')) {
  let timer; let rebuilding=false;
  const rebuild=()=>{clearTimeout(timer); timer=setTimeout(async()=>{if(rebuilding)return;rebuilding=true;try{await build();}catch(error){console.error(error);}finally{rebuilding=false;}},200);};
  watch(resolve(root,'src'),{recursive:true},rebuild);
  watch(resolve(root,'public'),{recursive:true},rebuild);
}
console.log(`Local: http://${server.hostname}:${server.port}`);
