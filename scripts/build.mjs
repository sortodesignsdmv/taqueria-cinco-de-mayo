import { mkdir, readdir, writeFile, cp } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { join, dirname } from 'node:path';
const root = dirname(dirname(fileURLToPath(import.meta.url)));
export async function build() {
  const stamp = Date.now();
  const {layout} = await import(pathToFileURL(join(root,'src/routes/__root.js')).href + '?v='+stamp);
  const files = (await readdir(join(root,'src/routes'))).filter(f=>f.endsWith('.js')&&!f.startsWith('_'));
  await mkdir(join(root,'dist'), {recursive:true});
  for (const file of files) {
    const route = file.replace('.js','');
    const path = route==='index' ? '/' : `/${route}/`;
    const {default:page} = await import(pathToFileURL(join(root,'src/routes',file)).href+'?v='+stamp);
    const target = join(root,'dist',route==='index'?'':route);
    await mkdir(target,{recursive:true});
    await writeFile(join(target,'index.html'),layout({...page,path}));
  }
  await cp(join(root,'public'),join(root,'dist'),{recursive:true});
  await writeFile(join(root,'dist/404.html'),layout({title:'Page not found | Taqueria Cinco de Mayo',description:'Find your way back to tacos, our menu, or Taqueria Cinco de Mayo in Hyattsville.',path:'/404/',body:'<section class="section wrap error-page"><span class="eyebrow">A LITTLE DETOUR</span><h1>Lost? Let’s find<br>some tacos.</h1><p>This page isn’t on the menu.</p><a class="button" href="/menu/">Explore our menu <svg class="ui-arrow" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14"/></svg></a></section>'}));
  console.log(`Built ${files.length} pages + 404 → dist/`);
}
if (import.meta.main || process.argv[1]===fileURLToPath(import.meta.url)) await build();
