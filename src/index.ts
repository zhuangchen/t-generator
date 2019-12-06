import chalk from 'chalk';
import config  from './config';
import {renderTsxTemplate}  from './render';
import {appendFileSync, hasDir, mkdirSync} from './util/fs';
const getfilePath = (path:string) => {
  return process.cwd()+ '\\' +path;
};
const createPage = (name:string, path:string, pageSuffix:string) => {
  if(!hasDir(name, path)) {
    mkdirSync(name, getfilePath(path));
    appendFileSync(name + pageSuffix, getfilePath(path+'/'+name), renderTsxTemplate(name));
    console.log(chalk.green(`成功生成页面文件${name}`));
  } else {
    console.log(chalk.red(`已存在页面文件${name}`));
  }
};
// const createApiFiles = (name:string, path:string) =>{
//   if(!hasDir(name, path)) {
//     generateDirSync(name, resolve(path));
//     const apiDir = resolve('gen/template/api');
//     const templateApiFiles = readdirSync(apiDir);
//     templateApiFiles.forEach(n => {
//       copyFileSync(apiDir, n, resolve(path)+'/'+name, n);
//     });
//     console.log(chalk.green(`成功生成接口文件${name}`));
//   } else {
//     console.log(chalk.red(`已存在接口文件${name}`));
//   }
// };
const createFiles = (options:any) => {
  const pn = options.page;
  if(Array.isArray(options.pages) && options.pages.length > 0) {
    config.pages.forEach((p: string) => {
      createPage(p, options.outPageDir, options.pageSuffix);
      // if(options.ga){
      //   createApiFiles(p, options.outPageDir);
      // }
    });
  }
  if(pn){
    createPage(pn, options.outPageDir, options.pageSuffix);
    // if(options.ga){
    //   createApiFiles(pn, options.outApiDir);
    // }
  }
};
createFiles(config);
