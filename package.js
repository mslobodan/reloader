Package.describe({
  name: 'mslobodan:reloader',
  version: '1.3.2',
  summary: 'More control over hot code push reloading',
  git: 'https://github.com/mslobodan/reloader/',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('2.16');

  api.use(['ecmascript',
    'check',
    'underscore',
    'reload',
    'templating@1.4.2',
    'reactive-var',
    'tracker',
    'launch-screen'], 'client');

  api.mainModule('reloader.js', 'web.cordova');
  api.mainModule('browser.js', 'web.browser');
  //  when testing, uncomment this line:
  // api.mainModule('reloader.js', 'client');

  api.export('Reloader', 'client');
});

// No way to make this only happen onTest
Npm.depends({
  sinon: '1.17.3'
});

Package.onTest(function (api) {
  api.use('mslobodan:reloader', 'client');

  api.use(['ecmascript',
    'underscore',
    'practicalmeteor:mocha'], 'client');

  api.mainModule('reloader-tests.js', 'client');
});
