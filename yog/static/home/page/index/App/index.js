define('home:page/index/App/index.jsx', function(require, exports, module) {

  "use strict";
  exports.__esModule = true;
  exports.App = exports.Count = void 0;
  var React = require("home:node_modules/react/index.js");
  var useState = React.useState;
  var Count = function () {
      var _a = useState(0), count = _a[0], setCount = _a[1];
      return (React.createElement("button", { onClick: function () {
              setCount(count + 1);
          } }, count));
  };
  exports.Count = Count;
  var App = function () {
      return (React.createElement("div", null,
          React.createElement(exports.Count, null),
          React.createElement("h1", null, "Hello, world!")));
  };
  exports.App = App;
  

});
