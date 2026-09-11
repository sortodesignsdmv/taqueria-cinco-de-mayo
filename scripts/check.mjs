import {readdir,readFile,stat} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'../dist');
const files=[];
async function walk(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const path=resolve(dir,entry.name);if(entry.isDirectory())await walk(path);else if(entry.name.endsWith('.html'))files.push(path);}}
await walk(root);
let checked=0;
const errors=[];
for(const file of files){
  const html=await readFile(file,'utf8');
  if((html.match(/<h1(?:\s|>)/g)||[]).length!==1) errors.push(`${file}: expected one h1`);
  if(!html.includes('name="description"'))errors.push(`${file}: missing description`);
  const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);
  if(new Set(ids).size!==ids.length)errors.push(`${file}: duplicate IDs`);
  for(const image of html.matchAll(/<img\b[^>]*>/g)){if(!/\balt="[^"]+"/.test(image[0]))errors.push(`${file}: missing image alt`);}
  for(const [,attr,value] of html.matchAll(/\b(href|src)="([^"]+)"/g)){
    if(/^(https?:|tel:|mailto:)/.test(value))continue;
    if(!value.startsWith('/')&&!value.startsWith('#'))continue;
    const [url,hash]=value.split('#');
    const target=url?resolve(root,'.'+url+(url.endsWith('/')?'index.html':'')):file;
    try{if(!(await stat(target)).isFile())throw new Error('not a file');}catch{errors.push(`${file}: broken ${attr} ${value}`);continue;}
    if(hash){const text=await readFile(target,'utf8');if(!text.includes(`id="${hash}"`))errors.push(`${file}: missing fragment ${value}`);}
    checked++;
  }
  for(const [,url] of html.matchAll(/href="(https:\/\/order\.toasttab\.com[^\"]+)"/g)){
    if(url!=='https://order.toasttab.com/online/taqueria-cinco-de-mayo-1-7201-annapolis-road')errors.push(`${file}: incorrect Toast location`);
  }
}
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log(`PASS: ${files.length} HTML pages, ${checked} local links/assets/fragments, headings, image alternatives, and Toast location.`);
