import fs from 'fs';
import config from '../config/config.json';
import { logger } from '../models';
import { Streams } from '../utils';

export default class CheckUtils {
  static checkArgs(args) {
    const checkArgsFlag = (Object.keys(args).length > 1);
    if (!checkArgsFlag) {
      logger.warn(config.no_args);
    }
    return checkArgsFlag;
  }

  static checkFileArg(args) {
    const checkFileArgFlag = args.file;
    if (!checkFileArgFlag) {
      logger.warn(`--file ${config.no_arg}`);
    }
    return checkFileArgFlag;
  }

  static checkPathArg(args) {
    const checkPathArgFlag = args.path;
    if (!checkPathArgFlag) {
      logger.warn(`--path ${config.no_arg}`);
    }
    return checkPathArgFlag;
  }

  static checkFile(filePath) {
    const checkFileFlag = (fs.existsSync(filePath) && fs.statSync(filePath).isFile());
    if (!checkFileFlag) {
      logger.error(config.file_not_found);
    }
    return checkFileFlag;
  }

  static checkCsv(filePath) {
    if (CheckUtils.checkFile(filePath)) {
      const checkCsvFlag = (filePath.split('.').pop() === 'csv');
      if (!checkCsvFlag) {
        logger.error(config.wrong_ext);
      }
      return checkCsvFlag;
    }
    return false;
  }
}