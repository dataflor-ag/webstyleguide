import { jsx as J, jsxs as Be, Fragment as Ye } from "react/jsx-runtime";
import va from "react";
import { Box as sn, Tooltip as xa, Typography as ot, LinearProgress as ga } from "@mui/material";
import ha from "@emotion/styled";
import { CacheProvider as ya, Global as ba, ThemeContext as wa, css as ka, keyframes as _a } from "@emotion/react";
function Xe(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Ea = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xe
}, Symbol.toStringTag, { value: "Module" })), Sa = "$$material";
function V() {
  return V = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, V.apply(null, arguments);
}
function $e(e, t) {
  if (e == null) return {};
  var n = {};
  for (var a in e) if ({}.hasOwnProperty.call(e, a)) {
    if (t.includes(a)) continue;
    n[a] = e[a];
  }
  return n;
}
function Ta(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ee(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function a() {
      return this instanceof a ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var i = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(n, a, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), n;
}
var qt = { exports: {} }, st = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cn;
function Oa() {
  if (cn) return q;
  cn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, r = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function S(u) {
    if (typeof u == "object" && u !== null) {
      var D = u.$$typeof;
      switch (D) {
        case t:
          switch (u = u.type, u) {
            case c:
            case l:
            case a:
            case r:
            case i:
            case v:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case s:
                case m:
                case h:
                case b:
                case o:
                  return u;
                default:
                  return D;
              }
          }
        case n:
          return D;
      }
    }
  }
  function N(u) {
    return S(u) === l;
  }
  return q.AsyncMode = c, q.ConcurrentMode = l, q.ContextConsumer = s, q.ContextProvider = o, q.Element = t, q.ForwardRef = m, q.Fragment = a, q.Lazy = h, q.Memo = b, q.Portal = n, q.Profiler = r, q.StrictMode = i, q.Suspense = v, q.isAsyncMode = function(u) {
    return N(u) || S(u) === c;
  }, q.isConcurrentMode = N, q.isContextConsumer = function(u) {
    return S(u) === s;
  }, q.isContextProvider = function(u) {
    return S(u) === o;
  }, q.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === t;
  }, q.isForwardRef = function(u) {
    return S(u) === m;
  }, q.isFragment = function(u) {
    return S(u) === a;
  }, q.isLazy = function(u) {
    return S(u) === h;
  }, q.isMemo = function(u) {
    return S(u) === b;
  }, q.isPortal = function(u) {
    return S(u) === n;
  }, q.isProfiler = function(u) {
    return S(u) === r;
  }, q.isStrictMode = function(u) {
    return S(u) === i;
  }, q.isSuspense = function(u) {
    return S(u) === v;
  }, q.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === a || u === l || u === r || u === i || u === v || u === f || typeof u == "object" && u !== null && (u.$$typeof === h || u.$$typeof === b || u.$$typeof === o || u.$$typeof === s || u.$$typeof === m || u.$$typeof === p || u.$$typeof === w || u.$$typeof === A || u.$$typeof === d);
  }, q.typeOf = S, q;
}
var W = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pn;
function ja() {
  return pn || (pn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, r = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function S(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === a || g === l || g === r || g === i || g === v || g === f || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === b || g.$$typeof === o || g.$$typeof === s || g.$$typeof === m || g.$$typeof === p || g.$$typeof === w || g.$$typeof === A || g.$$typeof === d);
    }
    function N(g) {
      if (typeof g == "object" && g !== null) {
        var ce = g.$$typeof;
        switch (ce) {
          case t:
            var k = g.type;
            switch (k) {
              case c:
              case l:
              case a:
              case r:
              case i:
              case v:
                return k;
              default:
                var Ce = k && k.$$typeof;
                switch (Ce) {
                  case s:
                  case m:
                  case h:
                  case b:
                  case o:
                    return Ce;
                  default:
                    return ce;
                }
            }
          case n:
            return ce;
        }
      }
    }
    var u = c, D = l, $ = s, me = o, ke = t, ye = m, K = a, Q = h, ve = b, ie = n, Te = r, ne = i, be = v, Oe = !1;
    function Pe(g) {
      return Oe || (Oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(g) || N(g) === c;
    }
    function x(g) {
      return N(g) === l;
    }
    function y(g) {
      return N(g) === s;
    }
    function j(g) {
      return N(g) === o;
    }
    function T(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function _(g) {
      return N(g) === m;
    }
    function P(g) {
      return N(g) === a;
    }
    function E(g) {
      return N(g) === h;
    }
    function O(g) {
      return N(g) === b;
    }
    function C(g) {
      return N(g) === n;
    }
    function M(g) {
      return N(g) === r;
    }
    function R(g) {
      return N(g) === i;
    }
    function ee(g) {
      return N(g) === v;
    }
    W.AsyncMode = u, W.ConcurrentMode = D, W.ContextConsumer = $, W.ContextProvider = me, W.Element = ke, W.ForwardRef = ye, W.Fragment = K, W.Lazy = Q, W.Memo = ve, W.Portal = ie, W.Profiler = Te, W.StrictMode = ne, W.Suspense = be, W.isAsyncMode = Pe, W.isConcurrentMode = x, W.isContextConsumer = y, W.isContextProvider = j, W.isElement = T, W.isForwardRef = _, W.isFragment = P, W.isLazy = E, W.isMemo = O, W.isPortal = C, W.isProfiler = M, W.isStrictMode = R, W.isSuspense = ee, W.isValidElementType = S, W.typeOf = N;
  }()), W;
}
var ln;
function qn() {
  return ln || (ln = 1, process.env.NODE_ENV === "production" ? st.exports = Oa() : st.exports = ja()), st.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Pt, dn;
function $a() {
  if (dn) return Pt;
  dn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function a(r) {
    if (r == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(r);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var r = new String("abc");
      if (r[5] = "de", Object.getOwnPropertyNames(r)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(o).map(function(m) {
        return o[m];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        l[m] = m;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Pt = i() ? Object.assign : function(r, o) {
    for (var s, c = a(r), l, m = 1; m < arguments.length; m++) {
      s = Object(arguments[m]);
      for (var v in s)
        t.call(s, v) && (c[v] = s[v]);
      if (e) {
        l = e(s);
        for (var f = 0; f < l.length; f++)
          n.call(s, l[f]) && (c[l[f]] = s[l[f]]);
      }
    }
    return c;
  }, Pt;
}
var Ct, fn;
function Vt() {
  if (fn) return Ct;
  fn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ct = e, Ct;
}
var Rt, un;
function Wn() {
  return un || (un = 1, Rt = Function.call.bind(Object.prototype.hasOwnProperty)), Rt;
}
var At, mn;
function Pa() {
  if (mn) return At;
  mn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Vt(), n = {}, a = Wn();
    e = function(r) {
      var o = "Warning: " + r;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(r, o, s, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in r)
        if (a(r, m)) {
          var v;
          try {
            if (typeof r[m] != "function") {
              var f = Error(
                (c || "React class") + ": " + s + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            v = r[m](o, m, c, s, null, t);
          } catch (h) {
            v = h;
          }
          if (v && !(v instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in n)) {
            n[v.message] = !0;
            var b = l ? l() : "";
            e(
              "Failed " + s + " type: " + v.message + (b ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, At = i, At;
}
var Mt, vn;
function Ca() {
  if (vn) return Mt;
  vn = 1;
  var e = qn(), t = $a(), n = Vt(), a = Wn(), i = Pa(), r = function() {
  };
  process.env.NODE_ENV !== "production" && (r = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Mt = function(s, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function v(x) {
      var y = x && (l && x[l] || x[m]);
      if (typeof y == "function")
        return y;
    }
    var f = "<<anonymous>>", b = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: A(),
      arrayOf: S,
      element: N(),
      elementType: u(),
      instanceOf: D,
      node: ye(),
      objectOf: me,
      oneOf: $,
      oneOfType: ke,
      shape: Q,
      exact: ve
    };
    function h(x, y) {
      return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
    }
    function d(x, y) {
      this.message = x, this.data = y && typeof y == "object" ? y : {}, this.stack = "";
    }
    d.prototype = Error.prototype;
    function p(x) {
      if (process.env.NODE_ENV !== "production")
        var y = {}, j = 0;
      function T(P, E, O, C, M, R, ee) {
        if (C = C || f, R = R || O, ee !== n) {
          if (c) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = C + ":" + O;
            !y[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (r(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + C + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), y[ce] = !0, j++);
          }
        }
        return E[O] == null ? P ? E[O] === null ? new d("The " + M + " `" + R + "` is marked as required " + ("in `" + C + "`, but its value is `null`.")) : new d("The " + M + " `" + R + "` is marked as required in " + ("`" + C + "`, but its value is `undefined`.")) : null : x(E, O, C, M, R);
      }
      var _ = T.bind(null, !1);
      return _.isRequired = T.bind(null, !0), _;
    }
    function w(x) {
      function y(j, T, _, P, E, O) {
        var C = j[T], M = ne(C);
        if (M !== x) {
          var R = be(C);
          return new d(
            "Invalid " + P + " `" + E + "` of type " + ("`" + R + "` supplied to `" + _ + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return p(y);
    }
    function A() {
      return p(o);
    }
    function S(x) {
      function y(j, T, _, P, E) {
        if (typeof x != "function")
          return new d("Property `" + E + "` of component `" + _ + "` has invalid PropType notation inside arrayOf.");
        var O = j[T];
        if (!Array.isArray(O)) {
          var C = ne(O);
          return new d("Invalid " + P + " `" + E + "` of type " + ("`" + C + "` supplied to `" + _ + "`, expected an array."));
        }
        for (var M = 0; M < O.length; M++) {
          var R = x(O, M, _, P, E + "[" + M + "]", n);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return p(y);
    }
    function N() {
      function x(y, j, T, _, P) {
        var E = y[j];
        if (!s(E)) {
          var O = ne(E);
          return new d("Invalid " + _ + " `" + P + "` of type " + ("`" + O + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return p(x);
    }
    function u() {
      function x(y, j, T, _, P) {
        var E = y[j];
        if (!e.isValidElementType(E)) {
          var O = ne(E);
          return new d("Invalid " + _ + " `" + P + "` of type " + ("`" + O + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return p(x);
    }
    function D(x) {
      function y(j, T, _, P, E) {
        if (!(j[T] instanceof x)) {
          var O = x.name || f, C = Pe(j[T]);
          return new d("Invalid " + P + " `" + E + "` of type " + ("`" + C + "` supplied to `" + _ + "`, expected ") + ("instance of `" + O + "`."));
        }
        return null;
      }
      return p(y);
    }
    function $(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? r(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : r("Invalid argument supplied to oneOf, expected an array.")), o;
      function y(j, T, _, P, E) {
        for (var O = j[T], C = 0; C < x.length; C++)
          if (h(O, x[C]))
            return null;
        var M = JSON.stringify(x, function(ee, g) {
          var ce = be(g);
          return ce === "symbol" ? String(g) : g;
        });
        return new d("Invalid " + P + " `" + E + "` of value `" + String(O) + "` " + ("supplied to `" + _ + "`, expected one of " + M + "."));
      }
      return p(y);
    }
    function me(x) {
      function y(j, T, _, P, E) {
        if (typeof x != "function")
          return new d("Property `" + E + "` of component `" + _ + "` has invalid PropType notation inside objectOf.");
        var O = j[T], C = ne(O);
        if (C !== "object")
          return new d("Invalid " + P + " `" + E + "` of type " + ("`" + C + "` supplied to `" + _ + "`, expected an object."));
        for (var M in O)
          if (a(O, M)) {
            var R = x(O, M, _, P, E + "." + M, n);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return p(y);
    }
    function ke(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && r("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var y = 0; y < x.length; y++) {
        var j = x[y];
        if (typeof j != "function")
          return r(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Oe(j) + " at index " + y + "."
          ), o;
      }
      function T(_, P, E, O, C) {
        for (var M = [], R = 0; R < x.length; R++) {
          var ee = x[R], g = ee(_, P, E, O, C, n);
          if (g == null)
            return null;
          g.data && a(g.data, "expectedType") && M.push(g.data.expectedType);
        }
        var ce = M.length > 0 ? ", expected one of type [" + M.join(", ") + "]" : "";
        return new d("Invalid " + O + " `" + C + "` supplied to " + ("`" + E + "`" + ce + "."));
      }
      return p(T);
    }
    function ye() {
      function x(y, j, T, _, P) {
        return ie(y[j]) ? null : new d("Invalid " + _ + " `" + P + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return p(x);
    }
    function K(x, y, j, T, _) {
      return new d(
        (x || "React class") + ": " + y + " type `" + j + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _ + "`."
      );
    }
    function Q(x) {
      function y(j, T, _, P, E) {
        var O = j[T], C = ne(O);
        if (C !== "object")
          return new d("Invalid " + P + " `" + E + "` of type `" + C + "` " + ("supplied to `" + _ + "`, expected `object`."));
        for (var M in x) {
          var R = x[M];
          if (typeof R != "function")
            return K(_, P, E, M, be(R));
          var ee = R(O, M, _, P, E + "." + M, n);
          if (ee)
            return ee;
        }
        return null;
      }
      return p(y);
    }
    function ve(x) {
      function y(j, T, _, P, E) {
        var O = j[T], C = ne(O);
        if (C !== "object")
          return new d("Invalid " + P + " `" + E + "` of type `" + C + "` " + ("supplied to `" + _ + "`, expected `object`."));
        var M = t({}, j[T], x);
        for (var R in M) {
          var ee = x[R];
          if (a(x, R) && typeof ee != "function")
            return K(_, P, E, R, be(ee));
          if (!ee)
            return new d(
              "Invalid " + P + " `" + E + "` key `" + R + "` supplied to `" + _ + "`.\nBad object: " + JSON.stringify(j[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var g = ee(O, R, _, P, E + "." + R, n);
          if (g)
            return g;
        }
        return null;
      }
      return p(y);
    }
    function ie(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(ie);
          if (x === null || s(x))
            return !0;
          var y = v(x);
          if (y) {
            var j = y.call(x), T;
            if (y !== x.entries) {
              for (; !(T = j.next()).done; )
                if (!ie(T.value))
                  return !1;
            } else
              for (; !(T = j.next()).done; ) {
                var _ = T.value;
                if (_ && !ie(_[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Te(x, y) {
      return x === "symbol" ? !0 : y ? y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && y instanceof Symbol : !1;
    }
    function ne(x) {
      var y = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : Te(y, x) ? "symbol" : y;
    }
    function be(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var y = ne(x);
      if (y === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return y;
    }
    function Oe(x) {
      var y = be(x);
      switch (y) {
        case "array":
        case "object":
          return "an " + y;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + y;
        default:
          return y;
      }
    }
    function Pe(x) {
      return !x.constructor || !x.constructor.name ? f : x.constructor.name;
    }
    return b.checkPropTypes = i, b.resetWarningCache = i.resetWarningCache, b.PropTypes = b, b;
  }, Mt;
}
var zt, xn;
function Ra() {
  if (xn) return zt;
  xn = 1;
  var e = Vt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, zt = function() {
    function a(o, s, c, l, m, v) {
      if (v !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    a.isRequired = a;
    function i() {
      return a;
    }
    var r = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: i,
      element: a,
      elementType: a,
      instanceOf: i,
      node: a,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return r.PropTypes = r, r;
  }, zt;
}
if (process.env.NODE_ENV !== "production") {
  var Aa = qn(), Ma = !0;
  qt.exports = Ca()(Aa.isElement, Ma);
} else
  qt.exports = Ra()();
var za = qt.exports;
const re = /* @__PURE__ */ Ta(za);
var Ia = !1;
function Na(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Da(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var qa = /* @__PURE__ */ function() {
  function e(n) {
    var a = this;
    this._insertTag = function(i) {
      var r;
      a.tags.length === 0 ? a.insertionPoint ? r = a.insertionPoint.nextSibling : a.prepend ? r = a.container.firstChild : r = a.before : r = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(i, r), a.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !Ia : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, t.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Da(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var r = Na(i);
      try {
        r.insertRule(a, r.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(a));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(a) {
      var i;
      return (i = a.parentNode) == null ? void 0 : i.removeChild(a);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), te = "-ms-", vt = "-moz-", z = "-webkit-", Fn = "comm", Kt = "rule", Gt = "decl", Wa = "@import", Ln = "@keyframes", Fa = "@layer", La = Math.abs, ht = String.fromCharCode, Ua = Object.assign;
function Ba(e, t) {
  return Z(e, 0) ^ 45 ? (((t << 2 ^ Z(e, 0)) << 2 ^ Z(e, 1)) << 2 ^ Z(e, 2)) << 2 ^ Z(e, 3) : 0;
}
function Un(e) {
  return e.trim();
}
function Ya(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function I(e, t, n) {
  return e.replace(t, n);
}
function Wt(e, t) {
  return e.indexOf(t);
}
function Z(e, t) {
  return e.charCodeAt(t) | 0;
}
function Je(e, t, n) {
  return e.slice(t, n);
}
function xe(e) {
  return e.length;
}
function Ht(e) {
  return e.length;
}
function ct(e, t) {
  return t.push(e), e;
}
function Va(e, t) {
  return e.map(t).join("");
}
var yt = 1, We = 1, Bn = 0, ae = 0, X = 0, Fe = "";
function bt(e, t, n, a, i, r, o) {
  return { value: e, root: t, parent: n, type: a, props: i, children: r, line: yt, column: We, length: o, return: "" };
}
function Ve(e, t) {
  return Ua(bt("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ka() {
  return X;
}
function Ga() {
  return X = ae > 0 ? Z(Fe, --ae) : 0, We--, X === 10 && (We = 1, yt--), X;
}
function se() {
  return X = ae < Bn ? Z(Fe, ae++) : 0, We++, X === 10 && (We = 1, yt++), X;
}
function ge() {
  return Z(Fe, ae);
}
function lt() {
  return ae;
}
function et(e, t) {
  return Je(Fe, e, t);
}
function Ze(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Yn(e) {
  return yt = We = 1, Bn = xe(Fe = e), ae = 0, [];
}
function Vn(e) {
  return Fe = "", e;
}
function dt(e) {
  return Un(et(ae - 1, Ft(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ha(e) {
  for (; (X = ge()) && X < 33; )
    se();
  return Ze(e) > 2 || Ze(X) > 3 ? "" : " ";
}
function Xa(e, t) {
  for (; --t && se() && !(X < 48 || X > 102 || X > 57 && X < 65 || X > 70 && X < 97); )
    ;
  return et(e, lt() + (t < 6 && ge() == 32 && se() == 32));
}
function Ft(e) {
  for (; se(); )
    switch (X) {
      case e:
        return ae;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ft(X);
        break;
      case 40:
        e === 41 && Ft(e);
        break;
      case 92:
        se();
        break;
    }
  return ae;
}
function Ja(e, t) {
  for (; se() && e + X !== 57; )
    if (e + X === 84 && ge() === 47)
      break;
  return "/*" + et(t, ae - 1) + "*" + ht(e === 47 ? e : se());
}
function Za(e) {
  for (; !Ze(ge()); )
    se();
  return et(e, ae);
}
function Qa(e) {
  return Vn(ft("", null, null, null, [""], e = Yn(e), 0, [0], e));
}
function ft(e, t, n, a, i, r, o, s, c) {
  for (var l = 0, m = 0, v = o, f = 0, b = 0, h = 0, d = 1, p = 1, w = 1, A = 0, S = "", N = i, u = r, D = a, $ = S; p; )
    switch (h = A, A = se()) {
      case 40:
        if (h != 108 && Z($, v - 1) == 58) {
          Wt($ += I(dt(A), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += dt(A);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += Ha(h);
        break;
      case 92:
        $ += Xa(lt() - 1, 7);
        continue;
      case 47:
        switch (ge()) {
          case 42:
          case 47:
            ct(ei(Ja(se(), lt()), t, n), c);
            break;
          default:
            $ += "/";
        }
        break;
      case 123 * d:
        s[l++] = xe($) * w;
      case 125 * d:
      case 59:
      case 0:
        switch (A) {
          case 0:
          case 125:
            p = 0;
          case 59 + m:
            w == -1 && ($ = I($, /\f/g, "")), b > 0 && xe($) - v && ct(b > 32 ? hn($ + ";", a, n, v - 1) : hn(I($, " ", "") + ";", a, n, v - 2), c);
            break;
          case 59:
            $ += ";";
          default:
            if (ct(D = gn($, t, n, l, m, i, s, S, N = [], u = [], v), r), A === 123)
              if (m === 0)
                ft($, t, D, D, N, r, v, s, u);
              else
                switch (f === 99 && Z($, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ft(e, D, D, a && ct(gn(e, D, D, 0, 0, i, s, S, i, N = [], v), u), i, u, v, s, a ? N : u);
                    break;
                  default:
                    ft($, D, D, D, [""], u, 0, s, u);
                }
        }
        l = m = b = 0, d = w = 1, S = $ = "", v = o;
        break;
      case 58:
        v = 1 + xe($), b = h;
      default:
        if (d < 1) {
          if (A == 123)
            --d;
          else if (A == 125 && d++ == 0 && Ga() == 125)
            continue;
        }
        switch ($ += ht(A), A * d) {
          case 38:
            w = m > 0 ? 1 : ($ += "\f", -1);
            break;
          case 44:
            s[l++] = (xe($) - 1) * w, w = 1;
            break;
          case 64:
            ge() === 45 && ($ += dt(se())), f = ge(), m = v = xe(S = $ += Za(lt())), A++;
            break;
          case 45:
            h === 45 && xe($) == 2 && (d = 0);
        }
    }
  return r;
}
function gn(e, t, n, a, i, r, o, s, c, l, m) {
  for (var v = i - 1, f = i === 0 ? r : [""], b = Ht(f), h = 0, d = 0, p = 0; h < a; ++h)
    for (var w = 0, A = Je(e, v + 1, v = La(d = o[h])), S = e; w < b; ++w)
      (S = Un(d > 0 ? f[w] + " " + A : I(A, /&\f/g, f[w]))) && (c[p++] = S);
  return bt(e, t, n, i === 0 ? Kt : s, c, l, m);
}
function ei(e, t, n) {
  return bt(e, t, n, Fn, ht(Ka()), Je(e, 2, -2), 0);
}
function hn(e, t, n, a) {
  return bt(e, t, n, Gt, Je(e, 0, a), Je(e, a + 1, -1), a);
}
function De(e, t) {
  for (var n = "", a = Ht(e), i = 0; i < a; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function ti(e, t, n, a) {
  switch (e.type) {
    case Fa:
      if (e.children.length) break;
    case Wa:
    case Gt:
      return e.return = e.return || e.value;
    case Fn:
      return "";
    case Ln:
      return e.return = e.value + "{" + De(e.children, a) + "}";
    case Kt:
      e.value = e.props.join(",");
  }
  return xe(n = De(e.children, a)) ? e.return = e.value + "{" + n + "}" : "";
}
function ni(e) {
  var t = Ht(e);
  return function(n, a, i, r) {
    for (var o = "", s = 0; s < t; s++)
      o += e[s](n, a, i, r) || "";
    return o;
  };
}
function ai(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var ii = function(t, n, a) {
  for (var i = 0, r = 0; i = r, r = ge(), i === 38 && r === 12 && (n[a] = 1), !Ze(r); )
    se();
  return et(t, ae);
}, ri = function(t, n) {
  var a = -1, i = 44;
  do
    switch (Ze(i)) {
      case 0:
        i === 38 && ge() === 12 && (n[a] = 1), t[a] += ii(ae - 1, n, a);
        break;
      case 2:
        t[a] += dt(i);
        break;
      case 4:
        if (i === 44) {
          t[++a] = ge() === 58 ? "&\f" : "", n[a] = t[a].length;
          break;
        }
      default:
        t[a] += ht(i);
    }
  while (i = se());
  return t;
}, oi = function(t, n) {
  return Vn(ri(Yn(t), n));
}, yn = /* @__PURE__ */ new WeakMap(), si = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, a = t.parent, i = t.column === a.column && t.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !yn.get(a)) && !i) {
      yn.set(t, !0);
      for (var r = [], o = oi(n, r), s = a.props, c = 0, l = 0; c < o.length; c++)
        for (var m = 0; m < s.length; m++, l++)
          t.props[l] = r[c] ? o[c].replace(/&\f/g, s[m]) : s[m] + " " + o[c];
    }
  }
}, ci = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Kn(e, t) {
  switch (Ba(e, t)) {
    case 5103:
      return z + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return z + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return z + e + vt + e + te + e + e;
    case 6828:
    case 4268:
      return z + e + te + e + e;
    case 6165:
      return z + e + te + "flex-" + e + e;
    case 5187:
      return z + e + I(e, /(\w+).+(:[^]+)/, z + "box-$1$2" + te + "flex-$1$2") + e;
    case 5443:
      return z + e + te + "flex-item-" + I(e, /flex-|-self/, "") + e;
    case 4675:
      return z + e + te + "flex-line-pack" + I(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return z + e + te + I(e, "shrink", "negative") + e;
    case 5292:
      return z + e + te + I(e, "basis", "preferred-size") + e;
    case 6060:
      return z + "box-" + I(e, "-grow", "") + z + e + te + I(e, "grow", "positive") + e;
    case 4554:
      return z + I(e, /([^-])(transform)/g, "$1" + z + "$2") + e;
    case 6187:
      return I(I(I(e, /(zoom-|grab)/, z + "$1"), /(image-set)/, z + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return I(e, /(image-set\([^]*)/, z + "$1$`$1");
    case 4968:
      return I(I(e, /(.+:)(flex-)?(.*)/, z + "box-pack:$3" + te + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + z + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return I(e, /(.+)-inline(.+)/, z + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (xe(e) - 1 - t > 6) switch (Z(e, t + 1)) {
        case 109:
          if (Z(e, t + 4) !== 45) break;
        case 102:
          return I(e, /(.+:)(.+)-([^]+)/, "$1" + z + "$2-$3$1" + vt + (Z(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Wt(e, "stretch") ? Kn(I(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Z(e, t + 1) !== 115) break;
    case 6444:
      switch (Z(e, xe(e) - 3 - (~Wt(e, "!important") && 10))) {
        case 107:
          return I(e, ":", ":" + z) + e;
        case 101:
          return I(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + z + (Z(e, 14) === 45 ? "inline-" : "") + "box$3$1" + z + "$2$3$1" + te + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Z(e, t + 11)) {
        case 114:
          return z + e + te + I(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return z + e + te + I(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return z + e + te + I(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return z + e + te + e + e;
  }
  return e;
}
var pi = function(t, n, a, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Gt:
      t.return = Kn(t.value, t.length);
      break;
    case Ln:
      return De([Ve(t, {
        value: I(t.value, "@", "@" + z)
      })], i);
    case Kt:
      if (t.length) return Va(t.props, function(r) {
        switch (Ya(r, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return De([Ve(t, {
              props: [I(r, /:(read-\w+)/, ":" + vt + "$1")]
            })], i);
          case "::placeholder":
            return De([Ve(t, {
              props: [I(r, /:(plac\w+)/, ":" + z + "input-$1")]
            }), Ve(t, {
              props: [I(r, /:(plac\w+)/, ":" + vt + "$1")]
            }), Ve(t, {
              props: [I(r, /:(plac\w+)/, te + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, li = [pi], di = function(t) {
  var n = t.key;
  if (n === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(d) {
      var p = d.getAttribute("data-emotion");
      p.indexOf(" ") !== -1 && (document.head.appendChild(d), d.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || li, r = {}, o, s = [];
  o = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(d) {
      for (var p = d.getAttribute("data-emotion").split(" "), w = 1; w < p.length; w++)
        r[p[w]] = !0;
      s.push(d);
    }
  );
  var c, l = [si, ci];
  {
    var m, v = [ti, ai(function(d) {
      m.insert(d);
    })], f = ni(l.concat(i, v)), b = function(p) {
      return De(Qa(p), f);
    };
    c = function(p, w, A, S) {
      m = A, b(p ? p + "{" + w.styles + "}" : w.styles), S && (h.inserted[w.name] = !0);
    };
  }
  var h = {
    key: n,
    sheet: new qa({
      key: n,
      container: o,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: r,
    registered: {},
    insert: c
  };
  return h.sheet.hydrate(s), h;
};
let Lt;
typeof document == "object" && (Lt = di({
  key: "css",
  prepend: !0
}));
function Gn(e) {
  const {
    injectFirst: t,
    children: n
  } = e;
  return t && Lt ? /* @__PURE__ */ J(ya, {
    value: Lt,
    children: n
  }) : n;
}
process.env.NODE_ENV !== "production" && (Gn.propTypes = {
  /**
   * Your component tree.
   */
  children: re.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: re.bool
});
function fi(e) {
  return e == null || Object.keys(e).length === 0;
}
function Hn(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ J(ba, {
    styles: typeof t == "function" ? (i) => t(fi(i) ? n : i) : t
  });
}
process.env.NODE_ENV !== "production" && (Hn.propTypes = {
  defaultTheme: re.object,
  styles: re.oneOfType([re.array, re.string, re.object, re.func])
});
/**
 * @mui/styled-engine v5.16.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ui(e, t) {
  const n = ha(e, t);
  return process.env.NODE_ENV !== "production" ? (...a) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return a.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : a.some((r) => r === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...a);
  } : n;
}
const mi = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Hn,
  StyledEngineProvider: Gn,
  ThemeContext: wa,
  css: ka,
  default: ui,
  internal_processStyles: mi,
  keyframes: _a
}, Symbol.toStringTag, { value: "Module" }));
function _e(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Xn(e) {
  if (!_e(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Xn(e[n]);
  }), t;
}
function he(e, t, n = {
  clone: !0
}) {
  const a = n.clone ? V({}, e) : e;
  return _e(e) && _e(t) && Object.keys(t).forEach((i) => {
    _e(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && _e(e[i]) ? a[i] = he(e[i], t[i], n) : n.clone ? a[i] = _e(t[i]) ? Xn(t[i]) : t[i] : a[i] = t[i];
  }), a;
}
const xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: he,
  isPlainObject: _e
}, Symbol.toStringTag, { value: "Module" })), gi = ["values", "unit", "step"], hi = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, a) => n.val - a.val), t.reduce((n, a) => V({}, n, {
    [a.key]: a.val
  }), {});
};
function Jn(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: a = 5
  } = e, i = $e(e, gi), r = hi(t), o = Object.keys(r);
  function s(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function c(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - a / 100}${n})`;
  }
  function l(f, b) {
    const h = o.indexOf(b);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(h !== -1 && typeof t[o[h]] == "number" ? t[o[h]] : b) - a / 100}${n})`;
  }
  function m(f) {
    return o.indexOf(f) + 1 < o.length ? l(f, o[o.indexOf(f) + 1]) : s(f);
  }
  function v(f) {
    const b = o.indexOf(f);
    return b === 0 ? s(o[1]) : b === o.length - 1 ? c(o[b]) : l(f, o[o.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return V({
    keys: o,
    values: r,
    up: s,
    down: c,
    between: l,
    only: m,
    not: v,
    unit: n
  }, i);
}
const yi = {
  borderRadius: 4
}, Se = process.env.NODE_ENV !== "production" ? re.oneOfType([re.number, re.string, re.object, re.array]) : {};
function He(e, t) {
  return t ? he(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Xt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, bn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Xt[e]}px)`
};
function we(e, t, n) {
  const a = e.theme || {};
  if (Array.isArray(t)) {
    const r = a.breakpoints || bn;
    return t.reduce((o, s, c) => (o[r.up(r.keys[c])] = n(t[c]), o), {});
  }
  if (typeof t == "object") {
    const r = a.breakpoints || bn;
    return Object.keys(t).reduce((o, s) => {
      if (Object.keys(r.values || Xt).indexOf(s) !== -1) {
        const c = r.up(s);
        o[c] = n(t[s], s);
      } else {
        const c = s;
        o[c] = t[c];
      }
      return o;
    }, {});
  }
  return n(t);
}
function bi(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((a, i) => {
    const r = e.up(i);
    return a[r] = {}, a;
  }, {})) || {};
}
function wi(e, t) {
  return e.reduce((n, a) => {
    const i = n[a];
    return (!i || Object.keys(i).length === 0) && delete n[a], n;
  }, t);
}
function Jt(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Xe(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jt
}, Symbol.toStringTag, { value: "Module" }));
function wt(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const a = `vars.${t}`.split(".").reduce((i, r) => i && i[r] ? i[r] : null, e);
    if (a != null)
      return a;
  }
  return t.split(".").reduce((a, i) => a && a[i] != null ? a[i] : null, e);
}
function xt(e, t, n, a = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || a : i = wt(e, n) || a, t && (i = t(i, a, e)), i;
}
function G(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: a,
    transform: i
  } = e, r = (o) => {
    if (o[t] == null)
      return null;
    const s = o[t], c = o.theme, l = wt(c, a) || {};
    return we(o, s, (v) => {
      let f = xt(l, i, v);
      return v === f && typeof v == "string" && (f = xt(l, i, `${t}${v === "default" ? "" : Jt(v)}`, v)), n === !1 ? f : {
        [n]: f
      };
    });
  };
  return r.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Se
  } : {}, r.filterProps = [t], r;
}
function _i(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Ei = {
  m: "margin",
  p: "padding"
}, Si = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, wn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ti = _i((e) => {
  if (e.length > 2)
    if (wn[e])
      e = wn[e];
    else
      return [e];
  const [t, n] = e.split(""), a = Ei[t], i = Si[n] || "";
  return Array.isArray(i) ? i.map((r) => a + r) : [a + i];
}), kt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], _t = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Oi = [...kt, ..._t];
function tt(e, t, n, a) {
  var i;
  const r = (i = wt(e, t, !1)) != null ? i : n;
  return typeof r == "number" ? (o) => typeof o == "string" ? o : (process.env.NODE_ENV !== "production" && typeof o != "number" && console.error(`MUI: Expected ${a} argument to be a number or a string, got ${o}.`), r * o) : Array.isArray(r) ? (o) => typeof o == "string" ? o : (process.env.NODE_ENV !== "production" && (Number.isInteger(o) ? o > r.length - 1 && console.error([`MUI: The value provided (${o}) overflows.`, `The supported values are: ${JSON.stringify(r)}.`, `${o} > ${r.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), r[o]) : typeof r == "function" ? r : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${r}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Zn(e) {
  return tt(e, "spacing", 8, "spacing");
}
function nt(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), a = e(n);
  return t >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
}
function ji(e, t) {
  return (n) => e.reduce((a, i) => (a[i] = nt(t, n), a), {});
}
function $i(e, t, n, a) {
  if (t.indexOf(n) === -1)
    return null;
  const i = Ti(n), r = ji(i, a), o = e[n];
  return we(e, o, r);
}
function Qn(e, t) {
  const n = Zn(e.theme);
  return Object.keys(e).map((a) => $i(e, t, a, n)).reduce(He, {});
}
function B(e) {
  return Qn(e, kt);
}
B.propTypes = process.env.NODE_ENV !== "production" ? kt.reduce((e, t) => (e[t] = Se, e), {}) : {};
B.filterProps = kt;
function Y(e) {
  return Qn(e, _t);
}
Y.propTypes = process.env.NODE_ENV !== "production" ? _t.reduce((e, t) => (e[t] = Se, e), {}) : {};
Y.filterProps = _t;
process.env.NODE_ENV !== "production" && Oi.reduce((e, t) => (e[t] = Se, e), {});
function Pi(e = 8) {
  if (e.mui)
    return e;
  const t = Zn({
    spacing: e
  }), n = (...a) => (process.env.NODE_ENV !== "production" && (a.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${a.length}`)), (a.length === 0 ? [1] : a).map((r) => {
    const o = t(r);
    return typeof o == "number" ? `${o}px` : o;
  }).join(" "));
  return n.mui = !0, n;
}
function Et(...e) {
  const t = e.reduce((a, i) => (i.filterProps.forEach((r) => {
    a[r] = i;
  }), a), {}), n = (a) => Object.keys(a).reduce((i, r) => t[r] ? He(i, t[r](a)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((a, i) => Object.assign(a, i.propTypes), {}) : {}, n.filterProps = e.reduce((a, i) => a.concat(i.filterProps), []), n;
}
function de(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ue(e, t) {
  return G({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ci = ue("border", de), Ri = ue("borderTop", de), Ai = ue("borderRight", de), Mi = ue("borderBottom", de), zi = ue("borderLeft", de), Ii = ue("borderColor"), Ni = ue("borderTopColor"), Di = ue("borderRightColor"), qi = ue("borderBottomColor"), Wi = ue("borderLeftColor"), Fi = ue("outline", de), Li = ue("outlineColor"), St = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = tt(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (a) => ({
      borderRadius: nt(t, a)
    });
    return we(e, e.borderRadius, n);
  }
  return null;
};
St.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Se
} : {};
St.filterProps = ["borderRadius"];
Et(Ci, Ri, Ai, Mi, zi, Ii, Ni, Di, qi, Wi, St, Fi, Li);
const Tt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = tt(e.theme, "spacing", 8, "gap"), n = (a) => ({
      gap: nt(t, a)
    });
    return we(e, e.gap, n);
  }
  return null;
};
Tt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Se
} : {};
Tt.filterProps = ["gap"];
const Ot = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = tt(e.theme, "spacing", 8, "columnGap"), n = (a) => ({
      columnGap: nt(t, a)
    });
    return we(e, e.columnGap, n);
  }
  return null;
};
Ot.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Se
} : {};
Ot.filterProps = ["columnGap"];
const jt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = tt(e.theme, "spacing", 8, "rowGap"), n = (a) => ({
      rowGap: nt(t, a)
    });
    return we(e, e.rowGap, n);
  }
  return null;
};
jt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Se
} : {};
jt.filterProps = ["rowGap"];
const Ui = G({
  prop: "gridColumn"
}), Bi = G({
  prop: "gridRow"
}), Yi = G({
  prop: "gridAutoFlow"
}), Vi = G({
  prop: "gridAutoColumns"
}), Ki = G({
  prop: "gridAutoRows"
}), Gi = G({
  prop: "gridTemplateColumns"
}), Hi = G({
  prop: "gridTemplateRows"
}), Xi = G({
  prop: "gridTemplateAreas"
}), Ji = G({
  prop: "gridArea"
});
Et(Tt, Ot, jt, Ui, Bi, Yi, Vi, Ki, Gi, Hi, Xi, Ji);
function qe(e, t) {
  return t === "grey" ? t : e;
}
const Zi = G({
  prop: "color",
  themeKey: "palette",
  transform: qe
}), Qi = G({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: qe
}), er = G({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: qe
});
Et(Zi, Qi, er);
function oe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const tr = G({
  prop: "width",
  transform: oe
}), Zt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var a, i;
      const r = ((a = e.theme) == null || (a = a.breakpoints) == null || (a = a.values) == null ? void 0 : a[n]) || Xt[n];
      return r ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: oe(n)
      };
    };
    return we(e, e.maxWidth, t);
  }
  return null;
};
Zt.filterProps = ["maxWidth"];
const nr = G({
  prop: "minWidth",
  transform: oe
}), ar = G({
  prop: "height",
  transform: oe
}), ir = G({
  prop: "maxHeight",
  transform: oe
}), rr = G({
  prop: "minHeight",
  transform: oe
});
G({
  prop: "size",
  cssProperty: "width",
  transform: oe
});
G({
  prop: "size",
  cssProperty: "height",
  transform: oe
});
const or = G({
  prop: "boxSizing"
});
Et(tr, Zt, nr, ar, ir, rr, or);
const at = {
  // borders
  border: {
    themeKey: "borders",
    transform: de
  },
  borderTop: {
    themeKey: "borders",
    transform: de
  },
  borderRight: {
    themeKey: "borders",
    transform: de
  },
  borderBottom: {
    themeKey: "borders",
    transform: de
  },
  borderLeft: {
    themeKey: "borders",
    transform: de
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: de
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: St
  },
  // palette
  color: {
    themeKey: "palette",
    transform: qe
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: qe
  },
  backgroundColor: {
    themeKey: "palette",
    transform: qe
  },
  // spacing
  p: {
    style: Y
  },
  pt: {
    style: Y
  },
  pr: {
    style: Y
  },
  pb: {
    style: Y
  },
  pl: {
    style: Y
  },
  px: {
    style: Y
  },
  py: {
    style: Y
  },
  padding: {
    style: Y
  },
  paddingTop: {
    style: Y
  },
  paddingRight: {
    style: Y
  },
  paddingBottom: {
    style: Y
  },
  paddingLeft: {
    style: Y
  },
  paddingX: {
    style: Y
  },
  paddingY: {
    style: Y
  },
  paddingInline: {
    style: Y
  },
  paddingInlineStart: {
    style: Y
  },
  paddingInlineEnd: {
    style: Y
  },
  paddingBlock: {
    style: Y
  },
  paddingBlockStart: {
    style: Y
  },
  paddingBlockEnd: {
    style: Y
  },
  m: {
    style: B
  },
  mt: {
    style: B
  },
  mr: {
    style: B
  },
  mb: {
    style: B
  },
  ml: {
    style: B
  },
  mx: {
    style: B
  },
  my: {
    style: B
  },
  margin: {
    style: B
  },
  marginTop: {
    style: B
  },
  marginRight: {
    style: B
  },
  marginBottom: {
    style: B
  },
  marginLeft: {
    style: B
  },
  marginX: {
    style: B
  },
  marginY: {
    style: B
  },
  marginInline: {
    style: B
  },
  marginInlineStart: {
    style: B
  },
  marginInlineEnd: {
    style: B
  },
  marginBlock: {
    style: B
  },
  marginBlockStart: {
    style: B
  },
  marginBlockEnd: {
    style: B
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Tt
  },
  rowGap: {
    style: jt
  },
  columnGap: {
    style: Ot
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: oe
  },
  maxWidth: {
    style: Zt
  },
  minWidth: {
    transform: oe
  },
  height: {
    transform: oe
  },
  maxHeight: {
    transform: oe
  },
  minHeight: {
    transform: oe
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function sr(...e) {
  const t = e.reduce((a, i) => a.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((a) => n.size === Object.keys(a).length);
}
function cr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ea() {
  function e(n, a, i, r) {
    const o = {
      [n]: a,
      theme: i
    }, s = r[n];
    if (!s)
      return {
        [n]: a
      };
    const {
      cssProperty: c = n,
      themeKey: l,
      transform: m,
      style: v
    } = s;
    if (a == null)
      return null;
    if (l === "typography" && a === "inherit")
      return {
        [n]: a
      };
    const f = wt(i, l) || {};
    return v ? v(o) : we(o, a, (h) => {
      let d = xt(f, m, h);
      return h === d && typeof h == "string" && (d = xt(f, m, `${n}${h === "default" ? "" : Jt(h)}`, h)), c === !1 ? d : {
        [c]: d
      };
    });
  }
  function t(n) {
    var a;
    const {
      sx: i,
      theme: r = {}
    } = n || {};
    if (!i)
      return null;
    const o = (a = r.unstable_sxConfig) != null ? a : at;
    function s(c) {
      let l = c;
      if (typeof c == "function")
        l = c(r);
      else if (typeof c != "object")
        return c;
      if (!l)
        return null;
      const m = bi(r.breakpoints), v = Object.keys(m);
      let f = m;
      return Object.keys(l).forEach((b) => {
        const h = cr(l[b], r);
        if (h != null)
          if (typeof h == "object")
            if (o[b])
              f = He(f, e(b, h, r, o));
            else {
              const d = we({
                theme: r
              }, h, (p) => ({
                [b]: p
              }));
              sr(d, h) ? f[b] = t({
                sx: h,
                theme: r
              }) : f = He(f, d);
            }
          else
            f = He(f, e(b, h, r, o));
      }), wi(v, f);
    }
    return Array.isArray(i) ? i.map(s) : s(i);
  }
  return t;
}
const $t = ea();
$t.filterProps = ["sx"];
function ta(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const pr = ["breakpoints", "palette", "spacing", "shape"];
function na(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: a = {},
    spacing: i,
    shape: r = {}
  } = e, o = $e(e, pr), s = Jn(n), c = Pi(i);
  let l = he({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: V({
      mode: "light"
    }, a),
    spacing: c,
    shape: V({}, yi, r)
  }, o);
  return l.applyStyles = ta, l = t.reduce((m, v) => he(m, v), l), l.unstable_sxConfig = V({}, at, o?.unstable_sxConfig), l.unstable_sx = function(v) {
    return $t({
      sx: v,
      theme: this
    });
  }, l;
}
const lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: na,
  private_createBreakpoints: Jn,
  unstable_applyStyles: ta
}, Symbol.toStringTag, { value: "Module" })), dr = ["sx"], fr = (e) => {
  var t, n;
  const a = {
    systemProps: {},
    otherProps: {}
  }, i = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : at;
  return Object.keys(e).forEach((r) => {
    i[r] ? a.systemProps[r] = e[r] : a.otherProps[r] = e[r];
  }), a;
};
function ur(e) {
  const {
    sx: t
  } = e, n = $e(e, dr), {
    systemProps: a,
    otherProps: i
  } = fr(n);
  let r;
  return Array.isArray(t) ? r = [a, ...t] : typeof t == "function" ? r = (...o) => {
    const s = t(...o);
    return _e(s) ? V({}, a, s) : a;
  } : r = V({}, a, t), V({}, i, {
    sx: r
  });
}
const mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $t,
  extendSxProp: ur,
  unstable_createStyleFunctionSx: ea,
  unstable_defaultSxConfig: at
}, Symbol.toStringTag, { value: "Module" })), kn = (e) => e, vr = () => {
  let e = kn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = kn;
    }
  };
}, xr = vr(), gr = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function hr(e, t, n = "Mui") {
  const a = gr[t];
  return a ? `${n}-${a}` : `${xr.generate(e)}-${t}`;
}
var Ut = { exports: {} }, F = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n;
function yr() {
  if (_n) return F;
  _n = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function d(p) {
    if (typeof p == "object" && p !== null) {
      var w = p.$$typeof;
      switch (w) {
        case e:
          switch (p = p.type, p) {
            case n:
            case i:
            case a:
            case l:
            case m:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case o:
                case c:
                case f:
                case v:
                case r:
                  return p;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return F.ContextConsumer = o, F.ContextProvider = r, F.Element = e, F.ForwardRef = c, F.Fragment = n, F.Lazy = f, F.Memo = v, F.Portal = t, F.Profiler = i, F.StrictMode = a, F.Suspense = l, F.SuspenseList = m, F.isAsyncMode = function() {
    return !1;
  }, F.isConcurrentMode = function() {
    return !1;
  }, F.isContextConsumer = function(p) {
    return d(p) === o;
  }, F.isContextProvider = function(p) {
    return d(p) === r;
  }, F.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, F.isForwardRef = function(p) {
    return d(p) === c;
  }, F.isFragment = function(p) {
    return d(p) === n;
  }, F.isLazy = function(p) {
    return d(p) === f;
  }, F.isMemo = function(p) {
    return d(p) === v;
  }, F.isPortal = function(p) {
    return d(p) === t;
  }, F.isProfiler = function(p) {
    return d(p) === i;
  }, F.isStrictMode = function(p) {
    return d(p) === a;
  }, F.isSuspense = function(p) {
    return d(p) === l;
  }, F.isSuspenseList = function(p) {
    return d(p) === m;
  }, F.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === i || p === a || p === l || p === m || p === b || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === v || p.$$typeof === r || p.$$typeof === o || p.$$typeof === c || p.$$typeof === h || p.getModuleId !== void 0);
  }, F.typeOf = d, F;
}
var L = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function br() {
  return En || (En = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), h = !1, d = !1, p = !1, w = !1, A = !1, S;
    S = Symbol.for("react.module.reference");
    function N(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === n || k === i || A || k === a || k === l || k === m || w || k === b || h || d || p || typeof k == "object" && k !== null && (k.$$typeof === f || k.$$typeof === v || k.$$typeof === r || k.$$typeof === o || k.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === S || k.getModuleId !== void 0));
    }
    function u(k) {
      if (typeof k == "object" && k !== null) {
        var Ce = k.$$typeof;
        switch (Ce) {
          case e:
            var rt = k.type;
            switch (rt) {
              case n:
              case i:
              case a:
              case l:
              case m:
                return rt;
              default:
                var on = rt && rt.$$typeof;
                switch (on) {
                  case s:
                  case o:
                  case c:
                  case f:
                  case v:
                  case r:
                    return on;
                  default:
                    return Ce;
                }
            }
          case t:
            return Ce;
        }
      }
    }
    var D = o, $ = r, me = e, ke = c, ye = n, K = f, Q = v, ve = t, ie = i, Te = a, ne = l, be = m, Oe = !1, Pe = !1;
    function x(k) {
      return Oe || (Oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function y(k) {
      return Pe || (Pe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function j(k) {
      return u(k) === o;
    }
    function T(k) {
      return u(k) === r;
    }
    function _(k) {
      return typeof k == "object" && k !== null && k.$$typeof === e;
    }
    function P(k) {
      return u(k) === c;
    }
    function E(k) {
      return u(k) === n;
    }
    function O(k) {
      return u(k) === f;
    }
    function C(k) {
      return u(k) === v;
    }
    function M(k) {
      return u(k) === t;
    }
    function R(k) {
      return u(k) === i;
    }
    function ee(k) {
      return u(k) === a;
    }
    function g(k) {
      return u(k) === l;
    }
    function ce(k) {
      return u(k) === m;
    }
    L.ContextConsumer = D, L.ContextProvider = $, L.Element = me, L.ForwardRef = ke, L.Fragment = ye, L.Lazy = K, L.Memo = Q, L.Portal = ve, L.Profiler = ie, L.StrictMode = Te, L.Suspense = ne, L.SuspenseList = be, L.isAsyncMode = x, L.isConcurrentMode = y, L.isContextConsumer = j, L.isContextProvider = T, L.isElement = _, L.isForwardRef = P, L.isFragment = E, L.isLazy = O, L.isMemo = C, L.isPortal = M, L.isProfiler = R, L.isStrictMode = ee, L.isSuspense = g, L.isSuspenseList = ce, L.isValidElementType = N, L.typeOf = u;
  }()), L;
}
process.env.NODE_ENV === "production" ? Ut.exports = yr() : Ut.exports = br();
var Sn = Ut.exports;
const wr = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function aa(e) {
  const t = `${e}`.match(wr);
  return t && t[1] || "";
}
function ia(e, t = "") {
  return e.displayName || e.name || aa(e) || t;
}
function Tn(e, t, n) {
  const a = ia(t);
  return e.displayName || (a !== "" ? `${n}(${a})` : n);
}
function kr(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ia(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Sn.ForwardRef:
          return Tn(e, e.render, "ForwardRef");
        case Sn.Memo:
          return Tn(e, e.type, "memo");
        default:
          return;
      }
  }
}
const _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kr,
  getFunctionName: aa
}, Symbol.toStringTag, { value: "Module" }));
function Er(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Er
}, Symbol.toStringTag, { value: "Module" }));
function Tr(e, t) {
  return V({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var H = {}, ra = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(ra);
var oa = ra.exports;
const Or = /* @__PURE__ */ Ee(Ea), jr = /* @__PURE__ */ Ee(Sr);
var sa = oa;
Object.defineProperty(H, "__esModule", {
  value: !0
});
H.alpha = da;
H.blend = Wr;
H.colorChannel = void 0;
var $r = H.darken = en;
H.decomposeColor = fe;
H.emphasize = fa;
var On = H.getContrastRatio = zr;
H.getLuminance = gt;
H.hexToRgb = ca;
H.hslToRgb = la;
var Pr = H.lighten = tn;
H.private_safeAlpha = Ir;
H.private_safeColorChannel = void 0;
H.private_safeDarken = Nr;
H.private_safeEmphasize = qr;
H.private_safeLighten = Dr;
H.recomposeColor = Le;
H.rgbToHex = Mr;
var jn = sa(Or), Cr = sa(jr);
function Qt(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), (0, Cr.default)(e, t, n);
}
function ca(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((a) => a + a)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((a, i) => i < 3 ? parseInt(a, 16) : Math.round(parseInt(a, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Rr(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function fe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return fe(ca(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, jn.default)(9, e));
  let a = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (a = a.split(" "), i = a.shift(), a.length === 4 && a[3].charAt(0) === "/" && (a[3] = a[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, jn.default)(10, i));
  } else
    a = a.split(",");
  return a = a.map((r) => parseFloat(r)), {
    type: n,
    values: a,
    colorSpace: i
  };
}
const pa = (e) => {
  const t = fe(e);
  return t.values.slice(0, 3).map((n, a) => t.type.indexOf("hsl") !== -1 && a !== 0 ? `${n}%` : n).join(" ");
};
H.colorChannel = pa;
const Ar = (e, t) => {
  try {
    return pa(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
H.private_safeColorChannel = Ar;
function Le(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: a
  } = e;
  return t.indexOf("rgb") !== -1 ? a = a.map((i, r) => r < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (a[1] = `${a[1]}%`, a[2] = `${a[2]}%`), t.indexOf("color") !== -1 ? a = `${n} ${a.join(" ")}` : a = `${a.join(", ")}`, `${t}(${a})`;
}
function Mr(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = fe(e);
  return `#${t.map((n, a) => Rr(a === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function la(e) {
  e = fe(e);
  const {
    values: t
  } = e, n = t[0], a = t[1] / 100, i = t[2] / 100, r = a * Math.min(i, 1 - i), o = (l, m = (l + n / 30) % 12) => i - r * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let s = "rgb";
  const c = [Math.round(o(0) * 255), Math.round(o(8) * 255), Math.round(o(4) * 255)];
  return e.type === "hsla" && (s += "a", c.push(t[3])), Le({
    type: s,
    values: c
  });
}
function gt(e) {
  e = fe(e);
  let t = e.type === "hsl" || e.type === "hsla" ? fe(la(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function zr(e, t) {
  const n = gt(e), a = gt(t);
  return (Math.max(n, a) + 0.05) / (Math.min(n, a) + 0.05);
}
function da(e, t) {
  return e = fe(e), t = Qt(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Le(e);
}
function Ir(e, t, n) {
  try {
    return da(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function en(e, t) {
  if (e = fe(e), t = Qt(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Le(e);
}
function Nr(e, t, n) {
  try {
    return en(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function tn(e, t) {
  if (e = fe(e), t = Qt(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Le(e);
}
function Dr(e, t, n) {
  try {
    return tn(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function fa(e, t = 0.15) {
  return gt(e) > 0.5 ? en(e, t) : tn(e, t);
}
function qr(e, t, n) {
  try {
    return fa(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Wr(e, t, n, a = 1) {
  const i = (c, l) => Math.round((c ** (1 / a) * (1 - n) + l ** (1 / a) * n) ** a), r = fe(e), o = fe(t), s = [i(r.values[0], o.values[0]), i(r.values[1], o.values[1]), i(r.values[2], o.values[2])];
  return Le({
    type: "rgb",
    values: s
  });
}
const Qe = {
  black: "#000",
  white: "#fff"
}, Fr = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Re = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Ae = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Ke = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Me = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, ze = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Ie = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Lr = ["mode", "contrastThreshold", "tonalOffset"], $n = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Qe.white,
    default: Qe.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, It = {
  text: {
    primary: Qe.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Qe.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Pn(e, t, n, a) {
  const i = a.light || a, r = a.dark || a * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Pr(e.main, i) : t === "dark" && (e.dark = $r(e.main, r)));
}
function Ur(e = "light") {
  return e === "dark" ? {
    main: Me[200],
    light: Me[50],
    dark: Me[400]
  } : {
    main: Me[700],
    light: Me[400],
    dark: Me[800]
  };
}
function Br(e = "light") {
  return e === "dark" ? {
    main: Re[200],
    light: Re[50],
    dark: Re[400]
  } : {
    main: Re[500],
    light: Re[300],
    dark: Re[700]
  };
}
function Yr(e = "light") {
  return e === "dark" ? {
    main: Ae[500],
    light: Ae[300],
    dark: Ae[700]
  } : {
    main: Ae[700],
    light: Ae[400],
    dark: Ae[800]
  };
}
function Vr(e = "light") {
  return e === "dark" ? {
    main: ze[400],
    light: ze[300],
    dark: ze[700]
  } : {
    main: ze[700],
    light: ze[500],
    dark: ze[900]
  };
}
function Kr(e = "light") {
  return e === "dark" ? {
    main: Ie[400],
    light: Ie[300],
    dark: Ie[700]
  } : {
    main: Ie[800],
    light: Ie[500],
    dark: Ie[900]
  };
}
function Gr(e = "light") {
  return e === "dark" ? {
    main: Ke[400],
    light: Ke[300],
    dark: Ke[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ke[500],
    dark: Ke[900]
  };
}
function Hr(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: a = 0.2
  } = e, i = $e(e, Lr), r = e.primary || Ur(t), o = e.secondary || Br(t), s = e.error || Yr(t), c = e.info || Vr(t), l = e.success || Kr(t), m = e.warning || Gr(t);
  function v(d) {
    const p = On(d, It.text.primary) >= n ? It.text.primary : $n.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = On(d, p);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${p} on ${d}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return p;
  }
  const f = ({
    color: d,
    name: p,
    mainShade: w = 500,
    lightShade: A = 300,
    darkShade: S = 700
  }) => {
    if (d = V({}, d), !d.main && d[w] && (d.main = d[w]), !d.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${p ? ` (${p})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : Xe(11, p ? ` (${p})` : "", w));
    if (typeof d.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${p ? ` (${p})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(d.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Xe(12, p ? ` (${p})` : "", JSON.stringify(d.main)));
    return Pn(d, "light", A, a), Pn(d, "dark", S, a), d.contrastText || (d.contrastText = v(d.main)), d;
  }, b = {
    dark: It,
    light: $n
  };
  return process.env.NODE_ENV !== "production" && (b[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), he(V({
    // A collection of common colors.
    common: V({}, Qe),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: f({
      color: r,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: f({
      color: o,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: f({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: f({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: Fr,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: v,
    // Generate a rich color object.
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: a
  }, b[t]), i);
}
const Xr = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Jr(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Cn = {
  textTransform: "uppercase"
}, Rn = '"Roboto", "Helvetica", "Arial", sans-serif';
function Zr(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: a = Rn,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: r = 300,
    fontWeightRegular: o = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: m,
    pxToRem: v
  } = n, f = $e(n, Xr);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = i / 14, h = v || ((w) => `${w / l * b}rem`), d = (w, A, S, N, u) => V({
    fontFamily: a,
    fontWeight: w,
    fontSize: h(A),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: S
  }, a === Rn ? {
    letterSpacing: `${Jr(N / A)}em`
  } : {}, u, m), p = {
    h1: d(r, 96, 1.167, -1.5),
    h2: d(r, 60, 1.2, -0.5),
    h3: d(o, 48, 1.167, 0),
    h4: d(o, 34, 1.235, 0.25),
    h5: d(o, 24, 1.334, 0),
    h6: d(s, 20, 1.6, 0.15),
    subtitle1: d(o, 16, 1.75, 0.15),
    subtitle2: d(s, 14, 1.57, 0.1),
    body1: d(o, 16, 1.5, 0.15),
    body2: d(o, 14, 1.43, 0.15),
    button: d(s, 14, 1.75, 0.4, Cn),
    caption: d(o, 12, 1.66, 0.4),
    overline: d(o, 12, 2.66, 1, Cn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return he(V({
    htmlFontSize: l,
    pxToRem: h,
    fontFamily: a,
    fontSize: i,
    fontWeightLight: r,
    fontWeightRegular: o,
    fontWeightMedium: s,
    fontWeightBold: c
  }, p), f, {
    clone: !1
    // No need to clone deep
  });
}
const Qr = 0.2, eo = 0.14, to = 0.12;
function U(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Qr})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${eo})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${to})`].join(",");
}
const no = ["none", U(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), U(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), U(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), U(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), U(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), U(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), U(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), U(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), U(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), U(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), U(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), U(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), U(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), U(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), U(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), U(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), U(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), U(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), U(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), U(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), U(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), U(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), U(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), U(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ao = ["duration", "easing", "delay"], io = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ro = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function An(e) {
  return `${Math.round(e)}ms`;
}
function oo(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function so(e) {
  const t = V({}, io, e.easing), n = V({}, ro, e.duration);
  return V({
    getAutoHeightDuration: oo,
    create: (i = ["all"], r = {}) => {
      const {
        duration: o = n.standard,
        easing: s = t.easeInOut,
        delay: c = 0
      } = r, l = $e(r, ao);
      if (process.env.NODE_ENV !== "production") {
        const m = (f) => typeof f == "string", v = (f) => !isNaN(parseFloat(f));
        !m(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !v(o) && !m(o) && console.error(`MUI: Argument "duration" must be a number or a string but found ${o}.`), m(s) || console.error('MUI: Argument "easing" must be a string.'), !v(c) && !m(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof r != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((m) => `${m} ${typeof o == "string" ? o : An(o)} ${s} ${typeof c == "string" ? c : An(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const co = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, po = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function lo(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: a = {},
    transitions: i = {},
    typography: r = {}
  } = e, o = $e(e, po);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Xe(18));
  const s = Hr(a), c = na(e);
  let l = he(c, {
    mixins: Tr(c.breakpoints, n),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: no.slice(),
    typography: Zr(s, r),
    transitions: so(i),
    zIndex: V({}, co)
  });
  if (l = he(l, o), l = t.reduce((m, v) => he(m, v), l), process.env.NODE_ENV !== "production") {
    const m = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], v = (f, b) => {
      let h;
      for (h in f) {
        const d = f[h];
        if (m.indexOf(h) !== -1 && Object.keys(d).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const p = hr("", h);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${h}\` internal state.`, "You can not override it like this: ", JSON.stringify(f, null, 2), "", `Instead, you need to use the '&.${p}' syntax:`, JSON.stringify({
              root: {
                [`&.${p}`]: d
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          f[h] = {};
        }
      }
    };
    Object.keys(l.components).forEach((f) => {
      const b = l.components[f].styleOverrides;
      b && f.indexOf("Mui") === 0 && v(b, f);
    });
  }
  return l.unstable_sxConfig = V({}, at, o?.unstable_sxConfig), l.unstable_sx = function(v) {
    return $t({
      sx: v,
      theme: this
    });
  }, l;
}
const fo = lo();
var it = {}, Nt = { exports: {} }, Mn;
function uo() {
  return Mn || (Mn = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var a = 1; a < arguments.length; a++) {
          var i = arguments[a];
          for (var r in i) ({}).hasOwnProperty.call(i, r) && (n[r] = i[r]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Nt)), Nt.exports;
}
var Dt = { exports: {} }, zn;
function mo() {
  return zn || (zn = 1, function(e) {
    function t(n, a) {
      if (n == null) return {};
      var i = {};
      for (var r in n) if ({}.hasOwnProperty.call(n, r)) {
        if (a.includes(r)) continue;
        i[r] = n[r];
      }
      return i;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Dt)), Dt.exports;
}
const vo = /* @__PURE__ */ Ee(vi), xo = /* @__PURE__ */ Ee(xi), go = /* @__PURE__ */ Ee(ki), ho = /* @__PURE__ */ Ee(_r), yo = /* @__PURE__ */ Ee(lr), bo = /* @__PURE__ */ Ee(mr);
var Ue = oa;
Object.defineProperty(it, "__esModule", {
  value: !0
});
var wo = it.default = zo;
it.shouldForwardProp = ut;
it.systemDefaultTheme = void 0;
var le = Ue(uo()), Bt = Ue(mo()), In = Po(vo), ko = xo, _o = Ue(go), Eo = Ue(ho), So = Ue(yo), To = Ue(bo);
const Oo = ["ownerState"], jo = ["variants"], $o = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function ua(e) {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (ua = function(a) {
    return a ? n : t;
  })(e);
}
function Po(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
  var n = ua(t);
  if (n && n.has(e)) return n.get(e);
  var a = { __proto__: null }, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var r in e) if (r !== "default" && Object.prototype.hasOwnProperty.call(e, r)) {
    var o = i ? Object.getOwnPropertyDescriptor(e, r) : null;
    o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r];
  }
  return a.default = e, n && n.set(e, a), a;
}
function Co(e) {
  return Object.keys(e).length === 0;
}
function Ro(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ut(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ao = it.systemDefaultTheme = (0, So.default)(), Nn = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function pt({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Co(t) ? e : t[n] || t;
}
function Mo(e) {
  return e ? (t, n) => n[e] : null;
}
function mt(e, t) {
  let {
    ownerState: n
  } = t, a = (0, Bt.default)(t, Oo);
  const i = typeof e == "function" ? e((0, le.default)({
    ownerState: n
  }, a)) : e;
  if (Array.isArray(i))
    return i.flatMap((r) => mt(r, (0, le.default)({
      ownerState: n
    }, a)));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: r = []
    } = i;
    let s = (0, Bt.default)(i, jo);
    return r.forEach((c) => {
      let l = !0;
      typeof c.props == "function" ? l = c.props((0, le.default)({
        ownerState: n
      }, a, n)) : Object.keys(c.props).forEach((m) => {
        n?.[m] !== c.props[m] && a[m] !== c.props[m] && (l = !1);
      }), l && (Array.isArray(s) || (s = [s]), s.push(typeof c.style == "function" ? c.style((0, le.default)({
        ownerState: n
      }, a, n)) : c.style));
    }), s;
  }
  return i;
}
function zo(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Ao,
    rootShouldForwardProp: a = ut,
    slotShouldForwardProp: i = ut
  } = e, r = (o) => (0, To.default)((0, le.default)({}, o, {
    theme: pt((0, le.default)({}, o, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return r.__mui_systemSx = !0, (o, s = {}) => {
    (0, In.internal_processStyles)(o, (u) => u.filter((D) => !(D != null && D.__mui_systemSx)));
    const {
      name: c,
      slot: l,
      skipVariantsResolver: m,
      skipSx: v,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = Mo(Nn(l))
    } = s, b = (0, Bt.default)(s, $o), h = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      l && l !== "Root" && l !== "root" || !1
    ), d = v || !1;
    let p;
    process.env.NODE_ENV !== "production" && c && (p = `${c}-${Nn(l || "Root")}`);
    let w = ut;
    l === "Root" || l === "root" ? w = a : l ? w = i : Ro(o) && (w = void 0);
    const A = (0, In.default)(o, (0, le.default)({
      shouldForwardProp: w,
      label: p
    }, b)), S = (u) => typeof u == "function" && u.__emotion_real !== u || (0, ko.isPlainObject)(u) ? (D) => mt(u, (0, le.default)({}, D, {
      theme: pt({
        theme: D.theme,
        defaultTheme: n,
        themeId: t
      })
    })) : u, N = (u, ...D) => {
      let $ = S(u);
      const me = D ? D.map(S) : [];
      c && f && me.push((K) => {
        const Q = pt((0, le.default)({}, K, {
          defaultTheme: n,
          themeId: t
        }));
        if (!Q.components || !Q.components[c] || !Q.components[c].styleOverrides)
          return null;
        const ve = Q.components[c].styleOverrides, ie = {};
        return Object.entries(ve).forEach(([Te, ne]) => {
          ie[Te] = mt(ne, (0, le.default)({}, K, {
            theme: Q
          }));
        }), f(K, ie);
      }), c && !h && me.push((K) => {
        var Q;
        const ve = pt((0, le.default)({}, K, {
          defaultTheme: n,
          themeId: t
        })), ie = ve == null || (Q = ve.components) == null || (Q = Q[c]) == null ? void 0 : Q.variants;
        return mt({
          variants: ie
        }, (0, le.default)({}, K, {
          theme: ve
        }));
      }), d || me.push(r);
      const ke = me.length - D.length;
      if (Array.isArray(u) && ke > 0) {
        const K = new Array(ke).fill("");
        $ = [...u, ...K], $.raw = [...u.raw, ...K];
      }
      const ye = A($, ...me);
      if (process.env.NODE_ENV !== "production") {
        let K;
        c && (K = `${c}${(0, _o.default)(l || "")}`), K === void 0 && (K = `Styled(${(0, Eo.default)(o)})`), ye.displayName = K;
      }
      return o.muiName && (ye.muiName = o.muiName), ye;
    };
    return A.withConfig && (N.withConfig = A.withConfig), N;
  };
}
function Io(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const No = (e) => Io(e) && e !== "classes", nn = wo({
  themeId: Sa,
  defaultTheme: fo,
  rootShouldForwardProp: No
}), an = { "application/prs.cww": ["cww"], "application/prs.xsf+xml": ["xsf"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["*xfdf"], "application/vnd.age": ["age"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["*fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["*mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.pwg-xhtml-print+xml": ["xhtm"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml", "uo"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["*prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["*sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["*aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif", "btf"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.cld": ["cld"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.pytha.pyox": ["pyo", "pyox"], "model/vnd.sap.vds": ["vds"], "model/vnd.usda": ["usda"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.familysearch.gedcom": ["ged"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
Object.freeze(an);
const rn = { "application/andrew-inset": ["ez"], "application/appinstaller": ["appinstaller"], "application/applixware": ["aw"], "application/appx": ["appx"], "application/appxbundle": ["appxbundle"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/automationml-aml+xml": ["aml"], "application/automationml-amlx+zip": ["amlx"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cpl+xml": ["cpl"], "application/cu-seeme": ["cu"], "application/cwl": ["cwl"], "application/dash+xml": ["mpd"], "application/dash-patch+xml": ["mpp"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdf": ["fdf"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["*js"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/media-policy-dataset+xml": ["mpf"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["*mp4", "*mpg4", "mp4s", "m4p"], "application/msix": ["msix"], "application/msixbundle": ["msixbundle"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-keys": ["asc"], "application/pgp-signature": ["sig", "*asc"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/sql": ["sql"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/watcherinfo+xml": ["wif"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xfdf": ["xfdf"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/aac": ["adts", "aac"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avci": ["avci"], "image/avcs": ["avcs"], "image/avif": ["avif"], "image/bmp": ["bmp", "dib"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/dpx": ["dpx"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm", "jpgm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/jt": ["jt"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/prc": ["prc"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/u3d": ["u3d"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/javascript": ["js", "mjs"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["md", "markdown"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/wgsl": ["wgsl"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "*jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
Object.freeze(rn);
var pe = function(e, t, n, a) {
  if (n === "a" && !a) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !a : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? a : n === "a" ? a.call(e) : a ? a.value : t.get(e);
}, Ne, Ge, je;
class ma {
  constructor(...t) {
    Ne.set(this, /* @__PURE__ */ new Map()), Ge.set(this, /* @__PURE__ */ new Map()), je.set(this, /* @__PURE__ */ new Map());
    for (const n of t)
      this.define(n);
  }
  define(t, n = !1) {
    for (let [a, i] of Object.entries(t)) {
      a = a.toLowerCase(), i = i.map((s) => s.toLowerCase()), pe(this, je, "f").has(a) || pe(this, je, "f").set(a, /* @__PURE__ */ new Set());
      const r = pe(this, je, "f").get(a);
      let o = !0;
      for (let s of i) {
        const c = s.startsWith("*");
        if (s = c ? s.slice(1) : s, r?.add(s), o && pe(this, Ge, "f").set(a, s), o = !1, c)
          continue;
        const l = pe(this, Ne, "f").get(s);
        if (l && l != a && !n)
          throw new Error(`"${a} -> ${s}" conflicts with "${l} -> ${s}". Pass \`force=true\` to override this definition.`);
        pe(this, Ne, "f").set(s, a);
      }
    }
    return this;
  }
  getType(t) {
    if (typeof t != "string")
      return null;
    const n = t.replace(/^.*[/\\]/, "").toLowerCase(), a = n.replace(/^.*\./, "").toLowerCase(), i = n.length < t.length;
    return !(a.length < n.length - 1) && i ? null : pe(this, Ne, "f").get(a) ?? null;
  }
  getExtension(t) {
    return typeof t != "string" ? null : (t = t?.split?.(";")[0], (t && pe(this, Ge, "f").get(t.trim().toLowerCase())) ?? null);
  }
  getAllExtensions(t) {
    return typeof t != "string" ? null : pe(this, je, "f").get(t.toLowerCase()) ?? null;
  }
  _freeze() {
    this.define = () => {
      throw new Error("define() not allowed for built-in Mime objects. See https://github.com/broofa/mime/blob/main/README.md#custom-mime-instances");
    }, Object.freeze(this);
    for (const t of pe(this, je, "f").values())
      Object.freeze(t);
    return this;
  }
  _getTestState() {
    return {
      types: pe(this, Ne, "f"),
      extensions: pe(this, Ge, "f")
    };
  }
}
Ne = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap();
new ma(rn, an)._freeze();
const Do = {
  backgroundColor: "#2970ff",
  color: "#ffffff"
}, qo = {
  backgroundColor: "#00A4EF",
  color: "#ffffff"
}, Wo = {
  backgroundColor: "#7FBA00",
  color: "#ffffff"
}, Fo = {
  backgroundColor: "#F25022",
  color: "#ffffff"
}, Lo = {
  backgroundColor: "#70707B",
  color: "#ffffff"
}, Uo = {
  backgroundColor: "#6AB023",
  color: "#ffffff"
}, Dn = (e) => {
  switch (e) {
    case "image/jpeg":
    case "image/png":
    case "image/gif":
    case "image/apng":
    case "image/bmp":
    case "image/svg+xml":
    case "image/tiff":
    case "image/webp":
      return Do;
    case "application/pdf":
      return {
        backgroundColor: "#F53E59",
        color: "#ffffff"
      };
    case "application/msword":
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return qo;
    case "application/vnd.ms-excel":
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return Wo;
    case "application/vnd.ms-powerpoint":
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return Fo;
    case "application/zip":
    case "application/vnd.rar":
    case "application/x-7z-compressed":
      return Lo;
    case "image/vnd.dwg":
    case "image/vnd.dxf":
    case "application/las":
      return Uo;
    default:
      return {
        backgroundColor: "#111111",
        color: "#ffffff"
      };
  }
}, Yt = new ma(rn, an);
Yt.define({ "application/las": ["las"] });
const Bo = nn("div", {
  name: "MuiUploadbox",
  slot: "root"
})(({ theme: e }) => ({
  display: "inline-flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  gap: "0.75rem",
  margin: "1rem 0",
  ".MuiTypography-subtitle2": {
    color: `${e.palette.grey[800]}`
  },
  ".MuiTypography-body2": {
    color: `${e.palette.grey[500]}`
  }
})), Yo = nn("div", {
  name: "MuiUploadbox",
  slot: "icon"
})(({ theme: e }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  lineHeight: 0,
  width: "2.5rem",
  height: "2.5rem",
  stroke: `${e.palette.grey[200]}`
})), Vo = nn("div", {
  name: "MuiUploadbox",
  slot: "iconText"
})(({ mimeType: e }) => ({
  fontFamily: "inherit",
  fontWeight: "bold",
  textTransform: "uppercase",
  fontSize: "0.625rem",
  bottom: "6px",
  borderRadius: "0.25rem",
  textAlign: "center",
  position: "absolute",
  letterSpacing: "-0.1px",
  left: 0,
  height: "1rem",
  lineHeight: "1rem",
  padding: "0 0.25rem",
  ...!!e && {
    color: Dn(e).color,
    backgroundColor: Dn(e).backgroundColor
  }
})), Zo = va.forwardRef(
  (e, t) => {
    const n = Yt.getType(e.mime), a = Yt.getExtension(n);
    return /* @__PURE__ */ Be(
      Bo,
      {
        sx: { ...e.sx, width: e.boxWidth ? e.boxWidth : "100%" },
        ref: t,
        children: [
          !e.onlyProgress || e.onlyProgress === void 0 ? /* @__PURE__ */ Be(Yo, { children: [
            /* @__PURE__ */ J("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "40", children: /* @__PURE__ */ Be("g", { fill: "none", fillRule: "evenodd", children: [
              /* @__PURE__ */ J(
                "path",
                {
                  strokeWidth: "1.5",
                  d: "M16.515.75a5.25 5.25 0 0 1 3.712 1.538l9.485 9.485a5.25 5.25 0 0 1 1.538 3.712V34c0 1.45-.588 2.762-1.538 3.712A5.234 5.234 0 0 1 26 39.25H6a5.234 5.234 0 0 1-3.712-1.538A5.234 5.234 0 0 1 .75 34V6c0-1.45.588-2.762 1.538-3.712A5.234 5.234 0 0 1 6 .75Z"
                }
              ),
              /* @__PURE__ */ J("path", { strokeWidth: "1.5", d: "M31 13h-8a4 4 0 0 1-4-4V1" })
            ] }) }),
            n && a && /* @__PURE__ */ J(Vo, { mimeType: n, children: a })
          ] }) : /* @__PURE__ */ J(Ye, {}),
          /* @__PURE__ */ Be(
            sn,
            {
              gap: 0,
              width: "100%",
              position: "relative",
              sx: {
                display: "flex",
                flexDirection: "column",
                flexShrink: 1,
                minWidth: 0
              },
              children: [
                !e.onlyProgress || e.onlyProgress === void 0 ? /* @__PURE__ */ J(Ye, { children: e.tooltip ? /* @__PURE__ */ J(xa, { title: e.title, children: /* @__PURE__ */ J(
                  ot,
                  {
                    sx: {
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      minWidth: 0,
                      flexGrow: 1
                    },
                    variant: "subtitle2",
                    width: e.maxWidthTitle ? e.maxWidthTitle : "100%",
                    children: e.title
                  }
                ) }) : /* @__PURE__ */ J(
                  ot,
                  {
                    sx: {
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      minWidth: 0,
                      flexGrow: 1
                    },
                    variant: "subtitle2",
                    width: e.maxWidthTitle ? e.maxWidthTitle : "100%",
                    children: e.title
                  }
                ) }) : /* @__PURE__ */ J(Ye, {}),
                /* @__PURE__ */ Be(
                  sn,
                  {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    children: [
                      e.hideDataSize ? /* @__PURE__ */ J(Ye, {}) : /* @__PURE__ */ J(
                        ot,
                        {
                          sx: { marginRight: "auto", fontSize: "0.8rem" },
                          variant: "body2",
                          children: e.uploadedDataSize + " / " + e.filesize
                        }
                      ),
                      e.hidePercentage ? /* @__PURE__ */ J(Ye, {}) : /* @__PURE__ */ J(
                        ot,
                        {
                          sx: { marginLeft: "auto", fontSize: "0.8rem" },
                          variant: "body2",
                          children: e.uploadPercentage.toFixed(0) + "%"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ J(
                  ga,
                  {
                    variant: e.uploadPercentage === 0 ? "buffer" : "determinate",
                    value: e.uploadPercentage,
                    valueBuffer: 0,
                    sx: { width: "100%" }
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }
);
export {
  Zo as Uploadbox
};
