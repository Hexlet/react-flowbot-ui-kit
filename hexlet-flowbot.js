import De from "react-dom";
import * as ae from "react";
import Te, { useContext as tt, useState as xe, useRef as ne, useEffect as me, useCallback as de, useMemo as lr, createContext as qr, useLayoutEffect as Vr, cloneElement as fr, forwardRef as _r, useImperativeHandle as $r } from "react";
function dr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ct, Xe = De;
if (process.env.NODE_ENV === "production")
  Ct = Xe.createRoot, Xe.hydrateRoot;
else {
  var Lt = Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ct = function(e, t) {
    Lt.usingClientEntryPoint = !0;
    try {
      return Xe.createRoot(e, t);
    } finally {
      Lt.usingClientEntryPoint = !1;
    }
  };
}
var Bt = { exports: {} }, Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function en() {
  return Ut || (Ut = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Te, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), z = Symbol.iterator, k = "@@iterator";
    function J(n) {
      if (n === null || typeof n != "object")
        return null;
      var c = z && n[z] || n[k];
      return typeof c == "function" ? c : null;
    }
    var K = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(n) {
      {
        for (var c = arguments.length, E = new Array(c > 1 ? c - 1 : 0), B = 1; B < c; B++)
          E[B - 1] = arguments[B];
        G("error", n, E);
      }
    }
    function G(n, c, E) {
      {
        var B = K.ReactDebugCurrentFrame, W = B.getStackAddendum();
        W !== "" && (c += "%s", E = E.concat([W]));
        var U = E.map(function(Q) {
          return String(Q);
        });
        U.unshift("Warning: " + c), Function.prototype.apply.call(console[n], console, U);
      }
    }
    var H = !1, v = !1, _ = !1, se = !1, pe = !1, he;
    he = Symbol.for("react.module.reference");
    function ve(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === a || n === o || pe || n === i || n === f || n === A || se || n === j || H || v || _ || typeof n == "object" && n !== null && (n.$$typeof === y || n.$$typeof === m || n.$$typeof === s || n.$$typeof === u || n.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === he || n.getModuleId !== void 0));
    }
    function ge(n, c, E) {
      var B = n.displayName;
      if (B)
        return B;
      var W = c.displayName || c.name || "";
      return W !== "" ? E + "(" + W + ")" : E;
    }
    function Ee(n) {
      return n.displayName || "Context";
    }
    function te(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case a:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case f:
          return "Suspense";
        case A:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case u:
            var c = n;
            return Ee(c) + ".Consumer";
          case s:
            var E = n;
            return Ee(E._context) + ".Provider";
          case d:
            return ge(n, n.render, "ForwardRef");
          case m:
            var B = n.displayName || null;
            return B !== null ? B : te(n.type) || "Memo";
          case y: {
            var W = n, U = W._payload, Q = W._init;
            try {
              return te(Q(U));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ee = Object.assign, ue = 0, X, oe, Z, ye, l, g, T;
    function C() {
    }
    C.__reactDisabledLog = !0;
    function b() {
      {
        if (ue === 0) {
          X = console.log, oe = console.info, Z = console.warn, ye = console.error, l = console.group, g = console.groupCollapsed, T = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: C,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        ue++;
      }
    }
    function M() {
      {
        if (ue--, ue === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ee({}, n, {
              value: X
            }),
            info: ee({}, n, {
              value: oe
            }),
            warn: ee({}, n, {
              value: Z
            }),
            error: ee({}, n, {
              value: ye
            }),
            group: ee({}, n, {
              value: l
            }),
            groupCollapsed: ee({}, n, {
              value: g
            }),
            groupEnd: ee({}, n, {
              value: T
            })
          });
        }
        ue < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var x = K.ReactCurrentDispatcher, R;
    function O(n, c, E) {
      {
        if (R === void 0)
          try {
            throw Error();
          } catch (W) {
            var B = W.stack.trim().match(/\n( *(at )?)/);
            R = B && B[1] || "";
          }
        return `
` + R + n;
      }
    }
    var D = !1, w;
    {
      var q = typeof WeakMap == "function" ? WeakMap : Map;
      w = new q();
    }
    function p(n, c) {
      if (!n || D)
        return "";
      {
        var E = w.get(n);
        if (E !== void 0)
          return E;
      }
      var B;
      D = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var U;
      U = x.current, x.current = null, b();
      try {
        if (c) {
          var Q = function() {
            throw Error();
          };
          if (Object.defineProperty(Q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Q, []);
            } catch (Be) {
              B = Be;
            }
            Reflect.construct(n, [], Q);
          } else {
            try {
              Q.call();
            } catch (Be) {
              B = Be;
            }
            n.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Be) {
            B = Be;
          }
          n();
        }
      } catch (Be) {
        if (Be && B && typeof Be.stack == "string") {
          for (var P = Be.stack.split(`
`), ie = B.stack.split(`
`), V = P.length - 1, $ = ie.length - 1; V >= 1 && $ >= 0 && P[V] !== ie[$]; )
            $--;
          for (; V >= 1 && $ >= 0; V--, $--)
            if (P[V] !== ie[$]) {
              if (V !== 1 || $ !== 1)
                do
                  if (V--, $--, $ < 0 || P[V] !== ie[$]) {
                    var fe = `
` + P[V].replace(" at new ", " at ");
                    return n.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", n.displayName)), typeof n == "function" && w.set(n, fe), fe;
                  }
                while (V >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        D = !1, x.current = U, M(), Error.prepareStackTrace = W;
      }
      var Ne = n ? n.displayName || n.name : "", Kt = Ne ? O(Ne) : "";
      return typeof n == "function" && w.set(n, Kt), Kt;
    }
    function re(n, c, E) {
      return p(n, !1);
    }
    function ce(n) {
      var c = n.prototype;
      return !!(c && c.isReactComponent);
    }
    function N(n, c, E) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return p(n, ce(n));
      if (typeof n == "string")
        return O(n);
      switch (n) {
        case f:
          return O("Suspense");
        case A:
          return O("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case d:
            return re(n.render);
          case m:
            return N(n.type, c, E);
          case y: {
            var B = n, W = B._payload, U = B._init;
            try {
              return N(U(W), c, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, we = {}, Ge = K.ReactDebugCurrentFrame;
    function Qe(n) {
      if (n) {
        var c = n._owner, E = N(n.type, n._source, c ? c.type : null);
        Ge.setExtraStackFrame(E);
      } else
        Ge.setExtraStackFrame(null);
    }
    function ot(n, c, E, B, W) {
      {
        var U = Function.call.bind(Ce);
        for (var Q in n)
          if (U(n, Q)) {
            var P = void 0;
            try {
              if (typeof n[Q] != "function") {
                var ie = Error((B || "React class") + ": " + E + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              P = n[Q](c, Q, B, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (V) {
              P = V;
            }
            P && !(P instanceof Error) && (Qe(W), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", E, Q, typeof P), Qe(null)), P instanceof Error && !(P.message in we) && (we[P.message] = !0, Qe(W), L("Failed %s type: %s", E, P.message), Qe(null));
          }
      }
    }
    var at = Array.isArray;
    function ze(n) {
      return at(n);
    }
    function it(n) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, E = c && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return E;
      }
    }
    function He(n) {
      try {
        return Ze(n), !1;
      } catch {
        return !0;
      }
    }
    function Ze(n) {
      return "" + n;
    }
    function I(n) {
      if (He(n))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", it(n)), Ze(n);
    }
    var le = K.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qt, It, st;
    st = {};
    function Ir(n) {
      if (Ce.call(n, "ref")) {
        var c = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Nr(n) {
      if (Ce.call(n, "key")) {
        var c = Object.getOwnPropertyDescriptor(n, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function kr(n, c) {
      if (typeof n.ref == "string" && le.current && c && le.current.stateNode !== c) {
        var E = te(le.current.type);
        st[E] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', te(le.current.type), n.ref), st[E] = !0);
      }
    }
    function Wr(n, c) {
      {
        var E = function() {
          Qt || (Qt = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        E.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function Fr(n, c) {
      {
        var E = function() {
          It || (It = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        E.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var Yr = function(n, c, E, B, W, U, Q) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: c,
        ref: E,
        props: Q,
        // Record the component responsible for creating this element.
        _owner: U
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function zr(n, c, E, B, W) {
      {
        var U, Q = {}, P = null, ie = null;
        E !== void 0 && (I(E), P = "" + E), Nr(c) && (I(c.key), P = "" + c.key), Ir(c) && (ie = c.ref, kr(c, W));
        for (U in c)
          Ce.call(c, U) && !Je.hasOwnProperty(U) && (Q[U] = c[U]);
        if (n && n.defaultProps) {
          var V = n.defaultProps;
          for (U in V)
            Q[U] === void 0 && (Q[U] = V[U]);
        }
        if (P || ie) {
          var $ = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          P && Wr(Q, $), ie && Fr(Q, $);
        }
        return Yr(n, P, ie, W, B, le.current, Q);
      }
    }
    var ut = K.ReactCurrentOwner, Nt = K.ReactDebugCurrentFrame;
    function Ie(n) {
      if (n) {
        var c = n._owner, E = N(n.type, n._source, c ? c.type : null);
        Nt.setExtraStackFrame(E);
      } else
        Nt.setExtraStackFrame(null);
    }
    var ct;
    ct = !1;
    function lt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function kt() {
      {
        if (ut.current) {
          var n = te(ut.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Kr(n) {
      {
        if (n !== void 0) {
          var c = n.fileName.replace(/^.*[\\\/]/, ""), E = n.lineNumber;
          return `

Check your code at ` + c + ":" + E + ".";
        }
        return "";
      }
    }
    var Wt = {};
    function Lr(n) {
      {
        var c = kt();
        if (!c) {
          var E = typeof n == "string" ? n : n.displayName || n.name;
          E && (c = `

Check the top-level render call using <` + E + ">.");
        }
        return c;
      }
    }
    function Ft(n, c) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var E = Lr(c);
        if (Wt[E])
          return;
        Wt[E] = !0;
        var B = "";
        n && n._owner && n._owner !== ut.current && (B = " It was passed a child from " + te(n._owner.type) + "."), Ie(n), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, B), Ie(null);
      }
    }
    function Yt(n, c) {
      {
        if (typeof n != "object")
          return;
        if (ze(n))
          for (var E = 0; E < n.length; E++) {
            var B = n[E];
            lt(B) && Ft(B, c);
          }
        else if (lt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var W = J(n);
          if (typeof W == "function" && W !== n.entries)
            for (var U = W.call(n), Q; !(Q = U.next()).done; )
              lt(Q.value) && Ft(Q.value, c);
        }
      }
    }
    function Ur(n) {
      {
        var c = n.type;
        if (c == null || typeof c == "string")
          return;
        var E;
        if (typeof c == "function")
          E = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === m))
          E = c.propTypes;
        else
          return;
        if (E) {
          var B = te(c);
          ot(E, n.props, "prop", B, n);
        } else if (c.PropTypes !== void 0 && !ct) {
          ct = !0;
          var W = te(c);
          L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gr(n) {
      {
        for (var c = Object.keys(n.props), E = 0; E < c.length; E++) {
          var B = c[E];
          if (B !== "children" && B !== "key") {
            Ie(n), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), Ie(null);
            break;
          }
        }
        n.ref !== null && (Ie(n), L("Invalid attribute `ref` supplied to `React.Fragment`."), Ie(null));
      }
    }
    function zt(n, c, E, B, W, U) {
      {
        var Q = ve(n);
        if (!Q) {
          var P = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = Kr(W);
          ie ? P += ie : P += kt();
          var V;
          n === null ? V = "null" : ze(n) ? V = "array" : n !== void 0 && n.$$typeof === t ? (V = "<" + (te(n.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : V = typeof n, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, P);
        }
        var $ = zr(n, c, E, W, U);
        if ($ == null)
          return $;
        if (Q) {
          var fe = c.children;
          if (fe !== void 0)
            if (B)
              if (ze(fe)) {
                for (var Ne = 0; Ne < fe.length; Ne++)
                  Yt(fe[Ne], n);
                Object.freeze && Object.freeze(fe);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yt(fe, n);
        }
        return n === a ? Gr($) : Ur($), $;
      }
    }
    function Hr(n, c, E) {
      return zt(n, c, E, !0);
    }
    function Zr(n, c, E) {
      return zt(n, c, E, !1);
    }
    var Jr = Zr, Xr = Hr;
    Ke.Fragment = a, Ke.jsx = Jr, Ke.jsxs = Xr;
  }()), Ke;
}
var Le = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gt;
function tn() {
  if (Gt)
    return Le;
  Gt = 1;
  var e = Te, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, d, f) {
    var A, m = {}, y = null, j = null;
    f !== void 0 && (y = "" + f), d.key !== void 0 && (y = "" + d.key), d.ref !== void 0 && (j = d.ref);
    for (A in d)
      a.call(d, A) && !o.hasOwnProperty(A) && (m[A] = d[A]);
    if (u && u.defaultProps)
      for (A in d = u.defaultProps, d)
        m[A] === void 0 && (m[A] = d[A]);
    return { $$typeof: t, type: u, key: y, ref: j, props: m, _owner: i.current };
  }
  return Le.Fragment = r, Le.jsx = s, Le.jsxs = s, Le;
}
process.env.NODE_ENV === "production" ? Bt.exports = tn() : Bt.exports = en();
var h = Bt.exports, Ar = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var o = "", s = 0; s < arguments.length; s++) {
        var u = arguments[s];
        u && (o = i(o, a(u)));
      }
      return o;
    }
    function a(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return r.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var s = "";
      for (var u in o)
        t.call(o, u) && o[u] && (s = i(s, u));
      return s;
    }
    function i(o, s) {
      return s ? o ? o + " " + s : o + s : o;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Ar);
var rn = Ar.exports;
const Ae = /* @__PURE__ */ dr(rn), nn = ["as", "disabled"];
function on(e, t) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function an(e) {
  return !e || e.trim() === "#";
}
function pr({
  tagName: e,
  disabled: t,
  href: r,
  target: a,
  rel: i,
  role: o,
  onClick: s,
  tabIndex: u = 0,
  type: d
}) {
  e || (r != null || a != null || i != null ? e = "a" : e = "button");
  const f = {
    tagName: e
  };
  if (e === "button")
    return [{
      type: d || "button",
      disabled: t
    }, f];
  const A = (y) => {
    if ((t || e === "a" && an(r)) && y.preventDefault(), t) {
      y.stopPropagation();
      return;
    }
    s == null || s(y);
  }, m = (y) => {
    y.key === " " && (y.preventDefault(), A(y));
  };
  return e === "a" && (r || (r = "#"), t && (r = void 0)), [{
    role: o ?? "button",
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: void 0,
    tabIndex: t ? void 0 : u,
    href: r,
    target: e === "a" ? a : void 0,
    "aria-disabled": t || void 0,
    rel: e === "a" ? i : void 0,
    onClick: A,
    onKeyDown: m
  }, f];
}
const sn = /* @__PURE__ */ ae.forwardRef((e, t) => {
  let {
    as: r,
    disabled: a
  } = e, i = on(e, nn);
  const [o, {
    tagName: s
  }] = pr(Object.assign({
    tagName: r,
    disabled: a
  }, i));
  return /* @__PURE__ */ h.jsx(s, Object.assign({}, i, o, {
    ref: t
  }));
});
sn.displayName = "Button";
const un = ["xxl", "xl", "lg", "md", "sm", "xs"], cn = "xs", vr = /* @__PURE__ */ ae.createContext({
  prefixes: {},
  breakpoints: un,
  minBreakpoint: cn
});
function Pe(e, t) {
  const {
    prefixes: r
  } = tt(vr);
  return e || r[t] || t;
}
function ln() {
  const {
    dir: e
  } = tt(vr);
  return e === "rtl";
}
const gr = /* @__PURE__ */ ae.forwardRef(({
  as: e,
  bsPrefix: t,
  variant: r = "primary",
  size: a,
  active: i = !1,
  disabled: o = !1,
  className: s,
  ...u
}, d) => {
  const f = Pe(t, "btn"), [A, {
    tagName: m
  }] = pr({
    tagName: e,
    disabled: o,
    ...u
  }), y = m;
  return /* @__PURE__ */ h.jsx(y, {
    ...A,
    ...u,
    ref: d,
    disabled: o,
    className: Ae(s, f, i && "active", r && `${f}-${r}`, a && `${f}-${a}`, u.href && o && "disabled")
  });
});
gr.displayName = "Button";
const fn = gr, Ye = !!(typeof window < "u" && window.document && window.document.createElement);
var Tt = !1, xt = !1;
try {
  var ft = {
    get passive() {
      return Tt = !0;
    },
    get once() {
      return xt = Tt = !0;
    }
  };
  Ye && (window.addEventListener("test", ft, ft), window.removeEventListener("test", ft, !0));
} catch {
}
function Er(e, t, r, a) {
  if (a && typeof a != "boolean" && !xt) {
    var i = a.once, o = a.capture, s = r;
    !xt && i && (s = r.__once || function u(d) {
      this.removeEventListener(t, u, o), r.call(this, d);
    }, r.__once = s), e.addEventListener(t, s, Tt ? a : o);
  }
  e.addEventListener(t, r, a);
}
function rt(e) {
  return e && e.ownerDocument || document;
}
function Rt(e, t, r, a) {
  var i = a && typeof a != "boolean" ? a.capture : a;
  e.removeEventListener(t, r, i), r.__once && e.removeEventListener(t, r.__once, i);
}
var qe;
function Ht(e) {
  if ((!qe && qe !== 0 || e) && Ye) {
    var t = document.createElement("div");
    t.style.position = "absolute", t.style.top = "-9999px", t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t), qe = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
  }
  return qe;
}
function dn() {
  return xe(null);
}
function An(e) {
  const t = ne(e);
  return me(() => {
    t.current = e;
  }, [e]), t;
}
function be(e) {
  const t = An(e);
  return de(function(...r) {
    return t.current && t.current(...r);
  }, [t]);
}
const Zt = (e) => !e || typeof e == "function" ? e : (t) => {
  e.current = t;
};
function pn(e, t) {
  const r = Zt(e), a = Zt(t);
  return (i) => {
    r && r(i), a && a(i);
  };
}
function nt(e, t) {
  return lr(() => pn(e, t), [e, t]);
}
function vn(e) {
  const t = ne(e);
  return t.current = e, t;
}
function mr(e) {
  const t = vn(e);
  me(() => () => t.current(), []);
}
function gn(e) {
  var t = rt(e);
  return t && t.defaultView || window;
}
function En(e, t) {
  return gn(e).getComputedStyle(e, t);
}
var mn = /([A-Z])/g;
function hn(e) {
  return e.replace(mn, "-$1").toLowerCase();
}
var yn = /^ms-/;
function Ve(e) {
  return hn(e).replace(yn, "-ms-");
}
var bn = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Cn(e) {
  return !!(e && bn.test(e));
}
function je(e, t) {
  var r = "", a = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Ve(t)) || En(e).getPropertyValue(Ve(t));
  Object.keys(t).forEach(function(i) {
    var o = t[i];
    !o && o !== 0 ? e.style.removeProperty(Ve(i)) : Cn(i) ? a += i + "(" + o + ") " : r += Ve(i) + ": " + o + ";";
  }), a && (r += "transform: " + a + ";"), e.style.cssText += ";" + r;
}
function et(e, t, r, a) {
  return Er(e, t, r, a), function() {
    Rt(e, t, r, a);
  };
}
function Bn(e, t, r, a) {
  if (r === void 0 && (r = !1), a === void 0 && (a = !0), e) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, r, a), e.dispatchEvent(i);
  }
}
function Tn(e) {
  var t = je(e, "transitionDuration") || "", r = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * r;
}
function xn(e, t, r) {
  r === void 0 && (r = 5);
  var a = !1, i = setTimeout(function() {
    a || Bn(e, "transitionend", !0);
  }, t + r), o = et(e, "transitionend", function() {
    a = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(i), o();
  };
}
function hr(e, t, r, a) {
  r == null && (r = Tn(e) || 0);
  var i = xn(e, r, a), o = et(e, "transitionend", t);
  return function() {
    i(), o();
  };
}
function dt(e) {
  e === void 0 && (e = rt());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function Jt(e, t) {
  if (e.contains)
    return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
function Rn() {
  const e = ne(!0), t = ne(() => e.current);
  return me(() => (e.current = !0, () => {
    e.current = !1;
  }), []), t.current;
}
function wn(e) {
  const t = ne(null);
  return me(() => {
    t.current = e;
  }), t.current;
}
const On = "data-rr-ui-";
function Sn(e) {
  return `${On}${e}`;
}
function Mn(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const Xt = Sn("modal-open");
class Dn {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: r = !0,
    isRTL: a = !1
  } = {}) {
    this.handleContainerOverflow = r, this.isRTL = a, this.modals = [], this.ownerDocument = t;
  }
  getScrollbarWidth() {
    return Mn(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {
  }
  removeModalAttributes(t) {
  }
  setContainerStyle(t) {
    const r = {
      overflow: "hidden"
    }, a = this.isRTL ? "paddingLeft" : "paddingRight", i = this.getElement();
    t.style = {
      overflow: i.style.overflow,
      [a]: i.style[a]
    }, t.scrollBarWidth && (r[a] = `${parseInt(je(i, a) || "0", 10) + t.scrollBarWidth}px`), i.setAttribute(Xt, ""), je(i, r);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const r = this.getElement();
    r.removeAttribute(Xt), Object.assign(r.style, t.style);
  }
  add(t) {
    let r = this.modals.indexOf(t);
    return r !== -1 || (r = this.modals.length, this.modals.push(t), this.setModalAttributes(t), r !== 0) || (this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    }, this.handleContainerOverflow && this.setContainerStyle(this.state)), r;
  }
  remove(t) {
    const r = this.modals.indexOf(t);
    r !== -1 && (this.modals.splice(r, 1), !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state), this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const Mt = Dn, yr = /* @__PURE__ */ qr(Ye ? window : void 0);
yr.Provider;
function Dt() {
  return tt(yr);
}
const At = (e, t) => Ye ? e == null ? (t || rt()).body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), e && ("nodeType" in e || e.getBoundingClientRect) ? e : null) : null;
function jn(e, t) {
  const r = Dt(), [a, i] = xe(() => At(e, r == null ? void 0 : r.document));
  if (!a) {
    const o = At(e);
    o && i(o);
  }
  return me(() => {
    t && a && t(a);
  }, [t, a]), me(() => {
    const o = At(e);
    o !== a && i(o);
  }, [e, a]), a;
}
const Pn = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", Qn = typeof document < "u", qt = Qn || Pn ? Vr : me;
function In({
  children: e,
  in: t,
  onExited: r,
  mountOnEnter: a,
  unmountOnExit: i
}) {
  const o = ne(null), s = ne(t), u = be(r);
  me(() => {
    t ? s.current = !0 : u(o.current);
  }, [t, u]);
  const d = nt(o, e.ref), f = /* @__PURE__ */ fr(e, {
    ref: d
  });
  return t ? f : i || !s.current && a ? null : f;
}
function Nn({
  in: e,
  onTransition: t
}) {
  const r = ne(null), a = ne(!0), i = be(t);
  return qt(() => {
    if (!r.current)
      return;
    let o = !1;
    return i({
      in: e,
      element: r.current,
      initial: a.current,
      isStale: () => o
    }), () => {
      o = !0;
    };
  }, [e, i]), qt(() => (a.current = !1, () => {
    a.current = !0;
  }), []), r;
}
function kn({
  children: e,
  in: t,
  onExited: r,
  onEntered: a,
  transition: i
}) {
  const [o, s] = xe(!t);
  t && o && s(!1);
  const u = Nn({
    in: !!t,
    onTransition: (f) => {
      const A = () => {
        f.isStale() || (f.in ? a == null || a(f.element, f.initial) : (s(!0), r == null || r(f.element)));
      };
      Promise.resolve(i(f)).then(A, (m) => {
        throw f.in || s(!0), m;
      });
    }
  }), d = nt(u, e.ref);
  return o && !t ? null : /* @__PURE__ */ fr(e, {
    ref: d
  });
}
function Vt(e, t, r) {
  return e ? /* @__PURE__ */ h.jsx(e, Object.assign({}, r)) : t ? /* @__PURE__ */ h.jsx(kn, Object.assign({}, r, {
    transition: t
  })) : /* @__PURE__ */ h.jsx(In, Object.assign({}, r));
}
function Wn(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
const Fn = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function Yn(e, t) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
let pt;
function zn(e) {
  return pt || (pt = new Mt({
    ownerDocument: e == null ? void 0 : e.document
  })), pt;
}
function Kn(e) {
  const t = Dt(), r = e || zn(t), a = ne({
    dialog: null,
    backdrop: null
  });
  return Object.assign(a.current, {
    add: () => r.add(a.current),
    remove: () => r.remove(a.current),
    isTopModal: () => r.isTopModal(a.current),
    setDialogRef: de((i) => {
      a.current.dialog = i;
    }, []),
    setBackdropRef: de((i) => {
      a.current.backdrop = i;
    }, [])
  });
}
const br = /* @__PURE__ */ _r((e, t) => {
  let {
    show: r = !1,
    role: a = "dialog",
    className: i,
    style: o,
    children: s,
    backdrop: u = !0,
    keyboard: d = !0,
    onBackdropClick: f,
    onEscapeKeyDown: A,
    transition: m,
    runTransition: y,
    backdropTransition: j,
    runBackdropTransition: z,
    autoFocus: k = !0,
    enforceFocus: J = !0,
    restoreFocus: K = !0,
    restoreFocusOptions: L,
    renderDialog: G,
    renderBackdrop: H = (N) => /* @__PURE__ */ h.jsx("div", Object.assign({}, N)),
    manager: v,
    container: _,
    onShow: se,
    onHide: pe = () => {
    },
    onExit: he,
    onExited: ve,
    onExiting: ge,
    onEnter: Ee,
    onEntering: te,
    onEntered: ee
  } = e, ue = Yn(e, Fn);
  const X = Dt(), oe = jn(_), Z = Kn(v), ye = Rn(), l = wn(r), [g, T] = xe(!r), C = ne(null);
  $r(t, () => Z, [Z]), Ye && !l && r && (C.current = dt(X == null ? void 0 : X.document)), r && g && T(!1);
  const b = be(() => {
    if (Z.add(), w.current = et(document, "keydown", O), D.current = et(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(x),
      !0
    ), se && se(), k) {
      var N, Ce;
      const we = dt((N = (Ce = Z.dialog) == null ? void 0 : Ce.ownerDocument) != null ? N : X == null ? void 0 : X.document);
      Z.dialog && we && !Jt(Z.dialog, we) && (C.current = we, Z.dialog.focus());
    }
  }), M = be(() => {
    if (Z.remove(), w.current == null || w.current(), D.current == null || D.current(), K) {
      var N;
      (N = C.current) == null || N.focus == null || N.focus(L), C.current = null;
    }
  });
  me(() => {
    !r || !oe || b();
  }, [
    r,
    oe,
    /* should never change: */
    b
  ]), me(() => {
    g && M();
  }, [g, M]), mr(() => {
    M();
  });
  const x = be(() => {
    if (!J || !ye() || !Z.isTopModal())
      return;
    const N = dt(X == null ? void 0 : X.document);
    Z.dialog && N && !Jt(Z.dialog, N) && Z.dialog.focus();
  }), R = be((N) => {
    N.target === N.currentTarget && (f == null || f(N), u === !0 && pe());
  }), O = be((N) => {
    d && Wn(N) && Z.isTopModal() && (A == null || A(N), N.defaultPrevented || pe());
  }), D = ne(), w = ne(), q = (...N) => {
    T(!0), ve == null || ve(...N);
  };
  if (!oe)
    return null;
  const p = Object.assign({
    role: a,
    ref: Z.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": a === "dialog" ? !0 : void 0
  }, ue, {
    style: o,
    className: i,
    tabIndex: -1
  });
  let re = G ? G(p) : /* @__PURE__ */ h.jsx("div", Object.assign({}, p, {
    children: /* @__PURE__ */ ae.cloneElement(s, {
      role: "document"
    })
  }));
  re = Vt(m, y, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!r,
    onExit: he,
    onExiting: ge,
    onExited: q,
    onEnter: Ee,
    onEntering: te,
    onEntered: ee,
    children: re
  });
  let ce = null;
  return u && (ce = H({
    ref: Z.setBackdropRef,
    onClick: R
  }), ce = Vt(j, z, {
    in: !!r,
    appear: !0,
    mountOnEnter: !0,
    unmountOnExit: !0,
    children: ce
  })), /* @__PURE__ */ h.jsx(h.Fragment, {
    children: /* @__PURE__ */ De.createPortal(/* @__PURE__ */ h.jsxs(h.Fragment, {
      children: [ce, re]
    }), oe)
  });
});
br.displayName = "Modal";
const Ln = Object.assign(br, {
  Manager: Mt
});
function Un(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Gn(e, t) {
  e.classList ? e.classList.add(t) : Un(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
var Hn = Function.prototype.bind.call(Function.prototype.call, [].slice);
function ke(e, t) {
  return Hn(e.querySelectorAll(t));
}
function _t(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function Zn(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = _t(e.className, t) : e.setAttribute("class", _t(e.className && e.className.baseVal || "", t));
}
const We = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
class Jn extends Mt {
  adjustAndStore(t, r, a) {
    const i = r.style[t];
    r.dataset[t] = i, je(r, {
      [t]: `${parseFloat(je(r, t)) + a}px`
    });
  }
  restore(t, r) {
    const a = r.dataset[t];
    a !== void 0 && (delete r.dataset[t], je(r, {
      [t]: a
    }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const r = this.getElement();
    if (Gn(r, "modal-open"), !t.scrollBarWidth)
      return;
    const a = this.isRTL ? "paddingLeft" : "paddingRight", i = this.isRTL ? "marginLeft" : "marginRight";
    ke(r, We.FIXED_CONTENT).forEach((o) => this.adjustAndStore(a, o, t.scrollBarWidth)), ke(r, We.STICKY_CONTENT).forEach((o) => this.adjustAndStore(i, o, -t.scrollBarWidth)), ke(r, We.NAVBAR_TOGGLER).forEach((o) => this.adjustAndStore(i, o, t.scrollBarWidth));
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const r = this.getElement();
    Zn(r, "modal-open");
    const a = this.isRTL ? "paddingLeft" : "paddingRight", i = this.isRTL ? "marginLeft" : "marginRight";
    ke(r, We.FIXED_CONTENT).forEach((o) => this.restore(a, o)), ke(r, We.STICKY_CONTENT).forEach((o) => this.restore(i, o)), ke(r, We.NAVBAR_TOGGLER).forEach((o) => this.restore(i, o));
  }
}
let vt;
function Xn(e) {
  return vt || (vt = new Jn(e)), vt;
}
function qn(e, t) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), i, o;
  for (o = 0; o < a.length; o++)
    i = a[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function wt(e, t) {
  return wt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, i) {
    return a.__proto__ = i, a;
  }, wt(e, t);
}
function Vn(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, wt(e, t);
}
var Ot = { exports: {} }, gt, $t;
function jt() {
  if ($t)
    return gt;
  $t = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return gt = e, gt;
}
var Et, er;
function _n() {
  if (er)
    return Et;
  er = 1;
  var e = jt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Et = function() {
    function a(s, u, d, f, A, m) {
      if (m !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    a.isRequired = a;
    function i() {
      return a;
    }
    var o = {
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
      checkPropTypes: r,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, Et;
}
var _e = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr;
function $n() {
  return tr || (tr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, A = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, j = e ? Symbol.for("react.memo") : 60115, z = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, J = e ? Symbol.for("react.fundamental") : 60117, K = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
    function G(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === a || p === f || p === o || p === i || p === m || p === y || typeof p == "object" && p !== null && (p.$$typeof === z || p.$$typeof === j || p.$$typeof === s || p.$$typeof === u || p.$$typeof === A || p.$$typeof === J || p.$$typeof === K || p.$$typeof === L || p.$$typeof === k);
    }
    function H(p) {
      if (typeof p == "object" && p !== null) {
        var re = p.$$typeof;
        switch (re) {
          case t:
            var ce = p.type;
            switch (ce) {
              case d:
              case f:
              case a:
              case o:
              case i:
              case m:
                return ce;
              default:
                var N = ce && ce.$$typeof;
                switch (N) {
                  case u:
                  case A:
                  case z:
                  case j:
                  case s:
                    return N;
                  default:
                    return re;
                }
            }
          case r:
            return re;
        }
      }
    }
    var v = d, _ = f, se = u, pe = s, he = t, ve = A, ge = a, Ee = z, te = j, ee = r, ue = o, X = i, oe = m, Z = !1;
    function ye(p) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), l(p) || H(p) === d;
    }
    function l(p) {
      return H(p) === f;
    }
    function g(p) {
      return H(p) === u;
    }
    function T(p) {
      return H(p) === s;
    }
    function C(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function b(p) {
      return H(p) === A;
    }
    function M(p) {
      return H(p) === a;
    }
    function x(p) {
      return H(p) === z;
    }
    function R(p) {
      return H(p) === j;
    }
    function O(p) {
      return H(p) === r;
    }
    function D(p) {
      return H(p) === o;
    }
    function w(p) {
      return H(p) === i;
    }
    function q(p) {
      return H(p) === m;
    }
    F.AsyncMode = v, F.ConcurrentMode = _, F.ContextConsumer = se, F.ContextProvider = pe, F.Element = he, F.ForwardRef = ve, F.Fragment = ge, F.Lazy = Ee, F.Memo = te, F.Portal = ee, F.Profiler = ue, F.StrictMode = X, F.Suspense = oe, F.isAsyncMode = ye, F.isConcurrentMode = l, F.isContextConsumer = g, F.isContextProvider = T, F.isElement = C, F.isForwardRef = b, F.isFragment = M, F.isLazy = x, F.isMemo = R, F.isPortal = O, F.isProfiler = D, F.isStrictMode = w, F.isSuspense = q, F.isValidElementType = G, F.typeOf = H;
  }()), F;
}
var Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function eo() {
  if (rr)
    return Y;
  rr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, A = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, j = e ? Symbol.for("react.memo") : 60115, z = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, J = e ? Symbol.for("react.fundamental") : 60117, K = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
  function G(v) {
    if (typeof v == "object" && v !== null) {
      var _ = v.$$typeof;
      switch (_) {
        case t:
          switch (v = v.type, v) {
            case d:
            case f:
            case a:
            case o:
            case i:
            case m:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case u:
                case A:
                case z:
                case j:
                case s:
                  return v;
                default:
                  return _;
              }
          }
        case r:
          return _;
      }
    }
  }
  function H(v) {
    return G(v) === f;
  }
  return Y.AsyncMode = d, Y.ConcurrentMode = f, Y.ContextConsumer = u, Y.ContextProvider = s, Y.Element = t, Y.ForwardRef = A, Y.Fragment = a, Y.Lazy = z, Y.Memo = j, Y.Portal = r, Y.Profiler = o, Y.StrictMode = i, Y.Suspense = m, Y.isAsyncMode = function(v) {
    return H(v) || G(v) === d;
  }, Y.isConcurrentMode = H, Y.isContextConsumer = function(v) {
    return G(v) === u;
  }, Y.isContextProvider = function(v) {
    return G(v) === s;
  }, Y.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, Y.isForwardRef = function(v) {
    return G(v) === A;
  }, Y.isFragment = function(v) {
    return G(v) === a;
  }, Y.isLazy = function(v) {
    return G(v) === z;
  }, Y.isMemo = function(v) {
    return G(v) === j;
  }, Y.isPortal = function(v) {
    return G(v) === r;
  }, Y.isProfiler = function(v) {
    return G(v) === o;
  }, Y.isStrictMode = function(v) {
    return G(v) === i;
  }, Y.isSuspense = function(v) {
    return G(v) === m;
  }, Y.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === a || v === f || v === o || v === i || v === m || v === y || typeof v == "object" && v !== null && (v.$$typeof === z || v.$$typeof === j || v.$$typeof === s || v.$$typeof === u || v.$$typeof === A || v.$$typeof === J || v.$$typeof === K || v.$$typeof === L || v.$$typeof === k);
  }, Y.typeOf = G, Y;
}
var nr;
function Cr() {
  return nr || (nr = 1, process.env.NODE_ENV === "production" ? _e.exports = eo() : _e.exports = $n()), _e.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var mt, or;
function to() {
  if (or)
    return mt;
  or = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function a(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var s = {}, u = 0; u < 10; u++)
        s["_" + String.fromCharCode(u)] = u;
      var d = Object.getOwnPropertyNames(s).map(function(A) {
        return s[A];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(A) {
        f[A] = A;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return mt = i() ? Object.assign : function(o, s) {
    for (var u, d = a(o), f, A = 1; A < arguments.length; A++) {
      u = Object(arguments[A]);
      for (var m in u)
        t.call(u, m) && (d[m] = u[m]);
      if (e) {
        f = e(u);
        for (var y = 0; y < f.length; y++)
          r.call(u, f[y]) && (d[f[y]] = u[f[y]]);
      }
    }
    return d;
  }, mt;
}
var ht, ar;
function Br() {
  return ar || (ar = 1, ht = Function.call.bind(Object.prototype.hasOwnProperty)), ht;
}
var yt, ir;
function ro() {
  if (ir)
    return yt;
  ir = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = jt(), r = {}, a = Br();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(o, s, u, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var A in o)
        if (a(o, A)) {
          var m;
          try {
            if (typeof o[A] != "function") {
              var y = Error(
                (d || "React class") + ": " + u + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            m = o[A](s, A, d, u, null, t);
          } catch (z) {
            m = z;
          }
          if (m && !(m instanceof Error) && e(
            (d || "React class") + ": type specification of " + u + " `" + A + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var j = f ? f() : "";
            e(
              "Failed " + u + " type: " + m.message + (j ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, yt = i, yt;
}
var bt, sr;
function no() {
  if (sr)
    return bt;
  sr = 1;
  var e = Cr(), t = to(), r = jt(), a = Br(), i = ro(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(u) {
    var d = "Warning: " + u;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return bt = function(u, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, A = "@@iterator";
    function m(l) {
      var g = l && (f && l[f] || l[A]);
      if (typeof g == "function")
        return g;
    }
    var y = "<<anonymous>>", j = {
      array: K("array"),
      bigint: K("bigint"),
      bool: K("boolean"),
      func: K("function"),
      number: K("number"),
      object: K("object"),
      string: K("string"),
      symbol: K("symbol"),
      any: L(),
      arrayOf: G,
      element: H(),
      elementType: v(),
      instanceOf: _,
      node: ve(),
      objectOf: pe,
      oneOf: se,
      oneOfType: he,
      shape: Ee,
      exact: te
    };
    function z(l, g) {
      return l === g ? l !== 0 || 1 / l === 1 / g : l !== l && g !== g;
    }
    function k(l, g) {
      this.message = l, this.data = g && typeof g == "object" ? g : {}, this.stack = "";
    }
    k.prototype = Error.prototype;
    function J(l) {
      if (process.env.NODE_ENV !== "production")
        var g = {}, T = 0;
      function C(M, x, R, O, D, w, q) {
        if (O = O || y, w = w || R, q !== r) {
          if (d) {
            var p = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw p.name = "Invariant Violation", p;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var re = O + ":" + R;
            !g[re] && // Avoid spamming the console because they are often not actionable except for lib authors
            T < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + w + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), g[re] = !0, T++);
          }
        }
        return x[R] == null ? M ? x[R] === null ? new k("The " + D + " `" + w + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new k("The " + D + " `" + w + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : l(x, R, O, D, w);
      }
      var b = C.bind(null, !1);
      return b.isRequired = C.bind(null, !0), b;
    }
    function K(l) {
      function g(T, C, b, M, x, R) {
        var O = T[C], D = X(O);
        if (D !== l) {
          var w = oe(O);
          return new k(
            "Invalid " + M + " `" + x + "` of type " + ("`" + w + "` supplied to `" + b + "`, expected ") + ("`" + l + "`."),
            { expectedType: l }
          );
        }
        return null;
      }
      return J(g);
    }
    function L() {
      return J(s);
    }
    function G(l) {
      function g(T, C, b, M, x) {
        if (typeof l != "function")
          return new k("Property `" + x + "` of component `" + b + "` has invalid PropType notation inside arrayOf.");
        var R = T[C];
        if (!Array.isArray(R)) {
          var O = X(R);
          return new k("Invalid " + M + " `" + x + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected an array."));
        }
        for (var D = 0; D < R.length; D++) {
          var w = l(R, D, b, M, x + "[" + D + "]", r);
          if (w instanceof Error)
            return w;
        }
        return null;
      }
      return J(g);
    }
    function H() {
      function l(g, T, C, b, M) {
        var x = g[T];
        if (!u(x)) {
          var R = X(x);
          return new k("Invalid " + b + " `" + M + "` of type " + ("`" + R + "` supplied to `" + C + "`, expected a single ReactElement."));
        }
        return null;
      }
      return J(l);
    }
    function v() {
      function l(g, T, C, b, M) {
        var x = g[T];
        if (!e.isValidElementType(x)) {
          var R = X(x);
          return new k("Invalid " + b + " `" + M + "` of type " + ("`" + R + "` supplied to `" + C + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return J(l);
    }
    function _(l) {
      function g(T, C, b, M, x) {
        if (!(T[C] instanceof l)) {
          var R = l.name || y, O = ye(T[C]);
          return new k("Invalid " + M + " `" + x + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return J(g);
    }
    function se(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function g(T, C, b, M, x) {
        for (var R = T[C], O = 0; O < l.length; O++)
          if (z(R, l[O]))
            return null;
        var D = JSON.stringify(l, function(q, p) {
          var re = oe(p);
          return re === "symbol" ? String(p) : p;
        });
        return new k("Invalid " + M + " `" + x + "` of value `" + String(R) + "` " + ("supplied to `" + b + "`, expected one of " + D + "."));
      }
      return J(g);
    }
    function pe(l) {
      function g(T, C, b, M, x) {
        if (typeof l != "function")
          return new k("Property `" + x + "` of component `" + b + "` has invalid PropType notation inside objectOf.");
        var R = T[C], O = X(R);
        if (O !== "object")
          return new k("Invalid " + M + " `" + x + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected an object."));
        for (var D in R)
          if (a(R, D)) {
            var w = l(R, D, b, M, x + "." + D, r);
            if (w instanceof Error)
              return w;
          }
        return null;
      }
      return J(g);
    }
    function he(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var g = 0; g < l.length; g++) {
        var T = l[g];
        if (typeof T != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Z(T) + " at index " + g + "."
          ), s;
      }
      function C(b, M, x, R, O) {
        for (var D = [], w = 0; w < l.length; w++) {
          var q = l[w], p = q(b, M, x, R, O, r);
          if (p == null)
            return null;
          p.data && a(p.data, "expectedType") && D.push(p.data.expectedType);
        }
        var re = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new k("Invalid " + R + " `" + O + "` supplied to " + ("`" + x + "`" + re + "."));
      }
      return J(C);
    }
    function ve() {
      function l(g, T, C, b, M) {
        return ee(g[T]) ? null : new k("Invalid " + b + " `" + M + "` supplied to " + ("`" + C + "`, expected a ReactNode."));
      }
      return J(l);
    }
    function ge(l, g, T, C, b) {
      return new k(
        (l || "React class") + ": " + g + " type `" + T + "." + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + b + "`."
      );
    }
    function Ee(l) {
      function g(T, C, b, M, x) {
        var R = T[C], O = X(R);
        if (O !== "object")
          return new k("Invalid " + M + " `" + x + "` of type `" + O + "` " + ("supplied to `" + b + "`, expected `object`."));
        for (var D in l) {
          var w = l[D];
          if (typeof w != "function")
            return ge(b, M, x, D, oe(w));
          var q = w(R, D, b, M, x + "." + D, r);
          if (q)
            return q;
        }
        return null;
      }
      return J(g);
    }
    function te(l) {
      function g(T, C, b, M, x) {
        var R = T[C], O = X(R);
        if (O !== "object")
          return new k("Invalid " + M + " `" + x + "` of type `" + O + "` " + ("supplied to `" + b + "`, expected `object`."));
        var D = t({}, T[C], l);
        for (var w in D) {
          var q = l[w];
          if (a(l, w) && typeof q != "function")
            return ge(b, M, x, w, oe(q));
          if (!q)
            return new k(
              "Invalid " + M + " `" + x + "` key `" + w + "` supplied to `" + b + "`.\nBad object: " + JSON.stringify(T[C], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(l), null, "  ")
            );
          var p = q(R, w, b, M, x + "." + w, r);
          if (p)
            return p;
        }
        return null;
      }
      return J(g);
    }
    function ee(l) {
      switch (typeof l) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !l;
        case "object":
          if (Array.isArray(l))
            return l.every(ee);
          if (l === null || u(l))
            return !0;
          var g = m(l);
          if (g) {
            var T = g.call(l), C;
            if (g !== l.entries) {
              for (; !(C = T.next()).done; )
                if (!ee(C.value))
                  return !1;
            } else
              for (; !(C = T.next()).done; ) {
                var b = C.value;
                if (b && !ee(b[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ue(l, g) {
      return l === "symbol" ? !0 : g ? g["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && g instanceof Symbol : !1;
    }
    function X(l) {
      var g = typeof l;
      return Array.isArray(l) ? "array" : l instanceof RegExp ? "object" : ue(g, l) ? "symbol" : g;
    }
    function oe(l) {
      if (typeof l > "u" || l === null)
        return "" + l;
      var g = X(l);
      if (g === "object") {
        if (l instanceof Date)
          return "date";
        if (l instanceof RegExp)
          return "regexp";
      }
      return g;
    }
    function Z(l) {
      var g = oe(l);
      switch (g) {
        case "array":
        case "object":
          return "an " + g;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + g;
        default:
          return g;
      }
    }
    function ye(l) {
      return !l.constructor || !l.constructor.name ? y : l.constructor.name;
    }
    return j.checkPropTypes = i, j.resetWarningCache = i.resetWarningCache, j.PropTypes = j, j;
  }, bt;
}
if (process.env.NODE_ENV !== "production") {
  var oo = Cr(), ao = !0;
  Ot.exports = no()(oo.isElement, ao);
} else
  Ot.exports = _n()();
var io = Ot.exports;
const S = /* @__PURE__ */ dr(io), ur = {
  disabled: !1
};
var so = process.env.NODE_ENV !== "production" ? S.oneOfType([S.number, S.shape({
  enter: S.number,
  exit: S.number,
  appear: S.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && S.oneOfType([S.string, S.shape({
  enter: S.string,
  exit: S.string,
  active: S.string
}), S.shape({
  enter: S.string,
  enterDone: S.string,
  enterActive: S.string,
  exit: S.string,
  exitDone: S.string,
  exitActive: S.string
})]);
const Tr = Te.createContext(null);
var uo = function(t) {
  return t.scrollTop;
}, Ue = "unmounted", Se = "exited", Oe = "entering", Me = "entered", St = "exiting", Re = /* @__PURE__ */ function(e) {
  Vn(t, e);
  function t(a, i) {
    var o;
    o = e.call(this, a, i) || this;
    var s = i, u = s && !s.isMounting ? a.enter : a.appear, d;
    return o.appearStatus = null, a.in ? u ? (d = Se, o.appearStatus = Oe) : d = Me : a.unmountOnExit || a.mountOnEnter ? d = Ue : d = Se, o.state = {
      status: d
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var s = i.in;
    return s && o.status === Ue ? {
      status: Se
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(i) {
    var o = null;
    if (i !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Oe && s !== Me && (o = Oe) : (s === Oe || s === Me) && (o = St);
    }
    this.updateStatus(!1, o);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var i = this.props.timeout, o, s, u;
    return o = s = u = i, i != null && typeof i != "number" && (o = i.exit, s = i.enter, u = i.appear !== void 0 ? i.appear : s), {
      exit: o,
      enter: s,
      appear: u
    };
  }, r.updateStatus = function(i, o) {
    if (i === void 0 && (i = !1), o !== null)
      if (this.cancelNextCallback(), o === Oe) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : De.findDOMNode(this);
          s && uo(s);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Se && this.setState({
        status: Ue
      });
  }, r.performEnter = function(i) {
    var o = this, s = this.props.enter, u = this.context ? this.context.isMounting : i, d = this.props.nodeRef ? [u] : [De.findDOMNode(this), u], f = d[0], A = d[1], m = this.getTimeouts(), y = u ? m.appear : m.enter;
    if (!i && !s || ur.disabled) {
      this.safeSetState({
        status: Me
      }, function() {
        o.props.onEntered(f);
      });
      return;
    }
    this.props.onEnter(f, A), this.safeSetState({
      status: Oe
    }, function() {
      o.props.onEntering(f, A), o.onTransitionEnd(y, function() {
        o.safeSetState({
          status: Me
        }, function() {
          o.props.onEntered(f, A);
        });
      });
    });
  }, r.performExit = function() {
    var i = this, o = this.props.exit, s = this.getTimeouts(), u = this.props.nodeRef ? void 0 : De.findDOMNode(this);
    if (!o || ur.disabled) {
      this.safeSetState({
        status: Se
      }, function() {
        i.props.onExited(u);
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
      status: St
    }, function() {
      i.props.onExiting(u), i.onTransitionEnd(s.exit, function() {
        i.safeSetState({
          status: Se
        }, function() {
          i.props.onExited(u);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(i, o) {
    o = this.setNextCallback(o), this.setState(i, o);
  }, r.setNextCallback = function(i) {
    var o = this, s = !0;
    return this.nextCallback = function(u) {
      s && (s = !1, o.nextCallback = null, i(u));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(i, o) {
    this.setNextCallback(o);
    var s = this.props.nodeRef ? this.props.nodeRef.current : De.findDOMNode(this), u = i == null && !this.props.addEndListener;
    if (!s || u) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var d = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], f = d[0], A = d[1];
      this.props.addEndListener(f, A);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, r.render = function() {
    var i = this.state.status;
    if (i === Ue)
      return null;
    var o = this.props, s = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var u = qn(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Te.createElement(Tr.Provider, {
        value: null
      }, typeof s == "function" ? s(i, u) : Te.cloneElement(Te.Children.only(s), u))
    );
  }, t;
}(Te.Component);
Re.contextType = Tr;
Re.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: S.shape({
    current: typeof Element > "u" ? S.any : function(e, t, r, a, i, o) {
      var s = e[t];
      return S.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, r, a, i, o);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: S.oneOfType([S.func.isRequired, S.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: S.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: S.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: S.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: S.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: S.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: S.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var r = so;
    t.addEndListener || (r = r.isRequired);
    for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
      i[o - 1] = arguments[o];
    return r.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: S.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: S.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: S.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: S.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: S.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: S.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: S.func
} : {};
function Fe() {
}
Re.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Fe,
  onEntering: Fe,
  onEntered: Fe,
  onExit: Fe,
  onExiting: Fe,
  onExited: Fe
};
Re.UNMOUNTED = Ue;
Re.EXITED = Se;
Re.ENTERING = Oe;
Re.ENTERED = Me;
Re.EXITING = St;
const co = Re;
function cr(e, t) {
  const r = je(e, t) || "", a = r.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(r) * a;
}
function lo(e, t) {
  const r = cr(e, "transitionDuration"), a = cr(e, "transitionDelay"), i = hr(e, (o) => {
    o.target === e && (i(), t(o));
  }, r + a);
}
function fo(e) {
  e.offsetHeight;
}
function Ao(e) {
  return e && "setState" in e ? De.findDOMNode(e) : e ?? null;
}
const po = /* @__PURE__ */ Te.forwardRef(({
  onEnter: e,
  onEntering: t,
  onEntered: r,
  onExit: a,
  onExiting: i,
  onExited: o,
  addEndListener: s,
  children: u,
  childRef: d,
  ...f
}, A) => {
  const m = ne(null), y = nt(m, d), j = (_) => {
    y(Ao(_));
  }, z = (_) => (se) => {
    _ && m.current && _(m.current, se);
  }, k = de(z(e), [e]), J = de(z(t), [t]), K = de(z(r), [r]), L = de(z(a), [a]), G = de(z(i), [i]), H = de(z(o), [o]), v = de(z(s), [s]);
  return /* @__PURE__ */ h.jsx(co, {
    ref: A,
    ...f,
    onEnter: k,
    onEntered: K,
    onEntering: J,
    onExit: L,
    onExited: H,
    onExiting: G,
    addEndListener: v,
    nodeRef: m,
    children: typeof u == "function" ? (_, se) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      u(_, {
        ...se,
        ref: j
      })
    ) : /* @__PURE__ */ Te.cloneElement(u, {
      ref: j
    })
  });
}), vo = po, go = {
  [Oe]: "show",
  [Me]: "show"
}, xr = /* @__PURE__ */ ae.forwardRef(({
  className: e,
  children: t,
  transitionClasses: r = {},
  onEnter: a,
  ...i
}, o) => {
  const s = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    ...i
  }, u = de((d, f) => {
    fo(d), a == null || a(d, f);
  }, [a]);
  return /* @__PURE__ */ h.jsx(vo, {
    ref: o,
    addEndListener: lo,
    ...s,
    onEnter: u,
    childRef: t.ref,
    children: (d, f) => /* @__PURE__ */ ae.cloneElement(t, {
      ...f,
      className: Ae("fade", e, t.props.className, go[d], r[d])
    })
  });
});
xr.displayName = "Fade";
const Rr = xr, wr = /* @__PURE__ */ ae.forwardRef(({
  className: e,
  bsPrefix: t,
  as: r = "div",
  ...a
}, i) => (t = Pe(t, "modal-body"), /* @__PURE__ */ h.jsx(r, {
  ref: i,
  className: Ae(e, t),
  ...a
})));
wr.displayName = "ModalBody";
const Eo = wr, mo = /* @__PURE__ */ ae.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {
  }
}), Or = mo, Sr = /* @__PURE__ */ ae.forwardRef(({
  bsPrefix: e,
  className: t,
  contentClassName: r,
  centered: a,
  size: i,
  fullscreen: o,
  children: s,
  scrollable: u,
  ...d
}, f) => {
  e = Pe(e, "modal");
  const A = `${e}-dialog`, m = typeof o == "string" ? `${e}-fullscreen-${o}` : `${e}-fullscreen`;
  return /* @__PURE__ */ h.jsx("div", {
    ...d,
    ref: f,
    className: Ae(A, t, i && `${e}-${i}`, a && `${A}-centered`, u && `${A}-scrollable`, o && m),
    children: /* @__PURE__ */ h.jsx("div", {
      className: Ae(`${e}-content`, r),
      children: s
    })
  });
});
Sr.displayName = "ModalDialog";
const Mr = Sr, Dr = /* @__PURE__ */ ae.forwardRef(({
  className: e,
  bsPrefix: t,
  as: r = "div",
  ...a
}, i) => (t = Pe(t, "modal-footer"), /* @__PURE__ */ h.jsx(r, {
  ref: i,
  className: Ae(e, t),
  ...a
})));
Dr.displayName = "ModalFooter";
const ho = Dr, yo = {
  /** An accessible label indicating the relevant information about the Close Button. */
  "aria-label": S.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: S.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: S.oneOf(["white"])
}, Pt = /* @__PURE__ */ ae.forwardRef(({
  className: e,
  variant: t,
  "aria-label": r = "Close",
  ...a
}, i) => /* @__PURE__ */ h.jsx("button", {
  ref: i,
  type: "button",
  className: Ae("btn-close", t && `btn-close-${t}`, e),
  "aria-label": r,
  ...a
}));
Pt.displayName = "CloseButton";
Pt.propTypes = yo;
const bo = Pt, Co = /* @__PURE__ */ ae.forwardRef(({
  closeLabel: e = "Close",
  closeVariant: t,
  closeButton: r = !1,
  onHide: a,
  children: i,
  ...o
}, s) => {
  const u = tt(Or), d = be(() => {
    u == null || u.onHide(), a == null || a();
  });
  return /* @__PURE__ */ h.jsxs("div", {
    ref: s,
    ...o,
    children: [i, r && /* @__PURE__ */ h.jsx(bo, {
      "aria-label": e,
      variant: t,
      onClick: d
    })]
  });
}), Bo = Co, jr = /* @__PURE__ */ ae.forwardRef(({
  bsPrefix: e,
  className: t,
  closeLabel: r = "Close",
  closeButton: a = !1,
  ...i
}, o) => (e = Pe(e, "modal-header"), /* @__PURE__ */ h.jsx(Bo, {
  ref: o,
  ...i,
  className: Ae(t, e),
  closeLabel: r,
  closeButton: a
})));
jr.displayName = "ModalHeader";
const To = jr, xo = (e) => /* @__PURE__ */ ae.forwardRef((t, r) => /* @__PURE__ */ h.jsx("div", {
  ...t,
  ref: r,
  className: Ae(t.className, e)
})), Ro = xo("h4"), Pr = /* @__PURE__ */ ae.forwardRef(({
  className: e,
  bsPrefix: t,
  as: r = Ro,
  ...a
}, i) => (t = Pe(t, "modal-title"), /* @__PURE__ */ h.jsx(r, {
  ref: i,
  className: Ae(e, t),
  ...a
})));
Pr.displayName = "ModalTitle";
const wo = Pr;
function Oo(e) {
  return /* @__PURE__ */ h.jsx(Rr, {
    ...e,
    timeout: null
  });
}
function So(e) {
  return /* @__PURE__ */ h.jsx(Rr, {
    ...e,
    timeout: null
  });
}
const Qr = /* @__PURE__ */ ae.forwardRef(({
  bsPrefix: e,
  className: t,
  style: r,
  dialogClassName: a,
  contentClassName: i,
  children: o,
  dialogAs: s = Mr,
  "data-bs-theme": u,
  "aria-labelledby": d,
  "aria-describedby": f,
  "aria-label": A,
  /* BaseModal props */
  show: m = !1,
  animation: y = !0,
  backdrop: j = !0,
  keyboard: z = !0,
  onEscapeKeyDown: k,
  onShow: J,
  onHide: K,
  container: L,
  autoFocus: G = !0,
  enforceFocus: H = !0,
  restoreFocus: v = !0,
  restoreFocusOptions: _,
  onEntered: se,
  onExit: pe,
  onExiting: he,
  onEnter: ve,
  onEntering: ge,
  onExited: Ee,
  backdropClassName: te,
  manager: ee,
  ...ue
}, X) => {
  const [oe, Z] = xe({}), [ye, l] = xe(!1), g = ne(!1), T = ne(!1), C = ne(null), [b, M] = dn(), x = nt(X, M), R = be(K), O = ln();
  e = Pe(e, "modal");
  const D = lr(() => ({
    onHide: R
  }), [R]);
  function w() {
    return ee || Xn({
      isRTL: O
    });
  }
  function q(I) {
    if (!Ye)
      return;
    const le = w().getScrollbarWidth() > 0, Je = I.scrollHeight > rt(I).documentElement.clientHeight;
    Z({
      paddingRight: le && !Je ? Ht() : void 0,
      paddingLeft: !le && Je ? Ht() : void 0
    });
  }
  const p = be(() => {
    b && q(b.dialog);
  });
  mr(() => {
    Rt(window, "resize", p), C.current == null || C.current();
  });
  const re = () => {
    g.current = !0;
  }, ce = (I) => {
    g.current && b && I.target === b.dialog && (T.current = !0), g.current = !1;
  }, N = () => {
    l(!0), C.current = hr(b.dialog, () => {
      l(!1);
    });
  }, Ce = (I) => {
    I.target === I.currentTarget && N();
  }, we = (I) => {
    if (j === "static") {
      Ce(I);
      return;
    }
    if (T.current || I.target !== I.currentTarget) {
      T.current = !1;
      return;
    }
    K == null || K();
  }, Ge = (I) => {
    z ? k == null || k(I) : (I.preventDefault(), j === "static" && N());
  }, Qe = (I, le) => {
    I && q(I), ve == null || ve(I, le);
  }, ot = (I) => {
    C.current == null || C.current(), pe == null || pe(I);
  }, at = (I, le) => {
    ge == null || ge(I, le), Er(window, "resize", p);
  }, ze = (I) => {
    I && (I.style.display = ""), Ee == null || Ee(I), Rt(window, "resize", p);
  }, it = de((I) => /* @__PURE__ */ h.jsx("div", {
    ...I,
    className: Ae(`${e}-backdrop`, te, !y && "show")
  }), [y, te, e]), He = {
    ...r,
    ...oe
  };
  He.display = "block";
  const Ze = (I) => /* @__PURE__ */ h.jsx("div", {
    role: "dialog",
    ...I,
    style: He,
    className: Ae(t, e, ye && `${e}-static`, !y && "show"),
    onClick: j ? we : void 0,
    onMouseUp: ce,
    "data-bs-theme": u,
    "aria-label": A,
    "aria-labelledby": d,
    "aria-describedby": f,
    children: /* @__PURE__ */ h.jsx(s, {
      ...ue,
      onMouseDown: re,
      className: a,
      contentClassName: i,
      children: o
    })
  });
  return /* @__PURE__ */ h.jsx(Or.Provider, {
    value: D,
    children: /* @__PURE__ */ h.jsx(Ln, {
      show: m,
      ref: x,
      backdrop: j,
      container: L,
      keyboard: !0,
      autoFocus: G,
      enforceFocus: H,
      restoreFocus: v,
      restoreFocusOptions: _,
      onEscapeKeyDown: Ge,
      onShow: J,
      onHide: K,
      onEnter: Qe,
      onEntering: at,
      onEntered: se,
      onExit: ot,
      onExiting: he,
      onExited: ze,
      manager: w(),
      transition: y ? Oo : void 0,
      backdropTransition: y ? So : void 0,
      renderBackdrop: it,
      renderDialog: Ze
    })
  });
});
Qr.displayName = "Modal";
const $e = Object.assign(Qr, {
  Body: Eo,
  Header: To,
  Title: wo,
  Footer: ho,
  Dialog: Mr,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150
}), Mo = "data:image/png;base64,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", Do = ({ message: e }) => {
  var t, r;
  return e.type === "query" ? /* @__PURE__ */ h.jsxs("div", { className: "message", children: [
    /* @__PURE__ */ h.jsx("img", { className: "avatar me-auto", src: Mo, alt: "tota" }),
    /* @__PURE__ */ h.jsx("div", { className: "message-body", children: (t = e.contents) == null ? void 0 : t.map((a, i) => /* @__PURE__ */ h.jsx("p", { className: "mb-0", children: a }, i)) })
  ] }) : /* @__PURE__ */ h.jsx("div", { className: "message message-right", children: /* @__PURE__ */ h.jsx("div", { className: "message-body text-white bg-primary", children: (r = e.contents) == null ? void 0 : r.map((a, i) => /* @__PURE__ */ h.jsx("p", { className: "mb-0", children: a }, i)) }) });
}, jo = ({ steps: e }) => {
  const t = ne(null), r = e.find((f) => f.id === "welcome"), a = { type: "query", contents: r == null ? void 0 : r.messages }, [i, o] = xe(r), [s, u] = xe([a]);
  me(() => {
    t.current && t.current.scrollIntoView({ behavior: "smooth" });
  }, [i]);
  const d = (f) => {
    const A = e.find((j) => j.id === f.nextStepId), m = { type: "query", contents: A == null ? void 0 : A.messages }, y = { type: "response", contents: [f.text] };
    if (m) {
      const j = s.concat(y, m);
      u(j);
    }
    A && o(A);
  };
  return /* @__PURE__ */ h.jsx(h.Fragment, { children: /* @__PURE__ */ h.jsxs("div", { className: "d-flex flex-column", children: [
    s && s.map((f, A) => /* @__PURE__ */ h.jsx(Do, { message: f }, A)),
    /* @__PURE__ */ h.jsxs("div", { className: "d-flex flex-column align-items-center mt-5", children: [
      i && i.buttons.map((f, A) => /* @__PURE__ */ h.jsx("div", { children: /* @__PURE__ */ h.jsx(
        "button",
        {
          onClick: () => d(f),
          className: "btn btn-outline-primary mb-2",
          children: f.text
        }
      ) }, A)),
      /* @__PURE__ */ h.jsx("div", { ref: t })
    ] })
  ] }) });
}, Po = ({ steps: e }) => {
  const [t, r] = xe(!1);
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx(
      fn,
      {
        variant: "secondary",
        onClick: () => r(!0),
        style: { position: "absolute", bottom: 20, right: 20 },
        children: "Открыть Чат"
      }
    ),
    /* @__PURE__ */ h.jsxs(
      $e,
      {
        show: t,
        onHide: () => r(!1),
        dialogClassName: "modal-bottom-right modal-fixed-size mb-0 mt-0",
        "aria-labelledby": "example-custom-modal-styling-title",
        backdrop: "static",
        children: [
          /* @__PURE__ */ h.jsx($e.Header, { closeButton: !0, children: /* @__PURE__ */ h.jsx($e.Title, { id: "example-custom-modal-styling-title", children: "Виртуальный помощник" }) }),
          /* @__PURE__ */ h.jsx(
            $e.Body,
            {
              style: { maxHeight: "calc(100vh - 200px)", overflowY: "auto" },
              children: /* @__PURE__ */ h.jsx(jo, { steps: e })
            }
          )
        ]
      }
    )
  ] });
}, Qo = ({ steps: e }) => /* @__PURE__ */ h.jsx(h.Fragment, { children: /* @__PURE__ */ h.jsx(Po, { steps: e }) }), Io = (e) => /* @__PURE__ */ h.jsx(Qo, { steps: [...e] }), No = [
  {
    id: "welcome",
    messages: [
      'Привет! Я ваш виртуальный помощник. Нажмите "Начать разговор", чтобы открыть чат'
    ],
    buttons: [
      {
        text: "Начать разговор",
        nextStepId: "start",
        type: "button"
      }
    ]
  },
  {
    id: "start",
    messages: [
      "Помогу вам выбрать подходящий курс. Выбирайте категорию вопроса, и буквально через пару шагов я смогу рассказать вам то, что нужно."
    ],
    buttons: [
      {
        text: "Сменить профессию или трудоустроиться",
        nextStepId: "switch",
        type: "button"
      },
      {
        text: "Попробовать себя в IT",
        nextStepId: "try",
        type: "button"
      },
      {
        text: "Я разработчик, хочу углубить свои знания",
        nextStepId: "advanced",
        type: "button"
      }
    ]
  },
  {
    id: "try",
    messages: [
      "У нас есть подготовительные курсы, которые длятся всего 2 недели.За это время вы знакомитесь с основами программирвоания, пробуете его на практике и плавной подойдете к старту обучения в основной программе. Все это под руководством опытного программиста. Он поможет, если будут сложности. Курс стоит всего 990 рублей"
    ],
    buttons: [
      {
        text: "Интересно",
        nextStepId: "details",
        type: "button"
      },
      {
        text: "А что по поводу смены профессии?",
        nextStepId: "switch",
        type: "button"
      },
      {
        text: "Вернуться назад",
        nextStepId: "start",
        type: "button"
      }
    ]
  },
  {
    id: "switch",
    messages: [
      "У нас есть программы обучения новой профессии. Мы постоянно мониторим, какие компетенции востребованы на рынке, а учебные программы строим в соответствии ними. Учиться можно онлайн в удобном темпе без дедлайнов. К концу обучения у вас будет портфолио на GitHub. А к трудоустройству поможет подготовиться Карьерный трек"
    ],
    buttons: [
      {
        text: "Расскажи подробнее",
        nextStepId: "details",
        type: "button"
      },
      {
        text: "А есть что-нибудь попроще",
        nextStepId: "try",
        type: "button"
      },
      {
        text: "Вернуться в начало",
        nextStepId: "start",
        type: "button"
      }
    ]
  },
  {
    id: "details",
    messages: [
      "В Хекслете можно освоить JavaScript, Python, PHP, верстку, Java, DevOps и Ruby on Rails. Также есть программы обучения по тестированию веб-приложений и аналитике данных. https://ru.hexlet.io/courses#preparatory",
      "Только не тратьте много времени на выбор языка 😊  Вы встретитесь с одними и теми же понятиями: Литералы, Операции, Типы данных... Главное не синтаксис, а суть, которая позволяет комбинировать конструкции и получать результат."
    ],
    buttons: [
      {
        text: "Останусь здесь, запишусь на курс",
        nextStepId: "subscribe",
        type: "button"
      },
      {
        text: "Вернуться в начало",
        nextStepId: "start",
        type: "button"
      }
    ]
  },
  {
    id: "advanced",
    messages: [
      "Отлично! Есть несколько вариантов обучения для тех, кто хочет углубить знания. Во-первых, курсы повышения квалификации. Часто их оплачивает работодатель. Если вам кажется, что такой вариант возможен, поделитесь с ним этой ссылкой: https://b2b.hexlet.io/.",
      "Во-вторых, возможно индивидуальное обучение. Вы с наставником-разработчиком составляете план и углубляетесь в темы, которые хотите изучить подробнее."
    ],
    buttons: [
      {
        text: "Расскажи подробнее",
        // nextStepId: 'to be defined',
        nextStepId: "welcome",
        type: "button"
        // еще один вариант, когда появляется поле вводе, 
        // Оставьте номер телефона и почту. Перезвоним, расскажем подробнее и поможем выбрать подходящий вариант
      },
      {
        text: "Верни меня в начало",
        nextStepId: "start",
        type: "button"
      }
    ]
  },
  {
    id: "subscribe",
    messages: [
      "Ага, дублирую ссылку https://ru.hexlet.io/courses#preparatory",
      "Был рад знакомству! Увидимся ✋"
    ],
    buttons: [
      {
        text: "Останусь здесь, запишусь на курс",
        nextStepId: "details",
        type: "button"
      },
      {
        text: "Верни меня в начало",
        nextStepId: "start",
        type: "button"
      }
    ]
  }
], Fo = (e = document.getElementById("root"), t = No) => {
  const r = Io(t);
  if (!e)
    throw Error("Container element not found");
  Ct(e).render(r);
};
export {
  Fo as default
};
