"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4188], {
        8661: function(e, n, i) {
            i.d(n, {
                ET: function() {
                    return t
                },
                LB: function() {
                    return a
                },
                VN: function() {
                    return c
                },
                VY: function() {
                    return r
                },
                WJ: function() {
                    return o
                },
                rj: function() {
                    return s
                }
            });
            var t = "/generate",
                r = "ai-generate",
                o = 2,
                s = 2,
                c = 400,
                a = {
                    DESIGNER__HELLO: 0,
                    USER__OUTPUT_FORMAT_INPUT: 1,
                    DESIGNER__TOPIC: 2,
                    USER__TOPIC_INPUT: 3,
                    DESIGNER__OUTLINE: 4,
                    USER__OUTLINE_INPUT: 5
                }
        },
        64288: function(e, n, i) {
            i.d(n, {
                F3: function() {
                    return m
                },
                c8: function() {
                    return j
                }
            });
            var t = i(68769);
            i(10550), i(70916);
            var r = i(99060),
                o = i(95235),
                s = i(58678),
                c = i(2784),
                a = i(98875),
                l = function(e, n) {
                    var i = (0, s.rN)(),
                        r = i.setIsOpen,
                        o = i.setSteps,
                        a = i.setMeta,
                        l = i.setCurrentStep;
                    return {
                        startTour: (0, c.useCallback)(function(e) {
                            void 0 !== e && l(e), r(!0), a && a(t.X.DOC_EDITOR), o && o(n)
                        }, [l, r, a, o, n])
                    }
                },
                d = i(1368),
                u = i(32333),
                p = i(17477),
                x = i(51823);

            function f(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function h(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? f(Object(i), !0).forEach(function(n) {
                        (0, o.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : f(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var m = function() {
                    var e = (0, a.ye)("aiChat"),
                        n = (0, a.ye)("filmstrip"),
                        i = (0, c.useMemo)(function() {
                            return (0, r.aq)({
                                aiChat: e,
                                filmstrip: n
                            })
                        }, [e, n]),
                        f = (0, u.z$)(),
                        m = l(t.X.DOC_EDITOR, i).startTour,
                        j = (0, s.rN)().setIsOpen;
                    (0, c.useEffect)(function() {
                        "true" === (0, x.SJ)()[t.n] && (0, p.u0)(i[1].selector).then(function() {
                            m(), null == f || f.track(u.AA.DOC_EDITOR_TOUR_STARTED, {
                                source: "queryParam"
                            }), (0, d.lO)({
                                query: h(h({}, (0, x.SJ)()), {}, (0, o.Z)({}, t.n, void 0)),
                                emitChange: !1
                            })
                        })
                    }, [f, m, i]), (0, c.useEffect)(function() {
                        return function() {
                            j(!1)
                        }
                    }, [j])
                },
                j = function() {
                    var e = (0, a.ye)("aiChat"),
                        n = (0, a.ye)("filmstrip"),
                        i = (0, c.useMemo)(function() {
                            return (0, r.aq)({
                                aiChat: e,
                                filmstrip: n
                            })
                        }, [e, n]);
                    return {
                        startTour: l(t.X.DOC_EDITOR, i).startTour
                    }
                }
        },
        11197: function(e, n, i) {
            i.d(n, {
                C: function() {
                    return ea
                }
            });
            var t = i(81333),
                r = i(45029),
                o = i(27037),
                s = i(64256),
                c = i(68921),
                a = i(48079),
                l = i(58975),
                d = i(16686),
                u = i(29106),
                p = i(36178),
                x = i(55452),
                f = i(87254),
                h = i(75944),
                m = i(9088),
                j = i(30893),
                g = i(67887),
                v = i(53738),
                b = i(40771),
                C = i(91930),
                y = i(82904),
                O = i(84103),
                _ = i(95258),
                I = i(49929),
                w = i(55966),
                A = i(2784),
                k = i(43997),
                P = i(23313),
                R = i(98875),
                E = i(64288),
                N = i(21735),
                D = i(20406),
                M = i(28526),
                S = i.n(M),
                T = i(55479),
                G = i(20010),
                U = i(56915),
                z = i(48273),
                L = i(92619),
                Z = i(64827),
                F = i(2167),
                V = i(2046),
                W = i(70287),
                Y = i(80353),
                $ = i(76648),
                q = i(45650),
                K = i(62849),
                B = i(40315),
                H = i(10710),
                J = i(96214),
                X = i(18445),
                Q = i(52322),
                ee = function(e) {
                    var n, i = e.onClose,
                        t = (0, T.p)(),
                        r = (0, H.SE)().user,
                        o = (0, A.useState)(!1),
                        s = o[0],
                        c = o[1],
                        a = (0, H.SE)().setSettings,
                        l = (0, J.l)(),
                        d = (0, A.useMemo)(function() {
                            return l
                        }, []),
                        u = (0, A.useState)(d),
                        p = u[0],
                        f = u[1];
                    (0, X.m)(p);
                    var h = (0, A.useCallback)((0, D.Z)(S().mark(function e() {
                            return S().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c(!0), e.prev = 1, e.next = 4, null == a ? void 0 : a({
                                            set: {
                                                locale: p
                                            }
                                        });
                                    case 4:
                                        t({
                                            title: (0, Q.jsx)(x.cC, {
                                                id: "RRo9kN"
                                            }),
                                            position: "top",
                                            status: "success",
                                            isClosable: !0,
                                            duration: 3e3
                                        }), i(), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), console.error('[StandaloneLocaleModal.onSave] Error updating language for user with id "'.concat(null == r ? void 0 : r.id, '"'), e.t0.message);
                                    case 11:
                                        c(!1);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [1, 8]
                            ])
                        })), [p, i, a, t, null == r ? void 0 : r.id]),
                        m = p !== (null == r ? void 0 : null === (n = r.settings) || void 0 === n ? void 0 : n.locale);
                    return (0, Q.jsx)(w.Wk, {
                        isDark: !1,
                        children: (0, Q.jsxs)(G.u_, {
                            isOpen: !0,
                            onClose: i,
                            children: [(0, Q.jsx)(U.Z, {}), (0, Q.jsxs)(z.h, {
                                children: [(0, Q.jsx)(L.x, {
                                    children: (0, Q.jsx)(x.cC, {
                                        id: "+DEogc"
                                    })
                                }), (0, Q.jsx)(Z.o, {}), (0, Q.jsx)(F.f, {
                                    children: (0, Q.jsxs)(V.NI, {
                                        children: [(0, Q.jsx)(W.l, {
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "M3JKNC"
                                            })
                                        }), (0, Q.jsx)(K.p, {
                                            selectedLocale: B.w$[p],
                                            onLocaleSelect: f
                                        })]
                                    })
                                }), (0, Q.jsx)(Y.m, {
                                    children: m ? (0, Q.jsxs)($.h, {
                                        children: [(0, Q.jsx)(q.z, {
                                            variant: "ghost",
                                            onClick: i,
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "dEgA5A"
                                            })
                                        }), (0, Q.jsx)(q.z, {
                                            variant: "solid",
                                            onClick: h,
                                            isLoading: s,
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "tfDRzk"
                                            })
                                        })]
                                    }) : (0, Q.jsx)(q.z, {
                                        variant: "plain",
                                        onClick: i,
                                        children: (0, Q.jsx)(x.cC, {
                                            id: "yz7wBu"
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                },
                en = i(85422),
                ei = i(85545),
                et = i(32333),
                er = i(32736),
                eo = i(93858),
                es = i(17815),
                ec = i(88963),
                ea = (0, A.memo)(function(e) {
                    var n = e.showShortcuts,
                        i = e.showTourReplay,
                        D = (0, E.c8)().startTour,
                        M = (0, k.I0)(),
                        S = (0, P.$gs)().isConnected,
                        T = (0, R.ye)("intercom"),
                        G = (0, J.l)(),
                        U = (0, h.q)(),
                        z = U.isOpen,
                        L = U.onOpen,
                        Z = U.onClose,
                        F = (0, h.q)({
                            id: "locale-modal"
                        }),
                        V = F.isOpen,
                        W = F.onOpen,
                        Y = F.onClose,
                        $ = (0, eo._)("hasUnreadIntercom", !1),
                        q = (0, t.Z)($, 2),
                        K = q[0],
                        H = q[1],
                        X = (0, et.z$)(),
                        ea = window.Intercom,
                        el = (0, A.useCallback)(function() {
                            (0, en.pU)(), H(!1), M((0, ei.YZ)({
                                isOpen: !0
                            }))
                        }, [M, H]),
                        ed = (0, er.Yy)();
                    return (0, A.useEffect)(function() {
                        if (ea) {
                            ea("onHide", function() {
                                M((0, ei.YZ)({
                                    isOpen: !1
                                }))
                            });
                            var e = setInterval(function() {
                                document.querySelector("iframe.intercom-borderless-frame") && H(!0)
                            }, 1e3);
                            return function() {
                                ea("hide"), clearInterval(e)
                            }
                        }
                    }, [M, ea, H]), (0, Q.jsx)(es.H, {
                        children: (0, Q.jsxs)(w.Wk, {
                            isDark: ed,
                            children: [(0, Q.jsxs)(m.v, {
                                children: [(0, Q.jsx)(j.j, {
                                    "data-guider-highlight": "default-help-widget-activator",
                                    as: g.h,
                                    isRound: !0,
                                    position: "relative",
                                    size: "md",
                                    "aria-label": f.ag._({
                                        id: "c3XJ18"
                                    }),
                                    icon: K ? (0, Q.jsxs)(Q.Fragment, {
                                        children: [(0, Q.jsx)(v.Cd, {
                                            position: "absolute",
                                            size: 2.5,
                                            bg: "red.400",
                                            top: 0,
                                            right: 0
                                        }), (0, Q.jsx)(I.G, {
                                            icon: c.qm,
                                            className: "fa-beat-fade"
                                        })]
                                    }) : (0, Q.jsx)(I.G, {
                                        icon: p.Ps
                                    })
                                }), (0, Q.jsxs)(b.q, {
                                    children: [(0, Q.jsxs)(C.k, {
                                        children: [(void 0 === n || n) && (0, Q.jsx)(y.s, {
                                            onClick: L,
                                            icon: (0, Q.jsx)(I.G, {
                                                fixedWidth: !0,
                                                icon: u.UF
                                            }),
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "CTqTgr"
                                            })
                                        }), (0, Q.jsx)(y.s, {
                                            as: O.r,
                                            _hover: {
                                                textDecoration: "none",
                                                shadow: "none"
                                            },
                                            href: "https://gamma.app/public/Change-Log-awopg3inl2eo3b3?mode=doc#card-7l4mxahmsc10wrp",
                                            target: "_blank",
                                            icon: (0, Q.jsx)(I.G, {
                                                fixedWidth: !0,
                                                icon: d.Jy
                                            }),
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "3ePd3I"
                                            })
                                        }), (0, Q.jsx)(y.s, {
                                            as: O.r,
                                            _hover: {
                                                textDecoration: "none",
                                                shadow: "none"
                                            },
                                            href: "https://help.gamma.app",
                                            target: "_blank",
                                            icon: (0, Q.jsx)(I.G, {
                                                fixedWidth: !0,
                                                icon: l.MY
                                            }),
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "/lDBHm"
                                            })
                                        }), void 0 !== i && i && (0, Q.jsx)(y.s, {
                                            as: O.r,
                                            _hover: {
                                                textDecoration: "none",
                                                shadow: "none"
                                            },
                                            onClick: function() {
                                                null == X || X.track(et.AA.DOC_EDITOR_TOUR_STARTED, {
                                                    source: "help-widget"
                                                }), D(0)
                                            },
                                            icon: (0, Q.jsx)(I.G, {
                                                fixedWidth: !0,
                                                icon: a.Wx
                                            }),
                                            "data-guider-highlight": "replay-intro-tour",
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "/cFTPs"
                                            })
                                        })]
                                    }), (0, Q.jsx)(_.R, {}), (0, Q.jsxs)(C.k, {
                                        children: [T && S ? (0, Q.jsx)(y.s, {
                                            icon: K ? (0, Q.jsxs)(v.xu, {
                                                position: "relative",
                                                children: [(0, Q.jsx)(v.Cd, {
                                                    position: "absolute",
                                                    size: 1.5,
                                                    bg: "red.400",
                                                    top: 0,
                                                    right: -1
                                                }), (0, Q.jsx)(I.G, {
                                                    fixedWidth: !0,
                                                    icon: c.qm,
                                                    className: "fa-beat-fade"
                                                })]
                                            }) : (0, Q.jsx)(I.G, {
                                                fixedWidth: !0,
                                                icon: s.RR
                                            }),
                                            onClick: el,
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "Bhgd0l"
                                            })
                                        }) : (0, Q.jsx)(y.s, {
                                            icon: (0, Q.jsx)(I.G, {
                                                fixedWidth: !0,
                                                icon: o.FU
                                            }),
                                            as: O.r,
                                            _hover: {
                                                textDecoration: "none",
                                                shadow: "none"
                                            },
                                            href: "mailto:".concat(N.p),
                                            children: (0, Q.jsx)(x.cC, {
                                                id: "A0C9La"
                                            })
                                        }), (0, Q.jsx)(_.R, {}), (0, Q.jsx)(y.s, {
                                            icon: (0, Q.jsx)(I.G, {
                                                fixedWidth: !0,
                                                icon: r.Uv
                                            }),
                                            onClick: W,
                                            children: B.w$[G].displayName
                                        })]
                                    })]
                                }), (0, Q.jsx)(ec.J, {
                                    isOpen: z,
                                    onClose: Z
                                })]
                            }), V && (0, Q.jsx)(ee, {
                                onClose: Y
                            })]
                        })
                    })
                });
            ea.displayName = "DefaultHelpWidget"
        },
        17815: function(e, n, i) {
            i.d(n, {
                H: function() {
                    return x
                }
            });
            var t = i(95235),
                r = i(82269),
                o = i(53738),
                s = i(2784),
                c = i(9734),
                a = i(8812),
                l = i(52322),
                d = ["children"];

            function u(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function p(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? u(Object(i), !0).forEach(function(n) {
                        (0, t.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var x = (0, s.memo)(function(e) {
                var n = e.children,
                    i = (0, r.Z)(e, d);
                return (0, c.s2)() ? null : (0, l.jsx)(o.xu, p(p({
                    position: "fixed",
                    bottom: a.ux,
                    right: a.PU,
                    zIndex: "overlay",
                    "data-print-hidden": !0
                }, i), {}, {
                    children: n
                }))
            });
            x.displayName = "HelpWidgetWrapper"
        },
        88963: function(e, n, i) {
            i.d(n, {
                J: function() {
                    return Z
                },
                A: function() {
                    return L
                }
            });
            var t = i(95235),
                r = i(13045),
                o = i(60239),
                s = i(29106),
                c = i(55452),
                a = i(77525),
                l = i(74642),
                d = i(35319),
                u = i(36258),
                p = i(27912),
                x = i(96530),
                f = i(54728),
                h = i(46367),
                m = i(53738),
                j = i(91333),
                g = i(23742),
                v = i(8283),
                b = i(50390),
                C = i(70091),
                y = i(83897),
                O = i(89190),
                _ = i(73848),
                I = i(24798),
                w = i(84520),
                A = i(95085),
                k = i(49929),
                P = i(55966),
                R = i(93148),
                E = i(91012);
            i(2784);
            var N = i(52322),
                D = function(e) {
                    var n = e.prefix,
                        i = e.support,
                        t = e.suffix;
                    return (0, N.jsxs)(E.x, {
                        children: [void 0 === n ? "" : n, (0, N.jsx)(E.x, {
                            color: "gray.400",
                            as: "span",
                            children: void 0 === i ? "" : i
                        }), void 0 === t ? "" : t]
                    })
                },
                M = function() {
                    return [{
                        description: (0, N.jsx)(c.cC, {
                            id: "8aebws"
                        }),
                        shortcut: "/"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "JZEY8K"
                        }),
                        shortcut: "Mod+Shift+O"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "3Lpas4"
                        }),
                        shortcut: "***"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "e+t/xM"
                        }),
                        shortcut: "Mod+P"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "MF+p5R"
                        }),
                        shortcut: "Mod+Enter"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "NiZZRh"
                        }),
                        shortcut: "Mod+K"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "4J90L0"
                        }),
                        shortcut: (0, N.jsx)(D, {
                            prefix: "@",
                            support: "name"
                        })
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "1fOM5v"
                        }),
                        shortcut: (0, N.jsx)(D, {
                            prefix: "@",
                            support: "cardTitle"
                        })
                    }]
                },
                S = function() {
                    return [{
                        description: (0, N.jsx)(c.cC, {
                            id: "MHrjPM"
                        }),
                        shortcut: "/title"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "lXKZGw"
                        }),
                        shortcut: ["#", "Mod+Alt+1"]
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "El7NbA"
                        }),
                        shortcut: ["##", "Mod+Alt+2"]
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "SFN6dN"
                        }),
                        shortcut: ["###", "Mod+Alt+3"]
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "nJeKmw"
                        }),
                        shortcut: ["####", "Mod+Alt+4"]
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "yzF66j"
                        }),
                        shortcut: "Mod+K"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "eFpJYL"
                        }),
                        shortcut: (0, N.jsx)(D, {
                            prefix: ":",
                            support: "heart_eyes",
                            suffix: ":"
                        })
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "KmydK6"
                        }),
                        shortcut: [(0, N.jsx)(D, {
                            prefix: "*",
                            support: "bold",
                            suffix: "*"
                        }, "0"), "Mod+B"]
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "pzutoc"
                        }),
                        shortcut: [(0, N.jsx)(D, {
                            prefix: "_",
                            support: "italic",
                            suffix: "_"
                        }, "0"), "Mod+I"]
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "YyXtnN"
                        }),
                        shortcut: "Mod+U"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "WhOsNE"
                        }),
                        shortcut: "Mod+Shift+X"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "VjjKVj"
                        }),
                        shortcut: "Mod+Shift+L"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "95ckMP"
                        }),
                        shortcut: "Mod+Shift+E"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "vTKw81"
                        }),
                        shortcut: "Mod+Shift+R"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "Gc5apx"
                        }),
                        shortcut: [(0, N.jsx)(D, {
                            prefix: "`",
                            support: "code",
                            suffix: "`"
                        }, "0"), "Mod+E"]
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "sFkOYO"
                        }),
                        shortcut: [(0, N.jsx)(D, {
                            prefix: "$",
                            support: "x^2",
                            suffix: "$ "
                        }, "0"), "$$ "]
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "eKJQi9"
                        }),
                        shortcut: "Mod+Shift+H"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "M3G9ZD"
                        }),
                        shortcut: ["1. ", "Mod+/", "Mod+Shift+7"]
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "ynb7Kh"
                        }),
                        shortcut: ["- ", "Mod+.", "Mod+Shift+8"]
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "rCIbrq"
                        }),
                        shortcut: ["[] ", "Mod+,", "Mod+Shift+9"]
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "dOxPd4"
                        }),
                        shortcut: [(0, N.jsx)(D, {
                            prefix: "^",
                            support: "note",
                            suffix: "^"
                        }, "0"), "Mod+Alt+F"]
                    }]
                },
                T = function() {
                    return [{
                        description: (0, N.jsx)(c.cC, {
                            id: "9xCxY6"
                        }),
                        shortcut: ["←", "→"]
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "6r2KAP"
                        }),
                        shortcut: ["↑", "↓"]
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "rEj/lx"
                        }),
                        shortcut: "Enter"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "IkakN2"
                        }),
                        shortcut: "Esc"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "dQU33K"
                        }),
                        shortcut: "Mod+Shift+O"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "CgmvBu"
                        }),
                        shortcut: "S"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "K0Oq/D"
                        }),
                        shortcut: "R"
                    }, {
                        description: (0, N.jsx)(c.cC, {
                            id: "CvH5f/"
                        }),
                        shortcut: (0, N.jsx)(m.xu, {
                            p: 0,
                            children: (0, N.jsxs)("svg", {
                                className: "coachbarCursor",
                                height: "1em",
                                viewBox: "0 0 298 380",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, N.jsx)("path", {
                                    className: "cursorBlinkEffect",
                                    d: "M151.8 0.60199C145.612 0.60199 140.601 5.61759 140.601 11.801V79C140.601 85.1875 145.617 90.199 151.8 90.199C157.987 90.199 162.999 85.1834 162.999 79V11.801C162.999 5.61349 157.983 0.60199 151.8 0.60199ZM52.749 41.551C49.8818 41.551 47.0615 42.6877 44.874 44.8752C40.5029 49.2502 40.5029 56.4262 44.874 60.8012L84.425 100.352C88.8 104.727 95.976 104.723 100.351 100.352C104.726 95.9772 104.722 88.8012 100.351 84.4262L60.8 44.8752C58.6125 42.6877 55.6162 41.551 52.749 41.551ZM250.849 41.551C247.982 41.551 244.986 42.6877 242.798 44.8752L203.247 84.4262C198.876 88.8012 198.872 95.9772 203.247 100.352C207.622 104.723 214.798 104.727 219.173 100.352L258.724 60.8012C263.095 56.4262 263.095 49.2502 258.724 44.8752C256.537 42.6877 253.716 41.551 250.849 41.551ZM11.789 140.602C5.6015 140.602 0.589996 145.618 0.589996 151.801C0.589996 157.988 5.6056 163 11.789 163H78.988C85.1755 163 90.187 157.984 90.187 151.801C90.187 145.613 85.1714 140.602 78.988 140.602H11.789ZM92.465 199.926C89.5978 199.926 86.6017 201.063 84.4142 203.25L44.8632 242.801C40.4921 247.176 40.4921 254.352 44.8632 258.727C49.2382 263.102 56.4142 263.102 60.7892 258.727L100.34 219.176C104.711 214.801 104.715 207.625 100.34 203.25C98.1527 201.063 95.3322 199.926 92.465 199.926Z",
                                    fill: "black"
                                }), (0, N.jsx)("path", {
                                    d: "M289.317 291.063H237.601L264.819 357.2C266.715 361.785 264.548 366.926 260.215 368.872L236.247 379.292C231.779 381.237 226.768 379.014 224.873 374.568L199.009 311.766L156.761 355.116C151.13 360.892 142 356.439 142 348.864V139.899C142 131.923 151.711 128.035 156.76 133.647L295.411 275.918C301.003 281.355 296.877 291.063 289.317 291.063V291.063Z",
                                    fill: "black"
                                })]
                            })
                        }, "cursor")
                    }]
                };

            function G(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function U(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? G(Object(i), !0).forEach(function(n) {
                        (0, t.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : G(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var z = {
                    borderColor: "gray.100",
                    py: 2,
                    px: 2
                },
                L = function(e) {
                    var n = e.list;
                    return (0, N.jsx)(a.x, {
                        w: "100%",
                        children: (0, N.jsx)(l.i, {
                            variant: "simple",
                            children: (0, N.jsx)(d.p, {
                                children: n.map(function(e, n) {
                                    var i = e.shortcut,
                                        t = e.description;
                                    return (0, N.jsxs)(u.Tr, {
                                        children: [(0, N.jsx)(p.Td, U(U({
                                            w: "60%"
                                        }, z), {}, {
                                            children: t
                                        })), (0, N.jsx)(p.Td, U(U({
                                            w: "40%"
                                        }, z), {}, {
                                            children: Array.isArray(i) ? i.map(function(e, n) {
                                                return (0, N.jsx)(x.T, {
                                                    display: "inline-block",
                                                    px: 2,
                                                    py: 1,
                                                    mr: 1,
                                                    children: "string" == typeof e ? (0, P.cE)(e) : e
                                                }, n)
                                            }) : "string" == typeof i ? (0, N.jsx)(x.T, {
                                                display: "inline-block",
                                                px: 2,
                                                py: 1,
                                                children: (0, P.cE)(i)
                                            }) : (0, N.jsx)(x.T, {
                                                display: "inline-block",
                                                px: 2,
                                                py: 1,
                                                children: i
                                            })
                                        }))]
                                    }, n)
                                })
                            })
                        })
                    })
                },
                Z = function(e) {
                    var n = e.isOpen,
                        i = e.onClose,
                        t = (0, R.A)(S),
                        a = (0, R.A)(T),
                        l = (0, R.A)(M);
                    return (0, N.jsxs)(f.J, {
                        returnFocusOnClose: !1,
                        closeOnBlur: !1,
                        placement: "top",
                        isOpen: n,
                        onClose: i,
                        modifiers: [{
                            name: "computeStyles",
                            options: {
                                gpuAcceleration: !1
                            }
                        }],
                        children: [(0, N.jsx)(h.t, {
                            children: (0, N.jsx)(m.xu, {
                                position: "fixed",
                                bottom: 0,
                                right: 0
                            })
                        }), (0, N.jsxs)(j.y, {
                            zIndex: "menu",
                            h: "80vh",
                            w: "400px",
                            flex: 1,
                            position: "relative",
                            children: [(0, N.jsxs)(g.Y, {
                                border: "0 none",
                                mb: 2,
                                position: "sticky",
                                bgColor: "white",
                                children: [(0, N.jsxs)(v.U, {
                                    spacing: 2,
                                    children: [(0, N.jsx)(k.G, {
                                        icon: s.UF
                                    }), (0, N.jsx)(b.X, {
                                        size: "md",
                                        children: (0, N.jsx)(c.cC, {
                                            id: "CTqTgr"
                                        })
                                    })]
                                }), (0, N.jsx)(C.u, {})]
                            }), (0, N.jsx)(y.b, {
                                overflowY: "auto",
                                children: (0, N.jsxs)(O.m, {
                                    variant: "soft-rounded",
                                    size: "sm",
                                    isFitted: !0,
                                    children: [(0, N.jsxs)(_.t, {
                                        mb: 6,
                                        children: [(0, N.jsxs)(I.O, {
                                            children: [(0, N.jsx)(m.xu, {
                                                mr: 2,
                                                children: (0, N.jsx)(k.G, {
                                                    icon: o.Tz
                                                })
                                            }), (0, N.jsx)(c.cC, {
                                                id: "vVRhxh"
                                            })]
                                        }), (0, N.jsxs)(I.O, {
                                            children: [(0, N.jsx)(m.xu, {
                                                mr: 2,
                                                children: (0, N.jsx)(k.G, {
                                                    icon: r.r0
                                                })
                                            }), (0, N.jsx)(c.cC, {
                                                id: "UodEcE"
                                            })]
                                        })]
                                    }), (0, N.jsxs)(w.n, {
                                        children: [(0, N.jsxs)(A.x, {
                                            p: 0,
                                            pb: 1,
                                            mt: 4,
                                            children: [(0, N.jsx)(L, {
                                                list: l
                                            }), (0, N.jsx)(P.NZ, {
                                                pt: 4,
                                                pb: 4,
                                                children: (0, N.jsx)(c.cC, {
                                                    id: "Bb47jg"
                                                })
                                            }), (0, N.jsx)(L, {
                                                list: t
                                            })]
                                        }), (0, N.jsx)(A.x, {
                                            p: 0,
                                            pb: 1,
                                            mt: 4,
                                            children: (0, N.jsx)(L, {
                                                list: a
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                }
        },
        8812: function(e, n, i) {
            i.d(n, {
                PU: function() {
                    return t
                },
                Ro: function() {
                    return o
                },
                ux: function() {
                    return r
                }
            });
            var t = 4,
                r = 4,
                o = {
                    mr: 4,
                    width: "auto",
                    outline: "0",
                    shadow: "lg",
                    _focus: {
                        outline: "none"
                    }
                }
        },
        62849: function(e, n, i) {
            i.d(n, {
                p: function() {
                    return v
                }
            });
            var t = i(26673),
                r = i(11919),
                o = i(9088),
                s = i(30893),
                c = i(45650),
                a = i(40771),
                l = i(63849),
                d = i(2575),
                u = i(91012),
                p = i(93319),
                x = i(4036),
                f = i(49929),
                h = i(55452),
                m = i(98875),
                j = i(40315),
                g = i(52322),
                v = function(e) {
                    var n = e.selectedLocale,
                        i = e.onLocaleSelect,
                        v = (0, m.ye)("i18nEnabled");
                    return (0, h.mV)(), (0, g.jsx)(r.k, {
                        direction: "column",
                        children: (0, g.jsxs)(o.v, {
                            matchWidth: !0,
                            children: [(0, g.jsx)(s.j, {
                                as: c.z,
                                rightIcon: (0, g.jsx)(f.G, {
                                    size: "xs",
                                    icon: t.pt
                                }),
                                minW: "150px",
                                textAlign: "left",
                                w: "100%",
                                children: n.displayName
                            }), (0, g.jsx)(a.q, {
                                minWidth: "240px",
                                maxH: "290px",
                                overflowY: "auto",
                                overflowX: "hidden",
                                children: (0, g.jsx)(l._, {
                                    value: n.key,
                                    type: "radio",
                                    onChange: function(e) {
                                        i(e)
                                    },
                                    children: (0, j.DD)(v).map(function(e) {
                                        var n = !v && "private_beta" === j.kf[e.key],
                                            i = !n && "public_beta" === j.kf[e.key];
                                        return (0, g.jsx)(d.i, {
                                            value: e.key,
                                            isDisabled: n,
                                            children: (0, g.jsxs)(r.k, {
                                                flex: 1,
                                                alignItems: "center",
                                                children: [(0, g.jsxs)(r.k, {
                                                    direction: "column",
                                                    children: [(0, g.jsx)(u.x, {
                                                        children: e.displayName
                                                    }), (0, g.jsx)(u.x, {
                                                        fontSize: "12px",
                                                        color: "gray.500",
                                                        children: e.displayNameLocalized()
                                                    })]
                                                }), " ", (0, g.jsx)(p.L, {}), n ? (0, g.jsx)(x.C, {
                                                    ml: 2,
                                                    fontSize: "0.75em",
                                                    colorScheme: "blue",
                                                    children: (0, g.jsx)(h.cC, {
                                                        id: "VZeG/A"
                                                    })
                                                }) : i ? (0, g.jsx)(x.C, {
                                                    ml: 2,
                                                    fontSize: "0.75em",
                                                    colorScheme: "green",
                                                    children: (0, g.jsx)(h.cC, {
                                                        id: "YBt9YP"
                                                    })
                                                }) : null]
                                            })
                                        }, e.key)
                                    })
                                })
                            })]
                        })
                    })
                }
        },
        96214: function(e, n, i) {
            i.d(n, {
                l: function() {
                    return o
                }
            });
            var t = i(46358),
                r = i(66737),
                o = function() {
                    return (0, t.CG)(r.G5)
                }
        },
        18445: function(e, n, i) {
            i.d(n, {
                m: function() {
                    return s
                }
            });
            var t = i(2784),
                r = i(46358),
                o = i(66737),
                s = function(e) {
                    var n = (0, r.TL)();
                    (0, t.useEffect)(function() {
                        n((0, o.ZT)({
                            locale: e || null
                        }))
                    }, [e]), (0, t.useEffect)(function() {
                        return function() {
                            n((0, o.ZT)({
                                locale: null
                            }))
                        }
                    }, [])
                }
        },
        86379: function(e, n, i) {
            i.d(n, {
                C: function() {
                    return h
                }
            });
            var t = i(55452),
                r = i(20010),
                o = i(56915),
                s = i(48273),
                c = i(92619),
                a = i(64827),
                l = i(2167),
                d = i(91012),
                u = i(80353),
                p = i(71354),
                x = i(45650),
                f = i(52322),
                h = function(e) {
                    var n = e.invitationCount,
                        i = e.isOpen,
                        h = e.onClose,
                        m = e.onSendInvitationsClick,
                        j = e.onDiscardClick;
                    return i ? (0, f.jsxs)(r.u_, {
                        returnFocusOnClose: !1,
                        onClose: h,
                        closeOnOverlayClick: !0,
                        isOpen: !0,
                        isCentered: !0,
                        children: [(0, f.jsx)(o.Z, {}), (0, f.jsxs)(s.h, {
                            children: [(0, f.jsx)(c.x, {
                                children: (0, f.jsx)(t.cC, {
                                    id: "tW/kB6",
                                    values: {
                                        invitationCount: n
                                    }
                                })
                            }), (0, f.jsx)(a.o, {}), (0, f.jsx)(l.f, {
                                children: (0, f.jsx)(d.x, {
                                    children: (0, f.jsx)(t.cC, {
                                        id: "qxNK2k",
                                        values: {
                                            invitationCount: n
                                        }
                                    })
                                })
                            }), (0, f.jsx)(u.m, {
                                children: (0, f.jsxs)(p.K, {
                                    spacing: 2,
                                    direction: "row",
                                    align: "center",
                                    children: [(0, f.jsx)(x.z, {
                                        onClick: j,
                                        children: (0, f.jsx)(t.cC, {
                                            id: "bzSI52"
                                        })
                                    }), (0, f.jsx)(x.z, {
                                        variant: "solid",
                                        onClick: m,
                                        children: (0, f.jsx)(t.cC, {
                                            id: "6dWGPZ",
                                            values: {
                                                invitationCount: n
                                            }
                                        })
                                    })]
                                })
                            })]
                        })]
                    }) : null
                }
        },
        52596: function(e, n, i) {
            i.d(n, {
                V: function() {
                    return h
                }
            });
            var t = i(55452),
                r = i(71354),
                o = i(8283),
                s = i(91012),
                c = i(4036),
                a = i(93319),
                l = i(71193),
                d = i(91354),
                u = i(75085),
                p = i(51331),
                x = i(82483),
                f = i(52322),
                h = function(e) {
                    var n = e.onClose,
                        i = e.onOpen,
                        h = e.segmentEvent,
                        m = e.doc,
                        j = e.label,
                        g = (0, d.y)("upsellUXEnabled_Pro"),
                        v = (0, p.dU)(null == m ? void 0 : m.organization),
                        b = (0, x.zc)().openUpsellModal;
                    return !1 === v && g ? (0, f.jsxs)(r.K, {
                        my: 4,
                        borderTop: "1px solid var(--chakra-colors-gray-100)",
                        w: "100%",
                        children: [(0, f.jsxs)(o.U, {
                            mt: 4,
                            children: [(0, f.jsxs)(o.U, {
                                children: [(0, f.jsx)(s.x, {
                                    children: j || (0, f.jsx)(t.cC, {
                                        id: "alnKae",
                                        values: {
                                            GAMMA_PROPER_NOUN: u.N6
                                        }
                                    })
                                }), (0, f.jsx)(c.C, {
                                    colorScheme: "trueblue",
                                    variant: "solid",
                                    children: u.k3
                                })]
                            }), (0, f.jsx)(a.L, {}), (0, f.jsx)(l.r, {
                                onClickCapture: function(e) {
                                    e.preventDefault(), b({
                                        onOpenCallback: n,
                                        onCloseCallback: i,
                                        segmentEvent: h
                                    })
                                },
                                checked: !1
                            })]
                        }), (0, f.jsx)(s.x, {
                            fontSize: "xs",
                            color: "gray.600",
                            children: (0, f.jsx)(t.cC, {
                                id: "/BIHRF",
                                values: {
                                    GAMMA_PROPER_NOUN: u.N6
                                }
                            })
                        })]
                    }) : null
                }
        },
        15241: function(e, n, i) {
            i.d(n, {
                L: function() {
                    return v
                }
            });
            var t = i(95235),
                r = i(89177),
                o = i(27037),
                s = i(55452),
                c = i(11919),
                a = i(13061),
                l = i(8283),
                d = i(12221),
                u = i(91012),
                p = i(53738),
                x = i(49929),
                f = i(55966),
                h = i(7985);
            i(16092);
            var m = i(52322);

            function j(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function g(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? j(Object(i), !0).forEach(function(n) {
                        (0, t.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : j(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var v = function(e) {
                var n = e.selectedCollaborator,
                    i = e.idx,
                    t = e.handleRemoveClick,
                    j = n && (0, h.G)((null == n ? void 0 : n.email) || ""),
                    v = 0 === i ? 170 : 300;
                return (0, m.jsx)(c.k, {
                    width: 0 === i ? "calc(100% - 100px)" : "",
                    className: "searchbartag",
                    "data-testid": "searchbartag-collaborator-".concat(n.email),
                    children: (0, m.jsxs)(a.Vp, g(g({
                        size: "md",
                        minW: 110
                    }, j ? {} : {
                        colorScheme: "red",
                        bg: "red",
                        color: "white"
                    }), {}, {
                        children: ["id" in n ? (0, m.jsx)(f.kH, {
                            label: n.email,
                            "aria-label": n.email,
                            children: (0, m.jsxs)(l.U, {
                                children: [(0, m.jsx)(d.q, {
                                    size: "2xs",
                                    m: 0,
                                    name: n.displayName,
                                    src: n.profileImageUrl
                                }), (0, m.jsx)(u.x, {
                                    textTransform: "capitalize",
                                    wordBreak: "break-word",
                                    noOfLines: 1,
                                    maxW: v,
                                    lineHeight: "1.5",
                                    children: n.displayName
                                })]
                            })
                        }) : (0, m.jsx)(f.kH, {
                            label: j ? n.email : (0, m.jsx)(s.cC, {
                                id: "XILg0L"
                            }),
                            "aria-label": n.email,
                            children: (0, m.jsxs)(l.U, {
                                flex: 1,
                                children: [(0, m.jsx)(p.Cd, {
                                    bg: j ? "trueblue.100" : "none",
                                    size: 6,
                                    children: (0, m.jsx)(x.G, {
                                        icon: j ? o.FU : r.WV
                                    })
                                }), (0, m.jsx)(u.x, {
                                    wordBreak: "break-all",
                                    display: "block",
                                    height: "100%",
                                    width: "100%",
                                    noOfLines: 1,
                                    maxW: v,
                                    lineHeight: "1.5",
                                    children: n.email
                                })]
                            })
                        }), (0, m.jsx)(a.SD, {
                            onClick: t
                        })]
                    }))
                }, "id" in n ? n.id : n.email)
            }
        },
        35330: function(e, n, i) {
            i.d(n, {
                y: function() {
                    return o
                }
            });
            var t = i(75944),
                r = i(2784),
                o = function() {
                    var e = (0, t.q)({
                            id: "sharePanelDisclosure"
                        }),
                        n = e.isOpen,
                        i = e.onOpen,
                        o = e.onClose,
                        s = (0, r.useState)("invite");
                    return {
                        isSharePanelOpen: n,
                        onSharePanelOpen: i,
                        onSharePanelClose: o,
                        view: s[0],
                        setView: s[1]
                    }
                }
        },
        18748: function(e, n, i) {
            i.d(n, {
                Nj: function() {
                    return ne
                },
                t9: function() {
                    return nn
                },
                o$: function() {
                    return nl
                },
                aA: function() {
                    return nN
                },
                WQ: function() {
                    return nY
                }
            });
            var t, r, o, s = i(92743),
                c = i(55452),
                a = i(20010),
                l = i(56915),
                d = i(48273),
                u = i(92619),
                p = i(53738),
                x = i(64827),
                f = i(40110),
                h = i(2167),
                m = i(71354),
                j = i(81927),
                g = i(85982),
                v = i(45650),
                b = i(80353),
                C = i(11919),
                y = i(93319),
                O = i(49929),
                _ = i(55966),
                I = i(2784),
                w = i(23313),
                A = i(16092),
                k = i(92779),
                P = i(10710),
                R = i(31145),
                E = i(18992),
                N = i(59637),
                D = i(94659),
                M = i(91012),
                S = i(8283),
                T = i(98875),
                G = i(75085),
                U = i(78308),
                z = i(12741),
                L = i(20406),
                Z = i(75652),
                F = i.n(Z),
                V = i(28526),
                W = i.n(V),
                Y = i(55479),
                $ = i(84103),
                q = i(37914),
                K = i(46358),
                B = i(32333),
                H = i(62141),
                J = i(52322),
                X = (t = (0, L.Z)(W().mark(function e(n, i, t) {
                    var r;
                    return W().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = "".concat(q.v.API_HOST || "", "/export/docs/").concat(n, "/").concat(t), e.abrupt("return", fetch(r, {
                                    method: "POST",
                                    credentials: "include",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "share-token": q.v.SHARE_TOKEN || ""
                                    },
                                    body: JSON.stringify({
                                        docContent: i
                                    })
                                }));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e, n, i) {
                    return t.apply(this, arguments)
                }),
                Q = function(e, n, i) {
                    var t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "pdf",
                        r = (0, Y.p)(),
                        o = (0, I.useRef)(null),
                        s = (0, B.z$)(),
                        a = (0, I.useState)(!1),
                        l = a[0],
                        d = a[1],
                        u = (0, I.useCallback)(function() {
                            o.current = r({
                                id: "export-toast-".concat(e.id, "-").concat(t),
                                isClosable: !1,
                                position: "top",
                                duration: null,
                                status: "loading",
                                variant: "light",
                                title: (0, J.jsx)(c.cC, {
                                    id: "eJOEBy"
                                })
                            })
                        }, [null == e ? void 0 : e.id, r, t]),
                        p = (0, I.useCallback)(function() {
                            o.current && r.update(o.current, {
                                status: "loading",
                                variant: "light",
                                title: (0, J.jsx)(c.cC, {
                                    id: "eJOEBy"
                                }),
                                description: (0, J.jsx)(c.cC, {
                                    id: "vMANwD"
                                }),
                                isClosable: !0
                            })
                        }, [r, t]),
                        x = (0, I.useCallback)(function() {
                            o.current && r.update(o.current, {
                                title: (0, J.jsx)(c.cC, {
                                    id: "walT1X"
                                }),
                                status: "error",
                                duration: null,
                                isClosable: !0
                            })
                        }, [r]),
                        f = (0, I.useCallback)(function(e) {
                            o.current && r.update(o.current, {
                                status: "success",
                                title: (0, J.jsx)(c.cC, {
                                    id: "pK8dQg"
                                }),
                                description: (0, J.jsx)(M.x, {
                                    children: (0, J.jsx)(c.cC, {
                                        id: "MTtTC2",
                                        components: {
                                            0: (0, J.jsx)($.r, {
                                                textDecoration: "underline",
                                                target: "_blank",
                                                href: e || void 0,
                                                onClick: function() {
                                                    return o.current && r.close(o.current)
                                                }
                                            })
                                        }
                                    })
                                }),
                                isClosable: !0
                            })
                        }, [r, t]);
                    return {
                        handleExport: (0, I.useCallback)(function() {
                            var r, o = null == i ? void 0 : i.getJSON();
                            d(!0), u();
                            var c = setTimeout(p, 3e4);
                            X(e.id, o, t).then((r = (0, L.Z)(W().mark(function i(r) {
                                var o, c, a, l, d, u;
                                return W().wrap(function(i) {
                                    for (;;) switch (i.prev = i.next) {
                                        case 0:
                                            return i.next = 2, r.blob();
                                        case 2:
                                            if (c = i.sent, r.ok) {
                                                i.next = 5;
                                                break
                                            }
                                            throw Error("Export failed.");
                                        case 5:
                                            a = "pdf" === t ? B.AA.PDF_EXPORTED : B.AA.PPTX_EXPORTED, null == s || s.track(a, {
                                                doc_id: e.id,
                                                source: n
                                            }), f(decodeURIComponent(r.headers.get("x-gamma-download-url") || "") || void 0), l = window.URL.createObjectURL(c), d = document.createElement("a"), u = decodeURIComponent((null === (o = (r.headers.get("Content-Disposition") || "").split(";").find(function(e) {
                                                return e.includes("filename=")
                                            })) || void 0 === o ? void 0 : o.replace("filename=", "").trim()) || "".concat(e.id, ".").concat(t)), d.download = u, d.href = l, d.style.display = "none", document.body.appendChild(d), d.click(), d.remove();
                                        case 17:
                                        case "end":
                                            return i.stop()
                                    }
                                }, i)
                            })), function(e) {
                                return r.apply(this, arguments)
                            })).catch(function() {
                                x()
                            }).finally(function() {
                                d(!1), clearTimeout(c)
                            })
                        }, [s, null == e ? void 0 : e.id, i, n, t, x, u, p, f]),
                        exportInProgress: l
                    }
                },
                ee = function(e) {
                    var n = (0, K.CG)(H.Pu),
                        i = e.theme || n;
                    return (0, I.useMemo)(function() {
                        var e = i.fonts ? (0, z.Z)(i.fonts) : [];
                        return e.length < 2 && e.push({
                            id: "Inter",
                            name: "Inter",
                            url: "https://fonts.googleapis.com/css2?family=Inter"
                        }), F()(e).map(function(e) {
                            var n;
                            return null !== (n = e.url) && void 0 !== n && n.includes("fonts.googleapis.com") ? {
                                name: e.name,
                                url: "https://fonts.google.com/specimen/".concat(e.name)
                            } : {
                                name: e.name
                            }
                        }).filter(function(e) {
                            return !!e
                        })
                    }, [i])
                },
                en = i(2875),
                ei = i(64457),
                et = i(52596),
                er = function(e) {
                    var n = e.doc,
                        i = e.editor,
                        t = e.onSharePanelOpen,
                        r = e.onSharePanelClose,
                        o = (0, T.ye)("pptExport");
                    return (0, J.jsxs)(D.g, {
                        spacing: 4,
                        align: "start",
                        pt: 2,
                        children: [(0, J.jsx)(M.x, {
                            fontSize: "sm",
                            color: "gray.600",
                            children: (0, J.jsx)(c.cC, {
                                id: "qwhOQ/",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: G.Yc
                                }
                            })
                        }), (0, J.jsxs)(m.K, {
                            spacing: 2,
                            width: "100%",
                            children: [(0, J.jsx)(es, {
                                format: "pdf",
                                label: "PDF",
                                icon: N.gS,
                                accentColor: "red",
                                doc: n,
                                editor: i
                            }), o && (0, J.jsx)(es, {
                                format: "pptx",
                                label: "PowerPoint",
                                icon: E.WO,
                                accentColor: "orange",
                                doc: n,
                                editor: i
                            })]
                        }), o && (0, J.jsx)(eo, {
                            doc: n
                        }), i && (0, J.jsx)(M.x, {
                            fontSize: "sm",
                            color: "gray.600",
                            children: (0, J.jsx)(c.cC, {
                                id: "8LhjM/",
                                components: {
                                    0: (0, J.jsx)(v.z, {
                                        variant: "link",
                                        as: "span",
                                        size: "sm",
                                        cursor: "pointer",
                                        onClick: function() {
                                            r(), en.pw.emit(en.TI.OPEN_PAGE_SETUP, "cards")
                                        }
                                    })
                                }
                            })
                        }), (0, J.jsx)(et.V, {
                            onClose: r,
                            onOpen: t,
                            segmentEvent: U.AA.GAMMA_PRO_UPSELL_EXPORT_SETTINGS_REMOVE_WATERMARK,
                            doc: n
                        })]
                    })
                },
                eo = function(e) {
                    var n = ee(e.doc);
                    return n.length ? (0, J.jsxs)(J.Fragment, {
                        children: [(0, J.jsx)(M.x, {
                            fontSize: "sm",
                            color: "gray.600",
                            children: (0, J.jsx)(c.cC, {
                                id: "5qYpE7"
                            })
                        }), (0, J.jsx)(S.U, {
                            children: n.map(function(e) {
                                var n = e.name,
                                    i = e.url;
                                return (0, J.jsx)(p.xu, {
                                    border: "1px",
                                    borderColor: "gray.200",
                                    borderRadius: "md",
                                    h: "auto",
                                    _hover: i ? {
                                        boxShadow: "var(--chakra-shadows-md)",
                                        borderColor: "var(--chakra-colors-trueblue-300)",
                                        color: "var(--chakra-colors-trueblue-400)"
                                    } : {},
                                    onClick: i ? function() {
                                        return window.open(i, "_blank")
                                    } : void 0,
                                    cursor: i ? "pointer" : void 0,
                                    children: (0, J.jsxs)(S.U, {
                                        p: 3,
                                        paddingRight: 4,
                                        spacing: 4,
                                        children: [(0, J.jsx)(M.x, {
                                            fontWeight: "medium",
                                            children: n
                                        }), i && (0, J.jsx)(O.G, {
                                            icon: R.faArrowUpRightFromSquare,
                                            size: "1x"
                                        })]
                                    })
                                }, "name")
                            })
                        })]
                    }) : null
                },
                es = function(e) {
                    var n = e.format,
                        i = e.doc,
                        t = e.editor,
                        r = e.icon,
                        o = e.accentColor,
                        s = e.label,
                        a = e.badge,
                        l = Q(i, "share_panel", t, n),
                        d = l.handleExport,
                        u = l.exportInProgress;
                    return (0, J.jsx)(ei.j, {
                        onClick: d,
                        icon: r,
                        formatLabel: s,
                        accentColor: o,
                        exportInProgress: u,
                        exportInProgressNote: (0, J.jsx)(c.cC, {
                            id: "57bp6s"
                        }),
                        badge: a
                    })
                },
                ec = i(95235),
                ea = i(81333),
                el = i(11446),
                ed = i(47299),
                eu = i(3851),
                ep = i(49626),
                ex = i(59195),
                ef = i(61751),
                eh = i(40130),
                em = i(27037),
                ej = i(52622),
                eg = (i(98683), i(87254)),
                ev = i(49747),
                eb = (i(97907), i(50390)),
                eC = i(72360),
                ey = i(48322),
                eO = i(12221),
                e_ = i(1842),
                eI = i.n(e_),
                ew = i(97442),
                eA = i(93148),
                ek = i(9846),
                eP = i(20252),
                eR = i(34860),
                eE = i(93858),
                eN = i(51823),
                eD = i(49392),
                eM = i(34396),
                eS = i(19911),
                eT = function(e) {
                    var n = e.icon,
                        i = e.showDisabled,
                        t = void 0 !== i && i;
                    return (0, J.jsx)(p.Cd, {
                        color: "gray.800",
                        textAlign: "center",
                        bg: "gray.200",
                        size: 8,
                        opacity: t ? .5 : 1,
                        children: t ? (0, J.jsxs)("span", {
                            className: "fa-stack",
                            children: [(0, J.jsx)(O.G, {
                                icon: eS.u6,
                                className: "fa-stack-1x"
                            }), (0, J.jsx)(O.G, {
                                icon: n,
                                className: "fa-stack-1x"
                            })]
                        }) : (0, J.jsx)(O.G, {
                            size: "1x",
                            icon: n
                        })
                    })
                },
                eG = function(e) {
                    var n = e.channel,
                        i = e.doc,
                        t = e.isDisabled,
                        r = e.showDisabledIcon,
                        o = void 0 !== r && r,
                        s = (0, eM.Z)().removeDocChannel,
                        a = (0, I.useCallback)(function() {
                            i && s(i, n.id)
                        }, [n.id, i, s]),
                        l = (0, eN.j)({
                            slug: n.slug,
                            id: n.id
                        });
                    return (0, J.jsxs)(S.U, {
                        py: 2,
                        w: "100%",
                        justify: "space-between",
                        "data-testid": "workspace-row-".concat(n.id),
                        children: [(0, J.jsx)(p.xu, {
                            children: (0, J.jsxs)(C.k, {
                                alignItems: "center",
                                children: [(0, J.jsx)(eT, {
                                    icon: A.Ty,
                                    showDisabled: o
                                }), (0, J.jsx)(p.xu, {
                                    ml: 3,
                                    opacity: o ? .5 : 1,
                                    children: (0, J.jsx)($.r, {
                                        href: l,
                                        target: "_blank",
                                        children: n.name
                                    })
                                })]
                            })
                        }), (0, J.jsx)(v.z, {
                            size: "sm",
                            variant: "ghost",
                            colorScheme: "red",
                            onClick: a,
                            isDisabled: t,
                            children: (0, J.jsx)(c.cC, {
                                id: "t/YqKh"
                            })
                        })]
                    }, n.id)
                },
                eU = i(46949),
                ez = i(76648),
                eL = i(21891),
                eZ = i(420),
                eF = i(35316),
                eV = i(90113),
                eW = i(38421),
                eY = i.n(eW),
                e$ = function(e) {
                    var n = e.workspaceId,
                        i = e.docId,
                        t = e.existingChannels,
                        r = e.isDisabled,
                        o = (0, I.useRef)(null),
                        s = (0, I.useState)(""),
                        a = s[0],
                        l = s[1],
                        d = (0, I.useState)([]),
                        u = d[0],
                        x = d[1],
                        f = (0, I.useState)(!1),
                        h = f[0],
                        j = f[1],
                        g = (0, eM.Z)().addDocChannel,
                        v = (0, w.Kce)({
                            variables: {
                                query: a,
                                workspaceId: n
                            },
                            skip: !a
                        }),
                        b = v.data,
                        y = v.loading;
                    (0, I.useEffect)(function() {
                        if (!y && b) {
                            var e = b.search.filter(Boolean);
                            x(e), j(0 === e.length)
                        }
                    }, [b, y]);
                    var k = (0, I.useMemo)(function() {
                            return a ? u.filter(function(e) {
                                return !t.find(function(n) {
                                    return n.id === e.id
                                })
                            }) : []
                        }, [t, a, u]),
                        P = (0, I.useCallback)(function(e) {
                            var n = k.find(function(n) {
                                return n.id === e
                            });
                            if (!n) {
                                console.error("[ChannelSearchBar.addSelectedChannel] No matching channel found");
                                return
                            }
                            g({
                                docId: i,
                                channel: n,
                                existingChannels: t
                            })
                        }, [g, i, t, k]);
                    return (0, J.jsx)(ez.h, {
                        w: "100%",
                        mb: 2,
                        alignItems: "flex-start",
                        "data-testid": "sharepanel-channel-search-bar",
                        children: (0, J.jsx)(p.xu, {
                            flex: 1,
                            children: (0, J.jsxs)(eL.B, {
                                w: "100%",
                                justifyContent: "center",
                                zIndex: 1,
                                children: [(0, J.jsx)(C.k, {
                                    display: "none",
                                    position: "absolute",
                                    h: "100%",
                                    w: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bg: "gray.300",
                                    zIndex: "overlay",
                                    opacity: .4,
                                    children: (0, J.jsx)(eZ.$, {})
                                }), (0, J.jsxs)(eV.AutoComplete, {
                                    rollNavigation: !0,
                                    multiple: !0,
                                    emptyState: function() {
                                        return !!h && (0, J.jsxs)(C.k, {
                                            direction: "column",
                                            justify: "center",
                                            align: "center",
                                            w: "100%",
                                            my: 6,
                                            children: [(0, J.jsx)(p.xu, {
                                                w: "80%",
                                                maxW: "200px",
                                                mb: 6,
                                                alignContent: "center",
                                                children: (0, J.jsx)(eY(), {
                                                    src: "/images/Sal-Fishing-2x.png",
                                                    width: "640",
                                                    height: "361",
                                                    alt: "Sal, the Gamma mascot, fishing extraterrestrially"
                                                })
                                            }), (0, J.jsx)(eb.X, {
                                                size: "xs",
                                                mb: 2,
                                                textAlign: "center",
                                                children: (0, J.jsx)(c.cC, {
                                                    id: "NmfOr+"
                                                })
                                            }), (0, J.jsx)(M.x, {
                                                fontSize: "sm",
                                                color: "gray.400",
                                                textAlign: "center",
                                                children: (0, J.jsx)(c.cC, {
                                                    id: "kXnLEt"
                                                })
                                            })]
                                        })
                                    },
                                    suggestWhenEmpty: !1,
                                    openOnFocus: !0,
                                    filter: function() {
                                        return !0
                                    },
                                    onSelectOption: function(e) {
                                        P(e.item.value), l("")
                                    },
                                    children: [(0, J.jsxs)(eF.Z, {
                                        pointerEvents: "none",
                                        color: "gray.300",
                                        h: "100%",
                                        flexDirection: "column",
                                        children: [(0, J.jsx)(C.k, {
                                            flex: 1
                                        }), (0, J.jsx)(C.k, {
                                            h: 10,
                                            py: 4,
                                            alignItems: "center",
                                            children: (0, J.jsx)(eU.W, {
                                                w: 10
                                            })
                                        })]
                                    }), (0, J.jsx)(eV.AutoCompleteInput, {
                                        ref: o,
                                        "data-testid": "autocomplete-channels-input",
                                        cursor: r ? "not-allowed" : void 0,
                                        disabled: r,
                                        w: "100%",
                                        pl: 5,
                                        wrapStyles: {
                                            px: 2
                                        },
                                        fontSize: "md",
                                        placeholder: eg.ag._({
                                            id: "KmCmUJ"
                                        }),
                                        transition: "width 1s ease-in-out",
                                        value: a,
                                        onChange: function(e) {
                                            var n = e.target.value;
                                            l(n), n || x([])
                                        }
                                    }), (0, J.jsx)(eV.AutoCompleteList, {
                                        w: "100%",
                                        mt: 0,
                                        display: a.length > 0 ? "flex" : "none",
                                        children: k.length > 0 && k.map(function(e) {
                                            var n = e.id,
                                                i = e.name,
                                                t = e.memberCount,
                                                r = e.isMember,
                                                o = e.members;
                                            return (0, J.jsx)(eV.AutoCompleteItem, {
                                                "data-testid": "autocomplete-item-channel-".concat(n),
                                                value: {
                                                    id: e.id
                                                },
                                                getValue: function(e) {
                                                    return e.id
                                                },
                                                align: "center",
                                                _focus: {
                                                    bg: "trueblue.50"
                                                },
                                                children: (0, J.jsxs)(S.U, {
                                                    spacing: 4,
                                                    p: 0,
                                                    flex: 1,
                                                    children: [(0, J.jsx)(p.xu, {
                                                        color: "gray.700",
                                                        children: (0, J.jsx)(O.G, {
                                                            icon: A.Ty
                                                        })
                                                    }), (0, J.jsxs)(m.K, {
                                                        spacing: 0,
                                                        flex: "1",
                                                        children: [(0, J.jsx)(M.x, {
                                                            children: i
                                                        }), (0, J.jsx)(M.x, {
                                                            fontSize: "sm",
                                                            color: "gray.400",
                                                            children: r ? (0, J.jsx)(c.cC, {
                                                                id: "tWPlLK",
                                                                values: {
                                                                    0: t || 0
                                                                }
                                                            }) : (0, J.jsx)(c.cC, {
                                                                id: "pkIIls",
                                                                values: {
                                                                    0: t || 0
                                                                }
                                                            })
                                                        })]
                                                    }), (0, J.jsx)(_.NL, {
                                                        size: "xs",
                                                        overflowTooltipLabel: eg.ag._({
                                                            id: "25VyZX"
                                                        }),
                                                        avatars: o || [],
                                                        max: 3,
                                                        onClick: function(e) {
                                                            e.preventDefault(), e.stopPropagation()
                                                        }
                                                    })]
                                                })
                                            }, n)
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                eq = i(75944),
                eK = i(4448),
                eB = i(7985),
                eH = i(98841),
                eJ = i(60147),
                eX = i(86379),
                eQ = i(29677),
                e0 = i(31912),
                e1 = i(36471),
                e2 = i(26673),
                e5 = i(9088),
                e3 = i(30893),
                e4 = i(40771),
                e9 = i(63849),
                e8 = i(2575),
                e6 = i(95258),
                e7 = i(82904);
            (o || (o = {})).NoAccess = "no_access";
            var ne = (r = {}, (0, ec.Z)(r, w.y3$.Manage, {
                    title: function() {
                        return eg.ag._({
                            id: "DZfDCl"
                        })
                    },
                    description: function() {
                        return eg.ag._({
                            id: "r59J7Q"
                        })
                    }
                }), (0, ec.Z)(r, w.y3$.Edit, {
                    title: function() {
                        return eg.ag._({
                            id: "ePK91l"
                        })
                    },
                    description: function() {
                        return eg.ag._({
                            id: "kuZsYI"
                        })
                    }
                }), (0, ec.Z)(r, w.y3$.Comment, {
                    title: function() {
                        return eg.ag._({
                            id: "NBdIgR"
                        })
                    },
                    description: function() {
                        return eg.ag._({
                            id: "IwFh5+"
                        })
                    }
                }), (0, ec.Z)(r, w.y3$.View, {
                    title: function() {
                        return eg.ag._({
                            id: "jpctdh"
                        })
                    },
                    description: function() {
                        return eg.ag._({
                            id: "yzFEXd"
                        })
                    }
                }), (0, ec.Z)(r, o.NoAccess, {
                    title: function() {
                        return eg.ag._({
                            id: "oPoLg+"
                        })
                    },
                    description: function() {
                        return eg.ag._({
                            id: "Vcif8/"
                        })
                    }
                }), r),
                nn = function(e) {
                    var n = e.isDisabled,
                        i = e.options,
                        t = e.disabledOptions,
                        r = void 0 === t ? [] : t,
                        s = e.selected,
                        a = e.variant,
                        l = e.onClick,
                        d = void 0 === l ? function() {} : l,
                        u = e.onRemove;
                    return (0, J.jsxs)(e5.v, {
                        closeOnSelect: !0,
                        children: [(0, J.jsx)(e3.j, {
                            "data-testid": "permission-menu-value-".concat(s),
                            as: v.z,
                            display: "flex",
                            size: "sm",
                            isDisabled: n,
                            variant: void 0 === a ? "ghost" : a,
                            rightIcon: (0, J.jsx)(O.G, {
                                icon: e2.pt
                            }),
                            children: ne[s || o.NoAccess].title()
                        }), (0, J.jsx)(e4.q, {
                            textAlign: "left",
                            zIndex: "overlay",
                            children: (0, J.jsxs)(e9._, {
                                defaultValue: s,
                                value: s,
                                title: eg.ag._({
                                    id: "9cDpsw"
                                }),
                                type: "radio",
                                onChange: function(e) {
                                    d(e)
                                },
                                children: [i.map(function(e) {
                                    var n = r.find(function(n) {
                                            return n.permission === e
                                        }),
                                        i = n && n.reason;
                                    return (0, J.jsx)(e8.i, {
                                        isDisabled: !!n,
                                        value: e,
                                        alignItems: "start",
                                        pt: 3,
                                        children: (0, J.jsx)(_.kH, {
                                            label: i,
                                            "aria-label": i,
                                            isDisabled: !n,
                                            placement: "top",
                                            children: (0, J.jsxs)(p.xu, {
                                                children: [(0, J.jsx)(M.x, {
                                                    mt: -1,
                                                    children: ne[e].title()
                                                }), (0, J.jsx)(M.x, {
                                                    fontSize: "sm",
                                                    color: "gray.500",
                                                    mt: 1,
                                                    children: ne[e].description()
                                                })]
                                            })
                                        }, e)
                                    }, e)
                                }), u && (0, J.jsxs)(J.Fragment, {
                                    children: [(0, J.jsx)(e6.R, {}), (0, J.jsx)(e7.s, {
                                        color: "red.500",
                                        onClick: u,
                                        icon: (0, J.jsx)(O.G, {
                                            icon: e1.$,
                                            fixedWidth: !0
                                        }),
                                        children: (0, J.jsx)(c.cC, {
                                            id: "t/YqKh"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                },
                ni = i(15241);

            function nt(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function nr(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? nt(Object(i), !0).forEach(function(n) {
                        (0, ec.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : nt(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var no = (0, eH.E)(p.xu),
                ns = function(e, n, i) {
                    if (!i) return e;
                    var t = (0, z.Z)(e),
                        r = e.findIndex(function(e) {
                            return "email" in e && e.email === i
                        }),
                        o = n.find(function(e) {
                            return e.email === i
                        });
                    return -1 !== r && t.splice(r, 1), [].concat((0, z.Z)(t), [o || {
                        email: i
                    }])
                },
                nc = function(e, n) {
                    var i = (0, e0.Hs)(n.map(function(e) {
                        return "displayName" in e ? e.displayName : e.email
                    }), 3);
                    return e === w.y3$.Manage ? eg.ag._({
                        id: "4bKxWq",
                        values: {
                            0: n.length,
                            userNames: i,
                            GAMMA_ARTIFACT_PROPER_NOUN: G.Yc
                        }
                    }) : e === w.y3$.Edit ? eg.ag._({
                        id: "3rbi6Y",
                        values: {
                            0: n.length,
                            userNames: i,
                            GAMMA_ARTIFACT_PROPER_NOUN: G.Yc
                        }
                    }) : e === w.y3$.Comment ? eg.ag._({
                        id: "uGWY40",
                        values: {
                            0: n.length,
                            userNames: i,
                            GAMMA_ARTIFACT_PROPER_NOUN: G.Yc
                        }
                    }) : e === w.y3$.View ? eg.ag._({
                        id: "p5IG6F",
                        values: {
                            0: n.length,
                            userNames: i,
                            GAMMA_ARTIFACT_PROPER_NOUN: G.Yc
                        }
                    }) : eg.ag._({
                        id: "Ai1TAT",
                        values: {
                            0: n.length,
                            userNames: i,
                            GAMMA_ARTIFACT_PROPER_NOUN: G.Yc
                        }
                    })
                },
                na = function(e) {
                    var n, i = e.workspaceId,
                        t = e.docId,
                        r = e.user,
                        o = e.existingDocCollaborators,
                        s = e.existingInvitations,
                        a = e.registerDoneFn,
                        l = e.isDisabled,
                        d = (0, Y.p)(),
                        u = (0, I.useState)(!1),
                        x = u[0],
                        f = u[1],
                        h = (0, I.useRef)(),
                        m = (0, I.useRef)(null),
                        j = (0, I.useState)(""),
                        g = j[0],
                        b = j[1],
                        y = (0, I.useState)([]),
                        A = y[0],
                        k = y[1],
                        P = (0, I.useState)(w.y3$.Manage),
                        R = P[0],
                        E = P[1],
                        N = (0, I.useState)(new eQ.B),
                        D = N[0],
                        T = N[1],
                        G = (0, I.useState)([]),
                        U = G[0],
                        Z = G[1],
                        F = U.filter(function(e) {
                            return "email" in e
                        }),
                        V = o.map(function(e) {
                            return e.user
                        }),
                        $ = (0, eq.q)({
                            id: "unsentInvitationsModalDisclosure"
                        }),
                        q = $.isOpen,
                        K = $.onOpen,
                        B = $.onClose,
                        H = (0, w.qVw)(),
                        X = (0, ea.Z)(H, 2),
                        Q = X[0],
                        ee = X[1],
                        en = ee.loading,
                        ei = ee.error;
                    (0, eR.GJ)("Error inviting collaborators.", ei);
                    var et = (0, eJ.j)(w.aAR),
                        er = (0, w.PGi)({
                            variables: {
                                query: g,
                                workspaceId: i
                            },
                            skip: !g
                        }),
                        eo = er.data,
                        es = er.loading;
                    (0, I.useEffect)(function() {
                        !es && eo && k(eo.search.filter(Boolean))
                    }, [eo, es]);
                    var ec = (0, I.useMemo)(function() {
                            return g ? A.filter(function(e) {
                                return "User" === e.__typename && e.id !== r.id && !F.concat(V).find(function(n) {
                                    return n.email === e.email
                                })
                            }) : []
                        }, [A, V, g, F, r.id]),
                        el = !!g && !ec.find(function(e) {
                            return e.email === g
                        }),
                        ed = R === w.y3$.Manage && F.some(function(e) {
                            return !("__typename" in e && "User" === e.__typename)
                        }),
                        eu = U.concat({
                            email: g
                        }).filter(function(e) {
                            return !("email" in e) || (0, eB.G)(e.email || "")
                        }),
                        ep = !!U.length,
                        ex = !!eu.length;
                    (0, I.useEffect)(function() {
                        a(function() {
                            return function() {
                                return ex ? K() : D.resolve(), D.promise
                            }
                        })
                    }, [a, D, ex, K]);
                    var ef = (0, I.useCallback)((n = (0, L.Z)(W().mark(function e(n) {
                            var t;
                            return W().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return f(!0), Z(function(e) {
                                            return n.reduce(function(e, n) {
                                                return ns(e, ec, n.trim())
                                            }, e)
                                        }), e.next = 4, Promise.all(n.map(function(e) {
                                            return et({
                                                workspaceId: i,
                                                query: e
                                            }).then(function(n) {
                                                var i;
                                                return null === (i = n.data) || void 0 === i ? void 0 : i.search.find(function(n) {
                                                    return "User" === n.__typename && n.email === e
                                                })
                                            })
                                        }));
                                    case 4:
                                        t = e.sent.filter(Boolean), Z(function(e) {
                                            return n.reduce(function(e, n) {
                                                return ns(e, t, n.trim())
                                            }, e)
                                        }), f(!1);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return n.apply(this, arguments)
                        }), [ec, et, i]),
                        eh = (0, I.useCallback)((0, L.Z)(W().mark(function e() {
                            var n, i, c;
                            return W().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (0 !== F.length) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return n = ns(F, ec, g.trim()).filter(function(e) {
                                            return "email" in e && (0, eB.G)(e.email || "")
                                        }), i = [].concat((0, z.Z)(o), (0, z.Z)(n.map(function(e) {
                                            if ("id" in e) return {
                                                docId: t,
                                                user: e,
                                                guest: !1,
                                                permission: R,
                                                __typename: "DocCollaborator"
                                            }
                                        }))).filter(function(e) {
                                            return !!e
                                        }), c = [].concat((0, z.Z)(s), (0, z.Z)(n.map(function(e) {
                                            if (!("id" in e)) return {
                                                id: "temp",
                                                docTitle: "temp-title",
                                                invitedBy: r,
                                                docId: t,
                                                email: e.email,
                                                permission: R,
                                                __typename: "DocInvitation"
                                            }
                                        }))).filter(function(e) {
                                            return !!e
                                        }), e.abrupt("return", Q({
                                            variables: {
                                                docId: t,
                                                collaborators: n.map(function(e) {
                                                    var n = {
                                                        permission: R
                                                    };
                                                    return nr(nr({}, "id" in e ? {
                                                        userId: e.id
                                                    } : {
                                                        email: e.email
                                                    }), n)
                                                })
                                            },
                                            update: function(e, n) {
                                                var i = n.data;
                                                e.writeFragment({
                                                    id: "Doc:".concat(t),
                                                    fragment: w.yAO,
                                                    data: null == i ? void 0 : i.addCollaborators
                                                })
                                            },
                                            optimisticResponse: {
                                                addCollaborators: {
                                                    id: t,
                                                    collaborators: i,
                                                    invitations: c
                                                }
                                            }
                                        }).then(function() {
                                            d({
                                                title: eg.ag._({
                                                    id: "Ka86rB",
                                                    values: {
                                                        0: n.length
                                                    }
                                                }),
                                                description: nc(R, n),
                                                status: "success",
                                                duration: 5e3,
                                                isClosable: !0,
                                                position: "top"
                                            })
                                        }));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [Q, t, g, R, ec, F, o, s, d, r]),
                        ej = (0, I.useCallback)((0, L.Z)(W().mark(function e() {
                            return W().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", Promise.all([eh()]).then(function() {
                                            var e;
                                            Z([]), b(""), null === (e = h.current) || void 0 === e || e.resetItems(!0), D.resolve(), T(new eQ.B)
                                        }).catch(function(e) {
                                            console.warn(e)
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [eh, D]),
                        ev = l || en || x;
                    return (0, J.jsxs)(ez.h, {
                        w: "100%",
                        mb: 2,
                        alignItems: "flex-start",
                        "data-testid": "sharepanel-search-bar",
                        children: [(0, J.jsx)(p.xu, {
                            flex: 1,
                            children: (0, J.jsxs)(eL.B, {
                                w: "100%",
                                justifyContent: "center",
                                zIndex: 2,
                                children: [(0, J.jsx)(C.k, {
                                    display: x ? "flex" : "none",
                                    position: "absolute",
                                    h: "100%",
                                    w: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bg: "gray.300",
                                    zIndex: "overlay",
                                    opacity: .4,
                                    children: (0, J.jsx)(eZ.$, {})
                                }), (0, J.jsxs)(eV.AutoComplete, {
                                    ref: h,
                                    values: U,
                                    maxSelections: 100,
                                    maxSuggestions: 20,
                                    creatable: !0,
                                    multiple: !0,
                                    freeSolo: !0,
                                    suggestWhenEmpty: !1,
                                    openOnFocus: !0,
                                    filter: function(e, n) {
                                        return !F.find(function(e) {
                                            return e.email === n
                                        })
                                    },
                                    onSelectOption: function(e) {
                                        var n = e.item;
                                        "collaborator" === n.originalValue.type && Z(function(e) {
                                            return ns(e, ec, n.value)
                                        }), b("")
                                    },
                                    onTagRemoved: function(e) {
                                        Z(function(n) {
                                            return (0, z.Z)(n).filter(function(n) {
                                                return "email" in n ? n.email !== e : !("id" in n) || n.id !== e
                                            })
                                        })
                                    },
                                    children: [(0, J.jsxs)(eF.Z, {
                                        pointerEvents: "none",
                                        color: "gray.300",
                                        h: "100%",
                                        flexDirection: "column",
                                        children: [(0, J.jsx)(C.k, {
                                            flex: 1
                                        }), (0, J.jsx)(C.k, {
                                            h: 10,
                                            py: 4,
                                            alignItems: "center",
                                            children: (0, J.jsx)(eU.W, {
                                                w: 10
                                            })
                                        })]
                                    }), (0, J.jsx)(eV.AutoCompleteInput, {
                                        ref: m,
                                        "data-testid": "autocomplete-collaborators-input",
                                        cursor: ev ? "not-allowed" : void 0,
                                        disabled: ev,
                                        w: "100%",
                                        pl: 5,
                                        wrapStyles: {
                                            px: 2
                                        },
                                        fontSize: "md",
                                        placeholder: eg.ag._({
                                            id: "P8H57Z"
                                        }),
                                        transition: "width 1s ease-in-out",
                                        value: g,
                                        onKeyDown: function(e) {
                                            if ("Backspace" === e.key && 0 === g.length && U.length > 0) {
                                                var n, i = U.slice(-1).pop();
                                                i && (null === (n = h.current) || void 0 === n || n.removeItem("email" in i ? i.email : i.id))
                                            }
                                        },
                                        onPaste: function(e) {
                                            e.preventDefault(), e.stopPropagation(), ef(e.clipboardData.getData("Text").trim().split(/[,|;\s]+/)), b(""), k([])
                                        },
                                        onChange: function(e) {
                                            var n = e.target.value;
                                            b(n), n || k([])
                                        },
                                        children: U.map(function(e, n) {
                                            return (0, J.jsx)(ni.L, {
                                                idx: n,
                                                selectedCollaborator: e,
                                                handleRemoveClick: function() {
                                                    var n;
                                                    null === (n = h.current) || void 0 === n || n.removeItem(e.email)
                                                }
                                            }, "id" in e ? e.id : e.email)
                                        })
                                    }), (0, J.jsx)(eV.AutoCompleteList, {
                                        w: "100%",
                                        mt: 0,
                                        display: g.length > 0 ? "flex" : "none",
                                        children: ec.map(function(e) {
                                            var n = e.id,
                                                i = e.email,
                                                t = e.displayName,
                                                r = e.profileImageUrl;
                                            return (0, J.jsx)(eV.AutoCompleteItem, {
                                                fixed: !0,
                                                "data-testid": "autocomplete-item-user-".concat(n),
                                                value: {
                                                    email: i,
                                                    type: "collaborator"
                                                },
                                                getValue: function(e) {
                                                    return e.email
                                                },
                                                align: "center",
                                                _focus: {
                                                    bg: "trueblue.50"
                                                },
                                                children: (0, J.jsxs)(S.U, {
                                                    children: [(0, J.jsx)(eO.q, {
                                                        size: "sm",
                                                        name: t,
                                                        src: r
                                                    }), (0, J.jsxs)(p.xu, {
                                                        children: [(0, J.jsx)(M.x, {
                                                            textTransform: "capitalize",
                                                            children: t
                                                        }), (0, J.jsx)(M.x, {
                                                            fontSize: "xs",
                                                            color: "gray.500",
                                                            children: null == i ? void 0 : i.toLowerCase()
                                                        })]
                                                    })]
                                                })
                                            }, n)
                                        }).concat((0, J.jsx)(eV.AutoCompleteItem, {
                                            value: {
                                                email: g,
                                                type: "collaborator"
                                            },
                                            align: "center",
                                            display: el ? "flex" : "none",
                                            _focus: {
                                                bg: "trueblue.50"
                                            },
                                            children: (0, J.jsxs)(S.U, {
                                                children: [(0, J.jsx)(p.Cd, {
                                                    bg: "trueblue.100",
                                                    size: 8,
                                                    children: (0, J.jsx)(O.G, {
                                                        icon: em.FU
                                                    })
                                                }), (0, J.jsx)(M.x, {
                                                    size: "md",
                                                    children: g
                                                })]
                                            })
                                        }, g))
                                    })]
                                }), (0, J.jsx)(eK.p, { in: ep,
                                    unmountOnExit: !0,
                                    children: (0, J.jsx)(eF.x, {
                                        w: "auto",
                                        justifyContent: "flex-end",
                                        pr: 1,
                                        children: (0, J.jsx)(nn, {
                                            isDisabled: en,
                                            options: [w.y3$.Manage, w.y3$.Edit, w.y3$.Comment, w.y3$.View],
                                            variant: "ghost",
                                            selected: R,
                                            onClick: function(e) {
                                                return E(e)
                                            }
                                        })
                                    })
                                })]
                            })
                        }), (0, J.jsx)(no, {
                            overflowX: "hidden",
                            mr: -2,
                            transition: "slow",
                            animate: {
                                maxWidth: ep ? "200px" : "0px"
                            },
                            children: (0, J.jsx)(_.kH, {
                                label: (0, J.jsx)(c.cC, {
                                    id: "Rxin92"
                                }),
                                "aria-label": eg.ag._({
                                    id: "Rxin92"
                                }),
                                isDisabled: !ed,
                                placement: "top",
                                children: (0, J.jsx)(p.xu, {
                                    children: (0, J.jsx)(v.z, {
                                        variant: "solid",
                                        onClick: ej,
                                        isDisabled: !ex || ed,
                                        isLoading: en,
                                        "data-testid": "add-selected-items",
                                        children: (0, J.jsx)(c.cC, {
                                            id: "m16xKo"
                                        })
                                    })
                                })
                            })
                        }), (0, J.jsx)(eX.C, {
                            invitationCount: eu.length,
                            onDiscardClick: function() {
                                B(), D.resolve(), T(new eQ.B)
                            },
                            onSendInvitationsClick: function() {
                                B(), ej()
                            },
                            onClose: function() {
                                B(), D.reject(), T(new eQ.B)
                            },
                            isOpen: q
                        })]
                    })
                },
                nl = function(e) {
                    var n = e.title,
                        i = e.subtitle,
                        t = e.img,
                        r = e.isDisabled,
                        o = e.disabledText,
                        s = e.tooltipText,
                        c = e.testId,
                        a = e.infoIcon,
                        l = e.permissionsControl,
                        d = e.workspaceGuestInvite,
                        u = "string" == typeof i ? (0, J.jsx)(M.x, {
                            fontSize: "xs",
                            color: "gray.500",
                            children: i
                        }) : i,
                        x = (0, J.jsx)(_.kH, {
                            isDisabled: !s,
                            label: s,
                            placement: "top",
                            children: (0, J.jsx)(p.xu, {
                                children: l
                            })
                        });
                    return (0, J.jsxs)(S.U, {
                        w: "100%",
                        justify: "space-between",
                        py: 2,
                        "data-testid": "permission-settings-row".concat(c ? "-" + c : ""),
                        children: [(0, J.jsx)(p.xu, {
                            children: (0, J.jsxs)(C.k, {
                                alignItems: "center",
                                children: [t, (0, J.jsxs)(p.xu, {
                                    ml: 3,
                                    children: [(0, J.jsx)(M.x, {
                                        children: n
                                    }), (0, J.jsxs)(C.k, {
                                        align: "center",
                                        children: [d && d, u && u]
                                    })]
                                })]
                            })
                        }), (0, J.jsx)(p.xu, {
                            children: (0, J.jsx)(_.kH, {
                                isDisabled: !s,
                                label: (0, J.jsx)(M.x, {
                                    children: s
                                }),
                                placement: "top",
                                children: void 0 !== r && r ? (0, J.jsx)(M.x, {
                                    size: "sm",
                                    color: "gray.500",
                                    "data-testid": "permission-controls-disabled-".concat(c),
                                    children: o
                                }) : a ? (0, J.jsxs)(S.U, {
                                    children: [a, x]
                                }) : x
                            })
                        })]
                    })
                },
                nd = i(82269),
                nu = ["children", "showDivider"];

            function np(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function nx(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? np(Object(i), !0).forEach(function(n) {
                        (0, ec.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : np(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var nf = function(e) {
                    var n = e.children,
                        i = e.showDivider,
                        t = (0, nd.Z)(e, nu);
                    return (0, J.jsxs)(J.Fragment, {
                        children: [(0, J.jsx)(D.g, nx(nx({
                            spacing: 1,
                            align: "stretch",
                            py: 4
                        }, t), {}, {
                            children: n
                        })), (void 0 === i || i) && (0, J.jsx)(f.i, {})]
                    })
                },
                nh = function(e) {
                    var n = e.subtitle,
                        i = e.tooltipLabel,
                        t = e.ariaLabel,
                        r = e.icon;
                    return (0, J.jsxs)(S.U, {
                        spacing: 1,
                        align: "center",
                        children: [(0, J.jsx)(M.x, {
                            fontSize: "xs",
                            color: "gray.500",
                            children: n
                        }), (0, J.jsx)(_.kH, {
                            label: i,
                            placement: "top",
                            "aria-label": t,
                            children: (0, J.jsx)(p.xu, {
                                color: "gray.500",
                                lineHeight: "1",
                                children: (0, J.jsx)(O.G, {
                                    size: "xs",
                                    icon: r
                                })
                            })
                        })]
                    })
                },
                nm = i(43794),
                nj = i(54728),
                ng = i(51434),
                nv = i(91333),
                nb = i(10344),
                nC = i(23742),
                ny = i(83897),
                nO = function(e) {
                    var n = e.email,
                        i = e.name,
                        t = e.workspaceName,
                        r = e.workspaceId,
                        o = (0, w.f4M)(),
                        s = (0, ea.Z)(o, 1)[0],
                        a = (0, I.useState)(!1),
                        l = a[0],
                        d = a[1],
                        u = (0, Y.p)();
                    return (0, J.jsx)(nj.J, {
                        closeOnBlur: !0,
                        children: function(e) {
                            var o = e.onClose;
                            return (0, J.jsxs)(J.Fragment, {
                                children: [(0, J.jsx)(ng.x, {
                                    children: (0, J.jsx)(v.z, {
                                        leftIcon: (0, J.jsx)(O.G, {
                                            icon: nm.Gg
                                        }),
                                        size: "xs",
                                        colorScheme: "gray",
                                        mr: 1,
                                        px: 2,
                                        h: "auto",
                                        py: 1,
                                        children: (0, J.jsx)(c.cC, {
                                            id: "O1wAlQ"
                                        })
                                    })
                                }), (0, J.jsxs)(nv.y, {
                                    bg: "white",
                                    children: [(0, J.jsx)(nb.Q, {}), (0, J.jsx)(nC.Y, {
                                        fontWeight: "bold",
                                        children: (0, J.jsx)(c.cC, {
                                            id: "XYV7FR"
                                        })
                                    }), (0, J.jsxs)(ny.b, {
                                        children: [(0, J.jsx)(M.x, {
                                            fontSize: "sm",
                                            children: (0, J.jsx)(c.cC, {
                                                id: "hJZ5XP",
                                                values: {
                                                    name: i,
                                                    workspaceName: t,
                                                    GAMMA_ARTIFACT_PROPER_NOUN_PLURAL: G.aq
                                                }
                                            })
                                        }), (0, J.jsx)(v.z, {
                                            isDisabled: l,
                                            w: "100%",
                                            mt: 2,
                                            onClick: function() {
                                                r && n && (d(!0), s({
                                                    variables: {
                                                        workspaceId: r,
                                                        invitees: [{
                                                            email: n
                                                        }]
                                                    }
                                                }).then(function() {
                                                    u({
                                                        title: eg.ag._({
                                                            id: "oNCcm2"
                                                        }),
                                                        status: "success",
                                                        duration: 5e3,
                                                        isClosable: !0,
                                                        position: "top"
                                                    })
                                                }).catch(function(e) {
                                                    console.error(e), u({
                                                        title: eg.ag._({
                                                            id: "h37zlR",
                                                            values: {
                                                                0: e.message
                                                            }
                                                        }),
                                                        status: "error",
                                                        isClosable: !0,
                                                        position: "top"
                                                    })
                                                }).finally(function() {
                                                    d(!1), o()
                                                }))
                                            },
                                            children: (0, J.jsx)(c.cC, {
                                                id: "qVqqmP"
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }
                    })
                };

            function n_(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function nI(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? n_(Object(i), !0).forEach(function(n) {
                        (0, ec.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : n_(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var nw = function() {
                    return {
                        view: {
                            subtitle: eg.ag._({
                                id: "ihPQra"
                            }),
                            tooltip: (0, A.tN)()
                        },
                        comment: {
                            subtitle: eg.ag._({
                                id: "qPZYdC"
                            }),
                            tooltip: eg.ag._({
                                id: "oKPro/",
                                values: {
                                    0: (0, A.tN)()
                                }
                            })
                        },
                        edit: {
                            subtitle: eg.ag._({
                                id: "TVFcVE"
                            }),
                            tooltip: eg.ag._({
                                id: "2gPY9r",
                                values: {
                                    0: (0, A.tN)()
                                }
                            })
                        }
                    }
                },
                nA = function(e, n) {
                    var i, t, r = "DocCollaborator" === e.__typename ? null === (i = e.user.displayName) || void 0 === i ? void 0 : i.toUpperCase() : "DocInvitation" === e.__typename ? e.email.toUpperCase() : "",
                        o = "DocCollaborator" === n.__typename ? null === (t = n.user.displayName) || void 0 === t ? void 0 : t.toUpperCase() : "DocInvitation" === n.__typename ? n.email.toUpperCase() : "";
                    return !o || r && r < o ? -1 : !r || o && r > o ? 1 : 0
                },
                nk = function(e, n) {
                    if (e.permission !== n.permission) {
                        if ("manage" === e.permission) return -1;
                        if ("manage" === n.permission) return 1
                    }
                    return nA(e, n)
                },
                nP = function(e) {
                    var n, i, t, r = e.workspaceId,
                        s = e.isFromOtherOrg,
                        a = e.doc,
                        l = e.user,
                        d = e.setVerifySearchDone,
                        u = e.canManage,
                        x = (0, eA.A)(nw),
                        f = (0, Y.p)(),
                        h = (0, eE._)(eD.H.hasDismissedDocWorkspaceNotice, !1),
                        m = (0, ea.Z)(h, 2),
                        j = m[0],
                        g = (m[1], (0, I.useState)(!1)),
                        v = g[0],
                        b = g[1],
                        y = (0, w.$gs)().isConnected,
                        A = (0, w.qVw)(),
                        P = (0, ea.Z)(A, 2),
                        R = P[0],
                        E = P[1].error,
                        N = (0, w.mrc)(),
                        T = (0, ea.Z)(N, 2),
                        U = T[0],
                        L = T[1].error;
                    (0, eR.GJ)("Error updating collaborator.", E), (0, eR.GJ)("Error removing collaborator.", L);
                    var Z = (0, w.rIg)(),
                        F = (0, ea.Z)(Z, 1)[0],
                        V = (0, w.kTH)(),
                        W = (0, ea.Z)(V, 1)[0],
                        $ = null == a ? void 0 : null === (n = a.accessLinks) || void 0 === n ? void 0 : n[0],
                        q = (0, I.useMemo)(function() {
                            return (0, eN.Gn)({
                                docTitle: null == a ? void 0 : a.title,
                                docId: null == a ? void 0 : a.id,
                                token: null == $ ? void 0 : $.token,
                                absolute: !0
                            })
                        }, [a, null == $ ? void 0 : $.token]),
                        K = u && y,
                        B = !s,
                        H = (B && (j || !a || a.orgAccess), !!(!(null != a && a.orgAccess) && (null == a ? void 0 : a.channels) && (null == a ? void 0 : a.channels.length) > 0 && (null == a ? void 0 : a.channels.every(function(e) {
                            return eI()(e.permission)
                        })))),
                        X = (null == a ? void 0 : a.orgAccess) == null && (null == a ? void 0 : a.publicAccess) == w.y3$.View,
                        Q = (0, k.qw)(a),
                        ee = (null == a ? void 0 : a.collaborators) || [],
                        en = (null == a ? void 0 : a.invitations) || [],
                        ei = ee.filter(function(e) {
                            return e.permission === w.y3$.Manage
                        }).length,
                        et = [].concat((0, z.Z)(ee), (0, z.Z)(en)).sort(nk),
                        er = function(e) {
                            return function() {
                                f({
                                    title: "updated" === e ? eg.ag._({
                                        id: "Xpw8aE"
                                    }) : eg.ag._({
                                        id: "jwO7L7"
                                    }),
                                    status: "success",
                                    duration: 5e3,
                                    isClosable: !0,
                                    position: "top"
                                })
                            }
                        },
                        eo = null != $ && $.permission ? null == $ ? void 0 : $.permission : o.NoAccess,
                        es = eo === o.NoAccess,
                        ec = (null == $ ? void 0 : $.token) === "",
                        eb = $ && $.permission !== w.y3$.View,
                        e_ = a.orgAccess ? a.orgAccess : o.NoAccess,
                        eM = e_ !== o.NoAccess;
                    return (0, J.jsxs)(J.Fragment, {
                        children: [K && (0, J.jsx)(na, {
                            workspaceId: r,
                            docId: a.id,
                            user: l,
                            existingDocCollaborators: ee,
                            existingInvitations: en,
                            registerDoneFn: d,
                            isDisabled: !u
                        }), (0, J.jsx)(ek.V, {
                            label: (0, J.jsx)(c.cC, {
                                id: "i5bpoc"
                            }),
                            isConnected: y,
                            mb: 4
                        }), (0, J.jsx)(M.x, {
                            fontSize: "sm",
                            color: "gray.600",
                            pt: 2,
                            children: Q
                        }), (0, J.jsxs)(nf, {
                            children: [!1, (0, J.jsx)(nl, {
                                testId: "workspace",
                                title: (0, J.jsx)(c.cC, {
                                    id: "wtxjAY"
                                }),
                                subtitle: eM ? eg.ag._({
                                    id: "aC87LX",
                                    values: {
                                        0: null == a ? void 0 : null === (i = a.organization) || void 0 === i ? void 0 : i.name
                                    }
                                }) : "",
                                img: (0, J.jsx)(eT, {
                                    icon: ej.P8,
                                    showDisabled: !eM
                                }),
                                isDisabled: !K,
                                disabledText: ne[e_].title(),
                                infoIcon: X ? (0, J.jsx)(_.kH, {
                                    label: (0, J.jsx)(c.cC, {
                                        id: "paaewf",
                                        values: {
                                            GAMMA_ARTIFACT_PROPER_NOUN: G.Yc
                                        }
                                    }),
                                    placement: "top",
                                    children: (0, J.jsx)(p.xu, {
                                        color: "yellow.500",
                                        children: (0, J.jsx)(O.G, {
                                            icon: eh.faCircleInfo
                                        })
                                    })
                                }) : void 0,
                                permissionsControl: (0, J.jsx)(nn, {
                                    isDisabled: !K,
                                    selected: e_,
                                    options: [w.y3$.Manage, w.y3$.Edit, w.y3$.Comment, w.y3$.View, o.NoAccess],
                                    onClick: function(e) {
                                        var n = {
                                            id: a.id,
                                            orgAccess: e === o.NoAccess ? null : e
                                        };
                                        F({
                                            variables: n,
                                            optimisticResponse: {
                                                updateDoc: nI(nI({}, n), {}, {
                                                    __typename: "Doc"
                                                })
                                            },
                                            refetchQueries: ["GetDocs"]
                                        }).then(er(e === o.NoAccess ? "removed" : "updated"))
                                    }
                                })
                            }), B && (null === (t = a.channels) || void 0 === t ? void 0 : t.map(function(e) {
                                return (0, J.jsx)(eG, {
                                    channel: e,
                                    doc: a,
                                    isDisabled: !y,
                                    showDisabledIcon: H
                                }, e.id)
                            })), !!a.orgAccess && B && !H && (0, J.jsx)(p.xu, {
                                w: "100%",
                                mt: 2,
                                children: (0, J.jsx)(e$, {
                                    existingChannels: a.channels,
                                    workspaceId: r,
                                    docId: a.id,
                                    isDisabled: !y
                                })
                            }), (0, J.jsx)(ev.U, { in: B && H,
                                children: (0, J.jsxs)(eC.b, {
                                    status: "warning",
                                    children: [(0, J.jsx)(ey.z, {}), (0, J.jsx)(c.cC, {
                                        id: "RZRM4l",
                                        values: {
                                            GAMMA_ARTIFACT_PROPER_NOUN: G.Yc
                                        }
                                    })]
                                })
                            })]
                        }), et && (0, J.jsx)(nf, {
                            showDivider: u,
                            children: et.map(function(e) {
                                var n = e.permission === w.y3$.Manage && ei < 2,
                                    i = !K || n,
                                    t = n ? eg.ag._({
                                        id: "0q0LJR"
                                    }) : void 0,
                                    o = ne[e.permission].title();
                                if ("DocCollaborator" === e.__typename) {
                                    var s, c = e.user;
                                    return (0, J.jsx)(nl, {
                                        testId: c.email,
                                        title: "".concat(c.displayName, " ").concat(c.id === l.id ? eg.ag._({
                                            id: "dDUgzP"
                                        }) : ""),
                                        img: (0, J.jsx)(eO.q, {
                                            name: c.displayName,
                                            src: c.profileImageUrl,
                                            size: "sm"
                                        }),
                                        subtitle: i ? void 0 : c.email,
                                        isDisabled: i,
                                        disabledText: o,
                                        tooltipText: t,
                                        workspaceGuestInvite: !i && e.guest ? (0, J.jsx)(nO, {
                                            name: c.displayName,
                                            workspaceName: null === (s = a.organization) || void 0 === s ? void 0 : s.name,
                                            workspaceId: r,
                                            email: e.user.email
                                        }) : void 0,
                                        permissionsControl: (0, J.jsx)(nn, {
                                            isDisabled: i,
                                            selected: e.permission,
                                            options: [w.y3$.Manage, w.y3$.Edit, w.y3$.Comment, w.y3$.View],
                                            disabledOptions: e.guest ? [{
                                                permission: w.y3$.Manage,
                                                reason: eg.ag._({
                                                    id: "Rxin92"
                                                })
                                            }] : [],
                                            onClick: function(e) {
                                                var n = {
                                                    docId: a.id,
                                                    collaborators: [{
                                                        userId: c.id,
                                                        permission: e
                                                    }]
                                                };
                                                R({
                                                    variables: n,
                                                    optimisticResponse: {
                                                        addCollaborators: {
                                                            id: n.docId,
                                                            collaborators: ee.map(function(n) {
                                                                return nI(nI({}, n), {}, {
                                                                    permission: n.user.id === c.id ? e : n.permission
                                                                })
                                                            }),
                                                            invitations: en,
                                                            __typename: "Doc"
                                                        }
                                                    }
                                                }).then(er("updated")).catch(function() {})
                                            },
                                            onRemove: function() {
                                                var e = {
                                                    docId: a.id,
                                                    collaborators: [{
                                                        userId: c.id
                                                    }]
                                                };
                                                U({
                                                    variables: e,
                                                    optimisticResponse: {
                                                        removeCollaborators: {
                                                            id: e.docId,
                                                            collaborators: ee.filter(function(e) {
                                                                return e.user.id !== c.id
                                                            }),
                                                            invitations: en,
                                                            __typename: "Doc"
                                                        }
                                                    }
                                                }).then(er("removed"))
                                            }
                                        })
                                    }, c.id)
                                }
                                return "DocInvitation" === e.__typename ? (0, J.jsx)(nl, {
                                    testId: e.email,
                                    title: e.email,
                                    subtitle: eg.ag._({
                                        id: "MActeE"
                                    }),
                                    img: (0, J.jsx)(p.Cd, {
                                        bg: "trueblue.50",
                                        size: 8,
                                        children: (0, J.jsx)(O.G, {
                                            icon: em.FU,
                                            size: "sm"
                                        })
                                    }),
                                    isDisabled: i,
                                    disabledText: o,
                                    permissionsControl: (0, J.jsx)(nn, {
                                        selected: e.permission,
                                        options: [w.y3$.Manage, w.y3$.Edit, w.y3$.Comment, w.y3$.View],
                                        disabledOptions: [{
                                            permission: w.y3$.Manage,
                                            reason: eg.ag._({
                                                id: "Rxin92"
                                            })
                                        }],
                                        onClick: function(n) {
                                            var i = {
                                                docId: a.id,
                                                collaborators: [{
                                                    email: e.email,
                                                    permission: n
                                                }]
                                            };
                                            R({
                                                variables: i,
                                                optimisticResponse: {
                                                    addCollaborators: {
                                                        id: i.docId,
                                                        invitations: en.map(function(i) {
                                                            return nI(nI({}, i), {}, {
                                                                permission: i.email === e.email ? n : i.permission
                                                            })
                                                        }),
                                                        collaborators: ee,
                                                        __typename: "Doc"
                                                    }
                                                }
                                            }).then(er("updated")).catch(function() {
                                                console.warn("Error updating permission")
                                            })
                                        },
                                        onRemove: function() {
                                            var n = {
                                                docId: a.id,
                                                collaborators: [{
                                                    email: e.email
                                                }]
                                            };
                                            U({
                                                variables: n,
                                                optimisticResponse: {
                                                    removeCollaborators: {
                                                        id: n.docId,
                                                        invitations: en.filter(function(n) {
                                                            return n.email !== e.email
                                                        }),
                                                        collaborators: ee,
                                                        __typename: "Doc"
                                                    }
                                                }
                                            }).then(er("removed"))
                                        }
                                    })
                                }, e.email) : null
                            })
                        }), u && (0, J.jsxs)(nf, {
                            showDivider: !1,
                            children: [(0, J.jsx)(nl, {
                                title: (0, J.jsx)(c.cC, {
                                    id: "qZu20V"
                                }),
                                subtitle: es ? eg.ag._({
                                    id: "vMZPZT"
                                }) : (0, J.jsx)(nh, {
                                    subtitle: x[eo].subtitle,
                                    tooltipLabel: x[eo].tooltip,
                                    ariaLabel: x[eo].subtitle,
                                    icon: eh.faCircleInfo
                                }),
                                img: (0, J.jsx)(eT, {
                                    icon: ef.nN,
                                    showDisabled: es
                                }),
                                isDisabled: !K,
                                disabledText: ne[eo].title(),
                                permissionsControl: (0, J.jsx)(nn, {
                                    selected: eo,
                                    options: [w.y3$.Edit, w.y3$.Comment, w.y3$.View, o.NoAccess],
                                    onClick: function(e) {
                                        var n = null == $ ? void 0 : $.id,
                                            i = {
                                                id: a.id,
                                                accessLinks: e === o.NoAccess ? [{
                                                    permission: null
                                                }] : [{
                                                    permission: e
                                                }]
                                            };
                                        W({
                                            variables: i,
                                            optimisticResponse: {
                                                updateDoc: nI(nI({}, i), {}, {
                                                    accessLinks: [{
                                                        __typename: "AccessLink",
                                                        id: n || "temp-id",
                                                        permission: e === o.NoAccess ? null : e
                                                    }],
                                                    __typename: "Doc"
                                                })
                                            }
                                        }).then(er(e === o.NoAccess ? "removed" : "updated"))
                                    }
                                })
                            }), (0, J.jsxs)(ev.U, {
                                animateOpacity: !0,
                                in: !!(null == $ ? void 0 : $.permission),
                                children: [(0, J.jsx)(ew.I, {
                                    url: q,
                                    customLabel: eg.ag._({
                                        id: "y1eoq1"
                                    }),
                                    onClick: function() {
                                        (0, eP.J)({
                                            docId: a.id,
                                            source: "sharePanel",
                                            type: "tokenUrl"
                                        })
                                    }
                                }), !ec && (0, J.jsxs)(J.Fragment, {
                                    children: [(0, J.jsx)(ev.U, { in: v,
                                        unmountOnExit: !0,
                                        children: (0, J.jsxs)(D.g, {
                                            mt: 3,
                                            align: "stretch",
                                            spacing: 4,
                                            bg: "gray.50",
                                            p: 6,
                                            borderRadius: "md",
                                            children: [(0, J.jsxs)(S.U, {
                                                spacing: 4,
                                                align: "center",
                                                children: [(0, J.jsx)(p.xu, {
                                                    color: "purple.600",
                                                    children: (0, J.jsx)(O.G, {
                                                        fixedWidth: !0,
                                                        icon: eu._1
                                                    })
                                                }), (0, J.jsx)(M.x, {
                                                    fontSize: "sm",
                                                    children: (0, J.jsx)(c.cC, {
                                                        id: "asiJbp"
                                                    })
                                                })]
                                            }), (0, J.jsxs)(S.U, {
                                                spacing: 4,
                                                align: "center",
                                                children: [(0, J.jsx)(p.xu, {
                                                    color: "purple.600",
                                                    children: (0, J.jsx)(O.G, {
                                                        fixedWidth: !0,
                                                        icon: ed.Md
                                                    })
                                                }), (0, J.jsx)(M.x, {
                                                    fontSize: "sm",
                                                    display: "inline-block",
                                                    children: (0, J.jsx)(c.cC, {
                                                        id: "+g8rkW",
                                                        values: {
                                                            GAMMA_ARTIFACT_PROPER_NOUN: G.Yc,
                                                            GAMMA_PROPER_NOUN: G.N6
                                                        }
                                                    })
                                                })]
                                            }), eb && (0, J.jsxs)(S.U, {
                                                spacing: 4,
                                                align: "center",
                                                children: [(0, J.jsx)(p.xu, {
                                                    color: "purple.600",
                                                    children: (0, J.jsx)(O.G, {
                                                        fixedWidth: !0,
                                                        icon: el.FK
                                                    })
                                                }), (0, J.jsx)(M.x, {
                                                    fontSize: "sm",
                                                    children: (0, J.jsx)(c.cC, {
                                                        id: "NSCwrX",
                                                        values: {
                                                            GAMMA_PROPER_NOUN: G.N6,
                                                            selectedAccessLinkPermission: eo
                                                        },
                                                        components: {
                                                            0: (0, J.jsx)(M.x, {
                                                                as: "span",
                                                                fontWeight: "bold"
                                                            })
                                                        }
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0, J.jsx)(C.k, {
                                        justify: "center",
                                        alignItems: "center",
                                        my: 3,
                                        children: (0, J.jsxs)(S.U, {
                                            spacing: 1,
                                            as: "button",
                                            onClick: function() {
                                                return b(!v)
                                            },
                                            children: [v ? (0, J.jsx)(O.G, {
                                                fixedWidth: !0,
                                                size: "xs",
                                                icon: ex.on
                                            }) : (0, J.jsx)(O.G, {
                                                fixedWidth: !0,
                                                size: "xs",
                                                icon: ep.r8
                                            }), (0, J.jsx)(M.x, {
                                                lineHeight: "normal",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                fontSize: "xs",
                                                fontWeight: "medium",
                                                children: v ? (0, J.jsx)(c.cC, {
                                                    id: "BRvU04"
                                                }) : (0, J.jsx)(c.cC, {
                                                    id: "l0Ck42"
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                nR = i(46802),
                nE = i(34638),
                nN = function(e) {
                    var n = e.visibility,
                        i = e.isFromOtherOrg,
                        t = (0, nE.ff)("white", "var(--chakra-colors-gray-900)");
                    return (0, J.jsxs)(J.Fragment, {
                        children: [i && (0, J.jsx)(O.G, {
                            icon: nm.Gg
                        }), (0, J.jsxs)(p.xu, {
                            as: "span",
                            className: "fa-layers fa-fw",
                            children: [(0, J.jsx)(O.G, {
                                icon: n.primaryIcon
                            }), n.secondaryIcon && (0, J.jsxs)(J.Fragment, {
                                children: [(0, J.jsx)(O.G, {
                                    icon: nR.di,
                                    color: t,
                                    transform: "down-6 right-6"
                                }), (0, J.jsx)(O.G, {
                                    icon: n.secondaryIcon,
                                    transform: "shrink-7 right-6 down-6"
                                })]
                            })]
                        })]
                    })
                },
                nD = i(70110),
                nM = i(2046),
                nS = i(71193),
                nT = i(49294),
                nG = i(25793);

            function nU(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function nz(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? nU(Object(i), !0).forEach(function(n) {
                        (0, ec.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : nU(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var nL = "embed-copied-toast",
                nZ = function(e) {
                    var n = e.embedCode,
                        i = e.isDisabled,
                        t = e.docId,
                        r = (0, Y.p)(),
                        o = (0, I.useState)(!1),
                        s = o[0],
                        a = o[1],
                        l = (0, nT.V)(n),
                        d = l.hasCopied,
                        u = l.onCopy,
                        p = (0, I.useRef)(null);
                    (0, I.useEffect)(function() {
                        p.current && s && (p.current.focus(), p.current.select())
                    }, [s]);
                    var x = (0, I.useCallback)(function() {
                            return a(!0)
                        }, []),
                        f = (0, I.useCallback)(function() {
                            return a(!1)
                        }, []),
                        h = (0, I.useCallback)(function() {
                            u(), r.isActive(nL) || r({
                                id: nL,
                                title: (0, J.jsx)(c.cC, {
                                    id: "ETv+Uw"
                                }),
                                status: "success",
                                duration: 5e3
                            }), (0, eP.J)({
                                docId: t,
                                source: "sharePanel",
                                type: "embed"
                            })
                        }, [t, u, r]);
                    return (0, J.jsxs)(D.g, {
                        spacing: 4,
                        align: "stretch",
                        children: [(0, J.jsx)(nG.g, {
                            ref: p,
                            rows: 5,
                            variant: "filled",
                            fontFamily: "mono",
                            colorScheme: "gray",
                            disabled: i,
                            onClick: x,
                            onBlur: f,
                            isReadOnly: !0,
                            resize: "none",
                            pointerEvents: i ? "none" : void 0,
                            children: n
                        }), (0, J.jsx)(v.z, nz(nz({
                            alignSelf: "flex-end",
                            onClick: h,
                            isDisabled: i,
                            size: "sm"
                        }, i ? {
                            opacity: "1 !important",
                            color: "gray.400",
                            _hover: {
                                opacity: "1"
                            },
                            _active: {
                                boxShadow: "0 none"
                            }
                        } : {}), {}, {
                            children: d ? (0, J.jsx)(c.cC, {
                                id: "6V3Ea3"
                            }) : (0, J.jsx)(c.cC, {
                                id: "Sx4kHi"
                            })
                        }))]
                    })
                };

            function nF(e, n) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), i.push.apply(i, t)
                }
                return i
            }

            function nV(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? nF(Object(i), !0).forEach(function(n) {
                        (0, ec.Z)(e, n, i[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : nF(Object(i)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                    })
                }
                return e
            }
            var nW = function(e) {
                    var n = e.doc,
                        i = e.isSharePublic,
                        t = e.isConnected,
                        r = e.onSharePanelOpen,
                        s = e.onSharePanelClose,
                        a = e.editor,
                        l = (0, Y.p)(),
                        d = (0, I.useState)(!!n.publicAccess),
                        u = d[0],
                        x = d[1],
                        f = (0, w.o6I)(),
                        h = (0, ea.Z)(f, 1)[0],
                        m = (0, I.useMemo)(function() {
                            var e = (0, eN.Gn)({
                                docId: n.id,
                                docTitle: n.title,
                                path: "public",
                                absolute: !0
                            });
                            return i ? e : (0, eN.lT)({
                                docId: n.id,
                                docTitle: n.title
                            })
                        }, [n.id, n.title, i]),
                        j = (0, I.useCallback)(function(e) {
                            x(e.target.checked);
                            var i = {
                                id: n.id,
                                publicAccess: e.target.checked ? w.y3$.View : null
                            };
                            h({
                                variables: i,
                                optimisticResponse: {
                                    updateDoc: nV(nV({}, i), {}, {
                                        __typename: "Doc"
                                    })
                                }
                            }).then(function() {
                                l({
                                    title: e.target.checked ? eg.ag._({
                                        id: "OnQp1B"
                                    }) : eg.ag._({
                                        id: "e5veeL"
                                    }),
                                    status: "success",
                                    duration: 5e3,
                                    isClosable: !0,
                                    position: "top"
                                })
                            })
                        }, [n.id, l, h]),
                        g = n.publicAccess ? ne[w.y3$.View].title() : ne[o.NoAccess].title(),
                        b = i ? (0, J.jsx)(c.cC, {
                            id: "kGj/zu",
                            values: {
                                GAMMA_ARTIFACT_PROPER_NOUN: G.Yc
                            },
                            components: {
                                0: (0, J.jsx)(M.x, {
                                    as: "span",
                                    borderBottom: "0.125em dashed",
                                    borderColor: "gray.400",
                                    cursor: "help"
                                }),
                                1: (0, J.jsx)(_.kH, {
                                    placement: "top",
                                    label: eg.ag._({
                                        id: "kni5pb",
                                        values: {
                                            GAMMA_ARTIFACT_PROPER_NOUN: G.Yc
                                        }
                                    }),
                                    "aria-label": "public access is read only"
                                })
                            }
                        }) : (0, J.jsx)(c.cC, {
                            id: "RmtWc6",
                            values: {
                                GAMMA_ARTIFACT_PROPER_NOUN: G.Yc
                            }
                        });
                    return (0, J.jsxs)(J.Fragment, {
                        children: [(0, J.jsx)(M.x, {
                            fontSize: "sm",
                            color: "gray.600",
                            pt: 2,
                            children: b
                        }), (0, J.jsx)(nf, {
                            showDivider: !1,
                            children: (0, J.jsx)(nl, {
                                title: (0, J.jsx)(c.cC, {
                                    id: "YsO5Wf"
                                }),
                                testId: "public-access",
                                subtitle: (0, J.jsx)(nh, {
                                    subtitle: (0, J.jsx)(c.cC, {
                                        id: "oEQSnD"
                                    }),
                                    tooltipLabel: (0, A.tN)(),
                                    ariaLabel: eg.ag._({
                                        id: "oEQSnD"
                                    }),
                                    icon: eh.faCircleInfo
                                }),
                                img: (0, J.jsx)(eT, {
                                    icon: nD.Xj
                                }),
                                isDisabled: !t,
                                disabledText: g,
                                permissionsControl: (0, J.jsx)(nM.NI, {
                                    children: (0, J.jsx)(nS.r, {
                                        id: "public-access",
                                        isChecked: u,
                                        onChange: j
                                    })
                                })
                            })
                        }), (0, J.jsx)(_.kH, {
                            label: i ? (0, J.jsx)(c.cC, {
                                id: "RFk/SS"
                            }) : (0, J.jsx)(c.cC, {
                                id: "4wpR4l"
                            }),
                            placement: "top",
                            isDisabled: u,
                            children: (0, J.jsx)(p.xu, {
                                children: i ? (0, J.jsx)(ew.I, {
                                    isDisabled: !n.publicAccess,
                                    url: m,
                                    customLabel: eg.ag._({
                                        id: "FO91Ip"
                                    }),
                                    onClick: function() {
                                        (0, eP.J)({
                                            docId: n.id,
                                            source: "sharePanel",
                                            type: "public"
                                        })
                                    }
                                }) : (0, J.jsx)(nZ, {
                                    embedCode: m,
                                    isDisabled: !u,
                                    docId: n.id
                                })
                            })
                        }), i && a && (0, J.jsx)(M.x, {
                            fontSize: "sm",
                            color: "gray.500",
                            mt: 4,
                            children: (0, J.jsx)(c.cC, {
                                id: "a9n+CI",
                                components: {
                                    0: (0, J.jsx)(v.z, {
                                        variant: "link",
                                        as: "span",
                                        size: "sm",
                                        cursor: "pointer",
                                        onClick: function() {
                                            s(), en.pw.emit(en.TI.OPEN_PAGE_SETUP, "preview")
                                        }
                                    })
                                }
                            })
                        }), (0, J.jsx)(et.V, {
                            onClose: s,
                            onOpen: r,
                            segmentEvent: B.AA.GAMMA_PRO_UPSELL_SHARE_SETTINGS_REMOVE_WATERMARK,
                            doc: n
                        })]
                    })
                },
                nY = function(e) {
                    var n, i = e.doc,
                        t = e.editor,
                        r = e.isSharePanelOpen,
                        o = e.onSharePanelClose,
                        R = e.onSharePanelOpen,
                        E = e.onAnalyticsPanelOpen,
                        N = e.view,
                        D = e.setView,
                        M = e.showAnalytics,
                        S = e.showSharePublic,
                        T = e.showEmbed,
                        G = (0, I.useRef)(!1),
                        U = (0, P.SE)(),
                        z = U.user,
                        L = U.currentWorkspace,
                        Z = (0, w.$gs)().isConnected,
                        F = (0, P.py)("manage", i),
                        V = F && E,
                        W = (0, A.ei)({
                            showSharePublic: void 0 === S || S,
                            showEmbed: void 0 === T || T
                        }),
                        Y = (0, I.useState)(function() {
                            return function() {
                                return Promise.resolve()
                            }
                        }),
                        $ = Y[0],
                        q = Y[1],
                        K = (0, I.useCallback)(function() {
                            $().then(function() {
                                D("invite"), o()
                            }, function() {
                                console.debug("[handleSharePanelClose] CollaboratorSearchBar rejected \uD83D\uDC4E\uD83C\uDFFC")
                            })
                        }, [D, o, $]),
                        B = (0, I.useCallback)(function() {
                            E && (o(), E())
                        }, [E, o]);
                    if (!z) return null;
                    var H = (0, k.h_)(i, z),
                        X = H ? (0, k.Xp)()[H] : null,
                        Q = (0, k.Gi)(i, L);
                    if (i && null === X) return console.error("[SharePanel] Unknown VisibilityValue for doc", i), null;
                    var ee = null == i ? void 0 : null === (n = i.organization) || void 0 === n ? void 0 : n.id;
                    return !i || ee || G.current || (console.error("[SharePanelModal] Doc unexpectedly doesnt have a workspaceId", {
                        docId: i.id,
                        organization: i.organization
                    }), G.current = !0), (0, J.jsx)(_.Wk, {
                        isDark: !1,
                        children: (0, J.jsxs)(a.u_, {
                            onEsc: K,
                            isOpen: r,
                            onClose: o,
                            trapFocus: !1,
                            size: "3xl",
                            returnFocusOnClose: !1,
                            children: [(0, J.jsx)(l.Z, {}), (0, J.jsxs)(d.h, {
                                "data-share-panel-modal-content": !0,
                                children: [(0, J.jsxs)(u.x, {
                                    children: [X && (0, J.jsx)(p.xu, {
                                        as: "span",
                                        mr: 3,
                                        children: (0, J.jsx)(nN, {
                                            visibility: X,
                                            isFromOtherOrg: Q
                                        })
                                    }), i ? (0, J.jsx)(c.cC, {
                                        id: "xy569a",
                                        values: {
                                            0: i.title
                                        }
                                    }) : (0, J.jsx)(c.cC, {
                                        id: "Z8lGw6"
                                    })]
                                }), (0, J.jsx)(x.o, {
                                    "data-share-panel-close-button": !0,
                                    onClick: function(e) {
                                        e.preventDefault(), K()
                                    }
                                }), (0, J.jsx)(f.i, {}), i ? (0, J.jsx)(h.f, {
                                    pb: 6,
                                    "data-testid": "share-panel-modal-body",
                                    children: i && ee && (0, J.jsxs)(J.Fragment, {
                                        children: [F && (0, J.jsx)(g.E, {
                                            my: 4,
                                            children: W.map(function(e) {
                                                var n = e.viewKey,
                                                    i = e.icon,
                                                    t = e.ariaLabel,
                                                    r = e.label,
                                                    o = N === n;
                                                return (0, J.jsx)(g.U, {
                                                    children: (0, J.jsx)(v.z, {
                                                        leftIcon: (0, J.jsx)(O.G, {
                                                            icon: i,
                                                            "aria-label": t
                                                        }),
                                                        variant: "ghost",
                                                        size: "sm",
                                                        fontWeight: "600",
                                                        bg: o ? "trueblue.50" : "transparent",
                                                        color: o ? "trueblue.500" : "gray.600",
                                                        onClick: function() {
                                                            return D(n)
                                                        },
                                                        children: r
                                                    })
                                                }, n)
                                            })
                                        }), (!F || "invite" == N) && (0, J.jsx)(nP, {
                                            workspaceId: ee,
                                            doc: i,
                                            user: z,
                                            setVerifySearchDone: q,
                                            canManage: F,
                                            isFromOtherOrg: Q
                                        }), F && ("public" === N || "embed" === N) && (0, J.jsx)(nW, {
                                            doc: i,
                                            isSharePublic: "public" == N,
                                            isConnected: Z,
                                            onSharePanelOpen: R,
                                            onSharePanelClose: o,
                                            editor: t
                                        }), F && "export" === N && (0, J.jsx)(er, {
                                            doc: i,
                                            editor: t,
                                            onSharePanelOpen: R,
                                            onSharePanelClose: o
                                        })]
                                    })
                                }) : (0, J.jsx)(h.f, {
                                    pb: 6,
                                    "data-testid": "share-panel-modal-body",
                                    children: (0, J.jsxs)(m.K, {
                                        children: [(0, J.jsx)(j.O, {
                                            height: "55px"
                                        }), (0, J.jsx)(j.O, {
                                            height: "55px"
                                        }), (0, J.jsx)(j.O, {
                                            height: "55px"
                                        }), (0, J.jsx)(j.O, {
                                            height: "55px"
                                        })]
                                    })
                                }), (0, J.jsx)(f.i, {}), (0, J.jsx)(b.m, {
                                    children: (0, J.jsxs)(C.k, {
                                        justifyContent: "space-between",
                                        flex: 1,
                                        children: [(void 0 === M || M) && V && (0, J.jsx)(v.z, {
                                            isDisabled: !Z,
                                            leftIcon: (0, J.jsx)(O.G, {
                                                icon: s.M
                                            }),
                                            variant: "ghost",
                                            onClick: B,
                                            children: (0, J.jsx)(c.cC, {
                                                id: "YaUqUV"
                                            })
                                        }), (0, J.jsx)(y.L, {}), (0, J.jsx)(v.z, {
                                            onClick: function(e) {
                                                e.preventDefault(), K()
                                            },
                                            variant: "solid",
                                            children: (0, J.jsx)(c.cC, {
                                                id: "DPfwMq"
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                }
        },
        34396: function(e, n, i) {
            i.d(n, {
                Z: function() {
                    return u
                }
            });
            var t = i(12741),
                r = i(81333),
                o = i(55452),
                s = i(55479),
                c = i(2784),
                a = i(23313),
                l = i(75085),
                d = i(52322),
                u = function() {
                    var e = (0, s.p)(),
                        n = (0, a.yx3)({
                            refetchQueries: ["GetChannelDocActivity", "GetChannels"]
                        }),
                        i = (0, r.Z)(n, 1)[0];
                    return {
                        addDocChannel: (0, c.useCallback)(function(n) {
                            var r = n.docId,
                                s = n.doc,
                                c = n.channel,
                                u = n.existingChannels,
                                p = void 0 === u ? [] : u,
                                x = r || (null == s ? void 0 : s.id);
                            if (!x) {
                                console.error("Invalid docid");
                                return
                            }
                            var f = {
                                    input: {
                                        docId: x,
                                        sharing: [{
                                            op: a.Bdm.Add,
                                            path: "/channels",
                                            value: [{
                                                channelId: c.id
                                            }]
                                        }]
                                    }
                                },
                                h = (null == s ? void 0 : s.title) || l.Yc,
                                m = [].concat((0, t.Z)(p), [{
                                    id: c.id,
                                    slug: c.slug,
                                    name: c.name,
                                    permission: a.y3$.Comment
                                }]).sort(function(e, n) {
                                    return e.slug.localeCompare(n.slug, "en")
                                });
                            i({
                                variables: f,
                                update: function(e, n) {
                                    var i = n.data;
                                    e.writeFragment({
                                        id: "Doc:".concat(x),
                                        fragment: a.IiT,
                                        data: null == i ? void 0 : i.updatePublicChannels
                                    })
                                },
                                optimisticResponse: {
                                    updatePublicChannels: {
                                        id: f.input.docId,
                                        channels: m
                                    }
                                }
                            }).then(function() {
                                e({
                                    title: (0, d.jsx)(o.cC, {
                                        id: "7hDHpt",
                                        values: {
                                            title: h
                                        }
                                    }),
                                    description: (0, d.jsx)(o.cC, {
                                        id: "A2xcFn",
                                        values: {
                                            0: c.name,
                                            GAMMA_ARTIFACT_PROPER_NOUN: l.Yc
                                        }
                                    }),
                                    status: "success",
                                    duration: 5e3,
                                    isClosable: !0,
                                    position: "top"
                                })
                            }, function(n) {
                                e({
                                    title: (0, d.jsx)(o.cC, {
                                        id: "bLdU0Q",
                                        values: {
                                            0: c.name,
                                            title: h
                                        }
                                    }),
                                    description: n.message,
                                    duration: null,
                                    status: "error",
                                    isClosable: !0,
                                    position: "top"
                                })
                            })
                        }, [i, e]),
                        removeDocChannel: (0, c.useCallback)(function(n, t) {
                            if (t) {
                                var r, s = {
                                    input: {
                                        docId: n.id,
                                        sharing: [{
                                            op: a.Bdm.Remove,
                                            path: "/channels",
                                            value: [{
                                                channelId: t
                                            }]
                                        }]
                                    }
                                };
                                i({
                                    variables: s,
                                    update: function(e, i) {
                                        var t = i.data;
                                        e.writeFragment({
                                            id: "Doc:".concat(n.id),
                                            fragment: a.P6u,
                                            data: null == t ? void 0 : t.updatePublicChannels
                                        })
                                    },
                                    optimisticResponse: {
                                        updatePublicChannels: {
                                            id: s.input.docId,
                                            channels: null === (r = n.channels) || void 0 === r ? void 0 : r.filter(function(e) {
                                                return e.id !== t
                                            })
                                        }
                                    }
                                }).then(function() {
                                    e({
                                        title: (0, d.jsx)(o.cC, {
                                            id: "qsnpV6",
                                            values: {
                                                GAMMA_ARTIFACT_PROPER_NOUN: l.Yc
                                            }
                                        }),
                                        status: "success",
                                        duration: 1e4,
                                        position: "top"
                                    })
                                }).catch(function(n) {
                                    e({
                                        title: (0, d.jsx)(o.cC, {
                                            id: "+yMzgs"
                                        }),
                                        description: n.message,
                                        status: "error",
                                        duration: 3e3,
                                        isClosable: !0,
                                        position: "top"
                                    }), console.error("[addRemoveDocChannel] Error removing channel:", n.message)
                                })
                            }
                        }, [i, e])
                    }
                }
        },
        92779: function(e, n, i) {
            i.d(n, {
                Gi: function() {
                    return b
                },
                Xp: function() {
                    return O
                },
                h_: function() {
                    return _
                },
                nZ: function() {
                    return A
                },
                qw: function() {
                    return I
                },
                uG: function() {
                    return k
                }
            });
            var t = i(12741),
                r = i(95235),
                o = i(52622),
                s = i(11530),
                c = i(53110),
                a = i(70110),
                l = i(43794),
                d = i(60239),
                u = i(60670),
                p = i(76547),
                x = i(61751),
                f = i(55452),
                h = i(87254),
                m = i(75085),
                j = i(16092),
                g = i(51823),
                v = i(52322),
                b = function(e, n) {
                    var i;
                    return (null == e ? void 0 : null === (i = e.organization) || void 0 === i ? void 0 : i.id) !== (null == n ? void 0 : n.id)
                },
                C = {
                    PRIVATE: "private",
                    LINK_VIEW: "link-view",
                    LINK_COMMENT: "link-comment",
                    LINK_EDIT: "link-edit",
                    INDIVIDUAL: "individual",
                    ORG_VIEW: "org-view",
                    ORG_COMMENT: "org-comment",
                    ORG_EDIT: "org-edit",
                    ORG_MANAGE: "org-manage",
                    CHANNEL_PRIVATE: "channel-private",
                    PUBLIC: "public"
                },
                y = [C.ORG_VIEW, C.ORG_COMMENT, C.ORG_EDIT, C.ORG_MANAGE],
                O = function() {
                    var e;
                    return e = {}, (0, r.Z)(e, C.PRIVATE, {
                        title: function() {
                            return h.ag._({
                                id: "IZiYjM",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: m.Yc
                                }
                            })
                        },
                        subtitle: function() {
                            return h.ag._({
                                id: "nHujJB",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: m.Yc
                                }
                            })
                        },
                        primaryIcon: c.by
                    }), (0, r.Z)(e, C.LINK_VIEW, {
                        title: function() {
                            return h.ag._({
                                id: "Pb5t/X",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: m.Yc
                                }
                            })
                        },
                        primaryIcon: x.nN
                    }), (0, r.Z)(e, C.LINK_COMMENT, {
                        title: function() {
                            return h.ag._({
                                id: "FUtIA5",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: m.Yc
                                }
                            })
                        },
                        primaryIcon: x.nN
                    }), (0, r.Z)(e, C.LINK_EDIT, {
                        title: function() {
                            return h.ag._({
                                id: "tNOSZi",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: m.Yc
                                }
                            })
                        },
                        primaryIcon: x.nN
                    }), (0, r.Z)(e, C.INDIVIDUAL, {
                        title: function() {
                            return h.ag._({
                                id: "IB6oAl",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: m.Yc
                                }
                            })
                        },
                        subtitle: function(e) {
                            return "".concat(e, " can access this ").concat(m.Yc, ".")
                        },
                        primaryIcon: s.IL
                    }), (0, r.Z)(e, C.ORG_VIEW, {
                        title: function(e) {
                            return h.ag._({
                                id: "S+losC",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: m.Yc,
                                    org: e
                                }
                            })
                        },
                        primaryIcon: o.P8,
                        secondaryIcon: p.Md
                    }), (0, r.Z)(e, C.ORG_COMMENT, {
                        title: function(e) {
                            return h.ag._({
                                id: "acq2w5",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: m.Yc,
                                    org: e
                                }
                            })
                        },
                        primaryIcon: o.P8,
                        secondaryIcon: u.Mz
                    }), (0, r.Z)(e, C.ORG_EDIT, {
                        title: function(e) {
                            return h.ag._({
                                id: "FFdz7p",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: m.Yc,
                                    org: e
                                }
                            })
                        },
                        primaryIcon: o.P8,
                        secondaryIcon: d.Tz
                    }), (0, r.Z)(e, C.ORG_MANAGE, {
                        title: function(e) {
                            return h.ag._({
                                id: "3yNlmN",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: m.Yc,
                                    org: e
                                }
                            })
                        },
                        primaryIcon: o.P8
                    }), (0, r.Z)(e, C.CHANNEL_PRIVATE, {
                        title: function() {
                            return h.ag._({
                                id: "Tw6Jzi"
                            })
                        },
                        primaryIcon: j.Ty
                    }), (0, r.Z)(e, C.PUBLIC, {
                        title: function() {
                            return h.ag._({
                                id: "NMHF69",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: m.Yc
                                }
                            })
                        },
                        primaryIcon: a.Xj
                    }), e
                },
                _ = function(e, n) {
                    var i;
                    return e ? null != e && e.publicAccess ? C.PUBLIC : (null == e ? void 0 : e.orgAccess) === "manage" ? C.ORG_MANAGE : (null == e ? void 0 : e.orgAccess) === "edit" ? C.ORG_EDIT : (null == e ? void 0 : e.orgAccess) === "comment" ? C.ORG_COMMENT : (null == e ? void 0 : e.orgAccess) === "view" ? C.ORG_VIEW : null != e && e.channels && e.channels.some(function(e) {
                        return null !== e.permission
                    }) ? C.CHANNEL_PRIVATE : null != e && e.collaborators && (null == e ? void 0 : null === (i = e.collaborators) || void 0 === i ? void 0 : i.length) > 1 ? C.INDIVIDUAL : null != e && e.accessLinks && e.accessLinks.some(function(e) {
                        return "view" === e.permission && "" === e.token
                    }) ? C.LINK_VIEW : null != e && e.accessLinks && e.accessLinks.some(function(e) {
                        return "comment" === e.permission && "" === e.token
                    }) ? C.LINK_COMMENT : null != e && e.accessLinks && e.accessLinks.some(function(e) {
                        return "edit" === e.permission && "" === e.token
                    }) ? C.LINK_EDIT : k(e, n) ? C.PRIVATE : C.INDIVIDUAL : null
                },
                I = function(e) {
                    return null != e && e.publicAccess ? h.ag._({
                        id: "gJUdlS",
                        values: {
                            GAMMA_ARTIFACT_PROPER_NOUN: m.Yc
                        }
                    }) : null != e && e.orgAccess ? h.ag._({
                        id: "5Ma3Lv",
                        values: {
                            GAMMA_ARTIFACT_PROPER_NOUN: m.Yc
                        }
                    }) : h.ag._({
                        id: "QbKKqw",
                        values: {
                            GAMMA_ARTIFACT_PROPER_NOUN: m.Yc
                        }
                    })
                },
                w = function(e, n, i) {
                    if (!n) return [];
                    var r, d, u = (null == e ? void 0 : null === (r = e.channels) || void 0 === r ? void 0 : r.map(function(e) {
                            var n = e.id,
                                i = e.name,
                                t = e.slug;
                            return {
                                id: n,
                                label: i,
                                href: (0, g.j)({
                                    id: n,
                                    slug: t
                                }),
                                icon: j.Ty
                            }
                        })) || [],
                        p = _(e, n),
                        x = b(e, i),
                        h = x ? [{
                            id: "shared-from-external-org",
                            label: null != e && null !== (d = e.organization) && void 0 !== d && d.name ? (0, v.jsx)(f.cC, {
                                id: "lFZJ+N",
                                values: {
                                    0: e.organization.name
                                }
                            }) : (0, v.jsx)(f.cC, {
                                id: "qn35Ez"
                            }),
                            icon: l.Gg,
                            color: "gray.500"
                        }] : [];
                    if (p === C.PUBLIC) return [{
                        id: "public",
                        label: (0, v.jsx)(f.cC, {
                            id: "7d1a0d"
                        }),
                        icon: a.Xj,
                        color: "gray.500"
                    }].concat(h, (0, t.Z)(u));
                    if (p === C.PRIVATE) return [{
                        id: "private",
                        label: (0, v.jsx)(f.cC, {
                            id: "zwBp5t"
                        }),
                        icon: c.by,
                        color: "gray.500"
                    }].concat(h);
                    if (p === C.INDIVIDUAL) {
                        var m = (e.collaborators || []).filter(function(e) {
                            return e.user.id !== n.id
                        }).length;
                        return [{
                            id: "collaborators",
                            label: (0, v.jsx)(f.cC, {
                                id: "o2NxSP",
                                values: {
                                    numCollaborators: m
                                }
                            }),
                            icon: s.IL,
                            color: "gray.500"
                        }].concat(h)
                    }
                    return x ? h : p && y.includes(p) ? [{
                        id: "workspace",
                        label: (0, v.jsx)(f.cC, {
                            id: "0Gd0NU"
                        }),
                        icon: o.P8,
                        color: "gray.500"
                    }].concat(h, (0, t.Z)(u)) : u
                },
                A = function(e) {
                    var n = e.doc,
                        i = e.user,
                        t = e.currentWorkspace,
                        r = e.channelToExclude;
                    return w(n, i, t).filter(function(e) {
                        return e.id !== r
                    })
                },
                k = function(e, n) {
                    var i;
                    return e && n && !e.orgAccess && !e.publicAccess && (null === (i = e.createdBy) || void 0 === i ? void 0 : i.id) === n.id
                }
        },
        27901: function(e, n, i) {
            i.d(n, {
                M: function() {
                    return R
                }
            });
            var t = i(20406),
                r = i(81333),
                o = i(28526),
                s = i.n(o),
                c = i(55452),
                a = i(87254),
                l = i(20010),
                d = i(56915),
                u = i(48273),
                p = i(92619),
                x = i(64827),
                f = i(2167),
                h = i(71354),
                m = i(2046),
                j = i(70287),
                g = i(27777),
                v = i(80353),
                b = i(76648),
                C = i(45650),
                y = i(55966),
                O = i(5632),
                _ = i(2784),
                I = i(23313),
                w = i(76394),
                A = i(42879),
                k = i(10710),
                P = i(52322),
                R = function(e) {
                    var n = e.isOpen,
                        i = e.onClose,
                        o = e.existingDocId,
                        R = (0, _.useRef)(null),
                        E = (0, _.useState)(!1),
                        N = E[0],
                        D = E[1],
                        M = (0, k.SE)().currentWorkspace,
                        S = (0, _.useState)(""),
                        T = S[0],
                        G = S[1],
                        U = (0, I.V$$)(),
                        z = (0, r.Z)(U, 1)[0],
                        L = (0, I.VP0)(),
                        Z = (0, r.Z)(L, 1)[0],
                        F = (0, w.b)(),
                        V = (0, O.useRouter)().push,
                        W = (0, _.useCallback)((0, t.Z)(s().mark(function e() {
                            var n, i;
                            return s().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return D(!0), Z({
                                            variables: {
                                                id: o,
                                                orgAccess: I.y3$.Manage,
                                                themeId: null
                                            }
                                        }), e.next = 6, z({
                                            variables: {
                                                input: {
                                                    workspaceId: null == M ? void 0 : M.id,
                                                    name: T,
                                                    domains: [],
                                                    routes: [{
                                                        docId: o,
                                                        path: "/"
                                                    }]
                                                }
                                            }
                                        });
                                    case 6:
                                        if (i = null == (n = e.sent.data) ? void 0 : n.createSite) {
                                            e.next = 12;
                                            break
                                        }
                                        return console.error("[CreateSiteModal] Failed to create site, no site returned"), e.abrupt("return");
                                    case 12:
                                        V((0, A.ri)(i.id, i.name)), D(!1);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [z, null == M ? void 0 : M.id, o, T, V, Z]),
                        Y = (0, _.useCallback)((0, t.Z)(s().mark(function e() {
                            var n, i;
                            return s().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return D(!0), e.next = 3, z({
                                            variables: {
                                                input: {
                                                    workspaceId: null == M ? void 0 : M.id,
                                                    name: T,
                                                    domains: [],
                                                    routes: []
                                                }
                                            }
                                        });
                                    case 3:
                                        if (i = null == (n = e.sent.data) ? void 0 : n.createSite) {
                                            e.next = 9;
                                            break
                                        }
                                        return console.error("[CreateSiteModal] Failed to create site, no site returned"), e.abrupt("return");
                                    case 9:
                                        F({
                                            siteId: null == i ? void 0 : i.id,
                                            routes: null == i ? void 0 : i.routes,
                                            title: "Home",
                                            path: "/"
                                        }).then(function() {
                                            V((0, A.ri)(i.id, i.name)), D(!1)
                                        });
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [F, z, null == M ? void 0 : M.id, T, V]),
                        $ = (0, _.useCallback)((0, t.Z)(s().mark(function e() {
                            return s().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", o ? W() : Y());
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [o, W, Y]),
                        q = T.length > 0;
                    return (0, P.jsx)(y.Wk, {
                        isDark: !1,
                        children: (0, P.jsxs)(l.u_, {
                            isOpen: n,
                            onClose: i,
                            initialFocusRef: R,
                            size: "2xl",
                            children: [(0, P.jsx)(d.Z, {}), (0, P.jsxs)(u.h, {
                                children: [(0, P.jsx)(p.x, {
                                    children: (0, P.jsx)(c.cC, {
                                        id: "JHMOcq"
                                    })
                                }), (0, P.jsx)(x.o, {}), (0, P.jsx)(f.f, {
                                    children: (0, P.jsx)(h.K, {
                                        spacing: 4,
                                        children: (0, P.jsxs)(m.NI, {
                                            children: [(0, P.jsx)(j.l, {
                                                children: (0, P.jsx)(c.cC, {
                                                    id: "Lve3H6"
                                                })
                                            }), (0, P.jsx)(g.I, {
                                                ref: R,
                                                placeholder: a.ag._({
                                                    id: "tlD7N3"
                                                }),
                                                onChange: function(e) {
                                                    G(e.target.value)
                                                },
                                                onKeyDown: function(e) {
                                                    q && "Enter" === e.key && $()
                                                }
                                            })]
                                        })
                                    })
                                }), (0, P.jsx)(v.m, {
                                    children: (0, P.jsxs)(b.h, {
                                        children: [(0, P.jsx)(C.z, {
                                            variant: "ghost",
                                            onClick: i,
                                            children: (0, P.jsx)(c.cC, {
                                                id: "dEgA5A"
                                            })
                                        }), (0, P.jsx)(C.z, {
                                            variant: "solid",
                                            onClick: $,
                                            isDisabled: !q,
                                            isLoading: N,
                                            children: (0, P.jsx)(c.cC, {
                                                id: "JHMOcq"
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                }
        },
        76394: function(e, n, i) {
            i.d(n, {
                b: function() {
                    return m
                }
            });
            var t = i(20406),
                r = i(81333),
                o = i(28526),
                s = i.n(o),
                c = i(5632),
                a = i(2784),
                l = i(23313),
                d = i(20252),
                u = i(42879),
                p = i(36738),
                x = i(95173),
                f = i(33295),
                h = i(3915),
                m = function() {
                    var e, n = (0, h.SE)(),
                        i = n.user,
                        o = n.currentWorkspace,
                        m = (0, l.CsQ)(),
                        j = (0, r.Z)(m, 1)[0],
                        g = (0, l.qbt)(),
                        v = (0, r.Z)(g, 1)[0],
                        b = (0, c.useRouter)().push;
                    return (0, a.useCallback)((e = (0, t.Z)(s().mark(function e(n) {
                        var t, r, c, a, h, m, g, C, y;
                        return s().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = n.title, r = n.path, c = n.siteId, a = n.routes, r.startsWith("/")) {
                                        e.next = 4;
                                        break
                                    }
                                    return console.error("[AddNewPageToSite] Path must start with /. Aborting.", r), e.abrupt("return");
                                case 4:
                                    if (!(!(null != o && o.id) || !c || !a)) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    return h = (0, p.R$)(i, {
                                        docFlags: {
                                            cardLayoutsEnabled: !0
                                        }
                                    }), m = (0, f.q)(h), e.next = 10, j({
                                        variables: {
                                            workspaceId: null == o ? void 0 : o.id,
                                            title: t,
                                            source: l.L17.SitesAddPage,
                                            initialContent: {
                                                ydoc: m,
                                                schemaVersion: x.bI,
                                                editors: [null == i ? void 0 : i.id]
                                            },
                                            orgAccess: l.y3$.Manage
                                        }
                                    });
                                case 10:
                                    if (C = null == (g = e.sent.data) ? void 0 : g.createDoc.id, (0, d.Q)({
                                            doc_id: C,
                                            source: l.L17.SitesAddPage,
                                            channel: null
                                        }), !(!c || !C)) {
                                        e.next = 17;
                                        break
                                    }
                                    return console.error("[AddPageModal] Site or doc id is undefined. Cannot add route."), e.abrupt("return");
                                case 17:
                                    return e.next = 19, v({
                                        variables: {
                                            input: {
                                                siteId: c,
                                                docId: C,
                                                path: r
                                            }
                                        },
                                        refetchQueries: ["GetSite"]
                                    });
                                case 19:
                                    return y = (0, u.as)(c, C), console.debug("[AddPageModal] Doc created. Adding route then navigating to editor", C), e.next = 23, b(y);
                                case 23:
                                    return e.abrupt("return", C);
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(n) {
                        return e.apply(this, arguments)
                    }), [v, j, null == o ? void 0 : o.id, b, i])
                }
        }
    }
]);
//# sourceMappingURL=4188-a265e928dd8fe678.js.map