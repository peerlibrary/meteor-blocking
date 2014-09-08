Package.describe({
  summary: "Making async functions blocking",
  version: '0.4.2',
  name: 'peerlibrary:blocking',
  git: 'https://github.com/peerlibrary/meteor-blocking.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1');
  api.export('blocking');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['peerlibrary:blocking', 'tinytest', 'test-helpers'], 'server');
  api.add_files('tests.js', 'server');
});
