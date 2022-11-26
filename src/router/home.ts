import Router from '@koa/router';

const router = new Router();

router.prefix('/home');
router.get('/', async ({ success }) => {
  const data = {
    test:'ok'
  }
  success(data);
});


export default router;
