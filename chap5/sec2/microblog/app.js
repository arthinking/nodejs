
/**
 * Module dependencies.
 * 工程的入口
 */
// 导入Express模块
var express = require('express')
  , routes = require('./routes'); // routers是一个文件夹形式的本地模块

var app = module.exports = express.createServer();

// Configuration
// 创建一个应用的实例  通用环境下的参数
app.configure(function(){
  // 试图文件的目录，存放模板文件
  app.set('views', __dirname + '/views');
  // 试图模板引擎
  app.set('view engine', 'ejs');
  // 启用中间件    Express依赖于connect，提供了大量的中间件
  app.use(express.bodyParser());  // 解析客户端请求，通常是通过POST发送的内容
  app.use(express.methodOverride());  // 用于支持定制的HTTP方法
  app.use(app.router);  // 路由支持
  app.use(express.static(__dirname + '/public'));  // 静态文件支持
});
// 开发环境下的参数
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
// 产品环境下的参数
app.configure('production', function(){
  app.use(express.errorHandler());  // 错误控制器
});

// Routes

app.get('/', routes.index);  // 路由控制器

app.listen(3000);  // 监听3000端口
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
