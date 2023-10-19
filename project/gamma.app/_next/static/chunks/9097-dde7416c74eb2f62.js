(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9097], {
        93158: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    PrefetchKind: function() {
                        return o
                    },
                    ACTION_REFRESH: function() {
                        return n
                    },
                    ACTION_NAVIGATE: function() {
                        return l
                    },
                    ACTION_RESTORE: function() {
                        return u
                    },
                    ACTION_SERVER_PATCH: function() {
                        return f
                    },
                    ACTION_PREFETCH: function() {
                        return a
                    },
                    ACTION_FAST_REFRESH: function() {
                        return c
                    },
                    ACTION_SERVER_ACTION: function() {
                        return i
                    }
                });
            var r, o, n = "refresh",
                l = "navigate",
                u = "restore",
                f = "server-patch",
                a = "prefetch",
                c = "fast-refresh",
                i = "server-action";
            (r = o || (o = {})).AUTO = "auto", r.FULL = "full", r.TEMPORARY = "temporary", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        76809: function(e, t, r) {
            "use strict";

            function o(e, t, r, o) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return o
                }
            }), r(55677), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1825: function(e, t, r) {
            "use strict";
            var o = r(63782),
                n = r(44429),
                l = r(7510),
                u = ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"];

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, o)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach(function(t) {
                        o(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return g
                }
            });
            var c = r(43219)._(r(2784)),
                i = r(27168),
                s = r(67123),
                p = r(66731),
                d = r(64342),
                v = r(94871),
                h = r(5774),
                y = r(74154),
                b = r(79544),
                O = r(76809),
                _ = r(36883),
                P = r(93158),
                E = new Set;

            function j(e, t, r, o, n, l) {
                if (l || (0, s.isLocalURL)(t)) {
                    if (!o.bypassPrefetchedCheck) {
                        var u = t + "%" + r + "%" + (void 0 !== o.locale ? o.locale : "locale" in e ? e.locale : void 0);
                        if (E.has(u)) return;
                        E.add(u)
                    }
                    Promise.resolve(l ? e.prefetch(t, n) : e.prefetch(t, r, o)).catch(function(e) {})
                }
            }

            function C(e) {
                return "string" == typeof e ? e : (0, p.formatUrl)(e)
            }
            var g = c.default.forwardRef(function(e, t) {
                var r, o, f = e.href,
                    p = e.as,
                    E = e.children,
                    g = e.prefetch,
                    T = void 0 === g ? null : g,
                    m = e.passHref,
                    R = e.replace,
                    A = e.shallow,
                    k = e.scroll,
                    M = e.locale,
                    S = e.onClick,
                    w = e.onMouseEnter,
                    L = e.onTouchStart,
                    N = e.legacyBehavior,
                    I = void 0 !== N && N,
                    x = l(e, u);
                r = E, I && ("string" == typeof r || "number" == typeof r) && (r = c.default.createElement("a", null, r));
                var U = c.default.useContext(h.RouterContext),
                    D = c.default.useContext(y.AppRouterContext),
                    H = null != U ? U : D,
                    K = !U,
                    F = !1 !== T,
                    B = null === T ? P.PrefetchKind.AUTO : P.PrefetchKind.FULL,
                    V = c.default.useMemo(function() {
                        if (!U) {
                            var e = C(f);
                            return {
                                href: e,
                                as: p ? C(p) : e
                            }
                        }
                        var t = n((0, i.resolveHref)(U, f, !0), 2),
                            r = t[0],
                            o = t[1];
                        return {
                            href: r,
                            as: p ? (0, i.resolveHref)(U, p) : o || r
                        }
                    }, [U, f, p]),
                    G = V.href,
                    Y = V.as,
                    q = c.default.useRef(G),
                    z = c.default.useRef(Y);
                I && (o = c.default.Children.only(r));
                var J = I ? o && "object" == typeof o && o.ref : t,
                    Q = n((0, b.useIntersection)({
                        rootMargin: "200px"
                    }), 3),
                    W = Q[0],
                    X = Q[1],
                    Z = Q[2],
                    $ = c.default.useCallback(function(e) {
                        (z.current !== Y || q.current !== G) && (Z(), z.current = Y, q.current = G), W(e), J && ("function" == typeof J ? J(e) : "object" == typeof J && (J.current = e))
                    }, [Y, J, G, Z, W]);
                c.default.useEffect(function() {
                    H && X && F && j(H, G, Y, {
                        locale: M
                    }, {
                        kind: B
                    }, K)
                }, [Y, G, X, M, F, null == U ? void 0 : U.locale, H, K, B]);
                var ee = {
                    ref: $,
                    onClick: function(e) {
                        I || "function" != typeof S || S(e), I && o.props && "function" == typeof o.props.onClick && o.props.onClick(e), H && !e.defaultPrevented && function(e, t, r, o, n, l, u, f, a, i) {
                            if (!("A" === e.currentTarget.nodeName.toUpperCase() && ((p = e.currentTarget.getAttribute("target")) && "_self" !== p || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which || !a && !(0, s.isLocalURL)(r)))) {
                                e.preventDefault();
                                var p, d = function() {
                                    var e = null == u || u;
                                    "beforePopState" in t ? t[n ? "replace" : "push"](r, o, {
                                        shallow: l,
                                        locale: f,
                                        scroll: e
                                    }) : t[n ? "replace" : "push"](o || r, {
                                        forceOptimisticNavigation: !i,
                                        scroll: e
                                    })
                                };
                                a ? c.default.startTransition(d) : d()
                            }
                        }(e, H, G, Y, R, A, k, M, K, F)
                    },
                    onMouseEnter: function(e) {
                        I || "function" != typeof w || w(e), I && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), H && (F || !K) && j(H, G, Y, {
                            locale: M,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: B
                        }, K)
                    },
                    onTouchStart: function(e) {
                        I || "function" != typeof L || L(e), I && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), H && (F || !K) && j(H, G, Y, {
                            locale: M,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: B
                        }, K)
                    }
                };
                if ((0, d.isAbsoluteUrl)(Y)) ee.href = Y;
                else if (!I || m || "a" === o.type && !("href" in o.props)) {
                    var et = void 0 !== M ? M : null == U ? void 0 : U.locale,
                        er = (null == U ? void 0 : U.isLocaleDomain) && (0, O.getDomainLocale)(Y, et, null == U ? void 0 : U.locales, null == U ? void 0 : U.domainLocales);
                    ee.href = er || (0, _.addBasePath)((0, v.addLocale)(Y, et, null == U ? void 0 : U.defaultLocale))
                }
                return I ? c.default.cloneElement(o, ee) : c.default.createElement("a", a(a({}, x), ee), r)
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        39097: function(e, t, r) {
            e.exports = r(1825)
        }
    }
]);
//# sourceMappingURL=9097-dde7416c74eb2f62.js.map