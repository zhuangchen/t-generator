import chalk from 'chalk';
const getfilePath = (path:string) => {
  return process.cwd()+ '\\' +path;
};
const mergeConfig = (commanderConfig: {[prop: string]:any}, fileConfig:{[prop: string]:any}) =>{
  const cc = Object.assign({},commanderConfig);
  Object.keys(fileConfig).forEach(k => {
      if(fileConfig[k]){
        cc[k] = fileConfig[k];
      }
  });
  delete cc.configPath;
  return cc;
};
const getCustomConfig = (path: string) => {
  try{
    let rf = {};
    const file = require(getfilePath(path));
    if(typeof file === 'function') {
      rf  = file();
    } else {
      rf = file;
    }
    if(typeof rf === 'object' && rf !== null){
      return rf;
    } else {
      return {};
    }
  } catch(e){
    console.log(chalk.red(`配置文件获取失败，请确定提供了正确的文件路径`));
    return {};
  }
};
export {
  getCustomConfig,
  mergeConfig
};
