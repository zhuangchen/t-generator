import fs from 'fs';
const readdirSync = (path: string) => {
  return fs.readdirSync(path);
};
const readFileSync = (path: string) => {
  return fs.readFileSync(path);
};
const mkdirSync =(dirName:string, path:string) => {
    fs.mkdirSync(path+'/'+dirName);
};
const appendFileSync = (fileName:string, path: string, context:string) => {
  fs.appendFileSync(path+'/'+fileName, context, 'utf8');
};
const copyFileSync =(fromPath:string, copyFileName:string, toPath:string, pasteFileName:string) => {
  fs.copyFileSync(fromPath+'/'+copyFileName, toPath+'/'+pasteFileName);
};
/* Check whether there are dirName under the path*/
const hasDir = (dirName: string, path: string) : boolean => {
    const dirs = fs.readdirSync(path);
    return dirs.some(n => n === dirName);
};
export {
  hasDir,
  readdirSync,
  readFileSync,
  mkdirSync,
  appendFileSync,
  copyFileSync
};
