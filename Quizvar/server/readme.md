# Quizvar 后台部署说明

## 安装教程

1. 进入到 server 根目录，安装依赖。

```shell
cd server
npm install
```

2. 配置端口号。

```shell
cd bin
vim www.js
```

更改`SSL_PORT`为自己想要的端口号。

3. 配置 SSL 证书

上传 PEM 和 KEY 格式的证书到 cert 文件夹下

4. 运行服务器

我这里用的 forever 来运行服务，这样可以守卫进程

```shell
forever start www.js
```

## 接口说明

详细的接口说明可以在[这里](./Quizvar_API.md)找到

