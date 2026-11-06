import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve('dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.ttf':'font/ttf','.txt':'text/plain'};
const port=Number(process.env.PORT || 4173);
createServer(async(req,res)=>{try{let path=decodeURIComponent(new URL(req.url,'http://localhost').pathname); if(path.startsWith('/change/'))path=path.slice(7);const file=resolve(root,'.'+(path.startsWith('/')?path:'/'+path));if(file!==root&&!file.startsWith(root+sep))throw Error('Invalid path');const info=await stat(file);const target=info.isDirectory()?resolve(file,'index.html'):file;const body=await readFile(target);res.writeHead(200,{'Content-Type':types[extname(target)]||'application/octet-stream','Cache-Control':'no-store'});res.end(body);}catch{res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found');}}).listen(port,'127.0.0.1',()=>console.log(`Preview: http://127.0.0.1:${port}/change/`));
