(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [417], {
        33266: function(e, t, n) {
            "use strict";
            n.d(t, {
                Nl: function() {
                    return G
                },
                m3: function() {
                    return J
                },
                c1: function() {
                    return L
                }
            });
            var r = n(81333),
                o = n(95993),
                a = n(46988),
                c = n(81891),
                i = n(20406),
                u = n(13089),
                s = n(96412),
                f = n(41701),
                l = n(90129),
                d = n(29017),
                p = n(48200),
                h = n(95235),
                v = n(28526),
                m = n.n(v),
                y = n(91760),
                b = n(46358);

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function S(e) {
                function t(e) {
                    if (Object(e) !== e) return Promise.reject(TypeError(e + " is not an object."));
                    var t = e.done;
                    return Promise.resolve(e.value).then(function(e) {
                        return {
                            value: e,
                            done: t
                        }
                    })
                }
                return (S = function(e) {
                    this.s = e, this.n = e.next
                }).prototype = {
                    s: null,
                    n: null,
                    next: function() {
                        return t(this.n.apply(this.s, arguments))
                    },
                    return: function(e) {
                        var n = this.s.return;
                        return void 0 === n ? Promise.resolve({
                            value: e,
                            done: !0
                        }) : t(n.apply(this.s, arguments))
                    },
                    throw: function(e) {
                        var n = this.s.return;
                        return void 0 === n ? Promise.reject(e) : t(n.apply(this.s, arguments))
                    }
                }, new S(e)
            }
            var w = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                    return I(t).then(function(t) {
                        return {
                            value: e,
                            done: !1
                        }
                    })
                },
                O = function(e) {
                    var t = e.match(/(<[^>]+>|<\/[^>]+>)|\S+/g);
                    if (!t) throw Error("Could not parse tokens");
                    return t
                },
                Z = function(e, t) {
                    var n, r = (0, b.bh)(),
                        o = [],
                        c = t.id,
                        i = t.index,
                        u = t.html,
                        s = t.layout,
                        f = t.raw,
                        l = t.cardSize,
                        d = t.eventId,
                        p = function(e, t) {
                            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (!n) {
                                if (Array.isArray(e) || (n = function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return g(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
                                        }
                                    }(e))) {
                                    n && (e = n);
                                    var r = 0,
                                        o = function() {};
                                    return {
                                        s: o,
                                        n: function() {
                                            return r >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[r++]
                                            }
                                        },
                                        e: function(e) {
                                            throw e
                                        },
                                        f: o
                                    }
                                }
                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var a, c = !0,
                                i = !1;
                            return {
                                s: function() {
                                    n = n.call(e)
                                },
                                n: function() {
                                    var e = n.next();
                                    return c = e.done, e
                                },
                                e: function(e) {
                                    i = !0, a = e
                                },
                                f: function() {
                                    try {
                                        c || null == n.return || n.return()
                                    } finally {
                                        if (i) throw a
                                    }
                                }
                            }
                        }(O(u));
                    try {
                        for (p.s(); !(n = p.n()).done;) {
                            var v = n.value;
                            v.startsWith("<") ? o.push(v) : o.push(v + " ")
                        }
                    } catch (e) {
                        p.e(e)
                    } finally {
                        p.f()
                    }
                    return (0, h.Z)({}, Symbol.asyncIterator, function() {
                        return {
                            done: !1,
                            i: 0,
                            next: function() {
                                if (this.done) return Promise.resolve({
                                    value: void 0,
                                    done: !0
                                });
                                for (var t = (0, a.qn)(e)(r.getState());;) {
                                    var n = {
                                        id: c,
                                        eventId: d,
                                        index: i,
                                        html: o.slice(0, this.i + 1).join(""),
                                        cardComplete: this.i === o.length - 1,
                                        layout: s,
                                        cardSize: l,
                                        raw: f
                                    };
                                    return this.i++, this.i === o.length && (this.done = !0), w(n, t)
                                }
                            }
                        }
                    })
                },
                x = function(e) {
                    (0, l.Z)(r, e);
                    var t, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, p.Z)(r);
                        if (t) {
                            var o = (0, p.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, o)
                        } else e = n.apply(this, arguments);
                        return (0, d.Z)(this, e)
                    });

                    function r(e) {
                        (0, s.Z)(this, r);
                        var t, o, a = (t = (0, i.Z)(m().mark(function t(n, r) {
                            var o, a, c, i, u, s;
                            return m().wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!("done" === n.event || "cancel" === n.event)) {
                                            t.next = 3;
                                            break
                                        }
                                        return r.enqueue(n), t.abrupt("return");
                                    case 3:
                                        o = !1, a = !1, t.prev = 5, i = function(e) {
                                            var t, n, r, o = 2;
                                            for ("undefined" != typeof Symbol && (n = Symbol.asyncIterator, r = Symbol.iterator); o--;) {
                                                if (n && null != (t = e[n])) return t.call(e);
                                                if (r && null != (t = e[r])) return new S(t.call(e));
                                                n = "@@asyncIterator", r = "@@iterator"
                                            }
                                            throw TypeError("Object is not async iterable")
                                        }(Z(e, n.data));
                                    case 7:
                                        return t.next = 9, i.next();
                                    case 9:
                                        if (!(o = !(u = t.sent).done)) {
                                            t.next = 15;
                                            break
                                        }(s = u.value) && r.enqueue({
                                            id: s.eventId,
                                            event: "data",
                                            data: s
                                        });
                                    case 12:
                                        o = !1, t.next = 7;
                                        break;
                                    case 15:
                                        t.next = 21;
                                        break;
                                    case 17:
                                        t.prev = 17, t.t0 = t.catch(5), a = !0, c = t.t0;
                                    case 21:
                                        if (t.prev = 21, t.prev = 22, !(o && null != i.return)) {
                                            t.next = 26;
                                            break
                                        }
                                        return t.next = 26, i.return();
                                    case 26:
                                        if (t.prev = 26, !a) {
                                            t.next = 29;
                                            break
                                        }
                                        throw c;
                                    case 29:
                                        return t.finish(26);
                                    case 30:
                                        return t.finish(21);
                                    case 31:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, null, [
                                [5, 17, 21, 31],
                                [22, , 26, 30]
                            ])
                        })), function(e, n) {
                            return t.apply(this, arguments)
                        });
                        return o = n.call(this, {
                            transform: a
                        }), (0, h.Z)((0, f.Z)(o), "index", 0), (0, h.Z)((0, f.Z)(o), "startTime", performance.now()), o
                    }
                    return (0, u.Z)(r)
                }(o.GJ),
                I = function(e) {
                    return new Promise(function(t) {
                        return y.iK(t, e)
                    })
                },
                k = function(e) {
                    (0, l.Z)(r, e);
                    var t, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, p.Z)(r);
                        if (t) {
                            var o = (0, p.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, o)
                        } else e = n.apply(this, arguments);
                        return (0, d.Z)(this, e)
                    });

                    function r(e) {
                        var t, o;
                        return (0, s.Z)(this, r), t = n.call(this, {
                            transform: (o = (0, i.Z)(m().mark(function n(r, o) {
                                var a, c, i;
                                return m().wrap(function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (!("data" !== r.event)) {
                                                n.next = 3;
                                                break
                                            }
                                            return o.enqueue(r), n.abrupt("return");
                                        case 3:
                                            a = r.data, c = performance.now() - t.startTime, i = O(a.html), e({
                                                index: t.index,
                                                duration: c,
                                                numTokens: i.length
                                            }), t.index++, t.startTime = performance.now(), o.enqueue(r);
                                        case 10:
                                        case "end":
                                            return n.stop()
                                    }
                                }, n)
                            })), function(e, t) {
                                return o.apply(this, arguments)
                            })
                        }), (0, h.Z)((0, f.Z)(t), "index", 0), (0, h.Z)((0, f.Z)(t), "startTime", performance.now()), t
                    }
                    return (0, u.Z)(r)
                }(o.GJ);

            function T(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(n), !0).forEach(function(t) {
                        (0, h.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var R = function(e) {
                    (0, l.Z)(r, e);
                    var t, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, p.Z)(r);
                        if (t) {
                            var o = (0, p.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, o)
                        } else e = n.apply(this, arguments);
                        return (0, d.Z)(this, e)
                    });

                    function r() {
                        var e, t;
                        return (0, s.Z)(this, r), e = n.call(this, {
                            transform: (t = (0, i.Z)(m().mark(function t(n, r) {
                                return m().wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            "done" === n.event || "cancel" === n.event ? r.enqueue(j(j({}, n), {}, {
                                                content: e.content
                                            })) : (e.content += n.data.raw || "", r.enqueue(n));
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            })), function(e, n) {
                                return t.apply(this, arguments)
                            })
                        }), (0, h.Z)((0, f.Z)(e), "content", ""), e
                    }
                    return (0, u.Z)(r)
                }(o.GJ),
                P = function(e) {
                    (0, l.Z)(r, e);
                    var t, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, p.Z)(r);
                        if (t) {
                            var o = (0, p.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, o)
                        } else e = n.apply(this, arguments);
                        return (0, d.Z)(this, e)
                    });

                    function r() {
                        (0, s.Z)(this, r);
                        var e, t, o, a = function(e, t) {
                            for (;;) {
                                var n = o._buffer.match(/<section\b[^>]*>(?:(?!<\/?section\b)[\s\S])*<\/section>/i);
                                if (!n) break;
                                var r = n[0],
                                    a = n.index;
                                o._buffer = o._buffer.slice(a + r.length);
                                var c = r + "\n\n";
                                e.enqueue({
                                    id: t,
                                    event: "data",
                                    data: c
                                })
                            }
                        };
                        return o = n.call(this, {
                            transform: (e = (0, i.Z)(m().mark(function e(t, n) {
                                return m().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("data" !== t.event) {
                                                e.next = 6;
                                                break
                                            }
                                            if (t.data) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return o._buffer += t.data, a(n, t.id), e.abrupt("return");
                                        case 6:
                                            o.lastId = t.id, n.enqueue(t);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            })), function(t, n) {
                                return e.apply(this, arguments)
                            }),
                            flush: (t = (0, i.Z)(m().mark(function e(t) {
                                return m().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            a(t, o.lastId);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            })), function(e) {
                                return t.apply(this, arguments)
                            })
                        }), (0, h.Z)((0, f.Z)(o), "_buffer", ""), (0, h.Z)((0, f.Z)(o), "lastId", void 0), o
                    }
                    return (0, u.Z)(r)
                }(o.GJ),
                E = function(e) {
                    (0, l.Z)(r, e);
                    var t, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, p.Z)(r);
                        if (t) {
                            var o = (0, p.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, o)
                        } else e = n.apply(this, arguments);
                        return (0, d.Z)(this, e)
                    });

                    function r() {
                        return (0, s.Z)(this, r), n.call(this, {
                            transform: function(e, t) {
                                if ("done" === e.event) {
                                    t.enqueue({
                                        id: e.id,
                                        event: "done",
                                        finishReason: e.data,
                                        content: ""
                                    });
                                    return
                                }
                                if ("cancel" === e.event) {
                                    t.enqueue({
                                        id: e.id,
                                        event: "cancel",
                                        content: ""
                                    });
                                    return
                                }
                                if ("content" === e.event) {
                                    t.enqueue({
                                        id: e.id,
                                        event: "data",
                                        data: e.data
                                    });
                                    return
                                }
                                console.error("[StreamMessageEventParser] unknown event type", e)
                            }
                        })
                    }
                    return (0, u.Z)(r)
                }(o.GJ),
                C = n(85942),
                A = n(17665),
                q = n(90399);

            function B(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(Object(n), !0).forEach(function(t) {
                        (0, h.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var N = function(e) {
                    try {
                        var t = new DOMParser().parseFromString(e, "text/html").querySelector("section");
                        if (!t) return console.error("Error getting section innner html, section not found"), e;
                        return t.innerHTML
                    } catch (t) {
                        return console.error("Error getting section innner html", t), e
                    }
                },
                z = function(e) {
                    (0, l.Z)(r, e);
                    var t, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, p.Z)(r);
                        if (t) {
                            var o = (0, p.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, o)
                        } else e = n.apply(this, arguments);
                        return (0, d.Z)(this, e)
                    });

                    function r(e, t) {
                        var o, a;
                        return (0, s.Z)(this, r), o = n.call(this, {
                            transform: (a = (0, i.Z)(m().mark(function t(n, r) {
                                var a, c, i, u, s, f, l, d, p, h;
                                return m().wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!("data" !== n.event)) {
                                                t.next = 3;
                                                break
                                            }
                                            return r.enqueue(n), t.abrupt("return");
                                        case 3:
                                            return i = n.data, t.next = 6, (0, C.T)(i, D(D({}, e.imageOptions), {}, {
                                                removeImagesFromLayouts: !0,
                                                uploadImages: !1,
                                                resetImageSearches: !1
                                            }));
                                        case 6:
                                            u = t.sent, s = q.C2.generate(), f = N(u), d = null === (a = (l = (0, A.a)({
                                                chunk: {
                                                    eventId: n.id,
                                                    index: o.index,
                                                    html: f,
                                                    raw: f,
                                                    id: s,
                                                    cardComplete: !0
                                                },
                                                docFormatKey: e.docFormatKey
                                            })).attrs) || void 0 === a ? void 0 : a.layout, p = null === (c = l.attrs) || void 0 === c ? void 0 : c.cardSize, h = {
                                                id: s,
                                                eventId: n.id,
                                                index: o.index,
                                                html: f,
                                                cardComplete: !0,
                                                layout: d,
                                                cardSize: p,
                                                raw: i
                                            }, r.enqueue({
                                                id: n.id,
                                                event: "data",
                                                data: h
                                            }), o.index++;
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            })), function(e, t) {
                                return a.apply(this, arguments)
                            })
                        }), (0, h.Z)((0, f.Z)(o), "index", 0), null != t && (o.index = t + 1), o
                    }
                    return (0, u.Z)(r)
                }(o.GJ),
                F = n(2702),
                M = "CANCEL",
                L = function(e) {
                    return new o.GJ({
                        transform: function(t, n) {
                            e(t), n.enqueue(t)
                        }
                    })
                },
                G = function(e) {
                    var t = e.stream,
                        n = e.docId,
                        o = e.lastCompletedCardId,
                        i = e.lastCompletedCardIndex,
                        u = e.interactionId,
                        s = e.options,
                        f = e.store,
                        l = _(t, s, i).tee(),
                        d = (0, r.Z)(l, 2),
                        p = d[0],
                        h = d[1],
                        v = p.pipeThrough(L(function(e) {
                            "done" === e.event && c.a.trackStreamResponse(f, {
                                interactionId: u,
                                outputContent: e.content
                            })
                        }));
                    (0, F.GO)(v, {});
                    var m = h.pipeThrough(new x(u));
                    f.dispatch((0, a.kO)({
                        stream: {
                            id: u,
                            status: "running",
                            stream: m,
                            docId: n,
                            isResuming: !0,
                            lastCompletedCardId: o
                        }
                    }));
                    var y = (0, a.oH)(n)(f.getState());
                    if (!y) throw Error("Expected valid StreamResponse when resuming from stream");
                    return y
                },
                J = function(e) {
                    var t, n = e.stream,
                        o = e.onCancel,
                        i = e.interactionId,
                        u = e.options,
                        s = e.bufferCards,
                        f = void 0 === s ? 2 : s,
                        l = e.docId,
                        d = e.store,
                        p = _(n, u).tee(),
                        h = (0, r.Z)(p, 2),
                        v = h[0],
                        m = h[1],
                        y = v.pipeThrough(new k(function(e) {
                            d.dispatch((0, a.Ms)({
                                interactionId: i,
                                data: e
                            }))
                        })).pipeThrough(L(function(e) {
                            "done" === e.event && c.a.trackStreamResponse(d, {
                                interactionId: i,
                                outputContent: e.content
                            })
                        })),
                        b = m.pipeThrough(new x(i));
                    d.dispatch((0, a.kO)({
                        stream: {
                            id: i,
                            status: "running",
                            stream: b,
                            isResuming: !1,
                            docId: l
                        }
                    }));
                    var g = new Promise(function(e, n) {
                            t = n, (0, F.GO)(y, {
                                onError: function(e) {
                                    n(e)
                                },
                                onMessage: function(t) {
                                    if ("done" === t.event) {
                                        e("DONE");
                                        return
                                    }
                                    "data" === t.event && t.data.index + 1 >= f && e("READY")
                                }
                            })
                        }).catch(function(e) {
                            if (e === M) return M;
                            throw e
                        }),
                        S = !1;
                    return {
                        promise: g,
                        cancel: function() {
                            if (!S) {
                                var e;
                                console.log("[AIStream] cancelling..."), S = !0, o(), null === (e = t) || void 0 === e || e(M)
                            }
                        }
                    }
                },
                _ = function(e, t, n) {
                    return e.pipeThrough(new E).pipeThrough(new P).pipeThrough(new z(t, n)).pipeThrough(L(function(e) {
                        "data" === e.event && console.log("[AIStream] processed card ".concat(e.data.index + 1))
                    })).pipeThrough(new R).pipeThrough(L(function(e) {
                        "done" === e.event && console.log("[AIStream] done (".concat(e.finishReason, ")")), "cancel" === e.event && console.log("[AIStream] cancelled")
                    }))
                }
        },
        81891: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return h
                }
            });
            var r = n(82269),
                o = n(95235),
                a = n(6201),
                c = n(46988),
                i = ["startTime"],
                u = ["startTime"],
                s = ["startTime"],
                f = ["startTime"],
                l = ["startTime"];

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach(function(t) {
                        (0, o.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var h = {
                trackRequestSent: function(e, t) {
                    console.log("[AIStream] EVENT: ai.request.sent"), (0, a.hq)(t);
                    var n = performance.now();
                    e.dispatch((0, c.Jh)(p(p({}, t), {}, {
                        startTime: n
                    })))
                },
                trackStreamError: function(e, t) {
                    e.dispatch((0, c.fj)({
                        endTime: performance.now(),
                        interactionId: t.interactionId
                    }));
                    var n = (0, c.Sn)(t.interactionId)(e.getState());
                    if (n) {
                        var o = n.startTime,
                            u = (0, r.Z)(n, i),
                            s = t.errorName,
                            f = t.errorMessage,
                            l = t.errorCode,
                            d = p(p({}, u), {}, {
                                errorName: s,
                                errorMessage: f,
                                errorCode: l,
                                outputMessage: "",
                                latency: performance.now() - o
                            });
                        console.log("[AIStream] EVENT: ai.request.error"), (0, a.pQ)(d)
                    }
                },
                trackStreamAbort: function(e, t) {
                    var n = (0, c.Sn)(t.interactionId)(e.getState());
                    if (n) {
                        var o = n.startTime,
                            i = p(p({}, (0, r.Z)(n, u)), {}, {
                                abortReason: t.abortReason,
                                timeToAbort: performance.now() - o
                            });
                        console.log("[AIStream] EVENT: ai.request.abort"), (0, a.mV)(i)
                    }
                },
                trackStreamStart: function(e, t) {
                    e.dispatch((0, c.af)(t));
                    var n = (0, c.Sn)(t.interactionId)(e.getState());
                    if (n) {
                        var o = n.startTime,
                            i = p(p({}, (0, r.Z)(n, s)), {}, {
                                timeToStart: performance.now() - o
                            });
                        console.log("[AIStream] EVENT: ai.request.streamStart"), (0, a.qZ)(i)
                    }
                },
                trackStreamResponse: function(e, t) {
                    e.dispatch((0, c.fj)(p({
                        endTime: performance.now()
                    }, t)));
                    var n = (0, c.Sn)(t.interactionId)(e.getState());
                    if (n) {
                        n.startTime;
                        var o = (0, r.Z)(n, f);
                        console.log("[AIStream] EVENT: ai.request.response"), (0, a.o)(o)
                    }
                },
                trackStreamComplete: function(e, t) {
                    var n = (0, c.Sn)(t)(e.getState());
                    if (n) {
                        var o = n.startTime,
                            i = p(p({}, (0, r.Z)(n, l)), {}, {
                                timeToComplete: performance.now() - o
                            });
                        console.log("[AIStream] EVENT: ai.request.complete"), (0, a.gb)(i)
                    }
                }
            }
        },
        49945: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return h
                }
            });
            var r = n(12741),
                o = n(2284),
                a = n.n(o),
                c = n(1313),
                i = n.n(c),
                u = n(76451),
                s = n(23533),
                f = ["gridLayout", "table", "gallery"],
                l = ["timeline", "imagesText", "textBoxes"],
                d = function(e) {
                    return i()(e)()
                },
                p = function(e, t) {
                    var n = Math.floor(i()(t)() * e.length);
                    return e[n]
                },
                h = function(e) {
                    var t, n, o, c, i = e.bodyContent,
                        h = e.theme,
                        v = e.docFormatKey,
                        m = e.index,
                        y = e.seed,
                        b = e.cardId,
                        g = e.accentBackground,
                        S = e.layout,
                        w = e.cardSize,
                        O = e.addContributorsBlock,
                        Z = (null == i ? void 0 : i.filter(function(e) {
                            var t;
                            return "image" === e.type && (null === (t = e.attrs) || void 0 === t ? void 0 : t.src)
                        })) || [],
                        x = null == i ? void 0 : i.some(function(e) {
                            return f.includes(e.type) || "smartLayout" === e.type && e.attrs && l.includes(e.attrs.variantKey)
                        }),
                        I = {
                            container: {},
                            layout: S,
                            id: b
                        };
                    w && (I.cardSize = w), g || (i && Z.length > 0 ? (g = {
                        type: u.E.IMAGE,
                        image: Z[0].attrs,
                        source: Z[0].attrs.source
                    }, a().apply(void 0, [i].concat((0, r.Z)(Z)))) : !g && h && (g = p(h.config.accentBackgrounds || [], y))), "webpage" !== v || S || (0 === m ? (I.cardSize = "full", I.layout = p(["behind", "right"], y)) : .7 > d(y) ? (I.cardSize = "full", I.layout = x ? "blank" : p(["left", "right", "behind", "blank"], y)) : (I.cardSize = "default", .6 > d(y) && (I.background = g), I.layout = "blank")), "deck" !== v || S || (0 !== m || x ? x ? I.layout = "blank" : I.layout = p(["left", "left", "right", "right", "behind", "top"], y) : I.layout = p(["left", "right"], y)), "document" !== v || S || (0 === m ? (I.cardSize = "full", I.layout = "behind") : I.layout = "blank"), (void 0 === O || O) && 0 === m && "webpage" !== v && (null == i || i.push({
                        type: "contributors"
                    }));
                    var k = {
                            type: "cardLayoutItem",
                            attrs: {
                                itemId: "body"
                            },
                            content: null != i && i.length ? i : [{
                                type: "paragraph"
                            }]
                        },
                        T = "blank" === I.layout ? null : {
                            type: "cardAccentLayoutItem",
                            attrs: {
                                itemId: "accent",
                                background: g
                            }
                        },
                        j = null === (t = g) || void 0 === t ? void 0 : null === (n = t.image) || void 0 === n ? void 0 : null === (o = n.meta) || void 0 === o ? void 0 : o.average_color,
                        R = j && (0, s.DP)(j);
                    return "behind" === I.layout && (R || .5 > d(y)) && (null !== (c = I.container) && void 0 !== c || (I.container = {}), I.container.background = {
                        type: u.E.COLOR,
                        color: {
                            hex: "#000000"
                        }
                    }), {
                        type: "card",
                        attrs: I,
                        content: [k, T].filter(Boolean)
                    }
                }
        },
        17665: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return p
                },
                r: function() {
                    return h
                }
            });
            var r, o = n(20406),
                a = n(28526),
                c = n.n(a),
                i = n(65742),
                u = n(72338),
                s = n(2492),
                f = n(36738),
                l = n(74993),
                d = n(49945),
                p = function(e) {
                    var t = e.chunk,
                        n = e.theme,
                        r = e.docFormatKey,
                        o = t.id,
                        a = t.html,
                        c = t.layout,
                        i = t.cardSize,
                        s = t.index,
                        p = t.cardComplete,
                        h = (0, f.yg)(),
                        v = (0, u.J1)(h),
                        m = (0, l.T)(a, v).content;
                    return (0, d.S)({
                        bodyContent: m.toJSON(),
                        theme: n,
                        docFormatKey: r,
                        cardId: o,
                        index: s,
                        seed: o,
                        layout: c,
                        cardSize: i,
                        addContributorsBlock: p
                    })
                },
                h = (r = (0, o.Z)(c().mark(function e(t, n, r, o) {
                    var a, u;
                    return c().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, s.y)(t, {
                                    removeImagesFromLayouts: !0,
                                    license: o
                                });
                            case 2:
                                return a = e.sent.content.toJSON().filter(function(e) {
                                    return "card" === e.type
                                }).map(function(e, t) {
                                    return (0, d.S)({
                                        bodyContent: e.content,
                                        theme: n,
                                        docFormatKey: r,
                                        index: t
                                    })
                                }), u = (0, i.getCardTitle)(a[0]), e.abrupt("return", {
                                    doc: (0, f.vL)({
                                        docFlags: {
                                            cardLayoutsEnabled: !0
                                        },
                                        format: r
                                    }, a),
                                    title: u
                                });
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e, t, n, o) {
                    return r.apply(this, arguments)
                })
        },
        70099: function(e, t, n) {
            "use strict";
            n.d(t, {
                bo: function() {
                    return u
                },
                dn: function() {
                    return i
                },
                g5: function() {
                    return s
                }
            });
            var r = n(2784),
                o = n(6201),
                a = n(23313),
                c = n(98875),
                i = function(e) {
                    var t = (0, c.ye)("openAiStatus"),
                        n = (0, r.useState)("input"),
                        a = n[0],
                        i = n[1],
                        u = (0, r.useState)(e),
                        s = u[0],
                        f = u[1],
                        l = (0, r.useState)();
                    return {
                        step: a,
                        setStep: i,
                        generateFormat: s,
                        setGenerateFormat: f,
                        selectedTheme: l[0],
                        openAiStatus: t,
                        setSelectedTheme: l[1],
                        interactionId: (0, r.useMemo)(function() {
                            return (0, o.nZ)()
                        }, [])
                    }
                },
                u = function() {
                    var e = (0, a.BCl)({
                            variables: {
                                workspaceId: null,
                                archived: !1
                            },
                            fetchPolicy: "cache-first",
                            nextFetchPolicy: "cache-only"
                        }),
                        t = e.data,
                        n = e.loading;
                    return {
                        themes: (0, r.useMemo)(function() {
                            return (null == t ? void 0 : t.themes) || []
                        }, [t]),
                        isThemesLoading: n
                    }
                },
                s = function() {
                    return (0, c.ye)("azureOpenAI") ? a.nyn.Azure : a.nyn.Openai
                }
        },
        80660: function() {}
    }
]);
//# sourceMappingURL=417-65bc05e11994bb4e.js.map