(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3930], {
        93322: function(n, e, t) {
            "use strict";
            t.d(e, {
                A: function() {
                    return o
                },
                i: function() {
                    return i
                }
            });
            var o = function(n) {
                    return n.endsWith("gmail.com") || n.endsWith("hotmail.com") || n.endsWith(".edu")
                },
                i = "gamma_logged_in"
        },
        69901: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                EditorPage: function() {
                    return T
                }
            });
            var o = t(5632),
                i = t(2784),
                r = t(89962),
                u = t(46358),
                c = t(42879),
                d = t(60521),
                a = t(62517),
                s = t(30174),
                f = t(44545),
                l = t(68197),
                E = t(9734),
                _ = t(34860),
                C = t(52322),
                T = function() {
                    var n = (0, o.useRouter)().replace,
                        e = (0, _.gF)(),
                        t = (0, u.CG)(l.ke),
                        r = (0, u.CG)(l.uB),
                        T = (0, f.o)();
                    return ((0, i.useEffect)(function() {
                        t && r && T === a.Z.COLLABORATIVE && n((0, c.as)(r, t))
                    }, [t, r, T, n]), e) ? (0, C.jsx)(s.m, {
                        children: (0, E.s2)() ? (0, C.jsx)(d.nz, {
                            docEditorType: T
                        }) : (0, C.jsx)(d.Ur, {
                            docEditorType: T
                        })
                    }) : null
                };
            e.default = (0, r.oO)(T)
        },
        44545: function(n, e, t) {
            "use strict";
            t.d(e, {
                o: function() {
                    return E
                }
            });
            var o = t(21805),
                i = t(2784),
                r = t(37914),
                u = t(21010),
                c = t(98875),
                d = t(46358),
                a = t(3915),
                s = t(93322),
                f = t(62517),
                l = t(68197),
                E = function(n) {
                    var e = (0, d.CG)(l.yx),
                        t = (0, i.useMemo)(function() {
                            return !!o.Z.get(s.i)
                        }, []),
                        E = (0, a.we)(),
                        _ = (0, d.TL)(),
                        C = (0, d.CG)(l.fh),
                        T = (0, c.ye)("docEditorForcePublicStatic"),
                        v = (0, i.useMemo)(function() {
                            var n, o, i = new URLSearchParams(window.location.search);
                            if (i.get("following_id") && i.get("follow_on_start")) return !0;
                            if (!e) return t;
                            var c = null === (n = e.accessLinks) || void 0 === n ? void 0 : null === (o = n.find(function(n) {
                                return n.token === r.v.SHARE_TOKEN
                            })) || void 0 === o ? void 0 : o.permission;
                            return c && [u.y3$.Edit, u.y3$.Comment].includes(c) || E.can(u.y3$.Comment, e) || E.can(u.y3$.Edit, e) || E.can(u.y3$.Manage, e)
                        }, [E, e, t]);
                    (0, i.useEffect)(function() {
                        var e = T ? f.Z.PUBLIC_STATIC : n || (v ? f.Z.COLLABORATIVE : f.Z.PUBLIC_STATIC);
                        _((0, l.R8)({
                            docEditorType: e
                        }))
                    }, [_, n, T, v]);
                    var m = n || (v ? f.Z.COLLABORATIVE : f.Z.PUBLIC_STATIC);
                    return console.debug("useSetDocEditorType", {
                        canUseCollaborativeEditor: v,
                        docEditorType: C,
                        fallbackEditor: m,
                        override: n
                    }), C || m
                }
        },
        12589: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/docs/[docId]", function() {
                return t(69901)
            }])
        }
    },
    function(n) {
        n.O(0, [9025, 5333, 4424, 3016, 8707, 146, 3661, 116, 507, 9497, 1517, 380, 9097, 2274, 8022, 3167, 8503, 9849, 1819, 9962, 1153, 4400, 417, 9836, 7581, 4188, 8923, 3275, 9774, 2888, 179], function() {
            return n(n.s = 12589)
        }), _N_E = n.O()
    }
]);
//# sourceMappingURL=[docId]-dcd776bed2fde46c.js.map