
/*
 * GET home page.
 * 路由文件，相当于控制器，用于组织展示的内容
 */

exports.index = function(req, res) {
  // 调用模板解析引擎，翻译名为index的模板，并传入一个对象作为参数
  res.render('index', { title: 'Express' });
};