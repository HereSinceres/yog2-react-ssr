define('home:page/index/client.jsx', function(require, exports, module) {

  "use strict";
  exports.__esModule = true;
  var react_1 = require("home:node_modules/react/index.js"), React = react_1;
  var client_1 = require("home:node_modules/react-dom/client.js"), ReactDOM = client_1;
  var App_1 = require("home:page/index/App/index.jsx");
  console.log(react_1["default"] === React);
  console.log(client_1["default"] === ReactDOM);
  module.exports = function () {
      ReactDOM.hydrateRoot(document.getElementById('root'), React.createElement(App_1.App, null));
  };
  

});
