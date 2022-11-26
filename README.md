# node-ts-template

`pnpm + node16 + ts + eslint` 方便快速搭建 node 服务

## 安装

```
pnpm install
```

## 本地开发

```
pnpm dev
```
## 打包

```
pnpm build
```

## 部署
1. 先执行 `pnpm build`
2. 将 `package.json`拷贝到 **dist**目录
3. 丢到服务器（需要有 node@>16、pnpm）
4. 执行 `pnpm install -P`
5. 执行 `pnpm start` (建议通过 pm2 启动)