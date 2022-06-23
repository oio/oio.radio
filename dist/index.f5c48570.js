// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4qavH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe27fe52f5c48570";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8ZNvh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _staticGif = require("./ass/static.gif");
var _staticGifDefault = parcelHelpers.interopDefault(_staticGif);
var _papaparse = require("papaparse");
var _papaparseDefault = parcelHelpers.interopDefault(_papaparse);
// ██     ██  █████  ██████  ███    ██ ██ ███    ██  ██████
// ██     ██ ██   ██ ██   ██ ████   ██ ██ ████   ██ ██
// ██  █  ██ ███████ ██████  ██ ██  ██ ██ ██ ██  ██ ██   ███
// ██ ███ ██ ██   ██ ██   ██ ██  ██ ██ ██ ██  ██ ██ ██    ██
//  ███ ███  ██   ██ ██   ██ ██   ████ ██ ██   ████  ██████
// 🔑 🙅🏻‍♀️ API keys not included
var _keysJs = require("./keys.js");
// get your own keys from giphy API
// https://developers.giphy.com/
// create multiple accounts and get 4/5 different keys
// so we don't reach the API limit
// then create a "keys.js" file in this folder
// with just this content
//
//  export const keys = [
//    "q2Yzkz...",
//    "cqIxo6..."
//  ]
let on = false;
let counter = 0;
let tag = "hypnotic";
document.addEventListener("DOMContentLoaded", function(event) {
    (0, _papaparseDefault.default).parse("https://docs.google.com/spreadsheets/d/1bqQ9ULoLgHO60ZNRf6ULOkCkLLI56Gak8a2AVL5_P0Y/pub?output=csv", {
        download: true,
        header: true,
        complete: function(results) {
            const data = results.data;
            const sheet = data[0];
            tag = sheet.gifsTag;
            if (sheet.POWER === "ON") on = true;
            if (on) {
                newGif();
                document.getElementById("off").remove();
                document.querySelector("#on h1 a").innerHTML = sheet.header;
                document.querySelector("#on p").innerHTML = sheet.subtitle;
                document.querySelector("#on pre").innerHTML = sheet.subtext;
                document.querySelector("audio").setAttribute("src", "https://stream.oio.radio/stream");
            } else {
                document.getElementById("on").remove();
                document.querySelector("#off p").innerHTML = sheet.offMessage;
                document.querySelector("#off pre").innerHTML = sheet.offSubMessage;
            }
            document.querySelector(".all").style.opacity = 1;
        }
    });
    // Initiate gifLoop for set interval
    var refresh;
    // Duration count in seconds
    const duration = 5000;
    // Giphy API defaults
    const giphy = {
        baseURL: "https://api.giphy.com/v1/gifs/",
        apiKey: (0, _keysJs.keys)[counter],
        tag: tag,
        type: "random",
        rating: "pg-13"
    };
    let newGif = ()=>{
        let key = (0, _keysJs.keys)[counter % (0, _keysJs.keys).length];
        let giphyURL = encodeURI(giphy.baseURL + giphy.type + "?api_key=" + key + "&tag=" + tag + "&rating=" + giphy.rating);
        console.log(giphyURL);
        fetch(giphyURL).then((res)=>res.json()).then((out)=>{
            renderGif(out.data);
        }).catch((err)=>{
            throw err;
        });
    };
    // Display Gif in gif wrap container
    var renderGif = (_giphy)=>{
        // Set gif as bg image
        document.querySelector(".channel").style.backgroundImage = //   "url('" + _giphy.image_original_url + "')";
        "url('" + _giphy.images.original.url + "')";
        // Start duration countdown
        refreshRate();
    };
    // Call for new gif after duration
    var refreshRate = ()=>{
        // Reset set intervals
        clearInterval(refresh);
        refresh = setInterval(function() {
            counter++;
            // Call Giphy API for new gif
            if (counter % 2 == 0) newGif();
            else document.querySelector(".channel").style.backgroundImage = "url('" + `${0, _staticGifDefault.default}` + "')";
        }, duration);
    };
// document.body.onclick = newGif
});

},{"./ass/static.gif":"grS7C","./keys.js":"33z1T","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","papaparse":"5w3wE"}],"grS7C":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("lORN7") + "static.8a1825a5.gif" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"33z1T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keys", ()=>keys);
const keys = [
    // your keys here
    "lA8GMp2G0BXaD50f5ksFyQqpzGasMrUl",
    "cqIxo6l4eeaYMkLcZPGJnQdMoP5V4zWT",
    "ukNYGeEVE3lvQjxZglDghcifIOyKCCHc",
    "5MFUOWfllMf4uBQSdt9EU5h3GfA5bTl2", 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5w3wE":[function(require,module,exports) {
/* @license
Papa Parse
v5.3.2
https://github.com/mholt/PapaParse
License: MIT
*/ !function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : module.exports = t();
}(this, function s1() {
    "use strict";
    var f1 = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== f1 ? f1 : {};
    var n1 = !f1.document && !!f1.postMessage, o1 = n1 && /blob:/i.test((f1.location || {}).protocol), a1 = {}, h1 = 0, b1 = {
        parse: function(e1, t1) {
            var i2 = (t1 = t1 || {}).dynamicTyping || !1;
            M(i2) && (t1.dynamicTypingFunction = i2, i2 = {});
            if (t1.dynamicTyping = i2, t1.transform = !!M(t1.transform) && t1.transform, t1.worker && b1.WORKERS_SUPPORTED) {
                var r1 = function() {
                    if (!b1.WORKERS_SUPPORTED) return !1;
                    var e = (i = f1.URL || f1.webkitURL || null, r = s1.toString(), b1.BLOB_URL || (b1.BLOB_URL = i.createObjectURL(new Blob([
                        "(",
                        r,
                        ")();"
                    ], {
                        type: "text/javascript"
                    })))), t = new f1.Worker(e);
                    var i, r;
                    return t.onmessage = _1, t.id = h1++, a1[t.id] = t;
                }();
                return r1.userStep = t1.step, r1.userChunk = t1.chunk, r1.userComplete = t1.complete, r1.userError = t1.error, t1.step = M(t1.step), t1.chunk = M(t1.chunk), t1.complete = M(t1.complete), t1.error = M(t1.error), delete t1.worker, void r1.postMessage({
                    input: e1,
                    config: t1,
                    workerId: r1.id
                });
            }
            var n = null;
            b1.NODE_STREAM_INPUT, "string" == typeof e1 ? n = t1.download ? new l1(t1) : new p1(t1) : !0 === e1.readable && M(e1.read) && M(e1.on) ? n = new g1(t1) : (f1.File && e1 instanceof File || e1 instanceof Object) && (n = new c1(t1));
            return n.stream(e1);
        },
        unparse: function(e2, t2) {
            var n2 = !1, _ = !0, m = ",", y = "\r\n", s2 = '"', a2 = s2 + s2, i3 = !1, r3 = null, o2 = !1;
            !function() {
                if ("object" != typeof t2) return;
                "string" != typeof t2.delimiter || b1.BAD_DELIMITERS.filter(function(e) {
                    return -1 !== t2.delimiter.indexOf(e);
                }).length || (m = t2.delimiter);
                ("boolean" == typeof t2.quotes || "function" == typeof t2.quotes || Array.isArray(t2.quotes)) && (n2 = t2.quotes);
                "boolean" != typeof t2.skipEmptyLines && "string" != typeof t2.skipEmptyLines || (i3 = t2.skipEmptyLines);
                "string" == typeof t2.newline && (y = t2.newline);
                "string" == typeof t2.quoteChar && (s2 = t2.quoteChar);
                "boolean" == typeof t2.header && (_ = t2.header);
                if (Array.isArray(t2.columns)) {
                    if (0 === t2.columns.length) throw new Error("Option columns is empty");
                    r3 = t2.columns;
                }
                void 0 !== t2.escapeChar && (a2 = t2.escapeChar + s2);
                ("boolean" == typeof t2.escapeFormulae || t2.escapeFormulae instanceof RegExp) && (o2 = t2.escapeFormulae instanceof RegExp ? t2.escapeFormulae : /^[=+\-@\t\r].*$/);
            }();
            var h2 = new RegExp(j(s2), "g");
            "string" == typeof e2 && (e2 = JSON.parse(e2));
            if (Array.isArray(e2)) {
                if (!e2.length || Array.isArray(e2[0])) return u2(null, e2, i3);
                if ("object" == typeof e2[0]) return u2(r3 || Object.keys(e2[0]), e2, i3);
            } else if ("object" == typeof e2) return "string" == typeof e2.data && (e2.data = JSON.parse(e2.data)), Array.isArray(e2.data) && (e2.fields || (e2.fields = e2.meta && e2.meta.fields || r3), e2.fields || (e2.fields = Array.isArray(e2.data[0]) ? e2.fields : "object" == typeof e2.data[0] ? Object.keys(e2.data[0]) : []), Array.isArray(e2.data[0]) || "object" == typeof e2.data[0] || (e2.data = [
                e2.data
            ])), u2(e2.fields || [], e2.data || [], i3);
            throw new Error("Unable to serialize unrecognized input");
            function u2(e, t, i) {
                var r = "";
                "string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t));
                var n = Array.isArray(e) && 0 < e.length, s = !Array.isArray(t[0]);
                if (n && _) {
                    for(var a = 0; a < e.length; a++)0 < a && (r += m), r += v(e[a], a);
                    0 < t.length && (r += y);
                }
                for(var o = 0; o < t.length; o++){
                    var h = n ? e.length : t[o].length, u = !1, f = n ? 0 === Object.keys(t[o]).length : 0 === t[o].length;
                    if (i && !n && (u = "greedy" === i ? "" === t[o].join("").trim() : 1 === t[o].length && 0 === t[o][0].length), "greedy" === i && n) {
                        for(var d = [], l = 0; l < h; l++){
                            var c = s ? e[l] : l;
                            d.push(t[o][c]);
                        }
                        u = "" === d.join("").trim();
                    }
                    if (!u) {
                        for(var p = 0; p < h; p++){
                            0 < p && !f && (r += m);
                            var g = n && s ? e[p] : p;
                            r += v(t[o][g], p);
                        }
                        o < t.length - 1 && (!i || 0 < h && !f) && (r += y);
                    }
                }
                return r;
            }
            function v(e3, t3) {
                if (null == e3) return "";
                if (e3.constructor === Date) return JSON.stringify(e3).slice(1, 25);
                var i4 = !1;
                o2 && "string" == typeof e3 && o2.test(e3) && (e3 = "'" + e3, i4 = !0);
                var r = e3.toString().replace(h2, a2);
                return (i4 = i4 || !0 === n2 || "function" == typeof n2 && n2(e3, t3) || Array.isArray(n2) && n2[t3] || function(e, t) {
                    for(var i = 0; i < t.length; i++)if (-1 < e.indexOf(t[i])) return !0;
                    return !1;
                }(r, b1.BAD_DELIMITERS) || -1 < r.indexOf(m) || " " === r.charAt(0) || " " === r.charAt(r.length - 1)) ? s2 + r + s2 : r;
            }
        }
    };
    if (b1.RECORD_SEP = String.fromCharCode(30), b1.UNIT_SEP = String.fromCharCode(31), b1.BYTE_ORDER_MARK = "\uFEFF", b1.BAD_DELIMITERS = [
        "\r",
        "\n",
        '"',
        b1.BYTE_ORDER_MARK
    ], b1.WORKERS_SUPPORTED = !n1 && !!f1.Worker, b1.NODE_STREAM_INPUT = 1, b1.LocalChunkSize = 10485760, b1.RemoteChunkSize = 5242880, b1.DefaultDelimiter = ",", b1.Parser = E1, b1.ParserHandle = i1, b1.NetworkStreamer = l1, b1.FileStreamer = c1, b1.StringStreamer = p1, b1.ReadableStreamStreamer = g1, f1.jQuery) {
        var d1 = f1.jQuery;
        d1.fn.parse = function(o) {
            var i5 = o.config || {}, h = [];
            return this.each(function(e) {
                if (!("INPUT" === d1(this).prop("tagName").toUpperCase() && "file" === d1(this).attr("type").toLowerCase() && f1.FileReader) || !this.files || 0 === this.files.length) return !0;
                for(var t = 0; t < this.files.length; t++)h.push({
                    file: this.files[t],
                    inputElem: this,
                    instanceConfig: d1.extend({}, i5)
                });
            }), e4(), this;
            function e4() {
                if (0 !== h.length) {
                    var e5, t, i, r, n = h[0];
                    if (M(o.before)) {
                        var s = o.before(n.file, n.inputElem);
                        if ("object" == typeof s) {
                            if ("abort" === s.action) return e5 = "AbortError", t = n.file, i = n.inputElem, r = s.reason, void (M(o.error) && o.error({
                                name: e5
                            }, t, i, r));
                            if ("skip" === s.action) return void u();
                            "object" == typeof s.config && (n.instanceConfig = d1.extend(n.instanceConfig, s.config));
                        } else if ("skip" === s) return void u();
                    }
                    var a = n.instanceConfig.complete;
                    n.instanceConfig.complete = function(e) {
                        M(a) && a(e, n.file, n.inputElem), u();
                    }, b1.parse(n.file, n.instanceConfig);
                } else M(o.complete) && o.complete();
            }
            function u() {
                h.splice(0, 1), e4();
            }
        };
    }
    function u1(e7) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
            data: [],
            errors: [],
            meta: {}
        }, (function(e) {
            var t = w1(e);
            t.chunkSize = parseInt(t.chunkSize), e.step || e.chunk || (t.chunkSize = null);
            this._handle = new i1(t), (this._handle.streamer = this)._config = t;
        }).call(this, e7), this.parseChunk = function(e, t) {
            if (this.isFirstChunk && M(this._config.beforeFirstChunk)) {
                var i = this._config.beforeFirstChunk(e);
                void 0 !== i && (e = i);
            }
            this.isFirstChunk = !1, this._halted = !1;
            var r = this._partialLine + e;
            this._partialLine = "";
            var n = this._handle.parse(r, this._baseIndex, !this._finished);
            if (!this._handle.paused() && !this._handle.aborted()) {
                var s = n.meta.cursor;
                this._finished || (this._partialLine = r.substring(s - this._baseIndex), this._baseIndex = s), n && n.data && (this._rowCount += n.data.length);
                var a = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                if (o1) f1.postMessage({
                    results: n,
                    workerId: b1.WORKER_ID,
                    finished: a
                });
                else if (M(this._config.chunk) && !t) {
                    if (this._config.chunk(n, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
                    n = void 0, this._completeResults = void 0;
                }
                return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(n.data), this._completeResults.errors = this._completeResults.errors.concat(n.errors), this._completeResults.meta = n.meta), this._completed || !a || !M(this._config.complete) || n && n.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), a || n && n.meta.paused || this._nextChunk(), n;
            }
            this._halted = !0;
        }, this._sendError = function(e) {
            M(this._config.error) ? this._config.error(e) : o1 && this._config.error && f1.postMessage({
                workerId: b1.WORKER_ID,
                error: e,
                finished: !1
            });
        };
    }
    function l1(e8) {
        var r;
        (e8 = e8 || {}).chunkSize || (e8.chunkSize = b1.RemoteChunkSize), u1.call(this, e8), this._nextChunk = n1 ? function() {
            this._readChunk(), this._chunkLoaded();
        } : function() {
            this._readChunk();
        }, this.stream = function(e) {
            this._input = e, this._nextChunk();
        }, this._readChunk = function() {
            if (this._finished) this._chunkLoaded();
            else {
                if (r = new XMLHttpRequest, this._config.withCredentials && (r.withCredentials = this._config.withCredentials), n1 || (r.onload = v1(this._chunkLoaded, this), r.onerror = v1(this._chunkError, this)), r.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !n1), this._config.downloadRequestHeaders) {
                    var e = this._config.downloadRequestHeaders;
                    for(var t in e)r.setRequestHeader(t, e[t]);
                }
                if (this._config.chunkSize) {
                    var i = this._start + this._config.chunkSize - 1;
                    r.setRequestHeader("Range", "bytes=" + this._start + "-" + i);
                }
                try {
                    r.send(this._config.downloadRequestBody);
                } catch (e) {
                    this._chunkError(e.message);
                }
                n1 && 0 === r.status && this._chunkError();
            }
        }, this._chunkLoaded = function() {
            4 === r.readyState && (r.status < 200 || 400 <= r.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : r.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(e) {
                var t = e.getResponseHeader("Content-Range");
                if (null === t) return -1;
                return parseInt(t.substring(t.lastIndexOf("/") + 1));
            }(r), this.parseChunk(r.responseText)));
        }, this._chunkError = function(e) {
            var t = r.statusText || e;
            this._sendError(new Error(t));
        };
    }
    function c1(e9) {
        var r, n;
        (e9 = e9 || {}).chunkSize || (e9.chunkSize = b1.LocalChunkSize), u1.call(this, e9);
        var s = "undefined" != typeof FileReader;
        this.stream = function(e) {
            this._input = e, n = e.slice || e.webkitSlice || e.mozSlice, s ? ((r = new FileReader).onload = v1(this._chunkLoaded, this), r.onerror = v1(this._chunkError, this)) : r = new FileReaderSync, this._nextChunk();
        }, this._nextChunk = function() {
            this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
            var e = this._input;
            if (this._config.chunkSize) {
                var t = Math.min(this._start + this._config.chunkSize, this._input.size);
                e = n.call(e, this._start, t);
            }
            var i = r.readAsText(e, this._config.encoding);
            s || this._chunkLoaded({
                target: {
                    result: i
                }
            });
        }, this._chunkLoaded = function(e) {
            this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e.target.result);
        }, this._chunkError = function() {
            this._sendError(r.error);
        };
    }
    function p1(e10) {
        var i;
        u1.call(this, e10 = e10 || {}), this.stream = function(e) {
            return i = e, this._nextChunk();
        }, this._nextChunk = function() {
            if (!this._finished) {
                var e, t = this._config.chunkSize;
                return t ? (e = i.substring(0, t), i = i.substring(t)) : (e = i, i = ""), this._finished = !i, this.parseChunk(e);
            }
        };
    }
    function g1(e11) {
        u1.call(this, e11 = e11 || {});
        var t = [], i = !0, r = !1;
        this.pause = function() {
            u1.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
            u1.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(e) {
            this._input = e, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
            r && 1 === t.length && (this._finished = !0);
        }, this._nextChunk = function() {
            this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : i = !0;
        }, this._streamData = v1(function(e) {
            try {
                t.push("string" == typeof e ? e : e.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(t.shift()));
            } catch (e12) {
                this._streamError(e12);
            }
        }, this), this._streamError = v1(function(e) {
            this._streamCleanUp(), this._sendError(e);
        }, this), this._streamEnd = v1(function() {
            this._streamCleanUp(), r = !0, this._streamData("");
        }, this), this._streamCleanUp = v1(function() {
            this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
    }
    function i1(m) {
        var a3, o3, h3, r4 = Math.pow(2, 53), n3 = -r4, s3 = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, u3 = /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/, t4 = this, i6 = 0, f2 = 0, d2 = !1, e13 = !1, l2 = [], c2 = {
            data: [],
            errors: [],
            meta: {}
        };
        if (M(m.step)) {
            var p = m.step;
            m.step = function(e) {
                if (c2 = e, _2()) g2();
                else {
                    if (g2(), 0 === c2.data.length) return;
                    i6 += e.data.length, m.preview && i6 > m.preview ? o3.abort() : (c2.data = c2.data[0], p(c2, t4));
                }
            };
        }
        function y(e) {
            return "greedy" === m.skipEmptyLines ? "" === e.join("").trim() : 1 === e.length && 0 === e[0].length;
        }
        function g2() {
            return c2 && h3 && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + b1.DefaultDelimiter + "'"), h3 = !1), m.skipEmptyLines && (c2.data = c2.data.filter(function(e) {
                return !y(e);
            })), _2() && function() {
                if (!c2) return;
                function e14(e, t) {
                    M(m.transformHeader) && (e = m.transformHeader(e, t)), l2.push(e);
                }
                if (Array.isArray(c2.data[0])) {
                    for(var t5 = 0; _2() && t5 < c2.data.length; t5++)c2.data[t5].forEach(e14);
                    c2.data.splice(0, 1);
                } else c2.data.forEach(e14);
            }(), function() {
                if (!c2 || !m.header && !m.dynamicTyping && !m.transform) return c2;
                function e15(e, t) {
                    var i, r = m.header ? {} : [];
                    for(i = 0; i < e.length; i++){
                        var n = i, s = e[i];
                        m.header && (n = i >= l2.length ? "__parsed_extra" : l2[i]), m.transform && (s = m.transform(s, n)), s = v(n, s), "__parsed_extra" === n ? (r[n] = r[n] || [], r[n].push(s)) : r[n] = s;
                    }
                    return m.header && (i > l2.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + l2.length + " fields but parsed " + i, f2 + t) : i < l2.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + l2.length + " fields but parsed " + i, f2 + t)), r;
                }
                var t6 = 1;
                !c2.data.length || Array.isArray(c2.data[0]) ? (c2.data = c2.data.map(e15), t6 = c2.data.length) : c2.data = e15(c2.data, 0);
                m.header && c2.meta && (c2.meta.fields = l2);
                return f2 += t6, c2;
            }();
        }
        function _2() {
            return m.header && 0 === l2.length;
        }
        function v(e16, t7) {
            var i;
            return i = e16, m.dynamicTypingFunction && void 0 === m.dynamicTyping[i] && (m.dynamicTyping[i] = m.dynamicTypingFunction(i)), !0 === (m.dynamicTyping[i] || m.dynamicTyping) ? "true" === t7 || "TRUE" === t7 || "false" !== t7 && "FALSE" !== t7 && (function(e) {
                if (s3.test(e)) {
                    var t = parseFloat(e);
                    if (n3 < t && t < r4) return !0;
                }
                return !1;
            }(t7) ? parseFloat(t7) : u3.test(t7) ? new Date(t7) : "" === t7 ? null : t7) : t7;
        }
        function k(e, t, i, r) {
            var n = {
                type: e,
                code: t,
                message: i
            };
            void 0 !== r && (n.row = r), c2.errors.push(n);
        }
        this.parse = function(e17, t8, i7) {
            var r5 = m.quoteChar || '"';
            if (m.newline || (m.newline = function(e, t) {
                e = e.substring(0, 1048576);
                var i = new RegExp(j(t) + "([^]*?)" + j(t), "gm"), r = (e = e.replace(i, "")).split("\r"), n = e.split("\n"), s = 1 < n.length && n[0].length < r[0].length;
                if (1 === r.length || s) return "\n";
                for(var a = 0, o = 0; o < r.length; o++)"\n" === r[o][0] && a++;
                return a >= r.length / 2 ? "\r\n" : "\r";
            }(e17, r5)), h3 = !1, m.delimiter) M(m.delimiter) && (m.delimiter = m.delimiter(e17), c2.meta.delimiter = m.delimiter);
            else {
                var n4 = function(e, t, i, r, n) {
                    var s, a, o, h;
                    n = n || [
                        ",",
                        "	",
                        "|",
                        ";",
                        b1.RECORD_SEP,
                        b1.UNIT_SEP
                    ];
                    for(var u = 0; u < n.length; u++){
                        var f = n[u], d = 0, l = 0, c = 0;
                        o = void 0;
                        for(var p = new E1({
                            comments: r,
                            delimiter: f,
                            newline: t,
                            preview: 10
                        }).parse(e), g = 0; g < p.data.length; g++)if (i && y(p.data[g])) c++;
                        else {
                            var _ = p.data[g].length;
                            l += _, void 0 !== o ? 0 < _ && (d += Math.abs(_ - o), o = _) : o = _;
                        }
                        0 < p.data.length && (l /= p.data.length - c), (void 0 === a || d <= a) && (void 0 === h || h < l) && 1.99 < l && (a = d, s = f, h = l);
                    }
                    return {
                        successful: !!(m.delimiter = s),
                        bestDelimiter: s
                    };
                }(e17, m.newline, m.skipEmptyLines, m.comments, m.delimitersToGuess);
                n4.successful ? m.delimiter = n4.bestDelimiter : (h3 = !0, m.delimiter = b1.DefaultDelimiter), c2.meta.delimiter = m.delimiter;
            }
            var s4 = w1(m);
            return m.preview && m.header && s4.preview++, a3 = e17, o3 = new E1(s4), c2 = o3.parse(a3, t8, i7), g2(), d2 ? {
                meta: {
                    paused: !0
                }
            } : c2 || {
                meta: {
                    paused: !1
                }
            };
        }, this.paused = function() {
            return d2;
        }, this.pause = function() {
            d2 = !0, o3.abort(), a3 = M(m.chunk) ? "" : a3.substring(o3.getCharIndex());
        }, this.resume = function() {
            t4.streamer._halted ? (d2 = !1, t4.streamer.parseChunk(a3, !0)) : setTimeout(t4.resume, 3);
        }, this.aborted = function() {
            return e13;
        }, this.abort = function() {
            e13 = !0, o3.abort(), c2.meta.aborted = !0, M(m.complete) && m.complete(c2), a3 = "";
        };
    }
    function j(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function E1(e18) {
        var S, O = (e18 = e18 || {}).delimiter, x = e18.newline, I = e18.comments, T = e18.step, D = e18.preview, A = e18.fastMode, L = S = void 0 === e18.quoteChar || null === e18.quoteChar ? '"' : e18.quoteChar;
        if (void 0 !== e18.escapeChar && (L = e18.escapeChar), ("string" != typeof O || -1 < b1.BAD_DELIMITERS.indexOf(O)) && (O = ","), I === O) throw new Error("Comment character same as delimiter");
        !0 === I ? I = "#" : ("string" != typeof I || -1 < b1.BAD_DELIMITERS.indexOf(I)) && (I = !1), "\n" !== x && "\r" !== x && "\r\n" !== x && (x = "\n");
        var F = 0, z = !1;
        this.parse = function(r, t9, i8) {
            if ("string" != typeof r) throw new Error("Input must be a string");
            var n = r.length, e19 = O.length, s = x.length, a = I.length, o = M(T), h = [], u = [], f = [], d = F = 0;
            if (!r) return C();
            if (A || !1 !== A && -1 === r.indexOf(S)) {
                for(var l = r.split(x), c = 0; c < l.length; c++){
                    if (f = l[c], F += f.length, c !== l.length - 1) F += x.length;
                    else if (i8) return C();
                    if (!I || f.substring(0, a) !== I) {
                        if (o) {
                            if (h = [], k(f.split(O)), R(), z) return C();
                        } else k(f.split(O));
                        if (D && D <= c) return h = h.slice(0, D), C(!0);
                    }
                }
                return C();
            }
            for(var p = r.indexOf(O, F), g = r.indexOf(x, F), _ = new RegExp(j(L) + j(S), "g"), m = r.indexOf(S, F);;)if (r[F] !== S) {
                if (I && 0 === f.length && r.substring(F, F + a) === I) {
                    if (-1 === g) return C();
                    F = g + s, g = r.indexOf(x, F), p = r.indexOf(O, F);
                } else if (-1 !== p && (p < g || -1 === g)) f.push(r.substring(F, p)), F = p + e19, p = r.indexOf(O, F);
                else {
                    if (-1 === g) break;
                    if (f.push(r.substring(F, g)), w(g + s), o && (R(), z)) return C();
                    if (D && h.length >= D) return C(!0);
                }
            } else for(m = F, F++;;){
                if (-1 === (m = r.indexOf(S, m + 1))) return i8 || u.push({
                    type: "Quotes",
                    code: "MissingQuotes",
                    message: "Quoted field unterminated",
                    row: h.length,
                    index: F
                }), E();
                if (m === n - 1) return E(r.substring(F, m).replace(_, S));
                if (S !== L || r[m + 1] !== L) {
                    if (S === L || 0 === m || r[m - 1] !== L) {
                        -1 !== p && p < m + 1 && (p = r.indexOf(O, m + 1)), -1 !== g && g < m + 1 && (g = r.indexOf(x, m + 1));
                        var y = b(-1 === g ? p : Math.min(p, g));
                        if (r.substr(m + 1 + y, e19) === O) {
                            f.push(r.substring(F, m).replace(_, S)), r[F = m + 1 + y + e19] !== S && (m = r.indexOf(S, F)), p = r.indexOf(O, F), g = r.indexOf(x, F);
                            break;
                        }
                        var v = b(g);
                        if (r.substring(m + 1 + v, m + 1 + v + s) === x) {
                            if (f.push(r.substring(F, m).replace(_, S)), w(m + 1 + v + s), p = r.indexOf(O, F), m = r.indexOf(S, F), o && (R(), z)) return C();
                            if (D && h.length >= D) return C(!0);
                            break;
                        }
                        u.push({
                            type: "Quotes",
                            code: "InvalidQuotes",
                            message: "Trailing quote on quoted field is malformed",
                            row: h.length,
                            index: F
                        }), m++;
                    }
                } else m++;
            }
            return E();
            function k(e) {
                h.push(e), d = F;
            }
            function b(e) {
                var t = 0;
                if (-1 !== e) {
                    var i = r.substring(m + 1, e);
                    i && "" === i.trim() && (t = i.length);
                }
                return t;
            }
            function E(e) {
                return i8 || (void 0 === e && (e = r.substring(F)), f.push(e), F = n, k(f), o && R()), C();
            }
            function w(e) {
                F = e, k(f), f = [], g = r.indexOf(x, F);
            }
            function C(e) {
                return {
                    data: h,
                    errors: u,
                    meta: {
                        delimiter: O,
                        linebreak: x,
                        aborted: z,
                        truncated: !!e,
                        cursor: d + (t9 || 0)
                    }
                };
            }
            function R() {
                T(C()), h = [], u = [];
            }
        }, this.abort = function() {
            z = !0;
        }, this.getCharIndex = function() {
            return F;
        };
    }
    function _1(e) {
        var t = e.data, i = a1[t.workerId], r = !1;
        if (t.error) i.userError(t.error, t.file);
        else if (t.results && t.results.data) {
            var n = {
                abort: function() {
                    r = !0, m1(t.workerId, {
                        data: [],
                        errors: [],
                        meta: {
                            aborted: !0
                        }
                    });
                },
                pause: y1,
                resume: y1
            };
            if (M(i.userStep)) {
                for(var s = 0; s < t.results.data.length && (i.userStep({
                    data: t.results.data[s],
                    errors: t.results.errors,
                    meta: t.results.meta
                }, n), !r); s++);
                delete t.results;
            } else M(i.userChunk) && (i.userChunk(t.results, n, t.file), delete t.results);
        }
        t.finished && !r && m1(t.workerId, t.results);
    }
    function m1(e, t) {
        var i = a1[e];
        M(i.userComplete) && i.userComplete(t), i.terminate(), delete a1[e];
    }
    function y1() {
        throw new Error("Not implemented.");
    }
    function w1(e) {
        if ("object" != typeof e || null === e) return e;
        var t = Array.isArray(e) ? [] : {};
        for(var i in e)t[i] = w1(e[i]);
        return t;
    }
    function v1(e, t) {
        return function() {
            e.apply(t, arguments);
        };
    }
    function M(e) {
        return "function" == typeof e;
    }
    return o1 && (f1.onmessage = function(e) {
        var t = e.data;
        void 0 === b1.WORKER_ID && t && (b1.WORKER_ID = t.workerId);
        if ("string" == typeof t.input) f1.postMessage({
            workerId: b1.WORKER_ID,
            results: b1.parse(t.input, t.config),
            finished: !0
        });
        else if (f1.File && t.input instanceof File || t.input instanceof Object) {
            var i = b1.parse(t.input, t.config);
            i && f1.postMessage({
                workerId: b1.WORKER_ID,
                results: i,
                finished: !0
            });
        }
    }), (l1.prototype = Object.create(u1.prototype)).constructor = l1, (c1.prototype = Object.create(u1.prototype)).constructor = c1, (p1.prototype = Object.create(p1.prototype)).constructor = p1, (g1.prototype = Object.create(u1.prototype)).constructor = g1, b1;
});

},{}]},["4qavH","8ZNvh"], "8ZNvh", "parcelRequire85fa")

//# sourceMappingURL=index.f5c48570.js.map
