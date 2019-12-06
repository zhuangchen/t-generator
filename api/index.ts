import http from '@/apis/axiosService';
import {ERROR_UNKNOWN,SUCCESS_POST} from '@/apis/result.message';
import Qs from 'qs';
import * as baseConfig from './config';
// 添加
const ADD: MyAjax.Impl = (data: object) => {
  return new Promise((resolve, reject) => {
      http({
        ...baseConfig.ADD_CONFIG,
        data: Qs.stringify(data)
      })
      .then((res) => {
        const $data = res.data;
        if ($data.status) {
        SUCCESS_POST($data.message.toString());
        resolve($data);
        } else {
          ERROR_UNKNOWN($data.message.toString());
          reject($data.message.toString());
        }
      })
      .catch((error: any) => {
        ERROR_UNKNOWN(error.toString());
        reject(error.toString());
      });
  });
};
// 更新
const UPDATE: MyAjax.Impl = (data: {
  id: string,
  approvalStatus: number
}) => {
  return new Promise((resolve, reject) => {
      http({
        ...baseConfig.UPDATE_CONFIG,
        data: Qs.stringify(data)
      })
      .then((res) => {
        const $data = res.data;
        if ($data.status) {
          SUCCESS_POST($data.message.toString());
          resolve($data.message.toString());
        } else {
          ERROR_UNKNOWN($data.message.toString());
          reject($data.message.toString());
        }
      })
      .catch((error: any) => {
        ERROR_UNKNOWN(error.toString());
        reject(error.toString());
      });
  });
};
export {
  ADD,
  UPDATE
};
