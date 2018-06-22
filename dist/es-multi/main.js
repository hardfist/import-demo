"use strict";

var _lib = require("./lib");

var lib = _interopRequireWildcard(_lib);

var _lib2 = require("./lib2");

var lib2 = _interopRequireWildcard(_lib2);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

console.log("lib:", lib);
console.log("lib2:", lib2);
lib.foo();
lib.bar();
lib2.foo();
lib2.bar();
