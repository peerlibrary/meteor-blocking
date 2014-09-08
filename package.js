Package.describe({
  summary: "Making async functions blocking",
  version: '0.4.2',
  name: 'mrt:blocking',
  git: 'https://github.com/peerlibrary/meteor-blocking.git'
});

Package.on_use(function (api) {
  api.imply('peerlibrary:blocking@0.4.2');
});
