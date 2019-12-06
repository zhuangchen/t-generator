import commanderConfig from '../commander';
import {getCustomConfig,mergeConfig} from './buildConfig';
const config = mergeConfig(commanderConfig,getCustomConfig(commanderConfig.configPath));
export default config;
