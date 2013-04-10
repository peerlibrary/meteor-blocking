Package.describe({
  summary: "Making async functions blocking"
});

Package.on_use(function (api) {
  api.use('coffeescript', 'server');

  api.add_files([
    'server.coffee'
  ], 'server');
});
