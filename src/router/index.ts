import type Koa from 'koa';
import Router from '@koa/router';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const getRouteList = ():Array<Router> => {
  const list:Array<Router> = [];
  const routers = readdirSync(__dirname);
  for (let index = 0; index < routers.length; index += 1) {
    const fileName = routers[index];
    if (fileName && fileName !== 'index.ts' && fileName !== 'index.js') {
      const { default: route }:{ default:Router } = require(join(__dirname, fileName));
      list.push(route);
    }
  }
  return list;
};

// 所有接口都是通过 /api 进行访问
export default async (app:Koa) => {
  const api = new Router();
  api.prefix('/api');
  const list = getRouteList();
  list.forEach((item) => {
    api.use(item.routes());
    api.use(item.allowedMethods());
  });
  app.use(api.routes());
};
