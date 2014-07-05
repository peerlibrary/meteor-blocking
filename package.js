Package.describe({
  summary: "Making async functions blocking"
});

Package.on_use(function (api) {
  api.export('blocking');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['blocking', 'tinytest', 'test-helpers'], 'server');
  api.add_files('tests.js', 'server');
});
