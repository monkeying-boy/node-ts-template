import alias from 'module-alias'
import Koa from 'koa';
import cors from '@koa/cors';
import bodyparser from 'koa-bodyparser';
import { port,host } from './config/index';
import routerResponse from './middleware/response';
import registerRouter from './router/index';

alias.addAlias('@', __dirname)

const app = new Koa();
app.use(cors({
  credentials: true,
}));

app.use(bodyparser());
app.use(routerResponse());
registerRouter(app);

app.on('error', (err):void => {
  console.error('server error', err);
});

app.listen(port,host, () => {
  console.log(`服务已经启动访问: http://${host}:${port}`);
});
