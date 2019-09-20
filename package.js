Package.describe({
  summary: "Making async functions blocking",
  version: '0.6.0',
  name: 'peerlibrary:blocking',
  git: 'https://github.com/peerlibrary/meteor-blocking.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.8.1');

  api.use('underscore');

  api.export('blocking');

  api.addFiles([
    'server.js'
  ], 'server');
});

Package.onTest(function (api) {
  api.use([
    'peerlibrary:blocking',
    'tinytest',
    'test-helpers'
  ], 'server');

  api.addFiles('tests.js', 'server');
});
