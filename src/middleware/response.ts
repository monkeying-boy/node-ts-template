import type { Context, Next } from 'koa';
import type { TSuccess, TError } from '@/types/koa';

const response = () => async (ctx:Context, next:Next) => {
  ctx.type = 'json';
  const success:TSuccess = (data, msg = '操作成功') => {
    ctx.body = {
      data,
      msg,
      code: 200,
    };
  };
  const error:TError = (data, code = 400, msg = '操作失败') => {
    ctx.body = {
      data,
      msg,
      code,
    };
  };
  ctx.success = success;
  ctx.error = error;
  await next();
};

export default response;
