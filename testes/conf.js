// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['teste.js'],
  capabilities: {
    browserName: 'firefox'
  }
}