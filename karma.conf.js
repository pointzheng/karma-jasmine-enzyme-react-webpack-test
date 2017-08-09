var webpackConfig = require('./webpack.test.config.js');

var config = function(config) {
  return config.set({
    basePath: '',
    browsers: [
      'Chrome',
      // 'PhantomJS',
    ],
    frameworks: [
      'jasmine'
    ],
    files: [ /*测试的入口文件：如下的2个表达式任意1个即可*/
      // 'test/**/spec.js',
      './webpack.test.files.js'
    ],
    preprocessors: {
      './test/**/spec.js': ['webpack','sourcemap'],
      './webpack.test.files.js': ['webpack', 'sourcemap'], // 针对文件webpack.test.files.js，进行require支持，否则报错

      // 被测试代码，需要覆盖率
      // 'test/**/spec.js': 'coverage' // 测试覆盖率相关
      // './src/components/button/index.js': 'coverage' // 测试覆盖率相关
    },

    reporters: [
      'progress',
      'coverage'
    ],
    coverageReporter: {
      type:'html',
      dir:'./coverage/'
    },

    webpack: Object.assign(
      {},
      webpackConfig,
      {
        externals: {
          'react/addons': true,
          'react/lib/ExecutionEnvironment': true,
          'react/lib/ReactContext': true,
        },
      }
    ),
    webpackServer: {
      noInfo: true,
    },
    colors: true,
    autoWatch: true,
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-coverage'
    ],
  });
};

module.exports = config;
