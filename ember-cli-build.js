const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(options) {
  var app = new EmberAddon(defaults, {
  });


  return app.toTree();
};
