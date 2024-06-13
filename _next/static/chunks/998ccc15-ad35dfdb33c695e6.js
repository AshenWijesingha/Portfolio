"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8707],
  {
    42418: function (t, e, r) {
      r.d(e, {
        Rn: function () {
          return rr;
        },
        ez: function () {
          return eI;
        },
        mz: function () {
          return ry;
        },
      });
      var n,
        a,
        i = r(25161),
        o = r(22989),
        s = r(90824),
        u = r(65960),
        l = r(16149),
        c = r(75004),
        f = r(23222),
        p = r(50786),
        d = r(2784),
        h = r(5676),
        g = r(77728),
        v = r(23949),
        m = function (t, e) {
          return (m =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            })(t, e);
        };
      function b(t, e) {
        if ("function" != typeof e && null !== e)
          throw TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function r() {
          this.constructor = t;
        }
        m(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      }
      var x = function () {
        return (x =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var a in (e = arguments[r]))
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t;
          }).apply(this, arguments);
      };
      function E(t, e, r) {
        if (r || 2 == arguments.length)
          for (var n, a = 0, i = e.length; a < i; a++)
            (!n && a in e) ||
              (n || (n = Array.prototype.slice.call(e, 0, a)), (n[a] = e[a]));
        return t.concat(n || Array.prototype.slice.call(e));
      }
      function S(t, e) {
        var r;
        return x(
          { events: {}, props: (((r = {})[t] = Boolean), r), name: t },
          e
        );
      }
      var D = (0, i.ZP)().browser.webkit,
        R =
          D &&
          ((n =
            "undefined" == typeof window
              ? { userAgent: "" }
              : window.navigator),
          !!(a = /applewebkit\/([^\s]+)/g.exec(n.userAgent.toLowerCase())) &&
            605 > parseFloat(a[1])),
        M = "moveable-",
        y =
          "\n{\n	position: absolute;\n	width: 1px;\n	height: 1px;\n	left: 0;\n	top: 0;\n    z-index: 3000;\n    --moveable-color: #4af;\n    --zoom: 1;\n    --zoompx: 1px;\n    will-change: transform;\n}\n.control-box {\n    z-index: 0;\n}\n.line, .control {\n    position: absolute;\n	left: 0;\n    top: 0;\n    will-change: transform;\n}\n.control {\n	width: 14px;\n	height: 14px;\n	border-radius: 50%;\n	border: 2px solid #fff;\n	box-sizing: border-box;\n    background: #4af;\n    background: var(--moveable-color);\n	margin-top: -7px;\n    margin-left: -7px;\n    border: 2px solid #fff;\n    z-index: 10;\n}\n.padding {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100px;\n    height: 100px;\n    transform-origin: 0 0;\n}\n.line {\n	width: 1px;\n    height: 1px;\n    background: #4af;\n    background: var(--moveable-color);\n	transform-origin: 0px 50%;\n}\n.line.dashed {\n    box-sizing: border-box;\n    background: transparent;\n}\n.line.dashed.horizontal {\n    border-top: 1px dashed #4af;\n    border-top-color: #4af;\n    border-top-color: var(--moveable-color);\n}\n.line.dashed.vertical {\n    border-left: 1px dashed #4af;\n    border-left-color: #4af;\n    border-left-color: var(--moveable-color);\n}\n.line.vertical {\n    transform: translateX(-50%);\n}\n.line.horizontal {\n    transform: translateY(-50%);\n}\n.line.vertical.bold {\n    width: 2px;\n}\n.line.horizontal.bold {\n    height: 2px;\n}\n\n.control.origin {\n	border-color: #f55;\n	background: #fff;\n	width: 12px;\n	height: 12px;\n	margin-top: -6px;\n    margin-left: -6px;\n	pointer-events: none;\n}\n"
            .concat(
              [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165]
                .map(function (t) {
                  var e, r, n;
                  return '\n.direction[data-rotation="'
                    .concat(t, '"] {\n	')
                    .concat(
                      ((e =
                        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="'
                          .concat(32, 'px" height="')
                          .concat(
                            32,
                            'px" viewBox="0 0 32 32" ><path d="M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z" stroke-linejoin="round" stroke-width="1.2" fill="black" stroke="white" style="transform:rotate('
                          )
                          .concat(
                            t,
                            'deg);transform-origin: 16px 16px"></path></svg>'
                          )),
                      (n = "ns-resize"),
                      135 == (r = (45 * Math.round(t / 45)) % 180)
                        ? (n = "nwse-resize")
                        : 45 === r
                        ? (n = "nesw-resize")
                        : 90 === r && (n = "ew-resize"),
                      "cursor:"
                        .concat(n, ";cursor: url('")
                        .concat(e, "') 16 16, ")
                        .concat(n, ";")),
                      "\n}\n"
                    );
                })
                .join("\n"),
              "\n.group {\n    z-index: -1;\n}\n.area {\n    position: absolute;\n}\n.area-pieces {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: none;\n}\n.area.avoid, .area.pass {\n    pointer-events: none;\n}\n.area.avoid+.area-pieces {\n    display: block;\n}\n.area-piece {\n    position: absolute;\n}\n\n"
            )
            .concat(
              R
                ? ':global svg *:before {\n	content:"";\n	transform-origin: inherit;\n}'
                : "",
              "\n"
            ),
        C = [
          [0, 1, 2],
          [1, 0, 3],
          [2, 0, 3],
          [3, 1, 2],
        ],
        P = ["n", "w", "s", "e", "nw", "ne", "sw", "se"],
        z = {
          n: [0, 1],
          s: [2, 3],
          w: [2, 0],
          e: [1, 3],
          nw: [0],
          ne: [1],
          sw: [2],
          se: [3],
        },
        B = { n: 0, s: 180, w: 270, e: 90, nw: 315, ne: 45, sw: 225, se: 135 },
        G = [
          "isMoveableElement",
          "updateRect",
          "updateTarget",
          "destroy",
          "dragStart",
          "isInside",
          "hitTest",
          "setState",
          "getRect",
          "request",
          "isDragging",
          "getManager",
          "forceUpdate",
        ];
      function O(t, e, r, n, a) {
        var i = e.gesto.move(r, t.inputEvent),
          o = i.originalDatas || i.datas,
          s = o.draggable || (o.draggable = {});
        return x(x({}, a ? eC(e, i) : i), {
          isDrag: !0,
          isPinch: !!n,
          parentEvent: !0,
          datas: s,
          originalDatas: t.originalDatas,
        });
      }
      var w = (function () {
        function t() {
          (this.prevX = 0),
            (this.prevY = 0),
            (this.startX = 0),
            (this.startY = 0),
            (this.isDrag = !1),
            (this.isFlag = !1),
            (this.datas = { draggable: {} });
        }
        var e = t.prototype;
        return (
          (e.dragStart = function (t, e) {
            (this.isDrag = !1), (this.isFlag = !1);
            var r = e.originalDatas;
            return (
              (this.datas = r),
              r.draggable || (r.draggable = {}),
              x(x({}, this.move(t, e.inputEvent)), { type: "dragstart" })
            );
          }),
          (e.drag = function (t, e) {
            return this.move([t[0] - this.prevX, t[1] - this.prevY], e);
          }),
          (e.move = function (t, e) {
            var r, n;
            return (
              this.isFlag
                ? ((r = this.prevX + t[0]),
                  (n = this.prevY + t[1]),
                  (this.isDrag = !0))
                : ((this.prevX = t[0]),
                  (this.prevY = t[1]),
                  (this.startX = t[0]),
                  (this.startY = t[1]),
                  (r = t[0]),
                  (n = t[1]),
                  (this.isFlag = !0)),
              (this.prevX = r),
              (this.prevY = n),
              {
                type: "drag",
                clientX: r,
                clientY: n,
                inputEvent: e,
                isDrag: this.isDrag,
                distX: r - this.startX,
                distY: n - this.startY,
                deltaX: t[0],
                deltaY: t[1],
                datas: this.datas.draggable,
                originalDatas: this.datas,
                parentEvent: !0,
                parentGesto: this,
              }
            );
          }),
          t
        );
      })();
      function T(t, e, r) {
        var n = r.originalDatas;
        n.groupable = n.groupable || {};
        var a = n.groupable;
        a.childDatas = a.childDatas || [];
        var i = a.childDatas;
        return t.moveables.map(function (t, n) {
          return (
            (i[n] = i[n] || {}),
            (i[n][e] = i[n][e] || {}),
            x(x({}, r), { datas: i[n][e], originalDatas: i[n] })
          );
        });
      }
      function A(t, e, r, n, a, i) {
        var o = !!r.match(/Start$/g),
          s = !!r.match(/End$/g),
          u = a.isPinch,
          l = a.datas,
          c = T(t, e.name, a),
          f = t.moveables,
          p = c.map(function (t, a) {
            var c = f[a],
              p = t;
            o
              ? (p = new w().dragStart(n, t))
              : (c.state.gesto || (c.state.gesto = l.childGestos[a]),
                (p = O(t, c.state, n, u, i)));
            var d = e[r](c, x(x({}, p), { parentFlag: !0 }));
            return s && (c.state.gesto = null), d;
          });
        return (
          o &&
            (l.childGestos = f.map(function (t) {
              return t.state.gesto;
            })),
          p
        );
      }
      function k(t, e, r, n, a, i) {
        void 0 === a &&
          (a = function (t, e) {
            return e;
          });
        var o = !!r.match(/End$/g),
          s = T(t, e.name, n),
          u = t.moveables;
        return s.map(function (t, n) {
          var s = u[n],
            l = t;
          l = a(s, t);
          var c = e[r](s, x(x({}, l), { parentFlag: !0 }));
          return c && i && i(s, t, c, n), o && (s.state.gesto = null), c;
        });
      }
      function I(t, e, r, n) {
        void 0 === n && (n = "");
        var a = t.state,
          i = a.renderPoses,
          o = a.rotation,
          u = a.direction,
          l = t.props,
          c = l.renderDirections,
          f = void 0 === c ? e : c,
          p = l.zoom,
          d = {};
        if (!f) return [];
        var h = u > 0 ? 1 : -1,
          g = !0 === f ? P : f,
          v = (o / Math.PI) * 180;
        return (
          g.forEach(function (t) {
            d[t] = !0;
          }),
          g.map(function (t) {
            var e = z[t];
            if (!e || !d[t]) return null;
            var a = ((0, s.P2)(v, 15) + h * B[t] + 720) % 180;
            return r.createElement("div", {
              className: t0("control", "direction", t, n),
              "data-rotation": a,
              "data-direction": t,
              key: "direction-".concat(t),
              style: es.apply(
                void 0,
                E(
                  [o, p],
                  e.map(function (t) {
                    return i[t];
                  }),
                  !1
                )
              ),
            });
          })
        );
      }
      function W(t, e, r, n, a, i) {
        for (var o = [], u = 6; u < arguments.length; u++)
          o[u - 6] = arguments[u];
        var l = (0, s.jv)(r, n),
          c = e ? (0, s.P2)((l / Math.PI) * 180, 15) % 180 : -1;
        return t.createElement("div", {
          key: "line".concat(i),
          className: t0.apply(void 0, E(["line", "direction", e], o, !1)),
          "data-rotation": c,
          "data-line-index": i,
          "data-direction": e,
          style: eo(r, n, a, l),
        });
      }
      function F(t, e) {
        return I(t, ["nw", "ne", "sw", "se"], e);
      }
      function N(t, e, r, n, a, i) {
        var o = t.state.is3d ? 4 : 3,
          l = et(t.state.rootMatrix, a, o),
          c = (0, u.PD)([i.left, i.top], l);
        (e.startAbsoluteOrigin = c),
          (e.prevDeg = ((0, s.jv)(c, [r, n]) / Math.PI) * 180),
          (e.defaultDeg = e.prevDeg),
          (e.prevSnapDeg = 0),
          (e.loop = 0);
      }
      function q(t, e, r) {
        var n = r.defaultDeg,
          a = r.prevDeg,
          i = a % 360,
          o = Math.floor(a / 360);
        i < 0 && (i += 360),
          i > t && i > 270 && t < 90 ? ++o : i < t && i < 90 && t > 270 && --o;
        var s = e * (360 * o + t - n);
        return (r.prevDeg = n + s), s;
      }
      function H(t, e, r, n) {
        return q(
          ((0, s.jv)(n.startAbsoluteOrigin, [t, e]) / Math.PI) * 180,
          r,
          n
        );
      }
      function j(t, e, r, n, a, i) {
        var o = t.props.throttleRotate,
          l = void 0 === o ? 0 : o,
          c = n,
          f = r.prevSnapDeg;
        i &&
          (c = (function (t, e, r, n) {
            if (!U(t, "rotatable")) return n;
            var a = e.pos1,
              i = e.pos2,
              o = e.pos3,
              l = e.pos4,
              c = (n * Math.PI) / 180,
              f = [a, i, o, l].map(function (t) {
                return (0, u.h9)(t, r);
              }),
              p = f.map(function (t) {
                return (0, u.U1)(t, c);
              }),
              d = E(
                E(
                  [],
                  (function (t, e, r, n, a) {
                    if (!t.props.bounds) return [];
                    var i = (a * Math.PI) / 180,
                      o = tg(t),
                      u = o.left,
                      l = o.top,
                      c = o.right,
                      f = o.bottom,
                      p = u - n[0],
                      d = c - n[0],
                      h = l - n[1],
                      g = f - n[1],
                      v = { left: p, top: h, right: d, bottom: g };
                    if (!tm(r, v, 0)) return [];
                    var m = [];
                    return (
                      [
                        [p, 0],
                        [d, 0],
                        [h, 1],
                        [g, 1],
                      ].forEach(function (t) {
                        var n = t[0],
                          a = t[1];
                        r.forEach(function (t) {
                          var r,
                            o,
                            u = (0, s.jv)([0, 0], t);
                          m.push.apply(
                            m,
                            [(o = Math.sqrt((r = ea(t)) * r - n * n) || 0), -o]
                              .sort(function (e, r) {
                                return (
                                  Math.abs(e - t[a ? 0 : 1]) -
                                  Math.abs(r - t[a ? 0 : 1])
                                );
                              })
                              .map(function (t) {
                                return (0, s.jv)([0, 0], a ? [t, n] : [n, t]);
                              })
                              .map(function (t) {
                                return i + t - u;
                              })
                              .filter(function (t) {
                                return !tm(e, v, t);
                              })
                              .map(function (t) {
                                return (0, s.P2)((180 * t) / Math.PI, 1e-7);
                              })
                          );
                        });
                      }),
                      m
                    );
                  })(t, f, p, r, n),
                  !0
                ),
                (function (t, e, r, n, a) {
                  var i = t.props.innerBounds,
                    o = (a * Math.PI) / 180;
                  if (!i) return [];
                  var u = i.left,
                    l = i.top,
                    c = i.width,
                    f = i.height,
                    p = u - n[0],
                    d = u + c - n[0],
                    h = l - n[1],
                    g = l + f - n[1],
                    v = [
                      [p, h],
                      [d, h],
                      [p, g],
                      [d, g],
                    ],
                    m = tj(r, [0, 0]);
                  if (!td(r, v, m, 0)) return [];
                  var b = [],
                    x = v.map(function (t) {
                      return [ea(t), (0, s.jv)([0, 0], t)];
                    });
                  return (
                    [
                      [r[0], r[1]],
                      [r[1], r[3]],
                      [r[3], r[2]],
                      [r[2], r[0]],
                    ].forEach(function (t) {
                      var r = (0, s.jv)(
                          [0, 0],
                          (function (t) {
                            var e = t[0],
                              r = t[1],
                              n = r[0] - e[0],
                              a = r[1] - e[1];
                            if (!n) return [e[0], 0];
                            if (!a) return [0, e[1]];
                            var i = a / n,
                              o = -i * e[0] + e[1];
                            return [-o / (i + 1 / i), o / (i * i + 1)];
                          })(t)
                        ),
                        n = (function (t) {
                          var e = t[0],
                            r = t[1],
                            n = r[0] - e[0],
                            a = r[1] - e[1];
                          if (!n) return Math.abs(e[0]);
                          if (!a) return Math.abs(e[1]);
                          var i = a / n;
                          return Math.abs(
                            (-i * e[0] + e[1]) / Math.sqrt(Math.pow(i, 2) + 1)
                          );
                        })(t);
                      b.push.apply(
                        b,
                        x
                          .filter(function (t) {
                            var e = t[0];
                            return e && n <= e;
                          })
                          .map(function (t) {
                            var e = t[0],
                              a = t[1],
                              i = Math.acos(e ? n / e : 0);
                            return [o + (a + i) - r, o + (a - i) - r];
                          })
                          .reduce(function (t, e) {
                            return t.push.apply(t, e), t;
                          }, [])
                          .filter(function (t) {
                            return !td(e, v, m, t);
                          })
                          .map(function (t) {
                            return (0, s.P2)((180 * t) / Math.PI, 1e-7);
                          })
                      );
                    }),
                    b
                  );
                })(t, f, p, r, n),
                !0
              );
            return (d.sort(function (t, e) {
              return Math.abs(t - n) - Math.abs(e - n);
            }),
            d.length)
              ? d[0]
              : n;
          })(t, e, r.origin, c));
        var p = (0, s.P2)(a + c, l),
          d = p - a;
        return (r.prevSnapDeg = d), [d - f, c, p];
      }
      function Y(t, e) {
        if (e.isRequest) return "rotatable" === e.requestAble;
        var r = e.inputEvent.target;
        if ((0, s.pv)(r, t0("rotation-control"))) return !0;
        var n = t.props.rotationTarget;
        return (
          !!n &&
          ew(n, !0).some(function (t) {
            return !!t && (r === t || r.contains(t));
          })
        );
      }
      var _ = ["left", "right", "center"],
        X = ["top", "bottom", "middle"],
        L = { start: "left", end: "right", center: "center" },
        V = { start: "top", end: "bottom", center: "middle" };
      function U(t, e) {
        var r = t.props,
          n = r.snappable,
          a = r.bounds,
          i = r.innerBounds,
          o = r.verticalGuidelines,
          s = r.horizontalGuidelines,
          u = r.snapGridWidth,
          l = r.snapGridHeight,
          c = t.state,
          f = c.guidelines,
          p = c.enableSnap;
        return (
          !(!n || !p || (e && !0 !== n && 0 > n.indexOf(e))) &&
          (!!u ||
            !!l ||
            !!a ||
            !!i ||
            (!!f && !!f.length) ||
            (!!o && !!o.length) ||
            (!!s && !!s.length))
        );
      }
      function K(t) {
        return !1 === t
          ? {}
          : !0 !== t && t
          ? t
          : { left: !0, right: !0, top: !0, bottom: !0 };
      }
      function Z(t, e) {
        var r = (function (t, e) {
            var r = K(t),
              n = {};
            for (var a in r) a in e && r[a] && (n[a] = e[a]);
            return n;
          })(t, e),
          n = X.filter(function (t) {
            return t in r;
          }),
          a = _.filter(function (t) {
            return t in r;
          });
        return {
          horizontal: n.map(function (t) {
            return r[t];
          }),
          vertical: a.map(function (t) {
            return r[t];
          }),
        };
      }
      function Q(t, e, r, n, a, i, o) {
        void 0 === a && (a = 0),
          void 0 === i && (i = 0),
          void 0 === o && (o = { left: 0, top: 0, right: 0, bottom: 0 });
        var u = [],
          l = o.left,
          c = o.top,
          f = o.bottom,
          p = r + o.right - l,
          d = n + f - c;
        return (
          t &&
            t.forEach(function (t) {
              u.push({
                type: "horizontal",
                pos: [l, (0, s.P2)(t - i + c, 0.1)],
                size: p,
              });
            }),
          e &&
            e.forEach(function (t) {
              u.push({
                type: "vertical",
                pos: [(0, s.P2)(t - a + l, 0.1), c],
                size: d,
              });
            }),
          u
        );
      }
      function J(t) {
        var e = t.state,
          r = e.snapOffset,
          n = e.containerClientRect,
          a = n.overflow,
          i = n.scrollHeight,
          o = n.scrollWidth,
          l = n.clientHeight,
          p = n.clientWidth,
          d = n.clientLeft,
          h = n.clientTop,
          g = t.props,
          v = g.snapGap,
          m = g.verticalGuidelines,
          b = g.horizontalGuidelines,
          S = g.snapThreshold,
          D = g.snapGridWidth,
          R = void 0 === D ? 0 : D,
          M = g.snapGridHeight,
          y = void 0 === M ? 0 : M,
          C = E(
            [],
            (function (t) {
              var e = t.state,
                r = t.props.elementGuidelines,
                n = void 0 === r ? [] : r;
              if (!n.length) return (e.elementRects = []), [];
              var a = (e.elementRects || []).filter(function (t) {
                  return !t.refresh;
                }),
                i = n
                  .map(function (t) {
                    return (0, s.Kn)(t) && "element" in t
                      ? t
                      : { element: eO(t, !0) };
                  })
                  .filter(function (t) {
                    return t.element;
                  }),
                o = (0, c.H)(
                  a.map(function (t) {
                    return t.element;
                  }),
                  i.map(function (t) {
                    return t.element;
                  })
                ),
                l = o.maintained,
                p = o.added,
                d = [];
              l.forEach(function (t) {
                var e = t[0];
                d[t[1]] = a[e];
              }),
                (function (t, e) {
                  if (!e.length) return [];
                  var r,
                    n = t.state,
                    a = n.containerClientRect,
                    i = n.targetClientRect,
                    o = i.top,
                    s = i.left,
                    l = n.rootMatrix,
                    c = n.is3d ? 4 : 3,
                    p =
                      ((r = et(l, [a.clientLeft, a.clientTop], c)),
                      [a.left + r[0], a.top + r[1]]),
                    d = p[0],
                    h = p[1],
                    g = eg(n),
                    v = (0, f.i$)(g),
                    m = v.minX,
                    b = v.minY,
                    E = (0, u.h9)([m, b], ey(l, [s - d, o - h], c)).map(
                      function (t) {
                        return Math.round(t % 1 == -0.5 ? t - 1 : t);
                      }
                    ),
                    S = E[0],
                    D = E[1];
                  return e.map(function (t) {
                    var e = t.element.getBoundingClientRect(),
                      r = e.left - d,
                      n = e.top - h,
                      a = n + e.height,
                      i = r + e.width,
                      o = ey(l, [r, n], c),
                      s = o[0],
                      u = o[1],
                      f = ey(l, [i, a], c),
                      p = f[0],
                      g = f[1];
                    return x(x({}, t), {
                      rect: {
                        left: s + S,
                        right: p + S,
                        top: u + D,
                        bottom: g + D,
                        center: (s + p) / 2 + S,
                        middle: (u + g) / 2 + D,
                      },
                    });
                  });
                })(
                  t,
                  p.map(function (t) {
                    return i[t];
                  })
                ).map(function (t, e) {
                  d[p[e]] = t;
                }),
                (e.elementRects = d);
              var h = K(t.props.elementSnapDirections),
                g = [];
              return (
                d.forEach(function (t) {
                  var e = t.element,
                    r = t.top,
                    n = void 0 === r ? h.top : r,
                    a = t.left,
                    i = void 0 === a ? h.left : a,
                    o = t.right,
                    u = void 0 === o ? h.right : o,
                    l = t.bottom,
                    c = void 0 === l ? h.bottom : l,
                    f = t.center,
                    p = void 0 === f ? h.center : f,
                    d = t.middle,
                    v = void 0 === d ? h.middle : d,
                    m = t.className,
                    b = t.rect,
                    x = Z(
                      {
                        top: n,
                        right: u,
                        left: i,
                        bottom: c,
                        center: p,
                        middle: v,
                      },
                      b
                    ),
                    E = x.horizontal,
                    S = x.vertical,
                    D = b.top,
                    R = b.left,
                    M = b.right - R,
                    y = b.bottom - D,
                    C = [M, y];
                  S.forEach(function (r) {
                    g.push({
                      type: "vertical",
                      element: e,
                      pos: [(0, s.P2)(r, 0.1), D],
                      size: y,
                      sizes: C,
                      className: m,
                      elementRect: t,
                    });
                  }),
                    E.forEach(function (r) {
                      g.push({
                        type: "horizontal",
                        element: e,
                        pos: [R, (0, s.P2)(r, 0.1)],
                        size: M,
                        sizes: C,
                        className: m,
                        elementRect: t,
                      });
                    });
                }),
                g
              );
            })(t),
            !0
          );
        if (void 0 === v || v) {
          var P,
            z,
            B,
            G,
            O = er(eg(t.state)),
            w = O.top,
            T = O.left,
            A = O.bottom,
            k = O.right;
          C.push.apply(
            C,
            ((P = {
              top: w,
              left: T,
              bottom: A,
              right: k,
              center: (T + k) / 2,
              middle: (w + A) / 2,
            }),
            (z = void 0 === S ? 5 : S),
            (B = t.state.elementRects),
            (G = []),
            [
              ["vertical", L, V],
              ["horizontal", V, L],
            ].forEach(function (t) {
              var e = t[0],
                r = t[1],
                n = t[2],
                a = P[r.start],
                i = P[r.end],
                o = P[r.center],
                s = P[n.start],
                u = P[n.end];
              function l(t) {
                var e = t.rect;
                return e[r.end] < a + z
                  ? a - e[r.end]
                  : i - z < e[r.start]
                  ? e[r.start] - i
                  : -1;
              }
              var c = B.filter(function (t) {
                  var e = t.rect;
                  return !(e[n.start] > u) && !(e[n.end] < s) && l(t) > 0;
                }).sort(function (t, e) {
                  return l(t) - l(e);
                }),
                f = [];
              c.forEach(function (t) {
                c.forEach(function (e) {
                  if (t !== e) {
                    var r = t.rect,
                      a = e.rect,
                      i = r[n.start],
                      o = r[n.end],
                      s = a[n.start];
                    i > a[n.end] || s > o || f.push([t, e]);
                  }
                });
              }),
                f.forEach(function (t) {
                  var n = t[0],
                    s = t[1],
                    u = n.rect,
                    l = s.rect,
                    c = u[r.start],
                    f = u[r.end],
                    p = l[r.start],
                    d = l[r.end],
                    h = 0,
                    g = 0,
                    v = !1,
                    m = !1,
                    b = !1;
                  if (f <= a && i <= p) {
                    if (
                      ((m = !0),
                      (h = (p - f - (i - a)) / 2),
                      Math.abs((g = f + h + (i - a) / 2) - o) > z)
                    )
                      return;
                  } else if (f < p && d < a + z) {
                    if (((v = !0), Math.abs((g = d + (h = p - f)) - a) > z))
                      return;
                  } else if (!(f < p) || !(i - z < c)) return;
                  else if (((b = !0), Math.abs((g = c - (h = p - f)) - i) > z))
                    return;
                  h &&
                    G.push({
                      type: e,
                      pos: "vertical" === e ? [g, 0] : [0, g],
                      element: s.element,
                      size: 0,
                      className: s.className,
                      isStart: v,
                      isCenter: m,
                      isEnd: b,
                      gap: h,
                      hide: !0,
                      gapRects: [n, s],
                    });
                });
            }),
            G)
          );
        }
        return (
          C.push.apply(
            C,
            (function (t, e, r, n, a, i) {
              void 0 === a && (a = 0), void 0 === i && (i = 0);
              var o = [];
              if (e)
                for (var u = 0; u <= n; u += e)
                  o.push({
                    type: "horizontal",
                    pos: [0, (0, s.P2)(u - i, 0.1)],
                    size: r,
                    hide: !0,
                  });
              if (t)
                for (var u = 0; u <= r; u += t)
                  o.push({
                    type: "vertical",
                    pos: [(0, s.P2)(u - a, 0.1), 0],
                    size: n,
                    hide: !0,
                  });
              return o;
            })(R, y, a ? o : p, a ? i : l, d, h)
          ),
          C.push.apply(C, Q(b || !1, m || !1, a ? o : p, a ? i : l, d, h, r)),
          C
        );
      }
      function $(t, e, r, n) {
        var a = (function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          for (var r = t.length - 1, n = 0; n < r; ++n) {
            var a = t[n];
            if (!(0, s.o8)(a)) return a;
          }
          return t[r];
        })(n, t.props.snapThreshold, 5);
        return tt(t.state.guidelines, e, r, a);
      }
      function tt(t, e, r, n) {
        return {
          vertical: tn(t, "vertical", e, n),
          horizontal: tn(t, "horizontal", r, n),
        };
      }
      function te(t, e, r) {
        var n = Z(t.props.snapDirections, e);
        return $(t, n.vertical, n.horizontal, r);
      }
      function tr(t) {
        var e = t.isSnap;
        if (!e)
          return { isSnap: !1, offset: 0, dist: -1, pos: 0, guideline: null };
        var r = t.posInfos[0],
          n = r.guidelineInfos[0],
          a = n.offset,
          i = n.dist,
          o = n.guideline;
        return { isSnap: e, offset: a, dist: i, pos: r.pos, guideline: o };
      }
      function tn(t, e, r, n) {
        if (!t || !t.length) return { isSnap: !1, index: -1, posInfos: [] };
        var a = "vertical" === e ? 0 : 1,
          i = r
            .map(function (r, i) {
              var o = t
                .map(function (t) {
                  var e = r - t.pos[a];
                  return { offset: e, dist: Math.abs(e), guideline: t };
                })
                .filter(function (t) {
                  var r = t.guideline,
                    a = t.dist;
                  return r.type === e && !(a > n);
                })
                .sort(function (t, e) {
                  return t.dist - e.dist;
                });
              return { pos: r, index: i, guidelineInfos: o };
            })
            .filter(function (t) {
              return t.guidelineInfos.length > 0;
            })
            .sort(function (t, e) {
              return t.guidelineInfos[0].dist - e.guidelineInfos[0].dist;
            }),
          o = i.length > 0;
        return { isSnap: o, index: o ? i[0].index : -1, posInfos: i };
      }
      function ta(t, e) {
        var r = Math.abs(t.offset),
          n = Math.abs(e.offset);
        if (t.isBound && e.isBound) return n - r;
        if (t.isBound) return -1;
        if (e.isBound) return 1;
        if (t.isSnap && e.isSnap) return n - r;
        if (t.isSnap) return -1;
        if (e.isSnap) return 1;
        if (r < 1e-7) return 1;
        else if (n < 1e-7) return -1;
        return r - n;
      }
      function ti(t, e) {
        return t.slice().sort(function (t, r) {
          var n = t.sign[e],
            a = r.sign[e],
            i = t.offset[e],
            o = r.offset[e];
          return n
            ? a
              ? ta(
                  { isBound: t.isBound, isSnap: t.isSnap, offset: i },
                  { isBound: r.isBound, isSnap: r.isSnap, offset: o }
                )
              : -1
            : 1;
        })[0];
      }
      function to(t, e) {
        var r = (0, s.Y8)([e[0][0], e[1][0]]),
          n = (0, s.Y8)([e[0][1], e[1][1]]);
        return { vertical: r <= t[0], horizontal: n <= t[1] };
      }
      function ts(t, e) {
        var r,
          n,
          a = e[0],
          i = e[1],
          o = i[0] - a[0],
          s = i[1] - a[1];
        return (
          1e-7 > Math.abs(o) && (o = 0),
          1e-7 > Math.abs(s) && (s = 0),
          o
            ? ((r = s ? (s / o) * (t[0] - a[0]) + a[1] : a[1]), (n = t[1]))
            : ((r = a[0]), (n = t[0])),
          r - n
        );
      }
      function tu(t, e, r) {
        void 0 === r && (r = 1e-7);
        var n = 0 >= ts(t[0], e);
        return t.slice(1).every(function (t) {
          var a = ts(t, e);
          return a <= 0 === n || Math.abs(a) <= r;
        });
      }
      function tl(t, e, r, n, a) {
        return (void 0 === a && (a = 0),
        (n && e - a <= t) || (!n && t <= r + a))
          ? { isBound: !0, offset: n ? e - t : r - t }
          : { isBound: !1, offset: 0 };
      }
      function tc(t, e, r, n, a) {
        var i = t[0],
          o = t[1],
          s = e[0],
          u = e[1],
          l = eB(o[1] - i[1]),
          c = eB(o[0] - i[0]),
          f = eB(u[1] - s[1]);
        if (eB(u[0] - s[0])) {
          if (!f) {
            if (a && !c);
            else {
              if (l)
                return tl((s[1] - i[1]) / (l / c) + i[0], s[0], u[0], r, n);
              var p = s[1] - i[1],
                d = Math.abs(p) <= (n || 0);
              return { isBound: d, offset: d ? p : 0 };
            }
          }
        } else if (a && !l);
        else {
          if (c) return tl((l / c) * (s[0] - i[0]) + i[1], s[1], u[1], r, n);
          var p = s[0] - i[0],
            d = Math.abs(p) <= (n || 0);
          return { isBound: d, offset: d ? p : 0 };
        }
        return { isBound: !1, offset: 0 };
      }
      function tf(t, e, r, n) {
        return e.map(function (e) {
          var a = e[0],
            i = (function (t, e, r) {
              var n = t.props.innerBounds;
              if (!n)
                return {
                  isAllBound: !1,
                  isBound: !1,
                  isVerticalBound: !1,
                  isHorizontalBound: !1,
                  offset: [0, 0],
                };
              var a = n.left,
                i = n.top,
                o = n.width,
                s = n.height,
                u = [
                  [a, i],
                  [a, i + s],
                ],
                l = [
                  [a, i],
                  [a + o, i],
                ],
                c = [
                  [a + o, i],
                  [a + o, i + s],
                ],
                f = [
                  [a, i + s],
                  [a + o, i + s],
                ],
                p = to(r, e),
                d = p.horizontal,
                h = p.vertical;
              if (tu([r, [a, i], [a + o, i], [a, i + s], [a + o, i + s]], e))
                return {
                  isAllBound: !1,
                  isBound: !1,
                  isVerticalBound: !1,
                  isHorizontalBound: !1,
                  offset: [0, 0],
                };
              var g = tc(e, l, h),
                v = tc(e, f, h),
                m = tc(e, u, d),
                b = tc(e, c, d),
                x = g.isBound && v.isBound,
                E = g.isBound || v.isBound,
                S = m.isBound && b.isBound,
                D = m.isBound || b.isBound,
                R = eM(g.offset, v.offset),
                M = eM(m.offset, b.offset),
                y = [0, 0],
                C = !1,
                P = !1;
              return (
                Math.abs(M) < Math.abs(R)
                  ? ((y = [R, 0]), (C = E), (P = x))
                  : ((y = [0, M]), (C = D), (P = S)),
                {
                  isAllBound: P,
                  isVerticalBound: E,
                  isHorizontalBound: D,
                  isBound: C,
                  offset: y,
                }
              );
            })(t, [e[1], e[2]], r),
            o = i.isBound,
            s = i.offset,
            u = i.isVerticalBound,
            l = i.isHorizontalBound,
            c = tN({ datas: n, distX: s[0], distY: s[1] }).map(function (t, e) {
              return t * (a[e] ? 2 / a[e] : 0);
            });
          return {
            sign: a,
            isBound: o,
            isVerticalBound: u,
            isHorizontalBound: l,
            isSnap: !1,
            offset: c,
          };
        });
      }
      function tp(t, e, r) {
        var n, a, i;
        return ((n = []),
        (a = e[0]),
        (i = e[1]),
        a && i
          ? n.push([[0, 2 * i], e, [-a, i]], [[2 * a, 0], e, [a, -i]])
          : a
          ? (n.push([
              [2 * a, 0],
              [a, 1],
              [a, -1],
            ]),
            r &&
              n.push(
                [
                  [0, -1],
                  [a, -1],
                  [-a, -1],
                ],
                [
                  [0, 1],
                  [a, 1],
                  [-a, 1],
                ]
              ))
          : i
          ? (n.push([
              [0, 2 * i],
              [1, i],
              [-1, i],
            ]),
            r &&
              n.push(
                [
                  [-1, 0],
                  [-1, i],
                  [-1, -i],
                ],
                [
                  [1, 0],
                  [1, i],
                  [1, -i],
                ]
              ))
          : n.push(
              [
                [-1, 0],
                [-1, -1],
                [-1, 1],
              ],
              [
                [1, 0],
                [1, -1],
                [1, 1],
              ],
              [
                [0, -1],
                [-1, -1],
                [1, -1],
              ],
              [
                [0, 1],
                [-1, 1],
                [1, 1],
              ]
            ),
        n).map(function (e) {
          var r = e[0],
            n = e[1],
            a = e[2];
          return [r, tj(t, n), tj(t, a)];
        });
      }
      function td(t, e, r, n) {
        var a = n
            ? t.map(function (t) {
                return (0, u.U1)(t, n);
              })
            : t,
          i = E([r], e, !0);
        return [
          [a[0], a[1]],
          [a[1], a[3]],
          [a[3], a[2]],
          [a[2], a[0]],
        ].some(function (t) {
          return !tu(i, t);
        });
      }
      function th(t, e, r) {
        var n = t || {},
          a = n.position,
          i = n.left,
          o = n.top,
          s = n.right,
          u = n.bottom,
          l = {
            position: void 0 === a ? "client" : a,
            left: void 0 === i ? -1 / 0 : i,
            top: void 0 === o ? -1 / 0 : o,
            right: void 0 === s ? 1 / 0 : s,
            bottom: void 0 === u ? 1 / 0 : u,
          };
        return { vertical: tv(l, e, !0), horizontal: tv(l, r, !1) };
      }
      function tg(t, e) {
        var r = t.state,
          n = r.containerClientRect,
          a = n.clientHeight,
          i = n.clientWidth,
          o = n.clientLeft,
          s = n.clientTop,
          u = r.snapOffset,
          l = u.left,
          c = u.top,
          f = u.right,
          p = u.bottom,
          d = e || t.props.bounds || {},
          h = "css" === (d.position || "client"),
          g = d.left,
          v = d.top,
          m = d.right,
          b = void 0 === m ? (h ? -1 / 0 : 1 / 0) : m,
          x = d.bottom,
          E = void 0 === x ? (h ? -1 / 0 : 1 / 0) : x;
        return (
          h && ((b = i + f - l - b), (E = a + p - c - E)),
          {
            left: (void 0 === g ? -1 / 0 : g) + l - o,
            right: b + l - o,
            top: (void 0 === v ? -1 / 0 : v) + c - s,
            bottom: E + c - s,
          }
        );
      }
      function tv(t, e, r) {
        var n = t[r ? "left" : "top"],
          a = t[r ? "right" : "bottom"],
          i = Math.min.apply(Math, e),
          o = Math.max.apply(Math, e),
          s = [];
        return (
          n + 1 > i && s.push({ isBound: !0, offset: i - n, pos: n }),
          a - 1 < o && s.push({ isBound: !0, offset: o - a, pos: a }),
          s.length || s.push({ isBound: !1, offset: 0, pos: 0 }),
          s.sort(function (t, e) {
            return Math.abs(e.offset) - Math.abs(t.offset);
          })
        );
      }
      function tm(t, e, r) {
        return (
          r
            ? t.map(function (t) {
                return (0, u.U1)(t, r);
              })
            : t
        ).some(function (t) {
          return (
            (t[0] < e.left && Math.abs(t[0] - e.left) > 0.1) ||
            (t[0] > e.right && Math.abs(t[0] - e.right) > 0.1) ||
            (t[1] < e.top && Math.abs(t[1] - e.top) > 0.1) ||
            (t[1] > e.bottom && Math.abs(t[1] - e.bottom) > 0.1)
          );
        });
      }
      function tb(t, e) {
        var r, n, a, i, o, u, l, c, f, p;
        return (
          (a = (r = x(x({}, t), {
            classNames: E(
              [t0("line", "guideline", t.direction)],
              t.classNames,
              !0
            ).filter(function (t) {
              return t;
            }),
            size: t.size || "".concat(t.sizeValue, "px"),
            pos:
              t.pos ||
              t.posValue.map(function (t) {
                return "".concat((0, s.P2)(t, 0.1), "px");
              }),
          })).direction),
          (i = r.classNames),
          (o = r.size),
          (u = r.pos),
          (l = r.zoom),
          (c = r.key),
          (p = (f = "horizontal" === a) ? "Y" : "X"),
          e.createElement("div", {
            key: c,
            className: i.join(" "),
            style:
              (((n = {})[f ? "width" : "height"] = "".concat(o)),
              (n.transform = "translate("
                .concat(u[0], ", ")
                .concat(u[1], ") translate")
                .concat(p, "(-50%) scale")
                .concat(p, "(")
                .concat(l, ")")),
              n),
          })
        );
      }
      function tx(t, e, r, n, a, i, o, s) {
        var u = t.props.zoom;
        return r.map(function (t, r) {
          var l = t.type,
            c = t.pos,
            f = [0, 0];
          return (
            (f[o] = n),
            (f[o ? 0 : 1] = -a + c),
            tb(
              {
                key: "".concat(e, "TargetGuideline").concat(r),
                classNames: [t0("target", "bold", l)],
                posValue: f,
                sizeValue: i,
                zoom: u,
                direction: e,
              },
              s
            )
          );
        });
      }
      function tE(t, e, r, n, a, i) {
        var o = t.props,
          s = o.zoom,
          u = o.isDisplayInnerSnapDigit,
          l = "horizontal" === e ? L : V,
          c = a[l.start],
          f = a[l.end];
        return r
          .filter(function (t) {
            var e = t.hide,
              r = t.elementRect;
            if (e) return !1;
            if (u && r) {
              var n = r.rect;
              if (n[l.start] <= c && f <= n[l.end]) return !1;
            }
            return !0;
          })
          .map(function (t, r) {
            var a = t.pos,
              o = t.size,
              u = t.element,
              l = [-n[0] + a[0], -n[1] + a[1]];
            return tb(
              {
                key: "".concat(e, "-default-guideline-").concat(r),
                classNames: u ? [t0("bold")] : [],
                direction: e,
                posValue: l,
                sizeValue: o,
                zoom: s,
              },
              i
            );
          });
      }
      function tS(t, e, r, n, a, i, o, s) {
        var u,
          l = t.props,
          c = l.snapDigit,
          f = l.isDisplaySnapDigit,
          p = l.snapDistFormat,
          d =
            void 0 === p
              ? function (t) {
                  return t;
                }
              : p,
          h = l.zoom,
          g = "horizontal" === e ? "X" : "Y",
          v = "vertical" === e ? "height" : "width",
          m = Math.abs(a),
          b =
            void 0 === f || f ? parseFloat(m.toFixed(void 0 === c ? 0 : c)) : 0;
        return s.createElement(
          "div",
          {
            key: "".concat(e, "-").concat(r, "-guideline-").concat(n),
            className: t0("guideline-group", e),
            style:
              (((u = {
                left: "".concat(i[0], "px"),
                top: "".concat(i[1], "px"),
              })[v] = "".concat(m, "px")),
              u),
          },
          tb(
            {
              direction: e,
              classNames: [t0(r), o],
              size: "100%",
              posValue: [0, 0],
              sizeValue: m,
              zoom: h,
            },
            s
          ),
          s.createElement(
            "div",
            {
              className: t0("size-value", "gap"),
              style: {
                transform: "translate"
                  .concat(g, "(-50%) scale(")
                  .concat(h, ")"),
              },
            },
            b > 0 ? d(b) : ""
          )
        );
      }
      function tD(t, e, r, n, a) {
        var i = (function (t, e, r, n) {
          var a = e[0] - t[0],
            i = e[1] - t[1];
          if (
            (Math.abs(a) < s.Vp && (a = 0), Math.abs(i) < s.Vp && (i = 0), !a)
          )
            return n ? [0, 0] : [0, r];
          if (!i) return n ? [r, 0] : [0, 0];
          var o = i / a,
            u = t[1] - o * t[0];
          if (!n) return [(e[1] + r - u) / o - e[0], r];
          var l = o * (e[0] + r) + u;
          return [r, l - e[1]];
        })(t, e, r, n);
        if (!i) return { isOutside: !1, offset: [0, 0] };
        var o = (0, s.zt)(t, e),
          u = (0, s.zt)(i, t),
          l = (0, s.zt)(i, e),
          c = tN({ datas: a, distX: i[0], distY: i[1] });
        return { offset: [c[0], c[1]], isOutside: u > o || l > o };
      }
      function tR(t, e) {
        return t.isBound ? t.offset : e.isSnap ? tr(e).offset : 0;
      }
      function tM(t, e, r, n) {
        void 0 === n && (n = r);
        var a = th(tg(t), n.vertical, n.horizontal),
          i = a.horizontal,
          o = a.vertical,
          s = e
            ? {
                horizontal: { isSnap: !1, index: -1 },
                vertical: { isSnap: !1, index: -1 },
              }
            : $(t, r.vertical, r.horizontal),
          u = s.horizontal,
          l = s.vertical,
          c = tR(i[0], u),
          f = tR(o[0], l),
          p = Math.abs(c),
          d = Math.abs(f);
        return {
          horizontal: {
            isBound: i[0].isBound,
            isSnap: u.isSnap,
            snapIndex: u.index,
            offset: c,
            dist: p,
            bounds: i,
            snap: u,
          },
          vertical: {
            isBound: o[0].isBound,
            isSnap: l.isSnap,
            snapIndex: l.index,
            offset: f,
            dist: d,
            bounds: o,
            snap: l,
          },
        };
      }
      function ty(t, e, r, n, a) {
        var i = th(e, r, n),
          o = i.horizontal,
          s = i.vertical,
          u = tt(t, r, n, a),
          l = u.horizontal,
          c = u.vertical,
          f = tR(o[0], l),
          p = tR(s[0], c),
          d = Math.abs(f),
          h = Math.abs(p);
        return {
          horizontal: {
            isBound: o[0].isBound,
            isSnap: l.isSnap,
            snapIndex: l.index,
            offset: f,
            dist: d,
            bounds: o,
            snap: l,
          },
          vertical: {
            isBound: s[0].isBound,
            isSnap: c.isSnap,
            snapIndex: c.index,
            offset: p,
            dist: h,
            bounds: s,
            snap: c,
          },
        };
      }
      function tC(t, e) {
        return t.isBound ? t.offset : e.isSnap ? e.offset : 0;
      }
      function tP(t) {
        var e = t.state;
        if (!e.guidelines || !e.guidelines.length) {
          var r = t.state.container,
            n = t.props.snapContainer || r,
            a = e.containerClientRect,
            i = { left: 0, top: 0, bottom: 0, right: 0 };
          if (r !== n) {
            var o = eO(n, !0);
            if (o) {
              var u = ep(o),
                l = eT(e, [u.left - a.left, u.top - a.top]),
                c = eT(e, [u.right - a.right, u.bottom - a.bottom]);
              (i.left = (0, s.P2)(l[0], 0.1)),
                (i.top = (0, s.P2)(l[1], 0.1)),
                (i.right = (0, s.P2)(c[0], 0.1)),
                (i.bottom = (0, s.P2)(c[1], 0.1));
            }
          }
          (e.snapOffset = i), (e.guidelines = J(t)), (e.enableSnap = !0);
        }
      }
      function tz(t, e, r, n, a, i) {
        var o = ee(t, e, r, i ? 4 : 3),
          s = tj(o, n);
        return eh(o, (0, u.h9)(a, s));
      }
      function tB(t, e, r, n, a, i, o, l) {
        for (
          var c = eg(t.state), f = t.props.keepRatio, p = 0, d = 0, h = 0;
          h < 2;
          ++h
        ) {
          var g = (function (t, e, r, n, a, i) {
              var o = (function (t, e, r) {
                  var n = [];
                  if (r)
                    1 !== Math.abs(e[0]) || 1 !== Math.abs(e[1])
                      ? n.push(
                          [e, [-1, -1]],
                          [e, [-1, 1]],
                          [e, [1, -1]],
                          [e, [1, 1]]
                        )
                      : n.push([e, [t[0], -t[1]]], [e, [-t[0], t[1]]], [e, t]),
                      n.push([e, t]);
                  else if (t[0] && t[1])
                    n.push([e, [t[0], -t[1]]], [e, [-t[0], t[1]]]);
                  else if (t[0]) {
                    var a = 1 === Math.abs(e[0]) ? [1] : [1, -1];
                    a.forEach(function (r) {
                      n.push(
                        [
                          [e[0], -1],
                          [r * t[0], -1],
                        ],
                        [
                          [e[0], 0],
                          [r * t[0], 0],
                        ],
                        [
                          [e[0], 1],
                          [r * t[0], 1],
                        ]
                      );
                    });
                  } else if (t[1]) {
                    var a = 1 === Math.abs(e[1]) ? [1] : [1, -1];
                    a.forEach(function (r) {
                      n.push(
                        [
                          [-1, e[1]],
                          [-1, r * t[1]],
                        ],
                        [
                          [0, e[1]],
                          [0, r * t[1]],
                        ],
                        [
                          [1, e[1]],
                          [1, r * t[1]],
                        ]
                      );
                    });
                  } else
                    n.push(
                      [e, [1, 0]],
                      [e, [-1, 0]],
                      [e, [0, -1]],
                      [e, [0, 1]],
                      [
                        [1, 0],
                        [1, -1],
                      ],
                      [
                        [1, 0],
                        [1, 1],
                      ],
                      [
                        [0, 1],
                        [1, 1],
                      ],
                      [
                        [0, 1],
                        [-1, 1],
                      ],
                      [
                        [-1, 0],
                        [-1, -1],
                      ],
                      [
                        [-1, 0],
                        [-1, 1],
                      ],
                      [
                        [0, -1],
                        [1, -1],
                      ],
                      [
                        [0, -1],
                        [-1, -1],
                      ]
                    );
                  return n;
                })(r, i.fixedDirection, n),
                l = tp(e, r, n),
                c = E(
                  E(
                    [],
                    o.map(function (r) {
                      var o,
                        l,
                        c,
                        f,
                        p,
                        d,
                        h,
                        g,
                        v,
                        m,
                        b,
                        x,
                        E = r[0],
                        S = r[1],
                        D = tj(e, E),
                        R = tj(e, S),
                        M = n
                          ? (function (t, e, r, n) {
                              var a = (function (t, e, r) {
                                  var n = tg(t),
                                    a = n.left,
                                    i = n.top,
                                    o = n.right,
                                    s = n.bottom,
                                    l = r[0],
                                    c = r[1],
                                    f = (0, u.h9)(r, e),
                                    p = f[0],
                                    d = f[1];
                                  1e-7 > Math.abs(p) && (p = 0),
                                    1e-7 > Math.abs(d) && (d = 0);
                                  var h = d > 0,
                                    g = p > 0,
                                    v = { isBound: !1, offset: 0, pos: 0 },
                                    m = { isBound: !1, offset: 0, pos: 0 };
                                  if (0 === p && 0 === d);
                                  else if (0 === p)
                                    h
                                      ? s < c &&
                                        ((m.pos = s), (m.offset = c - s))
                                      : i > c &&
                                        ((m.pos = i), (m.offset = c - i));
                                  else if (0 === d)
                                    g
                                      ? o < l &&
                                        ((v.pos = o), (v.offset = l - o))
                                      : a > l &&
                                        ((v.pos = a), (v.offset = l - a));
                                  else {
                                    var b = d / p,
                                      x = r[1] - b * l,
                                      E = 0,
                                      S = 0,
                                      D = !1;
                                    g && o <= l
                                      ? ((E = b * o + x), (S = o), (D = !0))
                                      : !g &&
                                        l <= a &&
                                        ((E = b * a + x), (S = a), (D = !0)),
                                      D && (E < i || E > s) && (D = !1),
                                      D ||
                                        (h && s <= c
                                          ? ((S = ((E = s) - x) / b), (D = !0))
                                          : h ||
                                            !(c <= i) ||
                                            ((S = ((E = i) - x) / b),
                                            (D = !0))),
                                      D &&
                                        ((v.isBound = !0),
                                        (v.pos = S),
                                        (v.offset = l - S),
                                        (m.isBound = !0),
                                        (m.pos = E),
                                        (m.offset = c - E));
                                  }
                                  return { vertical: v, horizontal: m };
                                })(t, e, r),
                                i = a.horizontal,
                                o = a.vertical,
                                s = n
                                  ? {
                                      horizontal: { isSnap: !1 },
                                      vertical: { isSnap: !1 },
                                    }
                                  : (function (t, e, r) {
                                      var n = r[0],
                                        a = r[1],
                                        i = e[0],
                                        o = e[1],
                                        s = (0, u.h9)(r, e),
                                        l = s[0],
                                        c = s[1],
                                        f = c > 0,
                                        p = l > 0;
                                      (l = eB(l)), (c = eB(c));
                                      var d = { isSnap: !1, offset: 0, pos: 0 },
                                        h = { isSnap: !1, offset: 0, pos: 0 };
                                      if (0 === l && 0 === c)
                                        return { vertical: d, horizontal: h };
                                      var g = $(t, l ? [n] : [], c ? [a] : []),
                                        v = g.vertical,
                                        m = g.horizontal;
                                      v.posInfos.filter(function (t) {
                                        var e = t.pos;
                                        return p ? e >= i : e <= i;
                                      }),
                                        m.posInfos.filter(function (t) {
                                          var e = t.pos;
                                          return f ? e >= o : e <= o;
                                        }),
                                        (v.isSnap = v.posInfos.length > 0),
                                        (m.isSnap = m.posInfos.length > 0);
                                      var b = tr(v),
                                        x = b.isSnap,
                                        E = b.guideline,
                                        S = tr(m),
                                        D = S.isSnap,
                                        R = S.guideline,
                                        M = D ? R.pos[1] : 0,
                                        y = x ? E.pos[0] : 0;
                                      if (0 === l)
                                        D &&
                                          ((h.isSnap = !0),
                                          (h.pos = R.pos[1]),
                                          (h.offset = a - h.pos));
                                      else if (0 === c)
                                        x &&
                                          ((d.isSnap = !0),
                                          (d.pos = y),
                                          (d.offset = n - y));
                                      else {
                                        var C = c / l,
                                          P = r[1] - C * n,
                                          z = 0,
                                          B = 0,
                                          G = !1;
                                        x
                                          ? ((z = C * (B = y) + P), (G = !0))
                                          : D &&
                                            ((B = ((z = M) - P) / C), (G = !0)),
                                          G &&
                                            ((d.isSnap = !0),
                                            (d.pos = B),
                                            (d.offset = n - B),
                                            (h.isSnap = !0),
                                            (h.pos = z),
                                            (h.offset = a - z));
                                      }
                                      return { vertical: d, horizontal: h };
                                    })(t, e, r),
                                l = s.horizontal,
                                c = s.vertical,
                                f = tC(i, l),
                                p = tC(o, c),
                                d = Math.abs(f),
                                h = Math.abs(p);
                              return {
                                horizontal: {
                                  isBound: i.isBound,
                                  isSnap: l.isSnap,
                                  offset: f,
                                  dist: d,
                                },
                                vertical: {
                                  isBound: o.isBound,
                                  isSnap: c.isSnap,
                                  offset: p,
                                  dist: h,
                                },
                              };
                            })(t, D, R, a)
                          : tM(t, a, { vertical: [R[0]], horizontal: [R[1]] }),
                        y = M.horizontal,
                        C = y.offset,
                        P = y.isBound,
                        z = y.isSnap,
                        B = M.vertical,
                        G = B.offset,
                        O = B.isBound,
                        w = B.isSnap,
                        T = (0, u.h9)(S, E);
                      if (!G && !C)
                        return {
                          isBound: O || P,
                          isSnap: w || z,
                          sign: T,
                          offset: [0, 0],
                        };
                      var A =
                        ((o = ((0, s.jv)(D, R) / Math.PI) * 180),
                        (c = (l = M.vertical).isBound),
                        (f = l.isSnap),
                        (p = l.dist),
                        (h = (d = M.horizontal).isBound),
                        (g = d.isSnap),
                        (v = d.dist),
                        (b = (m = o % 180) < 3 || m > 177),
                        (x = m > 87 && m < 93),
                        v < p && (c || (f && !x && (!n || !b)))
                          ? "vertical"
                          : !h && (!g || b || (n && x))
                          ? ""
                          : "horizontal");
                      if (!A)
                        return {
                          sign: T,
                          isBound: !1,
                          isSnap: !1,
                          offset: [0, 0],
                        };
                      var k = "vertical" === A,
                        I = tD(D, R, -(k ? G : C), k, i).offset.map(function (
                          t,
                          e
                        ) {
                          return t * (T[e] ? 2 / T[e] : 0);
                        });
                      return {
                        sign: T,
                        isBound: k ? O : P,
                        isSnap: k ? w : z,
                        offset: I,
                      };
                    }),
                    !0
                  ),
                  tf(t, l, tj(e, [0, 0]), i),
                  !0
                ),
                f = ti(c, 0),
                p = ti(c, 1);
              return {
                width: { isBound: f.isBound, offset: f.offset[0] },
                height: { isBound: p.isBound, offset: p.offset[1] },
              };
            })(t, e(p, d), a, f, o, l),
            v = g.width,
            m = g.height,
            b = v.isBound,
            x = m.isBound,
            S = v.offset,
            D = m.offset;
          if (
            (1 !== h || (b || (S = 0), x || (D = 0)), 0 === h && o && !b && !x)
          )
            return [0, 0];
          if (f) {
            var R = Math.abs(S) * (r ? 1 / r : 1),
              M = Math.abs(D) * (n ? 1 / n : 1);
            (b && x ? R < M : x || (!b && R < M))
              ? (S = (r * D) / n)
              : (D = (n * S) / r);
          }
          (p += S), (d += D);
        }
        if (a[0] && a[1]) {
          var y = (function (t, e, r, n, a) {
              var i = [-r[0], -r[1]],
                o = t.state,
                u = o.width,
                l = o.height,
                c = t.props.bounds,
                f = 1 / 0,
                p = 1 / 0;
              if (c) {
                var d = [
                    [r[0], -r[1]],
                    [-r[0], r[1]],
                  ],
                  h = c.left,
                  g = void 0 === h ? -1 / 0 : h,
                  v = c.top,
                  m = void 0 === v ? -1 / 0 : v,
                  b = c.right,
                  x = void 0 === b ? 1 / 0 : b,
                  E = c.bottom,
                  S = void 0 === E ? 1 / 0 : E;
                d.forEach(function (t) {
                  var r = t[0] !== i[0],
                    o = t[1] !== i[1],
                    c = tj(e, t),
                    d = (360 * (0, s.jv)(n, c)) / Math.PI;
                  if (o) {
                    var h = c.slice();
                    (2 > Math.abs(d - 360) || 2 > Math.abs(d - 180)) &&
                      (h[1] = n[1]);
                    var v = tD(n, h, (n[1] < c[1] ? S : m) - c[1], !1, a),
                      b = v.offset[1],
                      E = v.isOutside;
                    isNaN(b) || (p = l + (E ? 1 : -1) * Math.abs(b));
                  }
                  if (r) {
                    var h = c.slice();
                    (2 > Math.abs(d - 90) || 2 > Math.abs(d - 270)) &&
                      (h[0] = n[0]);
                    var D = tD(n, h, (n[0] < c[0] ? x : g) - c[0], !0, a),
                      R = D.offset[0],
                      M = D.isOutside;
                    isNaN(R) || (f = u + (M ? 1 : -1) * Math.abs(R));
                  }
                });
              }
              return { maxWidth: f, maxHeight: p };
            })(t, c, a, i, l),
            C = y.maxWidth,
            P = y.maxHeight,
            z = (function (t, e, r, n, a, i, o, s, u) {
              var l = tj(e, o),
                c = tM(t, s, { vertical: [l[0]], horizontal: [l[1]] }),
                f = c.horizontal.offset,
                p = c.vertical.offset;
              if (p || f) {
                var d = tN({ datas: u, distX: -p, distY: -f }),
                  h = d[0],
                  g = d[1];
                return [
                  Math.min(a || 1 / 0, r + o[0] * h) - r,
                  Math.min(i || 1 / 0, n + o[1] * g) - n,
                ];
              }
              return [0, 0];
            })(
              t,
              e(p, d).map(function (t) {
                return t.map(function (t) {
                  return (0, s.P2)(t, 1e-4);
                });
              }),
              r + p,
              n + d,
              C,
              P,
              a,
              o,
              l
            ),
            S = z[0],
            D = z[1];
          (p += S), (d += D);
        }
        return [p, d];
      }
      function tG(t) {
        var e = [];
        return (
          t.forEach(function (t) {
            t.guidelineInfos.forEach(function (t) {
              var r = t.guideline;
              e.indexOf(r) > -1 || e.push(r);
            });
          }),
          e
        );
      }
      function tO(t, e, r, n, a, i) {
        var o = th(tg(t, i), e, r),
          u = o.vertical,
          l = o.horizontal;
        u.forEach(function (t) {
          t.isBound && n.push({ type: "bounds", pos: t.pos });
        }),
          l.forEach(function (t) {
            t.isBound && a.push({ type: "bounds", pos: t.pos });
          });
        var c = (function (t) {
            var e = t.props.innerBounds;
            if (!e) return { vertical: [], horizontal: [] };
            var r = t.getRect(),
              n = r.pos1,
              a = r.pos2,
              i = r.pos3,
              o = r.pos4,
              s = tj([n, a, i, o], [0, 0]),
              u = e.left,
              l = e.top,
              c = e.width,
              f = e.height,
              p = [
                [u, l],
                [u, l + f],
              ],
              d = [
                [u, l],
                [u + c, l],
              ],
              h = [
                [u + c, l],
                [u + c, l + f],
              ],
              g = [
                [u, l + f],
                [u + c, l + f],
              ],
              v = [],
              m = [],
              b = { top: !1, bottom: !1, left: !1, right: !1 };
            return (
              [
                [n, a],
                [a, o],
                [o, i],
                [i, n],
              ].forEach(function (t) {
                var e = to(s, t),
                  r = e.horizontal,
                  n = e.vertical,
                  a = tc(t, d, n, 1, !0),
                  i = tc(t, g, n, 1, !0),
                  o = tc(t, p, r, 1, !0),
                  x = tc(t, h, r, 1, !0);
                a.isBound && !b.top && (v.push(l), (b.top = !0)),
                  i.isBound && !b.bottom && (v.push(l + f), (b.bottom = !0)),
                  o.isBound && !b.left && (m.push(u), (b.left = !0)),
                  x.isBound && !b.right && (m.push(u + c), (b.right = !0));
              }),
              { horizontal: v, vertical: m }
            );
          })(t),
          f = c.vertical,
          p = c.horizontal;
        f.forEach(function (t) {
          (0, s.cx)(n, function (e) {
            var r = e.type,
              n = e.pos;
            return "bounds" === r && n === t;
          }) >= 0 || n.push({ type: "bounds", pos: t });
        }),
          p.forEach(function (t) {
            (0, s.cx)(a, function (e) {
              var r = e.type,
                n = e.pos;
              return "bounds" === r && n === t;
            }) >= 0 || a.push({ type: "bounds", pos: t });
          });
      }
      var tw = {
        name: "draggable",
        props: {
          draggable: Boolean,
          throttleDrag: Number,
          throttleDragRotate: Number,
          startDragRotate: Number,
          edgeDraggable: Boolean,
        },
        events: {
          onDragStart: "dragStart",
          onDrag: "drag",
          onDragEnd: "dragEnd",
          onDragGroupStart: "dragGroupStart",
          onDragGroup: "dragGroup",
          onDragGroupEnd: "dragGroupEnd",
        },
        render: function (t, e) {
          var r = t.props,
            n = r.throttleDragRotate,
            a = r.zoom,
            i = t.state,
            o = i.dragInfo,
            u = i.beforeOrigin;
          if (!n || !o) return [];
          var l = o.dist;
          if (!l[0] && !l[1]) return [];
          var c = ea(l),
            f = (0, s.jv)(l, [0, 0]);
          return [
            e.createElement("div", {
              className: t0("line", "horizontal", "dragline", "dashed"),
              key: "dragRotateGuideline",
              style: {
                width: "".concat(c, "px"),
                transform: "translate("
                  .concat(u[0], "px, ")
                  .concat(u[1], "px) rotate(")
                  .concat(f, "rad) scaleY(")
                  .concat(a, ")"),
              },
            }),
          ];
        },
        dragStart: function (t, e) {
          var r = e.datas,
            n = e.parentEvent,
            a = e.parentGesto,
            i = t.state,
            o = i.target;
          if (i.gesto) return !1;
          i.gesto = a || t.targetGesto;
          var s = eS(o);
          (r.datas = {}),
            (r.left = parseFloat(s.left || "") || 0),
            (r.top = parseFloat(s.top || "") || 0),
            (r.bottom = parseFloat(s.bottom || "") || 0),
            (r.right = parseFloat(s.right || "") || 0),
            (r.startValue = [0, 0]),
            tA(t, e),
            tX(e, "translate"),
            (r.absolutePoses = eg(t.state)),
            (r.prevDist = [0, 0]),
            (r.prevBeforeDist = [0, 0]),
            (r.isDrag = !1),
            (r.deltaOffset = [0, 0]);
          var u = em(
            t,
            e,
            x(
              {
                set: function (t) {
                  r.startValue = t;
                },
              },
              t_(e)
            )
          );
          return (
            !1 !== (n || eE(t, "onDragStart", u))
              ? ((r.isDrag = !0),
                (t.state.dragInfo = { startRect: t.getRect(), dist: [0, 0] }))
              : ((i.gesto = null), (r.isPinch = !1)),
            !!r.isDrag && u
          );
        },
        drag: function (t, e) {
          if (e) {
            tk(e, "translate");
            var r,
              n,
              a,
              i,
              o,
              l,
              c = e.datas,
              f = e.parentEvent,
              p = e.parentFlag,
              d = e.isPinch,
              h = e.isRequest,
              g = e.deltaOffset,
              v = e.distX,
              m = e.distY,
              b = c.isDrag,
              x = c.prevDist,
              E = c.prevBeforeDist,
              S = c.startValue;
            if (b) {
              g && ((v += g[0]), (m += g[1]));
              var D = t.props,
                R = D.parentMoveable,
                M = f ? 0 : D.throttleDrag || 0,
                y = f ? 0 : D.throttleDragRotate || 0,
                C = !1,
                P = 0;
              if (!f && y > 0 && (v || m)) {
                var z = D.startDragRotate || 0,
                  B =
                    (0, s.P2)(
                      z + (180 * (0, s.jv)([0, 0], [v, m])) / Math.PI,
                      y
                    ) - z,
                  G = m * Math.abs(Math.cos(((B - 90) / 180) * Math.PI)),
                  O = ea([v * Math.abs(Math.cos((B / 180) * Math.PI)), G]);
                (v = O * Math.cos((P = (B * Math.PI) / 180))),
                  (m = O * Math.sin(P));
              }
              if (!d && !f && !p && (!y || v || m)) {
                var w = (function (t, e, r, n, a, i) {
                    if (!U(t, "draggable"))
                      return [
                        { isSnap: !1, isBound: !1, offset: 0 },
                        { isSnap: !1, isBound: !1, offset: 0 },
                      ];
                    var o,
                      l,
                      c,
                      f,
                      p,
                      d,
                      h,
                      g,
                      v,
                      m,
                      b,
                      x,
                      E,
                      S,
                      D,
                      R,
                      M,
                      y,
                      C,
                      P = eh(i.absolutePoses, [e, r]),
                      z = er(P),
                      B = z.left,
                      G = z.right,
                      O = z.top,
                      w = z.bottom,
                      T = {
                        horizontal: P.map(function (t) {
                          return t[1];
                        }),
                        vertical: P.map(function (t) {
                          return t[0];
                        }),
                      },
                      A = Z(K(t.props.snapDirections), {
                        left: B,
                        right: G,
                        top: O,
                        bottom: w,
                        center: (B + G) / 2,
                        middle: (O + w) / 2,
                      }),
                      k = tM(t, a, A, T),
                      I = k.vertical,
                      W = k.horizontal,
                      F =
                        ((S = ti(
                          (E = tf(
                            t,
                            tp(P, [0, 0], !1).map(function (t) {
                              var e = t[0],
                                r = t[1],
                                n = t[2];
                              return [
                                e.map(function (t) {
                                  return 2 * Math.abs(t);
                                }),
                                r,
                                n,
                              ];
                            }),
                            tj(P, [0, 0]),
                            i
                          )),
                          0
                        )),
                        (D = ti(E, 1)),
                        (R = 0),
                        (M = 0),
                        (y = S.isVerticalBound || D.isVerticalBound),
                        (C = S.isHorizontalBound || D.isHorizontalBound),
                        (y || C) &&
                          ((R = ((c = (o = {
                            datas: i,
                            distX: -S.offset[0],
                            distY: -D.offset[1],
                          }).datas),
                          (f = o.distX),
                          (p = o.distY),
                          (d = c.beforeMatrix),
                          (h = c.matrix),
                          (g = c.is3d),
                          (v = c.startDragBeforeDist),
                          (m = c.startDragDist),
                          (b = c.absoluteOrigin),
                          (x = (0, u.h9)(
                            (0, u.Kf)(
                              l ? d : h,
                              (0, u.PD)(l ? v : m, [f, p]),
                              g ? 4 : 3
                            ),
                            b
                          )))[0]),
                          (M = x[1])),
                        {
                          vertical: { isBound: y, offset: R },
                          horizontal: { isBound: C, offset: M },
                        }),
                      N = F.vertical,
                      q = F.horizontal,
                      H = I.isSnap,
                      j = W.isSnap,
                      Y = I.isBound || N.isBound,
                      _ = W.isBound || q.isBound,
                      X = (function (t, e, r, n, a) {
                        var i = e[0],
                          o = e[1],
                          l = r[0],
                          c = r[1],
                          f = n[0],
                          p = n[1],
                          d = a[0],
                          h = a[1],
                          g = -d,
                          v = -h;
                        if (t && i && o) {
                          (g = 0), (v = 0);
                          var m = [];
                          if (
                            (l && c
                              ? m.push([0, h], [d, 0])
                              : l
                              ? m.push([d, 0])
                              : c
                              ? m.push([0, h])
                              : f && p
                              ? m.push([0, h], [d, 0])
                              : f
                              ? m.push([d, 0])
                              : p && m.push([0, h]),
                            m.length)
                          ) {
                            m.sort(function (t, e) {
                              return (
                                ea((0, u.h9)([i, o], t)) -
                                ea((0, u.h9)([i, o], e))
                              );
                            });
                            var b = m[0];
                            if (
                              (b[0] && Math.abs(i) > s.Vp
                                ? (v =
                                    (o * Math.abs(i + (g = -b[0]))) /
                                      Math.abs(i) -
                                    o)
                                : b[1] &&
                                  Math.abs(o) > s.Vp &&
                                  (g =
                                    (i * Math.abs(o + (v = -b[1]))) /
                                      Math.abs(o) -
                                    i),
                              t && c && l)
                            ) {
                              if (
                                Math.abs(g) > s.Vp &&
                                Math.abs(g) < Math.abs(d)
                              ) {
                                var x = Math.abs(d) / Math.abs(g);
                                (g *= x), (v *= x);
                              } else if (
                                Math.abs(v) > s.Vp &&
                                Math.abs(v) < Math.abs(h)
                              ) {
                                var x = Math.abs(h) / Math.abs(v);
                                (g *= x), (v *= x);
                              } else (g = eM(-d, g)), (v = eM(-h, v));
                            }
                          }
                        } else (g = i || l ? -d : 0), (v = o || c ? -h : 0);
                        return [g, v];
                      })(
                        n,
                        [e, r],
                        [Y, _],
                        [H, j],
                        [eM(I.offset, N.offset), eM(W.offset, q.offset)]
                      );
                    return [
                      { isBound: Y, isSnap: H, offset: X[0] },
                      { isBound: _, isSnap: j, offset: X[1] },
                    ];
                  })(t, v, m, y, h || g, c),
                  T = w[0],
                  A = w[1],
                  k = T.isSnap,
                  I = T.isBound,
                  W = T.offset,
                  F = A.isSnap,
                  N = A.isBound,
                  q = A.offset;
                (C = k || F || I || N), (v += W), (m += q);
              }
              var H = (0, u.PD)(tF({ datas: c, distX: v, distY: m }), S),
                j = (0, u.PD)(
                  ((i = (a = tF({
                    datas: (n = (r = { datas: c, distX: v, distY: m }).datas),
                    distX: r.distX,
                    distY: r.distY,
                  }))[0]),
                  (o = a[1]),
                  (l = tW(n, (0, u.vc)([i, o], 4))),
                  (0, u.Kf)(l, (0, u.WK)([0, 0, 0], 4), 4)),
                  S
                );
              y || C || ((0, s.Xh)(j, M), (0, s.Xh)(H, M));
              var Y = (0, u.h9)(H, S),
                _ = (0, u.h9)(j, S),
                X = (0, u.h9)(_, x),
                L = (0, u.h9)(Y, E);
              (c.prevDist = _),
                (c.prevBeforeDist = Y),
                (c.passDelta = X),
                (c.passDist = _);
              var V = c.left + Y[0],
                Q = c.top + Y[1],
                J = c.right - Y[0],
                $ = c.bottom - Y[1],
                tt = tI(
                  c,
                  "translate(".concat(j[0], "px, ").concat(j[1], "px)"),
                  "translate(".concat(_[0], "px, ").concat(_[1], "px)")
                );
              if (
                (tV(e, tt),
                (t.state.dragInfo.dist = f ? [0, 0] : _),
                !(
                  !f &&
                  !R &&
                  X.every(function (t) {
                    return !t;
                  }) &&
                  L.some(function (t) {
                    return !t;
                  })
                ))
              ) {
                var te = t.state,
                  tr = em(t, e, {
                    transform: tt,
                    dist: _,
                    delta: X,
                    translate: j,
                    beforeDist: Y,
                    beforeDelta: L,
                    beforeTranslate: H,
                    left: V,
                    top: Q,
                    right: J,
                    bottom: $,
                    width: te.width,
                    height: te.height,
                    isPinch: d,
                  });
                return f || eE(t, "onDrag", tr), tr;
              }
            }
          }
        },
        dragAfter: function (t, e) {
          var r = e.datas,
            n = r.deltaOffset;
          return (
            (!!n[0] || !!n[1]) &&
            ((r.deltaOffset = [0, 0]),
            this.drag(t, x(x({}, e), { deltaOffset: n })))
          );
        },
        dragEnd: function (t, e) {
          var r = e.parentEvent,
            n = e.datas;
          if (((t.state.gesto = null), (t.state.dragInfo = null), n.isDrag)) {
            n.isDrag = !1;
            var a = eb(t, e, {});
            return r || eE(t, "onDragEnd", a), a;
          }
        },
        dragGroupStart: function (t, e) {
          var r = e.datas,
            n = e.clientX,
            a = e.clientY,
            i = this.dragStart(t, e);
          if (!i) return !1;
          var o = A(t, this, "dragStart", [n || 0, a || 0], e, !1),
            s = x(x({}, i), { targets: t.props.targets, events: o }),
            u = eE(t, "onDragGroupStart", s);
          return (r.isDrag = !1 !== u), !!r.isDrag && i;
        },
        dragGroup: function (t, e) {
          if (e.datas.isDrag) {
            var r = this.drag(t, e),
              n = A(t, this, "drag", e.datas.passDelta, e, !1);
            if (r) {
              var a = x({ targets: t.props.targets, events: n }, r);
              return eE(t, "onDragGroup", a), a;
            }
          }
        },
        dragGroupEnd: function (t, e) {
          var r = e.isDrag;
          if (e.datas.isDrag) {
            this.dragEnd(t, e);
            var n = A(t, this, "dragEnd", [0, 0], e, !1);
            return (
              eE(
                t,
                "onDragGroupEnd",
                eb(t, e, { targets: t.props.targets, events: n })
              ),
              r
            );
          }
        },
        request: function (t) {
          var e = {},
            r = t.getRect(),
            n = 0,
            a = 0;
          return {
            isControl: !1,
            requestStart: function () {
              return { datas: e };
            },
            request: function (t) {
              return (
                "x" in t
                  ? (n = t.x - r.left)
                  : "deltaX" in t && (n += t.deltaX),
                "y" in t ? (a = t.y - r.top) : "deltaY" in t && (a += t.deltaY),
                { datas: e, distX: n, distY: a }
              );
            },
            requestEnd: function () {
              return { datas: e, isDrag: !0 };
            },
          };
        },
        unset: function (t) {
          t.state.dragInfo = null;
        },
      };
      function tT(t, e) {
        var r = e.clientX,
          n = e.clientY,
          a = e.datas,
          i = t.state,
          o = i.moveableClientRect,
          s = i.rootMatrix,
          l = i.is3d,
          c = i.pos1,
          f = o.left,
          p = o.top,
          d = (0, u.h9)(ey(s, [r - f, n - p], l ? 4 : 3), c),
          h = tN({ datas: a, distX: d[0], distY: d[1] });
        return [h[0], h[1]];
      }
      function tA(t, e) {
        var r = e.datas,
          n = t.state,
          a = n.allMatrix,
          i = n.beforeMatrix,
          o = n.is3d,
          s = n.left,
          l = n.top,
          c = n.origin,
          f = n.offsetMatrix,
          p = n.targetMatrix,
          d = n.transformOrigin,
          h = o ? 4 : 3;
        (r.is3d = o),
          (r.matrix = a),
          (r.targetMatrix = p),
          (r.beforeMatrix = i),
          (r.offsetMatrix = f),
          (r.transformOrigin = d),
          (r.inverseMatrix = (0, u.U_)(a, h)),
          (r.inverseBeforeMatrix = (0, u.U_)(i, h)),
          (r.absoluteOrigin = (0, u.WK)((0, u.PD)([s, l], c), h)),
          (r.startDragBeforeDist = (0, u.Kf)(
            r.inverseBeforeMatrix,
            r.absoluteOrigin,
            h
          )),
          (r.startDragDist = (0, u.Kf)(r.inverseMatrix, r.absoluteOrigin, h));
      }
      function tk(t, e) {
        var r,
          n,
          a,
          i,
          o,
          s,
          c,
          f,
          p,
          d,
          h,
          g,
          v,
          m,
          b,
          x,
          S = t.datas,
          D = t.originalDatas.beforeRenderable,
          R = S.transformIndex,
          M = D.nextTransforms,
          y = D.nextTransformAppendedIndexes,
          C = 0;
        -1 === R
          ? ((C = M.length), (S.transformIndex = C))
          : (C =
              R +
              y.filter(function (t) {
                return t < R;
              }).length);
        var P =
            ((r = C),
            (n = M.slice(0, r < 0 ? void 0 : r)),
            (a = M.slice(0, r < 0 ? void 0 : r + 1)),
            (i = M[r] || ""),
            (o = r < 0 ? [] : M.slice(r)),
            (s = r < 0 ? [] : M.slice(r + 1)),
            (c = (0, l.Qc)(n)),
            (f = (0, l.Qc)(a)),
            (p = (0, l.Qc)([i])),
            (d = (0, l.Qc)(o)),
            (h = (0, l.Qc)(s)),
            (g = (0, l.rk)(c)),
            (v = (0, l.rk)(f)),
            (m = (0, l.rk)(d)),
            (b = (0, l.rk)(h)),
            (x = (0, u.ml)(g, m, 4)),
            {
              transforms: M,
              beforeFunctionMatrix: g,
              beforeFunctionMatrix2: v,
              targetFunctionMatrix: (0, l.rk)(p),
              afterFunctionMatrix: m,
              afterFunctionMatrix2: b,
              allFunctionMatrix: x,
              beforeFunctions: c,
              beforeFunctions2: f,
              targetFunction: p[0],
              afterFunctions: d,
              afterFunctions2: h,
              beforeFunctionTexts: n,
              beforeFunctionTexts2: a,
              targetFunctionText: i,
              afterFunctionTexts: o,
              afterFunctionTexts2: s,
            }),
          z = P.targetFunction;
        (S.beforeFunctionTexts = P.beforeFunctionTexts),
          (S.afterFunctionTexts = P.afterFunctionTexts),
          (S.beforeTransform = P.beforeFunctionMatrix),
          (S.beforeTransform2 = P.beforeFunctionMatrix2),
          (S.targetTansform = P.targetFunctionMatrix),
          (S.afterTransform = P.afterFunctionMatrix),
          (S.afterTransform2 = P.afterFunctionMatrix2),
          (S.targetAllTransform = P.allFunctionMatrix),
          z.functionName === ("rotate" === e ? "rotateZ" : e)
            ? (S.afterFunctionTexts.splice(0, 1), (S.isAppendTransform = !1))
            : ((S.isAppendTransform = !0),
              (D.nextTransformAppendedIndexes = E(E([], y, !0), [C], !1)));
      }
      function tI(t, e, r) {
        return ""
          .concat(t.beforeFunctionTexts.join(" "), " ")
          .concat(t.isAppendTransform ? r : e, " ")
          .concat(t.afterFunctionTexts.join(" "));
      }
      function tW(t, e, r) {
        var n = t.beforeTransform,
          a = t.afterTransform,
          i = t.beforeTransform2,
          o = t.afterTransform2,
          s = t.targetAllTransform,
          l = r ? (0, u.ml)(s, e, 4) : (0, u.ml)(e, s, 4),
          c = (0, u.ml)((0, u.U_)(r ? i : n, 4), l, 4);
        return (0, u.ml)(c, (0, u.U_)(r ? o : a, 4), 4);
      }
      function tF(t) {
        var e = t.datas,
          r = t.distX,
          n = t.distY,
          a = e.inverseBeforeMatrix,
          i = e.is3d,
          o = e.startDragBeforeDist,
          s = e.absoluteOrigin;
        return (0, u.h9)((0, u.Kf)(a, (0, u.PD)(s, [r, n]), i ? 4 : 3), o);
      }
      function tN(t, e) {
        var r = t.datas,
          n = t.distX,
          a = t.distY,
          i = r.inverseBeforeMatrix,
          o = r.inverseMatrix,
          s = r.is3d,
          l = r.startDragBeforeDist,
          c = r.startDragDist,
          f = r.absoluteOrigin;
        return (0, u.h9)(
          (0, u.Kf)(e ? i : o, (0, u.PD)(f, [n, a]), s ? 4 : 3),
          e ? l : c
        );
      }
      function tq(t) {
        var e = [];
        return (
          t[1] >= 0 && (t[0] >= 0 && e.push(3), t[0] <= 0 && e.push(2)),
          t[1] <= 0 && (t[0] >= 0 && e.push(1), t[0] <= 0 && e.push(0)),
          e
        );
      }
      function tH(t, e) {
        return tq(e).map(function (e) {
          return t[e];
        });
      }
      function tj(t, e) {
        var r = tH(t, e);
        return [
          (0, s.Y8)(
            r.map(function (t) {
              return t[0];
            })
          ),
          (0, s.Y8)(
            r.map(function (t) {
              return t[1];
            })
          ),
        ];
      }
      function tY(t, e, r, n) {
        return (0, u.ml)(t, t1(e, n, r), n);
      }
      function t_(t) {
        var e = t.originalDatas.beforeRenderable;
        return {
          setTransform: function (r, n) {
            void 0 === n && (n = -1),
              (e.startTransforms = (0, s.kJ)(r) ? r : (0, s.WE)(r)),
              tL(t, n);
          },
          setTransformIndex: function (e) {
            tL(t, e);
          },
        };
      }
      function tX(t, e) {
        var r = t.originalDatas.beforeRenderable.startTransforms;
        tL(
          t,
          (0, s.cx)(r, function (t) {
            return 0 === t.indexOf("".concat(e, "("));
          })
        );
      }
      function tL(t, e) {
        var r = t.originalDatas.beforeRenderable,
          n = t.datas;
        if (((n.transformIndex = e), -1 !== e)) {
          var a = r.startTransforms[e];
          if (a) {
            var i = (0, l.Qc)([a]);
            n.startValue = i[0].functionValue;
          }
        }
      }
      function tV(t, e) {
        t.originalDatas.beforeRenderable.nextTransforms = (0, s.WE)(e);
      }
      function tU(t) {
        return t.originalDatas.beforeRenderable.nextTransforms.join(" ");
      }
      function tK(t, e, r, n, a) {
        return (
          tV(a, e), { transform: e, drag: tw.drag(t, O(a, t.state, r, n, !1)) }
        );
      }
      function tZ(t, e, r, n, a) {
        var i,
          o,
          s,
          c,
          f,
          p,
          d,
          h,
          g = t.state,
          v = g.left,
          m = g.top,
          b = t.props.groupable,
          x =
            ((o = (i = t.state).transformOrigin),
            (s = i.offsetMatrix),
            (c = i.is3d),
            (f = a.beforeTransform),
            (p = a.afterTransform),
            (d = c ? 4 : 3),
            (h = (0, l.Y6)([e])),
            tY(s, (0, u.mA)((0, u.ml)((0, u.ml)(f, h, 4), p, 4), 4, d), o, d)),
          E = b ? v : 0,
          S = b ? m : 0,
          D = tJ(t, r, x),
          R = (0, u.h9)(n, D);
        return (0, u.h9)(R, [E, S]);
      }
      function tQ(t) {
        var e = t.state,
          r = e.width,
          n = e.height,
          a = e.transformOrigin;
        return [-1 + a[0] / (r / 2), -1 + a[1] / (n / 2)];
      }
      function tJ(t, e, r) {
        void 0 === r && (r = t.state.allMatrix);
        var n = t.state,
          a = n.width,
          i = n.height,
          o = n.is3d;
        return et(r, [(a / 2) * (1 + e[0]), (i / 2) * (1 + e[1])], o ? 4 : 3);
      }
      function t$(t, e) {
        return tj(eg(t.state), e);
      }
      function t0() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return o.tI.apply(void 0, E([M], t, !1));
      }
      function t1(t, e, r) {
        return (0, u.KF)(
          e,
          (0, u.Jm)(r, e),
          t,
          (0, u.Jm)(
            r.map(function (t) {
              return -t;
            }),
            e
          )
        );
      }
      function t2(t) {
        var e = t.transformOrigin;
        return e ? e.split(" ") : ["0", "0"];
      }
      function t3(t, e) {
        void 0 === e && (e = eS(t));
        var r = e.transform;
        if (r && "none" !== r) return e.transform;
        if ("transform" in t) {
          var n = t.transform.baseVal;
          if (!n) return "";
          var a = n.length;
          if (!a) return "";
          for (var i = [], o = 0; o < a; ++o)
            !(function (t) {
              var e = n[0].matrix;
              i.push(
                "matrix(".concat(
                  ["a", "b", "c", "d", "e", "f"]
                    .map(function (t) {
                      return e[t];
                    })
                    .join(", "),
                  ")"
                )
              );
            })(0);
          return i.join(" ");
        }
        return "";
      }
      function t4(t, e, r) {
        for (
          var n = document.body,
            a = !t || r ? t : t.parentElement,
            i = t === e || a === e,
            o = "relative";
          a && a !== n;

        ) {
          e === a && (i = !0);
          var s = eS(a),
            u = a.tagName.toLowerCase(),
            l = t3(a, s);
          if (
            ((o = s.position),
            "svg" === u || "static" !== o || (l && "none" !== l))
          )
            break;
          (a = a.parentElement), (o = "relative");
        }
        return {
          isStatic: "static" === o,
          isEnd: i || !a || a === n,
          offsetParent: a || n,
        };
      }
      function t5(t, e, r) {
        void 0 === r && (r = eS(t));
        var n = eS(document.body),
          a = n.position;
        if (!e && (!a || "static" === a)) return [0, 0];
        var i = parseInt(n.marginLeft, 10),
          o = parseInt(n.marginTop, 10);
        return (
          "absolute" === r.position &&
            (("auto" !== r.top || "auto" !== r.bottom) && (o = 0),
            ("auto" !== r.left || "auto" !== r.right) && (i = 0)),
          [i, o]
        );
      }
      function t9(t) {
        t.forEach(function (t) {
          var e = t.matrix;
          e && (t.matrix = (0, u.mA)(e, 3, 4));
        });
      }
      function t6(t, e, r) {
        for (
          var n,
            a,
            i,
            o = t,
            c = [],
            f = !r && t === e,
            p = f,
            d = !1,
            h = 3,
            g = t4(e, e, !0).offsetParent;
          o && !p;

        ) {
          p = f;
          var v = eS(o),
            m = v.position,
            b = "fixed" === m,
            x = t3(o, v),
            E = (0, u.YX)(
              x && "none" !== x
                ? (0, s.Kn)(x)
                  ? x
                  : (0, l.Y6)(x)
                : [1, 0, 0, 1, 0, 0]
            ),
            S = E.length;
          !d &&
            16 === S &&
            ((d = !0), (h = 4), t9(c), i && (i = (0, u.mA)(i, 3, 4))),
            d && 9 === S && (E = (0, u.mA)(E, 3, 4));
          var M = (function (t, e, r, n) {
              var a,
                i,
                o,
                u = t.tagName.toLowerCase(),
                l = t.offsetLeft,
                c = t.offsetTop;
              if (n) {
                var f = (e || document.documentElement).getBoundingClientRect();
                (l -= f.left), (c -= f.top);
              }
              var p = (0, s.o8)(l),
                d = !p;
              return (
                d || "svg" === u
                  ? (o = (i = t2(r).map(function (t) {
                      return parseFloat(t);
                    })).slice())
                  : ((o = (i = R
                      ? t2(eS(t, ":before")).map(function (e, r) {
                          var n,
                            a = (0, s.jL)(e),
                            i = a.value,
                            o = a.unit;
                          return (
                            i *
                            ((n = 0 === r),
                            "%" === o
                              ? t7(t.ownerSVGElement)[n ? "width" : "height"] /
                                100
                              : 1)
                          );
                        })
                      : t2(r).map(function (t) {
                          return parseFloat(t);
                        })).slice()),
                    (d = !0),
                    (l = (a = (function (t, e) {
                      if (!t.getBBox) return [0, 0];
                      var r = t.getBBox(),
                        n = t7(t.ownerSVGElement),
                        a = r.x - n.x,
                        i = r.y - n.y;
                      return [a, i, e[0] - a, e[1] - i];
                    })(t, i))[0]),
                    (c = a[1]),
                    (i[0] = a[2]),
                    (i[1] = a[3])),
                {
                  tagName: u,
                  isSVG: p,
                  hasOffset: d,
                  offset: [l || 0, c || 0],
                  origin: i,
                  targetOrigin: o,
                }
              );
            })(o, e, v, b),
            y = M.tagName,
            C = M.hasOffset,
            P = M.isSVG,
            z = M.origin,
            B = M.targetOrigin,
            G = M.offset,
            O = G[0],
            w = G[1];
          "svg" === y && i
            ? (c.push({
                type: "target",
                target: o,
                matrix: (function (t, e) {
                  var r = t7(t),
                    n = r.width,
                    a = r.height,
                    i = r.clientWidth,
                    o = r.clientHeight,
                    s = i / n,
                    l = o / a,
                    c = t.preserveAspectRatio.baseVal,
                    f = c.align,
                    p = c.meetOrSlice,
                    d = [0, 0],
                    h = [s, l],
                    g = [0, 0];
                  if (1 !== f) {
                    var v = (f - 2) % 3,
                      m = Math.floor((f - 2) / 3);
                    (d[0] = (n * v) / 2), (d[1] = (a * m) / 2);
                    var b = 2 === p ? Math.max(l, s) : Math.min(s, l);
                    (h[0] = b),
                      (h[1] = b),
                      (g[0] = ((i - n) / 2) * v),
                      (g[1] = ((o - a) / 2) * m);
                  }
                  var x = (0, u.Wi)(h, e);
                  return (
                    (x[e * (e - 1)] = g[0]),
                    (x[e * (e - 1) + 1] = g[1]),
                    t1(x, e, d)
                  );
                })(o, h),
              }),
              c.push({ type: "offset", target: o, matrix: (0, u.Te)(h) }))
            : "g" === y && t !== o && ((O = 0), (w = 0));
          var T = t4(o, e),
            A = T.offsetParent,
            k = T.isEnd,
            I = T.isStatic;
          D &&
            C &&
            !P &&
            I &&
            ("relative" === m || "static" === m) &&
            ((O -= A.offsetLeft), (w -= A.offsetTop), (f = f || k));
          var W = 0,
            F = 0;
          if (
            (C && g !== A && ((W = A.clientLeft), (F = A.clientTop)),
            C && A === document.body)
          ) {
            var N = t5(o, !1, v);
            (O += N[0]), (w += N[1]);
          }
          if (
            (c.push({ type: "target", target: o, matrix: t1(E, h, z) }),
            C
              ? c.push({
                  type: "offset",
                  target: o,
                  matrix: (0, u.Jm)(
                    [O - o.scrollLeft + W, w - o.scrollTop + F],
                    h
                  ),
                })
              : c.push({ type: "offset", target: o, origin: z }),
            i || (i = E),
            n || (n = z),
            a || (a = B),
            p || b)
          )
            break;
          (o = A), (f = k), (r && o !== document.body) || (p = f);
        }
        return (
          i || (i = (0, u.Te)(h)),
          n || (n = [0, 0]),
          a || (a = [0, 0]),
          {
            offsetContainer: g,
            matrixes: c,
            targetMatrix: i,
            transformOrigin: n,
            targetOrigin: a,
            is3d: d,
          }
        );
      }
      function t8(t, e) {
        return (
          void 0 === e && (e = t.length > 9),
          ""
            .concat(e ? "matrix3d" : "matrix", "(")
            .concat((0, u.pQ)(t, !e).join(","), ")")
        );
      }
      function t7(t) {
        var e = t.clientWidth,
          r = t.clientHeight;
        if (!t)
          return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            clientWidth: e,
            clientHeight: r,
          };
        var n = t.viewBox,
          a = (n && n.baseVal) || { x: 0, y: 0, width: 0, height: 0 };
        return {
          x: a.x,
          y: a.y,
          width: a.width || e,
          height: a.height || r,
          clientWidth: e,
          clientHeight: r,
        };
      }
      function et(t, e, r) {
        return (0, u.Kf)(t, (0, u.WK)(e, r), r);
      }
      function ee(t, e, r, n) {
        return [
          [0, 0],
          [e, 0],
          [0, r],
          [e, r],
        ].map(function (e) {
          return et(t, e, n);
        });
      }
      function er(t) {
        var e = t.map(function (t) {
            return t[0];
          }),
          r = t.map(function (t) {
            return t[1];
          }),
          n = Math.min.apply(Math, e),
          a = Math.min.apply(Math, r),
          i = Math.max.apply(Math, e),
          o = Math.max.apply(Math, r);
        return {
          left: n,
          top: a,
          right: i,
          bottom: o,
          width: i - n,
          height: o - a,
        };
      }
      function en(t, e, r, n) {
        var a = 16 === t.length ? 4 : 3,
          i = ee(t, r, n, a),
          o = i[0],
          u = o[0],
          l = o[1],
          c = i[1],
          f = c[0],
          p = c[1],
          d = i[2],
          h = d[0],
          g = d[1],
          v = i[3],
          m = v[0],
          b = v[1],
          x = et(t, e, a),
          E = x[0],
          S = x[1],
          D = Math.min(u, f, h, m),
          R = Math.min(l, p, g, b),
          M = Math.max(u, f, h, m),
          y = Math.max(l, p, g, b);
        return (
          (u = u - D || 0),
          (f = f - D || 0),
          (h = h - D || 0),
          (m = m - D || 0),
          (l = l - R || 0),
          (p = p - R || 0),
          (g = g - R || 0),
          (b = b - R || 0),
          (E = E - D || 0),
          (S = S - R || 0),
          {
            left: D,
            top: R,
            right: M,
            bottom: y,
            origin: [E, S],
            pos1: [u, l],
            pos2: [f, p],
            pos3: [h, g],
            pos4: [m, b],
            direction: (0, s.c4)(i),
          }
        );
      }
      function ea(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
      }
      function ei(t, e) {
        return ea([e[0] - t[0], e[1] - t[1]]);
      }
      function eo(t, e, r, n) {
        void 0 === r && (r = 1), void 0 === n && (n = (0, s.jv)(t, e));
        var a = ei(t, e);
        return {
          transform: "translateY(-50%) translate("
            .concat(t[0], "px, ")
            .concat(t[1], "px) rotate(")
            .concat(n, "rad) scaleY(")
            .concat(r, ")"),
          width: "".concat(a, "px"),
        };
      }
      function es(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var a = r.length,
          i =
            r.reduce(function (t, e) {
              return t + e[0];
            }, 0) / a,
          o =
            r.reduce(function (t, e) {
              return t + e[1];
            }, 0) / a;
        return {
          transform: "translateZ(0px) translate("
            .concat(i, "px, ")
            .concat(o, "px) rotate(")
            .concat(t, "rad) scale(")
            .concat(e, ")"),
        };
      }
      function eu(t, e) {
        if (
          (void 0 === e && (e = eS(t)),
          !(0, s.o8)(t.offsetWidth) || "svg" === t.tagName.toLowerCase())
        ) {
          var r = "border-box" === e.boxSizing,
            n = parseFloat(e.borderLeftWidth) || 0,
            a = parseFloat(e.borderRightWidth) || 0,
            i = parseFloat(e.borderTopWidth) || 0,
            o = parseFloat(e.borderBottomWidth) || 0,
            u = parseFloat(e.paddingLeft) || 0,
            l = parseFloat(e.paddingRight) || 0,
            c = parseFloat(e.paddingTop) || 0,
            f = parseFloat(e.paddingBottom) || 0,
            p = parseFloat(e.width),
            d = parseFloat(e.height),
            h = p,
            g = d,
            v = u + l,
            m = c + f,
            b = v + (n + a),
            x = m + (i + o);
          return (
            r ? ((p = h - b), (d = g - x)) : ((h = p + b), (g = d + x)),
            {
              svg: !1,
              offsetWidth: h,
              offsetHeight: g,
              clientWidth: p + v,
              clientHeight: d + m,
              cssWidth: p,
              cssHeight: d,
            }
          );
        }
        var E = t.getBBox(),
          h = E.width,
          g = E.height;
        return {
          svg: !0,
          offsetWidth: h,
          offsetHeight: g,
          clientWidth: h,
          clientHeight: g,
          cssWidth: h,
          cssHeight: g,
        };
      }
      function el(t, e) {
        return (0, s.jv)(e > 0 ? t[0] : t[1], e > 0 ? t[1] : t[0]);
      }
      function ec(t, e, r, n, a) {
        var i = 1,
          o = [0, 0],
          s = ef(),
          l = ef(),
          c = ef(),
          f = (function (t, e, r, n) {
            void 0 === r && (r = e);
            var a = 0,
              i = 0,
              o = 0,
              s = {};
            if (t) {
              var l = eu(t),
                c = l.offsetWidth,
                f = l.offsetHeight;
              (a = c), (i = f);
            }
            if (t) {
              var p,
                d,
                h,
                g,
                v,
                m,
                b,
                E,
                S,
                D,
                R,
                M,
                y,
                C,
                P,
                z,
                B,
                G,
                O,
                w,
                T,
                A,
                k,
                I,
                W,
                F =
                  (void 0 === (p = r) && (p = e),
                  (g = (h = t6(t, e)).matrixes),
                  (v = h.is3d),
                  (m = h.targetMatrix),
                  (b = h.transformOrigin),
                  (E = h.targetOrigin),
                  (D = (S = t6(h.offsetContainer, p, !0)).matrixes),
                  (R = S.is3d),
                  (y = (M = n || R || v) ? 4 : 3),
                  (C =
                    "svg" !== t.tagName.toLowerCase() &&
                    "ownerSVGElement" in t),
                  (P = m),
                  (z = (0, u.Te)(y)),
                  (B = (0, u.Te)(y)),
                  (G = (0, u.Te)(y)),
                  (O = (0, u.Te)(y)),
                  (w = g.length),
                  D.reverse(),
                  g.reverse(),
                  !v && M && ((P = (0, u.mA)(P, 3, 4)), t9(g)),
                  !R && M && t9(D),
                  D.forEach(function (t) {
                    B = (0, u.ml)(B, t.matrix, y);
                  }),
                  (T = p || document.body),
                  (A =
                    (null === (d = D[0]) || void 0 === d ? void 0 : d.target) ||
                    t4(T, T, !0).offsetParent),
                  (k = D.slice(1).reduce(function (t, e) {
                    return (0, u.ml)(t, e.matrix, y);
                  }, (0, u.Te)(y))),
                  g.forEach(function (t, e) {
                    if (
                      (w - 2 === e && (G = z.slice()),
                      w - 1 === e && (O = z.slice()),
                      !t.matrix)
                    ) {
                      var r = (function (t, e, r, n, a) {
                        var i,
                          o = t.target,
                          s = t.origin,
                          l = e.matrix,
                          c = eu(o),
                          f = c.offsetWidth,
                          p = c.offsetHeight,
                          d = r.getBoundingClientRect(),
                          h = [0, 0];
                        r === document.body && (h = t5(o, !0));
                        for (
                          var g = o.getBoundingClientRect(),
                            v =
                              g.left -
                              d.left +
                              r.scrollLeft -
                              (r.clientLeft || 0) +
                              h[0],
                            m =
                              g.top -
                              d.top +
                              r.scrollTop -
                              (r.clientTop || 0) +
                              h[1],
                            b = g.width,
                            x = g.height,
                            E = (0, u.KF)(n, a, l),
                            S = er(ee(E, f, p, n)),
                            D = S.left,
                            R = S.top,
                            M = S.width,
                            y = S.height,
                            C = et(E, s, n),
                            P = (0, u.h9)(C, [D, R]),
                            z = [v + (P[0] * b) / M, m + (P[1] * x) / y],
                            B = [0, 0],
                            G = 0;
                          ++G < 10;

                        ) {
                          var O = (0, u.U_)(a, n);
                          (i = (0, u.h9)(et(O, z, n), et(O, C, n))),
                            (B[0] = i[0]),
                            (B[1] = i[1]);
                          var w = er(
                              ee((0, u.KF)(n, a, (0, u.Jm)(B, n), l), f, p, n)
                            ),
                            T = w.left,
                            A = w.top,
                            k = T - v,
                            I = A - m;
                          if (2 > Math.abs(k) && 2 > Math.abs(I)) break;
                          (z[0] -= k), (z[1] -= I);
                        }
                        return B.map(function (t) {
                          return Math.round(t);
                        });
                      })(t, g[e + 1], A, y, (0, u.ml)(k, z, y));
                      t.matrix = (0, u.Jm)(r, y);
                    }
                    z = (0, u.ml)(z, t.matrix, y);
                  }),
                  (I = !C && v),
                  P || (P = (0, u.Te)(I ? 4 : 3)),
                  (W = t8(C && 16 === P.length ? (0, u.mA)(P, 4, 3) : P, I)),
                  {
                    rootMatrix: (B = (0, u.Xj)(B, y, y)),
                    beforeMatrix: G,
                    offsetMatrix: O,
                    allMatrix: z,
                    targetMatrix: P,
                    targetTransform: W,
                    transformOrigin: b,
                    targetOrigin: E,
                    is3d: M,
                  }),
                N = en(F.allMatrix, F.transformOrigin, a, i);
              s = x(x({}, F), N);
              var q = en(F.allMatrix, [50, 50], 100, 100);
              o = el([q.pos1, q.pos2], q.direction);
            }
            var H = n ? 4 : 3;
            return x(
              {
                width: a,
                height: i,
                rotation: o,
                rootMatrix: (0, u.Te)(H),
                beforeMatrix: (0, u.Te)(H),
                offsetMatrix: (0, u.Te)(H),
                allMatrix: (0, u.Te)(H),
                targetMatrix: (0, u.Te)(H),
                targetTransform: "",
                transformOrigin: [0, 0],
                targetOrigin: [0, 0],
                is3d: !!n,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                origin: [0, 0],
                pos1: [0, 0],
                pos2: [0, 0],
                pos3: [0, 0],
                pos4: [0, 0],
                direction: 1,
              },
              s
            );
          })(e, r, a, !1);
        if (e) {
          var p = f.is3d ? 4 : 3,
            d = en(
              f.offsetMatrix,
              (0, u.PD)(f.transformOrigin, (0, u.P$)(f.targetMatrix, p)),
              f.width,
              f.height
            );
          (i = d.direction),
            (o = (0, u.PD)(d.origin, [d.left - f.left, d.top - f.top])),
            (s = ep(e)),
            (l = ep(t4(n, n, !0).offsetParent || document.body, !0)),
            t && (c = ep(t));
        }
        return x(
          {
            targetClientRect: s,
            containerClientRect: l,
            moveableClientRect: c,
            beforeDirection: i,
            beforeOrigin: o,
            originalBeforeOrigin: o,
            target: e,
          },
          f
        );
      }
      function ef() {
        return {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: 0,
          height: 0,
          clientLeft: 0,
          clientTop: 0,
          clientWidth: 0,
          clientHeight: 0,
          scrollWidth: 0,
          scrollHeight: 0,
        };
      }
      function ep(t, e) {
        var r = 0,
          n = 0,
          a = 0,
          i = 0;
        if (t === document.body || t === document.documentElement)
          (a = window.innerWidth),
            (i = window.innerHeight),
            (r = -(
              document.documentElement.scrollLeft || document.body.scrollLeft
            )),
            (n = -(
              document.documentElement.scrollTop || document.body.scrollTop
            ));
        else {
          var o = t.getBoundingClientRect();
          (r = o.left), (n = o.top), (a = o.width), (i = o.height);
        }
        var s = {
          left: r,
          right: r + a,
          top: n,
          bottom: n + i,
          width: a,
          height: i,
        };
        return (
          e &&
            ((s.clientLeft = t.clientLeft),
            (s.clientTop = t.clientTop),
            (s.clientWidth = t.clientWidth),
            (s.clientHeight = t.clientHeight),
            (s.scrollWidth = t.scrollWidth),
            (s.scrollHeight = t.scrollHeight),
            (s.overflow = "visible" !== eS(t).overflow)),
          s
        );
      }
      function ed(t) {
        if (t) {
          var e = t.getAttribute("data-direction");
          if (e) {
            var r = [0, 0];
            return (
              e.indexOf("w") > -1 && (r[0] = -1),
              e.indexOf("e") > -1 && (r[0] = 1),
              e.indexOf("n") > -1 && (r[1] = -1),
              e.indexOf("s") > -1 && (r[1] = 1),
              r
            );
          }
        }
      }
      function eh(t, e) {
        return [
          (0, u.PD)(e, t[0]),
          (0, u.PD)(e, t[1]),
          (0, u.PD)(e, t[2]),
          (0, u.PD)(e, t[3]),
        ];
      }
      function eg(t) {
        var e = t.left,
          r = t.top;
        return eh([t.pos1, t.pos2, t.pos3, t.pos4], [e, r]);
      }
      function ev(t, e) {
        var r;
        null === (r = t[e]) || void 0 === r || r.unset(), (t[e] = null);
      }
      function em(t, e, r) {
        var n = e.datas;
        n.datas || (n.datas = {});
        var a = x(x({}, r), {
          target: t.state.target,
          clientX: e.clientX,
          clientY: e.clientY,
          inputEvent: e.inputEvent,
          currentTarget: t,
          moveable: t,
          datas: n.datas,
        });
        return n.isStartEvent ? (n.lastEvent = a) : (n.isStartEvent = !0), a;
      }
      function eb(t, e, r) {
        var n = e.datas,
          a = "isDrag" in r ? r.isDrag : e.isDrag;
        return (
          n.datas || (n.datas = {}),
          x(x({ isDrag: a }, r), {
            moveable: t,
            target: t.state.target,
            clientX: e.clientX,
            clientY: e.clientY,
            inputEvent: e.inputEvent,
            currentTarget: t,
            lastEvent: n.lastEvent,
            isDouble: e.isDouble,
            datas: n.datas,
          })
        );
      }
      function ex(t, e, r) {
        t._emitter.on(e, r);
      }
      function eE(t, e, r, n) {
        return t.triggerEvent(e, r, n);
      }
      function eS(t, e) {
        return window.getComputedStyle(t, e);
      }
      function eD(t, e, r) {
        var n = {},
          a = {};
        return t.filter(function (t) {
          var i = t.name;
          if (
            n[i] ||
            !e.some(function (e) {
              return t[e];
            })
          )
            return !1;
          if (!r && t.ableGroup) {
            if (a[t.ableGroup]) return !1;
            a[t.ableGroup] = !0;
          }
          return (n[i] = !0), !0;
        });
      }
      function eR(t, e) {
        return t === e || (null == t && null == e);
      }
      function eM() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return (
          t.sort(function (t, e) {
            return Math.abs(e) - Math.abs(t);
          }),
          t[0]
        );
      }
      function ey(t, e, r) {
        return (0, u.Kf)((0, u.U_)(t, r), (0, u.WK)(e, r), r);
      }
      function eC(t, e) {
        var r,
          n = t.is3d;
        return (
          (r = ey(t.rootMatrix, [e.distX, e.distY], n ? 4 : 3)),
          (e.distX = r[0]),
          (e.distY = r[1]),
          e
        );
      }
      function eP(t, e, r, n, a) {
        return (0, u.h9)(et(t, (0, u.PD)(r, e), a), n);
      }
      function ez(t, e, r) {
        return r ? "".concat((t / e) * 100, "%") : "".concat(t, "px");
      }
      function eB(t) {
        return 1e-7 >= Math.abs(t) ? 0 : t;
      }
      function eG(t, e) {
        return e.isRequest
          ? ("resizable" === e.requestAble || "scalable" === e.requestAble) &&
              e.parentDirection
          : (0, s.pv)(e.inputEvent.target, t0("direction"));
      }
      function eO(t, e) {
        return t
          ? (0, s.HD)(t)
            ? e
              ? document.querySelector(t)
              : t
            : (0, s.mf)(t)
            ? t()
            : "current" in t
            ? t.current
            : t
          : null;
      }
      function ew(t, e) {
        return t
          ? (!(!t || !(0, s.Kn)(t) || t instanceof Element) &&
            ((0, s.kJ)(t) || "length" in t)
              ? [].slice.call(t)
              : [t]
            ).reduce(function (t, r) {
              return (0, s.HD)(r) && e
                ? E(
                    E([], t, !0),
                    [].slice.call(document.querySelectorAll(r)),
                    !0
                  )
                : (t.push(eO(r, e)), t);
            }, [])
          : [];
      }
      function eT(t, e) {
        var r = t.rootMatrix,
          n = t.is3d,
          a = (0, u.U_)(r, n ? 4 : 3);
        return (
          n || (a = (0, u.mA)(a, 3, 4)),
          (a[12] = 0),
          (a[13] = 0),
          (a[14] = 0),
          (0, l.A8)(a, e)
        );
      }
      function eA(t, e, r, n) {
        var a = r.ratio,
          i = r.startOffsetWidth,
          o = r.startOffsetHeight,
          u = 0,
          l = 0,
          c = n.distX,
          f = n.distY,
          p = n.parentDistance,
          d = n.parentDist,
          h = n.parentScale,
          g = n.isPinch,
          v = r.fixedDirection;
        if (d)
          (u = d[0]), (l = d[1]), e && (u ? l || (l = u / a) : (u = l * a));
        else if (h) (u = (h[0] - 1) * i), (l = (h[1] - 1) * o);
        else if (g) p && ((u = p), (l = (p * o) / i));
        else {
          var m = tN({ datas: r, distX: c, distY: f });
          if (
            ((m = [0, 1].map(function (e) {
              var r = Math.abs(t[e] - v[e]);
              return 0 !== r && (r = 2 / r), m[e] * r;
            })),
            e && i && o)
          ) {
            var b =
              Math.cos((0, s.jv)([0, 0], m) - (0, s.jv)([0, 0], t)) * ea(m);
            if (t[0]) {
              if (t[1]) {
                var x = 2 * t[0] * i,
                  E = 2 * t[1] * o,
                  S = ea([x + m[0], E + m[1]]) - ea([x, E]),
                  D = (0, s.jv)([0, 0], [a, 1]);
                (u = Math.cos(D) * S), (l = Math.sin(D) * S);
              } else l = (u = b) / a;
            } else u = (l = b) * a;
          } else (u = t[0] * m[0]), (l = t[1] * m[1]);
        }
        return { distWidth: u, distHeight: l };
      }
      var ek = S("pinchable", {
          events: {
            onPinchStart: "pinchStart",
            onPinch: "pinch",
            onPinchEnd: "pinchEnd",
            onPinchGroupStart: "pinchGroupStart",
            onPinchGroup: "pinchGroup",
            onPinchGroupEnd: "pinchGroupEnd",
          },
          dragStart: function () {
            return !0;
          },
          pinchStart: function (t, e) {
            var r = e.datas,
              n = e.targets,
              a = e.angle,
              i = e.originalDatas,
              o = t.props,
              s = o.pinchable,
              u = o.ables;
            if (!s) return !1;
            var l = "onPinch".concat(n ? "Group" : "", "Start"),
              c = "drag".concat(n ? "Group" : "", "ControlStart"),
              f = (
                !0 === s
                  ? t.controlAbles
                  : u.filter(function (t) {
                      return s.indexOf(t.name) > -1;
                    })
              ).filter(function (t) {
                return t.canPinch && t[c];
              }),
              p = em(t, e, {});
            n && (p.targets = n);
            var d = eE(t, l, p);
            (r.isPinch = !1 !== d), (r.ables = f);
            var h = r.isPinch;
            return (
              !!h &&
              (f.forEach(function (r) {
                if (((i[r.name] = i[r.name] || {}), r[c])) {
                  var n = x(x({}, e), {
                    datas: i[r.name],
                    parentRotate: a,
                    isPinch: !0,
                  });
                  r[c](t, n);
                }
              }),
              (t.state.snapRenderInfo = {
                request: e.isRequest,
                direction: [0, 0],
              }),
              h)
            );
          },
          pinch: function (t, e) {
            var r = e.datas,
              n = e.scale,
              a = e.distance,
              i = e.originalDatas,
              o = e.inputEvent,
              s = e.targets,
              u = e.angle;
            if (r.isPinch) {
              var l = a * (1 - 1 / n),
                c = em(t, e, {});
              s && (c.targets = s),
                eE(t, "onPinch".concat(s ? "Group" : ""), c);
              var f = r.ables,
                p = "drag".concat(s ? "Group" : "", "Control");
              return (
                f.forEach(function (r) {
                  r[p] &&
                    r[p](
                      t,
                      x(x({}, e), {
                        datas: i[r.name],
                        inputEvent: o,
                        parentDistance: l,
                        parentRotate: u,
                        isPinch: !0,
                      })
                    );
                }),
                c
              );
            }
          },
          pinchEnd: function (t, e) {
            var r = e.datas,
              n = e.isPinch,
              a = e.inputEvent,
              i = e.targets,
              o = e.originalDatas;
            if (r.isPinch) {
              var s = "onPinch".concat(i ? "Group" : "", "End"),
                u = eb(t, e, { isDrag: n });
              i && (u.targets = i), eE(t, s, u);
              var l = r.ables,
                c = "drag".concat(i ? "Group" : "", "ControlEnd");
              return (
                l.forEach(function (r) {
                  r[c] &&
                    r[c](
                      t,
                      x(x({}, e), {
                        isDrag: n,
                        datas: o[r.name],
                        inputEvent: a,
                        isPinch: !0,
                      })
                    );
                }),
                n
              );
            }
          },
          pinchGroupStart: function (t, e) {
            return this.pinchStart(
              t,
              x(x({}, e), { targets: t.props.targets })
            );
          },
          pinchGroup: function (t, e) {
            return this.pinch(t, x(x({}, e), { targets: t.props.targets }));
          },
          pinchGroupEnd: function (t, e) {
            return this.pinchEnd(t, x(x({}, e), { targets: t.props.targets }));
          },
        }),
        eI = {
          name: "resizable",
          ableGroup: "size",
          canPinch: !0,
          props: {
            resizable: Boolean,
            throttleResize: Number,
            renderDirections: Array,
            keepRatio: Boolean,
            resizeFormat: Function,
          },
          events: {
            onResizeStart: "resizeStart",
            onBeforeResize: "beforeResize",
            onResize: "resize",
            onResizeEnd: "resizeEnd",
            onResizeGroupStart: "resizeGroupStart",
            onBeforeResizeGroup: "beforeResizeGroup",
            onResizeGroup: "resizeGroup",
            onResizeGroupEnd: "resizeGroupEnd",
          },
          render: function (t, e) {
            var r = t.props,
              n = r.resizable,
              a = r.edge;
            if (n) return a ? F(t, e) : I(t, P, e);
          },
          dragControlCondition: eG,
          dragControlStart: function (t, e) {
            var r,
              n,
              a = e.inputEvent,
              i = e.isPinch,
              o = e.parentDirection,
              l = e.datas,
              c = e.parentFlag,
              f = o || (i ? [0, 0] : ed(a.target)),
              p = t.state,
              d = p.target,
              h = p.width,
              g = p.height;
            if (!f || !d) return !1;
            i || tA(t, e),
              (l.datas = {}),
              (l.direction = f),
              (l.startOffsetWidth = h),
              (l.startOffsetHeight = g),
              (l.prevWidth = 0),
              (l.prevHeight = 0),
              (n = [parseFloat((r = eS(d)).width), parseFloat(r.height)]),
              (l.startWidth = n[0]),
              (l.startHeight = n[1]);
            var v = [
              Math.max(0, h - l.startWidth),
              Math.max(0, g - l.startHeight),
            ];
            if (((l.minSize = v), (l.maxSize = [1 / 0, 1 / 0]), !c)) {
              var m = eS(d),
                b = m.position,
                x = m.minWidth,
                E = m.minHeight,
                S = m.maxWidth,
                D = m.maxHeight,
                R = "static" === b || "relative" === b,
                M = R ? d.parentElement : d.offsetParent,
                y = h,
                C = g;
              if (M && ((y = M.clientWidth), (C = M.clientHeight), R)) {
                var P = eS(M);
                (y -= parseFloat(P.paddingLeft) || 0),
                  (C -= parseFloat(P.paddingTop) || 0);
              }
              (l.minSize = (0, u.PD)(
                [(0, s.AA)(x, y) || 0, (0, s.AA)(E, C) || 0],
                v
              )),
                (l.maxSize = (0, u.PD)(
                  [(0, s.AA)(S, y) || 1 / 0, (0, s.AA)(D, C) || 1 / 0],
                  v
                ));
            }
            var z = t.props.transformOrigin || "% %";
            function B(t) {
              l.ratio = t && isFinite(t) ? t : 0;
            }
            function G(t) {
              (l.fixedDirection = t),
                (l.fixedPosition = tj(l.startPositions, t));
            }
            (l.transformOrigin = z && (0, s.HD)(z) ? z.split(" ") : z),
              (l.isWidth = (!f[0] && !f[1]) || f[0] || !f[1]),
              (l.startPositions = eg(t.state)),
              B(h / g),
              G([-f[0], -f[1]]),
              (l.setFixedDirection = G);
            var O = em(t, e, {
              direction: f,
              set: function (t) {
                var e = t[0],
                  r = t[1];
                (l.startWidth = e), (l.startHeight = r);
              },
              setMin: function (t) {
                l.minSize = t;
              },
              setMax: function (t) {
                l.maxSize = [t[0] || 1 / 0, t[1] || 1 / 0];
              },
              setRatio: B,
              setFixedDirection: G,
              setOrigin: function (t) {
                l.transformOrigin = t;
              },
              dragStart: tw.dragStart(t, new w().dragStart([0, 0], e)),
            });
            return (
              !1 !== eE(t, "onResizeStart", O) &&
                ((l.isResize = !0),
                (t.state.snapRenderInfo = {
                  request: e.isRequest,
                  direction: f,
                })),
              !!l.isResize && O
            );
          },
          dragControl: function (t, e) {
            var r,
              n,
              a,
              i,
              o,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v,
              m,
              b,
              x,
              E,
              S,
              D,
              R,
              M,
              y,
              C,
              P,
              z,
              B = e.datas,
              G = e.parentFlag,
              w = e.isPinch,
              T = e.parentKeepRatio,
              A = e.dragClient,
              k = e.parentDist,
              I = e.isRequest,
              W = B.isResize,
              F = B.transformOrigin,
              N = B.startWidth,
              q = B.startHeight,
              H = B.prevWidth,
              j = B.prevHeight,
              Y = B.minSize,
              _ = B.maxSize,
              X = B.ratio,
              L = B.isWidth,
              V = B.startOffsetWidth,
              K = B.startOffsetHeight;
            if (W) {
              var Z = t.props,
                Q = Z.resizeFormat,
                J = Z.throttleResize,
                $ = void 0 === J ? 1 : J,
                tt = Z.parentMoveable,
                te = Z.snapThreshold,
                tr = void 0 === te ? 5 : te,
                tn = B.direction,
                ta = tn,
                ti = 0,
                to = 0;
              tn[0] || tn[1] || (ta = [1, 1]);
              var ts = (X && (null != T ? T : Z.keepRatio)) || !1,
                tu = tm(),
                tl = tu[0],
                tc = tu[1];
              B.setFixedDirection(B.fixedDirection),
                eE(
                  t,
                  "onBeforeResize",
                  em(t, e, {
                    setFixedDirection: function (t) {
                      var e;
                      return (
                        B.setFixedDirection(t),
                        (tl = (e = tm())[0]),
                        (tc = e[1]),
                        [tl, tc]
                      );
                    },
                    boundingWidth: tl,
                    boundingHeight: tc,
                    setSize: function (t) {
                      (tl = t[0]), (tc = t[1]);
                    },
                  })
                );
              var tf = A;
              A || (tf = !G && w ? t$(t, [0, 0]) : B.fixedPosition);
              var tp = [0, 0];
              if (
                (w ||
                  (tp = (function (t, e, r, n, a, i, o) {
                    if (!U(t, "resizable")) return [0, 0];
                    var s = o.fixedDirection,
                      u = t.state,
                      l = u.allMatrix,
                      c = u.is3d;
                    return tB(
                      t,
                      function (t, n) {
                        return tz(l, e + t, r + n, s, a, c);
                      },
                      e,
                      r,
                      n,
                      a,
                      i,
                      o
                    );
                  })(t, tl, tc, tn, tf, I, B)),
                k && (k[0] || (tp[0] = 0), k[1] || (tp[1] = 0)),
                ts)
              ) {
                ta[0] &&
                  ta[1] &&
                  tp[0] &&
                  tp[1] &&
                  (Math.abs(tp[0]) > Math.abs(tp[1])
                    ? (tp[1] = 0)
                    : (tp[0] = 0));
                var td = !tp[0] && !tp[1];
                td && tb(),
                  (ta[0] && !ta[1]) || (tp[0] && !tp[1]) || (td && L)
                    ? ((tl += tp[0]), (tc = tl / X))
                    : ((!ta[0] && ta[1]) || (!tp[0] && tp[1]) || (td && !L)) &&
                      ((tc += tp[1]), (tl = tc * X));
              } else
                V + ti < -tr && (tp[0] = 0),
                  V + to < -tr && (tp[1] = 0),
                  (tl += tp[0]),
                  (tc += tp[1]);
              (tl = (z = (0, s.F1)([tl, tc], Y, _, ts))[0]), (tc = z[1]), tb();
              var th = [(ti = tl - V) - H, (to = tc - K) - j];
              (B.prevWidth = ti), (B.prevHeight = to);
              var tg =
                ((r = tl),
                (n = tc),
                (a = B.fixedDirection),
                (i = tf),
                (o = t.props.groupable),
                (c = (l = t.state).transformOrigin),
                (f = l.targetMatrix),
                (p = l.offsetMatrix),
                (d = l.is3d),
                (h = l.width),
                (g = l.height),
                (v = l.left),
                (m = l.top),
                (b = d ? 4 : 3),
                (x = h),
                (E = g),
                (S = c),
                void 0 === x && (x = r),
                void 0 === E && (E = n),
                void 0 === S && (S = [0, 0]),
                (D = F
                  ? F.map(function (t, e) {
                      var a = (0, s.jL)(t),
                        i = a.value,
                        o = a.unit,
                        u = e ? E : x,
                        l = e ? n : r;
                      return "%" === t || isNaN(i)
                        ? l * (u ? S[e] / u : 0)
                        : "%" !== o
                        ? i
                        : (l * i) / 100;
                    })
                  : S),
                (R = o ? v : 0),
                (M = o ? m : 0),
                (C = tj(ee(tY(p, f, D, b), r, n, b), a)),
                (P = [i[0] - C[0], i[1] - C[1]]),
                (0, u.h9)(P, [R, M]));
              if (
                !(
                  !tt &&
                  th.every(function (t) {
                    return !t;
                  }) &&
                  tg.every(function (t) {
                    return !t;
                  })
                )
              ) {
                var tv = em(t, e, {
                  width: N + ti,
                  height: q + to,
                  offsetWidth: Math.round(tl),
                  offsetHeight: Math.round(tc),
                  boundingWidth: tl,
                  boundingHeight: tc,
                  direction: tn,
                  dist: [ti, to],
                  delta: th,
                  isPinch: !!w,
                  drag: tw.drag(t, O(e, t.state, tg, !!w, !1)),
                });
                return eE(t, "onResize", tv), tv;
              }
            }
            function tm() {
              var t = eA(ta, ts, B, e);
              (ti = t.distWidth), (to = t.distHeight);
              var r = ta[0] || ts ? Math.max(V + ti, 1e-7) : V,
                n = ta[1] || ts ? Math.max(K + to, 1e-7) : K;
              return ts && V && K && (L ? (n = r / X) : (r = n * X)), [r, n];
            }
            function tb() {
              var t;
              Q && ((tl = (t = Q([tl, tc]))[0]), (tc = t[1])),
                (tl = (0, s.P2)(tl, $)),
                (tc = (0, s.P2)(tc, $));
            }
          },
          dragControlAfter: function (t, e) {
            var r = e.datas,
              n = r.isResize,
              a = r.startOffsetWidth,
              i = r.startOffsetHeight,
              o = r.prevWidth,
              s = r.prevHeight;
            if (n) {
              var u = t.state,
                l = u.width,
                c = u.height,
                f = l - (a + o),
                p = c - (i + s),
                d = Math.abs(f) > 3,
                h = Math.abs(p) > 3;
              if (
                (d &&
                  ((r.startWidth += f),
                  (r.startOffsetWidth += f),
                  (r.prevWidth += f)),
                h &&
                  ((r.startHeight += p),
                  (r.startOffsetHeight += p),
                  (r.prevHeight += p)),
                d || h)
              )
                return this.dragControl(t, e);
            }
          },
          dragControlEnd: function (t, e) {
            var r = e.datas;
            if (r.isResize) {
              r.isResize = !1;
              var n = eb(t, e, {});
              return eE(t, "onResizeEnd", n), n;
            }
          },
          dragGroupControlCondition: eG,
          dragGroupControlStart: function (t, e) {
            var r = e.datas,
              n = this.dragControlStart(t, e);
            if (!n) return !1;
            var a = T(t, "resizable", e);
            function i(e, n) {
              var a = r.fixedDirection,
                i = r.fixedPosition,
                o = tj(n.datas.startPositions || eg(e.state), a),
                s = (0, u.Kf)(
                  (0, u.sQ)((-t.rotation / 180) * Math.PI, 3),
                  [o[0] - i[0], o[1] - i[1], 1],
                  3
                ),
                l = s[0],
                c = s[1];
              return (n.datas.originalX = l), (n.datas.originalY = c), n;
            }
            var o = k(t, this, "dragControlStart", e, function (t, e) {
                return i(t, e);
              }),
              s = function (t) {
                n.setFixedDirection(t),
                  o.forEach(function (e, r) {
                    e.setFixedDirection(t), i(e.moveable, a[r]);
                  });
              };
            r.setFixedDirection = s;
            var l = x(x({}, n), {
                targets: t.props.targets,
                events: o,
                setFixedDirection: s,
              }),
              c = eE(t, "onResizeGroupStart", l);
            return (r.isResize = !1 !== c), !!r.isResize && n;
          },
          dragGroupControl: function (t, e) {
            var r = e.datas;
            if (r.isResize) {
              ex(t, "onBeforeResize", function (r) {
                eE(
                  t,
                  "onBeforeResizeGroup",
                  em(t, e, x(x({}, r), { targets: t.props.targets }))
                );
              });
              var n = this.dragControl(t, e);
              if (n) {
                var a = n.boundingWidth,
                  i = n.boundingHeight,
                  o = n.dist,
                  s = t.props.keepRatio,
                  l = [a / (a - o[0]), i / (i - o[1])],
                  c = r.fixedPosition,
                  f = k(t, this, "dragControl", e, function (e, r) {
                    var n = (0, u.Kf)(
                        (0, u.sQ)((t.rotation / 180) * Math.PI, 3),
                        [r.datas.originalX * l[0], r.datas.originalY * l[1], 1],
                        3
                      ),
                      a = n[0],
                      i = n[1];
                    return x(x({}, r), {
                      parentDist: null,
                      parentScale: l,
                      dragClient: (0, u.PD)(c, [a, i]),
                      parentKeepRatio: s,
                    });
                  }),
                  p = x({ targets: t.props.targets, events: f }, n);
                return eE(t, "onResizeGroup", p), p;
              }
            }
          },
          dragGroupControlEnd: function (t, e) {
            var r = e.isDrag;
            if (e.datas.isResize) {
              this.dragControlEnd(t, e);
              var n = k(t, this, "dragControlEnd", e),
                a = eb(t, e, { targets: t.props.targets, events: n });
              return eE(t, "onResizeGroupEnd", a), r;
            }
          },
          request: function (t) {
            var e = {},
              r = 0,
              n = 0,
              a = t.getRect();
            return {
              isControl: !0,
              requestStart: function (t) {
                return { datas: e, parentDirection: t.direction || [1, 1] };
              },
              request: function (t) {
                return (
                  "offsetWidth" in t
                    ? (r = t.offsetWidth - a.offsetWidth)
                    : "deltaWidth" in t && (r += t.deltaWidth),
                  "offsetHeight" in t
                    ? (n = t.offsetHeight - a.offsetHeight)
                    : "deltaHeight" in t && (n += t.deltaHeight),
                  { datas: e, parentDist: [r, n], parentKeepRatio: t.keepRatio }
                );
              },
              requestEnd: function () {
                return { datas: e, isDrag: !0 };
              },
            };
          },
        };
      function eW(t, e) {
        return t.map(function (t, r) {
          return (0, s.AK)(t, e[r], 1, 2);
        });
      }
      function eF(t, e, r) {
        var n = (0, s.jv)(t, e),
          a = (0, s.jv)(t, r) - n;
        return a >= 0 ? a : a + 2 * Math.PI;
      }
      var eN = t0("area-pieces"),
        eq = t0("area-piece"),
        eH = t0("avoid");
      function ej(t) {
        var e = t.areaElement;
        if (e) {
          var r = t.state,
            n = r.width,
            a = r.height;
          (0, s.IV)(e, eH),
            (e.style.cssText += "left: 0px; top: 0px; width: "
              .concat(n, "px; height: ")
              .concat(a, "px"));
        }
      }
      function eY(t) {
        return t.createElement(
          "div",
          { key: "area_pieces", className: eN },
          t.createElement("div", { className: eq }),
          t.createElement("div", { className: eq }),
          t.createElement("div", { className: eq }),
          t.createElement("div", { className: eq })
        );
      }
      var e_ = {
          name: "dragArea",
          props: { dragArea: Boolean, passDragArea: Boolean },
          events: { onClick: "click", onClickGroup: "clickGroup" },
          render: function (t, e) {
            var r = t.props,
              n = r.target,
              a = r.dragArea,
              i = r.groupable,
              s = r.passDragArea,
              l = t.state,
              c = l.width,
              f = l.height,
              p = l.renderPoses,
              d = s ? t0("area", "pass") : t0("area");
            if (i)
              return [
                e.createElement("div", {
                  key: "area",
                  ref: (0, o.iH)(t, "areaElement"),
                  className: d,
                }),
                eY(e),
              ];
            if (!n || !a) return [];
            var h = (0, u.mX)(
                [0, 0],
                [c, 0],
                [0, f],
                [c, f],
                p[0],
                p[1],
                p[2],
                p[3]
              ),
              g = h.length ? t8(h, !0) : "none";
            return [
              e.createElement("div", {
                key: "area",
                ref: (0, o.iH)(t, "areaElement"),
                className: d,
                style: {
                  top: "0px",
                  left: "0px",
                  width: "".concat(c, "px"),
                  height: "".concat(f, "px"),
                  transformOrigin: "0 0",
                  transform: g,
                },
              }),
              eY(e),
            ];
          },
          dragStart: function (t, e) {
            var r = e.datas,
              n = e.clientX,
              a = e.clientY;
            if (!e.inputEvent) return !1;
            r.isDragArea = !1;
            var i = t.areaElement,
              o = t.state,
              u = o.moveableClientRect,
              l = o.renderPoses,
              c = o.rootMatrix,
              f = o.is3d,
              p = u.left,
              d = u.top,
              h = er(l),
              g = h.left,
              v = h.top,
              m = h.width,
              b = h.height,
              x = ey(c, [n - p, a - d], f ? 4 : 3),
              E = x[0],
              S = x[1];
            (E -= g), (S -= v);
            var D = [
                { left: g, top: v, width: m, height: S - 10 },
                { left: g, top: v, width: E - 10, height: b },
                { left: g, top: v + S + 10, width: m, height: b - S - 10 },
                { left: g + E + 10, top: v, width: m - E - 10, height: b },
              ],
              R = [].slice.call(i.nextElementSibling.children);
            D.forEach(function (t, e) {
              R[e].style.cssText = "left: "
                .concat(t.left, "px;top: ")
                .concat(t.top, "px; width: ")
                .concat(t.width, "px; height: ")
                .concat(t.height, "px;");
            }),
              (0, s.cn)(i, eH),
              (o.disableNativeEvent = !0);
          },
          drag: function (t, e) {
            var r = e.datas,
              n = e.inputEvent;
            if ((this.enableNativeEvent(t), !n)) return !1;
            r.isDragArea || ((r.isDragArea = !0), ej(t));
          },
          dragEnd: function (t, e) {
            this.enableNativeEvent(t);
            var r = e.inputEvent,
              n = e.datas;
            if (!r) return !1;
            n.isDragArea || ej(t);
          },
          dragGroupStart: function (t, e) {
            return this.dragStart(t, e);
          },
          dragGroup: function (t, e) {
            return this.drag(t, e);
          },
          dragGroupEnd: function (t, e) {
            return this.dragEnd(t, e);
          },
          unset: function (t) {
            ej(t), (t.state.disableNativeEvent = !1);
          },
          enableNativeEvent: function (t) {
            var e = t.state;
            e.disableNativeEvent &&
              (0, s.U7)(function () {
                e.disableNativeEvent = !1;
              });
          },
        },
        eX = S("origin", {
          render: function (t, e) {
            var r = t.props.zoom,
              n = t.state,
              a = n.beforeOrigin,
              i = n.rotation;
            return [
              e.createElement("div", {
                className: t0("control", "origin"),
                style: es(i, r, a),
                key: "beforeOrigin",
              }),
            ];
          },
        });
      function eL(t) {
        var e = t.scrollContainer;
        return [e.scrollLeft, e.scrollTop];
      }
      var eV = {
          name: "",
          props: {
            target: Object,
            dragTarget: Object,
            container: Object,
            portalContainer: Object,
            rootContainer: Object,
            useResizeObserver: Boolean,
            zoom: Number,
            transformOrigin: Array,
            edge: Boolean,
            ables: Array,
            className: String,
            pinchThreshold: Number,
            pinchOutside: Boolean,
            triggerAblesSimultaneously: Boolean,
            checkInput: Boolean,
            cspNonce: String,
            translateZ: Number,
            hideDefaultLines: Boolean,
            props: Object,
          },
          events: {},
        },
        eU = S("padding", {
          render: function (t, e) {
            var r = t.props;
            if (r.dragArea) return [];
            var n = r.padding || {},
              a = n.left,
              i = n.top,
              o = n.right,
              s = n.bottom,
              l = t.state,
              c = l.renderPoses,
              f = [l.pos1, l.pos2, l.pos3, l.pos4],
              p = [];
            return (
              (void 0 === a ? 0 : a) > 0 && p.push([0, 2]),
              (void 0 === i ? 0 : i) > 0 && p.push([0, 1]),
              (void 0 === o ? 0 : o) > 0 && p.push([1, 3]),
              (void 0 === s ? 0 : s) > 0 && p.push([2, 3]),
              p.map(function (t, r) {
                var n = t[0],
                  a = t[1],
                  i = f[n],
                  o = f[a],
                  s = c[n],
                  l = c[a],
                  p = (0, u.mX)(
                    [0, 0],
                    [100, 0],
                    [0, 100],
                    [100, 100],
                    i,
                    o,
                    s,
                    l
                  );
                if (p.length)
                  return e.createElement("div", {
                    key: "padding".concat(r),
                    className: t0("padding"),
                    style: { transform: t8(p, !0) },
                  });
              })
            );
          },
        }),
        eK = ["nw", "ne", "se", "sw"];
      function eZ(t, e) {
        var r = t[0] + t[1],
          n = r > e ? e / r : 1;
        return (t[0] *= n), (t[1] = e - t[1] * n), t;
      }
      var eQ = [1, 2, 5, 6],
        eJ = [0, 3, 4, 7],
        e$ = [1, -1, -1, 1],
        e0 = [1, 1, -1, -1];
      function e1(t, e, r, n, a, i, o, s, u) {
        void 0 === i && (i = 0),
          void 0 === o && (o = 0),
          void 0 === s && (s = n),
          void 0 === u && (u = a);
        var l = [],
          c = !1,
          f = t.map(function (t, f) {
            var p = e[f],
              d = p.horizontal,
              h = p.vertical;
            if ((h && !c && ((c = !0), l.push("/")), c)) {
              var g = Math.max(0, 1 === h ? t[1] - o : u - t[1]);
              return l.push(ez(g, a, r)), g;
            }
            var g = Math.max(0, 1 === d ? t[0] - i : s - t[0]);
            return l.push(ez(g, n, r)), g;
          });
        return { styles: l, raws: f };
      }
      function e2(t) {
        for (var e = [0, 0], r = [0, 0], n = t.length, a = 0; a < n; ++a) {
          var i = t[a];
          i.sub &&
            (i.horizontal &&
              (0 === e[1] && (e[0] = a), (e[1] = a - e[0] + 1), (r[0] = a + 1)),
            i.vertical && (0 === r[1] && (r[0] = a), (r[1] = a - r[0] + 1)));
        }
        return { horizontalRange: e, verticalRange: r };
      }
      function e3(t, e, r, n, a, i) {
        void 0 === i && (i = [0, 0]);
        var o,
          u,
          l,
          c,
          f = t.indexOf("/"),
          p = (f > -1 ? t.slice(0, f) : t).length,
          d = t.slice(0, p),
          h = t.slice(p + 1),
          g = d[0],
          v = void 0 === g ? "0px" : g,
          m = d[1],
          b = void 0 === m ? v : m,
          x = d[2],
          S = d[3],
          D = h[0],
          R = void 0 === D ? v : D,
          M = h[1],
          y = void 0 === M ? R : M,
          C = h[2],
          P = h[3],
          z = [v, b, void 0 === x ? v : x, void 0 === S ? b : S].map(function (
            t
          ) {
            return (0, s.AA)(t, e);
          }),
          B = [R, y, void 0 === C ? R : C, void 0 === P ? y : P].map(function (
            t
          ) {
            return (0, s.AA)(t, r);
          }),
          G = z.slice(),
          O = B.slice();
        (o = eZ([G[0], G[1]], e)),
          (G[0] = o[0]),
          (G[1] = o[1]),
          (u = eZ([G[3], G[2]], e)),
          (G[3] = u[0]),
          (G[2] = u[1]),
          (l = eZ([O[0], O[3]], r)),
          (O[0] = l[0]),
          (O[3] = l[1]),
          (c = eZ([O[1], O[2]], r)),
          (O[1] = c[0]),
          (O[2] = c[1]);
        var w = G.slice(0, Math.max(i[0], d.length)),
          T = O.slice(0, Math.max(i[1], h.length));
        return E(
          E(
            [],
            w.map(function (t, e) {
              var i = eK[e];
              return {
                horizontal: e$[e],
                vertical: 0,
                pos: [n + t, a + (-1 === e0[e] ? r : 0)],
                sub: !0,
                raw: z[e],
                direction: i,
              };
            }),
            !0
          ),
          T.map(function (t, r) {
            var i = eK[r];
            return {
              horizontal: 0,
              vertical: e0[r],
              pos: [n + (-1 === e$[r] ? e : 0), a + t],
              sub: !0,
              raw: B[r],
              direction: i,
            };
          }),
          !0
        );
      }
      function e4(t, e, r, n, a) {
        void 0 === a && (a = e.length);
        var i = e2(t.slice(n)),
          o = i.horizontalRange,
          s = i.verticalRange,
          u = r - n,
          l = 0;
        if (0 === u) l = a;
        else if (u > 0 && u < o[1]) l = o[1] - u;
        else {
          if (!(u >= s[0])) return;
          l = s[0] + s[1] - u;
        }
        t.splice(r, l), e.splice(r, l);
      }
      function e5(t, e, r, n, a, i, o, s, u, l, c) {
        void 0 === l && (l = 0), void 0 === c && (c = 0);
        var f = e2(t.slice(r)),
          p = f.horizontalRange,
          d = f.verticalRange;
        if (n > -1)
          for (var h = 1 === e$[n] ? i - l : s - i, g = p[1]; g <= n; ++g) {
            var v = 1 === e0[g] ? c : u,
              m = 0;
            if (
              (n === g
                ? (m = i)
                : 0 === g
                ? (m = l + h)
                : -1 === e$[g] && (m = s - (e[r][0] - l)),
              t.splice(r + g, 0, {
                horizontal: e$[g],
                vertical: 0,
                pos: [m, v],
              }),
              e.splice(r + g, 0, [m, v]),
              0 === g)
            )
              break;
          }
        else if (a > -1) {
          var b = 1 === e0[a] ? o - c : u - o;
          if (0 === p[1] && 0 === d[1]) {
            var x = [l + b, c];
            t.push({ horizontal: 1, vertical: 0, pos: x }), e.push(x);
          }
          for (var E = d[0], g = d[1]; g <= a; ++g) {
            var m = 1 === e$[g] ? l : s,
              v = 0;
            if (
              (a === g
                ? (v = o)
                : 0 === g
                ? (v = c + b)
                : 1 === e0[g]
                ? (v = e[r + E][1])
                : -1 === e0[g] && (v = u - (e[r + E][1] - c)),
              t.push({ horizontal: 0, vertical: e0[g], pos: [m, v] }),
              e.push([m, v]),
              0 === g)
            )
              break;
          }
        }
      }
      function e9(t, e) {
        return (
          void 0 === e &&
            (e = t.map(function (t) {
              return t.raw;
            })),
          {
            horizontals: t
              .map(function (t, r) {
                return t.horizontal ? e[r] : null;
              })
              .filter(function (t) {
                return null != t;
              }),
            verticals: t
              .map(function (t, r) {
                return t.vertical ? e[r] : null;
              })
              .filter(function (t) {
                return null != t;
              }),
          }
        );
      }
      var e6 = [
          [0, -1, "n"],
          [1, 0, "e"],
        ],
        e8 = [
          [-1, -1, "nw"],
          [0, -1, "n"],
          [1, -1, "ne"],
          [1, 0, "e"],
          [1, 1, "se"],
          [0, 1, "s"],
          [-1, 1, "sw"],
          [-1, 0, "w"],
        ];
      function e7(t, e, r) {
        var n = t.props.clipRelative,
          a = t.state,
          i = a.width,
          o = a.height,
          s = e.type,
          l = e.poses,
          c = "rect" === s,
          f = "circle" === s;
        if ("polygon" === s)
          return r.map(function (t) {
            return "".concat(ez(t[0], i, n), " ").concat(ez(t[1], o, n));
          });
        if (c || "inset" === s) {
          var p = r[1][1],
            d = r[3][0],
            h = r[7][0],
            g = r[5][1];
          if (c)
            return [p, d, g, h].map(function (t) {
              return "".concat(t, "px");
            });
          var v = [p, i - d, o - g, h].map(function (t, e) {
            return ez(t, e % 2 ? i : o, n);
          });
          if (r.length > 8) {
            var m = (0, u.h9)(r[4], r[0]),
              b = m[0],
              x = m[1];
            v.push.apply(
              v,
              E(
                ["round"],
                e1(r.slice(8), l.slice(8), n, b, x, h, p, d, g).styles,
                !1
              )
            );
          }
          return v;
        }
        if (f || "ellipse" === s) {
          var S = r[0],
            D = ez(
              Math.abs(r[1][1] - S[1]),
              f ? Math.sqrt((i * i + o * o) / 2) : o,
              n
            ),
            v = f ? [D] : [ez(Math.abs(r[2][0] - S[0]), i, n), D];
          return v.push("at", ez(S[0], i, n), ez(S[1], o, n)), v;
        }
      }
      function rt(t, e, r, n) {
        var a = [n, (n + e) / 2, e],
          i = [t, (t + r) / 2, r];
        return e8.map(function (t) {
          var e = t[0],
            r = t[1],
            n = t[2],
            o = a[e + 1],
            s = i[r + 1];
          return {
            vertical: Math.abs(r),
            horizontal: Math.abs(e),
            direction: n,
            pos: [o, s],
          };
        });
      }
      function re(t, e, r, n, a) {
        var i,
          o,
          u,
          l,
          c,
          f,
          p,
          d = a;
        if (!d) {
          var h = eS(t),
            g = h.clipPath;
          d = "none" !== g ? g : h.clip;
        }
        if ((d && "none" !== d && "auto" !== d) || (d = n)) {
          var v = (0, s.Le)(d),
            m = v.prefix,
            b = void 0 === m ? d : m,
            x = v.value,
            S = void 0 === x ? "" : x,
            D = "circle" === b,
            R = " ";
          if ("polygon" === b) {
            var M = (0, s.W6)(S || "0% 0%, 100% 0%, 100% 100%, 0% 100%");
            R = ",";
            var y = M.map(function (t) {
              var n = t.split(" "),
                a = n[0],
                i = n[1];
              return {
                vertical: 1,
                horizontal: 1,
                pos: [(0, s.AA)(a, e), (0, s.AA)(i, r)],
              };
            });
            return { type: b, clipText: d, poses: y, splitter: R };
          }
          if (D || "ellipse" === b) {
            var C = "",
              P = "",
              z = 0,
              B = 0,
              M = (0, s.WE)(S);
            if (D) {
              var G = "";
              (G = void 0 === (i = M[0]) ? "50%" : i),
                (C = void 0 === (o = M[2]) ? "50%" : o),
                (P = void 0 === (u = M[3]) ? "50%" : u),
                (B = z = (0, s.AA)(G, Math.sqrt((e * e + r * r) / 2)));
            } else {
              var O = "",
                w = "";
              (O = void 0 === (l = M[0]) ? "50%" : l),
                (w = void 0 === (c = M[1]) ? "50%" : c),
                (C = void 0 === (f = M[3]) ? "50%" : f),
                (P = void 0 === (p = M[4]) ? "50%" : p),
                (z = (0, s.AA)(O, e)),
                (B = (0, s.AA)(w, r));
            }
            var T = [(0, s.AA)(C, e), (0, s.AA)(P, r)],
              y = E(
                [{ vertical: 1, horizontal: 1, pos: T, direction: "nesw" }],
                e6.slice(0, D ? 1 : 2).map(function (t) {
                  return {
                    vertical: Math.abs(t[1]),
                    horizontal: t[0],
                    direction: t[2],
                    sub: !0,
                    pos: [T[0] + t[0] * z, T[1] + t[1] * B],
                  };
                }),
                !0
              );
            return {
              type: b,
              clipText: d,
              radiusX: z,
              radiusY: B,
              left: T[0] - z,
              top: T[1] - B,
              poses: y,
              splitter: R,
            };
          }
          if ("inset" === b) {
            var M = (0, s.WE)(S || "0 0 0 0"),
              A = M.indexOf("round"),
              k = (A > -1 ? M.slice(0, A) : M).length,
              I = M.slice(k + 1),
              W = M.slice(0, k),
              F = W[0],
              N = W[1],
              q = void 0 === N ? F : N,
              H = W[2],
              j = W[3],
              Y = [F, void 0 === H ? F : H].map(function (t) {
                return (0, s.AA)(t, r);
              }),
              _ = Y[0],
              X = Y[1],
              L = [void 0 === j ? q : j, q].map(function (t) {
                return (0, s.AA)(t, e);
              }),
              V = L[0],
              U = L[1],
              K = e - U,
              Z = r - X,
              Q = e3(I, K - V, Z - _, V, _),
              y = E(E([], rt(_, K, Z, V), !0), Q, !0);
            return {
              type: "inset",
              clipText: d,
              poses: y,
              top: _,
              left: V,
              right: K,
              bottom: Z,
              radius: I,
              splitter: R,
            };
          }
          if ("rect" === b) {
            var M = (0, s.W6)(
              S || "0px, ".concat(e, "px, ").concat(r, "px, 0px")
            );
            R = ",";
            var J = M.map(function (t) {
                return (0, s.jL)(t).value;
              }),
              _ = J[0],
              U = J[1],
              X = J[2],
              V = J[3],
              y = rt(_, U, X, V);
            return {
              type: "rect",
              clipText: d,
              poses: y,
              top: _,
              right: U,
              bottom: X,
              left: V,
              values: M,
              splitter: R,
            };
          }
        }
      }
      var rr = {
        name: "clippable",
        props: {
          clippable: Boolean,
          defaultClipPath: String,
          customClipPath: String,
          clipRelative: Boolean,
          clipArea: Boolean,
          dragWithClip: Boolean,
          clipTargetBounds: Boolean,
          clipVerticalGuidelines: Array,
          clipHorizontalGuidelines: Array,
          clipSnapThreshold: Boolean,
        },
        events: {
          onClipStart: "clipStart",
          onClip: "clip",
          onClipEnd: "clipEnd",
        },
        css: [
          ".control.clip-control {\n    background: #6d6;\n    cursor: pointer;\n}\n.control.clip-control.clip-radius {\n    background: #d66;\n}\n.line.clip-line {\n    background: #6e6;\n    cursor: move;\n    z-index: 1;\n}\n.clip-area {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.clip-ellipse {\n    position: absolute;\n    cursor: move;\n    border: 1px solid #6d6;\n    border: var(--zoompx) solid #6d6;\n    border-radius: 50%;\n    transform-origin: 0px 0px;\n}",
          ":host {\n    --bounds-color: #d66;\n}",
          ".guideline {\n    pointer-events: none;\n    z-index: 2;\n}",
          ".line.guideline.bounds {\n    background: #d66;\n    background: var(--bounds-color);\n}",
        ],
        render: function (t, e) {
          var r = t.props,
            n = r.customClipPath,
            a = r.defaultClipPath,
            i = r.clipArea,
            o = r.zoom,
            l = t.state,
            c = l.target,
            f = l.width,
            p = l.height,
            d = l.allMatrix,
            h = l.is3d,
            g = l.left,
            v = l.top,
            m = l.pos1,
            b = l.pos2,
            x = l.pos3,
            S = l.pos4,
            D = l.clipPathState,
            R = l.snapBoundInfos,
            M = l.rotation;
          if (!c) return [];
          var y = re(c, f, p, a || "inset", D || n);
          if (!y) return [];
          var C = h ? 4 : 3,
            P = y.type,
            z = y.poses.map(function (t) {
              var e = et(d, t.pos, C);
              return [e[0] - g, e[1] - v];
            }),
            B = [],
            G = [],
            O = "rect" === P,
            w = "inset" === P,
            T = "polygon" === P;
          if (O || w || T) {
            var A = w ? z.slice(0, 8) : z;
            G = A.map(function (t, r) {
              var n = 0 === r ? A[A.length - 1] : A[r - 1],
                a = (0, s.jv)(n, t),
                i = ei(n, t);
              return e.createElement("div", {
                key: "clipLine".concat(r),
                className: t0("line", "clip-line", "snap-control"),
                "data-clip-index": r,
                style: {
                  width: "".concat(i, "px"),
                  transform: "translate("
                    .concat(n[0], "px, ")
                    .concat(n[1], "px) rotate(")
                    .concat(a, "rad) scaleY(")
                    .concat(o, ")"),
                },
              });
            });
          }
          if (
            ((B = z.map(function (t, r) {
              return e.createElement("div", {
                key: "clipControl".concat(r),
                className: t0("control", "clip-control", "snap-control"),
                "data-clip-index": r,
                style: {
                  transform: "translate("
                    .concat(t[0], "px, ")
                    .concat(t[1], "px) rotate(")
                    .concat(M, "rad) scale(")
                    .concat(o, ")"),
                },
              });
            })),
            w &&
              B.push.apply(
                B,
                z.slice(8).map(function (t, r) {
                  return e.createElement("div", {
                    key: "clipRadiusControl".concat(r),
                    className: t0(
                      "control",
                      "clip-control",
                      "clip-radius",
                      "snap-control"
                    ),
                    "data-clip-index": 8 + r,
                    style: {
                      transform: "translate("
                        .concat(t[0], "px, ")
                        .concat(t[1], "px) rotate(")
                        .concat(M, "rad) scale(")
                        .concat(o, ")"),
                    },
                  });
                })
              ),
            "circle" === P || "ellipse" === P)
          ) {
            var k = y.left,
              I = y.top,
              F = y.radiusX,
              N = y.radiusY,
              q = (0, u.h9)(et(d, [k, I], C), et(d, [0, 0], C)),
              H = q[0],
              j = q[1],
              Y = "none";
            if (!i) {
              for (
                var _ = Math.max(10, F / 5, N / 5), X = [], L = 0;
                L <= _;
                ++L
              ) {
                var V = ((2 * Math.PI) / _) * L;
                X.push([F + (F - o) * Math.cos(V), N + (N - o) * Math.sin(V)]);
              }
              X.push([F, -2]),
                X.push([-2, -2]),
                X.push([-2, 2 * N + 2]),
                X.push([2 * F + 2, 2 * N + 2]),
                X.push([2 * F + 2, -2]),
                X.push([F, -2]),
                (Y = "polygon(".concat(
                  X.map(function (t) {
                    return "".concat(t[0], "px ").concat(t[1], "px");
                  }).join(", "),
                  ")"
                ));
            }
            B.push(
              e.createElement("div", {
                key: "clipEllipse",
                className: t0("clip-ellipse", "snap-control"),
                style: {
                  width: "".concat(2 * F, "px"),
                  height: "".concat(2 * N, "px"),
                  clipPath: Y,
                  transform: "translate("
                    .concat(-g + H, "px, ")
                    .concat(-v + j, "px) ")
                    .concat(t8(d)),
                },
              })
            );
          }
          if (i) {
            var U = er(E([m, b, x, S], z, !0)),
              K = U.width,
              Z = U.height,
              Q = U.left,
              J = U.top;
            if (T || O || w) {
              var X = w ? z.slice(0, 8) : z;
              B.push(
                e.createElement("div", {
                  key: "clipArea",
                  className: t0("clip-area", "snap-control"),
                  style: {
                    width: "".concat(K, "px"),
                    height: "".concat(Z, "px"),
                    transform: "translate(".concat(Q, "px, ").concat(J, "px)"),
                    clipPath: "polygon(".concat(
                      X.map(function (t) {
                        return ""
                          .concat(t[0] - Q, "px ")
                          .concat(t[1] - J, "px");
                      }).join(", "),
                      ")"
                    ),
                  },
                })
              );
            }
          }
          return (
            R &&
              ["vertical", "horizontal"].forEach(function (t) {
                var r = R[t],
                  n = "horizontal" === t;
                r.isSnap &&
                  G.push.apply(
                    G,
                    r.snap.posInfos.map(function (r, a) {
                      var i = r.pos;
                      return W(
                        e,
                        "",
                        (0, u.h9)(et(d, n ? [0, i] : [i, 0], C), [g, v]),
                        (0, u.h9)(et(d, n ? [f, i] : [i, p], C), [g, v]),
                        o,
                        "clip".concat(t, "snap").concat(a),
                        "guideline"
                      );
                    })
                  ),
                  r.isBound &&
                    G.push.apply(
                      G,
                      r.bounds.map(function (r, a) {
                        var i = r.pos;
                        return W(
                          e,
                          "",
                          (0, u.h9)(et(d, n ? [0, i] : [i, 0], C), [g, v]),
                          (0, u.h9)(et(d, n ? [f, i] : [i, p], C), [g, v]),
                          o,
                          "clip".concat(t, "bounds").concat(a),
                          "guideline",
                          "bounds",
                          "bold"
                        );
                      })
                    );
              }),
            E(E([], B, !0), G, !0)
          );
        },
        dragControlCondition: function (t, e) {
          return (
            e.inputEvent &&
            (e.inputEvent.target.getAttribute("class") || "").indexOf("clip") >
              -1
          );
        },
        dragStart: function (t, e) {
          var r = t.props.dragWithClip;
          return void 0 !== r && !r && this.dragControlStart(t, e);
        },
        drag: function (t, e) {
          return this.dragControl(t, x(x({}, e), { isDragTarget: !0 }));
        },
        dragEnd: function (t, e) {
          return this.dragControlEnd(t, e);
        },
        dragControlStart: function (t, e) {
          var r = t.state,
            n = t.props,
            a = n.defaultClipPath,
            i = n.customClipPath,
            o = r.target,
            s = r.width,
            u = r.height,
            l = e.inputEvent ? e.inputEvent.target : null,
            c = (l && l.getAttribute("class")) || "",
            f = e.datas,
            p = re(o, s, u, a || "inset", i);
          if (!p) return !1;
          var d = p.clipText;
          return !1 ===
            eE(
              t,
              "onClipStart",
              em(t, e, {
                clipType: p.type,
                clipStyle: d,
                poses: p.poses.map(function (t) {
                  return t.pos;
                }),
              })
            )
            ? ((f.isClipStart = !1), !1)
            : ((f.isControl = c && c.indexOf("clip-control") > -1),
              (f.isLine = c.indexOf("clip-line") > -1),
              (f.isArea =
                c.indexOf("clip-area") > -1 || c.indexOf("clip-ellipse") > -1),
              (f.index = l
                ? parseInt(l.getAttribute("data-clip-index"), 10)
                : -1),
              (f.clipPath = p),
              (f.isClipStart = !0),
              (r.clipPathState = d),
              tA(t, e),
              !0);
        },
        dragControl: function (t, e) {
          var r,
            n = e.datas,
            a = e.originalDatas,
            i = e.isDragTarget;
          if (!n.isClipStart) return !1;
          var o = n.isControl,
            l = n.isLine,
            c = n.isArea,
            f = n.index,
            p = n.clipPath;
          if (!p) return !1;
          var d = 0,
            h = 0,
            g = a.draggable,
            v = tN(e);
          i && g
            ? ((d = (r = g.prevBeforeDist)[0]), (h = r[1]))
            : ((d = v[0]), (h = v[1]));
          var m = [d, h],
            b = t.props,
            x = t.state,
            S = x.width,
            D = x.height,
            R = p.type,
            M = p.poses,
            y = p.splitter,
            C = M.map(function (t) {
              return t.pos;
            });
          c || o || l || ((d = -d), (h = -h));
          var P = !o || "nesw" === M[f].direction,
            z = "inset" === R || "rect" === R,
            B = M.map(function () {
              return [0, 0];
            });
          if (o && !P) {
            var G = M[f],
              O = G.horizontal,
              w = G.vertical;
            B = (function (t, e, r, n) {
              var a = t[e],
                i = a.direction,
                o = a.sub,
                s = t.map(function () {
                  return [0, 0];
                }),
                u = i ? i.split("") : [];
              if (n && e < 8) {
                var l = u.filter(function (t) {
                    return "w" === t || "e" === t;
                  })[0],
                  c = u.filter(function (t) {
                    return "n" === t || "s" === t;
                  })[0];
                (s[e] = r),
                  t.forEach(function (t, e) {
                    var n = t.direction;
                    n &&
                      (n.indexOf(l) > -1 && (s[e][0] = r[0]),
                      n.indexOf(c) > -1 && (s[e][1] = r[1]));
                  }),
                  l && ((s[1][0] = r[0] / 2), (s[5][0] = r[0] / 2)),
                  c && ((s[3][1] = r[1] / 2), (s[7][1] = r[1] / 2));
              } else
                i && !o
                  ? u.forEach(function (e) {
                      var n = "n" === e || "s" === e;
                      t.forEach(function (t, a) {
                        var i = t.direction,
                          o = t.horizontal,
                          u = t.vertical;
                        i &&
                          -1 !== i.indexOf(e) &&
                          (s[a] = [n || !o ? 0 : r[0], n && u ? r[1] : 0]);
                      });
                    })
                  : (s[e] = r);
              return s;
            })(M, f, [d * Math.abs(O), h * Math.abs(w)], z);
          } else
            P &&
              (B = C.map(function () {
                return [d, h];
              }));
          var T = C.map(function (t, e) {
              return (0, u.PD)(t, B[e]);
            }),
            A = E([], T, !0);
          x.snapBoundInfos = null;
          var k = "circle" === p.type,
            I = "ellipse" === p.type;
          if (k || I) {
            var W = er(T),
              F = Math.abs(W.bottom - W.top),
              N = Math.abs(I ? W.right - W.left : F),
              q = T[0][1] + F,
              H = T[0][0] - N,
              j = T[0][0] + N;
            k && (A.push([j, W.bottom]), B.push([1, 0])),
              A.push([W.left, q]),
              B.push([0, 1]),
              A.push([H, W.bottom]),
              B.push([1, 0]);
          }
          var Y = Q(
              (b.clipHorizontalGuidelines || []).map(function (t) {
                return (0, s.AA)("".concat(t), D);
              }),
              (b.clipVerticalGuidelines || []).map(function (t) {
                return (0, s.AA)("".concat(t), S);
              }),
              S,
              D
            ),
            _ = [],
            X = [];
          if (k || I) (_ = [A[4][0], A[2][0]]), (X = [A[1][1], A[3][1]]);
          else if (z) {
            var L = [A[0], A[2], A[4], A[6]],
              V = [B[0], B[2], B[4], B[6]];
            (_ = L.filter(function (t, e) {
              return V[e][0];
            }).map(function (t) {
              return t[0];
            })),
              (X = L.filter(function (t, e) {
                return V[e][1];
              }).map(function (t) {
                return t[1];
              }));
          } else
            (_ = A.filter(function (t, e) {
              return B[e][0];
            }).map(function (t) {
              return t[0];
            })),
              (X = A.filter(function (t, e) {
                return B[e][1];
              }).map(function (t) {
                return t[1];
              }));
          for (
            var U = [0, 0], K = 0;
            K < 2 &&
            "break" !==
              (function (t) {
                var e = ty(
                    Y,
                    b.clipTargetBounds && {
                      left: 0,
                      top: 0,
                      right: S,
                      bottom: D,
                    },
                    _,
                    X,
                    5
                  ),
                  r = e.horizontal,
                  n = e.vertical,
                  a = r.offset,
                  i = n.offset;
                if (
                  (r.isBound && (U[1] += a),
                  n.isBound && (U[0] += i),
                  (!I && !k) || 0 !== B[0][0] || 0 !== B[0][1])
                )
                  return (
                    A.forEach(function (t, e) {
                      var r = B[e];
                      r[0] && (t[0] -= i), r[1] && (t[1] -= a);
                    }),
                    "break"
                  );
                var o = er(T),
                  s = o.bottom - o.top,
                  u = I ? o.right - o.left : s,
                  l = n.isBound ? Math.abs(i) : 0 === n.snapIndex ? -i : i,
                  c = r.isBound ? Math.abs(a) : 0 === r.snapIndex ? -a : a;
                (u -= l), (s -= c), k && (u = s = ta(n, r) > 0 ? s : u);
                var f = A[0];
                (A[1][1] = f[1] - s),
                  (A[2][0] = f[0] + u),
                  (A[3][1] = f[1] + s),
                  (A[4][0] = f[0] - u);
              })();
            ++K
          );
          var Z = e7(t, p, T),
            J = "".concat(R, "(").concat(Z.join(y), ")");
          if (((x.clipPathState = J), k || I))
            (_ = [A[4][0], A[2][0]]), (X = [A[1][1], A[3][1]]);
          else if (z) {
            var L = [A[0], A[2], A[4], A[6]];
            (_ = L.map(function (t) {
              return t[0];
            })),
              (X = L.map(function (t) {
                return t[1];
              }));
          } else
            (_ = A.map(function (t) {
              return t[0];
            })),
              (X = A.map(function (t) {
                return t[1];
              }));
          if (
            ((x.snapBoundInfos = ty(
              Y,
              b.clipTargetBounds && { left: 0, top: 0, right: S, bottom: D },
              _,
              X,
              1
            )),
            g)
          ) {
            var $ = x.is3d,
              tt = x.allMatrix,
              te = U;
            i && (te = [m[0] + U[0] - v[0], m[1] + U[1] - v[1]]),
              (g.deltaOffset = (0, u.ml)(tt, [te[0], te[1], 0, 0], $ ? 4 : 3));
          }
          return (
            eE(
              t,
              "onClip",
              em(t, e, {
                clipEventType: "changed",
                clipType: R,
                poses: T,
                clipStyle: J,
                clipStyles: Z,
                distX: d,
                distY: h,
              })
            ),
            !0
          );
        },
        dragControlEnd: function (t, e) {
          this.unset(t);
          var r = e.isDrag,
            n = e.datas,
            a = e.isDouble,
            i = n.isLine,
            o = n.isClipStart,
            s = n.isControl;
          return (
            !!o &&
            (eE(t, "onClipEnd", eb(t, e, {})),
            a &&
              (s
                ? (function (t, e) {
                    var r = e.datas,
                      n = r.clipPath,
                      a = r.index,
                      i = n.type,
                      o = n.poses,
                      s = n.splitter,
                      u = o.map(function (t) {
                        return t.pos;
                      }),
                      l = u.length;
                    if ("polygon" === i) o.splice(a, 1), u.splice(a, 1);
                    else if (
                      "inset" !== i ||
                      a < 8 ||
                      (e4(o, u, a, 8, l), l === o.length)
                    )
                      return;
                    var c = e7(t, n, u);
                    eE(
                      t,
                      "onClip",
                      em(t, e, {
                        clipEventType: "removed",
                        clipType: i,
                        poses: u,
                        clipStyles: c,
                        clipStyle: "".concat(i, "(").concat(c.join(s), ")"),
                        distX: 0,
                        distY: 0,
                      })
                    );
                  })(t, e)
                : i &&
                  (function (t, e) {
                    var r = tT(t, e),
                      n = r[0],
                      a = r[1],
                      i = e.datas,
                      o = i.clipPath,
                      s = i.index,
                      u = o.type,
                      l = o.poses,
                      c = o.splitter,
                      f = l.map(function (t) {
                        return t.pos;
                      });
                    if ("polygon" === u) f.splice(s, 0, [n, a]);
                    else {
                      if ("inset" !== u) return;
                      var p = eQ.indexOf(s),
                        d = eJ.indexOf(s),
                        h = l.length;
                      if (
                        (e5(
                          l,
                          f,
                          8,
                          p,
                          d,
                          n,
                          a,
                          f[4][0],
                          f[4][1],
                          f[0][0],
                          f[0][1]
                        ),
                        h === l.length)
                      )
                        return;
                    }
                    var g = e7(t, o, f);
                    eE(
                      t,
                      "onClip",
                      em(t, e, {
                        clipEventType: "added",
                        clipType: u,
                        poses: f,
                        clipStyles: g,
                        clipStyle: "".concat(u, "(").concat(g.join(c), ")"),
                        distX: 0,
                        distY: 0,
                      })
                    );
                  })(t, e)),
            a || r)
          );
        },
        unset: function (t) {
          (t.state.clipPathState = ""), (t.state.snapBoundInfos = null);
        },
      };
      function rn(t, e, r, n, a) {
        var i;
        if ((void 0 === n && (n = [0, 0]), a)) i = a;
        else {
          var o = eS(t);
          i = (o && o.borderRadius) || "";
        }
        return e3(i && (a || "0px" !== i) ? (0, s.WE)(i) : [], e, r, 0, 0, n);
      }
      function ra(t, e, r, n, a, i) {
        var o = t.state,
          s = o.width,
          u = o.height,
          l = e1(i, a, t.props.roundRelative, s, u),
          c = l.raws,
          f = l.styles,
          p = e9(a, c),
          d = p.horizontals,
          h = p.verticals,
          g = f.join(" ");
        (o.borderRadiusState = g),
          eE(
            t,
            "onRound",
            em(t, e, {
              horizontals: d,
              verticals: h,
              borderRadius: g,
              width: s,
              height: u,
              delta: n,
              dist: r,
            })
          );
      }
      var ri = {
          isPinch: !0,
          name: "beforeRenderable",
          props: {},
          events: {
            onBeforeRenderStart: "beforeRenderStart",
            onBeforeRender: "beforeRender",
            onBeforeRenderEnd: "beforeRenderEnd",
            onBeforeRenderGroupStart: "beforeRenderGroupStart",
            onBeforeRenderGroup: "beforeRenderGroup",
            onBeforeRenderGroupEnd: "beforeRenderGroupEnd",
          },
          dragRelation: "weak",
          setTransform: function (t, e) {
            var r = t.state,
              n = r.is3d,
              a = r.target,
              i = r.targetMatrix,
              o = null == a ? void 0 : a.style.transform,
              l = n
                ? "matrix3d(".concat(i.join(","), ")")
                : "matrix(".concat((0, u.pQ)(i, !0), ")"),
              c = o && "none" !== o ? o : l;
            e.datas.startTransforms =
              c ===
                (n
                  ? "matrix3d(".concat((0, u.Te)(4))
                  : "matrix(".concat((0, u.Te)(3), ")")) ||
              "matrix(1,0,0,1,0,0)" === c
                ? []
                : (0, s.WE)(c);
          },
          resetTransform: function (t) {
            (t.datas.nextTransforms = t.datas.startTransforms),
              (t.datas.nextTransformAppendedIndexes = []);
          },
          fillDragStartParams: function (t, e) {
            return em(t, e, {
              setTransform: function (t) {
                e.datas.startTransforms = (0, s.kJ)(t) ? t : (0, s.WE)(t);
              },
              isPinch: !!e.isPinch,
            });
          },
          fillDragParams: function (t, e) {
            return em(t, e, { isPinch: !!e.isPinch });
          },
          dragStart: function (t, e) {
            this.setTransform(t, e),
              eE(t, "onBeforeRenderStart", this.fillDragStartParams(t, e));
          },
          drag: function (t, e) {
            this.resetTransform(e),
              eE(t, "onBeforeRender", em(t, e, { isPinch: !!e.isPinch }));
          },
          dragEnd: function (t, e) {
            eE(
              t,
              "onBeforeRenderEnd",
              em(t, e, { isPinch: !!e.isPinch, isDrag: e.isDrag })
            );
          },
          dragGroupStart: function (t, e) {
            var r = this;
            this.dragStart(t, e);
            var n = T(t, "beforeRenderable", e),
              a = t.moveables,
              i = n.map(function (t, e) {
                var n = a[e];
                return r.setTransform(n, t), r.fillDragStartParams(n, t);
              });
            eE(
              t,
              "onBeforeRenderGroupStart",
              em(t, e, {
                isPinch: !!e.isPinch,
                targets: t.props.targets,
                setTransform: function () {},
                events: i,
              })
            );
          },
          dragGroup: function (t, e) {
            var r = this;
            this.drag(t, e);
            var n = T(t, "beforeRenderable", e),
              a = t.moveables,
              i = n.map(function (t, e) {
                var n = a[e];
                return r.resetTransform(t), r.fillDragParams(n, t);
              });
            eE(
              t,
              "onBeforeRenderGroup",
              em(t, e, {
                isPinch: !!e.isPinch,
                targets: t.props.targets,
                events: i,
              })
            );
          },
          dragGroupEnd: function (t, e) {
            this.dragEnd(t, e),
              eE(
                t,
                "onBeforeRenderGroupEnd",
                em(t, e, {
                  isPinch: !!e.isPinch,
                  isDrag: e.isDrag,
                  targets: t.props.targets,
                })
              );
          },
          dragControlStart: function (t, e) {
            return this.dragStart(t, e);
          },
          dragControl: function (t, e) {
            return this.drag(t, e);
          },
          dragControlEnd: function (t, e) {
            return this.dragEnd(t, e);
          },
          dragGroupControlStart: function (t, e) {
            return this.dragGroupStart(t, e);
          },
          dragGroupControl: function (t, e) {
            return this.dragGroup(t, e);
          },
          dragGroupControlEnd: function (t, e) {
            return this.dragGroupEnd(t, e);
          },
        },
        ro = {
          name: "renderable",
          props: {},
          events: {
            onRenderStart: "renderStart",
            onRender: "render",
            onRenderEnd: "renderEnd",
            onRenderGroupStart: "renderGroupStart",
            onRenderGroup: "renderGroup",
            onRenderGroupEnd: "renderGroupEnd",
          },
          dragRelation: "weak",
          dragStart: function (t, e) {
            eE(t, "onRenderStart", em(t, e, { isPinch: !!e.isPinch }));
          },
          drag: function (t, e) {
            eE(t, "onRender", this.fillDragParams(t, e));
          },
          dragAfter: function (t, e) {
            if (e.resultCount) return this.drag(t, e);
          },
          dragEnd: function (t, e) {
            eE(t, "onRenderEnd", this.fillDragEndParams(t, e));
          },
          dragGroupStart: function (t, e) {
            eE(
              t,
              "onRenderGroupStart",
              em(t, e, { isPinch: !!e.isPinch, targets: t.props.targets })
            );
          },
          dragGroup: function (t, e) {
            var r = this,
              n = T(t, "beforeRenderable", e),
              a = t.moveables,
              i = n.map(function (t, e) {
                var n = a[e];
                return r.fillDragParams(n, t);
              });
            eE(
              t,
              "onRenderGroup",
              em(t, e, {
                isPinch: !!e.isPinch,
                targets: t.props.targets,
                transform: tU(e),
                events: i,
              })
            );
          },
          dragGroupEnd: function (t, e) {
            var r = this,
              n = T(t, "beforeRenderable", e),
              a = t.moveables,
              i = n.map(function (t, e) {
                var n = a[e];
                return r.fillDragEndParams(n, t);
              });
            eE(
              t,
              "onRenderGroupEnd",
              em(t, e, {
                isPinch: !!e.isPinch,
                isDrag: e.isDrag,
                targets: t.props.targets,
                events: i,
              })
            );
          },
          dragControlStart: function (t, e) {
            return this.dragStart(t, e);
          },
          dragControl: function (t, e) {
            return this.drag(t, e);
          },
          dragControlAfter: function (t, e) {
            return this.dragAfter(t, e);
          },
          dragControlEnd: function (t, e) {
            return this.dragEnd(t, e);
          },
          dragGroupControlStart: function (t, e) {
            return this.dragGroupStart(t, e);
          },
          dragGroupControl: function (t, e) {
            return this.dragGroup(t, e);
          },
          dragGroupControlEnd: function (t, e) {
            return this.dragGroupEnd(t, e);
          },
          fillDragParams: function (t, e) {
            return em(t, e, { isPinch: !!e.isPinch, transform: tU(e) });
          },
          fillDragEndParams: function (t, e) {
            return em(t, e, { isPinch: !!e.isPinch, isDrag: e.isDrag });
          },
        };
      function rs(t, e, r, n, a, i, o) {
        var s,
          u = "Start" === a,
          l = t.state.target,
          c = i.isRequest;
        if (
          !l ||
          (u &&
            n.indexOf("Control") > -1 &&
            !c &&
            t.areaElement === i.inputEvent.target)
        )
          return !1;
        var f = "".concat(r).concat(n).concat(a),
          p = "".concat(r).concat(n, "Condition"),
          d = "End" === a,
          h = "After" === a,
          g =
            u &&
            (!t.targetGesto ||
              !t.controlGesto ||
              !t.targetGesto.isFlag() ||
              !t.controlGesto.isFlag());
        g && t.updateRect(a, !0, !1), "" !== a || c || eC(t.state, i);
        var v = E([], t[e], !0);
        if (c) {
          var m = i.requestAble;
          v.some(function (t) {
            return t.name === m;
          }) ||
            v.push.apply(
              v,
              t.props.ables.filter(function (t) {
                return t.name === m;
              })
            );
        }
        if (!v.length) return !1;
        var b = E(E([ri], v, !0), [ro], !1).filter(function (t) {
            return t[f];
          }),
          S = i.datas;
        g &&
          b.forEach(function (e) {
            e.unset && e.unset(t);
          });
        var D = i.inputEvent;
        d &&
          D &&
          (s = document.elementFromPoint(i.clientX, i.clientY) || D.target);
        var R = 0,
          M = b.filter(function (e) {
            var r = e.name,
              n = S[r] || (S[r] = {});
            if ((u && (n.isEventStart = !e[p] || e[p](t, i)), n.isEventStart)) {
              var a = e[f](
                t,
                x(x({}, i), {
                  resultCount: R,
                  datas: n,
                  originalDatas: S,
                  inputTarget: s,
                })
              );
              return (
                t._emitter.off(),
                u && !1 === a && (n.isEventStart = !1),
                (R += a ? 1 : 0),
                a
              );
            }
            return !1;
          }).length,
          y = !1;
        return (
          u &&
            b.length &&
            !M &&
            (y =
              0 ===
              b.filter(function (t) {
                var e = S[t.name];
                return (
                  !!e.isEventStart &&
                  ("strong" !== t.dragRelation || ((e.isEventStart = !1), !1))
                );
              }).length),
          (d || y) &&
            ((t.state.gesto = null),
            t.moveables &&
              t.moveables.forEach(function (t) {
                t.state.gesto = null;
              })),
          g &&
            y &&
            b.forEach(function (e) {
              e.unset && e.unset(t);
            }),
          u && !c && M && (null == i || i.preventDefault()),
          !t.isUnmounted &&
            !y &&
            (((!u && M && !o) || d) &&
              (t.updateRect(d ? a : "", !0, !1), t.forceUpdate()),
            u || d || h || !M || o || rs(t, e, r, n, a + "After", i),
            !0)
        );
      }
      function ru(t, e, r) {
        var n = t.controlBox.getElement(),
          a = [];
        a.push(n), (!t.props.dragArea || t.props.dragTarget) && a.push(e);
        var i = function (e) {
          var r = e.inputEvent.target;
          return (
            r === t.areaElement ||
            (!t.isMoveableElement(r) &&
              !t.controlBox.getElement().contains(r)) ||
            (0, s.pv)(r, "moveable-area") ||
            (0, s.pv)(r, "moveable-padding")
          );
        };
        return rl(t, a, "targetAbles", r, { dragStart: i, pinchStart: i });
      }
      function rl(t, e, r, n, a) {
        void 0 === a && (a = {});
        var i = t.props,
          o = i.pinchOutside,
          s = i.pinchThreshold,
          u = {
            preventDefault: !1,
            container: window,
            pinchThreshold: s,
            pinchOutside: o,
          },
          l = new h.Z(e, u);
        return (
          ["drag", "pinch"].forEach(function (e) {
            ["Start", "", "End"].forEach(function (i) {
              l.on("".concat(e).concat(i), function (o) {
                var s = o.eventType;
                if (a[s] && !a[s](o)) {
                  o.stop();
                  return;
                }
                rs(t, r, e, n, i, o) || o.stop();
              });
            });
          }),
          l
        );
      }
      var rc = (function () {
          function t(t, e, r) {
            var n = this;
            (this.target = t),
              (this.moveable = e),
              (this.eventName = r),
              (this.ables = []),
              (this._onEvent = function (t) {
                var e = n.eventName,
                  r = n.moveable;
                r.state.disableNativeEvent ||
                  n.ables.forEach(function (n) {
                    n[e](r, { inputEvent: t });
                  });
              }),
              t.addEventListener(r.toLowerCase(), this._onEvent);
          }
          var e = t.prototype;
          return (
            (e.setAbles = function (t) {
              this.ables = t;
            }),
            (e.destroy = function () {
              this.target.removeEventListener(
                this.eventName.toLowerCase(),
                this._onEvent
              ),
                (this.target = null),
                (this.moveable = null);
            }),
            t
          );
        })(),
        rf = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = x(
                {
                  container: null,
                  gesto: null,
                  renderPoses: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                  ],
                  disableNativeEvent: !1,
                },
                ec(null)
              )),
              (e.enabledAbles = []),
              (e.targetAbles = []),
              (e.controlAbles = []),
              (e.rotation = 0),
              (e.scale = [1, 1]),
              (e.isUnmounted = !1),
              (e.events = { mouseEnter: null, mouseLeave: null }),
              (e._emitter = new v.Z()),
              (e._prevTarget = null),
              (e._prevDragArea = !1),
              (e._observer = null),
              (e._observerId = 0),
              (e.onPreventClick = function (t) {
                t.stopPropagation(),
                  (0, s.xC)(window, "click", e.onPreventClick, !0);
              }),
              (e.checkUpdateRect = function () {
                if (!e.isDragging()) {
                  var t = e.props.parentMoveable;
                  if (t) {
                    t.checkUpdateRect();
                    return;
                  }
                  (0, s.Wx)(e._observerId),
                    (e._observerId = (0, s.U7)(function () {
                      e.isDragging() || e.updateRect();
                    }));
                }
              }),
              e
            );
          }
          b(e, t);
          var r = e.prototype;
          return (
            (r.render = function () {
              var t = this.props,
                e = this.state,
                r = t.parentPosition,
                n = t.className,
                a = t.target,
                i = t.zoom,
                s = t.cspNonce,
                u = t.translateZ,
                l = t.cssStyled,
                c = t.portalContainer;
              this.checkUpdate(), this.updateRenderPoses();
              var f = r || { left: 0, top: 0 },
                p = f.left,
                h = f.top,
                g = e.left,
                v = e.top,
                m = e.target,
                b = e.direction,
                E = t.targets,
                S = ((E && E.length) || a) && m,
                D = this.isDragging(),
                R = {};
              return (
                this.getEnabledAbles().forEach(function (t) {
                  R["data-able-".concat(t.name.toLowerCase())] = !0;
                }),
                (0, d.createElement)(
                  l,
                  x(
                    {
                      cspNonce: s,
                      ref: (0, o.iH)(this, "controlBox"),
                      className: ""
                        .concat(
                          t0(
                            "control-box",
                            -1 === b ? "reverse" : "",
                            D ? "dragging" : ""
                          ),
                          " "
                        )
                        .concat(n),
                    },
                    R,
                    {
                      onClick: this.onPreventClick,
                      portalContainer: c,
                      style: {
                        position: "absolute",
                        display: S ? "block" : "none",
                        transform: "translate3d("
                          .concat(g - p, "px, ")
                          .concat(v - h, "px, ")
                          .concat(u, ")"),
                        "--zoom": i,
                        "--zoompx": "".concat(i, "px"),
                      },
                    }
                  ),
                  this.renderAbles(),
                  this._renderLines()
                )
              );
            }),
            (r.componentDidMount = function () {
              (this.isUnmounted = !1), this.controlBox.getElement();
              var t = this.props,
                e = t.parentMoveable,
                r = t.container,
                n = t.wrapperMoveable;
              this._updateTargets(),
                this._updateNativeEvents(),
                this._updateEvents(),
                r || e || n || this.updateRect("", !1, !0),
                this.updateCheckInput(),
                this._updateObserver(this.props);
            }),
            (r.componentDidUpdate = function (t) {
              this._updateNativeEvents(),
                this._updateEvents(),
                this._updateTargets(),
                this.updateCheckInput(),
                this._updateObserver(t);
            }),
            (r.componentWillUnmount = function () {
              (this.isUnmounted = !0),
                this._emitter.off(),
                ev(this, "targetGesto"),
                ev(this, "controlGesto");
              var t = this.events;
              for (var e in t) {
                var r = t[e];
                r && r.destroy();
              }
            }),
            (r.getContainer = function () {
              var t = this.props,
                e = t.parentMoveable,
                r = t.wrapperMoveable;
              return (
                t.container ||
                (r && r.getContainer()) ||
                (e && e.getContainer()) ||
                this.controlBox.getElement().parentElement
              );
            }),
            (r.isMoveableElement = function (t) {
              return t && (t.getAttribute("class") || "").indexOf(M) > -1;
            }),
            (r.dragStart = function (t) {
              var e = this.targetGesto;
              return e && !e.isFlag() && e.triggerDragStart(t), this;
            }),
            (r.hitTest = function (t) {
              var e,
                r = this.state,
                n = r.target,
                a = r.pos1,
                i = r.pos2,
                o = r.pos3,
                s = r.pos4,
                u = r.targetClientRect;
              if (!n) return 0;
              if (t instanceof Element) {
                var l = t.getBoundingClientRect();
                e = {
                  left: l.left,
                  top: l.top,
                  width: l.width,
                  height: l.height,
                };
              } else e = x({ width: 0, height: 0 }, t);
              var c = e.left,
                p = e.top,
                d = e.width,
                h = e.height,
                g = (0, f.aD)([a, i, s, o], u),
                v = (0, f.IW)(g, [
                  [c, p],
                  [c + d, p],
                  [c + d, p + h],
                  [c, p + h],
                ]),
                m = (0, f.tB)(g);
              return v && m ? Math.min(100, (v / m) * 100) : 0;
            }),
            (r.isInside = function (t, e) {
              var r = this.state,
                n = r.target,
                a = r.pos1,
                i = r.pos2,
                o = r.pos3,
                s = r.pos4,
                u = r.targetClientRect;
              return !!n && (0, f.V0)([t, e], (0, f.aD)([a, i, s, o], u));
            }),
            (r.updateRect = function (t, e, r) {
              void 0 === r && (r = !0);
              var n = this.props,
                a = n.parentMoveable,
                i = this.state.target || this.props.target,
                o = this.getContainer(),
                s = a ? a.props.rootContainer : n.rootContainer;
              this.updateState(
                ec(
                  this.controlBox && this.controlBox.getElement(),
                  i,
                  o,
                  o,
                  s || o
                ),
                !a && r
              );
            }),
            (r.isDragging = function () {
              return (
                (!!this.targetGesto && this.targetGesto.isFlag()) ||
                (!!this.controlGesto && this.controlGesto.isFlag())
              );
            }),
            (r.updateTarget = function (t) {
              this.updateRect(t, !0);
            }),
            (r.getRect = function () {
              var t = this.state,
                e = eg(this.state),
                r = e[0],
                n = e[1],
                a = e[2],
                i = e[3],
                o = er(e),
                s = t.width,
                l = t.height,
                c = o.width,
                f = o.height,
                p = o.left,
                d = o.top,
                h = [t.left, t.top],
                g = (0, u.PD)(h, t.origin);
              return {
                width: c,
                height: f,
                left: p,
                top: d,
                pos1: r,
                pos2: n,
                pos3: a,
                pos4: i,
                offsetWidth: s,
                offsetHeight: l,
                beforeOrigin: (0, u.PD)(h, t.beforeOrigin),
                origin: g,
                transformOrigin: t.transformOrigin,
                rotation: this.getRotation(),
              };
            }),
            (r.getManager = function () {
              return this;
            }),
            (r.getRotation = function () {
              var t,
                e = this.state,
                r = e.pos1,
                n = e.pos2,
                a = e.direction;
              return (
                (t = ((0, s.jv)(r, n) / Math.PI) * 180),
                (t = (t = a >= 0 ? t : 180 - t) >= 0 ? t : 360 + t)
              );
            }),
            (r.request = function (t, e, r) {
              void 0 === e && (e = {});
              var n = this.props,
                a = n.ables,
                i = n.groupable,
                o = a.filter(function (e) {
                  return e.name === t;
                })[0];
              if (this.isDragging() || !o || !o.request)
                return {
                  request: function () {
                    return this;
                  },
                  requestEnd: function () {
                    return this;
                  },
                };
              var s = this,
                u = o.request(this),
                l = r || e.isInstant,
                c = u.isControl ? "controlAbles" : "targetAbles",
                f = ""
                  .concat(i ? "Group" : "")
                  .concat(u.isControl ? "Control" : ""),
                p = {
                  request: function (e) {
                    return (
                      rs(
                        s,
                        c,
                        "drag",
                        f,
                        "",
                        x(x({}, u.request(e)), {
                          requestAble: t,
                          isRequest: !0,
                        }),
                        l
                      ),
                      this
                    );
                  },
                  requestEnd: function () {
                    return (
                      rs(
                        s,
                        c,
                        "drag",
                        f,
                        "End",
                        x(x({}, u.requestEnd()), {
                          requestAble: t,
                          isRequest: !0,
                        }),
                        l
                      ),
                      this
                    );
                  },
                };
              return (
                rs(
                  s,
                  c,
                  "drag",
                  f,
                  "Start",
                  x(x({}, u.requestStart(e)), {
                    requestAble: t,
                    isRequest: !0,
                  }),
                  l
                ),
                l ? p.request(e).requestEnd() : p
              );
            }),
            (r.destroy = function () {
              this.componentWillUnmount();
            }),
            (r.updateRenderPoses = function () {
              var t = this.state,
                e = this.props,
                r = t.originalBeforeOrigin,
                n = t.transformOrigin,
                a = t.allMatrix,
                i = t.is3d,
                o = t.pos1,
                s = t.pos2,
                l = t.pos3,
                c = t.pos4,
                f = t.left,
                p = t.top,
                d = e.padding || {},
                h = d.left,
                g = void 0 === h ? 0 : h,
                v = d.top,
                m = void 0 === v ? 0 : v,
                b = d.bottom,
                x = void 0 === b ? 0 : b,
                E = d.right,
                S = void 0 === E ? 0 : E,
                D = i ? 4 : 3,
                R = e.groupable ? r : (0, u.PD)(r, [f, p]);
              t.renderPoses = [
                (0, u.PD)(o, eP(a, [-g, -m], n, R, D)),
                (0, u.PD)(s, eP(a, [S, -m], n, R, D)),
                (0, u.PD)(l, eP(a, [-g, x], n, R, D)),
                (0, u.PD)(c, eP(a, [S, x], n, R, D)),
              ];
            }),
            (r.checkUpdate = function () {
              var t = this.props,
                e = t.target,
                r = t.container,
                n = t.parentMoveable,
                a = this.state,
                i = a.target,
                o = a.container;
              if ((i || e) && (this.updateAbles(), !eR(i, e) || !eR(o, r))) {
                var s = r || this.controlBox;
                s && this.unsetAbles(),
                  this.updateState({ target: e, container: r }),
                  !n && s && this.updateRect("End", !1, !1);
              }
            }),
            (r.triggerEvent = function (t, e) {
              this._emitter.trigger(t, e);
              var r = this.props[t];
              return r && r(e);
            }),
            (r.useCSS = function (t, e) {
              var r = this.props.customStyledMap,
                n = t + e;
              return r[n] || (r[n] = (0, g.Z)(t, e)), r[n];
            }),
            (r.unsetAbles = function () {
              var t = this;
              this.targetAbles.forEach(function (e) {
                e.unset && e.unset(t);
              });
            }),
            (r.updateAbles = function (t, e) {
              void 0 === t && (t = this.props.ables), void 0 === e && (e = "");
              var r = this.props,
                n = r.triggerAblesSimultaneously,
                a = t.filter(function (t) {
                  return t && ((t.always && !1 !== r[t.name]) || r[t.name]);
                }),
                i = "drag".concat(e, "Start"),
                o = "pinch".concat(e, "Start"),
                s = "drag".concat(e, "ControlStart"),
                u = eD(a, [i, o], n),
                l = eD(a, [s], n);
              (this.enabledAbles = a),
                (this.targetAbles = u),
                (this.controlAbles = l);
            }),
            (r.updateState = function (t, e) {
              if (e) this.isUnmounted || this.setState(t);
              else {
                var r = this.state;
                for (var n in t) r[n] = t[n];
              }
            }),
            (r.getEnabledAbles = function () {
              var t = this.props;
              return t.ables.filter(function (e) {
                return e && t[e.name];
              });
            }),
            (r.renderAbles = function () {
              var t,
                e,
                r,
                n = this,
                a = this.props.triggerAblesSimultaneously,
                i = { createElement: d.createElement };
              return ((t = eD(this.getEnabledAbles(), ["render"], a)
                .map(function (t) {
                  return (0, t.render)(n, i) || [];
                })
                .reduce(function (t, e) {
                  return t.concat(e);
                }, [])
                .filter(function (t) {
                  return t;
                })),
              (e = []),
              (r = {}),
              t.forEach(function (t, n) {
                var a = t.key,
                  i = r[a];
                i || ((i = []), (r[a] = i), e.push(i)), i.push(t);
              }),
              e).map(function (t) {
                return t[0];
              });
            }),
            (r.updateCheckInput = function () {
              this.targetGesto &&
                (this.targetGesto.options.checkInput = this.props.checkInput);
            }),
            (r._updateObserver = function (t) {
              var e,
                r = this.props,
                n = r.target;
              if (!window.ResizeObserver || !n || !r.useResizeObserver) {
                null === (e = this._observer) || void 0 === e || e.disconnect();
                return;
              }
              if (t.target !== n || !this._observer) {
                var a = new ResizeObserver(this.checkUpdateRect);
                a.observe(n, { box: "border-box" }), (this._observer = a);
              }
            }),
            (r._updateEvents = function () {
              var t = this.controlBox.getElement(),
                e = this.targetAbles.length,
                r = this.controlAbles.length,
                n = this.props,
                a = n.dragTarget || n.target;
              ((!e && this.targetGesto) || this._isTargetChanged(!0)) &&
                (ev(this, "targetGesto"), this.updateState({ gesto: null })),
                r || ev(this, "controlGesto"),
                a &&
                  e &&
                  !this.targetGesto &&
                  (this.targetGesto = ru(this, a, "")),
                !this.controlGesto &&
                  r &&
                  (this.controlGesto = rl(this, t, "controlAbles", "Control"));
            }),
            (r._updateTargets = function () {
              var t = this.props;
              (this._prevTarget = t.dragTarget || t.target),
                (this._prevDragArea = t.dragArea);
            }),
            (r._renderLines = function () {
              var t = this.props,
                e = t.edge,
                r = t.zoom;
              if (t.hideDefaultLines) return [];
              var n = this.state.renderPoses,
                a = { createElement: d.createElement };
              return [
                W(a, e ? "n" : "", n[0], n[1], r, 0),
                W(a, e ? "e" : "", n[1], n[3], r, 1),
                W(a, e ? "w" : "", n[0], n[2], r, 2),
                W(a, e ? "s" : "", n[2], n[3], r, 3),
              ];
            }),
            (r._isTargetChanged = function (t) {
              var e = this.props,
                r = e.dragTarget || e.target,
                n = this._prevTarget,
                a = this._prevDragArea,
                i = e.dragArea;
              return (!i && n !== r) || ((t || i) && a !== i);
            }),
            (r._updateNativeEvents = function () {
              var t = this,
                e = this.props.dragArea ? this.areaElement : this.state.target,
                r = this.events,
                n = (0, s.RR)(r);
              if (this._isTargetChanged())
                for (var a in r) {
                  var i = r[a];
                  i && i.destroy(), (r[a] = null);
                }
              if (e) {
                var o = this.enabledAbles;
                n.forEach(function (n) {
                  var a = eD(o, [n]),
                    i = a.length > 0,
                    s = r[n];
                  if (!i) {
                    s && (s.destroy(), (r[n] = null));
                    return;
                  }
                  s || ((s = new rc(e, t, n)), (r[n] = s)), s.setAbles(a);
                });
              }
            }),
            (e.defaultProps = {
              target: null,
              dragTarget: null,
              container: null,
              rootContainer: null,
              origin: !0,
              edge: !1,
              parentMoveable: null,
              wrapperMoveable: null,
              parentPosition: null,
              portalContainer: null,
              useResizeObserver: !1,
              ables: [],
              pinchThreshold: 20,
              dragArea: !1,
              passDragArea: !1,
              transformOrigin: "",
              className: "",
              zoom: 1,
              triggerAblesSimultaneously: !1,
              padding: {},
              pinchOutside: !0,
              checkInput: !1,
              groupable: !1,
              hideDefaultLines: !1,
              cspNonce: "",
              translateZ: 0,
              cssStyled: null,
              customStyledMap: {},
              props: {},
            }),
            e
          );
        })(d.PureComponent),
        rp = {
          name: "groupable",
          props: {
            defaultGroupRotate: Number,
            defaultGroupOrigin: String,
            groupable: Boolean,
          },
          events: {},
          render: function (t, e) {
            var r = t.props.targets || [];
            t.moveables = [];
            var n = t.state,
              a = { left: n.left, top: n.top },
              i = t.props;
            return r.map(function (r, n) {
              return e.createElement(rf, {
                key: "moveable" + n,
                ref: (0, o.xL)(t, "moveables", n),
                target: r,
                origin: !1,
                cssStyled: i.cssStyled,
                customStyledMap: i.customStyledMap,
                useResizeObserver: i.useResizeObserver,
                parentMoveable: t,
                parentPosition: a,
              });
            });
          },
        },
        rd = S("clickable", {
          props: { clickable: Boolean },
          events: { onClick: "click", onClickGroup: "clickGroup" },
          always: !0,
          dragRelation: "weak",
          dragStart: function (t, e) {
            e.isRequest || (0, s.vP)(window, "click", t.onPreventClick, !0);
          },
          dragControlStart: function (t, e) {
            this.dragStart(t, e);
          },
          dragGroupStart: function (t, e) {
            this.dragStart(t, e),
              (e.datas.inputTarget = e.inputEvent && e.inputEvent.target);
          },
          dragEnd: function (t, e) {
            this.endEvent(t);
            var r = t.state.target,
              n = e.inputEvent,
              a = e.inputTarget,
              i =
                !t.isMoveableElement(a) &&
                t.controlBox.getElement().contains(a);
            if (
              ((!e.isDrag || i) && this.unset(t),
              !(!n || !a || e.isDrag || t.isMoveableElement(a)) && !i)
            ) {
              var o = r.contains(a);
              eE(
                t,
                "onClick",
                em(t, e, {
                  isDouble: e.isDouble,
                  inputTarget: a,
                  isTarget: r === a,
                  containsTarget: o,
                })
              );
            }
          },
          dragGroupEnd: function (t, e) {
            this.endEvent(t);
            var r = e.inputEvent,
              n = e.inputTarget;
            if (
              !(!r || !n || e.isDrag || t.isMoveableElement(n)) &&
              e.datas.inputTarget !== n
            ) {
              var a = t.props.targets,
                i = a.indexOf(n),
                o = i > -1,
                u = !1;
              -1 === i &&
                (u =
                  (i = (0, s.cx)(a, function (t) {
                    return t.contains(n);
                  })) > -1),
                eE(
                  t,
                  "onClickGroup",
                  em(t, e, {
                    isDouble: e.isDouble,
                    targets: a,
                    inputTarget: n,
                    targetIndex: i,
                    isTarget: o,
                    containsTarget: u,
                  })
                );
            }
          },
          dragControlEnd: function (t, e) {
            this.dragEnd(t, e);
          },
          dragGroupControlEnd: function (t, e) {
            this.dragEnd(t, e);
          },
          endEvent: function (t) {
            var e = this;
            (0, s.U7)(function () {
              e.unset(t);
            });
          },
          unset: function (t) {
            (0, s.xC)(window, "click", t.onPreventClick, !0);
          },
        });
      function rh(t) {
        var e = t.originalDatas.draggable;
        return (
          e ||
            ((t.originalDatas.draggable = {}), (e = t.originalDatas.draggable)),
          x(x({}, t), { datas: e })
        );
      }
      var rg = S("edgeDraggable", {
          dragControlCondition: function (t, e) {
            if (!t.props.edgeDraggable || !e.inputEvent) return !1;
            var r = e.inputEvent.target;
            return (0, s.pv)(r, t0("direction")) && (0, s.pv)(r, t0("line"));
          },
          dragControlStart: function (t, e) {
            return tw.dragStart(t, rh(e));
          },
          dragControl: function (t, e) {
            return tw.drag(t, rh(e));
          },
          dragControlEnd: function (t, e) {
            return tw.dragEnd(t, rh(e));
          },
          dragGroupControlCondition: function (t, e) {
            if (!t.props.edgeDraggable || !e.inputEvent) return !1;
            var r = e.inputEvent.target;
            return (0, s.pv)(r, t0("direction")) && (0, s.pv)(r, t0("line"));
          },
          dragGroupControlStart: function (t, e) {
            return tw.dragGroupStart(t, rh(e));
          },
          dragGroupControl: function (t, e) {
            return tw.dragGroup(t, rh(e));
          },
          dragGroupControlEnd: function (t, e) {
            return tw.dragGroupEnd(t, rh(e));
          },
          unset: function (t) {
            return tw.unset(t);
          },
        }),
        rv = {
          name: "individualGroupable",
          props: { individualGroupable: Boolean },
          events: {},
        },
        rm = [
          ri,
          eV,
          {
            name: "snappable",
            dragRelation: "strong",
            props: {
              snappable: [Boolean, Array],
              snapContainer: Object,
              snapDirections: [Boolean, Object],
              elementSnapDirections: [Boolean, Object],
              snapGap: Boolean,
              snapGridWidth: Number,
              snapGridHeight: Number,
              isDisplaySnapDigit: Boolean,
              isDisplayInnerSnapDigit: Boolean,
              snapDigit: Number,
              snapThreshold: Number,
              horizontalGuidelines: Array,
              verticalGuidelines: Array,
              elementGuidelines: Array,
              bounds: Object,
              innerBounds: Object,
              snapDistFormat: Function,
            },
            events: { onSnap: "snap" },
            css: [
              ":host {\n    --bounds-color: #d66;\n}\n.guideline {\n    pointer-events: none;\n    z-index: 2;\n}\n.guideline.bounds {\n    background: #d66;\n    background: var(--bounds-color);\n}\n.guideline-group {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.guideline-group .size-value {\n    position: absolute;\n    color: #f55;\n    font-size: 12px;\n    font-weight: bold;\n}\n.guideline-group.horizontal .size-value {\n    transform-origin: 50% 100%;\n    transform: translateX(-50%);\n    left: 50%;\n    bottom: 5px;\n}\n.guideline-group.vertical .size-value {\n    transform-origin: 0% 50%;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 5px;\n}\n.guideline.gap {\n    background: #f55;\n}\n.size-value.gap {\n    color: #f55;\n}\n",
            ],
            render: function (t, e) {
              var r,
                n,
                a,
                i,
                o,
                s = t.state,
                u = s.top,
                l = s.left,
                c = s.pos1,
                f = s.pos2,
                p = s.pos3,
                d = s.pos4,
                h = s.snapRenderInfo;
              if (!h || !U(t, "")) return [];
              s.guidelines = J(t);
              var g = Math.min(c[0], f[0], p[0], d[0]),
                v = Math.min(c[1], f[1], p[1], d[1]),
                m = h.externalPoses || [],
                b = eg(t.state),
                S = [],
                D = [],
                R = [],
                M = [],
                y = [],
                C = er(b),
                P = C.width,
                z = C.height,
                B = C.top,
                G = C.left,
                O = C.bottom,
                w = C.right,
                T = {
                  left: G,
                  right: w,
                  top: B,
                  bottom: O,
                  center: (G + w) / 2,
                  middle: (B + O) / 2,
                },
                A = m.length > 0,
                k = A ? er(m) : {};
              if (!h.request) {
                if (
                  (h.direction &&
                    y.push(
                      (function (t, e, r) {
                        var n = [];
                        if (r[0] && r[1])
                          n = [r, [-r[0], r[1]], [r[0], -r[1]]].map(function (
                            t
                          ) {
                            return tj(e, t);
                          });
                        else if (r[0] || r[1])
                          t.props.keepRatio
                            ? (n = [[-1, -1], [-1, 1], [1, -1], [1, 1], r].map(
                                function (t) {
                                  return tj(e, t);
                                }
                              ))
                            : (n = tH(e, r)).length > 1 &&
                              n.push([
                                (n[0][0] + n[1][0]) / 2,
                                (n[0][1] + n[1][1]) / 2,
                              ]);
                        else
                          for (
                            var a = [e[0], e[1], e[3], e[2], e[0]], i = 0;
                            i < 4;
                            ++i
                          )
                            n.push(a[i]),
                              n.push([
                                (a[i][0] + a[i + 1][0]) / 2,
                                (a[i][1] + a[i + 1][1]) / 2,
                              ]);
                        return $(
                          t,
                          n.map(function (t) {
                            return t[0];
                          }),
                          n.map(function (t) {
                            return t[1];
                          }),
                          1
                        );
                      })(t, b, h.direction)
                    ),
                  h.snap)
                ) {
                  var I = er(b);
                  h.center &&
                    ((I.middle = (I.top + I.bottom) / 2),
                    (I.center = (I.left + I.right) / 2)),
                    y.push(te(t, I, 1));
                }
                A &&
                  (h.center &&
                    ((k.middle = (k.top + k.bottom) / 2),
                    (k.center = (k.left + k.right) / 2)),
                  y.push(te(t, k, 1))),
                  y.forEach(function (t) {
                    var e = t.vertical.posInfos,
                      r = t.horizontal.posInfos;
                    S.push.apply(
                      S,
                      e
                        .filter(function (t) {
                          return t.guidelineInfos.some(function (t) {
                            return !t.guideline.hide;
                          });
                        })
                        .map(function (t) {
                          return { type: "snap", pos: t.pos };
                        })
                    ),
                      D.push.apply(
                        D,
                        r
                          .filter(function (t) {
                            return t.guidelineInfos.some(function (t) {
                              return !t.guideline.hide;
                            });
                          })
                          .map(function (t) {
                            return { type: "snap", pos: t.pos };
                          })
                      ),
                      R.push.apply(R, tG(e)),
                      M.push.apply(M, tG(r));
                  });
              }
              tO(t, [G, w], [B, O], S, D),
                A &&
                  tO(
                    t,
                    [k.left, k.right],
                    [k.top, k.bottom],
                    S,
                    D,
                    h.externalBounds
                  );
              var W = E(E([], R, !0), M, !0),
                F = W.filter(function (t) {
                  return t.element && !t.gapRects;
                }),
                N = W.filter(function (t) {
                  return t.gapRects;
                });
              return (
                eE(
                  t,
                  "onSnap",
                  {
                    guidelines: W.filter(function (t) {
                      return !t.element;
                    }),
                    elements: F,
                    gaps: N,
                  },
                  !0
                ),
                E(
                  E(
                    E(
                      E(
                        E(
                          E(
                            [],
                            ((r = [g, v]),
                            (n = t.props.isDisplayInnerSnapDigit),
                            (a = []),
                            ["vertical", "horizontal"].forEach(function (i) {
                              var o,
                                s,
                                u,
                                l,
                                c,
                                f,
                                p,
                                d = F.filter(function (t) {
                                  return t.type === i;
                                }),
                                h = "vertical" === i ? 1 : 0,
                                g = h ? 0 : 1,
                                v =
                                  ((u = "vertical" === i ? 0 : 1),
                                  (l = "vertical" === i ? 1 : 0),
                                  (f = T[(c = u ? L : V).start]),
                                  (p = T[c.end]),
                                  ((o = []),
                                  (s = []),
                                  d.forEach(function (t, e) {
                                    var r = t.pos[u],
                                      n = s.indexOf(r),
                                      a = o[n] || [];
                                    -1 === n && (s.push(r), o.push(a)),
                                      a.push(t);
                                  }),
                                  o).map(function (t) {
                                    var e = [],
                                      r = [];
                                    return (
                                      t.forEach(function (t) {
                                        var a,
                                          o,
                                          s = t.element,
                                          d = t.elementRect.rect;
                                        if (d[c.end] < f) e.push(t);
                                        else if (p < d[c.start]) r.push(t);
                                        else if (
                                          d[c.start] <= f &&
                                          p <= d[c.end] &&
                                          n
                                        ) {
                                          var h = t.pos,
                                            g = {
                                              element: s,
                                              rect: x(
                                                x({}, d),
                                                (((a = {})[c.end] = d[c.start]),
                                                a)
                                              ),
                                            },
                                            v = {
                                              element: s,
                                              rect: x(
                                                x({}, d),
                                                (((o = {})[c.start] = d[c.end]),
                                                o)
                                              ),
                                            },
                                            m = [0, 0],
                                            b = [0, 0];
                                          (m[u] = h[u]),
                                            (m[l] = h[l]),
                                            (b[u] = h[u]),
                                            (b[l] = h[l] + t.size),
                                            e.push({
                                              type: i,
                                              pos: m,
                                              size: 0,
                                              elementRect: g,
                                            }),
                                            r.push({
                                              type: i,
                                              pos: b,
                                              size: 0,
                                              elementRect: v,
                                            });
                                        }
                                      }),
                                      e.sort(function (t, e) {
                                        return e.pos[l] - t.pos[l];
                                      }),
                                      r.sort(function (t, e) {
                                        return t.pos[l] - e.pos[l];
                                      }),
                                      { total: t, start: e, end: r, inner: [] }
                                    );
                                  })),
                                m = h ? V : L,
                                b = h ? L : V,
                                E = T[m.start],
                                S = T[m.end];
                              v.forEach(function (n) {
                                var o = n.total,
                                  s = n.start,
                                  u = n.end,
                                  l = n.inner,
                                  c = r[g] + o[0].pos[g] - T[b.start],
                                  f = T;
                                s.forEach(function (n) {
                                  var o = n.elementRect.rect,
                                    s = f[m.start] - o[m.end];
                                  if (s > 0) {
                                    var u = [0, 0];
                                    (u[h] = r[h] + f[m.start] - E - s),
                                      (u[g] = c),
                                      a.push(
                                        tS(
                                          t,
                                          i,
                                          "dashed",
                                          a.length,
                                          s,
                                          u,
                                          n.className,
                                          e
                                        )
                                      );
                                  }
                                  f = o;
                                }),
                                  (f = T),
                                  u.forEach(function (n) {
                                    var o = n.elementRect.rect,
                                      s = o[m.start] - f[m.end];
                                    if (s > 0) {
                                      var u = [0, 0];
                                      (u[h] = r[h] + f[m.end] - E),
                                        (u[g] = c),
                                        a.push(
                                          tS(
                                            t,
                                            i,
                                            "dashed",
                                            a.length,
                                            s,
                                            u,
                                            n.className,
                                            e
                                          )
                                        );
                                    }
                                    f = o;
                                  }),
                                  l.forEach(function (n) {
                                    var o = n.elementRect.rect,
                                      s = E - o[m.start],
                                      u = o[m.end] - S,
                                      l = [0, 0],
                                      f = [0, 0];
                                    (l[h] = r[h] - s),
                                      (l[g] = c),
                                      (f[h] = r[h] + S - E),
                                      (f[g] = c),
                                      a.push(
                                        tS(
                                          t,
                                          i,
                                          "dashed",
                                          a.length,
                                          s,
                                          l,
                                          n.className,
                                          e
                                        )
                                      ),
                                      a.push(
                                        tS(
                                          t,
                                          i,
                                          "dashed",
                                          a.length,
                                          u,
                                          f,
                                          n.className,
                                          e
                                        )
                                      );
                                  });
                              });
                            }),
                            a),
                            !0
                          ),
                          ((i = [g, v]),
                          (o = []),
                          ["horizontal", "vertical"].forEach(function (r) {
                            var n = N.filter(function (t) {
                                return t.type === r;
                              }),
                              a = "vertical" === r ? 0 : 1,
                              s = a ? 0 : 1,
                              u = a ? V : L,
                              l = a ? L : V,
                              c = T[u.start],
                              f = T[u.end],
                              p = T[l.start],
                              d = T[l.end];
                            n.forEach(function (r) {
                              var n = r.gap,
                                h = r.gapRects,
                                g = r.className,
                                v = Math.max.apply(
                                  Math,
                                  E(
                                    [p],
                                    h.map(function (t) {
                                      return t.rect[l.start];
                                    }),
                                    !1
                                  )
                                ),
                                m = Math.min.apply(
                                  Math,
                                  E(
                                    [d],
                                    h.map(function (t) {
                                      return t.rect[l.end];
                                    }),
                                    !1
                                  )
                                ),
                                b = (v + m) / 2;
                              v !== m &&
                                b !== (p + d) / 2 &&
                                h.forEach(function (r) {
                                  var l = r.rect,
                                    d = [i[0], i[1]];
                                  if (l[u.end] < c) d[a] += l[u.end] - c;
                                  else {
                                    if (!(f < l[u.start])) return;
                                    d[a] += l[u.start] - c - n;
                                  }
                                  (d[s] += b - p),
                                    o.push(
                                      tS(
                                        t,
                                        a ? "vertical" : "horizontal",
                                        "gap",
                                        o.length,
                                        n,
                                        d,
                                        g,
                                        e
                                      )
                                    );
                                });
                            });
                          }),
                          o),
                          !0
                        ),
                        tE(t, "horizontal", M, [l, u], T, e),
                        !0
                      ),
                      tE(t, "vertical", R, [l, u], T, e),
                      !0
                    ),
                    tx(t, "horizontal", D, g, u, P, 0, e),
                    !0
                  ),
                  tx(t, "vertical", S, v, l, z, 1, e),
                  !0
                )
              );
            },
            dragStart: function (t, e) {
              (t.state.snapRenderInfo = {
                request: e.isRequest,
                snap: !0,
                center: !0,
              }),
                tP(t);
            },
            drag: function (t) {
              t.state.guidelines = J(t);
            },
            pinchStart: function (t) {
              this.unset(t);
            },
            dragEnd: function (t) {
              this.unset(t);
            },
            dragControlCondition: function (t, e) {
              return (
                !!(eG(t, e) || Y(t, e)) ||
                (!e.isRequest && e.inputEvent
                  ? (0, s.pv)(e.inputEvent.target, t0("snap-control"))
                  : void 0)
              );
            },
            dragControlStart: function (t) {
              (t.state.snapRenderInfo = null), tP(t);
            },
            dragControl: function (t) {
              this.drag(t);
            },
            dragControlEnd: function (t) {
              this.unset(t);
            },
            dragGroupStart: function (t, e) {
              this.dragStart(t, e);
            },
            dragGroup: function (t) {
              this.drag(t);
            },
            dragGroupEnd: function (t) {
              this.unset(t);
            },
            dragGroupControlStart: function (t) {
              (t.state.snapRenderInfo = null), tP(t);
            },
            dragGroupControl: function (t) {
              this.drag(t);
            },
            dragGroupControlEnd: function (t) {
              this.unset(t);
            },
            unset: function (t) {
              var e = t.state;
              (e.enableSnap = !1),
                (e.guidelines = []),
                (e.snapRenderInfo = null),
                (e.elementRects = []);
            },
          },
          ek,
          tw,
          rg,
          {
            name: "rotatable",
            canPinch: !0,
            props: {
              rotatable: Boolean,
              rotationPosition: String,
              throttleRotate: Number,
              renderDirections: Object,
              rotationTarget: Object,
            },
            events: {
              onRotateStart: "rotateStart",
              onBeforeRotate: "beforeRotate",
              onRotate: "rotate",
              onRotateEnd: "rotateEnd",
              onRotateGroupStart: "rotateGroupStart",
              onBeforeRotateGroup: "beforeRotateGroup",
              onRotateGroup: "rotateGroup",
              onRotateGroupEnd: "rotateGroupEnd",
            },
            css: [
              ".rotation {\n            position: absolute;\n            height: 40px;\n            width: 1px;\n            transform-origin: 50% 100%;\n            height: calc(40px * var(--zoom));\n            top: auto;\n            left: 0;\n            bottom: 100%;\n            will-change: transform;\n        }\n        .rotation .rotation-line {\n            display: block;\n            width: 100%;\n            height: 100%;\n            transform-origin: 50% 50%;\n        }\n        .rotation .rotation-control {\n            border-color: #4af;\n            border-color: var(--moveable-color);\n            background:#fff;\n            cursor: alias;\n        }",
            ],
            render: function (t, e) {
              var r = t.props,
                n = r.rotatable,
                a = r.rotationPosition,
                i = r.zoom,
                o = r.renderDirections,
                s = t.state,
                u = s.renderPoses,
                l = s.direction;
              if (!n) return null;
              var c = (function (t, e, r) {
                  var n = e[0],
                    a = e[1],
                    i = e[2],
                    o = e[3];
                  if ("none" !== t) {
                    var s = (t || "top").split("-"),
                      u = s[0],
                      l = s[1],
                      c = [n, a];
                    "left" === u
                      ? (c = [i, n])
                      : "right" === u
                      ? (c = [a, o])
                      : "bottom" === u && (c = [o, i]);
                    var f = [(c[0][0] + c[1][0]) / 2, (c[0][1] + c[1][1]) / 2],
                      p = el(c, r);
                    if (l) {
                      var d = "top" === l || "left" === l,
                        h = "bottom" === u || "left" === u;
                      f = c[(d && !h) || (!d && h) ? 0 : 1];
                    }
                    return [f, p];
                  }
                })(a, u, l),
                f = [];
              if (c) {
                var p = c[0],
                  d = c[1];
                f.push(
                  e.createElement(
                    "div",
                    {
                      key: "rotation",
                      className: t0("rotation"),
                      style: {
                        transform: "translate(-50%) translate("
                          .concat(p[0], "px, ")
                          .concat(p[1], "px) rotate(")
                          .concat(d, "rad)"),
                      },
                    },
                    e.createElement("div", {
                      className: t0("line rotation-line"),
                      style: { transform: "scaleX(".concat(i, ")") },
                    }),
                    e.createElement("div", {
                      className: t0("control rotation-control"),
                      style: {
                        transform: "translate(0.5px) scale(".concat(i, ")"),
                      },
                    })
                  )
                );
              }
              return o && f.push.apply(f, I(t, [], e)), f;
            },
            dragControlCondition: Y,
            dragControlStart: function (t, e) {
              var r = e.datas,
                n = e.clientX,
                a = e.clientY,
                i = e.parentRotate,
                o = e.parentFlag,
                s = e.isPinch,
                u = e.isRequest,
                l = t.state,
                c = l.target,
                f = l.left,
                p = l.top,
                d = l.origin,
                h = l.beforeOrigin,
                g = l.direction,
                v = l.beforeDirection,
                m = l.targetTransform,
                b = l.moveableClientRect;
              if (!u && !c) return !1;
              var E = t.getRect();
              if (
                ((r.rect = E),
                (r.transform = m),
                (r.left = f),
                (r.top = p),
                (r.fixedPosition = tJ(t, tQ(t))),
                u || s || o)
              ) {
                var S = i || 0;
                (r.beforeInfo = {
                  origin: E.beforeOrigin,
                  prevDeg: S,
                  defaultDeg: S,
                  prevSnapDeg: 0,
                }),
                  (r.afterInfo = x(x({}, r.beforeInfo), { origin: E.origin })),
                  (r.absoluteInfo = x(x({}, r.beforeInfo), {
                    origin: E.origin,
                    startValue: S,
                  }));
              } else
                (r.beforeInfo = { origin: E.beforeOrigin }),
                  (r.afterInfo = { origin: E.origin }),
                  (r.absoluteInfo = {
                    origin: E.origin,
                    startValue: E.rotation,
                  }),
                  N(t, r.beforeInfo, n, a, h, b),
                  N(t, r.afterInfo, n, a, d, b),
                  N(t, r.absoluteInfo, n, a, d, b);
              (r.direction = g),
                (r.beforeDirection = v),
                (r.startValue = 0),
                (r.datas = {}),
                tX(e, "rotate");
              var D = em(
                  t,
                  e,
                  x(
                    x(
                      {
                        set: function (t) {
                          r.startValue = (t * Math.PI) / 180;
                        },
                      },
                      t_(e)
                    ),
                    { dragStart: tw.dragStart(t, new w().dragStart([0, 0], e)) }
                  )
                ),
                R = eE(t, "onRotateStart", D);
              return (
                (r.isRotate = !1 !== R),
                (t.state.snapRenderInfo = { request: e.isRequest }),
                !!r.isRotate && D
              );
            },
            dragControl: function (t, e) {
              var r,
                n,
                a,
                i,
                o,
                s,
                l,
                c,
                f,
                p = e.datas,
                d = e.clientX,
                h = e.clientY,
                g = e.parentRotate,
                v = e.parentFlag,
                m = e.isPinch,
                b = e.groupDelta,
                E = p.beforeDirection,
                S = p.beforeInfo,
                D = p.afterInfo,
                R = p.absoluteInfo,
                M = p.isRotate,
                y = p.startValue,
                C = p.rect;
              if (M) {
                tk(e, "rotate");
                var P =
                    E *
                    en(e.datas.beforeTransform, [50, 50], 100, 100).direction,
                  z = t.props.parentMoveable,
                  B = 0,
                  G = 0,
                  O = 0,
                  w = (180 / Math.PI) * y,
                  T = R.startValue,
                  A = !1;
                if (!v && "parentDist" in e) {
                  var k = e.parentDist;
                  (i = k), (s = k), (c = k);
                } else
                  m || v
                    ? ((i = q(g, E, S)), (s = q(g, P, D)), (c = q(g, P, R)))
                    : ((i = H(d, h, E, S)),
                      (s = H(d, h, P, D)),
                      (c = H(d, h, P, R)),
                      (A = !0));
                if (
                  (eE(
                    t,
                    "onBeforeRotate",
                    em(t, e, {
                      beforeRotation: (o = w + i),
                      rotation: (l = w + s),
                      absoluteRotation: (f = T + c),
                      setRotation: function (t) {
                        (i = s = t - w), (c = s);
                      },
                    })
                  ),
                  (B = (r = j(t, C, S, i, w, A))[0]),
                  (i = r[1]),
                  (o = r[2]),
                  (G = (n = j(t, C, D, s, w, A))[0]),
                  (s = n[1]),
                  (l = n[2]),
                  (O = (a = j(t, C, R, c, T, A))[0]),
                  (c = a[1]),
                  (f = a[2]),
                  O || G || B || z)
                ) {
                  var I,
                    W,
                    F,
                    N = tI(
                      p,
                      "rotate(".concat(l, "deg)"),
                      "rotate(".concat(s, "deg)")
                    ),
                    Y =
                      ((I = s),
                      (W = p.fixedPosition),
                      (F = tQ(t)),
                      tZ(t, "rotate(".concat(I, "deg)"), F, W, p)),
                    _ = (0, u.h9)(
                      (0, u.PD)(b || [0, 0], Y),
                      p.prevInverseDist || [0, 0]
                    );
                  (p.prevInverseDist = Y), (p.requestValue = null);
                  var X = em(
                    t,
                    e,
                    x(
                      {
                        delta: G,
                        dist: s,
                        rotate: l,
                        rotation: l,
                        beforeDist: i,
                        beforeDelta: B,
                        beforeRotate: o,
                        beforeRotation: o,
                        absoluteDist: c,
                        absoluteDelta: O,
                        absoluteRotate: f,
                        absoluteRotation: f,
                        isPinch: !!m,
                      },
                      tK(t, N, _, m, e)
                    )
                  );
                  return eE(t, "onRotate", X), X;
                }
              }
            },
            dragControlAfter: function (t, e) {
              e.datas.requestValue;
            },
            dragControlEnd: function (t, e) {
              var r = e.datas;
              if (r.isRotate) {
                r.isRotate = !1;
                var n = eb(t, e, {});
                return eE(t, "onRotateEnd", n), n;
              }
            },
            dragGroupControlCondition: Y,
            dragGroupControlStart: function (t, e) {
              var r = e.datas,
                n = t.state,
                a = n.left,
                i = n.top,
                o = n.beforeOrigin,
                s = this.dragControlStart(t, e);
              if (!s) return !1;
              s.set(r.beforeDirection * t.rotation);
              var l = k(t, this, "dragControlStart", e, function (t, e) {
                  var r = t.state,
                    n = r.left,
                    s = r.top,
                    l = r.beforeOrigin,
                    c = (0, u.PD)((0, u.h9)([n, s], [a, i]), (0, u.h9)(l, o));
                  return (
                    (e.datas.groupClient = c), x(x({}, e), { parentRotate: 0 })
                  );
                }),
                c = x(x({}, s), { targets: t.props.targets, events: l }),
                f = eE(t, "onRotateGroupStart", c);
              return (r.isRotate = !1 !== f), !!r.isRotate && s;
            },
            dragGroupControl: function (t, e) {
              var r = e.datas;
              if (r.isRotate) {
                ex(t, "onBeforeRotate", function (r) {
                  eE(
                    t,
                    "onBeforeRotateGroup",
                    em(t, e, x(x({}, r), { targets: t.props.targets }))
                  );
                });
                var n = this.dragControl(t, e);
                if (n) {
                  var a = r.beforeDirection,
                    i = n.beforeDist,
                    o = (n.beforeDelta / 180) * Math.PI,
                    s = k(t, this, "dragControl", e, function (t, e) {
                      var r = e.datas.groupClient,
                        n = r[0],
                        s = r[1],
                        l = (0, u.U1)([n, s], o * a),
                        c = l[0],
                        f = l[1],
                        p = [c - n, f - s];
                      return (
                        (e.datas.groupClient = [c, f]),
                        x(x({}, e), { parentRotate: i, groupDelta: p })
                      );
                    });
                  t.rotation = a * n.beforeRotation;
                  var l = x(
                    {
                      targets: t.props.targets,
                      events: s,
                      set: function (e) {
                        t.rotation = e;
                      },
                      setGroupRotation: function (e) {
                        t.rotation = e;
                      },
                    },
                    n
                  );
                  return eE(t, "onRotateGroup", l), l;
                }
              }
            },
            dragGroupControlEnd: function (t, e) {
              var r = e.isDrag;
              if (e.datas.isRotate) {
                this.dragControlEnd(t, e);
                var n = k(t, this, "dragControlEnd", e),
                  a = eb(t, e, { targets: t.props.targets, events: n });
                return eE(t, "onRotateGroupEnd", a), r;
              }
            },
            request: function (t) {
              var e = {},
                r = 0,
                n = t.getRotation();
              return {
                isControl: !0,
                requestStart: function () {
                  return { datas: e };
                },
                request: function (t) {
                  return (
                    "deltaRotate" in t
                      ? (r += t.deltaRotate)
                      : "rotate" in t && (r = t.rotate - n),
                    { datas: e, parentDist: r }
                  );
                },
                requestEnd: function () {
                  return { datas: e, isDrag: !0 };
                },
              };
            },
          },
          eI,
          {
            name: "scalable",
            ableGroup: "size",
            canPinch: !0,
            props: {
              scalable: Boolean,
              throttleScale: Number,
              renderDirections: String,
              keepRatio: Boolean,
            },
            events: {
              onScaleStart: "scaleStart",
              onBeforeScale: "beforeScale",
              onScale: "scale",
              onScaleEnd: "scaleEnd",
              onScaleGroupStart: "scaleGroupStart",
              onBeforeScaleGroup: "beforeScaleGroup",
              onScaleGroup: "scaleGroup",
              onScaleGroupEnd: "scaleGroupEnd",
            },
            render: function (t, e) {
              var r = t.props,
                n = r.resizable,
                a = r.scalable,
                i = r.edge;
              if (!n && a) return i ? F(t, e) : I(t, P, e);
            },
            dragControlCondition: eG,
            dragControlStart: function (t, e) {
              var r = e.datas,
                n = e.isPinch,
                a = e.inputEvent,
                i = e.parentDirection || (n ? [0, 0] : ed(a.target)),
                o = t.state,
                u = o.width,
                l = o.height,
                c = o.targetTransform,
                f = o.target,
                p = o.pos1,
                d = o.pos2,
                h = o.pos4;
              if (!i || !f) return !1;
              n || tA(t, e),
                (r.datas = {}),
                (r.transform = c),
                (r.prevDist = [1, 1]),
                (r.direction = i),
                (r.startOffsetWidth = u),
                (r.startOffsetHeight = l),
                (r.startValue = [1, 1]);
              var g = (0, s.zt)(p, d),
                v = (0, s.zt)(d, h),
                m = (!i[0] && !i[1]) || i[0] || !i[1];
              function b(t) {
                r.ratio = t && isFinite(t) ? t : 0;
              }
              function E(t) {
                (r.fixedDirection = t),
                  (r.fixedPosition = tj(r.startPositions, t));
              }
              (r.scaleWidth = g),
                (r.scaleHeight = v),
                (r.scaleXRatio = g / u),
                (r.scaleYRatio = v / l),
                tX(e, "scale"),
                (r.isWidth = m),
                (r.startPositions = eg(t.state)),
                (r.setFixedDirection = E),
                b((0, s.zt)(p, d) / (0, s.zt)(d, h)),
                E([-i[0], -i[1]]);
              var S = em(
                t,
                e,
                x(
                  x(
                    {
                      direction: i,
                      set: function (t) {
                        r.startValue = t;
                      },
                      setRatio: b,
                      setFixedDirection: E,
                    },
                    t_(e)
                  ),
                  { dragStart: tw.dragStart(t, new w().dragStart([0, 0], e)) }
                )
              );
              return (
                !1 !== eE(t, "onScaleStart", S) &&
                  ((r.isScale = !0),
                  (t.state.snapRenderInfo = {
                    request: e.isRequest,
                    direction: i,
                  })),
                !!r.isScale && S
              );
            },
            dragControl: function (t, e) {
              tk(e, "scale");
              var r,
                n,
                a = e.datas,
                i = e.parentKeepRatio,
                o = e.parentFlag,
                l = e.isPinch,
                c = e.dragClient,
                f = e.isRequest,
                p = a.prevDist,
                d = a.direction,
                h = a.startOffsetWidth,
                g = a.startOffsetHeight,
                v = a.isScale,
                m = a.startValue,
                b = a.isWidth,
                E = a.ratio;
              if (!v) return !1;
              var S = t.props,
                D = S.throttleScale,
                R = S.parentMoveable,
                M = d;
              d[0] || d[1] || (M = [1, 1]);
              var y = (E && (null != i ? i : S.keepRatio)) || !1,
                C = t.state;
              function P() {
                var t = eA(M, y, a, e),
                  r = t.distWidth,
                  n = t.distHeight,
                  i = (h + r) / h,
                  o = (g + n) / g;
                return (
                  (i = M[0] || y ? i * m[0] : m[0]),
                  (o = M[1] || y ? o * m[1] : m[1]),
                  0 === i && (i = (p[0] > 0 ? 1 : -1) * 1e-9),
                  0 === o && (o = (p[1] > 0 ? 1 : -1) * 1e-9),
                  [i, o]
                );
              }
              var z = P();
              if (!l && t.props.groupable) {
                var B = (C.snapRenderInfo || {}).direction;
                (0, s.kJ)(B) &&
                  (B[0] || B[1]) &&
                  (C.snapRenderInfo = { direction: d, request: e.isRequest });
              }
              eE(
                t,
                "onBeforeScale",
                em(t, e, {
                  scale: z,
                  setFixedDirection: function (t) {
                    return a.setFixedDirection(t), (z = P());
                  },
                  setScale: function (t) {
                    z = t;
                  },
                })
              );
              var G = [z[0] / m[0], z[1] / m[1]],
                O = c,
                w = [0, 0];
              if (
                (c || (O = !o && l ? t$(t, [0, 0]) : a.fixedPosition),
                l ||
                  (w = (function (t, e, r, n, a) {
                    if (!U(t, "scalable")) return [0, 0];
                    var i = a.startOffsetWidth,
                      o = a.startOffsetHeight,
                      s = a.fixedPosition,
                      l = a.fixedDirection,
                      c = a.is3d,
                      f = tB(
                        t,
                        function (t, r) {
                          var n, f, p, d, h, g;
                          return tz(
                            ((n = (0, u.PD)(e, [t / i, r / o])),
                            (f = a.transformOrigin),
                            (p = a.offsetMatrix),
                            (d = a.is3d),
                            (h = a.targetMatrix),
                            (g = d ? 4 : 3),
                            tY(p, (0, u.ml)(h, (0, u.Wi)(n, g), g), f, g)),
                            i,
                            o,
                            l,
                            s,
                            c
                          );
                        },
                        i,
                        o,
                        r,
                        s,
                        n,
                        a
                      );
                    return [f[0] / i, f[1] / o];
                  })(t, G, d, f, a)),
                y)
              ) {
                M[0] &&
                  M[1] &&
                  w[0] &&
                  w[1] &&
                  (Math.abs(w[0] * h) > Math.abs(w[1] * g)
                    ? (w[1] = 0)
                    : (w[0] = 0));
                var T = !w[0] && !w[1];
                if (
                  (T &&
                    (b
                      ? (G[0] = (0, s.P2)(G[0] * m[0], D) / m[0])
                      : (G[1] = (0, s.P2)(G[1] * m[1], D) / m[1])),
                  (M[0] && !M[1]) || (w[0] && !w[1]) || (T && b))
                ) {
                  G[0] += w[0];
                  var A = (h * G[0] * m[0]) / E;
                  G[1] = A / g / m[1];
                } else if ((!M[0] && M[1]) || (!w[0] && w[1]) || (T && !b)) {
                  G[1] += w[1];
                  var k = g * G[1] * m[1] * E;
                  G[0] = k / h / m[0];
                }
              } else
                (G[0] += w[0]),
                  (G[1] += w[1]),
                  w[0] || (G[0] = (0, s.P2)(G[0] * m[0], D) / m[0]),
                  w[1] || (G[1] = (0, s.P2)(G[1] * m[1], D) / m[1]);
              0 === G[0] && (G[0] = (p[0] > 0 ? 1 : -1) * 1e-9),
                0 === G[1] && (G[1] = (p[1] > 0 ? 1 : -1) * 1e-9);
              var I = [G[0] / p[0], G[1] / p[1]];
              z = [G[0] * m[0], G[1] * m[1]];
              var W =
                  ((r = a.fixedDirection),
                  (n = O),
                  tZ(t, "scale(".concat(G.join(", "), ")"), r, n, a)),
                F = (0, u.h9)(W, a.prevInverseDist || [0, 0]);
              if (
                ((a.prevDist = G),
                (a.prevInverseDist = W),
                z[0] === p[0] &&
                  z[1] === p[1] &&
                  F.every(function (t) {
                    return !t;
                  }) &&
                  !R)
              )
                return !1;
              var N = tI(
                  a,
                  "scale(".concat(z.join(", "), ")"),
                  "scale(".concat(G.join(", "), ")")
                ),
                q = em(
                  t,
                  e,
                  x(
                    {
                      offsetWidth: h,
                      offsetHeight: g,
                      direction: d,
                      scale: z,
                      dist: G,
                      delta: I,
                      isPinch: !!l,
                    },
                    tK(t, N, F, l, e)
                  )
                );
              return eE(t, "onScale", q), q;
            },
            dragControlEnd: function (t, e) {
              var r = e.datas,
                n = e.isDrag;
              return (
                !!r.isScale &&
                ((r.isScale = !1), eE(t, "onScaleEnd", eb(t, e, {})), n)
              );
            },
            dragGroupControlCondition: eG,
            dragGroupControlStart: function (t, e) {
              var r = e.datas,
                n = this.dragControlStart(t, e);
              if (!n) return !1;
              var a = T(t, "resizable", e);
              function i(e, n) {
                var a = r.fixedDirection,
                  i = r.fixedPosition,
                  o = tj(n.datas.startPositions || eg(e.state), a),
                  s = (0, u.Kf)(
                    (0, u.sQ)((-t.rotation / 180) * Math.PI, 3),
                    [o[0] - i[0], o[1] - i[1], 1],
                    3
                  ),
                  l = s[0],
                  c = s[1];
                return (n.datas.originalX = l), (n.datas.originalY = c), n;
              }
              r.moveableScale = t.scale;
              var o = k(t, this, "dragControlStart", e, function (t, e) {
                  return i(t, e);
                }),
                s = function (t) {
                  n.setFixedDirection(t),
                    o.forEach(function (e, r) {
                      e.setFixedDirection(t), i(e.moveable, a[r]);
                    });
                };
              r.setFixedDirection = s;
              var l = x(x({}, n), {
                  targets: t.props.targets,
                  events: o,
                  setFixedDirection: s,
                }),
                c = eE(t, "onScaleGroupStart", l);
              return (r.isScale = !1 !== c), !!r.isScale && l;
            },
            dragGroupControl: function (t, e) {
              var r = e.datas;
              if (r.isScale) {
                ex(t, "onBeforeScale", function (r) {
                  eE(
                    t,
                    "onBeforeScaleGroup",
                    em(t, e, x(x({}, r), { targets: t.props.targets }))
                  );
                });
                var n = this.dragControl(t, e);
                if (n) {
                  var a = r.moveableScale;
                  t.scale = [n.scale[0] * a[0], n.scale[1] * a[1]];
                  var i = t.props.keepRatio,
                    o = n.dist,
                    s = n.scale,
                    l = r.fixedPosition,
                    c = k(t, this, "dragControl", e, function (e, r) {
                      var n = (0, u.Kf)(
                          (0, u.sQ)((t.rotation / 180) * Math.PI, 3),
                          [
                            r.datas.originalX * o[0],
                            r.datas.originalY * o[1],
                            1,
                          ],
                          3
                        ),
                        a = n[0],
                        c = n[1];
                      return x(x({}, r), {
                        parentDist: null,
                        parentScale: s,
                        parentKeepRatio: i,
                        dragClient: (0, u.PD)(l, [a, c]),
                      });
                    }),
                    f = x({ targets: t.props.targets, events: c }, n);
                  return eE(t, "onScaleGroup", f), f;
                }
              }
            },
            dragGroupControlEnd: function (t, e) {
              var r = e.isDrag;
              if (e.datas.isScale) {
                this.dragControlEnd(t, e);
                var n = k(t, this, "dragControlEnd", e),
                  a = eb(t, e, { targets: t.props.targets, events: n });
                return eE(t, "onScaleGroupEnd", a), r;
              }
            },
            request: function () {
              var t = {},
                e = 0,
                r = 0;
              return {
                isControl: !0,
                requestStart: function (e) {
                  return { datas: t, parentDirection: e.direction || [1, 1] };
                },
                request: function (n) {
                  return (
                    (e += n.deltaWidth),
                    (r += n.deltaHeight),
                    {
                      datas: t,
                      parentDist: [e, r],
                      parentKeepRatio: n.keepRatio,
                    }
                  );
                },
                requestEnd: function () {
                  return { datas: t, isDrag: !0 };
                },
              };
            },
          },
          {
            name: "warpable",
            ableGroup: "size",
            props: { warpable: Boolean, renderDirections: Array },
            events: {
              onWarpStart: "warpStart",
              onWarp: "warp",
              onWarpEnd: "warpEnd",
            },
            render: function (t, e) {
              var r = t.props,
                n = r.resizable,
                a = r.scalable,
                i = r.warpable,
                o = r.zoom;
              if (n || a || !i) return [];
              var s = t.state,
                u = s.pos1,
                l = s.pos2,
                c = s.pos3,
                f = s.pos4,
                p = eW(u, l),
                d = eW(l, u),
                h = eW(u, c),
                g = eW(c, u),
                v = eW(c, f),
                m = eW(f, c),
                b = eW(l, f),
                x = eW(f, l);
              return E(
                [
                  e.createElement("div", {
                    className: t0("line"),
                    key: "middeLine1",
                    style: eo(p, v, o),
                  }),
                  e.createElement("div", {
                    className: t0("line"),
                    key: "middeLine2",
                    style: eo(d, m, o),
                  }),
                  e.createElement("div", {
                    className: t0("line"),
                    key: "middeLine3",
                    style: eo(h, b, o),
                  }),
                  e.createElement("div", {
                    className: t0("line"),
                    key: "middeLine4",
                    style: eo(g, x, o),
                  }),
                ],
                I(t, P, e),
                !0
              );
            },
            dragControlCondition: function (t, e) {
              return (
                !e.isRequest && (0, s.pv)(e.inputEvent.target, t0("direction"))
              );
            },
            dragControlStart: function (t, e) {
              var r = e.datas,
                n = e.inputEvent,
                a = t.props.target,
                i = ed(n.target);
              if (!i || !a) return !1;
              var o = t.state,
                s = o.transformOrigin,
                l = o.is3d,
                c = o.targetTransform,
                f = o.targetMatrix,
                p = o.width,
                d = o.height,
                h = o.left,
                g = o.top;
              (r.datas = {}),
                (r.targetTransform = c),
                (r.warpTargetMatrix = l ? f : (0, u.mA)(f, 3, 4)),
                (r.targetInverseMatrix = (0, u.Xj)(
                  (0, u.U_)(r.warpTargetMatrix, 4),
                  3,
                  4
                )),
                (r.direction = i),
                (r.left = h),
                (r.top = g),
                (r.poses = [
                  [0, 0],
                  [p, 0],
                  [0, d],
                  [p, d],
                ].map(function (t) {
                  return (0, u.h9)(t, s);
                })),
                (r.nextPoses = r.poses.map(function (t) {
                  var e = t[0],
                    n = t[1];
                  return (0, u.Kf)(r.warpTargetMatrix, [e, n, 0, 1], 4);
                })),
                (r.startValue = (0, u.Te)(4)),
                (r.prevMatrix = (0, u.Te)(4)),
                (r.absolutePoses = eg(o)),
                (r.posIndexes = tq(i)),
                tA(t, e),
                tX(e, "matrix3d"),
                (o.snapRenderInfo = { request: e.isRequest, direction: i });
              var v = em(
                t,
                e,
                x(
                  {
                    set: function (t) {
                      r.startValue = t;
                    },
                  },
                  t_(e)
                )
              );
              return (
                !1 !== eE(t, "onWarpStart", v) && (r.isWarp = !0), r.isWarp
              );
            },
            dragControl: function (t, e) {
              var r = e.datas,
                n = e.isRequest,
                a = e.distX,
                i = e.distY,
                o = r.targetInverseMatrix,
                s = r.prevMatrix,
                l = r.isWarp,
                c = r.startValue,
                f = r.poses,
                p = r.posIndexes,
                d = r.absolutePoses;
              if (!l) return !1;
              if ((tk(e, "matrix3d"), U(t, "warpable"))) {
                var h = p.map(function (t) {
                  return d[t];
                });
                h.length > 1 &&
                  h.push([(h[0][0] + h[1][0]) / 2, (h[0][1] + h[1][1]) / 2]);
                var g = tM(t, n, {
                    horizontal: h.map(function (t) {
                      return t[1] + i;
                    }),
                    vertical: h.map(function (t) {
                      return t[0] + a;
                    }),
                  }),
                  v = g.horizontal,
                  m = g.vertical;
                (i -= v.offset), (a -= m.offset);
              }
              var b = tN({ datas: r, distX: a, distY: i }, !0),
                x = r.nextPoses.slice();
              if (
                (p.forEach(function (t) {
                  x[t] = (0, u.PD)(x[t], b);
                }),
                !C.every(function (t) {
                  var e, r, n, a, i;
                  return (
                    (e = t.map(function (t) {
                      return f[t];
                    })),
                    (r = t.map(function (t) {
                      return x[t];
                    })),
                    (n = eF(e[0], e[1], e[2])),
                    (a = eF(r[0], r[1], r[2])),
                    (!(n >= (i = Math.PI)) || !(a <= i)) &&
                      (!(n <= i) || !(a >= i))
                  );
                }))
              )
                return !1;
              var E = (0, u.mX)(f[0], f[2], f[1], f[3], x[0], x[2], x[1], x[3]);
              if (!E.length) return !1;
              var S = tW(r, (0, u.ml)(o, E, 4), !0),
                D = (0, u.ml)((0, u.U_)(s, 4), S, 4);
              r.prevMatrix = S;
              var R = (0, u.ml)(c, S, 4),
                M = tI(
                  r,
                  "matrix3d(".concat(R.join(", "), ")"),
                  "matrix3d(".concat(S.join(", "), ")")
                );
              return (
                tV(e, M),
                eE(
                  t,
                  "onWarp",
                  em(t, e, {
                    delta: D,
                    matrix: R,
                    dist: S,
                    multiply: u.ml,
                    transform: M,
                  })
                ),
                !0
              );
            },
            dragControlEnd: function (t, e) {
              var r = e.datas,
                n = e.isDrag;
              return (
                !!r.isWarp &&
                ((r.isWarp = !1), eE(t, "onWarpEnd", eb(t, e, {})), n)
              );
            },
          },
          {
            name: "scrollable",
            canPinch: !0,
            props: {
              scrollable: Boolean,
              scrollContainer: Object,
              scrollThreshold: Number,
              getScrollPosition: Function,
            },
            events: { onScroll: "scroll", onScrollGroup: "scrollGroup" },
            dragRelation: "strong",
            dragStart: function (t, e) {
              var r = t.props.scrollContainer,
                n = void 0 === r ? t.getContainer() : r,
                a = new p.Z(),
                i = eO(n, !0);
              e.datas.dragScroll = a;
              var o = e.isControl ? "controlGesto" : "targetGesto",
                s = e.targets;
              a
                .on("scroll", function (r) {
                  var n = em(t, e, {
                      scrollContainer: r.container,
                      direction: r.direction,
                    }),
                    a = s ? "onScrollGroup" : "onScroll";
                  s && (n.targets = s), eE(t, a, n);
                })
                .on("move", function (r) {
                  var n = r.offsetX,
                    a = r.offsetY;
                  t[o].scrollBy(n, a, e.inputEvent, !1);
                }),
                a.dragStart(e, { container: i });
            },
            checkScroll: function (t, e) {
              var r = e.datas.dragScroll;
              if (r) {
                var n = t.props,
                  a = n.scrollContainer,
                  i = void 0 === a ? t.getContainer() : a,
                  o = n.scrollThreshold,
                  s = n.getScrollPosition,
                  u = void 0 === s ? eL : s;
                return (
                  r.drag(e, {
                    container: i,
                    threshold: void 0 === o ? 0 : o,
                    getScrollPosition: function (t) {
                      return u({
                        scrollContainer: t.container,
                        direction: t.direction,
                      });
                    },
                  }),
                  !0
                );
              }
            },
            drag: function (t, e) {
              return this.checkScroll(t, e);
            },
            dragEnd: function (t, e) {
              e.datas.dragScroll.dragEnd(), (e.datas.dragScroll = null);
            },
            dragControlStart: function (t, e) {
              return this.dragStart(t, x(x({}, e), { isControl: !0 }));
            },
            dragControl: function (t, e) {
              return this.drag(t, e);
            },
            dragControlEnd: function (t, e) {
              return this.dragEnd(t, e);
            },
            dragGroupStart: function (t, e) {
              return this.dragStart(
                t,
                x(x({}, e), { targets: t.props.targets })
              );
            },
            dragGroup: function (t, e) {
              return this.drag(t, x(x({}, e), { targets: t.props.targets }));
            },
            dragGroupEnd: function (t, e) {
              return this.dragEnd(t, x(x({}, e), { targets: t.props.targets }));
            },
            dragGroupControlStart: function (t, e) {
              return this.dragStart(
                t,
                x(x({}, e), { targets: t.props.targets, isControl: !0 })
              );
            },
            dragGroupContro: function (t, e) {
              return this.drag(t, x(x({}, e), { targets: t.props.targets }));
            },
            dragGroupControEnd: function (t, e) {
              return this.dragEnd(t, x(x({}, e), { targets: t.props.targets }));
            },
          },
          eU,
          eX,
          {
            name: "originDraggable",
            props: { originDraggable: Boolean, originRelative: Boolean },
            events: {
              onDragOriginStart: "dragOriginStart",
              onDragOrigin: "dragOrigin",
              onDragOriginEnd: "dragOriginEnd",
            },
            css: [
              ":host[data-able-origindraggable] .control.origin {\n    pointer-events: auto;\n}",
            ],
            dragControlCondition: function (t, e) {
              return e.isRequest
                ? "originDraggable" === e.requestAble
                : (0, s.pv)(e.inputEvent.target, t0("origin"));
            },
            dragControlStart: function (t, e) {
              var r = e.datas;
              tA(t, e);
              var n = em(t, e, {
                  dragStart: tw.dragStart(t, new w().dragStart([0, 0], e)),
                }),
                a = eE(t, "onDragOriginStart", n);
              return ((r.startOrigin = t.state.transformOrigin),
              (r.startTargetOrigin = t.state.targetOrigin),
              (r.prevOrigin = [0, 0]),
              (r.isDragOrigin = !0),
              !1 === a)
                ? ((r.isDragOrigin = !1), !1)
                : n;
            },
            dragControl: function (t, e) {
              var r = e.datas,
                n = e.isPinch,
                a = e.isRequest;
              if (!r.isDragOrigin) return !1;
              var i = tN(e),
                o = i[0],
                s = i[1],
                l = t.state,
                c = l.width,
                f = l.height,
                p = l.offsetMatrix,
                d = l.targetMatrix,
                h = l.is3d,
                g = t.props.originRelative,
                v = void 0 === g || g,
                m = h ? 4 : 3,
                b = [o, s];
              if (a) {
                var x = e.distOrigin;
                (x[0] || x[1]) && (b = x);
              }
              var E = (0, u.PD)(r.startOrigin, b),
                S = (0, u.PD)(r.startTargetOrigin, b),
                D = (0, u.h9)(b, r.prevOrigin),
                R = tY(p, d, E, m),
                M = t.getRect(),
                y = er(ee(R, c, f, m)),
                C = [M.left - y.left, M.top - y.top];
              r.prevOrigin = b;
              var P = [ez(S[0], c, v), ez(S[1], f, v)].join(" "),
                z = em(t, e, {
                  width: c,
                  height: f,
                  origin: E,
                  dist: b,
                  delta: D,
                  transformOrigin: P,
                  drag: tw.drag(t, O(e, t.state, C, !!n, !1)),
                });
              return eE(t, "onDragOrigin", z), z;
            },
            dragControlEnd: function (t, e) {
              return (
                !!e.datas.isDragOrigin &&
                (eE(t, "onDragOriginEnd", eb(t, e, {})), !0)
              );
            },
            dragGroupControlCondition: function (t, e) {
              return this.dragControlCondition(t, e);
            },
            dragGroupControlStart: function (t, e) {
              return !!this.dragControlStart(t, e);
            },
            dragGroupControl: function (t, e) {
              var r = this.dragControl(t, e);
              return !!r && ((t.transformOrigin = r.transformOrigin), !0);
            },
            request: function (t) {
              var e = {},
                r = t.getRect(),
                n = 0,
                a = 0,
                i = r.transformOrigin,
                o = [0, 0];
              return {
                isControl: !0,
                requestStart: function () {
                  return { datas: e };
                },
                request: function (t) {
                  return (
                    "deltaOrigin" in t
                      ? ((o[0] += t.deltaOrigin[0]), (o[1] += t.deltaOrigin[1]))
                      : "origin" in t
                      ? ((o[0] = t.origin[0] - i[0]),
                        (o[1] = t.origin[1] - i[1]))
                      : ("x" in t
                          ? (n = t.x - r.left)
                          : "deltaX" in t && (n += t.deltaX),
                        "y" in t
                          ? (a = t.y - r.top)
                          : "deltaY" in t && (a += t.deltaY)),
                    { datas: e, distX: n, distY: a, distOrigin: o }
                  );
                },
                requestEnd: function () {
                  return { datas: e, isDrag: !0 };
                },
              };
            },
          },
          rr,
          {
            name: "roundable",
            props: {
              roundable: Boolean,
              roundRelative: Boolean,
              minRoundControls: Array,
              maxRoundControls: Array,
              roundClickable: Boolean,
            },
            events: {
              onRoundStart: "roundStart",
              onRound: "round",
              onRoundEnd: "roundEnd",
            },
            css: [
              ".control.border-radius {\n    background: #d66;\n    cursor: pointer;\n}",
              ":host[data-able-roundable] .line.direction {\n    cursor: pointer;\n}",
            ],
            render: function (t, e) {
              var r = t.state,
                n = r.target,
                a = r.width,
                i = r.height,
                o = r.allMatrix,
                s = r.is3d,
                l = r.left,
                c = r.top,
                f = r.borderRadiusState,
                p = t.props,
                d = p.minRoundControls,
                h = void 0 === d ? [0, 0] : d,
                g = p.maxRoundControls,
                v = void 0 === g ? [4, 4] : g,
                m = p.zoom;
              if (!n) return null;
              var b = s ? 4 : 3,
                x = rn(n, a, i, h, f);
              if (!x) return null;
              var E = 0,
                S = 0;
              return x.map(function (t, r) {
                (S += Math.abs(t.horizontal)), (E += Math.abs(t.vertical));
                var n = (0, u.h9)(et(o, t.pos, b), [l, c]),
                  a = t.vertical ? E <= v[1] : S <= v[0];
                return e.createElement("div", {
                  key: "borderRadiusControl".concat(r),
                  className: t0("control", "border-radius"),
                  "data-radius-index": r,
                  style: {
                    display: a ? "block" : "none",
                    transform: "translate("
                      .concat(n[0], "px, ")
                      .concat(n[1], "px) scale(")
                      .concat(m, ")"),
                  },
                });
              });
            },
            dragControlCondition: function (t, e) {
              if (!e.inputEvent || e.isRequest) return !1;
              var r = e.inputEvent.target.getAttribute("class") || "";
              return (
                r.indexOf("border-radius") > -1 ||
                (r.indexOf("moveable-line") > -1 &&
                  r.indexOf("moveable-direction") > -1)
              );
            },
            dragControlStart: function (t, e) {
              var r = e.inputEvent,
                n = e.datas,
                a = r.target,
                i = a.getAttribute("class") || "",
                o = i.indexOf("border-radius") > -1,
                s =
                  i.indexOf("moveable-line") > -1 &&
                  i.indexOf("moveable-direction") > -1,
                u = o ? parseInt(a.getAttribute("data-radius-index"), 10) : -1,
                l = s ? parseInt(a.getAttribute("data-line-index"), 10) : -1;
              if ((!o && !s) || !1 === eE(t, "onRoundStart", em(t, e, {})))
                return !1;
              (n.lineIndex = l),
                (n.controlIndex = u),
                (n.isControl = o),
                (n.isLine = s),
                tA(t, e);
              var c = t.props,
                f = c.roundRelative,
                p = c.minRoundControls,
                d = void 0 === p ? [0, 0] : p,
                h = t.state,
                g = h.target,
                v = h.width,
                m = h.height;
              (n.isRound = !0), (n.prevDist = [0, 0]);
              var b = rn(g, v, m, d) || [];
              return (
                (n.controlPoses = b),
                (h.borderRadiusState = e1(
                  b.map(function (t) {
                    return t.pos;
                  }),
                  b,
                  f,
                  v,
                  m
                ).styles.join(" ")),
                !0
              );
            },
            dragControl: function (t, e) {
              var r = e.datas;
              if (!r.isRound || !r.isControl || !r.controlPoses.length)
                return !1;
              var n = r.controlIndex,
                a = r.controlPoses,
                i = tN(e),
                o = i[0],
                s = i[1],
                l = [o, s],
                c = (0, u.h9)(l, r.prevDist),
                f = t.props.maxRoundControls,
                p = void 0 === f ? [4, 4] : f,
                d = t.state,
                h = d.width,
                g = d.height,
                v = a[n],
                m = v.vertical,
                b = v.horizontal,
                x = a.map(function (t) {
                  var e = t.horizontal,
                    r = t.vertical,
                    n = [e * b * l[0], r * m * l[1]];
                  if (e) {
                    if (1 === p[0] || (p[0] < 4 && e !== b)) return n;
                  } else if (0 === p[1])
                    return (n[1] = ((r * b * l[0]) / h) * g), n;
                  else if (m && (1 === p[1] || (p[1] < 4 && r !== m))) return n;
                  return [0, 0];
                });
              x[n] = l;
              var E = a.map(function (t, e) {
                return (0, u.PD)(t.pos, x[e]);
              });
              return (r.prevDist = [o, s]), ra(t, e, l, c, a, E), !0;
            },
            dragControlEnd: function (t, e) {
              var r = t.state;
              r.borderRadiusState = "";
              var n = e.datas,
                a = e.isDouble;
              if (!n.isRound) return !1;
              var i = r.width,
                o = r.height,
                s = n.isControl,
                u = n.controlIndex,
                l = n.isLine,
                c = n.lineIndex,
                f = n.controlPoses,
                p = f.map(function (t) {
                  return t.pos;
                }),
                d = p.length,
                h = t.props.roundClickable;
              if (a && (void 0 === h || h)) {
                if (s) e4(f, p, u, 0);
                else if (l) {
                  var g,
                    v,
                    m,
                    b,
                    x,
                    E,
                    S,
                    D = tT(t, e),
                    R = D[0],
                    M = D[1];
                  (v = (g = e9(f)).horizontals),
                    (m = g.verticals),
                    (b = v.length),
                    (x = m.length),
                    (E = -1),
                    (S = -1),
                    0 === c
                      ? 0 === b
                        ? (E = 0)
                        : 1 === b && (E = 1)
                      : 3 === c && (b <= 2 ? (E = 2) : b <= 3 && (E = 3)),
                    2 === c
                      ? 0 === x
                        ? (S = 0)
                        : x < 4 && (S = 3)
                      : 1 === c && (x <= 1 ? (S = 1) : x <= 2 && (S = 2)),
                    e5(f, p, 0, E, S, R, M, i, o);
                }
                d !== f.length && ra(t, e, [0, 0], [0, 0], f, p);
              }
              return (
                eE(t, "onRoundEnd", eb(t, e, {})),
                (r.borderRadiusState = ""),
                !0
              );
            },
            unset: function (t) {
              t.state.borderRadiusState = "";
            },
          },
          rp,
          rv,
          rd,
          e_,
          ro,
        ],
        rb = rm.reduce(function (t, e) {
          return x(x({}, t), "events" in e ? e.events : {});
        }, {}),
        rx = rm.reduce(function (t, e) {
          return x(x({}, t), e.props);
        }, {});
      function rE(t, e) {
        return Math.max.apply(
          Math,
          t.map(function (t) {
            var r = t[0],
              n = t[1],
              a = t[2],
              i = t[3];
            return Math.max(r[e], n[e], a[e], i[e]);
          })
        );
      }
      function rS(t, e) {
        return Math.min.apply(
          Math,
          t.map(function (t) {
            var r = t[0],
              n = t[1],
              a = t[2],
              i = t[3];
            return Math.min(r[e], n[e], a[e], i[e]);
          })
        );
      }
      Object.keys(
        (function (t) {
          var e = {};
          for (var r in t) e[t[r]] = r;
          return e;
        })(rb)
      ),
        Object.keys(rx);
      var rD = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.differ = new c.Z()),
              (e.moveables = []),
              (e.transformOrigin = "50% 50%"),
              e
            );
          }
          b(e, t);
          var r = e.prototype;
          return (
            (r.checkUpdate = function () {
              this.updateAbles();
            }),
            (r.updateRect = function (t, e, r) {
              if ((void 0 === r && (r = !0), this.controlBox)) {
                this.moveables.forEach(function (e) {
                  e.updateRect(t, !1, !1);
                });
                var n = this.state,
                  a = this.props,
                  i = n.target || a.target;
                (!e || ("" !== t && a.updateGroup)) &&
                  ((this.rotation = a.defaultGroupRotate),
                  (this.transformOrigin = a.defaultGroupOrigin || "50% 50%"),
                  (this.scale = [1, 1]));
                var o = this.rotation,
                  l = this.scale,
                  c = (function (t, e) {
                    if (!t.length) return [0, 0, 0, 0];
                    var r = t.map(function (t) {
                        return eg(t.state);
                      }),
                      n = 1e10,
                      a = 1e10,
                      i = 0,
                      o = 0,
                      l = (0, s.P2)(e, 1e-7);
                    if (l % 90) {
                      var c = (l / 180) * Math.PI,
                        f = Math.tan(c),
                        p = -1 / f,
                        d = [-1e10, 1e10],
                        h = [-1e10, 1e10];
                      r.forEach(function (t) {
                        t.forEach(function (t) {
                          var e = t[1] - f * t[0],
                            r = t[1] - p * t[0];
                          (d[0] = Math.max(d[0], e)),
                            (d[1] = Math.min(d[1], e)),
                            (h[0] = Math.max(h[0], r)),
                            (h[1] = Math.min(h[1], r));
                        });
                      }),
                        d.forEach(function (t) {
                          h.forEach(function (e) {
                            var r = (e - t) / (f - p);
                            (n = Math.min(n, r)), (a = Math.min(a, f * r + t));
                          });
                        });
                      var g = r.map(function (t) {
                        var e = t[0],
                          r = t[1],
                          n = t[2],
                          a = t[3];
                        return [
                          (0, u.U1)(e, -c),
                          (0, u.U1)(r, -c),
                          (0, u.U1)(n, -c),
                          (0, u.U1)(a, -c),
                        ];
                      });
                      (i = rE(g, 0) - rS(g, 0)), (o = rE(g, 1) - rS(g, 1));
                    } else if (
                      ((n = rS(r, 0)),
                      (a = rS(r, 1)),
                      (i = rE(r, 0) - n),
                      (o = rE(r, 1) - a),
                      l % 180)
                    ) {
                      var v = i;
                      (i = o), (o = v);
                    }
                    return [n, a, i, o];
                  })(this.moveables, o),
                  p = c[0],
                  d = c[1],
                  h = c[2],
                  g = c[3],
                  v = "rotate("
                    .concat(o, "deg) scale(")
                    .concat(l[0] >= 0 ? 1 : -1, ", ")
                    .concat(l[1] >= 0 ? 1 : -1, ")");
                (i.style.cssText +=
                  "left:0px;top:0px; transform-origin: "
                    .concat(this.transformOrigin, "; width:")
                    .concat(h, "px; height:")
                    .concat(g, "px;") + "transform:".concat(v)),
                  (n.width = h),
                  (n.height = g);
                var m = this.getContainer(),
                  b = ec(
                    this.controlBox.getElement(),
                    i,
                    this.controlBox.getElement(),
                    this.getContainer(),
                    this.props.rootContainer || m
                  ),
                  E = [b.left, b.top],
                  S = eg(b),
                  D = S[0],
                  R = S[1],
                  M = S[2],
                  y = S[3],
                  C = (0, f.i$)([D, R, M, y]),
                  P = [C.minX, C.minY];
                (b.pos1 = (0, u.h9)(D, P)),
                  (b.pos2 = (0, u.h9)(R, P)),
                  (b.pos3 = (0, u.h9)(M, P)),
                  (b.pos4 = (0, u.h9)(y, P)),
                  (b.left = p - b.left + P[0]),
                  (b.top = d - b.top + P[1]),
                  (b.origin = (0, u.h9)((0, u.PD)(E, b.origin), P)),
                  (b.beforeOrigin = (0, u.h9)((0, u.PD)(E, b.beforeOrigin), P)),
                  (b.originalBeforeOrigin = (0, u.PD)(
                    E,
                    b.originalBeforeOrigin
                  ));
                var z = b.targetClientRect,
                  B = l[0] * l[1] > 0 ? 1 : -1;
                (z.top += b.top - n.top),
                  (z.left += b.left - n.left),
                  (i.style.transform = "translate("
                    .concat(-P[0], "px, ")
                    .concat(-P[1], "px) ")
                    .concat(v)),
                  this.updateState(
                    x(x({}, b), { direction: B, beforeDirection: B }),
                    r
                  );
              }
            }),
            (r.getRect = function () {
              return x(x({}, t.prototype.getRect.call(this)), {
                children: this.moveables.map(function (t) {
                  return t.getRect();
                }),
              });
            }),
            (r.triggerEvent = function (e, r, n) {
              if (n || e.indexOf("Group") > -1)
                return t.prototype.triggerEvent.call(this, e, r);
              this._emitter.trigger(e, r);
            }),
            (r.updateAbles = function () {
              t.prototype.updateAbles.call(
                this,
                E(E([], this.props.ables, !0), [rp], !1),
                "Group"
              );
            }),
            (r._updateTargets = function () {
              t.prototype._updateTargets.call(this),
                (this._prevTarget = this.props.dragTarget || this.areaElement);
            }),
            (r._updateEvents = function () {
              var t = this.state,
                e = this.props,
                r = this._prevTarget,
                n = e.dragTarget || this.areaElement;
              r !== n &&
                (ev(this, "targetGesto"),
                ev(this, "controlGesto"),
                (t.target = null)),
                t.target ||
                  ((t.target = this.areaElement),
                  (this.controlBox.getElement().style.display = "block"),
                  (this.targetGesto = ru(this, n, "Group")),
                  (this.controlGesto = rl(
                    this,
                    this.controlBox.getElement(),
                    "controlAbles",
                    "GroupControl"
                  )));
              var a = !eR(t.container, e.container);
              a && (t.container = e.container);
              var i = this.differ.update(e.targets),
                o = i.added,
                s = i.changed,
                u = i.removed;
              (a || o.length || s.length || u.length) && this.updateRect();
            }),
            (r._updateObserver = function () {}),
            (e.defaultProps = x(x({}, rf.defaultProps), {
              transformOrigin: ["50%", "50%"],
              groupable: !0,
              dragArea: !0,
              keepRatio: !0,
              targets: [],
              defaultGroupRotate: 0,
              defaultGroupOrigin: "50% 50%",
            })),
            e
          );
        })(rf),
        rR = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.moveables = []), e;
          }
          b(e, t);
          var r = e.prototype;
          return (
            (r.render = function () {
              var t = this,
                e = this.props,
                r = e.cspNonce,
                n = e.cssStyled,
                a = e.targets;
              return (0, d.createElement)(
                n,
                {
                  cspNonce: r,
                  ref: (0, o.iH)(this, "controlBox"),
                  className: t0("control-box"),
                },
                a.map(function (e, r) {
                  return (0,
                  d.createElement)(rf, x({ key: "moveable" + r, ref: (0, o.xL)(t, "moveables", r) }, t.props, { target: e, wrapperMoveable: t }));
                })
              );
            }),
            (r.componentDidUpdate = function () {}),
            (r.updateRect = function (t, e, r) {
              void 0 === r && (r = !0),
                this.moveables.forEach(function (n) {
                  n.updateRect(t, e, r);
                });
            }),
            (r.getRect = function () {
              return x(x({}, t.prototype.getRect.call(this)), {
                children: this.moveables.map(function (t) {
                  return t.getRect();
                }),
              });
            }),
            (r.request = function () {
              return {
                request: function () {
                  return this;
                },
                requestEnd: function () {
                  return this;
                },
              };
            }),
            (r.dragStart = function () {
              return this;
            }),
            (r.hitTest = function () {
              return 0;
            }),
            (r.isInside = function () {
              return !1;
            }),
            (r.isDragging = function () {
              return !1;
            }),
            (r.updateRenderPoses = function () {}),
            (r.checkUpdate = function () {}),
            (r.triggerEvent = function () {}),
            (r.updateAbles = function () {}),
            (r._updateEvents = function () {}),
            (r._updateObserver = function () {}),
            e
          );
        })(rf),
        rM = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.refTargets = []), (e.selectorMap = {}), e;
          }
          b(e, t);
          var r = e.prototype;
          return (
            (e.makeStyled = function () {
              var t = {};
              this.getTotalAbles().forEach(function (e) {
                var r = e.css;
                r &&
                  r.forEach(function (e) {
                    t[e] = !0;
                  });
              });
              var e = (0, s.RR)(t).join("\n");
              this.defaultStyled = (0, g.Z)("div", (0, o.$i)(M, y + e));
            }),
            (e.getTotalAbles = function () {
              return E([eV, rp, rv, e_], this.defaultAbles, !0);
            }),
            (r.render = function () {
              var t,
                e,
                r,
                n = this.constructor;
              n.defaultStyled || n.makeStyled();
              var a = this.props,
                i = a.ables,
                u = a.props,
                l = (function (t, e) {
                  var r = {};
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) &&
                      0 > e.indexOf(n) &&
                      (r[n] = t[n]);
                  if (
                    null != t &&
                    "function" == typeof Object.getOwnPropertySymbols
                  )
                    for (
                      var a = 0, n = Object.getOwnPropertySymbols(t);
                      a < n.length;
                      a++
                    )
                      0 > e.indexOf(n[a]) &&
                        Object.prototype.propertyIsEnumerable.call(t, n[a]) &&
                        (r[n[a]] = t[n[a]]);
                  return r;
                })(a, ["ables", "props"]),
                c =
                  ((t = this._updateRefs(!0)),
                  (e = this.selectorMap),
                  (r = []),
                  t.forEach(function (t) {
                    if (t) {
                      if ((0, s.HD)(t)) {
                        e[t] && r.push.apply(r, e[t]);
                        return;
                      }
                      r.push(t);
                    }
                  }),
                  r),
                f = c.length > 1,
                p = E(E([], n.getTotalAbles(), !0), i || [], !0),
                h = x(x(x({}, l), u || {}), {
                  ables: p,
                  cssStyled: n.defaultStyled,
                  customStyledMap: n.customStyledMap,
                });
              return f
                ? l.individualGroupable
                  ? (0, d.createElement)(
                      rR,
                      x(
                        {
                          key: "individual-group",
                          ref: (0, o.iH)(this, "moveable"),
                        },
                        h,
                        { target: null, targets: c }
                      )
                    )
                  : (0, d.createElement)(
                      rD,
                      x({ key: "group", ref: (0, o.iH)(this, "moveable") }, h, {
                        target: null,
                        targets: c,
                      })
                    )
                : (0, d.createElement)(
                    rf,
                    x({ key: "single", ref: (0, o.iH)(this, "moveable") }, h, {
                      target: c[0],
                    })
                  );
            }),
            (r.componentDidMount = function () {
              this._updateRefs();
            }),
            (r.componentDidUpdate = function () {
              this._updateRefs();
            }),
            (r.componentWillUnmount = function () {
              (this.selectorMap = {}), (this.refTargets = []);
            }),
            (r.getManager = function () {
              return this.moveable;
            }),
            (r._updateRefs = function (t) {
              var e = this.refTargets,
                r = ew(this.props.target || this.props.targets),
                n = "undefined" != typeof document,
                a =
                  e.length !== r.length ||
                  e.some(function (t, e) {
                    var n = r[e];
                    return (!!t || !!n) && t !== n;
                  }),
                i = this.selectorMap,
                o = {};
              return (
                this.refTargets.forEach(function (t) {
                  (0, s.HD)(t) &&
                    (i[t]
                      ? (o[t] = i[t])
                      : n &&
                        ((a = !0),
                        (o[t] = [].slice.call(document.querySelectorAll(t)))));
                }),
                (this.refTargets = r),
                (this.selectorMap = o),
                !t && a && this.forceUpdate(),
                r
              );
            }),
            (e.defaultAbles = []),
            (e.customStyledMap = {}),
            (e.defaultStyled = null),
            !(function (t, e, r, n) {
              var a,
                i = arguments.length,
                o =
                  i < 3
                    ? e
                    : null === n
                    ? (n = Object.getOwnPropertyDescriptor(e, r))
                    : n;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                o = Reflect.decorate(t, e, r, n);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (a = t[s]) &&
                    (o = (i < 3 ? a(o) : i > 3 ? a(e, r, o) : a(e, r)) || o);
              i > 3 && o && Object.defineProperty(e, r, o);
            })([(0, o.qE)(G)], e.prototype, "moveable", void 0),
            e
          );
        })(d.PureComponent);
      function ry(t) {
        var e;
        return (
          ((e = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return b(e, t), e;
          })(rM)).defaultAbles = t),
          e
        );
      }
    },
  },
]);
//# sourceMappingURL=998ccc15-ad35dfdb33c695e6.js.map
