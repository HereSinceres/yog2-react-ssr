define('home:page/index/server.jsx', function(require, exports, module) {

  "use strict";
  exports.__esModule = true;
  var React = require("home:node_modules/react/index.js");
  var ReactDOMServer = require("home:node_modules/react-dom/server.browser.js");
  var App_1 = require("home:page/index/App/index.jsx");
  module.exports = function (props) {
      return ReactDOMServer.renderToString(React.createElement(App_1.App, null));
  };
  

});
