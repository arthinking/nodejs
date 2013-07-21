exports.testSomething = function(test){
	// 指定一个测试内期望被执行的断言数量，确保你的回调和断言被执行到了。
    test.expect(1);
    // 判断是否为true
    test.ok(1==1, 'this assertion should pass');
    // 结束当前的测试函数并继续执行下一个
    test.done();
};

exports.testSomethingElse = function(test){
    test.equal(1, 3, 'this assertion should fail');
    test.done();
};