var path = require('path');

var appRoot = 'client/src/';
var outputRoot = 'client/dist/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  serversource : 'server/**/*.js',
  html: appRoot + '**/*.html',
  style:  'client/styles/*.css',
  output: outputRoot,
  sourceMapRelativePath: '../' + appRoot,
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
