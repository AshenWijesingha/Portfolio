"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [146],
  {
    69180: function (t, e, r) {
      r.d(e, {
        $4: function () {
          return tt;
        },
        BW: function () {
          return Q;
        },
        Zi: function () {
          return te;
        },
        at: function () {
          return q;
        },
        eI: function () {
          return ev;
        },
        or: function () {
          return ts;
        },
        w$: function () {
          return tl;
        },
      });
      var n,
        i,
        l = r(42108),
        s = r(60561),
        o = r(84130),
        c = r(47455),
        h = r(63473),
        d = r(82003),
        a = r(4018),
        u = r(30838),
        g = r(81372),
        f = r(83564),
        p = r(30759),
        w = r(43954),
        _ = r(61331),
        m = r(71094),
        k = r(66392);
      class y {
        constructor(t, e) {
          (this.clock = t), (this.len = e);
        }
      }
      class b {
        constructor() {
          this.clients = new Map();
        }
      }
      let E = (t, e, r) =>
          e.clients.forEach((e, n) => {
            let i = t.doc.store.clients.get(n);
            for (let n = 0; n < e.length; n++) {
              let l = e[n];
              tk(t, i, l.clock, l.len, r);
            }
          }),
        S = (t, e) => {
          let r = 0,
            n = t.length - 1;
          for (; r <= n; ) {
            let i = o.GW((r + n) / 2),
              l = t[i],
              s = l.clock;
            if (s <= e) {
              if (e < s + l.len) return i;
              r = i + 1;
            } else n = i - 1;
          }
          return null;
        },
        C = (t, e) => {
          let r = t.clients.get(e.client);
          return void 0 !== r && null !== S(r, e.clock);
        },
        D = (t) => {
          t.clients.forEach((t) => {
            let e, r;
            for (
              t.sort((t, e) => t.clock - e.clock), e = 1, r = 1;
              e < t.length;
              e++
            ) {
              let n = t[r - 1],
                i = t[e];
              n.clock + n.len >= i.clock
                ? (n.len = o.Fp(n.len, i.clock + i.len - n.clock))
                : (r < e && (t[r] = i), r++);
            }
            t.length = r;
          });
        },
        A = (t) => {
          let e = new b();
          for (let r = 0; r < t.length; r++)
            t[r].clients.forEach((n, i) => {
              if (!e.clients.has(i)) {
                let l = n.slice();
                for (let e = r + 1; e < t.length; e++)
                  array.appendTo(l, t[e].clients.get(i) || []);
                e.clients.set(i, l);
              }
            });
          return D(e), e;
        },
        v = (t, e, r, n) => {
          c.Yu(t.clients, e, () => []).push(new y(r, n));
        },
        I = (t, e) => {
          h.uE(t.restEncoder, e.clients.size),
            s
              .Dp(e.clients.entries())
              .sort((t, e) => e[0] - t[0])
              .forEach(([e, r]) => {
                t.resetDsCurVal(), h.uE(t.restEncoder, e);
                let n = r.length;
                h.uE(t.restEncoder, n);
                for (let e = 0; e < n; e++) {
                  let n = r[e];
                  t.writeDsClock(n.clock), t.writeDsLen(n.len);
                }
              });
        },
        U = (t) => {
          let e = new b(),
            r = decoding.readVarUint(t.restDecoder);
          for (let n = 0; n < r; n++) {
            t.resetDsCurVal();
            let r = decoding.readVarUint(t.restDecoder),
              n = decoding.readVarUint(t.restDecoder);
            if (n > 0) {
              let i = map.setIfUndefined(e.clients, r, () => []);
              for (let e = 0; e < n; e++)
                i.push(new y(t.readDsClock(), t.readDsLen()));
            }
          }
          return e;
        },
        x = (t, e, r) => {
          let n = new b(),
            i = decoding.readVarUint(t.restDecoder);
          for (let l = 0; l < i; l++) {
            t.resetDsCurVal();
            let i = decoding.readVarUint(t.restDecoder),
              l = decoding.readVarUint(t.restDecoder),
              s = r.clients.get(i) || [],
              o = ta(r, i);
            for (let r = 0; r < l; r++) {
              let r = t.readDsClock(),
                l = r + t.readDsLen();
              if (r < o) {
                o < l && v(n, i, o, l - o);
                let t = tg(s, r),
                  c = s[t];
                for (
                  !c.deleted &&
                  c.id.clock < r &&
                  (s.splice(t + 1, 0, eG(e, c, r - c.id.clock)), t++);
                  t < s.length;

                )
                  if ((c = s[t++]).id.clock < l)
                    c.deleted ||
                      (l < c.id.clock + c.length &&
                        s.splice(t, 0, eG(e, c, l - c.id.clock)),
                      c.delete(e));
                  else break;
              } else v(n, i, r, l - r);
            }
          }
          if (n.clients.size > 0) {
            let t = new V();
            return (
              encoding.writeVarUint(t.restEncoder, 0), I(t, n), t.toUint8Array()
            );
          }
          return null;
        },
        M = d.U7;
      class L extends l.y {
        constructor({
          guid: t = d.k$(),
          collectionid: e = null,
          gc: r = !0,
          gcFilter: n = () => !0,
          meta: i = null,
          autoLoad: l = !1,
          shouldLoad: s = !0,
        } = {}) {
          super(),
            (this.gc = r),
            (this.gcFilter = n),
            (this.clientID = M()),
            (this.guid = t),
            (this.collectionid = e),
            (this.share = new Map()),
            (this.store = new th()),
            (this._transaction = null),
            (this._transactionCleanups = []),
            (this.subdocs = new Set()),
            (this._item = null),
            (this.shouldLoad = s),
            (this.autoLoad = l),
            (this.meta = i),
            (this.isLoaded = !1),
            (this.isSynced = !1),
            (this.whenLoaded = a.Ue((t) => {
              this.on("load", () => {
                (this.isLoaded = !0), t(this);
              });
            }));
          let o = () =>
            a.Ue((t) => {
              let e = (r) => {
                (void 0 === r || !0 === r) && (this.off("sync", e), t());
              };
              this.on("sync", e);
            });
          this.on("sync", (t) => {
            !1 === t && this.isSynced && (this.whenSynced = o()),
              (this.isSynced = void 0 === t || !0 === t),
              this.isSynced && !this.isLoaded && this.emit("load", []);
          }),
            (this.whenSynced = o());
        }
        load() {
          let t = this._item;
          null === t ||
            this.shouldLoad ||
            tv(
              t.parent.doc,
              (t) => {
                t.subdocsLoaded.add(this);
              },
              null,
              !0
            ),
            (this.shouldLoad = !0);
        }
        getSubdocs() {
          return this.subdocs;
        }
        getSubdocGuids() {
          return new Set(s.Dp(this.subdocs).map((t) => t.guid));
        }
        transact(t, e = null) {
          return tv(this, t, e);
        }
        get(t, e = tY) {
          let r = c.Yu(this.share, t, () => {
              let t = new e();
              return t._integrate(this, null), t;
            }),
            n = r.constructor;
          if (e !== tY && n !== e) {
            if (n === tY) {
              let n = new e();
              (n._map = r._map),
                r._map.forEach((t) => {
                  for (; null !== t; t = t.left) t.parent = n;
                }),
                (n._start = r._start);
              for (let t = n._start; null !== t; t = t.right) t.parent = n;
              return (
                (n._length = r._length),
                this.share.set(t, n),
                n._integrate(this, null),
                n
              );
            }
            throw Error(
              `Type with the name ${t} has already been defined with a different constructor`
            );
          }
          return r;
        }
        getArray(t = "") {
          return this.get(t, er);
        }
        getText(t = "") {
          return this.get(t, eb);
        }
        getMap(t = "") {
          return this.get(t, ei);
        }
        getXmlFragment(t = "") {
          return this.get(t, eS);
        }
        toJSON() {
          let t = {};
          return (
            this.share.forEach((e, r) => {
              t[r] = e.toJSON();
            }),
            t
          );
        }
        destroy() {
          s.Dp(this.subdocs).forEach((t) => t.destroy());
          let t = this._item;
          if (null !== t) {
            this._item = null;
            let e = t.content;
            (e.doc = new L({ guid: this.guid, ...e.opts, shouldLoad: !1 })),
              (e.doc._item = t),
              tv(
                t.parent.doc,
                (r) => {
                  let n = e.doc;
                  t.deleted || r.subdocsAdded.add(n),
                    r.subdocsRemoved.add(this);
                },
                null,
                !0
              );
          }
          this.emit("destroyed", [!0]),
            this.emit("destroy", [this]),
            super.destroy();
        }
        on(t, e) {
          super.on(t, e);
        }
        off(t, e) {
          super.off(t, e);
        }
      }
      class N extends null {
        constructor(t) {
          super(t),
            (this.keys = []),
            decoding.readVarUint(t),
            (this.keyClockDecoder = new decoding.IntDiffOptRleDecoder(
              decoding.readVarUint8Array(t)
            )),
            (this.clientDecoder = new decoding.UintOptRleDecoder(
              decoding.readVarUint8Array(t)
            )),
            (this.leftClockDecoder = new decoding.IntDiffOptRleDecoder(
              decoding.readVarUint8Array(t)
            )),
            (this.rightClockDecoder = new decoding.IntDiffOptRleDecoder(
              decoding.readVarUint8Array(t)
            )),
            (this.infoDecoder = new decoding.RleDecoder(
              decoding.readVarUint8Array(t),
              decoding.readUint8
            )),
            (this.stringDecoder = new decoding.StringDecoder(
              decoding.readVarUint8Array(t)
            )),
            (this.parentInfoDecoder = new decoding.RleDecoder(
              decoding.readVarUint8Array(t),
              decoding.readUint8
            )),
            (this.typeRefDecoder = new decoding.UintOptRleDecoder(
              decoding.readVarUint8Array(t)
            )),
            (this.lenDecoder = new decoding.UintOptRleDecoder(
              decoding.readVarUint8Array(t)
            ));
        }
        readLeftID() {
          return new X(this.clientDecoder.read(), this.leftClockDecoder.read());
        }
        readRightID() {
          return new X(
            this.clientDecoder.read(),
            this.rightClockDecoder.read()
          );
        }
        readClient() {
          return this.clientDecoder.read();
        }
        readInfo() {
          return this.infoDecoder.read();
        }
        readString() {
          return this.stringDecoder.read();
        }
        readParentInfo() {
          return 1 === this.parentInfoDecoder.read();
        }
        readTypeRef() {
          return this.typeRefDecoder.read();
        }
        readLen() {
          return this.lenDecoder.read();
        }
        readAny() {
          return decoding.readAny(this.restDecoder);
        }
        readBuf() {
          return decoding.readVarUint8Array(this.restDecoder);
        }
        readJSON() {
          return decoding.readAny(this.restDecoder);
        }
        readKey() {
          let t = this.keyClockDecoder.read();
          if (t < this.keys.length) return this.keys[t];
          {
            let t = this.stringDecoder.read();
            return this.keys.push(t), t;
          }
        }
      }
      class O {
        constructor() {
          this.restEncoder = h.Mf();
        }
        toUint8Array() {
          return h._f(this.restEncoder);
        }
        resetDsCurVal() {}
        writeDsClock(t) {
          h.uE(this.restEncoder, t);
        }
        writeDsLen(t) {
          h.uE(this.restEncoder, t);
        }
      }
      class R extends O {
        writeLeftID(t) {
          h.uE(this.restEncoder, t.client), h.uE(this.restEncoder, t.clock);
        }
        writeRightID(t) {
          h.uE(this.restEncoder, t.client), h.uE(this.restEncoder, t.clock);
        }
        writeClient(t) {
          h.uE(this.restEncoder, t);
        }
        writeInfo(t) {
          h.$F(this.restEncoder, t);
        }
        writeString(t) {
          h.uw(this.restEncoder, t);
        }
        writeParentInfo(t) {
          h.uE(this.restEncoder, t ? 1 : 0);
        }
        writeTypeRef(t) {
          h.uE(this.restEncoder, t);
        }
        writeLen(t) {
          h.uE(this.restEncoder, t);
        }
        writeAny(t) {
          h.EM(this.restEncoder, t);
        }
        writeBuf(t) {
          h.mP(this.restEncoder, t);
        }
        writeJSON(t) {
          h.uw(this.restEncoder, JSON.stringify(t));
        }
        writeKey(t) {
          h.uw(this.restEncoder, t);
        }
      }
      class T {
        constructor() {
          (this.restEncoder = h.Mf()), (this.dsCurrVal = 0);
        }
        toUint8Array() {
          return h._f(this.restEncoder);
        }
        resetDsCurVal() {
          this.dsCurrVal = 0;
        }
        writeDsClock(t) {
          let e = t - this.dsCurrVal;
          (this.dsCurrVal = t), h.uE(this.restEncoder, e);
        }
        writeDsLen(t) {
          0 === t && u.zR(),
            h.uE(this.restEncoder, t - 1),
            (this.dsCurrVal += t);
        }
      }
      class V extends T {
        constructor() {
          super(),
            (this.keyMap = new Map()),
            (this.keyClock = 0),
            (this.keyClockEncoder = new h.sX()),
            (this.clientEncoder = new h.HE()),
            (this.leftClockEncoder = new h.sX()),
            (this.rightClockEncoder = new h.sX()),
            (this.infoEncoder = new h.GF(h.$F)),
            (this.stringEncoder = new h.TS()),
            (this.parentInfoEncoder = new h.GF(h.$F)),
            (this.typeRefEncoder = new h.HE()),
            (this.lenEncoder = new h.HE());
        }
        toUint8Array() {
          let t = h.Mf();
          return (
            h.uE(t, 0),
            h.mP(t, this.keyClockEncoder.toUint8Array()),
            h.mP(t, this.clientEncoder.toUint8Array()),
            h.mP(t, this.leftClockEncoder.toUint8Array()),
            h.mP(t, this.rightClockEncoder.toUint8Array()),
            h.mP(t, h._f(this.infoEncoder)),
            h.mP(t, this.stringEncoder.toUint8Array()),
            h.mP(t, h._f(this.parentInfoEncoder)),
            h.mP(t, this.typeRefEncoder.toUint8Array()),
            h.mP(t, this.lenEncoder.toUint8Array()),
            h.HK(t, h._f(this.restEncoder)),
            h._f(t)
          );
        }
        writeLeftID(t) {
          this.clientEncoder.write(t.client),
            this.leftClockEncoder.write(t.clock);
        }
        writeRightID(t) {
          this.clientEncoder.write(t.client),
            this.rightClockEncoder.write(t.clock);
        }
        writeClient(t) {
          this.clientEncoder.write(t);
        }
        writeInfo(t) {
          this.infoEncoder.write(t);
        }
        writeString(t) {
          this.stringEncoder.write(t);
        }
        writeParentInfo(t) {
          this.parentInfoEncoder.write(t ? 1 : 0);
        }
        writeTypeRef(t) {
          this.typeRefEncoder.write(t);
        }
        writeLen(t) {
          this.lenEncoder.write(t);
        }
        writeAny(t) {
          h.EM(this.restEncoder, t);
        }
        writeBuf(t) {
          h.mP(this.restEncoder, t);
        }
        writeJSON(t) {
          h.EM(this.restEncoder, t);
        }
        writeKey(t) {
          let e = this.keyMap.get(t);
          void 0 === e
            ? (this.keyClockEncoder.write(this.keyClock++),
              this.stringEncoder.write(t))
            : this.keyClockEncoder.write(e);
        }
      }
      let B = (t, e, r, n) => {
          n = o.Fp(n, e[0].id.clock);
          let i = tg(e, n);
          h.uE(t.restEncoder, e.length - i),
            t.writeClient(r),
            h.uE(t.restEncoder, n);
          let l = e[i];
          l.write(t, n - l.id.clock);
          for (let r = i + 1; r < e.length; r++) e[r].write(t, 0);
        },
        P = (t, e, r) => {
          let n = new Map();
          r.forEach((t, r) => {
            ta(e, r) > t && n.set(r, t);
          }),
            td(e).forEach((t, e) => {
              r.has(e) || n.set(e, 0);
            }),
            h.uE(t.restEncoder, n.size),
            s
              .Dp(n.entries())
              .sort((t, e) => e[0] - t[0])
              .forEach(([r, n]) => {
                B(t, e.clients.get(r), r, n);
              });
        },
        W = (t, e) => {
          let r = map.create(),
            n = decoding.readVarUint(t.restDecoder);
          for (let i = 0; i < n; i++) {
            let n = decoding.readVarUint(t.restDecoder),
              i = Array(n),
              l = t.readClient(),
              s = decoding.readVarUint(t.restDecoder);
            r.set(l, { i: 0, refs: i });
            for (let r = 0; r < n; r++) {
              let n = t.readInfo();
              switch (binary.BITS5 & n) {
                case 0: {
                  let e = t.readLen();
                  (i[r] = new eU(q(l, s), e)), (s += e);
                  break;
                }
                case 10: {
                  let e = decoding.readVarUint(t.restDecoder);
                  (i[r] = new eQ(q(l, s), e)), (s += e);
                  break;
                }
                default: {
                  let o = (n & (binary.BIT7 | binary.BIT8)) == 0,
                    c = new eX(
                      q(l, s),
                      null,
                      (n & binary.BIT8) === binary.BIT8 ? t.readLeftID() : null,
                      null,
                      (n & binary.BIT7) === binary.BIT7
                        ? t.readRightID()
                        : null,
                      o
                        ? t.readParentInfo()
                          ? e.get(t.readString())
                          : t.readLeftID()
                        : null,
                      o && (n & binary.BIT6) === binary.BIT6
                        ? t.readString()
                        : null,
                      eZ(t, n)
                    );
                  (i[r] = c), (s += c.length);
                }
              }
            }
          }
          return r;
        },
        J = (t, e, r) => {
          let n = [],
            i = array.from(r.keys()).sort((t, e) => t - e);
          if (0 === i.length) return null;
          let l = () => {
              if (0 === i.length) return null;
              let t = r.get(i[i.length - 1]);
              for (; t.refs.length === t.i; ) {
                if ((i.pop(), !(i.length > 0))) return null;
                t = r.get(i[i.length - 1]);
              }
              return t;
            },
            s = l();
          if (null === s) return null;
          let o = new th(),
            c = new Map(),
            h = (t, e) => {
              let r = c.get(t);
              (null == r || r > e) && c.set(t, e);
            },
            d = s.refs[s.i++],
            a = new Map(),
            u = () => {
              for (let t of n) {
                let e = t.id.client,
                  n = r.get(e);
                n
                  ? (n.i--,
                    o.clients.set(e, n.refs.slice(n.i)),
                    r.delete(e),
                    (n.i = 0),
                    (n.refs = []))
                  : o.clients.set(e, [t]),
                  (i = i.filter((t) => t !== e));
              }
              n.length = 0;
            };
          for (;;) {
            if (d.constructor !== eQ) {
              let i = map.setIfUndefined(a, d.id.client, () =>
                  ta(e, d.id.client)
                ),
                l = i - d.id.clock;
              if (l < 0) n.push(d), h(d.id.client, d.id.clock - 1), u();
              else {
                let i = d.getMissing(t, e);
                if (null !== i) {
                  n.push(d);
                  let t = r.get(i) || { refs: [], i: 0 };
                  if (t.refs.length === t.i) h(i, ta(e, i)), u();
                  else {
                    d = t.refs[t.i++];
                    continue;
                  }
                } else
                  (0 === l || l < d.length) &&
                    (d.integrate(t, l),
                    a.set(d.id.client, d.id.clock + d.length));
              }
            }
            if (n.length > 0) d = n.pop();
            else if (null !== s && s.i < s.refs.length) d = s.refs[s.i++];
            else {
              if (null === (s = l())) break;
              d = s.refs[s.i++];
            }
          }
          if (o.clients.size > 0) {
            let t = new V();
            return (
              P(t, o, new Map()),
              encoding.writeVarUint(t.restEncoder, 0),
              { missing: c, update: t.toUint8Array() }
            );
          }
          return null;
        },
        z = (t, e) => P(t, e.doc.store, e.beforeState),
        F = (t, e, r, n = new N(t)) =>
          tv(
            e,
            (t) => {
              t.local = !1;
              let e = !1,
                r = t.doc,
                i = r.store,
                l = W(n, r),
                s = J(t, i, l),
                o = i.pendingStructs;
              if (o) {
                for (let [t, r] of o.missing)
                  if (r < ta(i, t)) {
                    e = !0;
                    break;
                  }
                if (s) {
                  for (let [t, e] of s.missing) {
                    let r = o.missing.get(t);
                    (null == r || r > e) && o.missing.set(t, e);
                  }
                  o.update = tM([o.update, s.update]);
                }
              } else i.pendingStructs = s;
              let c = x(n, t, i);
              if (i.pendingDs) {
                let e = new N(decoding.createDecoder(i.pendingDs));
                decoding.readVarUint(e.restDecoder);
                let r = x(e, t, i);
                c && r ? (i.pendingDs = tM([c, r])) : (i.pendingDs = c || r);
              } else i.pendingDs = c;
              if (e) {
                let e = i.pendingStructs.update;
                (i.pendingStructs = null), $(t.doc, e);
              }
            },
            r,
            !1
          ),
        $ = (t, e, r, n = N) => {
          let i = decoding.createDecoder(e);
          F(i, t, r, new n(i));
        };
      class j {
        constructor() {
          this.l = [];
        }
      }
      let Y = () => new j(),
        H = (t, e) => t.l.push(e),
        K = (t, e) => {
          let r = t.l,
            n = r.length;
          (t.l = r.filter((t) => e !== t)),
            n === t.l.length &&
              console.error(
                "[yjs] Tried to remove event handler that doesn't exist."
              );
        },
        G = (t, e, r) => f.PP(t.l, [e, r]);
      class X {
        constructor(t, e) {
          (this.client = t), (this.clock = e);
        }
      }
      let Z = (t, e) =>
          t === e ||
          (null !== t &&
            null !== e &&
            t.client === e.client &&
            t.clock === e.clock),
        q = (t, e) => new X(t, e),
        Q = (t) => {
          for (let [e, r] of t.doc.share.entries()) if (r === t) return e;
          throw u.zR();
        },
        tt = (t, e) => {
          for (; null !== e; ) {
            if (e.parent === t) return !0;
            e = e.parent._item;
          }
          return !1;
        };
      class te {
        constructor(t, e, r, n = 0) {
          (this.type = t), (this.tname = e), (this.item = r), (this.assoc = n);
        }
      }
      class tr {
        constructor(t, e, r = 0) {
          (this.type = t), (this.index = e), (this.assoc = r);
        }
      }
      let tn = (t, e, r = 0) => new tr(t, e, r),
        ti = (t, e, r) => {
          let n = null,
            i = null;
          return (
            null === t._item
              ? (i = Q(t))
              : (n = q(t._item.id.client, t._item.id.clock)),
            new te(n, i, e, r)
          );
        },
        tl = (t, e, r = 0) => {
          let n = t._start;
          if (r < 0) {
            if (0 === e) return ti(t, null, r);
            e--;
          }
          for (; null !== n; ) {
            if (!n.deleted && n.countable) {
              if (n.length > e) return ti(t, q(n.id.client, n.id.clock + e), r);
              e -= n.length;
            }
            if (null === n.right && r < 0) return ti(t, n.lastId, r);
            n = n.right;
          }
          return ti(t, null, r);
        },
        ts = (t, e) => {
          let r = e.store,
            n = t.item,
            i = t.type,
            l = t.tname,
            s = t.assoc,
            o = null,
            c = 0;
          if (null !== n) {
            if (ta(r, n.client) <= n.clock) return null;
            let t = eK(r, n),
              e = t.item;
            if (!(e instanceof eX)) return null;
            if (null === (o = e.parent)._item || !o._item.deleted) {
              c = e.deleted || !e.countable ? 0 : t.diff + (s >= 0 ? 0 : 1);
              let r = e.left;
              for (; null !== r; )
                !r.deleted && r.countable && (c += r.length), (r = r.left);
            }
          } else {
            if (null !== l) o = e.get(l);
            else if (null !== i) {
              if (ta(r, i.client) <= i.clock) return null;
              let { item: t } = eK(r, i);
              if (!(t instanceof eX) || !(t.content instanceof eH)) return null;
              o = t.content.type;
            } else throw u.zR();
            c = s >= 0 ? o._length : 0;
          }
          return tn(o, c, t.assoc);
        };
      (n = new b()),
        (i = new Map()),
        new (class {
          constructor(t, e) {
            (this.ds = t), (this.sv = e);
          }
        })(n, i);
      let to = (t, e) =>
          void 0 === e
            ? !t.deleted
            : e.sv.has(t.id.client) &&
              (e.sv.get(t.id.client) || 0) > t.id.clock &&
              !C(e.ds, t.id),
        tc = (t, e) => {
          let r = c.Yu(t.meta, tc, p.Ue),
            n = t.doc.store;
          r.has(e) ||
            (e.sv.forEach((e, r) => {
              e < ta(n, r) && tw(t, q(r, e));
            }),
            E(t, e.ds, (t) => {}),
            r.add(e));
        };
      class th {
        constructor() {
          (this.clients = new Map()),
            (this.pendingStructs = null),
            (this.pendingDs = null);
        }
      }
      let td = (t) => {
          let e = new Map();
          return (
            t.clients.forEach((t, r) => {
              let n = t[t.length - 1];
              e.set(r, n.id.clock + n.length);
            }),
            e
          );
        },
        ta = (t, e) => {
          let r = t.clients.get(e);
          if (void 0 === r) return 0;
          let n = r[r.length - 1];
          return n.id.clock + n.length;
        },
        tu = (t, e) => {
          let r = t.clients.get(e.id.client);
          if (void 0 === r) (r = []), t.clients.set(e.id.client, r);
          else {
            let t = r[r.length - 1];
            if (t.id.clock + t.length !== e.id.clock) throw u.zR();
          }
          r.push(e);
        },
        tg = (t, e) => {
          let r = 0,
            n = t.length - 1,
            i = t[n],
            l = i.id.clock;
          if (l === e) return n;
          let s = o.GW((e / (l + i.length - 1)) * n);
          for (; r <= n; ) {
            if ((l = (i = t[s]).id.clock) <= e) {
              if (e < l + i.length) return s;
              r = s + 1;
            } else n = s - 1;
            s = o.GW((r + n) / 2);
          }
          throw u.zR();
        },
        tf = (t, e) => {
          let r = t.clients.get(e.client);
          return r[tg(r, e.clock)];
        },
        tp = (t, e, r) => {
          let n = tg(e, r),
            i = e[n];
          return i.id.clock < r && i instanceof eX
            ? (e.splice(n + 1, 0, eG(t, i, r - i.id.clock)), n + 1)
            : n;
        },
        tw = (t, e) => {
          let r = t.doc.store.clients.get(e.client);
          return r[tp(t, r, e.clock)];
        },
        t_ = (t, e, r) => {
          let n = e.clients.get(r.client),
            i = tg(n, r.clock),
            l = n[i];
          return (
            r.clock !== l.id.clock + l.length - 1 &&
              l.constructor !== eU &&
              n.splice(i + 1, 0, eG(t, l, r.clock - l.id.clock + 1)),
            l
          );
        },
        tm = (t, e, r) => {
          let n = t.clients.get(e.id.client);
          n[tg(n, e.id.clock)] = r;
        },
        tk = (t, e, r, n, i) => {
          let l;
          if (0 === n) return;
          let s = r + n,
            o = tp(t, e, r);
          do s < (l = e[o++]).id.clock + l.length && tp(t, e, s), i(l);
          while (o < e.length && e[o].id.clock < s);
        };
      class ty {
        constructor(t, e, r) {
          (this.doc = t),
            (this.deleteSet = new b()),
            (this.beforeState = td(t.store)),
            (this.afterState = new Map()),
            (this.changed = new Map()),
            (this.changedParentTypes = new Map()),
            (this._mergeStructs = []),
            (this.origin = e),
            (this.meta = new Map()),
            (this.local = r),
            (this.subdocsAdded = new Set()),
            (this.subdocsRemoved = new Set()),
            (this.subdocsLoaded = new Set()),
            (this._needFormattingCleanup = !1);
        }
      }
      let tb = (t, e) =>
          !!(
            0 !== e.deleteSet.clients.size ||
            c.Yj(e.afterState, (t, r) => e.beforeState.get(r) !== t)
          ) && (D(e.deleteSet), z(t, e), I(t, e.deleteSet), !0),
        tE = (t, e, r) => {
          let n = e._item;
          (null === n ||
            (n.id.clock < (t.beforeState.get(n.id.client) || 0) &&
              !n.deleted)) &&
            c.Yu(t.changed, e, p.Ue).add(r);
        },
        tS = (t, e) => {
          let r = t[e],
            n = t[e - 1],
            i = e;
          for (; i > 0; r = n, n = t[--i - 1]) {
            if (
              n.deleted === r.deleted &&
              n.constructor === r.constructor &&
              n.mergeWith(r)
            ) {
              r instanceof eX &&
                null !== r.parentSub &&
                r.parent._map.get(r.parentSub) === r &&
                r.parent._map.set(r.parentSub, n);
              continue;
            }
            break;
          }
          let l = e - i;
          return l && t.splice(e + 1 - l, l), l;
        },
        tC = (t, e, r) => {
          for (let [n, i] of t.clients.entries()) {
            let t = e.clients.get(n);
            for (let n = i.length - 1; n >= 0; n--) {
              let l = i[n],
                s = l.clock + l.len;
              for (
                let n = tg(t, l.clock), i = t[n];
                n < t.length && i.id.clock < s;
                i = t[++n]
              ) {
                let i = t[n];
                if (l.clock + l.len <= i.id.clock) break;
                i instanceof eX && i.deleted && !i.keep && r(i) && i.gc(e, !1);
              }
            }
          }
        },
        tD = (t, e) => {
          t.clients.forEach((t, r) => {
            let n = e.clients.get(r);
            for (let e = t.length - 1; e >= 0; e--) {
              let r = t[e],
                i = o.VV(n.length - 1, 1 + tg(n, r.clock + r.len - 1));
              for (
                let t = i, e = n[t];
                t > 0 && e.id.clock >= r.clock;
                e = n[t]
              )
                t -= 1 + tS(n, t);
            }
          });
        },
        tA = (t, e) => {
          if (e < t.length) {
            let r = t[e],
              n = r.doc,
              i = n.store,
              l = r.deleteSet,
              s = r._mergeStructs;
            try {
              D(l),
                (r.afterState = td(r.doc.store)),
                n.emit("beforeObserverCalls", [r, n]);
              let t = [];
              r.changed.forEach((e, n) =>
                t.push(() => {
                  (null !== n._item && n._item.deleted) ||
                    n._callObserver(r, e);
                })
              ),
                t.push(() => {
                  r.changedParentTypes.forEach((t, e) => {
                    e._dEH.l.length > 0 &&
                      (null === e._item || !e._item.deleted) &&
                      ((t = t.filter(
                        (t) =>
                          null === t.target._item || !t.target._item.deleted
                      )).forEach((t) => {
                        (t.currentTarget = e), (t._path = null);
                      }),
                      t.sort((t, e) => t.path.length - e.path.length),
                      G(e._dEH, t, r));
                  });
                }),
                t.push(() => n.emit("afterTransaction", [r, n])),
                (0, f.PP)(t, []),
                r._needFormattingCleanup && em(r);
            } finally {
              n.gc && tC(l, i, n.gcFilter),
                tD(l, i),
                r.afterState.forEach((t, e) => {
                  let n = r.beforeState.get(e) || 0;
                  if (n !== t) {
                    let t = i.clients.get(e),
                      r = o.Fp(tg(t, n), 1);
                    for (let e = t.length - 1; e >= r; ) e -= 1 + tS(t, e);
                  }
                });
              for (let t = s.length - 1; t >= 0; t--) {
                let { client: e, clock: r } = s[t].id,
                  n = i.clients.get(e),
                  l = tg(n, r);
                !(l + 1 < n.length && tS(n, l + 1) > 1) && l > 0 && tS(n, l);
              }
              if (
                (r.local ||
                  r.afterState.get(n.clientID) ===
                    r.beforeState.get(n.clientID) ||
                  (w.S0(
                    _.ud,
                    _.Pl,
                    "[yjs] ",
                    _.YW,
                    _.hM,
                    "Changed the client-id because another client seems to be using it."
                  ),
                  (n.clientID = M())),
                n.emit("afterTransactionCleanup", [r, n]),
                n._observers.has("update"))
              ) {
                let t = new R(),
                  e = tb(t, r);
                e && n.emit("update", [t.toUint8Array(), r.origin, n, r]);
              }
              if (n._observers.has("updateV2")) {
                let t = new V(),
                  e = tb(t, r);
                e && n.emit("updateV2", [t.toUint8Array(), r.origin, n, r]);
              }
              let { subdocsAdded: c, subdocsLoaded: h, subdocsRemoved: d } = r;
              (c.size > 0 || d.size > 0 || h.size > 0) &&
                (c.forEach((t) => {
                  (t.clientID = n.clientID),
                    null == t.collectionid && (t.collectionid = n.collectionid),
                    n.subdocs.add(t);
                }),
                d.forEach((t) => n.subdocs.delete(t)),
                n.emit("subdocs", [{ loaded: h, added: c, removed: d }, n, r]),
                d.forEach((t) => t.destroy())),
                t.length <= e + 1
                  ? ((n._transactionCleanups = []),
                    n.emit("afterAllTransactions", [n, t]))
                  : tA(t, e + 1);
            }
          }
        },
        tv = (t, e, r = null, n = !0) => {
          let i = t._transactionCleanups,
            l = !1,
            s = null;
          null === t._transaction &&
            ((l = !0),
            (t._transaction = new ty(t, r, n)),
            i.push(t._transaction),
            1 === i.length && t.emit("beforeAllTransactions", [t]),
            t.emit("beforeTransaction", [t._transaction, t]));
          try {
            s = e(t._transaction);
          } finally {
            if (l) {
              let e = t._transaction === i[0];
              (t._transaction = null), e && tA(i, 0);
            }
          }
          return s;
        };
      class tI {
        constructor(t, e) {
          (this.gen = (function* (t) {
            let e = decoding.readVarUint(t.restDecoder);
            for (let r = 0; r < e; r++) {
              let e = decoding.readVarUint(t.restDecoder),
                r = t.readClient(),
                n = decoding.readVarUint(t.restDecoder);
              for (let i = 0; i < e; i++) {
                let e = t.readInfo();
                if (10 === e) {
                  let e = decoding.readVarUint(t.restDecoder);
                  yield new eQ(q(r, n), e), (n += e);
                } else if ((binary.BITS5 & e) != 0) {
                  let i = (e & (binary.BIT7 | binary.BIT8)) == 0,
                    l = new eX(
                      q(r, n),
                      null,
                      (e & binary.BIT8) === binary.BIT8 ? t.readLeftID() : null,
                      null,
                      (e & binary.BIT7) === binary.BIT7
                        ? t.readRightID()
                        : null,
                      i
                        ? t.readParentInfo()
                          ? t.readString()
                          : t.readLeftID()
                        : null,
                      i && (e & binary.BIT6) === binary.BIT6
                        ? t.readString()
                        : null,
                      eZ(t, e)
                    );
                  yield l, (n += l.length);
                } else {
                  let e = t.readLen();
                  yield new eU(q(r, n), e), (n += e);
                }
              }
            }
          })(t)),
            (this.curr = null),
            (this.done = !1),
            (this.filterSkips = e),
            this.next();
        }
        next() {
          do this.curr = this.gen.next().value || null;
          while (
            this.filterSkips &&
            null !== this.curr &&
            this.curr.constructor === eQ
          );
          return this.curr;
        }
      }
      class tU {
        constructor(t) {
          (this.currClient = 0),
            (this.startClock = 0),
            (this.written = 0),
            (this.encoder = t),
            (this.clientStructs = []);
        }
      }
      let tx = (t, e) => {
          if (t.constructor === eU) {
            let { client: r, clock: n } = t.id;
            return new eU(q(r, n + e), t.length - e);
          }
          if (t.constructor === eQ) {
            let { client: r, clock: n } = t.id;
            return new eQ(q(r, n + e), t.length - e);
          }
          {
            let { client: r, clock: n } = t.id;
            return new eX(
              q(r, n + e),
              null,
              q(r, n + e - 1),
              null,
              t.rightOrigin,
              t.parent,
              t.parentSub,
              t.content.splice(e)
            );
          }
        },
        tM = (t, e = N, r = V) => {
          if (1 === t.length) return t[0];
          let n = t.map((t) => new e(decoding.createDecoder(t))),
            i = n.map((t) => new tI(t, !0)),
            l = null,
            s = new r(),
            o = new tU(s);
          for (
            ;
            (i = i.filter((t) => null !== t.curr)).sort((t, e) => {
              if (t.curr.id.client !== e.curr.id.client)
                return e.curr.id.client - t.curr.id.client;
              {
                let r = t.curr.id.clock - e.curr.id.clock;
                return 0 === r
                  ? t.curr.constructor === e.curr.constructor
                    ? 0
                    : t.curr.constructor === eQ
                    ? 1
                    : -1
                  : r;
              }
            }),
              0 !== i.length;

          ) {
            let t = i[0],
              e = t.curr.id.client;
            if (null !== l) {
              let r = t.curr,
                n = !1;
              for (
                ;
                null !== r &&
                r.id.clock + r.length <= l.struct.id.clock + l.struct.length &&
                r.id.client >= l.struct.id.client;

              )
                (r = t.next()), (n = !0);
              if (
                null === r ||
                r.id.client !== e ||
                (n && r.id.clock > l.struct.id.clock + l.struct.length)
              )
                continue;
              if (e !== l.struct.id.client)
                tN(o, l.struct, l.offset),
                  (l = { struct: r, offset: 0 }),
                  t.next();
              else if (l.struct.id.clock + l.struct.length < r.id.clock) {
                if (l.struct.constructor === eQ)
                  l.struct.length = r.id.clock + r.length - l.struct.id.clock;
                else {
                  tN(o, l.struct, l.offset);
                  let t = r.id.clock - l.struct.id.clock - l.struct.length,
                    n = new eQ(q(e, l.struct.id.clock + l.struct.length), t);
                  l = { struct: n, offset: 0 };
                }
              } else {
                let e = l.struct.id.clock + l.struct.length - r.id.clock;
                e > 0 &&
                  (l.struct.constructor === eQ
                    ? (l.struct.length -= e)
                    : (r = tx(r, e))),
                  l.struct.mergeWith(r) ||
                    (tN(o, l.struct, l.offset),
                    (l = { struct: r, offset: 0 }),
                    t.next());
              }
            } else (l = { struct: t.curr, offset: 0 }), t.next();
            for (
              let r = t.curr;
              null !== r &&
              r.id.client === e &&
              r.id.clock === l.struct.id.clock + l.struct.length &&
              r.constructor !== eQ;
              r = t.next()
            )
              tN(o, l.struct, l.offset), (l = { struct: r, offset: 0 });
          }
          null !== l && (tN(o, l.struct, l.offset), (l = null)), tO(o);
          let c = n.map((t) => U(t)),
            h = A(c);
          return I(s, h), s.toUint8Array();
        },
        tL = (t) => {
          t.written > 0 &&
            (t.clientStructs.push({
              written: t.written,
              restEncoder: encoding.toUint8Array(t.encoder.restEncoder),
            }),
            (t.encoder.restEncoder = encoding.createEncoder()),
            (t.written = 0));
        },
        tN = (t, e, r) => {
          t.written > 0 && t.currClient !== e.id.client && tL(t),
            0 === t.written &&
              ((t.currClient = e.id.client),
              t.encoder.writeClient(e.id.client),
              encoding.writeVarUint(t.encoder.restEncoder, e.id.clock + r)),
            e.write(t.encoder, r),
            t.written++;
        },
        tO = (t) => {
          tL(t);
          let e = t.encoder.restEncoder;
          encoding.writeVarUint(e, t.clientStructs.length);
          for (let r = 0; r < t.clientStructs.length; r++) {
            let n = t.clientStructs[r];
            encoding.writeVarUint(e, n.written),
              encoding.writeUint8Array(e, n.restEncoder);
          }
        },
        tR = "You must not compute changes after the event-handler fired.";
      class tT {
        constructor(t, e) {
          (this.target = t),
            (this.currentTarget = t),
            (this.transaction = e),
            (this._changes = null),
            (this._keys = null),
            (this._delta = null),
            (this._path = null);
        }
        get path() {
          return (
            this._path || (this._path = tV(this.currentTarget, this.target))
          );
        }
        deletes(t) {
          return C(this.transaction.deleteSet, t.id);
        }
        get keys() {
          if (null === this._keys) {
            if (0 === this.transaction.doc._transactionCleanups.length)
              throw u.Ue(tR);
            let t = new Map(),
              e = this.target,
              r = this.transaction.changed.get(e);
            r.forEach((r) => {
              if (null !== r) {
                let n, i;
                let l = e._map.get(r);
                if (this.adds(l)) {
                  let t = l.left;
                  for (; null !== t && this.adds(t); ) t = t.left;
                  if (this.deletes(l)) {
                    if (!(null !== t && this.deletes(t))) return;
                    (n = "delete"), (i = s.Z$(t.content.getContent()));
                  } else
                    null !== t && this.deletes(t)
                      ? ((n = "update"), (i = s.Z$(t.content.getContent())))
                      : ((n = "add"), (i = void 0));
                } else {
                  if (!this.deletes(l)) return;
                  (n = "delete"), (i = s.Z$(l.content.getContent()));
                }
                t.set(r, { action: n, oldValue: i });
              }
            }),
              (this._keys = t);
          }
          return this._keys;
        }
        get delta() {
          return this.changes.delta;
        }
        adds(t) {
          return (
            t.id.clock >= (this.transaction.beforeState.get(t.id.client) || 0)
          );
        }
        get changes() {
          let t = this._changes;
          if (null === t) {
            if (0 === this.transaction.doc._transactionCleanups.length)
              throw u.Ue(tR);
            let e = this.target,
              r = p.Ue(),
              n = p.Ue(),
              i = [];
            t = { added: r, deleted: n, delta: i, keys: this.keys };
            let l = this.transaction.changed.get(e);
            if (l.has(null)) {
              let t = null,
                l = () => {
                  t && i.push(t);
                };
              for (let i = e._start; null !== i; i = i.right)
                i.deleted
                  ? this.deletes(i) &&
                    !this.adds(i) &&
                    ((null === t || void 0 === t.delete) &&
                      (l(), (t = { delete: 0 })),
                    (t.delete += i.length),
                    n.add(i))
                  : this.adds(i)
                  ? ((null === t || void 0 === t.insert) &&
                      (l(), (t = { insert: [] })),
                    (t.insert = t.insert.concat(i.content.getContent())),
                    r.add(i))
                  : ((null === t || void 0 === t.retain) &&
                      (l(), (t = { retain: 0 })),
                    (t.retain += i.length));
              null !== t && void 0 === t.retain && l();
            }
            this._changes = t;
          }
          return t;
        }
      }
      let tV = (t, e) => {
          let r = [];
          for (; null !== e._item && e !== t; ) {
            if (null !== e._item.parentSub) r.unshift(e._item.parentSub);
            else {
              let t = 0,
                n = e._item.parent._start;
              for (; n !== e._item && null !== n; )
                !n.deleted && t++, (n = n.right);
              r.unshift(t);
            }
            e = e._item.parent;
          }
          return r;
        },
        tB = 0;
      class tP {
        constructor(t, e) {
          (t.marker = !0),
            (this.p = t),
            (this.index = e),
            (this.timestamp = tB++);
        }
      }
      let tW = (t) => {
          t.timestamp = tB++;
        },
        tJ = (t, e, r) => {
          (t.p.marker = !1),
            (t.p = e),
            (e.marker = !0),
            (t.index = r),
            (t.timestamp = tB++);
        },
        tz = (t, e, r) => {
          if (t.length >= 80) {
            let n = t.reduce((t, e) => (t.timestamp < e.timestamp ? t : e));
            return tJ(n, e, r), n;
          }
          {
            let n = new tP(e, r);
            return t.push(n), n;
          }
        },
        tF = (t, e) => {
          if (null === t._start || 0 === e || null === t._searchMarker)
            return null;
          let r =
              0 === t._searchMarker.length
                ? null
                : t._searchMarker.reduce((t, r) =>
                    o.Wn(e - t.index) < o.Wn(e - r.index) ? t : r
                  ),
            n = t._start,
            i = 0;
          for (
            null !== r && ((n = r.p), (i = r.index), tW(r));
            null !== n.right && i < e;

          ) {
            if (!n.deleted && n.countable) {
              if (e < i + n.length) break;
              i += n.length;
            }
            n = n.right;
          }
          for (; null !== n.left && i > e; )
            !(n = n.left).deleted && n.countable && (i -= n.length);
          for (
            ;
            null !== n.left &&
            n.left.id.client === n.id.client &&
            n.left.id.clock + n.left.length === n.id.clock;

          )
            !(n = n.left).deleted && n.countable && (i -= n.length);
          return null !== r && o.Wn(r.index - i) < n.parent.length / 80
            ? (tJ(r, n, i), r)
            : tz(t._searchMarker, n, i);
        },
        t$ = (t, e, r) => {
          for (let n = t.length - 1; n >= 0; n--) {
            let i = t[n];
            if (r > 0) {
              let e = i.p;
              for (e.marker = !1; e && (e.deleted || !e.countable); )
                (e = e.left) &&
                  !e.deleted &&
                  e.countable &&
                  (i.index -= e.length);
              if (null === e || !0 === e.marker) {
                t.splice(n, 1);
                continue;
              }
              (i.p = e), (e.marker = !0);
            }
            (e < i.index || (r > 0 && e === i.index)) &&
              (i.index = o.Fp(e, i.index + r));
          }
        },
        tj = (t, e, r) => {
          let n = t,
            i = e.changedParentTypes;
          for (; c.Yu(i, t, () => []).push(r), null !== t._item; )
            t = t._item.parent;
          G(n._eH, r, e);
        };
      class tY {
        constructor() {
          (this._item = null),
            (this._map = new Map()),
            (this._start = null),
            (this.doc = null),
            (this._length = 0),
            (this._eH = Y()),
            (this._dEH = Y()),
            (this._searchMarker = null);
        }
        get parent() {
          return this._item ? this._item.parent : null;
        }
        _integrate(t, e) {
          (this.doc = t), (this._item = e);
        }
        _copy() {
          throw u.Nw();
        }
        clone() {
          throw u.Nw();
        }
        _write(t) {}
        get _first() {
          let t = this._start;
          for (; null !== t && t.deleted; ) t = t.right;
          return t;
        }
        _callObserver(t, e) {
          !t.local && this._searchMarker && (this._searchMarker.length = 0);
        }
        observe(t) {
          H(this._eH, t);
        }
        observeDeep(t) {
          H(this._dEH, t);
        }
        unobserve(t) {
          K(this._eH, t);
        }
        unobserveDeep(t) {
          K(this._dEH, t);
        }
        toJSON() {}
      }
      let tH = (t, e, r) => {
          e < 0 && (e = t._length + e), r < 0 && (r = t._length + r);
          let n = r - e,
            i = [],
            l = t._start;
          for (; null !== l && n > 0; ) {
            if (l.countable && !l.deleted) {
              let t = l.content.getContent();
              if (t.length <= e) e -= t.length;
              else {
                for (let r = e; r < t.length && n > 0; r++) i.push(t[r]), n--;
                e = 0;
              }
            }
            l = l.right;
          }
          return i;
        },
        tK = (t) => {
          let e = [],
            r = t._start;
          for (; null !== r; ) {
            if (r.countable && !r.deleted) {
              let t = r.content.getContent();
              for (let r = 0; r < t.length; r++) e.push(t[r]);
            }
            r = r.right;
          }
          return e;
        },
        tG = (t, e) => {
          let r = 0,
            n = t._start;
          for (; null !== n; ) {
            if (n.countable && !n.deleted) {
              let i = n.content.getContent();
              for (let n = 0; n < i.length; n++) e(i[n], r++, t);
            }
            n = n.right;
          }
        },
        tX = (t, e) => {
          let r = [];
          return (
            tG(t, (n, i) => {
              r.push(e(n, i, t));
            }),
            r
          );
        },
        tZ = (t) => {
          let e = t._start,
            r = null,
            n = 0;
          return {
            [Symbol.iterator]() {
              return this;
            },
            next: () => {
              if (null === r) {
                for (; null !== e && e.deleted; ) e = e.right;
                if (null === e) return { done: !0, value: void 0 };
                (r = e.content.getContent()), (n = 0), (e = e.right);
              }
              let t = r[n++];
              return r.length <= n && (r = null), { done: !1, value: t };
            },
          };
        },
        tq = (t, e) => {
          let r = tF(t, e),
            n = t._start;
          for (
            null !== r && ((n = r.p), (e -= r.index));
            null !== n;
            n = n.right
          )
            if (!n.deleted && n.countable) {
              if (e < n.length) return n.content.getContent()[e];
              e -= n.length;
            }
        },
        tQ = (t, e, r, n) => {
          let i = r,
            l = t.doc,
            s = l.clientID,
            o = l.store,
            c = null === r ? e._start : r.right,
            h = [],
            d = () => {
              h.length > 0 &&
                ((i = new eX(
                  q(s, ta(o, s)),
                  i,
                  i && i.lastId,
                  c,
                  c && c.id,
                  e,
                  null,
                  new eV(h)
                )).integrate(t, 0),
                (h = []));
            };
          n.forEach((r) => {
            if (null === r) h.push(r);
            else
              switch (r.constructor) {
                case Number:
                case Object:
                case Boolean:
                case Array:
                case String:
                  h.push(r);
                  break;
                default:
                  switch ((d(), r.constructor)) {
                    case Uint8Array:
                    case ArrayBuffer:
                      (i = new eX(
                        q(s, ta(o, s)),
                        i,
                        i && i.lastId,
                        c,
                        c && c.id,
                        e,
                        null,
                        new ex(new Uint8Array(r))
                      )).integrate(t, 0);
                      break;
                    case L:
                      (i = new eX(
                        q(s, ta(o, s)),
                        i,
                        i && i.lastId,
                        c,
                        c && c.id,
                        e,
                        null,
                        new eN(r)
                      )).integrate(t, 0);
                      break;
                    default:
                      if (r instanceof tY)
                        (i = new eX(
                          q(s, ta(o, s)),
                          i,
                          i && i.lastId,
                          c,
                          c && c.id,
                          e,
                          null,
                          new eH(r)
                        )).integrate(t, 0);
                      else
                        throw Error(
                          "Unexpected content type in insert operation"
                        );
                  }
              }
          }),
            d();
        },
        t0 = () => u.Ue("Length exceeded!"),
        t1 = (t, e, r, n) => {
          if (r > e._length) throw t0();
          if (0 === r)
            return (
              e._searchMarker && t$(e._searchMarker, r, n.length),
              tQ(t, e, null, n)
            );
          let i = r,
            l = tF(e, r),
            s = e._start;
          for (
            null !== l &&
            ((s = l.p),
            0 == (r -= l.index) &&
              (r += (s = s.prev) && s.countable && !s.deleted ? s.length : 0));
            null !== s;
            s = s.right
          )
            if (!s.deleted && s.countable) {
              if (r <= s.length) {
                r < s.length && tw(t, q(s.id.client, s.id.clock + r));
                break;
              }
              r -= s.length;
            }
          return (
            e._searchMarker && t$(e._searchMarker, i, n.length), tQ(t, e, s, n)
          );
        },
        t8 = (t, e, r) => {
          let n = (e._searchMarker || []).reduce(
              (t, e) => (e.index > t.index ? e : t),
              { index: 0, p: e._start }
            ),
            i = n.p;
          if (i) for (; i.right; ) i = i.right;
          return tQ(t, e, i, r);
        },
        t3 = (t, e, r, n) => {
          if (0 === n) return;
          let i = r,
            l = n,
            s = tF(e, r),
            o = e._start;
          for (
            null !== s && ((o = s.p), (r -= s.index));
            null !== o && r > 0;
            o = o.right
          )
            !o.deleted &&
              o.countable &&
              (r < o.length && tw(t, q(o.id.client, o.id.clock + r)),
              (r -= o.length));
          for (; n > 0 && null !== o; )
            o.deleted ||
              (n < o.length && tw(t, q(o.id.client, o.id.clock + n)),
              o.delete(t),
              (n -= o.length)),
              (o = o.right);
          if (n > 0) throw t0();
          e._searchMarker && t$(e._searchMarker, i, -l + n);
        },
        t6 = (t, e, r) => {
          let n = e._map.get(r);
          void 0 !== n && n.delete(t);
        },
        t4 = (t, e, r, n) => {
          let i;
          let l = e._map.get(r) || null,
            s = t.doc,
            o = s.clientID;
          if (null == n) i = new eV([n]);
          else
            switch (n.constructor) {
              case Number:
              case Object:
              case Boolean:
              case Array:
              case String:
                i = new eV([n]);
                break;
              case Uint8Array:
                i = new ex(n);
                break;
              case L:
                i = new eN(n);
                break;
              default:
                if (n instanceof tY) i = new eH(n);
                else throw Error("Unexpected content type");
            }
          new eX(
            q(o, ta(s.store, o)),
            l,
            l && l.lastId,
            null,
            null,
            e,
            r,
            i
          ).integrate(t, 0);
        },
        t5 = (t, e) => {
          let r = t._map.get(e);
          return void 0 === r || r.deleted
            ? void 0
            : r.content.getContent()[r.length - 1];
        },
        t7 = (t) => {
          let e = {};
          return (
            t._map.forEach((t, r) => {
              t.deleted || (e[r] = t.content.getContent()[t.length - 1]);
            }),
            e
          );
        },
        t2 = (t, e) => {
          let r = t._map.get(e);
          return void 0 !== r && !r.deleted;
        },
        t9 = (t, e) => {
          let r = {};
          return (
            t._map.forEach((t, n) => {
              let i = t;
              for (
                ;
                null !== i &&
                (!e.sv.has(i.id.client) ||
                  i.id.clock >= (e.sv.get(i.id.client) || 0));

              )
                i = i.left;
              null !== i &&
                to(i, e) &&
                (r[n] = i.content.getContent()[i.length - 1]);
            }),
            r
          );
        },
        et = (t) => m.BG(t.entries(), (t) => !t[1].deleted);
      class ee extends tT {
        constructor(t, e) {
          super(t, e), (this._transaction = e);
        }
      }
      class er extends tY {
        constructor() {
          super(), (this._prelimContent = []), (this._searchMarker = []);
        }
        static from(t) {
          let e = new er();
          return e.push(t), e;
        }
        _integrate(t, e) {
          super._integrate(t, e),
            this.insert(0, this._prelimContent),
            (this._prelimContent = null);
        }
        _copy() {
          return new er();
        }
        clone() {
          let t = new er();
          return (
            t.insert(
              0,
              this.toArray().map((t) => (t instanceof tY ? t.clone() : t))
            ),
            t
          );
        }
        get length() {
          return null === this._prelimContent
            ? this._length
            : this._prelimContent.length;
        }
        _callObserver(t, e) {
          super._callObserver(t, e), tj(this, t, new ee(this, t));
        }
        insert(t, e) {
          null !== this.doc
            ? tv(this.doc, (r) => {
                t1(r, this, t, e);
              })
            : this._prelimContent.splice(t, 0, ...e);
        }
        push(t) {
          null !== this.doc
            ? tv(this.doc, (e) => {
                t8(e, this, t);
              })
            : this._prelimContent.push(...t);
        }
        unshift(t) {
          this.insert(0, t);
        }
        delete(t, e = 1) {
          null !== this.doc
            ? tv(this.doc, (r) => {
                t3(r, this, t, e);
              })
            : this._prelimContent.splice(t, e);
        }
        get(t) {
          return tq(this, t);
        }
        toArray() {
          return tK(this);
        }
        slice(t = 0, e = this.length) {
          return tH(this, t, e);
        }
        toJSON() {
          return this.map((t) => (t instanceof tY ? t.toJSON() : t));
        }
        map(t) {
          return tX(this, t);
        }
        forEach(t) {
          tG(this, t);
        }
        [Symbol.iterator]() {
          return tZ(this);
        }
        _write(t) {
          t.writeTypeRef(eW);
        }
      }
      class en extends tT {
        constructor(t, e, r) {
          super(t, e), (this.keysChanged = r);
        }
      }
      class ei extends tY {
        constructor(t) {
          super(),
            (this._prelimContent = null),
            void 0 === t
              ? (this._prelimContent = new Map())
              : (this._prelimContent = new Map(t));
        }
        _integrate(t, e) {
          super._integrate(t, e),
            this._prelimContent.forEach((t, e) => {
              this.set(e, t);
            }),
            (this._prelimContent = null);
        }
        _copy() {
          return new ei();
        }
        clone() {
          let t = new ei();
          return (
            this.forEach((e, r) => {
              t.set(r, e instanceof tY ? e.clone() : e);
            }),
            t
          );
        }
        _callObserver(t, e) {
          tj(this, t, new en(this, t, e));
        }
        toJSON() {
          let t = {};
          return (
            this._map.forEach((e, r) => {
              if (!e.deleted) {
                let n = e.content.getContent()[e.length - 1];
                t[r] = n instanceof tY ? n.toJSON() : n;
              }
            }),
            t
          );
        }
        get size() {
          return [...et(this._map)].length;
        }
        keys() {
          return m.CA(et(this._map), (t) => t[0]);
        }
        values() {
          return m.CA(
            et(this._map),
            (t) => t[1].content.getContent()[t[1].length - 1]
          );
        }
        entries() {
          return m.CA(et(this._map), (t) => [
            t[0],
            t[1].content.getContent()[t[1].length - 1],
          ]);
        }
        forEach(t) {
          this._map.forEach((e, r) => {
            e.deleted || t(e.content.getContent()[e.length - 1], r, this);
          });
        }
        [Symbol.iterator]() {
          return this.entries();
        }
        delete(t) {
          null !== this.doc
            ? tv(this.doc, (e) => {
                t6(e, this, t);
              })
            : this._prelimContent.delete(t);
        }
        set(t, e) {
          return (
            null !== this.doc
              ? tv(this.doc, (r) => {
                  t4(r, this, t, e);
                })
              : this._prelimContent.set(t, e),
            e
          );
        }
        get(t) {
          return t5(this, t);
        }
        has(t) {
          return t2(this, t);
        }
        clear() {
          null !== this.doc
            ? tv(this.doc, (t) => {
                this.forEach(function (e, r, n) {
                  t6(t, n, r);
                });
              })
            : this._prelimContent.clear();
        }
        _write(t) {
          t.writeTypeRef(eJ);
        }
      }
      let el = (t, e) =>
        t === e ||
        ("object" == typeof t && "object" == typeof e && t && e && k.$m(t, e));
      class es {
        constructor(t, e, r, n) {
          (this.left = t),
            (this.right = e),
            (this.index = r),
            (this.currentAttributes = n);
        }
        forward() {
          (null === this.right && u.zR(), this.right.content.constructor === eR)
            ? this.right.deleted ||
              ed(this.currentAttributes, this.right.content)
            : this.right.deleted || (this.index += this.right.length),
            (this.left = this.right),
            (this.right = this.right.right);
        }
      }
      let eo = (t, e, r) => {
          for (; null !== e.right && r > 0; )
            e.right.content.constructor === eR
              ? e.right.deleted || ed(e.currentAttributes, e.right.content)
              : e.right.deleted ||
                (r < e.right.length &&
                  tw(t, q(e.right.id.client, e.right.id.clock + r)),
                (e.index += e.right.length),
                (r -= e.right.length)),
              (e.left = e.right),
              (e.right = e.right.right);
          return e;
        },
        ec = (t, e, r) => {
          let n = new Map(),
            i = tF(e, r);
          if (i) {
            let e = new es(i.p.left, i.p, i.index, n);
            return eo(t, e, r - i.index);
          }
          {
            let i = new es(null, e._start, 0, n);
            return eo(t, i, r);
          }
        },
        eh = (t, e, r, n) => {
          for (
            ;
            null !== r.right &&
            (!0 === r.right.deleted ||
              (r.right.content.constructor === eR &&
                el(n.get(r.right.content.key), r.right.content.value)));

          )
            r.right.deleted || n.delete(r.right.content.key), r.forward();
          let i = t.doc,
            l = i.clientID;
          n.forEach((n, s) => {
            let o = r.left,
              c = r.right,
              h = new eX(
                q(l, ta(i.store, l)),
                o,
                o && o.lastId,
                c,
                c && c.id,
                e,
                null,
                new eR(s, n)
              );
            h.integrate(t, 0), (r.right = h), r.forward();
          });
        },
        ed = (t, e) => {
          let { key: r, value: n } = e;
          null === n ? t.delete(r) : t.set(r, n);
        },
        ea = (t, e) => {
          for (
            ;
            null !== t.right &&
            (t.right.deleted ||
              (t.right.content.constructor === eR &&
                el(e[t.right.content.key] || null, t.right.content.value)));

          )
            t.forward();
        },
        eu = (t, e, r, n) => {
          let i = t.doc,
            l = i.clientID,
            s = new Map();
          for (let o in n) {
            let c = n[o],
              h = r.currentAttributes.get(o) || null;
            if (!el(h, c)) {
              s.set(o, h);
              let { left: n, right: d } = r;
              (r.right = new eX(
                q(l, ta(i.store, l)),
                n,
                n && n.lastId,
                d,
                d && d.id,
                e,
                null,
                new eR(o, c)
              )),
                r.right.integrate(t, 0),
                r.forward();
            }
          }
          return s;
        },
        eg = (t, e, r, n, i) => {
          r.currentAttributes.forEach((t, e) => {
            void 0 === i[e] && (i[e] = null);
          });
          let l = t.doc,
            s = l.clientID;
          ea(r, i);
          let o = eu(t, e, r, i),
            c =
              n.constructor === String
                ? new eB(n)
                : n instanceof tY
                ? new eH(n)
                : new eO(n),
            { left: h, right: d, index: a } = r;
          e._searchMarker && t$(e._searchMarker, r.index, c.getLength()),
            (d = new eX(
              q(s, ta(l.store, s)),
              h,
              h && h.lastId,
              d,
              d && d.id,
              e,
              null,
              c
            )).integrate(t, 0),
            (r.right = d),
            (r.index = a),
            r.forward(),
            eh(t, e, r, o);
        },
        ef = (t, e, r, n, i) => {
          let l = t.doc,
            s = l.clientID;
          ea(r, i);
          let o = eu(t, e, r, i);
          for (
            ;
            null !== r.right &&
            (n > 0 ||
              (o.size > 0 &&
                (r.right.deleted || r.right.content.constructor === eR)));

          ) {
            if (!r.right.deleted) {
              if (r.right.content.constructor === eR) {
                let { key: e, value: l } = r.right.content,
                  s = i[e];
                if (void 0 !== s) {
                  if (el(s, l)) o.delete(e);
                  else {
                    if (0 === n) break;
                    o.set(e, l);
                  }
                  r.right.delete(t);
                } else r.currentAttributes.set(e, l);
              } else
                n < r.right.length &&
                  tw(t, q(r.right.id.client, r.right.id.clock + n)),
                  (n -= r.right.length);
            }
            r.forward();
          }
          if (n > 0) {
            let i = "";
            for (; n > 0; n--) i += "\n";
            (r.right = new eX(
              q(s, ta(l.store, s)),
              r.left,
              r.left && r.left.lastId,
              r.right,
              r.right && r.right.id,
              e,
              null,
              new eB(i)
            )),
              r.right.integrate(t, 0),
              r.forward();
          }
          eh(t, e, r, o);
        },
        ep = (t, e, r, n, i) => {
          let l = e,
            s = c.Ue();
          for (; l && (!l.countable || l.deleted); ) {
            if (!l.deleted && l.content.constructor === eR) {
              let t = l.content;
              s.set(t.key, t);
            }
            l = l.right;
          }
          let o = 0,
            h = !1;
          for (; e !== l; ) {
            if ((r === e && (h = !0), !e.deleted)) {
              let r = e.content;
              if (r.constructor === eR) {
                let { key: l, value: c } = r,
                  d = n.get(l) || null;
                (s.get(l) === r && d !== c) ||
                  (e.delete(t),
                  o++,
                  h ||
                    (i.get(l) || null) !== c ||
                    d === c ||
                    (null === d ? i.delete(l) : i.set(l, d))),
                  h || e.deleted || ed(i, r);
              }
            }
            e = e.right;
          }
          return o;
        },
        ew = (t, e) => {
          for (; e && e.right && (e.right.deleted || !e.right.countable); )
            e = e.right;
          let r = new Set();
          for (; e && (e.deleted || !e.countable); ) {
            if (!e.deleted && e.content.constructor === eR) {
              let n = e.content.key;
              r.has(n) ? e.delete(t) : r.add(n);
            }
            e = e.left;
          }
        },
        e_ = (t) => {
          let e = 0;
          return (
            tv(t.doc, (r) => {
              let n = t._start,
                i = t._start,
                l = c.Ue(),
                s = c.JG(l);
              for (; i; )
                !1 === i.deleted &&
                  (i.content.constructor === eR
                    ? ed(s, i.content)
                    : ((e += ep(r, n, i, l, s)), (l = c.JG(s)), (n = i))),
                  (i = i.right);
            }),
            e
          );
        },
        em = (t) => {
          let e = new Set(),
            r = t.doc;
          for (let [n, i] of t.afterState.entries()) {
            let l = t.beforeState.get(n) || 0;
            i !== l &&
              tk(t, r.store.clients.get(n), l, i, (t) => {
                t.deleted ||
                  t.content.constructor !== eR ||
                  t.constructor === eU ||
                  e.add(t.parent);
              });
          }
          tv(r, (r) => {
            for (let n of (E(t, t.deleteSet, (t) => {
              if (
                t instanceof eU ||
                !t.parent._hasFormatting ||
                e.has(t.parent)
              )
                return;
              let n = t.parent;
              t.content.constructor === eR ? e.add(n) : ew(r, t);
            }),
            e))
              e_(n);
          });
        },
        ek = (t, e, r) => {
          let n = r,
            i = c.JG(e.currentAttributes),
            l = e.right;
          for (; r > 0 && null !== e.right; ) {
            if (!1 === e.right.deleted)
              switch (e.right.content.constructor) {
                case eH:
                case eO:
                case eB:
                  r < e.right.length &&
                    tw(t, q(e.right.id.client, e.right.id.clock + r)),
                    (r -= e.right.length),
                    e.right.delete(t);
              }
            e.forward();
          }
          l && ep(t, l, e.right, i, e.currentAttributes);
          let s = (e.left || e.right).parent;
          return s._searchMarker && t$(s._searchMarker, e.index, -n + r), e;
        };
      class ey extends tT {
        constructor(t, e, r) {
          super(t, e),
            (this.childListChanged = !1),
            (this.keysChanged = new Set()),
            r.forEach((t) => {
              null === t
                ? (this.childListChanged = !0)
                : this.keysChanged.add(t);
            });
        }
        get changes() {
          if (null === this._changes) {
            let t = {
              keys: this.keys,
              delta: this.delta,
              added: new Set(),
              deleted: new Set(),
            };
            this._changes = t;
          }
          return this._changes;
        }
        get delta() {
          if (null === this._delta) {
            let t = this.target.doc,
              e = [];
            tv(t, (t) => {
              let r = new Map(),
                n = new Map(),
                i = this.target._start,
                l = null,
                s = {},
                o = "",
                c = 0,
                h = 0,
                d = () => {
                  if (null !== l) {
                    let t = null;
                    switch (l) {
                      case "delete":
                        h > 0 && (t = { delete: h }), (h = 0);
                        break;
                      case "insert":
                        ("object" == typeof o || o.length > 0) &&
                          ((t = { insert: o }),
                          r.size > 0 &&
                            ((t.attributes = {}),
                            r.forEach((e, r) => {
                              null !== e && (t.attributes[r] = e);
                            }))),
                          (o = "");
                        break;
                      case "retain":
                        c > 0 &&
                          ((t = { retain: c }),
                          k.xb(s) || (t.attributes = k.f0({}, s))),
                          (c = 0);
                    }
                    t && e.push(t), (l = null);
                  }
                };
              for (; null !== i; ) {
                switch (i.content.constructor) {
                  case eH:
                  case eO:
                    this.adds(i)
                      ? this.deletes(i) ||
                        (d(),
                        (l = "insert"),
                        (o = i.content.getContent()[0]),
                        d())
                      : this.deletes(i)
                      ? ("delete" !== l && (d(), (l = "delete")), (h += 1))
                      : i.deleted ||
                        ("retain" !== l && (d(), (l = "retain")), (c += 1));
                    break;
                  case eB:
                    this.adds(i)
                      ? this.deletes(i) ||
                        ("insert" !== l && (d(), (l = "insert")),
                        (o += i.content.str))
                      : this.deletes(i)
                      ? ("delete" !== l && (d(), (l = "delete")),
                        (h += i.length))
                      : i.deleted ||
                        ("retain" !== l && (d(), (l = "retain")),
                        (c += i.length));
                    break;
                  case eR: {
                    let { key: e, value: o } = i.content;
                    if (this.adds(i)) {
                      if (!this.deletes(i)) {
                        let c = r.get(e) || null;
                        el(c, o)
                          ? null !== o && i.delete(t)
                          : ("retain" === l && d(),
                            el(o, n.get(e) || null) ? delete s[e] : (s[e] = o));
                      }
                    } else if (this.deletes(i)) {
                      n.set(e, o);
                      let t = r.get(e) || null;
                      el(t, o) || ("retain" === l && d(), (s[e] = t));
                    } else if (!i.deleted) {
                      n.set(e, o);
                      let r = s[e];
                      void 0 !== r &&
                        (el(r, o)
                          ? null !== r && i.delete(t)
                          : ("retain" === l && d(),
                            null === o ? delete s[e] : (s[e] = o)));
                    }
                    i.deleted || ("insert" === l && d(), ed(r, i.content));
                  }
                }
                i = i.right;
              }
              for (d(); e.length > 0; ) {
                let t = e[e.length - 1];
                if (void 0 !== t.retain && void 0 === t.attributes) e.pop();
                else break;
              }
            }),
              (this._delta = e);
          }
          return this._delta;
        }
      }
      class eb extends tY {
        constructor(t) {
          super(),
            (this._pending = void 0 !== t ? [() => this.insert(0, t)] : []),
            (this._searchMarker = []),
            (this._hasFormatting = !1);
        }
        get length() {
          return this._length;
        }
        _integrate(t, e) {
          super._integrate(t, e);
          try {
            this._pending.forEach((t) => t());
          } catch (t) {
            console.error(t);
          }
          this._pending = null;
        }
        _copy() {
          return new eb();
        }
        clone() {
          let t = new eb();
          return t.applyDelta(this.toDelta()), t;
        }
        _callObserver(t, e) {
          super._callObserver(t, e);
          let r = new ey(this, t, e);
          tj(this, t, r),
            !t.local && this._hasFormatting && (t._needFormattingCleanup = !0);
        }
        toString() {
          let t = "",
            e = this._start;
          for (; null !== e; )
            !e.deleted &&
              e.countable &&
              e.content.constructor === eB &&
              (t += e.content.str),
              (e = e.right);
          return t;
        }
        toJSON() {
          return this.toString();
        }
        applyDelta(t, { sanitize: e = !0 } = {}) {
          null !== this.doc
            ? tv(this.doc, (r) => {
                let n = new es(null, this._start, 0, new Map());
                for (let i = 0; i < t.length; i++) {
                  let l = t[i];
                  if (void 0 !== l.insert) {
                    let s =
                      e ||
                      "string" != typeof l.insert ||
                      i !== t.length - 1 ||
                      null !== n.right ||
                      "\n" !== l.insert.slice(-1)
                        ? l.insert
                        : l.insert.slice(0, -1);
                    ("string" != typeof s || s.length > 0) &&
                      eg(r, this, n, s, l.attributes || {});
                  } else
                    void 0 !== l.retain
                      ? ef(r, this, n, l.retain, l.attributes || {})
                      : void 0 !== l.delete && ek(r, n, l.delete);
                }
              })
            : this._pending.push(() => this.applyDelta(t));
        }
        toDelta(t, e, r) {
          let n = [],
            i = new Map(),
            l = this.doc,
            s = "",
            o = this._start;
          function c() {
            if (s.length > 0) {
              let t = {},
                e = !1;
              i.forEach((r, n) => {
                (e = !0), (t[n] = r);
              });
              let r = { insert: s };
              e && (r.attributes = t), n.push(r), (s = "");
            }
          }
          let h = () => {
            for (; null !== o; ) {
              if (to(o, t) || (void 0 !== e && to(o, e)))
                switch (o.content.constructor) {
                  case eB: {
                    let n = i.get("ychange");
                    void 0 === t || to(o, t)
                      ? void 0 === e || to(o, e)
                        ? void 0 !== n && (c(), i.delete("ychange"))
                        : (void 0 === n ||
                            n.user !== o.id.client ||
                            "added" !== n.type) &&
                          (c(),
                          i.set(
                            "ychange",
                            r ? r("added", o.id) : { type: "added" }
                          ))
                      : (void 0 === n ||
                          n.user !== o.id.client ||
                          "removed" !== n.type) &&
                        (c(),
                        i.set(
                          "ychange",
                          r ? r("removed", o.id) : { type: "removed" }
                        )),
                      (s += o.content.str);
                    break;
                  }
                  case eH:
                  case eO: {
                    c();
                    let t = { insert: o.content.getContent()[0] };
                    if (i.size > 0) {
                      let e = {};
                      (t.attributes = e),
                        i.forEach((t, r) => {
                          e[r] = t;
                        });
                    }
                    n.push(t);
                    break;
                  }
                  case eR:
                    to(o, t) && (c(), ed(i, o.content));
                }
              o = o.right;
            }
            c();
          };
          return (
            t || e
              ? tv(
                  l,
                  (r) => {
                    t && tc(r, t), e && tc(r, e), h();
                  },
                  "cleanup"
                )
              : h(),
            n
          );
        }
        insert(t, e, r) {
          if (e.length <= 0) return;
          let n = this.doc;
          null !== n
            ? tv(n, (n) => {
                let i = ec(n, this, t);
                r ||
                  ((r = {}),
                  i.currentAttributes.forEach((t, e) => {
                    r[e] = t;
                  })),
                  eg(n, this, i, e, r);
              })
            : this._pending.push(() => this.insert(t, e, r));
        }
        insertEmbed(t, e, r = {}) {
          let n = this.doc;
          null !== n
            ? tv(n, (n) => {
                let i = ec(n, this, t);
                eg(n, this, i, e, r);
              })
            : this._pending.push(() => this.insertEmbed(t, e, r));
        }
        delete(t, e) {
          if (0 === e) return;
          let r = this.doc;
          null !== r
            ? tv(r, (r) => {
                ek(r, ec(r, this, t), e);
              })
            : this._pending.push(() => this.delete(t, e));
        }
        format(t, e, r) {
          if (0 === e) return;
          let n = this.doc;
          null !== n
            ? tv(n, (n) => {
                let i = ec(n, this, t);
                null !== i.right && ef(n, this, i, e, r);
              })
            : this._pending.push(() => this.format(t, e, r));
        }
        removeAttribute(t) {
          null !== this.doc
            ? tv(this.doc, (e) => {
                t6(e, this, t);
              })
            : this._pending.push(() => this.removeAttribute(t));
        }
        setAttribute(t, e) {
          null !== this.doc
            ? tv(this.doc, (r) => {
                t4(r, this, t, e);
              })
            : this._pending.push(() => this.setAttribute(t, e));
        }
        getAttribute(t) {
          return t5(this, t);
        }
        getAttributes() {
          return t7(this);
        }
        _write(t) {
          t.writeTypeRef(ez);
        }
      }
      class eE {
        constructor(t, e = () => !0) {
          (this._filter = e),
            (this._root = t),
            (this._currentNode = t._start),
            (this._firstCall = !0);
        }
        [Symbol.iterator]() {
          return this;
        }
        next() {
          let t = this._currentNode,
            e = t && t.content && t.content.type;
          if (null !== t && (!this._firstCall || t.deleted || !this._filter(e)))
            do
              if (
                ((e = t.content.type),
                t.deleted ||
                  (e.constructor !== eC && e.constructor !== eS) ||
                  null === e._start)
              )
                for (; null !== t; ) {
                  if (null !== t.right) {
                    t = t.right;
                    break;
                  }
                  t = t.parent === this._root ? null : t.parent._item;
                }
              else t = e._start;
            while (null !== t && (t.deleted || !this._filter(t.content.type)));
          return ((this._firstCall = !1), null === t)
            ? { value: void 0, done: !0 }
            : ((this._currentNode = t), { value: t.content.type, done: !1 });
        }
      }
      class eS extends tY {
        constructor() {
          super(), (this._prelimContent = []);
        }
        get firstChild() {
          let t = this._first;
          return t ? t.content.getContent()[0] : null;
        }
        _integrate(t, e) {
          super._integrate(t, e),
            this.insert(0, this._prelimContent),
            (this._prelimContent = null);
        }
        _copy() {
          return new eS();
        }
        clone() {
          let t = new eS();
          return (
            t.insert(
              0,
              this.toArray().map((t) => (t instanceof tY ? t.clone() : t))
            ),
            t
          );
        }
        get length() {
          return null === this._prelimContent
            ? this._length
            : this._prelimContent.length;
        }
        createTreeWalker(t) {
          return new eE(this, t);
        }
        querySelector(t) {
          t = t.toUpperCase();
          let e = new eE(
              this,
              (e) => e.nodeName && e.nodeName.toUpperCase() === t
            ),
            r = e.next();
          return r.done ? null : r.value;
        }
        querySelectorAll(t) {
          return (
            (t = t.toUpperCase()),
            s.Dp(
              new eE(this, (e) => e.nodeName && e.nodeName.toUpperCase() === t)
            )
          );
        }
        _callObserver(t, e) {
          tj(this, t, new eD(this, e, t));
        }
        toString() {
          return tX(this, (t) => t.toString()).join("");
        }
        toJSON() {
          return this.toString();
        }
        toDOM(t = document, e = {}, r) {
          let n = t.createDocumentFragment();
          return (
            void 0 !== r && r._createAssociation(n, this),
            tG(this, (i) => {
              n.insertBefore(i.toDOM(t, e, r), null);
            }),
            n
          );
        }
        insert(t, e) {
          null !== this.doc
            ? tv(this.doc, (r) => {
                t1(r, this, t, e);
              })
            : this._prelimContent.splice(t, 0, ...e);
        }
        insertAfter(t, e) {
          if (null !== this.doc)
            tv(this.doc, (r) => {
              let n = t && t instanceof tY ? t._item : t;
              tQ(r, this, n, e);
            });
          else {
            let r = this._prelimContent,
              n = null === t ? 0 : r.findIndex((e) => e === t) + 1;
            if (0 === n && null !== t) throw u.Ue("Reference item not found");
            r.splice(n, 0, ...e);
          }
        }
        delete(t, e = 1) {
          null !== this.doc
            ? tv(this.doc, (r) => {
                t3(r, this, t, e);
              })
            : this._prelimContent.splice(t, e);
        }
        toArray() {
          return tK(this);
        }
        push(t) {
          this.insert(this.length, t);
        }
        unshift(t) {
          this.insert(0, t);
        }
        get(t) {
          return tq(this, t);
        }
        slice(t = 0, e = this.length) {
          return tH(this, t, e);
        }
        forEach(t) {
          tG(this, t);
        }
        _write(t) {
          t.writeTypeRef(e$);
        }
      }
      class eC extends eS {
        constructor(t = "UNDEFINED") {
          super(), (this.nodeName = t), (this._prelimAttrs = new Map());
        }
        get nextSibling() {
          let t = this._item ? this._item.next : null;
          return t ? t.content.type : null;
        }
        get prevSibling() {
          let t = this._item ? this._item.prev : null;
          return t ? t.content.type : null;
        }
        _integrate(t, e) {
          super._integrate(t, e),
            this._prelimAttrs.forEach((t, e) => {
              this.setAttribute(e, t);
            }),
            (this._prelimAttrs = null);
        }
        _copy() {
          return new eC(this.nodeName);
        }
        clone() {
          let t = new eC(this.nodeName),
            e = this.getAttributes();
          return (
            k.Ed(e, (e, r) => {
              "string" == typeof e && t.setAttribute(r, e);
            }),
            t.insert(
              0,
              this.toArray().map((t) => (t instanceof tY ? t.clone() : t))
            ),
            t
          );
        }
        toString() {
          let t = this.getAttributes(),
            e = [],
            r = [];
          for (let e in t) r.push(e);
          r.sort();
          let n = r.length;
          for (let i = 0; i < n; i++) {
            let n = r[i];
            e.push(n + '="' + t[n] + '"');
          }
          let i = this.nodeName.toLocaleLowerCase(),
            l = e.length > 0 ? " " + e.join(" ") : "";
          return `<${i}${l}>${super.toString()}</${i}>`;
        }
        removeAttribute(t) {
          null !== this.doc
            ? tv(this.doc, (e) => {
                t6(e, this, t);
              })
            : this._prelimAttrs.delete(t);
        }
        setAttribute(t, e) {
          null !== this.doc
            ? tv(this.doc, (r) => {
                t4(r, this, t, e);
              })
            : this._prelimAttrs.set(t, e);
        }
        getAttribute(t) {
          return t5(this, t);
        }
        hasAttribute(t) {
          return t2(this, t);
        }
        getAttributes(t) {
          return t ? t9(this, t) : t7(this);
        }
        toDOM(t = document, e = {}, r) {
          let n = t.createElement(this.nodeName),
            i = this.getAttributes();
          for (let t in i) {
            let e = i[t];
            "string" == typeof e && n.setAttribute(t, e);
          }
          return (
            tG(this, (i) => {
              n.appendChild(i.toDOM(t, e, r));
            }),
            void 0 !== r && r._createAssociation(n, this),
            n
          );
        }
        _write(t) {
          t.writeTypeRef(eF), t.writeKey(this.nodeName);
        }
      }
      class eD extends tT {
        constructor(t, e, r) {
          super(t, r),
            (this.childListChanged = !1),
            (this.attributesChanged = new Set()),
            e.forEach((t) => {
              null === t
                ? (this.childListChanged = !0)
                : this.attributesChanged.add(t);
            });
        }
      }
      class eA extends ei {
        constructor(t) {
          super(), (this.hookName = t);
        }
        _copy() {
          return new eA(this.hookName);
        }
        clone() {
          let t = new eA(this.hookName);
          return (
            this.forEach((e, r) => {
              t.set(r, e);
            }),
            t
          );
        }
        toDOM(t = document, e = {}, r) {
          let n;
          let i = e[this.hookName];
          return (
            (n =
              void 0 !== i
                ? i.createDom(this)
                : document.createElement(this.hookName)).setAttribute(
              "data-yjs-hook",
              this.hookName
            ),
            void 0 !== r && r._createAssociation(n, this),
            n
          );
        }
        _write(t) {
          t.writeTypeRef(ej), t.writeKey(this.hookName);
        }
      }
      class ev extends eb {
        get nextSibling() {
          let t = this._item ? this._item.next : null;
          return t ? t.content.type : null;
        }
        get prevSibling() {
          let t = this._item ? this._item.prev : null;
          return t ? t.content.type : null;
        }
        _copy() {
          return new ev();
        }
        clone() {
          let t = new ev();
          return t.applyDelta(this.toDelta()), t;
        }
        toDOM(t = document, e, r) {
          let n = t.createTextNode(this.toString());
          return void 0 !== r && r._createAssociation(n, this), n;
        }
        toString() {
          return this.toDelta()
            .map((t) => {
              let e = [];
              for (let r in t.attributes) {
                let n = [];
                for (let e in t.attributes[r])
                  n.push({ key: e, value: t.attributes[r][e] });
                n.sort((t, e) => (t.key < e.key ? -1 : 1)),
                  e.push({ nodeName: r, attrs: n });
              }
              e.sort((t, e) => (t.nodeName < e.nodeName ? -1 : 1));
              let r = "";
              for (let t = 0; t < e.length; t++) {
                let n = e[t];
                r += `<${n.nodeName}`;
                for (let t = 0; t < n.attrs.length; t++) {
                  let e = n.attrs[t];
                  r += ` ${e.key}="${e.value}"`;
                }
                r += ">";
              }
              r += t.insert;
              for (let t = e.length - 1; t >= 0; t--)
                r += `</${e[t].nodeName}>`;
              return r;
            })
            .join("");
        }
        toJSON() {
          return this.toString();
        }
        _write(t) {
          t.writeTypeRef(eY);
        }
      }
      class eI {
        constructor(t, e) {
          (this.id = t), (this.length = e);
        }
        get deleted() {
          throw u.Nw();
        }
        mergeWith(t) {
          return !1;
        }
        write(t, e, r) {
          throw u.Nw();
        }
        integrate(t, e) {
          throw u.Nw();
        }
      }
      class eU extends eI {
        get deleted() {
          return !0;
        }
        delete() {}
        mergeWith(t) {
          return (
            this.constructor === t.constructor &&
            ((this.length += t.length), !0)
          );
        }
        integrate(t, e) {
          e > 0 && ((this.id.clock += e), (this.length -= e)),
            tu(t.doc.store, this);
        }
        write(t, e) {
          t.writeInfo(0), t.writeLen(this.length - e);
        }
        getMissing(t, e) {
          return null;
        }
      }
      class ex {
        constructor(t) {
          this.content = t;
        }
        getLength() {
          return 1;
        }
        getContent() {
          return [this.content];
        }
        isCountable() {
          return !0;
        }
        copy() {
          return new ex(this.content);
        }
        splice(t) {
          throw u.Nw();
        }
        mergeWith(t) {
          return !1;
        }
        integrate(t, e) {}
        delete(t) {}
        gc(t) {}
        write(t, e) {
          t.writeBuf(this.content);
        }
        getRef() {
          return 3;
        }
      }
      class eM {
        constructor(t) {
          this.len = t;
        }
        getLength() {
          return this.len;
        }
        getContent() {
          return [];
        }
        isCountable() {
          return !1;
        }
        copy() {
          return new eM(this.len);
        }
        splice(t) {
          let e = new eM(this.len - t);
          return (this.len = t), e;
        }
        mergeWith(t) {
          return (this.len += t.len), !0;
        }
        integrate(t, e) {
          v(t.deleteSet, e.id.client, e.id.clock, this.len), e.markDeleted();
        }
        delete(t) {}
        gc(t) {}
        write(t, e) {
          t.writeLen(this.len - e);
        }
        getRef() {
          return 1;
        }
      }
      let eL = (t, e) =>
        new L({ guid: t, ...e, shouldLoad: e.shouldLoad || e.autoLoad || !1 });
      class eN {
        constructor(t) {
          t._item &&
            console.error(
              "This document was already integrated as a sub-document. You should create a second instance instead with the same guid."
            ),
            (this.doc = t);
          let e = {};
          (this.opts = e),
            t.gc || (e.gc = !1),
            t.autoLoad && (e.autoLoad = !0),
            null !== t.meta && (e.meta = t.meta);
        }
        getLength() {
          return 1;
        }
        getContent() {
          return [this.doc];
        }
        isCountable() {
          return !0;
        }
        copy() {
          return new eN(eL(this.doc.guid, this.opts));
        }
        splice(t) {
          throw u.Nw();
        }
        mergeWith(t) {
          return !1;
        }
        integrate(t, e) {
          (this.doc._item = e),
            t.subdocsAdded.add(this.doc),
            this.doc.shouldLoad && t.subdocsLoaded.add(this.doc);
        }
        delete(t) {
          t.subdocsAdded.has(this.doc)
            ? t.subdocsAdded.delete(this.doc)
            : t.subdocsRemoved.add(this.doc);
        }
        gc(t) {}
        write(t, e) {
          t.writeString(this.doc.guid), t.writeAny(this.opts);
        }
        getRef() {
          return 9;
        }
      }
      class eO {
        constructor(t) {
          this.embed = t;
        }
        getLength() {
          return 1;
        }
        getContent() {
          return [this.embed];
        }
        isCountable() {
          return !0;
        }
        copy() {
          return new eO(this.embed);
        }
        splice(t) {
          throw u.Nw();
        }
        mergeWith(t) {
          return !1;
        }
        integrate(t, e) {}
        delete(t) {}
        gc(t) {}
        write(t, e) {
          t.writeJSON(this.embed);
        }
        getRef() {
          return 5;
        }
      }
      class eR {
        constructor(t, e) {
          (this.key = t), (this.value = e);
        }
        getLength() {
          return 1;
        }
        getContent() {
          return [];
        }
        isCountable() {
          return !1;
        }
        copy() {
          return new eR(this.key, this.value);
        }
        splice(t) {
          throw u.Nw();
        }
        mergeWith(t) {
          return !1;
        }
        integrate(t, e) {
          let r = e.parent;
          (r._searchMarker = null), (r._hasFormatting = !0);
        }
        delete(t) {}
        gc(t) {}
        write(t, e) {
          t.writeKey(this.key), t.writeJSON(this.value);
        }
        getRef() {
          return 6;
        }
      }
      class eT {
        constructor(t) {
          this.arr = t;
        }
        getLength() {
          return this.arr.length;
        }
        getContent() {
          return this.arr;
        }
        isCountable() {
          return !0;
        }
        copy() {
          return new eT(this.arr);
        }
        splice(t) {
          let e = new eT(this.arr.slice(t));
          return (this.arr = this.arr.slice(0, t)), e;
        }
        mergeWith(t) {
          return (this.arr = this.arr.concat(t.arr)), !0;
        }
        integrate(t, e) {}
        delete(t) {}
        gc(t) {}
        write(t, e) {
          let r = this.arr.length;
          t.writeLen(r - e);
          for (let n = e; n < r; n++) {
            let e = this.arr[n];
            t.writeString(void 0 === e ? "undefined" : JSON.stringify(e));
          }
        }
        getRef() {
          return 2;
        }
      }
      class eV {
        constructor(t) {
          this.arr = t;
        }
        getLength() {
          return this.arr.length;
        }
        getContent() {
          return this.arr;
        }
        isCountable() {
          return !0;
        }
        copy() {
          return new eV(this.arr);
        }
        splice(t) {
          let e = new eV(this.arr.slice(t));
          return (this.arr = this.arr.slice(0, t)), e;
        }
        mergeWith(t) {
          return (this.arr = this.arr.concat(t.arr)), !0;
        }
        integrate(t, e) {}
        delete(t) {}
        gc(t) {}
        write(t, e) {
          let r = this.arr.length;
          t.writeLen(r - e);
          for (let n = e; n < r; n++) {
            let e = this.arr[n];
            t.writeAny(e);
          }
        }
        getRef() {
          return 8;
        }
      }
      class eB {
        constructor(t) {
          this.str = t;
        }
        getLength() {
          return this.str.length;
        }
        getContent() {
          return this.str.split("");
        }
        isCountable() {
          return !0;
        }
        copy() {
          return new eB(this.str);
        }
        splice(t) {
          let e = new eB(this.str.slice(t));
          this.str = this.str.slice(0, t);
          let r = this.str.charCodeAt(t - 1);
          return (
            r >= 55296 &&
              r <= 56319 &&
              ((this.str = this.str.slice(0, t - 1) + "�"),
              (e.str = "�" + e.str.slice(1))),
            e
          );
        }
        mergeWith(t) {
          return (this.str += t.str), !0;
        }
        integrate(t, e) {}
        delete(t) {}
        gc(t) {}
        write(t, e) {
          t.writeString(0 === e ? this.str : this.str.slice(e));
        }
        getRef() {
          return 4;
        }
      }
      let eP = [
          (t) => new er(),
          (t) => new ei(),
          (t) => new eb(),
          (t) => new eC(t.readKey()),
          (t) => new eS(),
          (t) => new eA(t.readKey()),
          (t) => new ev(),
        ],
        eW = 0,
        eJ = 1,
        ez = 2,
        eF = 3,
        e$ = 4,
        ej = 5,
        eY = 6;
      class eH {
        constructor(t) {
          this.type = t;
        }
        getLength() {
          return 1;
        }
        getContent() {
          return [this.type];
        }
        isCountable() {
          return !0;
        }
        copy() {
          return new eH(this.type._copy());
        }
        splice(t) {
          throw u.Nw();
        }
        mergeWith(t) {
          return !1;
        }
        integrate(t, e) {
          this.type._integrate(t.doc, e);
        }
        delete(t) {
          let e = this.type._start;
          for (; null !== e; )
            e.deleted
              ? e.id.clock < (t.beforeState.get(e.id.client) || 0) &&
                t._mergeStructs.push(e)
              : e.delete(t),
              (e = e.right);
          this.type._map.forEach((e) => {
            e.deleted
              ? e.id.clock < (t.beforeState.get(e.id.client) || 0) &&
                t._mergeStructs.push(e)
              : e.delete(t);
          }),
            t.changed.delete(this.type);
        }
        gc(t) {
          let e = this.type._start;
          for (; null !== e; ) e.gc(t, !0), (e = e.right);
          (this.type._start = null),
            this.type._map.forEach((e) => {
              for (; null !== e; ) e.gc(t, !0), (e = e.left);
            }),
            (this.type._map = new Map());
        }
        write(t, e) {
          this.type._write(t);
        }
        getRef() {
          return 7;
        }
      }
      let eK = (t, e) => {
          let r,
            n = e,
            i = 0;
          do
            i > 0 && (n = q(n.client, n.clock + i)),
              (r = tf(t, n)),
              (i = n.clock - r.id.clock),
              (n = r.redone);
          while (null !== n && r instanceof eX);
          return { item: r, diff: i };
        },
        eG = (t, e, r) => {
          let { client: n, clock: i } = e.id,
            l = new eX(
              q(n, i + r),
              e,
              q(n, i + r - 1),
              e.right,
              e.rightOrigin,
              e.parent,
              e.parentSub,
              e.content.splice(r)
            );
          return (
            e.deleted && l.markDeleted(),
            e.keep && (l.keep = !0),
            null !== e.redone &&
              (l.redone = q(e.redone.client, e.redone.clock + r)),
            (e.right = l),
            null !== l.right && (l.right.left = l),
            t._mergeStructs.push(l),
            null !== l.parentSub &&
              null === l.right &&
              l.parent._map.set(l.parentSub, l),
            (e.length = r),
            l
          );
        };
      class eX extends eI {
        constructor(t, e, r, n, i, l, s, o) {
          super(t, o.getLength()),
            (this.origin = r),
            (this.left = e),
            (this.right = n),
            (this.rightOrigin = i),
            (this.parent = l),
            (this.parentSub = s),
            (this.redone = null),
            (this.content = o),
            (this.info = this.content.isCountable() ? g.Qn : 0);
        }
        set marker(t) {
          (this.info & g.Ko) > 0 !== t && (this.info ^= g.Ko);
        }
        get marker() {
          return (this.info & g.Ko) > 0;
        }
        get keep() {
          return (this.info & g.Vw) > 0;
        }
        set keep(t) {
          this.keep !== t && (this.info ^= g.Vw);
        }
        get countable() {
          return (this.info & g.Qn) > 0;
        }
        get deleted() {
          return (this.info & g.CY) > 0;
        }
        set deleted(t) {
          this.deleted !== t && (this.info ^= g.CY);
        }
        markDeleted() {
          this.info |= g.CY;
        }
        getMissing(t, e) {
          if (
            this.origin &&
            this.origin.client !== this.id.client &&
            this.origin.clock >= ta(e, this.origin.client)
          )
            return this.origin.client;
          if (
            this.rightOrigin &&
            this.rightOrigin.client !== this.id.client &&
            this.rightOrigin.clock >= ta(e, this.rightOrigin.client)
          )
            return this.rightOrigin.client;
          if (
            this.parent &&
            this.parent.constructor === X &&
            this.id.client !== this.parent.client &&
            this.parent.clock >= ta(e, this.parent.client)
          )
            return this.parent.client;
          if (
            (this.origin &&
              ((this.left = t_(t, e, this.origin)),
              (this.origin = this.left.lastId)),
            this.rightOrigin &&
              ((this.right = tw(t, this.rightOrigin)),
              (this.rightOrigin = this.right.id)),
            (this.left && this.left.constructor === eU) ||
              (this.right && this.right.constructor === eU))
          )
            this.parent = null;
          else if (this.parent) {
            if (this.parent.constructor === X) {
              let t = tf(e, this.parent);
              t.constructor === eU
                ? (this.parent = null)
                : (this.parent = t.content.type);
            }
          } else
            this.left &&
              this.left.constructor === eX &&
              ((this.parent = this.left.parent),
              (this.parentSub = this.left.parentSub)),
              this.right &&
                this.right.constructor === eX &&
                ((this.parent = this.right.parent),
                (this.parentSub = this.right.parentSub));
          return null;
        }
        integrate(t, e) {
          if (
            (e > 0 &&
              ((this.id.clock += e),
              (this.left = t_(
                t,
                t.doc.store,
                q(this.id.client, this.id.clock - 1)
              )),
              (this.origin = this.left.lastId),
              (this.content = this.content.splice(e)),
              (this.length -= e)),
            this.parent)
          ) {
            if (
              (!this.left && (!this.right || null !== this.right.left)) ||
              (this.left && this.left.right !== this.right)
            ) {
              let e,
                r = this.left;
              if (null !== r) e = r.right;
              else if (null !== this.parentSub)
                for (
                  e = this.parent._map.get(this.parentSub) || null;
                  null !== e && null !== e.left;

                )
                  e = e.left;
              else e = this.parent._start;
              let n = new Set(),
                i = new Set();
              for (; null !== e && e !== this.right; ) {
                if ((i.add(e), n.add(e), Z(this.origin, e.origin))) {
                  if (e.id.client < this.id.client) (r = e), n.clear();
                  else if (Z(this.rightOrigin, e.rightOrigin)) break;
                } else if (
                  null !== e.origin &&
                  i.has(tf(t.doc.store, e.origin))
                )
                  n.has(tf(t.doc.store, e.origin)) || ((r = e), n.clear());
                else break;
                e = e.right;
              }
              this.left = r;
            }
            if (null !== this.left) {
              let t = this.left.right;
              (this.right = t), (this.left.right = this);
            } else {
              let t;
              if (null !== this.parentSub)
                for (
                  t = this.parent._map.get(this.parentSub) || null;
                  null !== t && null !== t.left;

                )
                  t = t.left;
              else (t = this.parent._start), (this.parent._start = this);
              this.right = t;
            }
            null !== this.right
              ? (this.right.left = this)
              : null !== this.parentSub &&
                (this.parent._map.set(this.parentSub, this),
                null !== this.left && this.left.delete(t)),
              null === this.parentSub &&
                this.countable &&
                !this.deleted &&
                (this.parent._length += this.length),
              tu(t.doc.store, this),
              this.content.integrate(t, this),
              tE(t, this.parent, this.parentSub),
              ((null !== this.parent._item && this.parent._item.deleted) ||
                (null !== this.parentSub && null !== this.right)) &&
                this.delete(t);
          } else new eU(this.id, this.length).integrate(t, 0);
        }
        get next() {
          let t = this.right;
          for (; null !== t && t.deleted; ) t = t.right;
          return t;
        }
        get prev() {
          let t = this.left;
          for (; null !== t && t.deleted; ) t = t.left;
          return t;
        }
        get lastId() {
          return 1 === this.length
            ? this.id
            : q(this.id.client, this.id.clock + this.length - 1);
        }
        mergeWith(t) {
          if (
            this.constructor === t.constructor &&
            Z(t.origin, this.lastId) &&
            this.right === t &&
            Z(this.rightOrigin, t.rightOrigin) &&
            this.id.client === t.id.client &&
            this.id.clock + this.length === t.id.clock &&
            this.deleted === t.deleted &&
            null === this.redone &&
            null === t.redone &&
            this.content.constructor === t.content.constructor &&
            this.content.mergeWith(t.content)
          ) {
            let e = this.parent._searchMarker;
            return (
              e &&
                e.forEach((e) => {
                  e.p === t &&
                    ((e.p = this),
                    !this.deleted &&
                      this.countable &&
                      (e.index -= this.length));
                }),
              t.keep && (this.keep = !0),
              (this.right = t.right),
              null !== this.right && (this.right.left = this),
              (this.length += t.length),
              !0
            );
          }
          return !1;
        }
        delete(t) {
          if (!this.deleted) {
            let e = this.parent;
            this.countable &&
              null === this.parentSub &&
              (e._length -= this.length),
              this.markDeleted(),
              v(t.deleteSet, this.id.client, this.id.clock, this.length),
              tE(t, e, this.parentSub),
              this.content.delete(t);
          }
        }
        gc(t, e) {
          if (!this.deleted) throw u.zR();
          this.content.gc(t),
            e
              ? tm(t, this, new eU(this.id, this.length))
              : (this.content = new eM(this.length));
        }
        write(t, e) {
          let r =
              e > 0 ? q(this.id.client, this.id.clock + e - 1) : this.origin,
            n = this.rightOrigin,
            i = this.parentSub,
            l =
              (this.content.getRef() & g.kr) |
              (null === r ? 0 : g.x1) |
              (null === n ? 0 : g.rc) |
              (null === i ? 0 : g.cq);
          if (
            (t.writeInfo(l),
            null !== r && t.writeLeftID(r),
            null !== n && t.writeRightID(n),
            null === r && null === n)
          ) {
            let e = this.parent;
            if (void 0 !== e._item) {
              let r = e._item;
              if (null === r) {
                let r = Q(e);
                t.writeParentInfo(!0), t.writeString(r);
              } else t.writeParentInfo(!1), t.writeLeftID(r.id);
            } else
              e.constructor === String
                ? (t.writeParentInfo(!0), t.writeString(e))
                : e.constructor === X
                ? (t.writeParentInfo(!1), t.writeLeftID(e))
                : u.zR();
            null !== i && t.writeString(i);
          }
          this.content.write(t, e);
        }
      }
      let eZ = (t, e) => eq[e & binary.BITS5](t),
        eq = [
          () => {
            u.zR();
          },
          (t) => new eM(t.readLen()),
          (t) => {
            let e = t.readLen(),
              r = [];
            for (let n = 0; n < e; n++) {
              let e = t.readString();
              "undefined" === e ? r.push(void 0) : r.push(JSON.parse(e));
            }
            return new eT(r);
          },
          (t) => new ex(t.readBuf()),
          (t) => new eB(t.readString()),
          (t) => new eO(t.readJSON()),
          (t) => new eR(t.readKey(), t.readJSON()),
          (t) => new eH(eP[t.readTypeRef()](t)),
          (t) => {
            let e = t.readLen(),
              r = [];
            for (let n = 0; n < e; n++) r.push(t.readAny());
            return new eV(r);
          },
          (t) => new eN(eL(t.readString(), t.readAny())),
          () => {
            u.zR();
          },
        ];
      class eQ extends null {
        get deleted() {
          return !0;
        }
        delete() {}
        mergeWith(t) {
          return (
            this.constructor === t.constructor &&
            ((this.length += t.length), !0)
          );
        }
        integrate(t, e) {
          error.unexpectedCase();
        }
        write(t, e) {
          t.writeInfo(10),
            encoding.writeVarUint(t.restEncoder, this.length - e);
        }
        getMissing(t, e) {
          return null;
        }
      }
      let e0 =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : {},
        e1 = "__ $YJS$ __";
      !0 === e0[e1] &&
        console.error(
          "Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438"
        ),
        (e0[e1] = !0);
    },
  },
]);
//# sourceMappingURL=91bbf309-aaf9ef7a7a89dd3c.js.map
