"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [146], {
        69180: function(t, e, r) {
            r.d(e, {
                $4: function() {
                    return tp
                },
                $_: function() {
                    return rt
                },
                BW: function() {
                    return tf
                },
                CO: function() {
                    return tv
                },
                D$: function() {
                    return Q
                },
                H6: function() {
                    return tX
                },
                MM: function() {
                    return e9
                },
                NG: function() {
                    return q
                },
                Ox: function() {
                    return tD
                },
                QW: function() {
                    return R
                },
                UQ: function() {
                    return E
                },
                Uq: function() {
                    return tS
                },
                VG: function() {
                    return x
                },
                Zi: function() {
                    return tw
                },
                aC: function() {
                    return tC
                },
                at: function() {
                    return tg
                },
                ay: function() {
                    return tK
                },
                ck: function() {
                    return rf
                },
                eI: function() {
                    return eQ
                },
                gJ: function() {
                    return tl
                },
                lt: function() {
                    return eq
                },
                og: function() {
                    return t_
                },
                or: function() {
                    return tE
                },
                sI: function() {
                    return eB
                },
                uY: function() {
                    return C
                },
                ud: function() {
                    return ea
                },
                w$: function() {
                    return tb
                },
                xv: function() {
                    return eK
                },
                zc: function() {
                    return rh
                }
            });
            var n = r(71657),
                i = r(47177),
                l = r(68053),
                s = r(22395),
                o = r(95434),
                c = r(4576),
                h = r(92632),
                d = r(50798),
                u = r(13475),
                a = r(55924),
                g = r(92871),
                f = r(45202),
                p = r(78254),
                w = r(9616),
                _ = r(59525),
                k = r(41393),
                m = r(48487);
            class y {
                constructor(t, e) {
                    this.clock = t, this.len = e
                }
            }
            class b {
                constructor() {
                    this.clients = new Map
                }
            }
            let E = (t, e, r) => e.clients.forEach((e, n) => {
                    let i = t.doc.store.clients.get(n);
                    for (let n = 0; n < e.length; n++) {
                        let l = e[n];
                        tH(t, i, l.clock, l.len, r)
                    }
                }),
                S = (t, e) => {
                    let r = 0,
                        n = t.length - 1;
                    for (; r <= n;) {
                        let i = l.GW((r + n) / 2),
                            s = t[i],
                            o = s.clock;
                        if (o <= e) {
                            if (e < o + s.len) return i;
                            r = i + 1
                        } else n = i - 1
                    }
                    return null
                },
                C = (t, e) => {
                    let r = t.clients.get(e.client);
                    return void 0 !== r && null !== S(r, e.clock)
                },
                D = t => {
                    t.clients.forEach(t => {
                        let e, r;
                        for (t.sort((t, e) => t.clock - e.clock), e = 1, r = 1; e < t.length; e++) {
                            let n = t[r - 1],
                                i = t[e];
                            n.clock + n.len >= i.clock ? n.len = l.Fp(n.len, i.clock + i.len - n.clock) : (r < e && (t[r] = i), r++)
                        }
                        t.length = r
                    })
                },
                v = t => {
                    let e = new b;
                    for (let r = 0; r < t.length; r++) t[r].clients.forEach((n, l) => {
                        if (!e.clients.has(l)) {
                            let s = n.slice();
                            for (let e = r + 1; e < t.length; e++) i.s7(s, t[e].clients.get(l) || []);
                            e.clients.set(l, s)
                        }
                    });
                    return D(e), e
                },
                A = (t, e, r, n) => {
                    s.Yu(t.clients, e, () => []).push(new y(r, n))
                },
                x = () => new b,
                M = t => {
                    let e = x();
                    return t.clients.forEach((t, r) => {
                        let n = [];
                        for (let e = 0; e < t.length; e++) {
                            let r = t[e];
                            if (r.deleted) {
                                let i = r.id.clock,
                                    l = r.length;
                                if (e + 1 < t.length)
                                    for (let r = t[e + 1]; e + 1 < t.length && r.deleted; r = t[++e + 1]) l += r.length;
                                n.push(new y(i, l))
                            }
                        }
                        n.length > 0 && e.clients.set(r, n)
                    }), e
                },
                I = (t, e) => {
                    o.uE(t.restEncoder, e.clients.size), e.clients.forEach((e, r) => {
                        t.resetDsCurVal(), o.uE(t.restEncoder, r);
                        let n = e.length;
                        o.uE(t.restEncoder, n);
                        for (let r = 0; r < n; r++) {
                            let n = e[r];
                            t.writeDsClock(n.clock), t.writeDsLen(n.len)
                        }
                    })
                },
                N = t => {
                    let e = new b,
                        r = c.yg(t.restDecoder);
                    for (let n = 0; n < r; n++) {
                        t.resetDsCurVal();
                        let r = c.yg(t.restDecoder),
                            n = c.yg(t.restDecoder);
                        if (n > 0) {
                            let i = s.Yu(e.clients, r, () => []);
                            for (let e = 0; e < n; e++) i.push(new y(t.readDsClock(), t.readDsLen()))
                        }
                    }
                    return e
                },
                O = (t, e, r) => {
                    let n = new b,
                        i = c.yg(t.restDecoder);
                    for (let l = 0; l < i; l++) {
                        t.resetDsCurVal();
                        let i = c.yg(t.restDecoder),
                            l = c.yg(t.restDecoder),
                            s = r.clients.get(i) || [],
                            o = tN(r, i);
                        for (let r = 0; r < l; r++) {
                            let r = t.readDsClock(),
                                l = r + t.readDsLen();
                            if (r < o) {
                                o < l && A(n, i, o, l - o);
                                let t = tL(s, r),
                                    c = s[t];
                                for (!c.deleted && c.id.clock < r && (s.splice(t + 1, 0, ra(e, c, r - c.id.clock)), t++); t < s.length;)
                                    if ((c = s[t++]).id.clock < l) c.deleted || (l < c.id.clock + c.length && s.splice(t, 0, ra(e, c, l - c.id.clock)), c.delete(e));
                                    else break
                            } else A(n, i, r, l - r)
                        }
                    }
                    if (n.clients.size > 0) {
                        let t = new V;
                        return o.uE(t.restEncoder, 0), I(t, n), t.toUint8Array()
                    }
                    return null
                },
                L = h.U7;
            class R extends n.y {
                constructor({
                    guid: t = h.k$(),
                    collectionid: e = null,
                    gc: r = !0,
                    gcFilter: n = () => !0,
                    meta: i = null,
                    autoLoad: l = !1,
                    shouldLoad: s = !0
                } = {}) {
                    super(), this.gc = r, this.gcFilter = n, this.clientID = L(), this.guid = t, this.collectionid = e, this.share = new Map, this.store = new tM, this._transaction = null, this._transactionCleanups = [], this.subdocs = new Set, this._item = null, this.shouldLoad = s, this.autoLoad = l, this.meta = i, this.isLoaded = !1, this.whenLoaded = d.Ue(t => {
                        this.on("load", () => {
                            this.isLoaded = !0, t(this)
                        })
                    })
                }
                load() {
                    let t = this._item;
                    null === t || this.shouldLoad || tK(t.parent.doc, t => {
                        t.subdocsLoaded.add(this)
                    }, null, !0), this.shouldLoad = !0
                }
                getSubdocs() {
                    return this.subdocs
                }
                getSubdocGuids() {
                    return new Set(Array.from(this.subdocs).map(t => t.guid))
                }
                transact(t, e = null) {
                    tK(this, t, e)
                }
                get(t, e = eh) {
                    let r = s.Yu(this.share, t, () => {
                            let t = new e;
                            return t._integrate(this, null), t
                        }),
                        n = r.constructor;
                    if (e !== eh && n !== e) {
                        if (n === eh) {
                            let n = new e;
                            n._map = r._map, r._map.forEach(t => {
                                for (; null !== t; t = t.left) t.parent = n
                            }), n._start = r._start;
                            for (let t = n._start; null !== t; t = t.right) t.parent = n;
                            return n._length = r._length, this.share.set(t, n), n._integrate(this, null), n
                        }
                        throw Error(`Type with the name ${t} has already been defined with a different constructor`)
                    }
                    return r
                }
                getArray(t = "") {
                    return this.get(t, eM)
                }
                getText(t = "") {
                    return this.get(t, eK)
                }
                getMap(t = "") {
                    return this.get(t, eN)
                }
                getXmlFragment(t = "") {
                    return this.get(t, eB)
                }
                toJSON() {
                    let t = {};
                    return this.share.forEach((e, r) => {
                        t[r] = e.toJSON()
                    }), t
                }
                destroy() {
                    i.Dp(this.subdocs).forEach(t => t.destroy());
                    let t = this._item;
                    if (null !== t) {
                        this._item = null;
                        let e = t.content;
                        e.doc = new R({
                            guid: this.guid,
                            ...e.opts,
                            shouldLoad: !1
                        }), e.doc._item = t, tK(t.parent.doc, r => {
                            let n = e.doc;
                            t.deleted || r.subdocsAdded.add(n), r.subdocsRemoved.add(this)
                        }, null, !0)
                    }
                    this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy()
                }
                on(t, e) {
                    super.on(t, e)
                }
                off(t, e) {
                    super.off(t, e)
                }
            }
            class U {
                constructor(t) {
                    this.restDecoder = t
                }
                resetDsCurVal() {}
                readDsClock() {
                    return c.yg(this.restDecoder)
                }
                readDsLen() {
                    return c.yg(this.restDecoder)
                }
            }
            class T extends U {
                readLeftID() {
                    return tg(c.yg(this.restDecoder), c.yg(this.restDecoder))
                }
                readRightID() {
                    return tg(c.yg(this.restDecoder), c.yg(this.restDecoder))
                }
                readClient() {
                    return c.yg(this.restDecoder)
                }
                readInfo() {
                    return c.kj(this.restDecoder)
                }
                readString() {
                    return c.kf(this.restDecoder)
                }
                readParentInfo() {
                    return 1 === c.yg(this.restDecoder)
                }
                readTypeRef() {
                    return c.yg(this.restDecoder)
                }
                readLen() {
                    return c.yg(this.restDecoder)
                }
                readAny() {
                    return c.v_(this.restDecoder)
                }
                readBuf() {
                    return u.f9(c.HN(this.restDecoder))
                }
                readJSON() {
                    return JSON.parse(c.kf(this.restDecoder))
                }
                readKey() {
                    return c.kf(this.restDecoder)
                }
            }
            class P {
                constructor(t) {
                    this.dsCurrVal = 0, this.restDecoder = t
                }
                resetDsCurVal() {
                    this.dsCurrVal = 0
                }
                readDsClock() {
                    return this.dsCurrVal += c.yg(this.restDecoder), this.dsCurrVal
                }
                readDsLen() {
                    let t = c.yg(this.restDecoder) + 1;
                    return this.dsCurrVal += t, t
                }
            }
            class J extends P {
                constructor(t) {
                    super(t), this.keys = [], c.yg(t), this.keyClockDecoder = new c.dD(c.HN(t)), this.clientDecoder = new c.UF(c.HN(t)), this.leftClockDecoder = new c.dD(c.HN(t)), this.rightClockDecoder = new c.dD(c.HN(t)), this.infoDecoder = new c.XW(c.HN(t), c.kj), this.stringDecoder = new c.sO(c.HN(t)), this.parentInfoDecoder = new c.XW(c.HN(t), c.kj), this.typeRefDecoder = new c.UF(c.HN(t)), this.lenDecoder = new c.UF(c.HN(t))
                }
                readLeftID() {
                    return new tu(this.clientDecoder.read(), this.leftClockDecoder.read())
                }
                readRightID() {
                    return new tu(this.clientDecoder.read(), this.rightClockDecoder.read())
                }
                readClient() {
                    return this.clientDecoder.read()
                }
                readInfo() {
                    return this.infoDecoder.read()
                }
                readString() {
                    return this.stringDecoder.read()
                }
                readParentInfo() {
                    return 1 === this.parentInfoDecoder.read()
                }
                readTypeRef() {
                    return this.typeRefDecoder.read()
                }
                readLen() {
                    return this.lenDecoder.read()
                }
                readAny() {
                    return c.v_(this.restDecoder)
                }
                readBuf() {
                    return c.HN(this.restDecoder)
                }
                readJSON() {
                    return c.v_(this.restDecoder)
                }
                readKey() {
                    let t = this.keyClockDecoder.read();
                    if (t < this.keys.length) return this.keys[t]; {
                        let t = this.stringDecoder.read();
                        return this.keys.push(t), t
                    }
                }
            }
            class H {
                constructor() {
                    this.restEncoder = o.Mf()
                }
                toUint8Array() {
                    return o._f(this.restEncoder)
                }
                resetDsCurVal() {}
                writeDsClock(t) {
                    o.uE(this.restEncoder, t)
                }
                writeDsLen(t) {
                    o.uE(this.restEncoder, t)
                }
            }
            class W extends H {
                writeLeftID(t) {
                    o.uE(this.restEncoder, t.client), o.uE(this.restEncoder, t.clock)
                }
                writeRightID(t) {
                    o.uE(this.restEncoder, t.client), o.uE(this.restEncoder, t.clock)
                }
                writeClient(t) {
                    o.uE(this.restEncoder, t)
                }
                writeInfo(t) {
                    o.$F(this.restEncoder, t)
                }
                writeString(t) {
                    o.uw(this.restEncoder, t)
                }
                writeParentInfo(t) {
                    o.uE(this.restEncoder, t ? 1 : 0)
                }
                writeTypeRef(t) {
                    o.uE(this.restEncoder, t)
                }
                writeLen(t) {
                    o.uE(this.restEncoder, t)
                }
                writeAny(t) {
                    o.EM(this.restEncoder, t)
                }
                writeBuf(t) {
                    o.mP(this.restEncoder, t)
                }
                writeJSON(t) {
                    o.uw(this.restEncoder, JSON.stringify(t))
                }
                writeKey(t) {
                    o.uw(this.restEncoder, t)
                }
            }
            class z {
                constructor() {
                    this.restEncoder = o.Mf(), this.dsCurrVal = 0
                }
                toUint8Array() {
                    return o._f(this.restEncoder)
                }
                resetDsCurVal() {
                    this.dsCurrVal = 0
                }
                writeDsClock(t) {
                    let e = t - this.dsCurrVal;
                    this.dsCurrVal = t, o.uE(this.restEncoder, e)
                }
                writeDsLen(t) {
                    0 === t && a.zR(), o.uE(this.restEncoder, t - 1), this.dsCurrVal += t
                }
            }
            class V extends z {
                constructor() {
                    super(), this.keyMap = new Map, this.keyClock = 0, this.keyClockEncoder = new o.sX, this.clientEncoder = new o.HE, this.leftClockEncoder = new o.sX, this.rightClockEncoder = new o.sX, this.infoEncoder = new o.GF(o.$F), this.stringEncoder = new o.TS, this.parentInfoEncoder = new o.GF(o.$F), this.typeRefEncoder = new o.HE, this.lenEncoder = new o.HE
                }
                toUint8Array() {
                    let t = o.Mf();
                    return o.uE(t, 0), o.mP(t, this.keyClockEncoder.toUint8Array()), o.mP(t, this.clientEncoder.toUint8Array()), o.mP(t, this.leftClockEncoder.toUint8Array()), o.mP(t, this.rightClockEncoder.toUint8Array()), o.mP(t, o._f(this.infoEncoder)), o.mP(t, this.stringEncoder.toUint8Array()), o.mP(t, o._f(this.parentInfoEncoder)), o.mP(t, this.typeRefEncoder.toUint8Array()), o.mP(t, this.lenEncoder.toUint8Array()), o.HK(t, o._f(this.restEncoder)), o._f(t)
                }
                writeLeftID(t) {
                    this.clientEncoder.write(t.client), this.leftClockEncoder.write(t.clock)
                }
                writeRightID(t) {
                    this.clientEncoder.write(t.client), this.rightClockEncoder.write(t.clock)
                }
                writeClient(t) {
                    this.clientEncoder.write(t)
                }
                writeInfo(t) {
                    this.infoEncoder.write(t)
                }
                writeString(t) {
                    this.stringEncoder.write(t)
                }
                writeParentInfo(t) {
                    this.parentInfoEncoder.write(t ? 1 : 0)
                }
                writeTypeRef(t) {
                    this.typeRefEncoder.write(t)
                }
                writeLen(t) {
                    this.lenEncoder.write(t)
                }
                writeAny(t) {
                    o.EM(this.restEncoder, t)
                }
                writeBuf(t) {
                    o.mP(this.restEncoder, t)
                }
                writeJSON(t) {
                    o.EM(this.restEncoder, t)
                }
                writeKey(t) {
                    let e = this.keyMap.get(t);
                    void 0 === e ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(t)) : this.keyClockEncoder.write(e)
                }
            }
            let $ = (t, e, r, n) => {
                    n = l.Fp(n, e[0].id.clock);
                    let i = tL(e, n);
                    o.uE(t.restEncoder, e.length - i), t.writeClient(r), o.uE(t.restEncoder, n);
                    let s = e[i];
                    s.write(t, n - s.id.clock);
                    for (let r = i + 1; r < e.length; r++) e[r].write(t, 0)
                },
                F = (t, e, r) => {
                    let n = new Map;
                    r.forEach((t, r) => {
                        tN(e, r) > t && n.set(r, t)
                    }), tI(e).forEach((t, e) => {
                        r.has(e) || n.set(e, 0)
                    }), o.uE(t.restEncoder, n.size), Array.from(n.entries()).sort((t, e) => e[0] - t[0]).forEach(([r, n]) => {
                        $(t, e.clients.get(r), r, n)
                    })
                },
                j = (t, e) => {
                    let r = s.Ue(),
                        n = c.yg(t.restDecoder);
                    for (let i = 0; i < n; i++) {
                        let n = c.yg(t.restDecoder),
                            i = Array(n),
                            l = t.readClient(),
                            s = c.yg(t.restDecoder);
                        r.set(l, {
                            i: 0,
                            refs: i
                        });
                        for (let r = 0; r < n; r++) {
                            let n = t.readInfo();
                            switch (g.kr & n) {
                                case 0:
                                    {
                                        let e = t.readLen();i[r] = new e1(tg(l, s), e),
                                        s += e;
                                        break
                                    }
                                case 10:
                                    {
                                        let e = c.yg(t.restDecoder);i[r] = new r_(tg(l, s), e),
                                        s += e;
                                        break
                                    }
                                default:
                                    {
                                        let o = (n & (g.rc | g.x1)) == 0,
                                            c = new rf(tg(l, s), null, (n & g.x1) === g.x1 ? t.readLeftID() : null, null, (n & g.rc) === g.rc ? t.readRightID() : null, o ? t.readParentInfo() ? e.get(t.readString()) : t.readLeftID() : null, o && (n & g.cq) === g.cq ? t.readString() : null, rp(t, n));i[r] = c,
                                        s += c.length
                                    }
                            }
                        }
                    }
                    return r
                },
                Y = (t, e, r) => {
                    let n = [],
                        i = Array.from(r.keys()).sort((t, e) => t - e);
                    if (0 === i.length) return null;
                    let l = () => {
                            if (0 === i.length) return null;
                            let t = r.get(i[i.length - 1]);
                            for (; t.refs.length === t.i;) {
                                if (i.pop(), !(i.length > 0)) return null;
                                t = r.get(i[i.length - 1])
                            }
                            return t
                        },
                        c = l();
                    if (null === c && 0 === n.length) return null;
                    let h = new tM,
                        d = new Map,
                        u = (t, e) => {
                            let r = d.get(t);
                            (null == r || r > e) && d.set(t, e)
                        },
                        a = c.refs[c.i++],
                        g = new Map,
                        f = () => {
                            for (let t of n) {
                                let e = t.id.client,
                                    n = r.get(e);
                                n ? (n.i--, h.clients.set(e, n.refs.slice(n.i)), r.delete(e), n.i = 0, n.refs = []) : h.clients.set(e, [t]), i = i.filter(t => t !== e)
                            }
                            n.length = 0
                        };
                    for (;;) {
                        if (a.constructor !== r_) {
                            let i = s.Yu(g, a.id.client, () => tN(e, a.id.client)),
                                l = i - a.id.clock;
                            if (l < 0) n.push(a), u(a.id.client, a.id.clock - 1), f();
                            else {
                                let i = a.getMissing(t, e);
                                if (null !== i) {
                                    n.push(a);
                                    let t = r.get(i) || {
                                        refs: [],
                                        i: 0
                                    };
                                    if (t.refs.length === t.i) u(i, tN(e, i)), f();
                                    else {
                                        a = t.refs[t.i++];
                                        continue
                                    }
                                } else(0 === l || l < a.length) && (a.integrate(t, l), g.set(a.id.client, a.id.clock + a.length))
                            }
                        }
                        if (n.length > 0) a = n.pop();
                        else if (null !== c && c.i < c.refs.length) a = c.refs[c.i++];
                        else {
                            if (null === (c = l())) break;
                            a = c.refs[c.i++]
                        }
                    }
                    if (h.clients.size > 0) {
                        let t = new V;
                        return F(t, h, new Map), o.uE(t.restEncoder, 0), {
                            missing: d,
                            update: t.toUint8Array()
                        }
                    }
                    return null
                },
                K = (t, e) => F(t, e.doc.store, e.beforeState),
                G = (t, e, r, n = new J(t)) => tK(e, t => {
                    t.local = !1;
                    let e = !1,
                        r = t.doc,
                        i = r.store,
                        l = j(n, r),
                        s = Y(t, i, l),
                        o = i.pendingStructs;
                    if (o) {
                        for (let [t, r] of o.missing)
                            if (r < tN(i, t)) {
                                e = !0;
                                break
                            }
                        if (s) {
                            for (let [t, e] of s.missing) {
                                let r = o.missing.get(t);
                                (null == r || r > e) && o.missing.set(t, e)
                            }
                            o.update = t8([o.update, s.update])
                        }
                    } else i.pendingStructs = s;
                    let h = O(n, t, i);
                    if (i.pendingDs) {
                        let e = new J(c.l1(i.pendingDs));
                        c.yg(e.restDecoder);
                        let r = O(e, t, i);
                        h && r ? i.pendingDs = t8([h, r]) : i.pendingDs = h || r
                    } else i.pendingDs = h;
                    if (e) {
                        let e = i.pendingStructs.update;
                        i.pendingStructs = null, B(t.doc, e)
                    }
                }, r, !1),
                B = (t, e, r, n = J) => {
                    let i = c.l1(e);
                    G(i, t, r, new n(i))
                },
                q = (t, e, r) => B(t, e, r, T),
                X = (t, e, r = new Map) => {
                    F(t, e.store, r), I(t, M(e.store))
                },
                Z = (t, e = new Uint8Array([0]), r = new V) => {
                    let n = te(e);
                    X(r, t, n);
                    let i = [r.toUint8Array()];
                    if (t.store.pendingDs && i.push(t.store.pendingDs), t.store.pendingStructs && i.push(t5(t.store.pendingStructs.update, e)), i.length > 1) {
                        if (r.constructor === W) return t0(i.map((t, e) => 0 === e ? t : t6(t)));
                        if (r.constructor === V) return t8(i)
                    }
                    return i[0]
                },
                Q = (t, e) => Z(t, e, new W),
                tt = t => {
                    let e = new Map,
                        r = c.yg(t.restDecoder);
                    for (let n = 0; n < r; n++) {
                        let r = c.yg(t.restDecoder),
                            n = c.yg(t.restDecoder);
                        e.set(r, n)
                    }
                    return e
                },
                te = t => tt(new U(c.l1(t))),
                tr = (t, e) => (o.uE(t.restEncoder, e.size), Array.from(e.entries()).sort((t, e) => e[0] - t[0]).forEach(([e, r]) => {
                    o.uE(t.restEncoder, e), o.uE(t.restEncoder, r)
                }), t),
                tn = (t, e) => tr(t, tI(e.store)),
                ti = (t, e = new z) => (t instanceof Map ? tr(e, t) : tn(e, t), e.toUint8Array()),
                tl = t => ti(t, new H);
            class ts {
                constructor() {
                    this.l = []
                }
            }
            let to = () => new ts,
                tc = (t, e) => t.l.push(e),
                th = (t, e) => {
                    let r = t.l,
                        n = r.length;
                    t.l = r.filter(t => e !== t), n === t.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.")
                },
                td = (t, e, r) => f.PP(t.l, [e, r]);
            class tu {
                constructor(t, e) {
                    this.client = t, this.clock = e
                }
            }
            let ta = (t, e) => t === e || null !== t && null !== e && t.client === e.client && t.clock === e.clock,
                tg = (t, e) => new tu(t, e),
                tf = t => {
                    for (let [e, r] of t.doc.share.entries())
                        if (r === t) return e;
                    throw a.zR()
                },
                tp = (t, e) => {
                    for (; null !== e;) {
                        if (e.parent === t) return !0;
                        e = e.parent._item
                    }
                    return !1
                };
            class tw {
                constructor(t, e, r, n = 0) {
                    this.type = t, this.tname = e, this.item = r, this.assoc = n
                }
            }
            let t_ = t => new tw(null == t.type ? null : tg(t.type.client, t.type.clock), t.tname || null, null == t.item ? null : tg(t.item.client, t.item.clock), null == t.assoc ? 0 : t.assoc);
            class tk {
                constructor(t, e, r = 0) {
                    this.type = t, this.index = e, this.assoc = r
                }
            }
            let tm = (t, e, r = 0) => new tk(t, e, r),
                ty = (t, e, r) => {
                    let n = null,
                        i = null;
                    return null === t._item ? i = tf(t) : n = tg(t._item.id.client, t._item.id.clock), new tw(n, i, e, r)
                },
                tb = (t, e, r = 0) => {
                    let n = t._start;
                    if (r < 0) {
                        if (0 === e) return ty(t, null, r);
                        e--
                    }
                    for (; null !== n;) {
                        if (!n.deleted && n.countable) {
                            if (n.length > e) return ty(t, tg(n.id.client, n.id.clock + e), r);
                            e -= n.length
                        }
                        if (null === n.right && r < 0) return ty(t, n.lastId, r);
                        n = n.right
                    }
                    return ty(t, null, r)
                },
                tE = (t, e) => {
                    let r = e.store,
                        n = t.item,
                        i = t.type,
                        l = t.tname,
                        s = t.assoc,
                        o = null,
                        c = 0;
                    if (null !== n) {
                        if (tN(r, n.client) <= n.clock) return null;
                        let t = rd(r, n),
                            e = t.item;
                        if (!(e instanceof rf)) return null;
                        if (null === (o = e.parent)._item || !o._item.deleted) {
                            c = e.deleted || !e.countable ? 0 : t.diff + (s >= 0 ? 0 : 1);
                            let r = e.left;
                            for (; null !== r;) !r.deleted && r.countable && (c += r.length), r = r.left
                        }
                    } else {
                        if (null !== l) o = e.get(l);
                        else if (null !== i) {
                            if (tN(r, i.client) <= i.clock) return null;
                            let {
                                item: t
                            } = rd(r, i);
                            if (!(t instanceof rf) || !(t.content instanceof rh)) return null;
                            o = t.content.type
                        } else throw a.zR();
                        c = s >= 0 ? o._length : 0
                    }
                    return tm(o, c, t.assoc)
                },
                tS = (t, e) => t === e || null !== t && null !== e && t.tname === e.tname && ta(t.item, e.item) && ta(t.type, e.type) && t.assoc === e.assoc;
            class tC {
                constructor(t, e) {
                    this.ds = t, this.sv = e
                }
            }
            let tD = (t, e) => new tC(t, e);
            tD(x(), new Map);
            let tv = t => tD(M(t.store), tI(t.store)),
                tA = (t, e) => void 0 === e ? !t.deleted : e.sv.has(t.id.client) && (e.sv.get(t.id.client) || 0) > t.id.clock && !C(e.ds, t.id),
                tx = (t, e) => {
                    let r = s.Yu(t.meta, tx, p.Ue),
                        n = t.doc.store;
                    r.has(e) || (e.sv.forEach((e, r) => {
                        e < tN(n, r) && tT(t, tg(r, e))
                    }), E(t, e.ds, t => {}), r.add(e))
                };
            class tM {
                constructor() {
                    this.clients = new Map, this.pendingStructs = null, this.pendingDs = null
                }
            }
            let tI = t => {
                    let e = new Map;
                    return t.clients.forEach((t, r) => {
                        let n = t[t.length - 1];
                        e.set(r, n.id.clock + n.length)
                    }), e
                },
                tN = (t, e) => {
                    let r = t.clients.get(e);
                    if (void 0 === r) return 0;
                    let n = r[r.length - 1];
                    return n.id.clock + n.length
                },
                tO = (t, e) => {
                    let r = t.clients.get(e.id.client);
                    if (void 0 === r) r = [], t.clients.set(e.id.client, r);
                    else {
                        let t = r[r.length - 1];
                        if (t.id.clock + t.length !== e.id.clock) throw a.zR()
                    }
                    r.push(e)
                },
                tL = (t, e) => {
                    let r = 0,
                        n = t.length - 1,
                        i = t[n],
                        s = i.id.clock;
                    if (s === e) return n;
                    let o = l.GW(e / (s + i.length - 1) * n);
                    for (; r <= n;) {
                        if ((s = (i = t[o]).id.clock) <= e) {
                            if (e < s + i.length) return o;
                            r = o + 1
                        } else n = o - 1;
                        o = l.GW((r + n) / 2)
                    }
                    throw a.zR()
                },
                tR = (t, e) => {
                    let r = t.clients.get(e.client);
                    return r[tL(r, e.clock)]
                },
                tU = (t, e, r) => {
                    let n = tL(e, r),
                        i = e[n];
                    return i.id.clock < r && i instanceof rf ? (e.splice(n + 1, 0, ra(t, i, r - i.id.clock)), n + 1) : n
                },
                tT = (t, e) => {
                    let r = t.doc.store.clients.get(e.client);
                    return r[tU(t, r, e.clock)]
                },
                tP = (t, e, r) => {
                    let n = e.clients.get(r.client),
                        i = tL(n, r.clock),
                        l = n[i];
                    return r.clock !== l.id.clock + l.length - 1 && l.constructor !== e1 && n.splice(i + 1, 0, ra(t, l, r.clock - l.id.clock + 1)), l
                },
                tJ = (t, e, r) => {
                    let n = t.clients.get(e.id.client);
                    n[tL(n, e.id.clock)] = r
                },
                tH = (t, e, r, n, i) => {
                    let l;
                    if (0 === n) return;
                    let s = r + n,
                        o = tU(t, e, r);
                    do s < (l = e[o++]).id.clock + l.length && tU(t, e, s), i(l); while (o < e.length && e[o].id.clock < s)
                };
            class tW {
                constructor(t, e, r) {
                    this.doc = t, this.deleteSet = new b, this.beforeState = tI(t.store), this.afterState = new Map, this.changed = new Map, this.changedParentTypes = new Map, this._mergeStructs = [], this.origin = e, this.meta = new Map, this.local = r, this.subdocsAdded = new Set, this.subdocsRemoved = new Set, this.subdocsLoaded = new Set
                }
            }
            let tz = (t, e) => !!(0 !== e.deleteSet.clients.size || s.Yj(e.afterState, (t, r) => e.beforeState.get(r) !== t)) && (D(e.deleteSet), K(t, e), I(t, e.deleteSet), !0),
                tV = (t, e, r) => {
                    let n = e._item;
                    (null === n || n.id.clock < (t.beforeState.get(n.id.client) || 0) && !n.deleted) && s.Yu(t.changed, e, p.Ue).add(r)
                },
                t$ = (t, e) => {
                    let r = t[e - 1],
                        n = t[e];
                    r.deleted === n.deleted && r.constructor === n.constructor && r.mergeWith(n) && (t.splice(e, 1), n instanceof rf && null !== n.parentSub && n.parent._map.get(n.parentSub) === n && n.parent._map.set(n.parentSub, r))
                },
                tF = (t, e, r) => {
                    for (let [n, i] of t.clients.entries()) {
                        let t = e.clients.get(n);
                        for (let n = i.length - 1; n >= 0; n--) {
                            let l = i[n],
                                s = l.clock + l.len;
                            for (let n = tL(t, l.clock), i = t[n]; n < t.length && i.id.clock < s; i = t[++n]) {
                                let i = t[n];
                                if (l.clock + l.len <= i.id.clock) break;
                                i instanceof rf && i.deleted && !i.keep && r(i) && i.gc(e, !1)
                            }
                        }
                    }
                },
                tj = (t, e) => {
                    t.clients.forEach((t, r) => {
                        let n = e.clients.get(r);
                        for (let e = t.length - 1; e >= 0; e--) {
                            let r = t[e],
                                i = l.VV(n.length - 1, 1 + tL(n, r.clock + r.len - 1));
                            for (let t = i, e = n[t]; t > 0 && e.id.clock >= r.clock; e = n[--t]) t$(n, t)
                        }
                    })
                },
                tY = (t, e) => {
                    if (e < t.length) {
                        let r = t[e],
                            n = r.doc,
                            i = n.store,
                            s = r.deleteSet,
                            o = r._mergeStructs;
                        try {
                            D(s), r.afterState = tI(r.doc.store), n._transaction = null, n.emit("beforeObserverCalls", [r, n]);
                            let t = [];
                            r.changed.forEach((e, n) => t.push(() => {
                                null !== n._item && n._item.deleted || n._callObserver(r, e)
                            })), t.push(() => {
                                r.changedParentTypes.forEach((e, n) => t.push(() => {
                                    null !== n._item && n._item.deleted || ((e = e.filter(t => null === t.target._item || !t.target._item.deleted)).forEach(t => {
                                        t.currentTarget = n
                                    }), e.sort((t, e) => t.path.length - e.path.length), td(n._dEH, e, r))
                                })), t.push(() => n.emit("afterTransaction", [r, n]))
                            }), (0, f.PP)(t, [])
                        } finally {
                            n.gc && tF(s, i, n.gcFilter), tj(s, i), r.afterState.forEach((t, e) => {
                                let n = r.beforeState.get(e) || 0;
                                if (n !== t) {
                                    let t = i.clients.get(e),
                                        r = l.Fp(tL(t, n), 1);
                                    for (let e = t.length - 1; e >= r; e--) t$(t, e)
                                }
                            });
                            for (let t = 0; t < o.length; t++) {
                                let {
                                    client: e,
                                    clock: r
                                } = o[t].id, n = i.clients.get(e), l = tL(n, r);
                                l + 1 < n.length && t$(n, l + 1), l > 0 && t$(n, l)
                            }
                            if (r.local || r.afterState.get(n.clientID) === r.beforeState.get(n.clientID) || (w.S0(w.ud, w.Pl, "[yjs] ", w.YW, w.hM, "Changed the client-id because another client seems to be using it."), n.clientID = L()), n.emit("afterTransactionCleanup", [r, n]), n._observers.has("update")) {
                                let t = new W,
                                    e = tz(t, r);
                                e && n.emit("update", [t.toUint8Array(), r.origin, n, r])
                            }
                            if (n._observers.has("updateV2")) {
                                let t = new V,
                                    e = tz(t, r);
                                e && n.emit("updateV2", [t.toUint8Array(), r.origin, n, r])
                            }
                            let {
                                subdocsAdded: c,
                                subdocsLoaded: h,
                                subdocsRemoved: d
                            } = r;
                            (c.size > 0 || d.size > 0 || h.size > 0) && (c.forEach(t => {
                                t.clientID = n.clientID, null == t.collectionid && (t.collectionid = n.collectionid), n.subdocs.add(t)
                            }), d.forEach(t => n.subdocs.delete(t)), n.emit("subdocs", [{
                                loaded: h,
                                added: c,
                                removed: d
                            }, n, r]), d.forEach(t => t.destroy())), t.length <= e + 1 ? (n._transactionCleanups = [], n.emit("afterAllTransactions", [n, t])) : tY(t, e + 1)
                        }
                    }
                },
                tK = (t, e, r = null, n = !0) => {
                    let i = t._transactionCleanups,
                        l = !1;
                    null === t._transaction && (l = !0, t._transaction = new tW(t, r, n), i.push(t._transaction), 1 === i.length && t.emit("beforeAllTransactions", [t]), t.emit("beforeTransaction", [t._transaction, t]));
                    try {
                        e(t._transaction)
                    } finally {
                        l && i[0] === t._transaction && tY(i, 0)
                    }
                };
            class tG {
                constructor(t, e) {
                    this.insertions = e, this.deletions = t, this.meta = new Map
                }
            }
            let tB = (t, e, r) => {
                    E(t, r.deletions, t => {
                        t instanceof rf && e.scope.some(e => tp(e, t)) && ru(t, !1)
                    })
                },
                tq = (t, e, r) => {
                    let n = null,
                        i = null,
                        l = t.doc,
                        s = t.scope;
                    if (tK(l, r => {
                            for (; e.length > 0 && null === n;) {
                                let i = l.store,
                                    o = e.pop(),
                                    c = new Set,
                                    h = [],
                                    d = !1;
                                E(r, o.insertions, t => {
                                    if (t instanceof rf) {
                                        if (null !== t.redone) {
                                            let {
                                                item: e,
                                                diff: n
                                            } = rd(i, t.id);
                                            n > 0 && (e = tT(r, tg(e.id.client, e.id.clock + n))), t = e
                                        }!t.deleted && s.some(e => tp(e, t)) && h.push(t)
                                    }
                                }), E(r, o.deletions, t => {
                                    t instanceof rf && s.some(e => tp(e, t)) && !C(o.insertions, t.id) && c.add(t)
                                }), c.forEach(e => {
                                    d = null !== rg(r, e, c, o.insertions, t.ignoreRemoteMapChanges) || d
                                });
                                for (let e = h.length - 1; e >= 0; e--) {
                                    let n = h[e];
                                    t.deleteFilter(n) && (n.delete(r), d = !0)
                                }
                                n = d ? o : null
                            }
                            r.changed.forEach((t, e) => {
                                t.has(null) && e._searchMarker && (e._searchMarker.length = 0)
                            }), i = r
                        }, t), null != n) {
                        let e = i.changedParentTypes;
                        t.emit("stack-item-popped", [{
                            stackItem: n,
                            type: r,
                            changedParentTypes: e
                        }, t])
                    }
                    return n
                };
            class tX extends n.y {
                constructor(t, {
                    captureTimeout: e = 500,
                    captureTransaction: r = t => !0,
                    deleteFilter: n = () => !0,
                    trackedOrigins: i = new Set([null]),
                    ignoreRemoteMapChanges: l = !1
                } = {}) {
                    super(), this.scope = [], this.addToScope(t), this.deleteFilter = n, i.add(this), this.trackedOrigins = i, this.captureTransaction = r, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.doc = this.scope[0].doc, this.lastChange = 0, this.ignoreRemoteMapChanges = l, this.afterTransactionHandler = t => {
                        if (!this.captureTransaction(t) || !this.scope.some(e => t.changedParentTypes.has(e)) || !this.trackedOrigins.has(t.origin) && (!t.origin || !this.trackedOrigins.has(t.origin.constructor))) return;
                        let r = this.undoing,
                            n = this.redoing,
                            i = r ? this.redoStack : this.undoStack;
                        r ? this.stopCapturing() : n || this.clear(!1, !0);
                        let l = new b;
                        t.afterState.forEach((e, r) => {
                            let n = t.beforeState.get(r) || 0,
                                i = e - n;
                            i > 0 && A(l, r, n, i)
                        });
                        let s = _.ZG(),
                            o = !1;
                        if (s - this.lastChange < e && i.length > 0 && !r && !n) {
                            let e = i[i.length - 1];
                            e.deletions = v([e.deletions, t.deleteSet]), e.insertions = v([e.insertions, l])
                        } else i.push(new tG(t.deleteSet, l)), o = !0;
                        r || n || (this.lastChange = s), E(t, t.deleteSet, t => {
                            t instanceof rf && this.scope.some(e => tp(e, t)) && ru(t, !0)
                        });
                        let c = [{
                            stackItem: i[i.length - 1],
                            origin: t.origin,
                            type: r ? "redo" : "undo",
                            changedParentTypes: t.changedParentTypes
                        }, this];
                        o ? this.emit("stack-item-added", c) : this.emit("stack-item-updated", c)
                    }, this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", () => {
                        this.destroy()
                    })
                }
                addToScope(t) {
                    (t = i.kJ(t) ? t : [t]).forEach(t => {
                        this.scope.every(e => e !== t) && this.scope.push(t)
                    })
                }
                addTrackedOrigin(t) {
                    this.trackedOrigins.add(t)
                }
                removeTrackedOrigin(t) {
                    this.trackedOrigins.delete(t)
                }
                clear(t = !0, e = !0) {
                    (t && this.canUndo() || e && this.canRedo()) && this.doc.transact(r => {
                        t && (this.undoStack.forEach(t => tB(r, this, t)), this.undoStack = []), e && (this.redoStack.forEach(t => tB(r, this, t)), this.redoStack = []), this.emit("stack-cleared", [{
                            undoStackCleared: t,
                            redoStackCleared: e
                        }])
                    })
                }
                stopCapturing() {
                    this.lastChange = 0
                }
                undo() {
                    let t;
                    this.undoing = !0;
                    try {
                        t = tq(this, this.undoStack, "undo")
                    } finally {
                        this.undoing = !1
                    }
                    return t
                }
                redo() {
                    let t;
                    this.redoing = !0;
                    try {
                        t = tq(this, this.redoStack, "redo")
                    } finally {
                        this.redoing = !1
                    }
                    return t
                }
                canUndo() {
                    return this.undoStack.length > 0
                }
                canRedo() {
                    return this.redoStack.length > 0
                }
                destroy() {
                    this.trackedOrigins.delete(this), this.doc.off("afterTransaction", this.afterTransactionHandler), super.destroy()
                }
            }
            class tZ {
                constructor(t, e) {
                    this.gen = function*(t) {
                        let e = c.yg(t.restDecoder);
                        for (let r = 0; r < e; r++) {
                            let e = c.yg(t.restDecoder),
                                r = t.readClient(),
                                n = c.yg(t.restDecoder);
                            for (let i = 0; i < e; i++) {
                                let e = t.readInfo();
                                if (10 === e) {
                                    let e = c.yg(t.restDecoder);
                                    yield new r_(tg(r, n), e), n += e
                                } else if ((g.kr & e) != 0) {
                                    let i = (e & (g.rc | g.x1)) == 0,
                                        l = new rf(tg(r, n), null, (e & g.x1) === g.x1 ? t.readLeftID() : null, null, (e & g.rc) === g.rc ? t.readRightID() : null, i ? t.readParentInfo() ? t.readString() : t.readLeftID() : null, i && (e & g.cq) === g.cq ? t.readString() : null, rp(t, e));
                                    yield l, n += l.length
                                } else {
                                    let e = t.readLen();
                                    yield new e1(tg(r, n), e), n += e
                                }
                            }
                        }
                    }(t), this.curr = null, this.done = !1, this.filterSkips = e, this.next()
                }
                next() {
                    do this.curr = this.gen.next().value || null; while (this.filterSkips && null !== this.curr && this.curr.constructor === r_);
                    return this.curr
                }
            }
            class tQ {
                constructor(t) {
                    this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = t, this.clientStructs = []
                }
            }
            let t0 = t => t8(t, T, W),
                t1 = (t, e) => {
                    if (t.constructor === e1) {
                        let {
                            client: r,
                            clock: n
                        } = t.id;
                        return new e1(tg(r, n + e), t.length - e)
                    }
                    if (t.constructor === r_) {
                        let {
                            client: r,
                            clock: n
                        } = t.id;
                        return new r_(tg(r, n + e), t.length - e)
                    } {
                        let {
                            client: r,
                            clock: n
                        } = t.id;
                        return new rf(tg(r, n + e), null, tg(r, n + e - 1), null, t.rightOrigin, t.parent, t.parentSub, t.content.splice(e))
                    }
                },
                t8 = (t, e = J, r = V) => {
                    if (1 === t.length) return t[0];
                    let n = t.map(t => new e(c.l1(t))),
                        i = n.map(t => new tZ(t, !0)),
                        l = null,
                        s = new r,
                        o = new tQ(s);
                    for (;
                        (i = i.filter(t => null !== t.curr)).sort((t, e) => {
                            if (t.curr.id.client !== e.curr.id.client) return e.curr.id.client - t.curr.id.client; {
                                let r = t.curr.id.clock - e.curr.id.clock;
                                return 0 === r ? t.curr.constructor === e.curr.constructor ? 0 : t.curr.constructor === r_ ? 1 : -1 : r
                            }
                        }), 0 !== i.length;) {
                        let t = i[0],
                            e = t.curr.id.client;
                        if (null !== l) {
                            let r = t.curr,
                                n = !1;
                            for (; null !== r && r.id.clock + r.length <= l.struct.id.clock + l.struct.length && r.id.client >= l.struct.id.client;) r = t.next(), n = !0;
                            if (null === r || r.id.client !== e || n && r.id.clock > l.struct.id.clock + l.struct.length) continue;
                            if (e !== l.struct.id.client) t4(o, l.struct, l.offset), l = {
                                struct: r,
                                offset: 0
                            }, t.next();
                            else if (l.struct.id.clock + l.struct.length < r.id.clock) {
                                if (l.struct.constructor === r_) l.struct.length = r.id.clock + r.length - l.struct.id.clock;
                                else {
                                    t4(o, l.struct, l.offset);
                                    let t = r.id.clock - l.struct.id.clock - l.struct.length,
                                        n = new r_(tg(e, l.struct.id.clock + l.struct.length), t);
                                    l = {
                                        struct: n,
                                        offset: 0
                                    }
                                }
                            } else {
                                let e = l.struct.id.clock + l.struct.length - r.id.clock;
                                e > 0 && (l.struct.constructor === r_ ? l.struct.length -= e : r = t1(r, e)), l.struct.mergeWith(r) || (t4(o, l.struct, l.offset), l = {
                                    struct: r,
                                    offset: 0
                                }, t.next())
                            }
                        } else l = {
                            struct: t.curr,
                            offset: 0
                        }, t.next();
                        for (let r = t.curr; null !== r && r.id.client === e && r.id.clock === l.struct.id.clock + l.struct.length && r.constructor !== r_; r = t.next()) t4(o, l.struct, l.offset), l = {
                            struct: r,
                            offset: 0
                        }
                    }
                    null !== l && (t4(o, l.struct, l.offset), l = null), t7(o);
                    let h = n.map(t => N(t)),
                        d = v(h);
                    return I(s, d), s.toUint8Array()
                },
                t5 = (t, e, r = J, n = V) => {
                    let i = te(e),
                        s = new n,
                        o = new tQ(s),
                        h = new r(c.l1(t)),
                        d = new tZ(h, !1);
                    for (; d.curr;) {
                        let t = d.curr,
                            e = t.id.client,
                            r = i.get(e) || 0;
                        if (d.curr.constructor === r_) {
                            d.next();
                            continue
                        }
                        if (t.id.clock + t.length > r)
                            for (t4(o, t, l.Fp(r - t.id.clock, 0)), d.next(); d.curr && d.curr.id.client === e;) t4(o, d.curr, 0), d.next();
                        else
                            for (; d.curr && d.curr.id.client === e && d.curr.id.clock + d.curr.length <= r;) d.next()
                    }
                    t7(o);
                    let u = N(h);
                    return I(s, u), s.toUint8Array()
                },
                t2 = t => {
                    t.written > 0 && (t.clientStructs.push({
                        written: t.written,
                        restEncoder: o._f(t.encoder.restEncoder)
                    }), t.encoder.restEncoder = o.Mf(), t.written = 0)
                },
                t4 = (t, e, r) => {
                    t.written > 0 && t.currClient !== e.id.client && t2(t), 0 === t.written && (t.currClient = e.id.client, t.encoder.writeClient(e.id.client), o.uE(t.encoder.restEncoder, e.id.clock + r)), e.write(t.encoder, r), t.written++
                },
                t7 = t => {
                    t2(t);
                    let e = t.encoder.restEncoder;
                    o.uE(e, t.clientStructs.length);
                    for (let r = 0; r < t.clientStructs.length; r++) {
                        let n = t.clientStructs[r];
                        o.uE(e, n.written), o.HK(e, n.restEncoder)
                    }
                },
                t9 = (t, e, r) => {
                    let n = new e(c.l1(t)),
                        i = new tZ(n, !1),
                        l = new r,
                        s = new tQ(l);
                    for (let t = i.curr; null !== t; t = i.next()) t4(s, t, 0);
                    t7(s);
                    let o = N(n);
                    return I(l, o), l.toUint8Array()
                },
                t6 = t => t9(t, J, W);
            class t3 {
                constructor(t, e) {
                    this.target = t, this.currentTarget = t, this.transaction = e, this._changes = null, this._keys = null, this._delta = null
                }
                get path() {
                    return et(this.currentTarget, this.target)
                }
                deletes(t) {
                    return C(this.transaction.deleteSet, t.id)
                }
                get keys() {
                    if (null === this._keys) {
                        let t = new Map,
                            e = this.target,
                            r = this.transaction.changed.get(e);
                        r.forEach(r => {
                            if (null !== r) {
                                let n, l;
                                let s = e._map.get(r);
                                if (this.adds(s)) {
                                    let t = s.left;
                                    for (; null !== t && this.adds(t);) t = t.left;
                                    if (this.deletes(s)) {
                                        if (!(null !== t && this.deletes(t))) return;
                                        n = "delete", l = i.Z$(t.content.getContent())
                                    } else null !== t && this.deletes(t) ? (n = "update", l = i.Z$(t.content.getContent())) : (n = "add", l = void 0)
                                } else {
                                    if (!this.deletes(s)) return;
                                    n = "delete", l = i.Z$(s.content.getContent())
                                }
                                t.set(r, {
                                    action: n,
                                    oldValue: l
                                })
                            }
                        }), this._keys = t
                    }
                    return this._keys
                }
                get delta() {
                    return this.changes.delta
                }
                adds(t) {
                    return t.id.clock >= (this.transaction.beforeState.get(t.id.client) || 0)
                }
                get changes() {
                    let t = this._changes;
                    if (null === t) {
                        let e = this.target,
                            r = p.Ue(),
                            n = p.Ue(),
                            i = [];
                        t = {
                            added: r,
                            deleted: n,
                            delta: i,
                            keys: this.keys
                        };
                        let l = this.transaction.changed.get(e);
                        if (l.has(null)) {
                            let t = null,
                                l = () => {
                                    t && i.push(t)
                                };
                            for (let i = e._start; null !== i; i = i.right) i.deleted ? this.deletes(i) && !this.adds(i) && ((null === t || void 0 === t.delete) && (l(), t = {
                                delete: 0
                            }), t.delete += i.length, n.add(i)) : this.adds(i) ? ((null === t || void 0 === t.insert) && (l(), t = {
                                insert: []
                            }), t.insert = t.insert.concat(i.content.getContent()), r.add(i)) : ((null === t || void 0 === t.retain) && (l(), t = {
                                retain: 0
                            }), t.retain += i.length);
                            null !== t && void 0 === t.retain && l()
                        }
                        this._changes = t
                    }
                    return t
                }
            }
            let et = (t, e) => {
                    let r = [];
                    for (; null !== e._item && e !== t;) {
                        if (null !== e._item.parentSub) r.unshift(e._item.parentSub);
                        else {
                            let t = 0,
                                n = e._item.parent._start;
                            for (; n !== e._item && null !== n;) !n.deleted && t++, n = n.right;
                            r.unshift(t)
                        }
                        e = e._item.parent
                    }
                    return r
                },
                ee = 0;
            class er {
                constructor(t, e) {
                    t.marker = !0, this.p = t, this.index = e, this.timestamp = ee++
                }
            }
            let en = t => {
                    t.timestamp = ee++
                },
                ei = (t, e, r) => {
                    t.p.marker = !1, t.p = e, e.marker = !0, t.index = r, t.timestamp = ee++
                },
                el = (t, e, r) => {
                    if (t.length >= 80) {
                        let n = t.reduce((t, e) => t.timestamp < e.timestamp ? t : e);
                        return ei(n, e, r), n
                    } {
                        let n = new er(e, r);
                        return t.push(n), n
                    }
                },
                es = (t, e) => {
                    if (null === t._start || 0 === e || null === t._searchMarker) return null;
                    let r = 0 === t._searchMarker.length ? null : t._searchMarker.reduce((t, r) => l.Wn(e - t.index) < l.Wn(e - r.index) ? t : r),
                        n = t._start,
                        i = 0;
                    for (null !== r && (n = r.p, i = r.index, en(r)); null !== n.right && i < e;) {
                        if (!n.deleted && n.countable) {
                            if (e < i + n.length) break;
                            i += n.length
                        }
                        n = n.right
                    }
                    for (; null !== n.left && i > e;) !(n = n.left).deleted && n.countable && (i -= n.length);
                    for (; null !== n.left && n.left.id.client === n.id.client && n.left.id.clock + n.left.length === n.id.clock;) !(n = n.left).deleted && n.countable && (i -= n.length);
                    return null !== r && l.Wn(r.index - i) < n.parent.length / 80 ? (ei(r, n, i), r) : el(t._searchMarker, n, i)
                },
                eo = (t, e, r) => {
                    for (let n = t.length - 1; n >= 0; n--) {
                        let i = t[n];
                        if (r > 0) {
                            let e = i.p;
                            for (e.marker = !1; e && (e.deleted || !e.countable);)(e = e.left) && !e.deleted && e.countable && (i.index -= e.length);
                            if (null === e || !0 === e.marker) {
                                t.splice(n, 1);
                                continue
                            }
                            i.p = e, e.marker = !0
                        }(e < i.index || r > 0 && e === i.index) && (i.index = l.Fp(e, i.index + r))
                    }
                },
                ec = (t, e, r) => {
                    let n = t,
                        i = e.changedParentTypes;
                    for (; s.Yu(i, t, () => []).push(r), null !== t._item;) t = t._item.parent;
                    td(n._eH, r, e)
                };
            class eh {
                constructor() {
                    this._item = null, this._map = new Map, this._start = null, this.doc = null, this._length = 0, this._eH = to(), this._dEH = to(), this._searchMarker = null
                }
                get parent() {
                    return this._item ? this._item.parent : null
                }
                _integrate(t, e) {
                    this.doc = t, this._item = e
                }
                _copy() {
                    throw a.Nw()
                }
                clone() {
                    throw a.Nw()
                }
                _write(t) {}
                get _first() {
                    let t = this._start;
                    for (; null !== t && t.deleted;) t = t.right;
                    return t
                }
                _callObserver(t, e) {
                    !t.local && this._searchMarker && (this._searchMarker.length = 0)
                }
                observe(t) {
                    tc(this._eH, t)
                }
                observeDeep(t) {
                    tc(this._dEH, t)
                }
                unobserve(t) {
                    th(this._eH, t)
                }
                unobserveDeep(t) {
                    th(this._dEH, t)
                }
                toJSON() {}
            }
            let ed = (t, e, r) => {
                    e < 0 && (e = t._length + e), r < 0 && (r = t._length + r);
                    let n = r - e,
                        i = [],
                        l = t._start;
                    for (; null !== l && n > 0;) {
                        if (l.countable && !l.deleted) {
                            let t = l.content.getContent();
                            if (t.length <= e) e -= t.length;
                            else {
                                for (let r = e; r < t.length && n > 0; r++) i.push(t[r]), n--;
                                e = 0
                            }
                        }
                        l = l.right
                    }
                    return i
                },
                eu = t => {
                    let e = [],
                        r = t._start;
                    for (; null !== r;) {
                        if (r.countable && !r.deleted) {
                            let t = r.content.getContent();
                            for (let r = 0; r < t.length; r++) e.push(t[r])
                        }
                        r = r.right
                    }
                    return e
                },
                ea = (t, e) => {
                    let r = [],
                        n = t._start;
                    for (; null !== n;) {
                        if (n.countable && tA(n, e)) {
                            let t = n.content.getContent();
                            for (let e = 0; e < t.length; e++) r.push(t[e])
                        }
                        n = n.right
                    }
                    return r
                },
                eg = (t, e) => {
                    let r = 0,
                        n = t._start;
                    for (; null !== n;) {
                        if (n.countable && !n.deleted) {
                            let i = n.content.getContent();
                            for (let n = 0; n < i.length; n++) e(i[n], r++, t)
                        }
                        n = n.right
                    }
                },
                ef = (t, e) => {
                    let r = [];
                    return eg(t, (n, i) => {
                        r.push(e(n, i, t))
                    }), r
                },
                ep = t => {
                    let e = t._start,
                        r = null,
                        n = 0;
                    return {
                        [Symbol.iterator]() {
                            return this
                        },
                        next: () => {
                            if (null === r) {
                                for (; null !== e && e.deleted;) e = e.right;
                                if (null === e) return {
                                    done: !0,
                                    value: void 0
                                };
                                r = e.content.getContent(), n = 0, e = e.right
                            }
                            let t = r[n++];
                            return r.length <= n && (r = null), {
                                done: !1,
                                value: t
                            }
                        }
                    }
                },
                ew = (t, e) => {
                    let r = es(t, e),
                        n = t._start;
                    for (null !== r && (n = r.p, e -= r.index); null !== n; n = n.right)
                        if (!n.deleted && n.countable) {
                            if (e < n.length) return n.content.getContent()[e];
                            e -= n.length
                        }
                },
                e_ = (t, e, r, n) => {
                    let i = r,
                        l = t.doc,
                        s = l.clientID,
                        o = l.store,
                        c = null === r ? e._start : r.right,
                        h = [],
                        d = () => {
                            h.length > 0 && ((i = new rf(tg(s, tN(o, s)), i, i && i.lastId, c, c && c.id, e, null, new e3(h))).integrate(t, 0), h = [])
                        };
                    n.forEach(r => {
                        if (null === r) h.push(r);
                        else switch (r.constructor) {
                            case Number:
                            case Object:
                            case Boolean:
                            case Array:
                            case String:
                                h.push(r);
                                break;
                            default:
                                switch (d(), r.constructor) {
                                    case Uint8Array:
                                    case ArrayBuffer:
                                        (i = new rf(tg(s, tN(o, s)), i, i && i.lastId, c, c && c.id, e, null, new e8(new Uint8Array(r)))).integrate(t, 0);
                                        break;
                                    case R:
                                        (i = new rf(tg(s, tN(o, s)), i, i && i.lastId, c, c && c.id, e, null, new e4(r))).integrate(t, 0);
                                        break;
                                    default:
                                        if (r instanceof eh)(i = new rf(tg(s, tN(o, s)), i, i && i.lastId, c, c && c.id, e, null, new rh(r))).integrate(t, 0);
                                        else throw Error("Unexpected content type in insert operation")
                                }
                        }
                    }), d()
                },
                ek = a.Ue("Length exceeded!"),
                em = (t, e, r, n) => {
                    if (r > e._length) throw ek;
                    if (0 === r) return e._searchMarker && eo(e._searchMarker, r, n.length), e_(t, e, null, n);
                    let i = r,
                        l = es(e, r),
                        s = e._start;
                    for (null !== l && (s = l.p, 0 == (r -= l.index) && (r += (s = s.prev) && s.countable && !s.deleted ? s.length : 0)); null !== s; s = s.right)
                        if (!s.deleted && s.countable) {
                            if (r <= s.length) {
                                r < s.length && tT(t, tg(s.id.client, s.id.clock + r));
                                break
                            }
                            r -= s.length
                        }
                    return e._searchMarker && eo(e._searchMarker, i, n.length), e_(t, e, s, n)
                },
                ey = (t, e, r) => {
                    let n = (e._searchMarker || []).reduce((t, e) => e.index > t.index ? e : t, {
                            index: 0,
                            p: e._start
                        }),
                        i = n.p;
                    if (i)
                        for (; i.right;) i = i.right;
                    return e_(t, e, i, r)
                },
                eb = (t, e, r, n) => {
                    if (0 === n) return;
                    let i = r,
                        l = n,
                        s = es(e, r),
                        o = e._start;
                    for (null !== s && (o = s.p, r -= s.index); null !== o && r > 0; o = o.right) !o.deleted && o.countable && (r < o.length && tT(t, tg(o.id.client, o.id.clock + r)), r -= o.length);
                    for (; n > 0 && null !== o;) o.deleted || (n < o.length && tT(t, tg(o.id.client, o.id.clock + n)), o.delete(t), n -= o.length), o = o.right;
                    if (n > 0) throw ek;
                    e._searchMarker && eo(e._searchMarker, i, -l + n)
                },
                eE = (t, e, r) => {
                    let n = e._map.get(r);
                    void 0 !== n && n.delete(t)
                },
                eS = (t, e, r, n) => {
                    let i;
                    let l = e._map.get(r) || null,
                        s = t.doc,
                        o = s.clientID;
                    if (null == n) i = new e3([n]);
                    else switch (n.constructor) {
                        case Number:
                        case Object:
                        case Boolean:
                        case Array:
                        case String:
                            i = new e3([n]);
                            break;
                        case Uint8Array:
                            i = new e8(n);
                            break;
                        case R:
                            i = new e4(n);
                            break;
                        default:
                            if (n instanceof eh) i = new rh(n);
                            else throw Error("Unexpected content type")
                    }
                    new rf(tg(o, tN(s.store, o)), l, l && l.lastId, null, null, e, r, i).integrate(t, 0)
                },
                eC = (t, e) => {
                    let r = t._map.get(e);
                    return void 0 === r || r.deleted ? void 0 : r.content.getContent()[r.length - 1]
                },
                eD = t => {
                    let e = {};
                    return t._map.forEach((t, r) => {
                        t.deleted || (e[r] = t.content.getContent()[t.length - 1])
                    }), e
                },
                ev = (t, e) => {
                    let r = t._map.get(e);
                    return void 0 !== r && !r.deleted
                },
                eA = t => k.BG(t.entries(), t => !t[1].deleted);
            class ex extends t3 {
                constructor(t, e) {
                    super(t, e), this._transaction = e
                }
            }
            class eM extends eh {
                constructor() {
                    super(), this._prelimContent = [], this._searchMarker = []
                }
                static from(t) {
                    let e = new eM;
                    return e.push(t), e
                }
                _integrate(t, e) {
                    super._integrate(t, e), this.insert(0, this._prelimContent), this._prelimContent = null
                }
                _copy() {
                    return new eM
                }
                clone() {
                    let t = new eM;
                    return t.insert(0, this.toArray().map(t => t instanceof eh ? t.clone() : t)), t
                }
                get length() {
                    return null === this._prelimContent ? this._length : this._prelimContent.length
                }
                _callObserver(t, e) {
                    super._callObserver(t, e), ec(this, t, new ex(this, t))
                }
                insert(t, e) {
                    null !== this.doc ? tK(this.doc, r => {
                        em(r, this, t, e)
                    }) : this._prelimContent.splice(t, 0, ...e)
                }
                push(t) {
                    null !== this.doc ? tK(this.doc, e => {
                        ey(e, this, t)
                    }) : this._prelimContent.push(...t)
                }
                unshift(t) {
                    this.insert(0, t)
                }
                delete(t, e = 1) {
                    null !== this.doc ? tK(this.doc, r => {
                        eb(r, this, t, e)
                    }) : this._prelimContent.splice(t, e)
                }
                get(t) {
                    return ew(this, t)
                }
                toArray() {
                    return eu(this)
                }
                slice(t = 0, e = this.length) {
                    return ed(this, t, e)
                }
                toJSON() {
                    return this.map(t => t instanceof eh ? t.toJSON() : t)
                }
                map(t) {
                    return ef(this, t)
                }
                forEach(t) {
                    eg(this, t)
                }[Symbol.iterator]() {
                    return ep(this)
                }
                _write(t) {
                    t.writeTypeRef(rr)
                }
            }
            class eI extends t3 {
                constructor(t, e, r) {
                    super(t, e), this.keysChanged = r
                }
            }
            class eN extends eh {
                constructor(t) {
                    super(), this._prelimContent = null, void 0 === t ? this._prelimContent = new Map : this._prelimContent = new Map(t)
                }
                _integrate(t, e) {
                    super._integrate(t, e), this._prelimContent.forEach((t, e) => {
                        this.set(e, t)
                    }), this._prelimContent = null
                }
                _copy() {
                    return new eN
                }
                clone() {
                    let t = new eN;
                    return this.forEach((e, r) => {
                        t.set(r, e instanceof eh ? e.clone() : e)
                    }), t
                }
                _callObserver(t, e) {
                    ec(this, t, new eI(this, t, e))
                }
                toJSON() {
                    let t = {};
                    return this._map.forEach((e, r) => {
                        if (!e.deleted) {
                            let n = e.content.getContent()[e.length - 1];
                            t[r] = n instanceof eh ? n.toJSON() : n
                        }
                    }), t
                }
                get size() {
                    return [...eA(this._map)].length
                }
                keys() {
                    return k.CA(eA(this._map), t => t[0])
                }
                values() {
                    return k.CA(eA(this._map), t => t[1].content.getContent()[t[1].length - 1])
                }
                entries() {
                    return k.CA(eA(this._map), t => [t[0], t[1].content.getContent()[t[1].length - 1]])
                }
                forEach(t) {
                    return this._map.forEach((e, r) => {
                        e.deleted || t(e.content.getContent()[e.length - 1], r, this)
                    }), {}
                }[Symbol.iterator]() {
                    return this.entries()
                }
                delete(t) {
                    null !== this.doc ? tK(this.doc, e => {
                        eE(e, this, t)
                    }) : this._prelimContent.delete(t)
                }
                set(t, e) {
                    return null !== this.doc ? tK(this.doc, r => {
                        eS(r, this, t, e)
                    }) : this._prelimContent.set(t, e), e
                }
                get(t) {
                    return eC(this, t)
                }
                has(t) {
                    return ev(this, t)
                }
                clear() {
                    null !== this.doc ? tK(this.doc, t => {
                        this.forEach(function(e, r, n) {
                            eE(t, n, r)
                        })
                    }) : this._prelimContent.clear()
                }
                _write(t) {
                    t.writeTypeRef(rn)
                }
            }
            let eO = (t, e) => t === e || "object" == typeof t && "object" == typeof e && t && e && m.$m(t, e);
            class eL {
                constructor(t, e, r, n) {
                    this.left = t, this.right = e, this.index = r, this.currentAttributes = n
                }
                forward() {
                    (null === this.right && a.zR(), this.right.content.constructor === e9) ? this.right.deleted || eP(this.currentAttributes, this.right.content): this.right.deleted || (this.index += this.right.length), this.left = this.right, this.right = this.right.right
                }
            }
            let eR = (t, e, r) => {
                    for (; null !== e.right && r > 0;) e.right.content.constructor === e9 ? e.right.deleted || eP(e.currentAttributes, e.right.content) : e.right.deleted || (r < e.right.length && tT(t, tg(e.right.id.client, e.right.id.clock + r)), e.index += e.right.length, r -= e.right.length), e.left = e.right, e.right = e.right.right;
                    return e
                },
                eU = (t, e, r) => {
                    let n = new Map,
                        i = es(e, r);
                    if (i) {
                        let e = new eL(i.p.left, i.p, i.index, n);
                        return eR(t, e, r - i.index)
                    } {
                        let i = new eL(null, e._start, 0, n);
                        return eR(t, i, r)
                    }
                },
                eT = (t, e, r, n) => {
                    for (; null !== r.right && (!0 === r.right.deleted || r.right.content.constructor === e9 && eO(n.get(r.right.content.key), r.right.content.value));) r.right.deleted || n.delete(r.right.content.key), r.forward();
                    let i = t.doc,
                        l = i.clientID;
                    n.forEach((n, s) => {
                        let o = r.left,
                            c = r.right,
                            h = new rf(tg(l, tN(i.store, l)), o, o && o.lastId, c, c && c.id, e, null, new e9(s, n));
                        h.integrate(t, 0), r.right = h, r.forward()
                    })
                },
                eP = (t, e) => {
                    let {
                        key: r,
                        value: n
                    } = e;
                    null === n ? t.delete(r) : t.set(r, n)
                },
                eJ = (t, e) => {
                    for (; null !== t.right && (t.right.deleted || t.right.content.constructor === e9 && eO(e[t.right.content.key] || null, t.right.content.value));) t.forward()
                },
                eH = (t, e, r, n) => {
                    let i = t.doc,
                        l = i.clientID,
                        s = new Map;
                    for (let o in n) {
                        let c = n[o],
                            h = r.currentAttributes.get(o) || null;
                        if (!eO(h, c)) {
                            s.set(o, h);
                            let {
                                left: n,
                                right: d
                            } = r;
                            r.right = new rf(tg(l, tN(i.store, l)), n, n && n.lastId, d, d && d.id, e, null, new e9(o, c)), r.right.integrate(t, 0), r.forward()
                        }
                    }
                    return s
                },
                eW = (t, e, r, n, i) => {
                    r.currentAttributes.forEach((t, e) => {
                        void 0 === i[e] && (i[e] = null)
                    });
                    let l = t.doc,
                        s = l.clientID;
                    eJ(r, i);
                    let o = eH(t, e, r, i),
                        c = n.constructor === String ? new rt(n) : n instanceof eh ? new rh(n) : new e7(n),
                        {
                            left: h,
                            right: d,
                            index: u
                        } = r;
                    e._searchMarker && eo(e._searchMarker, r.index, c.getLength()), (d = new rf(tg(s, tN(l.store, s)), h, h && h.lastId, d, d && d.id, e, null, c)).integrate(t, 0), r.right = d, r.index = u, r.forward(), eT(t, e, r, o)
                },
                ez = (t, e, r, n, i) => {
                    let l = t.doc,
                        s = l.clientID;
                    eJ(r, i);
                    let o = eH(t, e, r, i);
                    for (; null !== r.right && (n > 0 || o.size > 0 && (r.right.deleted || r.right.content.constructor === e9));) {
                        if (!r.right.deleted) {
                            if (r.right.content.constructor === e9) {
                                let {
                                    key: e,
                                    value: l
                                } = r.right.content, s = i[e];
                                if (void 0 !== s) {
                                    if (eO(s, l)) o.delete(e);
                                    else {
                                        if (0 === n) break;
                                        o.set(e, l)
                                    }
                                    r.right.delete(t)
                                } else r.currentAttributes.set(e, l)
                            } else n < r.right.length && tT(t, tg(r.right.id.client, r.right.id.clock + n)), n -= r.right.length
                        }
                        r.forward()
                    }
                    if (n > 0) {
                        let i = "";
                        for (; n > 0; n--) i += "\n";
                        r.right = new rf(tg(s, tN(l.store, s)), r.left, r.left && r.left.lastId, r.right, r.right && r.right.id, e, null, new rt(i)), r.right.integrate(t, 0), r.forward()
                    }
                    eT(t, e, r, o)
                },
                eV = (t, e, r, n, i) => {
                    let l = r,
                        o = s.JG(i);
                    for (; l && (!l.countable || l.deleted);) l.deleted || l.content.constructor !== e9 || eP(o, l.content), l = l.right;
                    let c = 0,
                        h = !1;
                    for (; e !== l;) {
                        if (r === e && (h = !0), !e.deleted) {
                            let r = e.content;
                            if (r.constructor === e9) {
                                let {
                                    key: l,
                                    value: s
                                } = r;
                                (o.get(l) || null) === s && (n.get(l) || null) !== s || (e.delete(t), c++, h || (i.get(l) || null) !== s || (n.get(l) || null) === s || i.delete(l))
                            }
                        }
                        e = e.right
                    }
                    return c
                },
                e$ = (t, e) => {
                    for (; e && e.right && (e.right.deleted || !e.right.countable);) e = e.right;
                    let r = new Set;
                    for (; e && (e.deleted || !e.countable);) {
                        if (!e.deleted && e.content.constructor === e9) {
                            let n = e.content.key;
                            r.has(n) ? e.delete(t) : r.add(n)
                        }
                        e = e.left
                    }
                },
                eF = t => {
                    let e = 0;
                    return tK(t.doc, r => {
                        let n = t._start,
                            i = t._start,
                            l = s.Ue(),
                            o = s.JG(l);
                        for (; i;) !1 === i.deleted && (i.content.constructor === e9 ? eP(o, i.content) : (e += eV(r, n, i, l, o), l = s.JG(o), n = i)), i = i.right
                    }), e
                },
                ej = (t, e, r) => {
                    let n = r,
                        i = s.JG(e.currentAttributes),
                        l = e.right;
                    for (; r > 0 && null !== e.right;) {
                        if (!1 === e.right.deleted) switch (e.right.content.constructor) {
                            case rh:
                            case e7:
                            case rt:
                                r < e.right.length && tT(t, tg(e.right.id.client, e.right.id.clock + r)), r -= e.right.length, e.right.delete(t)
                        }
                        e.forward()
                    }
                    l && eV(t, l, e.right, i, e.currentAttributes);
                    let o = (e.left || e.right).parent;
                    return o._searchMarker && eo(o._searchMarker, e.index, -n + r), e
                };
            class eY extends t3 {
                constructor(t, e, r) {
                    super(t, e), this.childListChanged = !1, this.keysChanged = new Set, r.forEach(t => {
                        null === t ? this.childListChanged = !0 : this.keysChanged.add(t)
                    })
                }
                get changes() {
                    if (null === this._changes) {
                        let t = {
                            keys: this.keys,
                            delta: this.delta,
                            added: new Set,
                            deleted: new Set
                        };
                        this._changes = t
                    }
                    return this._changes
                }
                get delta() {
                    if (null === this._delta) {
                        let t = this.target.doc,
                            e = [];
                        tK(t, t => {
                            let r = new Map,
                                n = new Map,
                                i = this.target._start,
                                l = null,
                                s = {},
                                o = "",
                                c = 0,
                                h = 0,
                                d = () => {
                                    if (null !== l) {
                                        let t;
                                        switch (l) {
                                            case "delete":
                                                t = {
                                                    delete: h
                                                }, h = 0;
                                                break;
                                            case "insert":
                                                t = {
                                                    insert: o
                                                }, r.size > 0 && (t.attributes = {}, r.forEach((e, r) => {
                                                    null !== e && (t.attributes[r] = e)
                                                })), o = "";
                                                break;
                                            case "retain":
                                                if (t = {
                                                        retain: c
                                                    }, Object.keys(s).length > 0)
                                                    for (let e in t.attributes = {}, s) t.attributes[e] = s[e];
                                                c = 0
                                        }
                                        e.push(t), l = null
                                    }
                                };
                            for (; null !== i;) {
                                switch (i.content.constructor) {
                                    case rh:
                                    case e7:
                                        this.adds(i) ? this.deletes(i) || (d(), l = "insert", o = i.content.getContent()[0], d()) : this.deletes(i) ? ("delete" !== l && (d(), l = "delete"), h += 1) : i.deleted || ("retain" !== l && (d(), l = "retain"), c += 1);
                                        break;
                                    case rt:
                                        this.adds(i) ? this.deletes(i) || ("insert" !== l && (d(), l = "insert"), o += i.content.str) : this.deletes(i) ? ("delete" !== l && (d(), l = "delete"), h += i.length) : i.deleted || ("retain" !== l && (d(), l = "retain"), c += i.length);
                                        break;
                                    case e9:
                                        {
                                            let {
                                                key: e,
                                                value: o
                                            } = i.content;
                                            if (this.adds(i)) {
                                                if (!this.deletes(i)) {
                                                    let c = r.get(e) || null;
                                                    eO(c, o) ? null !== o && i.delete(t) : ("retain" === l && d(), eO(o, n.get(e) || null) ? delete s[e] : s[e] = o)
                                                }
                                            } else if (this.deletes(i)) {
                                                n.set(e, o);
                                                let t = r.get(e) || null;
                                                eO(t, o) || ("retain" === l && d(), s[e] = t)
                                            } else if (!i.deleted) {
                                                n.set(e, o);
                                                let r = s[e];
                                                void 0 !== r && (eO(r, o) ? null !== r && i.delete(t) : ("retain" === l && d(), null === o ? delete s[e] : s[e] = o))
                                            }
                                            i.deleted || ("insert" === l && d(), eP(r, i.content))
                                        }
                                }
                                i = i.right
                            }
                            for (d(); e.length > 0;) {
                                let t = e[e.length - 1];
                                if (void 0 !== t.retain && void 0 === t.attributes) e.pop();
                                else break
                            }
                        }), this._delta = e
                    }
                    return this._delta
                }
            }
            class eK extends eh {
                constructor(t) {
                    super(), this._pending = void 0 !== t ? [() => this.insert(0, t)] : [], this._searchMarker = []
                }
                get length() {
                    return this._length
                }
                _integrate(t, e) {
                    super._integrate(t, e);
                    try {
                        this._pending.forEach(t => t())
                    } catch (t) {
                        console.error(t)
                    }
                    this._pending = null
                }
                _copy() {
                    return new eK
                }
                clone() {
                    let t = new eK;
                    return t.applyDelta(this.toDelta()), t
                }
                _callObserver(t, e) {
                    super._callObserver(t, e);
                    let r = new eY(this, t, e),
                        n = t.doc;
                    if (ec(this, t, r), !t.local) {
                        let e = !1;
                        for (let [r, i] of t.afterState.entries()) {
                            let l = t.beforeState.get(r) || 0;
                            if (i !== l && (tH(t, n.store.clients.get(r), l, i, t => {
                                    t.deleted || t.content.constructor !== e9 || (e = !0)
                                }), e)) break
                        }
                        e || E(t, t.deleteSet, t => {
                            t instanceof e1 || e || t.parent !== this || t.content.constructor !== e9 || (e = !0)
                        }), tK(n, t => {
                            e ? eF(this) : E(t, t.deleteSet, e => {
                                e instanceof e1 || e.parent !== this || e$(t, e)
                            })
                        })
                    }
                }
                toString() {
                    let t = "",
                        e = this._start;
                    for (; null !== e;) !e.deleted && e.countable && e.content.constructor === rt && (t += e.content.str), e = e.right;
                    return t
                }
                toJSON() {
                    return this.toString()
                }
                applyDelta(t, {
                    sanitize: e = !0
                } = {}) {
                    null !== this.doc ? tK(this.doc, r => {
                        let n = new eL(null, this._start, 0, new Map);
                        for (let i = 0; i < t.length; i++) {
                            let l = t[i];
                            if (void 0 !== l.insert) {
                                let s = e || "string" != typeof l.insert || i !== t.length - 1 || null !== n.right || "\n" !== l.insert.slice(-1) ? l.insert : l.insert.slice(0, -1);
                                ("string" != typeof s || s.length > 0) && eW(r, this, n, s, l.attributes || {})
                            } else void 0 !== l.retain ? ez(r, this, n, l.retain, l.attributes || {}) : void 0 !== l.delete && ej(r, n, l.delete)
                        }
                    }) : this._pending.push(() => this.applyDelta(t))
                }
                toDelta(t, e, r) {
                    let n = [],
                        i = new Map,
                        l = this.doc,
                        s = "",
                        o = this._start;

                    function c() {
                        if (s.length > 0) {
                            let t = {},
                                e = !1;
                            i.forEach((r, n) => {
                                e = !0, t[n] = r
                            });
                            let r = {
                                insert: s
                            };
                            e && (r.attributes = t), n.push(r), s = ""
                        }
                    }
                    return tK(l, l => {
                        for (t && tx(l, t), e && tx(l, e); null !== o;) {
                            if (tA(o, t) || void 0 !== e && tA(o, e)) switch (o.content.constructor) {
                                case rt:
                                    {
                                        let n = i.get("ychange");void 0 === t || tA(o, t) ? void 0 === e || tA(o, e) ? void 0 !== n && (c(), i.delete("ychange")) : (void 0 === n || n.user !== o.id.client || "added" !== n.state) && (c(), i.set("ychange", r ? r("added", o.id) : {
                                            type: "added"
                                        })) : (void 0 === n || n.user !== o.id.client || "removed" !== n.state) && (c(), i.set("ychange", r ? r("removed", o.id) : {
                                            type: "removed"
                                        })),
                                        s += o.content.str;
                                        break
                                    }
                                case rh:
                                case e7:
                                    {
                                        c();
                                        let t = {
                                            insert: o.content.getContent()[0]
                                        };
                                        if (i.size > 0) {
                                            let e = {};
                                            t.attributes = e, i.forEach((t, r) => {
                                                e[r] = t
                                            })
                                        }
                                        n.push(t);
                                        break
                                    }
                                case e9:
                                    tA(o, t) && (c(), eP(i, o.content))
                            }
                            o = o.right
                        }
                        c()
                    }, tx), n
                }
                insert(t, e, r) {
                    if (e.length <= 0) return;
                    let n = this.doc;
                    null !== n ? tK(n, n => {
                        let i = eU(n, this, t);
                        r || (r = {}, i.currentAttributes.forEach((t, e) => {
                            r[e] = t
                        })), eW(n, this, i, e, r)
                    }) : this._pending.push(() => this.insert(t, e, r))
                }
                insertEmbed(t, e, r = {}) {
                    let n = this.doc;
                    null !== n ? tK(n, n => {
                        let i = eU(n, this, t);
                        eW(n, this, i, e, r)
                    }) : this._pending.push(() => this.insertEmbed(t, e, r))
                }
                delete(t, e) {
                    if (0 === e) return;
                    let r = this.doc;
                    null !== r ? tK(r, r => {
                        ej(r, eU(r, this, t), e)
                    }) : this._pending.push(() => this.delete(t, e))
                }
                format(t, e, r) {
                    if (0 === e) return;
                    let n = this.doc;
                    null !== n ? tK(n, n => {
                        let i = eU(n, this, t);
                        null !== i.right && ez(n, this, i, e, r)
                    }) : this._pending.push(() => this.format(t, e, r))
                }
                removeAttribute(t) {
                    null !== this.doc ? tK(this.doc, e => {
                        eE(e, this, t)
                    }) : this._pending.push(() => this.removeAttribute(t))
                }
                setAttribute(t, e) {
                    null !== this.doc ? tK(this.doc, r => {
                        eS(r, this, t, e)
                    }) : this._pending.push(() => this.setAttribute(t, e))
                }
                getAttribute(t) {
                    return eC(this, t)
                }
                getAttributes(t) {
                    return eD(this)
                }
                _write(t) {
                    t.writeTypeRef(ri)
                }
            }
            class eG {
                constructor(t, e = () => !0) {
                    this._filter = e, this._root = t, this._currentNode = t._start, this._firstCall = !0
                }[Symbol.iterator]() {
                    return this
                }
                next() {
                    let t = this._currentNode,
                        e = t && t.content && t.content.type;
                    if (null !== t && (!this._firstCall || t.deleted || !this._filter(e)))
                        do
                            if (e = t.content.type, t.deleted || e.constructor !== eq && e.constructor !== eB || null === e._start)
                                for (; null !== t;) {
                                    if (null !== t.right) {
                                        t = t.right;
                                        break
                                    }
                                    t = t.parent === this._root ? null : t.parent._item
                                } else t = e._start; while (null !== t && (t.deleted || !this._filter(t.content.type)));
                    return (this._firstCall = !1, null === t) ? {
                        value: void 0,
                        done: !0
                    } : (this._currentNode = t, {
                        value: t.content.type,
                        done: !1
                    })
                }
            }
            class eB extends eh {
                constructor() {
                    super(), this._prelimContent = []
                }
                get firstChild() {
                    let t = this._first;
                    return t ? t.content.getContent()[0] : null
                }
                _integrate(t, e) {
                    super._integrate(t, e), this.insert(0, this._prelimContent), this._prelimContent = null
                }
                _copy() {
                    return new eB
                }
                clone() {
                    let t = new eB;
                    return t.insert(0, this.toArray().map(t => t instanceof eh ? t.clone() : t)), t
                }
                get length() {
                    return null === this._prelimContent ? this._length : this._prelimContent.length
                }
                createTreeWalker(t) {
                    return new eG(this, t)
                }
                querySelector(t) {
                    t = t.toUpperCase();
                    let e = new eG(this, e => e.nodeName && e.nodeName.toUpperCase() === t),
                        r = e.next();
                    return r.done ? null : r.value
                }
                querySelectorAll(t) {
                    return t = t.toUpperCase(), Array.from(new eG(this, e => e.nodeName && e.nodeName.toUpperCase() === t))
                }
                _callObserver(t, e) {
                    ec(this, t, new eX(this, e, t))
                }
                toString() {
                    return ef(this, t => t.toString()).join("")
                }
                toJSON() {
                    return this.toString()
                }
                toDOM(t = document, e = {}, r) {
                    let n = t.createDocumentFragment();
                    return void 0 !== r && r._createAssociation(n, this), eg(this, i => {
                        n.insertBefore(i.toDOM(t, e, r), null)
                    }), n
                }
                insert(t, e) {
                    null !== this.doc ? tK(this.doc, r => {
                        em(r, this, t, e)
                    }) : this._prelimContent.splice(t, 0, ...e)
                }
                insertAfter(t, e) {
                    if (null !== this.doc) tK(this.doc, r => {
                        let n = t && t instanceof eh ? t._item : t;
                        e_(r, this, n, e)
                    });
                    else {
                        let r = this._prelimContent,
                            n = null === t ? 0 : r.findIndex(e => e === t) + 1;
                        if (0 === n && null !== t) throw a.Ue("Reference item not found");
                        r.splice(n, 0, ...e)
                    }
                }
                delete(t, e = 1) {
                    null !== this.doc ? tK(this.doc, r => {
                        eb(r, this, t, e)
                    }) : this._prelimContent.splice(t, e)
                }
                toArray() {
                    return eu(this)
                }
                push(t) {
                    this.insert(this.length, t)
                }
                unshift(t) {
                    this.insert(0, t)
                }
                get(t) {
                    return ew(this, t)
                }
                slice(t = 0, e = this.length) {
                    return ed(this, t, e)
                }
                forEach(t) {
                    eg(this, t)
                }
                _write(t) {
                    t.writeTypeRef(rs)
                }
            }
            class eq extends eB {
                constructor(t = "UNDEFINED") {
                    super(), this.nodeName = t, this._prelimAttrs = new Map
                }
                get nextSibling() {
                    let t = this._item ? this._item.next : null;
                    return t ? t.content.type : null
                }
                get prevSibling() {
                    let t = this._item ? this._item.prev : null;
                    return t ? t.content.type : null
                }
                _integrate(t, e) {
                    super._integrate(t, e), this._prelimAttrs.forEach((t, e) => {
                        this.setAttribute(e, t)
                    }), this._prelimAttrs = null
                }
                _copy() {
                    return new eq(this.nodeName)
                }
                clone() {
                    let t = new eq(this.nodeName),
                        e = this.getAttributes();
                    for (let r in e) t.setAttribute(r, e[r]);
                    return t.insert(0, this.toArray().map(t => t instanceof eh ? t.clone() : t)), t
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
                        e.push(n + '="' + t[n] + '"')
                    }
                    let i = this.nodeName.toLocaleLowerCase(),
                        l = e.length > 0 ? " " + e.join(" ") : "";
                    return `<${i}${l}>${super.toString()}</${i}>`
                }
                removeAttribute(t) {
                    null !== this.doc ? tK(this.doc, e => {
                        eE(e, this, t)
                    }) : this._prelimAttrs.delete(t)
                }
                setAttribute(t, e) {
                    null !== this.doc ? tK(this.doc, r => {
                        eS(r, this, t, e)
                    }) : this._prelimAttrs.set(t, e)
                }
                getAttribute(t) {
                    return eC(this, t)
                }
                hasAttribute(t) {
                    return ev(this, t)
                }
                getAttributes(t) {
                    return eD(this)
                }
                toDOM(t = document, e = {}, r) {
                    let n = t.createElement(this.nodeName),
                        i = this.getAttributes();
                    for (let t in i) n.setAttribute(t, i[t]);
                    return eg(this, i => {
                        n.appendChild(i.toDOM(t, e, r))
                    }), void 0 !== r && r._createAssociation(n, this), n
                }
                _write(t) {
                    t.writeTypeRef(rl), t.writeKey(this.nodeName)
                }
            }
            class eX extends t3 {
                constructor(t, e, r) {
                    super(t, r), this.childListChanged = !1, this.attributesChanged = new Set, e.forEach(t => {
                        null === t ? this.childListChanged = !0 : this.attributesChanged.add(t)
                    })
                }
            }
            class eZ extends eN {
                constructor(t) {
                    super(), this.hookName = t
                }
                _copy() {
                    return new eZ(this.hookName)
                }
                clone() {
                    let t = new eZ(this.hookName);
                    return this.forEach((e, r) => {
                        t.set(r, e)
                    }), t
                }
                toDOM(t = document, e = {}, r) {
                    let n;
                    let i = e[this.hookName];
                    return (n = void 0 !== i ? i.createDom(this) : document.createElement(this.hookName)).setAttribute("data-yjs-hook", this.hookName), void 0 !== r && r._createAssociation(n, this), n
                }
                _write(t) {
                    t.writeTypeRef(ro), t.writeKey(this.hookName)
                }
            }
            class eQ extends eK {
                get nextSibling() {
                    let t = this._item ? this._item.next : null;
                    return t ? t.content.type : null
                }
                get prevSibling() {
                    let t = this._item ? this._item.prev : null;
                    return t ? t.content.type : null
                }
                _copy() {
                    return new eQ
                }
                clone() {
                    let t = new eQ;
                    return t.applyDelta(this.toDelta()), t
                }
                toDOM(t = document, e, r) {
                    let n = t.createTextNode(this.toString());
                    return void 0 !== r && r._createAssociation(n, this), n
                }
                toString() {
                    return this.toDelta().map(t => {
                        let e = [];
                        for (let r in t.attributes) {
                            let n = [];
                            for (let e in t.attributes[r]) n.push({
                                key: e,
                                value: t.attributes[r][e]
                            });
                            n.sort((t, e) => t.key < e.key ? -1 : 1), e.push({
                                nodeName: r,
                                attrs: n
                            })
                        }
                        e.sort((t, e) => t.nodeName < e.nodeName ? -1 : 1);
                        let r = "";
                        for (let t = 0; t < e.length; t++) {
                            let n = e[t];
                            r += `<${n.nodeName}`;
                            for (let t = 0; t < n.attrs.length; t++) {
                                let e = n.attrs[t];
                                r += ` ${e.key}="${e.value}"`
                            }
                            r += ">"
                        }
                        r += t.insert;
                        for (let t = e.length - 1; t >= 0; t--) r += `</${e[t].nodeName}>`;
                        return r
                    }).join("")
                }
                toJSON() {
                    return this.toString()
                }
                _write(t) {
                    t.writeTypeRef(rc)
                }
            }
            class e0 {
                constructor(t, e) {
                    this.id = t, this.length = e
                }
                get deleted() {
                    throw a.Nw()
                }
                mergeWith(t) {
                    return !1
                }
                write(t, e, r) {
                    throw a.Nw()
                }
                integrate(t, e) {
                    throw a.Nw()
                }
            }
            class e1 extends e0 {
                get deleted() {
                    return !0
                }
                delete() {}
                mergeWith(t) {
                    return this.constructor === t.constructor && (this.length += t.length, !0)
                }
                integrate(t, e) {
                    e > 0 && (this.id.clock += e, this.length -= e), tO(t.doc.store, this)
                }
                write(t, e) {
                    t.writeInfo(0), t.writeLen(this.length - e)
                }
                getMissing(t, e) {
                    return null
                }
            }
            class e8 {
                constructor(t) {
                    this.content = t
                }
                getLength() {
                    return 1
                }
                getContent() {
                    return [this.content]
                }
                isCountable() {
                    return !0
                }
                copy() {
                    return new e8(this.content)
                }
                splice(t) {
                    throw a.Nw()
                }
                mergeWith(t) {
                    return !1
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeBuf(this.content)
                }
                getRef() {
                    return 3
                }
            }
            class e5 {
                constructor(t) {
                    this.len = t
                }
                getLength() {
                    return this.len
                }
                getContent() {
                    return []
                }
                isCountable() {
                    return !1
                }
                copy() {
                    return new e5(this.len)
                }
                splice(t) {
                    let e = new e5(this.len - t);
                    return this.len = t, e
                }
                mergeWith(t) {
                    return this.len += t.len, !0
                }
                integrate(t, e) {
                    A(t.deleteSet, e.id.client, e.id.clock, this.len), e.markDeleted()
                }
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeLen(this.len - e)
                }
                getRef() {
                    return 1
                }
            }
            let e2 = (t, e) => new R({
                guid: t,
                ...e,
                shouldLoad: e.shouldLoad || e.autoLoad || !1
            });
            class e4 {
                constructor(t) {
                    t._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = t;
                    let e = {};
                    this.opts = e, t.gc || (e.gc = !1), t.autoLoad && (e.autoLoad = !0), null !== t.meta && (e.meta = t.meta)
                }
                getLength() {
                    return 1
                }
                getContent() {
                    return [this.doc]
                }
                isCountable() {
                    return !0
                }
                copy() {
                    return new e4(e2(this.doc.guid, this.opts))
                }
                splice(t) {
                    throw a.Nw()
                }
                mergeWith(t) {
                    return !1
                }
                integrate(t, e) {
                    this.doc._item = e, t.subdocsAdded.add(this.doc), this.doc.shouldLoad && t.subdocsLoaded.add(this.doc)
                }
                delete(t) {
                    t.subdocsAdded.has(this.doc) ? t.subdocsAdded.delete(this.doc) : t.subdocsRemoved.add(this.doc)
                }
                gc(t) {}
                write(t, e) {
                    t.writeString(this.doc.guid), t.writeAny(this.opts)
                }
                getRef() {
                    return 9
                }
            }
            class e7 {
                constructor(t) {
                    this.embed = t
                }
                getLength() {
                    return 1
                }
                getContent() {
                    return [this.embed]
                }
                isCountable() {
                    return !0
                }
                copy() {
                    return new e7(this.embed)
                }
                splice(t) {
                    throw a.Nw()
                }
                mergeWith(t) {
                    return !1
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeJSON(this.embed)
                }
                getRef() {
                    return 5
                }
            }
            class e9 {
                constructor(t, e) {
                    this.key = t, this.value = e
                }
                getLength() {
                    return 1
                }
                getContent() {
                    return []
                }
                isCountable() {
                    return !1
                }
                copy() {
                    return new e9(this.key, this.value)
                }
                splice(t) {
                    throw a.Nw()
                }
                mergeWith(t) {
                    return !1
                }
                integrate(t, e) {
                    e.parent._searchMarker = null
                }
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeKey(this.key), t.writeJSON(this.value)
                }
                getRef() {
                    return 6
                }
            }
            class e6 {
                constructor(t) {
                    this.arr = t
                }
                getLength() {
                    return this.arr.length
                }
                getContent() {
                    return this.arr
                }
                isCountable() {
                    return !0
                }
                copy() {
                    return new e6(this.arr)
                }
                splice(t) {
                    let e = new e6(this.arr.slice(t));
                    return this.arr = this.arr.slice(0, t), e
                }
                mergeWith(t) {
                    return this.arr = this.arr.concat(t.arr), !0
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    let r = this.arr.length;
                    t.writeLen(r - e);
                    for (let n = e; n < r; n++) {
                        let e = this.arr[n];
                        t.writeString(void 0 === e ? "undefined" : JSON.stringify(e))
                    }
                }
                getRef() {
                    return 2
                }
            }
            class e3 {
                constructor(t) {
                    this.arr = t
                }
                getLength() {
                    return this.arr.length
                }
                getContent() {
                    return this.arr
                }
                isCountable() {
                    return !0
                }
                copy() {
                    return new e3(this.arr)
                }
                splice(t) {
                    let e = new e3(this.arr.slice(t));
                    return this.arr = this.arr.slice(0, t), e
                }
                mergeWith(t) {
                    return this.arr = this.arr.concat(t.arr), !0
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    let r = this.arr.length;
                    t.writeLen(r - e);
                    for (let n = e; n < r; n++) {
                        let e = this.arr[n];
                        t.writeAny(e)
                    }
                }
                getRef() {
                    return 8
                }
            }
            class rt {
                constructor(t) {
                    this.str = t
                }
                getLength() {
                    return this.str.length
                }
                getContent() {
                    return this.str.split("")
                }
                isCountable() {
                    return !0
                }
                copy() {
                    return new rt(this.str)
                }
                splice(t) {
                    let e = new rt(this.str.slice(t));
                    this.str = this.str.slice(0, t);
                    let r = this.str.charCodeAt(t - 1);
                    return r >= 55296 && r <= 56319 && (this.str = this.str.slice(0, t - 1) + "�", e.str = "�" + e.str.slice(1)), e
                }
                mergeWith(t) {
                    return this.str += t.str, !0
                }
                integrate(t, e) {}
                delete(t) {}
                gc(t) {}
                write(t, e) {
                    t.writeString(0 === e ? this.str : this.str.slice(e))
                }
                getRef() {
                    return 4
                }
            }
            let re = [t => new eM, t => new eN, t => new eK, t => new eq(t.readKey()), t => new eB, t => new eZ(t.readKey()), t => new eQ],
                rr = 0,
                rn = 1,
                ri = 2,
                rl = 3,
                rs = 4,
                ro = 5,
                rc = 6;
            class rh {
                constructor(t) {
                    this.type = t
                }
                getLength() {
                    return 1
                }
                getContent() {
                    return [this.type]
                }
                isCountable() {
                    return !0
                }
                copy() {
                    return new rh(this.type._copy())
                }
                splice(t) {
                    throw a.Nw()
                }
                mergeWith(t) {
                    return !1
                }
                integrate(t, e) {
                    this.type._integrate(t.doc, e)
                }
                delete(t) {
                    let e = this.type._start;
                    for (; null !== e;) e.deleted ? t._mergeStructs.push(e) : e.delete(t), e = e.right;
                    this.type._map.forEach(e => {
                        e.deleted ? t._mergeStructs.push(e) : e.delete(t)
                    }), t.changed.delete(this.type)
                }
                gc(t) {
                    let e = this.type._start;
                    for (; null !== e;) e.gc(t, !0), e = e.right;
                    this.type._start = null, this.type._map.forEach(e => {
                        for (; null !== e;) e.gc(t, !0), e = e.left
                    }), this.type._map = new Map
                }
                write(t, e) {
                    this.type._write(t)
                }
                getRef() {
                    return 7
                }
            }
            let rd = (t, e) => {
                    let r, n = e,
                        i = 0;
                    do i > 0 && (n = tg(n.client, n.clock + i)), r = tR(t, n), i = n.clock - r.id.clock, n = r.redone; while (null !== n && r instanceof rf);
                    return {
                        item: r,
                        diff: i
                    }
                },
                ru = (t, e) => {
                    for (; null !== t && t.keep !== e;) t.keep = e, t = t.parent._item
                },
                ra = (t, e, r) => {
                    let {
                        client: n,
                        clock: i
                    } = e.id, l = new rf(tg(n, i + r), e, tg(n, i + r - 1), e.right, e.rightOrigin, e.parent, e.parentSub, e.content.splice(r));
                    return e.deleted && l.markDeleted(), e.keep && (l.keep = !0), null !== e.redone && (l.redone = tg(e.redone.client, e.redone.clock + r)), e.right = l, null !== l.right && (l.right.left = l), t._mergeStructs.push(l), null !== l.parentSub && null === l.right && l.parent._map.set(l.parentSub, l), e.length = r, l
                },
                rg = (t, e, r, n, i) => {
                    let l;
                    let s = t.doc,
                        o = s.store,
                        c = s.clientID,
                        h = e.redone;
                    if (null !== h) return tT(t, h);
                    let d = e.parent._item,
                        u = null;
                    if (null !== d && !0 === d.deleted) {
                        if (null === d.redone && (!r.has(d) || null === rg(t, d, r, n, i))) return null;
                        for (; null !== d.redone;) d = tT(t, d.redone)
                    }
                    let a = null === d ? e.parent : d.content.type;
                    if (null === e.parentSub) {
                        for (u = e.left, l = e; null !== u;) {
                            let e = u;
                            for (; null !== e && e.parent._item !== d;) e = null === e.redone ? null : tT(t, e.redone);
                            if (null !== e && e.parent._item === d) {
                                u = e;
                                break
                            }
                            u = u.left
                        }
                        for (; null !== l;) {
                            let e = l;
                            for (; null !== e && e.parent._item !== d;) e = null === e.redone ? null : tT(t, e.redone);
                            if (null !== e && e.parent._item === d) {
                                l = e;
                                break
                            }
                            l = l.right
                        }
                    } else if (l = null, e.right && !i) {
                        for (u = e; null !== u && null !== u.right && C(n, u.right.id);) u = u.right;
                        for (; null !== u && null !== u.redone;) u = tT(t, u.redone);
                        if (null === u || u.parent._item !== d || u && null !== u.right) return null
                    } else u = a._map.get(e.parentSub) || null;
                    let g = tN(o, c),
                        f = tg(c, g),
                        p = new rf(f, u, u && u.lastId, l, l && l.id, a, e.parentSub, e.content.copy());
                    return e.redone = f, ru(p, !0), p.integrate(t, 0), p
                };
            class rf extends e0 {
                constructor(t, e, r, n, i, l, s, o) {
                    super(t, o.getLength()), this.origin = r, this.left = e, this.right = n, this.rightOrigin = i, this.parent = l, this.parentSub = s, this.redone = null, this.content = o, this.info = this.content.isCountable() ? g.Qn : 0
                }
                set marker(t) {
                    (this.info & g.Ko) > 0 !== t && (this.info ^= g.Ko)
                }
                get marker() {
                    return (this.info & g.Ko) > 0
                }
                get keep() {
                    return (this.info & g.Vw) > 0
                }
                set keep(t) {
                    this.keep !== t && (this.info ^= g.Vw)
                }
                get countable() {
                    return (this.info & g.Qn) > 0
                }
                get deleted() {
                    return (this.info & g.CY) > 0
                }
                set deleted(t) {
                    this.deleted !== t && (this.info ^= g.CY)
                }
                markDeleted() {
                    this.info |= g.CY
                }
                getMissing(t, e) {
                    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= tN(e, this.origin.client)) return this.origin.client;
                    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= tN(e, this.rightOrigin.client)) return this.rightOrigin.client;
                    if (this.parent && this.parent.constructor === tu && this.id.client !== this.parent.client && this.parent.clock >= tN(e, this.parent.client)) return this.parent.client;
                    if (this.origin && (this.left = tP(t, e, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = tT(t, this.rightOrigin), this.rightOrigin = this.right.id), (this.left && this.left.constructor === e1 || this.right && this.right.constructor === e1) && (this.parent = null), this.parent) {
                        if (this.parent.constructor === tu) {
                            let t = tR(e, this.parent);
                            t.constructor === e1 ? this.parent = null : this.parent = t.content.type
                        }
                    } else this.left && this.left.constructor === rf && (this.parent = this.left.parent, this.parentSub = this.left.parentSub), this.right && this.right.constructor === rf && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
                    return null
                }
                integrate(t, e) {
                    if (e > 0 && (this.id.clock += e, this.left = tP(t, t.doc.store, tg(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(e), this.length -= e), this.parent) {
                        if (!this.left && (!this.right || null !== this.right.left) || this.left && this.left.right !== this.right) {
                            let e, r = this.left;
                            if (null !== r) e = r.right;
                            else if (null !== this.parentSub)
                                for (e = this.parent._map.get(this.parentSub) || null; null !== e && null !== e.left;) e = e.left;
                            else e = this.parent._start;
                            let n = new Set,
                                i = new Set;
                            for (; null !== e && e !== this.right;) {
                                if (i.add(e), n.add(e), ta(this.origin, e.origin)) {
                                    if (e.id.client < this.id.client) r = e, n.clear();
                                    else if (ta(this.rightOrigin, e.rightOrigin)) break
                                } else if (null !== e.origin && i.has(tR(t.doc.store, e.origin))) n.has(tR(t.doc.store, e.origin)) || (r = e, n.clear());
                                else break;
                                e = e.right
                            }
                            this.left = r
                        }
                        if (null !== this.left) {
                            let t = this.left.right;
                            this.right = t, this.left.right = this
                        } else {
                            let t;
                            if (null !== this.parentSub)
                                for (t = this.parent._map.get(this.parentSub) || null; null !== t && null !== t.left;) t = t.left;
                            else t = this.parent._start, this.parent._start = this;
                            this.right = t
                        }
                        null !== this.right ? this.right.left = this : null !== this.parentSub && (this.parent._map.set(this.parentSub, this), null !== this.left && this.left.delete(t)), null === this.parentSub && this.countable && !this.deleted && (this.parent._length += this.length), tO(t.doc.store, this), this.content.integrate(t, this), tV(t, this.parent, this.parentSub), (null !== this.parent._item && this.parent._item.deleted || null !== this.parentSub && null !== this.right) && this.delete(t)
                    } else new e1(this.id, this.length).integrate(t, 0)
                }
                get next() {
                    let t = this.right;
                    for (; null !== t && t.deleted;) t = t.right;
                    return t
                }
                get prev() {
                    let t = this.left;
                    for (; null !== t && t.deleted;) t = t.left;
                    return t
                }
                get lastId() {
                    return 1 === this.length ? this.id : tg(this.id.client, this.id.clock + this.length - 1)
                }
                mergeWith(t) {
                    if (this.constructor === t.constructor && ta(t.origin, this.lastId) && this.right === t && ta(this.rightOrigin, t.rightOrigin) && this.id.client === t.id.client && this.id.clock + this.length === t.id.clock && this.deleted === t.deleted && null === this.redone && null === t.redone && this.content.constructor === t.content.constructor && this.content.mergeWith(t.content)) {
                        let e = this.parent._searchMarker;
                        return e && e.forEach(e => {
                            e.p === t && (e.p = this, !this.deleted && this.countable && (e.index -= this.length))
                        }), t.keep && (this.keep = !0), this.right = t.right, null !== this.right && (this.right.left = this), this.length += t.length, !0
                    }
                    return !1
                }
                delete(t) {
                    if (!this.deleted) {
                        let e = this.parent;
                        this.countable && null === this.parentSub && (e._length -= this.length), this.markDeleted(), A(t.deleteSet, this.id.client, this.id.clock, this.length), tV(t, e, this.parentSub), this.content.delete(t)
                    }
                }
                gc(t, e) {
                    if (!this.deleted) throw a.zR();
                    this.content.gc(t), e ? tJ(t, this, new e1(this.id, this.length)) : this.content = new e5(this.length)
                }
                write(t, e) {
                    let r = e > 0 ? tg(this.id.client, this.id.clock + e - 1) : this.origin,
                        n = this.rightOrigin,
                        i = this.parentSub,
                        l = this.content.getRef() & g.kr | (null === r ? 0 : g.x1) | (null === n ? 0 : g.rc) | (null === i ? 0 : g.cq);
                    if (t.writeInfo(l), null !== r && t.writeLeftID(r), null !== n && t.writeRightID(n), null === r && null === n) {
                        let e = this.parent;
                        if (void 0 !== e._item) {
                            let r = e._item;
                            if (null === r) {
                                let r = tf(e);
                                t.writeParentInfo(!0), t.writeString(r)
                            } else t.writeParentInfo(!1), t.writeLeftID(r.id)
                        } else e.constructor === String ? (t.writeParentInfo(!0), t.writeString(e)) : e.constructor === tu ? (t.writeParentInfo(!1), t.writeLeftID(e)) : a.zR();
                        null !== i && t.writeString(i)
                    }
                    this.content.write(t, e)
                }
            }
            let rp = (t, e) => rw[e & g.kr](t),
                rw = [() => {
                    a.zR()
                }, t => new e5(t.readLen()), t => {
                    let e = t.readLen(),
                        r = [];
                    for (let n = 0; n < e; n++) {
                        let e = t.readString();
                        "undefined" === e ? r.push(void 0) : r.push(JSON.parse(e))
                    }
                    return new e6(r)
                }, t => new e8(t.readBuf()), t => new rt(t.readString()), t => new e7(t.readJSON()), t => new e9(t.readKey(), t.readJSON()), t => new rh(re[t.readTypeRef()](t)), t => {
                    let e = t.readLen(),
                        r = [];
                    for (let n = 0; n < e; n++) r.push(t.readAny());
                    return new e3(r)
                }, t => new e4(e2(t.readString(), t.readAny())), () => {
                    a.zR()
                }];
            class r_ extends e0 {
                get deleted() {
                    return !0
                }
                delete() {}
                mergeWith(t) {
                    return this.constructor === t.constructor && (this.length += t.length, !0)
                }
                integrate(t, e) {
                    a.zR()
                }
                write(t, e) {
                    t.writeInfo(10), o.uE(t.restEncoder, this.length - e)
                }
                getMissing(t, e) {
                    return null
                }
            }
            let rk = "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
                rm = "__ $YJS$ __";
            !0 === rk[rm] && console.warn("Yjs was already imported. Importing different versions of Yjs often leads to issues."), rk[rm] = !0
        }
    }
]);
//# sourceMappingURL=91bbf309-b834bec362a19596.js.map