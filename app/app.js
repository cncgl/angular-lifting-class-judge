/*
  Extends boot.js file inside core directory and initiates angular app
  --------------------------------------------------------------------
                            NOTICE
  --------------------------------------------------------------------
  To keep this file clean make sure you do not write any code inside
  it , and use it your imports only

  Extend your manual dependencies inside this file.

  For example :-
    require("angular-animate");
    require("some-other-module");
    boot(["angular-animate","some-other-module"]);
*/


var boot;
boot = require('../core/boot');


require('../bower_components/angular-animate');
require('../bower_components/angular-aria');
require('../bower_components/angular-messages');
require('../bower_components/angular-material');

boot(['ngMaterial']);
// boot();

/**
  Uncomment when you create filters
  require("./filters");
*/

/**
  Uncomment when you create factory
  require("./services");
*/

/**
  Uncomment when you create services
  require("./store");
*/

/**
  Uncomment when you create directives
  require("./directives");
*/

/**
  Uncomment when you create templates
  require("./templates");
*/

/**
  Uncomment when you create controllers
*/
require("./controllers");
