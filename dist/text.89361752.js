// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    list-style: none ;\n}\n*::before {\n    box-sizing: border-box;\n}\n*::after {\n    box-sizing: border-box;\n}\n.background {\n    position: relative;\n    min-height: 72vh;\n    background-color: #dfecfe;\n}\n.bigFace {\n    background-color: #81c2f1;\n    position: absolute;\n    border: 2px solid #293948;\n    width: 330px;\n    height: 330px;\n    left: 50%;\n    margin-left: -165px;\n    top: 200px;\n    border-radius: 50%;\n}\n.smallFace{\n    background-color: #ffffff;\n    border: 2px solid #293948;\n    height: 260px;\n    width: 260px;\n    bottom: -2px;\n    left: 50%;\n    margin-left: -130px;\n    position: absolute;\n    border-radius: 50%;\n}\n.eyes{\n    background-color: #ffffff;\n    border: 2px solid #293948;\n    height: 90px;\n    width: 75px;\n    position: absolute;\n    left: 50%;\n    margin-left: -37px;\n    top: 30px;\n    border-radius: 60% 60% 60% 60% / 70% 70% 50% 50%\n}\n.eyes.left{\n    transform: translateX(-36px)rotate(15deg)\n}\n.eyes.right{\n    transform: translateX(36px)rotate(-15deg);\n}\n.eyesBlack{\n    background-color: black;\n    position: absolute;\n    height: 40px;\n    width: 30px;\n    border-radius:50%;\n    top: 20px;\n}\n.eyesBlack.left{\n    right: 2px;\n    transform: rotate(-15deg);\n}\n.eyesBlack.right{\n    left: 2px;\n    transform: rotate(15deg);\n}\n.eyesBlack.left::before{\n    content: '';\n    display: block;\n    background-color: #fbfbfb;\n    width: 15px;\n    height: 20px;\n    border-radius:50%;\n    position: absolute;\n    right: 5px;\n    top: 10px;\n}\n.eyesBlack.right::before{\n    content: '';\n    display: block;\n    background-color: #fbfbfb;\n    width: 15px;\n    height: 20px;\n    border-radius:50%;\n    position: absolute;\n    left: 5px;\n    top: 10px;\n}\n.nose{\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    border: 2px solid black;\n    background-color: #fa5f6b;\n    border-radius: 50%;\n    left: 50%;\n    margin-left: -25px;\n    top: 307px;\n}\n.black{\n    position: absolute;\n    width: 2px;\n    height: 130px;\n    background-color: #353638;\n    left: 50%;\n    margin-left: -1px;\n    top: 357px;\n}\n.mouth{\n    position: absolute;\n    width: 200px;\n    height: 90px;\n    border: 2px solid black;\n    left: 50%;\n    margin-left: -100px;\n    border-top: none;\n    border-radius: 0 0 50% 50%/0 0 100% 100%;\n    top: 400px;\n}\n.beard{\n    position: absolute;\n    width: 100px;\n    height: 150px;\n    left: 50%;\n    margin-left: -50px;\n    top: 340px;\n\n}\n.beard.left{\n    transform: translateX(-75px);\n}\n.beard.right{\n    transform: translateX(75px) ;\n}\n.beard>div{\n    margin: 30px 0;\n    border-bottom: 2px solid black;\n}\n.lFirst{\n    transform: rotate(15deg);\n}\n.rFirst{\n    transform: rotate(-15deg);\n}\n.lThird{\n    transform: rotate(-10deg);\n}\n.rThird{\n    transform: rotate(10deg);\n}\n.bellTape {\n    position: absolute;\n    width: 200px;\n    height: 25px;\n    border: 2px solid black ;\n    left: 50%;\n    margin-left: -100px;\n    top: 505px;\n    border-radius: 50px;\n    background-color: #f46773;\n}\n.bell{\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    border: 2px solid black;\n    left: 50%;\n    margin-left: -15px;\n    border-radius: 50%;\n    background-color: #f6db84;\n    overflow: hidden;\n}\n.bell .line{\n    border-bottom: 2px solid black;\n    margin-top: 5px;\n}\n.bell .circle{\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    border: 2px solid black;\n    border-radius: 50%;\n    left: 50%;\n    margin-left: -7px;\n    transform: translateY(1px);\n}\n.bell .circle::after {\n    content: '';\n    display: block;\n    position: absolute;\n    height: 20px;\n    border: 1px solid black;\n    background-color: black ;\n    top: 10px;\n    left: 4px;\n}\n@keyframes wave {\n    0% {\n        transform: rotate(0deg);\n    }\n    33% {\n        transform: rotate(5deg);\n    }\n    66% {\n        transform: rotate(-5deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n.bell:hover{\n    transform-origin: 50% 100%;\n    animation: wave 300ms infinite linear;\n}\n";
var _default = string;
exports.default = _default;
},{}],"text.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  n: 1,
  time: 100,
  events: {
    '#btnPlay': 'play',
    //定义的时候不能使用player.play 等 一开始的player是一个undefined
    '#btnPause': 'pause',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; //用键驱除值

        document.querySelector(key).onclick = player[value]; //player[value]相当于player.value
      }
    }
  },
  run: function run() {
    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.n += 1;
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time); //setInterval(()=>{run()},time)和setInterval(run,time)等价 除非run返回一个函数不然不能加括号
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css":"css.js"}],"C:/Users/viaby/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58967" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/viaby/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","text.js"], null)
//# sourceMappingURL=/text.89361752.js.map