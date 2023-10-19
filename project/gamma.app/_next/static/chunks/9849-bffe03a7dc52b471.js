"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9849], {
        97442: function(e, t, r) {
            r.d(t, {
                I: function() {
                    return j
                }
            });
            var n = r(95235),
                i = r(82269),
                o = r(55452),
                a = r(49294),
                c = r(55479),
                s = r(20372),
                u = r(45650),
                l = r(27777),
                d = r(71354),
                p = r(21891),
                f = r(35316),
                g = r(2784),
                h = r(52322),
                m = ["url", "placeholder", "isDisabled", "variant", "customLabel", "onClick"];

            function b(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var j = function(e) {
                var t = e.url,
                    r = e.placeholder,
                    n = e.isDisabled,
                    b = void 0 !== n && n,
                    j = e.variant,
                    y = e.customLabel,
                    x = e.onClick,
                    O = (0, i.Z)(e, m),
                    w = (0, g.useState)(!1),
                    P = w[0],
                    k = w[1],
                    A = (0, a.V)(t),
                    S = A.hasCopied,
                    C = A.onCopy,
                    E = (0, g.useRef)(null),
                    D = (0, c.p)(),
                    I = "link-copied-toast",
                    _ = (0, s.S)({
                        base: !0,
                        sm: !1
                    }, {
                        fallback: "sm"
                    });
                (0, g.useEffect)(function() {
                    E.current && P && (E.current.focus(), E.current.select())
                }, [P]);
                var U = (0, g.useCallback)(function() {
                        return k(!0)
                    }, []),
                    R = (0, g.useCallback)(function() {
                        return k(!1)
                    }, []),
                    T = (0, g.useCallback)(function() {
                        C(), D.isActive(I) || D({
                            id: I,
                            title: (0, h.jsx)(o.cC, {
                                id: "pQjjYo"
                            }),
                            status: "success",
                            duration: 5e3
                        }), null == x || x()
                    }, [C, D]),
                    M = y || (0, h.jsx)(o.cC, {
                        id: "he3ygx"
                    }),
                    Z = !!(_ && void 0 !== y),
                    H = (0, h.jsx)(u.z, v(v(v({
                        isDisabled: b,
                        onClick: T,
                        variant: void 0 === j ? "plain" : j,
                        w: "100%"
                    }, Z ? {} : {
                        height: "2rem",
                        margin: 2
                    }), b ? {
                        opacity: "1 !important",
                        color: "gray.400",
                        _hover: {
                            opacity: "1"
                        },
                        _active: {
                            boxShadow: "0 none"
                        }
                    } : {}), {}, {
                        children: S ? (0, h.jsx)(o.cC, {
                            id: "6V3Ea3"
                        }) : M
                    })),
                    N = (0, h.jsx)(l.I, v({
                        ref: E,
                        type: "text",
                        variant: "filled",
                        value: t,
                        isReadOnly: !0,
                        isDisabled: b,
                        placeholder: r || void 0,
                        onClick: U,
                        onBlur: R,
                        pointerEvents: b ? "none" : void 0,
                        h: "3rem"
                    }, O));
                return Z ? (0, h.jsxs)(d.K, {
                    w: "100%",
                    children: [N, H]
                }) : (0, h.jsxs)(p.B, {
                    children: [N, (0, h.jsx)(f.x, {
                        h: "3rem",
                        zIndex: 1,
                        w: "unset",
                        children: H
                    })]
                })
            }
        },
        16034: function(e, t, r) {
            r.d(t, {
                V: function() {
                    return d
                }
            });
            var n = r(96412),
                i = r(13089),
                o = r(41701),
                a = r(90129),
                c = r(29017),
                s = r(48200),
                u = r(95235),
                l = r(23313),
                d = function(e) {
                    (0, a.Z)(d, e);
                    var t, r = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, r = (0, s.Z)(d);
                        if (t) {
                            var n = (0, s.Z)(this).constructor;
                            e = Reflect.construct(r, arguments, n)
                        } else e = r.apply(this, arguments);
                        return (0, c.Z)(this, e)
                    });

                    function d(e) {
                        var t, i = e.variables,
                            a = e.systemPromptOperation,
                            c = e.userPromptOperation,
                            s = e.params;
                        return (0, n.Z)(this, d), t = r.call(this, {
                            params: s
                        }), (0, u.Z)((0, o.Z)(t), "variables", void 0), (0, u.Z)((0, o.Z)(t), "systemPromptOperation", void 0), (0, u.Z)((0, o.Z)(t), "userPromptOperation", void 0), t.variables = i, t.systemPromptOperation = a, t.userPromptOperation = c, t
                    }
                    return (0, i.Z)(d, [{
                        key: "getSystemChatMessage",
                        value: function(e) {
                            return {
                                role: l.XaP.System,
                                operation: this.systemPromptOperation,
                                variables: e
                            }
                        }
                    }, {
                        key: "getUserChatMessage",
                        value: function(e) {
                            return {
                                role: l.XaP.User,
                                operation: this.userPromptOperation,
                                variables: e
                            }
                        }
                    }]), d
                }(r(83995).j)
        },
        83995: function(e, t, r) {
            r.d(t, {
                j: function() {
                    return l
                }
            });
            var n = r(12741),
                i = r(96412),
                o = r(13089),
                a = r(95235);

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach(function(t) {
                        (0, a.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var u = {
                    model: "gpt-3.5-turbo",
                    provider: r(23313).nyn.Azure
                },
                l = function() {
                    function e(t) {
                        var r = t.params;
                        (0, i.Z)(this, e), (0, a.Z)(this, "params", void 0), this.params = s(s({}, u), r)
                    }
                    return (0, o.Z)(e, [{
                        key: "prepare",
                        value: function(e) {
                            var t = e.variables,
                                r = e.history,
                                i = void 0 === r ? [] : r,
                                o = e.params,
                                a = this.getSystemChatMessage(t),
                                c = this.getUserChatMessage(t);
                            return {
                                messages: [a].concat((0, n.Z)(i), [c]),
                                params: s(s({}, this.params), o)
                            }
                        }
                    }]), e
                }()
        },
        12172: function(e, t, r) {
            r.d(t, {
                c: function() {
                    return a
                }
            });
            var n = r(72338),
                i = r(30764),
                o = r(314),
                a = function(e, t) {
                    var r = c(e),
                        n = i.HY.from(t),
                        a = r.serializeFragment(n),
                        s = (0, o.S)(a),
                        u = document.createElement("div");
                    return u.appendChild(s), u.innerHTML
                },
                c = function(e) {
                    var t = e.schema,
                        r = e.extensionManager;
                    if (t.cached.aiDomSerializer) return t.cached.aiDomSerializer;
                    var o = i.PW.marksFromSchema(t),
                        a = i.PW.nodesFromSchema(t),
                        c = e.extensionManager.attributes;
                    r.extensions.forEach(function(e) {
                        if (e.config.renderHTMLforAI) {
                            var t = c.filter(function(t) {
                                return t.type === e.name
                            });
                            a[e.name] && (a[e.name] = function(r) {
                                var i = (0, n.m7)(r, t);
                                return e.config.renderHTMLforAI.bind(e)({
                                    node: r,
                                    HTMLAttributes: i
                                })
                            }), o[e.name] && (o[e.name] = function(r, i) {
                                var o = (0, n.m7)(r, t);
                                return e.config.renderHTMLforAI.bind(e)({
                                    mark: r,
                                    inline: i,
                                    HTMLAttributes: o
                                })
                            })
                        }
                    });
                    var s = new i.PW(a, o);
                    return t.cached.aiDomSerializer = s, s
                }
        },
        58202: function(e, t, r) {
            r.d(t, {
                T1: function() {
                    return p
                },
                VG: function() {
                    return g
                },
                Vh: function() {
                    return h
                },
                rm: function() {
                    return f
                }
            });
            var n = r(13089),
                i = r(96412),
                o = r(41701),
                a = r(90129),
                c = r(29017),
                s = r(48200),
                u = r(3907),
                l = r(95235);

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = (0, s.Z)(e);
                    if (t) {
                        var i = (0, s.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return (0, c.Z)(this, r)
                }
            }
            var p = function(e) {
                    (0, a.Z)(r, e);
                    var t = d(r);

                    function r(e, n) {
                        var a;
                        return (0, i.Z)(this, r), a = t.call(this, e), (0, l.Z)((0, o.Z)(a), "name", "StreamError"), (0, l.Z)((0, o.Z)(a), "code", "stream_error"), n && (a.code = n), a
                    }
                    return (0, n.Z)(r)
                }((0, u.Z)(Error)),
                f = function(e) {
                    (0, a.Z)(r, e);
                    var t = d(r);

                    function r(e) {
                        var n;
                        return (0, i.Z)(this, r), n = t.call(this, e), (0, l.Z)((0, o.Z)(n), "name", "StreamTimeoutError"), (0, l.Z)((0, o.Z)(n), "code", "timeout"), n
                    }
                    return (0, n.Z)(r)
                }(p),
                g = function(e) {
                    (0, a.Z)(r, e);
                    var t = d(r);

                    function r(e) {
                        var n;
                        return (0, i.Z)(this, r), n = t.call(this, e), (0, l.Z)((0, o.Z)(n), "name", "StreamOnOpenError"), (0, l.Z)((0, o.Z)(n), "code", "on_open"), n
                    }
                    return (0, n.Z)(r)
                }(p),
                h = function(e) {
                    (0, a.Z)(r, e);
                    var t = d(r);

                    function r(e) {
                        var n;
                        return (0, i.Z)(this, r), n = t.call(this, e), (0, l.Z)((0, o.Z)(n), "name", "StreamUnexpectedCloseError"), (0, l.Z)((0, o.Z)(n), "code", "unexpected_close"), n
                    }
                    return (0, n.Z)(r)
                }(p)
        },
        47911: function(e, t, r) {
            r.d(t, {
                M: function() {
                    return y
                }
            });
            var n = r(95235),
                i = r(2784),
                o = r(27483),
                a = r(2702),
                c = r(6201),
                s = r(20406),
                u = r(96412),
                l = r(13089),
                d = r(41701),
                p = r(90129),
                f = r(29017),
                g = r(48200),
                h = r(28526),
                m = r.n(h),
                b = function(e) {
                    (0, p.Z)(i, e);
                    var t, r = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, r = (0, g.Z)(i);
                        if (t) {
                            var n = (0, g.Z)(this).constructor;
                            e = Reflect.construct(r, arguments, n)
                        } else e = r.apply(this, arguments);
                        return (0, f.Z)(this, e)
                    });

                    function i(e) {
                        var t, o;
                        return (0, u.Z)(this, i), t = r.call(this, {
                            start: function() {
                                var t;
                                null === (t = e.onStart) || void 0 === t || t.call(e)
                            },
                            transform: (o = (0, s.Z)(m().mark(function r(n, i) {
                                var o, a, c;
                                return m().wrap(function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            "content" === n.event && (t.content += n.data, null === (o = e.onContent) || void 0 === o || o.call(e, t.content)), "done" === n.event && (null === (a = e.onComplete) || void 0 === a || a.call(e, t.content)), "cancel" === n.event && (null === (c = e.onCancel) || void 0 === c || c.call(e)), i.enqueue(n);
                                        case 4:
                                        case "end":
                                            return r.stop()
                                    }
                                }, r)
                            })), function(e, t) {
                                return o.apply(this, arguments)
                            }),
                            flush: function() {
                                var t;
                                null === (t = e.onFlush) || void 0 === t || t.call(e)
                            }
                        }), (0, n.Z)((0, d.Z)(t), "content", ""), t
                    }
                    return (0, l.Z)(i, [{
                        key: "getContent",
                        value: function() {
                            return this.content
                        }
                    }]), i
                }(r(95993).GJ);

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var y = function(e, t) {
                return {
                    generate: (0, i.useCallback)(function(r) {
                        var n = r.variables,
                            i = r.interactionId,
                            s = r.params,
                            u = r.workspaceId;
                        i = i || (0, c.nZ)();
                        var l = e.prepare({
                                variables: n,
                                params: s,
                                interactionId: i
                            }),
                            d = (0, o.z4)(j(j({}, l), {}, {
                                workspaceId: u,
                                interactionId: i
                            }), {
                                timeout: t.timeout
                            }),
                            p = d.cancel,
                            f = d.stream,
                            g = new b(t),
                            h = f.pipeThrough(g);
                        return {
                            cancel: p,
                            promise: new Promise(function(e, r) {
                                (0, a.GO)(h, {
                                    onError: function(e) {
                                        var n;
                                        null === (n = t.onError) || void 0 === n || n.call(t, e), r(e)
                                    },
                                    onDone: function() {
                                        e(g.getContent())
                                    }
                                })
                            })
                        }
                    }, [t, e])
                }
            }
        },
        27483: function(e, t, r) {
            r.d(t, {
                z4: function() {
                    return U
                },
                pM: function() {
                    return R
                }
            });
            var n, i, o = r(20406),
                a = r(95235),
                c = r(82269),
                s = r(13089),
                u = r(96412),
                l = r(90129),
                d = r(29017),
                p = r(48200),
                f = r(3907),
                g = r(28526),
                h = r.n(g),
                m = r(95993),
                b = r(37914),
                v = r(58202),
                j = function(e) {
                    (0, l.Z)(n, e);
                    var t, r = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, r = (0, p.Z)(n);
                        if (t) {
                            var i = (0, p.Z)(this).constructor;
                            e = Reflect.construct(r, arguments, i)
                        } else e = r.apply(this, arguments);
                        return (0, d.Z)(this, e)
                    });

                    function n() {
                        var e;
                        return (0, u.Z)(this, n), r.call(this, {
                            transform: (e = (0, o.Z)(h().mark(function e(t, r) {
                                return h().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("error" !== t.event) {
                                                e.next = 3;
                                                break
                                            }
                                            return r.error(new v.T1("StreamError message received: ".concat(JSON.stringify(t)), t.data)), e.abrupt("return");
                                        case 3:
                                            if ("cancel" !== t.event) {
                                                e.next = 6;
                                                break
                                            }
                                            return r.enqueue(t), e.abrupt("return");
                                        case 6:
                                            if ("done" !== t.event) {
                                                e.next = 9;
                                                break
                                            }
                                            return r.enqueue(t), e.abrupt("return");
                                        case 9:
                                            if ("content" !== t.event) {
                                                e.next = 12;
                                                break
                                            }
                                            return r.enqueue(t), e.abrupt("return");
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            })), function(t, r) {
                                return e.apply(this, arguments)
                            })
                        })
                    }
                    return (0, s.Z)(n)
                }(m.GJ);

            function y() {
                return (y = (0, o.Z)(h().mark(function e(t, r) {
                    var n, i;
                    return h().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                n = t.getReader();
                            case 1:
                                return e.next = 3, n.read();
                            case 3:
                                if ((i = e.sent).done) {
                                    e.next = 7;
                                    break
                                }
                                r(i.value), e.next = 1;
                                break;
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }

            function x() {
                return {
                    data: "",
                    event: "",
                    id: "",
                    retry: void 0
                }
            }(n = i || (i = {}))[n.NewLine = 10] = "NewLine", n[n.CarriageReturn = 13] = "CarriageReturn", n[n.Space = 32] = "Space", n[n.Colon = 58] = "Colon";
            var O = ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"];

            function w(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(r), !0).forEach(function(t) {
                        (0, a.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var k = "text/event-stream",
                A = "last-event-id";

            function S(e) {
                var t = e.headers.get("content-type");
                if (!(null != t && t.startsWith(k))) throw Error("Expected content-type to be ".concat(k, ", Actual: ").concat(t))
            }
            var C = ["streamId", "lastEventId", "interactionId"],
                E = ["headers"];

            function D(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(Object(r), !0).forEach(function(t) {
                        (0, a.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : D(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var _ = function(e) {
                    (0, l.Z)(n, e);
                    var t, r = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, r = (0, p.Z)(n);
                        if (t) {
                            var i = (0, p.Z)(this).constructor;
                            e = Reflect.construct(r, arguments, i)
                        } else e = r.apply(this, arguments);
                        return (0, d.Z)(this, e)
                    });

                    function n(e) {
                        var t;
                        return (0, u.Z)(this, n), (t = r.call(this)).timeout = e, t
                    }
                    return (0, s.Z)(n)
                }((0, f.Z)(Error)),
                U = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = b.v.API_HOST + "/ai/chatCompletion",
                        n = {
                            "Content-Type": "application/json"
                        };
                    return t.streamId && (n["gamma-chat-completion-stream-id"] = t.streamId), T(r, {
                        method: "POST",
                        headers: n,
                        body: JSON.stringify(e)
                    }, t)
                },
                R = function(e) {
                    var t = e.streamId,
                        r = e.lastEventId,
                        n = e.interactionId,
                        i = (0, c.Z)(e, C),
                        o = new URL(b.v.API_HOST + "/ai/resumeChatCompletion");
                    return o.searchParams.set("interactionId", n), T(o.toString(), {
                        method: "GET",
                        headers: {
                            "gamma-chat-completion-stream-id": t,
                            "last-event-id": r
                        }
                    }, I({
                        streamResumingEnabled: !0
                    }, i))
                },
                T = function(e, t, r) {
                    var n, a = r.retries || 0,
                        s = r.backoff || 1e3,
                        u = r.timeout || null,
                        l = null !== (n = r.streamResumingEnabled) && void 0 !== n && n,
                        d = 0,
                        p = new AbortController,
                        f = !1,
                        g = !1,
                        b = !1,
                        w = null,
                        C = !1,
                        D = function() {
                            return s * Math.pow(2, Math.max(d - 1, 0))
                        },
                        U = {};
                    return l && (U["gamma-stream-resuming-enabled"] = "true"), {
                        stream: new m.Pz({
                            start: function(r) {
                                return (0, o.Z)(h().mark(function n() {
                                    var s;
                                    return h().wrap(function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                null != u && (w = setTimeout(function() {
                                                    C = !0, p.abort(), r.error(new v.rm("Stream timed out after ".concat(u, "ms")))
                                                }, u)), s = t.headers, (function(e, t) {
                                                    var r = t.signal,
                                                        n = t.headers,
                                                        a = t.onopen,
                                                        s = t.onmessage,
                                                        u = t.onclose,
                                                        l = t.onerror,
                                                        d = t.openWhenHidden,
                                                        p = t.fetch,
                                                        f = (0, c.Z)(t, O);
                                                    return new Promise(function(t, c) {
                                                        var g, m = P({}, n);

                                                        function b() {
                                                            g.abort(), document.hidden || E()
                                                        }
                                                        m.accept || (m.accept = k), d || document.addEventListener("visibilitychange", b);
                                                        var v = 1e3,
                                                            j = 0;

                                                        function O() {
                                                            document.removeEventListener("visibilitychange", b), window.clearTimeout(j), g.abort()
                                                        }
                                                        null == r || r.addEventListener("abort", function() {
                                                            O(), t()
                                                        });
                                                        var w = null != p ? p : window.fetch,
                                                            C = null != a ? a : S;

                                                        function E() {
                                                            return D.apply(this, arguments)
                                                        }

                                                        function D() {
                                                            return (D = (0, o.Z)(h().mark(function r() {
                                                                var n, o, a;
                                                                return h().wrap(function(r) {
                                                                    for (;;) switch (r.prev = r.next) {
                                                                        case 0:
                                                                            return g = new AbortController, r.prev = 1, r.next = 4, w(e, P(P({}, f), {}, {
                                                                                headers: m,
                                                                                signal: g.signal
                                                                            }));
                                                                        case 4:
                                                                            return n = r.sent, r.next = 7, C(n);
                                                                        case 7:
                                                                            return r.next = 9,
                                                                                function(e, t) {
                                                                                    return y.apply(this, arguments)
                                                                                }(n.body, function(e) {
                                                                                    var t, r, n, o = !1;
                                                                                    return function(a) {
                                                                                        void 0 === t ? (t = a, r = 0, n = -1) : t = function(e, t) {
                                                                                            var r = new Uint8Array(e.length + t.length);
                                                                                            return r.set(e), r.set(t, e.length), r
                                                                                        }(t, a);
                                                                                        for (var c = t.length, s = 0; r < c;) {
                                                                                            o && (t[r] === i.NewLine && (s = ++r), o = !1);
                                                                                            for (var u = -1; r < c && -1 === u; ++r) switch (t[r]) {
                                                                                                case i.Colon:
                                                                                                    -1 === n && (n = r - s);
                                                                                                    break;
                                                                                                case i.CarriageReturn:
                                                                                                    o = !0;
                                                                                                case i.NewLine:
                                                                                                    u = r
                                                                                            }
                                                                                            if (-1 === u) break;
                                                                                            e(t.subarray(s, u), n), s = r, n = -1
                                                                                        }
                                                                                        s === c ? t = void 0 : 0 !== s && (t = t.subarray(s), r -= s)
                                                                                    }
                                                                                }(function(e, t, r) {
                                                                                    var n = x(),
                                                                                        o = new TextDecoder,
                                                                                        a = !1;
                                                                                    return function(c, s) {
                                                                                        if (0 === c.length) null == r || r(n), n = x(), a = !1;
                                                                                        else if (s > 0) {
                                                                                            var u = o.decode(c.subarray(0, s)),
                                                                                                l = s + (c[s + 1] === i.Space ? 2 : 1),
                                                                                                d = o.decode(c.subarray(l));
                                                                                            switch (u) {
                                                                                                case "data":
                                                                                                    a ? n.data = n.data + "\n" + d : (n.data = d, a = !0);
                                                                                                    break;
                                                                                                case "event":
                                                                                                    n.event = d;
                                                                                                    break;
                                                                                                case "id":
                                                                                                    e(n.id = d);
                                                                                                    break;
                                                                                                case "retry":
                                                                                                    var p = parseInt(d, 10);
                                                                                                    isNaN(p) || t(n.retry = p)
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }(function(e) {
                                                                                    e ? m[A] = e : delete m[A]
                                                                                }, function(e) {
                                                                                    v = e
                                                                                }, s)));
                                                                        case 9:
                                                                            null == u || u(), O(), t(), r.next = 17;
                                                                            break;
                                                                        case 14:
                                                                            if (r.prev = 14, r.t0 = r.catch(1), !g.signal.aborted) try {
                                                                                a = null !== (o = null == l ? void 0 : l(r.t0)) && void 0 !== o ? o : v, window.clearTimeout(j), j = window.setTimeout(E, a)
                                                                            } catch (e) {
                                                                                O(), c(e)
                                                                            }
                                                                        case 17:
                                                                        case "end":
                                                                            return r.stop()
                                                                    }
                                                                }, r, null, [
                                                                    [1, 14]
                                                                ])
                                                            }))).apply(this, arguments)
                                                        }
                                                        E()
                                                    })
                                                })(e, I(I({
                                                    openWhenHidden: !0,
                                                    credentials: "include"
                                                }, (0, c.Z)(t, E)), {}, {
                                                    headers: I(I({}, s), U),
                                                    signal: p.signal,
                                                    onopen: function() {
                                                        var e = (0, o.Z)(h().mark(function e(t) {
                                                            return h().wrap(function(e) {
                                                                for (;;) switch (e.prev = e.next) {
                                                                    case 0:
                                                                        if (!(t.ok && t.headers.get("content-type") === k)) {
                                                                            e.next = 4;
                                                                            break
                                                                        }
                                                                        return e.abrupt("return");
                                                                    case 4:
                                                                        if (!(t.status >= 400 && t.status < 500 && 429 !== t.status)) {
                                                                            e.next = 9;
                                                                            break
                                                                        }
                                                                        p.abort(), r.error(new v.VG("Unable to complete request")), e.next = 15;
                                                                        break;
                                                                    case 9:
                                                                        if (!(d++ < a && !f)) {
                                                                            e.next = 13;
                                                                            break
                                                                        }
                                                                        throw new _(D());
                                                                    case 13:
                                                                        p.abort(), r.error(new v.VG("Unable to complete request"));
                                                                    case 15:
                                                                    case "end":
                                                                        return e.stop()
                                                                }
                                                            }, e)
                                                        }));
                                                        return function(t) {
                                                            return e.apply(this, arguments)
                                                        }
                                                    }(),
                                                    onmessage: function(e) {
                                                        if (b) {
                                                            g || (g = !0, console.log("[AIStream] enqueue cancel event", I(I({}, e), {}, {
                                                                event: "cancel",
                                                                data: ""
                                                            })), r.enqueue(I(I({}, e), {}, {
                                                                event: "cancel",
                                                                data: ""
                                                            })), r.close(), p.abort());
                                                            return
                                                        }
                                                        C || (r.enqueue(e), f = !0)
                                                    },
                                                    onclose: function() {
                                                        w && (clearTimeout(w), w = null), r.close()
                                                    },
                                                    onerror: function(e) {
                                                        if (e instanceof _) {
                                                            if (b) throw console.error("Stream cancelled - not retrying"), Error("Stream cancelled");
                                                            return e.timeout
                                                        }
                                                        if (e instanceof Error) {
                                                            if (console.error("Uncaught stream error", e), !l) throw e;
                                                            if (d++ < a) return D();
                                                            throw e
                                                        }
                                                        if (f) {
                                                            var t = "Stream closed unexpectedly";
                                                            throw console.error("Uncaught stream error", t), new v.Vh(t)
                                                        }
                                                    }
                                                })).catch(function(e) {
                                                    w && (clearTimeout(w), w = null), b || r.error(e)
                                                });
                                            case 3:
                                            case "end":
                                                return n.stop()
                                        }
                                    }, n)
                                }))()
                            }
                        }).pipeThrough(new j),
                        cancel: function() {
                            b || (b = !0)
                        }
                    }
                }
        },
        2702: function(e, t, r) {
            r.d(t, {
                GO: function() {
                    return s
                },
                fZ: function() {
                    return l
                },
                uS: function() {
                    return u
                }
            });
            var n = r(20406),
                i = r(28526),
                o = r.n(i),
                a = r(37164),
                c = r(58202),
                s = function(e, t) {
                    var r, i = e.getReader(),
                        a = (r = (0, n.Z)(o().mark(function e() {
                            var r, n, c, s, u, l;
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, i.read();
                                    case 3:
                                        if (n = (r = e.sent).done, c = r.value, n) {
                                            e.next = 12;
                                            break
                                        }
                                        return null === (s = t.onMessage) || void 0 === s || s.call(t, c), a(), e.abrupt("return");
                                    case 12:
                                        null === (u = t.onDone) || void 0 === u || u.call(t);
                                    case 13:
                                        e.next = 18;
                                        break;
                                    case 15:
                                        e.prev = 15, e.t0 = e.catch(0), null === (l = t.onError) || void 0 === l || l.call(t, e.t0 instanceof Error ? e.t0 : Error(e.t0));
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 15]
                            ])
                        })), function() {
                            return r.apply(this, arguments)
                        });
                    a()
                },
                u = function(e) {
                    return e instanceof c.T1 ? {
                        errorCode: e.code,
                        errorMessage: e.message
                    } : e instanceof Error ? {
                        errorMessage: e.message
                    } : {
                        errorMessage: e
                    }
                },
                l = (0, a.kP)("0123456789abcdefghijklmnopqrstuvwxyz", 16)
        },
        6201: function(e, t, r) {
            r.d(t, {
                Io: function() {
                    return y
                },
                Lt: function() {
                    return j
                },
                Wf: function() {
                    return m
                },
                XH: function() {
                    return v
                },
                fM: function() {
                    return b
                },
                gb: function() {
                    return l
                },
                hq: function() {
                    return u
                },
                mV: function() {
                    return d
                },
                nZ: function() {
                    return x
                },
                o: function() {
                    return f
                },
                pQ: function() {
                    return h
                },
                qZ: function() {
                    return p
                },
                vL: function() {
                    return g
                }
            });
            var n = r(95235),
                i = r(37164),
                o = r(37914),
                a = r(32333);

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var u = function(e) {
                    a.co.track(a.AA.AI_REQUEST_SENT, s(s({}, e), {}, {
                        gitSHA: o.v.GIT_SHA
                    }))
                },
                l = function(e) {
                    a.co.track(a.AA.AI_REQUEST_COMPLETE, s(s({}, e), {}, {
                        gitSHA: o.v.GIT_SHA
                    }))
                },
                d = function(e) {
                    a.co.track(a.AA.AI_REQUEST_ABORT, s(s({}, e), {}, {
                        gitSHA: o.v.GIT_SHA
                    }))
                },
                p = function(e) {
                    a.co.track(a.AA.AI_REQUEST_STREAM_START, s(s({}, e), {}, {
                        gitSHA: o.v.GIT_SHA
                    }))
                },
                f = function(e) {
                    a.co.track(a.AA.AI_REQUEST_RESPONSE, s(s({}, e), {}, {
                        gitSHA: o.v.GIT_SHA
                    }))
                },
                g = function(e) {
                    a.co.track(a.AA.AI_SUGGESTION_APPLY, s(s({}, e), {}, {
                        gitSHA: o.v.GIT_SHA
                    }))
                },
                h = function(e) {
                    a.co.track(a.AA.AI_REQUEST_ERROR, s(s({}, e), {}, {
                        gitSHA: o.v.GIT_SHA
                    }))
                },
                m = function(e) {
                    a.co.track(a.AA.AI_REQUEST_RETRY, s(s({}, e), {}, {
                        gitSHA: o.v.GIT_SHA
                    }))
                },
                b = function(e) {
                    a.co.track(a.AA.AI_DOC_RATED, s(s({}, e), {}, {
                        gitSHA: o.v.GIT_SHA
                    }))
                },
                v = function(e) {
                    a.co.track(a.AA.AI_DOC_FEEDBACK_SUBMITTED, s(s({}, e), {}, {
                        gitSHA: o.v.GIT_SHA
                    }))
                },
                j = function(e) {
                    a.co.track(a.AA.AI_IMAGE_FEEDBACK_SUBMITTED, s(s({}, e), {}, {
                        gitSHA: o.v.GIT_SHA
                    }))
                },
                y = function(e) {
                    a.co.track(a.AA.AI_IMAGE_RATED, s(s({}, e), {}, {
                        gitSHA: o.v.GIT_SHA
                    }))
                },
                x = function() {
                    return (0, i.x0)()
                }
        },
        19674: function(e, t, r) {
            r.d(t, {
                r: function() {
                    return S
                }
            });
            var n = r(95235),
                i = r(82269),
                o = r(11919),
                a = r(30118),
                c = r(74586),
                s = r(95498),
                u = r(68019),
                l = r(40130),
                d = r(32834),
                p = r(55452),
                f = r(45650),
                g = r(420),
                h = r(91012),
                m = r(49929),
                b = r(55966),
                v = r(2784),
                j = r(19429),
                y = r(52322);

            function x(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var w = (0, v.memo)(function(e) {
                    var t = e.credits,
                        r = e.lowCreditStatus,
                        n = e.onClick,
                        i = e.variant,
                        o = null === t,
                        a = (0, j.ko)();
                    return (0, y.jsx)(b.kH, {
                        label: (0, y.jsx)(p.cC, {
                            id: "IY3q+2"
                        }),
                        placement: "top",
                        children: (0, y.jsx)(f.z, O(O({
                            onClick: n,
                            isDisabled: o
                        }, "ghost" === (void 0 === i ? "solid" : i) ? {
                            variant: "ghost",
                            size: "sm",
                            colorScheme: "blackAlpha"
                        } : {
                            variant: "unstyled",
                            bg: "white",
                            px: 4
                        }), {}, {
                            leftIcon: (0, y.jsx)(m.G, {
                                icon: d.ow,
                                size: "sm"
                            }),
                            rightIcon: (0, y.jsx)(m.G, {
                                color: "var(--chakra-colors-gray-600)",
                                icon: l.faCircleInfo,
                                size: "xs"
                            }),
                            children: o ? (0, y.jsx)(g.$, {
                                size: "xs"
                            }) : (0, y.jsx)(h.x, {
                                as: "span",
                                color: null === r ? void 0 : a[r].lightColor,
                                children: (0, y.jsx)(p.cC, {
                                    id: "T57gLR",
                                    values: {
                                        credits: t
                                    }
                                })
                            })
                        }))
                    })
                }),
                P = ["modalId", "variant", "segmentEvent"];

            function k(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var S = function(e) {
                var t = e.modalId,
                    r = e.variant,
                    n = e.segmentEvent,
                    l = (0, i.Z)(e, P),
                    d = (0, s.q)(),
                    p = d.credits,
                    f = d.lowCreditStatus,
                    g = (0, c.fg)(),
                    h = (0, a.M)({
                        id: void 0 === t ? "ai-credits-modal" : t
                    }),
                    m = h.isOpen,
                    b = h.onOpen,
                    v = h.onClose;
                return g ? null : (0, y.jsxs)(y.Fragment, {
                    children: [(0, y.jsx)(o.k, A(A({}, l), {}, {
                        children: (0, y.jsx)(w, {
                            credits: p,
                            onClick: b,
                            lowCreditStatus: f,
                            variant: r
                        })
                    })), (0, y.jsx)(u.H, {
                        isOpen: m,
                        onOpen: b,
                        onClose: v,
                        credits: p,
                        segmentEvent: n
                    })]
                })
            }
        },
        68019: function(e, t, r) {
            r.d(t, {
                H: function() {
                    return es
                }
            });
            var n = r(82269),
                i = r(95235),
                o = r(8649),
                a = r(60670),
                c = r(32834),
                s = r(40130),
                u = r(55452),
                l = r(87254),
                d = r(29705),
                p = r(20010),
                f = r(56915),
                g = r(48273),
                h = r(64827),
                m = r(94659),
                b = r(72360),
                v = r(8283),
                j = r(53738),
                y = r(91012),
                x = r(92619),
                O = r(420),
                w = r(2167),
                P = r(76648),
                k = r(45650),
                A = r(4036),
                S = r(84103),
                C = r(49929),
                E = r(2784),
                D = r(43997),
                I = r(97442),
                _ = r(98875),
                U = r(21735),
                R = r(75085),
                T = r(85422),
                M = r(85545),
                Z = r(49922),
                H = r(74586),
                N = r(32333),
                z = r(10710),
                L = r(51823),
                F = r(19429),
                W = r(95498),
                G = r(33673),
                B = r(35837),
                q = r(15342),
                Q = r(17343),
                V = r(72028),
                Y = r(50486),
                K = r(9557),
                X = r(52322),
                J = ["onContactUsClick"];

            function $(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $(Object(r), !0).forEach(function(t) {
                        (0, i.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var et = function(e) {
                    e.onContactUsClick;
                    var t = (0, n.Z)(e, J),
                        r = (0, _.ye)("aiDebits"),
                        i = (0, _.ye)("ai-credits").enabled,
                        o = r.wizardCreation,
                        a = r.chatSuggestion,
                        c = r.autocomplete,
                        s = r.generateImage,
                        d = (0, _.ye)("aiAutocomplete"),
                        p = (0, _.ye)("aiGeneratedImages");
                    return (0, X.jsxs)(G.U, ee(ee({
                        allowMultiple: !0
                    }, t), {}, {
                        children: [(0, X.jsx)(er, {
                            accordionLabel: l.ag._({
                                id: "IVVQ18"
                            }),
                            children: (0, X.jsxs)(B.QI, {
                                children: [(0, X.jsxs)(B.HC, {
                                    children: [(0, X.jsx)("strong", {
                                        children: (0, X.jsx)(u.cC, {
                                            id: "p4u+sD"
                                        })
                                    }), " ", (0, X.jsx)(u.cC, {
                                        id: "XSCvWA",
                                        values: {
                                            aiGeneration: o,
                                            GAMMA_ARTIFACT_PROPER_NOUN: R.Yc
                                        }
                                    })]
                                }), (0, X.jsxs)(B.HC, {
                                    children: [(0, X.jsx)("strong", {
                                        children: (0, X.jsx)(u.cC, {
                                            id: "gPyWmV"
                                        })
                                    }), " ", (0, X.jsx)(u.cC, {
                                        id: "C5Y3lw",
                                        values: {
                                            aiEditing: a
                                        }
                                    }), (0, X.jsx)(u.cC, {
                                        id: "bO6EBT"
                                    })]
                                }), p && (0, X.jsxs)(B.HC, {
                                    children: [(0, X.jsx)("strong", {
                                        children: (0, X.jsx)(u.cC, {
                                            id: "0jmvoW"
                                        })
                                    }), " ", (0, X.jsx)(u.cC, {
                                        id: "Y1aHEs",
                                        values: {
                                            aiImages: s
                                        }
                                    })]
                                }), d && (0, X.jsxs)(B.HC, {
                                    children: [(0, X.jsx)("strong", {
                                        children: (0, X.jsx)(u.cC, {
                                            id: "eBVeIQ"
                                        })
                                    }), " ", (0, X.jsx)(u.cC, {
                                        id: "AJ11w6",
                                        values: {
                                            aiAutocomplete: c,
                                            AUTOCOMPLETE_SLASH_SHORTCUT: K.Y,
                                            AUTOCOMPLETE_INPUT_SHORTCUT: K.o
                                        }
                                    })]
                                })]
                            })
                        }), i && (0, X.jsx)(er, {
                            accordionLabel: l.ag._({
                                id: "1pwdRz"
                            }),
                            children: (0, X.jsx)(u.cC, {
                                id: "1Ijs7v",
                                values: {
                                    GAMMA_PRO_PROPER_NOUN: R.x8,
                                    GAMMA_PROPER_NOUN: R.N6
                                }
                            })
                        })]
                    }))
                },
                er = function(e) {
                    var t = e.accordionLabel,
                        r = e.children;
                    return (0, X.jsxs)(q.Q, {
                        children: [(0, X.jsx)("h2", {
                            children: (0, X.jsxs)(Q.K, {
                                px: 2,
                                py: 2,
                                fontSize: "sm",
                                children: [(0, X.jsx)(j.xu, {
                                    as: "span",
                                    flex: "1",
                                    textAlign: "left",
                                    fontWeight: 500,
                                    children: t
                                }), (0, X.jsx)(V.X, {})]
                            })
                        }), (0, X.jsx)(Y.H, {
                            pb: 4,
                            px: 2,
                            fontSize: "sm",
                            children: r
                        })]
                    })
                },
                en = ["isOpen"];

            function ei(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ei(Object(r), !0).forEach(function(t) {
                        (0, i.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ei(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var ea = {
                    fontWeight: 500,
                    letterSpacing: "normal",
                    color: "gray.600"
                },
                ec = function(e) {
                    var t = e.onClose,
                        r = e.onOpen,
                        n = e.credits,
                        i = e.segmentEvent,
                        G = void 0 === i ? N.AA.GAMMA_PRO_UPSELL_CALLOUT_AI_CREDITS : i,
                        B = (0, z.SE)(),
                        q = B.user,
                        Q = B.currentWorkspace,
                        V = (0, z.d3)(),
                        Y = (0, _.ye)("upsellUXEnabled_Pro"),
                        K = (0, H.fg)(),
                        J = (0, E.useState)(Y ? "buy" : "friend"),
                        $ = J[0],
                        ee = J[1],
                        er = (0, _.ye)("ai-credits"),
                        en = (0, _.ye)("intercom"),
                        ei = (0, D.I0)(),
                        ec = (0, W.q)().lowCreditStatus,
                        es = (0, E.useMemo)(function() {
                            return q ? "teammate" === $ && Q && V ? (0, L.Mr)({
                                userId: q.id,
                                workspace: Q
                            }) : "friend" === $ ? (0, L.Mr)({
                                userId: q.id
                            }) : "" : ""
                        }, [V, Q, $, q]),
                        eu = er.enabled,
                        el = er.referralBonus,
                        ed = {
                            friend: {
                                label: l.ag._({
                                    id: "uU68PM"
                                })
                            },
                            teammate: {
                                label: l.ag._({
                                    id: "O/k8gF"
                                })
                            },
                            buy: {
                                label: l.ag._({
                                    id: "/2RIKE"
                                })
                            }
                        }[$],
                        ep = function() {
                            (0, T.pU)(), ei((0, M.YZ)({
                                isOpen: !0
                            })), t()
                        },
                        ef = (0, F.ko)();
                    return (0, X.jsxs)(p.u_, {
                        isOpen: !0,
                        onClose: t,
                        size: "xl",
                        children: [(0, X.jsx)(f.Z, {}), (0, X.jsxs)(g.h, {
                            children: [(0, X.jsx)(h.o, {}), (0, X.jsxs)(m.g, {
                                py: 4,
                                px: 6,
                                textAlign: "center",
                                children: [ec && (0, X.jsx)(b.b, {
                                    status: ef[ec].status,
                                    px: 2,
                                    py: 1,
                                    w: "auto",
                                    children: (0, X.jsxs)(v.U, {
                                        color: ef[ec].darkColor,
                                        children: [(0, X.jsx)(j.xu, {
                                            children: (0, X.jsx)(C.G, {
                                                icon: s.faCircleInfo
                                            })
                                        }), (0, X.jsx)(y.x, {
                                            fontSize: "sm",
                                            children: ef[ec].description
                                        })]
                                    })
                                }), (0, X.jsx)(y.x, eo(eo({}, ea), {}, {
                                    fontSize: "md",
                                    children: (0, X.jsx)(u.cC, {
                                        id: "xy3nnP"
                                    })
                                })), (0, X.jsxs)(x.x, {
                                    p: 0,
                                    color: ec ? ef[ec].lightColor : void 0,
                                    children: [(0, X.jsx)("span", {
                                        role: "img",
                                        "aria-label": "Money emoji",
                                        children: "\uD83D\uDCB0"
                                    }), " ", null === n ? (0, X.jsx)(O.$, {
                                        size: "sm"
                                    }) : (0, X.jsx)(u.cC, {
                                        id: "T57gLR",
                                        values: {
                                            credits: n
                                        }
                                    })]
                                }), (0, X.jsx)(y.x, eo(eo({
                                    textAlign: "left",
                                    fontSize: "sm",
                                    pt: 2
                                }, ea), {}, {
                                    children: (0, X.jsx)(u.cC, {
                                        id: "lUUl1i"
                                    })
                                }))]
                            }), (0, X.jsxs)(w.f, {
                                pb: 4,
                                children: [eu ? (0, X.jsxs)(m.g, {
                                    spacing: 4,
                                    children: [(0, X.jsx)(y.x, {
                                        fontSize: "xl",
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        children: (0, X.jsx)(u.cC, {
                                            id: "89ftLJ"
                                        })
                                    }), (0, X.jsxs)(P.h, {
                                        variant: "ghost",
                                        size: "sm",
                                        spacing: 0,
                                        gap: 2,
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                        alignItems: "center",
                                        children: [!K && Y && (0, X.jsx)(k.z, {
                                            leftIcon: (0, X.jsx)(C.G, {
                                                icon: c.ow
                                            }),
                                            onClick: function() {
                                                return ee("buy")
                                            },
                                            isActive: "buy" === $,
                                            color: "buy" === $ ? void 0 : "gray.700",
                                            children: (0, X.jsx)(u.cC, {
                                                id: "KctW9G"
                                            })
                                        }), (0, X.jsx)(k.z, {
                                            leftIcon: (0, X.jsx)(C.G, {
                                                icon: a.Mz
                                            }),
                                            onClick: function() {
                                                return ee("friend")
                                            },
                                            isActive: "friend" === $,
                                            color: "friend" === $ ? void 0 : "gray.700",
                                            children: (0, X.jsx)(u.cC, {
                                                id: "KSBmDv"
                                            })
                                        }), V && (0, X.jsx)(k.z, {
                                            leftIcon: (0, X.jsx)(C.G, {
                                                icon: o.FK
                                            }),
                                            onClick: function() {
                                                return ee("teammate")
                                            },
                                            isActive: "teammate" === $,
                                            color: "teammate" === $ ? void 0 : "gray.700",
                                            children: (0, X.jsx)(u.cC, {
                                                id: "dUOpaF"
                                            })
                                        })]
                                    }), ("friend" === $ || "teammate" === $) && (0, X.jsxs)(X.Fragment, {
                                        children: [(0, X.jsxs)(v.U, {
                                            spacing: 2,
                                            children: [(0, X.jsxs)(y.x, {
                                                fontSize: "sm",
                                                minW: "50%",
                                                children: ["friend" === $ && (0, X.jsx)(u.cC, {
                                                    id: "tBKKYy",
                                                    values: {
                                                        referralBonusAmount: el,
                                                        GAMMA_PROPER_NOUN: R.N6
                                                    }
                                                }), "teammate" === $ && (0, X.jsx)(u.cC, {
                                                    id: "q8MWFp",
                                                    values: {
                                                        referralBonusAmount: el
                                                    }
                                                })]
                                            }), (0, X.jsxs)(A.C, {
                                                colorScheme: "green",
                                                fontSize: "xs",
                                                px: "0.4em",
                                                py: "0.2em",
                                                children: ["+", " ", (0, X.jsx)(u.cC, {
                                                    id: "NFNFrR",
                                                    values: {
                                                        referralBonusAmount: el
                                                    }
                                                })]
                                            })]
                                        }), (0, X.jsx)(I.I, {
                                            url: es,
                                            customLabel: ed.label,
                                            variant: "solid"
                                        })]
                                    }), "buy" === $ && (0, X.jsx)(Z.m, {
                                        segmentEvent: G,
                                        onOpenCallback: t,
                                        onCloseCallback: r
                                    })]
                                }) : (0, X.jsxs)(v.U, {
                                    align: "baseline",
                                    spacing: 1,
                                    children: [(0, X.jsx)(y.x, {
                                        children: (0, X.jsx)(u.cC, {
                                            id: "0TJN6B"
                                        })
                                    }), en ? (0, X.jsx)(k.z, {
                                        onClick: ep,
                                        variant: "link",
                                        children: (0, X.jsx)(u.cC, {
                                            id: "Bhgd0l"
                                        })
                                    }) : (0, X.jsxs)(S.r, {
                                        href: "mailto:".concat(U.p),
                                        children: [(0, X.jsx)(u.cC, {
                                            id: "Bhgd0l"
                                        }), (0, X.jsx)(d.h, {
                                            ml: 1,
                                            transform: "translateY(-2px)"
                                        })]
                                    })]
                                }), (0, X.jsx)(et, {
                                    my: 4,
                                    onContactUsClick: en ? ep : void 0
                                })]
                            })]
                        })]
                    })
                },
                es = (0, E.memo)(function(e) {
                    var t = e.isOpen,
                        r = (0, n.Z)(e, en);
                    return t ? (0, X.jsx)(ec, eo({}, r)) : null
                })
        },
        68740: function(e, t, r) {
            r.d(t, {
                J: function() {
                    return j
                }
            });
            var n = r(95235),
                i = r(82269),
                o = r(32834),
                a = r(55452),
                c = r(4036),
                s = r(8283),
                u = r(91012),
                l = r(49929),
                d = r(55966),
                p = r(98875),
                f = r(74586),
                g = r(19429),
                h = r(52322),
                m = ["type"];

            function b(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var j = function(e) {
                var t, r = e.type,
                    n = (0, i.Z)(e, m),
                    b = (0, p.ye)("aiDebits");
                if ((0, f.fg)()) return null;
                var j = null !== (t = b[r]) && void 0 !== t ? t : g.Sy[r];
                return (0, h.jsx)(d.kH, {
                    label: (0, h.jsx)(a.cC, {
                        id: "B7jvsP",
                        values: {
                            numCredits: j
                        }
                    }),
                    children: (0, h.jsx)(c.C, v(v({
                        colorScheme: "whiteAlpha",
                        bg: "whiteAlpha.300",
                        textTransform: "none",
                        textShadow: "none",
                        fontSize: "xxs",
                        ml: 2
                    }, n), {}, {
                        children: (0, h.jsxs)(s.U, {
                            spacing: 1,
                            children: [(0, h.jsx)(u.x, {
                                children: j
                            }), (0, h.jsx)(l.G, {
                                icon: o.ow,
                                size: "sm"
                            })]
                        })
                    }))
                })
            }
        },
        54113: function(e, t, r) {
            r.d(t, {
                C: function() {
                    return m
                },
                d: function() {
                    return h
                }
            });
            var n, i = r(20406),
                o = r(28526),
                a = r.n(o),
                c = r(23313),
                s = r(98875),
                u = r(74586),
                l = r(46358),
                d = r(32333),
                p = r(3915),
                f = r(19429),
                g = r(41033),
                h = (n = (0, i.Z)(a().mark(function e(t, r) {
                    var n, i, o, h, m, b, v;
                    return a().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (o = (0, u.uL)("unlimited_ai", r), h = null !== (n = s.VH.get("aiDebits")[t]) && void 0 !== n ? n : f.Sy[t], d.co.track(d.AA.AI_CREDITS_USED, {
                                        operation: t,
                                        used: h,
                                        has_unlimited_ai: o
                                    }), !(0 === h || o)) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return");
                            case 6:
                                if (m = (null == r ? void 0 : r.id) || (0, p.n_)()) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return");
                            case 9:
                                return b = (0, c.WQq)(), e.next = 12, b.mutate({
                                    mutation: c.ATM,
                                    variables: {
                                        value: h,
                                        workspaceId: m
                                    }
                                });
                            case 12:
                                if (v = null === (i = e.sent.data) || void 0 === i ? void 0 : i.deductCredits) {
                                    e.next = 16;
                                    break
                                }
                                return e.abrupt("return", null);
                            case 16:
                                return d.co.track(d.AA.AI_CREDITS_DEDUCTED, {
                                    operation: t,
                                    used: h,
                                    remaining: v.credits
                                }), (0, l.bh)().dispatch((0, g.B1)({
                                    availableCredits: v.credits
                                })), e.abrupt("return", v.credits);
                            case 20:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e, t) {
                    return n.apply(this, arguments)
                }),
                m = function(e, t) {
                    var r, n = (0, u.uL)("unlimited_ai", t),
                        i = null !== (r = s.VH.get("aiDebits")[e]) && void 0 !== r ? r : f.Sy[e];
                    if (0 === i || n) return !0;
                    var o = (0, l.bh)().getState(),
                        a = (0, g.Lj)(o);
                    return !!a && a >= i
                }
        },
        21735: function(e, t, r) {
            r.d(t, {
                p: function() {
                    return n
                }
            });
            var n = "support@gamma.app"
        },
        21124: function(e, t, r) {
            r.d(t, {
                C: function() {
                    return m
                },
                J: function() {
                    return b
                }
            });
            var n, i, o = r(81333),
                a = r(95235),
                c = r(20406),
                s = r(84636),
                u = r.n(s),
                l = r(28526),
                d = r.n(l),
                p = r(37914),
                f = r(98875),
                g = r(31889);

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var m = (n = (0, c.Z)(d().mark(function e(t) {
                    var r, n, i, o, c, s, u, l, p, m, b, j;
                    return d().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.query, n = t.provider, o = void 0 === (i = t.options) ? {} : i, s = void 0 === (c = t.count) ? 5 : c, l = void 0 !== (u = t.prefetch) && u, p = "web" === n ? f.VH.get("webImageProviderType") : void 0, m = v({
                                    query: r,
                                    provider: n,
                                    options: function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {};
                                            t % 2 ? h(Object(r), !0).forEach(function(t) {
                                                (0, a.Z)(e, t, r[t])
                                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach(function(t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                            })
                                        }
                                        return e
                                    }({
                                        type: p
                                    }, o),
                                    count: s
                                }), e.prev = 3, e.next = 6, fetch(m, {
                                    credentials: "include"
                                });
                            case 6:
                                return b = e.sent, e.next = 9, b.json();
                            case 9:
                                if ((null == (j = e.sent) ? void 0 : j.length) >= 0) {
                                    e.next = 12;
                                    break
                                }
                                throw Error(j);
                            case 12:
                                return l && Promise.all(j.map(function(e) {
                                    return (0, g.GN)(e.imageUrl)
                                })).then(function() {
                                    console.debug("[fetchImageSearchResults] images downloaded in background")
                                }).catch(function(e) {
                                    console.debug("[fetchImageSearchResults] error downloading image:", e)
                                }), e.abrupt("return", j);
                            case 16:
                                return e.prev = 16, e.t0 = e.catch(3), console.error("(caught) [fetchImages] fetchResults:", e.t0), e.abrupt("return", []);
                            case 20:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [3, 16]
                    ])
                })), function(e) {
                    return n.apply(this, arguments)
                }),
                b = (i = (0, c.Z)(d().mark(function e(t) {
                    var r, n, i, o, a, c, s;
                    return d().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.queries, n = t.count, i = t.provider, o = t.prefetch, a = t.options, e.next = 3, Promise.all(r.map(function(e) {
                                    return m({
                                        query: e,
                                        count: n,
                                        provider: i,
                                        prefetch: o,
                                        options: a
                                    }).then(function(t) {
                                        return t.map(function(t) {
                                            return {
                                                query: e,
                                                image: t,
                                                provider: i
                                            }
                                        })
                                    })
                                }));
                            case 3:
                                return c = e.sent.flat(), s = u()(c, function(e) {
                                    return e.image.id || e.image.imageUrl
                                }), e.abrupt("return", s);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e) {
                    return i.apply(this, arguments)
                }),
                v = function(e) {
                    var t = e.query,
                        r = e.count,
                        n = e.provider,
                        i = e.options,
                        a = void 0 === i ? {} : i,
                        c = new URLSearchParams,
                        s = p.v.API_HOST || "https://api.gamma.app";
                    return c.append("query", t), c.append("provider", n), c.append("count", String(r)), Object.entries(a).forEach(function(e) {
                        var t = (0, o.Z)(e, 2),
                            r = t[0],
                            n = t[1];
                        void 0 !== n && c.append(r, String(n))
                    }), "".concat(s).concat("/media/images/search", "?").concat(c.toString())
                }
        },
        4038: function(e, t, r) {
            r.d(t, {
                Ge: function() {
                    return k
                },
                N$: function() {
                    return S
                },
                ND: function() {
                    return D
                },
                WY: function() {
                    return _
                },
                cT: function() {
                    return I
                },
                eb: function() {
                    return O
                },
                pK: function() {
                    return x
                },
                u0: function() {
                    return w
                },
                xQ: function() {
                    return E
                }
            });
            var n, i, o, a = r(95235),
                c = r(20406),
                s = r(12741),
                u = r(28526),
                l = r.n(u),
                d = r(65616),
                p = r(48484),
                f = r(42340),
                g = r(13326),
                h = r(37914),
                m = r(59864),
                b = r(31889);

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(r), !0).forEach(function(t) {
                        (0, a.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var y = {
                    auth: {
                        key: h.v.TRANSLOADIT_AUTH_KEY
                    },
                    template_id: h.v.TRANSLOADIT_IMAGE_TEMPLATE_ID
                },
                x = ["image/*", g.Z.heic, g.Z.heif],
                O = ["application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
                w = [g.Z.doc, g.Z.docx],
                P = [].concat(w, O, [g.Z.pdf]),
                k = ["font/otf", "font/ttf", "application/x-font-ttf", "application/x-font-otf", ".otf", ".ttf"],
                A = {
                    all: [].concat((0, s.Z)(P), O, x),
                    importDoc: [].concat((0, s.Z)(P), O),
                    doc: P,
                    font: k,
                    image: x,
                    icon: [".png", ".ico", ".gif", ".svg"]
                },
                S = {
                    autoProceed: !0,
                    restrictions: {
                        allowedFileTypes: [],
                        maxNumberOfFiles: 1
                    }
                },
                C = {},
                E = (n = (0, c.Z)(l().mark(function e(t) {
                    var r, n, i, o, a;
                    return l().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!((r = C[t]) && r.expires && +new Date(r.expires) - 3e5 > Date.now())) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", C[t]);
                            case 3:
                                return e.next = 5, fetch("/api/transloadit/signature", {
                                    method: "POST",
                                    body: JSON.stringify({
                                        templateId: t
                                    })
                                });
                            case 5:
                                return n = e.sent, e.next = 8, n.json();
                            case 8:
                                if (o = (i = e.sent).signature, a = i.expires, !(!o || !a)) {
                                    e.next = 14;
                                    break
                                }
                                return console.error("Error getting Transloadit signature"), e.abrupt("return", {
                                    signature: "",
                                    expires: ""
                                });
                            case 14:
                                return C[t] = {
                                    signature: o,
                                    expires: a
                                }, e.abrupt("return", C[t]);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e) {
                    return n.apply(this, arguments)
                }),
                D = {
                    createUppyInstance: function(e, t) {
                        var r, n = t.onUploadStart,
                            i = t.onOriginalFileUpload,
                            o = t.onUploadComplete,
                            a = t.onUploadFailed,
                            s = t.setErrorMessage,
                            u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "node",
                            f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                            g = arguments.length > 4 ? arguments[4] : void 0,
                            h = arguments.length > 5 ? arguments[5] : void 0,
                            v = 2560,
                            x = "false";
                        "background" === u ? v = 3840 : "icon" === u ? v = 250 : "profile" === u && (v = 1024, x = "true"), g = g || "image";
                        var O = new d.ZP(j(j({}, S), {}, {
                            restrictions: j(j({}, S.restrictions), {}, {
                                maxNumberOfFiles: f,
                                allowedFileTypes: A[g]
                            })
                        }));
                        return O.use(p.ZP, {
                            assemblyOptions: (r = (0, c.Z)(l().mark(function t() {
                                var r, n, i, o;
                                return l().wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return r = h || y.template_id, t.next = 3, E(r);
                                        case 3:
                                            return i = (n = t.sent).signature, o = n.expires, t.abrupt("return", {
                                                params: j(j({}, y), {}, {
                                                    auth: j(j({}, y.auth), {}, {
                                                        expires: o
                                                    }),
                                                    template_id: h || y.template_id
                                                }),
                                                fields: {
                                                    orgId: e,
                                                    imageType: u,
                                                    resizePx: v,
                                                    cropPadding: "50%",
                                                    detectAndCropFace: x
                                                },
                                                signature: i
                                            });
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            })), function() {
                                return r.apply(this, arguments)
                            }),
                            waitForEncoding: !0
                        }), O.on("file-added", function(e) {
                            n && n({
                                tempUrl: URL.createObjectURL(e.data),
                                file: e
                            })
                        }), O.on("error", function(e) {
                            var t = "Error uploading to Transloadit: ".concat(e.message);
                            s && s(""), a && a(t), console.error(t)
                        }), O.on("transloadit:result", function(e, t, r) {
                            if (!(!i || "original_file" !== e || 0 === r.uploads.length || (0, b.Ns)(r.uploads[0].mime) || (0, m.kO)(r.uploads[0].mime, r.uploads[0].ext)) && t) {
                                var n = t.url,
                                    o = t.meta,
                                    c = t.name;
                                s && s(""), n ? i({
                                    src: n,
                                    meta: o,
                                    name: c,
                                    uploadResultStep: "original"
                                }) : (a && a("Error uploading to Transloadit"), console.error("Error uploading to Transloadit"))
                            }
                        }), O.on("transloadit:complete", function(e) {
                            if (0 === e.uploads.length) throw console.error("[transloadit:complete] No uploads in assembly", e), Error("No uploads in assembly");
                            if ("importDoc" === g) r = e.results.convert_to_html[0];
                            else if ((0, m.S9)(e.uploads[0].ext)) {
                                console.log("".concat(e.uploads.length, " fonts uploaded."));
                                return
                            } else(0, m.O7)(e.uploads[0].mime) ? (r = e.results.original_file[0], n = e.results.doc_thumbnail[0].url) : (0, m.kO)(e.uploads[0].mime, e.uploads[0].ext) ? (r = e.results.convert_to_pdf[0], n = e.results.doc_thumbnail[0].url) : (0, b.Ns)(e.uploads[0].mime) ? (r = (null === (c = e.results.optimized) || void 0 === c ? void 0 : c[0]) || (null === (u = e.results.filter_skip_optimize) || void 0 === u ? void 0 : u[0]), i = null === (l = e.results.detect_and_crop_face) || void 0 === l ? void 0 : l[0].url) : (t = e.results.original_file[0].url, i = null === (d = e.results.detect_and_crop_face) || void 0 === d ? void 0 : d[0].url, r = (null === (p = e.results.optimized) || void 0 === p ? void 0 : p[0]) || e.results.original_file[0]);
                            var t, r, n, i, c, u, l, d, p, f = r,
                                h = f.url,
                                v = f.meta,
                                j = f.name;
                            s && s(""), h ? o && o({
                                src: h,
                                meta: v,
                                name: j,
                                thumbnail: n,
                                croppedFace: i,
                                uploadResultStep: "optimized"
                            }, t) : (a && a("Error uploading to Transloadit"), console.error("Error uploading to Transloadit"))
                        }), O
                    }
                },
                I = (i = (0, c.Z)(l().mark(function e(t, r, n) {
                    var i, o, a, c, s = arguments;
                    return l().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = s.length > 3 && void 0 !== s[3] ? s[3] : "node", o = s.length > 4 && void 0 !== s[4] ? s[4] : "image", a = s.length > 5 ? s[5] : void 0, r) {
                                    e.next = 5;
                                    break
                                }
                                throw Error("Tried uplaoding an image with no orgId");
                            case 5:
                                (c = D.createUppyInstance(r, n, i, 1, o, a)).addFile({
                                    name: t.name,
                                    type: t.type,
                                    data: t
                                }), c.upload();
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e, t, r) {
                    return i.apply(this, arguments)
                }),
                _ = (o = (0, c.Z)(l().mark(function e(t, r, n) {
                    var i, o, a = arguments;
                    return l().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = a.length > 3 && void 0 !== a[3] ? a[3] : "node", r) {
                                    e.next = 3;
                                    break
                                }
                                throw Error("Tried uploading an image with no orgId");
                            case 3:
                                (o = D.createUppyInstance(r, n, i)).use(f.Z, {
                                    companionUrl: p.Zm
                                }), o.getPlugin("Url").addFile(t);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e, t, r) {
                    return o.apply(this, arguments)
                })
        },
        88959: function(e, t, r) {
            r.d(t, {
                A: function() {
                    return j
                },
                E: function() {
                    return v
                }
            });
            var n = r(8097),
                i = r(87254),
                o = r(9088),
                a = r(30893),
                c = r(45650),
                s = r(94301),
                u = r(40771),
                l = r(63849),
                d = r(2575),
                p = r(91012),
                f = r(49929),
                g = r(52322),
                h = {
                    label: function() {
                        return i.ag._({
                            id: "DAmK+T"
                        })
                    },
                    key: "All",
                    description: function() {
                        return i.ag._({
                            id: "Zz/1wq"
                        })
                    }
                },
                m = [h, {
                    label: function() {
                        return i.ag._({
                            id: "10G8Kb"
                        })
                    },
                    key: "Share",
                    description: function() {
                        return i.ag._({
                            id: "EVNJ2h"
                        })
                    }
                }, {
                    label: function() {
                        return i.ag._({
                            id: "SjDzTh"
                        })
                    },
                    key: "ShareCommercially",
                    description: function() {
                        return i.ag._({
                            id: "DHhpJP"
                        })
                    }
                }],
                b = h.key,
                v = function(e) {
                    var t;
                    return null === (t = m.find(function(t) {
                        return t.key === e
                    })) || void 0 === t ? void 0 : t.label()
                },
                j = function(e) {
                    var t = e.value,
                        r = void 0 === t ? b : t,
                        i = e.onChange;
                    return (0, g.jsxs)(o.v, {
                        children: [(0, g.jsx)(a.j, {
                            w: "100%",
                            as: c.z,
                            size: "sm",
                            variant: "plain",
                            rightIcon: (0, g.jsx)(f.G, {
                                icon: n.pt
                            }),
                            textAlign: "left",
                            children: v(r)
                        }), (0, g.jsx)(s.h, {
                            children: (0, g.jsx)(u.q, {
                                zIndex: "tooltip",
                                w: "350px",
                                children: (0, g.jsx)(l._, {
                                    type: "radio",
                                    w: "100%",
                                    defaultValue: h.key,
                                    value: r,
                                    onChange: function(e) {
                                        return i(e)
                                    },
                                    children: m.map(function(e) {
                                        var t = e.key,
                                            r = e.label,
                                            n = e.description;
                                        return (0, g.jsxs)(d.i, {
                                            value: t,
                                            children: [r(), (0, g.jsx)(p.x, {
                                                fontSize: "sm",
                                                color: "gray.400",
                                                children: n()
                                            })]
                                        }, t)
                                    })
                                })
                            })
                        })]
                    })
                }
        },
        52894: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return $
                }
            });
            var n = r(68089),
                i = r(64853),
                o = r(4742),
                a = r.n(o),
                c = r(55452),
                s = r(87254),
                u = r(67887),
                l = r(94659),
                d = r(21891),
                p = r(35316),
                f = r(53738),
                g = r(27777),
                h = r(2046),
                m = r(70287),
                b = r(49929),
                v = r(55966),
                j = r(98841),
                y = r(2784),
                x = r(23015),
                O = r(34860),
                w = r(88959),
                P = r(20406),
                k = r(28526),
                A = r.n(k),
                S = r(37914),
                C = r(21124),
                E = r(67273),
                D = r(31889),
                I = function(e) {
                    var t, r = e.provider,
                        n = e.enablePagination,
                        i = e.resultsPerPage,
                        o = (0, y.useState)(""),
                        a = o[0],
                        c = o[1],
                        s = (0, y.useState)([]),
                        u = s[0],
                        l = s[1],
                        d = (0, y.useState)(!1),
                        p = d[0],
                        f = d[1],
                        g = (0, y.useState)(!1),
                        h = g[0],
                        m = g[1],
                        b = (0, y.useState)(1),
                        v = b[0],
                        j = b[1],
                        x = (0, y.useState)("All"),
                        O = x[0],
                        w = x[1],
                        k = n && u.length > 0 && v < 6,
                        S = (0, y.useCallback)((t = (0, P.Z)(A().mark(function e(t, n) {
                            var o, a, c;
                            return A().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return f(!0), m(!1), e.prev = 2, o = {
                                            license: O,
                                            page: n,
                                            gammaFeature: "mediaDrawer"
                                        }, "bing" === r && (o.minWidth = E.x.minWidth, o.maxWidth = E.x.maxWidth), e.next = 7, (0, C.C)({
                                            query: t,
                                            count: i,
                                            provider: r,
                                            options: o
                                        });
                                    case 7:
                                        if (a = e.sent, f(!1), (null == a ? void 0 : a.length) >= 0) {
                                            e.next = 11;
                                            break
                                        }
                                        throw Error("No images found");
                                    case 11:
                                        c = a.filter(function(e) {
                                            return (0, D.VE)(e.imageUrl)
                                        }), l(function(e) {
                                            return e.concat(c)
                                        }), e.next = 20;
                                        break;
                                    case 15:
                                        e.prev = 15, e.t0 = e.catch(2), m(!0), f(!1), console.error("(caught) [ImageSearchGrid] fetchResults:", e.t0);
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [2, 15]
                            ])
                        })), function(e, r) {
                            return t.apply(this, arguments)
                        }), [r, i, O]),
                        I = (0, y.useCallback)(function(e) {
                            l([]), j(1), c(e), S(e, 1)
                        }, [S]),
                        _ = (0, y.useCallback)(function() {
                            S(a, v + 1), j(v + 1)
                        }, [S, a, v]),
                        U = (0, y.useCallback)(function() {
                            c(""), l([]), j(1)
                        }, []),
                        R = (0, y.useCallback)(function(e) {
                            w(e), U(), I(a)
                        }, [U, I, a]);
                    return {
                        search: I,
                        isLoading: p,
                        loadMore: _,
                        canLoadMore: k,
                        hasError: h,
                        imageResults: u,
                        resetResults: U,
                        searchQuery: a,
                        license: O,
                        updateLicense: R
                    }
                },
                _ = r(2689),
                U = r.n(_),
                R = r(11919),
                T = r(5766),
                M = r(45650),
                Z = r(91012),
                H = r(72360),
                N = r(48322),
                z = r(71170),
                L = r(81927),
                F = r(73805),
                W = r(13145),
                G = r(2321),
                B = r(4448),
                q = r(27302),
                Q = r(84103),
                V = r(52322),
                Y = (0, y.memo)(function(e) {
                    var t = e.image,
                        r = e.isSelected,
                        n = e.onImageClick,
                        i = e.resizeThumbnail ? (0, D.SN)(t.thumbnailUrl, D.Iv) : t.thumbnailUrl,
                        o = (0, D.Ly)(i, t.thumbnailUrl);
                    return (0, V.jsx)(z.P, {
                        children: (0, V.jsxs)(M.z, {
                            borderRadius: "base",
                            display: "block",
                            variant: "ghost",
                            width: "100%",
                            opacity: 1,
                            height: "100px",
                            textAlign: "left",
                            pos: "relative",
                            p: 0,
                            _hover: {
                                shadow: "outline"
                            },
                            _active: {
                                shadow: "outline"
                            },
                            transition: "box-shadow .2s ease",
                            cursor: "pointer",
                            onClick: function() {
                                return n(t)
                            },
                            backgroundImage: o,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            sx: {
                                _focusVisible: {
                                    ".attribution-container": {
                                        opacity: 1
                                    }
                                },
                                _hover: {
                                    ".attribution-container": {
                                        opacity: 1
                                    }
                                }
                            },
                            "data-testid": "image-search-grid-item",
                            children: [(0, V.jsx)(B.p, { in: r,
                                children: (0, V.jsx)(f.xu, {
                                    pointerEvents: "none",
                                    color: "white",
                                    pos: "absolute",
                                    inset: 0,
                                    bg: "rgba(0,0,0,.5)",
                                    borderRadius: "base",
                                    children: (0, V.jsx)(q.M, {
                                        h: "100%",
                                        w: "100%",
                                        children: (0, V.jsx)(b.G, {
                                            icon: G.LE
                                        })
                                    })
                                })
                            }), !t.thumbnailUrl && (0, V.jsx)(z.P, {
                                width: "100%",
                                children: (0, V.jsx)(L.O, {
                                    height: "80px",
                                    borderRadius: "base"
                                })
                            }), (0, V.jsxs)(f.xu, {
                                left: 0,
                                right: 0,
                                bottom: 0,
                                p: 2,
                                pos: "absolute",
                                color: "white",
                                fontSize: "xs",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                bg: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
                                borderBottomRadius: "base",
                                className: "attribution-container",
                                opacity: 0,
                                transitionProperty: "common",
                                transitionDuration: "normal",
                                children: [t.attributionUrl && t.credit && (0, V.jsx)(v.kH, {
                                    label: t.credit,
                                    placement: "left",
                                    children: (0, V.jsx)(Q.r, {
                                        mr: 1,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: t.attributionUrl,
                                        tabIndex: -1,
                                        children: (0, V.jsx)(b.G, {
                                            transform: "shrink-4",
                                            icon: W.Xj
                                        })
                                    })
                                }), t.credit]
                            })]
                        })
                    }, t.id || t.imageUrl)
                });
            Y.displayName = "ImageSearchGridItem";
            var K = function(e) {
                    var t = e.searchQuery,
                        r = e.currentImageUrl,
                        n = e.updateAttributes,
                        i = e.provider,
                        o = e.imageResults,
                        a = e.isLoading,
                        s = e.canLoadMore,
                        u = e.loadMore,
                        l = e.hasError,
                        d = e.resultsPerPage,
                        p = e.resizeThumbnails,
                        g = e.loadFromTop,
                        h = (0, y.useCallback)(function(e) {
                            var t = "".concat(S.v.API_HOST || "", "/media/images/track");
                            fetch(t, {
                                method: "POST",
                                credentials: "include",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    provider: i,
                                    id: e.id
                                })
                            })
                        }, [i]),
                        m = (0, y.useCallback)(function(e) {
                            h(e), n((0, F.C)(e, t, i))
                        }, [i, t, h, n]),
                        b = o.map(function(e, t) {
                            var n = e.imageUrl.split("?")[0],
                                o = r && r.split("?")[0];
                            return (0, V.jsx)(Y, {
                                provider: i,
                                image: e,
                                isSelected: n === o,
                                onImageClick: m,
                                resizeThumbnail: p
                            }, e.id)
                        });
                    return (0, V.jsxs)(R.k, {
                        direction: "column",
                        align: "stretch",
                        children: [(0, V.jsx)(T.M, {
                            gap: 2,
                            columns: {
                                base: 2,
                                "2xl": 3
                            },
                            children: void 0 !== g && g ? (0, V.jsxs)(V.Fragment, {
                                children: [a && (0, V.jsx)(X, {
                                    resultsPerPage: d
                                }), b]
                            }) : (0, V.jsxs)(V.Fragment, {
                                children: [b, a && (0, V.jsx)(X, {
                                    resultsPerPage: d
                                })]
                            })
                        }), s && (0, V.jsx)(M.z, {
                            variant: "plain",
                            onClick: u,
                            mt: 4,
                            children: (0, V.jsx)(c.cC, {
                                id: "yQ2kGp"
                            })
                        }), 0 === o.length && !a && (0, V.jsx)(f.xu, {
                            width: "100%",
                            textAlign: "center",
                            padding: "10px",
                            children: (0, V.jsx)(Z.x, {
                                style: {
                                    color: "gray"
                                },
                                children: (0, V.jsx)(c.cC, {
                                    id: "SihI8q",
                                    values: {
                                        searchQuery: t
                                    }
                                })
                            })
                        }), l && (0, V.jsxs)(H.b, {
                            status: "error",
                            children: [(0, V.jsx)(N.z, {}), (0, V.jsx)(c.cC, {
                                id: "Fkbzp8"
                            })]
                        })]
                    })
                },
                X = function(e) {
                    var t = e.resultsPerPage;
                    return (0, V.jsx)(V.Fragment, {
                        children: U()(t).map(function(e, t) {
                            return (0, V.jsx)(z.P, {
                                children: (0, V.jsx)(L.O, {
                                    height: "100px",
                                    borderRadius: "base"
                                })
                            }, t)
                        })
                    })
                },
                J = (0, j.E)(u.h),
                $ = function(e) {
                    var t = e.currentImageUrl,
                        r = e.updateAttributes,
                        o = e.defaultQuery,
                        u = e.randomQueries,
                        j = e.provider,
                        P = e.enablePagination,
                        k = e.enableSearch,
                        A = void 0 === k || k,
                        S = e.enableLicenseFilter,
                        C = e.resultsPerPage,
                        E = void 0 === C ? 18 : C,
                        D = e.resizeThumbnails,
                        _ = (0, y.useState)(""),
                        U = _[0],
                        R = _[1],
                        T = I({
                            provider: j,
                            enablePagination: void 0 === P || P,
                            resultsPerPage: E
                        }),
                        M = T.search,
                        Z = T.isLoading,
                        H = T.loadMore,
                        N = T.canLoadMore,
                        z = T.hasError,
                        L = T.imageResults,
                        F = T.resetResults,
                        W = T.searchQuery,
                        G = T.license,
                        B = T.updateLicense;
                    (0, O.vm)(function() {
                        if (o) {
                            R(o), M(o);
                            return
                        }
                        R(""), u ? M(a()(u) || "") : F()
                    }, [o, u, F, M], [j]);
                    var q = (0, y.useCallback)(function() {
                            var e = a()(u);
                            e && M(e)
                        }, [u, M]),
                        Q = (0, O.Kt)(M, 1e3);
                    return (0, V.jsxs)(l.g, {
                        spacing: 4,
                        align: "stretch",
                        translate: "no",
                        children: [(0, V.jsx)(v.kH, {
                            placement: "top",
                            label: (0, V.jsx)(c.cC, {
                                id: "wj1Zq8"
                            }),
                            isDisabled: A,
                            children: (0, V.jsxs)(d.B, {
                                size: "md",
                                children: [(0, V.jsx)(p.Z, {
                                    pointerEvents: "none",
                                    children: (0, V.jsx)(f.xu, {
                                        color: "gray.400",
                                        children: (0, V.jsx)(b.G, {
                                            icon: i.wn
                                        })
                                    })
                                }), (0, V.jsx)(g.I, {
                                    isDisabled: !A,
                                    placeholder: s.ag._({
                                        id: "6YBjmV"
                                    }),
                                    value: U,
                                    onChange: function(e) {
                                        R(e.target.value), Q(e.target.value)
                                    },
                                    "data-testid": "image-search-input"
                                }), u && (0, V.jsx)(p.x, {
                                    children: (0, V.jsx)(v.kH, {
                                        placement: "top",
                                        label: (0, V.jsx)(c.cC, {
                                            id: "OVjfHO"
                                        }),
                                        children: (0, V.jsx)(J, {
                                            icon: (0, V.jsx)(b.G, {
                                                icon: n.RJ
                                            }),
                                            "aria-label": "Surprise me",
                                            variant: "ghost",
                                            onClick: q,
                                            size: "sm",
                                            whileTap: {
                                                y: "-5px"
                                            },
                                            onMouseDown: x.br
                                        })
                                    })
                                })]
                            })
                        }), void 0 !== S && S && (0, V.jsxs)(h.NI, {
                            children: [(0, V.jsx)(m.l, {
                                fontSize: "sm",
                                fontWeight: "semibold",
                                children: (0, V.jsx)(c.cC, {
                                    id: "6TSHCF"
                                })
                            }), (0, V.jsx)(w.A, {
                                value: G,
                                onChange: B
                            })]
                        }), W && (0, V.jsx)(K, {
                            updateAttributes: r,
                            currentImageUrl: t,
                            searchQuery: W,
                            provider: j,
                            imageResults: L,
                            isLoading: Z,
                            canLoadMore: N,
                            loadMore: H,
                            hasError: z,
                            resultsPerPage: E,
                            resizeThumbnails: void 0 !== D && D
                        })]
                    })
                }
        },
        94109: function(e, t, r) {
            r.d(t, {
                v: function() {
                    return N
                },
                ft: function() {
                    return H
                }
            });
            var n, i, o, a, c = r(95235),
                s = r(20406),
                u = r(28526),
                l = r.n(u),
                d = r(55452),
                p = r(87254),
                f = r(94659),
                g = r(50390),
                h = r(8283),
                m = r(27777),
                b = r(45650),
                v = r(72360),
                j = r(48322),
                y = r(2784),
                x = r(46358),
                O = r(62141),
                w = r(31889),
                P = r(46398);

            function k(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(r), !0).forEach(function(t) {
                        (0, c.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var S = {
                    thumbnail: void 0,
                    embed: void 0,
                    meta: void 0,
                    sourceUrl: void 0
                },
                C = (n = (0, s.Z)(l().mark(function e(t) {
                    var r, n, i, o, a, c, s, u, d, p, f, g, h, m, b, v, j, y, x;
                    return l().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("https://cdn.iframe.ly/api/iframely/?url=".concat(encodeURIComponent(t), "&key=").concat("a68bac8b6624d46b6d0ba46e5b3f8971", "&iframe=1&omit_script=1"));
                            case 2:
                                return s = e.sent, e.next = 5, s.json();
                            case 5:
                                if (console.debug("[Iframely]", u = e.sent), !u.error) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", Promise.reject(u));
                            case 9:
                                return d = u.html, p = u.links, f = u.meta, g = p.icon, h = p.player, m = p.reader, b = p.app, v = p.thumbnail, y = (j = h || m || b) ? j.filter(function(e) {
                                    return "text/html" === e.type && e.href
                                })[0] || j[0] : null, x = f && !f.xframe && (!f.csp || !f.csp.includes("frame-ancestors")), e.abrupt("return", {
                                    sourceUrl: (null == f ? void 0 : f.canonical) || t,
                                    embed: y ? {
                                        url: y.href,
                                        html: d,
                                        height: null === (r = y.media) || void 0 === r ? void 0 : r.height,
                                        width: (null === (n = y.media) || void 0 === n ? void 0 : n.width) || (null === (i = y.media) || void 0 === i ? void 0 : i["max-width"]),
                                        aspectRatio: null === (o = y.media) || void 0 === o ? void 0 : o["aspect-ratio"]
                                    } : x ? {
                                        url: t
                                    } : void 0,
                                    meta: A(A({}, f || {}), {}, {
                                        icon: g && g[0] ? g[0].href : void 0
                                    }),
                                    thumbnail: v && v[0] ? {
                                        src: v[0].href,
                                        height: null === (a = v[0].media) || void 0 === a ? void 0 : a.height,
                                        width: null === (c = v[0].media) || void 0 === c ? void 0 : c.width
                                    } : void 0
                                });
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e) {
                    return n.apply(this, arguments)
                }),
                E = r(4038),
                D = r(92140),
                I = r(52322);

            function _(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _(Object(r), !0).forEach(function(t) {
                        (0, c.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function R(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return T(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return T(e, t)
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                    c = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        c = !0, o = e
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function T(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var M = function(e) {
                    try {
                        var t, r, n = new DOMParser().parseFromString(e, "text/html");
                        return (null === (t = n.querySelector("iframe")) || void 0 === t ? void 0 : t.src) || (null === (r = n.querySelector("blockquote")) || void 0 === r ? void 0 : r.cite) || !1
                    } catch (e) {
                        return !1
                    }
                },
                Z = (i = (0, s.Z)(l().mark(function e(t) {
                    var r, n, i, o, a, c, s, u, d, f, g, h, m, b, v, j, y, x, O, w;
                    return l().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, C(t);
                            case 3:
                                o = e.sent, e.next = 32;
                                break;
                            case 6:
                                if (e.prev = 6, e.t0 = e.catch(0), !(403 === e.t0.status || 404 === e.t0.status || 415 === e.t0.status)) {
                                    e.next = 31;
                                    break
                                }
                                a = R(D.yC), e.prev = 10, a.s();
                            case 12:
                                if ((c = a.n()).done) {
                                    e.next = 20;
                                    break
                                }
                                if (u = (s = c.value).key, d = s.urlRegex, f = s.canEmbedPrivate, s.label, g = s.defaultDisplayStyle, !(!d || !t.match(d))) {
                                    e.next = 16;
                                    break
                                }
                                return e.abrupt("continue", 18);
                            case 16:
                                if (!f) {
                                    e.next = 18;
                                    break
                                }
                                return e.abrupt("return", U(U({}, S), {}, {
                                    source: u,
                                    proxy: !1,
                                    url: t,
                                    meta: {
                                        title: p.ag._({
                                            id: "SuoEIZ"
                                        })
                                    },
                                    sourceUrl: t,
                                    displayStyle: g || "inline"
                                }));
                            case 18:
                                e.next = 12;
                                break;
                            case 20:
                                e.next = 25;
                                break;
                            case 22:
                                e.prev = 22, e.t1 = e.catch(10), a.e(e.t1);
                            case 25:
                                return e.prev = 25, a.f(), e.finish(25);
                            case 28:
                            case 31:
                                throw Error("Code: ".concat(e.t0.status, ". Message: ").concat(e.t0.error));
                            case 32:
                                if (o) {
                                    e.next = 34;
                                    break
                                }
                                throw Error("No link metadata found");
                            case 34:
                                m = R(D.yC), e.prev = 35, m.s();
                            case 37:
                                if ((b = m.n()).done) {
                                    e.next = 44;
                                    break
                                }
                                if (y = (j = b.value).key, !((x = j.urlRegex) && null !== (v = o.sourceUrl) && void 0 !== v && v.match(x))) {
                                    e.next = 42;
                                    break
                                }
                                return h = y, e.abrupt("break", 44);
                            case 42:
                                e.next = 37;
                                break;
                            case 44:
                                e.next = 49;
                                break;
                            case 46:
                                e.prev = 46, e.t2 = e.catch(35), m.e(e.t2);
                            case 49:
                                return e.prev = 49, m.f(), e.finish(49);
                            case 52:
                                if (!h) {
                                    e.next = 57;
                                    break
                                }
                                return w = D.zX[h], e.abrupt("return", U(U(U({}, S), o), {}, {
                                    source: h,
                                    proxy: !1,
                                    url: (null === (O = o.embed) || void 0 === O ? void 0 : O.url) || o.sourceUrl,
                                    displayStyle: w.defaultDisplayStyle
                                }));
                            case 57:
                                if (!((null === (r = o.meta) || void 0 === r ? void 0 : r.medium) == "audio" || (null === (n = o.meta) || void 0 === n ? void 0 : n.medium) === "video")) {
                                    e.next = 61;
                                    break
                                }
                                return e.abrupt("return", U(U(U({}, S), o), {}, {
                                    source: D.wj.key
                                }));
                            case 61:
                                if (!(null !== (i = o.embed) && void 0 !== i && i.url)) {
                                    e.next = 65;
                                    break
                                }
                                return e.abrupt("return", U(U(U({}, S), o), {}, {
                                    source: D.Hw.key,
                                    proxy: !1,
                                    url: o.embed.url
                                }));
                            case 65:
                                return e.abrupt("return", U(U(U({}, S), o), {}, {
                                    source: D.Hw.key,
                                    proxy: !0,
                                    url: t
                                }));
                            case 66:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [0, 6],
                        [10, 22, 25, 28],
                        [35, 46, 49, 52]
                    ])
                })), function(e) {
                    return i.apply(this, arguments)
                }),
                H = (o = (0, s.Z)(l().mark(function e(t, r) {
                    return l().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Z(t).then(function(e) {
                                    return r(e), e
                                }).then(function(e) {
                                    return z(e, r)
                                });
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e, t) {
                    return o.apply(this, arguments)
                }),
                N = function(e) {
                    var t = e.currentUrl,
                        r = void 0 === t ? "" : t,
                        n = e.updateAttributes,
                        i = e.handleSubmit,
                        o = e.handleDataSubmit,
                        a = e.placeholder,
                        c = e.noHeader,
                        s = (0, y.useState)(r || ""),
                        u = s[0],
                        l = s[1],
                        x = (0, y.useState)(),
                        O = x[0],
                        k = x[1],
                        A = u !== r;
                    (0, y.useEffect)(function() {
                        r && l(r)
                    }, [r]), (0, y.useEffect)(function() {
                        k(void 0)
                    }, [u]);
                    var S = (0, y.useCallback)(function(e) {
                            if (0 === e.indexOf("data:")) {
                                if (o) {
                                    try {
                                        (0, w.v9)(e)
                                    } catch (e) {
                                        k(p.ag._({
                                            id: "YqH0TR"
                                        }));
                                        return
                                    }
                                    return o(e)
                                }
                                return void k(p.ag._({
                                    id: "YqH0TR"
                                }))
                            }
                            var t = M(e);
                            if (t && (e = t), !(0, P.kr)(e) && (e = "https://" + e, !(0, P.jv)(e))) {
                                k(p.ag._({
                                    id: "YqH0TR"
                                }));
                                return
                            }
                            return i ? i(e) : n ? H(e, n).catch(function(e) {
                                console.error("Error fetching URL", e), k(p.ag._({
                                    id: "dZyJFB"
                                }))
                            }) : void console.error("No submit handler provided")
                        }, [o, i, n]),
                        C = (0, y.useCallback)(function() {
                            S(u.trim())
                        }, [S, u]),
                        E = (0, y.useCallback)(function(e) {
                            r || S(e.clipboardData.getData("text/plain").trim())
                        }, [r, S]);
                    return (0, I.jsxs)(f.g, {
                        align: "flex-start",
                        spacing: 4,
                        w: "100%",
                        children: [!c && (0, I.jsx)(g.X, {
                            size: "md",
                            children: (0, I.jsx)(d.cC, {
                                id: "D89ve+"
                            })
                        }), (0, I.jsxs)(h.U, {
                            align: "flex-start",
                            spacing: 2,
                            w: "100%",
                            children: [(0, I.jsx)(m.I, {
                                placeholder: a,
                                onKeyDown: function(e) {
                                    "Enter" === e.key && C()
                                },
                                onPaste: E,
                                value: u,
                                onChange: function(e) {
                                    return l(e.target.value)
                                },
                                flex: 1,
                                "data-testid": "url-input"
                            }), (0, I.jsx)(b.z, {
                                onClick: C,
                                isDisabled: !A,
                                children: (0, I.jsx)(d.cC, {
                                    id: "4pSxwB"
                                })
                            })]
                        }), O && (0, I.jsxs)(v.b, {
                            status: "error",
                            children: [(0, I.jsx)(j.z, {}), O]
                        })]
                    })
                },
                z = (a = (0, s.Z)(l().mark(function e(t, r) {
                    var n, i, o, a;
                    return l().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = (0, x.bh)().getState(), i = (0, O.KV)(n)) {
                                    e.next = 5;
                                    break
                                }
                                return console.error("[uploadIframelyThumbnail] No orgId specified, bailing"), e.abrupt("return");
                            case 5:
                                if (!((a = (o = U({}, t.thumbnail)).src) && void 0 !== o)) {
                                    e.next = 16;
                                    break
                                }
                                return e.prev = 8, e.next = 11, (0, E.WY)(a, i, {
                                    onUploadComplete: function(e) {
                                        return o && (o.src = e.src, o.width = e.meta.width, o.height = e.meta.height, r({
                                            thumbnail: o
                                        })), Promise.resolve()
                                    },
                                    onOriginalFileUpload: function(e) {
                                        return o && (o.src = e.src, o.width = e.meta.width, o.height = e.meta.height, r({
                                            thumbnail: o
                                        })), Promise.resolve()
                                    },
                                    onUploadFailed: function(e) {
                                        return console.error("[iframely] Thumbnail upload error: ", e), Promise.reject()
                                    }
                                }, "iframelyThumbnail");
                            case 11:
                                e.next = 16;
                                break;
                            case 13:
                                e.prev = 13, e.t0 = e.catch(8), console.error("[iframely] Thumbnail upload error: ", e.t0);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [8, 13]
                    ])
                })), function(e, t) {
                    return a.apply(this, arguments)
                })
        },
        9929: function(e, t, r) {
            r.d(t, {
                u: function() {
                    return d
                }
            });
            var n = r(87254),
                i = r(72360),
                o = r(48322),
                a = r(94659),
                c = r(91710),
                s = r(2784),
                u = r(4038);
            r(59398), r(88758);
            var l = r(52322),
                d = function(e) {
                    var t = e.orgId,
                        r = e.uploadType,
                        d = e.editType,
                        p = e.onUploadStart,
                        f = e.onUploadSuccess,
                        g = e.onUploadFailed,
                        h = e.showTip,
                        m = e.dropHereText,
                        b = void 0 === m ? n.ag._({
                            id: "mgPDos",
                            values: {
                                0: "%{browse}"
                            }
                        }) : m,
                        v = e.customHeight,
                        j = e.customFontSize,
                        y = e.maxFilesAllowed,
                        x = void 0 === y ? 1 : y,
                        O = (0, s.useState)(""),
                        w = O[0],
                        P = O[1],
                        k = (0, s.useMemo)(function() {
                            return u.ND.createUppyInstance(t, {
                                onUploadStart: p,
                                onOriginalFileUpload: f,
                                onUploadComplete: function() {
                                    f.apply(void 0, arguments), k.cancelAll()
                                },
                                onUploadFailed: g,
                                setErrorMessage: P
                            }, d, x, r)
                        }, [t, d, r, x, f, p, g]);
                    return (0, l.jsxs)(a.g, {
                        align: "stretch",
                        spacing: 4,
                        fontSize: j || void 0,
                        children: [(0, l.jsx)(c.v0, {
                            width: "100%",
                            height: v || "100%",
                            note: void 0 === h || h ? n.ag._({
                                id: "x4Ts51"
                            }) : "",
                            uppy: k,
                            locale: {
                                strings: {
                                    dropHereOr: b,
                                    browse: n.ag._({
                                        id: "wZ9s+A"
                                    })
                                }
                            }
                        }), w && (0, l.jsxs)(i.b, {
                            status: "error",
                            children: [(0, l.jsx)(o.z, {}), w]
                        })]
                    })
                }
        },
        28139: function(e, t, r) {
            r.d(t, {
                $5: function() {
                    return o.$5
                },
                BF: function() {
                    return o.BF
                },
                BM: function() {
                    return o.BM
                },
                BR: function() {
                    return o.BR
                },
                Bo: function() {
                    return o.Bo
                },
                DN: function() {
                    return o.DN
                },
                DU: function() {
                    return o.DU
                },
                Ds: function() {
                    return o.Ds
                },
                F6: function() {
                    return o.F6
                },
                FH: function() {
                    return o.FH
                },
                Ge: function() {
                    return n.Ge
                },
                Hw: function() {
                    return o.Hw
                },
                LE: function() {
                    return o.LE
                },
                N$: function() {
                    return n.N$
                },
                ND: function() {
                    return n.ND
                },
                NX: function() {
                    return o.NX
                },
                QR: function() {
                    return o.QR
                },
                QT: function() {
                    return o.QT
                },
                TQ: function() {
                    return o.TQ
                },
                Vy: function() {
                    return o.Vy
                },
                WY: function() {
                    return n.WY
                },
                bD: function() {
                    return o.bD
                },
                bO: function() {
                    return o.bO
                },
                cT: function() {
                    return n.cT
                },
                eK: function() {
                    return o.eK
                },
                hq: function() {
                    return o.hq
                },
                iL: function() {
                    return o.iL
                },
                in: function() {
                    return o.in
                },
                jS: function() {
                    return o.jS
                },
                jt: function() {
                    return o.jt
                },
                oC: function() {
                    return o.oC
                },
                p7: function() {
                    return o.p7
                },
                pK: function() {
                    return n.pK
                },
                qz: function() {
                    return o.qz
                },
                ud: function() {
                    return o.ud
                },
                un: function() {
                    return i.u
                },
                w4: function() {
                    return o.w4
                },
                wj: function() {
                    return o.wj
                },
                zX: function() {
                    return o.zX
                },
                zs: function() {
                    return o.zs
                }
            });
            var n = r(4038);
            r(52894);
            var i = r(9929),
                o = r(92140)
        },
        41265: function(e, t, r) {
            r.d(t, {
                N: function() {
                    return tg
                }
            });
            var n, i = r(58565),
                o = r(87254),
                a = r(98875),
                c = r(74586),
                s = r(95235),
                u = r(49826),
                l = r(55452),
                d = r(94659),
                p = r(11919),
                f = r(36895),
                g = r(72360),
                h = r(48322),
                m = r(18751),
                b = r(8283),
                v = r(50390),
                j = r(45650),
                y = r(25793),
                x = r(49929),
                O = r(55966),
                w = r(2784),
                P = r(6201),
                k = r(19674),
                A = r(68740),
                S = r(95498),
                C = r(75085),
                E = r(2689),
                D = r.n(E),
                I = r(5766),
                _ = r(71170),
                U = r(81927),
                R = r(23313),
                T = r(36471),
                M = r(2321),
                Z = r(4448),
                H = r(53738),
                N = r(27302),
                z = r(67887),
                L = r(31889),
                F = r(52322),
                W = (0, w.memo)(function(e) {
                    var t = e.image,
                        r = e.isSelected,
                        n = e.onImageClick,
                        i = e.resizeThumbnail,
                        o = e.isDeleting,
                        a = e.onDeleteImage,
                        c = i ? (0, L.SN)(t.attrs.src, L.Iv, t.attrs.meta) : t.attrs.src,
                        s = (0, L.Ly)(c);
                    return (0, F.jsx)(_.P, {
                        children: (0, F.jsxs)(j.z, {
                            borderRadius: "base",
                            display: "block",
                            variant: "ghost",
                            width: "100%",
                            opacity: 1,
                            height: "100px",
                            textAlign: "left",
                            pos: "relative",
                            p: 0,
                            _hover: {
                                shadow: "outline"
                            },
                            _active: {
                                shadow: "outline"
                            },
                            transition: "box-shadow .2s ease",
                            cursor: "pointer",
                            onClick: function() {
                                return n(t)
                            },
                            backgroundImage: s,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            sx: {
                                _focusVisible: {
                                    ".attribution-container": {
                                        opacity: 1
                                    }
                                },
                                _hover: {
                                    ".attribution-container": {
                                        opacity: 1
                                    }
                                }
                            },
                            isDisabled: o,
                            "data-testid": "image-search-grid-item",
                            role: "group",
                            children: [(0, F.jsx)(Z.p, { in: r,
                                children: (0, F.jsx)(H.xu, {
                                    pointerEvents: "none",
                                    color: "white",
                                    pos: "absolute",
                                    inset: 0,
                                    bg: "rgba(0,0,0,.5)",
                                    borderRadius: "base",
                                    children: (0, F.jsx)(N.M, {
                                        h: "100%",
                                        w: "100%",
                                        children: (0, F.jsx)(x.G, {
                                            icon: M.LE
                                        })
                                    })
                                })
                            }), !r && (0, F.jsx)(z.h, {
                                isRound: !0,
                                size: "xs",
                                "aria-label": "Delete image",
                                onClick: function(e) {
                                    e.stopPropagation(), a(t.id)
                                },
                                color: "red.500",
                                icon: (0, F.jsx)(x.G, {
                                    icon: T.$
                                }),
                                zIndex: 100,
                                pos: "absolute",
                                top: 1,
                                display: "none",
                                bg: "0 none",
                                bgColor: "red.50",
                                right: 1,
                                _hover: {
                                    color: "red.600",
                                    bg: "0 none",
                                    bgColor: "red.200"
                                },
                                _groupHover: {
                                    display: "block"
                                }
                            }), !t.attrs.src && (0, F.jsx)(_.P, {
                                width: "100%",
                                children: (0, F.jsx)(U.O, {
                                    height: "80px",
                                    borderRadius: "base"
                                })
                            })]
                        })
                    }, t.id)
                });
            W.displayName = "AIImageHistoryItem";
            var G = function(e) {
                    var t = e.onSelectImage,
                        r = e.savedMediaId,
                        n = e.imageResults,
                        i = e.onDeleteImage,
                        o = e.deletingId,
                        a = e.isLoading,
                        c = e.canLoadMore,
                        s = e.isLoadingMore,
                        u = e.loadMore,
                        d = e.resultsPerPage,
                        f = e.resizeThumbnails,
                        g = n.map(function(e) {
                            return (0, F.jsx)(W, {
                                image: e,
                                isSelected: e.id === r,
                                isDeleting: e.id === o,
                                onDeleteImage: i,
                                onImageClick: t,
                                resizeThumbnail: f
                            }, e.id)
                        });
                    return (0, F.jsxs)(p.k, {
                        direction: "column",
                        align: "stretch",
                        children: [(0, F.jsxs)(I.M, {
                            gap: 2,
                            columns: 3,
                            children: [a && (0, F.jsx)(B, {
                                resultsPerPage: d
                            }), g]
                        }), c && (0, F.jsx)(j.z, {
                            variant: "plain",
                            onClick: u,
                            mt: 4,
                            isLoading: s,
                            children: (0, F.jsx)(l.cC, {
                                id: "yQ2kGp"
                            })
                        })]
                    })
                },
                B = function(e) {
                    var t = e.resultsPerPage;
                    return (0, F.jsx)(F.Fragment, {
                        children: D()(t).map(function(e, t) {
                            return (0, F.jsx)(_.P, {
                                children: (0, F.jsx)(U.O, {
                                    height: "100px",
                                    borderRadius: "base"
                                })
                            }, t)
                        })
                    })
                },
                q = r(20280),
                Q = r(30628),
                V = r(91012),
                Y = r(71354),
                K = r(76648),
                X = (0, w.memo)(function(e) {
                    var t, r = e.attrs,
                        n = e.onRateImage,
                        i = null === (t = r.aiParams) || void 0 === t ? void 0 : t.interactionId,
                        a = (0, w.useState)(null),
                        c = a[0],
                        s = a[1],
                        u = (0, w.useState)(""),
                        f = u[0],
                        g = u[1],
                        h = (0, w.useState)("rate"),
                        m = h[0],
                        b = h[1];
                    (0, w.useEffect)(function() {
                        r.savedMediaId && (b("rate"), g(""), s(null))
                    }, [r.savedMediaId]);
                    var v = (0, w.useCallback)(function(e) {
                            s(e), b("feedback"), n(e)
                        }, [n]),
                        k = (0, w.useCallback)(function() {
                            b("thanks"), setTimeout(function() {
                                b("hide"), g(""), s(null)
                            }, 3e3)
                        }, []),
                        A = (0, w.useCallback)(function() {
                            k()
                        }, [k]),
                        S = (0, w.useCallback)(function() {
                            var e;
                            null !== (e = r.aiParams) && void 0 !== e && e.interactionId && ((0, P.Lt)({
                                feedback: f,
                                aiParams: r.aiParams,
                                imageUrl: r.src,
                                interactionId: r.aiParams.interactionId
                            }), k())
                        }, [r, f, k]);
                    return i && "hide" !== m ? "thanks" === m ? (0, F.jsx)(p.k, {
                        position: "absolute",
                        bottom: 1,
                        p: 2,
                        right: 1,
                        bg: "white",
                        borderRadius: "md",
                        borderWidth: "1px",
                        borderColor: "gray.200",
                        shadow: "xl",
                        children: (0, F.jsx)(V.x, {
                            fontSize: "xs",
                            children: (0, F.jsx)(l.cC, {
                                id: "yOrM5+"
                            })
                        })
                    }) : (0, F.jsxs)(d.g, {
                        position: "absolute",
                        bottom: 1,
                        zIndex: "popover",
                        right: 1,
                        align: "flex-end",
                        spacing: 1,
                        children: ["feedback" === m && (0, F.jsx)(p.k, {
                            p: 2,
                            bg: "white",
                            borderRadius: "md",
                            borderWidth: "1px",
                            borderColor: "gray.200",
                            shadow: "xl",
                            children: (0, F.jsxs)(Y.K, {
                                alignItems: "flex-end",
                                children: [(0, F.jsx)(y.g, {
                                    value: f,
                                    onChange: function(e) {
                                        return g(e.target.value)
                                    },
                                    fontSize: "xs",
                                    placeholder: o.ag._({
                                        id: "eYeGuP"
                                    }),
                                    p: 1,
                                    px: 2,
                                    borderRadius: "0"
                                }), (0, F.jsxs)(K.h, {
                                    size: "xs",
                                    children: [(0, F.jsx)(j.z, {
                                        variant: "ghost",
                                        onClick: A,
                                        children: (0, F.jsx)(l.cC, {
                                            id: "6Uau97"
                                        })
                                    }), (0, F.jsx)(j.z, {
                                        variant: "solid",
                                        onClick: S,
                                        children: (0, F.jsx)(l.cC, {
                                            id: "1m41/U"
                                        })
                                    })]
                                })]
                            })
                        }), (0, F.jsxs)(K.h, {
                            size: "sm",
                            children: [(0, F.jsx)(O.kH, {
                                label: (0, F.jsx)(l.cC, {
                                    id: "kR82DG"
                                }),
                                placement: "top",
                                children: (0, F.jsx)(z.h, {
                                    "aria-label": "thumbs down",
                                    color: "poor" === c ? "red.600" : void 0,
                                    borderWidth: "1px",
                                    borderColor: "poor" === c ? "red.600" : "transparent",
                                    bg: "poor" === c ? "red.100" : void 0,
                                    _hover: {
                                        bg: "poor" === c ? "red.200" : "red.100"
                                    },
                                    icon: (0, F.jsx)(x.G, {
                                        icon: Q.b
                                    }),
                                    onClick: function() {
                                        v("poor")
                                    }
                                })
                            }), (0, F.jsx)(O.kH, {
                                label: (0, F.jsx)(l.cC, {
                                    id: "y1GvbS"
                                }),
                                placement: "top",
                                children: (0, F.jsx)(z.h, {
                                    "aria-label": "thumbs up",
                                    color: "good" === c ? "green.600" : void 0,
                                    borderWidth: "1px",
                                    borderColor: "good" === c ? "green.600" : "transparent",
                                    bg: "good" === c ? "green.100" : void 0,
                                    _hover: {
                                        bg: "good" === c ? "green.200" : "green.100"
                                    },
                                    icon: (0, F.jsx)(x.G, {
                                        icon: q.u8
                                    }),
                                    onClick: function() {
                                        v("good")
                                    }
                                })
                            })]
                        })]
                    }) : null
                });
            X.displayName = "AIImageRating";
            var J = r(26673),
                $ = r(69943),
                ee = r(88033),
                et = r(99258),
                er = r(2046),
                en = r(9088),
                ei = r(30893),
                eo = r(40771),
                ea = r(63849),
                ec = r(2575),
                es = r(12741),
                eu = r(20406),
                el = r(81333),
                ed = r(84636),
                ep = r.n(ed),
                ef = r(28526),
                eg = r.n(ef),
                eh = r(12172),
                em = r(47911),
                eb = r(54113),
                ev = r(13089),
                ej = r(96412),
                ey = r(41701),
                ex = r(90129),
                eO = r(29017),
                ew = r(48200),
                eP = r(3907),
                ek = r(37914),
                eA = (n = (0, eu.Z)(eg().mark(function e(t) {
                    var r, n, i, o;
                    return eg().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = "".concat(ek.v.API_HOST || "https://api.gamma.app", "/media/images/generate"), e.next = 3, fetch(r, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(t),
                                    credentials: "include"
                                });
                            case 3:
                                if ((n = e.sent).ok) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 7, n.json();
                            case 7:
                                throw i = e.sent, o = "".concat(i.error, ": ").concat(i.message), new eS(o, i);
                            case 10:
                                return e.abrupt("return", n.json());
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e) {
                    return n.apply(this, arguments)
                }),
                eS = function(e) {
                    (0, ex.Z)(n, e);
                    var t, r = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, r = (0, ew.Z)(n);
                        if (t) {
                            var i = (0, ew.Z)(this).constructor;
                            e = Reflect.construct(r, arguments, i)
                        } else e = r.apply(this, arguments);
                        return (0, eO.Z)(this, e)
                    });

                    function n(e, t) {
                        var i;
                        return (0, ej.Z)(this, n), i = r.call(this, e, t), (0, s.Z)((0, ey.Z)(i), "response", void 0), i.response = t, i
                    }
                    return (0, ev.Z)(n)
                }((0, eP.Z)(Error));
            eS.prototype.name = "GenerateImageError";
            var eC = r(16034),
                eE = r(21010),
                eD = new eC.V({
                    systemPromptOperation: eE.Run.GenerateImagePromptSystem,
                    userPromptOperation: eE.Run.GenerateImagePromptUser,
                    variables: ["input", "html"],
                    params: {
                        temperature: .7,
                        maxTokens: 50
                    }
                }),
                eI = r(46358),
                e_ = r(17033),
                eU = r(62141),
                eR = r(95472),
                eT = r(12691),
                eM = r(10710),
                eZ = r(93858),
                eH = r(31975);

            function eN(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ez(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eN(Object(r), !0).forEach(function(t) {
                        (0, s.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eN(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eL = function(e) {
                    var t, r = (0, w.useState)([]),
                        n = r[0],
                        i = r[1],
                        o = (0, w.useState)(!1),
                        a = o[0],
                        c = o[1],
                        s = (0, R.qOp)({
                            variables: {
                                docId: e,
                                source: "image.ai-generated",
                                type: R.DDH.Image,
                                first: 18
                            }
                        }),
                        u = s.data,
                        l = s.loading,
                        d = s.fetchMore;
                    s.error;
                    var p = (0, w.useState)(null),
                        f = p[0],
                        g = p[1],
                        h = (0, R.BAq)(),
                        m = (0, el.Z)(h, 1)[0],
                        b = (0, w.useCallback)((t = (0, eu.Z)(eg().mark(function e(t) {
                            return eg().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return i(function(e) {
                                            return e.filter(function(e) {
                                                return e.id !== t
                                            })
                                        }), g(t), e.prev = 2, e.next = 5, m({
                                            variables: {
                                                id: t
                                            },
                                            update: function(e) {
                                                var r = RegExp(t, "g");
                                                Object.keys(e.data.data).forEach(function(t) {
                                                    t.match(r) && e.data.delete(t)
                                                })
                                            },
                                            refetchQueries: ["GetSavedMedia"]
                                        });
                                    case 5:
                                        e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(2), console.error(e.t0);
                                    case 10:
                                        g(null);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [2, 7]
                            ])
                        })), function(e) {
                            return t.apply(this, arguments)
                        }), [m]),
                        v = (0, w.useMemo)(function() {
                            return (null == u ? void 0 : u.savedMedia.edges.map(function(e) {
                                return e.node
                            })) || []
                        }, [null == u ? void 0 : u.savedMedia.edges]),
                        j = (0, w.useCallback)(function(e) {
                            i(function(t) {
                                return [].concat((0, es.Z)(e), (0, es.Z)(t))
                            })
                        }, []),
                        y = (0, w.useMemo)(function() {
                            return ep()([].concat((0, es.Z)(n), (0, es.Z)(v)), "id")
                        }, [n, v]),
                        x = null == u ? void 0 : u.savedMedia.pageInfo;
                    return {
                        history: y,
                        loadMore: (0, w.useCallback)(function() {
                            null != x && x.hasNextPage && null != x && x.endCursor && (c(!0), d({
                                variables: {
                                    after: null == x ? void 0 : x.endCursor
                                }
                            }).finally(function() {
                                c(!1)
                            }))
                        }, [d, x]),
                        canFetchMore: !!(null != x && x.hasNextPage),
                        isLoadingHistory: l,
                        isFetchingMore: a,
                        addToHistory: j,
                        deleteImage: b,
                        deletingId: f
                    }
                },
                eF = function(e) {
                    var t, r = e.selectImage,
                        n = (0, eI.CG)(eU.ke),
                        i = (0, eM.SE)().currentWorkspace,
                        o = (0, w.useState)(""),
                        a = o[0],
                        c = o[1],
                        s = (0, w.useState)(!1),
                        u = s[0],
                        l = s[1],
                        d = (0, w.useState)(!1),
                        p = d[0],
                        f = d[1],
                        g = (0, w.useState)(),
                        h = g[0],
                        m = g[1],
                        b = eL(n),
                        v = b.history,
                        j = b.isLoadingHistory,
                        y = b.addToHistory,
                        x = b.loadMore,
                        O = b.canFetchMore,
                        k = b.isFetchingMore,
                        A = b.deleteImage,
                        S = b.deletingId;
                    return {
                        generate: (0, w.useCallback)((t = (0, eu.Z)(eg().mark(function e(t) {
                            var o, a, s, u, d, p;
                            return eg().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = (0, P.nZ)(), c(t.prompt), l(!0), f(!1), m(void 0), a = performance.now(), s = {
                                            interactionId: o,
                                            interface: "generate-image",
                                            provider: "baseten",
                                            streaming: !1,
                                            inputContent: t.prompt,
                                            docId: n,
                                            generateImageOptions: t
                                        }, e.prev = 7, (0, P.hq)(s), e.next = 11, eA(ez({
                                            interactionId: o,
                                            docId: n,
                                            workspaceId: null == i ? void 0 : i.id
                                        }, t));
                                    case 11:
                                        if (u = e.sent, l(!1), 0 !== u.length) {
                                            e.next = 15;
                                            break
                                        }
                                        throw Error("No images generated");
                                    case 15:
                                        u.length > 0 && (y(u), r(u[0])), (0, eb.d)("generateImage"), (0, P.o)(ez(ez({}, s), {}, {
                                            latency: performance.now() - a,
                                            generateImageUrls: u.map(function(e) {
                                                return e.attrs.src
                                            })
                                        })), e.next = 27;
                                        break;
                                    case 20:
                                        e.prev = 20, e.t0 = e.catch(7), f(!0), (null === (d = e.t0.response) || void 0 === d ? void 0 : d.code) === "prohibited_input" && e.t0.response.categories && ((p = e.t0.response.categories).sexual || p["sexual/minors"] ? m("sexual") : p.violence || p["violence/graphic"] ? m("violence") : m("prohibited")), l(!1), console.error("(caught) [AIGenerateImage] error:", e.t0), (0, P.pQ)(ez(ez({}, s), {}, {
                                            latency: performance.now() - a,
                                            errorName: "GenerateImageError",
                                            errorMessage: e.t0.message,
                                            outputMessage: ""
                                        }));
                                    case 27:
                                        l(!1);
                                    case 28:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [7, 20]
                            ])
                        })), function(e) {
                            return t.apply(this, arguments)
                        }), [y, null == i ? void 0 : i.id, n, r]),
                        isGenerating: u,
                        hasError: p,
                        errorType: h,
                        isLoadingHistory: j,
                        imageResults: v,
                        searchQuery: a,
                        loadMore: x,
                        canLoadMore: O,
                        isLoadingMore: k,
                        deleteImage: A,
                        deletingId: S
                    }
                },
                eW = function(e, t) {
                    var r = (0, w.useCallback)(function() {
                            if (!e) return null;
                            var t = e.state.selection,
                                r = (0, eR.Ru)(t.$from, eT.KH)[0],
                                n = r && (0, e_.NE)(r.node, r.pos),
                                i = e.state.doc.slice(n.pos + 1, n.pos + n.node.nodeSize - 1).content;
                            return (0, eh.c)(e, i)
                        }, [e]),
                        n = (0, em.M)(eD, ez(ez({}, t), {}, {
                            timeout: 3e4
                        })).generate;
                    return (0, w.useCallback)(function(e) {
                        var t = n({
                            variables: {
                                input: e,
                                html: r()
                            },
                            workspaceId: (0, eM.n_)()
                        }).promise;
                        return (0, eH.OI)(t, 3e4)
                    }, [n, r])
                },
                eG = function(e) {
                    return e.history[e.history.length - 1]
                },
                eB = {
                    load: function(e, t) {
                        return {
                            history: [t],
                            ind: 0
                        }
                    },
                    push: function(e, t) {
                        return "" === eG(e).trim() ? this.replace(e, t) : {
                            history: [].concat((0, es.Z)(e.history), [t]),
                            ind: e.history.length
                        }
                    },
                    replace: function(e, t) {
                        var r = e.history.slice(0, -1);
                        return {
                            history: [].concat((0, es.Z)(r), [t]),
                            ind: r.length
                        }
                    },
                    select: function(e, t) {
                        return e.ind === e.history.length - 1 && eG(e) === t ? e : this.push(e, t)
                    }
                },
                eq = function() {
                    var e = (0, w.useRef)(!1),
                        t = (0, w.useState)({
                            history: [""],
                            ind: 0
                        }),
                        r = t[0],
                        n = t[1],
                        i = (0, w.useCallback)(function(t, r) {
                            "load" === r && n(function(e) {
                                return eB.load(e, t)
                            }), "push" === r && n(function(e) {
                                return eB.push(e, t)
                            }), "update" === r && (e.current ? n(function(e) {
                                return eB.push(e, t)
                            }) : n(function(e) {
                                return eB.replace(e, t)
                            })), "select" === r && n(function(e) {
                                return eB.select(e, t)
                            }), e.current = "update" !== r
                        }, []),
                        o = (0, w.useCallback)(function() {
                            r.ind <= 0 || n(function(e) {
                                return ez(ez({}, e), {}, {
                                    ind: e.ind - 1
                                })
                            })
                        }, [r]),
                        a = (0, w.useCallback)(function() {
                            var e = r.history;
                            r.ind >= e.length - 1 || n(function(e) {
                                return ez(ez({}, e), {}, {
                                    ind: e.ind + 1
                                })
                            })
                        }, [r]),
                        c = r.ind,
                        s = r.history;
                    return {
                        prompt: s[c] || "",
                        addPrompt: i,
                        promptPageInfo: {
                            curr: c + 1,
                            total: s.length,
                            canGoNext: c < s.length - 1,
                            canGoPrev: c > 0
                        },
                        nextPrompt: a,
                        prevPrompt: o
                    }
                },
                eQ = function() {
                    var e = (0, c.Y)("ai_generated_images"),
                        t = (0, a.ye)("aiGeneratedImages");
                    return e || t
                },
                eV = function() {
                    var e = (0, eZ._)("aiImageRatings", {}),
                        t = (0, el.Z)(e, 2),
                        r = t[0],
                        n = t[1];
                    return {
                        saveImageRating: (0, w.useCallback)(function(e, t) {
                            e.savedMediaId && (r[e.savedMediaId] = t, n(r))
                        }, []),
                        hasRatedImage: (0, w.useCallback)(function(e) {
                            return !e.savedMediaId || !!r[e.savedMediaId]
                        }, [])
                    }
                },
                eY = r(75944),
                eK = r(54728),
                eX = r(51434),
                eJ = r(91333),
                e$ = r(83897),
                e0 = [{
                    title: function() {
                        return o.ag._({
                            id: "ovBPCi"
                        })
                    },
                    presets: [{
                        preset: "None",
                        imageUrl: "https://cdn.gamma.app/ai-image-assets/default.jpg",
                        name: function() {
                            return o.ag._({
                                id: "ovBPCi"
                            })
                        }
                    }, {
                        preset: "Texture",
                        imageUrl: "https://cdn.gamma.app/ai-image-assets/texture.jpg",
                        name: function() {
                            return o.ag._({
                                id: "X9aPH+"
                            })
                        }
                    }]
                }, {
                    title: function() {
                        return o.ag._({
                            id: "Yps9ro"
                        })
                    },
                    presets: [{
                        preset: "Analog_film",
                        imageUrl: "https://cdn.gamma.app/ai-image-assets/analog_film.jpg",
                        name: function() {
                            return o.ag._({
                                id: "1PgBn0"
                            })
                        }
                    }, {
                        preset: "Photography",
                        imageUrl: "https://cdn.gamma.app/ai-image-assets/photography.jpg",
                        name: function() {
                            return o.ag._({
                                id: "PDaunD"
                            })
                        }
                    }]
                }, {
                    title: function() {
                        return o.ag._({
                            id: "6J8BCS"
                        })
                    },
                    presets: [{
                        preset: "Anime",
                        imageUrl: "https://cdn.gamma.app/ai-image-assets/anime.jpg",
                        name: function() {
                            return o.ag._({
                                id: "0NCJ/8"
                            })
                        }
                    }, {
                        preset: "Claymation",
                        imageUrl: "https://cdn.gamma.app/ai-image-assets/claymation.jpg",
                        name: function() {
                            return o.ag._({
                                id: "8tSuHw"
                            })
                        }
                    }, {
                        preset: "Digital_Art_Concept_Art",
                        imageUrl: "https://cdn.gamma.app/ai-image-assets/digital_art.jpg",
                        name: function() {
                            return o.ag._({
                                id: "qg9EcH"
                            })
                        }
                    }, {
                        preset: "Ethereal_Fantasy_Art",
                        imageUrl: "https://cdn.gamma.app/ai-image-assets/fantasy_art.jpg",
                        name: function() {
                            return o.ag._({
                                id: "7oTIsc"
                            })
                        }
                    }, {
                        preset: "Isometric",
                        imageUrl: "https://cdn.gamma.app/ai-image-assets/isometric.jpg",
                        name: function() {
                            return o.ag._({
                                id: "5tylr3"
                            })
                        }
                    }, {
                        preset: "Line_Art",
                        imageUrl: "https://cdn.gamma.app/ai-image-assets/line_art.jpg",
                        name: function() {
                            return o.ag._({
                                id: "e3xMT9"
                            })
                        }
                    }, {
                        preset: "Low_Poly",
                        imageUrl: "https://cdn.gamma.app/ai-image-assets/low_poly.jpg",
                        name: function() {
                            return o.ag._({
                                id: "UdeABa"
                            })
                        }
                    }, {
                        preset: "Vaporwave",
                        imageUrl: "https://cdn.gamma.app/ai-image-assets/vaporwave.jpg",
                        name: function() {
                            return o.ag._({
                                id: "zd/PSU"
                            })
                        }
                    }, {
                        preset: "Origami",
                        imageUrl: "https://cdn.gamma.app/ai-image-assets/origami.jpg",
                        name: function() {
                            return o.ag._({
                                id: "br2YxS"
                            })
                        }
                    }, {
                        preset: "Pixel_Art",
                        imageUrl: "https://cdn.gamma.app/ai-image-assets/pixel_art.jpg",
                        name: function() {
                            return o.ag._({
                                id: "fmqjfg"
                            })
                        }
                    }]
                }],
                e1 = function(e) {
                    var t = e0[0].presets[0];
                    return e0.forEach(function(r) {
                        var n = r.presets.find(function(t) {
                            return t.preset === e
                        });
                        if (n) {
                            t = n;
                            return
                        }
                    }), t
                },
                e2 = (0, w.memo)(function(e) {
                    var t = e.value,
                        r = e.setValue,
                        n = e.isDisabled,
                        i = (0, eY.q)(),
                        o = i.isOpen,
                        a = i.onToggle,
                        c = i.onClose,
                        s = e1(t);
                    return (0, F.jsx)(er.NI, {
                        children: (0, F.jsxs)(eK.J, {
                            placement: "bottom-start",
                            matchWidth: !0,
                            isOpen: o,
                            onClose: c,
                            closeOnBlur: !0,
                            children: [(0, F.jsx)(eX.x, {
                                children: (0, F.jsx)(j.z, {
                                    width: "100%",
                                    type: "button",
                                    boxShadow: "none",
                                    onClick: a,
                                    rightIcon: (0, F.jsx)(x.G, {
                                        icon: J.pt
                                    }),
                                    isDisabled: n,
                                    justifyContent: "space-between",
                                    children: (0, F.jsxs)(b.U, {
                                        spacing: 2,
                                        children: [(0, F.jsx)(f.E, {
                                            width: "24px",
                                            height: "24px",
                                            src: s.imageUrl,
                                            borderRadius: "md"
                                        }), (0, F.jsx)(H.xu, {
                                            flex: 1,
                                            children: s.name()
                                        })]
                                    })
                                })
                            }), (0, F.jsx)(eJ.y, {
                                width: "100%",
                                maxHeight: "max(350px, 40vh)",
                                overflowY: "auto",
                                children: (0, F.jsx)(e$.b, {
                                    children: (0, F.jsx)(d.g, {
                                        spacing: 4,
                                        children: e0.map(function(e) {
                                            return (0, F.jsxs)(d.g, {
                                                align: "start",
                                                spacing: 0,
                                                children: [(0, F.jsx)(v.X, {
                                                    size: "sm",
                                                    mb: 2,
                                                    children: e.title()
                                                }), (0, F.jsx)(I.M, {
                                                    columns: {
                                                        base: 2,
                                                        "2xl": 3
                                                    },
                                                    spacing: 2,
                                                    children: e.presets.map(function(e) {
                                                        return (0, F.jsx)(e5, {
                                                            preset: e,
                                                            onClick: function() {
                                                                r(e.preset), c()
                                                            },
                                                            isSelected: e.preset === t
                                                        }, e.preset)
                                                    })
                                                })]
                                            }, e.title())
                                        })
                                    })
                                })
                            })]
                        })
                    })
                });
            e2.displayName = "StylePresetMenu";
            var e5 = function(e) {
                    var t = e.preset,
                        r = e.onClick,
                        n = e.isSelected;
                    return (0, F.jsxs)(d.g, {
                        _hover: {
                            cursor: n ? "default" : "pointer"
                        },
                        onClick: r,
                        borderRadius: "md",
                        spacing: 1,
                        p: 2,
                        border: "1px",
                        bgColor: n ? "trueblue.50" : "transparent",
                        borderColor: n ? "trueblue.200" : "transparent",
                        children: [(0, F.jsx)(f.E, {
                            src: t.imageUrl,
                            width: "100%",
                            height: "auto",
                            borderRadius: "md"
                        }), (0, F.jsx)(V.x, {
                            color: n ? "trueblue.500" : "gray.900",
                            fontSize: "sm",
                            children: t.name()
                        })]
                    })
                },
                e3 = {
                    square: {
                        key: "square",
                        name: function() {
                            return o.ag._({
                                id: "1DA6ap"
                            })
                        },
                        width: 1024,
                        height: 1024
                    },
                    landscape: {
                        key: "landscape",
                        name: function() {
                            return o.ag._({
                                id: "XxIeKn"
                            })
                        },
                        width: 1216,
                        height: 832
                    },
                    portrait: {
                        key: "portrait",
                        name: function() {
                            return o.ag._({
                                id: "3bV9gD"
                            })
                        },
                        width: 896,
                        height: 1152
                    }
                },
                e4 = function() {
                    var e = (0, a.ye)("aiGeneratedImagesCount"),
                        t = eq(),
                        r = t.prompt,
                        n = t.addPrompt,
                        i = t.promptPageInfo,
                        o = t.nextPrompt,
                        c = t.prevPrompt,
                        s = (0, w.useState)("square"),
                        u = s[0],
                        l = s[1],
                        d = (0, w.useState)("None"),
                        p = d[0],
                        f = d[1],
                        g = e3[u],
                        h = {
                            prompt: r,
                            model: "stable-diffusion-xl-v1-0",
                            style_preset: p,
                            height: g.height,
                            width: g.width,
                            steps: 30,
                            count: e
                        },
                        m = (0, w.useCallback)(function(e, t) {
                            if (e.aiParams) {
                                var r = e.aiParams,
                                    i = r.prompt,
                                    o = r.height,
                                    a = r.width,
                                    c = (r.model, r.style_preset),
                                    s = Object.values(e3).find(function(e) {
                                        return e.height === o && e.width === a
                                    });
                                s && l(s.key), i && n(i, t), c && f(e1(c).preset)
                            }
                        }, [n]);
                    return {
                        prompt: r,
                        addPrompt: n,
                        promptPageInfo: i,
                        nextPrompt: o,
                        prevPrompt: c,
                        stylePreset: p,
                        setStylePreset: f,
                        aspectRatio: u,
                        setAspectRatio: l,
                        imageGenerateConfig: h,
                        count: e,
                        loadImageAiParams: m
                    }
                },
                e8 = {
                    square: et.pL,
                    portrait: ee.faRectangleVertical,
                    landscape: $.r9
                },
                e9 = (0, w.memo)(function(e) {
                    var t = e.value,
                        r = e.setValue,
                        n = e.isDisabled,
                        i = e3[t] || e3.square;
                    return (0, F.jsx)(er.NI, {
                        children: (0, F.jsxs)(en.v, {
                            children: [(0, F.jsx)(ei.j, {
                                as: j.z,
                                variant: "plain",
                                isDisabled: n,
                                w: "100%",
                                textAlign: "left",
                                justifyContent: "space-between",
                                rightIcon: (0, F.jsx)(x.G, {
                                    icon: J.pt
                                }),
                                boxShadow: "none",
                                children: (0, F.jsxs)(b.U, {
                                    spacing: 2,
                                    children: [(0, F.jsx)(p.k, {
                                        width: "24px",
                                        height: "24px",
                                        align: "center",
                                        justify: "center",
                                        children: (0, F.jsx)(x.G, {
                                            icon: e8[i.key],
                                            fixedWidth: !0
                                        })
                                    }), (0, F.jsx)(V.x, {
                                        as: "span",
                                        flex: 1,
                                        children: i.name()
                                    })]
                                })
                            }), (0, F.jsx)(eo.q, {
                                minWidth: "240px",
                                maxH: "290px",
                                overflowY: "auto",
                                overflowX: "hidden",
                                children: (0, F.jsx)(ea._, {
                                    value: t,
                                    type: "radio",
                                    onChange: function(e) {
                                        r(e)
                                    },
                                    children: Object.values(e3).map(function(e) {
                                        return (0, F.jsx)(ec.i, {
                                            value: e.key,
                                            children: (0, F.jsxs)(b.U, {
                                                spacing: 2,
                                                children: [(0, F.jsx)(p.k, {
                                                    width: "24px",
                                                    height: "24px",
                                                    align: "center",
                                                    justify: "center",
                                                    children: (0, F.jsx)(x.G, {
                                                        icon: e8[e.key],
                                                        fixedWidth: !0
                                                    })
                                                }), (0, F.jsx)(V.x, {
                                                    as: "span",
                                                    flex: 1,
                                                    children: e.name()
                                                })]
                                            })
                                        }, e.key)
                                    })
                                })
                            })]
                        })
                    })
                });
            e9.displayName = "AspectRatioSelect";
            var e6 = r(68019),
                e7 = r(41033),
                te = r(30118),
                tt = function() {
                    var e = (0, te.M)({
                            id: "ai-credits-generate-image"
                        }),
                        t = e.isOpen,
                        r = e.onOpen,
                        n = e.onClose,
                        i = (0, eI.CG)(e7.Lj);
                    return (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsx)(g.b, {
                            status: "error",
                            children: (0, F.jsxs)(d.g, {
                                children: [(0, F.jsxs)(m.X, {
                                    children: [(0, F.jsxs)("strong", {
                                        children: ["❗️", (0, F.jsx)(l.cC, {
                                            id: "infkkg"
                                        })]
                                    }), (0, F.jsx)(l.cC, {
                                        id: "gyp7EN"
                                    })]
                                }), (0, F.jsx)(j.z, {
                                    onClick: r,
                                    leftIcon: (0, F.jsx)("span", {
                                        role: "img",
                                        "aria-label": "credits",
                                        children: "\uD83D\uDCB0"
                                    }),
                                    children: (0, F.jsx)(l.cC, {
                                        id: "89ftLJ"
                                    })
                                })]
                            })
                        }), (0, F.jsx)(e6.H, {
                            credits: i,
                            onClose: n,
                            isOpen: t,
                            onOpen: r
                        })]
                    })
                },
                tr = r(82269),
                tn = r(67784),
                ti = r(83484),
                to = ["promptPageInfo", "nextPrompt", "prevPrompt", "isDisabled"];

            function ta(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tc(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ta(Object(r), !0).forEach(function(t) {
                        (0, s.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ta(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var ts = function(e) {
                    var t = e.promptPageInfo,
                        r = e.nextPrompt,
                        n = e.prevPrompt,
                        i = e.isDisabled,
                        o = (0, tr.Z)(e, to);
                    return (0, F.jsxs)(b.U, tc(tc({
                        spacing: 1
                    }, o), {}, {
                        children: [(0, F.jsx)(z.h, {
                            variant: "ghost",
                            icon: (0, F.jsx)(x.G, {
                                icon: ti.A3
                            }),
                            isDisabled: i || !t.canGoPrev,
                            onClick: function() {
                                return n()
                            },
                            "aria-label": "left",
                            color: "gray.800",
                            size: "xs"
                        }), (0, F.jsxs)(H.xu, {
                            as: "span",
                            color: "gray.800",
                            fontSize: "sm",
                            children: [t.curr, " / ", t.total]
                        }), (0, F.jsx)(z.h, {
                            variant: "ghost",
                            icon: (0, F.jsx)(x.G, {
                                icon: tn._t
                            }),
                            color: "gray.800",
                            isDisabled: i || !t.canGoNext,
                            onClick: function() {
                                return r()
                            },
                            "aria-label": "left",
                            size: "xs"
                        })]
                    }))
                },
                tu = r(78308),
                tl = r(36953);

            function td(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tp(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? td(Object(r), !0).forEach(function(t) {
                        (0, s.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : td(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var tf = {
                    sexual: function() {
                        return o.ag._({
                            id: "gHG6wD"
                        })
                    },
                    violence: function() {
                        return o.ag._({
                            id: "x40BeZ"
                        })
                    },
                    prohibited: function() {
                        return o.ag._({
                            id: "UiRApc"
                        })
                    }
                },
                tg = {
                    key: "image.ai-generated",
                    Panel: function(e) {
                        var t = e.currentAttributes,
                            r = e.updateAttributes,
                            n = e.editor,
                            i = (0, S.q)(),
                            a = i.hasEnoughCreditsToGenerateImage,
                            c = i.isCreditsReady,
                            s = eQ(),
                            E = e4(),
                            D = E.prompt,
                            I = E.addPrompt,
                            _ = E.promptPageInfo,
                            U = E.nextPrompt,
                            R = E.prevPrompt,
                            T = E.count,
                            M = E.stylePreset,
                            Z = E.setStylePreset,
                            H = E.aspectRatio,
                            N = E.setAspectRatio,
                            z = E.imageGenerateConfig,
                            L = E.loadImageAiParams,
                            W = (0, tl.b)(n),
                            B = (0, w.useCallback)(function(e) {
                                L(e.attrs, "select"), r(tp({
                                    tempUrl: null
                                }, e.attrs)), n && W(null == n ? void 0 : n.state.selection.from)
                            }, [n, L, W, r]),
                            q = eF({
                                selectImage: B
                            }),
                            Q = q.generate,
                            V = q.isGenerating,
                            Y = q.isLoadingMore,
                            K = q.hasError,
                            J = q.imageResults,
                            $ = q.loadMore,
                            ee = q.canLoadMore,
                            et = q.errorType,
                            er = q.deleteImage,
                            en = q.deletingId,
                            ei = "image.ai-generated" === t.source,
                            eo = t.savedMediaId,
                            ea = ei ? t.src : void 0;
                        (0, w.useEffect)(function() {
                            var e;
                            ei && null !== (e = t.aiParams) && void 0 !== e && e.prompt && L(t, "load"), !ei && t.query && I(t.query, "load")
                        }, []);
                        var ec = (0, w.useRef)(null);
                        (0, w.useEffect)(function() {
                            setTimeout(function() {
                                var e;
                                null === (e = ec.current) || void 0 === e || e.focus()
                            }, 200)
                        }, []);
                        var es = (0, w.useCallback)(function() {
                                if (ec.current) {
                                    var e;
                                    ec.current.scrollTop = null === (e = ec.current) || void 0 === e ? void 0 : e.scrollHeight
                                }
                            }, []),
                            eu = (0, w.useState)(!1),
                            el = eu[0],
                            ed = eu[1],
                            ep = eW(n, {
                                onStart: function() {
                                    I("", "push")
                                },
                                onContent: function(e) {
                                    I(e, "update"), es()
                                }
                            }),
                            ef = (0, w.useCallback)(function() {
                                el || (ed(!0), ep(D).catch(function(e) {
                                    console.error("Error enhancing AI image prompt", e)
                                }).finally(function() {
                                    ed(!1)
                                }))
                            }, [ep, el, D]);
                        (0, w.useEffect)(function() {
                            ea || ef()
                        }, []);
                        var eg = (0, w.useCallback)(function() {
                                el || V || (0 === D.trim().length ? (ed(!0), ep("").then(function(e) {
                                    Q(tp(tp({}, z), {}, {
                                        prompt: e
                                    }))
                                }).catch(function(e) {
                                    console.error("Error enhancing AI image prompt", e)
                                }).finally(function() {
                                    ed(!1)
                                })) : Q(z))
                            }, [ep, Q, z, el, V, D]),
                            eh = (0, w.useCallback)(function(e) {
                                "Enter" === e.key && e.metaKey && (e.preventDefault(), eg()), e.stopPropagation()
                            }, [eg]),
                            em = eV(),
                            eb = em.saveImageRating,
                            ev = em.hasRatedImage,
                            ej = (0, w.useCallback)(function(e) {
                                var r;
                                null !== (r = t.aiParams) && void 0 !== r && r.interactionId && ((0, P.Io)({
                                    rating: e,
                                    aiParams: t.aiParams,
                                    imageUrl: t.src,
                                    interactionId: t.aiParams.interactionId
                                }), eb(t, e))
                            }, [t, eb]),
                            ey = et && tf[et] ? tf[et]() : void 0;
                        return (0, F.jsxs)(d.g, {
                            spacing: 4,
                            align: "stretch",
                            translate: "no",
                            children: [ea && (0, F.jsxs)(p.k, {
                                justify: "center",
                                pos: "relative",
                                overflow: "visible",
                                children: [(0, F.jsx)(f.E, {
                                    maxH: "30vh",
                                    maxW: "100%",
                                    objectFit: "contain",
                                    src: ea,
                                    alt: "",
                                    ignoreFallback: !0,
                                    borderRadius: "md"
                                }), !ev(t) && (0, F.jsx)(X, {
                                    attrs: t,
                                    onRateImage: ej
                                })]
                            }), c && !a && (0, F.jsx)(tt, {}), K && (0, F.jsxs)(g.b, {
                                status: "error",
                                flexDirection: "row",
                                alignItems: "start",
                                justifyContent: "start",
                                borderRadius: "md",
                                children: [(0, F.jsx)(h.z, {}), (0, F.jsx)(m.X, {
                                    children: null != ey ? ey : (0, F.jsx)(l.cC, {
                                        id: "QcZqsh"
                                    })
                                })]
                            }), (0, F.jsxs)(d.g, {
                                align: "stretch",
                                spacing: 4,
                                children: [(0, F.jsxs)(d.g, {
                                    align: "stretch",
                                    spacing: 1,
                                    children: [(0, F.jsxs)(b.U, {
                                        position: "relative",
                                        align: "center",
                                        justify: "space-between",
                                        children: [(0, F.jsx)(b.U, {
                                            children: (0, F.jsx)(v.X, {
                                                size: "sm",
                                                children: (0, F.jsx)(l.cC, {
                                                    id: "W9uQXX"
                                                })
                                            })
                                        }), (0, F.jsx)(b.U, {
                                            children: (0, F.jsx)(O.kH, {
                                                placement: "top",
                                                label: (0, F.jsx)(l.cC, {
                                                    id: "DZCfCB",
                                                    values: {
                                                        GAMMA_PROPER_NOUN: C.N6
                                                    }
                                                }),
                                                children: (0, F.jsx)(j.z, {
                                                    variant: "ghost",
                                                    rightIcon: (0, F.jsx)(x.G, {
                                                        icon: u.qH
                                                    }),
                                                    isLoading: el || V,
                                                    isDisabled: !s,
                                                    "aria-label": "magic generate",
                                                    onClick: ef,
                                                    size: "sm",
                                                    children: (0, F.jsx)(l.cC, {
                                                        id: "YqdfV4"
                                                    })
                                                })
                                            })
                                        })]
                                    }), (0, F.jsx)(y.g, {
                                        ref: ec,
                                        isDisabled: !s || V,
                                        placeholder: el ? "" : o.ag._({
                                            id: "6RfNWb"
                                        }),
                                        onKeyDown: eh,
                                        value: D,
                                        onChange: function(e) {
                                            I(e.target.value, "update")
                                        },
                                        "data-testid": "image-search-input",
                                        rows: 5
                                    }), _.total > 1 && (0, F.jsx)(ts, {
                                        alignSelf: "end",
                                        promptPageInfo: _,
                                        nextPrompt: U,
                                        prevPrompt: R,
                                        isDisabled: V || el
                                    })]
                                }), (0, F.jsxs)(d.g, {
                                    align: "stretch",
                                    children: [(0, F.jsx)(v.X, {
                                        size: "sm",
                                        children: (0, F.jsx)(l.cC, {
                                            id: "TXeQBY"
                                        })
                                    }), (0, F.jsx)(e2, {
                                        value: M,
                                        setValue: Z,
                                        isDisabled: !s
                                    }), (0, F.jsx)(e9, {
                                        value: H,
                                        setValue: N,
                                        isDisabled: !s
                                    }), (0, F.jsxs)(d.g, {
                                        spacing: 1,
                                        align: "stretch",
                                        children: [(0, F.jsxs)(j.z, {
                                            variant: "solid",
                                            isLoading: V,
                                            isDisabled: !(s && a) || el,
                                            onClick: eg,
                                            px: 12,
                                            children: [(0, F.jsx)(l.cC, {
                                                id: "ziAjHi"
                                            }), (0, F.jsx)(A.J, {
                                                type: "generateImage",
                                                position: "absolute",
                                                right: 4
                                            })]
                                        }), (0, F.jsx)(k.r, {
                                            modalId: "ai-credits-modal-message-list",
                                            variant: "ghost",
                                            justify: "flex-end",
                                            segmentEvent: tu.AA.GAMMA_UPSELL_CALLOUT_AI_CREDITS_IMAGES
                                        })]
                                    })]
                                })]
                            }), s && (0, F.jsx)(G, {
                                onSelectImage: B,
                                savedMediaId: eo,
                                imageResults: J,
                                onDeleteImage: er,
                                deletingId: en,
                                isLoading: V,
                                canLoadMore: ee,
                                isLoadingMore: Y,
                                loadMore: $,
                                resultsPerPage: T,
                                resizeThumbnails: !0
                            })]
                        })
                    },
                    checkDisabled: function() {
                        var e = (0, c.uL)("ai_generated_images"),
                            t = a.VH.get("aiGeneratedImages");
                        return !(e || t)
                    },
                    label: function() {
                        return o.ag._({
                            id: "Ntbm4a"
                        })
                    },
                    icon: i.dd,
                    description: function() {
                        return o.ag._({
                            id: "xXTxu3"
                        })
                    },
                    keywords: ["ai", "image", "illustration", "graphics", "generate"],
                    resizeToFit: !0,
                    badge: function() {
                        return o.ag._({
                            id: "isRobC"
                        })
                    }
                }
        },
        67273: function(e, t, r) {
            r.d(t, {
                x: function() {
                    return n
                }
            });
            var n = {
                minWidth: 1800,
                maxWidth: 5e3,
                count: 10
            }
        },
        16529: function(e, t, r) {
            r.d(t, {
                i: function() {
                    return S
                }
            });
            var n = r(95235),
                i = r(48659),
                o = r(55452),
                a = r(87254),
                c = r(94659),
                s = r(36895),
                u = r(91012),
                l = r(45650),
                d = r(50390),
                p = r(37164),
                f = r(2784),
                g = r(46358),
                h = r(15726),
                m = r(80591),
                b = r(62141),
                v = r(10710),
                j = r(31889),
                y = r(4038),
                x = r(9929),
                O = r(94109),
                w = r(43862),
                P = r(52322);

            function k(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var S = {
                label: function() {
                    return a.ag._({
                        id: "bk8Zu0"
                    })
                },
                key: "image.custom",
                description: function() {
                    return a.ag._({
                        id: "RPwTMJ"
                    })
                },
                icon: i.Vm,
                Panel: function(e) {
                    var t = e.editor,
                        r = e.editType,
                        n = e.updateAttributes,
                        i = e.currentAttributes,
                        k = e.resetToPlaceholder,
                        C = (0, g.CG)(b.KV),
                        E = (0, v.SE)().currentWorkspace,
                        D = C || (null == E ? void 0 : E.id),
                        I = (0, f.useRef)(null),
                        _ = (0, f.useCallback)(function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            n({
                                uploadStatus: w.D.Uploading,
                                showPlaceholder: !0,
                                tempUrl: e,
                                src: null
                            })
                        }, [n]),
                        U = (0, f.useCallback)(function(e) {
                            n({
                                uploadStatus: w.D.Uploading,
                                showPlaceholder: !1,
                                tempUrl: e,
                                src: null
                            }), I.current = e
                        }, [n]),
                        R = function(e, i) {
                            var o = I.current || i;
                            if (o) {
                                if ("node" !== r || !t) {
                                    n(A(A({}, (0, m.gM)({
                                        result: e,
                                        isError: !1
                                    })), {}, {
                                        source: S.key
                                    }));
                                    return
                                }(0, m.Ns)(t, o, e), I.current = null
                            }
                        },
                        T = function(e) {
                            if (!I.current || !t) {
                                n((0, m.gM)({
                                    isError: !0
                                }));
                                return
                            }(0, m.f8)(t, I.current, e)
                        },
                        M = (0, f.useCallback)(function(e) {
                            var t = e.file,
                                r = e.tempUrl;
                            if (t.type && (0, j.Ns)(t.type)) {
                                var n = "HEIC_tempId_".concat((0, p.x0)());
                                _(n), U(n)
                            } else U(r)
                        }, [_, U]),
                        Z = (0, f.useCallback)(function() {
                            n((0, m.gM)({
                                isError: !0
                            }))
                        }, [n]),
                        H = i.src,
                        N = i.tempUrl,
                        z = i.meta,
                        L = i.name,
                        F = i.showPlaceholder,
                        W = i.uploadStatus,
                        G = H ? (0, j.aN)(H, {
                            width: 500
                        }) : void 0;
                    return H || N || F ? (0, P.jsxs)(c.g, {
                        align: "flex-start",
                        spacing: 4,
                        children: [F ? (0, P.jsx)(h.k3, {
                            isLoading: W === w.D.Uploading,
                            hasUploadError: W === w.D.Error,
                            width: "100%"
                        }) : (0, P.jsx)(s.E, {
                            src: G || N,
                            alt: "",
                            ignoreFallback: !0,
                            borderRadius: "md"
                        }), z && z.width && z.height && (0, P.jsxs)(u.x, {
                            children: [z.width, "\xd7", z.height, "px"]
                        }), L && (0, P.jsx)(u.x, {
                            children: L
                        }), (0, P.jsx)(l.z, {
                            onClick: k,
                            mt: 2,
                            w: "100%",
                            children: (0, P.jsx)(o.cC, {
                                id: "HUPV+K"
                            })
                        })]
                    }) : (0, P.jsxs)(c.g, {
                        align: "stretch",
                        spacing: 4,
                        children: [(0, P.jsx)(d.X, {
                            size: "md",
                            children: (0, P.jsx)(o.cC, {
                                id: "IagCbF"
                            })
                        }), (0, P.jsx)(O.v, {
                            currentUrl: "",
                            placeholder: a.ag._({
                                id: "jurEzE"
                            }),
                            handleSubmit: function(e) {
                                if (!D) {
                                    console.error("[CustomImagePanel] saveImageFromUrl - No orgId!");
                                    return
                                }
                                U(e);
                                try {
                                    (0, y.WY)(e, D, {
                                        onUploadComplete: R,
                                        onOriginalFileUpload: R,
                                        onUploadFailed: T
                                    }, r)
                                } catch (e) {
                                    T()
                                }
                            },
                            handleDataSubmit: function(e) {
                                if (!D) {
                                    console.error("[CustomImagePanel] saveImageFromDataBlob - No orgId!");
                                    return
                                }
                                U(e);
                                try {
                                    var t = (0, j.v9)(e, "image");
                                    (0, y.cT)(t, D, {
                                        onUploadComplete: R,
                                        onOriginalFileUpload: R,
                                        onUploadFailed: T
                                    }, r)
                                } catch (e) {
                                    T()
                                }
                            },
                            noHeader: !0
                        }), (0, P.jsx)(d.X, {
                            size: "md",
                            children: (0, P.jsx)(o.cC, {
                                id: "ONWvwQ"
                            })
                        }), D && (0, P.jsx)(x.u, {
                            onUploadSuccess: R,
                            onUploadStart: M,
                            onUploadFailed: Z,
                            orgId: D,
                            uploadType: "image",
                            editType: r
                        })]
                    })
                },
                keywords: ["image", "upload"],
                resizeToFit: !0
            }
        },
        25766: function(e, t, r) {
            r.d(t, {
                E: function() {
                    return C
                }
            });
            var n = r(95235),
                i = r(20406),
                o = r(28526),
                a = r.n(o),
                c = r(55452),
                s = r(87254),
                u = r(55479),
                l = r(94659),
                d = r(50390),
                p = r(91012),
                f = r(36895),
                g = r(45650),
                h = r(27777),
                m = r(25793),
                b = r(8283),
                v = r(9929),
                j = r(43862),
                y = r(46358),
                x = r(15726),
                O = r(62141),
                w = r(31889),
                P = r(94109),
                k = r(52322);

            function A(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var C = function(e) {
                var t, r = e.updateAttributes,
                    n = e.currentAttributes,
                    o = n.sourceUrl,
                    A = n.meta,
                    C = n.thumbnail,
                    E = (0, y.CG)(O.KV),
                    D = (0, u.p)(),
                    I = (t = (0, i.Z)(a().mark(function e() {
                        return a().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!o) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3, (0, P.ft)(o, r).catch(function(e) {
                                        console.error("[EMBED METADATA] Error restoring preview defaults", e), D({
                                            title: s.ag._({
                                                id: "cgB+pO",
                                                values: {
                                                    0: e.error
                                                }
                                            }),
                                            status: "error",
                                            isClosable: !0,
                                            position: "top"
                                        })
                                    });
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function() {
                        return t.apply(this, arguments)
                    });
                return (0, k.jsxs)(l.g, {
                    pt: 4,
                    align: "stretch",
                    spacing: 4,
                    children: [(0, k.jsxs)(l.g, {
                        align: "stretch",
                        children: [(0, k.jsx)(d.X, {
                            size: "md",
                            children: (0, k.jsx)(c.cC, {
                                id: "qbzc6p"
                            })
                        }), (0, k.jsx)(p.x, {
                            fontSize: "sm",
                            color: "gray.600",
                            children: (0, k.jsx)(c.cC, {
                                id: "D9R1mI"
                            })
                        })]
                    }), (0, k.jsxs)(l.g, {
                        align: "stretch",
                        p: 4,
                        borderRadius: "lg",
                        border: "1px solid var(--chakra-colors-blue-500)",
                        bg: "gray.100",
                        spacing: 4,
                        children: [null != C && C.showPlaceholder ? (0, k.jsx)(x.k3, {
                            hasUploadError: (null == C ? void 0 : C.uploadStatus) === j.D.Error,
                            isLoading: (null == C ? void 0 : C.uploadStatus) === j.D.Uploading
                        }) : C ? (0, k.jsxs)(k.Fragment, {
                            children: [(0, k.jsx)(f.E, {
                                src: C.src || C.tempUrl || "",
                                alt: (null == A ? void 0 : A.title) || "",
                                ignoreFallback: !0,
                                borderRadius: "md"
                            }), (0, k.jsx)(g.z, {
                                isDisabled: C.uploadStatus === j.D.Uploading,
                                onClick: function() {
                                    r({
                                        thumbnail: void 0
                                    })
                                },
                                children: (0, k.jsx)(c.cC, {
                                    id: "YFcW0s"
                                })
                            })]
                        }) : E && (0, k.jsx)(v.u, {
                            onUploadStart: function(e) {
                                var t = e.file,
                                    n = e.tempUrl;
                                t.type && (0, w.Ns)(t.type) ? r({
                                    thumbnail: {
                                        uploadStatus: j.D.Uploading,
                                        showPlaceholder: !0,
                                        tempUrl: null
                                    }
                                }) : r({
                                    thumbnail: {
                                        tempUrl: n,
                                        uploadStatus: j.D.Uploading,
                                        showPlaceholder: !1
                                    }
                                })
                            },
                            onUploadSuccess: function(e) {
                                r({
                                    thumbnail: {
                                        src: e.src
                                    }
                                })
                            },
                            onUploadFailed: function(e) {
                                console.error("[EMBED METADATA] Error uploading thumbnail image", e), r({
                                    thumbnail: {
                                        uploadStatus: j.D.Error,
                                        showPlaceholder: !0,
                                        tempUrl: null
                                    }
                                })
                            },
                            orgId: E || "",
                            uploadType: "image",
                            editType: "icon",
                            showTip: !1,
                            dropHereText: s.ag._({
                                id: "yxTfZB",
                                values: {
                                    0: "%{browse}"
                                }
                            }),
                            customHeight: "200px",
                            customFontSize: "sm"
                        }), (0, k.jsxs)(l.g, {
                            mt: 2,
                            align: "stretch",
                            children: [(0, k.jsx)(p.x, {
                                children: (0, k.jsx)(c.cC, {
                                    id: "MHrjPM"
                                })
                            }), (0, k.jsx)(h.I, {
                                bg: "white",
                                value: (null == A ? void 0 : A.title) || "",
                                placeholder: s.ag._({
                                    id: "bTzMt5"
                                }),
                                onChange: function(e) {
                                    r({
                                        meta: S(S({}, A), {}, {
                                            title: e.target.value
                                        })
                                    })
                                },
                                "data-testid": "title-input"
                            })]
                        }), (0, k.jsxs)(l.g, {
                            align: "stretch",
                            children: [(0, k.jsx)(p.x, {
                                children: (0, k.jsx)(c.cC, {
                                    id: "Nu4oKW"
                                })
                            }), (0, k.jsx)(m.g, {
                                bg: "white",
                                rows: 4,
                                value: (null == A ? void 0 : A.description) || "",
                                placeholder: s.ag._({
                                    id: "2VBqT4"
                                }),
                                onChange: function(e) {
                                    r({
                                        meta: S(S({}, A), {}, {
                                            description: e.target.value
                                        })
                                    })
                                }
                            })]
                        }), (0, k.jsxs)(l.g, {
                            align: "stretch",
                            children: [(0, k.jsx)(p.x, {
                                children: (0, k.jsx)(c.cC, {
                                    id: "On0aF2"
                                })
                            }), (0, k.jsxs)(b.U, {
                                children: [(null == A ? void 0 : A.icon) && (0, k.jsx)(f.E, {
                                    src: A.icon,
                                    h: "1.5em",
                                    borderRadius: "sm"
                                }), (0, k.jsx)(h.I, {
                                    bg: "white",
                                    value: (null == A ? void 0 : A.site) || "",
                                    placeholder: s.ag._({
                                        id: "SmWcKR"
                                    }),
                                    onChange: function(e) {
                                        r({
                                            meta: S(S({}, n.meta), {}, {
                                                site: e.target.value
                                            })
                                        })
                                    }
                                })]
                            })]
                        })]
                    }), (0, k.jsx)(g.z, {
                        onClick: I,
                        children: (0, k.jsx)(c.cC, {
                            id: "Z00hdC"
                        })
                    })]
                })
            }
        },
        83400: function(e, t, r) {
            r.d(t, {
                j: function() {
                    return G
                }
            });
            var n = r(9935),
                i = r(87254),
                o = r(20406),
                a = r(68089),
                c = r(64853),
                s = r(4742),
                u = r.n(s),
                l = r(2689),
                d = r.n(l),
                p = r(28526),
                f = r.n(p),
                g = r(55452),
                h = r(71170),
                m = r(45650),
                b = r(53738),
                v = r(11919),
                j = r(5766),
                y = r(91012),
                x = r(72360),
                O = r(48322),
                w = r(54336),
                P = r(81927),
                k = r(67887),
                A = r(94659),
                S = r(21891),
                C = r(35316),
                E = r(27777),
                D = r(49929),
                I = r(55966),
                _ = r(98841),
                U = r(2784),
                R = r(23015),
                T = r(34860),
                M = r(52322),
                Z = "60px",
                H = (0, U.memo)(function(e) {
                    var t = e.icon,
                        r = e.isSelected,
                        n = e.onIconClick;
                    return (0, M.jsx)(h.P, {
                        height: Z,
                        width: Z,
                        children: (0, M.jsx)(m.z, {
                            borderRadius: "base",
                            bgColor: r ? "trueblue.100" : void 0,
                            color: "gray.900",
                            display: "block",
                            width: "100%",
                            height: "100%",
                            maxH: "100%",
                            pos: "relative",
                            _hover: {
                                bgColor: r ? "trueblue.100" : "trueblue.50"
                            },
                            _active: {
                                bgColor: "trueblue.100"
                            },
                            transition: "box-shadow .2s ease",
                            variant: "ghost",
                            cursor: "pointer",
                            onClick: function() {
                                return n(t)
                            },
                            "data-testid": "icon-search-grid-item",
                            children: (0, M.jsx)(b.xu, {
                                height: "100%",
                                maxH: "100%",
                                sx: {
                                    svg: {
                                        width: "100%",
                                        height: "100%"
                                    }
                                },
                                dangerouslySetInnerHTML: {
                                    __html: t.html
                                }
                            })
                        })
                    }, t.id)
                });
            H.displayName = "ImageSearchGridItem";
            var N = function(e) {
                    var t, r = e.searchQuery,
                        n = e.currentAttributes,
                        i = e.updateAttributes,
                        a = (0, U.useState)([]),
                        c = a[0],
                        s = a[1],
                        u = (0, U.useState)(!0),
                        l = u[0],
                        d = u[1],
                        p = (0, U.useState)(!1),
                        h = p[0],
                        m = p[1],
                        w = (0, U.useState)(1),
                        P = w[0],
                        k = w[1],
                        A = (0, U.useCallback)((t = (0, o.Z)(f().mark(function e(t) {
                            var n, i, o, a;
                            return f().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = "/api/icons/search?count=".concat(100, "&query=").concat(r, "&page=").concat(t), d(!0), m(!1), e.prev = 3, e.next = 6, fetch(n, {
                                            credentials: "include"
                                        });
                                    case 6:
                                        return o = e.sent, e.next = 9, o.json();
                                    case 9:
                                        if (a = e.sent, d(!1), (null == a ? void 0 : null === (i = a.data) || void 0 === i ? void 0 : i.length) >= 0) {
                                            e.next = 13;
                                            break
                                        }
                                        throw Error(a);
                                    case 13:
                                        s(a.data), e.next = 21;
                                        break;
                                    case 16:
                                        e.prev = 16, e.t0 = e.catch(3), m(!0), d(!1), console.error("(caught) [ImageSearchGrid] fetchResults:", e.t0);
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [3, 16]
                            ])
                        })), function(e) {
                            return t.apply(this, arguments)
                        }), [r]);
                    (0, U.useEffect)(function() {
                        s([]), k(1), A(1)
                    }, [r, A]), (0, U.useCallback)(function() {
                        A(P + 1), k(P + 1)
                    }, [A, P]);
                    var S = (0, U.useCallback)(function(e) {
                            i({
                                src: void 0,
                                tempUrl: e.src,
                                meta: {
                                    height: e.height,
                                    width: e.width
                                },
                                providerMeta: {
                                    name: e.provider,
                                    id: e.id
                                },
                                query: r
                            })
                        }, [r, i]),
                        C = c.map(function(e, t) {
                            var r, i, o = e.id === (null == n ? void 0 : null === (r = n.providerMeta) || void 0 === r ? void 0 : r.id) && e.provider === (null == n ? void 0 : null === (i = n.providerMeta) || void 0 === i ? void 0 : i.name);
                            return (0, M.jsx)(H, {
                                provider: e.provider,
                                icon: e,
                                isSelected: o,
                                onIconClick: S
                            }, t)
                        });
                    return (0, M.jsxs)(v.k, {
                        direction: "column",
                        align: "stretch",
                        children: [(0, M.jsxs)(j.M, {
                            gap: 2,
                            columns: {
                                base: 4,
                                "2xl": 6
                            },
                            children: [C, l && (0, M.jsx)(z, {})]
                        }), !1, 0 === c.length && !l && (0, M.jsx)(b.xu, {
                            width: "100%",
                            textAlign: "center",
                            padding: "10px",
                            children: (0, M.jsx)(y.x, {
                                style: {
                                    color: "gray"
                                },
                                children: (0, M.jsx)(g.cC, {
                                    id: "2AY48J",
                                    values: {
                                        searchQuery: r
                                    }
                                })
                            })
                        }), h && (0, M.jsxs)(x.b, {
                            status: "error",
                            children: [(0, M.jsx)(O.z, {}), (0, M.jsx)(g.cC, {
                                id: "5hlcZg"
                            })]
                        })]
                    })
                },
                z = function() {
                    return (0, M.jsx)(M.Fragment, {
                        children: d()(100).map(function(e, t) {
                            return (0, M.jsx)(h.P, {
                                height: Z,
                                children: (0, M.jsx)(w.o, {
                                    ratio: 1,
                                    children: (0, M.jsx)(P.O, {
                                        borderRadius: "base"
                                    })
                                })
                            }, t)
                        })
                    })
                },
                L = (0, _.E)(k.h),
                F = function(e) {
                    var t = e.currentAttributes,
                        r = e.updateAttributes,
                        n = e.defaultQuery,
                        o = void 0 === n ? "" : n,
                        s = e.randomQueries,
                        l = (0, U.useState)(o),
                        d = l[0],
                        p = l[1],
                        f = (0, U.useState)(""),
                        h = f[0],
                        m = f[1];
                    (0, U.useEffect)(function() {
                        m(o), p(o)
                    }, [o]);
                    var v = (0, U.useCallback)(function() {
                            for (var e = u()(s); e === d;) e = u()(s);
                            e && (p(e), m(""))
                        }, [s, d]),
                        j = (0, T.Kt)(p, 500);
                    return (0, M.jsxs)(A.g, {
                        spacing: 4,
                        align: "stretch",
                        translate: "no",
                        children: [(0, M.jsxs)(S.B, {
                            size: "md",
                            children: [(0, M.jsx)(C.Z, {
                                pointerEvents: "none",
                                children: (0, M.jsx)(b.xu, {
                                    color: "gray.400",
                                    children: (0, M.jsx)(D.G, {
                                        icon: c.wn
                                    })
                                })
                            }), (0, M.jsx)(E.I, {
                                placeholder: d || i.ag._({
                                    id: "oMAM3/"
                                }),
                                value: h,
                                onChange: function(e) {
                                    m(e.target.value), j(e.target.value)
                                },
                                "data-testid": "image-search-input"
                            }), s && (0, M.jsx)(C.x, {
                                children: (0, M.jsx)(I.kH, {
                                    placement: "top",
                                    label: (0, M.jsx)(g.cC, {
                                        id: "OVjfHO"
                                    }),
                                    children: (0, M.jsx)(L, {
                                        icon: (0, M.jsx)(D.G, {
                                            icon: a.RJ
                                        }),
                                        "aria-label": i.ag._({
                                            id: "OVjfHO"
                                        }),
                                        variant: "ghost",
                                        onClick: v,
                                        size: "sm",
                                        whileTap: {
                                            y: "-5px"
                                        },
                                        onMouseDown: R.br
                                    })
                                })
                            })]
                        }), (0, M.jsx)(N, {
                            currentAttributes: t,
                            updateAttributes: r,
                            searchQuery: d || ""
                        })]
                    })
                },
                W = ["animals", "arrows", "business", "party", "nature", "food"],
                G = {
                    key: "image.icon",
                    Panel: function(e) {
                        var t = e.updateAttributes,
                            r = e.currentAttributes;
                        return (0, M.jsx)(F, {
                            updateAttributes: t,
                            currentAttributes: r,
                            currentIconUrl: r.src,
                            defaultQuery: r.query || "",
                            randomQueries: W
                        })
                    },
                    label: function() {
                        return i.ag._({
                            id: "mcmuCe"
                        })
                    },
                    icon: n.oc,
                    keywords: ["icon", "symbol", "picture"]
                }
        },
        40323: function(e, t, r) {
            r.d(t, {
                Q: function() {
                    return a
                },
                s: function() {
                    return c
                }
            });
            var n = r(41265),
                i = r(45817),
                o = r(73464),
                a = {
                    bing: "image.bing",
                    giphy: "image.giphy",
                    google: "image.google",
                    web: "image.web",
                    unsplash: "image.unsplash",
                    lexica: "image.lexica",
                    aiGenerated: "image.ai-generated"
                },
                c = {
                    unsplash: i.h,
                    web: o.Q,
                    aiGenerated: n.N
                }
        },
        45817: function(e, t, r) {
            r.d(t, {
                h: function() {
                    return f
                }
            });
            var n = r(90002),
                i = r(55452),
                o = r(87254),
                a = r(53738),
                c = r(91012),
                s = r(84103),
                u = r(52894),
                l = r(52322),
                d = "Unsplash",
                p = ["wallpaper", "textures", "architecture", "background", "nature", "gradient", "experimental", "animals", "california", "flowers", "relax", "sky", "water", "pattern", "abstract"],
                f = {
                    key: "image.unsplash",
                    Panel: function(e) {
                        var t = e.updateAttributes,
                            r = e.currentAttributes;
                        return (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(u.Z, {
                                updateAttributes: t,
                                currentImageUrl: r.src,
                                defaultQuery: r.query,
                                randomQueries: p,
                                provider: "unsplash"
                            }), (0, l.jsx)(a.xu, {
                                width: "100%",
                                textAlign: "center",
                                padding: "10px",
                                paddingTop: "30px",
                                children: (0, l.jsx)(c.x, {
                                    fontSize: "sm",
                                    color: "gray.500",
                                    children: (0, l.jsx)(i.cC, {
                                        id: "k16iQH",
                                        values: {
                                            UNSPLASH_PROPER_NOUN: d
                                        },
                                        components: {
                                            0: (0, l.jsx)(s.r, {
                                                href: "https://unsplash.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                style: {
                                                    textDecoration: "underline"
                                                }
                                            })
                                        }
                                    })
                                })
                            })]
                        })
                    },
                    label: function() {
                        return o.ag._({
                            id: "olwQVc",
                            values: {
                                UNSPLASH_PROPER_NOUN: d
                            }
                        })
                    },
                    description: function() {
                        return o.ag._({
                            id: "tQSDXx"
                        })
                    },
                    icon: n.Wx,
                    image: {
                        src: "/_next/static/media/unsplash.1957709b.svg",
                        height: 24,
                        width: 24,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    keywords: ["stock", "photo", "photography", "image", "unsplash"],
                    resizeToFit: !0
                }
        },
        73464: function(e, t, r) {
            r.d(t, {
                Q: function() {
                    return c
                }
            });
            var n = r(22521),
                i = r(87254),
                o = r(52894),
                a = r(52322),
                c = {
                    key: "image.web",
                    Panel: function(e) {
                        var t = e.updateAttributes,
                            r = e.currentAttributes;
                        return (0, a.jsx)(o.Z, {
                            updateAttributes: t,
                            currentImageUrl: r.src,
                            defaultQuery: r.query || "",
                            enablePagination: !0,
                            enableLicenseFilter: !0,
                            provider: "web",
                            resultsPerPage: 48,
                            randomQueries: ["wallpaper"],
                            resizeThumbnails: !0
                        })
                    },
                    featureFlag: "webImageSearch",
                    label: function() {
                        return i.ag._({
                            id: "coorYU"
                        })
                    },
                    icon: n.Y$,
                    keywords: ["image", "photo", "pic"],
                    description: function() {
                        return i.ag._({
                            id: "NMbF1d"
                        })
                    },
                    resizeToFit: !0
                }
        },
        92140: function(e, t, r) {
            r.d(t, {
                NX: function() {
                    return n.N
                },
                LE: function() {
                    return O
                },
                BF: function() {
                    return w
                },
                jt: function() {
                    return C
                },
                QR: function() {
                    return I
                },
                in: function() {
                    return _.i
                },
                wj: function() {
                    return U
                },
                DN: function() {
                    return R
                },
                $5: function() {
                    return L
                },
                bO: function() {
                    return q
                },
                F6: function() {
                    return Y
                },
                bD: function() {
                    return K
                },
                eK: function() {
                    return $
                },
                jS: function() {
                    return ee.j
                },
                FH: function() {
                    return ei
                },
                ud: function() {
                    return ec
                },
                Vy: function() {
                    return ef
                },
                yC: function() {
                    return eB
                },
                zX: function() {
                    return eq
                },
                DU: function() {
                    return eg
                },
                Bo: function() {
                    return eh
                },
                BR: function() {
                    return eP
                },
                TQ: function() {
                    return ek
                },
                p7: function() {
                    return eA
                },
                w4: function() {
                    return eE
                },
                zs: function() {
                    return e_
                },
                iL: function() {
                    return eU
                },
                Ds: function() {
                    return eM
                },
                hq: function() {
                    return eZ.h
                },
                oC: function() {
                    return eH
                },
                QT: function() {
                    return eN.Q
                },
                Hw: function() {
                    return eF
                },
                BM: function() {
                    return eW
                },
                qz: function() {
                    return eG
                }
            });
            var n = r(41265),
                i = r(95235),
                o = r(28141),
                a = r(55452),
                c = r(87254),
                s = r(94659),
                u = r(87819),
                l = r(25766),
                d = r(94109),
                p = r(52322),
                f = function(e) {
                    var t = e.editor,
                        r = e.updateAttributes,
                        n = e.currentAttributes,
                        i = e.urlPlaceholder,
                        o = e.embedTip,
                        a = (0, u.NW)(n);
                    return (0, p.jsxs)(s.g, {
                        align: "flex-start",
                        spacing: 4,
                        children: [(0, p.jsx)(d.v, {
                            currentUrl: a,
                            updateAttributes: r,
                            placeholder: i || "https://..."
                        }), o, a && (0, p.jsx)(l.E, {
                            editor: t,
                            updateAttributes: r,
                            currentAttributes: n
                        })]
                    })
                },
                g = r(29705),
                h = r(72360),
                m = r(48322),
                b = r(18751),
                v = r(84103),
                j = function(e) {
                    var t = e.guideLink,
                        r = e.extraMessage,
                        n = e.providerName;
                    return (0, p.jsxs)(h.b, {
                        status: "info",
                        children: [(0, p.jsx)(m.z, {}), (0, p.jsx)(b.X, {
                            children: (0, p.jsx)(a.cC, {
                                id: "qBttXb",
                                values: {
                                    providerName: n,
                                    extraMessage: r
                                },
                                components: {
                                    0: (0, p.jsx)(v.r, {
                                        href: t,
                                        textDecoration: "underline",
                                        isExternal: !0
                                    }),
                                    1: (0, p.jsx)(g.h, {
                                        mx: "2px"
                                    })
                                }
                            })
                        })]
                    })
                };

            function y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(r), !0).forEach(function(t) {
                        (0, i.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var O = {
                    label: function() {
                        return "Airtable"
                    },
                    key: "embed.airtable",
                    description: function() {
                        return c.ag._({
                            id: "KlL5LU"
                        })
                    },
                    icon: o.u7,
                    image: {
                        src: "/_next/static/media/airtable.e403549a.svg",
                        height: 64,
                        width: 64,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    urlRegex: /^https?:\/\/airtable.com/,
                    Panel: function(e) {
                        return (0, p.jsx)(f, x(x({}, e), {}, {
                            urlPlaceholder: "https://airtable.com/...",
                            embedTip: (0, p.jsx)(j, {
                                guideLink: "https://support.airtable.com/hc/en-us/articles/217846478-Embedding-a-view-or-base",
                                providerName: "Airtable",
                                extraMessage: (0, p.jsx)(a.cC, {
                                    id: "gsZDsS"
                                })
                            })
                        }))
                    },
                    categories: ["app", "form"],
                    defaultDisplayStyle: "inline",
                    inlineInteractive: !0,
                    iframeOptions: {
                        allowPopups: !0
                    },
                    keywords: ["airtable", "database", "spreadsheet", "table"]
                },
                w = {
                    label: function() {
                        return "Amplitude"
                    },
                    key: "embed.amplitude",
                    keywords: ["amplitude", "analytics", "chart", "data"],
                    description: function() {
                        return c.ag._({
                            id: "wa1wV8"
                        })
                    },
                    icon: r(1820).M,
                    image: {
                        src: "/_next/static/media/amplitude.5828f141.svg",
                        height: 64,
                        width: 64,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    urlRegex: /^https?:\/\/analytics.amplitude.com/,
                    Panel: function(e) {
                        var t = e.editor,
                            r = e.updateAttributes,
                            n = e.currentAttributes,
                            i = (0, u.NW)(n);
                        return (0, p.jsxs)(s.g, {
                            align: "flex-start",
                            spacing: 4,
                            children: [(0, p.jsx)(d.v, {
                                currentUrl: i,
                                updateAttributes: r,
                                placeholder: "<iframe..."
                            }), (0, p.jsx)(j, {
                                guideLink: "https://help.amplitude.com/hc/en-us/articles/235717108-Share-charts-dashboards-and-notebooks-with-stakeholders-outside-your-company#generate-embed-code-for-your-content",
                                extraMessage: (0, p.jsx)(a.cC, {
                                    id: "NDM+Av"
                                }),
                                providerName: "Amplitude"
                            }), i && (0, p.jsx)(l.E, {
                                editor: t,
                                updateAttributes: r,
                                currentAttributes: n
                            })]
                        })
                    }
                },
                P = r(55464),
                k = r(67273),
                A = r(74586),
                S = r(52894),
                C = {
                    key: "image.bing",
                    Panel: function(e) {
                        var t = e.updateAttributes,
                            r = e.currentAttributes,
                            n = (0, A.iY)();
                        return (0, p.jsx)(S.Z, {
                            updateAttributes: t,
                            currentImageUrl: r.src,
                            defaultQuery: r.query || "",
                            enableSearch: n,
                            enablePagination: !1,
                            provider: "bing",
                            resultsPerPage: k.x.count
                        })
                    },
                    label: function() {
                        return c.ag._({
                            id: "2V6hMo"
                        })
                    },
                    icon: P.hV,
                    image: {
                        src: "/_next/static/media/bing.0f94cfbe.svg",
                        height: 1024,
                        width: 678,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    keywords: ["image", "photo", "bing", "pic"]
                };

            function E(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(r), !0).forEach(function(t) {
                        (0, i.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var I = {
                    label: function() {
                        return "Calendly"
                    },
                    key: "embed.calendly",
                    description: function() {
                        return c.ag._({
                            id: "grPhlY"
                        })
                    },
                    icon: r(3249).fT,
                    image: {
                        src: "/_next/static/media/calendly.d1a57857.svg",
                        height: 150,
                        width: 150,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    urlRegex: /^https?:\/\/calendly.com/,
                    Panel: function(e) {
                        return (0, p.jsx)(f, D(D({}, e), {}, {
                            urlPlaceholder: "https://calendly.com/..."
                        }))
                    },
                    defaultDisplayStyle: "inline",
                    inlineInteractive: !0,
                    categories: ["form"],
                    iframeOptions: {
                        allowPopups: !0
                    },
                    keywords: ["calendly", "meeting", "schedule", "appointment"]
                },
                _ = r(16529),
                U = {
                    label: function() {
                        return c.ag._({
                            id: "7GEXs4"
                        })
                    },
                    description: function() {
                        return c.ag._({
                            id: "w31i/H"
                        })
                    },
                    key: "video.custom",
                    icon: r(89752).ii,
                    Panel: function(e) {
                        var t = e.editor,
                            r = e.updateAttributes,
                            n = e.currentAttributes,
                            i = (0, u.NW)(n);
                        return (0, p.jsxs)(s.g, {
                            align: "flex-start",
                            spacing: 4,
                            children: [(0, p.jsx)(d.v, {
                                currentUrl: i,
                                updateAttributes: r,
                                placeholder: c.ag._({
                                    id: "gzZk6e"
                                })
                            }), i && (0, p.jsx)(l.E, {
                                editor: t,
                                updateAttributes: r,
                                currentAttributes: n
                            })]
                        })
                    },
                    keywords: ["video", "audio", "podcast", "embed"],
                    iframeOptions: {
                        allowPopups: !0
                    },
                    preferHtml: !0
                },
                R = {
                    label: function() {
                        return "Figma"
                    },
                    key: "embed.figma",
                    icon: r(76321).uW,
                    keywords: ["design", "prototype", "wireframe", "figjam", "whiteboard"],
                    description: function() {
                        return c.ag._({
                            id: "riUMyL"
                        })
                    },
                    image: {
                        src: "/_next/static/media/figma.14e7d0c1.svg",
                        height: 2500,
                        width: 1667,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    urlRegex: /^https?:\/\/www.figma.com/,
                    Panel: function(e) {
                        var t = e.editor,
                            r = e.updateAttributes,
                            n = e.currentAttributes,
                            i = (0, u.NW)(n);
                        return (0, p.jsxs)(s.g, {
                            align: "flex-start",
                            spacing: 4,
                            children: [(0, p.jsx)(d.v, {
                                currentUrl: i,
                                updateAttributes: r,
                                placeholder: "https://www.figma.com/file/..."
                            }), (0, p.jsx)(j, {
                                guideLink: "https://help.figma.com/hc/en-us/articles/360039827134-Embed-files-and-prototypes",
                                providerName: "Figma/FigJam"
                            }), i && (0, p.jsx)(l.E, {
                                editor: t,
                                updateAttributes: r,
                                currentAttributes: n
                            })]
                        })
                    },
                    canEmbedPrivate: !0,
                    rewriteEmbedUrl: function(e) {
                        return e.includes("figma.com/embed") ? e : "https://www.figma.com/embed?embed_host=share&url=".concat(encodeURIComponent(e))
                    }
                },
                T = r(85946),
                M = r(11919),
                Z = r(53738),
                H = r(38421),
                N = r.n(H),
                z = ["funny", "surprise", "hooray", "welcome", "excited", "nope", "fail", "sad", "cry", "angry", "teamwork", "cats", "dogs", "high five"],
                L = {
                    key: "image.giphy",
                    Panel: function(e) {
                        var t = e.updateAttributes,
                            r = e.currentAttributes;
                        return (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)(S.Z, {
                                updateAttributes: t,
                                currentImageUrl: r.src,
                                defaultQuery: r.query,
                                randomQueries: z,
                                provider: "giphy"
                            }), (0, p.jsx)(M.k, {
                                width: "100%",
                                justify: "center",
                                padding: "10px",
                                paddingTop: "30px",
                                children: (0, p.jsx)(Z.xu, {
                                    maxW: "150px",
                                    children: (0, p.jsx)(N(), {
                                        src: "/images/powered-by-giphy.png",
                                        width: "150",
                                        height: "17",
                                        alt: "Powered by GIPHY"
                                    })
                                })
                            })]
                        })
                    },
                    label: function() {
                        return c.ag._({
                            id: "E435oC",
                            values: {
                                GIPHY_PROPER_NOUN: "GIPHY"
                            }
                        })
                    },
                    description: function() {
                        return c.ag._({
                            id: "QmULXm"
                        })
                    },
                    icon: T.Cj,
                    image: {
                        src: "/_next/static/media/giphy.2d92c9c6.svg",
                        height: 2500,
                        width: 2500,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    keywords: ["gif", "animation", "animated", "giphy"],
                    resizeToFit: !0
                },
                F = r(80348),
                W = r(75085);

            function G(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(r), !0).forEach(function(t) {
                        (0, i.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var q = {
                label: function() {
                    return "Google Drive"
                },
                key: "embed.gdrive",
                description: function() {
                    return c.ag._({
                        id: "BM22nr",
                        values: {
                            SHEETS_PROPER_NOUN: "Sheets",
                            DOCS_PROPER_NOUN: "Docs",
                            SLIDES_PROPER_NOUN: "Slides",
                            GAMMA_ARTIFACT_PROPER_NOUN: W.Yc
                        }
                    })
                },
                icon: F.Uu,
                image: {
                    src: "/_next/static/media/google-drive.2d314cf9.svg",
                    height: 78,
                    width: 87,
                    blurWidth: 0,
                    blurHeight: 0
                },
                urlRegex: /^https?:\/\/docs.google.com\//,
                Panel: function(e) {
                    return (0, p.jsx)(f, B(B({}, e), {}, {
                        urlPlaceholder: "https://docs.google.com/...",
                        embedTip: (0, p.jsx)(j, {
                            guideLink: "https://support.google.com/docs/answer/183965?hl=en&co=GENIE.Platform%3DDesktop#zippy=%2Cedit-embedded-spreadsheets%2Cembed-a-document-spreadsheet-or-presentation",
                            extraMessage: (0, p.jsx)(a.cC, {
                                id: "G6PCHK",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: W.Yc
                                }
                            }),
                            providerName: "Google Sheets, Docs, or Slides"
                        })
                    }))
                },
                canEmbedPrivate: !0,
                rewriteEmbedUrl: function(e) {
                    if (!e.includes("/presentation/")) return new URL(e.replace("/preview", "/edit")).toString();
                    var t = new URL(e.replace("/edit", "/preview"));
                    return t.searchParams.set("rm", "minimal"), t.toString()
                },
                keywords: ["docs", "sheet", "slide", "gdrive", "document"]
            };

            function Q(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function V(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Q(Object(r), !0).forEach(function(t) {
                        (0, i.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Q(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var Y = {
                    label: function() {
                        return "Google Form"
                    },
                    key: "embed.google.form",
                    description: function() {
                        return c.ag._({
                            id: "sgbNf4"
                        })
                    },
                    icon: F.Uu,
                    image: {
                        src: "/_next/static/media/google-form.c5494f4d.svg",
                        height: 66,
                        width: 48,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    urlRegex: /^https?:\/\/docs.google.com\/forms/,
                    Panel: function(e) {
                        return (0, p.jsx)(f, V(V({}, e), {}, {
                            urlPlaceholder: "https://docs.google.com/forms/..."
                        }))
                    },
                    canEmbedPrivate: !0,
                    keywords: ["google form", "form", "survey", "questionnaire"],
                    defaultDisplayStyle: "inline",
                    inlineInteractive: !0,
                    categories: ["form"],
                    iframeOptions: {
                        allowPopups: !0
                    }
                },
                K = {
                    key: "image.google",
                    Panel: function(e) {
                        var t = e.updateAttributes,
                            r = e.currentAttributes;
                        return (0, p.jsx)(p.Fragment, {
                            children: (0, p.jsx)(S.Z, {
                                updateAttributes: t,
                                currentImageUrl: r.src,
                                defaultQuery: r.query || "",
                                provider: "google"
                            })
                        })
                    },
                    label: function() {
                        return c.ag._({
                            id: "h2JWN5"
                        })
                    },
                    icon: r(96251).xY,
                    image: {
                        src: "/_next/static/media/google-image.5d5a5835.svg",
                        height: 24,
                        width: 24,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    keywords: ["image", "photo"]
                },
                X = r(63587),
                J = r(86156),
                $ = {
                    key: "color.gradient",
                    Panel: function(e) {
                        var t = e.updateAttributes,
                            r = e.currentAttributes,
                            n = e.isDark;
                        return (0, p.jsx)(J._, {
                            value: r,
                            updateValue: t,
                            isDark: n
                        })
                    },
                    label: function() {
                        return c.ag._({
                            id: "/S8bMP"
                        })
                    },
                    description: function() {
                        return c.ag._({
                            id: "/XRwS6"
                        })
                    },
                    icon: X.e2,
                    keywords: ["gradient", "color", "mesh"]
                },
                ee = r(83400),
                et = r(66227);

            function er(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function en(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? er(Object(r), !0).forEach(function(t) {
                        (0, i.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : er(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var ei = {
                    label: function() {
                        return "Jotform"
                    },
                    key: "embed.jotform",
                    description: function() {
                        return c.ag._({
                            id: "7yLOnm"
                        })
                    },
                    icon: et.Lc,
                    image: {
                        src: "/_next/static/media/jotform.0a55e4a9.svg",
                        height: 334,
                        width: 304,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    urlRegex: /^https?:\/\/form\.jotform\.com/,
                    Panel: function(e) {
                        return (0, p.jsx)(f, en(en({}, e), {}, {
                            urlPlaceholder: "https://form.jotform.com/..."
                        }))
                    },
                    defaultDisplayStyle: "inline",
                    inlineInteractive: !0,
                    categories: ["form"],
                    iframeOptions: {
                        allowPopups: !0
                    },
                    keywords: ["jotform", "form", "survey", "questionnaire"]
                },
                eo = r(91012),
                ea = ["wallpaper", "textures", "background", "nature", "gradient", "relax", "sky", "water", "pattern", "abstract"],
                ec = {
                    key: "image.lexica",
                    Panel: function(e) {
                        var t = e.updateAttributes,
                            r = e.currentAttributes;
                        return (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)(S.Z, {
                                updateAttributes: t,
                                currentImageUrl: r.src,
                                defaultQuery: r.query,
                                randomQueries: ea,
                                provider: "lexica",
                                enablePagination: !1
                            }), (0, p.jsx)(Z.xu, {
                                width: "100%",
                                textAlign: "center",
                                padding: "10px",
                                paddingTop: "30px",
                                children: (0, p.jsx)(eo.x, {
                                    fontSize: "sm",
                                    color: "gray.500",
                                    children: (0, p.jsx)(a.cC, {
                                        id: "rbDrRg",
                                        components: {
                                            0: (0, p.jsx)(v.r, {
                                                href: "https://lexica.art",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                style: {
                                                    textDecoration: "underline"
                                                }
                                            })
                                        }
                                    })
                                })
                            })]
                        })
                    },
                    featureFlag: "lexicaImageSearch",
                    label: function() {
                        return c.ag._({
                            id: "cSVX+F"
                        })
                    },
                    description: function() {
                        return c.ag._({
                            id: "RdyK6U"
                        })
                    },
                    image: {
                        src: "/_next/static/media/lexica.8699ff3f.png",
                        height: 48,
                        width: 48,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEVMaXG5ubm/v782NjYNDQ0UFBSvr6+mpqa0tLSoMQVUAAAACXRSTlMAr+A2F1nir64H2A2bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgYGBmZoAAdjYog5GJMIODjYUFzGBmZWVlYQAACCkATB93BkwAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 8
                    },
                    keywords: ["ai", "lexica", "stable diffusion", "generated", "photo", "photography", "image"]
                },
                es = r(17724),
                eu = r(420),
                el = r(2784);

            function ed(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var ep = el.lazy(function() {
                    return Promise.all([r.e(7576), r.e(5536)]).then(r.bind(r, 15536)).then(function(e) {
                        return {
                            default: e.LoomPanel
                        }
                    })
                }),
                ef = {
                    key: "video.loom",
                    Panel: function(e) {
                        return (0, p.jsx)(el.Suspense, {
                            fallback: (0, p.jsx)(eu.$, {
                                size: "md"
                            }),
                            children: (0, p.jsx)(ep, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? ed(Object(r), !0).forEach(function(t) {
                                        (0, i.Z)(e, t, r[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ed(Object(r)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    })
                                }
                                return e
                            }({}, e))
                        })
                    },
                    label: function() {
                        return c.ag._({
                            id: "yrPgHm"
                        })
                    },
                    description: function() {
                        return c.ag._({
                            id: "NMTPSf"
                        })
                    },
                    icon: es.Iy,
                    image: {
                        src: "/_next/static/media/loom.a033778e.svg",
                        height: 190,
                        width: 190,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    urlRegex: /^https:\/\/www.loom.com/,
                    rewriteEmbedUrl: function(e) {
                        if (!e.includes("/embed/")) return e;
                        var t = new URL(e);
                        return t.searchParams.set("hideEmbedTopBar", "true"), t.toString()
                    },
                    keywords: ["video", "recording", "loom", "screen"]
                },
                eg = {
                    key: "embed.microsoft.office",
                    Panel: function(e) {
                        var t = e.editor,
                            r = e.updateAttributes,
                            n = e.currentAttributes,
                            i = (0, u.NW)(n);
                        return (0, p.jsxs)(s.g, {
                            align: "flex-start",
                            spacing: 4,
                            children: [(0, p.jsx)(d.v, {
                                currentUrl: i,
                                updateAttributes: r,
                                placeholder: c.ag._({
                                    id: "ORLSr4"
                                })
                            }), (0, p.jsx)(j, {
                                guideLink: "https://support.microsoft.com/en-us/office/embed-a-word-document-in-your-blog-0faa0253-2751-44bf-8486-ea7837fe7db1",
                                extraMessage: (0, p.jsx)(a.cC, {
                                    id: "2csAkv"
                                }),
                                providerName: "Word, Excel, or PowerPoint"
                            }), i && (0, p.jsx)(l.E, {
                                editor: t,
                                updateAttributes: r,
                                currentAttributes: n
                            })]
                        })
                    },
                    label: function() {
                        return "Office 365"
                    },
                    description: function() {
                        return c.ag._({
                            id: "cbRq5v",
                            values: {
                                MICROSOFT_PROPER_NOUN: "Microsoft",
                                WORD_PROPER_NOUN: "Word",
                                POWERPOINT_PROPER_NOUN: "PowerPoint",
                                EXCEL_PROPER_NOUN: "Excel",
                                ONENOTE_PROPER_NOUN: "OneNote"
                            }
                        })
                    },
                    icon: P.hV,
                    image: {
                        src: "/_next/static/media/office-365.868363a8.svg",
                        height: 48,
                        width: 48,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    urlRegex: /^https?:\/\/.*\.sharepoint\.com\//,
                    canEmbedPrivate: !0,
                    iframeOptions: {
                        allowPopups: !0
                    },
                    rewriteEmbedUrl: function(e) {
                        var t = new URL(e.replace("/:p:/r", "").replace("/doc2.aspx", "/Doc.aspx"));
                        return t.searchParams.set("action", "embedview"), t.searchParams.delete("mobileredirect"), t.toString()
                    },
                    keywords: ["word", "excel", "powerpoint", "office", "microsoft", "msoffice"]
                },
                eh = {
                    label: function() {
                        return c.ag._({
                            id: "yA1Sb+",
                            values: {
                                MIRO_PROPER_NOUN: "Miro"
                            }
                        })
                    },
                    key: "embed.miro",
                    icon: r(81379).Eh,
                    description: function() {
                        return c.ag._({
                            id: "Px3dYF"
                        })
                    },
                    image: {
                        src: "/_next/static/media/miro.78878247.svg",
                        height: 2500,
                        width: 2500,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    urlRegex: /^https?:\/\/miro.com/,
                    Panel: function(e) {
                        var t = e.editor,
                            r = e.updateAttributes,
                            n = e.currentAttributes,
                            i = (0, u.NW)(n);
                        return (0, p.jsxs)(s.g, {
                            align: "flex-start",
                            spacing: 4,
                            children: [(0, p.jsx)(d.v, {
                                currentUrl: i,
                                updateAttributes: r,
                                placeholder: "https://www.miro.com/..."
                            }), (0, p.jsx)(j, {
                                guideLink: "https://help.miro.com/hc/en-us/articles/360016335640-How-to-embed-editable-boards-into-websites",
                                providerName: "Miro"
                            }), i && (0, p.jsx)(l.E, {
                                editor: t,
                                updateAttributes: r,
                                currentAttributes: n
                            })]
                        })
                    },
                    canEmbedPrivate: !0,
                    iframeOptions: {
                        allowPopups: !0
                    },
                    keywords: ["whiteboard", "workshop", "brainstorm", "miro"],
                    rewriteEmbedUrl: function(e) {
                        return e.includes("/embed/") || e.includes("/live-embed/") ? e : e.replace("/board/", "/embed/")
                    }
                },
                em = r(19479),
                eb = r(50390),
                ev = r(46358),
                ej = r(80591),
                ey = r(62141),
                ex = r(9929);

            function eO(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ew(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eO(Object(r), !0).forEach(function(t) {
                        (0, i.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eO(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eP = {
                    label: function() {
                        return c.ag._({
                            id: "1r0gtu"
                        })
                    },
                    key: "embed.pdf",
                    description: function() {
                        return c.ag._({
                            id: "2SUV3x"
                        })
                    },
                    icon: em.gS,
                    Panel: function(e) {
                        var t = e.editor,
                            r = e.updateAttributes,
                            n = e.currentAttributes,
                            i = (0, ev.CG)(ey.KV),
                            o = (0, u.NW)(n),
                            f = (0, el.useRef)(null),
                            g = (0, el.useCallback)(function(e) {
                                var t = e.tempUrl,
                                    n = e.file,
                                    i = (0, ej.B0)(n);
                                f.current = t, r(ew(ew({}, i), {}, {
                                    url: t
                                }))
                            }, [r]),
                            h = (0, el.useCallback)(function(e, r) {
                                if (t) {
                                    var n = f.current || r;
                                    (0, ej.QZ)(t, n, e), f.current = null
                                }
                            }, [t]);
                        return (0, p.jsxs)(s.g, {
                            align: "flex-start",
                            spacing: 4,
                            children: [(0, p.jsx)(d.v, {
                                currentUrl: o,
                                updateAttributes: r,
                                placeholder: c.ag._({
                                    id: "gzZk6e"
                                })
                            }), o && (0, p.jsx)(l.E, {
                                editor: t,
                                updateAttributes: r,
                                currentAttributes: n
                            }), (0, p.jsx)(eb.X, {
                                size: "md",
                                children: (0, p.jsx)(a.cC, {
                                    id: "ONWvwQ"
                                })
                            }), i && (0, p.jsx)(ex.u, {
                                onUploadSuccess: h,
                                onUploadStart: g,
                                orgId: i,
                                uploadType: "doc",
                                showTip: !1,
                                dropHereText: c.ag._({
                                    id: "ByKyau",
                                    values: {
                                        0: "%{browse}"
                                    }
                                }),
                                editType: "node"
                            })]
                        })
                    },
                    urlRegex: /\.pdf$/,
                    image: {
                        src: "/_next/static/media/PDF_icon.2d280cf2.svg",
                        height: 512,
                        width: 512,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    featureFlag: "uploadPDF",
                    iframeOptions: {
                        noSandbox: !0
                    },
                    downloadable: !0,
                    keywords: ["pdf", "doc", "upload", "file"]
                },
                ek = {
                    key: "embed.microsoft.powerbi",
                    Panel: function(e) {
                        var t = e.editor,
                            r = e.updateAttributes,
                            n = e.currentAttributes,
                            i = (0, u.NW)(n);
                        return (0, p.jsxs)(s.g, {
                            align: "flex-start",
                            spacing: 4,
                            children: [(0, p.jsx)(d.v, {
                                currentUrl: i,
                                updateAttributes: r,
                                placeholder: c.ag._({
                                    id: "ORLSr4"
                                })
                            }), i && (0, p.jsx)(l.E, {
                                editor: t,
                                updateAttributes: r,
                                currentAttributes: n
                            })]
                        })
                    },
                    label: function() {
                        return "PowerBI"
                    },
                    image: {
                        src: "/_next/static/media/powerbi.94baf198.svg",
                        height: 630,
                        width: 630,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    icon: r(56514).t5,
                    urlRegex: /^https?:\/\/app\.powerbi\.com\//,
                    canEmbedPrivate: !0,
                    iframeOptions: {
                        allowPopups: !0
                    },
                    keywords: ["microsoft", "powerbi"]
                },
                eA = {
                    label: function() {
                        return "Spotify"
                    },
                    key: "video.spotify",
                    keywords: ["spotify", "music", "podcast", "playlist", "song", "album"],
                    description: function() {
                        return c.ag._({
                            id: "lrKTd0"
                        })
                    },
                    icon: r(3348).H,
                    image: {
                        src: "/_next/static/media/spotify.2dd06f33.svg",
                        height: 1333,
                        width: 1333,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    urlRegex: /^https?:\/\/open.spotify.com/,
                    Panel: function(e) {
                        var t = e.editor,
                            r = e.updateAttributes,
                            n = e.currentAttributes,
                            i = (0, u.NW)(n);
                        return (0, p.jsxs)(s.g, {
                            align: "flex-start",
                            spacing: 4,
                            children: [(0, p.jsx)(d.v, {
                                currentUrl: i || "",
                                updateAttributes: r,
                                placeholder: "https://open.spotify.com/..."
                            }), (0, p.jsx)(j, {
                                guideLink: "https://artists.spotify.com/en/help/article/embedded-players-follow-buttons",
                                providerName: "Spotify",
                                extraMessage: (0, p.jsx)(a.cC, {
                                    id: "ItAUcI"
                                })
                            }), i && (0, p.jsx)(l.E, {
                                editor: t,
                                updateAttributes: r,
                                currentAttributes: n
                            })]
                        })
                    }
                };

            function eS(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eC(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eS(Object(r), !0).forEach(function(t) {
                        (0, i.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eS(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eE = {
                    label: function() {
                        return "Tally Form"
                    },
                    key: "embed.tally",
                    description: function() {
                        return c.ag._({
                            id: "Qzo1BZ"
                        })
                    },
                    icon: et.Lc,
                    image: {
                        src: "/_next/static/media/tally.dd047104.png",
                        height: 512,
                        width: 512,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEVMaXHpG9s0E1swDVk0E1s0El/0GeU3H14yEVszEl03El8jElM0El5tFIXjG9v/HO6cF6Y5E2A9E2gHheKrAAAAEnRSTlMAVyclXeYiCNf+fdCl9uif/aFquzWYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVR4nC3FWRLAEBRFwWPKcxNi2P9iFaV/Grvw+fBQpjQHEJLUHcCr+rcHsPS5PcR4uhY8sgFUhN0cjQAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 8
                    },
                    urlRegex: /^https?:\/\/tally.so/,
                    Panel: function(e) {
                        return (0, p.jsx)(f, eC(eC({}, e), {}, {
                            urlPlaceholder: "https://tally.so/..."
                        }))
                    },
                    defaultDisplayStyle: "inline",
                    inlineInteractive: !0,
                    categories: ["form"],
                    iframeOptions: {
                        allowPopups: !0
                    }
                },
                eD = r(60057),
                eI = /\/video\/(\d+)/,
                e_ = {
                    label: function() {
                        return "TikTok"
                    },
                    key: "video.tiktok",
                    icon: eD.AB,
                    image: {
                        src: "/_next/static/media/tiktok.cbd7f7ff.svg",
                        height: 256,
                        width: 256,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    urlRegex: /^https?:\/\/www.tiktok.com/,
                    Panel: function(e) {
                        var t = e.editor,
                            r = e.updateAttributes,
                            n = e.currentAttributes,
                            i = (0, u.NW)(n);
                        return (0, p.jsxs)(s.g, {
                            align: "flex-start",
                            spacing: 4,
                            children: [(0, p.jsx)(d.v, {
                                currentUrl: i,
                                updateAttributes: r,
                                placeholder: "https://www.tiktok.com/..."
                            }), (0, p.jsx)(j, {
                                guideLink: "https://developers.tiktok.com/doc/embed-videos/",
                                providerName: "TikTok"
                            }), i && (0, p.jsx)(l.E, {
                                editor: t,
                                updateAttributes: r,
                                currentAttributes: n
                            })]
                        })
                    },
                    defaultDisplayStyle: "inline",
                    iframeOptions: {
                        allowPopups: !0
                    },
                    preferHtml: !0,
                    rewriteEmbedUrl: function(e) {
                        var t, r = null === (t = e.match(eI)) || void 0 === t ? void 0 : t[1];
                        return r ? "https://www.tiktok.com/embed/v2/".concat(r) : e
                    },
                    inlineInteractive: !0,
                    keywords: ["tiktok", "video", "social"]
                },
                eU = {
                    key: "embed.twitter",
                    Panel: function(e) {
                        var t = e.updateAttributes,
                            r = e.currentAttributes;
                        return (0, p.jsx)(s.g, {
                            align: "flex-start",
                            spacing: 4,
                            children: (0, p.jsx)(d.v, {
                                currentUrl: r.url,
                                updateAttributes: t,
                                placeholder: "https://twitter.com/..."
                            })
                        })
                    },
                    label: function() {
                        return "Tweet"
                    },
                    icon: r(1835).md,
                    image: {
                        src: "/_next/static/media/twitter.c7499c85.svg",
                        height: 1110,
                        width: 1110,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    urlRegex: /^https?:\/\/(www\.)?twitter\.com/,
                    keywords: ["twitter", "tweet"],
                    preferHtml: !0,
                    defaultDisplayStyle: "inline",
                    inlineInteractive: !0
                };

            function eR(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eT(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eR(Object(r), !0).forEach(function(t) {
                        (0, i.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eR(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eM = {
                    label: function() {
                        return "Typeform"
                    },
                    key: "embed.typeform",
                    description: function() {
                        return c.ag._({
                            id: "yjYR46"
                        })
                    },
                    icon: et.Lc,
                    image: {
                        src: "/_next/static/media/typeform.6d709d2e.svg",
                        height: 800,
                        width: 800,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    urlRegex: /^https?:\/\/([a-z0-9]*\.)?typeform\.com/,
                    Panel: function(e) {
                        return (0, p.jsx)(f, eT(eT({}, e), {}, {
                            urlPlaceholder: "https://typeform.com/..."
                        }))
                    },
                    defaultDisplayStyle: "inline",
                    inlineInteractive: !0,
                    categories: ["form"],
                    iframeOptions: {
                        allowPopups: !0
                    },
                    keywords: ["typeform", "form", "survey", "questionnaire"]
                },
                eZ = r(45817),
                eH = {
                    key: "video.vimeo",
                    Panel: function(e) {
                        var t = e.editor,
                            r = e.updateAttributes,
                            n = e.currentAttributes,
                            i = (0, u.NW)(n);
                        return (0, p.jsxs)(s.g, {
                            align: "flex-start",
                            spacing: 4,
                            children: [(0, p.jsx)(d.v, {
                                currentUrl: i,
                                updateAttributes: r,
                                placeholder: "https://vimeo.com/..."
                            }), i && (0, p.jsx)(l.E, {
                                editor: t,
                                updateAttributes: r,
                                currentAttributes: n
                            })]
                        })
                    },
                    label: function() {
                        return c.ag._({
                            id: "M1Uyl1"
                        })
                    },
                    image: {
                        src: "/_next/static/media/vimeo.4de20653.svg",
                        height: 48,
                        width: 48,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    urlRegex: /^https?:\/\/(player\.)?vimeo\.com/,
                    keywords: ["vimeo", "video"]
                },
                eN = r(73464),
                ez = r(19774),
                eL = r(30302),
                eF = {
                    label: function() {
                        return c.ag._({
                            id: "/hLjBB"
                        })
                    },
                    description: function() {
                        return c.ag._({
                            id: "wRlboO"
                        })
                    },
                    key: "embed.custom",
                    icon: ez.m6,
                    Panel: function(e) {
                        var t = e.editor,
                            r = e.updateAttributes,
                            n = e.currentAttributes,
                            i = n.proxy,
                            o = n.displayStyle,
                            f = (0, u.NW)(n);
                        return (0, p.jsxs)(s.g, {
                            align: "flex-start",
                            spacing: 4,
                            children: [(0, p.jsx)(d.v, {
                                currentUrl: f || "",
                                updateAttributes: r,
                                placeholder: c.ag._({
                                    id: "gzZk6e"
                                })
                            }), f && o && (0, p.jsxs)(p.Fragment, {
                                children: [(0, p.jsx)(eL.X, {
                                    isChecked: i,
                                    onChange: function(e) {
                                        return r({
                                            proxy: e.target.checked
                                        })
                                    },
                                    children: (0, p.jsx)(a.cC, {
                                        id: "Fl9cgp"
                                    })
                                }), (0, p.jsx)(eo.x, {
                                    fontSize: "sm",
                                    color: "gray.500",
                                    mt: -2,
                                    children: (0, p.jsx)(a.cC, {
                                        id: "J87/8N"
                                    })
                                })]
                            }), f && (0, p.jsx)(l.E, {
                                editor: t,
                                updateAttributes: r,
                                currentAttributes: n
                            })]
                        })
                    },
                    keywords: ["webpage", "website", "app", "embed", "iframe"]
                },
                eW = {
                    label: function() {
                        return "Wistia"
                    },
                    key: "video.wistia",
                    icon: es.Iy,
                    image: {
                        src: "/_next/static/media/wistia.613af213.svg",
                        height: 1899,
                        width: 2500,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    urlRegex: /^https?:\/\/fast.wistia.net/,
                    Panel: function(e) {
                        var t = e.editor,
                            r = e.updateAttributes,
                            n = e.currentAttributes,
                            i = (0, u.NW)(n);
                        return (0, p.jsxs)(s.g, {
                            align: "flex-start",
                            spacing: 4,
                            children: [(0, p.jsx)(d.v, {
                                currentUrl: i,
                                updateAttributes: r,
                                placeholder: "<iframe..."
                            }), (0, p.jsx)(j, {
                                guideLink: "https://wistia.com/support/embed-and-share/media-on-your-website",
                                providerName: "Wistia"
                            }), i && (0, p.jsx)(l.E, {
                                editor: t,
                                updateAttributes: r,
                                currentAttributes: n
                            })]
                        })
                    },
                    keywords: ["wistia", "video"]
                },
                eG = {
                    key: "video.youtube",
                    Panel: function(e) {
                        var t = e.editor,
                            r = e.updateAttributes,
                            n = e.currentAttributes,
                            i = (0, u.NW)(n);
                        return (0, p.jsxs)(s.g, {
                            align: "flex-start",
                            spacing: 4,
                            children: [(0, p.jsx)(d.v, {
                                currentUrl: i,
                                updateAttributes: r,
                                placeholder: "https://www.youtube.com/watch?v=..."
                            }), i && (0, p.jsx)(l.E, {
                                editor: t,
                                updateAttributes: r,
                                currentAttributes: n
                            })]
                        })
                    },
                    label: function() {
                        return c.ag._({
                            id: "7J5KkU"
                        })
                    },
                    icon: r(73513).op,
                    image: {
                        src: "/_next/static/media/youtube.b0610934.svg",
                        height: 461,
                        width: 461,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    urlRegex: /^https?:\/\/www\.youtube\.com/,
                    keywords: ["youtube", "video"]
                },
                eB = [C, L, K, eN.Q, ec, eZ.h, eG, ef, R, Y, q, eF, _.i, n.N, eg, ek, eU, eH, U, eP, eh, O, w, eW, eA, e_, $, ee.j, I, eM, ei, eE],
                eq = Object.fromEntries(Object.values(eB).flat().map(function(e) {
                    return [e.key, e]
                }))
        },
        43862: function(e, t, r) {
            var n, i;
            r.d(t, {
                D: function() {
                    return n
                }
            }), (i = n || (n = {}))[i.Done = 0] = "Done", i[i.Uploading = 1] = "Uploading", i[i.Error = 2] = "Error", i[i.Queued = 3] = "Queued"
        },
        73805: function(e, t, r) {
            r.d(t, {
                C: function() {
                    return o
                },
                K: function() {
                    return i
                }
            });
            var n = r(40323),
                i = function(e) {
                    var t, r, n, i, o, a;
                    return (null === (t = e.meta) || void 0 === t ? void 0 : t.description) || (null === (r = e.meta) || void 0 === r ? void 0 : r.alt_description) || (null === (n = e.meta) || void 0 === n ? void 0 : n.title) || (null === (i = e.meta) || void 0 === i ? void 0 : i.snippet) || (null === (o = e.meta) || void 0 === o ? void 0 : null === (a = o.tags) || void 0 === a ? void 0 : a.join(", ")) || e.src
                },
                o = function(e, t, r) {
                    var i = {
                        src: e.imageUrl,
                        tempUrl: e.thumbnailUrl,
                        meta: {
                            height: e.height,
                            width: e.width,
                            description: e.description,
                            alt_description: e.altDescription,
                            title: e.title,
                            snippet: e.snippet
                        },
                        query: t,
                        source: n.Q[r]
                    };
                    return "aiGenerated" === r && (i.aiParams = {
                        prompt: e.aiPrompt,
                        height: e.height,
                        width: e.width,
                        model: e.aiModel,
                        style_preset: e.aiStylePreset
                    }), i
                }
        },
        30118: function(e, t, r) {
            r.d(t, {
                M: function() {
                    return u
                }
            });
            var n = r(82269),
                i = r(75944),
                o = r(2784),
                a = r(43997),
                c = r(99336),
                s = ["id"],
                u = function(e) {
                    var t = e.id,
                        r = (0, n.Z)(e, s),
                        u = (0, i.q)(r),
                        l = u.isOpen,
                        d = u.onOpen,
                        p = u.onClose,
                        f = (0, a.I0)();
                    return (0, o.useEffect)(function() {
                        t && f((0, c.VN)({
                            id: t,
                            isOpen: l
                        }))
                    }, [l, f, t]), (0, o.useEffect)(function() {
                        return function() {
                            t && f((0, c.VN)({
                                id: t,
                                isOpen: !1
                            }))
                        }
                    }, [f, t]), {
                        isOpen: l,
                        onOpen: d,
                        onClose: p
                    }
                }
        },
        80540: function(e, t, r) {
            r.d(t, {
                ER: function() {
                    return h
                },
                U: function() {
                    return b
                },
                Y7: function() {
                    return m
                }
            });
            var n = r(95235),
                i = r(82269),
                o = r(4036),
                a = r(74586),
                c = r(85761),
                s = r(65109),
                u = r(52322),
                l = ["product"],
                d = ["workspace"],
                p = ["workspace", "productFeature"];

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var h = function(e) {
                    var t = e.product,
                        r = (0, i.Z)(e, l);
                    return (0, u.jsx)(o.C, g(g({
                        size: "sm",
                        variant: "solid",
                        bottom: 0,
                        right: 0,
                        bg: "linear-gradient(97deg, #3300D9 -10%, #9D20C9 56.82%, #DF7A6C 120%)",
                        color: "whiteAlpha.900",
                        textShadow: "0px 0px 1px rgba(0, 0, 0, .5)",
                        fontSize: "11px"
                    }, r), {}, {
                        children: (0, s.K)()[void 0 === t ? "pro" : t].name
                    }))
                },
                m = function(e) {
                    var t = e.workspace,
                        r = (0, i.Z)(e, d),
                        n = (0, c.K9)(t);
                    return n ? (0, u.jsx)(h, g(g({
                        variant: "subtle"
                    }, r), {}, {
                        product: n
                    })) : null
                },
                b = function(e) {
                    var t = e.workspace,
                        r = e.productFeature,
                        n = (0, i.Z)(e, p),
                        o = (0, a.Y)(r, t),
                        s = (0, c.I4)(r);
                    return o || null === s ? null : (0, u.jsx)(h, g({
                        variant: "solid",
                        product: s
                    }, n))
                }
        },
        49922: function(e, t, r) {
            r.d(t, {
                m: function() {
                    return b
                }
            });
            var n = r(55452),
                i = r(11919),
                o = r(71354),
                a = r(8283),
                c = r(91012),
                s = r(45650),
                u = r(23313),
                l = r(98875),
                d = r(75085),
                p = r(3022),
                f = r(41173),
                g = r(85761),
                h = r(80540),
                m = r(52322),
                b = function(e) {
                    var t = e.description,
                        r = e.buttonLabel,
                        b = e.onOpenCallback,
                        v = e.onCloseCallback,
                        j = e.segmentEvent,
                        y = e.isNarrow,
                        x = (0, l.ye)("upsellUXEnabled_Pro"),
                        O = (0, f.zc)(),
                        w = O.openUpsellModal,
                        P = O.product,
                        k = O.proYearlyProductPrice;
                    if ("pro" === P || !x) return null;
                    var A = ((null == k ? void 0 : k.price) || 19200) / (0, g.kK)(null == k ? void 0 : k.currency) / 12,
                        S = (null == k ? void 0 : k.currency) || u.Fa6.Usd,
                        C = (0, g.aS)(null == k ? void 0 : k.currency);
                    return (0, m.jsxs)(i.k, {
                        flex: 1,
                        w: "100%",
                        mb: 4,
                        p: 4,
                        borderRadius: "md",
                        bg: "trueblue.50",
                        borderColor: "trueblue.200",
                        position: "relative",
                        borderWidth: 1,
                        shadow: "sm",
                        flexDirection: y ? "column" : "row",
                        align: "center",
                        gap: 4,
                        children: [(0, m.jsxs)(o.K, {
                            flex: 2,
                            alignSelf: "stretch",
                            children: [(0, m.jsxs)(a.U, {
                                children: [(0, m.jsx)(h.ER, {
                                    variant: "solid"
                                }), (0, m.jsx)(c.x, {
                                    fontWeight: "bold",
                                    children: (0, m.jsx)(n.cC, {
                                        id: "mpbrVv",
                                        values: {
                                            GAMMA_PRO_PROPER_NOUN: d.x8
                                        }
                                    })
                                })]
                            }), (0, m.jsx)(c.x, {
                                color: "gray.700",
                                fontSize: "xs",
                                children: t || (0, m.jsx)(n.cC, {
                                    id: "gGlaFH",
                                    values: {
                                        GAMMA_PROPER_NOUN: d.N6
                                    }
                                })
                            })]
                        }), (0, m.jsxs)(o.K, {
                            spacing: 1,
                            flex: 1,
                            alignSelf: "stretch",
                            children: [(0, m.jsx)(s.z, {
                                variant: "solid",
                                colorScheme: "trueblue",
                                size: "sm",
                                onClick: function() {
                                    w({
                                        onOpenCallback: b,
                                        onCloseCallback: v,
                                        segmentEvent: j
                                    })
                                },
                                children: r || (0, m.jsx)(n.cC, {
                                    id: "kwkhPe"
                                })
                            }), (0, m.jsx)(c.x, {
                                textAlign: "center",
                                fontSize: "xs",
                                color: "gray.700",
                                children: (0, m.jsx)(n.cC, {
                                    id: "LTohGv",
                                    values: {
                                        0: (0, p.x)(A, {
                                            currency: S,
                                            notation: C
                                        })
                                    }
                                })
                            })]
                        })]
                    })
                }
        },
        86156: function(e, t, r) {
            r.d(t, {
                _: function() {
                    return W
                }
            });
            var n = r(81333),
                i = r(95235),
                o = r(68089),
                a = r(26673),
                c = r(62349),
                s = r.n(c),
                u = r(55452),
                l = r(87254),
                d = r(8283),
                p = r(53738),
                f = r(71354),
                g = r(11919),
                h = r(9088),
                m = r(30893),
                b = r(45650),
                v = r(40771),
                j = r(63849),
                y = r(2575),
                x = r(76648),
                O = r(67887),
                w = r(49929),
                P = r(55966),
                k = r(2784),
                A = r(98621),
                S = r.n(A),
                C = r(34860),
                E = r(54336),
                D = r(27875),
                I = r.n(D),
                _ = {
                    soft: {
                        name: "Soft",
                        spin: [0, -40, 40],
                        lighten: [0, 0, 0]
                    },
                    duo: {
                        name: "Duo",
                        spin: [0, 180],
                        lighten: [0, 0]
                    },
                    crescent: {
                        name: "Crescent",
                        spin: [0, -45, 45, -90, 90],
                        lighten: [0, 0, 0, 0, 0]
                    },
                    wisp: {
                        name: "Wisp",
                        spin: [0, 72, 216],
                        lighten: [0, 0, 0]
                    },
                    mono: {
                        name: "Mono",
                        spin: [0, 0, 0],
                        lighten: [0, 20, 40]
                    },
                    cosmos: {
                        name: "Cosmos",
                        spin: [0, 72, 144, 216, 288],
                        lighten: [0, 0, 0, 0, 0]
                    }
                },
                U = function(e) {
                    var t = [];
                    e.forEach(function(e, r) {
                        var n = e.setAlpha(1),
                            i = n.toHsl().h * r,
                            o = "radial-gradient(circle at ".concat(50 * (2 * i % 360 / 360), "% ").concat(50 * (3 * i % 360 / 360), "%, ").concat(n.setAlpha(.5).toHex8String(), " 0, ").concat(n.setAlpha(0).toHex8String(), " ").concat(50 * (1 * i % 360 / 360) + 50, "%)");
                        t.push(o)
                    });
                    var r = e[0].setAlpha(.5).toHex8String();
                    return t.push("linear-gradient(0deg, ".concat(r, " 0%, ").concat(r, " 100%)")), {
                        backgroundImage: t.join(",")
                    }
                },
                R = function(e, t) {
                    var r = _[e],
                        n = [];
                    return r.spin.forEach(function(e) {
                        var r = S()(t.toHsv()).spin(e);
                        n.push(r)
                    }), r.lighten.forEach(function(e, t) {
                        n[t].lighten(e)
                    }), n
                },
                T = function(e, t) {
                    var r = R(e, t),
                        n = U(r);
                    return {
                        colors: r,
                        gradient: n
                    }
                },
                M = function(e, t, r) {
                    t.forEach(function(e) {
                        e && (e.style.opacity = "0")
                    }), e.forEach(function(e, n) {
                        var i = t[n];
                        if (i && r) {
                            var o, a, c, s, u = (o = r.offsetWidth, c = (a = S()(e)).toHsl().h * (Math.PI / 180), s = -(a.toHsl().l * o) + o, {
                                x: o / 2 - s * Math.cos(c),
                                y: o / 2 - s * Math.sin(c)
                            });
                            i.style.transform = "translate(calc(".concat(u.x, "px - 50%),calc(").concat(u.y, "px - 50%))"), i.style.backgroundColor = e.toHexString(), i.style.opacity = "1"
                        }
                    })
                },
                Z = r(52322),
                H = (0, k.forwardRef)(function(e, t) {
                    var r = e.isPrimary,
                        n = void 0 !== r && r,
                        i = e.noTransition;
                    return (0, Z.jsx)(p.xu, {
                        ref: t,
                        borderRadius: "full",
                        boxSize: n ? 7 : 5,
                        pos: "absolute",
                        zIndex: n ? 2 : 1,
                        shadow: "base",
                        border: "2px solid white",
                        pointerEvents: "none",
                        transitionProperty: void 0 !== i && i ? "none" : "transform",
                        transitionDuration: "normal"
                    })
                }),
                N = (0, k.memo)(function(e) {
                    var t = e.updateColor,
                        r = e.colors,
                        n = (0, k.useRef)(null),
                        i = (0, k.useRef)(null),
                        o = (0, k.useRef)(null),
                        a = (0, k.useRef)(null),
                        c = (0, k.useRef)(null),
                        s = (0, k.useRef)(null),
                        u = (0, k.useMemo)(function() {
                            return [i, o, a, c, s]
                        }, []);
                    (0, k.useEffect)(function() {
                        M(r, u.map(function(e) {
                            return e.current
                        }), n.current)
                    }, [r, u]);
                    var l = (0, k.useCallback)(function(e) {
                            if (n.current) {
                                var r, i, o, a, c, s, u, l, d, p, f, g = n.current.getBoundingClientRect();
                                (e.clientX || e.clientY) && t((r = n, i = e.clientX - g.left, o = e.clientY - g.top, s = r.current.offsetWidth, u = r.current.offsetHeight, l = s / 2, d = u / 2, p = (a = l - i, c = d - o, I()(Math.sqrt(c * c + a * a), 0, s / 2)), f = Math.atan2(d - o, l - i) * (180 / Math.PI), S().fromRatio({
                                    h: f + 360 * Math.ceil(-f / 360) + 1,
                                    s: 1,
                                    l: Math.abs(-p / s + 1)
                                })))
                            }
                        }, [t]),
                        d = (0, k.useCallback)(function() {
                            document.removeEventListener("mousemove", l)
                        }, [l]),
                        f = (0, k.useCallback)(function(e) {
                            document.addEventListener("mousemove", l), document.addEventListener("mouseup", d, {
                                once: !0
                            }), l(e)
                        }, [l, d]);
                    return (0, Z.jsxs)(p.xu, {
                        onMouseDown: f,
                        p: 4,
                        m: -4,
                        position: "relative",
                        children: [(0, Z.jsx)(H, {
                            ref: i,
                            noTransition: !0,
                            isPrimary: !0
                        }), (0, Z.jsx)(H, {
                            ref: o
                        }), (0, Z.jsx)(H, {
                            ref: a
                        }), (0, Z.jsx)(H, {
                            ref: c
                        }), (0, Z.jsx)(H, {
                            ref: s
                        }), (0, Z.jsx)(E.o, {
                            ratio: 1,
                            children: (0, Z.jsxs)(g.k, {
                                ref: n,
                                position: "relative",
                                borderRadius: "full",
                                shadow: "lg",
                                children: [(0, Z.jsx)(g.k, {
                                    pos: "absolute",
                                    borderRadius: "full",
                                    bg: "radial-gradient(circle closest-side, rgb(255, 255, 255), transparent)",
                                    inset: 0,
                                    zIndex: 1
                                }), (0, Z.jsx)(g.k, {
                                    pos: "absolute",
                                    inset: 0,
                                    bg: "conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",
                                    transform: "rotateZ(270deg)",
                                    borderRadius: "full"
                                })]
                            })
                        })]
                    })
                });

            function z(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? z(Object(r), !0).forEach(function(t) {
                        (0, i.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : z(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var F = {
                    vibe: "mono",
                    primaryColor: "#75d8ff",
                    css: {}
                },
                W = function(e) {
                    var t = e.value,
                        r = e.updateValue,
                        i = e.isDark,
                        c = L(L({}, F), t),
                        A = c.vibe,
                        E = c.primaryColor,
                        D = (0, k.useState)(S()(E)),
                        I = D[0],
                        U = D[1],
                        R = (0, k.useMemo)(function() {
                            return T(A, I)
                        }, [A, I]),
                        M = R.colors,
                        H = R.gradient,
                        z = (0, k.useCallback)(function(e) {
                            var t = T(A, e).gradient;
                            r({
                                vibe: A,
                                primaryColor: e.toHexString(),
                                css: t
                            })
                        }, [A, r]),
                        W = (0, C.Z_)(z, 100),
                        G = (0, k.useCallback)(function(e) {
                            U(e), W(e)
                        }, [W]);
                    return (0, Z.jsxs)(d.U, {
                        spacing: 4,
                        alignItems: "stretch",
                        wrap: "wrap",
                        children: [(0, Z.jsx)(p.xu, {
                            flex: "1",
                            minW: "120px",
                            children: (0, Z.jsx)(N, {
                                vibe: _[A],
                                color: I,
                                updateColor: G,
                                colors: M
                            })
                        }), (0, Z.jsxs)(f.K, {
                            flex: "2",
                            spacing: 4,
                            minW: "180px",
                            children: [(0, Z.jsx)(g.k, L(L({
                                backgroundColor: i ? "black" : "white"
                            }, H), {}, {
                                opacity: 1,
                                flex: "1",
                                borderRadius: "md",
                                shadow: "md",
                                minH: "80px",
                                mt: 2
                            })), (0, Z.jsxs)(d.U, {
                                children: [(0, Z.jsxs)(h.v, {
                                    children: [(0, Z.jsx)(m.j, {
                                        w: "100%",
                                        as: b.z,
                                        size: "sm",
                                        variant: "plain",
                                        textAlign: "left",
                                        rightIcon: (0, Z.jsx)(w.G, {
                                            icon: a.pt
                                        }),
                                        children: _[A].name
                                    }), (0, Z.jsx)(v.q, {
                                        minWidth: "240px",
                                        zIndex: "dropdown",
                                        children: (0, Z.jsx)(j._, {
                                            onChange: function(e) {
                                                var t = T(e, I).gradient;
                                                r({
                                                    vibe: e,
                                                    primaryColor: I.toHexString(),
                                                    css: t
                                                })
                                            },
                                            value: A,
                                            title: l.ag._({
                                                id: "1CalO6"
                                            }),
                                            type: "radio",
                                            children: Object.entries(_).map(function(e) {
                                                var t = (0, n.Z)(e, 2),
                                                    r = t[0],
                                                    i = t[1].name;
                                                return (0, Z.jsx)(y.i, {
                                                    value: r,
                                                    children: i
                                                }, r)
                                            })
                                        })
                                    })]
                                }), (0, Z.jsx)(x.h, {
                                    size: "sm",
                                    variant: "plain",
                                    children: (0, Z.jsx)(P.kH, {
                                        placement: "top",
                                        label: (0, Z.jsx)(u.cC, {
                                            id: "OVjfHO"
                                        }),
                                        children: (0, Z.jsx)(O.h, {
                                            icon: (0, Z.jsx)(w.G, {
                                                icon: o.RJ
                                            }),
                                            "aria-label": l.ag._({
                                                id: "OVjfHO"
                                            }),
                                            onClick: function() {
                                                G(S().fromRatio({
                                                    h: s()(0, 360),
                                                    s: 1,
                                                    l: s()(.5, .8)
                                                }))
                                            }
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                }
        },
        9557: function(e, t, r) {
            r.d(t, {
                Y: function() {
                    return i
                },
                o: function() {
                    return n
                }
            });
            var n = "+++",
                i = "/continue"
        },
        79183: function(e, t, r) {
            r.d(t, {
                DB: function() {
                    return u
                },
                HQ: function() {
                    return d
                },
                Rs: function() {
                    return l
                }
            });
            var n = r(95235),
                i = r(6238),
                o = r.n(i),
                a = r(14115),
                c = r(6057);

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var u = 47.5,
                l = function(e, t) {
                    var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 95,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        o = null !== (r = e.config.fontSize) && void 0 !== r ? r : 1,
                        a = n * (.5 / o),
                        s = i * c.GG,
                        u = t ? 1.5 : 3.75;
                    return {
                        baseFontSize: o * (t ? 1 : 1.125),
                        contentWidthEms: a,
                        themeFontSize: o,
                        innerPaddingX: u,
                        cardWidthEms: a + 2 * u + 2 * s
                    }
                },
                d = o()(function(e) {
                    var t = e.isPresentMode,
                        r = e.isNested,
                        i = e.nestedDepth,
                        o = e.isFullBleed,
                        a = e.isWideContent,
                        u = e.isThumbnail,
                        d = e.theme,
                        m = e.cardDimensions,
                        b = e.showPresentBackdrop,
                        v = e.attrs,
                        j = e.userZoomLevel,
                        y = e.isMobileDevice,
                        x = "none" !== v.background.type && !r,
                        O = u || !r && (o || t && !b),
                        w = O || r ? "0em" : y ? "".concat(.5, "em") : "".concat(2, "em"),
                        P = "calc(var(--card-outer-padding-x) + ".concat(o || r ? "0px" : "var(--doc-padding-left, 0px)", " + ").concat(t ? "var(--present-padding-left, 0px)" : "0px", ")"),
                        k = "calc(var(--card-outer-padding-x) + ".concat(o || r ? "0px" : "var(--doc-padding-right, 0px)", " + ").concat(t ? "var(--present-padding-right, 0px)" : "0px", ")"),
                        A = O || r ? "0em" : y ? "".concat(.5, "em") : !x || t || u ? "".concat(2, "em") : "8em",
                        S = r ? i * c.GG : 0,
                        C = l(d, y, a ? 120 : 95),
                        E = C.baseFontSize,
                        D = C.themeFontSize,
                        I = C.contentWidthEms,
                        _ = C.cardWidthEms,
                        U = C.innerPaddingX,
                        R = (t || u ? m.aspectRatio ? h : g : y ? f : p)({
                            userZoomLevel: j,
                            baseFontSize: E,
                            contentWidthEms: I,
                            cardWidthEms: _,
                            cardAspectRatio: m.aspectRatio,
                            showPresentBackdrop: b,
                            isNested: r,
                            isFullBleed: o,
                            isThumbnail: u
                        });
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? s(Object(r), !0).forEach(function(t) {
                                (0, n.Z)(e, t, r[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                        }
                        return e
                    }({
                        "--card-inner-padding-x": "".concat(U, "em"),
                        "--card-inner-padding": "var(--card-inner-padding-y) var(--card-inner-padding-x)",
                        "--card-outer-padding-left": P,
                        "--card-outer-padding-right": k,
                        "--card-outer-padding-x": w,
                        "--card-outer-padding-y": A,
                        "--comment-padding": "calc(var(--card-inner-padding-x) + ".concat(S, "em)"),
                        "--nested-card-margin": "calc(-1 * var(--comment-padding))",
                        "--border-radius-override": O ? "none" : "var(--undefined)",
                        "--card-vertical-align": m.defaultVerticalAlign,
                        "--char-width-multiple": "".concat(1 / D),
                        "--top-accent-height": "12.5em",
                        "--behind-accent-height": "12em"
                    }, R)
                }),
                p = function(e) {
                    var t = e.baseFontSize,
                        r = e.contentWidthEms,
                        n = e.cardWidthEms,
                        i = e.cardAspectRatio,
                        o = e.isFullBleed;
                    return {
                        "--font-size": "calc(".concat(t, " * var(--editor-font-size, 1rem))"),
                        "--card-inner-padding-y": "".concat(2.75 + (o ? 2 : 0), "em"),
                        "--card-width": "".concat(n, "em"),
                        "--card-min-height": i ? "calc(min(var(--card-width), var(--editor-width)) / ".concat(i, ")") : void 0,
                        "--max-content-width": "".concat(r, "em")
                    }
                },
                f = function(e) {
                    var t = e.cardWidthEms,
                        r = e.baseFontSize,
                        n = e.isNested,
                        i = e.cardAspectRatio,
                        o = e.isFullBleed;
                    return {
                        "--card-inner-padding-y": "".concat(n ? 2.25 : 1.5 + (o ? 1 : 0), "em"),
                        "--font-size": "".concat(r, "rem"),
                        "--card-width": "".concat(t, "em"),
                        "--card-min-height": i ? "calc(min(var(--card-width), var(--editor-width)) / ".concat(i, ")") : void 0,
                        "--top-accent-height": "6em",
                        "--behind-accent-height": "12em"
                    }
                },
                g = function(e) {
                    var t = e.userZoomLevel,
                        r = e.contentWidthEms,
                        n = e.cardWidthEms,
                        i = e.showPresentBackdrop,
                        o = e.isFullBleed,
                        c = e.baseFontSize,
                        s = e.isNested,
                        u = e.isThumbnail,
                        l = a.Pv ? "".concat(c * t, "rem") : "calc(".concat(t, " * clamp(").concat(u ? "0rem" : "1rem", ", var(--card-max-width) / ").concat(n, ", 2.7vh))"),
                        d = !i || o;
                    return {
                        "--card-inner-padding-y": "".concat(2.75, "em"),
                        "--font-size": l,
                        "--card-width": d ? "var(--editor-width)" : "".concat(n, "em"),
                        "--card-max-width": "calc(var(--editor-width) - 2 * var(--card-outer-padding-x))",
                        "--card-min-height": u ? "var(--thumbnail-min-height, 0px)" : d && !s ? "100vh" : "0vh",
                        "--max-content-width": "".concat(r, "em")
                    }
                },
                h = function(e) {
                    var t = e.cardAspectRatio,
                        r = e.userZoomLevel,
                        n = e.cardWidthEms,
                        i = e.isThumbnail,
                        o = a.Pv ? "calc(var(--card-max-width) / ".concat(t, ")") : "calc(100vh - 2 * var(--card-outer-padding-y))",
                        c = "calc(".concat(r, " * min(var(--card-max-width), calc(var(--card-max-height) * ").concat(t, ")))"),
                        s = "calc(var(--card-width) / ".concat(t, ")"),
                        u = a.Pv || i ? "0px" : "15px",
                        l = "calc((var(--card-width) - ".concat(u, ") / ").concat(n, ")");
                    return {
                        "--card-inner-padding-y": "".concat(2.75, "em"),
                        "--card-width": c,
                        "--font-size": l,
                        "--card-max-width": "calc(var(--editor-width) - 2 * var(--card-outer-padding-x))",
                        "--card-max-height": o,
                        "--card-min-height": s
                    }
                }
        },
        47592: function(e, t, r) {
            r.d(t, {
                Ay: function() {
                    return b
                },
                E0: function() {
                    return f
                },
                HD: function() {
                    return g
                },
                I7: function() {
                    return m
                },
                K9: function() {
                    return p
                },
                Nn: function() {
                    return h
                }
            });
            var n = r(72338),
                i = r(1842),
                o = r.n(i),
                a = r(27191),
                c = r(46358),
                s = r(62141),
                u = r(26087),
                l = r(12691),
                d = r(6057),
                p = n.hj.create({
                    name: "cardCollapse",
                    addKeyboardShortcuts: function() {
                        return {
                            Escape: function(e) {
                                var t = e.editor,
                                    r = (0, c.bh)();
                                if ((0, s.gh)(r.getState()) !== u.q.DOC_VIEW) return !1;
                                var i = t.state.selection;
                                if (!i.empty) return !1;
                                var o = (0, n.Kk)(l.KH)(i);
                                return !!o && o.depth > d.k_ && !g(o.node) && (h(o.node.attrs.id, !0), !0)
                            }
                        }
                    },
                    addProseMirrorPlugins: function() {
                        return [new a.Sy({
                            key: new a.H$("cardCollapse"),
                            appendTransaction: function(e, t, r) {
                                if (!r.selection.eq(t.selection) && r.selection.empty) {
                                    var i = (0, n.Kk)(l.KH)(r.selection);
                                    if (i) {
                                        var o = i.node,
                                            c = i.pos;
                                        if (g(o)) try {
                                            var s = r.tr,
                                                u = a.qv.create(s.doc, c);
                                            if (!u) return;
                                            return s.setSelection(u)
                                        } catch (e) {
                                            console.error("Error moving selection out of collapsed card", {
                                                node: o,
                                                pos: c
                                            }, e)
                                        }
                                    }
                                }
                            }
                        })]
                    }
                }),
                f = function(e, t) {
                    var r = [],
                        n = [];
                    e.descendants(function(e, t, i) {
                        if ((0, l.KH)(e)) {
                            var o = e.attrs.id;
                            i && "document" === i.type.name ? r.push(o) : n.push(o)
                        }
                    }), t((0, s.rH)({
                        cardIds: r,
                        isCollapsed: !1
                    })), t((0, s.rH)({
                        cardIds: n,
                        isCollapsed: !0
                    }))
                },
                g = function(e) {
                    var t = "string" == typeof e ? e : e.attrs.id;
                    if (t) {
                        var r = (0, c.bh)().getState();
                        return (0, s.yH)(t)(r)
                    }
                },
                h = function(e, t) {
                    if (o()(e)) {
                        console.error("[setCardCollapsed] Input is unexpectedly not string | string[]: ", e);
                        return
                    }
                    var r = Array.isArray(e) ? e : [e],
                        n = (0, c.bh)();
                    (1 !== r.length || (0, s.yH)(r[0])(n.getState()) !== t) && n.dispatch((0, s.rH)({
                        cardIds: r,
                        isCollapsed: t
                    }))
                },
                m = function(e) {
                    var t = [];
                    e.state.doc.descendants(function(e) {
                        if ((0, l.KH)(e)) {
                            var r = e.attrs.id;
                            t.push(r)
                        }
                    }), h(t, !1)
                },
                b = function(e) {
                    var t = (0, c.bh)();
                    void 0 === t.getState().TipTap.memoState.expandedCards[e] && t.dispatch((0, s.rH)({
                        cardIds: [e],
                        isCollapsed: !1
                    }))
                }
        },
        42545: function(e, t, r) {
            r.d(t, {
                $U: function() {
                    return h
                },
                Ap: function() {
                    return k
                },
                BA: function() {
                    return O
                },
                Hh: function() {
                    return p
                },
                Ux: function() {
                    return x
                },
                eZ: function() {
                    return f
                },
                gF: function() {
                    return m
                },
                jS: function() {
                    return g
                },
                pt: function() {
                    return w
                },
                q9: function() {
                    return P
                },
                wz: function() {
                    return b
                }
            });
            var n = r(95235),
                i = r(81333),
                o = r(76451),
                a = r(95472),
                c = r(34264),
                s = r(74735);

            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var d = function(e) {
                    return ["left", "right"].includes(e)
                },
                p = function(e) {
                    var t = e.layout,
                        r = e.parentCards;
                    return e.isMobileDevice && d(t) ? "mobileStacked" : d(t) && f(r) ? "blank" : t
                },
                f = function(e) {
                    return e.some(function(e) {
                        return d(e.attrs.layout)
                    })
                },
                g = function(e) {
                    var t = h(e),
                        r = {};
                    return Object.entries(t.items).forEach(function(e) {
                        var t, n = (0, i.Z)(e, 2),
                            o = n[0],
                            a = n[1],
                            c = null !== (t = null == a ? void 0 : a.style) && void 0 !== t ? t : {
                                gridArea: o
                            };
                        r['> [data-layout-item-id="'.concat(o, '"]')] = c
                    }), r
                },
                h = function(e) {
                    return s.q[null != e ? e : "blank"] || s.q.blank
                },
                m = function(e) {
                    var t = {},
                        r = e.pos,
                        n = e.nodeAfter;
                    return n ? n.descendants(function(e, n) {
                        if (!(0, c.pv)(e)) return !1;
                        t[e.attrs.itemId] = {
                            node: e,
                            pos: r + 1 + n
                        }
                    }) : console.error("[getCardLayoutItems] could not find card node at pos ".concat(r)), t
                },
                b = function(e, t) {
                    return m(e.doc.resolve(t))
                },
                v = function(e, t, r) {
                    var n = e.doc.resolve(t.pos + 1),
                        i = n.blockRange(e.doc.resolve(n.end()));
                    i && e.wrap(i, [{
                        type: r.nodes.cardLayoutItem
                    }]).setMeta("annotationEvent", {
                        type: "wrap-nodes",
                        start: i.start,
                        end: i.end,
                        level: 1
                    })
                },
                j = function(e, t, r, n) {
                    var i = r.nodes.cardLayoutItem.createAndFill(l({
                        itemId: "body"
                    }, n));
                    e.insert(t + 1, i)
                },
                y = function(e, t, r, n) {
                    var i = r.nodes.cardAccentLayoutItem.createAndFill(l({
                        itemId: "accent",
                        background: {
                            type: o.E.NONE
                        }
                    }, n));
                    e.insert(t + 1, i)
                },
                x = function(e, t, r, n) {
                    var i = e.doc.nodeAt(t),
                        o = b(e, t);
                    if (0 === Object.keys(o).length) {
                        v(e, {
                            node: i,
                            pos: t
                        }, r), n.items.accent && y(e, t, r);
                        return
                    }
                    n.items.body && !o.body && j(e, t, r), n.items.accent && !o.accent ? y(e, t, r) : o.accent && "cardLayoutItem" === o.accent.node.type.name && O(e, o.accent.pos, o.accent.node, r)
                },
                O = function(e, t, r, n) {
                    e.replaceRangeWith(t, t + r.nodeSize, n.nodes.cardAccentLayoutItem.createAndFill(l({}, r.attrs)))
                },
                w = function(e) {
                    return "cardAccentLayoutItem" === e.type.name && "accent" === e.attrs.itemId
                },
                P = function(e, t) {
                    if (!t) return 0;
                    var r = t.findIndex(function(t) {
                        return t.accentId === e.accentId
                    });
                    return -1 === r || void 0 === r ? 0 : (r + 1) % t.length
                },
                k = function(e) {
                    var t = (0, a.sS)(e, w)[0];
                    if (t) return t.node.attrs.background
                }
        },
        17033: function(e, t, r) {
            r.d(t, {
                AQ: function() {
                    return x
                },
                J9: function() {
                    return y
                },
                NE: function() {
                    return S
                },
                YS: function() {
                    return P
                },
                jz: function() {
                    return k
                },
                pE: function() {
                    return O
                }
            });
            var n, i = r(81333),
                o = r(20406),
                a = r(28526),
                c = r.n(a),
                s = r(72338),
                u = r(27191),
                l = r(46358),
                d = r(30341),
                p = r(80602),
                f = r(62141),
                g = r(95472),
                h = r(17477),
                m = r(26087),
                b = r(47592),
                v = r(6057),
                j = r(34264),
                y = function(e, t, r) {
                    var n = function(e) {
                            var t = (0, j.KH)(e),
                                n = "boolean" != typeof r || (0, b.HD)(e) === r;
                            return t && n
                        },
                        i = e.state.doc.nodeAt(t),
                        o = e.state.doc.resolve(t);
                    return i && n(i) ? {
                        node: i,
                        pos: t,
                        start: o.start,
                        depth: o.depth
                    } : (0, s.qv)(e.state.doc.resolve(t), n)
                },
                x = function(e, t) {
                    try {
                        var r = function(e, t) {
                                return (0, j.KH)(e) && t === v.k_
                            },
                            n = e.state.doc.resolve(t),
                            i = e.state.doc.nodeAt(t);
                        if (i && r(i, n.depth + 1)) return {
                            node: i,
                            pos: t
                        };
                        return (0, g.Ci)(n, r)
                    } catch (e) {
                        console.error("[findTopCardNodeParent] error", e);
                        return
                    }
                },
                O = function(e) {
                    var t = e.pos,
                        r = e.editor,
                        n = (0, g.nv)(r.state.doc.resolve(t), j.KH).map(function(e) {
                            return e.node.attrs.id
                        });
                    (0, b.Nn)(n, !1)
                },
                w = (n = (0, o.Z)(c().mark(function e(t) {
                    var r, n, i, o, a, s, l, f;
                    return c().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = t.cardId, n = t.pos, i = t.editor, o = t.cardEl, s = void 0 !== (a = t.isNested) && a, f = void 0 === (l = t.origin) ? "editor" : l, o) {
                                    e.next = 4;
                                    break
                                }
                                return console.error("[scrollToCard] no cardEl specified"), e.abrupt("return");
                            case 4:
                                return (0, b.Nn)(r, !1), O({
                                    pos: n,
                                    editor: i
                                }), e.next = 8, (0, d.cC)("editor").scrollElementIntoView({
                                    element: o,
                                    delay: s ? v.nY : 0
                                });
                            case 8:
                                i.commands.command(function(e) {
                                    return e.tr.setSelection(u.Y1.near(i.state.doc.resolve(n))).setMeta(p.C, f), !0
                                });
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e) {
                    return n.apply(this, arguments)
                }),
                P = function(e) {
                    var t = e.cardId,
                        r = e.editor;
                    if (t) {
                        var n = (0, l.bh)();
                        if ((0, f.gh)(n.getState()) === m.q.SLIDE_VIEW) {
                            r.commands.spotlightCardById(t);
                            return
                        }
                        var i = document.querySelector('[data-card-id="'.concat(t, '"]'));
                        if (i) {
                            var o = ((0, j.Bw)(r, t) || {}).pos;
                            if (o) {
                                var a = r.state.doc.resolve(o).depth > v.k_;
                                w({
                                    cardId: t,
                                    pos: o,
                                    editor: r,
                                    cardEl: i,
                                    isNested: a
                                })
                            }
                        }
                    }
                },
                k = function(e, t, r) {
                    var n, o = t.target;
                    if (o.closest(".".concat(v.ar)) && !o.closest("[data-outside-card-body]") || r && !A(r, e.state.schema)) return null;
                    var a = o.closest(".".concat(v.vD));
                    if (!a) return {
                        pos: e.state.doc.content.size - 1
                    };
                    var c = a.querySelector(".".concat(v.ar)),
                        s = null == c ? void 0 : c.getBoundingClientRect();
                    if (!s) return null;
                    var u = e.state.doc;
                    try {
                        var l = e.posAtDOM(a, 0);
                        if (-1 === l) return null;
                        var d = (0, g.nv)(u.resolve(l), j.KH);
                        if (0 === d.length) return null;
                        n = d[d.length - 1]
                    } catch (e) {
                        return console.error("(caught) [checkBetweenCardsDropTarget] error finding parent node:", e), null
                    }
                    var p = n,
                        f = p.node,
                        m = p.pos;
                    if (!m || !f) return null;
                    var b = (0, h.qs)(c),
                        y = (0, i.Z)(b, 1)[0],
                        x = y + s.top,
                        O = y + s.bottom,
                        w = y + t.clientY;
                    return w < x ? {
                        pos: m
                    } : w > O ? {
                        pos: m + f.nodeSize
                    } : null
                },
                A = function(e, t) {
                    return t.nodes.card.validContent(e.content)
                },
                S = function(e, t) {
                    var r = (0, g.sS)(e, function(e) {
                        return "cardLayoutItem" === e.type.name
                    });
                    return r.length > 0 ? {
                        node: r[0].node,
                        pos: t + r[0].pos + 1
                    } : {
                        node: e,
                        pos: t
                    }
                }
        },
        63982: function(e, t, r) {
            r.d(t, {
                F: function() {
                    return n
                }
            });
            var n = function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = [].slice.call(e.querySelectorAll(t), 0);
                return r && n.reverse(), n
            }
        },
        59026: function(e, t, r) {
            r.d(t, {
                e: function() {
                    return o
                },
                v: function() {
                    return i
                }
            });
            var n = r(74358),
                i = function e(t) {
                    if (null != t && null !== (r = t.parentElement) && void 0 !== r && r.matches("ol, ul")) return t.parentElement;
                    for (var r, i = [t], o = t;
                        (o = o.nextElementSibling) && "LI" === o.tagName;) {
                        var a = parseInt(o.getAttribute("indent") || "0") - parseInt(t.getAttribute("indent") || "0");
                        if (a < 0) break;
                        if (0 == a) {
                            if (o.getAttribute("variant") != t.getAttribute("variant")) break;
                            i.push(o)
                        } else o = e(o), i.push(o)
                    }
                    var c = t.getAttribute("variant") == n.W.Numbered ? document.createElement("ol") : document.createElement("ul");
                    return t.replaceWith(c), i.forEach(function(e) {
                        e.removeAttribute("variant"), e.removeAttribute("indent")
                    }), c.append.apply(c, i), c
                },
                o = function(e) {
                    var t, r, i, o = e,
                        a = 0,
                        c = "false";
                    for (e.innerHTML.startsWith("[ ]") ? (r = n.W.Todo, c = "false", e.innerHTML.startsWith("[ ]  ") ? e.innerHTML = e.innerHTML.slice(4) : e.innerHTML = e.innerHTML.slice(3)) : e.innerHTML.startsWith("[x]") && (r = n.W.Todo, c = "true", e.innerHTML.startsWith("[x]  ") ? e.innerHTML = e.innerHTML.slice(4) : e.innerHTML = e.innerHTML.slice(3)), "checkbox" === e.getAttribute("role") && (r = n.W.Todo, c = e.getAttribute("aria-checked") || "false"), ("todo" === e.getAttribute("variant") || e.getAttribute("checked")) && (r = n.W.Todo, c = e.getAttribute("checked") || "false"); o = null === (i = e.parentElement) || void 0 === i ? void 0 : i.closest("li, ul, ol");) {
                        if (o.matches("ul, ol")) {
                            a++;
                            var s = o.className.match(/lst-kix_\w+-(\d+)/);
                            s && (a = parseInt(s[1]) + 1), r || "OL" != o.tagName ? r || "UL" != o.tagName || (r = n.W.Bullet) : r = n.W.Numbered
                        }
                        o.after(e)
                    }
                    e.setAttribute("indent", Math.max(a - 1, 0).toString()), e.setAttribute("variant", r || n.W.Bullet), r == n.W.Todo && e.setAttribute("checked", c), 1 === e.children.length && (null === (t = e.firstElementChild) || void 0 === t ? void 0 : t.tagName) === "P" && (e.innerHTML = e.firstElementChild.innerHTML)
                }
        },
        314: function(e, t, r) {
            r.d(t, {
                S: function() {
                    return o
                }
            });
            var n = r(63982),
                i = r(59026),
                o = function(e) {
                    return (0, n.F)(e, "li").forEach(function(e) {
                        (0, i.v)(e)
                    }), e
                }
        },
        45219: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return u
                }
            });
            var n = r(26151),
                i = r(95472),
                o = r(82360),
                a = r(42545),
                c = r(34264),
                s = function(e) {
                    if (!(e.parent && (0, c.KH)(e.parent))) return !0;
                    var t = (0, i.nv)(e, c.KH)[0];
                    if (!t) return !0;
                    var r = e.doc.resolve(t.pos);
                    return 0 === Object.keys((0, a.gF)(r)).length
                },
                u = function(e, t, r) {
                    var a, c, u = e.posAtCoords({
                        left: t.clientX,
                        top: t.clientY
                    });
                    if (!u || u.inside < 0 || !e.state.doc.resolve(u.pos)) return null;
                    var l = u.pos,
                        d = e.state.doc.resolve(u.inside),
                        p = e.state.doc.nodeAt(u.inside),
                        f = e.state.doc.nodeAt(u.pos);
                    if ((null == p ? void 0 : p.type.name) === "smartLayout" && (null == f ? void 0 : f.type.name) === "smartLayoutCell") return null;
                    var g = (0, i.Ru)(d, o.E)[0];
                    return g && (l = u.inside, g.pos === l) || !l || r && null == (l = (0, n.nj)(e.state.doc, l, r)) ? null : (a = e.state.doc.resolve(l), null === (c = e.dragging) || void 0 === c || c.slice, s(a)) ? l : null
                }
        },
        82360: function(e, t, r) {
            r.d(t, {
                E: function() {
                    return n
                },
                G: function() {
                    return i
                }
            });
            var n = function(e) {
                    return "smartLayoutCell" === e.type.name
                },
                i = function(e) {
                    return "smartLayout" === e.type.name
                }
        },
        74358: function(e, t, r) {
            r.d(t, {
                W: function() {
                    return i
                },
                y: function() {
                    return o
                }
            }), (n = i || (i = {})).Todo = "todo", n.Bullet = "bullet", n.Numbered = "numbered";
            var n, i, o = function(e) {
                return ["todo", "bullet", "numbered"].includes(e.type.name)
            }
        },
        36953: function(e, t, r) {
            r.d(t, {
                A: function() {
                    return i
                },
                b: function() {
                    return o
                }
            });
            var n = r(2784),
                i = function() {
                    var e = (0, n.useRef)(null),
                        t = (0, n.useRef)(null),
                        r = (0, n.useState)(0),
                        i = r[0],
                        o = r[1],
                        a = (0, n.useState)(0),
                        c = a[0],
                        s = a[1],
                        u = (0, n.useState)(null),
                        l = u[0],
                        d = u[1];
                    return {
                        width: i,
                        height: c,
                        aspectRatio: l,
                        setSize: (0, n.useCallback)(function() {
                            var r, n, i = null === (r = e.current) || void 0 === r ? void 0 : r.getBoundingClientRect(),
                                a = null === (n = t.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (i && a) {
                                var c = a.width / a.height,
                                    u = i.width,
                                    l = i.width / c;
                                if (0 === u || isNaN(u) || 0 === l || isNaN(l)) return;
                                o(u), s(l), d(c)
                            }
                        }, []),
                        containerWrapperRef: e,
                        imageRef: t
                    }
                },
                o = function(e) {
                    return (0, n.useCallback)(function(t) {
                        if (e) {
                            var r = null == e ? void 0 : e.view.domAtPos(t);
                            if (!r) {
                                console.warn("scrollOnImageLoad could not domAtPos", {
                                    pos: t
                                });
                                return
                            }
                            var n = r.node.childNodes[r.offset];
                            if (!n) {
                                console.warn("scrollOnImageLoad could not find node", {
                                    parentNode: r.node,
                                    offset: r.offset
                                });
                                return
                            }
                            var i = n.querySelector("[data-image-node-element] img");
                            if (!i) {
                                console.warn("scrollOnImageLoad could not find <img> element");
                                return
                            }
                            i.addEventListener("load", function r() {
                                e.chain().selectNodeAtPos(t, !1).focus().scrollIntoView().run(), setTimeout(function() {
                                    e.chain().selectNodeAtPos(t, !1).focus().scrollIntoView().run()
                                }, 1e3), i.removeEventListener("load", r)
                            })
                        }
                    }, [e])
                }
        },
        15726: function(e, t, r) {
            r.d(t, {
                HI: function() {
                    return b
                },
                W6: function() {
                    return y
                },
                k3: function() {
                    return j
                },
                s7: function() {
                    return v
                }
            });
            var n = r(95235),
                i = r(82269),
                o = r(52792),
                a = r(39063),
                c = r(55452),
                s = r(13061),
                u = r(420),
                l = r(11919),
                d = r(8283),
                p = r(49929);
            r(2784);
            var f = r(52322),
                g = ["children", "icon", "iconSize", "isLoading", "hasUploadError"];

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var b = function() {
                    return (0, f.jsx)(s.Vp, {
                        size: "sm",
                        variant: "subtle",
                        colorScheme: "gray",
                        pos: "absolute",
                        top: 4,
                        left: 4,
                        p: 1,
                        children: (0, f.jsx)(u.$, {
                            color: "gray.600",
                            size: "xs"
                        })
                    })
                },
                v = function() {
                    return (0, f.jsx)(s.Vp, {
                        size: "sm",
                        variant: "subtle",
                        colorScheme: "red",
                        pos: "absolute",
                        top: 4,
                        left: 4,
                        children: (0, f.jsxs)(s.Sn, {
                            children: [(0, f.jsx)(p.G, {
                                icon: a.RL
                            }), " ", (0, f.jsx)(c.cC, {
                                id: "rmh/nq"
                            })]
                        })
                    })
                },
                j = function(e) {
                    var t = e.children,
                        r = e.icon,
                        n = void 0 === r ? o.zx : r,
                        a = e.iconSize,
                        c = e.isLoading,
                        s = e.hasUploadError,
                        u = (0, i.Z)(e, g);
                    return (0, f.jsxs)(l.k, m(m({
                        color: "gray.400",
                        align: "center",
                        justify: "center",
                        p: 4,
                        bg: "gray.200",
                        className: "placeholder",
                        "data-drag-handle": !0,
                        "data-export-as-image": !0,
                        position: "relative"
                    }, u), {}, {
                        children: [(0, f.jsx)(d.U, {
                            spacing: 4,
                            children: (0, f.jsx)(p.G, {
                                size: void 0 === a ? "2x" : a,
                                icon: n
                            })
                        }), void 0 !== c && c && (0, f.jsx)(b, {}), void 0 !== s && s && (0, f.jsx)(v, {}), t]
                    }))
                },
                y = {
                    minW: 16,
                    minH: 16,
                    bg: "gray.200"
                }
        },
        81745: function(e, t, r) {
            r.d(t, {
                R: function() {
                    return d
                }
            });
            var n = r(95235),
                i = r(72338),
                o = r(43862),
                a = r(87819),
                c = r(10063),
                s = r(50087);

            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var d = i.hj.create({
                name: "mediaUpload",
                extendNodeSchema: function(e) {
                    var t;
                    return {
                        imageKeyPath: null !== (t = (0, i.nU)((0, i.Nl)(e, "imageKeyPath", e))) && void 0 !== t ? t : ""
                    }
                },
                addCommands: function() {
                    var e = this;
                    return {
                        setOrgId: function(t) {
                            return function() {
                                return e.storage.orgId = t, !0
                            }
                        },
                        revokeImageTempURLs: function(e) {
                            return function(t) {
                                var r = t.tr,
                                    n = t.state,
                                    o = (0, i.N2)(n.doc, function(t) {
                                        return t.attrs.tempUrl === e
                                    });
                                return 0 == o.length || (o.forEach(function(e) {
                                    r.setNodeAttribute(e.pos, "tempUrl", null).setMeta("addToHistory", !1).setMeta("imageUploadUpdateAttrs", !0)
                                }), URL.revokeObjectURL(e), !0)
                            }
                        },
                        updateImageOnUploadFailure: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return function(r) {
                                var n = r.tr,
                                    i = r.state.doc.nodeAt(e);
                                if (!i || !i.attrs) return !1;
                                var a = (0, s.XU)(i),
                                    c = t ? l(l({}, a), {}, {
                                        uploadStatus: o.D.Done
                                    }) : (0, s.gM)({
                                        isError: !0
                                    }),
                                    u = (0, s.j6)(i, c);
                                return n.setNodeMarkup(e, void 0, u).setMeta("imageUploadUpdateAttrs", !0).setMeta("addToHistory", !1).setMeta("annotationEvent", {
                                    type: "update-node-attrs",
                                    pos: e
                                }), !0
                            }
                        },
                        updateImageOnUploadSuccess: function(e, t) {
                            return function(r) {
                                var n = r.tr,
                                    i = r.state.doc.nodeAt(e);
                                if (!i || !i.attrs) return !1;
                                var o = (0, s.gM)({
                                        isError: !1,
                                        result: t
                                    }),
                                    c = (0, a.UZ)(o),
                                    u = (0, s.j6)(i, c);
                                return n.setNodeMarkup(e, void 0, u).setMeta("imageUploadUpdateAttrs", !0).setMeta("addToHistory", !1).setMeta("annotationEvent", {
                                    type: "update-node-attrs",
                                    pos: e
                                }), !0
                            }
                        }
                    }
                },
                addStorage: function() {
                    return {
                        orgId: void 0,
                        completedUploads: {}
                    }
                },
                addProseMirrorPlugins: function() {
                    return [(0, c.SZ)(this.editor)]
                }
            })
        },
        80591: function(e, t, r) {
            r.d(t, {
                B0: function() {
                    return i.B0
                },
                Ns: function() {
                    return i.Ns
                },
                QZ: function() {
                    return i.QZ
                },
                R: function() {
                    return n.R
                },
                f8: function() {
                    return i.f8
                },
                gM: function() {
                    return i.gM
                },
                j6: function() {
                    return i.j6
                }
            });
            var n = r(81745),
                i = r(50087)
        },
        43628: function(e, t, r) {
            r.d(t, {
                j: function() {
                    return g
                },
                x: function() {
                    return h
                }
            });
            var n = r(95235),
                i = r(37164),
                o = r(28139),
                a = r(43862),
                c = r(76451),
                s = r(60636),
                u = r(59864),
                l = r(31889),
                d = r(50087);

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var g = function(e, t, r, n) {
                    var s, u, p = {
                        type: c.E.IMAGE,
                        source: o.in.key,
                        image: {
                            uploadStatus: a.D.Uploading,
                            source: o.in.key
                        }
                    };
                    (0, l.Ns)(r.type) ? (p.image.showPlaceholder = !0, u = "HEIC_tempId_".concat((0, i.x0)())) : u = URL.createObjectURL(r), p.image.tempUrl = u;
                    var f = function(t, r) {
                        if (u || r) {
                            var n = u || r;
                            (0, d.Ns)(e, n, t)
                        }
                    };
                    t.setNodeAttribute(n, "background", p).setMeta("imageUploadUpdateAttrs", !0), (0, o.cT)(r, null === (s = e.storage.mediaUpload) || void 0 === s ? void 0 : s.orgId, {
                        onOriginalFileUpload: f,
                        onUploadComplete: f,
                        onUploadFailed: function(t) {
                            (0, d.f8)(e, u, t), URL.revokeObjectURL(u)
                        }
                    })
                },
                h = function(e, t, r) {
                    var n = t.map(function(t) {
                        return (0, l.fU)(t.type) ? m(t, e) : (0, u.kO)(t.type, (0, u.mD)(t)) ? b(t, e) : null
                    }).filter(function(e) {
                        return null !== e
                    });
                    if (0 != n.length) {
                        var i = n.map(function(e) {
                                return e.content
                            }),
                            o = e.state.doc.resolve(r),
                            a = 0 === o.parentOffset && o.parent.inlineContent ? r - 1 : r;
                        e.chain().insertContentAt({
                            from: a,
                            to: r
                        }, i).command(function(e) {
                            var t, n = e.tr,
                                i = n.doc.resolve(n.mapping.map(r)),
                                o = (0, s.t)(n.doc.resolve(i.pos - ((null === (t = i.nodeBefore) || void 0 === t ? void 0 : t.nodeSize) || 1)));
                            return o && n.setSelection(o), !0
                        }).run(), n.forEach(function(e) {
                            e.upload()
                        }), setTimeout(function() {
                            e.commands.scrollIntoView()
                        }, 200)
                    }
                },
                m = function(e, t) {
                    var r = {
                        uploadStatus: a.D.Uploading,
                        source: o.in.key
                    };
                    (0, l.Ns)(e.type) ? (r.showPlaceholder = !0, r.tempUrl = "HEIC_tempId_".concat((0, i.x0)())) : r.tempUrl = URL.createObjectURL(e);
                    var n = function(e, n) {
                            var i = r.tempUrl;
                            if (i || n) {
                                var o = i || n;
                                (0, d.Ns)(t, o, e)
                            }
                        },
                        c = {
                            onOriginalFileUpload: n,
                            onUploadComplete: n,
                            onUploadFailed: function(e) {
                                r.tempUrl && ((0, d.f8)(t, r.tempUrl, e), URL.revokeObjectURL(r.tempUrl))
                            }
                        };
                    return {
                        name: e.name,
                        content: {
                            type: "image",
                            attrs: r
                        },
                        upload: function() {
                            var r;
                            return (0, o.cT)(e, null === (r = t.storage.mediaUpload) || void 0 === r ? void 0 : r.orgId, c)
                        }
                    }
                },
                b = function(e, t) {
                    var r = URL.createObjectURL(e),
                        n = f(f({}, (0, d.B0)(e)), {}, {
                            url: r
                        }),
                        i = function(e, n) {
                            if (r || n) {
                                var i = r || n;
                                (0, d.QZ)(t, i, e)
                            }
                        },
                        a = {
                            onOriginalFileUpload: i,
                            onUploadComplete: i
                        };
                    return {
                        name: e.name,
                        content: {
                            type: "embed",
                            attrs: n
                        },
                        upload: function() {
                            var r;
                            return (0, o.cT)(e, null === (r = t.storage.mediaUpload) || void 0 === r ? void 0 : r.orgId, a, "node", "doc")
                        }
                    }
                }
        },
        10063: function(e, t, r) {
            r.d(t, {
                SZ: function() {
                    return f
                },
                RC: function() {
                    return b
                },
                bC: function() {
                    return g
                },
                Sm: function() {
                    return d
                }
            });
            var n = r(27191),
                i = r(28139),
                o = r(43862),
                a = r(59864),
                c = r(31889),
                s = r(45219),
                u = r(43628),
                l = r(50087),
                d = function(e, t, r) {
                    var n = function(r, n) {
                            (0, l.Ns)(e, n || t, r)
                        },
                        o = {
                            onOriginalFileUpload: n,
                            onUploadComplete: n,
                            onUploadFailed: function(r) {
                                (0, l.f8)(e, t, r)
                            }
                        };
                    r ? (0, i.cT)(r, e.storage.mediaUpload.orgId, o) : (0, i.WY)(t, e.storage.mediaUpload.orgId, o)
                },
                p = function(e) {
                    return (0, c.fU)(e.type) || (0, a.kO)(e.type, (0, a.mD)(e))
                },
                f = function(e) {
                    return new n.Sy({
                        props: {
                            transformPasted: function(t) {
                                return t.content.descendants(function(t) {
                                    if ("image" === t.type.name && t.attrs.tempUrl) {
                                        var r = e.storage.mediaUpload.completedUploads[t.attrs.tempUrl];
                                        r && Object.assign(t.attrs, (0, l.j6)(t, (0, l.gM)({
                                            isError: !1,
                                            result: r
                                        })))
                                    } else if ("image" === t.type.name && t.attrs.src && !(0, c.S6)(t.attrs.src)) {
                                        var n, i = t.attrs.src;
                                        i.startsWith("data:") && (n = (0, c.v9)(t.attrs.src), i = URL.createObjectURL(n)), Object.assign(t.attrs, {
                                            uploadStatus: o.D.Uploading,
                                            tempUrl: i,
                                            src: void 0,
                                            source: "image.custom"
                                        }), d(e, i, n)
                                    }
                                }), t
                            },
                            handlePaste: function(t, r, n) {
                                return m(e, t, r, n)
                            },
                            handleDOMEvents: {
                                drop: function(t, r) {
                                    return h(e, t, r)
                                }
                            }
                        }
                    })
                },
                g = function(e, t) {
                    if (!e.clipboardData) return null;
                    var r, n = e.clipboardData.getData("text/html"),
                        i = e.clipboardData.getData("text/plain");
                    if (i && !n && /^\s*<svg[\s\S]*<\/svg>\s*$/.test(i)) return [(0, c.K$)(i)];
                    var o = Array.prototype.slice.call(e.clipboardData.items);
                    return o.some(function(e) {
                        return "text/html" === e.type
                    }) && (t.content.childCount > 1 || (null === (r = t.content.firstChild) || void 0 === r ? void 0 : r.type.name) !== "image") ? null : o.map(function(e) {
                        return e.getAsFile()
                    }).filter(function(e) {
                        return !!e
                    }).filter(p)
                },
                h = function(e, t, r) {
                    if (t.props.editable && !t.props.editable(t.state)) return !1;
                    var n = b(r).filter(p);
                    if (0 === n.length) return !1;
                    var i = (0, s.Z)(t, r);
                    return !!i && (r.preventDefault(), (0, u.x)(e, n, i), !0)
                },
                m = function(e, t, r, n) {
                    if (t.props.editable && !t.props.editable(t.state)) return !1;
                    var i = g(r, n);
                    if (!i || 0 === i.length) return !1;
                    var o = t.state.selection,
                        a = o.from;
                    return o.empty || e.commands.deleteSelection(), (0, u.x)(e, i, a), !0
                };

            function b(e) {
                var t = [],
                    r = e.target;
                if (e.dataTransfer) {
                    var n = e.dataTransfer;
                    n.files && n.files.length ? t = n.files : n.items && n.items.length && (t = n.items)
                } else r && r.files && (t = r.files);
                return Array.prototype.slice.call(t)
            }
        },
        50087: function(e, t, r) {
            r.d(t, {
                B0: function() {
                    return O
                },
                Ns: function() {
                    return v
                },
                QZ: function() {
                    return x
                },
                XU: function() {
                    return m
                },
                f8: function() {
                    return j
                },
                gM: function() {
                    return g
                },
                j6: function() {
                    return h
                }
            });
            var n = r(95235),
                i = r(72338),
                o = r(72579),
                a = r.n(o),
                c = r(98537),
                s = r.n(c),
                u = r(16765),
                l = r.n(u),
                d = r(43862),
                p = r(59864);

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var g = function(e) {
                    var t = e.result;
                    return e.isError ? {
                        uploadStatus: d.D.Error,
                        showPlaceholder: !0,
                        tempUrl: null,
                        src: null
                    } : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? f(Object(r), !0).forEach(function(t) {
                                (0, n.Z)(e, t, r[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                        }
                        return e
                    }({
                        uploadStatus: d.D.Done,
                        showPlaceholder: !1
                    }, t)
                },
                h = function(e, t) {
                    var r = e.type.spec.imageKeyPath,
                        n = r ? l()({}, r, t) : t;
                    return s()({}, e.attrs, n)
                },
                m = function(e) {
                    var t = e.type.spec.imageKeyPath;
                    return t ? a()(e.attrs, t, e.attrs) : e.attrs
                },
                b = function(e, t) {
                    return (0, i.N2)(e.state.doc, function(e) {
                        var r = m(e);
                        return [null == r ? void 0 : r.tempUrl, null == r ? void 0 : r.src].includes(t)
                    })
                },
                v = function(e, t, r) {
                    e.parentEditor && (e = e.parentEditor), t && y(e, r, t);
                    var n = b(e, t);
                    if (0 == n.length) {
                        console.warn("[MediaUpload] Couldn't find placeholder node");
                        return
                    }
                    n.forEach(function(t) {
                        var n = t.pos;
                        e.commands.updateImageOnUploadSuccess(n, r)
                    }), setTimeout(function() {
                        e.commands.revokeImageTempURLs(t)
                    }, 3e4)
                },
                j = function(e, t, r) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    e.parentEditor && (e = e.parentEditor);
                    var i = b(e, t);
                    if (0 == i.length) {
                        console.warn("[MediaUpload] Couldn't find placeholder node");
                        return
                    }
                    i.forEach(function(t) {
                        return e.commands.updateImageOnUploadFailure(t.pos, n)
                    }), console.error(r)
                },
                y = function(e, t, r) {
                    e.storage.mediaUpload.completedUploads[r] = t
                },
                x = function(e, t, r) {
                    var n = (0, i.N2)(e.state.doc, function(e) {
                        return "embed" === e.type.name && e.attrs.url === t
                    });
                    if (0 == n.length) {
                        console.warn("[MediaUpload] Couldn't find placeholder node");
                        return
                    }
                    n.forEach(function(t) {
                        e.commands.updateAttributesAtPos(t.pos, {
                            url: r.src,
                            sourceUrl: r.src,
                            embed: {
                                url: r.src
                            },
                            thumbnail: {
                                src: r.thumbnail,
                                uploadStatus: d.D.Done,
                                showPlaceholder: !1
                            }
                        })
                    })
                },
                O = function(e) {
                    return {
                        meta: {
                            title: e.name,
                            description: (0, p.td)(e.size, 1)
                        },
                        thumbnail: {
                            uploadStatus: d.D.Uploading,
                            showPlaceholder: !0
                        },
                        source: "embed.pdf"
                    }
                }
        },
        29270: function(e, t, r) {
            r.d(t, {
                SV: function() {
                    return o
                },
                gS: function() {
                    return a
                },
                lt: function() {
                    return i
                },
                m4: function() {
                    return c
                }
            });
            var n = r(79183),
                i = 30,
                o = 16,
                a = n.DB * o,
                c = .6
        },
        87819: function(e, t, r) {
            r.d(t, {
                Bp: function() {
                    return l
                },
                NW: function() {
                    return p
                },
                UZ: function() {
                    return h
                },
                fP: function() {
                    return s
                },
                iJ: function() {
                    return d
                },
                k7: function() {
                    return f
                },
                vb: function() {
                    return u
                },
                zd: function() {
                    return g
                }
            });
            var n = r(95235),
                i = r(29270);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach(function(t) {
                        (0, n.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var c = ["image", "video", "embed", "mediaPlaceholder"],
                s = function(e) {
                    return u(e.type)
                },
                u = function(e) {
                    return c.includes(e.name)
                },
                l = function(e) {
                    return "video" === e.type.name || "embed" === e.type.name
                },
                d = function(e) {
                    return e.href || e.sourceUrl || e.url || e.embedUrl || void 0
                },
                p = function(e) {
                    var t;
                    return null !== (t = e.embed) && void 0 !== t && t.url ? e.embed.url : "embedUrl" in e ? e.embedUrl : d(e)
                },
                f = function(e) {
                    var t, r, n = e.attrs;
                    return [null === (t = n.meta) || void 0 === t ? void 0 : t.title, null === (r = n.meta) || void 0 === r ? void 0 : r.site].filter(Boolean).join(" - ")
                },
                g = function(e) {
                    var t, r;
                    return null !== (t = null == e ? void 0 : null === (r = e.split(".").pop()) || void 0 === r ? void 0 : r.startsWith("svg")) && void 0 !== t && t
                },
                h = function(e) {
                    var t = e.meta || {},
                        r = t.width,
                        n = t.height,
                        o = t.resize;
                    if (!r || !n || (null == o ? void 0 : o.isAuto) === !1) return e;
                    var c = i.gS,
                        s = window.innerHeight * i.m4;
                    return n / r * c > s ? a(a({}, e), {}, {
                        resize: {
                            width: Math.min(c, s * (r / n)),
                            clipType: null,
                            clipPath: null,
                            clipAspectRatio: null,
                            isAuto: !0
                        }
                    }) : e
                }
        },
        60636: function(e, t, r) {
            r.d(t, {
                G: function() {
                    return a
                },
                t: function() {
                    return function e(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                            o = t.doc,
                            a = r < 0;
                        if (!t.nodeAfter) return null;
                        if (t.nodeAfter.inlineContent) return i.Y1.near(o.resolve(t.pos + (a ? t.nodeAfter.content.size + 1 : 0)), r);
                        var c = (0, n.N2)(t.nodeAfter, function(e) {
                            return e.inlineContent || i.qv.isSelectable(e)
                        });
                        if (!c || 0 === c.length) return i.qv.create(o, t.pos);
                        var s = t.start(t.depth + 1) + (a ? c[c.length - 1].pos : c[0].pos);
                        return e(o.resolve(s), r)
                    }
                }
            });
            var n = r(72338),
                i = r(27191),
                o = r(26151),
                a = function(e, t) {
                    var r, n, i = e.doc,
                        a = e.steps.length - 1,
                        c = e.steps[a];
                    if (!c || !(c instanceof o.Pu || c instanceof o.FC) || 0 === c.slice.content.size) return null;
                    var s = t || (null === (r = c.slice.content.child(c.slice.openStart)) || void 0 === r ? void 0 : r.type.name);
                    if (e.mapping.maps[a].forEach(function(e, t, r) {
                            null == n && (n = r)
                        }), null == n) return null;
                    var u = i.nodeAt(n);
                    if (u && u.type.name === s) return i.resolve(n);
                    if (!s) return console.warn("[getInsertedNodePos] Error selecting node, type not found in slice.lastChild", n), null;
                    for (var l = c.from; l < e.mapping.map(c.to); l++) {
                        var d = e.doc.nodeAt(l);
                        if (d && d.type.name === s) return i.resolve(l)
                    }
                    return null
                }
        },
        9849: function(e, t, r) {
            r.d(t, {
                rJ: function() {
                    return e9
                },
                kC: function() {
                    return te
                }
            });
            var n, i, o = r(35483),
                a = r(95235),
                c = r(82269),
                s = r(11919),
                u = r(34676),
                l = r(28165),
                d = r(2784),
                p = r(10710),
                f = r(90509),
                g = r(82025),
                h = r(2369),
                m = r(25186),
                b = r(56999),
                v = r(39108),
                j = r(24737),
                y = r(9015),
                x = r(42672),
                O = r(6752),
                w = r(61983),
                P = r(39107),
                k = r(51765),
                A = r(14279),
                S = r(31946),
                C = r(87254),
                E = r(8283),
                D = r(54728),
                I = r(51434),
                _ = r(91333),
                U = r(76648),
                R = d.createContext({});

            function T() {
                return d.useContext(R)
            }
            var M = r(81333),
                Z = r(55452),
                H = r(53738),
                N = r(67887),
                z = r(94659),
                L = r(70287),
                F = r(5766),
                W = r(45650),
                G = {
                    src: "/_next/static/media/transparent-background.ccc186e7.png"
                },
                B = r(52322);

            function q(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(r), !0).forEach(function(t) {
                        (0, a.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var V = (n = {}, (0, a.Z)(n, o.HQ.White, "#f0f1f3"), (0, a.Z)(n, o.HQ.Gray, "#788492"), (0, a.Z)(n, o.HQ.Green, "#36b24d"), (0, a.Z)(n, o.HQ.Blue, "#1c7ed6"), (0, a.Z)(n, o.HQ.Violet, "#7746f1"), (0, a.Z)(n, o.HQ.Red, "#ff2133"), (0, a.Z)(n, o.HQ.Orange, "#ff9433"), (0, a.Z)(n, o.HQ.Yellow, "#ffc936"), n),
                Y = function(e) {
                    return e.appState.currentStyle
                },
                K = function(e) {
                    return e.document.pageStates[e.appState.currentPageId].selectedIds
                },
                X = function(e) {
                    return e.settings.isDarkMode ? "dark" : "light"
                },
                J = function(e) {
                    var t = e.style,
                        r = e.colorMode;
                    return (0, B.jsx)(H.xu, {
                        backgroundColor: t.isFilled ? o.tk.fills[r][t.color] : void 0,
                        backgroundImage: t.isFilled ? void 0 : G.src,
                        backgroundSize: "4em",
                        borderColor: o.tk.strokes[r][t.color],
                        borderWidth: "2px",
                        h: "1em",
                        w: "1em",
                        borderRadius: "md"
                    })
                },
                $ = Object.keys(o.tk.defaultTextStyle),
                ee = function(e, t) {
                    var r = e.page,
                        n = {};
                    if (t.length <= 0) return {};
                    var i = new Set([]);
                    return t.map(function(e) {
                        return r.shapes[e]
                    }).forEach(function(e) {
                        $.forEach(function(t) {
                            if (!i.has(t)) {
                                if (void 0 === n[t]) n[t] = e.style[t];
                                else {
                                    if (n[t] === e.style[t]) return;
                                    i.add(t)
                                }
                            }
                        })
                    }), i.forEach(function(e) {
                        delete n[e]
                    }), n
                },
                et = function() {
                    var e = T(),
                        t = e.useStore(X),
                        r = e.useStore(Y),
                        n = e.useStore(K),
                        i = ee(e, n),
                        a = Q(Q({}, r), i);
                    return (0, B.jsxs)(D.J, {
                        trigger: "hover",
                        children: [(0, B.jsx)(I.x, {
                            children: (0, B.jsx)(N.h, {
                                icon: (0, B.jsx)(J, {
                                    style: a,
                                    colorMode: t
                                }),
                                variant: "ghost",
                                size: "sm",
                                "aria-label": ""
                            })
                        }), (0, B.jsx)(_.y, {
                            w: "fit-content",
                            bg: "#F9FAFBFA",
                            p: 4,
                            children: (0, B.jsxs)(z.g, {
                                spacing: 2,
                                align: "flex-start",
                                children: [(0, B.jsx)(L.l, {
                                    children: (0, B.jsx)(Z.cC, {
                                        id: "TuM2Yu"
                                    })
                                }), (0, B.jsx)(F.M, {
                                    columns: 2,
                                    spacing: 2,
                                    children: [!0, !1].map(function(r) {
                                        return (0, B.jsx)(W.z, {
                                            leftIcon: (0, B.jsx)(J, {
                                                style: Q(Q({}, a), {}, {
                                                    isFilled: r
                                                }),
                                                colorMode: t
                                            }),
                                            variant: "ghost",
                                            size: "sm",
                                            isActive: a.isFilled === r,
                                            onClick: function() {
                                                return e.style({
                                                    isFilled: r
                                                })
                                            },
                                            children: r ? (0, B.jsx)(Z.cC, {
                                                id: "5bi1la"
                                            }) : (0, B.jsx)(Z.cC, {
                                                id: "dD7NPy"
                                            })
                                        }, r ? "fill" : "outline")
                                    })
                                }), (0, B.jsx)(L.l, {
                                    children: (0, B.jsx)(Z.cC, {
                                        id: "1HfW/F"
                                    })
                                }), (0, B.jsx)(F.M, {
                                    columns: 4,
                                    spacing: 2,
                                    w: "100%",
                                    children: Object.entries(o.HQ).map(function(r) {
                                        var n = (0, M.Z)(r, 2),
                                            i = n[0],
                                            o = n[1];
                                        return V[o] ? (0, B.jsx)(N.h, {
                                            icon: (0, B.jsx)(J, {
                                                style: Q(Q({}, a), {}, {
                                                    color: o
                                                }),
                                                colorMode: t
                                            }),
                                            variant: "ghost",
                                            size: "md",
                                            "aria-label": i,
                                            isActive: a.color === o,
                                            onClick: function() {
                                                return e.style({
                                                    color: o
                                                })
                                            }
                                        }, o) : null
                                    })
                                })]
                            })
                        })]
                    })
                },
                er = r(55281),
                en = r(43669),
                ei = r(14383),
                eo = r(56751),
                ea = r(17107),
                ec = r(49929),
                es = r(55966),
                eu = ["label", "icon", "tooltipPlacement"];

            function el(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var ed = (0, ea.G)(function(e, t) {
                    var r = e.label,
                        n = e.icon,
                        i = e.tooltipPlacement,
                        o = (0, c.Z)(e, eu);
                    return (0, B.jsx)(es.kH, {
                        placement: void 0 === i ? "top" : i,
                        label: r,
                        isDisabled: !r,
                        children: (0, B.jsx)(N.h, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? el(Object(r), !0).forEach(function(t) {
                                    (0, a.Z)(e, t, r[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : el(Object(r)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                })
                            }
                            return e
                        }({
                            "aria-label": r || "",
                            ref: t,
                            size: "sm",
                            variant: "",
                            icon: (0, B.jsx)(ec.G, {
                                icon: n
                            }),
                            color: "trueblue.600",
                            textShadow: "0px 1px 0px rgba(0,0,0,0)",
                            fontWeight: "500",
                            borderRadius: "md",
                            borderWidth: "1px",
                            backdropFilter: "blur(20px)",
                            borderColor: "transparent",
                            _hover: {
                                bg: "gray.100",
                                borderColor: "gray.200"
                            },
                            _focus: {
                                bg: "gray.100",
                                borderColor: "gray.200"
                            },
                            _active: {
                                bg: "trueblue.100",
                                borderColor: "trueblue.200"
                            }
                        }, o))
                    })
                }),
                ep = ["children"];

            function ef(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eg(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ef(Object(r), !0).forEach(function(t) {
                        (0, a.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ef(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eh = function(e) {
                var t = e.children,
                    r = (0, c.Z)(e, ep);
                return (0, B.jsx)(s.k, eg(eg({
                    bg: "#F9FAFBDD",
                    p: 1,
                    borderWidth: "1px",
                    borderColor: "whiteAlpha.600",
                    borderRadius: "xl",
                    shadow: "xl"
                }, r), {}, {
                    children: t
                }))
            };

            function em(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eb(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? em(Object(r), !0).forEach(function(t) {
                        (0, a.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : em(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var ev = (i = {}, (0, a.Z)(i, o.HE.Start, eo.el), (0, a.Z)(i, o.HE.Middle, ei.MB), (0, a.Z)(i, o.HE.End, en.S3), i),
                ej = function() {
                    var e = T(),
                        t = e.useStore(Y),
                        r = e.useStore(K),
                        n = ee(e, r),
                        i = eb(eb({}, t), n);
                    return (0, B.jsxs)(D.J, {
                        trigger: "hover",
                        children: [(0, B.jsx)(I.x, {
                            children: (0, B.jsx)(ed, {
                                icon: ev[i.textAlign || o.HE.Start]
                            })
                        }), (0, B.jsx)(_.y, {
                            background: "none",
                            shadow: "none",
                            w: "fit-content",
                            children: (0, B.jsx)(eh, {
                                direction: "column",
                                children: (0, B.jsxs)(U.h, {
                                    children: [(0, B.jsx)(ed, {
                                        icon: eo.el,
                                        label: C.ag._({
                                            id: "IR6Txi"
                                        }),
                                        onClick: function() {
                                            return e.style({
                                                textAlign: o.HE.Start
                                            })
                                        },
                                        isActive: i.textAlign === o.HE.Start
                                    }, "align-left"), (0, B.jsx)(ed, {
                                        icon: ei.MB,
                                        label: C.ag._({
                                            id: "8nOdkO"
                                        }),
                                        onClick: function() {
                                            return e.style({
                                                textAlign: o.HE.Middle
                                            })
                                        },
                                        isActive: i.textAlign === o.HE.Middle
                                    }, "align-center"), (0, B.jsx)(ed, {
                                        icon: en.S3,
                                        label: C.ag._({
                                            id: "pd0UH2"
                                        }),
                                        onClick: function() {
                                            return e.style({
                                                textAlign: o.HE.End
                                            })
                                        },
                                        isActive: i.textAlign === o.HE.End
                                    }, "align-right"), (0, B.jsx)(ed, {
                                        icon: er.z1,
                                        label: C.ag._({
                                            id: "18P2qJ"
                                        }),
                                        onClick: function() {
                                            return e.style({
                                                textAlign: o.HE.Justify
                                            })
                                        },
                                        isActive: i.textAlign === o.HE.Justify
                                    }, "justify")]
                                })
                            })
                        })]
                    })
                };

            function ey(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var ex = function(e) {
                    return e.document.pageStates[e.appState.currentPageId].selectedIds.some(function(t) {
                        return void 0 !== e.document.pages[e.appState.currentPageId].shapes[t].children
                    })
                },
                eO = function(e) {
                    return "idle" === e.appState.status && e.document.pageStates[e.appState.currentPageId].selectedIds.length > 0
                },
                ew = function(e) {
                    return e.document.pageStates[e.appState.currentPageId].selectedIds.length
                },
                eP = function(e) {
                    var t, r = e.appState.currentPageId,
                        n = e.document.pages[r],
                        i = function(e, t) {
                            var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (!r) {
                                if (Array.isArray(e) || (r = function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return ey(e, t);
                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ey(e, t)
                                        }
                                    }(e))) {
                                    r && (e = r);
                                    var n = 0,
                                        i = function() {};
                                    return {
                                        s: i,
                                        n: function() {
                                            return n >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[n++]
                                            }
                                        },
                                        e: function(e) {
                                            throw e
                                        },
                                        f: i
                                    }
                                }
                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var o, a = !0,
                                c = !1;
                            return {
                                s: function() {
                                    r = r.call(e)
                                },
                                n: function() {
                                    var e = r.next();
                                    return a = e.done, e
                                },
                                e: function(e) {
                                    c = !0, o = e
                                },
                                f: function() {
                                    try {
                                        a || null == r.return || r.return()
                                    } finally {
                                        if (c) throw o
                                    }
                                }
                            }
                        }(e.document.pageStates[r].selectedIds);
                    try {
                        for (i.s(); !(t = i.n()).done;) {
                            var o = t.value;
                            if ("text" in n.shapes[o]) return !0
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                    return !1
                },
                ek = d.memo(function() {
                    var e = T(),
                        t = (0, p.SE)().isGammaOrgUser,
                        r = e.useStore(eO),
                        n = e.useStore(ex),
                        i = e.useStore(ew),
                        a = e.useStore(eP);
                    return (0, B.jsx)(s.k, {
                        w: "100%",
                        direction: "row",
                        position: "absolute",
                        bottom: 2,
                        align: "flex-end",
                        justify: "center",
                        zIndex: 1,
                        children: (0, B.jsx)(eh, {
                            children: (0, B.jsxs)(E.U, {
                                spacing: 2,
                                children: [t && (0, B.jsx)(ed, {
                                    icon: S.IS,
                                    label: C.ag._({
                                        id: "SpTWH3"
                                    }),
                                    onClick: function() {
                                        return e.exportImage(o.Uz.SVG, {
                                            scale: 1,
                                            quality: 1
                                        })
                                    }
                                }, "download"), r && (0, B.jsxs)(B.Fragment, {
                                    children: [(0, B.jsx)(ed, {
                                        icon: A.$,
                                        label: C.ag._({
                                            id: "/Wgayn"
                                        }),
                                        onClick: function() {
                                            return e.delete()
                                        },
                                        "data-testid": "drawing-edit-toolbar-delete"
                                    }, "delete"), (0, B.jsx)(eA, {}), i >= 2 && (0, B.jsx)(eS, {}), i >= 2 || n ? (0, B.jsx)(ed, {
                                        icon: k.tU,
                                        label: n ? "Ungroup selection" : "Group selection",
                                        onClick: function() {
                                            return n ? e.ungroup() : e.group()
                                        },
                                        isActive: n
                                    }, "group") : null]
                                }), (0, B.jsx)(et, {}), a && (0, B.jsx)(ej, {})]
                            })
                        })
                    })
                }),
                eA = function() {
                    var e = T();
                    return (0, B.jsxs)(D.J, {
                        trigger: "hover",
                        children: [(0, B.jsx)(I.x, {
                            children: (0, B.jsx)(ed, {
                                icon: w.y3
                            })
                        }), (0, B.jsx)(_.y, {
                            background: "none",
                            shadow: "none",
                            w: "fit-content",
                            children: (0, B.jsxs)(eh, {
                                direction: "row",
                                children: [(0, B.jsx)(ed, {
                                    icon: P.XQ,
                                    label: C.ag._({
                                        id: "J6qWQV"
                                    }),
                                    onClick: function() {
                                        return e.moveToFront()
                                    }
                                }, "front"), (0, B.jsx)(ed, {
                                    icon: w.y3,
                                    label: C.ag._({
                                        id: "9xFjqz"
                                    }),
                                    onClick: function() {
                                        return e.moveForward()
                                    }
                                }, "forward"), (0, B.jsx)(ed, {
                                    icon: O.QZ,
                                    label: C.ag._({
                                        id: "OfSb1W"
                                    }),
                                    onClick: function() {
                                        return e.moveBackward()
                                    }
                                }, "backward"), (0, B.jsx)(ed, {
                                    icon: x.H5,
                                    label: C.ag._({
                                        id: "/zBSYY"
                                    }),
                                    onClick: function() {
                                        return e.moveToBack()
                                    }
                                }, "back")]
                            })
                        })]
                    })
                },
                eS = function() {
                    var e = T();
                    return (0, B.jsxs)(D.J, {
                        trigger: "hover",
                        children: [(0, B.jsx)(I.x, {
                            children: (0, B.jsx)(ed, {
                                icon: y.I6
                            })
                        }), (0, B.jsx)(_.y, {
                            background: "none",
                            shadow: "none",
                            w: "fit-content",
                            children: (0, B.jsxs)(eh, {
                                direction: "column",
                                children: [(0, B.jsxs)(U.h, {
                                    children: [(0, B.jsx)(ed, {
                                        icon: y.I6,
                                        label: C.ag._({
                                            id: "IR6Txi"
                                        }),
                                        onClick: function() {
                                            return e.align(o.MR.Left)
                                        }
                                    }, "align-left"), (0, B.jsx)(ed, {
                                        icon: j.li,
                                        label: C.ag._({
                                            id: "8nOdkO"
                                        }),
                                        onClick: function() {
                                            return e.align(o.MR.CenterHorizontal)
                                        }
                                    }, "align-center"), (0, B.jsx)(ed, {
                                        icon: v.xf,
                                        label: C.ag._({
                                            id: "pd0UH2"
                                        }),
                                        onClick: function() {
                                            return e.align(o.MR.Right)
                                        }
                                    }, "align-right"), (0, B.jsx)(ed, {
                                        icon: b.ZC,
                                        label: C.ag._({
                                            id: "8lqfXb"
                                        }),
                                        onClick: function() {
                                            return e.distribute(o.XR.Horizontal)
                                        }
                                    }, "distribute-h")]
                                }), (0, B.jsxs)(U.h, {
                                    children: [(0, B.jsx)(ed, {
                                        icon: m.Jh,
                                        label: C.ag._({
                                            id: "/Q0jUh"
                                        }),
                                        onClick: function() {
                                            return e.align(o.MR.Top)
                                        }
                                    }, "align-top"), (0, B.jsx)(ed, {
                                        icon: h.Ui,
                                        label: C.ag._({
                                            id: "QhuQN2"
                                        }),
                                        onClick: function() {
                                            return e.align(o.MR.CenterVertical)
                                        }
                                    }, "align-middle"), (0, B.jsx)(ed, {
                                        icon: g.iX,
                                        label: C.ag._({
                                            id: "EPnxoe"
                                        }),
                                        onClick: function() {
                                            return e.align(o.MR.Bottom)
                                        }
                                    }, "align-bottom"), (0, B.jsx)(ed, {
                                        icon: f.ed,
                                        label: C.ag._({
                                            id: "a1NrWf"
                                        }),
                                        onClick: function() {
                                            return e.distribute(o.XR.Vertical)
                                        }
                                    }, "distribute-v")]
                                })]
                            })
                        })]
                    })
                },
                eC = r(47136),
                eE = r(50318),
                eD = r(46802),
                eI = r(72063),
                e_ = r(86956),
                eU = r(15683),
                eR = r(84807),
                eT = r(98479),
                eM = r(40110),
                eZ = function(e) {
                    return e.appState.activeTool
                },
                eH = d.memo(function() {
                    var e = T(),
                        t = e.useStore(eZ);
                    return (0, B.jsx)(s.k, {
                        h: "100%",
                        direction: "column",
                        position: "absolute",
                        right: 2,
                        align: "flex-end",
                        justify: "center",
                        zIndex: 1,
                        children: (0, B.jsx)(eh, {
                            children: (0, B.jsx)(z.g, {
                                spacing: 2,
                                children: [{
                                    icon: eR.q,
                                    label: C.ag._({
                                        id: "rG3WVm"
                                    }),
                                    tool: "select"
                                }, {
                                    icon: eT.xf,
                                    label: C.ag._({
                                        id: "Ajc4TJ"
                                    }),
                                    tool: "erase"
                                }, {
                                    icon: eU.ZC,
                                    label: C.ag._({
                                        id: "rjuFFw"
                                    }),
                                    tool: o.Uc.Line
                                }, {
                                    icon: e_.nU,
                                    label: C.ag._({
                                        id: "zFkhx3"
                                    }),
                                    tool: o.Uc.Arrow
                                }, {
                                    icon: eI.lC,
                                    label: C.ag._({
                                        id: "30KLDI"
                                    }),
                                    tool: o.Uc.Rectangle
                                }, {
                                    icon: eD.di,
                                    label: C.ag._({
                                        id: "7xMmki"
                                    }),
                                    tool: o.Uc.Ellipse
                                }, {
                                    icon: eE.Bw,
                                    label: C.ag._({
                                        id: "ucHvJP"
                                    }),
                                    tool: o.Uc.Triangle
                                }, {
                                    icon: eC.K5,
                                    label: C.ag._({
                                        id: "xeiujy"
                                    }),
                                    tool: o.Uc.Text
                                }].map(function(r) {
                                    var n = r.label,
                                        i = r.icon,
                                        o = r.tool;
                                    return (0, B.jsxs)(B.Fragment, {
                                        children: [(0, B.jsx)(ed, {
                                            icon: i,
                                            label: n,
                                            onClick: function() {
                                                return e.selectTool(o)
                                            },
                                            isActive: t === o,
                                            tooltipPlacement: "left",
                                            "data-testid": "drawing-insert-toolbar-".concat(o)
                                        }, n), "select" == o && (0, B.jsx)(eM.i, {}, "selectDivider")]
                                    })
                                })
                            })
                        })
                    })
                }),
                eN = r(61804),
                ez = r(22521),
                eL = r(9088),
                eF = r(30893),
                eW = r(40771),
                eG = r(82904),
                eB = function(e) {
                    return e.document.pageStates[e.appState.currentPageId].camera.zoom
                },
                eq = function(e) {
                    return e.settings.showGrid
                },
                eQ = d.memo(function() {
                    var e = T(),
                        t = e.useStore(eq);
                    return (0, B.jsx)(s.k, {
                        position: "absolute",
                        top: 2,
                        left: 2,
                        zIndex: 1,
                        children: (0, B.jsx)(eh, {
                            children: (0, B.jsxs)(E.U, {
                                spacing: 2,
                                children: [(0, B.jsx)(eV, {}), (0, B.jsx)(ed, {
                                    icon: eN.fn,
                                    label: t ? C.ag._({
                                        id: "IsBZFj"
                                    }) : C.ag._({
                                        id: "mWgfWA"
                                    }),
                                    isActive: t,
                                    onClick: function() {
                                        return e.setSetting("showGrid", !t)
                                    }
                                }, "grid")]
                            })
                        })
                    })
                }),
                eV = d.memo(function() {
                    var e = T(),
                        t = e.useStore(eB);
                    return (0, B.jsxs)(eL.v, {
                        children: [(0, B.jsxs)(eF.j, {
                            as: W.z,
                            "data-test-id": "zoom-menu-button",
                            size: "sm",
                            colorScheme: "trueblue",
                            variant: "ghost",
                            leftIcon: (0, B.jsx)(ec.G, {
                                icon: ez.Y$
                            }),
                            children: [Math.round(100 * t), "%"]
                        }), (0, B.jsxs)(eW.q, {
                            children: [(0, B.jsx)(eG.s, {
                                command: "#+",
                                onClick: e.zoomIn,
                                children: (0, B.jsx)(Z.cC, {
                                    id: "AWOSPo"
                                })
                            }), (0, B.jsx)(eG.s, {
                                command: "#-",
                                onClick: e.zoomOut,
                                children: (0, B.jsx)(Z.cC, {
                                    id: "FjkaiT"
                                })
                            }), (0, B.jsx)(eG.s, {
                                command: "⇧0",
                                onClick: e.resetZoom,
                                children: (0, B.jsx)(Z.cC, {
                                    id: "41NrIs"
                                })
                            }), (0, B.jsx)(eG.s, {
                                command: "⇧1",
                                onClick: e.zoomToFit,
                                "data-test-id": "zoom-to-fit-button",
                                children: (0, B.jsx)(Z.cC, {
                                    id: "pLI1Is"
                                })
                            })]
                        })]
                    })
                }),
                eY = r(20406),
                eK = r(28526),
                eX = r.n(eK),
                eJ = r(28139);

            function e$(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function e0(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e$(Object(r), !0).forEach(function(t) {
                        (0, a.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e$(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var e1 = function(e) {
                    var t, r;
                    return {
                        onAssetCreate: (0, d.useCallback)((t = (0, eY.Z)(eX().mark(function t(r, n, i) {
                            var c, s;
                            return eX().wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e) {
                                            t.next = 3;
                                            break
                                        }
                                        return console.warn("[useAssetUpload] OrgId is required to upload assets"), t.abrupt("return", !1);
                                    case 3:
                                        return c = URL.createObjectURL(n), console.debug("[useAssetUpload] Handling upload for file", {
                                            file: n,
                                            id: i,
                                            tempUrl: c
                                        }), s = function(e) {
                                            var t = r.assets.find(function(e) {
                                                return e.id === i
                                            });
                                            if (t) {
                                                console.debug("[useAssetUpload] Upload complete. Replacing temp asset", {
                                                    id: i,
                                                    src: e.src
                                                });
                                                var n = {
                                                    document: {
                                                        assets: (0, a.Z)({}, i, e0(e0({}, t), {}, {
                                                            src: e.src
                                                        }))
                                                    }
                                                };
                                                r.patchState(n, "upload"), r.persist(n, "upload")
                                            }
                                        }, (0, eJ.cT)(n, e, {
                                            onOriginalFileUpload: s,
                                            onUploadComplete: s
                                        }), r.patchState({
                                            document: {
                                                assets: (0, a.Z)({}, i, {
                                                    id: i,
                                                    type: o.LO.Image,
                                                    fileName: n.name,
                                                    src: c
                                                })
                                            }
                                        }), t.abrupt("return", c);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        })), function(e, r, n) {
                            return t.apply(this, arguments)
                        }), [e]),
                        onAssetDelete: (0, d.useCallback)((r = (0, eY.Z)(eX().mark(function e(t, r) {
                            return eX().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", !0);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e, t) {
                            return r.apply(this, arguments)
                        }), [])
                    }
                },
                e2 = r(18575),
                e5 = ["isDark", "font"];

            function e3(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function e4(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e3(Object(r), !0).forEach(function(t) {
                        (0, a.Z)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e3(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var e8 = {
                    dash: o.g6.Solid,
                    isFilled: !0,
                    color: o.HQ.White
                },
                e9 = function(e) {
                    var t = e.isDark,
                        r = e.font,
                        n = (0, c.Z)(e, e5),
                        i = (0, p.SE)().currentWorkspace,
                        a = (0, d.useState)(),
                        f = a[0],
                        g = a[1],
                        h = (0, d.useState)(!1),
                        m = h[0],
                        b = h[1],
                        v = (0, d.useCallback)(function(e) {
                            g(e), e.style(e8, []), b(!0)
                        }, []),
                        j = e1(null == i ? void 0 : i.id),
                        y = j.onAssetCreate,
                        x = j.onAssetDelete;
                    (0, d.useEffect)(function() {
                        f && void 0 !== t && f.setSetting("isDarkMode", t)
                    }, [f, t]);
                    var O = (0, d.useMemo)(function() {
                            return (0, e2.c)(t)
                        }, [t]),
                        w = (0, d.useMemo)(function() {
                            return (0, e2.m)(r)
                        }, [r]);
                    return (0, B.jsxs)(s.k, {
                        sx: {
                            ".tl-canvas": e4(e4({
                                "div, text, textarea": e4({}, w)
                            }, O), {}, {
                                'g[cursor="grab"][aria-label="link handle"]': {
                                    display: "none"
                                }
                            })
                        },
                        onDrop: function() {},
                        onPaste: function() {},
                        position: "relative",
                        h: "100%",
                        w: "100%",
                        className: "highlight-mask",
                        children: [(0, B.jsx)(l.Global, {
                            styles: {
                                "#__textLabelMeasure, #__textMeasure": e4({}, w)
                            }
                        }), (0, B.jsxs)(R.Provider, {
                            value: f || {},
                            children: [(0, B.jsx)(o.Dr, e4(e4({
                                onAssetCreate: y,
                                onAssetDelete: x
                            }, n), {}, {
                                onMount: (0, u.v0)(n.onMount, v)
                            })), m && !n.readOnly && (0, B.jsxs)(B.Fragment, {
                                children: [(0, B.jsx)(ek, {}), (0, B.jsx)(eH, {})]
                            }), m && (0, B.jsx)(B.Fragment, {
                                children: (0, B.jsx)(eQ, {})
                            })]
                        })]
                    })
                },
                e6 = r(75054),
                e7 = r(51987),
                te = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 128,
                        r = e.shapes,
                        n = (e.pageState.camera, e.rendererBounds);
                    if (0 !== r.length) {
                        var i = e6.cQ.getCommonBounds(r.map(o.D9.getRotatedBounds));
                        if (i) {
                            var a = o.D9.getCameraZoom(Math.min((n.width - t) / i.width, (n.height - t) / i.height)),
                                c = (n.width - i.width * a) / 2 / a,
                                s = (n.height - i.height * a) / 2 / a;
                            e.setCamera(e7.B.toFixed(e7.B.sub([c, s], [i.minX, i.minY])), a, "zoomed_to_fit")
                        }
                    }
                }
        },
        18575: function(e, t, r) {
            r.d(t, {
                c: function() {
                    return a
                },
                m: function() {
                    return o
                }
            });
            var n = r(35483),
                i = function(e) {
                    return "".concat(e, " !important")
                },
                o = function(e) {
                    return {
                        fontFamily: i(e)
                    }
                },
                a = function(e) {
                    var t = {
                            "[data-shape=image]": {
                                ".tl-inner-div": {}
                            },
                            img: {
                                '&[src^="blob:"]': {
                                    animation: "loading-pulse-animation 1.5s infinite"
                                }
                            }
                        },
                        r = Object.values(n.HQ),
                        o = e ? "dark" : "light";
                    return r.forEach(function(e) {
                        t['[data-color="'.concat(e, '"]')] = {
                            color: i(n.tk.strokes[o][e]),
                            ":not(mask) > [fill], &[fill]": {
                                "&:not([fill=none])": {
                                    fill: i(n.tk.fills[o][e]),
                                    "text, tspan": {
                                        fill: i(n.tk.strokes[o][e])
                                    }
                                }
                            },
                            "[stroke]": {
                                "&:not([stroke=none])": {
                                    stroke: i(n.tk.strokes[o][e])
                                }
                            }
                        }
                    }), t
                }
        },
        59864: function(e, t, r) {
            r.d(t, {
                O7: function() {
                    return a
                },
                S9: function() {
                    return s
                },
                kO: function() {
                    return c
                },
                mD: function() {
                    return l
                },
                td: function() {
                    return u
                }
            });
            var n = r(56974),
                i = r.n(n),
                o = r(13326);

            function a(e) {
                return e === o.Z.pdf
            }

            function c(e, t) {
                var r, n;
                return a(e) || (r = e) === o.Z.doc || r === o.Z.docx || "ppt" === (n = (n = t).toLocaleLowerCase()) || "pptx" === n
            }

            function s(e) {
                return "otf" === (e = e.toLocaleLowerCase()) || "ttf" === e
            }
            var u = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    if (!+e) return "0 Bytes";
                    var r = t < 0 ? 0 : t,
                        n = Math.floor(Math.log(e) / Math.log(1024));
                    return "".concat(parseFloat((e / Math.pow(1024, n)).toFixed(r)), " ").concat(["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][n])
                },
                l = function(e) {
                    return e.name && i()(e.name.split(".")) || ""
                }
        },
        31975: function(e, t, r) {
            r.d(t, {
                OI: function() {
                    return i
                },
                uO: function() {
                    return n
                }
            });
            var n = function(e, t) {
                    var r = 0;
                    return new Promise(function(n, i) {
                        ! function o() {
                            var a = setTimeout(function() {
                                ++r < t.maxRetries ? o() : i("timed out")
                            }, t.timeout);
                            e().then(n).catch(i).finally(function() {
                                clearTimeout(a)
                            })
                        }()
                    })
                },
                i = function(e, t) {
                    return Promise.race([new Promise(function(e, r) {
                        setTimeout(function() {
                            r(Error("timed out"))
                        }, t)
                    }), e])
                }
        }
    }
]);
//# sourceMappingURL=9849-bffe03a7dc52b471.js.map