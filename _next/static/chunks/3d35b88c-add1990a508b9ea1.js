"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3016],
  {
    62564: function (t, e, n) {
      let r;
      n.d(e, {
        P: function () {
          return ie;
        },
        h: function () {
          return it;
        },
      });
      var o,
        i,
        a,
        c = n(30764),
        l = n(43781),
        s = n(52518);
      function u(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function f(t, e, n) {
        return (
          e && u(t.prototype, e),
          n && u(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      function d(t, e) {
        if (!(t instanceof e))
          throw TypeError("Cannot call a class as a function");
      }
      function p(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function h(t, e) {
        return (h = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
      }
      function v(t, e) {
        if ("function" != typeof e && null !== e)
          throw TypeError("Super expression must either be null or a function");
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && h(t, e);
      }
      function g(t) {
        return (g =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function m(t, e) {
        if (e && ("object" === g(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw TypeError(
            "Derived constructors may only return object or undefined"
          );
        return p(t);
      }
      function y(t) {
        return (y = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function x(t, e) {
        if (t) {
          if ("string" == typeof t) return b(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            ("Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return b(t, e);
        }
      }
      function $(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n,
              r,
              o =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
            if (null != o) {
              var i = [],
                a = !0,
                c = !1;
              try {
                for (
                  o = o.call(t);
                  !(a = (n = o.next()).done) &&
                  (i.push(n.value), !e || i.length !== e);
                  a = !0
                );
              } catch (t) {
                (c = !0), (r = t);
              } finally {
                try {
                  a || null == o.return || o.return();
                } finally {
                  if (c) throw r;
                }
              }
              return i;
            }
          })(t, e) ||
          x(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function w(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return b(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          x(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function k() {}
      function _(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function j(t) {
        return t();
      }
      function O() {
        return Object.create(null);
      }
      function C(t) {
        t.forEach(j);
      }
      function R(t) {
        return "function" == typeof t;
      }
      function S(t, e) {
        return t != t
          ? e == e
          : t !== e || (t && "object" === g(t)) || "function" == typeof t;
      }
      function E(t) {
        if (null == t) return k;
        for (
          var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        var o = t.subscribe.apply(t, n);
        return o.unsubscribe
          ? function () {
              return o.unsubscribe();
            }
          : o;
      }
      function D(t) {
        var e;
        return (
          E(t, function (t) {
            return (e = t);
          })(),
          e
        );
      }
      function A(t, e, n) {
        t.$$.on_destroy.push(E(e, n));
      }
      function P(t, e, n, r) {
        if (t) {
          var o = N(t, e, n, r);
          return t[0](o);
        }
      }
      function N(t, e, n, r) {
        return t[1] && r ? _(n.ctx.slice(), t[1](r(e))) : n.ctx;
      }
      function M(t, e, n, r) {
        if (t[2] && r) {
          var o = t[2](r(n));
          if (void 0 === e.dirty) return o;
          if ("object" === g(o)) {
            for (
              var i = [], a = Math.max(e.dirty.length, o.length), c = 0;
              c < a;
              c += 1
            )
              i[c] = e.dirty[c] | o[c];
            return i;
          }
          return e.dirty | o;
        }
        return e.dirty;
      }
      function B(t, e, n, r, o, i) {
        if (o) {
          var a = N(e, n, r, i);
          t.p(a, o);
        }
      }
      function T(t) {
        if (t.ctx.length > 32) {
          for (var e = [], n = t.ctx.length / 32, r = 0; r < n; r++) e[r] = -1;
          return e;
        }
        return -1;
      }
      function I(t) {
        var e = {};
        for (var n in t) "$" !== n[0] && (e[n] = t[n]);
        return e;
      }
      function q(t) {
        return null == t ? "" : t;
      }
      function z(t, e) {
        t.appendChild(e);
      }
      function F(t, e, n) {
        t.insertBefore(e, n || null);
      }
      function L(t) {
        t.parentNode.removeChild(t);
      }
      function V(t, e) {
        for (var n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
      }
      function H(t) {
        return document.createElement(t);
      }
      function U(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
      }
      function J(t) {
        return document.createTextNode(t);
      }
      function G() {
        return J(" ");
      }
      function K() {
        return J("");
      }
      function W(t, e, n, r) {
        return (
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n, r);
          }
        );
      }
      function Y(t, e, n) {
        null == n
          ? t.removeAttribute(e)
          : t.getAttribute(e) !== n && t.setAttribute(e, n);
      }
      function Z(t, e, n) {
        t.setAttributeNS("http://www.w3.org/1999/xlink", e, n);
      }
      function Q(t, e) {
        (e = "" + e), t.wholeText !== e && (t.data = e);
      }
      function X(t, e) {
        t.value = null == e ? "" : e;
      }
      function tt(t, e, n) {
        t.classList[n ? "add" : "remove"](e);
      }
      function te() {
        if (!i) throw Error("Function called outside component initialization");
        return i;
      }
      function tn(t) {
        te().$$.on_mount.push(t);
      }
      function tr() {
        var t = te();
        return function (e, n) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            o = r.cancelable,
            i = t.$$.callbacks[e];
          if (i) {
            var a = (function (t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = n.bubbles,
                o = void 0 !== r && r,
                i = n.cancelable,
                a = void 0 !== i && i,
                c = document.createEvent("CustomEvent");
              return c.initCustomEvent(t, o, a, e), c;
            })(e, n, { cancelable: void 0 !== o && o });
            return (
              i.slice().forEach(function (e) {
                e.call(t, a);
              }),
              !a.defaultPrevented
            );
          }
          return !0;
        };
      }
      function to(t, e) {
        return te().$$.context.set(t, e), e;
      }
      function ti(t) {
        return te().$$.context.get(t);
      }
      function ta(t, e) {
        var n = this,
          r = t.$$.callbacks[e.type];
        r &&
          r.slice().forEach(function (t) {
            return t.call(n, e);
          });
      }
      var tc = [],
        tl = [],
        ts = [],
        tu = [],
        tf = Promise.resolve(),
        td = !1;
      function tp(t) {
        ts.push(t);
      }
      var th = new Set(),
        tv = 0;
      function tg() {
        var t = i;
        do {
          for (; tv < tc.length; ) {
            var e = tc[tv];
            tv++,
              (i = e),
              (function (t) {
                if (null !== t.fragment) {
                  t.update(), C(t.before_update);
                  var e = t.dirty;
                  (t.dirty = [-1]),
                    t.fragment && t.fragment.p(t.ctx, e),
                    t.after_update.forEach(tp);
                }
              })(e.$$);
          }
          for (i = null, tc.length = 0, tv = 0; tl.length; ) tl.pop()();
          for (var n = 0; n < ts.length; n += 1) {
            var r = ts[n];
            th.has(r) || (th.add(r), r());
          }
          ts.length = 0;
        } while (tc.length);
        for (; tu.length; ) tu.pop()();
        (td = !1), th.clear(), (i = t);
      }
      var tm = new Set();
      function ty() {
        a = { r: 0, c: [], p: a };
      }
      function tb() {
        a.r || C(a.c), (a = a.p);
      }
      function tx(t, e) {
        t && t.i && (tm.delete(t), t.i(e));
      }
      function t$(t, e, n, r) {
        t && t.o
          ? tm.has(t) ||
            (tm.add(t),
            a.c.push(function () {
              tm.delete(t), r && (n && t.d(1), r());
            }),
            t.o(e))
          : r && r();
      }
      function tw(t) {
        t && t.c();
      }
      function tk(t, e, n, r) {
        var o = t.$$,
          i = o.fragment,
          a = o.on_mount,
          c = o.on_destroy,
          l = o.after_update;
        i && i.m(e, n),
          r ||
            tp(function () {
              var e = a.map(j).filter(R);
              c ? c.push.apply(c, w(e)) : C(e), (t.$$.on_mount = []);
            }),
          l.forEach(tp);
      }
      function t_(t, e) {
        var n = t.$$;
        null !== n.fragment &&
          (C(n.on_destroy),
          n.fragment && n.fragment.d(e),
          (n.on_destroy = n.fragment = null),
          (n.ctx = []));
      }
      function tj(t, e, n, r, o, a, c) {
        var l =
            arguments.length > 7 && void 0 !== arguments[7]
              ? arguments[7]
              : [-1],
          s = i;
        i = t;
        var u = (t.$$ = {
          fragment: null,
          ctx: null,
          props: a,
          update: k,
          not_equal: o,
          bound: O(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(e.context || (s ? s.$$.context : [])),
          callbacks: O(),
          dirty: l,
          skip_bound: !1,
          root: e.target || s.$$.root,
        });
        c && c(u.root);
        var f = !1;
        if (
          ((u.ctx = n
            ? n(t, e.props || {}, function (e, n) {
                var r = (arguments.length <= 2 ? 0 : arguments.length - 2)
                  ? arguments.length <= 2
                    ? void 0
                    : arguments[2]
                  : n;
                return (
                  u.ctx &&
                    o(u.ctx[e], (u.ctx[e] = r)) &&
                    (!u.skip_bound && u.bound[e] && u.bound[e](r), f) &&
                    (-1 === t.$$.dirty[0] &&
                      (tc.push(t),
                      td || ((td = !0), tf.then(tg)),
                      t.$$.dirty.fill(0)),
                    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)),
                  n
                );
              })
            : []),
          u.update(),
          (f = !0),
          C(u.before_update),
          (u.fragment = !!r && r(u.ctx)),
          e.target)
        ) {
          if (e.hydrate) {
            var d = Array.from(e.target.childNodes);
            u.fragment && u.fragment.l(d), d.forEach(L);
          } else u.fragment && u.fragment.c();
          e.intro && tx(t.$$.fragment),
            tk(t, e.target, e.anchor, e.customElement),
            tg();
        }
        i = s;
      }
      var tO = (function () {
        function t() {
          d(this, t);
        }
        return (
          f(t, [
            {
              key: "$destroy",
              value: function () {
                t_(this, 1), (this.$destroy = k);
              },
            },
            {
              key: "$on",
              value: function (t, e) {
                var n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
                return (
                  n.push(e),
                  function () {
                    var t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1);
                  }
                );
              },
            },
            {
              key: "$set",
              value: function (t) {
                this.$$set &&
                  0 !== Object.keys(t).length &&
                  ((this.$$.skip_bound = !0),
                  this.$$set(t),
                  (this.$$.skip_bound = !1));
              },
            },
          ]),
          t
        );
      })();
      let tC = (t, e) => to(t, e),
        tR = (t) => ti(t);
      function tS(t, e) {
        void 0 === e && (e = {});
        var n = e.insertAt;
        if (t && "undefined" != typeof document) {
          var r = document.head || document.getElementsByTagName("head")[0],
            o = document.createElement("style");
          (o.type = "text/css"),
            "top" === n && r.firstChild
              ? r.insertBefore(o, r.firstChild)
              : r.appendChild(o),
            o.styleSheet
              ? (o.styleSheet.cssText = t)
              : o.appendChild(document.createTextNode(t));
        }
      }
      function tE(t) {
        var e,
          n,
          r,
          o,
          i,
          a,
          c,
          l,
          s,
          u,
          f,
          d,
          p,
          h,
          v,
          g,
          m,
          y,
          b,
          x,
          w,
          _,
          j,
          O;
        return {
          c: function () {
            (e = H("button")),
              (n = U("svg")),
              (r = U("title")),
              (o = J("prosemirror")),
              (i = U("desc")),
              (a = J("Created using Figma")),
              (c = U("use")),
              (l = U("use")),
              (s = U("use")),
              (u = U("use")),
              (f = U("use")),
              (d = U("use")),
              (p = U("use")),
              (h = U("defs")),
              (v = U("path")),
              (g = U("path")),
              (m = U("path")),
              (y = U("path")),
              (b = U("path")),
              (x = U("path")),
              (w = U("path")),
              Z(c, "xlink:href", "#a"),
              Y(c, "transform", "matrix(2 0 0 2 118 116)"),
              Y(c, "fill", "#FFF"),
              Z(l, "xlink:href", "#b"),
              Y(l, "transform", "rotate(16 59.054 420.192) scale(2)"),
              Y(l, "fill", "#FFF"),
              Z(s, "xlink:href", "#c"),
              Y(s, "transform", "matrix(2 0 0 2 154.024 141.58)"),
              Y(s, "fill", "#363755"),
              Z(u, "xlink:href", "#d"),
              Y(u, "transform", "matrix(2 0 0 2 220 334.8)"),
              Y(u, "fill", "#FFF"),
              Z(f, "xlink:href", "#e"),
              Y(f, "transform", "matrix(2 0 0 2 218.826 262.052)"),
              Y(f, "fill", "#363755"),
              Z(d, "xlink:href", "#f"),
              Y(d, "transform", "matrix(2 0 0 2 197.108 184.998)"),
              Y(d, "fill", "#FFF"),
              Z(p, "xlink:href", "#g"),
              Y(p, "transform", "matrix(2 0 0 2 221.8 216)"),
              Y(p, "fill", "#363755"),
              Y(v, "id", "a"),
              Y(
                v,
                "d",
                "M73.5 0C32.859 0 0 32.859 0 73.5S32.859 147 73.5 147 147 114.141 147 73.5 114.069 0 73.5\n        0z"
              ),
              Y(g, "id", "b"),
              Y(
                g,
                "d",
                "M193.601 107.116c0-13.376 8.238-23.91\n        20.619-31.153-2.244-7.447-5.19-14.6-8.824-21.32-13.886\n        3.633-25.12-1.799-34.568-11.26-9.449-9.437-12.344-20.672-8.709-34.571A111.362 111.362 0 0 0\n        140.799 0c-7.243 12.37-20.339 20.594-33.689 20.594-13.363\n        0-26.446-8.225-33.701-20.594A110.888 110.888 0 0 0 52.1 8.812c3.634 13.9.753 25.134-8.721\n        34.57-9.436 9.462-20.67 14.894-34.569 11.26A112.178 112.178 0 0 0 0 75.963c12.369 7.243\n        20.593 17.777 20.593 31.153 0 13.352-8.224 26.448-20.593 33.704a113.338 113.338 0 0 0 8.811\n        21.321c13.899-3.634 25.133-.752 34.569 8.697 9.448 9.462 12.355 20.696 8.721 34.57a112.653\n        112.653 0 0 0 21.32 8.837c7.243-12.407 20.338-20.619 33.702-20.619 13.35 0 26.446 8.225\n        33.701 20.619a114.22 114.22 0 0 0 21.32-8.837c-3.634-13.874-.752-25.108 8.709-34.57\n        9.449-9.437 20.683-14.869 34.569-11.26a112.343 112.343 0 0 0\n        8.823-21.321c-12.406-7.256-20.644-17.789-20.644-31.141zm-86.491 46.57c-25.732\n        0-46.58-20.849-46.58-46.57 0-25.733 20.86-46.595 46.58-46.595 25.732 0 46.567 20.875 46.567\n        46.595 0 25.734-20.835 46.57-46.567 46.57z"
              ),
              Y(m, "id", "c"),
              Y(
                m,
                "d",
                "M98.088 49.91c-6.9 83.9 10.8 103.401 10.8 103.401s-55.1\n        5.499-82.7-13.401c-30.5-20.9-26-67.5-25.9-94.6.1-28.4 25.6-45.8 49.9-45.3 29.1.5 50.2 21.6\n        47.9 49.9z"
              ),
              Y(y, "id", "d"),
              Y(
                y,
                "d",
                "M.1.1c12.2 33.3 22.5 42.7 40 55.2 25.3 18 36.6 17.5 76.3 41C78.1 60.3 30.8 45.7 0 0l.1.1z"
              ),
              Y(b, "id", "e"),
              Y(
                b,
                "d",
                "M.687 36.474c3 13.3 17.9 29.9 30.4 41.6 24.8 23.2 42 22.4 86\n        54.7-18.2-51.8-18.8-62-43.5-106.1-24.7-44-67.6-20.3-67.6-20.3s-8.4 16.6-5.3 29.9v.2z"
              ),
              Y(x, "id", "f"),
              Y(
                x,
                "d",
                "M38.346 11.5s-4-11.6-18-11.5c-30 .2-28.8 52.1 16.9 52 39.6-.1 39.2-49.4\n        16.1-49.6-10.2-.2-15 9.1-15 9.1z"
              ),
              Y(w, "id", "g"),
              Y(
                w,
                "d",
                "M26.5 15c10.8 0 2 14.9-.6 20.9-1.8-8.4-10.2-20.9.6-20.9zM10.2.1C4.6.1 0 4.6 0 10.3c0 5.6\n        4.5 10.2 10.2 10.2 5.6 0 10.2-4.5 10.2-10.2C20.4 4.7 15.9.1 10.2.1zM40.7 0c-4.8 0-8.8\n        4.5-8.8 10.2 0 5.6 3.9 10.2 8.8 10.2 4.8 0 8.8-4.5 8.8-10.2C49.5 4.6 45.6 0 40.7 0z"
              ),
              Y(n, "width", "530"),
              Y(n, "height", "530"),
              Y(n, "viewBox", "0 0 530 530"),
              Y(n, "xmlns", "http://www.w3.org/2000/svg"),
              Y(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
              Y(n, "class", "svelte-1lt2k10"),
              Y(
                e,
                "class",
                (_ = q("floating-btn ".concat(t[0])) + " svelte-1lt2k10")
              );
          },
          m: function ($, k) {
            F($, e, k),
              z(e, n),
              z(n, r),
              z(r, o),
              z(n, i),
              z(i, a),
              z(n, c),
              z(n, l),
              z(n, s),
              z(n, u),
              z(n, f),
              z(n, d),
              z(n, p),
              z(n, h),
              z(h, v),
              z(h, g),
              z(h, m),
              z(h, y),
              z(h, b),
              z(h, x),
              z(h, w),
              j || ((O = W(e, "click", t[1])), (j = !0));
          },
          p: function (t, n) {
            1 & $(n, 1)[0] &&
              _ !== (_ = q("floating-btn ".concat(t[0])) + " svelte-1lt2k10") &&
              Y(e, "class", _);
          },
          i: k,
          o: k,
          d: function (t) {
            t && L(e), (j = !1), O();
          },
        };
      }
      function tD(t, e, n) {
        var r = e.buttonPosition;
        return (
          (t.$$set = function (t) {
            "buttonPosition" in t && n(0, (r = t.buttonPosition));
          }),
          [
            r,
            function (e) {
              ta.call(this, t, e);
            },
          ]
        );
      }
      tS(
        ".floating-btn.svelte-1lt2k10.svelte-1lt2k10{background:#363755;border:0;border-radius:50%;box-shadow:0 0 30px rgba(34, 34, 34, 0.3);cursor:pointer;position:fixed;padding:6px;transition:opacity 0.3s;-webkit-transition:opacity 0.3s;z-index:99999}.floating-btn.bottom-right.svelte-1lt2k10.svelte-1lt2k10{bottom:16px;right:16px}.floating-btn.bottom-left.svelte-1lt2k10.svelte-1lt2k10{bottom:16px;left:16px}.floating-btn.top-right.svelte-1lt2k10.svelte-1lt2k10{top:16px;right:16px}.floating-btn.top-left.svelte-1lt2k10.svelte-1lt2k10{top:16px;left:16px}.floating-btn.svelte-1lt2k10.svelte-1lt2k10:hover{opacity:0.7}.floating-btn.svelte-1lt2k10>svg.svelte-1lt2k10{display:block;width:34px;height:34px;position:relative}"
      );
      var tA = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return (
            d(this, r),
            tj(p((e = n.call(this))), t, tD, tE, S, { buttonPosition: 0 }),
            e
          );
        }
        return f(r);
      })(tO);
      function tP(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var tN = [];
      function tM(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k,
          r = new Set();
        function o(n) {
          if (S(t, n) && ((t = n), e)) {
            var o,
              i = !tN.length,
              a = (function (t, e) {
                var n =
                  ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
                if (!n) {
                  if (
                    Array.isArray(t) ||
                    (n = (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return tP(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        if (
                          ("Object" === n &&
                            t.constructor &&
                            (n = t.constructor.name),
                          "Map" === n || "Set" === n)
                        )
                          return Array.from(t);
                        if (
                          "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                          return tP(t, e);
                      }
                    })(t))
                  ) {
                    n && (t = n);
                    var r = 0,
                      o = function () {};
                    return {
                      s: o,
                      n: function () {
                        return r >= t.length
                          ? { done: !0 }
                          : { done: !1, value: t[r++] };
                      },
                      e: function (t) {
                        throw t;
                      },
                      f: o,
                    };
                  }
                  throw TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                }
                var i,
                  a = !0,
                  c = !1;
                return {
                  s: function () {
                    n = n.call(t);
                  },
                  n: function () {
                    var t = n.next();
                    return (a = t.done), t;
                  },
                  e: function (t) {
                    (c = !0), (i = t);
                  },
                  f: function () {
                    try {
                      a || null == n.return || n.return();
                    } finally {
                      if (c) throw i;
                    }
                  },
                };
              })(r);
            try {
              for (a.s(); !(o = a.n()).done; ) {
                var c = o.value;
                c[1](), tN.push(c, t);
              }
            } catch (t) {
              a.e(t);
            } finally {
              a.f();
            }
            if (i) {
              for (var l = 0; l < tN.length; l += 2) tN[l][0](tN[l + 1]);
              tN.length = 0;
            }
          }
        }
        return {
          set: o,
          update: function (e) {
            o(e(t));
          },
          subscribe: function (i) {
            var a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : k,
              c = [i, a];
            return (
              r.add(c),
              1 === r.size && (e = n(o) || k),
              i(t),
              function () {
                r.delete(c), 0 === r.size && (e(), (e = null));
              }
            );
          },
        };
      }
      let tB = "__prosemirror-dev-toolkit__snapshots",
        tT = tM([]),
        tI = tM(),
        tq = tM(),
        tz = !0;
      function tF(t, e) {
        let n = t.state.schema.nodeFromJSON(e),
          r = t.state.tr;
        r.replaceWith(0, t.state.doc.nodeSize - 2, n.content), t.dispatch(r);
      }
      function tL(t, e) {
        let n = { name: t, timestamp: Date.now(), doc: e };
        tT.update((t) => [n, ...t]);
      }
      function tV(t) {
        tT.update((e) => e.map((e) => (e.timestamp === t.timestamp ? t : e)));
      }
      function tH(t) {
        let e = document.createElement("a"),
          n = new Blob([JSON.stringify(t.doc)], { type: "application/json" });
        (e.href = URL.createObjectURL(n)),
          (e.download = `${t.name}.json`),
          e.click();
      }
      function tU(t) {
        tT.update((e) => e.filter((e) => e.timestamp !== t.timestamp));
        let e = D(tI);
        (null == e ? void 0 : e.timestamp) === t.timestamp && tI.set(void 0);
      }
      function tJ(t, e) {
        let n = (n) => t && !t.contains(n.target) && !n.defaultPrevented && e();
        return (
          document.addEventListener("click", n, !0),
          {
            destroy() {
              document.removeEventListener("click", n, !0);
            },
          }
        );
      }
      function tG(t) {
        var e, n, r, o, i, a, c, l, s, u, f, d;
        return {
          c: function () {
            (e = H("div")),
              (n = H("div")),
              (r = G()),
              (o = H("form")),
              (i = H("fieldset")),
              ((a = H("div")).innerHTML =
                '<button class="svelte-1xgo4vn">Submit</button>'),
              (c = G()),
              ((l = H("legend")).textContent = "Doc"),
              (s = G()),
              (u = H("textarea")),
              Y(n, "class", "modal-bg svelte-1xgo4vn"),
              Y(a, "class", "submit-container svelte-1xgo4vn"),
              Y(l, "class", "svelte-1xgo4vn"),
              Y(u, "class", "svelte-1xgo4vn"),
              Y(i, "class", "svelte-1xgo4vn"),
              Y(o, "class", "paste-content svelte-1xgo4vn"),
              Y(e, "class", "paste-modal svelte-1xgo4vn"),
              tt(e, "hidden", !t[0]);
          },
          m: function (p, h) {
            if (
              (F(p, e, h),
              z(e, n),
              z(e, r),
              z(e, o),
              z(o, i),
              z(i, a),
              z(i, c),
              z(i, l),
              z(i, s),
              z(i, u),
              X(u, t[1]),
              !f)
            ) {
              var v, g;
              (d = [
                W(u, "input", t[4]),
                (v = tJ.call(null, i, t[2])) && R(v.destroy) ? v.destroy : k,
                W(
                  o,
                  "submit",
                  ((g = t[3]),
                  function (t) {
                    return t.preventDefault(), g.call(this, t);
                  })
                ),
              ]),
                (f = !0);
            }
          },
          p: function (t, n) {
            var r = $(n, 1)[0];
            2 & r && X(u, t[1]), 1 & r && tt(e, "hidden", !t[0]);
          },
          i: k,
          o: k,
          d: function (t) {
            t && L(e), (f = !1), C(d);
          },
        };
      }
      function tK(t, e, n) {
        var r,
          o = e.isOpen,
          i = tr();
        return (
          (t.$$set = function (t) {
            "isOpen" in t && n(0, (o = t.isOpen));
          }),
          [
            o,
            r,
            function () {
              i("close");
            },
            function () {
              try {
                i("submit", { doc: JSON.parse(r) });
              } catch (t) {}
            },
            function () {
              n(1, (r = this.value));
            },
          ]
        );
      }
      !(function () {
        let t = null;
        try {
          t = localStorage.getItem(tB);
        } catch (t) {
          tz = !1;
        }
        if (t && t.length > 0)
          try {
            let e = JSON.parse(t);
            tT.set(e);
          } catch (t) {
            console.error("Corrupted snapshots values in localStorage", t);
          }
      })(),
        tT.subscribe((t) => {
          tz && localStorage.setItem(tB, JSON.stringify(t));
        }),
        tS(
          ".hidden.svelte-1xgo4vn.svelte-1xgo4vn{opacity:0;visibility:hidden}.paste-modal.svelte-1xgo4vn.svelte-1xgo4vn{font-size:15px;height:100%;left:0;position:fixed;top:0;width:100%;z-index:1000}.paste-modal.svelte-1xgo4vn>form.svelte-1xgo4vn{display:flex;height:100%;justify-content:center;padding:64px;width:100%}.modal-bg.svelte-1xgo4vn.svelte-1xgo4vn{background:#000;height:100%;left:0;opacity:0.8;position:absolute;top:0;width:100%;z-index:-1}fieldset.svelte-1xgo4vn.svelte-1xgo4vn{border-color:transparent;width:100%;max-width:800px}.submit-container.svelte-1xgo4vn.svelte-1xgo4vn{position:relative;width:100%}button.svelte-1xgo4vn.svelte-1xgo4vn{cursor:pointer;padding:4px 8px;position:absolute;right:0;top:-32px}legend.svelte-1xgo4vn.svelte-1xgo4vn{color:white}textarea.svelte-1xgo4vn.svelte-1xgo4vn{background:#fefcfc;height:100%;width:100%}"
        );
      var tW = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return (
            d(this, r),
            tj(p((e = n.call(this))), t, tK, tG, S, { isOpen: 0 }),
            e
          );
        }
        return f(r);
      })(tO);
      function tY(t) {
        var e, n, r, o, i, a, c, l, s, u, f, d, p, h, v, g, m, y, b, x;
        return {
          c: function () {
            (e = H("ul")),
              (n = H("li")),
              ((r = H("button")).textContent = "STATE"),
              (o = G()),
              (i = H("li")),
              ((a = H("button")).textContent = "HISTORY"),
              (c = G()),
              (l = H("li")),
              ((s = H("button")).textContent = "PLUGINS"),
              (u = G()),
              (f = H("li")),
              ((d = H("button")).textContent = "SCHEMA"),
              (p = G()),
              (h = H("li")),
              ((v = H("button")).textContent = "STRUCTURE"),
              (g = G()),
              (m = H("li")),
              ((y = H("button")).textContent = "SNAPSHOTS"),
              Y(r, "class", "svelte-b89ziw"),
              tt(r, "active", "state" === t[0]),
              Y(a, "class", "svelte-b89ziw"),
              tt(a, "active", "history" === t[0]),
              Y(s, "class", "svelte-b89ziw"),
              tt(s, "active", "plugins" === t[0]),
              Y(d, "class", "svelte-b89ziw"),
              tt(d, "active", "schema" === t[0]),
              Y(v, "class", "svelte-b89ziw"),
              tt(v, "active", "structure" === t[0]),
              Y(y, "class", "svelte-b89ziw"),
              tt(y, "active", "snapshots" === t[0]),
              Y(e, "class", "tabs-menu svelte-b89ziw");
          },
          m: function ($, w) {
            F($, e, w),
              z(e, n),
              z(n, r),
              z(e, o),
              z(e, i),
              z(i, a),
              z(e, c),
              z(e, l),
              z(l, s),
              z(e, u),
              z(e, f),
              z(f, d),
              z(e, p),
              z(e, h),
              z(h, v),
              z(e, g),
              z(e, m),
              z(m, y),
              b ||
                ((x = [
                  W(r, "click", t[2]),
                  W(a, "click", t[3]),
                  W(s, "click", t[4]),
                  W(d, "click", t[5]),
                  W(v, "click", t[6]),
                  W(y, "click", t[7]),
                ]),
                (b = !0));
          },
          p: function (t, e) {
            var n = $(e, 1)[0];
            1 & n && tt(r, "active", "state" === t[0]),
              1 & n && tt(a, "active", "history" === t[0]),
              1 & n && tt(s, "active", "plugins" === t[0]),
              1 & n && tt(d, "active", "schema" === t[0]),
              1 & n && tt(v, "active", "structure" === t[0]),
              1 & n && tt(y, "active", "snapshots" === t[0]);
          },
          i: k,
          o: k,
          d: function (t) {
            t && L(e), (b = !1), C(x);
          },
        };
      }
      function tZ(t, e, n) {
        var r = e.active,
          o = e.onClickTab;
        return (
          (t.$$set = function (t) {
            "active" in t && n(0, (r = t.active)),
              "onClickTab" in t && n(1, (o = t.onClickTab));
          }),
          [
            r,
            o,
            function () {
              return o("state");
            },
            function () {
              return o("history");
            },
            function () {
              return o("plugins");
            },
            function () {
              return o("schema");
            },
            function () {
              return o("structure");
            },
            function () {
              return o("snapshots");
            },
          ]
        );
      }
      tS(
        "ul.svelte-b89ziw{display:flex;list-style:none;margin:0;overflow-x:scroll;padding:0}button.svelte-b89ziw{background:transparent;border:0;border-bottom:2px solid transparent;color:#fff;cursor:pointer;height:100%;padding:1em}button.svelte-b89ziw:hover{background:rgba(255, 255, 255, 0.05)}button.active.svelte-b89ziw{border-bottom:2px solid rgb(255, 162, 177)}"
      );
      var tQ = (function (t) {
          v(r, t);
          var e,
            n =
              ((e = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  n = y(r);
                if (e) {
                  var o = y(this).constructor;
                  t = Reflect.construct(n, arguments, o);
                } else t = n.apply(this, arguments);
                return m(this, t);
              });
          function r(t) {
            var e;
            return (
              d(this, r),
              tj(p((e = n.call(this))), t, tZ, tY, S, {
                active: 0,
                onClickTab: 1,
              }),
              e
            );
          }
          return f(r);
        })(tO),
        tX = { exports: {} };
      ((o = function () {
        (this.Diff_Timeout = 1),
          (this.Diff_EditCost = 4),
          (this.Match_Threshold = 0.5),
          (this.Match_Distance = 1e3),
          (this.Patch_DeleteThreshold = 0.5),
          (this.Patch_Margin = 4),
          (this.Match_MaxBits = 32);
      }).Diff = function (t, e) {
        return [t, e];
      }),
        (o.prototype.diff_main = function (t, e, n, r) {
          void 0 === r &&
            (r =
              this.Diff_Timeout <= 0
                ? Number.MAX_VALUE
                : new Date().getTime() + 1e3 * this.Diff_Timeout);
          var i = r;
          if (null == t || null == e) throw Error("Null input. (diff_main)");
          if (t == e) return t ? [new o.Diff(0, t)] : [];
          void 0 === n && (n = !0);
          var a = n,
            c = this.diff_commonPrefix(t, e),
            l = t.substring(0, c);
          (t = t.substring(c)),
            (e = e.substring(c)),
            (c = this.diff_commonSuffix(t, e));
          var s = t.substring(t.length - c);
          (t = t.substring(0, t.length - c)),
            (e = e.substring(0, e.length - c));
          var u = this.diff_compute_(t, e, a, i);
          return (
            l && u.unshift(new o.Diff(0, l)),
            s && u.push(new o.Diff(0, s)),
            this.diff_cleanupMerge(u),
            u
          );
        }),
        (o.prototype.diff_compute_ = function (t, e, n, r) {
          if (!t) return [new o.Diff(1, e)];
          if (!e) return [new o.Diff(-1, t)];
          var i,
            a = t.length > e.length ? t : e,
            c = t.length > e.length ? e : t,
            l = a.indexOf(c);
          if (-1 != l)
            return (
              (i = [
                new o.Diff(1, a.substring(0, l)),
                new o.Diff(0, c),
                new o.Diff(1, a.substring(l + c.length)),
              ]),
              t.length > e.length && (i[0][0] = i[2][0] = -1),
              i
            );
          if (1 == c.length) return [new o.Diff(-1, t), new o.Diff(1, e)];
          var s = this.diff_halfMatch_(t, e);
          if (s) {
            var u = s[0],
              f = s[1],
              d = s[2],
              p = s[3],
              h = s[4],
              v = this.diff_main(u, d, n, r),
              g = this.diff_main(f, p, n, r);
            return v.concat([new o.Diff(0, h)], g);
          }
          return n && t.length > 100 && e.length > 100
            ? this.diff_lineMode_(t, e, r)
            : this.diff_bisect_(t, e, r);
        }),
        (o.prototype.diff_lineMode_ = function (t, e, n) {
          var r = this.diff_linesToChars_(t, e);
          (t = r.chars1), (e = r.chars2);
          var i = r.lineArray,
            a = this.diff_main(t, e, !1, n);
          this.diff_charsToLines_(a, i),
            this.diff_cleanupSemantic(a),
            a.push(new o.Diff(0, ""));
          for (var c = 0, l = 0, s = 0, u = "", f = ""; c < a.length; ) {
            switch (a[c][0]) {
              case 1:
                s++, (f += a[c][1]);
                break;
              case -1:
                l++, (u += a[c][1]);
                break;
              case 0:
                if (l >= 1 && s >= 1) {
                  a.splice(c - l - s, l + s), (c = c - l - s);
                  for (
                    var d = this.diff_main(u, f, !1, n), p = d.length - 1;
                    p >= 0;
                    p--
                  )
                    a.splice(c, 0, d[p]);
                  c += d.length;
                }
                (s = 0), (l = 0), (u = ""), (f = "");
            }
            c++;
          }
          return a.pop(), a;
        }),
        (o.prototype.diff_bisect_ = function (t, e, n) {
          for (
            var r = t.length,
              i = e.length,
              a = Math.ceil((r + i) / 2),
              c = 2 * a,
              l = Array(c),
              s = Array(c),
              u = 0;
            u < c;
            u++
          )
            (l[u] = -1), (s[u] = -1);
          (l[a + 1] = 0), (s[a + 1] = 0);
          for (
            var f = r - i, d = f % 2 != 0, p = 0, h = 0, v = 0, g = 0, m = 0;
            m < a && !(new Date().getTime() > n);
            m++
          ) {
            for (var y = -m + p; y <= m - h; y += 2) {
              for (
                var b,
                  x = a + y,
                  $ =
                    (b =
                      y == -m || (y != m && l[x - 1] < l[x + 1])
                        ? l[x + 1]
                        : l[x - 1] + 1) - y;
                b < r && $ < i && t.charAt(b) == e.charAt($);

              )
                b++, $++;
              if (((l[x] = b), b > r)) h += 2;
              else if ($ > i) p += 2;
              else if (d) {
                var w = a + f - y;
                if (w >= 0 && w < c && -1 != s[w]) {
                  var k = r - s[w];
                  if (b >= k) return this.diff_bisectSplit_(t, e, b, $, n);
                }
              }
            }
            for (var _ = -m + v; _ <= m - g; _ += 2) {
              for (
                var k,
                  w = a + _,
                  j =
                    (k =
                      _ == -m || (_ != m && s[w - 1] < s[w + 1])
                        ? s[w + 1]
                        : s[w - 1] + 1) - _;
                k < r && j < i && t.charAt(r - k - 1) == e.charAt(i - j - 1);

              )
                k++, j++;
              if (((s[w] = k), k > r)) g += 2;
              else if (j > i) v += 2;
              else if (!d) {
                var x = a + f - _;
                if (x >= 0 && x < c && -1 != l[x]) {
                  var b = l[x],
                    $ = a + b - x;
                  if (b >= (k = r - k))
                    return this.diff_bisectSplit_(t, e, b, $, n);
                }
              }
            }
          }
          return [new o.Diff(-1, t), new o.Diff(1, e)];
        }),
        (o.prototype.diff_bisectSplit_ = function (t, e, n, r, o) {
          var i = t.substring(0, n),
            a = e.substring(0, r),
            c = t.substring(n),
            l = e.substring(r),
            s = this.diff_main(i, a, !1, o),
            u = this.diff_main(c, l, !1, o);
          return s.concat(u);
        }),
        (o.prototype.diff_linesToChars_ = function (t, e) {
          var n = [],
            r = {};
          function o(t) {
            for (var e = "", o = 0, a = -1, c = n.length; a < t.length - 1; ) {
              -1 == (a = t.indexOf("\n", o)) && (a = t.length - 1);
              var l = t.substring(o, a + 1);
              (r.hasOwnProperty ? r.hasOwnProperty(l) : void 0 !== r[l])
                ? (e += String.fromCharCode(r[l]))
                : (c == i && ((l = t.substring(o)), (a = t.length)),
                  (e += String.fromCharCode(c)),
                  (r[l] = c),
                  (n[c++] = l)),
                (o = a + 1);
            }
            return e;
          }
          n[0] = "";
          var i = 4e4,
            a = o(t);
          return (i = 65535), { chars1: a, chars2: o(e), lineArray: n };
        }),
        (o.prototype.diff_charsToLines_ = function (t, e) {
          for (var n = 0; n < t.length; n++) {
            for (var r = t[n][1], o = [], i = 0; i < r.length; i++)
              o[i] = e[r.charCodeAt(i)];
            t[n][1] = o.join("");
          }
        }),
        (o.prototype.diff_commonPrefix = function (t, e) {
          if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
          for (
            var n = 0, r = Math.min(t.length, e.length), o = r, i = 0;
            n < o;

          )
            t.substring(i, o) == e.substring(i, o) ? (i = n = o) : (r = o),
              (o = Math.floor((r - n) / 2 + n));
          return o;
        }),
        (o.prototype.diff_commonSuffix = function (t, e) {
          if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1))
            return 0;
          for (
            var n = 0, r = Math.min(t.length, e.length), o = r, i = 0;
            n < o;

          )
            t.substring(t.length - o, t.length - i) ==
            e.substring(e.length - o, e.length - i)
              ? (i = n = o)
              : (r = o),
              (o = Math.floor((r - n) / 2 + n));
          return o;
        }),
        (o.prototype.diff_commonOverlap_ = function (t, e) {
          var n = t.length,
            r = e.length;
          if (0 == n || 0 == r) return 0;
          n > r ? (t = t.substring(n - r)) : n < r && (e = e.substring(0, n));
          var o = Math.min(n, r);
          if (t == e) return o;
          for (var i = 0, a = 1; ; ) {
            var c = t.substring(o - a),
              l = e.indexOf(c);
            if (-1 == l) return i;
            (a += l),
              (0 == l || t.substring(o - a) == e.substring(0, a)) &&
                ((i = a), a++);
          }
        }),
        (o.prototype.diff_halfMatch_ = function (t, e) {
          if (this.Diff_Timeout <= 0) return null;
          var n,
            r,
            o,
            i,
            a,
            c = t.length > e.length ? t : e,
            l = t.length > e.length ? e : t;
          if (c.length < 4 || 2 * l.length < c.length) return null;
          var s = this;
          function u(t, e, n) {
            for (
              var r,
                o,
                i,
                a,
                c = t.substring(n, n + Math.floor(t.length / 4)),
                l = -1,
                u = "";
              -1 != (l = e.indexOf(c, l + 1));

            ) {
              var f = s.diff_commonPrefix(t.substring(n), e.substring(l)),
                d = s.diff_commonSuffix(t.substring(0, n), e.substring(0, l));
              u.length < d + f &&
                ((u = e.substring(l - d, l) + e.substring(l, l + f)),
                (r = t.substring(0, n - d)),
                (o = t.substring(n + f)),
                (i = e.substring(0, l - d)),
                (a = e.substring(l + f)));
            }
            return 2 * u.length >= t.length ? [r, o, i, a, u] : null;
          }
          var f = u(c, l, Math.ceil(c.length / 4)),
            d = u(c, l, Math.ceil(c.length / 2));
          return f || d
            ? ((n = d ? (f && f[4].length > d[4].length ? f : d) : f),
              t.length > e.length
                ? ((r = n[0]), (o = n[1]), (i = n[2]), (a = n[3]))
                : ((i = n[0]), (a = n[1]), (r = n[2]), (o = n[3])),
              [r, o, i, a, n[4]])
            : null;
        }),
        (o.prototype.diff_cleanupSemantic = function (t) {
          for (
            var e = !1,
              n = [],
              r = 0,
              i = null,
              a = 0,
              c = 0,
              l = 0,
              s = 0,
              u = 0;
            a < t.length;

          )
            0 == t[a][0]
              ? ((n[r++] = a),
                (c = s),
                (l = u),
                (s = 0),
                (u = 0),
                (i = t[a][1]))
              : (1 == t[a][0] ? (s += t[a][1].length) : (u += t[a][1].length),
                i &&
                  i.length <= Math.max(c, l) &&
                  i.length <= Math.max(s, u) &&
                  (t.splice(n[r - 1], 0, new o.Diff(-1, i)),
                  (t[n[r - 1] + 1][0] = 1),
                  r--,
                  (a = --r > 0 ? n[r - 1] : -1),
                  (c = 0),
                  (l = 0),
                  (s = 0),
                  (u = 0),
                  (i = null),
                  (e = !0))),
              a++;
          for (
            e && this.diff_cleanupMerge(t),
              this.diff_cleanupSemanticLossless(t),
              a = 1;
            a < t.length;

          ) {
            if (-1 == t[a - 1][0] && 1 == t[a][0]) {
              var f = t[a - 1][1],
                d = t[a][1],
                p = this.diff_commonOverlap_(f, d),
                h = this.diff_commonOverlap_(d, f);
              p >= h
                ? (p >= f.length / 2 || p >= d.length / 2) &&
                  (t.splice(a, 0, new o.Diff(0, d.substring(0, p))),
                  (t[a - 1][1] = f.substring(0, f.length - p)),
                  (t[a + 1][1] = d.substring(p)),
                  a++)
                : (h >= f.length / 2 || h >= d.length / 2) &&
                  (t.splice(a, 0, new o.Diff(0, f.substring(0, h))),
                  (t[a - 1][0] = 1),
                  (t[a - 1][1] = d.substring(0, d.length - h)),
                  (t[a + 1][0] = -1),
                  (t[a + 1][1] = f.substring(h)),
                  a++),
                a++;
            }
            a++;
          }
        }),
        (o.prototype.diff_cleanupSemanticLossless = function (t) {
          function e(t, e) {
            if (!t || !e) return 6;
            var n = t.charAt(t.length - 1),
              r = e.charAt(0),
              i = n.match(o.nonAlphaNumericRegex_),
              a = r.match(o.nonAlphaNumericRegex_),
              c = i && n.match(o.whitespaceRegex_),
              l = a && r.match(o.whitespaceRegex_),
              s = c && n.match(o.linebreakRegex_),
              u = l && r.match(o.linebreakRegex_),
              f = s && t.match(o.blanklineEndRegex_),
              d = u && e.match(o.blanklineStartRegex_);
            return f || d
              ? 5
              : s || u
              ? 4
              : i && !c && l
              ? 3
              : c || l
              ? 2
              : i || a
              ? 1
              : 0;
          }
          for (var n = 1; n < t.length - 1; ) {
            if (0 == t[n - 1][0] && 0 == t[n + 1][0]) {
              var r = t[n - 1][1],
                i = t[n][1],
                a = t[n + 1][1],
                c = this.diff_commonSuffix(r, i);
              if (c) {
                var l = i.substring(i.length - c);
                (r = r.substring(0, r.length - c)),
                  (i = l + i.substring(0, i.length - c)),
                  (a = l + a);
              }
              for (
                var s = r, u = i, f = a, d = e(r, i) + e(i, a);
                i.charAt(0) === a.charAt(0);

              ) {
                (r += i.charAt(0)),
                  (i = i.substring(1) + a.charAt(0)),
                  (a = a.substring(1));
                var p = e(r, i) + e(i, a);
                p >= d && ((d = p), (s = r), (u = i), (f = a));
              }
              t[n - 1][1] != s &&
                (s ? (t[n - 1][1] = s) : (t.splice(n - 1, 1), n--),
                (t[n][1] = u),
                f ? (t[n + 1][1] = f) : (t.splice(n + 1, 1), n--));
            }
            n++;
          }
        }),
        (o.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/),
        (o.whitespaceRegex_ = /\s/),
        (o.linebreakRegex_ = /[\r\n]/),
        (o.blanklineEndRegex_ = /\n\r?\n$/),
        (o.blanklineStartRegex_ = /^\r?\n\r?\n/),
        (o.prototype.diff_cleanupEfficiency = function (t) {
          for (
            var e = !1,
              n = [],
              r = 0,
              i = null,
              a = 0,
              c = !1,
              l = !1,
              s = !1,
              u = !1;
            a < t.length;

          )
            0 == t[a][0]
              ? (t[a][1].length < this.Diff_EditCost && (s || u)
                  ? ((n[r++] = a), (c = s), (l = u), (i = t[a][1]))
                  : ((r = 0), (i = null)),
                (s = u = !1))
              : (-1 == t[a][0] ? (u = !0) : (s = !0),
                i &&
                  ((c && l && s && u) ||
                    (i.length < this.Diff_EditCost / 2 &&
                      c + l + s + u == 3)) &&
                  (t.splice(n[r - 1], 0, new o.Diff(-1, i)),
                  (t[n[r - 1] + 1][0] = 1),
                  r--,
                  (i = null),
                  c && l
                    ? ((s = u = !0), (r = 0))
                    : ((a = --r > 0 ? n[r - 1] : -1), (s = u = !1)),
                  (e = !0))),
              a++;
          e && this.diff_cleanupMerge(t);
        }),
        (o.prototype.diff_cleanupMerge = function (t) {
          t.push(new o.Diff(0, ""));
          for (var e, n = 0, r = 0, i = 0, a = "", c = ""; n < t.length; )
            switch (t[n][0]) {
              case 1:
                i++, (c += t[n][1]), n++;
                break;
              case -1:
                r++, (a += t[n][1]), n++;
                break;
              case 0:
                r + i > 1
                  ? (0 !== r &&
                      0 !== i &&
                      (0 !== (e = this.diff_commonPrefix(c, a)) &&
                        (n - r - i > 0 && 0 == t[n - r - i - 1][0]
                          ? (t[n - r - i - 1][1] += c.substring(0, e))
                          : (t.splice(0, 0, new o.Diff(0, c.substring(0, e))),
                            n++),
                        (c = c.substring(e)),
                        (a = a.substring(e))),
                      0 !== (e = this.diff_commonSuffix(c, a)) &&
                        ((t[n][1] = c.substring(c.length - e) + t[n][1]),
                        (c = c.substring(0, c.length - e)),
                        (a = a.substring(0, a.length - e)))),
                    (n -= r + i),
                    t.splice(n, r + i),
                    a.length && (t.splice(n, 0, new o.Diff(-1, a)), n++),
                    c.length && (t.splice(n, 0, new o.Diff(1, c)), n++),
                    n++)
                  : 0 !== n && 0 == t[n - 1][0]
                  ? ((t[n - 1][1] += t[n][1]), t.splice(n, 1))
                  : n++,
                  (i = 0),
                  (r = 0),
                  (a = ""),
                  (c = "");
            }
          "" === t[t.length - 1][1] && t.pop();
          var l = !1;
          for (n = 1; n < t.length - 1; )
            0 == t[n - 1][0] &&
              0 == t[n + 1][0] &&
              (t[n][1].substring(t[n][1].length - t[n - 1][1].length) ==
              t[n - 1][1]
                ? ((t[n][1] =
                    t[n - 1][1] +
                    t[n][1].substring(0, t[n][1].length - t[n - 1][1].length)),
                  (t[n + 1][1] = t[n - 1][1] + t[n + 1][1]),
                  t.splice(n - 1, 1),
                  (l = !0))
                : t[n][1].substring(0, t[n + 1][1].length) == t[n + 1][1] &&
                  ((t[n - 1][1] += t[n + 1][1]),
                  (t[n][1] =
                    t[n][1].substring(t[n + 1][1].length) + t[n + 1][1]),
                  t.splice(n + 1, 1),
                  (l = !0))),
              n++;
          l && this.diff_cleanupMerge(t);
        }),
        (o.prototype.diff_xIndex = function (t, e) {
          var n,
            r = 0,
            o = 0,
            i = 0,
            a = 0;
          for (
            n = 0;
            n < t.length &&
            (1 !== t[n][0] && (r += t[n][1].length),
            -1 !== t[n][0] && (o += t[n][1].length),
            !(r > e));
            n++
          )
            (i = r), (a = o);
          return t.length != n && -1 === t[n][0] ? a : a + (e - i);
        }),
        (o.prototype.diff_prettyHtml = function (t) {
          for (
            var e = [], n = /&/g, r = /</g, o = />/g, i = /\n/g, a = 0;
            a < t.length;
            a++
          ) {
            var c = t[a][0],
              l = t[a][1]
                .replace(n, "&amp;")
                .replace(r, "&lt;")
                .replace(o, "&gt;")
                .replace(i, "&para;<br>");
            switch (c) {
              case 1:
                e[a] = '<ins style="background:#e6ffe6;">' + l + "</ins>";
                break;
              case -1:
                e[a] = '<del style="background:#ffe6e6;">' + l + "</del>";
                break;
              case 0:
                e[a] = "<span>" + l + "</span>";
            }
          }
          return e.join("");
        }),
        (o.prototype.diff_text1 = function (t) {
          for (var e = [], n = 0; n < t.length; n++)
            1 !== t[n][0] && (e[n] = t[n][1]);
          return e.join("");
        }),
        (o.prototype.diff_text2 = function (t) {
          for (var e = [], n = 0; n < t.length; n++)
            -1 !== t[n][0] && (e[n] = t[n][1]);
          return e.join("");
        }),
        (o.prototype.diff_levenshtein = function (t) {
          for (var e = 0, n = 0, r = 0, o = 0; o < t.length; o++) {
            var i = t[o][0],
              a = t[o][1];
            switch (i) {
              case 1:
                n += a.length;
                break;
              case -1:
                r += a.length;
                break;
              case 0:
                (e += Math.max(n, r)), (n = 0), (r = 0);
            }
          }
          return e + Math.max(n, r);
        }),
        (o.prototype.diff_toDelta = function (t) {
          for (var e = [], n = 0; n < t.length; n++)
            switch (t[n][0]) {
              case 1:
                e[n] = "+" + encodeURI(t[n][1]);
                break;
              case -1:
                e[n] = "-" + t[n][1].length;
                break;
              case 0:
                e[n] = "=" + t[n][1].length;
            }
          return e.join("	").replace(/%20/g, " ");
        }),
        (o.prototype.diff_fromDelta = function (t, e) {
          for (
            var n = [], r = 0, i = 0, a = e.split(/\t/g), c = 0;
            c < a.length;
            c++
          ) {
            var l = a[c].substring(1);
            switch (a[c].charAt(0)) {
              case "+":
                try {
                  n[r++] = new o.Diff(1, decodeURI(l));
                } catch (t) {
                  throw Error("Illegal escape in diff_fromDelta: " + l);
                }
                break;
              case "-":
              case "=":
                var s = parseInt(l, 10);
                if (isNaN(s) || s < 0)
                  throw Error("Invalid number in diff_fromDelta: " + l);
                var u = t.substring(i, (i += s));
                "=" == a[c].charAt(0)
                  ? (n[r++] = new o.Diff(0, u))
                  : (n[r++] = new o.Diff(-1, u));
                break;
              default:
                if (a[c])
                  throw Error(
                    "Invalid diff operation in diff_fromDelta: " + a[c]
                  );
            }
          }
          if (i != t.length)
            throw Error(
              "Delta length (" +
                i +
                ") does not equal source text length (" +
                t.length +
                ")."
            );
          return n;
        }),
        (o.prototype.match_main = function (t, e, n) {
          if (null == t || null == e || null == n)
            throw Error("Null input. (match_main)");
          return ((n = Math.max(0, Math.min(n, t.length))), t == e)
            ? 0
            : t.length
            ? t.substring(n, n + e.length) == e
              ? n
              : this.match_bitap_(t, e, n)
            : -1;
        }),
        (o.prototype.match_bitap_ = function (t, e, n) {
          if (e.length > this.Match_MaxBits)
            throw Error("Pattern too long for this browser.");
          var r,
            o,
            i,
            a = this.match_alphabet_(e),
            c = this;
          function l(t, r) {
            var o = t / e.length,
              i = Math.abs(n - r);
            return c.Match_Distance ? o + i / c.Match_Distance : i ? 1 : o;
          }
          var s = this.Match_Threshold,
            u = t.indexOf(e, n);
          -1 != u &&
            ((s = Math.min(l(0, u), s)),
            -1 != (u = t.lastIndexOf(e, n + e.length)) &&
              (s = Math.min(l(0, u), s)));
          var f = 1 << (e.length - 1);
          u = -1;
          for (var d = e.length + t.length, p = 0; p < e.length; p++) {
            for (r = 0, o = d; r < o; )
              l(p, n + o) <= s ? (r = o) : (d = o),
                (o = Math.floor((d - r) / 2 + r));
            d = o;
            var h = Math.max(1, n - o + 1),
              v = Math.min(n + o, t.length) + e.length,
              g = Array(v + 2);
            g[v + 1] = (1 << p) - 1;
            for (var m = v; m >= h; m--) {
              var y = a[t.charAt(m - 1)];
              if (
                (0 === p
                  ? (g[m] = ((g[m + 1] << 1) | 1) & y)
                  : (g[m] =
                      (((g[m + 1] << 1) | 1) & y) |
                      (((i[m + 1] | i[m]) << 1) | 1) |
                      i[m + 1]),
                g[m] & f)
              ) {
                var b = l(p, m - 1);
                if (b <= s) {
                  if (((s = b), (u = m - 1) > n)) h = Math.max(1, 2 * n - u);
                  else break;
                }
              }
            }
            if (l(p + 1, n) > s) break;
            i = g;
          }
          return u;
        }),
        (o.prototype.match_alphabet_ = function (t) {
          for (var e = {}, n = 0; n < t.length; n++) e[t.charAt(n)] = 0;
          for (var n = 0; n < t.length; n++)
            e[t.charAt(n)] |= 1 << (t.length - n - 1);
          return e;
        }),
        (o.prototype.patch_addContext_ = function (t, e) {
          if (0 != e.length) {
            if (null === t.start2) throw Error("patch not initialized");
            for (
              var n = e.substring(t.start2, t.start2 + t.length1), r = 0;
              e.indexOf(n) != e.lastIndexOf(n) &&
              n.length <
                this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;

            )
              (r += this.Patch_Margin),
                (n = e.substring(t.start2 - r, t.start2 + t.length1 + r));
            r += this.Patch_Margin;
            var i = e.substring(t.start2 - r, t.start2);
            i && t.diffs.unshift(new o.Diff(0, i));
            var a = e.substring(t.start2 + t.length1, t.start2 + t.length1 + r);
            a && t.diffs.push(new o.Diff(0, a)),
              (t.start1 -= i.length),
              (t.start2 -= i.length),
              (t.length1 += i.length + a.length),
              (t.length2 += i.length + a.length);
          }
        }),
        (o.prototype.patch_make = function (t, e, n) {
          if ("string" == typeof t && "string" == typeof e && void 0 === n)
            (r = t),
              (i = this.diff_main(r, e, !0)).length > 2 &&
                (this.diff_cleanupSemantic(i), this.diff_cleanupEfficiency(i));
          else if (t && "object" == g(t) && void 0 === e && void 0 === n)
            (i = t), (r = this.diff_text1(i));
          else if (
            "string" == typeof t &&
            e &&
            "object" == g(e) &&
            void 0 === n
          )
            (r = t), (i = e);
          else if (
            "string" == typeof t &&
            "string" == typeof e &&
            n &&
            "object" == g(n)
          )
            (r = t), (i = n);
          else throw Error("Unknown call format to patch_make.");
          if (0 === i.length) return [];
          for (
            var r,
              i,
              a = [],
              c = new o.patch_obj(),
              l = 0,
              s = 0,
              u = 0,
              f = r,
              d = r,
              p = 0;
            p < i.length;
            p++
          ) {
            var h = i[p][0],
              v = i[p][1];
            switch ((l || 0 === h || ((c.start1 = s), (c.start2 = u)), h)) {
              case 1:
                (c.diffs[l++] = i[p]),
                  (c.length2 += v.length),
                  (d = d.substring(0, u) + v + d.substring(u));
                break;
              case -1:
                (c.length1 += v.length),
                  (c.diffs[l++] = i[p]),
                  (d = d.substring(0, u) + d.substring(u + v.length));
                break;
              case 0:
                v.length <= 2 * this.Patch_Margin && l && i.length != p + 1
                  ? ((c.diffs[l++] = i[p]),
                    (c.length1 += v.length),
                    (c.length2 += v.length))
                  : v.length >= 2 * this.Patch_Margin &&
                    l &&
                    (this.patch_addContext_(c, f),
                    a.push(c),
                    (c = new o.patch_obj()),
                    (l = 0),
                    (f = d),
                    (s = u));
            }
            1 !== h && (s += v.length), -1 !== h && (u += v.length);
          }
          return l && (this.patch_addContext_(c, f), a.push(c)), a;
        }),
        (o.prototype.patch_deepCopy = function (t) {
          for (var e = [], n = 0; n < t.length; n++) {
            var r = t[n],
              i = new o.patch_obj();
            i.diffs = [];
            for (var a = 0; a < r.diffs.length; a++)
              i.diffs[a] = new o.Diff(r.diffs[a][0], r.diffs[a][1]);
            (i.start1 = r.start1),
              (i.start2 = r.start2),
              (i.length1 = r.length1),
              (i.length2 = r.length2),
              (e[n] = i);
          }
          return e;
        }),
        (o.prototype.patch_apply = function (t, e) {
          if (0 == t.length) return [e, []];
          t = this.patch_deepCopy(t);
          var n = this.patch_addPadding(t);
          (e = n + e + n), this.patch_splitMax(t);
          for (var r = 0, o = [], i = 0; i < t.length; i++) {
            var a = t[i].start2 + r,
              c = this.diff_text1(t[i].diffs),
              l = -1;
            if (
              (c.length > this.Match_MaxBits
                ? -1 !=
                    (u = this.match_main(
                      e,
                      c.substring(0, this.Match_MaxBits),
                      a
                    )) &&
                  (-1 ==
                    (l = this.match_main(
                      e,
                      c.substring(c.length - this.Match_MaxBits),
                      a + c.length - this.Match_MaxBits
                    )) ||
                    u >= l) &&
                  (u = -1)
                : (u = this.match_main(e, c, a)),
              -1 == u)
            )
              (o[i] = !1), (r -= t[i].length2 - t[i].length1);
            else if (
              ((o[i] = !0),
              (r = u - a),
              (f =
                -1 == l
                  ? e.substring(u, u + c.length)
                  : e.substring(u, l + this.Match_MaxBits)),
              c == f)
            )
              e =
                e.substring(0, u) +
                this.diff_text2(t[i].diffs) +
                e.substring(u + c.length);
            else {
              var s = this.diff_main(c, f, !1);
              if (
                c.length > this.Match_MaxBits &&
                this.diff_levenshtein(s) / c.length > this.Patch_DeleteThreshold
              )
                o[i] = !1;
              else {
                this.diff_cleanupSemanticLossless(s);
                for (var u, f, d, p = 0, h = 0; h < t[i].diffs.length; h++) {
                  var v = t[i].diffs[h];
                  0 !== v[0] && (d = this.diff_xIndex(s, p)),
                    1 === v[0]
                      ? (e = e.substring(0, u + d) + v[1] + e.substring(u + d))
                      : -1 === v[0] &&
                        (e =
                          e.substring(0, u + d) +
                          e.substring(
                            u + this.diff_xIndex(s, p + v[1].length)
                          )),
                    -1 !== v[0] && (p += v[1].length);
                }
              }
            }
          }
          return [(e = e.substring(n.length, e.length - n.length)), o];
        }),
        (o.prototype.patch_addPadding = function (t) {
          for (var e = this.Patch_Margin, n = "", r = 1; r <= e; r++)
            n += String.fromCharCode(r);
          for (var r = 0; r < t.length; r++)
            (t[r].start1 += e), (t[r].start2 += e);
          var i = t[0],
            a = i.diffs;
          if (0 == a.length || 0 != a[0][0])
            a.unshift(new o.Diff(0, n)),
              (i.start1 -= e),
              (i.start2 -= e),
              (i.length1 += e),
              (i.length2 += e);
          else if (e > a[0][1].length) {
            var c = e - a[0][1].length;
            (a[0][1] = n.substring(a[0][1].length) + a[0][1]),
              (i.start1 -= c),
              (i.start2 -= c),
              (i.length1 += c),
              (i.length2 += c);
          }
          if (
            0 == (a = (i = t[t.length - 1]).diffs).length ||
            0 != a[a.length - 1][0]
          )
            a.push(new o.Diff(0, n)), (i.length1 += e), (i.length2 += e);
          else if (e > a[a.length - 1][1].length) {
            var c = e - a[a.length - 1][1].length;
            (a[a.length - 1][1] += n.substring(0, c)),
              (i.length1 += c),
              (i.length2 += c);
          }
          return n;
        }),
        (o.prototype.patch_splitMax = function (t) {
          for (var e = this.Match_MaxBits, n = 0; n < t.length; n++)
            if (!(t[n].length1 <= e)) {
              var r = t[n];
              t.splice(n--, 1);
              for (
                var i = r.start1, a = r.start2, c = "";
                0 !== r.diffs.length;

              ) {
                var l = new o.patch_obj(),
                  s = !0;
                for (
                  l.start1 = i - c.length,
                    l.start2 = a - c.length,
                    "" !== c &&
                      ((l.length1 = l.length2 = c.length),
                      l.diffs.push(new o.Diff(0, c)));
                  0 !== r.diffs.length && l.length1 < e - this.Patch_Margin;

                ) {
                  var u = r.diffs[0][0],
                    f = r.diffs[0][1];
                  1 === u
                    ? ((l.length2 += f.length),
                      (a += f.length),
                      l.diffs.push(r.diffs.shift()),
                      (s = !1))
                    : -1 === u &&
                      1 == l.diffs.length &&
                      0 == l.diffs[0][0] &&
                      f.length > 2 * e
                    ? ((l.length1 += f.length),
                      (i += f.length),
                      (s = !1),
                      l.diffs.push(new o.Diff(u, f)),
                      r.diffs.shift())
                    : ((f = f.substring(0, e - l.length1 - this.Patch_Margin)),
                      (l.length1 += f.length),
                      (i += f.length),
                      0 === u
                        ? ((l.length2 += f.length), (a += f.length))
                        : (s = !1),
                      l.diffs.push(new o.Diff(u, f)),
                      f == r.diffs[0][1]
                        ? r.diffs.shift()
                        : (r.diffs[0][1] = r.diffs[0][1].substring(f.length)));
                }
                c = (c = this.diff_text2(l.diffs)).substring(
                  c.length - this.Patch_Margin
                );
                var d = this.diff_text1(r.diffs).substring(
                  0,
                  this.Patch_Margin
                );
                "" !== d &&
                  ((l.length1 += d.length),
                  (l.length2 += d.length),
                  0 !== l.diffs.length && 0 === l.diffs[l.diffs.length - 1][0]
                    ? (l.diffs[l.diffs.length - 1][1] += d)
                    : l.diffs.push(new o.Diff(0, d))),
                  s || t.splice(++n, 0, l);
              }
            }
        }),
        (o.prototype.patch_toText = function (t) {
          for (var e = [], n = 0; n < t.length; n++) e[n] = t[n];
          return e.join("");
        }),
        (o.prototype.patch_fromText = function (t) {
          var e = [];
          if (!t) return e;
          for (
            var n = t.split("\n"),
              r = 0,
              i = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
            r < n.length;

          ) {
            var a = n[r].match(i);
            if (!a) throw Error("Invalid patch string: " + n[r]);
            var c = new o.patch_obj();
            for (
              e.push(c),
                c.start1 = parseInt(a[1], 10),
                "" === a[2]
                  ? (c.start1--, (c.length1 = 1))
                  : "0" == a[2]
                  ? (c.length1 = 0)
                  : (c.start1--, (c.length1 = parseInt(a[2], 10))),
                c.start2 = parseInt(a[3], 10),
                "" === a[4]
                  ? (c.start2--, (c.length2 = 1))
                  : "0" == a[4]
                  ? (c.length2 = 0)
                  : (c.start2--, (c.length2 = parseInt(a[4], 10))),
                r++;
              r < n.length;

            ) {
              var l = n[r].charAt(0);
              try {
                var s = decodeURI(n[r].substring(1));
              } catch (t) {
                throw Error("Illegal escape in patch_fromText: " + s);
              }
              if ("-" == l) c.diffs.push(new o.Diff(-1, s));
              else if ("+" == l) c.diffs.push(new o.Diff(1, s));
              else if (" " == l) c.diffs.push(new o.Diff(0, s));
              else if ("@" == l) break;
              else if ("" === l);
              else throw Error('Invalid patch mode "' + l + '" in: ' + s);
              r++;
            }
          }
          return e;
        }),
        (o.patch_obj = function () {
          (this.diffs = []),
            (this.start1 = null),
            (this.start2 = null),
            (this.length1 = 0),
            (this.length2 = 0);
        }),
        (o.patch_obj.prototype.toString = function () {
          t =
            0 === this.length1
              ? this.start1 + ",0"
              : 1 == this.length1
              ? this.start1 + 1
              : this.start1 + 1 + "," + this.length1;
          for (
            var t,
              e,
              n = [
                "@@ -" +
                  t +
                  " +" +
                  (0 === this.length2
                    ? this.start2 + ",0"
                    : 1 == this.length2
                    ? this.start2 + 1
                    : this.start2 + 1 + "," + this.length2) +
                  " @@\n",
              ],
              r = 0;
            r < this.diffs.length;
            r++
          ) {
            switch (this.diffs[r][0]) {
              case 1:
                e = "+";
                break;
              case -1:
                e = "-";
                break;
              case 0:
                e = " ";
            }
            n[r + 1] = e + encodeURI(this.diffs[r][1]) + "\n";
          }
          return n.join("").replace(/%20/g, " ");
        }),
        (tX.exports = o),
        (tX.exports.diff_match_patch = o),
        (tX.exports.DIFF_DELETE = -1),
        (tX.exports.DIFF_INSERT = 1),
        (tX.exports.DIFF_EQUAL = 0);
      var t0 = tX.exports,
        t1 =
          "function" == typeof Symbol && "symbol" === g(Symbol.iterator)
            ? function (t) {
                return g(t);
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : g(t);
              },
        t2 = function (t, e) {
          if (!(t instanceof e))
            throw TypeError("Cannot call a class as a function");
        },
        t5 = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        t4 = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);
          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            if (null === i) return;
            return t(i, n, r);
          }
          if ("value" in o) return o.value;
          var a = o.get;
          if (void 0 !== a) return a.call(r);
        },
        t3 = function (t, e) {
          if ("function" != typeof e && null !== e)
            throw TypeError(
              "Super expression must either be null or a function, not " + g(e)
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        },
        t6 = function (t, e) {
          if (!t)
            throw ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e && ("object" === g(e) || "function" == typeof e) ? e : t;
        },
        t7 = function (t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t))
            return (function (t, e) {
              var n = [],
                r = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var a, c = t[Symbol.iterator]();
                  !(r = (a = c.next()).done) &&
                  (n.push(a.value), !e || n.length !== e);
                  r = !0
                );
              } catch (t) {
                (o = !0), (i = t);
              } finally {
                try {
                  !r && c.return && c.return();
                } finally {
                  if (o) throw i;
                }
              }
              return n;
            })(t, e);
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        },
        t9 = function (t) {
          if (!Array.isArray(t)) return Array.from(t);
          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
          return n;
        },
        t8 = (function () {
          function t(e) {
            t2(this, t), (this.selfOptions = e || {}), (this.pipes = {});
          }
          return (
            t5(t, [
              {
                key: "options",
                value: function (t) {
                  return t && (this.selfOptions = t), this.selfOptions;
                },
              },
              {
                key: "pipe",
                value: function (t, e) {
                  var n = e;
                  if ("string" == typeof t) {
                    if (void 0 === n) return this.pipes[t];
                    this.pipes[t] = n;
                  }
                  if (t && t.name) {
                    if ((n = t).processor === this) return n;
                    this.pipes[n.name] = n;
                  }
                  return (n.processor = this), n;
                },
              },
              {
                key: "process",
                value: function (t, e) {
                  var n = t;
                  n.options = this.options();
                  for (
                    var r = e || t.pipe || "default", o = void 0, i = void 0;
                    r;

                  )
                    void 0 !== n.nextAfterChildren &&
                      ((n.next = n.nextAfterChildren),
                      (n.nextAfterChildren = null)),
                      "string" == typeof r && (r = this.pipe(r)),
                      r.process(n),
                      (i = n),
                      (o = r),
                      (r = null),
                      n &&
                        n.next &&
                        ((n = n.next), (r = i.nextPipe || n.pipe || o));
                  return n.hasResult ? n.result : void 0;
                },
              },
            ]),
            t
          );
        })(),
        et = (function () {
          function t(e) {
            t2(this, t), (this.name = e), (this.filters = []);
          }
          return (
            t5(t, [
              {
                key: "process",
                value: function (t) {
                  if (!this.processor)
                    throw Error("add this pipe to a processor before using it");
                  for (
                    var e = this.debug, n = this.filters.length, r = 0;
                    r < n;
                    r++
                  ) {
                    var o = this.filters[r];
                    if (
                      (e && this.log("filter: " + o.filterName),
                      o(t),
                      (void 0 === t ? "undefined" : t1(t)) === "object" &&
                        t.exiting)
                    ) {
                      t.exiting = !1;
                      break;
                    }
                  }
                  !t.next && this.resultCheck && this.resultCheck(t);
                },
              },
              {
                key: "log",
                value: function (t) {
                  console.log("[jsondiffpatch] " + this.name + " pipe, " + t);
                },
              },
              {
                key: "append",
                value: function () {
                  var t;
                  return (t = this.filters).push.apply(t, arguments), this;
                },
              },
              {
                key: "prepend",
                value: function () {
                  var t;
                  return (t = this.filters).unshift.apply(t, arguments), this;
                },
              },
              {
                key: "indexOf",
                value: function (t) {
                  if (!t) throw Error("a filter name is required");
                  for (var e = 0; e < this.filters.length; e++)
                    if (this.filters[e].filterName === t) return e;
                  throw Error("filter not found: " + t);
                },
              },
              {
                key: "list",
                value: function () {
                  return this.filters.map(function (t) {
                    return t.filterName;
                  });
                },
              },
              {
                key: "after",
                value: function (t) {
                  var e = this.indexOf(t),
                    n = Array.prototype.slice.call(arguments, 1);
                  if (!n.length) throw Error("a filter is required");
                  return (
                    n.unshift(e + 1, 0),
                    Array.prototype.splice.apply(this.filters, n),
                    this
                  );
                },
              },
              {
                key: "before",
                value: function (t) {
                  var e = this.indexOf(t),
                    n = Array.prototype.slice.call(arguments, 1);
                  if (!n.length) throw Error("a filter is required");
                  return (
                    n.unshift(e, 0),
                    Array.prototype.splice.apply(this.filters, n),
                    this
                  );
                },
              },
              {
                key: "replace",
                value: function (t) {
                  var e = this.indexOf(t),
                    n = Array.prototype.slice.call(arguments, 1);
                  if (!n.length) throw Error("a filter is required");
                  return (
                    n.unshift(e, 1),
                    Array.prototype.splice.apply(this.filters, n),
                    this
                  );
                },
              },
              {
                key: "remove",
                value: function (t) {
                  var e = this.indexOf(t);
                  return this.filters.splice(e, 1), this;
                },
              },
              {
                key: "clear",
                value: function () {
                  return (this.filters.length = 0), this;
                },
              },
              {
                key: "shouldHaveResult",
                value: function (t) {
                  if (!1 === t) {
                    this.resultCheck = null;
                    return;
                  }
                  if (!this.resultCheck) {
                    var e = this;
                    return (
                      (this.resultCheck = function (t) {
                        if (!t.hasResult) {
                          console.log(t);
                          var n = Error(e.name + " failed");
                          throw ((n.noResult = !0), n);
                        }
                      }),
                      this
                    );
                  }
                },
              },
            ]),
            t
          );
        })(),
        ee = (function () {
          function t() {
            t2(this, t);
          }
          return (
            t5(t, [
              {
                key: "setResult",
                value: function (t) {
                  return (this.result = t), (this.hasResult = !0), this;
                },
              },
              {
                key: "exit",
                value: function () {
                  return (this.exiting = !0), this;
                },
              },
              {
                key: "switchTo",
                value: function (t, e) {
                  return (
                    "string" == typeof t || t instanceof et
                      ? (this.nextPipe = t)
                      : ((this.next = t), e && (this.nextPipe = e)),
                    this
                  );
                },
              },
              {
                key: "push",
                value: function (t, e) {
                  return (
                    (t.parent = this),
                    void 0 !== e && (t.childName = e),
                    (t.root = this.root || this),
                    (t.options = t.options || this.options),
                    this.children
                      ? ((this.children[this.children.length - 1].next = t),
                        this.children.push(t))
                      : ((this.children = [t]),
                        (this.nextAfterChildren = this.next || null),
                        (this.next = t)),
                    (t.next = this),
                    this
                  );
                },
              },
            ]),
            t
          );
        })(),
        en =
          "function" == typeof Array.isArray
            ? Array.isArray
            : function (t) {
                return t instanceof Array;
              };
      function er(t) {
        if ((void 0 === t ? "undefined" : t1(t)) !== "object") return t;
        if (null === t) return null;
        if (en(t)) return t.map(er);
        if (t instanceof Date) return new Date(t.getTime());
        if (t instanceof RegExp) {
          var e;
          return (
            (e = /^\/(.*)\/([gimyu]*)$/.exec(t.toString())),
            new RegExp(e[1], e[2])
          );
        }
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (n[r] = er(t[r]));
        return n;
      }
      var eo = (function (t) {
          function e(t, n) {
            t2(this, e);
            var r = t6(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this)
            );
            return (r.left = t), (r.right = n), (r.pipe = "diff"), r;
          }
          return (
            t3(e, t),
            t5(e, [
              {
                key: "setResult",
                value: function (t) {
                  if (
                    this.options.cloneDiffValues &&
                    (void 0 === t ? "undefined" : t1(t)) === "object"
                  ) {
                    var e =
                      "function" == typeof this.options.cloneDiffValues
                        ? this.options.cloneDiffValues
                        : er;
                    "object" === t1(t[0]) && (t[0] = e(t[0])),
                      "object" === t1(t[1]) && (t[1] = e(t[1]));
                  }
                  return ee.prototype.setResult.apply(this, arguments);
                },
              },
            ]),
            e
          );
        })(ee),
        ei = (function (t) {
          function e(t, n) {
            t2(this, e);
            var r = t6(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this)
            );
            return (r.left = t), (r.delta = n), (r.pipe = "patch"), r;
          }
          return t3(e, t), e;
        })(ee),
        ea = (function (t) {
          function e(t) {
            t2(this, e);
            var n = t6(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this)
            );
            return (n.delta = t), (n.pipe = "reverse"), n;
          }
          return t3(e, t), e;
        })(ee),
        ec =
          "function" == typeof Array.isArray
            ? Array.isArray
            : function (t) {
                return t instanceof Array;
              },
        el = function (t) {
          if (t.left === t.right) {
            t.setResult(void 0).exit();
            return;
          }
          if (void 0 === t.left) {
            if ("function" == typeof t.right)
              throw Error("functions are not supported");
            t.setResult([t.right]).exit();
            return;
          }
          if (void 0 === t.right) {
            t.setResult([t.left, 0, 0]).exit();
            return;
          }
          if ("function" == typeof t.left || "function" == typeof t.right)
            throw Error("functions are not supported");
          if (
            ((t.leftType = null === t.left ? "null" : t1(t.left)),
            (t.rightType = null === t.right ? "null" : t1(t.right)),
            t.leftType !== t.rightType ||
              "boolean" === t.leftType ||
              "number" === t.leftType ||
              ("object" === t.leftType && (t.leftIsArray = ec(t.left)),
              "object" === t.rightType && (t.rightIsArray = ec(t.right)),
              t.leftIsArray !== t.rightIsArray))
          ) {
            t.setResult([t.left, t.right]).exit();
            return;
          }
          t.left instanceof RegExp &&
            (t.right instanceof RegExp
              ? t.setResult([t.left.toString(), t.right.toString()]).exit()
              : t.setResult([t.left, t.right]).exit());
        };
      el.filterName = "trivial";
      var es = function (t) {
        if (void 0 === t.delta) {
          t.setResult(t.left).exit();
          return;
        }
        if (((t.nested = !ec(t.delta)), !t.nested)) {
          if (1 === t.delta.length) {
            t.setResult(t.delta[0]).exit();
            return;
          }
          if (2 === t.delta.length) {
            if (t.left instanceof RegExp) {
              var e = /^\/(.*)\/([gimyu]+)$/.exec(t.delta[1]);
              if (e) {
                t.setResult(new RegExp(e[1], e[2])).exit();
                return;
              }
            }
            t.setResult(t.delta[1]).exit();
            return;
          }
          3 === t.delta.length &&
            0 === t.delta[2] &&
            t.setResult(void 0).exit();
        }
      };
      es.filterName = "trivial";
      var eu = function (t) {
        if (void 0 === t.delta) {
          t.setResult(t.delta).exit();
          return;
        }
        if (((t.nested = !ec(t.delta)), !t.nested)) {
          if (1 === t.delta.length) {
            t.setResult([t.delta[0], 0, 0]).exit();
            return;
          }
          if (2 === t.delta.length) {
            t.setResult([t.delta[1], t.delta[0]]).exit();
            return;
          }
          3 === t.delta.length &&
            0 === t.delta[2] &&
            t.setResult([t.delta[0]]).exit();
        }
      };
      function ef(t) {
        if (t && t.children) {
          for (
            var e = t.children.length, n = void 0, r = t.result, o = 0;
            o < e;
            o++
          )
            void 0 !== (n = t.children[o]).result &&
              ((r = r || {})[n.childName] = n.result);
          r && t.leftIsArray && (r._t = "a"), t.setResult(r).exit();
        }
      }
      function ed(t) {
        if (!t.leftIsArray && "object" === t.leftType) {
          var e = void 0,
            n = void 0,
            r = t.options.propertyFilter;
          for (e in t.left)
            Object.prototype.hasOwnProperty.call(t.left, e) &&
              (!r || r(e, t)) &&
              ((n = new eo(t.left[e], t.right[e])), t.push(n, e));
          for (e in t.right)
            Object.prototype.hasOwnProperty.call(t.right, e) &&
              (!r || r(e, t)) &&
              void 0 === t.left[e] &&
              ((n = new eo(void 0, t.right[e])), t.push(n, e));
          if (!t.children || 0 === t.children.length) {
            t.setResult(void 0).exit();
            return;
          }
          t.exit();
        }
      }
      (eu.filterName = "trivial"),
        (ef.filterName = "collectChildren"),
        (ed.filterName = "objects");
      var ep = function (t) {
        if (t.nested && !t.delta._t) {
          var e = void 0,
            n = void 0;
          for (e in t.delta) (n = new ei(t.left[e], t.delta[e])), t.push(n, e);
          t.exit();
        }
      };
      ep.filterName = "objects";
      var eh = function (t) {
        if (t && t.children && !t.delta._t) {
          for (var e = t.children.length, n = void 0, r = 0; r < e; r++)
            (n = t.children[r]),
              Object.prototype.hasOwnProperty.call(t.left, n.childName) &&
              void 0 === n.result
                ? delete t.left[n.childName]
                : t.left[n.childName] !== n.result &&
                  (t.left[n.childName] = n.result);
          t.setResult(t.left).exit();
        }
      };
      eh.filterName = "collectChildren";
      var ev = function (t) {
        if (t.nested && !t.delta._t) {
          var e = void 0,
            n = void 0;
          for (e in t.delta) (n = new ea(t.delta[e])), t.push(n, e);
          t.exit();
        }
      };
      function eg(t) {
        if (t && t.children && !t.delta._t) {
          for (var e = t.children.length, n = void 0, r = {}, o = 0; o < e; o++)
            r[(n = t.children[o]).childName] !== n.result &&
              (r[n.childName] = n.result);
          t.setResult(r).exit();
        }
      }
      (ev.filterName = "objects"), (eg.filterName = "collectChildren");
      var em = function (t, e, n, r) {
          return t[n] === e[r];
        },
        ey = function (t, e, n, r) {
          var o = t.length,
            i = e.length,
            a = void 0,
            c = void 0,
            l = [o + 1];
          for (a = 0; a < o + 1; a++)
            for (c = 0, l[a] = [i + 1]; c < i + 1; c++) l[a][c] = 0;
          for (a = 1, l.match = n; a < o + 1; a++)
            for (c = 1; c < i + 1; c++)
              n(t, e, a - 1, c - 1, r)
                ? (l[a][c] = l[a - 1][c - 1] + 1)
                : (l[a][c] = Math.max(l[a - 1][c], l[a][c - 1]));
          return l;
        },
        eb = function (t, e, n, r) {
          for (
            var o = e.length,
              i = n.length,
              a = { sequence: [], indices1: [], indices2: [] };
            0 !== o && 0 !== i;

          )
            t.match(e, n, o - 1, i - 1, r)
              ? (a.sequence.unshift(e[o - 1]),
                a.indices1.unshift(o - 1),
                a.indices2.unshift(i - 1),
                --o,
                --i)
              : t[o][i - 1] > t[o - 1][i]
              ? --i
              : --o;
          return a;
        },
        ex = {
          get: function (t, e, n, r) {
            var o = r || {},
              i = eb(ey(t, e, n || em, o), t, e, o);
            return (
              "string" == typeof t &&
                "string" == typeof e &&
                (i.sequence = i.sequence.join("")),
              i
            );
          },
        },
        e$ =
          "function" == typeof Array.isArray
            ? Array.isArray
            : function (t) {
                return t instanceof Array;
              },
        ew =
          "function" == typeof Array.prototype.indexOf
            ? function (t, e) {
                return t.indexOf(e);
              }
            : function (t, e) {
                for (var n = t.length, r = 0; r < n; r++)
                  if (t[r] === e) return r;
                return -1;
              };
      function ek(t, e, n, r, o) {
        var i = t[n],
          a = e[r];
        if (i === a) return !0;
        if (
          (void 0 === i ? "undefined" : t1(i)) !== "object" ||
          (void 0 === a ? "undefined" : t1(a)) !== "object"
        )
          return !1;
        var c = o.objectHash;
        if (!c) return o.matchByPosition && n === r;
        var l = void 0,
          s = void 0;
        return (
          "number" == typeof n
            ? ((o.hashCache1 = o.hashCache1 || []),
              void 0 === (l = o.hashCache1[n]) &&
                (o.hashCache1[n] = l = c(i, n)))
            : (l = c(i)),
          void 0 !== l &&
            ("number" == typeof r
              ? ((o.hashCache2 = o.hashCache2 || []),
                void 0 === (s = o.hashCache2[r]) &&
                  (o.hashCache2[r] = s = c(a, r)))
              : (s = c(a)),
            void 0 !== s && l === s)
        );
      }
      var e_ = function (t) {
        if (t.leftIsArray) {
          var e = {
              objectHash: t.options && t.options.objectHash,
              matchByPosition: t.options && t.options.matchByPosition,
            },
            n = 0,
            r = 0,
            o = void 0,
            i = void 0,
            a = void 0,
            c = t.left,
            l = t.right,
            s = c.length,
            u = l.length,
            f = void 0;
          for (
            s > 0 &&
            u > 0 &&
            !e.objectHash &&
            "boolean" != typeof e.matchByPosition &&
            (e.matchByPosition = !(function (t, e, n, r) {
              for (var o = 0; o < n; o++)
                for (var i = t[o], a = 0; a < r; a++) {
                  var c = e[a];
                  if (o !== a && i === c) return !0;
                }
            })(c, l, s, u));
            n < s && n < u && ek(c, l, n, n, e);

          )
            (o = n), (f = new eo(t.left[o], t.right[o])), t.push(f, o), n++;
          for (; r + n < s && r + n < u && ek(c, l, s - 1 - r, u - 1 - r, e); )
            (i = s - 1 - r),
              (a = u - 1 - r),
              (f = new eo(t.left[i], t.right[a])),
              t.push(f, a),
              r++;
          var d = void 0;
          if (n + r === s) {
            if (s === u) {
              t.setResult(void 0).exit();
              return;
            }
            for (d = d || { _t: "a" }, o = n; o < u - r; o++) d[o] = [l[o]];
            t.setResult(d).exit();
            return;
          }
          if (n + r === u) {
            for (d = d || { _t: "a" }, o = n; o < s - r; o++)
              d["_" + o] = [c[o], 0, 0];
            t.setResult(d).exit();
            return;
          }
          delete e.hashCache1, delete e.hashCache2;
          var p = c.slice(n, s - r),
            h = l.slice(n, u - r),
            v = ex.get(p, h, ek, e),
            g = [];
          for (d = d || { _t: "a" }, o = n; o < s - r; o++)
            0 > ew(v.indices1, o - n) &&
              ((d["_" + o] = [c[o], 0, 0]), g.push(o));
          var m = !0;
          t.options &&
            t.options.arrays &&
            !1 === t.options.arrays.detectMove &&
            (m = !1);
          var y = !1;
          t.options &&
            t.options.arrays &&
            t.options.arrays.includeValueOnMove &&
            (y = !0);
          var b = g.length;
          for (o = n; o < u - r; o++) {
            var x = ew(v.indices2, o - n);
            if (x < 0) {
              var $ = !1;
              if (m && b > 0) {
                for (var w = 0; w < b; w++)
                  if (ek(p, h, (i = g[w]) - n, o - n, e)) {
                    d["_" + i].splice(1, 2, o, 3),
                      y || (d["_" + i][0] = ""),
                      (a = o),
                      (f = new eo(t.left[i], t.right[a])),
                      t.push(f, a),
                      g.splice(w, 1),
                      ($ = !0);
                    break;
                  }
              }
              $ || (d[o] = [l[o]]);
            } else
              (i = v.indices1[x] + n),
                (a = v.indices2[x] + n),
                (f = new eo(t.left[i], t.right[a])),
                t.push(f, a);
          }
          t.setResult(d).exit();
        }
      };
      e_.filterName = "arrays";
      var ej = {
          numerically: function (t, e) {
            return t - e;
          },
          numericallyBy: function (t) {
            return function (e, n) {
              return e[t] - n[t];
            };
          },
        },
        eO = function (t) {
          if (t.nested && "a" === t.delta._t) {
            var e = void 0,
              n = void 0,
              r = t.delta,
              o = t.left,
              i = [],
              a = [],
              c = [];
            for (e in r)
              if ("_t" !== e) {
                if ("_" === e[0]) {
                  if (0 === r[e][2] || 3 === r[e][2])
                    i.push(parseInt(e.slice(1), 10));
                  else
                    throw Error(
                      "only removal or move can be applied at original array indices, invalid diff type: " +
                        r[e][2]
                    );
                } else
                  1 === r[e].length
                    ? a.push({ index: parseInt(e, 10), value: r[e][0] })
                    : c.push({ index: parseInt(e, 10), delta: r[e] });
              }
            for (e = (i = i.sort(ej.numerically)).length - 1; e >= 0; e--) {
              var l = r["_" + (n = i[e])],
                s = o.splice(n, 1)[0];
              3 === l[2] && a.push({ index: l[1], value: s });
            }
            var u = (a = a.sort(ej.numericallyBy("index"))).length;
            for (e = 0; e < u; e++) {
              var f = a[e];
              o.splice(f.index, 0, f.value);
            }
            var d = c.length,
              p = void 0;
            if (d > 0)
              for (e = 0; e < d; e++) {
                var h = c[e];
                (p = new ei(t.left[h.index], h.delta)), t.push(p, h.index);
              }
            if (!t.children) {
              t.setResult(t.left).exit();
              return;
            }
            t.exit();
          }
        };
      eO.filterName = "arrays";
      var eC = function (t) {
        if (t && t.children && "a" === t.delta._t) {
          for (var e = t.children.length, n = void 0, r = 0; r < e; r++)
            (n = t.children[r]), (t.left[n.childName] = n.result);
          t.setResult(t.left).exit();
        }
      };
      eC.filterName = "arraysCollectChildren";
      var eR = function (t) {
        if (!t.nested) {
          3 === t.delta[2] &&
            ((t.newName = "_" + t.delta[1]),
            t
              .setResult([t.delta[0], parseInt(t.childName.substr(1), 10), 3])
              .exit());
          return;
        }
        if ("a" === t.delta._t) {
          var e = void 0,
            n = void 0;
          for (e in t.delta)
            "_t" !== e && ((n = new ea(t.delta[e])), t.push(n, e));
          t.exit();
        }
      };
      eR.filterName = "arrays";
      var eS = function (t, e, n) {
        if ("string" == typeof e && "_" === e[0])
          return parseInt(e.substr(1), 10);
        if (e$(n) && 0 === n[2]) return "_" + e;
        var r = +e;
        for (var o in t) {
          var i = t[o];
          if (e$(i)) {
            if (3 === i[2]) {
              var a = parseInt(o.substr(1), 10),
                c = i[1];
              if (c === +e) return a;
              a <= r && c > r ? r++ : a >= r && c < r && r--;
            } else
              0 === i[2]
                ? parseInt(o.substr(1), 10) <= r && r++
                : 1 === i.length && o <= r && r--;
          }
        }
        return r;
      };
      function eE(t) {
        if (t && t.children && "a" === t.delta._t) {
          for (
            var e = t.children.length, n = void 0, r = { _t: "a" }, o = 0;
            o < e;
            o++
          ) {
            var i = (n = t.children[o]).newName;
            void 0 === i && (i = eS(t.delta, n.childName, n.result)),
              r[i] !== n.result && (r[i] = n.result);
          }
          t.setResult(r).exit();
        }
      }
      eE.filterName = "arraysCollectChildren";
      var eD = function (t) {
        t.left instanceof Date
          ? (t.right instanceof Date
              ? t.left.getTime() !== t.right.getTime()
                ? t.setResult([t.left, t.right])
                : t.setResult(void 0)
              : t.setResult([t.left, t.right]),
            t.exit())
          : t.right instanceof Date && t.setResult([t.left, t.right]).exit();
      };
      eD.filterName = "dates";
      var eA = null,
        eP = function (t) {
          if (!eA) {
            var e = void 0;
            if ("undefined" != typeof diff_match_patch)
              e =
                "function" == typeof diff_match_patch
                  ? new diff_match_patch()
                  : new diff_match_patch.diff_match_patch();
            else if (t0)
              try {
                e = t0 && new t0();
              } catch (t) {
                e = null;
              }
            if (!e) {
              if (!t) return null;
              var n = Error("text diff_match_patch library not found");
              throw ((n.diff_match_patch_not_found = !0), n);
            }
            eA = {
              diff: function (t, n) {
                return e.patch_toText(e.patch_make(t, n));
              },
              patch: function (t, n) {
                for (
                  var r = e.patch_apply(e.patch_fromText(n), t), o = 0;
                  o < r[1].length;
                  o++
                )
                  r[1][o] || (Error("text patch failed").textPatchFailed = !0);
                return r[0];
              },
            };
          }
          return eA;
        },
        eN = function (t) {
          if ("string" === t.leftType) {
            var e =
              (t.options &&
                t.options.textDiff &&
                t.options.textDiff.minLength) ||
              60;
            if (t.left.length < e || t.right.length < e) {
              t.setResult([t.left, t.right]).exit();
              return;
            }
            var n = eP();
            if (!n) {
              t.setResult([t.left, t.right]).exit();
              return;
            }
            var r = n.diff;
            t.setResult([r(t.left, t.right), 0, 2]).exit();
          }
        };
      eN.filterName = "texts";
      var eM = function (t) {
        if (!t.nested && 2 === t.delta[2]) {
          var e = eP(!0).patch;
          t.setResult(e(t.left, t.delta[0])).exit();
        }
      };
      eM.filterName = "texts";
      var eB = function (t) {
          var e = void 0,
            n = void 0,
            r = void 0,
            o = void 0,
            i = void 0,
            a = null,
            c = /^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/;
          for (e = 0, n = (r = t.split("\n")).length; e < n; e++) {
            var l = (o = r[e]).slice(0, 1);
            "@" === l
              ? ((a = c.exec(o)),
                (r[e] =
                  "@@ -" +
                  a[3] +
                  "," +
                  a[4] +
                  " +" +
                  a[1] +
                  "," +
                  a[2] +
                  " @@"))
              : "+" === l
              ? ((r[e] = "-" + r[e].slice(1)),
                "+" === r[e - 1].slice(0, 1) &&
                  ((i = r[e]), (r[e] = r[e - 1]), (r[e - 1] = i)))
              : "-" === l && (r[e] = "+" + r[e].slice(1));
          }
          return r.join("\n");
        },
        eT = function (t) {
          t.nested ||
            2 !== t.delta[2] ||
            t.setResult([eB(t.delta[0]), 0, 2]).exit();
        };
      eT.filterName = "texts";
      var eI = (function () {
          function t(e) {
            t2(this, t),
              (this.processor = new t8(e)),
              this.processor.pipe(
                new et("diff").append(ef, el, eD, eN, ed, e_).shouldHaveResult()
              ),
              this.processor.pipe(
                new et("patch")
                  .append(eh, eC, es, eM, ep, eO)
                  .shouldHaveResult()
              ),
              this.processor.pipe(
                new et("reverse")
                  .append(eg, eE, eu, eT, ev, eR)
                  .shouldHaveResult()
              );
          }
          return (
            t5(t, [
              {
                key: "options",
                value: function () {
                  var t;
                  return (t = this.processor).options.apply(t, arguments);
                },
              },
              {
                key: "diff",
                value: function (t, e) {
                  return this.processor.process(new eo(t, e));
                },
              },
              {
                key: "patch",
                value: function (t, e) {
                  return this.processor.process(new ei(t, e));
                },
              },
              {
                key: "reverse",
                value: function (t) {
                  return this.processor.process(new ea(t));
                },
              },
              {
                key: "unpatch",
                value: function (t, e) {
                  return this.patch(t, this.reverse(e));
                },
              },
              {
                key: "clone",
                value: function (t) {
                  return er(t);
                },
              },
            ]),
            t
          );
        })(),
        eq =
          "function" == typeof Array.isArray
            ? Array.isArray
            : function (t) {
                return t instanceof Array;
              },
        ez =
          "function" == typeof Object.keys
            ? function (t) {
                return Object.keys(t);
              }
            : function (t) {
                var e = [];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
                return e;
              },
        eF = function (t) {
          return "_t" === t
            ? -1
            : "_" === t.substr(0, 1)
            ? parseInt(t.slice(1), 10)
            : parseInt(t, 10) + 0.1;
        },
        eL = function (t, e) {
          return eF(t) - eF(e);
        },
        eV = (function () {
          function t() {
            t2(this, t);
          }
          return (
            t5(t, [
              {
                key: "format",
                value: function (t, e) {
                  var n = {};
                  return (
                    this.prepareContext(n),
                    this.recurse(n, t, e),
                    this.finalize(n)
                  );
                },
              },
              {
                key: "prepareContext",
                value: function (t) {
                  (t.buffer = []),
                    (t.out = function () {
                      var t;
                      (t = this.buffer).push.apply(t, arguments);
                    });
                },
              },
              {
                key: "typeFormattterNotFound",
                value: function (t, e) {
                  throw Error("cannot format delta type: " + e);
                },
              },
              {
                key: "typeFormattterErrorFormatter",
                value: function (t, e) {
                  return e.toString();
                },
              },
              {
                key: "finalize",
                value: function (t) {
                  var e = t.buffer;
                  if (eq(e)) return e.join("");
                },
              },
              {
                key: "recurse",
                value: function (t, e, n, r, o, i, a) {
                  var c = e && i ? i.value : n;
                  if (void 0 !== e || void 0 !== r) {
                    var l = this.getDeltaType(e, i),
                      s =
                        "node" === l ? ("a" === e._t ? "array" : "object") : "";
                    void 0 !== r
                      ? this.nodeBegin(t, r, o, l, s, a)
                      : this.rootBegin(t, l, s);
                    try {
                      (
                        this["format_" + l] || this.typeFormattterNotFound(t, l)
                      ).call(this, t, e, c, r, o, i);
                    } catch (n) {
                      this.typeFormattterErrorFormatter(t, n, e, c, r, o, i),
                        "undefined" != typeof console &&
                          console.error &&
                          console.error(n.stack);
                    }
                    void 0 !== r
                      ? this.nodeEnd(t, r, o, l, s, a)
                      : this.rootEnd(t, l, s);
                  }
                },
              },
              {
                key: "formatDeltaChildren",
                value: function (t, e, n) {
                  var r = this;
                  this.forEachDeltaKey(e, n, function (o, i, a, c) {
                    r.recurse(t, e[o], n ? n[i] : void 0, o, i, a, c);
                  });
                },
              },
              {
                key: "forEachDeltaKey",
                value: function (t, e, n) {
                  var r = ez(t),
                    o = "a" === t._t,
                    i = {},
                    a = void 0;
                  if (void 0 !== e)
                    for (a in e)
                      Object.prototype.hasOwnProperty.call(e, a) &&
                        void 0 === t[a] &&
                        (!o || void 0 === t["_" + a]) &&
                        r.push(a);
                  for (a in t)
                    if (Object.prototype.hasOwnProperty.call(t, a)) {
                      var c = t[a];
                      eq(c) &&
                        3 === c[2] &&
                        ((i[c[1].toString()] = {
                          key: a,
                          value: e && e[parseInt(a.substr(1))],
                        }),
                        !1 !== this.includeMoveDestinations &&
                          void 0 === e &&
                          void 0 === t[c[1]] &&
                          r.push(c[1].toString()));
                    }
                  o ? r.sort(eL) : r.sort();
                  for (var l = 0, s = r.length; l < s; l++) {
                    var u = r[l];
                    if (!o || "_t" !== u) {
                      var f = o
                          ? "number" == typeof u
                            ? u
                            : parseInt(
                                "_" === u.substr(0, 1) ? u.slice(1) : u,
                                10
                              )
                          : u,
                        d = l === s - 1;
                      n(u, f, i[f], d);
                    }
                  }
                },
              },
              {
                key: "getDeltaType",
                value: function (t, e) {
                  if (void 0 === t)
                    return void 0 !== e ? "movedestination" : "unchanged";
                  if (eq(t)) {
                    if (1 === t.length) return "added";
                    if (2 === t.length) return "modified";
                    if (3 === t.length && 0 === t[2]) return "deleted";
                    if (3 === t.length && 2 === t[2]) return "textdiff";
                    if (3 === t.length && 3 === t[2]) return "moved";
                  } else if ((void 0 === t ? "undefined" : t1(t)) === "object")
                    return "node";
                  return "unknown";
                },
              },
              {
                key: "parseTextDiff",
                value: function (t) {
                  for (
                    var e = [], n = t.split("\n@@ "), r = 0, o = n.length;
                    r < o;
                    r++
                  ) {
                    var i = n[r],
                      a = { pieces: [] },
                      c = /^(?:@@ )?[-+]?(\d+),(\d+)/.exec(i).slice(1);
                    a.location = { line: c[0], chr: c[1] };
                    for (
                      var l = i.split("\n").slice(1), s = 0, u = l.length;
                      s < u;
                      s++
                    ) {
                      var f = l[s];
                      if (f.length) {
                        var d = { type: "context" };
                        "+" === f.substr(0, 1)
                          ? (d.type = "added")
                          : "-" === f.substr(0, 1) && (d.type = "deleted"),
                          (d.text = f.slice(1)),
                          a.pieces.push(d);
                      }
                    }
                    e.push(a);
                  }
                  return e;
                },
              },
            ]),
            t
          );
        })(),
        eH = Object.freeze({ default: eV }),
        eU = (function (t) {
          function e() {
            return (
              t2(this, e),
              t6(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            t3(e, t),
            t5(e, [
              {
                key: "typeFormattterErrorFormatter",
                value: function (t, e) {
                  t.out('<pre class="jsondiffpatch-error">' + e + "</pre>");
                },
              },
              {
                key: "formatValue",
                value: function (t, e) {
                  t.out("<pre>" + eJ(JSON.stringify(e, null, 2)) + "</pre>");
                },
              },
              {
                key: "formatTextDiffString",
                value: function (t, e) {
                  var n = this.parseTextDiff(e);
                  t.out('<ul class="jsondiffpatch-textdiff">');
                  for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    t.out(
                      '<li><div class="jsondiffpatch-textdiff-location"><span class="jsondiffpatch-textdiff-line-number">' +
                        i.location.line +
                        '</span><span class="jsondiffpatch-textdiff-char">' +
                        i.location.chr +
                        '</span></div><div class="jsondiffpatch-textdiff-line">'
                    );
                    for (var a = i.pieces, c = 0, l = a.length; c < l; c++) {
                      var s = a[c];
                      t.out(
                        '<span class="jsondiffpatch-textdiff-' +
                          s.type +
                          '">' +
                          eJ(decodeURI(s.text)) +
                          "</span>"
                      );
                    }
                    t.out("</div></li>");
                  }
                  t.out("</ul>");
                },
              },
              {
                key: "rootBegin",
                value: function (t, e, n) {
                  t.out(
                    '<div class="jsondiffpatch-delta jsondiffpatch-' +
                      e +
                      (n ? " jsondiffpatch-child-node-type-" + n : "") +
                      '">'
                  );
                },
              },
              {
                key: "rootEnd",
                value: function (t) {
                  t.out(
                    "</div>" +
                      (t.hasArrows
                        ? '<script type="text/javascript">setTimeout(' +
                          eG.toString() +
                          ",10);</script>"
                        : "")
                  );
                },
              },
              {
                key: "nodeBegin",
                value: function (t, e, n, r, o) {
                  t.out(
                    '<li class="jsondiffpatch-' +
                      r +
                      (o ? " jsondiffpatch-child-node-type-" + o : "") +
                      '" data-key="' +
                      n +
                      '"><div class="jsondiffpatch-property-name">' +
                      n +
                      "</div>"
                  );
                },
              },
              {
                key: "nodeEnd",
                value: function (t) {
                  t.out("</li>");
                },
              },
              {
                key: "format_unchanged",
                value: function (t, e, n) {
                  void 0 !== n &&
                    (t.out('<div class="jsondiffpatch-value">'),
                    this.formatValue(t, n),
                    t.out("</div>"));
                },
              },
              {
                key: "format_movedestination",
                value: function (t, e, n) {
                  void 0 !== n &&
                    (t.out('<div class="jsondiffpatch-value">'),
                    this.formatValue(t, n),
                    t.out("</div>"));
                },
              },
              {
                key: "format_node",
                value: function (t, e, n) {
                  var r = "a" === e._t ? "array" : "object";
                  t.out(
                    '<ul class="jsondiffpatch-node jsondiffpatch-node-type-' +
                      r +
                      '">'
                  ),
                    this.formatDeltaChildren(t, e, n),
                    t.out("</ul>");
                },
              },
              {
                key: "format_added",
                value: function (t, e) {
                  t.out('<div class="jsondiffpatch-value">'),
                    this.formatValue(t, e[0]),
                    t.out("</div>");
                },
              },
              {
                key: "format_modified",
                value: function (t, e) {
                  t.out(
                    '<div class="jsondiffpatch-value jsondiffpatch-left-value">'
                  ),
                    this.formatValue(t, e[0]),
                    t.out(
                      '</div><div class="jsondiffpatch-value jsondiffpatch-right-value">'
                    ),
                    this.formatValue(t, e[1]),
                    t.out("</div>");
                },
              },
              {
                key: "format_deleted",
                value: function (t, e) {
                  t.out('<div class="jsondiffpatch-value">'),
                    this.formatValue(t, e[0]),
                    t.out("</div>");
                },
              },
              {
                key: "format_moved",
                value: function (t, e) {
                  t.out('<div class="jsondiffpatch-value">'),
                    this.formatValue(t, e[0]),
                    t.out(
                      '</div><div class="jsondiffpatch-moved-destination">' +
                        e[1] +
                        "</div>"
                    ),
                    t.out(
                      '<div class="jsondiffpatch-arrow" style="position: relative; left: -34px;">\n          <svg width="30" height="60" style="position: absolute; display: none;">\n          <defs>\n              <marker id="markerArrow" markerWidth="8" markerHeight="8"\n                 refx="2" refy="4"\n                     orient="auto" markerUnits="userSpaceOnUse">\n                  <path d="M1,1 L1,7 L7,4 L1,1" style="fill: #339;" />\n              </marker>\n          </defs>\n          <path d="M30,0 Q-10,25 26,50"\n            style="stroke: #88f; stroke-width: 2px; fill: none; stroke-opacity: 0.5; marker-end: url(#markerArrow);"\n          ></path>\n          </svg>\n      </div>'
                    ),
                    (t.hasArrows = !0);
                },
              },
              {
                key: "format_textdiff",
                value: function (t, e) {
                  t.out('<div class="jsondiffpatch-value">'),
                    this.formatTextDiffString(t, e[0]),
                    t.out("</div>");
                },
              },
            ]),
            e
          );
        })(eV);
      function eJ(t) {
        for (
          var e = t,
            n = [
              [/&/g, "&amp;"],
              [/</g, "&lt;"],
              [/>/g, "&gt;"],
              [/'/g, "&apos;"],
              [/"/g, "&quot;"],
            ],
            r = 0;
          r < n.length;
          r++
        )
          e = e.replace(n[r][0], n[r][1]);
        return e;
      }
      var eG = function (t) {
          var e = t || document,
            n = function (t) {
              var e = t.textContent,
                n = t.innerText;
              return e || n;
            },
            r = function (t, e) {
              for (var n = t.children, r = 0, o = n.length; r < o; r++)
                e(n[r], r);
            };
          !(function (t, e, n) {
            for (var r = t.querySelectorAll(e), o = 0, i = r.length; o < i; o++)
              n(r[o]);
          })(e, ".jsondiffpatch-arrow", function (t) {
            var e = t.parentNode,
              o = t.children,
              i = t.style,
              a = o[0],
              c = a.children[1];
            a.style.display = "none";
            var l = n(e.querySelector(".jsondiffpatch-moved-destination")),
              s = e.parentNode,
              u = void 0;
            if (
              (r(s, function (t) {
                t.getAttribute("data-key") === l && (u = t);
              }),
              u)
            )
              try {
                var f = u.offsetTop - e.offsetTop;
                a.setAttribute("height", Math.abs(f) + 6),
                  (i.top = -8 + (f > 0 ? 0 : f) + "px"),
                  c.setAttribute(
                    "d",
                    f > 0
                      ? "M30,0 Q-10," + Math.round(f / 2) + " 26," + (f - 4)
                      : "M30," + -f + " Q-10," + Math.round(-f / 2) + " 26,4"
                  ),
                  (a.style.display = "");
              } catch (t) {}
          });
        },
        eK = function (t, e, n) {
          var r = e || document.body,
            o = "jsondiffpatch-unchanged-",
            i = {
              showing: o + "showing",
              hiding: o + "hiding",
              visible: o + "visible",
              hidden: o + "hidden",
            },
            a = r.classList;
          if (a) {
            if (!n) {
              a.remove(i.showing),
                a.remove(i.hiding),
                a.remove(i.visible),
                a.remove(i.hidden),
                !1 === t && a.add(i.hidden);
              return;
            }
            !1 === t
              ? (a.remove(i.showing),
                a.add(i.visible),
                setTimeout(function () {
                  a.add(i.hiding);
                }, 10))
              : (a.remove(i.hiding), a.add(i.showing), a.remove(i.hidden));
            var c = setInterval(function () {
              eG(r);
            }, 100);
            setTimeout(function () {
              a.remove(i.showing),
                a.remove(i.hiding),
                !1 === t
                  ? (a.add(i.hidden), a.remove(i.visible))
                  : (a.add(i.visible), a.remove(i.hidden)),
                setTimeout(function () {
                  a.remove(i.visible), clearInterval(c);
                }, n + 400);
            }, n);
          }
        },
        eW = void 0,
        eY = Object.freeze({
          showUnchanged: eK,
          hideUnchanged: function (t, e) {
            return eK(!1, t, e);
          },
          default: eU,
          format: function (t, e) {
            return eW || (eW = new eU()), eW.format(t, e);
          },
        }),
        eZ = (function (t) {
          function e() {
            t2(this, e);
            var t = t6(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this)
            );
            return (t.includeMoveDestinations = !1), t;
          }
          return (
            t3(e, t),
            t5(e, [
              {
                key: "prepareContext",
                value: function (t) {
                  t4(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "prepareContext",
                    this
                  ).call(this, t),
                    (t.indent = function (t) {
                      (this.indentLevel =
                        (this.indentLevel || 0) + (void 0 === t ? 1 : t)),
                        (this.indentPad = Array(this.indentLevel + 1).join(
                          "&nbsp;&nbsp;"
                        ));
                    }),
                    (t.row = function (e, n) {
                      t.out(
                        '<tr><td style="white-space: nowrap;"><pre class="jsondiffpatch-annotated-indent" style="display: inline-block">'
                      ),
                        t.out(t.indentPad),
                        t.out('</pre><pre style="display: inline-block">'),
                        t.out(e),
                        t.out(
                          '</pre></td><td class="jsondiffpatch-delta-note"><div>'
                        ),
                        t.out(n),
                        t.out("</div></td></tr>");
                    });
                },
              },
              {
                key: "typeFormattterErrorFormatter",
                value: function (t, e) {
                  t.row("", '<pre class="jsondiffpatch-error">' + e + "</pre>");
                },
              },
              {
                key: "formatTextDiffString",
                value: function (t, e) {
                  var n = this.parseTextDiff(e);
                  t.out('<ul class="jsondiffpatch-textdiff">');
                  for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    t.out(
                      '<li><div class="jsondiffpatch-textdiff-location"><span class="jsondiffpatch-textdiff-line-number">' +
                        i.location.line +
                        '</span><span class="jsondiffpatch-textdiff-char">' +
                        i.location.chr +
                        '</span></div><div class="jsondiffpatch-textdiff-line">'
                    );
                    for (var a = i.pieces, c = 0, l = a.length; c < l; c++) {
                      var s = a[c];
                      t.out(
                        '<span class="jsondiffpatch-textdiff-' +
                          s.type +
                          '">' +
                          s.text +
                          "</span>"
                      );
                    }
                    t.out("</div></li>");
                  }
                  t.out("</ul>");
                },
              },
              {
                key: "rootBegin",
                value: function (t, e, n) {
                  t.out('<table class="jsondiffpatch-annotated-delta">'),
                    "node" === e && (t.row("{"), t.indent()),
                    "array" === n &&
                      t.row(
                        '"_t": "a",',
                        "Array delta (member names indicate array indices)"
                      );
                },
              },
              {
                key: "rootEnd",
                value: function (t, e) {
                  "node" === e && (t.indent(-1), t.row("}")), t.out("</table>");
                },
              },
              {
                key: "nodeBegin",
                value: function (t, e, n, r, o) {
                  t.row("&quot;" + e + "&quot;: {"),
                    "node" === r && t.indent(),
                    "array" === o &&
                      t.row(
                        '"_t": "a",',
                        "Array delta (member names indicate array indices)"
                      );
                },
              },
              {
                key: "nodeEnd",
                value: function (t, e, n, r, o, i) {
                  "node" === r && t.indent(-1), t.row("}" + (i ? "" : ","));
                },
              },
              { key: "format_unchanged", value: function () {} },
              { key: "format_movedestination", value: function () {} },
              {
                key: "format_node",
                value: function (t, e, n) {
                  this.formatDeltaChildren(t, e, n);
                },
              },
            ]),
            e
          );
        })(eV),
        eQ = function (t) {
          return (
            '<pre style="display:inline-block">&quot;' + t + "&quot;</pre>"
          );
        },
        eX = {
          added: function (t, e, n, r) {
            var o = " <pre>([newValue])</pre>";
            return void 0 === r
              ? "new value" + o
              : "number" == typeof r
              ? "insert at index " + r + o
              : "add property " + eQ(r) + o;
          },
          modified: function (t, e, n, r) {
            var o = " <pre>([previousValue, newValue])</pre>";
            return void 0 === r
              ? "modify value" + o
              : "number" == typeof r
              ? "modify at index " + r + o
              : "modify property " + eQ(r) + o;
          },
          deleted: function (t, e, n, r) {
            var o = " <pre>([previousValue, 0, 0])</pre>";
            return void 0 === r
              ? "delete value" + o
              : "number" == typeof r
              ? "remove index " + r + o
              : "delete property " + eQ(r) + o;
          },
          moved: function (t, e, n, r) {
            return (
              'move from <span title="(position to remove at original state)">index ' +
              r +
              '</span> to <span title="(position to insert at final state)">index ' +
              t[1] +
              "</span>"
            );
          },
          textdiff: function (t, e, n, r) {
            return (
              "text diff" +
              (void 0 === r
                ? ""
                : "number" == typeof r
                ? " at index " + r
                : " at property " + eQ(r)) +
              ', format is <a href="https://code.google.com/p/google-diff-match-patch/wiki/Unidiff">a variation of Unidiff</a>'
            );
          },
        },
        e0 = function (t, e) {
          var n = this.getDeltaType(e),
            r = eX[n],
            o = r && r.apply(r, Array.prototype.slice.call(arguments, 1)),
            i = JSON.stringify(e, null, 2);
          "textdiff" === n && (i = i.split("\\n").join('\\n"+\n   "')),
            t.indent(),
            t.row(i, o),
            t.indent(-1);
        };
      (eZ.prototype.format_added = e0),
        (eZ.prototype.format_modified = e0),
        (eZ.prototype.format_deleted = e0),
        (eZ.prototype.format_moved = e0),
        (eZ.prototype.format_textdiff = e0);
      var e1 = void 0,
        e2 = Object.freeze({
          default: eZ,
          format: function (t, e) {
            return e1 || (e1 = new eZ()), e1.format(t, e);
          },
        }),
        e5 = (function (t) {
          function e() {
            t2(this, e);
            var t = t6(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this)
            );
            return (t.includeMoveDestinations = !0), t;
          }
          return (
            t3(e, t),
            t5(e, [
              {
                key: "prepareContext",
                value: function (t) {
                  t4(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "prepareContext",
                    this
                  ).call(this, t),
                    (t.result = []),
                    (t.path = []),
                    (t.pushCurrentOp = function (t) {
                      var e = t.op,
                        n = t.value,
                        r = { op: e, path: this.currentPath() };
                      void 0 !== n && (r.value = n), this.result.push(r);
                    }),
                    (t.pushMoveOp = function (t) {
                      var e = this.currentPath();
                      this.result.push({
                        op: "move",
                        from: e,
                        path: this.toPath(t),
                      });
                    }),
                    (t.currentPath = function () {
                      return "/" + this.path.join("/");
                    }),
                    (t.toPath = function (t) {
                      var e = this.path.slice();
                      return (e[e.length - 1] = t), "/" + e.join("/");
                    });
                },
              },
              {
                key: "typeFormattterErrorFormatter",
                value: function (t, e) {
                  t.out("[ERROR] " + e);
                },
              },
              { key: "rootBegin", value: function () {} },
              { key: "rootEnd", value: function () {} },
              {
                key: "nodeBegin",
                value: function (t, e, n) {
                  t.path.push(n);
                },
              },
              {
                key: "nodeEnd",
                value: function (t) {
                  t.path.pop();
                },
              },
              { key: "format_unchanged", value: function () {} },
              { key: "format_movedestination", value: function () {} },
              {
                key: "format_node",
                value: function (t, e, n) {
                  this.formatDeltaChildren(t, e, n);
                },
              },
              {
                key: "format_added",
                value: function (t, e) {
                  t.pushCurrentOp({ op: "add", value: e[0] });
                },
              },
              {
                key: "format_modified",
                value: function (t, e) {
                  t.pushCurrentOp({ op: "replace", value: e[1] });
                },
              },
              {
                key: "format_deleted",
                value: function (t) {
                  t.pushCurrentOp({ op: "remove" });
                },
              },
              {
                key: "format_moved",
                value: function (t, e) {
                  var n = e[1];
                  t.pushMoveOp(n);
                },
              },
              {
                key: "format_textdiff",
                value: function () {
                  throw Error("Not implemented");
                },
              },
              {
                key: "format",
                value: function (t, e) {
                  var n = {};
                  return (
                    this.prepareContext(n), this.recurse(n, t, e), n.result
                  );
                },
              },
            ]),
            e
          );
        })(eV),
        e4 = function (t) {
          return t[t.length - 1];
        },
        e3 = function (t, e) {
          var n = parseInt(t, 10),
            r = parseInt(e, 10);
          return isNaN(n) || isNaN(r) ? 0 : r - n;
        },
        e6 = function (t, e) {
          var n = Array(e.length + 1)
            .fill()
            .map(function () {
              return [];
            });
          return t
            .map(function (t) {
              var n = e
                .map(function (e) {
                  return e(t);
                })
                .indexOf(!0);
              return n < 0 && (n = e.length), { item: t, position: n };
            })
            .reduce(function (t, e) {
              return t[e.position].push(e.item), t;
            }, n);
        },
        e7 = function (t) {
          return "move" === t.op;
        },
        e9 = function (t) {
          return "remove" === t.op;
        },
        e8 = function (t) {
          var e,
            n = t7(e6(t, [e7, e9]), 3),
            r = n[0],
            o = n[1],
            i = n[2];
          return [].concat(
            t9(
              ((e = o).sort(function (t, e) {
                var n = t.path.split("/"),
                  r = e.path.split("/");
                return n.length !== r.length
                  ? n.length - r.length
                  : e3(e4(n), e4(r));
              }),
              e)
            ),
            t9(r),
            t9(i)
          );
        },
        nt = void 0,
        ne = function (t, e) {
          return nt || (nt = new e5()), e8(nt.format(t, e));
        },
        nn = Object.freeze({
          default: e5,
          partitionOps: e6,
          format: ne,
          log: function (t, e) {
            console.log(ne(t, e));
          },
        });
      function nr(t) {
        return (
          (s.Z && s.Z[t]) ||
          function () {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            return e;
          }
        );
      }
      var no = {
          added: nr("green"),
          deleted: nr("red"),
          movedestination: nr("gray"),
          moved: nr("yellow"),
          unchanged: nr("gray"),
          error: nr("white.bgRed"),
          textDiffLine: nr("gray"),
        },
        ni = (function (t) {
          function e() {
            t2(this, e);
            var t = t6(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this)
            );
            return (t.includeMoveDestinations = !1), t;
          }
          return (
            t3(e, t),
            t5(e, [
              {
                key: "prepareContext",
                value: function (t) {
                  t4(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "prepareContext",
                    this
                  ).call(this, t),
                    (t.indent = function (t) {
                      (this.indentLevel =
                        (this.indentLevel || 0) + (void 0 === t ? 1 : t)),
                        (this.indentPad = Array(this.indentLevel + 1).join(
                          "  "
                        )),
                        this.outLine();
                    }),
                    (t.outLine = function () {
                      this.buffer.push("\n" + (this.indentPad || ""));
                    }),
                    (t.out = function () {
                      for (
                        var t = arguments.length, e = Array(t), n = 0;
                        n < t;
                        n++
                      )
                        e[n] = arguments[n];
                      for (var r = 0, o = e.length; r < o; r++) {
                        var i = e[r]
                          .split("\n")
                          .join("\n" + (this.indentPad || ""));
                        this.color && this.color[0] && (i = this.color[0](i)),
                          this.buffer.push(i);
                      }
                    }),
                    (t.pushColor = function (t) {
                      (this.color = this.color || []), this.color.unshift(t);
                    }),
                    (t.popColor = function () {
                      (this.color = this.color || []), this.color.shift();
                    });
                },
              },
              {
                key: "typeFormattterErrorFormatter",
                value: function (t, e) {
                  t.pushColor(no.error), t.out("[ERROR]" + e), t.popColor();
                },
              },
              {
                key: "formatValue",
                value: function (t, e) {
                  t.out(JSON.stringify(e, null, 2));
                },
              },
              {
                key: "formatTextDiffString",
                value: function (t, e) {
                  var n = this.parseTextDiff(e);
                  t.indent();
                  for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    t.pushColor(no.textDiffLine),
                      t.out(i.location.line + "," + i.location.chr + " "),
                      t.popColor();
                    for (var a = i.pieces, c = 0, l = a.length; c < l; c++) {
                      var s = a[c];
                      t.pushColor(no[s.type]), t.out(s.text), t.popColor();
                    }
                    r < o - 1 && t.outLine();
                  }
                  t.indent(-1);
                },
              },
              {
                key: "rootBegin",
                value: function (t, e, n) {
                  t.pushColor(no[e]),
                    "node" === e &&
                      (t.out("array" === n ? "[" : "{"), t.indent());
                },
              },
              {
                key: "rootEnd",
                value: function (t, e, n) {
                  "node" === e &&
                    (t.indent(-1), t.out("array" === n ? "]" : "}")),
                    t.popColor();
                },
              },
              {
                key: "nodeBegin",
                value: function (t, e, n, r, o) {
                  t.pushColor(no[r]),
                    t.out(n + ": "),
                    "node" === r &&
                      (t.out("array" === o ? "[" : "{"), t.indent());
                },
              },
              {
                key: "nodeEnd",
                value: function (t, e, n, r, o, i) {
                  "node" === r &&
                    (t.indent(-1),
                    t.out("array" === o ? "]" : "}" + (i ? "" : ","))),
                    i || t.outLine(),
                    t.popColor();
                },
              },
              {
                key: "format_unchanged",
                value: function (t, e, n) {
                  void 0 !== n && this.formatValue(t, n);
                },
              },
              {
                key: "format_movedestination",
                value: function (t, e, n) {
                  void 0 !== n && this.formatValue(t, n);
                },
              },
              {
                key: "format_node",
                value: function (t, e, n) {
                  this.formatDeltaChildren(t, e, n);
                },
              },
              {
                key: "format_added",
                value: function (t, e) {
                  this.formatValue(t, e[0]);
                },
              },
              {
                key: "format_modified",
                value: function (t, e) {
                  t.pushColor(no.deleted),
                    this.formatValue(t, e[0]),
                    t.popColor(),
                    t.out(" => "),
                    t.pushColor(no.added),
                    this.formatValue(t, e[1]),
                    t.popColor();
                },
              },
              {
                key: "format_deleted",
                value: function (t, e) {
                  this.formatValue(t, e[0]);
                },
              },
              {
                key: "format_moved",
                value: function (t, e) {
                  t.out("==> " + e[1]);
                },
              },
              {
                key: "format_textdiff",
                value: function (t, e) {
                  this.formatTextDiffString(t, e[0]);
                },
              },
            ]),
            e
          );
        })(eV),
        na = void 0,
        nc = function (t, e) {
          return na || (na = new ni()), na.format(t, e);
        };
      Object.freeze({
        base: eH,
        html: eY,
        annotated: e2,
        jsonpatch: nn,
        console: Object.freeze({
          default: ni,
          format: nc,
          log: function (t, e) {
            console.log(nc(t, e));
          },
        }),
      });
      let nl = new eI({
          arrays: { detectMove: !1, includeValueOnMove: !1 },
          textDiff: { minLength: 1 },
        }),
        ns = [
          "docChanged",
          "isGeneric",
          "scrolledIntoView",
          "selectionSet",
          "storedMarksSet",
        ];
      function nu(t) {
        return {
          type: t.type,
          empty: t.empty,
          anchor: t.anchor,
          head: t.head,
          from: t.from,
          to: t.to,
        };
      }
      function nf(t) {
        return ("00" + t).slice(-2);
      }
      let nd = (t) => {
          let e = new Date(t);
          return [
            nf(e.getHours()),
            nf(e.getMinutes()),
            nf(e.getSeconds()),
            ("000" + e.getMilliseconds()).slice(-3),
          ].join(":");
        },
        np = /(&lt;\/?[\w\d\s="']+&gt;)/gim,
        nh = (t) =>
          t
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(np, "<span style='color: cadetblue;'>$&</span>"),
        nv = tM(new Map()),
        ng = tM([]),
        nm = tM(void 0);
      function ny() {
        nv.set(new Map()), ng.set([]), nm.set(void 0);
      }
      let nb = ["jsonID", "empty", "anchor", "from", "head", "to"],
        nx = ["$anchor", "$head", "$cursor", "$to", "$from"],
        n$ = ["nodeAfter", "nodeBefore", "textOffset"];
      function nw(t) {
        return nb.reduce((e, n) => ((e[n] = t[n]), e), {});
      }
      function nk(t) {
        return nb.concat(nx).reduce((e, n) => {
          let r = t[n];
          if (r && nx.includes(n)) {
            let t = {};
            n$.forEach((e) => {
              t[e] = r[e];
            }),
              (r = Object.assign(Object.assign({}, r), t));
          }
          return (e[n] = r), e;
        }, {});
      }
      function n_(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function nj(t, e, n, r, o) {
        var i = o ? [].concat(w(o.path), [t]) : [];
        return {
          id: "[".concat(i.join(","), "]"),
          index: t,
          key: e,
          value: n,
          depth: r,
          collapsed: !0,
          type: nO(n),
          path: i,
          parentId: o ? o.id : null,
          circularOfId: null,
          children: [],
        };
      }
      function nO(t) {
        return Array.isArray(t)
          ? "array"
          : t instanceof Map
          ? "map"
          : t instanceof Set
          ? "set"
          : t instanceof Date
          ? "date"
          : null === t
          ? "null"
          : g(t);
      }
      function nC(t, e, n, r, o, i, a, c, l, s, u) {
        if (
          (null === (f = u.omitKeys) || void 0 === f
            ? void 0
            : f.includes(e)) ||
          (u.maxDepth && r > u.maxDepth)
        )
          return null;
        var f,
          d = nj(t, e, n, r, i),
          p = c.get(d.id);
        if (
          (o
            ? (d.collapsed = !1)
            : p && !s
            ? (d.collapsed = p.collapsed)
            : u.shouldExpandNode && (d.collapsed = !u.shouldExpandNode(d)),
          a.set(d.id, d),
          (function (t, e, n, r) {
            if (e) {
              if (t.collapsed && (null == e ? void 0 : e.collapsed)) return !1;
              if (r.stopCircularRecursion) {
                if (r.isCircularNode) return r.isCircularNode(t, n);
                if ("object" === t.type || "array" === t.type) {
                  var o = n.get(t.value);
                  if (o && t.id !== o.id) return (t.circularOfId = o.id), !1;
                  n.set(t.value, t);
                }
              }
            }
            return !0;
          })(d, i, l, u))
        ) {
          var h = u.mapChildren && u.mapChildren(n, nO(n), d),
            v =
              null != h
                ? h
                : (function (t, e) {
                    switch (e) {
                      case "array":
                        return t.map(function (t, e) {
                          return [e.toString(), t];
                        });
                      case "map":
                        return Array.from(t.entries()).map(function (t, e) {
                          var n = $(t, 2),
                            r = n[0],
                            o = n[1];
                          return [
                            "[map entry ".concat(e, "]"),
                            { "[key]": r, "[value]": o },
                          ];
                        });
                      case "set":
                        return Array.from(t.values()).map(function (t, e) {
                          return ["[set entry ".concat(e, "]"), t];
                        });
                      case "object":
                        return Object.entries(t);
                      default:
                        return [];
                    }
                  })(n, nO(n));
          d.children = v
            .map(function (t, e) {
              var n = $(t, 2);
              return nC(e, n[0], n[1], r + 1, !1, d, a, c, l, s, u);
            })
            .filter(function (t) {
              return null !== t;
            });
        }
        return d;
      }
      var nR = function (t) {
          var e,
            n,
            r,
            o,
            i = tM(t),
            a =
              ((e = function (t) {
                return t.recursionOpts;
              }),
              (r = (n = !Array.isArray(i)) ? [i] : i),
              (o = e.length < 2),
              {
                subscribe: tM(void 0, function (t) {
                  var i = !1,
                    a = [],
                    c = 0,
                    l = k,
                    s = function () {
                      if (!c) {
                        l();
                        var r = e(n ? a[0] : a, t);
                        o ? t(r) : (l = R(r) ? r : k);
                      }
                    },
                    u = r.map(function (t, e) {
                      return E(
                        t,
                        function (t) {
                          (a[e] = t), (c &= ~(1 << e)), i && s();
                        },
                        function () {
                          c |= 1 << e;
                        }
                      );
                    });
                  return (
                    (i = !0),
                    s(),
                    function () {
                      C(u), l();
                    }
                  );
                }).subscribe,
              });
          return {
            props: i,
            recursionOpts: a,
            setProps: function (t) {
              i.set(t);
            },
            formatValue: function (t, e) {
              var n = D(i).valueFormatter,
                r = n ? n(t, e) : void 0;
              if (r) return r;
              switch (e.type) {
                case "array":
                  return ""
                    .concat(e.circularOfId ? "circular" : "", " [] ")
                    .concat(t.length, " items");
                case "object":
                  return ""
                    .concat(e.circularOfId ? "circular" : "", " {} ")
                    .concat(Object.keys(t).length, " keys");
                case "map":
                case "set":
                  return ""
                    .concat(e.circularOfId ? "circular" : "", " () ")
                    .concat(t.size, " entries");
                case "date":
                  return "".concat(t.toISOString());
                case "string":
                  return '"'.concat(t, '"');
                case "boolean":
                  return t ? "true" : "false";
                case "symbol":
                  return String(t);
                default:
                  return t;
              }
            },
          };
        },
        nS = function () {
          var t = tM(null);
          return { set: t.set, subscribe: t.subscribe };
        },
        nE = function (t) {
          var e = nj(0, "root", [], 0, null),
            n = tM(e),
            r = tM(new Map()),
            o = tM(new Map());
          return {
            tree: n,
            treeMap: r,
            defaultRootNode: e,
            init: function (t, i, a) {
              t ? n.set(t) : n.set(e), r.set(i), o.set(a);
            },
            getNode: function (t) {
              return D(r).get(t);
            },
            toggleCollapse: function (e) {
              var n = D(r).get(e);
              if (!n) {
                console.warn(
                  "Attempted to collapse non-existent node: ".concat(e)
                );
                return;
              }
              var o = Object.assign(Object.assign({}, n), {
                collapsed: !n.collapsed,
              });
              r.update(function (t) {
                return new Map(t.set(n.id, o));
              });
              var i = D(t.recursionOpts);
              i && this.expandNodeChildren(o, i);
            },
            expandNodeChildren: function (t, e) {
              var n =
                this.getNode((null == t ? void 0 : t.parentId) || "") || null;
              if (!n)
                throw Error("No parent in expandNodeChildren for node: " + t);
              var i = new Map(D(r)),
                a = D(r),
                c = D(o),
                l = nC(
                  t.index,
                  t.key,
                  t.value,
                  t.depth,
                  !t.collapsed,
                  n,
                  i,
                  a,
                  c,
                  !1,
                  e
                );
              l &&
                ((n.children = n.children.map(function (t) {
                  return t.id === l.id ? l : t;
                })),
                i.set(l.id, l),
                i.set(n.id, n),
                r.set(i),
                o.set(c));
            },
            expandAllNodesToNode: function (t) {
              var e = new Map(D(r));
              !(function t(e, n) {
                n &&
                  (e.set(
                    n.id,
                    Object.assign(Object.assign({}, n), { collapsed: !1 })
                  ),
                  n.parentId && t(e, e.get(n.parentId)));
              })(e, e.get(t)),
                r.set(e);
            },
          };
        };
      function nD(t, e, n) {
        var r = t.slice();
        return (r[14] = e[n]), r;
      }
      function nA(t) {
        var e, n, r, o, i;
        return {
          c: function () {
            (e = H("button")),
              (n = J("▶")),
              Y(
                e,
                "class",
                (r =
                  q("arrow-btn ".concat(t[0].collapsed ? "collapsed" : "")) +
                  " svelte-ngcjq5")
              );
          },
          m: function (r, a) {
            F(r, e, a), z(e, n), o || ((i = W(e, "click", t[9])), (o = !0));
          },
          p: function (t, n) {
            1 & n &&
              r !==
                (r =
                  q("arrow-btn ".concat(t[0].collapsed ? "collapsed" : "")) +
                  " svelte-ngcjq5") &&
              Y(e, "class", r);
          },
          d: function (t) {
            t && L(e), (o = !1), i();
          },
        };
      }
      function nP(t) {
        var e,
          n = t[5].formatValue(t[0].value, t[0]) + "";
        return {
          c: function () {
            e = J(n);
          },
          m: function (t, n) {
            F(t, e, n);
          },
          p: function (t, r) {
            1 & r &&
              n !== (n = t[5].formatValue(t[0].value, t[0]) + "") &&
              Q(e, n);
          },
          i: k,
          o: k,
          d: function (t) {
            t && L(e);
          },
        };
      }
      function nN(t) {
        var e,
          n,
          r,
          o = t[3];
        function i(t) {
          return {
            props: { value: t[0].value, node: t[0], defaultFormatter: t[10] },
          };
        }
        return (
          o && (e = new o(i(t))),
          {
            c: function () {
              e && tw(e.$$.fragment), (n = K());
            },
            m: function (t, o) {
              e && tk(e, t, o), F(t, n, o), (r = !0);
            },
            p: function (t, r) {
              var a = {};
              if (
                (1 & r && (a.value = t[0].value),
                1 & r && (a.node = t[0]),
                o !== (o = t[3]))
              ) {
                if (e) {
                  ty();
                  var c = e;
                  t$(c.$$.fragment, 1, 0, function () {
                    t_(c, 1);
                  }),
                    tb();
                }
                o
                  ? (tw((e = new o(i(t))).$$.fragment),
                    tx(e.$$.fragment, 1),
                    tk(e, n.parentNode, n))
                  : (e = null);
              } else o && e.$set(a);
            },
            i: function (t) {
              r || (e && tx(e.$$.fragment, t), (r = !0));
            },
            o: function (t) {
              e && t$(e.$$.fragment, t), (r = !1);
            },
            d: function (t) {
              t && L(n), e && t_(e, t);
            },
          }
        );
      }
      function nM(t) {
        var e, n, r;
        return {
          c: function () {
            ((e = H("button")).textContent = "log"),
              Y(e, "class", "log-copy-button svelte-ngcjq5");
          },
          m: function (o, i) {
            F(o, e, i), n || ((r = W(e, "click", t[7])), (n = !0));
          },
          p: k,
          d: function (t) {
            t && L(e), (n = !1), r();
          },
        };
      }
      function nB(t) {
        var e, n, r;
        return {
          c: function () {
            ((e = H("button")).textContent = "copy"),
              Y(e, "class", "log-copy-button svelte-ngcjq5");
          },
          m: function (o, i) {
            F(o, e, i), n || ((r = W(e, "click", t[8])), (n = !0));
          },
          p: k,
          d: function (t) {
            t && L(e), (n = !1), r();
          },
        };
      }
      function nT(t) {
        for (
          var e, n, r, o = t[0].children, i = [], a = 0;
          a < o.length;
          a += 1
        )
          i[a] = nI(nD(t, o, a));
        var c = function (t) {
          return t$(i[t], 1, 1, function () {
            i[t] = null;
          });
        };
        return {
          c: function () {
            (e = H("li")), (n = H("ul"));
            for (var t = 0; t < i.length; t += 1) i[t].c();
            Y(n, "class", "svelte-ngcjq5"), Y(e, "class", "row svelte-ngcjq5");
          },
          m: function (t, o) {
            F(t, e, o), z(e, n);
            for (var a = 0; a < i.length; a += 1) i[a].m(n, null);
            r = !0;
          },
          p: function (t, e) {
            if (1 & e) {
              for (r = 0, o = t[0].children; r < o.length; r += 1) {
                var r,
                  a = nD(t, o, r);
                i[r]
                  ? (i[r].p(a, e), tx(i[r], 1))
                  : ((i[r] = nI(a)), i[r].c(), tx(i[r], 1), i[r].m(n, null));
              }
              for (ty(), r = o.length; r < i.length; r += 1) c(r);
              tb();
            }
          },
          i: function (t) {
            if (!r) {
              for (var e = 0; e < o.length; e += 1) tx(i[e]);
              r = !0;
            }
          },
          o: function (t) {
            i = i.filter(Boolean);
            for (var e = 0; e < i.length; e += 1) t$(i[e]);
            r = !1;
          },
          d: function (t) {
            t && L(e), V(i, t);
          },
        };
      }
      function nI(t) {
        var e, n;
        return (
          (e = new nF({ props: { id: t[14].id } })),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            p: function (t, n) {
              var r = {};
              1 & n && (r.id = t[14].id), e.$set(r);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function nq(t) {
        var e,
          n,
          r,
          o,
          i,
          a,
          c,
          l,
          s,
          u,
          f,
          d,
          p,
          h,
          v,
          g,
          m,
          y,
          b,
          x = t[0].key + "",
          w = t[2] && nA(t),
          k = [nN, nP],
          _ = [];
        s = _[(l = t[3] ? 0 : 1)] = k[l](t);
        var j = t[1].showLogButton && nM(t),
          O = t[1].showCopyButton && nB(t),
          R = !t[0].collapsed && t[2] && nT(t);
        return {
          c: function () {
            (e = H("li")),
              w && w.c(),
              (n = G()),
              (r = H("div")),
              (o = J(x)),
              (i = J(":")),
              (a = G()),
              (c = H("div")),
              s.c(),
              (f = G()),
              (d = H("div")),
              j && j.c(),
              (p = G()),
              O && O.c(),
              (v = G()),
              R && R.c(),
              (g = K()),
              Y(r, "class", "node-key svelte-ngcjq5"),
              tt(r, "has-children", t[2]),
              tt(r, "p-left", !t[2]),
              Y(c, "class", "node-value svelte-ngcjq5"),
              Y(c, "data-type", (u = t[0].type)),
              tt(c, "expanded", !t[0].collapsed && t[2]),
              tt(c, "has-children", t[2]),
              Y(d, "class", "buttons svelte-ngcjq5"),
              Y(e, "class", "row svelte-ngcjq5"),
              Y(e, "data-tree-id", (h = t[0].id)),
              tt(e, "collapsed", t[0].collapsed && t[2]);
          },
          m: function (s, u) {
            F(s, e, u),
              w && w.m(e, null),
              z(e, n),
              z(e, r),
              z(r, o),
              z(r, i),
              z(e, a),
              z(e, c),
              _[l].m(c, null),
              z(e, f),
              z(e, d),
              j && j.m(d, null),
              z(d, p),
              O && O.m(d, null),
              F(s, v, u),
              R && R.m(s, u),
              F(s, g, u),
              (m = !0),
              y || ((b = [W(r, "click", t[9]), W(c, "click", t[9])]), (y = !0));
          },
          p: function (t, i) {
            var a = $(i, 1)[0];
            t[2]
              ? w
                ? w.p(t, a)
                : ((w = nA(t)).c(), w.m(e, n))
              : w && (w.d(1), (w = null)),
              (!m || 1 & a) && x !== (x = t[0].key + "") && Q(o, x),
              (!m || 4 & a) && tt(r, "has-children", t[2]),
              (!m || 4 & a) && tt(r, "p-left", !t[2]);
            var f = l;
            (l = t[3] ? 0 : 1) === f
              ? _[l].p(t, a)
              : (ty(),
                t$(_[f], 1, 1, function () {
                  _[f] = null;
                }),
                tb(),
                (s = _[l]) ? s.p(t, a) : (s = _[l] = k[l](t)).c(),
                tx(s, 1),
                s.m(c, null)),
              (!m || (1 & a && u !== (u = t[0].type))) && Y(c, "data-type", u),
              (!m || 5 & a) && tt(c, "expanded", !t[0].collapsed && t[2]),
              (!m || 4 & a) && tt(c, "has-children", t[2]),
              t[1].showLogButton
                ? j
                  ? j.p(t, a)
                  : ((j = nM(t)).c(), j.m(d, p))
                : j && (j.d(1), (j = null)),
              t[1].showCopyButton
                ? O
                  ? O.p(t, a)
                  : ((O = nB(t)).c(), O.m(d, null))
                : O && (O.d(1), (O = null)),
              (!m || (1 & a && h !== (h = t[0].id))) && Y(e, "data-tree-id", h),
              (!m || 5 & a) && tt(e, "collapsed", t[0].collapsed && t[2]),
              !t[0].collapsed && t[2]
                ? R
                  ? (R.p(t, a), 5 & a && tx(R, 1))
                  : ((R = nT(t)).c(), tx(R, 1), R.m(g.parentNode, g))
                : R &&
                  (ty(),
                  t$(R, 1, 1, function () {
                    R = null;
                  }),
                  tb());
          },
          i: function (t) {
            m || (tx(s), tx(R), (m = !0));
          },
          o: function (t) {
            t$(s), t$(R), (m = !1);
          },
          d: function (t) {
            t && L(e),
              w && w.d(),
              _[l].d(),
              j && j.d(),
              O && O.d(),
              t && L(v),
              R && R.d(t),
              t && L(g),
              (y = !1),
              C(b);
          },
        };
      }
      function nz(t, e, n) {
        var r,
          o,
          i,
          a,
          c,
          l,
          s = k;
        t.$$.on_destroy.push(function () {
          return s();
        });
        var u = e.id,
          f = ti("svelte-tree-view"),
          d = f.treeStore,
          p = f.propsStore,
          h = f.rootElementStore;
        return (
          A(t, h, function (t) {
            return n(12, (c = t));
          }),
          d.treeMap.subscribe(function (t) {
            var e = t.get(u);
            e && r !== e && n(0, (r = e));
          }),
          (t.$$set = function (t) {
            "id" in t && n(11, (u = t.id));
          }),
          (t.$$.update = function () {
            if (2048 & t.$$.dirty) {
              var e = d.getNode(u);
              if (!e)
                throw Error(
                  "[svelte-tree-view] TreeViewNode.svelte received undefined node from treeMapStore whereas it should be already unmounted!"
                );
              n(0, (r = e));
            }
            1 & t.$$.dirty && n(2, (o = r && r.children.length > 0)),
              2 & t.$$.dirty && n(3, (a = l.valueComponent));
          }),
          n(4, (i = p.props)),
          s(),
          (s = E(i, function (t) {
            return n(1, (l = t));
          })),
          [
            r,
            l,
            o,
            a,
            i,
            p,
            h,
            function () {
              console.info(
                "%c [svelte-tree-view]: Property added to window._node",
                "color: #b8e248"
              ),
                console.log(r.value);
              try {
                "undefined" != typeof window && (window._node = r.value);
              } catch (t) {
                console.error("Failed to set _node, window was undefined");
              }
            },
            function () {
              try {
                navigator.clipboard.writeText(JSON.stringify(r.value));
              } catch (t) {
                console.error("Copying node to clipboard failed: ", t);
              }
            },
            function () {
              var t;
              o
                ? d.toggleCollapse(r.id)
                : r.circularOfId &&
                  (d.expandAllNodesToNode(r.circularOfId),
                  null ===
                    (t = c.querySelector(
                      'li[data-tree-id="'.concat(r.circularOfId, '"]')
                    )) ||
                    void 0 === t ||
                    t.scrollIntoView());
            },
            function (t) {
              return p.formatValue(t, r);
            },
            u,
          ]
        );
      }
      tS(
        "ul.svelte-ngcjq5.svelte-ngcjq5{display:flex;flex-direction:column;height:max-content;list-style:none;padding:0;padding-left:var(--tree-view-left-indent);margin:0;width:100%}li.svelte-ngcjq5.svelte-ngcjq5{align-items:baseline;display:flex;height:max-content;line-height:var(--tree-view-line-height);list-style:none;width:100%}li.svelte-ngcjq5+li.svelte-ngcjq5{margin-top:0.25em}.empty-block.svelte-ngcjq5.svelte-ngcjq5{visibility:hidden}.node-key.svelte-ngcjq5.svelte-ngcjq5{color:var(--tree-view-base0D);margin-right:var(--tree-view-key-margin-right)}.node-key.has-children.svelte-ngcjq5.svelte-ngcjq5{cursor:pointer}.node-key.p-left.svelte-ngcjq5.svelte-ngcjq5{padding-left:1.1em}.node-value.svelte-ngcjq5.svelte-ngcjq5{color:var(--tree-view-base0B);margin-right:0.5em;word-break:break-all}.node-value[data-type=number].svelte-ngcjq5.svelte-ngcjq5,.node-value[data-type=boolean].svelte-ngcjq5.svelte-ngcjq5{color:var(--tree-view-base09)}.node-value[data-type=null].svelte-ngcjq5.svelte-ngcjq5,.node-value[data-type=undefined].svelte-ngcjq5.svelte-ngcjq5{color:var(--tree-view-base08)}.node-value.expanded.svelte-ngcjq5.svelte-ngcjq5{color:var(--tree-view-base03)}.node-value.has-children.svelte-ngcjq5.svelte-ngcjq5{cursor:pointer}.arrow-btn.svelte-ngcjq5.svelte-ngcjq5{background:transparent;border:0;color:var(--tree-view-base0D);cursor:pointer;margin-right:0.7em;padding:0;transition:all 150ms ease 0s;transform:rotateZ(90deg);transform-origin:47% 43%;position:relative;line-height:1.1em;font-size:0.75em}.arrow-btn.collapsed.svelte-ngcjq5.svelte-ngcjq5{transform:rotateZ(0deg)}.buttons.svelte-ngcjq5.svelte-ngcjq5{display:flex;flex-wrap:wrap}.log-copy-button.svelte-ngcjq5.svelte-ngcjq5{background:transparent;border:0;color:var(--tree-view-base0D);cursor:pointer;margin:0;padding:0 0.5em}.log-copy-button.svelte-ngcjq5.svelte-ngcjq5:hover{background:rgba(255, 162, 177, 0.4);border-radius:2px;color:var(--tree-view-base07)}"
      );
      var nF = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return (
            d(this, r), tj(p((e = n.call(this))), t, nz, nq, S, { id: 11 }), e
          );
        }
        return f(r);
      })(tO);
      function nL(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function nV(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? nL(Object(n), !0).forEach(function (e) {
                n_(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : nL(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function nH(t, e, n) {
        var r = t.slice();
        return (r[18] = e[n]), r;
      }
      function nU(t) {
        var e, n;
        return (
          (e = new nF({ props: { id: t[18].id } })),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            p: function (t, n) {
              var r = {};
              4 & n && (r.id = t[18].id), e.$set(r);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function nJ(t) {
        for (
          var e, n, r, o = t[2].children, i = [], a = 0;
          a < o.length;
          a += 1
        )
          i[a] = nU(nH(t, o, a));
        var c = function (t) {
          return t$(i[t], 1, 1, function () {
            i[t] = null;
          });
        };
        return {
          c: function () {
            e = H("ul");
            for (var r = 0; r < i.length; r += 1) i[r].c();
            Y(
              e,
              "class",
              (n =
                q("".concat(t[3].class || "", " svelte-tree-view")) +
                " svelte-10nukq0")
            );
          },
          m: function (n, o) {
            F(n, e, o);
            for (var a = 0; a < i.length; a += 1) i[a].m(e, null);
            t[13](e), (r = !0);
          },
          p: function (t, a) {
            var l = $(a, 1)[0];
            if (4 & l) {
              for (s = 0, o = t[2].children; s < o.length; s += 1) {
                var s,
                  u = nH(t, o, s);
                i[s]
                  ? (i[s].p(u, l), tx(i[s], 1))
                  : ((i[s] = nU(u)), i[s].c(), tx(i[s], 1), i[s].m(e, null));
              }
              for (ty(), s = o.length; s < i.length; s += 1) c(s);
              tb();
            }
            (!r ||
              (8 & l &&
                n !==
                  (n =
                    q("".concat(t[3].class || "", " svelte-tree-view")) +
                    " svelte-10nukq0"))) &&
              Y(e, "class", n);
          },
          i: function (t) {
            if (!r) {
              for (var e = 0; e < o.length; e += 1) tx(i[e]);
              r = !0;
            }
          },
          o: function (t) {
            i = i.filter(Boolean);
            for (var e = 0; e < i.length; e += 1) t$(i[e]);
            r = !1;
          },
          d: function (n) {
            n && L(e), V(i, n), t[13](null);
          },
        };
      }
      function nG(t, e, n) {
        var r,
          o,
          i,
          a = k;
        t.$$.on_destroy.push(function () {
          return a();
        });
        var c = e,
          l = c.data,
          s = c.theme,
          u = void 0 === s ? void 0 : s,
          f = c.showLogButton,
          d = void 0 !== f && f,
          p = c.showCopyButton,
          h = void 0 !== p && p,
          v = c.valueComponent,
          g = void 0 === v ? void 0 : v,
          m = c.recursionOpts,
          y = void 0 === m ? {} : m,
          b = c.valueFormatter,
          x = void 0 === b ? void 0 : b,
          $ = null,
          w = {
            maxDepth: 16,
            omitKeys: [],
            stopCircularRecursion: !1,
            shouldExpandNode: function () {
              return !1;
            },
          },
          j = {
            showLogButton: d,
            showCopyButton: h,
            valueComponent: g,
            recursionOpts: nV(nV({}, w), y),
            valueFormatter: x,
          },
          O = nR(j),
          C = nS(),
          R = nE(O);
        return (
          to("svelte-tree-view", {
            propsStore: O,
            rootElementStore: C,
            treeStore: R,
          }),
          tn(function () {
            C.set($);
          }),
          (t.$$set = function (t) {
            n(3, (e = _(_({}, e), I(t)))),
              "data" in t && n(4, (l = t.data)),
              "theme" in t && n(5, (u = t.theme)),
              "showLogButton" in t && n(6, (d = t.showLogButton)),
              "showCopyButton" in t && n(7, (h = t.showCopyButton)),
              "valueComponent" in t && n(8, (g = t.valueComponent)),
              "recursionOpts" in t && n(9, (y = t.recursionOpts)),
              "valueFormatter" in t && n(10, (x = t.valueFormatter));
          }),
          (t.$$.update = function () {
            if (
              (5568 & t.$$.dirty &&
                n(
                  12,
                  (j = {
                    showLogButton: d,
                    showCopyButton: h,
                    valueComponent: g,
                    valueFormatter: x,
                    recursionOpts: j.recursionOpts,
                  })
                ),
              6672 & t.$$.dirty)
            ) {
              var e,
                o,
                i,
                a,
                c = nV(nV({}, w), y),
                s =
                  (null === n(11, (r = null == j ? void 0 : j.recursionOpts)) ||
                  void 0 === r
                    ? void 0
                    : r.shouldExpandNode) !== c.shouldExpandNode,
                f = D(R.treeMap),
                p =
                  ((i = nC(
                    -1,
                    "root",
                    l,
                    0,
                    !0,
                    null,
                    (e = new Map()),
                    f,
                    (o = new Map()),
                    s,
                    c
                  )),
                  { treeMap: e, tree: i, iteratedValues: o }),
                v = p.treeMap,
                m = p.tree,
                b = p.iteratedValues;
              R.init(m, v, b), n(12, (j.recursionOpts = c), j), O.setProps(j);
            }
            if (33 & t.$$.dirty && u && $)
              for (a in u) {
                var k = u[a];
                $ &&
                  a.includes("base") &&
                  k &&
                  $.style.setProperty("--tree-view-".concat(a), k);
              }
          }),
          n(1, (o = R.tree)),
          a(),
          (a = E(o, function (t) {
            return n(2, (i = t));
          })),
          (e = I(e)),
          [
            $,
            o,
            i,
            e,
            l,
            u,
            d,
            h,
            g,
            y,
            x,
            r,
            j,
            function (t) {
              tl[t ? "unshift" : "push"](function () {
                n(0, ($ = t));
              });
            },
          ]
        );
      }
      tS(
        ".svelte-10nukq0{box-sizing:border-box}.svelte-tree-view.svelte-10nukq0{--tree-view-font-family:'Helvetica Neue', 'Calibri Light', Roboto, sans-serif;--tree-view-font-size:13px;--tree-view-left-indent:0.875em;--tree-view-line-height:1.1;--tree-view-key-margin-right:0.5em}ul.svelte-10nukq0{background:var(--tree-view-base00);font-family:var(--tree-view-font-family);font-size:var(--tree-view-font-size);height:max-content;list-style:none;margin:0;padding:0;width:max-content}"
      );
      var nK = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return (
            d(this, r),
            tj(p((e = n.call(this))), t, nG, nJ, S, {
              data: 4,
              theme: 5,
              showLogButton: 6,
              showCopyButton: 7,
              valueComponent: 8,
              recursionOpts: 9,
              valueFormatter: 10,
            }),
            e
          );
        }
        return f(r);
      })(tO);
      tS(
        "section.svelte-kkh9zd{border-top:1px solid rgba(255, 162, 177, 0.2);color:#fff;display:flex;height:calc(100% - var(--height-tabs-menu));width:100%}.split-view h2{color:rgb(187, 145, 163);font-family:var(--font-sans);font-size:var(--font-medium);font-weight:400;letter-spacing:1px;margin:0;text-transform:uppercase}.split-view > .left-panel{display:flex;flex-direction:column;flex-grow:1;overflow:scroll;padding:1em}.split-view > .right-panel{border-left:1px solid rgba(255, 162, 177, 0.2);display:flex;flex-direction:column;flex-grow:1;overflow:scroll;padding:1em}.split-view .hidden{visibility:hidden}"
      );
      var nW = function (t) {
          return {};
        },
        nY = function (t) {
          return { class: "right-panel" };
        },
        nZ = function (t) {
          return {};
        },
        nQ = function (t) {
          return { class: "left-panel" };
        };
      function nX(t) {
        var e,
          n,
          r,
          o = t[1].left,
          i = P(o, t, t[0], nQ),
          a = t[1].right,
          c = P(a, t, t[0], nY);
        return {
          c: function () {
            (e = H("section")),
              i && i.c(),
              (n = G()),
              c && c.c(),
              Y(e, "class", "split-view svelte-kkh9zd");
          },
          m: function (t, o) {
            F(t, e, o), i && i.m(e, null), z(e, n), c && c.m(e, null), (r = !0);
          },
          p: function (t, e) {
            var n = $(e, 1)[0];
            i &&
              i.p &&
              (!r || 1 & n) &&
              B(i, o, t, t[0], r ? M(o, t[0], n, nZ) : T(t[0]), nQ),
              c &&
                c.p &&
                (!r || 1 & n) &&
                B(c, a, t, t[0], r ? M(a, t[0], n, nW) : T(t[0]), nY);
          },
          i: function (t) {
            r || (tx(i, t), tx(c, t), (r = !0));
          },
          o: function (t) {
            t$(i, t), t$(c, t), (r = !1);
          },
          d: function (t) {
            t && L(e), i && i.d(t), c && c.d(t);
          },
        };
      }
      function n0(t, e, n) {
        var r = e.$$slots,
          o = e.$$scope;
        return (
          (t.$$set = function (t) {
            "$$scope" in t && n(0, (o = t.$$scope));
          }),
          [o, void 0 === r ? {} : r]
        );
      }
      var n1 = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return d(this, r), tj(p((e = n.call(this))), t, n0, nX, S, {}), e;
        }
        return f(r);
      })(tO);
      function n2(t) {
        var e,
          n,
          r,
          o,
          i,
          a = t[3].default,
          c = P(a, t, t[2], null);
        return {
          c: function () {
            (e = H("button")),
              c && c.c(),
              Y(
                e,
                "class",
                (n = q("".concat(t[1].class || "")) + " svelte-1bsnhi4")
              ),
              tt(e, "selected", t[0]);
          },
          m: function (n, a) {
            F(n, e, a),
              c && c.m(e, null),
              (r = !0),
              o ||
                ((i = [
                  W(e, "click", t[4]),
                  W(e, "mouseover", t[5]),
                  W(e, "mouseenter", t[6]),
                  W(e, "mouseleave", t[7]),
                  W(e, "focus", t[8]),
                ]),
                (o = !0));
          },
          p: function (t, o) {
            var i = $(o, 1)[0];
            c &&
              c.p &&
              (!r || 4 & i) &&
              B(c, a, t, t[2], r ? M(a, t[2], i, null) : T(t[2]), null),
              (!r ||
                (2 & i &&
                  n !==
                    (n =
                      q("".concat(t[1].class || "")) + " svelte-1bsnhi4"))) &&
                Y(e, "class", n),
              (!r || 3 & i) && tt(e, "selected", t[0]);
          },
          i: function (t) {
            r || (tx(c, t), (r = !0));
          },
          o: function (t) {
            t$(c, t), (r = !1);
          },
          d: function (t) {
            t && L(e), c && c.d(t), (o = !1), C(i);
          },
        };
      }
      function n5(t, e, n) {
        var r = e,
          o = r.$$slots,
          i = r.$$scope,
          a = e.selected,
          c = void 0 !== a && a;
        return (
          (t.$$set = function (t) {
            n(1, (e = _(_({}, e), I(t)))),
              "selected" in t && n(0, (c = t.selected)),
              "$$scope" in t && n(2, (i = t.$$scope));
          }),
          (e = I(e)),
          [
            c,
            e,
            i,
            void 0 === o ? {} : o,
            function (e) {
              ta.call(this, t, e);
            },
            function (e) {
              ta.call(this, t, e);
            },
            function (e) {
              ta.call(this, t, e);
            },
            function (e) {
              ta.call(this, t, e);
            },
            function (e) {
              ta.call(this, t, e);
            },
          ]
        );
      }
      tS(
        "button.svelte-1bsnhi4{background:transparent;border:0;border-radius:2px;color:#d3d3d9;cursor:pointer;font-size:var(--font-small);padding:6px 10px;text-transform:uppercase}button.svelte-1bsnhi4:hover{background:rgba(255, 162, 177, 0.4);color:#fff}button.selected.svelte-1bsnhi4{background:rgba(255, 162, 177, 0.4)}"
      );
      var n4 = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return (
            d(this, r),
            tj(p((e = n.call(this))), t, n5, n2, S, { selected: 0 }),
            e
          );
        }
        return f(r);
      })(tO);
      function n3(t) {
        var e;
        return {
          c: function () {
            e = J("log");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function n6(t) {
        var e, n, r, o, i, a, c, l;
        return (
          (i = new n4({
            props: { $$slots: { default: [n3] }, $$scope: { ctx: t } },
          })).$on("click", t[6]),
          (c = new nK({
            props: {
              class: "tree-view",
              data: t[0],
              showLogButton: !0,
              showCopyButton: !0,
              valueFormatter: rn,
            },
          })),
          {
            c: function () {
              (e = H("div")),
                (n = H("div")),
                ((r = H("h2")).textContent = "Current doc"),
                (o = G()),
                tw(i.$$.fragment),
                (a = G()),
                tw(c.$$.fragment),
                Y(n, "class", "top-row svelte-1lnyndi"),
                Y(e, "slot", "left"),
                Y(e, "class", "left-panel svelte-1lnyndi");
            },
            m: function (t, s) {
              F(t, e, s),
                z(e, n),
                z(n, r),
                z(n, o),
                tk(i, n, null),
                z(e, a),
                tk(c, e, null),
                (l = !0);
            },
            p: function (t, e) {
              var n = {};
              1024 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
              var r = {};
              1 & e && (r.data = t[0]), c.$set(r);
            },
            i: function (t) {
              l || (tx(i.$$.fragment, t), tx(c.$$.fragment, t), (l = !0));
            },
            o: function (t) {
              t$(i.$$.fragment, t), t$(c.$$.fragment, t), (l = !1);
            },
            d: function (t) {
              t && L(e), t_(i), t_(c);
            },
          }
        );
      }
      function n7(t) {
        var e;
        return {
          c: function () {
            Y((e = H("span")), "class", "caret-icon svelte-1lnyndi"),
              tt(e, "expanded", t[5]);
          },
          m: function (t, n) {
            F(t, e, n);
          },
          p: function (t, n) {
            32 & n && tt(e, "expanded", t[5]);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function n9(t) {
        var e, n;
        return (
          (e = new nK({ props: { class: "tree-view", data: t[2] } })),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            p: function (t, n) {
              var r = {};
              4 & n && (r.data = t[2]), e.$set(r);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function n8(t) {
        var e;
        return {
          c: function () {
            ((e = H("div")).textContent = "No active marks"),
              Y(e, "class", "no-marks svelte-1lnyndi");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          p: k,
          i: k,
          o: k,
          d: function (t) {
            t && L(e);
          },
        };
      }
      function rt(t) {
        (i = new n4({
          props: {
            class: "selection-btn",
            $$slots: { default: [n7] },
            $$scope: { ctx: t },
          },
        })).$on("click", t[7]),
          (c = new nK({ props: { class: "tree-view", data: t[1] } }));
        var e,
          n,
          r,
          o,
          i,
          a,
          c,
          l,
          s,
          u,
          f,
          d,
          p,
          h,
          v,
          g,
          m,
          y,
          b,
          x = [n8, n9],
          $ = [];
        function w(t, e) {
          return 0 === t[2].length ? 0 : 1;
        }
        return (
          (p = $[(d = w(t))] = x[d](t)),
          (y = new nK({
            props: {
              class: "tree-view",
              data: { nodeSize: t[3], childCount: t[4] },
            },
          })),
          {
            c: function () {
              (e = H("div")),
                (n = H("div")),
                ((r = H("h2")).textContent = "Selection"),
                (o = G()),
                tw(i.$$.fragment),
                (a = G()),
                tw(c.$$.fragment),
                (l = G()),
                (s = H("div")),
                ((u = H("h2")).textContent = "Active marks"),
                (f = G()),
                p.c(),
                (h = G()),
                (v = H("div")),
                ((g = H("h2")).textContent = "Document stats"),
                (m = G()),
                tw(y.$$.fragment),
                Y(n, "class", "top-row svelte-1lnyndi"),
                Y(e, "slot", "right"),
                Y(e, "class", "right-panel svelte-1lnyndi");
            },
            m: function (t, p) {
              F(t, e, p),
                z(e, n),
                z(n, r),
                z(n, o),
                tk(i, n, null),
                z(e, a),
                tk(c, e, null),
                z(e, l),
                z(e, s),
                z(s, u),
                z(s, f),
                $[d].m(s, null),
                z(e, h),
                z(e, v),
                z(v, g),
                z(v, m),
                tk(y, v, null),
                (b = !0);
            },
            p: function (t, e) {
              var n = {};
              1056 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
              var r = {};
              2 & e && (r.data = t[1]), c.$set(r);
              var o = d;
              (d = w(t)) === o
                ? $[d].p(t, e)
                : (ty(),
                  t$($[o], 1, 1, function () {
                    $[o] = null;
                  }),
                  tb(),
                  (p = $[d]) ? p.p(t, e) : (p = $[d] = x[d](t)).c(),
                  tx(p, 1),
                  p.m(s, null));
              var a = {};
              24 & e && (a.data = { nodeSize: t[3], childCount: t[4] }),
                y.$set(a);
            },
            i: function (t) {
              b ||
                (tx(i.$$.fragment, t),
                tx(c.$$.fragment, t),
                tx(p),
                tx(y.$$.fragment, t),
                (b = !0));
            },
            o: function (t) {
              t$(i.$$.fragment, t),
                t$(c.$$.fragment, t),
                t$(p),
                t$(y.$$.fragment, t),
                (b = !1);
            },
            d: function (t) {
              t && L(e), t_(i), t_(c), $[d].d(), t_(y);
            },
          }
        );
      }
      function re(t) {
        var e, n;
        return (
          (e = new n1({
            props: {
              $$slots: { right: [rt], left: [n6] },
              $$scope: { ctx: t },
            },
          })),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            p: function (t, n) {
              var r = $(n, 1)[0],
                o = {};
              1087 & r && (o.$$scope = { dirty: r, ctx: t }), e.$set(o);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function rn(t, e) {
        if ("object" === e.type && t.type) return "{} ".concat(t.type);
      }
      function rr(t, e, n) {
        var r = tR("editor-view").view,
          o = r.state.doc.toJSON(),
          i = nw(r.state.selection),
          a = r.state,
          c = [],
          l = r.state.doc.nodeSize,
          s = r.state.doc.childCount,
          u = !1;
        return (
          nm.subscribe(function (t) {
            if (t) {
              var e = t.state;
              (a = e),
                n(0, (o = e.doc.toJSON())),
                n(1, (i = u ? nk(e.selection) : nw(e.selection))),
                n(
                  2,
                  (c = (function (t) {
                    if (t.selection.empty) {
                      let e = t.selection.$from,
                        n = t.storedMarks;
                      return n
                        ? n.map((t) => t.type.name)
                        : e.marks().map((t) => t.type.name);
                    }
                    {
                      let e = t.selection.$head,
                        n = t.selection.$anchor,
                        r = new Set();
                      return (
                        e.marks().forEach((t) => r.add(t.type.name)),
                        n.marks().forEach((t) => r.add(t.type.name)),
                        Array.from(r)
                      );
                    }
                  })(e))
                ),
                n(3, (l = e.doc.nodeSize)),
                n(4, (s = e.doc.childCount));
            }
          }),
          [
            o,
            i,
            c,
            l,
            s,
            u,
            function () {
              console.log(o), (window._doc = o);
            },
            function () {
              n(5, (u = !u)),
                u ? n(1, (i = nk(a.selection))) : n(1, (i = nw(a.selection)));
            },
          ]
        );
      }
      tS(
        '@charset "UTF-8";.top-row.svelte-1lnyndi{align-items:center;display:flex;justify-content:space-between}.left-panel.svelte-1lnyndi{overflow:scroll}.right-panel.svelte-1lnyndi{border-left:1px solid rgba(255, 162, 177, 0.2);flex-grow:0;min-width:200px;width:200px}.split-view .selection-btn{height:24px;width:35px}.caret-icon.svelte-1lnyndi::before{content:"▶"}.caret-icon.expanded.svelte-1lnyndi::before{content:"▼"}.no-marks.svelte-1lnyndi{color:#85d9ef;margin:0.5em 0 1em 1em}.split-view .tree-view{margin:0.5em 0 1em 0}'
      );
      var ro = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return d(this, r), tj(p((e = n.call(this))), t, rr, re, S, {}), e;
        }
        return f(r);
      })(tO);
      function ri(t, e, n) {
        if ("array" === e) return [];
      }
      function ra(t, e) {
        if (
          ("array" === e && 0 === t[1] && 0 === t[2]) ||
          ("array" === e &&
            "string" == typeof t[0] &&
            0 === t[1] &&
            2 === t[2]) ||
          ("array" === e && 1 === t.length && "object" == typeof t[0])
        )
          return [];
        if ("object" !== e || "a" !== t._t) return;
        let n = [];
        for (let e in t)
          "_t" !== e &&
            ("_" === e.charAt(0)
              ? n.push([e.substr(1), t[e]])
              : n.push([e, t[e]]));
        return n;
      }
      function rc(t, e, n) {
        var r = t.slice();
        return (r[7] = e[n]), (r[9] = n), r;
      }
      function rl(t, e, n) {
        var r = t.slice();
        return (r[10] = e[n]), r;
      }
      function rs(t) {
        var e,
          n,
          r,
          o = t[7].entries.length + "";
        return {
          c: function () {
            (e = J("[")), (n = J(o)), (r = J("]"));
          },
          m: function (t, o) {
            F(t, e, o), F(t, n, o), F(t, r, o);
          },
          p: function (t, e) {
            1 & e && o !== (o = t[7].entries.length + "") && Q(n, o);
          },
          d: function (t) {
            t && L(e), t && L(n), t && L(r);
          },
        };
      }
      function ru(t) {
        var e;
        return {
          c: function () {
            Y((e = H("span")), "class", "caret-icon svelte-s055jw"),
              tt(e, "expanded", t[7].expanded);
          },
          m: function (t, n) {
            F(t, e, n);
          },
          p: function (t, n) {
            1 & n && tt(e, "expanded", t[7].expanded);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function rf(t) {
        for (var e, n = t[7].entries, r = [], o = 0; o < n.length; o += 1)
          r[o] = rd(rl(t, n, o));
        return {
          c: function () {
            for (var t = 0; t < r.length; t += 1) r[t].c();
            e = K();
          },
          m: function (t, n) {
            for (var o = 0; o < r.length; o += 1) r[o].m(t, n);
            F(t, e, n);
          },
          p: function (t, o) {
            if (7 & o) {
              for (i = 0, n = t[7].entries; i < n.length; i += 1) {
                var i,
                  a = rl(t, n, i);
                r[i]
                  ? r[i].p(a, o)
                  : ((r[i] = rd(a)), r[i].c(), r[i].m(e.parentNode, e));
              }
              for (; i < r.length; i += 1) r[i].d(1);
              r.length = n.length;
            }
          },
          d: function (t) {
            V(r, t), t && L(e);
          },
        };
      }
      function rd(t) {
        var e,
          n,
          r,
          o,
          i,
          a,
          c,
          l = (null === (e = t[10]) || void 0 === e ? void 0 : e.timeStr) + "";
        function s() {
          return t[6](t[10], t[9]);
        }
        return {
          c: function () {
            var e;
            (n = H("li")),
              (r = H("button")),
              (o = J(l)),
              (i = G()),
              Y(r, "class", "p-left svelte-s055jw"),
              Y(n, "class", "svelte-s055jw"),
              tt(
                n,
                "selected",
                t[1] === (null === (e = t[10]) || void 0 === e ? void 0 : e.id)
              );
          },
          m: function (t, e) {
            F(t, n, e),
              z(n, r),
              z(r, o),
              z(n, i),
              a || ((c = W(r, "click", s)), (a = !0));
          },
          p: function (e, r) {
            var i, a;
            (t = e),
              1 & r &&
                l !==
                  (l =
                    (null === (i = t[10]) || void 0 === i
                      ? void 0
                      : i.timeStr) + "") &&
                Q(o, l),
              3 & r &&
                tt(
                  n,
                  "selected",
                  t[1] ===
                    (null === (a = t[10]) || void 0 === a ? void 0 : a.id)
                );
          },
          d: function (t) {
            t && L(n), (a = !1), c();
          },
        };
      }
      function rp(t) {
        var e,
          n,
          r,
          o,
          i,
          a,
          c,
          l,
          s,
          u,
          f,
          d,
          p =
            (null === (e = t[7]) || void 0 === e
              ? void 0
              : null === (n = e.topEntry) || void 0 === n
              ? void 0
              : n.timeStr) + "",
          h = t[7].isGroup && rs(t),
          v = t[7].isGroup && t[7].entries.length > 1 && ru(t);
        function g() {
          return t[4](t[7], t[9]);
        }
        function m() {
          return t[5](t[7]);
        }
        var y = t[7].isGroup && t[7].expanded && rf(t);
        return {
          c: function () {
            var e, n;
            (r = H("li")),
              (o = H("button")),
              (i = H("span")),
              (a = J(p)),
              (c = G()),
              h && h.c(),
              (l = G()),
              v && v.c(),
              (s = G()),
              y && y.c(),
              (u = K()),
              Y(o, "class", "svelte-s055jw"),
              tt(o, "is-group", t[7].isGroup),
              Y(r, "class", "svelte-s055jw"),
              tt(
                r,
                "selected",
                !t[7].expanded &&
                  t[1] ===
                    (null === (e = t[7]) || void 0 === e
                      ? void 0
                      : null === (n = e.topEntry) || void 0 === n
                      ? void 0
                      : n.id)
              );
          },
          m: function (t, e) {
            F(t, r, e),
              z(r, o),
              z(o, i),
              z(i, a),
              z(i, c),
              h && h.m(i, null),
              z(o, l),
              v && v.m(o, null),
              F(t, s, e),
              y && y.m(t, e),
              F(t, u, e),
              f || ((d = [W(o, "click", g), W(o, "dblclick", m)]), (f = !0));
          },
          p: function (e, n) {
            var c, l, s, f;
            (t = e),
              1 & n &&
                p !==
                  (p =
                    (null === (c = t[7]) || void 0 === c
                      ? void 0
                      : null === (l = c.topEntry) || void 0 === l
                      ? void 0
                      : l.timeStr) + "") &&
                Q(a, p),
              t[7].isGroup
                ? h
                  ? h.p(t, n)
                  : ((h = rs(t)).c(), h.m(i, null))
                : h && (h.d(1), (h = null)),
              t[7].isGroup && t[7].entries.length > 1
                ? v
                  ? v.p(t, n)
                  : ((v = ru(t)).c(), v.m(o, null))
                : v && (v.d(1), (v = null)),
              1 & n && tt(o, "is-group", t[7].isGroup),
              3 & n &&
                tt(
                  r,
                  "selected",
                  !t[7].expanded &&
                    t[1] ===
                      (null === (s = t[7]) || void 0 === s
                        ? void 0
                        : null === (f = s.topEntry) || void 0 === f
                        ? void 0
                        : f.id)
                ),
              t[7].isGroup && t[7].expanded
                ? y
                  ? y.p(t, n)
                  : ((y = rf(t)).c(), y.m(u.parentNode, u))
                : y && (y.d(1), (y = null));
          },
          d: function (t) {
            t && L(r),
              h && h.d(),
              v && v.d(),
              t && L(s),
              y && y.d(t),
              t && L(u),
              (f = !1),
              C(d);
          },
        };
      }
      function rh(t) {
        for (var e, n = t[0], r = [], o = 0; o < n.length; o += 1)
          r[o] = rp(rc(t, n, o));
        return {
          c: function () {
            e = H("ul");
            for (var t = 0; t < r.length; t += 1) r[t].c();
            Y(e, "class", "svelte-s055jw");
          },
          m: function (t, n) {
            F(t, e, n);
            for (var o = 0; o < r.length; o += 1) r[o].m(e, null);
          },
          p: function (t, o) {
            var i = $(o, 1)[0];
            if (15 & i) {
              for (a = 0, n = t[0]; a < n.length; a += 1) {
                var a,
                  c = rc(t, n, a);
                r[a]
                  ? r[a].p(c, i)
                  : ((r[a] = rp(c)), r[a].c(), r[a].m(e, null));
              }
              for (; a < r.length; a += 1) r[a].d(1);
              r.length = n.length;
            }
          },
          i: k,
          o: k,
          d: function (t) {
            t && L(e), V(r, t);
          },
        };
      }
      function rv(t, e, n) {
        var r = e.listItems,
          o = void 0 === r ? [] : r,
          i = e.selectedId,
          a = tr(),
          c = tr();
        return (
          (t.$$set = function (t) {
            "listItems" in t && n(0, (o = t.listItems)),
              "selectedId" in t && n(1, (i = t.selectedId));
          }),
          [
            o,
            i,
            a,
            c,
            function (t, e) {
              var n;
              return a("click-item", {
                id:
                  null == t
                    ? void 0
                    : null === (n = t.topEntry) || void 0 === n
                    ? void 0
                    : n.id,
                groupIdx: e,
                wasTopNode: !0,
              });
            },
            function (t) {
              var e;
              return c("dblclick-item", {
                id:
                  null == t
                    ? void 0
                    : null === (e = t.topEntry) || void 0 === e
                    ? void 0
                    : e.id,
              });
            },
            function (t, e) {
              return a("click-item", {
                id: null == t ? void 0 : t.id,
                groupIdx: e,
                wasTopNode: !1,
              });
            },
          ]
        );
      }
      tS(
        '@charset "UTF-8";ul.svelte-s055jw.svelte-s055jw{color:#fff;list-style:none;margin:0;padding:0;height:100%;width:100%}li.svelte-s055jw.svelte-s055jw{transition:background 0.1s}li.svelte-s055jw.svelte-s055jw:hover{background:rgba(255, 162, 177, 0.4);color:#fff}li.selected.svelte-s055jw.svelte-s055jw{background:rgba(255, 162, 177, 0.4)}li.svelte-s055jw+li.svelte-s055jw{border-top:1px solid rgb(96, 76, 104)}button.svelte-s055jw.svelte-s055jw{background:transparent;border:0;color:#d3d3d9;cursor:pointer;display:flex;font-family:monospace;font-size:var(--font-small);justify-content:space-between;padding:6px 18px;text-transform:uppercase;width:100%}button.p-left.svelte-s055jw.svelte-s055jw{margin-left:1em}.caret-icon.svelte-s055jw.svelte-s055jw::before{content:"▶"}.caret-icon.expanded.svelte-s055jw.svelte-s055jw::before{content:"▼"}'
      );
      var rg = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return (
            d(this, r),
            tj(p((e = n.call(this))), t, rv, rh, S, {
              listItems: 0,
              selectedId: 1,
            }),
            e
          );
        }
        return f(r);
      })(tO);
      function rm(t, e, n) {
        var r = t.slice();
        return (r[3] = e[n]), r;
      }
      function ry(t) {
        var e,
          n = t[0](t[1]) + "";
        return {
          c: function () {
            e = J(n);
          },
          m: function (t, n) {
            F(t, e, n);
          },
          p: function (t, r) {
            3 & r && n !== (n = t[0](t[1]) + "") && Q(e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function rb(t) {
        function e(t, e) {
          return 1 === t[1].length
            ? rk
            : 2 === t[1].length
            ? rw
            : 3 === t[1].length && 0 === t[1][1] && 0 === t[1][2]
            ? r$
            : 3 === t[1].length && 2 === t[1][2]
            ? rx
            : void 0;
        }
        var n,
          r = e(t),
          o = r && r(t);
        return {
          c: function () {
            o && o.c(), (n = K());
          },
          m: function (t, e) {
            o && o.m(t, e), F(t, n, e);
          },
          p: function (t, i) {
            r === (r = e(t)) && o
              ? o.p(t, i)
              : (o && o.d(1), (o = r && r(t)) && (o.c(), o.m(n.parentNode, n)));
          },
          d: function (t) {
            o && o.d(t), t && L(n);
          },
        };
      }
      function rx(t) {
        for (var e, n = rS(t[1][0]), r = [], o = 0; o < n.length; o += 1)
          r[o] = rC(rm(t, n, o));
        return {
          c: function () {
            e = H("span");
            for (var t = 0; t < r.length; t += 1) r[t].c();
            Y(e, "class", "updated svelte-17gp0ui");
          },
          m: function (t, n) {
            F(t, e, n);
            for (var o = 0; o < r.length; o += 1) r[o].m(e, null);
          },
          p: function (t, o) {
            if (2 & o) {
              for (i = 0, n = rS(t[1][0]); i < n.length; i += 1) {
                var i,
                  a = rm(t, n, i);
                r[i]
                  ? r[i].p(a, o)
                  : ((r[i] = rC(a)), r[i].c(), r[i].m(e, null));
              }
              for (; i < r.length; i += 1) r[i].d(1);
              r.length = n.length;
            }
          },
          d: function (t) {
            t && L(e), V(r, t);
          },
        };
      }
      function r$(t) {
        var e,
          n,
          r = rE(t[1][0]) + "";
        return {
          c: function () {
            (e = H("span")),
              (n = J(r)),
              Y(e, "class", "deleted svelte-17gp0ui");
          },
          m: function (t, r) {
            F(t, e, r), z(e, n);
          },
          p: function (t, e) {
            2 & e && r !== (r = rE(t[1][0]) + "") && Q(n, r);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function rw(t) {
        var e,
          n,
          r,
          o,
          i,
          a,
          c,
          l,
          s = rE(t[1][0]) + "",
          u = rE(t[1][1]) + "";
        return {
          c: function () {
            (e = H("span")),
              (n = H("span")),
              (r = J(s)),
              (o = G()),
              ((i = H("span")).textContent = "=>"),
              (a = G()),
              (c = H("span")),
              (l = J(u)),
              Y(n, "class", "deleted svelte-17gp0ui"),
              Y(i, "class", "arrow svelte-17gp0ui"),
              Y(c, "class", "added svelte-17gp0ui"),
              Y(e, "class", "updated svelte-17gp0ui");
          },
          m: function (t, s) {
            F(t, e, s),
              z(e, n),
              z(n, r),
              z(e, o),
              z(e, i),
              z(e, a),
              z(e, c),
              z(c, l);
          },
          p: function (t, e) {
            2 & e && s !== (s = rE(t[1][0]) + "") && Q(r, s),
              2 & e && u !== (u = rE(t[1][1]) + "") && Q(l, u);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function rk(t) {
        var e,
          n,
          r = rE(t[1][0]) + "";
        return {
          c: function () {
            (e = H("span")), (n = J(r)), Y(e, "class", "added svelte-17gp0ui");
          },
          m: function (t, r) {
            F(t, e, r), z(e, n);
          },
          p: function (t, e) {
            2 & e && r !== (r = rE(t[1][0]) + "") && Q(n, r);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function r_(t) {
        var e,
          n,
          r = t[3].raw + "";
        return {
          c: function () {
            (e = H("span")), (n = J(r));
          },
          m: function (t, r) {
            F(t, e, r), z(e, n);
          },
          p: function (t, e) {
            2 & e && r !== (r = t[3].raw + "") && Q(n, r);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function rj(t) {
        var e,
          n,
          r = t[3].add + "";
        return {
          c: function () {
            (e = H("span")), (n = J(r)), Y(e, "class", "added svelte-17gp0ui");
          },
          m: function (t, r) {
            F(t, e, r), z(e, n);
          },
          p: function (t, e) {
            2 & e && r !== (r = t[3].add + "") && Q(n, r);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function rO(t) {
        var e,
          n,
          r = t[3].delete + "";
        return {
          c: function () {
            (e = H("span")),
              (n = J(r)),
              Y(e, "class", "deleted svelte-17gp0ui");
          },
          m: function (t, r) {
            F(t, e, r), z(e, n);
          },
          p: function (t, e) {
            2 & e && r !== (r = t[3].delete + "") && Q(n, r);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function rC(t) {
        function e(t, e) {
          return t[3].delete ? rO : t[3].add ? rj : r_;
        }
        var n,
          r = e(t),
          o = r(t);
        return {
          c: function () {
            o.c(), (n = K());
          },
          m: function (t, e) {
            o.m(t, e), F(t, n, e);
          },
          p: function (t, i) {
            r === (r = e(t)) && o
              ? o.p(t, i)
              : (o.d(1), (o = r(t)) && (o.c(), o.m(n.parentNode, n)));
          },
          d: function (t) {
            o.d(t), t && L(n);
          },
        };
      }
      function rR(t) {
        function e(t, e) {
          return (2 & e && (n = null),
          null == n && (n = !!Array.isArray(t[1])),
          n)
            ? rb
            : ry;
        }
        var n,
          r,
          o = e(t, -1),
          i = o(t);
        return {
          c: function () {
            i.c(), (r = K());
          },
          m: function (t, e) {
            i.m(t, e), F(t, r, e);
          },
          p: function (t, n) {
            var a = $(n, 1)[0];
            o === (o = e(t, a)) && i
              ? i.p(t, a)
              : (i.d(1), (i = o(t)) && (i.c(), i.m(r.parentNode, r)));
          },
          i: k,
          o: k,
          d: function (t) {
            i.d(t), t && L(r);
          },
        };
      }
      function rS(t) {
        return t
          .split(/\n/gm)
          .slice(1)
          .map(function (t) {
            return n_(
              {},
              t.startsWith("-") ? "delete" : t.startsWith("+") ? "add" : "raw",
              t.slice(1).replace(/\s/gm, "\xa0")
            );
          });
      }
      function rE(t) {
        return "string" == typeof t
          ? t
          : (function (t) {
              if (null === t) return "null";
              var e = JSON.stringify(t);
              return void 0 === e
                ? "undefined"
                : e.length > 22
                ? "".concat(e.slice(0, 15), "…").concat(e.slice(-5))
                : e;
            })(t);
      }
      function rD(t, e, n) {
        var r,
          o = e.node,
          i = e.defaultFormatter;
        return (
          (t.$$set = function (t) {
            "node" in t && n(2, (o = t.node)),
              "defaultFormatter" in t && n(0, (i = t.defaultFormatter));
          }),
          (t.$$.update = function () {
            4 & t.$$.dirty && n(1, (r = o.value));
          }),
          [i, r, o]
        );
      }
      tS(
        ".added.svelte-17gp0ui.svelte-17gp0ui{display:inline-block;background:#87cc86;border-radius:1px;color:green;padding:1px 2px;text-indent:0;min-height:1ex}.deleted.svelte-17gp0ui.svelte-17gp0ui{display:inline-block;background:#d66363;border-radius:1px;color:#d3d3d9;padding:1px 2px;text-decoration:line-through;text-indent:0;min-height:1ex}.updated.svelte-17gp0ui.svelte-17gp0ui{word-break:break-all}.updated.svelte-17gp0ui .added.svelte-17gp0ui{background:#eaea37}.arrow.svelte-17gp0ui.svelte-17gp0ui{color:#87cc86}"
      );
      var rA = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return (
            d(this, r),
            tj(p((e = n.call(this))), t, rD, rR, S, {
              node: 2,
              defaultFormatter: 0,
            }),
            e
          );
        }
        return f(r);
      })(tO);
      function rP(t) {
        var e, n, r, o;
        return (
          (r = new rg({
            props: {
              listItems: t[4],
              selectedId:
                (null === (e = t[0]) || void 0 === e ? void 0 : e.id) || "",
            },
          })).$on("click-item", t[7]),
          r.$on("dblclick-item", t[8]),
          {
            c: function () {
              (n = H("div")),
                tw(r.$$.fragment),
                Y(n, "slot", "left"),
                Y(n, "class", "left-panel svelte-lq0bhc");
            },
            m: function (t, e) {
              F(t, n, e), tk(r, n, null), (o = !0);
            },
            p: function (t, e) {
              var n,
                o = {};
              16 & e && (o.listItems = t[4]),
                1 & e &&
                  (o.selectedId =
                    (null === (n = t[0]) || void 0 === n ? void 0 : n.id) ||
                    ""),
                r.$set(o);
            },
            i: function (t) {
              o || (tx(r.$$.fragment, t), (o = !0));
            },
            o: function (t) {
              t$(r.$$.fragment, t), (o = !1);
            },
            d: function (t) {
              t && L(n), t_(r);
            },
          }
        );
      }
      function rN(t) {
        var e;
        return {
          c: function () {
            ((e = H("div")).textContent = "Docs are equal."),
              Y(e, "class", "equal-diff svelte-lq0bhc");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          p: k,
          i: k,
          o: k,
          d: function (t) {
            t && L(e);
          },
        };
      }
      function rM(t) {
        var e,
          n,
          r,
          o,
          i,
          a,
          c,
          l,
          s,
          u,
          f,
          d,
          p,
          h = t[0].contentDiff && rB(t),
          v = t[0].selectionDiff && rI(t),
          g = t[0].selectionHtml.length > 0 && rz(t),
          m = t[1] && rL(t);
        (f = new n4({
          props: { $$slots: { default: [rU] }, $$scope: { ctx: t } },
        })).$on("click", t[5]);
        var y = t[1] && rJ(t);
        return {
          c: function () {
            (e = H("div")),
              h && h.c(),
              (n = G()),
              v && v.c(),
              (r = G()),
              g && g.c(),
              (o = G()),
              (i = H("div")),
              (a = H("div")),
              ((c = H("h2")).textContent = "Transaction"),
              (l = G()),
              (s = H("div")),
              m && m.c(),
              (u = G()),
              tw(f.$$.fragment),
              (d = G()),
              y && y.c(),
              Y(s, "class", "transaction-buttons svelte-lq0bhc"),
              Y(a, "class", "title-container svelte-lq0bhc"),
              Y(i, "class", "entry-row svelte-lq0bhc");
          },
          m: function (t, b) {
            F(t, e, b),
              h && h.m(e, null),
              z(e, n),
              v && v.m(e, null),
              z(e, r),
              g && g.m(e, null),
              z(e, o),
              z(e, i),
              z(i, a),
              z(a, c),
              z(a, l),
              z(a, s),
              m && m.m(s, null),
              z(s, u),
              tk(f, s, null),
              z(i, d),
              y && y.m(i, null),
              (p = !0);
          },
          p: function (t, a) {
            t[0].contentDiff
              ? h
                ? (h.p(t, a), 1 & a && tx(h, 1))
                : ((h = rB(t)).c(), tx(h, 1), h.m(e, n))
              : h &&
                (ty(),
                t$(h, 1, 1, function () {
                  h = null;
                }),
                tb()),
              t[0].selectionDiff
                ? v
                  ? (v.p(t, a), 1 & a && tx(v, 1))
                  : ((v = rI(t)).c(), tx(v, 1), v.m(e, r))
                : v &&
                  (ty(),
                  t$(v, 1, 1, function () {
                    v = null;
                  }),
                  tb()),
              t[0].selectionHtml.length > 0
                ? g
                  ? (g.p(t, a), 1 & a && tx(g, 1))
                  : ((g = rz(t)).c(), tx(g, 1), g.m(e, o))
                : g &&
                  (ty(),
                  t$(g, 1, 1, function () {
                    g = null;
                  }),
                  tb()),
              t[1]
                ? m
                  ? (m.p(t, a), 2 & a && tx(m, 1))
                  : ((m = rL(t)).c(), tx(m, 1), m.m(s, u))
                : m &&
                  (ty(),
                  t$(m, 1, 1, function () {
                    m = null;
                  }),
                  tb());
            var c = {};
            8194 & a && (c.$$scope = { dirty: a, ctx: t }),
              f.$set(c),
              t[1]
                ? y
                  ? (y.p(t, a), 2 & a && tx(y, 1))
                  : ((y = rJ(t)).c(), tx(y, 1), y.m(i, null))
                : y &&
                  (ty(),
                  t$(y, 1, 1, function () {
                    y = null;
                  }),
                  tb());
          },
          i: function (t) {
            p ||
              (tx(h),
              tx(v),
              tx(g),
              tx(m),
              tx(f.$$.fragment, t),
              tx(y),
              (p = !0));
          },
          o: function (t) {
            t$(h), t$(v), t$(g), t$(m), t$(f.$$.fragment, t), t$(y), (p = !1);
          },
          d: function (t) {
            t && L(e),
              h && h.d(),
              v && v.d(),
              g && g.d(),
              m && m.d(),
              t_(f),
              y && y.d();
          },
        };
      }
      function rB(t) {
        var e, n, r, o, i, a, c, l;
        return (
          (i = new n4({
            props: {
              class: "hidden",
              $$slots: { default: [rT] },
              $$scope: { ctx: t },
            },
          })),
          (c = new nK({
            props: {
              class: "tree-view",
              data: t[0].contentDiff,
              showLogButton: !0,
              showCopyButton: !0,
              valueComponent: rA,
              recursionOpts: {
                maxDepth: 12,
                mapChildren: ra,
                shouldExpandNode: rW,
              },
            },
          })),
          {
            c: function () {
              (e = H("div")),
                (n = H("div")),
                ((r = H("h2")).textContent = "Doc diff"),
                (o = G()),
                tw(i.$$.fragment),
                (a = G()),
                tw(c.$$.fragment),
                Y(n, "class", "title-container svelte-lq0bhc"),
                Y(e, "class", "entry-row svelte-lq0bhc");
            },
            m: function (t, s) {
              F(t, e, s),
                z(e, n),
                z(n, r),
                z(n, o),
                tk(i, n, null),
                z(e, a),
                tk(c, e, null),
                (l = !0);
            },
            p: function (t, e) {
              var n = {};
              8192 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
              var r = {};
              1 & e && (r.data = t[0].contentDiff), c.$set(r);
            },
            i: function (t) {
              l || (tx(i.$$.fragment, t), tx(c.$$.fragment, t), (l = !0));
            },
            o: function (t) {
              t$(i.$$.fragment, t), t$(c.$$.fragment, t), (l = !1);
            },
            d: function (t) {
              t && L(e), t_(i), t_(c);
            },
          }
        );
      }
      function rT(t) {
        var e;
        return {
          c: function () {
            e = J("log");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function rI(t) {
        var e, n, r, o, i, a, c, l;
        return (
          (i = new n4({
            props: {
              class: "hidden",
              $$slots: { default: [rq] },
              $$scope: { ctx: t },
            },
          })),
          (c = new nK({
            props: {
              class: "tree-view",
              data: t[0].selectionDiff,
              valueComponent: rA,
              recursionOpts: { mapChildren: ri, shouldExpandNode: rY },
            },
          })),
          {
            c: function () {
              (e = H("div")),
                (n = H("div")),
                ((r = H("h2")).textContent = "Selection diff"),
                (o = G()),
                tw(i.$$.fragment),
                (a = G()),
                tw(c.$$.fragment),
                Y(n, "class", "title-container svelte-lq0bhc"),
                Y(e, "class", "entry-row svelte-lq0bhc");
            },
            m: function (t, s) {
              F(t, e, s),
                z(e, n),
                z(n, r),
                z(n, o),
                tk(i, n, null),
                z(e, a),
                tk(c, e, null),
                (l = !0);
            },
            p: function (t, e) {
              var n = {};
              8192 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
              var r = {};
              1 & e && (r.data = t[0].selectionDiff), c.$set(r);
            },
            i: function (t) {
              l || (tx(i.$$.fragment, t), tx(c.$$.fragment, t), (l = !0));
            },
            o: function (t) {
              t$(i.$$.fragment, t), t$(c.$$.fragment, t), (l = !1);
            },
            d: function (t) {
              t && L(e), t_(i), t_(c);
            },
          }
        );
      }
      function rq(t) {
        var e;
        return {
          c: function () {
            e = J("log");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function rz(t) {
        var e,
          n,
          r,
          o,
          i,
          a,
          c,
          l,
          s,
          u = t[0].selectionHtml + "";
        return (
          (i = new n4({
            props: {
              class: "hidden",
              $$slots: { default: [rF] },
              $$scope: { ctx: t },
            },
          })),
          {
            c: function () {
              (e = H("div")),
                (n = H("div")),
                ((r = H("h2")).textContent = "Selection content"),
                (o = G()),
                tw(i.$$.fragment),
                (a = G()),
                (c = H("pre")),
                (l = H("code")),
                Y(n, "class", "title-container svelte-lq0bhc"),
                Y(c, "class", "selection-html svelte-lq0bhc"),
                Y(e, "class", "entry-row svelte-lq0bhc");
            },
            m: function (t, f) {
              F(t, e, f),
                z(e, n),
                z(n, r),
                z(n, o),
                tk(i, n, null),
                z(e, a),
                z(e, c),
                z(c, l),
                (l.innerHTML = u),
                (s = !0);
            },
            p: function (t, e) {
              var n = {};
              8192 & e && (n.$$scope = { dirty: e, ctx: t }),
                i.$set(n),
                (!s || 1 & e) &&
                  u !== (u = t[0].selectionHtml + "") &&
                  (l.innerHTML = u);
            },
            i: function (t) {
              s || (tx(i.$$.fragment, t), (s = !0));
            },
            o: function (t) {
              t$(i.$$.fragment, t), (s = !1);
            },
            d: function (t) {
              t && L(e), t_(i);
            },
          }
        );
      }
      function rF(t) {
        var e;
        return {
          c: function () {
            e = J("log");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function rL(t) {
        var e, n, r, o;
        return (
          (e = new n4({
            props: { $$slots: { default: [rV] }, $$scope: { ctx: t } },
          })).$on("click", t[9]),
          (r = new n4({
            props: { $$slots: { default: [rH] }, $$scope: { ctx: t } },
          })).$on("click", t[6]),
          {
            c: function () {
              tw(e.$$.fragment), (n = G()), tw(r.$$.fragment);
            },
            m: function (t, i) {
              tk(e, t, i), F(t, n, i), tk(r, t, i), (o = !0);
            },
            p: function (t, n) {
              var o = {};
              8196 & n && (o.$$scope = { dirty: n, ctx: t }), e.$set(o);
              var i = {};
              8192 & n && (i.$$scope = { dirty: n, ctx: t }), r.$set(i);
            },
            i: function (t) {
              o || (tx(e.$$.fragment, t), tx(r.$$.fragment, t), (o = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), t$(r.$$.fragment, t), (o = !1);
            },
            d: function (t) {
              t_(e, t), t && L(n), t_(r, t);
            },
          }
        );
      }
      function rV(t) {
        var e,
          n = t[2] ? "collapse" : "expand";
        return {
          c: function () {
            e = J(n);
          },
          m: function (t, n) {
            F(t, e, n);
          },
          p: function (t, r) {
            4 & r && n !== (n = t[2] ? "collapse" : "expand") && Q(e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function rH(t) {
        var e;
        return {
          c: function () {
            e = J("log");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function rU(t) {
        var e,
          n = t[1] ? "hide" : "show";
        return {
          c: function () {
            e = J(n);
          },
          m: function (t, n) {
            F(t, e, n);
          },
          p: function (t, r) {
            2 & r && n !== (n = t[1] ? "hide" : "show") && Q(e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function rJ(t) {
        var e, n;
        return (
          (e = new nK({
            props: {
              class: "tree-view",
              data: t[0].trs[0],
              showLogButton: !0,
              showCopyButton: !0,
              recursionOpts: t[3],
            },
          })),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            p: function (t, n) {
              var r = {};
              1 & n && (r.data = t[0].trs[0]),
                8 & n && (r.recursionOpts = t[3]),
                e.$set(r);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function rG(t) {
        var e,
          n,
          r,
          o,
          i = [rM, rN],
          a = [];
        return (
          (r = a[(n = t[0] ? 0 : 1)] = i[n](t)),
          {
            c: function () {
              (e = H("div")),
                r.c(),
                Y(e, "slot", "right"),
                Y(e, "class", "right-panel");
            },
            m: function (t, r) {
              F(t, e, r), a[n].m(e, null), (o = !0);
            },
            p: function (t, o) {
              var c = n;
              (n = t[0] ? 0 : 1) === c
                ? a[n].p(t, o)
                : (ty(),
                  t$(a[c], 1, 1, function () {
                    a[c] = null;
                  }),
                  tb(),
                  (r = a[n]) ? r.p(t, o) : (r = a[n] = i[n](t)).c(),
                  tx(r, 1),
                  r.m(e, null));
            },
            i: function (t) {
              o || (tx(r), (o = !0));
            },
            o: function (t) {
              t$(r), (o = !1);
            },
            d: function (t) {
              t && L(e), a[n].d();
            },
          }
        );
      }
      function rK(t) {
        var e, n;
        return (
          (e = new n1({
            props: {
              $$slots: { right: [rG], left: [rP] },
              $$scope: { ctx: t },
            },
          })),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            p: function (t, n) {
              var r = $(n, 1)[0],
                o = {};
              8223 & r && (o.$$scope = { dirty: r, ctx: t }), e.$set(o);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      tS(
        ".hidden{display:none;visibility:hidden}.left-panel.svelte-lq0bhc.svelte-lq0bhc{flex-grow:0;padding:0;min-width:190px;width:190px}.title-container.svelte-lq0bhc.svelte-lq0bhc{align-items:center;display:flex}.transaction-buttons.svelte-lq0bhc.svelte-lq0bhc{margin-left:2rem}.entry-row.svelte-lq0bhc+.entry-row.svelte-lq0bhc{margin-top:1em}.selection-html.svelte-lq0bhc.svelte-lq0bhc{font-weight:100;margin:0.5em 0 0 0;padding:0}.equal-diff.svelte-lq0bhc.svelte-lq0bhc{align-items:center;color:rgb(255, 162, 177);display:flex;font-size:14px;height:100%;justify-content:center;width:100%}"
      );
      var rW = function () {
          return !0;
        },
        rY = function () {
          return !0;
        };
      function rZ(t, e, n) {
        A(t, nv, function (t) {
          return n(10, (o = t));
        }),
          A(t, ng, function (t) {
            return n(11, (i = t));
          });
        var r,
          o,
          i,
          a = void 0,
          c = !1,
          l = tR("editor-view").replaceEditorContent,
          s = !1,
          u = {
            maxDepth: 24,
            stopCircularRecursion: !0,
            omitKeys: ["schema"],
            shouldExpandNode: function () {
              return s;
            },
          };
        return (
          nm.subscribe(function (t) {
            t && n(0, (a = t));
          }),
          (t.$$.update = function () {
            3072 & t.$$.dirty &&
              n(
                4,
                (r = i.map(function (t) {
                  return {
                    isGroup: t.isGroup,
                    topEntry: o.get(t.topEntryId),
                    entries: t.entryIds.map(function (t) {
                      return o.get(t);
                    }),
                    expanded: t.expanded,
                  };
                }))
              );
          }),
          [
            a,
            c,
            s,
            u,
            r,
            function () {
              n(1, (c = !c));
            },
            function () {
              console.info(
                "%c [prosemirror-dev-toolkit]: Property added to window._trs",
                "color: #b8e248"
              ),
                console.log(null == a ? void 0 : a.trs),
                (window._trs = null == a ? void 0 : a.trs);
            },
            function (t) {
              var e = t.detail,
                i = e.id,
                c = void 0 === i ? "" : i,
                l = e.groupIdx,
                s = e.wasTopNode;
              if ((n(0, (a = o.get(c))), a)) {
                var u = r[l];
                u.isGroup &&
                  u.entries.length > 1 &&
                  s &&
                  ng.update(function (t) {
                    return t.map(function (t, e) {
                      return e !== l
                        ? t
                        : Object.assign(Object.assign({}, t), {
                            expanded: !t.expanded,
                          });
                    });
                  });
              }
            },
            function (t) {
              n(0, (a = o.get(t.detail.id || ""))), a && l(a.state);
            },
            function () {
              n(2, (s = !s)),
                n(
                  3,
                  (u = Object.assign(Object.assign({}, u), {
                    shouldExpandNode: function () {
                      return s;
                    },
                  }))
                );
            },
            o,
            i,
          ]
        );
      }
      var rQ = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return d(this, r), tj(p((e = n.call(this))), t, rZ, rK, S, {}), e;
        }
        return f(r);
      })(tO);
      function rX(t, e, n) {
        var r = t.slice();
        return (r[4] = e[n]), r;
      }
      function r0(t) {
        var e,
          n,
          r,
          o,
          i,
          a,
          c = t[4].value + "";
        function l() {
          return t[3](t[4]);
        }
        return {
          c: function () {
            (e = H("li")),
              (n = H("button")),
              (r = J(c)),
              (o = G()),
              Y(n, "class", "svelte-i8gf0s"),
              tt(n, "selected", t[1] === t[4].key),
              tt(n, "empty", t[4].empty),
              Y(e, "class", "svelte-i8gf0s");
          },
          m: function (t, c) {
            F(t, e, c),
              z(e, n),
              z(n, r),
              z(e, o),
              i || ((a = W(n, "click", l)), (i = !0));
          },
          p: function (e, o) {
            (t = e),
              1 & o && c !== (c = t[4].value + "") && Q(r, c),
              3 & o && tt(n, "selected", t[1] === t[4].key),
              1 & o && tt(n, "empty", t[4].empty);
          },
          d: function (t) {
            t && L(e), (i = !1), a();
          },
        };
      }
      function r1(t) {
        for (var e, n = t[0], r = [], o = 0; o < n.length; o += 1)
          r[o] = r0(rX(t, n, o));
        return {
          c: function () {
            e = H("ul");
            for (var t = 0; t < r.length; t += 1) r[t].c();
            Y(e, "class", "svelte-i8gf0s");
          },
          m: function (t, n) {
            F(t, e, n);
            for (var o = 0; o < r.length; o += 1) r[o].m(e, null);
          },
          p: function (t, o) {
            var i = $(o, 1)[0];
            if (7 & i) {
              for (a = 0, n = t[0]; a < n.length; a += 1) {
                var a,
                  c = rX(t, n, a);
                r[a]
                  ? r[a].p(c, i)
                  : ((r[a] = r0(c)), r[a].c(), r[a].m(e, null));
              }
              for (; a < r.length; a += 1) r[a].d(1);
              r.length = n.length;
            }
          },
          i: k,
          o: k,
          d: function (t) {
            t && L(e), V(r, t);
          },
        };
      }
      function r2(t, e, n) {
        var r = e.listItems,
          o = void 0 === r ? [] : r,
          i = e.selectedKey,
          a = e.onSelect;
        return (
          (t.$$set = function (t) {
            "listItems" in t && n(0, (o = t.listItems)),
              "selectedKey" in t && n(1, (i = t.selectedKey)),
              "onSelect" in t && n(2, (a = t.onSelect));
          }),
          [
            o,
            i,
            a,
            function (t) {
              return a(t);
            },
          ]
        );
      }
      tS(
        "ul.svelte-i8gf0s.svelte-i8gf0s{color:#fff;list-style:none;margin:0;padding:0;height:100%;width:100%}li.svelte-i8gf0s+li.svelte-i8gf0s{border-top:1px solid rgb(96, 76, 104)}button.svelte-i8gf0s.svelte-i8gf0s{background:transparent;border:0;color:#d3d3d9;cursor:pointer;display:flex;font-family:monospace;font-size:var(--font-small);font-weight:100;padding:6px 18px;text-transform:uppercase;width:100%}button.svelte-i8gf0s.svelte-i8gf0s:hover{background:rgba(255, 162, 177, 0.4);color:#fff}button:hover.empty.svelte-i8gf0s.svelte-i8gf0s{background:rgb(80, 68, 93)}button.selected.svelte-i8gf0s.svelte-i8gf0s{background:rgba(255, 162, 177, 0.4)}button.selected.empty.svelte-i8gf0s.svelte-i8gf0s{background:rgb(80, 68, 93)}button.empty.svelte-i8gf0s.svelte-i8gf0s{color:#727288}"
      );
      var r5 = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return (
            d(this, r),
            tj(p((e = n.call(this))), t, r2, r1, S, {
              listItems: 0,
              selectedKey: 1,
              onSelect: 2,
            }),
            e
          );
        }
        return f(r);
      })(tO);
      function r4(t) {
        var e, n, r, o;
        return (
          (r = new r5({
            props: {
              listItems: t[4],
              selectedKey: null === (e = t[0]) || void 0 === e ? void 0 : e.key,
              onSelect: t[5],
            },
          })),
          {
            c: function () {
              (n = H("div")),
                tw(r.$$.fragment),
                Y(n, "slot", "left"),
                Y(n, "class", "left-panel svelte-1oogal0");
            },
            m: function (t, e) {
              F(t, n, e), tk(r, n, null), (o = !0);
            },
            p: function (t, e) {
              var n,
                o = {};
              16 & e && (o.listItems = t[4]),
                1 & e &&
                  (o.selectedKey =
                    null === (n = t[0]) || void 0 === n ? void 0 : n.key),
                r.$set(o);
            },
            i: function (t) {
              o || (tx(r.$$.fragment, t), (o = !0));
            },
            o: function (t) {
              t$(r.$$.fragment, t), (o = !1);
            },
            d: function (t) {
              t && L(n), t_(r);
            },
          }
        );
      }
      function r3(t) {
        var e, n, r, o, i, a, c, l;
        return (
          (i = new n4({
            props: { $$slots: { default: [r6] }, $$scope: { ctx: t } },
          })).$on("click", t[6]),
          (c = new n4({
            props: { $$slots: { default: [r7] }, $$scope: { ctx: t } },
          })).$on("click", t[7]),
          {
            c: function () {
              (e = H("div")),
                ((n = H("h2")).textContent = "Plugin state"),
                (r = G()),
                (o = H("div")),
                tw(i.$$.fragment),
                (a = G()),
                tw(c.$$.fragment),
                Y(e, "class", "top-row svelte-1oogal0");
            },
            m: function (t, s) {
              F(t, e, s),
                z(e, n),
                z(e, r),
                z(e, o),
                tk(i, o, null),
                z(o, a),
                tk(c, o, null),
                (l = !0);
            },
            p: function (t, e) {
              var n = {};
              2050 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
              var r = {};
              2048 & e && (r.$$scope = { dirty: e, ctx: t }), c.$set(r);
            },
            i: function (t) {
              l || (tx(i.$$.fragment, t), tx(c.$$.fragment, t), (l = !0));
            },
            o: function (t) {
              t$(i.$$.fragment, t), t$(c.$$.fragment, t), (l = !1);
            },
            d: function (t) {
              t && L(e), t_(i), t_(c);
            },
          }
        );
      }
      function r6(t) {
        var e,
          n = t[1] ? "collapse" : "expand";
        return {
          c: function () {
            e = J(n);
          },
          m: function (t, n) {
            F(t, e, n);
          },
          p: function (t, r) {
            2 & r && n !== (n = t[1] ? "collapse" : "expand") && Q(e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function r7(t) {
        var e;
        return {
          c: function () {
            e = J("log");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function r9(t) {
        var e;
        return {
          c: function () {
            ((e = H("div")).textContent = "Plugin has no state"),
              Y(e, "class", "empty-state svelte-1oogal0");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          p: k,
          i: k,
          o: k,
          d: function (t) {
            t && L(e);
          },
        };
      }
      function r8(t) {
        var e, n;
        return (
          (e = new nK({
            props: {
              data: t[3],
              showLogButton: !0,
              showCopyButton: !0,
              recursionOpts: t[2],
            },
          })),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            p: function (t, n) {
              var r = {};
              8 & n && (r.data = t[3]),
                4 & n && (r.recursionOpts = t[2]),
                e.$set(r);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function ot(t) {
        var e,
          n,
          r,
          o,
          i,
          a = t[3] && r3(t),
          c = [r8, r9],
          l = [];
        return (
          (o = l[(r = t[3] ? 0 : 1)] = c[r](t)),
          {
            c: function () {
              (e = H("div")),
                a && a.c(),
                (n = G()),
                o.c(),
                Y(e, "slot", "right"),
                Y(e, "class", "right-panel svelte-1oogal0");
            },
            m: function (t, o) {
              F(t, e, o), a && a.m(e, null), z(e, n), l[r].m(e, null), (i = !0);
            },
            p: function (t, i) {
              t[3]
                ? a
                  ? (a.p(t, i), 8 & i && tx(a, 1))
                  : ((a = r3(t)).c(), tx(a, 1), a.m(e, n))
                : a &&
                  (ty(),
                  t$(a, 1, 1, function () {
                    a = null;
                  }),
                  tb());
              var s = r;
              (r = t[3] ? 0 : 1) === s
                ? l[r].p(t, i)
                : (ty(),
                  t$(l[s], 1, 1, function () {
                    l[s] = null;
                  }),
                  tb(),
                  (o = l[r]) ? o.p(t, i) : (o = l[r] = c[r](t)).c(),
                  tx(o, 1),
                  o.m(e, null));
            },
            i: function (t) {
              i || (tx(a), tx(o), (i = !0));
            },
            o: function (t) {
              t$(a), t$(o), (i = !1);
            },
            d: function (t) {
              t && L(e), a && a.d(), l[r].d();
            },
          }
        );
      }
      function oe(t) {
        var e, n;
        return (
          (e = new n1({
            props: {
              $$slots: { right: [ot], left: [r4] },
              $$scope: { ctx: t },
            },
          })),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            p: function (t, n) {
              var r = $(n, 1)[0],
                o = {};
              2079 & r && (o.$$scope = { dirty: r, ctx: t }), e.$set(o);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function on(t, e, n) {
        var r,
          o,
          i = tR("editor-view").view,
          a = !1,
          c = {
            maxDepth: 10,
            stopCircularRecursion: !0,
            shouldExpandNode: function () {
              return a;
            },
          },
          l = i.state,
          s = l.plugins,
          u = s[0];
        return (
          nm.subscribe(function (t) {
            t &&
              (n(8, (l = t.state)),
              n(9, (s = l.plugins)),
              n(
                0,
                (u = s.find(function (t) {
                  return t.key === (null == u ? void 0 : u.key);
                }))
              ));
          }),
          (t.$$.update = function () {
            257 & t.$$.dirty &&
              n(
                3,
                (r = (null == u ? void 0 : u.getState) ? u.getState(l) : void 0)
              ),
              768 & t.$$.dirty &&
                n(
                  4,
                  (o = s.map(function (t) {
                    return {
                      key: t.key,
                      value: t.key.toUpperCase(),
                      empty: !(t.getState && t.getState(l)),
                    };
                  }))
                );
          }),
          [
            u,
            a,
            c,
            r,
            o,
            function (t) {
              n(
                0,
                (u = s.find(function (e) {
                  return e.key === t.key;
                }))
              );
            },
            function () {
              n(1, (a = !a)),
                n(
                  2,
                  (c = Object.assign(Object.assign({}, c), {
                    shouldExpandNode: function () {
                      return a;
                    },
                  }))
                );
            },
            function () {
              (window._plugin = [u, r]),
                console.info(
                  "%c [prosemirror-dev-toolkit]: Property added to window._plugin",
                  "color: #b8e248"
                ),
                console.log(u),
                console.log(r);
            },
            l,
            s,
          ]
        );
      }
      tS(
        ".top-row.svelte-1oogal0{align-items:center;display:flex;justify-content:space-between;margin-bottom:0.5em}.left-panel.svelte-1oogal0{flex-grow:0;overflow:scroll;padding:0;min-width:190px;width:190px}.right-panel.svelte-1oogal0{border-left:1px solid rgba(255, 162, 177, 0.2)}.empty-state.svelte-1oogal0{align-items:center;color:rgb(255, 162, 177);display:flex;font-size:14px;height:100%;justify-content:center;width:100%}"
      );
      var or = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return d(this, r), tj(p((e = n.call(this))), t, on, oe, S, {}), e;
        }
        return f(r);
      })(tO);
      function oo(t) {
        var e;
        return {
          c: function () {
            e = J("log");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function oi(t) {
        var e, n, r, o, i, a, c, l;
        return (
          (i = new n4({
            props: {
              class: "hidden",
              $$slots: { default: [oo] },
              $$scope: { ctx: t },
            },
          })),
          (c = new nK({
            props: {
              class: "tree-view",
              data: t[0],
              showLogButton: !0,
              showCopyButton: !0,
              recursionOpts: { stopCircularRecursion: !0 },
            },
          })),
          {
            c: function () {
              (e = H("div")),
                (n = H("div")),
                ((r = H("h2")).textContent = "Nodes"),
                (o = G()),
                tw(i.$$.fragment),
                (a = G()),
                tw(c.$$.fragment),
                Y(n, "class", "top-row svelte-vmhtas"),
                Y(e, "slot", "left"),
                Y(e, "class", "left-panel svelte-vmhtas");
            },
            m: function (t, s) {
              F(t, e, s),
                z(e, n),
                z(n, r),
                z(n, o),
                tk(i, n, null),
                z(e, a),
                tk(c, e, null),
                (l = !0);
            },
            p: function (t, e) {
              var n = {};
              8 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
            },
            i: function (t) {
              l || (tx(i.$$.fragment, t), tx(c.$$.fragment, t), (l = !0));
            },
            o: function (t) {
              t$(i.$$.fragment, t), t$(c.$$.fragment, t), (l = !1);
            },
            d: function (t) {
              t && L(e), t_(i), t_(c);
            },
          }
        );
      }
      function oa(t) {
        var e;
        return {
          c: function () {
            e = J("log");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function oc(t) {
        var e, n, r, o, i, a, c, l;
        return (
          (i = new n4({
            props: {
              class: "hidden",
              $$slots: { default: [oa] },
              $$scope: { ctx: t },
            },
          })),
          (c = new nK({
            props: {
              class: "tree-view",
              data: t[1],
              showLogButton: !0,
              showCopyButton: !0,
              recursionOpts: { stopCircularRecursion: !0 },
            },
          })),
          {
            c: function () {
              (e = H("div")),
                (n = H("div")),
                ((r = H("h2")).textContent = "Marks"),
                (o = G()),
                tw(i.$$.fragment),
                (a = G()),
                tw(c.$$.fragment),
                Y(n, "class", "top-row svelte-vmhtas"),
                Y(e, "slot", "right"),
                Y(e, "class", "right-panel svelte-vmhtas");
            },
            m: function (t, s) {
              F(t, e, s),
                z(e, n),
                z(n, r),
                z(n, o),
                tk(i, n, null),
                z(e, a),
                tk(c, e, null),
                (l = !0);
            },
            p: function (t, e) {
              var n = {};
              8 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
            },
            i: function (t) {
              l || (tx(i.$$.fragment, t), tx(c.$$.fragment, t), (l = !0));
            },
            o: function (t) {
              t$(i.$$.fragment, t), t$(c.$$.fragment, t), (l = !1);
            },
            d: function (t) {
              t && L(e), t_(i), t_(c);
            },
          }
        );
      }
      function ol(t) {
        var e, n;
        return (
          (e = new n1({
            props: {
              $$slots: { right: [oc], left: [oi] },
              $$scope: { ctx: t },
            },
          })),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            p: function (t, n) {
              var r = $(n, 1)[0],
                o = {};
              8 & r && (o.$$scope = { dirty: r, ctx: t }), e.$set(o);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function os(t) {
        var e = tR("editor-view").view;
        return [e.state.schema.nodes, e.state.schema.marks];
      }
      tS(
        ".hidden{display:none;visibility:hidden}.top-row.svelte-vmhtas{align-items:center;display:flex;justify-content:space-between}.left-panel.svelte-vmhtas{overflow:scroll;padding:1em}.right-panel.svelte-vmhtas{border-left:1px solid rgba(255, 162, 177, 0.2);overflow:scroll;padding:1em}"
      );
      var ou = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return d(this, r), tj(p((e = n.call(this))), t, os, ol, S, {}), e;
        }
        return f(r);
      })(tO);
      function of(t, e, n) {
        var r = t.slice();
        return (r[15] = e[n]), (r[17] = n), r;
      }
      function od(t) {
        var e, n;
        return (
          (e = new ov({
            props: { node: t[15], startPos: t[5][t[17]], depth: t[1] + 1 },
          })),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            p: function (t, n) {
              var r = {};
              4 & n && (r.node = t[15]),
                32 & n && (r.startPos = t[5][t[17]]),
                2 & n && (r.depth = t[1] + 1),
                e.$set(r);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function op(t) {
        for (
          var e,
            n,
            r,
            o,
            i,
            a,
            c,
            l,
            s,
            u,
            f,
            d,
            p,
            h,
            v,
            g,
            m,
            y = t[2].content,
            b = [],
            x = 0;
          x < y.length;
          x += 1
        )
          b[x] = od(of(t, y, x));
        var w = function (t) {
          return t$(b[t], 1, 1, function () {
            b[t] = null;
          });
        };
        return {
          c: function () {
            (e = H("li")),
              (n = H("div")),
              (r = H("div")),
              (o = J(t[0])),
              (i = G()),
              (a = H("button")),
              (c = J(t[6])),
              (l = G()),
              (s = H("div")),
              (u = J(t[4])),
              (d = G()),
              (p = H("ul"));
            for (var v = 0; v < b.length; v += 1) b[v].c();
            Y(r, "class", "number-box svelte-km02vz"),
              Y(a, "aria-label", "Show node info button"),
              Y(a, "class", "svelte-km02vz"),
              tt(a, "selected", !1),
              Y(s, "class", "number-box svelte-km02vz"),
              Y(n, "class", "doc-node-body svelte-km02vz"),
              Y(n, "style", (f = "background: ".concat(t[7]))),
              Y(p, "class", "svelte-km02vz"),
              tt(p, "inline-children", t[3]),
              tt(p, "show-borders", t[1] >= 1),
              Y(
                e,
                "class",
                (h =
                  q("".concat(t[11].class || "", " doc-node")) +
                  " svelte-km02vz")
              ),
              tt(e, "root", t[8]);
          },
          m: function (f, h) {
            F(f, e, h),
              z(e, n),
              z(n, r),
              z(r, o),
              z(n, i),
              z(n, a),
              z(a, c),
              z(n, l),
              z(n, s),
              z(s, u),
              z(e, d),
              z(e, p);
            for (var y = 0; y < b.length; y += 1) b[y].m(p, null);
            (v = !0),
              g ||
                ((m = [W(a, "click", t[9]), W(a, "dblclick", t[10])]),
                (g = !0));
          },
          p: function (t, r) {
            var i = $(r, 1)[0];
            if (
              ((!v || 1 & i) && Q(o, t[0]),
              (!v || 64 & i) && Q(c, t[6]),
              (!v || 16 & i) && Q(u, t[4]),
              (!v || (128 & i && f !== (f = "background: ".concat(t[7])))) &&
                Y(n, "style", f),
              38 & i)
            ) {
              for (a = 0, y = t[2].content; a < y.length; a += 1) {
                var a,
                  l = of(t, y, a);
                b[a]
                  ? (b[a].p(l, i), tx(b[a], 1))
                  : ((b[a] = od(l)), b[a].c(), tx(b[a], 1), b[a].m(p, null));
              }
              for (ty(), a = y.length; a < b.length; a += 1) w(a);
              tb();
            }
            (!v || 8 & i) && tt(p, "inline-children", t[3]),
              (!v || 2 & i) && tt(p, "show-borders", t[1] >= 1),
              (!v ||
                (2048 & i &&
                  h !==
                    (h =
                      q("".concat(t[11].class || "", " doc-node")) +
                      " svelte-km02vz"))) &&
                Y(e, "class", h),
              (!v || 2304 & i) && tt(e, "root", t[8]);
          },
          i: function (t) {
            if (!v) {
              for (var e = 0; e < y.length; e += 1) tx(b[e]);
              v = !0;
            }
          },
          o: function (t) {
            b = b.filter(Boolean);
            for (var e = 0; e < b.length; e += 1) t$(b[e]);
            v = !1;
          },
          d: function (t) {
            t && L(e), V(b, t), (g = !1), C(m);
          },
        };
      }
      function oh(t, e, n) {
        var r,
          o,
          i,
          a,
          c,
          l,
          s = tR("doc-view"),
          u = s.colors,
          f = s.handleNodeClick,
          d = e,
          p = d.node,
          h = d.startPos,
          v = d.depth,
          g = 0 === v;
        return (
          (t.$$set = function (t) {
            n(11, (e = _(_({}, e), I(t)))),
              "node" in t && n(12, (p = t.node)),
              "startPos" in t && n(0, (h = t.startPos)),
              "depth" in t && n(1, (v = t.depth));
          }),
          (t.$$.update = function () {
            4096 & t.$$.dirty && n(2, (r = p.content)),
              4096 & t.$$.dirty && n(7, (o = u[p.type.name])),
              4096 & t.$$.dirty &&
                n(
                  6,
                  (i =
                    p.isText && p.marks.length > 0
                      ? "".concat(p.type.name, " - [").concat(
                          p.marks
                            .map(function (t) {
                              return t.type.name;
                            })
                            .join(", "),
                          "]"
                        )
                      : p.type.name)
                ),
              4097 & t.$$.dirty &&
                n(
                  5,
                  (a = Array(p.childCount)
                    .fill(void 0)
                    .reduce(function (t, e, n) {
                      if (0 === n) return [g ? 0 : h + 1];
                      var r = t[n - 1],
                        o = p.child(n - 1);
                      return [].concat(w(t), [r + o.nodeSize]);
                    }, []))
                ),
              4097 & t.$$.dirty && n(4, (c = h + p.nodeSize)),
              4 & t.$$.dirty &&
                n(
                  3,
                  (l = r.content.every(function (t) {
                    return t.isInline;
                  }))
                );
          }),
          (e = I(e)),
          [
            h,
            v,
            r,
            l,
            c,
            a,
            i,
            o,
            g,
            function () {
              f(p, h);
            },
            function () {
              f(p, h, !0);
            },
            e,
            p,
          ]
        );
      }
      tS(
        ".doc-node.svelte-km02vz{border-left:1px solid #363755;border-right:1px solid #363755;display:flex;flex-direction:column;padding:0 12px}.doc-node.root.svelte-km02vz{border:0;padding:0}.doc-node-body.svelte-km02vz{background:#363755;color:#222;display:flex;font-size:13px;margin-top:3px}.number-box.svelte-km02vz{padding:3px 6px;background:rgba(255, 255, 255, 0.3)}button.svelte-km02vz{background:transparent;border:0;color:#222;cursor:pointer;display:flex;height:100%;padding:3px 9px;white-space:pre;width:100%}button.svelte-km02vz:hover{background:rgba(255, 162, 177, 0.4);color:#fff}button.selected.svelte-km02vz{background:rgba(255, 162, 177, 0.4)}ul.svelte-km02vz{list-style:none;margin:0;padding:0}ul.show-borders.svelte-km02vz{border-left:1px solid rgb(96, 76, 104);border-right:1px solid rgb(96, 76, 104)}.inline-children.svelte-km02vz{border-left:1px solid rgb(96, 76, 104);border-right:1px solid rgb(96, 76, 104);display:flex;flex-wrap:wrap;padding:0 12px}.inline-children.svelte-km02vz>.doc-node{flex-grow:1;padding:0}"
      );
      var ov = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return (
            d(this, r),
            tj(p((e = n.call(this))), t, oh, op, S, {
              node: 12,
              startPos: 0,
              depth: 1,
            }),
            e
          );
        }
        return f(r);
      })(tO);
      let og = [
        "#EA7C7F",
        "#67B0C6",
        "#94BB7F",
        "#CA9EDB",
        "#DCDC5D",
        "#B9CC7C",
        "#DD97D8",
        "#FFB761",
        "#4D8FD1",
        "#F36E98",
        "#E45F44",
        "#A6A4AE",
        "#FCC047",
        "#FFC129",
        "#D3929C",
        "#4CBCD4",
        "#8D7BC0",
      ];
      function om(t) {
        var e, n, r;
        return (
          (n = new ov({
            props: { class: t[1].class, node: t[0], startPos: 0, depth: 0 },
          })),
          {
            c: function () {
              (e = H("ul")), tw(n.$$.fragment), Y(e, "class", "svelte-is7zuw");
            },
            m: function (t, o) {
              F(t, e, o), tk(n, e, null), (r = !0);
            },
            p: function (t, e) {
              var r = $(e, 1)[0],
                o = {};
              2 & r && (o.class = t[1].class),
                1 & r && (o.node = t[0]),
                n.$set(o);
            },
            i: function (t) {
              r || (tx(n.$$.fragment, t), (r = !0));
            },
            o: function (t) {
              t$(n.$$.fragment, t), (r = !1);
            },
            d: function (t) {
              t && L(e), t_(n);
            },
          }
        );
      }
      function oy(t, e, n) {
        var r = e,
          o = r.doc,
          i = r.schema,
          a = r.selected,
          c = void 0 === a ? { type: "", start: 0, end: 0 } : a,
          l = r.handleNodeSelect;
        return (
          tC("doc-view", {
            selected: c,
            colors: Object.keys(i.nodes).reduce((t, e, n) => {
              let r =
                n >= og.length
                  ? (function (t, e) {
                      let n = t / e;
                      return Math.round(e * (n - Math.floor(n)));
                    })(n, og.length)
                  : n;
              return (t[e] = og[r]), t;
            }, {}),
            handleNodeClick: l,
          }),
          (t.$$set = function (t) {
            n(1, (e = _(_({}, e), I(t)))),
              "doc" in t && n(0, (o = t.doc)),
              "schema" in t && n(2, (i = t.schema)),
              "selected" in t && n(3, (c = t.selected)),
              "handleNodeSelect" in t && n(4, (l = t.handleNodeSelect));
          }),
          (e = I(e)),
          [o, e, i, c, l]
        );
      }
      tS("ul.svelte-is7zuw{list-style:none;margin:0;padding:0}");
      var ob = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return (
            d(this, r),
            tj(p((e = n.call(this))), t, oy, om, S, {
              doc: 0,
              schema: 2,
              selected: 3,
              handleNodeSelect: 4,
            }),
            e
          );
        }
        return f(r);
      })(tO);
      function ox(t) {
        var e;
        return {
          c: function () {
            e = J("log");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function o$(t) {
        var e, n, r, o, i, a, c, l;
        return (
          (i = new n4({
            props: {
              class: "hidden",
              $$slots: { default: [ox] },
              $$scope: { ctx: t },
            },
          })),
          (c = new ob({
            props: {
              class: "m-top",
              doc: t[0],
              schema: t[2],
              handleNodeSelect: t[3],
            },
          })),
          {
            c: function () {
              (e = H("div")),
                (n = H("div")),
                ((r = H("h2")).textContent = "Current doc"),
                (o = G()),
                tw(i.$$.fragment),
                (a = G()),
                tw(c.$$.fragment),
                Y(n, "class", "top-row svelte-uwxe50"),
                Y(e, "slot", "left"),
                Y(e, "class", "left-panel");
            },
            m: function (t, s) {
              F(t, e, s),
                z(e, n),
                z(n, r),
                z(n, o),
                tk(i, n, null),
                z(e, a),
                tk(c, e, null),
                (l = !0);
            },
            p: function (t, e) {
              var n = {};
              256 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
              var r = {};
              1 & e && (r.doc = t[0]), c.$set(r);
            },
            i: function (t) {
              l || (tx(i.$$.fragment, t), tx(c.$$.fragment, t), (l = !0));
            },
            o: function (t) {
              t$(i.$$.fragment, t), t$(c.$$.fragment, t), (l = !1);
            },
            d: function (t) {
              t && L(e), t_(i), t_(c);
            },
          }
        );
      }
      function ow(t) {
        var e;
        return {
          c: function () {
            e = J("log");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function ok(t) {
        var e, n, r, o, i, a, c, l;
        return (
          (i = new n4({
            props: { $$slots: { default: [ow] }, $$scope: { ctx: t } },
          })).$on("click", t[4]),
          (c = new nK({
            props: {
              class: "m-top",
              data: t[1],
              recursionOpts: { shouldExpandNode: oj },
            },
          })),
          {
            c: function () {
              (e = H("div")),
                (n = H("div")),
                ((r = H("h2")).textContent = "Node info"),
                (o = G()),
                tw(i.$$.fragment),
                (a = G()),
                tw(c.$$.fragment),
                Y(n, "class", "top-row svelte-uwxe50"),
                Y(e, "slot", "right"),
                Y(e, "class", "right-panel svelte-uwxe50");
            },
            m: function (t, s) {
              F(t, e, s),
                z(e, n),
                z(n, r),
                z(n, o),
                tk(i, n, null),
                z(e, a),
                tk(c, e, null),
                (l = !0);
            },
            p: function (t, e) {
              var n = {};
              256 & e && (n.$$scope = { dirty: e, ctx: t }), i.$set(n);
              var r = {};
              2 & e && (r.data = t[1]), c.$set(r);
            },
            i: function (t) {
              l || (tx(i.$$.fragment, t), tx(c.$$.fragment, t), (l = !0));
            },
            o: function (t) {
              t$(i.$$.fragment, t), t$(c.$$.fragment, t), (l = !1);
            },
            d: function (t) {
              t && L(e), t_(i), t_(c);
            },
          }
        );
      }
      function o_(t) {
        var e, n;
        return (
          (e = new n1({
            props: {
              $$slots: { right: [ok], left: [o$] },
              $$scope: { ctx: t },
            },
          })),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            p: function (t, n) {
              var r = $(n, 1)[0],
                o = {};
              259 & r && (o.$$scope = { dirty: r, ctx: t }), e.$set(o);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      tS(
        ".hidden{display:none;visibility:hidden}.top-row.svelte-uwxe50{align-items:center;display:flex;justify-content:space-between}.right-panel.svelte-uwxe50{border-left:1px solid rgba(255, 162, 177, 0.2);flex-grow:0;min-width:220px;width:220px}.split-view .m-top{margin-top:0.5em}"
      );
      var oj = function (t) {
        return "array" !== t.type || t.value.length <= 50;
      };
      function oO(t, e, n) {
        var r,
          o,
          i = tR("editor-view").view,
          a = i.state.doc,
          c = { node: i.state.doc, pos: 0 },
          l = i.state.schema;
        return (
          nm.subscribe(function (t) {
            t &&
              (t.trs.forEach(function (t) {
                n(5, (c.pos = t.mapping.map(c.pos)), c);
              }),
              clearTimeout(o),
              (o = setTimeout(function () {
                n(0, (a = t.state.doc));
                var e = c.pos;
                try {
                  var r = a.nodeAt(e);
                  n(5, (c = { node: r || a, pos: r ? e : 0 }));
                } catch (t) {}
              }, 100)));
          }),
          (t.$$.update = function () {
            32 & t.$$.dirty && n(1, (r = c.node.toJSON()));
          }),
          [
            a,
            r,
            l,
            function (t, e) {
              var r,
                o =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              if ((n(5, (c = { node: t, pos: e })), o)) {
                for (var a = i.nodeDOM(e); a && !(a instanceof HTMLElement); )
                  a = a.parentElement;
                if (a && "none" !== getComputedStyle(a).display) {
                  var l = (function t(e) {
                    return e && e !== document.body
                      ? e.scrollHeight !== e.clientHeight
                        ? e
                        : t(e.parentElement)
                      : void 0;
                  })(i.dom);
                  if (l) {
                    var s = l.scrollTop,
                      u = l.offsetTop - window.scrollY,
                      f = l.getBoundingClientRect().top - u,
                      d = a.getBoundingClientRect().top - u,
                      p = l.clientHeight / 2;
                    l.scroll(0, s + f + d - p);
                  }
                  var h = i.coordsAtPos(e).top,
                    v =
                      (null ===
                        (r = document.querySelector(".floating-dock")) ||
                      void 0 === r
                        ? void 0
                        : r.clientHeight) || 0;
                  window.scroll(0, h - v + a.clientHeight + window.scrollY);
                }
              }
            },
            function () {
              console.log(c),
                (window._node = c),
                console.info(
                  "%c [prosemirror-dev-toolkit]: Property added to window._node",
                  "color: #b8e248"
                );
            },
            c,
          ]
        );
      }
      var oC = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return d(this, r), tj(p((e = n.call(this))), t, oO, o_, S, {}), e;
        }
        return f(r);
      })(tO);
      function oR(t, e, n) {
        var r = t.slice();
        return (r[23] = e[n]), r;
      }
      function oS(t) {
        var e,
          n,
          r,
          o,
          i = t[23].name + "";
        function a() {
          return t[16](t[23]);
        }
        return {
          c: function () {
            (e = H("button")),
              (n = J(i)),
              Y(e, "class", "unstyled-btn svelte-969ox4"),
              Y(e, "aria-label", "Edit snapshot name button");
          },
          m: function (t, i) {
            F(t, e, i), z(e, n), r || ((o = W(e, "dblclick", a)), (r = !0));
          },
          p: function (e, r) {
            (t = e), 1 & r && i !== (i = t[23].name + "") && Q(n, i);
          },
          d: function (t) {
            t && L(e), (r = !1), o();
          },
        };
      }
      function oE(t) {
        var e, n, r, o;
        return {
          c: function () {
            ((e = H("input")).value = n = t[2].name),
              Y(e, "class", "svelte-969ox4");
          },
          m: function (n, i) {
            F(n, e, i),
              r ||
                ((o = [W(e, "input", t[5]), W(e, "keypress", t[6])]), (r = !0));
          },
          p: function (t, r) {
            4 & r && n !== (n = t[2].name) && e.value !== n && (e.value = n);
          },
          d: function (t) {
            t && L(e), (r = !1), C(o);
          },
        };
      }
      function oD(t) {
        var e;
        return {
          c: function () {
            e = J("Show");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function oA(t) {
        var e;
        return {
          c: function () {
            e = J("Hide");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function oP(t) {
        var e;
        return {
          c: function () {
            e = J("Delete");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function oN(t) {
        var e;
        return {
          c: function () {
            e = J("Confirm Delete");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          d: function (t) {
            t && L(e);
          },
        };
      }
      function oM(t) {
        function e(t, e) {
          return t[2] && t[2].timestamp === t[23].timestamp ? oE : oS;
        }
        var n,
          r,
          o,
          i,
          a,
          c,
          l,
          s,
          u,
          f,
          d,
          p,
          h = e(t),
          v = h(t);
        function g(t, e) {
          var n;
          return (null === (n = t[1]) || void 0 === n
            ? void 0
            : n.timestamp) === t[23].timestamp
            ? oA
            : oD;
        }
        var m = g(t),
          y = m(t);
        function b() {
          return t[17](t[23]);
        }
        function x() {
          return t[18](t[23]);
        }
        function $() {
          return t[19](t[23]);
        }
        function w(t, e) {
          var n;
          return (null === (n = t[3]) || void 0 === n
            ? void 0
            : n.timestamp) === t[23].timestamp
            ? oN
            : oP;
        }
        var k = w(t),
          _ = k(t);
        function j() {
          return t[20](t[23]);
        }
        return {
          c: function () {
            (n = H("li")),
              v.c(),
              (r = G()),
              (o = H("button")),
              y.c(),
              (i = G()),
              ((a = H("button")).textContent = "Restore"),
              (c = G()),
              ((l = H("button")).textContent = "Export"),
              (s = G()),
              (u = H("button")),
              _.c(),
              (f = G()),
              Y(o, "class", "snapshot-btn ml-2 svelte-969ox4"),
              Y(a, "class", "snapshot-btn svelte-969ox4"),
              Y(l, "class", "snapshot-btn svelte-969ox4"),
              Y(u, "class", "snapshot-btn svelte-969ox4"),
              Y(n, "class", "svelte-969ox4");
          },
          m: function (t, e) {
            F(t, n, e),
              v.m(n, null),
              z(n, r),
              z(n, o),
              y.m(o, null),
              z(n, i),
              z(n, a),
              z(n, c),
              z(n, l),
              z(n, s),
              z(n, u),
              _.m(u, null),
              z(n, f),
              d ||
                ((p = [
                  W(o, "click", b),
                  W(a, "click", x),
                  W(l, "click", $),
                  W(u, "click", j),
                ]),
                (d = !0));
          },
          p: function (i, a) {
            h === (h = e((t = i))) && v
              ? v.p(t, a)
              : (v.d(1), (v = h(t)) && (v.c(), v.m(n, r))),
              m !== (m = g(t)) && (y.d(1), (y = m(t)) && (y.c(), y.m(o, null))),
              k !== (k = w(t)) && (_.d(1), (_ = k(t)) && (_.c(), _.m(u, null)));
          },
          d: function (t) {
            t && L(n), v.d(), y.d(), _.d(), (d = !1), C(p);
          },
        };
      }
      function oB(t) {
        for (var e, n = t[0], r = [], o = 0; o < n.length; o += 1)
          r[o] = oM(oR(t, n, o));
        return {
          c: function () {
            e = H("ul");
            for (var t = 0; t < r.length; t += 1) r[t].c();
            Y(e, "class", "svelte-969ox4");
          },
          m: function (t, n) {
            F(t, e, n);
            for (var o = 0; o < r.length; o += 1) r[o].m(e, null);
          },
          p: function (t, o) {
            var i = $(o, 1)[0];
            if (2047 & i) {
              for (a = 0, n = t[0]; a < n.length; a += 1) {
                var a,
                  c = oR(t, n, a);
                r[a]
                  ? r[a].p(c, i)
                  : ((r[a] = oM(c)), r[a].c(), r[a].m(e, null));
              }
              for (; a < r.length; a += 1) r[a].d(1);
              r.length = n.length;
            }
          },
          i: k,
          o: k,
          d: function (t) {
            t && L(e), V(r, t);
          },
        };
      }
      function oT(t, e, n) {
        var r,
          o,
          i,
          a = e.snapshots,
          c = void 0 === a ? [] : a,
          l = e.selectedSnapshot,
          s = void 0 === l ? void 0 : l,
          u = e.onUpdate,
          f = e.onView,
          d = e.onRestore,
          p = e.onExport,
          h = e.onDelete,
          v = function () {
            clearTimeout(i),
              (i = setTimeout(function () {
                u(r);
              }, 150));
          };
        function g(t) {
          n(2, (r = t)), n(3, (o = void 0));
        }
        function m(t) {
          (null == s ? void 0 : s.timestamp) === t.timestamp ? f() : f(t),
            n(3, (o = void 0));
        }
        function y(t) {
          d(t), n(3, (o = void 0));
        }
        function b(t) {
          p(t), n(3, (o = void 0));
        }
        function x(t) {
          o && o.timestamp === t.timestamp
            ? (h(t), n(3, (o = void 0)))
            : n(3, (o = t));
        }
        return (
          (t.$$set = function (t) {
            "snapshots" in t && n(0, (c = t.snapshots)),
              "selectedSnapshot" in t && n(1, (s = t.selectedSnapshot)),
              "onUpdate" in t && n(11, (u = t.onUpdate)),
              "onView" in t && n(12, (f = t.onView)),
              "onRestore" in t && n(13, (d = t.onRestore)),
              "onExport" in t && n(14, (p = t.onExport)),
              "onDelete" in t && n(15, (h = t.onDelete));
          }),
          [
            c,
            s,
            r,
            o,
            g,
            function (t) {
              r && (n(2, (r.name = t.target.value), r), v());
            },
            function (t) {
              "Enter" === t.key &&
                r &&
                (u(r), clearTimeout(i), n(2, (r = void 0)), n(3, (o = void 0)));
            },
            m,
            y,
            b,
            x,
            u,
            f,
            d,
            p,
            h,
            function (t) {
              return g(t);
            },
            function (t) {
              return m(t);
            },
            function (t) {
              return y(t);
            },
            function (t) {
              return b(t);
            },
            function (t) {
              return x(t);
            },
          ]
        );
      }
      tS(
        "ul.svelte-969ox4.svelte-969ox4{color:#fff;list-style:none;margin:0;padding:0;height:100%;width:100%}li.svelte-969ox4+li.svelte-969ox4{border-top:1px solid rgb(96, 76, 104)}li.svelte-969ox4.svelte-969ox4{align-items:center;display:flex;font-family:monospace;padding:6px 18px}input.svelte-969ox4.svelte-969ox4{background:transparent;border:0;color:#fff;height:100%;margin:0;padding:2px;width:100%}.unstyled-btn.svelte-969ox4.svelte-969ox4{background:transparent;border:0;color:#fff;cursor:pointer;display:block;font-family:monospace;margin:0;padding:0;text-align:start;width:100%}.snapshot-btn.svelte-969ox4.svelte-969ox4{background:transparent;border:0;border-radius:3px;color:#d3d3d9;cursor:pointer;display:flex;font-size:11px;padding:6px 18px;text-transform:uppercase}.snapshot-btn.svelte-969ox4.svelte-969ox4:hover{background:rgba(255, 162, 177, 0.4);color:#fff}.ml-2.svelte-969ox4.svelte-969ox4{margin-left:1rem}"
      );
      var oI = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return (
            d(this, r),
            tj(p((e = n.call(this))), t, oT, oB, S, {
              snapshots: 0,
              selectedSnapshot: 1,
              onUpdate: 11,
              onView: 12,
              onRestore: 13,
              onExport: 14,
              onDelete: 15,
            }),
            e
          );
        }
        return f(r);
      })(tO);
      function oq(t) {
        var e, n;
        return (
          (e = new oI({
            props: {
              snapshots: t[0],
              selectedSnapshot: t[1],
              onUpdate: tV,
              onView: t[4],
              onRestore: t[3],
              onExport: tH,
              onDelete: tU,
            },
          })),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            p: function (t, n) {
              var r = {};
              1 & n && (r.snapshots = t[0]),
                2 & n && (r.selectedSnapshot = t[1]),
                e.$set(r);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function oz(t) {
        var e;
        return {
          c: function () {
            ((e = H("div")).textContent =
              'Save snapshots by clicking "Save" button.'),
              Y(e, "class", "no-snapshots svelte-3bfy1p");
          },
          m: function (t, n) {
            F(t, e, n);
          },
          p: k,
          i: k,
          o: k,
          d: function (t) {
            t && L(e);
          },
        };
      }
      function oF(t) {
        var e,
          n,
          r,
          o,
          i = [oz, oq],
          a = [];
        function c(t, e) {
          return 0 === t[0].length ? 0 : 1;
        }
        return (
          (r = a[(n = c(t))] = i[n](t)),
          {
            c: function () {
              (e = H("div")),
                r.c(),
                Y(e, "slot", "right"),
                Y(e, "class", "right-panel svelte-3bfy1p");
            },
            m: function (t, r) {
              F(t, e, r), a[n].m(e, null), (o = !0);
            },
            p: function (t, o) {
              var l = n;
              (n = c(t)) === l
                ? a[n].p(t, o)
                : (ty(),
                  t$(a[l], 1, 1, function () {
                    a[l] = null;
                  }),
                  tb(),
                  (r = a[n]) ? r.p(t, o) : (r = a[n] = i[n](t)).c(),
                  tx(r, 1),
                  r.m(e, null));
            },
            i: function (t) {
              o || (tx(r), (o = !0));
            },
            o: function (t) {
              t$(r), (o = !1);
            },
            d: function (t) {
              t && L(e), a[n].d();
            },
          }
        );
      }
      function oL(t) {
        var e, n;
        return (
          (e = new n1({
            props: { $$slots: { right: [oF] }, $$scope: { ctx: t } },
          })),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            p: function (t, n) {
              var r = $(n, 1)[0],
                o = {};
              35 & r && (o.$$scope = { dirty: r, ctx: t }), e.$set(o);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function oV(t, e, n) {
        A(t, tT, function (t) {
          return n(0, (r = t));
        }),
          A(t, tI, function (t) {
            return n(1, (o = t));
          });
        var r,
          o,
          i = tR("editor-view").view;
        return [
          r,
          o,
          i,
          function (t) {
            tF(i, t.doc), tq.set(void 0), tI.set(void 0), ny();
          },
          function (t) {
            return (function (t, e) {
              if (e) {
                let n = D(tq);
                n || tq.set(t.state), tF(t, e.doc);
              } else {
                let e = D(tq);
                e
                  ? t.updateState(e)
                  : console.error("No previous state to restore!"),
                  tq.set(void 0);
              }
              tI.set(e);
            })(i, t);
          },
        ];
      }
      tS(
        ".right-panel.svelte-3bfy1p{padding:0}.no-snapshots.svelte-3bfy1p{align-items:center;color:rgb(255, 162, 177);display:flex;font-size:14px;height:100%;justify-content:center;width:100%}"
      );
      var oH = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return d(this, r), tj(p((e = n.call(this))), t, oV, oL, S, {}), e;
        }
        return f(r);
      })(tO);
      function oU(t) {
        var e;
        return {
          c: function () {
            (e = H("p")).textContent = "nuting here";
          },
          m: function (t, n) {
            F(t, e, n);
          },
          i: k,
          o: k,
          d: function (t) {
            t && L(e);
          },
        };
      }
      function oJ(t) {
        var e, n;
        return (
          (e = new oH({})),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function oG(t) {
        var e, n;
        return (
          (e = new oC({})),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function oK(t) {
        var e, n;
        return (
          (e = new ou({})),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function oW(t) {
        var e, n;
        return (
          (e = new or({})),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function oY(t) {
        var e, n;
        return (
          (e = new rQ({})),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function oZ(t) {
        var e, n;
        return (
          (e = new ro({})),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function oQ(t) {
        (n = new tW({ props: { isOpen: t[5] } })).$on("submit", t[12]),
          n.$on("close", t[11]),
          (w = new tQ({ props: { onClickTab: t[14], active: t[1] } }));
        var e,
          n,
          r,
          o,
          i,
          a,
          c,
          l,
          s,
          u,
          f,
          d,
          p,
          h,
          v,
          g,
          m,
          y,
          b,
          x,
          w,
          k,
          _,
          j,
          O,
          S,
          E,
          D,
          A = [oZ, oY, oW, oK, oG, oJ, oU],
          P = [];
        function N(t, e) {
          return "state" === t[1]
            ? 0
            : "history" === t[1]
            ? 1
            : "plugins" === t[1]
            ? 2
            : "schema" === t[1]
            ? 3
            : "structure" === t[1]
            ? 4
            : "snapshots" === t[1]
            ? 5
            : 6;
        }
        return (
          (j = P[(_ = N(t))] = A[_](t)),
          {
            c: function () {
              (e = H("div")),
                tw(n.$$.fragment),
                (r = G()),
                (o = H("div")),
                (i = H("div")),
                (a = G()),
                (c = H("div")),
                (l = H("div")),
                ((s = H("button")).textContent = "Copy"),
                (u = G()),
                ((f = H("button")).textContent = "Save"),
                (d = G()),
                ((p = H("button")).textContent = "Import"),
                (h = G()),
                ((v = H("button")).textContent = "Paste"),
                (g = G()),
                ((m = H("button")).textContent = "X"),
                (y = G()),
                (b = H("input")),
                (x = G()),
                tw(w.$$.fragment),
                (k = G()),
                j.c(),
                Y(i, "class", "resizing-div svelte-1r4ymhu"),
                Y(s, "class", "copy-btn svelte-1r4ymhu"),
                Y(f, "class", "save-btn svelte-1r4ymhu"),
                Y(p, "class", "import-btn svelte-1r4ymhu"),
                Y(v, "class", "paste-btn svelte-1r4ymhu"),
                Y(m, "class", "close-btn svelte-1r4ymhu"),
                Y(m, "aria-label", "Close dev-toolkit"),
                b.style.setProperty("display", "none", ""),
                Y(b, "type", "file"),
                Y(b, "accept", ".json"),
                (b.multiple = !0),
                Y(c, "class", "container svelte-1r4ymhu"),
                Y(o, "class", "floating-dock svelte-1r4ymhu"),
                Y(
                  o,
                  "style",
                  (O = "top: ".concat(t[2], "%; height: ").concat(t[3], "%;"))
                ),
                Y(e, "class", "floating-dock-wrapper svelte-1r4ymhu");
            },
            m: function ($, j) {
              F($, e, j),
                tk(n, e, null),
                z(e, r),
                z(e, o),
                z(o, i),
                z(o, a),
                z(o, c),
                z(c, l),
                z(l, s),
                z(l, u),
                z(l, f),
                z(l, d),
                z(l, p),
                z(l, h),
                z(l, v),
                z(l, g),
                z(l, m),
                z(c, y),
                z(c, b),
                t[15](b),
                z(c, x),
                tk(w, c, null),
                z(c, k),
                P[_].m(c, null),
                (S = !0),
                E ||
                  ((D = [
                    W(i, "mousedown", t[6]),
                    W(s, "click", t[7]),
                    W(f, "click", t[8]),
                    W(p, "click", t[9]),
                    W(v, "click", t[10]),
                    W(m, "click", function () {
                      R(t[0]) && t[0].apply(this, arguments);
                    }),
                    W(b, "change", t[13]),
                  ]),
                  (E = !0));
            },
            p: function (e, r) {
              var i = $(r, 1)[0];
              t = e;
              var a = {};
              32 & i && (a.isOpen = t[5]), n.$set(a);
              var l = {};
              2 & i && (l.active = t[1]), w.$set(l);
              var s = _;
              (_ = N(t)) !== s &&
                (ty(),
                t$(P[s], 1, 1, function () {
                  P[s] = null;
                }),
                tb(),
                (j = P[_]) || (j = P[_] = A[_](t)).c(),
                tx(j, 1),
                j.m(c, null)),
                (!S ||
                  (12 & i &&
                    O !==
                      (O = "top: "
                        .concat(t[2], "%; height: ")
                        .concat(t[3], "%;")))) &&
                  Y(o, "style", O);
            },
            i: function (t) {
              S ||
                (tx(n.$$.fragment, t), tx(w.$$.fragment, t), tx(j), (S = !0));
            },
            o: function (t) {
              t$(n.$$.fragment, t), t$(w.$$.fragment, t), t$(j), (S = !1);
            },
            d: function (r) {
              r && L(e), t_(n), t[15](null), t_(w), P[_].d(), (E = !1), C(D);
            },
          }
        );
      }
      function oX(t, e, n) {
        var r,
          o = e.onClose,
          i = tR("editor-view").view,
          a = "state",
          c = 50,
          l = 50,
          s = !1;
        function u(t) {
          t.preventDefault(),
            n(2, (c = (100 * t.clientY) / window.innerHeight)),
            n(3, (l = 100 * (1 - t.clientY / window.innerHeight)));
        }
        function f(t) {
          t.preventDefault(),
            document.removeEventListener("mousemove", u),
            document.removeEventListener("mouseup", f);
        }
        return (
          te().$$.on_destroy.push(function () {
            document.removeEventListener("mousemove", u),
              document.removeEventListener("mouseup", f);
          }),
          (t.$$set = function (t) {
            "onClose" in t && n(0, (o = t.onClose));
          }),
          [
            o,
            a,
            c,
            l,
            r,
            s,
            function () {
              document.addEventListener("mousemove", u),
                document.addEventListener("mouseup", f);
            },
            function () {
              navigator.clipboard.writeText(
                JSON.stringify(i.state.doc.toJSON())
              );
            },
            function () {
              var t = new Date().toLocaleString("sv"),
                e = prompt("Enter snapshot name", t);
              e && tL(e, i.state.doc.toJSON());
            },
            function () {
              r.click();
            },
            function () {
              n(5, (s = !s));
            },
            function () {
              n(5, (s = !1));
            },
            function (t) {
              tL(new Date().toLocaleString("sv"), t.detail.doc), n(5, (s = !1));
            },
            function (t) {
              Array.from(t.target.files || []).forEach(function (t) {
                var e = new FileReader();
                e.readAsText(t),
                  (e.onload = function (e) {
                    var n,
                      r,
                      o =
                        "string" ==
                        typeof (null === (n = e.target) || void 0 === n
                          ? void 0
                          : n.result)
                          ? null === (r = e.target) || void 0 === r
                            ? void 0
                            : r.result
                          : "";
                    try {
                      var a = JSON.parse(o);
                      if (!a || "object" !== g(a))
                        throw Error(
                          "Imported snapshot was not a JSON object" + a
                        );
                      var c = t.name.slice(0, t.name.lastIndexOf("."));
                      !(function (t, e, n) {
                        let r = n.nodeFromJSON(e),
                          o = {
                            name: t,
                            timestamp: Date.now(),
                            doc: r.toJSON(),
                          };
                        tT.update((t) => [o, ...t]);
                      })(c, a, i.state.schema);
                    } catch (t) {
                      console.error("Failed to import snapshot: " + t);
                    }
                  });
              });
            },
            function (t) {
              n(1, (a = t));
            },
            function (t) {
              tl[t ? "unshift" : "push"](function () {
                n(4, (r = t));
              });
            },
          ]
        );
      }
      tS(
        ".floating-dock-wrapper.svelte-1r4ymhu{position:fixed;width:0px;height:0px;top:0px;left:0px;z-index:99999999}.floating-dock.svelte-1r4ymhu{background-color:#363755;position:fixed;z-index:1;box-shadow:rgba(34, 34, 34, 0.3) 0px 0px 4px 0px;left:0px;top:50%;width:100%;height:50%}.resizing-div.svelte-1r4ymhu{position:absolute;z-index:2;opacity:0;top:-5px;height:10px;left:0px;width:100%;cursor:row-resize}.container.svelte-1r4ymhu{height:100%}button.svelte-1r4ymhu{background:rgba(255, 162, 177, 0.6);border:0;border-radius:3px;color:#fff;cursor:pointer;font-size:12px;height:24px;line-height:25px;padding:0 6px;position:absolute}button.svelte-1r4ymhu:hover{background:rgba(255, 162, 177, 0.8)}.copy-btn.svelte-1r4ymhu{right:173px;top:-28px}.save-btn.svelte-1r4ymhu{right:129px;top:-28px}.import-btn.svelte-1r4ymhu{right:79px;top:-28px}.paste-btn.svelte-1r4ymhu{right:32px;top:-28px}.close-btn.svelte-1r4ymhu{font-size:var(--font-medium);right:4px;top:-28px;width:24px}"
      );
      var o0 = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return (
            d(this, r),
            tj(p((e = n.call(this))), t, oX, oQ, S, { onClose: 0 }),
            e
          );
        }
        return f(r);
      })(tO);
      function o1(t) {
        var e, n;
        return (
          (e = new tA({ props: { buttonPosition: t[1] } })).$on("click", t[2]),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            p: function (t, n) {
              var r = {};
              2 & n && (r.buttonPosition = t[1]), e.$set(r);
            },
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function o2(t) {
        var e, n;
        return (
          (e = new o0({ props: { onClose: t[3] } })),
          {
            c: function () {
              tw(e.$$.fragment);
            },
            m: function (t, r) {
              tk(e, t, r), (n = !0);
            },
            p: k,
            i: function (t) {
              n || (tx(e.$$.fragment, t), (n = !0));
            },
            o: function (t) {
              t$(e.$$.fragment, t), (n = !1);
            },
            d: function (t) {
              t_(e, t);
            },
          }
        );
      }
      function o5(t) {
        var e,
          n,
          r,
          o,
          i = [o2, o1],
          a = [];
        return (
          (r = a[(n = t[0] ? 0 : 1)] = i[n](t)),
          {
            c: function () {
              (e = H("section")),
                r.c(),
                Y(e, "class", "dev-tools svelte-1g07t8b");
            },
            m: function (t, r) {
              F(t, e, r), a[n].m(e, null), (o = !0);
            },
            p: function (t, o) {
              var c = $(o, 1)[0],
                l = n;
              (n = t[0] ? 0 : 1) === l
                ? a[n].p(t, c)
                : (ty(),
                  t$(a[l], 1, 1, function () {
                    a[l] = null;
                  }),
                  tb(),
                  (r = a[n]) ? r.p(t, c) : (r = a[n] = i[n](t)).c(),
                  tx(r, 1),
                  r.m(e, null));
            },
            i: function (t) {
              o || (tx(r), (o = !0));
            },
            o: function (t) {
              t$(r), (o = !1);
            },
            d: function (t) {
              t && L(e), a[n].d();
            },
          }
        );
      }
      function o4(t, e, n) {
        var r = e.view,
          o = e.devToolsExpanded,
          i = void 0 !== o && o,
          a = e.buttonPosition,
          c = void 0 === a ? "bottom-right" : a;
        return (
          tC("editor-view", {
            view: r,
            execCmd: function (t) {
              t(r.state, r.dispatch);
            },
            replaceEditorContent: function (t) {
              var e = r.state.tr;
              e.replaceWith(0, r.state.doc.nodeSize - 2, t.doc.content),
                r.dispatch(e);
            },
          }),
          tn(function () {
            var t = document && document.querySelector("html");
            i && t && (t.style.paddingBottom = "341px");
          }),
          (t.$$set = function (t) {
            "view" in t && n(4, (r = t.view)),
              "devToolsExpanded" in t && n(0, (i = t.devToolsExpanded)),
              "buttonPosition" in t && n(1, (c = t.buttonPosition));
          }),
          [
            i,
            c,
            function () {
              n(0, (i = !0));
              var t = document && document.querySelector("html");
              t && (t.style.paddingBottom = "341px");
            },
            function () {
              n(0, (i = !1));
              var t = document && document.querySelector("html");
              t && (t.style.paddingBottom = "");
            },
            r,
          ]
        );
      }
      tS(
        ".svelte-1g07t8b{--font-sans:Helvetica Neue, Calibri Light, Roboto, sans-serif;--font-small:11px;--font-medium:13px;--font-large:16px;--height-tabs-menu:48px}.dev-tools.svelte-1g07t8b{font-family:var(--font-sans);font-size:var(--font-medium);--tree-view-base00:#363755;--tree-view-base01:#604d49;--tree-view-base02:#6d5a55;--tree-view-base03:#d1929b;--tree-view-base04:#b79f8d;--tree-view-base05:#f9f8f2;--tree-view-base06:#f7f4f1;--tree-view-base07:#faf8f5;--tree-view-base08:#fa3e7e;--tree-view-base09:#fd993c;--tree-view-base0A:#f6bf81;--tree-view-base0B:#b8e248;--tree-view-base0C:#b4efe4;--tree-view-base0D:#85d9ef;--tree-view-base0E:#be87ff;--tree-view-base0F:#d6724c}"
      );
      var o3 = (function (t) {
        v(r, t);
        var e,
          n =
            ((e = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                n = y(r);
              if (e) {
                var o = y(this).constructor;
                t = Reflect.construct(n, arguments, o);
              } else t = n.apply(this, arguments);
              return m(this, t);
            });
        function r(t) {
          var e;
          return (
            d(this, r),
            tj(p((e = n.call(this))), t, o4, o5, S, {
              view: 4,
              devToolsExpanded: 0,
              buttonPosition: 1,
            }),
            e
          );
        }
        return f(r);
      })(tO);
      let o6 = !1,
        o7,
        o9 = (t, e) => (n) => {
          let r = t.state,
            o = t.state.applyTransaction(n);
          if (e) {
            let r = t.state.applyTransaction.bind(t.state);
            (t.state.applyTransaction = function (e) {
              return e !== n
                ? ((t.state.applyTransaction = r),
                  Reflect.apply(r, t.state, arguments))
                : o;
            }),
              e(n);
          } else t.updateState(o.state);
          o6 &&
            o.transactions.length > 0 &&
            (function (t, e, n) {
              let r = D(nv),
                o = D(ng)[0],
                i = r.get((null == o ? void 0 : o.topEntryId) || ""),
                a = (function (t, e, n, r) {
                  var o, i, a, s;
                  let u = c.PW.fromSchema(e.schema),
                    f = e.selection,
                    d = u.serializeFragment(f.content().content),
                    p = [];
                  if (d) {
                    let t = d.firstChild;
                    for (; t; ) p.push(t.outerHTML), (t = t.nextSibling);
                  }
                  let h = r ? r.state : n,
                    v =
                      ((o = h.doc.toJSON()),
                      (i = e.doc.toJSON()),
                      nl.diff(o, i)),
                    g =
                      ((a = nu(h.selection)),
                      (s = nu(e.selection)),
                      nl.diff(a, s));
                  return {
                    id: Math.random().toString() + Math.random().toString(),
                    state: e,
                    trs: t.map((t) =>
                      Object.keys(t)
                        .concat(ns)
                        .reduce((e, n) => ((e[n] = t[n]), e), {})
                    ),
                    timestamp: t[0].time,
                    timeStr: nd(t[0].time),
                    contentDiff: v,
                    selectionDiff: g,
                    selectionHtml: nh(
                      (0, l.prettyPrint)(p.join("\n"), {
                        max_char: 60,
                        indent_size: 2,
                      })
                    ),
                  };
                })(t, e, n, i);
              nv.update((t) => new Map(t.set(a.id, a))), nm.set(a);
              let s = !a.contentDiff;
              if ((null == o ? void 0 : o.isGroup) && s) {
                let t = {
                  isGroup: s,
                  entryIds: [a.id, ...o.entryIds],
                  topEntryId: a.id,
                  expanded: o.expanded,
                };
                ng.update((e) => [t, ...e.slice(1)]);
              } else {
                let t = {
                  isGroup: s,
                  entryIds: [a.id],
                  topEntryId: a.id,
                  expanded: !1,
                };
                ng.update((e) => [t, ...e]);
              }
            })(o.transactions, t.state, r);
        },
        o8 = "__prosemirror-dev-toolkit__";
      function it(t, e = {}) {
        let n;
        let o =
          ((n = document.querySelector(`.${o8}`)) ||
            (((n = document.createElement("div")).className = o8),
            document.body.appendChild(n)),
          n);
        ie();
        let i = new o3({ target: o, props: Object.assign({ view: t }, e) });
        "undefined" != typeof window && (window.editorView = t);
        let a = t.destroy.bind(t);
        (t.destroy = () => {
          ie(), a();
        }),
          (function (t) {
            var e;
            o6 = !0;
            let n =
              null === (e = t.props.dispatchTransaction) || void 0 === e
                ? void 0
                : e.bind(t);
            t.setProps({ dispatchTransaction: o9(t, n) }),
              (o7 = () => t.setProps({ dispatchTransaction: n }));
          })(t),
          (r = () => {
            ny(), (o6 = !1), o7 && o7(), (o7 = void 0), i.$destroy();
          });
      }
      function ie() {
        r && r(), (r = void 0);
      }
      "undefined" != typeof window && (window.applyDevTools = it);
    },
  },
]);
//# sourceMappingURL=3d35b88c-add1990a508b9ea1.js.map
