
// 所有的测试文件，以.test.js或.spec.js结尾
const context = require.context('./test', true, /[spec,test]\.js$/)
context.keys().forEach(context)
console.log("test files:", context.keys());
