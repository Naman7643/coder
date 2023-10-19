"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3275], {
        69232: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return a
                }
            });
            var r = n(47457),
                i = n(91012),
                o = n(49929),
                s = n(52322),
                a = function(e) {
                    var t = e.length,
                        n = e.idealLength,
                        a = e.maxLength;
                    return (0, s.jsxs)(i.x, {
                        fontSize: "xs",
                        color: t >= a ? "red.400" : "gray.500",
                        children: [t >= a && (0, s.jsx)(o.G, {
                            icon: r.e7
                        }), " ", t, "/", n]
                    })
                }
        },
        56317: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return tX
                }
            });
            var r = n(7099),
                i = n(55452),
                o = n(20010),
                s = n(56915),
                a = n(48273),
                c = n(40110),
                l = n(80353),
                d = n(11919),
                u = n(45650),
                f = n(49929),
                p = n(55966),
                h = n(2784),
                x = n(13720),
                m = n(12741),
                g = n(20412),
                v = n(60577),
                j = n(87254),
                b = n(2167),
                y = n(71354),
                C = n(50390),
                O = n(81927),
                w = n(94659),
                k = n(53738),
                S = n(91012),
                E = n(72360),
                I = n(66724),
                P = n(18751),
                D = n(23313),
                A = n(8388),
                T = n(51331),
                R = n(49922),
                _ = n(82483),
                M = n(32333),
                L = n(10710),
                z = "gray.700",
                N = n(95235),
                Z = n(82269),
                G = n(48322),
                F = n(52322),
                U = ["error", "refetch"];

            function W(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function H(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? W(Object(n), !0).forEach(function(t) {
                        (0, N.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : W(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var V = function(e) {
                    var t = e.error,
                        n = e.refetch,
                        r = (0, Z.Z)(e, U);
                    return (0, F.jsx)(k.xu, H(H({
                        px: 6,
                        py: 4
                    }, r), {}, {
                        children: (0, F.jsxs)(E.b, {
                            p: 6,
                            status: "error",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            children: [(0, F.jsx)(G.z, {
                                mr: 0,
                                boxSize: "30px",
                                alignSelf: "center"
                            }), (0, F.jsx)(I.C, {
                                mt: 4,
                                mb: 2,
                                fontSize: "md",
                                children: (0, F.jsx)(i.cC, {
                                    id: "uNQm3r"
                                })
                            }), (0, F.jsx)(P.X, {
                                maxWidth: "md",
                                children: t.message
                            }), (0, F.jsx)(u.z, {
                                mt: 4,
                                onClick: function() {
                                    return n()
                                },
                                children: (0, F.jsx)(i.cC, {
                                    id: "6gRgw8"
                                })
                            })]
                        })
                    }))
                },
                B = n(19664),
                q = n(97269),
                K = n(92619),
                Y = n(85982),
                Q = n(64827),
                X = function() {
                    return j.ag._({
                        id: "QbrUIo"
                    })
                },
                J = function() {
                    return j.ag._({
                        id: "FbBkvL"
                    })
                },
                $ = function(e) {
                    var t = e.isAnalyticsLoading,
                        n = e.hasError,
                        r = e.view,
                        o = e.setView,
                        s = e.description;
                    return n ? (0, F.jsx)(K.x, {
                        children: (0, F.jsx)(i.cC, {
                            id: "ZlwDi6"
                        })
                    }) : (0, F.jsxs)(d.k, {
                        direction: "column",
                        flex: 1,
                        children: [(0, F.jsx)(K.x, {
                            children: t ? (0, F.jsx)(ee, {}) : (0, F.jsxs)(F.Fragment, {
                                children: [(0, F.jsx)(i.cC, {
                                    id: "ZlwDi6"
                                }), (0, F.jsxs)(w.g, {
                                    align: "stretch",
                                    spacing: 4,
                                    children: [(0, F.jsx)(S.x, {
                                        color: "gray.500",
                                        fontSize: "sm",
                                        fontWeight: "normal",
                                        letterSpacing: "normal",
                                        children: s
                                    }), (0, F.jsxs)(Y.E, {
                                        children: [(0, F.jsx)(Y.U, {
                                            children: (0, F.jsx)(u.z, {
                                                leftIcon: (0, F.jsx)(f.G, {
                                                    icon: q.M,
                                                    "aria-label": X()
                                                }),
                                                variant: "ghost",
                                                fontWeight: "600",
                                                bg: "deckView" === r ? "trueblue.50" : "transparent",
                                                color: "deckView" === r ? "trueblue.500" : z,
                                                onClick: function() {
                                                    return o("deckView")
                                                },
                                                children: X()
                                            })
                                        }), (0, F.jsx)(Y.U, {
                                            children: (0, F.jsx)(u.z, {
                                                leftIcon: (0, F.jsx)(f.G, {
                                                    icon: B.AG,
                                                    "aria-label": J()
                                                }),
                                                variant: "ghost",
                                                fontWeight: "600",
                                                bg: "cardEngagement" === r ? "trueblue.50" : "transparent",
                                                color: "cardEngagement" === r ? "trueblue.500" : z,
                                                onClick: function() {
                                                    return o("cardEngagement")
                                                },
                                                children: J()
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }), (0, F.jsx)(Q.o, {})]
                    })
                },
                ee = function() {
                    return (0, F.jsxs)(w.g, {
                        align: "stretch",
                        spacing: 4,
                        children: [(0, F.jsx)(O.O, {
                            h: 12,
                            width: "30%"
                        }), (0, F.jsx)(O.O, {
                            h: 4,
                            width: "80%"
                        })]
                    })
                },
                et = n(74373),
                en = n(68871),
                er = n(8283),
                ei = n(98875),
                eo = n(46358),
                es = n(62141),
                ea = n(98621),
                ec = n.n(ea),
                el = n(74542),
                ed = function(e) {
                    var t = e.degree,
                        n = e.alpha,
                        r = e.startColor,
                        i = void 0 === r ? "#ECC94B" : r,
                        o = e.endColor,
                        s = void 0 === o ? "#38A169" : o;
                    if (Number.isNaN(t)) return ec()("#e5e0df").toHex8String();
                    var a = ec()(i).toHsl(),
                        c = ec()(s).toHsl();
                    return ec()({
                        h: (0, el.t7)(a.h, c.h, t),
                        s: (0, el.t7)(a.s, c.s, t),
                        l: (0, el.t7)(a.l, c.l, t),
                        a: void 0 === n ? 1 : n
                    }).toHex8String()
                },
                eu = function(e, t) {
                    return e.reduce(function(e, n) {
                        return e[n.cardId] = n[t], e
                    }, {})
                },
                ef = function e(t, n) {
                    var r, i = 0;
                    for (var o in t) i += (null !== (r = n[o]) && void 0 !== r ? r : 0) + e(t[o], n);
                    return i
                },
                ep = function(e, t) {
                    var n, r = 0;
                    for (var i in e) r = Math.max((null !== (n = t[i]) && void 0 !== n ? n : 0) + ef(e[i], t), r);
                    return r
                },
                eh = n(81333),
                ex = n(56623),
                em = n(51068),
                eg = n(67784),
                ev = n(93319),
                ej = n(67887),
                eb = n(49747),
                ey = n(34717),
                eC = n(8635),
                eO = n(43227),
                ew = n(34860),
                ek = n(23769),
                eS = n(13813),
                eE = n(16844),
                eI = n(62349),
                eP = n.n(eI);

            function eD(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function eA(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eD(Object(n), !0).forEach(function(t) {
                        (0, N.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eD(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var eT = function(e) {
                    var t = e.cardsViewed,
                        n = e.totalCards,
                        r = ed({
                            degree: t / n
                        }),
                        o = n > 0;
                    return (0, F.jsxs)(er.U, {
                        spacing: 3,
                        children: [(0, F.jsxs)(d.k, {
                            flex: 1,
                            position: "relative",
                            children: [(0, F.jsx)(eE.E, {
                                h: 4,
                                flex: 1,
                                borderRadius: "sm",
                                value: t,
                                max: o ? n : void 0,
                                bg: "gray.200",
                                sx: {
                                    "> div": {
                                        bg: r
                                    }
                                }
                            }), o && t === n && (0, F.jsx)(e_, {
                                top: 0,
                                right: 0,
                                transform: "translate(50%,-50%)",
                                position: "absolute"
                            })]
                        }), (0, F.jsx)(S.x, {
                            w: {
                                base: 10,
                                lg: 12
                            },
                            fontSize: "sm",
                            whiteSpace: "nowrap",
                            textAlign: "left",
                            children: o ? "".concat(t, "/").concat(n) : (0, F.jsx)(i.cC, {
                                id: "8Va3Pt"
                            })
                        })]
                    })
                },
                eR = function(e) {
                    var t = e.cardCount,
                        n = (0, h.useMemo)(function() {
                            return eP()(1, t)
                        }, [t]);
                    return (0, F.jsxs)(er.U, {
                        spacing: 3,
                        filter: "blur(3px)",
                        children: [(0, F.jsx)(d.k, {
                            flex: 1,
                            position: "relative",
                            children: (0, F.jsx)(eE.E, {
                                h: 4,
                                flex: 1,
                                borderRadius: "sm",
                                value: n,
                                max: t,
                                bg: "gray.300",
                                sx: {
                                    "> div": {
                                        bg: "gray.300"
                                    }
                                }
                            })
                        }), (0, F.jsxs)(S.x, {
                            w: {
                                base: 10,
                                lg: 12
                            },
                            fontSize: "sm",
                            whiteSpace: "nowrap",
                            textAlign: "left",
                            color: "gray.600",
                            children: [n, "/", t]
                        })]
                    })
                },
                e_ = function(e) {
                    var t = (0, ek.Z)({}, e);
                    return (0, F.jsx)(k.Cd, eA(eA({
                        bg: "green.500",
                        size: "18px",
                        border: "2px solid white",
                        color: "white"
                    }, t), {}, {
                        children: (0, F.jsx)(f.G, {
                            icon: eS.LE,
                            "aria-label": j.ag._({
                                id: "y886Ns"
                            }),
                            size: "xs"
                        })
                    }))
                };

            function eM(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function eL(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eM(Object(n), !0).forEach(function(t) {
                        (0, N.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eM(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ez = function(e) {
                    var t, n = e.cards,
                        r = e.isColorized,
                        i = void 0 !== r && r,
                        o = e.scaleToMax,
                        s = void 0 !== o && o,
                        a = e.includeChildren,
                        c = e.showViewersPercent,
                        l = void 0 !== c && c,
                        d = e.leftLabel,
                        u = e.rightLabel,
                        f = e.tooltipLabel,
                        x = e.cardLookupTable,
                        g = e.onAnalyticsPanelClose,
                        v = (t = a ? ep(n, x) : Math.max.apply(Math, (0, m.Z)(Object.values(x))), function(e) {
                            return (0, el.t7)(0, 100, e / t)
                        }),
                        j = (0, h.useCallback)(function(e) {
                            return v(e)
                        }, [v]);
                    return (0, F.jsxs)(k.xu, {
                        mt: 6,
                        mb: 4,
                        children: [(0, F.jsxs)(er.U, {
                            mb: 3,
                            children: [(0, F.jsx)(er.U, {
                                children: (0, F.jsx)(p.NZ, {
                                    children: d
                                })
                            }), (0, F.jsx)(ev.L, {}), (0, F.jsx)(er.U, {
                                children: (0, F.jsx)(p.kH, {
                                    placement: "top",
                                    label: f,
                                    children: (0, F.jsx)(er.U, {
                                        children: (0, F.jsx)(p.NZ, {
                                            borderBottom: "0.125em dashed",
                                            borderBottomColor: "gray.400",
                                            children: u
                                        })
                                    })
                                })
                            })]
                        }), (0, F.jsx)(k.xu, {
                            width: "100%",
                            children: Object.entries(n).map(function(e) {
                                var t, n = (0, eh.Z)(e, 2),
                                    r = n[0],
                                    o = n[1];
                                return (0, F.jsx)(eN, {
                                    id: r,
                                    childCards: o,
                                    percentage: null !== (t = x[r]) && void 0 !== t ? t : 0,
                                    calculatePercentageScale: j,
                                    isColorized: i,
                                    cardLookupTable: x,
                                    scaleToMax: s,
                                    includeChildren: a,
                                    showViewersPercent: l,
                                    onAnalyticsPanelClose: g
                                }, r)
                            })
                        })]
                    })
                },
                eN = function e(t) {
                    var n = t.id,
                        r = t.cardLookupTable,
                        o = t.childCards,
                        s = t.percentage,
                        a = t.calculatePercentageScale,
                        c = t.isColorized,
                        l = t.scaleToMax,
                        u = t.includeChildren,
                        x = t.showViewersPercent,
                        m = t.onAnalyticsPanelClose,
                        g = (0, ei.ye)("screenshotsEnabled"),
                        v = (0, h.useState)(!1),
                        j = v[0],
                        b = v[1],
                        C = (0, ew.Ux)({
                            placement: "top",
                            gutter: 12,
                            enterDelay: 200
                        }),
                        O = C.referenceRef,
                        w = C.popperRef,
                        E = C.isHovering,
                        I = C.getPopperProps,
                        P = C.onMouseOver,
                        D = C.onMouseOut,
                        A = (0, h.useCallback)(function() {
                            b(!j)
                        }, [j]),
                        T = (0, h.useCallback)(function() {
                            (0, eO.D)({
                                cardId: n
                            }), m()
                        }, [n, m]),
                        R = (0, eC.c)(n),
                        _ = (0, eC.T)({
                            cardId: n
                        }).title,
                        M = Object.values(o).length > 0,
                        L = 0 === s,
                        z = u ? s + ef(o, r) : s,
                        N = j ? z : 0,
                        Z = l ? a(z) : Math.min(100, N),
                        G = j ? s : z,
                        U = l ? a(G) : Math.min(100, G),
                        W = {
                            startColor: "#F6AD55",
                            endColor: "#68D391"
                        },
                        H = c ? ed(eL({
                            degree: Z / 100
                        }, W)) : "trueblue.50",
                        V = c ? ed(eL({
                            degree: U / 100
                        }, W)) : "trueblue.100";
                    return (0, F.jsxs)(y.K, {
                        children: [(0, F.jsxs)(d.k, {
                            direction: "column",
                            onMouseOver: P,
                            onMouseOut: D,
                            children: [(0, F.jsxs)(d.k, {
                                ref: O,
                                h: 8,
                                px: 2,
                                bg: "gray.100",
                                borderRadius: "md",
                                position: "relative",
                                overflow: "hidden",
                                alignItems: "center",
                                _focusWithin: {
                                    shadow: "outline"
                                },
                                children: [(0, F.jsxs)(er.U, {
                                    pos: "absolute",
                                    zIndex: 1,
                                    children: [M && (0, F.jsx)(ej.h, {
                                        "aria-label": "expand-card",
                                        size: "xs",
                                        variant: "ghost",
                                        isRound: !0,
                                        colorScheme: "blackAlpha",
                                        icon: (0, F.jsx)(f.G, {
                                            icon: eg._t
                                        }),
                                        transform: j ? "rotate(90deg)" : "",
                                        onClick: A,
                                        _focus: {
                                            shadow: "none"
                                        }
                                    }), !M && (0, F.jsx)(d.k, {
                                        w: 6,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        children: L ? (0, F.jsx)(p.kH, {
                                            label: (0, F.jsx)(i.cC, {
                                                id: "s+PDNe"
                                            }),
                                            children: (0, F.jsx)(k.xu, {
                                                color: "blackAlpha.500",
                                                children: (0, F.jsx)(f.G, {
                                                    icon: em.Aq,
                                                    size: "sm"
                                                })
                                            })
                                        }) : (0, F.jsx)(k.xu, {
                                            color: "blackAlpha.300",
                                            fontSize: "xx-small",
                                            children: (0, F.jsx)(f.G, {
                                                icon: ex.nZ,
                                                size: "sm"
                                            })
                                        })
                                    }), (0, F.jsx)(S.x, {
                                        color: L ? "blackAlpha.500" : void 0,
                                        noOfLines: 1,
                                        children: _ || (0, F.jsx)(i.cC, {
                                            id: "wja8aL"
                                        })
                                    })]
                                }), (0, F.jsxs)(k.xu, {
                                    position: "absolute",
                                    w: "100%",
                                    height: "100%",
                                    top: 0,
                                    left: 0,
                                    pointerEvents: "none",
                                    children: [(0, F.jsx)(k.xu, {
                                        position: "absolute",
                                        h: "100%",
                                        bg: L ? "blackAlpha.200" : H,
                                        w: "".concat(Z, "%")
                                    }), (0, F.jsx)(k.xu, {
                                        transitionProperty: "all",
                                        transitionDuration: "normal",
                                        position: "absolute",
                                        h: "100%",
                                        bg: L ? "blackAlpha.300" : V,
                                        w: "".concat(U, "%")
                                    })]
                                }), c && 100 === s && (0, F.jsxs)(F.Fragment, {
                                    children: [(0, F.jsx)(ev.L, {}), (0, F.jsx)(e_, {
                                        alignSelf: "center",
                                        zIndex: 1
                                    })]
                                })]
                            }), E && (0, F.jsx)(p.qh, eL({
                                ref: w,
                                src: g ? null == R ? void 0 : R.previewUrl : ey.Z.src,
                                fallbackSrc: ey.Z.src,
                                shouldShow: E,
                                onClick: T,
                                tooltip: (0, F.jsx)(i.cC, {
                                    id: "3YmIR6"
                                }),
                                label: x ? (0, F.jsx)(i.cC, {
                                    id: "wmqtMZ",
                                    values: {
                                        percentage: s
                                    }
                                }) : void 0
                            }, I()))]
                        }), (0, F.jsx)(k.xu, {
                            pl: 8,
                            children: M && Object.entries(o).map(function(t) {
                                var n, i = (0, eh.Z)(t, 2),
                                    o = i[0],
                                    s = i[1];
                                return (0, F.jsx)(eb.U, { in: j,
                                    children: (0, F.jsx)(e, {
                                        id: o,
                                        childCards: s,
                                        percentage: null !== (n = r[o]) && void 0 !== n ? n : 0,
                                        cardLookupTable: r,
                                        calculatePercentageScale: a,
                                        scaleToMax: l,
                                        isColorized: c,
                                        includeChildren: u,
                                        showViewersPercent: x,
                                        onAnalyticsPanelClose: m
                                    })
                                }, o)
                            })
                        })]
                    })
                },
                eZ = function() {
                    return (0, F.jsx)(y.K, {
                        spacing: 2,
                        children: (0, F.jsx)(i.cC, {
                            id: "QXJTby",
                            components: {
                                0: (0, F.jsx)(S.x, {}),
                                1: (0, F.jsx)(S.x, {}),
                                2: (0, F.jsx)(S.x, {})
                            }
                        })
                    })
                },
                eG = function(e) {
                    var t = e.timeInMS;
                    return void 0 === t ? (0, F.jsx)(F.Fragment, {}) : (0, F.jsx)(i.cC, {
                        id: "yXHI9B",
                        values: {
                            timeInSeconds: t / 1e3
                        }
                    })
                },
                eF = function(e) {
                    var t = e.docId,
                        n = e.viewerFilter,
                        r = e.currentViewerFilterCount,
                        o = e.onAnalyticsPanelClose,
                        s = (0, eo.qr)().getState(),
                        a = (0, es.X9)(s),
                        c = (0, D.IrH)({
                            variables: {
                                docId: t
                            }
                        }),
                        l = c.data,
                        d = c.error,
                        p = c.loading,
                        x = c.refetch,
                        m = (0, h.useState)("viewTimePercent"),
                        g = m[0],
                        v = m[1],
                        j = "viewTimePercent" === g ? {
                            chartDescription: (0, F.jsx)(i.cC, {
                                id: "dpTE1c",
                                values: {
                                    viewerCount: r
                                }
                            }),
                            leftLabel: (0, F.jsx)(i.cC, {
                                id: "ml51m3"
                            }),
                            rightLabel: (0, F.jsx)(i.cC, {
                                id: "8R7bfR"
                            })
                        } : {
                            chartDescription: (0, F.jsx)(i.cC, {
                                id: "b2VMTo",
                                values: {
                                    viewerCount: r
                                }
                            }),
                            leftLabel: (0, F.jsx)(i.cC, {
                                id: "kTgCTO"
                            }),
                            rightLabel: (0, F.jsx)(i.cC, {
                                id: "AKDcmS"
                            })
                        },
                        b = j.chartDescription,
                        y = j.rightLabel,
                        C = j.leftLabel,
                        O = "viewersOnly" === n ? "viewers" : "everyone",
                        w = (0, ei.ye)("cardViewedThreshold"),
                        S = (0, h.useMemo)(function() {
                            var e;
                            return (null == l ? void 0 : null === (e = l.docCardsStats) || void 0 === e ? void 0 : e[O]) || []
                        }, [null == l ? void 0 : l.docCardsStats, O]),
                        E = (0, h.useMemo)(function() {
                            return eu(S, g)
                        }, [S, g]),
                        I = (0, h.useCallback)(function() {
                            return v("viewTimePercent")
                        }, []),
                        P = (0, h.useCallback)(function() {
                            return v("viewersPercent")
                        }, []);
                    return (0, F.jsxs)(k.xu, {
                        children: [(0, F.jsxs)(er.U, {
                            my: 4,
                            children: [(0, F.jsx)(u.z, {
                                leftIcon: (0, F.jsx)(f.G, {
                                    icon: en.SZ,
                                    "aria-label": "Time spend"
                                }),
                                variant: "ghost",
                                fontWeight: "600",
                                bg: "viewTimePercent" === g ? "trueblue.50" : "transparent",
                                color: "viewTimePercent" === g ? "trueblue.500" : z,
                                onClick: I,
                                children: (0, F.jsx)(i.cC, {
                                    id: "XyvAeS"
                                })
                            }), (0, F.jsx)(u.z, {
                                leftIcon: (0, F.jsx)(f.G, {
                                    icon: et.jG,
                                    "aria-label": "Percent viewed"
                                }),
                                variant: "ghost",
                                fontWeight: "600",
                                bg: "viewersPercent" === g ? "trueblue.50" : "transparent",
                                color: "viewersPercent" === g ? "trueblue.500" : z,
                                onClick: P,
                                children: (0, F.jsx)(i.cC, {
                                    id: "vXtpAZ"
                                })
                            })]
                        }), (0, F.jsx)(eW, {
                            description: b
                        }), d && (0, F.jsx)(V, {
                            error: d,
                            refetch: x
                        }), p && !d && (0, F.jsx)(eU, {}), !p && !d && (0, F.jsx)(ez, {
                            cards: a.tree,
                            cardLookupTable: E,
                            scaleToMax: "viewTimePercent" === g,
                            isColorized: "viewersPercent" === g,
                            includeChildren: "viewTimePercent" === g,
                            showViewersPercent: "viewersPercent" === g,
                            rightLabel: y,
                            leftLabel: C,
                            tooltipLabel: "viewTimePercent" === g ? (0, F.jsx)(eZ, {}) : (0, F.jsx)(eG, {
                                timeInMS: w
                            }),
                            onAnalyticsPanelClose: o
                        })]
                    })
                },
                eU = function(e) {
                    var t = e.includeDescription;
                    return (0, F.jsx)(d.k, {
                        direction: "column",
                        mt: 6,
                        mb: 4,
                        children: (0, F.jsxs)(w.g, {
                            align: "stretch",
                            children: [void 0 !== t && t && (0, F.jsx)(O.O, {
                                h: 5,
                                mb: 3,
                                w: "70%"
                            }), (0, m.Z)([, , , , , ]).map(function(e, t) {
                                return (0, F.jsx)(O.O, {
                                    h: 8
                                }, t)
                            })]
                        })
                    })
                },
                eW = function(e) {
                    var t = e.description;
                    return (0, F.jsx)(S.x, {
                        color: z,
                        children: t
                    })
                },
                eH = n(89364),
                eV = n(73851),
                eB = n(36258),
                eq = n(19875),
                eK = n(77525),
                eY = n(74642),
                eQ = n(35319),
                eX = n(27912),
                eJ = n(12221),
                e$ = n(13061),
                e0 = n(65903),
                e1 = n.n(e0),
                e2 = n(829),
                e5 = n.n(e2),
                e3 = n(75085),
                e4 = n(81188),
                e6 = ["name", "profileImg", "email", "isCreator", "isContributor", "isAnonymous"];

            function e8(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function e9(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e8(Object(n), !0).forEach(function(t) {
                        (0, N.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : e8(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var e7 = function(e) {
                    var t = e.uniqueViewers,
                        n = e.docCreatedDate,
                        r = (0, ei.ye)("cardViewedThreshold");
                    return (0, F.jsx)(eV.h, {
                        children: (0, F.jsxs)(eB.Tr, {
                            children: [(0, F.jsx)(te, {
                                label: (0, F.jsx)(i.cC, {
                                    id: "LZHJAq",
                                    values: {
                                        uniqueViewers: t
                                    }
                                }),
                                tooltip: (0, F.jsx)(i.cC, {
                                    id: "aaiIlJ",
                                    values: {
                                        docCreatedDate: n
                                    }
                                }),
                                width: "40%"
                            }), (0, F.jsx)(te, {
                                label: (0, F.jsx)(i.cC, {
                                    id: "pRGfP3"
                                }),
                                width: "35%"
                            }), (0, F.jsx)(te, {
                                label: (0, F.jsx)(i.cC, {
                                    id: "QfqHuz"
                                }),
                                tooltip: (0, F.jsx)(eG, {
                                    timeInMS: r
                                }),
                                width: "25%"
                            })]
                        })
                    })
                },
                te = function(e) {
                    var t = e.label,
                        n = e.width,
                        r = e.tooltip,
                        i = (0, F.jsx)(eq.Th, {
                            w: n,
                            children: (0, F.jsx)(S.x, {
                                display: "inline",
                                borderBottom: r ? "0.125em dashed" : void 0,
                                borderBottomColor: r ? "gray.400" : void 0,
                                children: t
                            })
                        });
                    return r ? (0, F.jsx)(p.kH, {
                        placement: "top",
                        label: r,
                        children: i
                    }) : i
                },
                tt = ["Yesterday at 11:02 am", "Today at 12:55 pm", "Dec 12, 2020, 10:19 pm", "Apr 14, 2023, 4:30 pm", "Jan 1, 2021, 12:03 am", "Dec 7, 1984, 12:03 am", "May 14, 2002, 3:56 pm"],
                tn = function(e) {
                    var t = e.viewers,
                        n = e.currentViewerFilterCount,
                        r = e.docCreatedDate,
                        i = e.creatorId,
                        o = e.contributors,
                        s = e.cardCount,
                        a = e.handleTableRowClick,
                        c = e.hasIndividualAnalytics,
                        l = (0, L.SE)().user,
                        d = c ? t : e5()(t, function(e) {
                            var t;
                            return [(null === (t = e.user) || void 0 === t ? void 0 : t.id) === (null == l ? void 0 : l.id) ? 0 : 1, -e.lastOpened]
                        }).slice(0, 3);
                    return (0, F.jsx)(eK.x, {
                        children: (0, F.jsxs)(eY.i, {
                            colorScheme: "blackAlpha",
                            children: [(0, F.jsx)(e7, {
                                uniqueViewers: n,
                                docCreatedDate: r
                            }), (0, F.jsx)(eQ.p, {
                                children: d.map(function(e, n) {
                                    var r = e.user,
                                        d = e.lastOpened,
                                        u = e.visitorId,
                                        f = (null == r ? void 0 : r.id) === i,
                                        p = o.some(function(e) {
                                            return e.user.id === (null == r ? void 0 : r.id)
                                        }),
                                        h = r ? r.displayName + (r.id === (null == l ? void 0 : l.id) ? " " + j.ag._({
                                            id: "dDUgzP"
                                        }) : "") || "" : j.ag._({
                                            id: "VmjbJY"
                                        }),
                                        x = d ? e1()((0, e4.P9)(d)) : j.ag._({
                                            id: "/JO3xr"
                                        }),
                                        m = {
                                            name: h,
                                            id: (null == r ? void 0 : r.id) || u || "",
                                            email: null == r ? void 0 : r.email,
                                            isCreator: f,
                                            isContributor: p,
                                            profileImg: null == r ? void 0 : r.profileImageUrl,
                                            lastOpened: x
                                        },
                                        g = n === t.length - 1,
                                        v = (null == r ? void 0 : r.id) === (null == l ? void 0 : l.id),
                                        b = !c && !v;
                                    return (0, F.jsxs)(eB.Tr, {
                                        cursor: "pointer",
                                        onClick: function() {
                                            return a(m)
                                        },
                                        _hover: {
                                            bg: "blackAlpha.50"
                                        },
                                        borderBottom: "none",
                                        children: [(0, F.jsx)(eX.Td, {
                                            borderBottom: g ? "0 none" : void 0,
                                            children: (0, F.jsx)(tr, {
                                                name: h,
                                                email: null == r ? void 0 : r.email,
                                                profileImg: null == r ? void 0 : r.profileImageUrl,
                                                isContributor: p,
                                                isCreator: f,
                                                isAnonymous: !r
                                            })
                                        }), (0, F.jsx)(eX.Td, {
                                            borderBottom: g ? "0 none" : void 0,
                                            children: b ? (0, F.jsx)(S.x, {
                                                fontSize: "sm",
                                                filter: "blur(3px)",
                                                color: "gray.600",
                                                children: tt[n % tt.length]
                                            }) : (0, F.jsx)(S.x, {
                                                fontSize: "sm",
                                                children: x
                                            })
                                        }), (0, F.jsx)(eX.Td, {
                                            borderBottom: g ? "0 none" : void 0,
                                            children: b ? (0, F.jsx)(eR, {
                                                cardCount: s
                                            }) : (0, F.jsx)(eT, {
                                                cardsViewed: e.cardsViewed || 0,
                                                totalCards: s || 0
                                            })
                                        })]
                                    }, (null == r ? void 0 : r.id) || u)
                                })
                            })]
                        })
                    })
                },
                tr = function(e) {
                    var t = e.name,
                        n = e.profileImg,
                        r = e.email,
                        o = e.isCreator,
                        s = void 0 !== o && o,
                        a = e.isContributor,
                        c = e.isAnonymous,
                        l = (0, Z.Z)(e, e6);
                    return (0, F.jsxs)(er.U, e9(e9({}, l), {}, {
                        children: [(0, F.jsx)(eJ.q, {
                            size: "sm",
                            name: t,
                            src: n
                        }), (0, F.jsxs)(y.K, {
                            spacing: .5,
                            children: [(0, F.jsxs)(S.x, {
                                children: [t, void 0 !== c && c && (0, F.jsx)(p.Yq, {
                                    label: (0, F.jsx)(i.cC, {
                                        id: "VHgG8W",
                                        values: {
                                            GAMMA_ARTIFACT_PROPER_NOUN: e3.Yc
                                        }
                                    }),
                                    ml: 2
                                })]
                            }), (0, F.jsxs)(er.U, {
                                mt: 1,
                                children: [(0, F.jsx)(S.x, {
                                    fontSize: "sm",
                                    color: "gray.500",
                                    children: void 0 === r ? "" : r
                                }), (s || void 0 !== a && a) && (0, F.jsx)(e$.Vp, {
                                    size: "sm",
                                    transform: "translate(0, 1.5px)",
                                    children: s ? (0, F.jsx)(i.cC, {
                                        id: "UE2beD"
                                    }) : (0, F.jsx)(i.cC, {
                                        id: "3L51iw"
                                    })
                                })]
                            })]
                        })]
                    }))
                },
                ti = function(e) {
                    var t, n, r, o, s = e.user,
                        a = e.onBackClick,
                        l = e.docId,
                        d = e.onAnalyticsPanelClose,
                        f = (0, eo.qr)().getState(),
                        p = (0, es.X9)(f),
                        x = (0, D.IrH)({
                            variables: {
                                docId: l,
                                userId: s.id
                            },
                            skip: !l || !s.id,
                            pollInterval: 9e5,
                            notifyOnNetworkStatusChange: !0
                        }),
                        m = x.data,
                        g = x.error,
                        v = x.loading,
                        j = x.refetch,
                        y = null !== (t = null == m ? void 0 : null === (n = m.docCardsStats) || void 0 === n ? void 0 : null === (r = n.everyone) || void 0 === r ? void 0 : r.length) && void 0 !== t ? t : 0,
                        C = null == m ? void 0 : null === (o = m.docCardsStats) || void 0 === o ? void 0 : o.cardCount,
                        O = (0, h.useMemo)(function() {
                            var e;
                            return (null == m ? void 0 : null === (e = m.docCardsStats) || void 0 === e ? void 0 : e.everyone) || []
                        }, [null == m ? void 0 : m.docCardsStats]),
                        w = (0, h.useMemo)(function() {
                            return eu(O, "viewTimePercent")
                        }, [O]);
                    return (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsx)(K.x, {
                            children: (0, F.jsx)(u.z, {
                                "aria-label": "Back",
                                leftIcon: (0, F.jsx)(eH.R, {}),
                                variant: "ghost",
                                onClick: a,
                                children: (0, F.jsx)(i.cC, {
                                    id: "iH8pgl"
                                })
                            })
                        }), (0, F.jsx)(Q.o, {}), (0, F.jsx)(c.i, {}), (0, F.jsx)(b.f, {
                            children: (0, F.jsxs)(k.xu, {
                                children: [(0, F.jsx)(to, {
                                    user: s,
                                    showLastOpened: !0
                                }), C && (0, F.jsx)(eW, {
                                    description: (0, F.jsx)(i.cC, {
                                        id: "YJOrjl",
                                        values: {
                                            cardsViewed: y,
                                            totalCards: C
                                        }
                                    })
                                }), v && !g && (0, F.jsx)(eU, {
                                    includeDescription: !0
                                }), g && (0, F.jsx)(V, {
                                    error: g,
                                    refetch: j
                                }), !g && !v && (0, F.jsx)(ez, {
                                    cards: p.tree,
                                    scaleToMax: !0,
                                    includeChildren: !0,
                                    leftLabel: (0, F.jsx)(i.cC, {
                                        id: "ml51m3"
                                    }),
                                    rightLabel: (0, F.jsx)(i.cC, {
                                        id: "8R7bfR"
                                    }),
                                    cardLookupTable: w,
                                    tooltipLabel: (0, F.jsx)(eZ, {}),
                                    onAnalyticsPanelClose: d
                                })]
                            })
                        })]
                    })
                },
                to = function(e) {
                    var t = e.user,
                        n = e.showLastOpened;
                    return (0, F.jsxs)(er.U, {
                        align: "center",
                        my: 6,
                        children: [(0, F.jsx)(tr, {
                            name: t.name,
                            profileImg: t.profileImg,
                            email: t.email,
                            isCreator: t.isCreator,
                            isContributor: t.isContributor,
                            width: n ? "50%" : void 0
                        }), n && (0, F.jsxs)(w.g, {
                            align: "flex-start",
                            spacing: 0,
                            children: [(0, F.jsx)(p.NZ, {
                                children: (0, F.jsx)(i.cC, {
                                    id: "pRGfP3"
                                })
                            }), (0, F.jsx)(S.x, {
                                children: t.lastOpened
                            })]
                        })]
                    })
                },
                ts = n(87567),
                ta = n(47299),
                tc = n(81295),
                tl = n(26673),
                td = n(9088),
                tu = n(30893),
                tf = n(40771),
                tp = n(63849),
                th = n(2575),
                tx = function(e, t, n) {
                    return "everyone" === e ? j.ag._({
                        id: "1IE7uf",
                        values: {
                            everyone: t
                        }
                    }) : "viewersOnly" === e ? j.ag._({
                        id: "r/tA4Y",
                        values: {
                            viewersOnly: n
                        }
                    }) : j.ag._({
                        id: "V9JX7d"
                    })
                },
                tm = {
                    everyone: tc.Nd,
                    viewersOnly: ta.Md,
                    accessLinkOnly: ts.uW
                },
                tg = function(e) {
                    var t = e.selected,
                        n = e.handleMenuItemChange,
                        r = e.everyoneCount,
                        o = e.viewersOnlyCount;
                    return (0, F.jsxs)(td.v, {
                        children: [(0, F.jsx)(tu.j, {
                            leftIcon: (0, F.jsx)(f.G, {
                                size: "xs",
                                icon: tm[t]
                            }),
                            as: u.z,
                            size: "md",
                            rightIcon: (0, F.jsx)(f.G, {
                                size: "xs",
                                icon: tl.pt
                            }),
                            children: tx(t, r, o)
                        }), (0, F.jsx)(tf.q, {
                            zIndex: 2,
                            maxW: "380px",
                            children: (0, F.jsxs)(tp._, {
                                defaultValue: t,
                                value: t,
                                onChange: function(e) {
                                    Array.isArray(e) || n(e)
                                },
                                children: [(0, F.jsx)(th.i, {
                                    value: "everyone",
                                    isDisabled: 0 === r,
                                    children: (0, F.jsxs)(d.k, {
                                        align: "center",
                                        children: [(0, F.jsx)(f.G, {
                                            icon: tm.everyone,
                                            size: "xs"
                                        }), (0, F.jsxs)(k.xu, {
                                            ml: 3,
                                            children: [(0, F.jsx)(S.x, {
                                                children: tx("everyone", r, o)
                                            }), (0, F.jsx)(S.x, {
                                                fontSize: "sm",
                                                color: "gray.500",
                                                children: (0, F.jsx)(i.cC, {
                                                    id: "c5ESvc",
                                                    values: {
                                                        GAMMA_ARTIFACT_PROPER_NOUN: e3.Yc
                                                    }
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, F.jsx)(th.i, {
                                    value: "viewersOnly",
                                    isDisabled: 0 === o,
                                    children: (0, F.jsxs)(d.k, {
                                        align: "center",
                                        children: [(0, F.jsx)(f.G, {
                                            icon: tm.viewersOnly,
                                            size: "xs"
                                        }), (0, F.jsxs)(k.xu, {
                                            ml: 3,
                                            children: [(0, F.jsx)(S.x, {
                                                children: tx("viewersOnly", r, o)
                                            }), (0, F.jsx)(S.x, {
                                                fontSize: "sm",
                                                color: "gray.500",
                                                children: (0, F.jsx)(i.cC, {
                                                    id: "5hKO48",
                                                    values: {
                                                        GAMMA_ARTIFACT_PROPER_NOUN: e3.Yc
                                                    }
                                                })
                                            })]
                                        })]
                                    })
                                }), !1]
                            })
                        })]
                    })
                },
                tv = n(46102),
                tj = n(6802),
                tb = n(70258),
                ty = n(80237),
                tC = n(59309),
                tO = n(2574),
                tw = n(92638),
                tk = n(33951),
                tS = n(10897),
                tE = n(14582),
                tI = n(75715),
                tP = n(96492),
                tD = n(14141),
                tA = n(40837),
                tT = ["chartTitle", "TooltipInner", "showZero", "shouldRoundYValues", "showMaxAndMiddle", "data", "barColor", "customTooltipStyles", "onClick"];

            function tR(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function t_(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tR(Object(n), !0).forEach(function(t) {
                        (0, N.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tR(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tM = {
                    top: 55,
                    right: 20,
                    bottom: 40,
                    left: 24
                },
                tL = function(e) {
                    return Math.round(e).toString()
                },
                tz = {
                    backgroundColor: "var(--chakra-colors-blackAlpha-800)",
                    color: "var(--chakra-colors-gray-100)",
                    fontFamily: "Inter, sans-serif",
                    boxShadow: "var(--chakra-shadows-4)",
                    fontSize: "var(--chakra-fontSizes-xs)",
                    borderRadius: "var(--chakra-radii-sm)",
                    fontWeight: "var(--chakra-fontWeights-semibold)",
                    borderWidth: "1px",
                    borderColor: "black",
                    paddingRight: "var(--chakra-space-1.5)",
                    paddingLeft: "var(--chakra-space-1.5)",
                    paddingTop: "var(--chakra-space-0.5)",
                    paddingBottom: "var(--chakra-space-0.5)",
                    zIndex: "var(--chakra-zIndex-tooltip)",
                    minWidth: "60px",
                    lineHeight: "var(--chakra-lineHeights-base)"
                },
                tN = "var(--chakra-colors-gray-500)",
                tZ = "var(--chakra-colors-gray-200)",
                tG = function(e) {
                    var t, n = e.width,
                        r = e.height,
                        i = e.margin,
                        o = void 0 === i ? tM : i,
                        s = e.chartData,
                        a = e.TooltipInner,
                        c = e.showZero,
                        l = e.shouldRoundYValues,
                        d = e.showMaxAndMiddle,
                        u = e.barColor,
                        f = e.customTooltipStyles,
                        p = e.onClick,
                        x = void 0 === p ? function() {} : p,
                        g = (0, tP.Z)(),
                        v = g.showTooltip,
                        j = g.tooltipOpen,
                        b = g.tooltipLeft,
                        y = g.tooltipTop,
                        C = g.tooltipData,
                        O = g.hideTooltip,
                        w = (0, h.useRef)(),
                        S = (0, h.useRef)();
                    (0, h.useEffect)(function() {
                        return function() {
                            w.current && clearTimeout(w.current), S.current && clearTimeout(S.current)
                        }
                    }, []);
                    var E = s.map(function(e) {
                            return e.y
                        }),
                        I = Math.max.apply(Math, (0, m.Z)(E)),
                        P = [I, Math.round(I / 2)],
                        D = (t = d ? P : E, Math.max.apply(Math, (0, m.Z)(t.map(function(e) {
                            return (0, tI.Z)(e.toString(), {
                                fontFamily: "Inter, sans-serif",
                                fontSize: "var(--chakra-fontSizes-sm)",
                                fontWeight: "600"
                            }) || 0
                        })))),
                        A = o.left + D,
                        T = n - A - o.right,
                        R = r - o.top - o.bottom,
                        _ = t_(t_(t_({}, tD.j), tz), f),
                        M = (0, h.useMemo)(function() {
                            return (0, tw.Z)({
                                range: [0, T],
                                domain: s.map(function(e) {
                                    return e.x
                                }),
                                padding: .3
                            })
                        }, [T, s]),
                        L = (0, h.useMemo)(function() {
                            return (0, tk.Z)({
                                range: [R, 0],
                                round: !0,
                                domain: [0, I]
                            })
                        }, [R, I]),
                        z = c ? L(Math.min.apply(Math, (0, m.Z)(E.filter(function(e) {
                            return 0 !== e
                        })))) : R,
                        N = c && R - z > 6;
                    return (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsx)(k.xu, {
                            children: (0, F.jsxs)("svg", {
                                width: n,
                                height: r,
                                children: [(0, F.jsx)("rect", {
                                    x: 0,
                                    y: 0,
                                    rx: 4,
                                    width: n,
                                    height: r,
                                    fill: "var(--chakra-colors-gray-100)"
                                }), (0, F.jsx)(tC.Z, {
                                    top: o.top,
                                    left: A,
                                    children: s.map(function(e) {
                                        var t, n, r = e.y,
                                            i = e.x,
                                            o = "bar-".concat(i, "-").concat(r),
                                            s = M.bandwidth(),
                                            a = R - (null !== (t = L(r)) && void 0 !== t ? t : 0),
                                            l = N && 0 === a ? 6 : a,
                                            d = null !== (n = M(i)) && void 0 !== n ? n : 0,
                                            f = R - l;
                                        return (0, F.jsxs)(tC.Z, {
                                            children: [(0, F.jsx)(tS.Z, {
                                                x: d,
                                                y: f,
                                                width: s,
                                                height: l,
                                                radius: 5,
                                                topLeft: !0,
                                                topRight: !0,
                                                fill: c && 0 === r ? tZ : u,
                                                onMouseLeave: function() {
                                                    w.current = window.setTimeout(function() {
                                                        O()
                                                    }, 300)
                                                },
                                                onMouseMove: function(t) {
                                                    w.current && clearTimeout(w.current);
                                                    var n = (0, ty.Z)(t);
                                                    v({
                                                        tooltipData: e,
                                                        tooltipTop: null == n ? void 0 : n.y,
                                                        tooltipLeft: null == n ? void 0 : n.x
                                                    })
                                                },
                                                onClick: function(t) {
                                                    return x(t, e)
                                                }
                                            }), (0, F.jsx)(tE.Z, {
                                                x: d,
                                                y: 0,
                                                width: s,
                                                height: Math.max(0, R - l),
                                                opacity: 0,
                                                onMouseLeave: function() {
                                                    S.current = window.setTimeout(function() {
                                                        O()
                                                    }, 300)
                                                },
                                                onMouseMove: function(t) {
                                                    S.current && clearTimeout(S.current);
                                                    var n = (0, ty.Z)(t);
                                                    v({
                                                        tooltipData: e,
                                                        tooltipTop: null == n ? void 0 : n.y,
                                                        tooltipLeft: null == n ? void 0 : n.x
                                                    })
                                                }
                                            })]
                                        }, o)
                                    })
                                }), (0, F.jsx)(tj.Z, {
                                    top: o.top,
                                    left: A,
                                    scale: L,
                                    stroke: tZ,
                                    strokeWidth: 2,
                                    tickValues: d ? P : void 0,
                                    numTicks: d ? void 0 : 2,
                                    hideZero: !0,
                                    tickFormat: l ? tL : void 0,
                                    tickLength: 6,
                                    tickStroke: tZ,
                                    tickLabelProps: function() {
                                        return {
                                            fill: tN,
                                            textAnchor: "end",
                                            fontFamily: "Inter, sans-serif",
                                            fontSize: "var(--chakra-fontSizes-sm)",
                                            fontWeight: "600",
                                            dy: "0.33em",
                                            dx: -4
                                        }
                                    }
                                }), (0, F.jsx)(tb.Z, {
                                    top: R + o.top,
                                    left: A,
                                    scale: M,
                                    stroke: tZ,
                                    numTicks: 4,
                                    tickStroke: tZ,
                                    tickLabelProps: function() {
                                        return {
                                            fill: tN,
                                            textAnchor: "middle",
                                            fontFamily: "Inter, sans-serif",
                                            fontSize: "var(--chakra-fontSizes-sm)",
                                            fontWeight: "600",
                                            dy: 4
                                        }
                                    },
                                    strokeWidth: 2,
                                    tickLength: 6
                                })]
                            })
                        }), j && C && (0, F.jsx)(tA.Z, {
                            top: y,
                            left: b,
                            style: _,
                            children: (0, F.jsx)(a, {
                                x: C.x,
                                y: C.y
                            })
                        })]
                    })
                },
                tF = function(e) {
                    var t = e.chartTitle,
                        n = e.TooltipInner,
                        r = e.showZero,
                        i = void 0 === r || r,
                        o = e.shouldRoundYValues,
                        s = void 0 === o || o,
                        a = e.showMaxAndMiddle,
                        c = void 0 === a || a,
                        l = e.data,
                        d = e.barColor,
                        u = void 0 === d ? "var(--chakra-colors-trueblue-200)" : d,
                        f = e.customTooltipStyles,
                        p = e.onClick,
                        h = void 0 === p ? function() {} : p,
                        x = (0, Z.Z)(e, tT);
                    return (0, F.jsxs)(k.xu, t_(t_({
                        position: "relative",
                        height: "300px"
                    }, x), {}, {
                        children: [(0, F.jsx)(S.x, {
                            size: "xs",
                            color: "gray.500",
                            fontWeight: "600",
                            position: "absolute",
                            top: 3,
                            left: "50%",
                            transform: "translateX(-50%)",
                            children: t
                        }), (0, F.jsx)(tO.Z, {
                            children: function(e) {
                                var t = e.width,
                                    r = e.height;
                                return t < 10 ? null : (0, F.jsx)(tG, {
                                    width: t,
                                    height: r,
                                    showZero: i,
                                    chartData: l,
                                    barColor: u,
                                    customTooltipStyles: f,
                                    onClick: h,
                                    TooltipInner: n,
                                    shouldRoundYValues: s,
                                    showMaxAndMiddle: c
                                })
                            }
                        })]
                    }))
                },
                tU = function(e, t) {
                    var n = "LLL d",
                        r = new Date;
                    r.setDate(r.getDate() - t + 1);
                    for (var i = [], o = 0; o < t; o++) ! function(t) {
                        var o = new Date(r);
                        o.setDate(o.getDate() + t);
                        var s = (0, tv.Z)(o, {
                                representation: "date"
                            }),
                            a = e.find(function(e) {
                                return e.date === s
                            });
                        a ? i.push({
                            x: (0, A.p6)(a.date, n),
                            y: a.uniqueVisitors ? a.uniqueVisitors : 0
                        }) : i.push({
                            x: (0, A.p6)(s, n),
                            y: 0
                        })
                    }(o);
                    return i
                },
                tW = function(e) {
                    var t = tU(e.viewData, e.dayCount);
                    return (0, F.jsx)(tF, {
                        data: t,
                        my: 3,
                        chartTitle: (0, F.jsx)(i.cC, {
                            id: "mSEibf"
                        }),
                        TooltipInner: tH
                    })
                },
                tH = function(e) {
                    var t = e.x,
                        n = e.y;
                    return (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsx)(S.x, {
                            children: t
                        }), (0, F.jsx)(S.x, {
                            children: (0, F.jsx)(i.cC, {
                                id: "6MKtHx",
                                values: {
                                    y: n
                                }
                            })
                        })]
                    })
                },
                tV = function(e, t, n) {
                    if (!n) return 0;
                    var r, i, o, s = null !== (r = n.uniqueViewers) && void 0 !== r ? r : 0,
                        a = null !== (i = null === (o = e.editors) || void 0 === o ? void 0 : o.length) && void 0 !== i ? i : 0;
                    return "everyone" === t ? s : "viewersOnly" === t ? Math.max(0, s - a) : 0
                },
                tB = function(e) {
                    var t, n, r, o = e.doc,
                        s = e.handleSharePanelOpen,
                        a = e.onAnalyticsPanelClose,
                        l = (0, D.xls)({
                            variables: {
                                memoId: o.id
                            },
                            skip: !o.id,
                            pollInterval: 9e5,
                            notifyOnNetworkStatusChange: !0
                        }),
                        f = l.loading,
                        p = l.data,
                        x = l.error,
                        m = l.refetch,
                        g = (0, L.SE)().user,
                        v = (0, h.useState)("deckView"),
                        O = v[0],
                        w = v[1],
                        k = (0, h.useState)(null),
                        S = k[0],
                        E = k[1],
                        I = (0, h.useState)("everyone"),
                        P = I[0],
                        z = I[1],
                        N = (0, A.p6)(o.createdTime, "PPP"),
                        Z = o.title || (0, F.jsx)(i.cC, {
                            id: "wja8aL"
                        }),
                        G = (null == p ? void 0 : p.memoStats.viewers) || [],
                        U = (null == p ? void 0 : null === (n = p.memoStats.dailyViews) || void 0 === n ? void 0 : n.dayCount) || 0,
                        W = (t = null == p ? void 0 : p.memoStats) && t.dailyViews ? "everyone" === P ? t.dailyViews.everyone ? t.dailyViews.everyone : [] : "viewersOnly" === P && t.dailyViews.viewers ? t.dailyViews.viewers : [] : [],
                        H = (0, T.Y)("individual_analytics", o.organization),
                        B = (0, _.zc)().openUpsellModal,
                        q = W.every(function(e) {
                            return 0 === e.uniqueVisitors
                        }),
                        K = G.filter(function(e) {
                            var t;
                            return "everyone" === P || !(null !== (t = o.editors) && void 0 !== t && t.some(function(t) {
                                var n, r;
                                return (null === (n = e.user) || void 0 === n ? void 0 : n.id) === (null === (r = t.user) || void 0 === r ? void 0 : r.id)
                            }))
                        }),
                        Y = tV(o, P, null == p ? void 0 : p.memoStats),
                        Q = (0, h.useCallback)(function(e) {
                            z(e)
                        }, []),
                        ee = (0, h.useCallback)(function(e) {
                            w(e)
                        }, []),
                        et = (0, h.useCallback)(function(e) {
                            if (!H && e.id !== (null == g ? void 0 : g.id)) {
                                B({
                                    segmentEvent: M.AA.GAMMA_PRO_UPSELL_SUBSCRIPTION_INDIVIDUAL_ANALYTICS
                                });
                                return
                            }
                            E(e)
                        }, [B, H, g]),
                        en = (0, h.useCallback)(function() {
                            E(null)
                        }, []),
                        er = void 0 !== x;
                    return (0, F.jsxs)(F.Fragment, {
                        children: [S && (0, F.jsx)(ti, {
                            user: S,
                            onBackClick: en,
                            docId: o.id,
                            onAnalyticsPanelClose: a
                        }), !S && (0, F.jsxs)(F.Fragment, {
                            children: [(0, F.jsx)($, {
                                hasError: er,
                                isAnalyticsLoading: f,
                                setView: ee,
                                view: O,
                                description: (0, F.jsx)(i.cC, {
                                    id: "uEtUah",
                                    values: {
                                        docTitle: Z,
                                        docCreatedDate: N
                                    }
                                })
                            }), er && (0, F.jsx)(V, {
                                error: x,
                                refetch: m
                            }), !er && (0, F.jsxs)(F.Fragment, {
                                children: [(0, F.jsx)(c.i, {}), (0, F.jsxs)(b.f, {
                                    children: [f && (0, F.jsx)(tq, {}), !f && G.length <= 1 && (0, F.jsx)(tK, {
                                        handleSharePanelOpen: s
                                    }), !f && (0, F.jsxs)(y.K, {
                                        direction: "column",
                                        mt: 4,
                                        spacing: 4,
                                        children: [(0, F.jsxs)(d.k, {
                                            direction: "row",
                                            justify: "space-between",
                                            align: "center",
                                            children: [(0, F.jsx)(C.X, {
                                                as: "h2",
                                                size: "md",
                                                children: "cardEngagement" === O ? J() : X()
                                            }), (0, F.jsx)(tg, {
                                                selected: P,
                                                handleMenuItemChange: Q,
                                                everyoneCount: tV(o, "everyone", null == p ? void 0 : p.memoStats),
                                                viewersOnlyCount: tV(o, "viewersOnly", null == p ? void 0 : p.memoStats)
                                            })]
                                        }), "deckView" === O && q && (0, F.jsx)(tY, {
                                            handleSharePanelOpen: s,
                                            dayCount: U
                                        }), "deckView" === O && !q && (0, F.jsx)(tW, {
                                            viewData: W,
                                            dayCount: U
                                        }), "cardEngagement" === O && (0, F.jsx)(eF, {
                                            docId: o.id,
                                            viewerFilter: P,
                                            currentViewerFilterCount: Y,
                                            onAnalyticsPanelClose: a
                                        }), (0, F.jsx)(tn, {
                                            creatorId: (null === (r = o.createdBy) || void 0 === r ? void 0 : r.id) || "",
                                            viewers: K,
                                            currentViewerFilterCount: Y,
                                            docCreatedDate: N,
                                            contributors: o.editors || [],
                                            cardCount: (null == p ? void 0 : p.memoStats.cardCount) || 0,
                                            handleTableRowClick: et,
                                            hasIndividualAnalytics: H
                                        }), K.length > 3 && !H && (0, F.jsx)(u.z, {
                                            variant: "ghost",
                                            size: "sm",
                                            color: "gray.600",
                                            colorScheme: "gray",
                                            onClick: function() {
                                                return B({
                                                    segmentEvent: M.AA.GAMMA_PRO_UPSELL_SUBSCRIPTION_INDIVIDUAL_ANALYTICS
                                                })
                                            },
                                            children: (0, F.jsx)(i.cC, {
                                                id: "BKBX4n",
                                                values: {
                                                    0: K.length - 3
                                                }
                                            })
                                        }), !H && (0, F.jsx)(R.m, {
                                            segmentEvent: M.AA.GAMMA_PRO_UPSELL_SUBSCRIPTION_INDIVIDUAL_ANALYTICS,
                                            description: j.ag._({
                                                id: "GYgPBy"
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                tq = function() {
                    return (0, F.jsxs)(d.k, {
                        direction: "column",
                        py: 2,
                        children: [(0, F.jsx)(O.O, {
                            h: 10,
                            width: "40%",
                            mb: 4
                        }), (0, F.jsx)(O.O, {
                            h: 40,
                            mb: 4
                        }), (0, F.jsx)(w.g, {
                            align: "stretch",
                            children: (0, m.Z)([, , , ]).map(function(e, t) {
                                return (0, F.jsx)(O.O, {
                                    h: 12
                                }, t)
                            })
                        })]
                    })
                },
                tK = function(e) {
                    var t = e.handleSharePanelOpen;
                    return (0, F.jsx)(d.k, {
                        p: 3,
                        px: 4,
                        mt: 2,
                        bg: "gray.100",
                        color: z,
                        borderRadius: "base",
                        children: (0, F.jsxs)(d.k, {
                            align: "baseline",
                            fontSize: "sm",
                            children: [(0, F.jsx)(k.xu, {
                                pr: 2,
                                children: (0, F.jsx)(f.G, {
                                    icon: v.IL,
                                    "aria-label": "user-icon",
                                    size: "sm"
                                })
                            }), (0, F.jsx)(S.x, {
                                children: (0, F.jsx)(i.cC, {
                                    id: "FNMh4I",
                                    components: {
                                        0: (0, F.jsx)(S.x, {
                                            as: "button",
                                            onClick: t,
                                            textDecoration: "underline",
                                            fontWeight: "600",
                                            color: "gray.800"
                                        })
                                    }
                                })
                            })]
                        })
                    })
                },
                tY = function(e) {
                    var t = e.handleSharePanelOpen,
                        n = e.dayCount;
                    return (0, F.jsxs)(E.b, {
                        my: 4,
                        p: 6,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        colorScheme: "gray",
                        children: [(0, F.jsx)(k.Cd, {
                            size: "30px",
                            bg: "gray.500",
                            children: (0, F.jsx)(f.G, {
                                icon: g.Im,
                                color: "white"
                            })
                        }), (0, F.jsx)(I.C, {
                            mt: 4,
                            mb: 2,
                            fontSize: "md",
                            children: (0, F.jsx)(i.cC, {
                                id: "2OzAI5"
                            })
                        }), n > 0 && (0, F.jsxs)(F.Fragment, {
                            children: [(0, F.jsx)(P.X, {
                                maxWidth: "sm",
                                children: (0, F.jsx)(i.cC, {
                                    id: "qQLmo7",
                                    values: {
                                        dayCount: n
                                    }
                                })
                            }), (0, F.jsx)(u.z, {
                                mt: 4,
                                onClick: t,
                                children: (0, F.jsx)(i.cC, {
                                    id: "IXzWG0"
                                })
                            })]
                        })]
                    })
                },
                tQ = function(e) {
                    var t, n, r, o, s, a, l = e.doc,
                        d = e.onAnalyticsPanelClose,
                        u = (0, eo.qr)().getState(),
                        f = (0, es.X9)(u),
                        p = (0, L.SE)().user,
                        x = (0, D.IrH)({
                            variables: {
                                docId: l.id,
                                userId: null == p ? void 0 : p.id
                            },
                            skip: !(null != p && p.id),
                            pollInterval: 9e5,
                            notifyOnNetworkStatusChange: !0
                        }),
                        m = x.data,
                        g = x.error,
                        v = x.loading,
                        j = x.refetch,
                        y = null !== (t = null == m ? void 0 : null === (n = m.docCardsStats) || void 0 === n ? void 0 : null === (r = n.everyone) || void 0 === r ? void 0 : r.length) && void 0 !== t ? t : 0,
                        C = null == m ? void 0 : null === (o = m.docCardsStats) || void 0 === o ? void 0 : o.cardCount,
                        O = (0, h.useMemo)(function() {
                            var e;
                            return (null == m ? void 0 : null === (e = m.docCardsStats) || void 0 === e ? void 0 : e.everyone) || []
                        }, [null == m ? void 0 : m.docCardsStats]),
                        w = (0, h.useMemo)(function() {
                            return eu(O, "viewTimePercent")
                        }, [O]);
                    if (!p) return null;
                    var I = p.id === (null === (s = l.createdBy) || void 0 === s ? void 0 : s.id),
                        P = null === (a = l.editors) || void 0 === a ? void 0 : a.some(function(e) {
                            return e.user.id === p.id
                        }),
                        A = {
                            name: p.displayName,
                            id: p.id,
                            profileImg: p.profileImageUrl,
                            email: p.email,
                            isContributor: P,
                            isCreator: I
                        };
                    return (0, F.jsxs)(F.Fragment, {
                        children: [(0, F.jsxs)(K.x, {
                            children: [(0, F.jsx)(i.cC, {
                                id: "ZlwDi6"
                            }), (0, F.jsx)(S.x, {
                                fontSize: "sm",
                                fontWeight: "normal",
                                letterSpacing: "normal",
                                color: "gray.500",
                                noOfLines: 1,
                                children: l.title || (0, F.jsx)(i.cC, {
                                    id: "wja8aL"
                                })
                            })]
                        }), (0, F.jsx)(Q.o, {}), (0, F.jsx)(c.i, {}), (0, F.jsx)(b.f, {
                            children: (0, F.jsxs)(k.xu, {
                                children: [(0, F.jsx)(to, {
                                    user: A
                                }), void 0 !== C && (0, F.jsx)(eW, {
                                    description: (0, F.jsx)(i.cC, {
                                        id: "YJOrjl",
                                        values: {
                                            cardsViewed: y,
                                            totalCards: C
                                        }
                                    })
                                }), v && !g && (0, F.jsx)(eU, {
                                    includeDescription: !0
                                }), g && (0, F.jsx)(V, {
                                    error: g,
                                    refetch: j,
                                    px: 0
                                }), !g && !v && (0, F.jsx)(ez, {
                                    cards: f.tree,
                                    scaleToMax: !0,
                                    includeChildren: !0,
                                    leftLabel: (0, F.jsx)(i.cC, {
                                        id: "ml51m3"
                                    }),
                                    rightLabel: (0, F.jsx)(i.cC, {
                                        id: "8R7bfR"
                                    }),
                                    cardLookupTable: w,
                                    tooltipLabel: (0, F.jsx)(eZ, {}),
                                    onAnalyticsPanelClose: d
                                }), (0, F.jsxs)(E.b, {
                                    children: [(0, F.jsx)(G.z, {}), (0, F.jsx)(i.cC, {
                                        id: "Znuvj3",
                                        values: {
                                            GAMMA_PROPER_NOUN: e3.N6,
                                            GAMMA_ARTIFACT_PROPER_NOUN: e3.Yc
                                        }
                                    })]
                                })]
                            })
                        })]
                    })
                },
                tX = function(e) {
                    var t = e.doc,
                        n = e.mode,
                        m = e.isAnalyticsPanelOpen,
                        g = e.onAnalyticsPanelClose,
                        v = e.onSharePanelOpen,
                        j = (0, x.i)({
                            base: "sm",
                            md: "2xl",
                            lg: "4xl"
                        }),
                        b = (0, h.useCallback)(function() {
                            v && (v(), g())
                        }, [v, g]);
                    return (0, F.jsx)(p.Wk, {
                        isDark: !1,
                        children: (0, F.jsxs)(o.u_, {
                            onClose: g,
                            isOpen: m,
                            size: j,
                            blockScrollOnMount: !1,
                            children: [(0, F.jsx)(s.Z, {}), (0, F.jsxs)(a.h, {
                                children: ["full" === n ? (0, F.jsx)(tB, {
                                    doc: t,
                                    handleSharePanelOpen: b,
                                    onAnalyticsPanelClose: g
                                }) : (0, F.jsx)(tQ, {
                                    doc: t,
                                    onAnalyticsPanelClose: g
                                }), (0, F.jsx)(c.i, {
                                    my: 4
                                }), (0, F.jsx)(l.m, {
                                    children: (0, F.jsxs)(d.k, {
                                        justifyContent: "full" === n ? "space-between" : "flex-end",
                                        flex: 1,
                                        children: ["full" === n && (0, F.jsx)(u.z, {
                                            leftIcon: (0, F.jsx)(f.G, {
                                                icon: r.zB
                                            }),
                                            variant: "ghost",
                                            onClick: b,
                                            children: (0, F.jsx)(i.cC, {
                                                id: "IXzWG0"
                                            })
                                        }), (0, F.jsx)(u.z, {
                                            variant: "solid",
                                            onClick: g,
                                            children: (0, F.jsx)(i.cC, {
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
        87796: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return i
                },
                V: function() {
                    return o
                }
            });
            var r = n(95148),
                i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return t ? e || "Untitled" : e ? "".concat(e, " | Gamma") : "Gamma"
                },
                o = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return e || (t ? "" : r.D)
                }
        },
        21061: function(e, t, n) {
            n.d(t, {
                Av: function() {
                    return S
                },
                U8: function() {
                    return k
                }
            });
            var r = n(95235),
                i = n(393),
                o = n(11919),
                s = n(2784),
                a = n(43997),
                c = n(58118),
                l = n(46358),
                d = n(13720),
                u = n(72043),
                f = n(53738),
                p = n(12436),
                h = n.n(p),
                x = n(73062),
                m = n(52322);

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var j = function(e) {
                    var t = e.setWidth,
                        n = e.width,
                        r = e.position,
                        i = e.onClose,
                        a = e.panelRef,
                        l = e.initialWidth,
                        d = e.isDragging,
                        u = e.setIsDragging,
                        p = (0, s.useMemo)(function() {
                            return (0, x.n)()
                        }, []) > 0 && "right" === r,
                        g = (0, s.useState)(n),
                        j = g[0],
                        b = g[1],
                        y = (0, s.useState)(null),
                        C = y[0],
                        O = y[1],
                        w = h()(function(e) {
                            var t, n = Math.min(Math.max(t = "left" === r ? e.clientX : -((e.clientX - C) * 1) + j, c.pn), c.ZQ);
                            t <= c.Nh ? (a.current.style.transitionProperty = "width", a.current.style.transitionDuration = "var(--chakra-transition-duration-normal)", n = 0) : n > c.pn && (a.current.style.transitionProperty = "", a.current.style.transitionDuration = ""), a.current.style.width = "".concat(n, "px")
                        }, 30),
                        k = function e() {
                            u(!1), O(null);
                            var n = a.current.style.width;
                            "0px" === n ? (i(), t(l)) : t(parseInt(n.replace("px", ""), 10)), a.current.style.transitionProperty = "", a.current.style.transitionDuration = "", window.removeEventListener("mousemove", w), window.removeEventListener("mouseup", e)
                        };
                    (0, s.useEffect)(function() {
                        return C && (window.addEventListener("mousemove", w), window.addEventListener("mouseup", k)),
                            function() {
                                window.removeEventListener("mousemove", w), window.removeEventListener("mouseup", k)
                            }
                    }, [C]);
                    var S = {};
                    return S = "left" === r ? {
                        right: -4,
                        position: "absolute"
                    } : p ? {
                        position: "relative"
                    } : {
                        left: -4,
                        position: "absolute"
                    }, (0, m.jsx)(o.k, v(v({
                        h: "100%",
                        bg: p ? "gray.200" : d ? "blackAlpha.200" : "rgba(0,0,0,0)",
                        w: p ? 2 : 4,
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "col-resize",
                        _hover: {
                            bg: p ? "gray.400" : "blackAlpha.200"
                        },
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        role: "group",
                        onMouseDown: function(e) {
                            e.preventDefault(), u(!0), O(e.clientX), b(n)
                        },
                        position: "absolute",
                        display: ["none", "none", "none", "flex"]
                    }, S), {}, {
                        children: !p && (0, m.jsx)(f.xu, {
                            bg: "white",
                            borderRadius: "full",
                            w: 1,
                            h: 10,
                            opacity: d ? 1 : ".5",
                            transitionProperty: "common",
                            transitionDuration: "normal",
                            _groupHover: {
                                opacity: 1
                            }
                        })
                    }))
                },
                b = n(59115);

            function y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var O = {
                    ifPanelHasRoomToOpen: function(e, t) {
                        return {
                            base: t,
                            xl: e
                        }
                    }
                },
                w = function(e) {
                    var t, n = e.position,
                        f = e.panelLifecycle,
                        p = (0, s.useRef)(),
                        h = (0, s.useState)(!1),
                        x = h[0],
                        g = h[1],
                        v = (0, a.I0)(),
                        y = (0, l.CG)((0, b.SL)(n)),
                        w = (0, l.CG)((0, b.Fw)(n)),
                        k = (0, l.CG)((0, b.CO)(n)),
                        S = (0, l.CG)((0, b.eh)(n)),
                        E = null !== (t = null == S ? void 0 : S.canCollapse) && void 0 !== t && t,
                        I = (0, s.useCallback)(function() {
                            v((0, b.sR)({
                                position: n
                            }))
                        }, [v, n]),
                        P = (0, s.useCallback)(function() {
                            v((0, b.Yp)({
                                component: S
                            }))
                        }, [S, v]),
                        D = (0, s.useCallback)(function(e) {
                            v((0, b.UG)({
                                width: e,
                                position: n
                            })), f.emit("resize", {})
                        }, [v, f, n]),
                        A = (0, r.Z)({
                            zIndex: Number((0, i.dQ)("zIndices", "overlay")) + 1,
                            position: O.ifPanelHasRoomToOpen("relative", "fixed"),
                            height: "100%",
                            top: 0,
                            bottom: 0
                        }, n, 0);
                    w || x || (A.transitionProperty = "width", A.transitionDuration = "normal"), (0, s.useEffect)(function() {
                        var e = function(e) {
                            "width" === e.propertyName && f.emit("resize", {})
                        };
                        return p.current.addEventListener("transitionend", e),
                            function() {
                                p.current && p.current.removeEventListener("transitionend", e)
                            }
                    }, [f, p]);
                    var T = (0, d.i)(O.ifPanelHasRoomToOpen(!0, !1)) || !1;
                    return (0, s.useEffect)(function() {
                        y && !T && E && I()
                    }, [T, y, I, E]), (0, m.jsxs)(o.k, C(C({
                        ref: p
                    }, A), {}, {
                        style: {
                            width: y || E ? k : 0
                        },
                        maxW: "100%",
                        "data-print-hidden": !0,
                        children: [y && "right" === n && (0, m.jsx)(j, {
                            isDragging: x,
                            setIsDragging: g,
                            position: n,
                            width: k,
                            setWidth: D,
                            panelRef: p,
                            onClose: I,
                            initialWidth: c.Ld
                        }), (0, m.jsx)(u.Mn.Provider, {
                            value: f,
                            children: S && (y || E) && (0, m.jsx)(S, {
                                isDragging: x,
                                isOpen: y,
                                closePanel: I,
                                openPanel: P,
                                panelRef: p,
                                lifecycle: f,
                                hasRoomToOpen: T
                            })
                        }), y && "left" === n && (0, m.jsx)(j, {
                            isDragging: x,
                            setIsDragging: g,
                            position: n,
                            width: k,
                            setWidth: D,
                            panelRef: p,
                            onClose: I,
                            initialWidth: c.X9
                        })]
                    }))
                },
                k = (0, s.memo)(function(e) {
                    return (0, m.jsx)(w, C({
                        position: "right"
                    }, e))
                });
            k.displayName = "RightPanelContainer";
            var S = (0, s.memo)(function(e) {
                return (0, m.jsx)(w, C({
                    position: "left"
                }, e))
            });
            S.displayName = "LeftPanelContainer"
        },
        53923: function(e, t, n) {
            n.d(t, {
                Pp: function() {
                    return d
                },
                UV: function() {
                    return l
                },
                Xy: function() {
                    return u
                },
                nO: function() {
                    return c
                }
            });
            var r = n(2784),
                i = n(43997),
                o = n(46358),
                s = n(72043),
                a = n(59115),
                c = function() {
                    return (0, o.CG)((0, a.CO)("left"))
                },
                l = function() {
                    return (0, o.CG)((0, a.CO)("right"))
                },
                d = function(e) {
                    var t = e.panelPosition,
                        n = (0, i.I0)(),
                        s = (0, o.CG)((0, a.OC)(e)),
                        c = (0, r.useCallback)(function() {
                            n((0, a.uJ)({
                                component: e
                            }))
                        }, [e, n]);
                    return {
                        togglePanel: (0, r.useCallback)(function(r) {
                            var i = !s;
                            (null == r ? void 0 : r.override) === "open" ? i = !0: (null == r ? void 0 : r.override) === "closed" && (i = !1), i ? n((0, a.Yp)({
                                component: e,
                                disableTransition: !!(null == r ? void 0 : r.disableTransition)
                            })) : n((0, a.sR)({
                                position: t
                            }))
                        }, [e, t, s, n]),
                        initPanel: c,
                        isPanelOpen: s
                    }
                },
                u = function() {
                    var e = (0, r.useMemo)(function() {
                            return new s.st
                        }, []),
                        t = (0, r.useMemo)(function() {
                            return new s.st
                        }, []),
                        n = (0, r.useMemo)(function() {
                            return new s.st
                        }, []);
                    return (0, r.useEffect)(function() {
                        if (n && e && t) {
                            var r = e.pipe(n),
                                i = t.pipe(n);
                            return function() {
                                r(), i()
                            }
                        }
                    }, [e, t, n]), {
                        leftPanelLifecycle: e,
                        rightPanelLifecycle: t,
                        globalPanelLifecycle: n
                    }
                }
        },
        89458: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return V
                }
            });
            var r = n(20406),
                i = n(81333),
                o = n(28526),
                s = n.n(o),
                a = n(55452),
                c = n(87254),
                l = n(55479),
                d = n(75944),
                u = n(71354),
                f = n(76360),
                p = n(75342),
                h = n(2046),
                x = n(70287),
                m = n(8283),
                g = n(27777),
                v = n(45650),
                j = n(55966),
                b = n(2784),
                y = n(23313),
                C = n(20010),
                O = n(56915),
                w = n(48273),
                k = n(92619),
                S = n(91012),
                E = n(2167),
                I = n(80353),
                P = n(76648),
                D = n(52322),
                A = function(e) {
                    var t = e.onClose,
                        n = e.domainName,
                        r = e.onDelete,
                        i = e.isDeleting;
                    return (0, D.jsxs)(C.u_, {
                        isOpen: !0,
                        onClose: t,
                        trapFocus: !1,
                        size: "xl",
                        isCentered: !0,
                        closeOnOverlayClick: !1,
                        children: [(0, D.jsx)(O.Z, {}), (0, D.jsxs)(w.h, {
                            children: [(0, D.jsx)(k.x, {
                                children: (0, D.jsx)(u.K, {
                                    spacing: 0,
                                    children: (0, D.jsx)(S.x, {
                                        children: (0, D.jsx)(a.cC, {
                                            id: "T3exbL",
                                            values: {
                                                domainName: n
                                            }
                                        })
                                    })
                                })
                            }), (0, D.jsx)(E.f, {
                                children: (0, D.jsx)(u.K, {
                                    spacing: 4,
                                    children: (0, D.jsx)(S.x, {
                                        children: (0, D.jsx)(a.cC, {
                                            id: "DkFGZj"
                                        })
                                    })
                                })
                            }), (0, D.jsx)(I.m, {
                                children: (0, D.jsxs)(P.h, {
                                    children: [(0, D.jsx)(v.z, {
                                        isDisabled: i,
                                        variant: "ghost",
                                        colorScheme: "gray",
                                        onClick: t,
                                        children: (0, D.jsx)(a.cC, {
                                            id: "dEgA5A"
                                        })
                                    }), (0, D.jsx)(v.z, {
                                        variant: "ghost",
                                        colorScheme: "red",
                                        isLoading: i,
                                        onClick: r,
                                        loadingText: c.ag._({
                                            id: "EF2EU9"
                                        }),
                                        children: (0, D.jsx)(a.cC, {
                                            id: "cnGeoo"
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                },
                T = n(12662),
                R = n(40130),
                _ = n(31145),
                M = n(4036),
                L = n(84103),
                z = n(93319),
                N = n(67887),
                Z = n(49929),
                G = n(42879),
                F = {
                    pending: {
                        tooltip: (0, D.jsx)(a.cC, {
                            id: "/BjVEU"
                        }),
                        badgeText: (0, D.jsx)(a.cC, {
                            id: "bl9677"
                        }),
                        badgeColorScheme: "yellow"
                    },
                    failed: {
                        tooltip: (0, D.jsx)(a.cC, {
                            id: "7Bj3x9"
                        }),
                        badgeText: (0, D.jsx)(a.cC, {
                            id: "7Bj3x9"
                        }),
                        badgeColorScheme: "red"
                    }
                },
                U = function(e) {
                    var t = e.status,
                        n = e.onClick;
                    if ("verified" === t) return null;
                    var r = F[t],
                        i = r.tooltip,
                        o = r.badgeText,
                        s = r.badgeColorScheme;
                    return (0, D.jsx)(j.kH, {
                        label: i,
                        placement: "top",
                        children: (0, D.jsx)(M.C, {
                            display: "flex",
                            justifyContent: "center",
                            colorScheme: s,
                            cursor: n ? "pointer" : "default",
                            onClick: n || void 0,
                            children: o
                        })
                    })
                },
                W = function(e) {
                    var t = e.domain,
                        n = e.onDomainSetupClick,
                        o = e.path,
                        d = e.onDeleteClick,
                        u = e.numDomains,
                        h = (0, G.mn)({
                            domain: t,
                            path: o
                        }),
                        x = (0, l.p)(),
                        g = "verified" !== t.status || "verified" === t.status && u > 1,
                        C = (0, y.NEQ)(),
                        O = (0, i.Z)(C, 1)[0],
                        w = (0, b.useCallback)((0, r.Z)(s().mark(function e() {
                            return s().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, O({
                                            variables: {
                                                id: t.id
                                            }
                                        });
                                    case 2:
                                        x({
                                            title: (0, D.jsx)(a.cC, {
                                                id: "LIAJwx"
                                            }),
                                            status: "success",
                                            duration: 3e3,
                                            position: "top",
                                            isClosable: !0
                                        });
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [O, t.id, x]);
                    return (0, D.jsx)(f.Z, {
                        children: (0, D.jsx)(p.e, {
                            children: (0, D.jsxs)(m.U, {
                                children: ["verified" === t.status ? (0, D.jsx)(j.kH, {
                                    label: h,
                                    placement: "top",
                                    children: (0, D.jsx)(v.z, {
                                        as: L.r,
                                        variant: "link",
                                        href: h,
                                        target: "_blank",
                                        rightIcon: (0, D.jsx)(Z.G, {
                                            icon: _.faArrowUpRightFromSquare
                                        }),
                                        children: t.name
                                    })
                                }) : (0, D.jsx)(S.x, {
                                    children: t.name
                                }), (0, D.jsx)(z.L, {}), (0, D.jsx)(U, {
                                    status: t.status,
                                    onClick: "failed" === t.status ? w : null
                                }), (0, D.jsxs)(P.h, {
                                    children: [(0, D.jsx)(j.kH, {
                                        label: (0, D.jsx)(a.cC, {
                                            id: "UqSZMD"
                                        }),
                                        placement: "top",
                                        children: (0, D.jsx)(N.h, {
                                            onClick: function() {
                                                n(t.name)
                                            },
                                            "aria-label": c.ag._({
                                                id: "UqSZMD"
                                            }),
                                            size: "sm",
                                            variant: "ghost",
                                            colorScheme: "blackAlpha",
                                            icon: (0, D.jsx)(Z.G, {
                                                icon: R.faCircleInfo
                                            })
                                        })
                                    }), g && (0, D.jsx)(j.kH, {
                                        label: (0, D.jsx)(a.cC, {
                                            id: "C2YqXi"
                                        }),
                                        placement: "top",
                                        children: (0, D.jsx)(N.h, {
                                            onClick: function() {
                                                d(null == t ? void 0 : t.id)
                                            },
                                            "aria-label": c.ag._({
                                                id: "C2YqXi"
                                            }),
                                            size: "sm",
                                            variant: "ghost",
                                            colorScheme: "red",
                                            icon: (0, D.jsx)(Z.G, {
                                                icon: T.faTrashCan
                                            })
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                H = n(34860),
                V = function(e) {
                    var t, n = e.site,
                        o = e.path,
                        C = e.onDomainSetupClick,
                        O = e.onAddDomain,
                        w = e.isAddingDomain,
                        k = e.refetchSites,
                        S = (0, l.p)(),
                        E = (0, b.useState)(),
                        I = E[0],
                        P = E[1],
                        T = (0, b.useState)(""),
                        R = T[0],
                        _ = T[1],
                        M = (0, d.q)({
                            id: "delete-domain-modal"
                        }),
                        L = M.isOpen,
                        z = M.onOpen,
                        N = M.onClose,
                        Z = n.domains.find(function(e) {
                            return e.id === I
                        }),
                        F = (0, G.m6)(R),
                        U = (0, y.Yqv)(),
                        V = (0, i.Z)(U, 2),
                        B = V[0],
                        q = V[1].loading,
                        K = (0, b.useState)(void 0),
                        Y = K[0],
                        Q = K[1];
                    (0, H.vm)(function() {
                        I ? Q(null == Z ? void 0 : Z.name) : Q(void 0)
                    }, [I, null == Z ? void 0 : Z.name], [I]);
                    var X = (0, b.useCallback)(function() {
                            N(), P(function() {})
                        }, [N]),
                        J = (0, b.useCallback)((0, r.Z)(s().mark(function e() {
                            return s().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (Z) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, B({
                                            variables: {
                                                id: I
                                            }
                                        });
                                    case 4:
                                        return e.next = 6, k();
                                    case 6:
                                        S({
                                            title: (0, D.jsx)(a.cC, {
                                                id: "V4fbcv",
                                                values: {
                                                    0: Z.name
                                                }
                                            }),
                                            status: "success",
                                            duration: 3e3,
                                            position: "top",
                                            isClosable: !0
                                        }), X();
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [k, B, I, Z, X, S]);
                    return (0, D.jsxs)(u.K, {
                        spacing: 4,
                        children: [(0, D.jsx)(f.Z, {
                            variant: "filled",
                            children: (0, D.jsx)(p.e, {
                                children: (0, D.jsxs)(u.K, {
                                    spacing: 4,
                                    children: [(0, D.jsxs)(h.NI, {
                                        children: [(0, D.jsx)(x.l, {
                                            children: (0, D.jsx)(a.cC, {
                                                id: "AZ4xlc"
                                            })
                                        }), (0, D.jsxs)(m.U, {
                                            children: [(0, D.jsx)(g.I, {
                                                bg: "white",
                                                placeholder: (null == n ? void 0 : null === (t = n.domains) || void 0 === t ? void 0 : t.length) ? c.ag._({
                                                    id: "B6e4xs"
                                                }) : c.ag._({
                                                    id: "1y9z1r"
                                                }),
                                                value: R,
                                                onChange: function(e) {
                                                    return _(e.target.value)
                                                },
                                                onKeyDown: function(e) {
                                                    "Enter" === e.key && F && (e.preventDefault(), O(R), _(""))
                                                }
                                            }), (0, D.jsx)(u.K, {
                                                children: (0, D.jsx)(j.kH, {
                                                    label: (0, D.jsx)(a.cC, {
                                                        id: "aUB5ST"
                                                    }),
                                                    placement: "top",
                                                    shouldWrapChildren: !0,
                                                    isDisabled: F,
                                                    children: (0, D.jsx)(v.z, {
                                                        isDisabled: !F,
                                                        variant: "plain",
                                                        onClick: function() {
                                                            O(R), _("")
                                                        },
                                                        isLoading: w,
                                                        children: (0, D.jsx)(a.cC, {
                                                            id: "EdEpYN"
                                                        })
                                                    })
                                                })
                                            })]
                                        })]
                                    }), n.domains.map(function(e) {
                                        return (0, D.jsx)(W, {
                                            domain: e,
                                            onDomainSetupClick: C,
                                            path: o,
                                            onDeleteClick: function(e) {
                                                P(e), z()
                                            },
                                            numDomains: n.domains.length || 0
                                        }, e.id)
                                    })]
                                })
                            })
                        }), L && (0, D.jsx)(A, {
                            onClose: X,
                            onDelete: J,
                            domainName: Y,
                            isDeleting: q
                        })]
                    })
                }
        },
        74995: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return W
                }
            });
            var r, i = n(60697),
                o = n(55452),
                s = n(55479),
                a = n(20010),
                c = n(56915),
                l = n(48273),
                d = n(92619),
                u = n(64827),
                f = n(2167),
                p = n(76360),
                h = n(75342),
                x = n(71354),
                m = n(91012),
                g = n(11919),
                v = n(45650),
                j = n(8283),
                b = n(40110),
                y = n(74642),
                C = n(73851),
                O = n(36258),
                w = n(19875),
                k = n(35319),
                S = n(27912),
                E = n(72360),
                I = n(48322),
                P = n(35837),
                D = n(58499),
                A = n(80353),
                T = n(49929),
                R = n(55966),
                _ = n(2784),
                M = n(34860),
                L = n(85041),
                z = n(20406),
                N = n(28526),
                Z = n.n(N),
                G = n(42879),
                F = (r = (0, z.Z)(Z().mark(function e(t) {
                    var n, r, i, o, s;
                    return Z().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("/api/domains/connectToken").then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    if (!e.auth_token) throw Error("No auth token returned");
                                    return e.auth_token
                                });
                            case 2:
                                if (n = e.sent, window.entri) {
                                    e.next = 5;
                                    break
                                }
                                throw Error("Entri not found");
                            case 5:
                                return i = (r = (0, G.Yd)(t)).domain, o = r.dnsRecords, console.log("[launchEntri] Launching Entri with config", s = {
                                    applicationId: "gamma",
                                    token: n,
                                    prefilledDomain: i,
                                    dnsRecords: o
                                }), window.entri.showEntri(s), e.abrupt("return", new Promise(function(e, t) {
                                    var n = function n(r) {
                                        console.log("onEntriClose: event", r), window.removeEventListener("onEntriClose", n), r.detail.success ? e(r.detail) : t(r.detail)
                                    };
                                    window.addEventListener("onEntriClose", n, !1)
                                }));
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e) {
                    return r.apply(this, arguments)
                }),
                U = n(52322),
                W = function(e) {
                    var t = e.isOpen,
                        n = e.onClose,
                        r = e.domainName,
                        z = e.onDomainConfirmed,
                        N = (0, _.useState)("initial"),
                        Z = N[0],
                        W = N[1],
                        H = (0, _.useRef)(!1),
                        V = (0, _.useState)(function() {
                            return void 0 !== window.entri
                        }),
                        B = V[0],
                        q = V[1],
                        K = (0, _.useState)(!1),
                        Y = K[0],
                        Q = K[1],
                        X = (0, s.p)();
                    (0, M.Gq)(L.oc, {
                        predicate: function() {
                            return void 0 === window.entri
                        },
                        onload: function() {
                            q(!0), H.current = !0
                        }
                    });
                    var J = (0, _.useMemo)(function() {
                            return (0, G.Yd)(r || "")
                        }, [r]),
                        $ = J.dnsRecords,
                        ee = J.isRootDomain,
                        et = J.subdomain;
                    return (0, U.jsx)(R.Wk, {
                        isDark: !1,
                        children: (0, U.jsxs)(a.u_, {
                            isOpen: t,
                            onClose: n,
                            size: "3xl",
                            children: [(0, U.jsx)(c.Z, {}), (0, U.jsxs)(l.h, {
                                children: [(0, U.jsx)(d.x, {
                                    children: (0, U.jsx)(o.cC, {
                                        id: "xQMU8T",
                                        values: {
                                            domainName: r
                                        }
                                    })
                                }), (0, U.jsx)(u.o, {}), (0, U.jsxs)(f.f, {
                                    children: ["initial" === Z && (0, U.jsx)(p.Z, {
                                        variant: "filled",
                                        children: (0, U.jsx)(h.e, {
                                            children: (0, U.jsxs)(x.K, {
                                                spacing: 4,
                                                py: 4,
                                                mx: "auto",
                                                children: [(0, U.jsxs)(x.K, {
                                                    spacing: 2,
                                                    children: [(0, U.jsxs)(x.K, {
                                                        spacing: 1,
                                                        children: [(0, U.jsx)(m.x, {
                                                            textAlign: "center",
                                                            fontSize: "2xl",
                                                            children: (0, U.jsx)(T.G, {
                                                                icon: i.g4,
                                                                size: "lg"
                                                            })
                                                        }), (0, U.jsx)(m.x, {
                                                            fontWeight: "semibold",
                                                            fontSize: "lg",
                                                            textAlign: "center",
                                                            children: (0, U.jsx)(o.cC, {
                                                                id: "w5l5pM"
                                                            })
                                                        })]
                                                    }), (0, U.jsx)(m.x, {
                                                        textAlign: "center",
                                                        maxW: "unset",
                                                        children: (0, U.jsx)(o.cC, {
                                                            id: "MhdvBQ"
                                                        })
                                                    })]
                                                }), (0, U.jsx)(g.k, {
                                                    align: "center",
                                                    justify: "center",
                                                    w: "100%",
                                                    children: (0, U.jsxs)(x.K, {
                                                        w: 64,
                                                        maxW: "100%",
                                                        children: [(0, U.jsx)(v.z, {
                                                            size: "md",
                                                            variant: "solid",
                                                            isDisabled: !B,
                                                            isLoading: Y,
                                                            onClick: function() {
                                                                r && (Q(!0), F(r).then(function(e) {
                                                                    console.log("[ENTRI] Successfully setup domain", e), X({
                                                                        title: (0, U.jsx)(o.cC, {
                                                                            id: "p8Oc6N"
                                                                        }),
                                                                        description: (0, U.jsx)(o.cC, {
                                                                            id: "HqV46b"
                                                                        }),
                                                                        status: "success",
                                                                        duration: 3e3,
                                                                        isClosable: !0,
                                                                        position: "top"
                                                                    }), null == z || z(r)
                                                                }).catch(function(e) {
                                                                    X({
                                                                        title: (0, U.jsx)(o.cC, {
                                                                            id: "l/2jzv"
                                                                        }),
                                                                        description: e.message,
                                                                        status: "error",
                                                                        duration: 3e3,
                                                                        isClosable: !0,
                                                                        position: "top"
                                                                    })
                                                                }).finally(function() {
                                                                    Q(!1)
                                                                }))
                                                            },
                                                            children: (0, U.jsx)(o.cC, {
                                                                id: "qu+sXe"
                                                            })
                                                        }), (0, U.jsxs)(j.U, {
                                                            children: [(0, U.jsx)(b.i, {}), (0, U.jsx)(m.x, {
                                                                color: "gray.600",
                                                                children: (0, U.jsx)(o.cC, {
                                                                    id: "BzEFor"
                                                                })
                                                            }), (0, U.jsx)(b.i, {})]
                                                        }), (0, U.jsx)(v.z, {
                                                            size: "md",
                                                            variant: "plain",
                                                            onClick: function() {
                                                                W("manualSetup")
                                                            },
                                                            children: (0, U.jsx)(o.cC, {
                                                                id: "ANIrop"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })
                                    }), "manualSetup" === Z && (0, U.jsx)(p.Z, {
                                        variant: "filled",
                                        children: (0, U.jsx)(h.e, {
                                            children: (0, U.jsxs)(x.K, {
                                                spacing: 6,
                                                children: [(0, U.jsx)(m.x, {
                                                    fontWeight: "semibold",
                                                    fontSize: "lg",
                                                    children: (0, U.jsx)(o.cC, {
                                                        id: "L5N7HX"
                                                    })
                                                }), (0, U.jsxs)(y.i, {
                                                    variant: "simple",
                                                    children: [(0, U.jsx)(C.h, {
                                                        children: (0, U.jsxs)(O.Tr, {
                                                            children: [(0, U.jsx)(w.Th, {
                                                                children: (0, U.jsx)(o.cC, {
                                                                    id: "6YtxFj"
                                                                })
                                                            }), (0, U.jsx)(w.Th, {
                                                                children: (0, U.jsx)(o.cC, {
                                                                    id: "+zy2Nq"
                                                                })
                                                            }), (0, U.jsx)(w.Th, {
                                                                isNumeric: !0,
                                                                children: (0, U.jsx)(o.cC, {
                                                                    id: "HKH+W+"
                                                                })
                                                            })]
                                                        })
                                                    }), (0, U.jsx)(k.p, {
                                                        children: ($ || []).map(function(e) {
                                                            return (0, U.jsxs)(O.Tr, {
                                                                children: [(0, U.jsx)(S.Td, {
                                                                    fontFamily: "mono",
                                                                    children: e.host
                                                                }), (0, U.jsx)(S.Td, {
                                                                    fontFamily: "mono",
                                                                    children: e.type
                                                                }), (0, U.jsx)(S.Td, {
                                                                    isNumeric: !0,
                                                                    fontFamily: "mono",
                                                                    children: e.value
                                                                })]
                                                            }, e.value)
                                                        })
                                                    })]
                                                }), (0, U.jsxs)(E.b, {
                                                    status: "info",
                                                    colorScheme: "orange",
                                                    children: [(0, U.jsx)(I.z, {}), (0, U.jsxs)(x.K, {
                                                        children: [(0, U.jsx)(m.x, {
                                                            fontWeight: "bold",
                                                            fontSize: "md",
                                                            children: (0, U.jsx)(o.cC, {
                                                                id: "NxHkkp"
                                                            })
                                                        }), (0, U.jsxs)(P.GS, {
                                                            pl: "4",
                                                            spacing: "2",
                                                            children: [ee ? 1 === L.Co.length ? (0, U.jsx)(P.HC, {
                                                                children: (0, U.jsx)(o.cC, {
                                                                    id: "YMrXdT",
                                                                    values: {
                                                                        0: L.Co[0]
                                                                    },
                                                                    components: {
                                                                        0: (0, U.jsx)(D.E, {
                                                                            colorScheme: "gray"
                                                                        }),
                                                                        1: (0, U.jsx)(D.E, {
                                                                            colorScheme: "gray"
                                                                        }),
                                                                        2: (0, U.jsx)(D.E, {
                                                                            colorScheme: "gray"
                                                                        })
                                                                    }
                                                                })
                                                            }) : (0, U.jsx)(P.HC, {
                                                                children: (0, U.jsx)(o.cC, {
                                                                    id: "FM+LNW",
                                                                    values: {
                                                                        0: L.Co.slice(0, -1).map(function(e) {
                                                                            return (0, U.jsx)(D.E, {
                                                                                colorScheme: "gray",
                                                                                children: e
                                                                            }, e)
                                                                        }),
                                                                        1: L.Co.slice(-1)[0]
                                                                    },
                                                                    components: {
                                                                        0: (0, U.jsx)(D.E, {
                                                                            colorScheme: "gray"
                                                                        }),
                                                                        1: (0, U.jsx)(j.U, {
                                                                            display: "inline",
                                                                            divider: (0, U.jsx)("span", {
                                                                                children: ", "
                                                                            })
                                                                        }),
                                                                        2: (0, U.jsx)(D.E, {
                                                                            colorScheme: "gray"
                                                                        }),
                                                                        3: (0, U.jsx)(D.E, {
                                                                            colorScheme: "gray"
                                                                        })
                                                                    }
                                                                })
                                                            }) : null, (0, U.jsx)(P.HC, {
                                                                children: (0, U.jsx)(o.cC, {
                                                                    id: "Jmb6Yp",
                                                                    values: {
                                                                        subdomain: et,
                                                                        GAMMA_SITES_HOST: L.ax
                                                                    },
                                                                    components: {
                                                                        0: (0, U.jsx)(D.E, {
                                                                            colorScheme: "gray"
                                                                        }),
                                                                        1: (0, U.jsx)(D.E, {
                                                                            colorScheme: "gray"
                                                                        }),
                                                                        2: (0, U.jsx)(D.E, {
                                                                            colorScheme: "gray"
                                                                        })
                                                                    }
                                                                })
                                                            })]
                                                        })]
                                                    })]
                                                }), z && (0, U.jsxs)(j.U, {
                                                    justifyContent: "space-between",
                                                    children: [(0, U.jsx)(v.z, {
                                                        variant: "plain",
                                                        onClick: function() {
                                                            return W("initial")
                                                        },
                                                        children: (0, U.jsx)(o.cC, {
                                                            id: "iH8pgl"
                                                        })
                                                    }), (0, U.jsx)(v.z, {
                                                        variant: "solid",
                                                        onClick: function() {
                                                            n(), null == z || z(r)
                                                        },
                                                        size: "md",
                                                        mx: "auto",
                                                        children: (0, U.jsx)(o.cC, {
                                                            id: "RyhVuk"
                                                        })
                                                    })]
                                                })]
                                            })
                                        })
                                    })]
                                }), (0, U.jsx)(A.m, {})]
                            })]
                        })
                    })
                }
        },
        97873: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return w
                }
            });
            var r = n(95235),
                i = n(20406),
                o = n(81333),
                s = n(31145),
                a = n(76035),
                c = n(28526),
                l = n.n(c),
                d = n(55452),
                u = n(55479),
                f = n(53738),
                p = n(8283),
                h = n(91012),
                x = n(45650),
                m = n(97907),
                g = n(49929),
                v = n(2784),
                j = n(21010),
                b = n(42879),
                y = n(52322);

            function C(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var w = function(e) {
                var t, n, r, c, C = e.doc,
                    w = e.site,
                    k = e.path,
                    S = (0, u.p)(),
                    E = (0, j.sIg)(),
                    I = (0, o.Z)(E, 1)[0],
                    P = (0, j.sR8)(),
                    D = (0, o.Z)(P, 1)[0],
                    A = (0, j.odt)(),
                    T = (0, o.Z)(A, 1)[0],
                    R = (0, j.L24)(),
                    _ = (0, o.Z)(R, 1)[0],
                    M = (0, j.kui)(),
                    L = (0, o.Z)(M, 2),
                    z = L[0],
                    N = L[1].loading,
                    Z = (0, j.V$$)(),
                    G = (0, o.Z)(Z, 2),
                    F = G[0],
                    U = G[1].loading,
                    W = null == C ? void 0 : C.id,
                    H = null == C ? void 0 : null === (r = C.organization) || void 0 === r ? void 0 : r.id,
                    V = (0, b.mn)({
                        domain: null == w ? void 0 : null === (c = w.domains) || void 0 === c ? void 0 : c[0],
                        path: k
                    }),
                    B = null == w ? void 0 : w.id;
                return {
                    publishAndDeploy: (0, v.useCallback)((0, i.Z)(l().mark(function e() {
                        return l().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (W) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, (0, b.iL)(W);
                                case 4:
                                    return e.next = 6, I({
                                        variables: {
                                            id: W
                                        },
                                        update: function(e, t) {
                                            var n = t.data,
                                                r = null == n ? void 0 : n.publishDoc;
                                            r && e.updateQuery({
                                                query: j.yE1,
                                                variables: {
                                                    id: r.id
                                                }
                                            }, function(e) {
                                                var t;
                                                return (e || console.log("%c Publish doc _data is undefined or null", "color: red; font-size: 16px"), null != e && e.doc) ? {
                                                    doc: O(O({}, e.doc), {}, {
                                                        publishedTime: r.publishedTime,
                                                        publishedSnapshotId: null === (t = r.publishedSnapshot) || void 0 === t ? void 0 : t.id
                                                    })
                                                } : e
                                            })
                                        }
                                    }).then(function() {
                                        return D({
                                            variables: {
                                                siteId: null == w ? void 0 : w.id
                                            }
                                        })
                                    }).then(function() {
                                        S({
                                            render: function() {
                                                return (0, y.jsx)(f.xu, {
                                                    color: "white",
                                                    p: 3,
                                                    bg: "green.500",
                                                    shadow: "md",
                                                    borderRadius: "md",
                                                    children: (0, y.jsxs)(p.U, {
                                                        spacing: 4,
                                                        children: [(0, y.jsx)(f.xu, {
                                                            children: (0, y.jsx)(g.G, {
                                                                icon: a.faCircleCheck
                                                            })
                                                        }), (0, y.jsx)(h.x, {
                                                            fontWeight: "semibold",
                                                            children: "Your changes have been published."
                                                        }), V && (0, y.jsx)(x.z, {
                                                            variant: "plain",
                                                            as: "a",
                                                            target: "_blank",
                                                            _hover: {
                                                                textDecoration: "none",
                                                                color: "trueblue.500"
                                                            },
                                                            href: V,
                                                            rightIcon: (0, y.jsx)(g.G, {
                                                                icon: s.faArrowUpRightFromSquare
                                                            }),
                                                            children: "View site"
                                                        }), (0, y.jsx)(m.P, {
                                                            onClick: function() {
                                                                return S.closeAll()
                                                            }
                                                        })]
                                                    })
                                                })
                                            },
                                            status: "success",
                                            position: "top",
                                            duration: 5e3,
                                            isClosable: !0
                                        })
                                    }).catch(function(e) {
                                        S({
                                            title: (0, y.jsx)(d.cC, {
                                                id: "DD5mqk"
                                            }),
                                            status: "error",
                                            position: "top",
                                            isClosable: !0
                                        }), console.error("Error publishing site:", e.message)
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), [W, I, D, null == w ? void 0 : w.id, S, V]),
                    addDomain: (0, v.useCallback)((t = (0, i.Z)(l().mark(function e(t) {
                        return l().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(!B || !W)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.prev = 2, e.next = 5, z({
                                        variables: {
                                            input: {
                                                siteId: B,
                                                name: t
                                            }
                                        },
                                        refetchQueries: ["GetSites", "GetDoc"]
                                    });
                                case 5:
                                    e.next = 11;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(2), console.error("Error adding domain:", e.t0), S({
                                        status: "error",
                                        title: (0, y.jsx)(d.cC, {
                                            id: "HugOMA"
                                        }),
                                        isClosable: !0,
                                        position: "top"
                                    });
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }, e, null, [
                            [2, 7]
                        ])
                    })), function(e) {
                        return t.apply(this, arguments)
                    }), [z, W, B, S]),
                    isAddingDomain: N,
                    createSite: (0, v.useCallback)((n = (0, i.Z)(l().mark(function e(t) {
                        return l().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (W) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    F({
                                        variables: {
                                            input: {
                                                workspaceId: H,
                                                name: t,
                                                domains: [{
                                                    name: t
                                                }],
                                                routes: []
                                            }
                                        },
                                        refetchQueries: ["GetSites", "GetDoc"]
                                    }).catch(function(e) {
                                        console.error("Error creating site:", e.message)
                                    });
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return n.apply(this, arguments)
                    }), [W, H, F]),
                    isCreatingSite: U,
                    unpublishAndDeploy: (0, v.useCallback)((0, i.Z)(l().mark(function e() {
                        var t;
                        return l().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(!B || !W)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, _({
                                        variables: {
                                            id: W
                                        },
                                        update: function(e, t) {
                                            var n = t.data,
                                                r = null == n ? void 0 : n.unpublishDoc;
                                            r && e.updateQuery({
                                                query: j.yE1,
                                                variables: {
                                                    id: r.id
                                                }
                                            }, function(e) {
                                                return null != e && e.doc ? {
                                                    doc: O(O({}, e.doc), {}, {
                                                        publishedSnapshotId: null
                                                    })
                                                } : e
                                            })
                                        }
                                    }).then(function() {
                                        return T({
                                            variables: {
                                                input: {
                                                    siteId: B,
                                                    routes: (0, b.kj)({
                                                        docId: W,
                                                        routes: (null == w ? void 0 : w.routes) || [],
                                                        path: null
                                                    })
                                                }
                                            }
                                        })
                                    }).then(function() {
                                        return D({
                                            variables: {
                                                siteId: null == w ? void 0 : w.id
                                            }
                                        })
                                    }).then(function() {
                                        S({
                                            description: null != w && w.name ? (0, y.jsx)(d.cC, {
                                                id: "Qv0Wgn",
                                                values: {
                                                    0: null == w ? void 0 : w.name
                                                }
                                            }) : (0, y.jsx)(d.cC, {
                                                id: "3fkTmP"
                                            }),
                                            status: "success",
                                            position: "top",
                                            duration: 5e3,
                                            isClosable: !0
                                        })
                                    }).catch(function(e) {
                                        S({
                                            title: (0, y.jsx)(d.cC, {
                                                id: "uMOlnl"
                                            }),
                                            status: "error",
                                            position: "top",
                                            isClosable: !0
                                        }), console.error("Error unpublishing site:", e.message)
                                    });
                                case 4:
                                    return t = e.sent, e.abrupt("return", t);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), [B, W, _, null == w ? void 0 : w.routes, null == w ? void 0 : w.id, null == w ? void 0 : w.name, T, D, S]),
                    updateRoutes: (0, v.useCallback)((0, i.Z)(l().mark(function e() {
                        var t;
                        return l().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(!W || !B)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return t = (0, b.kj)({
                                        routes: (null == w ? void 0 : w.routes) || [],
                                        docId: W,
                                        path: k
                                    }), e.next = 5, T({
                                        variables: {
                                            input: {
                                                siteId: B,
                                                routes: t
                                            }
                                        }
                                    });
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), [T, W, null == w ? void 0 : w.routes, B, k])
                }
            }
        },
        18066: function(e, t, n) {
            n.d(t, {
                y: function() {
                    return R
                }
            });
            var r = n(2885),
                i = n(49626),
                o = n(55452),
                s = n(72360),
                a = n(48322),
                c = n(53738),
                l = n(66724),
                d = n(18751),
                u = n(71354),
                f = n(91012),
                p = n(93319),
                h = n(45650),
                x = n(49929),
                m = n(2784),
                g = n(23313),
                v = n(75085),
                j = n(53865),
                b = n(16686),
                y = n(52322),
                C = function(e) {
                    var t = e.openThemeEditor;
                    return (0, y.jsxs)(u.K, {
                        bg: "gray.100",
                        p: 4,
                        textAlign: "left",
                        spacing: 4,
                        borderRadius: "md",
                        my: 2,
                        children: [(0, y.jsx)(f.x, {
                            textAlign: "center",
                            fontWeight: "700",
                            children: (0, y.jsx)(o.cC, {
                                id: "yNvg2Q"
                            })
                        }), (0, y.jsx)(f.x, {
                            fontSize: "sm",
                            color: "gray.700",
                            children: (0, y.jsx)(o.cC, {
                                id: "qYwzxB"
                            })
                        }), (0, y.jsx)(h.z, {
                            onClick: t,
                            variant: "solid",
                            leftIcon: (0, y.jsx)(x.G, {
                                icon: b.Jy
                            }),
                            "data-testid": "new-theme-button",
                            children: (0, y.jsx)(o.cC, {
                                id: "srRMnJ"
                            })
                        })]
                    })
                },
                O = n(3334),
                w = n(2875),
                k = n(10710),
                S = n(95235),
                E = n(12741),
                I = n(27440),
                P = n(76817);

            function D(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(Object(n), !0).forEach(function(t) {
                        (0, S.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var T = function(e) {
                    var t = e.themes,
                        n = e.type,
                        r = e.currentTheme,
                        i = e.setTheme,
                        o = e.openThemeEditor,
                        s = e.gridProps;
                    return (0, y.jsx)(I.r, A(A({
                        gap: 1,
                        flex: 1,
                        my: 2,
                        mx: -2
                    }, s), {}, {
                        children: (0, E.Z)(t).sort(j.qb).map(function(e) {
                            return (0, y.jsx)(P.o, {
                                type: n,
                                theme: e,
                                isChecked: e.id === r.id,
                                onEditClick: o,
                                onThemeClicked: i,
                                variant: "ghost"
                            }, e.id)
                        })
                    }))
                },
                R = function(e) {
                    var t = e.currentTheme,
                        n = e.setTheme,
                        b = e.openThemeEditor,
                        S = e.onClose,
                        E = e.showEditBackgroundButton,
                        I = e.gridProps,
                        P = void 0 === I ? {
                            templateColumns: {
                                base: "repeat(2, minmax(0, 1fr))"
                            }
                        } : I,
                        D = (0, k.SE)().currentWorkspace,
                        A = (0, g.BCl)({
                            variables: {
                                workspaceId: null == D ? void 0 : D.id,
                                archived: !1
                            },
                            skip: !D,
                            fetchPolicy: "cache-first",
                            nextFetchPolicy: "cache-only"
                        }),
                        R = A.data,
                        _ = A.loading,
                        M = (0, g.BCl)({
                            variables: {
                                workspaceId: null,
                                archived: !1
                            },
                            fetchPolicy: "cache-first",
                            nextFetchPolicy: "cache-only"
                        }),
                        L = M.data,
                        z = M.loading,
                        N = (null == R ? void 0 : R.themes) || [],
                        Z = (null == L ? void 0 : L.themes) || [],
                        G = (0, m.useCallback)(function() {
                            b((0, j.QB)(null == L ? void 0 : L.themes), !0)
                        }, [L, b]),
                        F = (null == N ? void 0 : N.length) > 0,
                        U = (0, m.useCallback)(function() {
                            w.pw.emit(w.TI.OPEN_PAGE_SETUP, "background"), null == S || S()
                        }, [S]);
                    return (0, y.jsxs)(y.Fragment, {
                        children: [null != t && t.archived ? (0, y.jsxs)(s.b, {
                            status: "warning",
                            mb: 4,
                            children: [(0, y.jsx)(a.z, {}), (0, y.jsxs)(c.xu, {
                                children: [(0, y.jsx)(l.C, {
                                    children: (0, y.jsx)(o.cC, {
                                        id: "WTUBPK",
                                        values: {
                                            GAMMA_ARTIFACT_PROPER_NOUN: v.Yc
                                        }
                                    })
                                }), (0, y.jsx)(d.X, {
                                    children: (0, y.jsx)(o.cC, {
                                        id: "5iFuNk"
                                    })
                                })]
                            })]
                        }) : null, (0, y.jsxs)(u.K, {
                            spacing: 2,
                            children: [(0, y.jsxs)(u.K, {
                                direction: "row",
                                children: [(0, y.jsx)(f.x, {
                                    color: "gray.500",
                                    fontWeight: "600",
                                    fontSize: "sm",
                                    children: (0, y.jsx)(o.cC, {
                                        id: "B+0JwP"
                                    })
                                }), (0, y.jsx)(p.L, {}), F && D && (0, y.jsx)(h.z, {
                                    size: "xs",
                                    leftIcon: (0, y.jsx)(x.G, {
                                        icon: i.r8
                                    }),
                                    onClick: G,
                                    "data-testid": "new-theme-button",
                                    children: (0, y.jsx)(o.cC, {
                                        id: "FiwgR9"
                                    })
                                })]
                            }), _ ? (0, y.jsx)(O.S, {
                                size: 2,
                                gridProps: P
                            }) : F ? (0, y.jsx)(T, {
                                themes: N,
                                type: "custom",
                                currentTheme: t,
                                setTheme: n,
                                openThemeEditor: b,
                                gridProps: P
                            }) : D ? (0, y.jsx)(C, {
                                openThemeEditor: G
                            }) : null, (0, y.jsxs)(u.K, {
                                pt: 2,
                                direction: ["column", "row"],
                                children: [(0, y.jsx)(f.x, {
                                    color: "gray.500",
                                    fontWeight: "600",
                                    fontSize: "sm",
                                    children: (0, y.jsx)(o.cC, {
                                        id: "VjG5AF"
                                    })
                                }), (0, y.jsx)(p.L, {}), (void 0 === E || E) && (0, y.jsx)(h.z, {
                                    size: "xs",
                                    leftIcon: (0, y.jsx)(x.G, {
                                        icon: r.UH
                                    }),
                                    onClick: U,
                                    children: (0, y.jsx)(o.cC, {
                                        id: "+EZioz"
                                    })
                                })]
                            }), z ? (0, y.jsx)(O.S, {
                                size: 4,
                                gridProps: P
                            }) : (0, y.jsx)(T, {
                                themes: Z,
                                type: "standard",
                                currentTheme: t,
                                setTheme: n,
                                openThemeEditor: b,
                                gridProps: P
                            })]
                        })]
                    })
                }
        },
        42048: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return D
                }
            });
            var r = n(55452),
                i = n(87254),
                o = n(78116),
                s = n(56915),
                a = n(16796),
                c = n(64827),
                l = n(92619),
                d = n(2167),
                u = n(80353),
                f = n(45650),
                p = n(55966),
                h = n(2784),
                x = n(95235),
                m = n(82269),
                g = n(2046),
                v = n(70287),
                j = n(60807),
                b = n(53738),
                y = n(34860),
                C = n(69297),
                O = n(52322),
                w = ["label", "initialValue", "updateValue", "helperText", "language"];

            function k(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var S = function(e) {
                    var t = e.label,
                        r = e.initialValue,
                        i = e.updateValue,
                        o = e.helperText,
                        s = e.language,
                        a = (0, m.Z)(e, w),
                        c = (0, h.useState)(void 0 === r ? "" : r),
                        l = c[0],
                        d = c[1],
                        u = (0, h.useState)(null),
                        f = u[0],
                        p = u[1],
                        S = (0, y.Kt)(i, 100),
                        E = (0, h.useState)(),
                        I = E[0],
                        P = E[1];
                    (0, h.useEffect)(function() {
                        "css" === s ? Promise.all([n.e(8917), n.e(7120), n.e(6214)]).then(n.bind(n, 65284)).then(function(e) {
                            P(e.css())
                        }) : "html" === s && Promise.all([n.e(8917), n.e(7120), n.e(6214), n.e(4100), n.e(2163)]).then(n.bind(n, 22163)).then(function(e) {
                            P(e.html())
                        })
                    }, [s]), (0, y.vm)(function() {
                        p(null), S(l)
                    }, [l, S], [l]);
                    var D = [I].filter(Boolean);
                    return (0, O.jsxs)(g.NI, {
                        isInvalid: !!f,
                        children: [(0, O.jsx)(v.l, {
                            children: t
                        }), f && (0, O.jsx)(j.J1, {
                            children: f
                        }), o && (0, O.jsx)(g.Q6, {
                            children: o
                        }), (0, O.jsx)(b.xu, {
                            border: "1px solid",
                            borderColor: "gray.200",
                            fontSize: "md",
                            position: "relative",
                            children: (0, O.jsx)(h.Suspense, {
                                fallback: (0, O.jsx)("span", {}),
                                children: (0, O.jsx)(C.B, function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? k(Object(n), !0).forEach(function(t) {
                                            (0, x.Z)(e, t, n[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        })
                                    }
                                    return e
                                }({
                                    value: l,
                                    extensions: D,
                                    onChange: d
                                }, a))
                            })
                        })]
                    })
                },
                E = n(46358),
                I = n(62141),
                P = n(21529),
                D = (0, h.memo)(function(e) {
                    var t = e.isOpen,
                        n = e.onClose,
                        x = e.editor,
                        m = (0, P.A)(x),
                        g = (0, E.CG)(I.$p).bodyStart,
                        v = (0, h.useCallback)(function(e) {
                            null == x || x.commands.updateNestedAttributesAtPos(0, {
                                customCode: {
                                    bodyStart: e
                                }
                            })
                        }, [x]);
                    return (0, O.jsx)(p.Wk, {
                        isDark: !1,
                        children: (0, O.jsxs)(o.d, {
                            returnFocusOnClose: !1,
                            isOpen: t,
                            placement: "right",
                            onClose: n,
                            size: "lg",
                            children: [(0, O.jsx)(s.Z, {
                                background: "none"
                            }), (0, O.jsxs)(a.s, {
                                onKeyDown: m,
                                "data-testid": "custom-code-drawer",
                                motionProps: {
                                    variants: {
                                        enter: {
                                            x: "0%",
                                            transition: {
                                                duration: .2
                                            }
                                        },
                                        exit: {
                                            x: "100%",
                                            transition: {
                                                duration: .1
                                            }
                                        }
                                    }
                                },
                                children: [(0, O.jsx)(c.o, {}), (0, O.jsx)(l.x, {
                                    children: (0, O.jsx)(r.cC, {
                                        id: "E16GGw"
                                    })
                                }), (0, O.jsx)(d.f, {
                                    overflowX: "hidden",
                                    children: (0, O.jsx)(S, {
                                        label: i.ag._({
                                            id: "fC5kYg"
                                        }),
                                        helperText: i.ag._({
                                            id: "0AZNtw"
                                        }),
                                        initialValue: g,
                                        updateValue: v,
                                        language: "html",
                                        height: "600px"
                                    })
                                }), (0, O.jsx)(u.m, {
                                    children: (0, O.jsx)(f.z, {
                                        w: "100%",
                                        variant: "solid",
                                        onClick: n,
                                        children: (0, O.jsx)(r.cC, {
                                            id: "DPfwMq"
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                });
            D.displayName = "CustomCodeDrawer"
        },
        59734: function(e, t, n) {
            n.d(t, {
                _i: function() {
                    return A._
                },
                eT: function() {
                    return J
                }
            });
            var r, i, o, s, a, c = n(95235),
                l = n(81333),
                d = n(55452),
                u = n(55479),
                f = n(5632),
                p = n(2784),
                h = n(23313),
                x = n(77381),
                m = n(70204),
                g = n(46358),
                v = n(10710),
                j = n(68941),
                b = n(69209),
                y = function(e) {
                    var t = (0, g.TL)(),
                        n = (0, v.SE)().currentWorkspace;
                    (0, p.useEffect)(function() {
                        if (e) return j.VH.updateWorkspaceInLdContext(e).then(function() {
                                t((0, b.vH)({
                                    isDocWorkspaceSet: !0
                                }))
                            }),
                            function() {
                                j.VH.updateWorkspaceInLdContext(n).then(function() {
                                    t((0, b.vH)({
                                        isDocWorkspaceSet: !1
                                    }))
                                })
                            }
                    }, [n, t, e])
                },
                C = n(1368),
                O = n(7328),
                w = n(57981),
                k = (0, w.Ps)(r || (r = (0, O.Z)(["\n  fragment DefaultCardFields on Card {\n    id\n    archived\n    docId\n    title\n    text\n    previewUrl\n    createdTime\n    updatedTime\n  }\n"])));
            (0, w.Ps)(i || (i = (0, O.Z)(["\n  mutation CreateCard($id: ID!, $docId: ID!) {\n    createCard(id: $id, docId: $docId) {\n      id\n    }\n  }\n"]))), (0, w.Ps)(o || (o = (0, O.Z)(["\n  ", "\n  query GetCard($id: ID!, $docId: ID!) {\n    card(id: $id, docId: $docId) {\n      ...DefaultCardFields\n    }\n  }\n"])), k), (0, w.Ps)(s || (s = (0, O.Z)(["\n  ", "\n  query GetCards($docId: ID!) {\n    docCards(docId: $docId, archived: false) {\n      ...DefaultCardFields\n    }\n  }\n"])), k);
            var S = (0, w.Ps)(a || (a = (0, O.Z)(["\n  ", "\n  subscription SubscribeToCards($docId: ID!) {\n    docCards(docId: $docId) {\n      ...DefaultCardFields\n    }\n  }\n"])), k),
                E = n(93589),
                I = n(51823),
                P = n(61701),
                D = n(68197),
                A = n(46732),
                T = n(75944),
                R = n(46988),
                _ = n(20010),
                M = n(56915),
                L = n(48273),
                z = n(92619),
                N = n(64827),
                Z = n(2167),
                G = n(71354),
                F = n(91012),
                U = n(80353),
                W = n(76648),
                H = n(45650),
                V = n(52322),
                B = n(29677),
                q = function(e) {
                    var t, n = (null === (t = (0, g.CG)((0, R.oH)(e || ""))) || void 0 === t ? void 0 : t.status) === "running",
                        r = (0, p.useRef)(n);
                    r.current = n;
                    var i = (0, p.useState)(function() {
                            return new B.B
                        }),
                        o = i[0],
                        s = i[1],
                        a = (0, p.useCallback)(function() {
                            o.resolve()
                        }, [o]),
                        c = (0, T.q)(),
                        l = c.isOpen,
                        d = c.onOpen,
                        u = c.onClose;
                    return {
                        confirmNavigationFn: (0, p.useCallback)(function() {
                            if (!r.current) return Promise.resolve();
                            var e = new B.B;
                            return s(e), d(), e.promise
                        }, [d]),
                        confirmNavigationModalProps: {
                            isOpen: l,
                            onClose: u,
                            onConfirm: a
                        }
                    }
                },
                K = function(e) {
                    var t = e.isOpen,
                        n = e.onClose,
                        r = e.onConfirm;
                    return (0, V.jsxs)(_.u_, {
                        onClose: n,
                        isOpen: t,
                        isCentered: !0,
                        children: [(0, V.jsx)(M.Z, {}), (0, V.jsxs)(L.h, {
                            children: [(0, V.jsx)(z.x, {
                                children: (0, V.jsx)(d.cC, {
                                    id: "YeK6T+"
                                })
                            }), (0, V.jsx)(N.o, {}), (0, V.jsx)(Z.f, {
                                children: (0, V.jsxs)(G.K, {
                                    spacing: 4,
                                    children: [(0, V.jsx)(F.x, {
                                        fontWeight: "bold",
                                        children: (0, V.jsx)(d.cC, {
                                            id: "Wr6Y7m"
                                        })
                                    }), (0, V.jsx)(F.x, {
                                        children: (0, V.jsx)(d.cC, {
                                            id: "n0Fn6S"
                                        })
                                    })]
                                })
                            }), (0, V.jsx)(U.m, {
                                children: (0, V.jsxs)(W.h, {
                                    children: [(0, V.jsx)(H.z, {
                                        variant: "ghost",
                                        onClick: n,
                                        children: (0, V.jsx)(d.cC, {
                                            id: "dEgA5A"
                                        })
                                    }), (0, V.jsx)(H.z, {
                                        variant: "ghost",
                                        color: "red.600",
                                        onClick: r,
                                        children: (0, V.jsx)(d.cC, {
                                            id: "QxM8i/"
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                };

            function Y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Y(Object(n), !0).forEach(function(t) {
                        (0, c.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var X = function(e) {
                var t = e.children,
                    n = (0, u.p)(),
                    r = (0, v.we)(),
                    i = (0, g.CG)(D.XV),
                    o = (0, v.SE)(),
                    s = o.user,
                    a = o.userStatus,
                    c = (0, p.useRef)(null),
                    j = (0, g.TL)(),
                    b = (0, f.useRouter)(),
                    O = b.push,
                    w = b.replace,
                    k = (0, g.CG)(D.yx),
                    T = (0, I.NO)(),
                    R = (0, l.Z)(T, 3),
                    _ = R[0],
                    M = R[1],
                    L = R[2],
                    z = M && M.match(I.sg),
                    N = z ? z[0] : null,
                    Z = q(N),
                    G = Z.confirmNavigationFn,
                    F = Z.confirmNavigationModalProps,
                    U = (0, p.useState)({
                        isUnauthorized: void 0,
                        setCollaborativeEditorInstance: function(e) {
                            c.current = e, H(function(t) {
                                return Q(Q({}, t), {}, {
                                    editor: e
                                })
                            })
                        },
                        getCollaborativeEditorInstance: function() {
                            return c.current
                        },
                        confirmNavigation: G,
                        editor: void 0
                    }),
                    W = U[0],
                    H = U[1];
                (0, x.ts)(k), y(null == k ? void 0 : k.organization);
                var B = (0, h.WMx)({
                        variables: {
                            id: N
                        },
                        returnPartialData: !0,
                        nextFetchPolicy: "cache-only"
                    }),
                    Y = (0, l.Z)(B, 2),
                    X = Y[0],
                    J = Y[1],
                    $ = J.data,
                    ee = J.loading,
                    et = J.called,
                    en = J.subscribeToMore,
                    er = (0, v.py)("view", null == $ ? void 0 : $.doc),
                    ei = (0, v.Is)("edit", null == $ ? void 0 : $.doc);
                (0, v.$K)(X), (0, p.useEffect)(function() {
                    if (en && W.docId && et) return en({
                        document: P.dU,
                        variables: {
                            id: W.docId
                        },
                        updateQuery: function(e, t) {
                            var n = t.subscriptionData;
                            return n.data && n.data.doc && e.doc ? {
                                doc: Q(Q(Q({}, e.doc), n.data.doc), {}, {
                                    __typename: "Doc"
                                })
                            } : e
                        }
                    })
                }, [W.docId, en, et]);
                var eo = (0, h.WBF)({
                        variables: {
                            docId: N
                        },
                        returnPartialData: !0,
                        nextFetchPolicy: "cache-only"
                    }),
                    es = (0, l.Z)(eo, 2),
                    ea = es[0],
                    ec = es[1],
                    el = ec.data,
                    ed = ec.called,
                    eu = ec.subscribeToMore;
                return ((0, m.p)(null == el ? void 0 : el.docCards, W.editor), (0, p.useEffect)(function() {
                    if (eu && W.docId && ed) return eu({
                        document: S,
                        variables: {
                            docId: W.docId
                        },
                        updateQuery: function(e, t) {
                            var n = t.subscriptionData;
                            return n.data && n.data.docCards ? n.data : e
                        }
                    })
                }, [W.docId, eu, ed]), (0, p.useEffect)(function() {
                    if (W.docId !== N && M) {
                        if (!N) {
                            n({
                                id: "invalid_doc_id_error",
                                title: (0, V.jsx)(d.cC, {
                                    id: "742lf1"
                                }),
                                description: "",
                                status: "error",
                                position: "top",
                                isClosable: !1,
                                duration: null
                            });
                            return
                        }
                        X(), ea(), H(function(e) {
                            return Q(Q({}, e), {}, {
                                docId: N
                            })
                        })
                    }
                }, [W.docId, M, N, X, ea, j, n]), (0, p.useEffect)(function() {
                    if ("loading" !== a && et && !ee && M) {
                        if (!$ || !$.doc || !1 === er) {
                            "loggedOut" === a && O("/signin?redirect_to=".concat(encodeURIComponent(window.location.href))), H(function(e) {
                                return Q(Q({}, e), {}, {
                                    isUnauthorized: !0
                                })
                            });
                            return
                        }
                        if ($ && null === $.doc.currentSnapshotId && ei) {
                            H(function(e) {
                                return Q(Q({}, e), {}, {
                                    isUnauthorized: !0
                                })
                            });
                            return
                        }
                        if (!i && $.doc.archived) {
                            w("/");
                            return
                        }
                        H(function(e) {
                            return !1 === e.isUnauthorized ? e : Q(Q({}, e), {}, {
                                isUnauthorized: !1
                            })
                        }), j((0, D.pl)({
                            doc: $.doc
                        }))
                    }
                }, [r, er, ei, $, ee, M, et, i, a, O, j, w, s]), (0, p.useEffect)(function() {
                    return function() {
                        j((0, D.mc)())
                    }
                }, [j]), (0, p.useEffect)(function() {
                    if (k && N) {
                        var e = "".concat(k.title ? "".concat((0, E.lV)(k.title), "-") : "").concat(N);
                        M !== e && (0, C.lO)({
                            pathname: "".concat(_, "/").concat(e).concat(L || ""),
                            emitChange: !1
                        })
                    }
                }, [k, N, M, _, L]), W.docId) ? (0, V.jsxs)(A.r.Provider, {
                    value: W,
                    children: [t, (0, V.jsx)(K, Q({}, F))]
                }) : (0, V.jsx)(V.Fragment, {})
            };

            function J(e) {
                return (0, p.memo)(function(t) {
                    return (0, V.jsx)(X, {
                        children: (0, V.jsx)(e, Q({}, t))
                    })
                })
            }
        },
        30174: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return s
                }
            });
            var r = n(11919);
            n(2784);
            var i = n(1153),
                o = n(52322),
                s = function(e) {
                    var t = e.children;
                    return (0, o.jsxs)(r.k, {
                        alignSelf: "stretch",
                        position: "relative",
                        height: "var(--100vh)",
                        direction: "column",
                        children: [(0, o.jsx)(i.Y, {}), t]
                    })
                }
        },
        1005: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return F
                }
            });
            var r = n(81333),
                i = n(55452),
                o = n(87254),
                s = n(11919),
                a = n(53738),
                c = n(94659),
                l = n(36895),
                d = n(50390),
                u = n(91012),
                f = n(55966),
                p = n(2784),
                h = n(23313),
                x = n(43602),
                m = n(9846),
                g = n(46358),
                v = n(80318),
                j = n(6010),
                b = n(62141),
                y = n(10710),
                C = {
                    src: "/_next/static/media/Sal-Fishing-2x.1a2d0290.png"
                },
                O = n(81188),
                w = n(83906),
                k = n(9088),
                S = n(30893),
                E = n(45650),
                I = n(40771),
                P = n(63849),
                D = n(2575),
                A = n(97907),
                T = n(65903),
                R = n.n(T),
                _ = n(52322),
                M = function(e) {
                    var t = e.count,
                        n = e.onClose,
                        r = e.commentStatusFilter,
                        a = e.setCommentStatusFilter,
                        c = r === h.Ux9.Open ? o.ag._({
                            id: "Kz1TxG"
                        }) : o.ag._({
                            id: "kywJax"
                        });
                    return (0, _.jsxs)(s.k, {
                        width: "100%",
                        px: 6,
                        py: 4,
                        justifyContent: "space-between",
                        alignItems: "center",
                        h: 16,
                        tabIndex: 0,
                        outline: "none",
                        children: [(0, _.jsx)(d.X, {
                            size: "md",
                            flex: 1,
                            noOfLines: 1,
                            children: (0, _.jsx)(i.cC, {
                                id: "eiUA4k",
                                values: {
                                    count: t
                                }
                            })
                        }), (0, _.jsxs)(k.v, {
                            closeOnSelect: !0,
                            children: [(0, _.jsx)(S.j, {
                                as: E.z,
                                size: "sm",
                                rightIcon: (0, _.jsx)(w.v, {}),
                                mr: 8,
                                children: R()(c)
                            }), (0, _.jsx)(I.q, {
                                zIndex: 3,
                                children: (0, _.jsxs)(P._, {
                                    defaultValue: r,
                                    title: o.ag._({
                                        id: "0cVgUw"
                                    }),
                                    type: "radio",
                                    children: [(0, _.jsx)(D.i, {
                                        onClick: function() {
                                            return a(h.Ux9.Open)
                                        },
                                        value: "open",
                                        children: (0, _.jsx)(i.cC, {
                                            id: "1TNIig"
                                        })
                                    }), (0, _.jsx)(D.i, {
                                        onClick: function() {
                                            return a(h.Ux9.Closed)
                                        },
                                        value: "closed",
                                        children: (0, _.jsx)(i.cC, {
                                            id: "D87pha"
                                        })
                                    })]
                                })
                            })]
                        }), (0, _.jsx)(A.P, {
                            position: "absolute",
                            top: 2,
                            right: 2,
                            onClick: n,
                            "data-comment-feed-close-button": !0
                        })]
                    })
                },
                L = n(95235),
                z = n(50350);

            function N(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(n), !0).forEach(function(t) {
                        (0, L.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var G = function(e) {
                    var t = e.user,
                        n = e.editor,
                        r = (0, p.useState)(function() {
                            var e = (0, v.W1)(n, z.Et);
                            return e && e.length ? e[0] : (0, v.xN)(function() {
                                return z.Et
                            }, n, "")
                        }),
                        i = r[0],
                        o = r[1];
                    (0, p.useEffect)(function() {
                        if (i && n) return function() {
                            var e, t;
                            null === (e = (t = n.commands).createDraftComment) || void 0 === e || e.call(t, i)
                        }
                    }, [i, n]);
                    var s = (0, v.iZ)({
                            draftComment: i,
                            clearDraftComment: function() {
                                i && (null === (r = (s = n.commands).removeDraftComments) || void 0 === r || r.call(s, [i]));
                                var e, t, r, s, a = (0, v.xN)(function() {
                                    return z.Et
                                }, n, "");
                                null === (e = (t = n.commands).createDraftComment) || void 0 === e || e.call(t, a), o(a)
                            },
                            editor: n
                        }),
                        a = (0, p.useCallback)(function(e) {
                            var t = e.editor;
                            o(function(e) {
                                return e ? Z(Z({}, e), {}, {
                                    json: t.view.state.doc.toJSON(),
                                    text: t.view.state.doc.textContent
                                }) : e
                            })
                        }, []);
                    return (0, _.jsx)(v.Ag, {
                        draftComment: i,
                        user: t,
                        onCommentDraftUpdate: a,
                        onCommentSave: s,
                        commentIdToHighlight: null
                    })
                },
                F = function(e) {
                    var t, n = e.onClose,
                        w = e.editor,
                        k = (0, g.CG)(b.yx),
                        S = (0, h.$gs)().isConnected,
                        E = (0, p.useState)(h.Ux9.Open),
                        I = E[0],
                        P = E[1],
                        D = null == k ? void 0 : k.comments,
                        A = null == k ? void 0 : null === (t = k.comments) || void 0 === t ? void 0 : t.filter(function(e) {
                            return e.status === I
                        }),
                        T = (0, g.CG)(b.gh),
                        R = (0, y.py)("comment", k) && S,
                        L = (0, y.SE)().user,
                        z = (0, x.$m)(k, L),
                        N = (0, p.useMemo)(function() {
                            return (0, O.yd)({
                                items: A || [],
                                sortBy: O.Yz,
                                latestTimeGetterFn: O.z3
                            })
                        }, [A]);
                    return D && k && w ? (0, _.jsxs)(s.k, {
                        direction: "column",
                        h: "100%",
                        overflowX: "hidden",
                        className: j.G,
                        w: "100%",
                        children: [(0, _.jsx)(M, {
                            commentStatusFilter: I,
                            setCommentStatusFilter: P,
                            count: (null == A ? void 0 : A.length) || 0,
                            onClose: n
                        }), (0, _.jsxs)(s.k, {
                            direction: "column",
                            className: "comments-list",
                            flex: 1,
                            overflowY: "auto",
                            tabIndex: 0,
                            outline: "none",
                            children: [(0, _.jsx)(m.V, {
                                label: (0, _.jsx)(i.cC, {
                                    id: "pQvCbR"
                                }),
                                isConnected: S,
                                mx: 6
                            }), z && !L && k && (0, _.jsx)(v.IZ, {
                                doc: k,
                                accessLink: z
                            }), R && (0, _.jsx)(a.xu, {
                                px: 6,
                                py: 2,
                                children: (0, _.jsx)(G, {
                                    user: L,
                                    editor: w
                                })
                            }), !(null != A && A.length) && (0, _.jsxs)(c.g, {
                                align: "center",
                                p: 6,
                                textAlign: "center",
                                spacing: 8,
                                children: [(0, _.jsx)(a.xu, {
                                    w: "80%",
                                    maxW: "300px",
                                    mb: 6,
                                    alignContent: "center",
                                    children: (0, _.jsx)(l.E, {
                                        src: C.src,
                                        width: "640px",
                                        alt: "Sal, the Gamma mascot, fishing extraterrestrially"
                                    })
                                }), (0, _.jsxs)(a.xu, {
                                    children: [(0, _.jsx)(d.X, {
                                        size: "xs",
                                        mb: 2,
                                        children: "open" === I ? (0, _.jsx)(i.cC, {
                                            id: "W7i5f5"
                                        }) : (0, _.jsx)(i.cC, {
                                            id: "mpDN1V"
                                        })
                                    }), (0, _.jsx)(u.x, {
                                        fontSize: "sm",
                                        children: (0, _.jsx)(i.cC, {
                                            id: "iB9OEi"
                                        })
                                    })]
                                })]
                            }), Object.entries(N).filter(function(e) {
                                return (0, r.Z)(e, 2)[1].length
                            }).map(function(e) {
                                var t = (0, r.Z)(e, 2),
                                    i = t[0],
                                    a = t[1];
                                return (0, _.jsxs)(s.k, {
                                    direction: "column",
                                    children: [(0, _.jsx)(f.NZ, {
                                        px: 6,
                                        pt: 4,
                                        pb: 2,
                                        position: "sticky",
                                        top: -2,
                                        bg: "white",
                                        zIndex: 2,
                                        children: {
                                            today: o.ag._({
                                                id: "ecUA8p"
                                            }),
                                            thisWeek: o.ag._({
                                                id: "yByRxz"
                                            }),
                                            earlier: o.ag._({
                                                id: "HPqZkW"
                                            })
                                        }[i]
                                    }), (0, _.jsx)(s.k, {
                                        direction: "column",
                                        children: a.map(function(e) {
                                            return (0, _.jsx)(v.q5, {
                                                instanceType: "feed",
                                                userCanComment: R,
                                                editor: w,
                                                comment: e,
                                                selfUser: L,
                                                docId: null == k ? void 0 : k.id,
                                                editorMode: T,
                                                onClose: n,
                                                isRootComment: !0,
                                                pt: 6,
                                                px: 6,
                                                pb: 4
                                            }, e.id)
                                        })
                                    })]
                                }, i)
                            })]
                        })]
                    }) : null
                }
        },
        80405: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return x
                }
            });
            var r = n(95235),
                i = n(82269),
                o = n(2784),
                s = n(56692),
                a = n(76903),
                c = n(2875),
                l = n(46732),
                d = n(1005),
                u = n(52322),
                f = ["closePanel"];

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var x = function(e) {
                var t = e.closePanel,
                    n = (0, i.Z)(e, f),
                    r = (0, l._)().editor;
                return (0, o.useEffect)(function() {
                    var e = function(e) {
                        e.open && t()
                    };
                    return c.pw.on(c.TI.POPUP_COMMENT_TOGGLED, e),
                        function() {
                            c.pw.on(c.TI.POPUP_COMMENT_TOGGLED, e)
                        }
                }, [t]), (0, o.useEffect)(function() {
                    return s.F7.on("keydown", "COMMENT_FEED_PANEL", function(e) {
                        return !!document.activeElement.closest('[data-panelid="comment-feed-panel"]') && ("Escape" === e.key && t(), !0)
                    })
                }, [t]), (0, u.jsx)(a.s, h(h({}, n), {}, {
                    bgColor: "white",
                    "data-panelid": "comment-feed-panel",
                    children: (0, u.jsx)(d.m, {
                        onClose: t,
                        editor: r
                    })
                }))
            };
            x.panelPosition = "right"
        },
        28677: function(e, t, n) {
            n.d(t, {
                Rr: function() {
                    return tV
                },
                QK: function() {
                    return tH
                }
            });
            var r, i, o = n(95235),
                s = n(82269),
                a = n(11919),
                c = n(87202),
                l = n(2784),
                d = n(98875),
                u = n(56692),
                f = n(76903),
                p = n(46358),
                h = n(2875),
                x = n(62141),
                m = n(46732),
                g = n(64629),
                v = n(55452),
                j = n(71354),
                b = n(67887),
                y = n(49929),
                C = n(55966),
                O = n(19674),
                w = n(30341),
                k = n(32333),
                S = n(17033),
                E = n(86733),
                I = n(36895),
                P = n(91012),
                D = n(45650),
                A = n(72360),
                T = n(66724),
                R = n(18751),
                _ = n(88299),
                M = n(52322),
                L = function(e) {
                    var t = e.onClose;
                    return (0, M.jsxs)(j.K, {
                        flex: 1,
                        align: "center",
                        justify: "center",
                        p: 6,
                        spacing: 6,
                        children: [(0, M.jsx)(I.E, {
                            src: "https://cdn.gamma.app/zc87vhr30n8uf3n/b4b04402416f4ec8b5c1dc24f4c2a3d6/optimized/Sal-Spaceship-Riding.png",
                            px: 12
                        }), (0, M.jsx)(_.K, {
                            children: (0, M.jsx)(P.x, {
                                children: (0, M.jsx)(v.cC, {
                                    id: "jVQv+Q"
                                })
                            })
                        }), (0, M.jsx)(D.z, {
                            variant: "ghost",
                            colorScheme: "blackAlpha",
                            leftIcon: (0, M.jsx)(y.G, {
                                icon: E.faXmark
                            }),
                            onClick: t,
                            children: (0, M.jsx)(v.cC, {
                                id: "pqZJT2"
                            })
                        })]
                    })
                },
                z = function() {
                    return (0, M.jsxs)(A.b, {
                        status: "warning",
                        mt: 12,
                        minH: 20,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        borderRadius: "lg",
                        borderWidth: "1px",
                        children: [(0, M.jsx)(T.C, {
                            children: (0, M.jsx)(v.cC, {
                                id: "rvbk/4"
                            })
                        }), (0, M.jsx)(R.X, {
                            children: (0, M.jsx)(v.cC, {
                                id: "XNkIFY"
                            })
                        })]
                    })
                },
                N = n(12677),
                Z = n(87254),
                G = n(8283),
                F = n(21891),
                U = n(25793),
                W = n(94659),
                H = n(27191),
                V = n(68740),
                B = n(95498),
                q = n(74586),
                K = n(21819),
                Y = "40px",
                Q = function(e) {
                    var t = e.value,
                        n = e.onChange,
                        r = e.onSubmit,
                        i = e.isLoading,
                        o = e.editor;
                    e.resetMessages, (0, K.F1)(o);
                    var s = o.state,
                        a = s.selection,
                        c = s.doc.textBetween(a.from, a.to, "\n"),
                        d = (0, B.q)().hasEnoughCreditsToChat,
                        u = (0, q.fg)(),
                        f = (0, l.useRef)(null),
                        p = (0, l.useState)(!1),
                        h = p[0],
                        x = p[1],
                        m = a instanceof H.qv,
                        g = a instanceof H.Bs,
                        v = m && "card" === a.node.type.name,
                        j = a.empty || v ? Z.ag._({
                            id: "XrfE9D"
                        }) : m ? Z.ag._({
                            id: "CsUli9"
                        }) : g && c ? Z.ag._({
                            id: "+NPPZN",
                            values: {
                                0: c.length > 50 ? c.slice(0, 50) + "..." : c
                            }
                        }) : Z.ag._({
                            id: "/fY1js"
                        }),
                        O = (0, l.useCallback)(function() {
                            f.current && (f.current.style.height = Y, f.current.style.height = "".concat(f.current.scrollHeight, "px"))
                        }, []);
                    return (0, l.useEffect)(function() {
                        return o.on("selectionUpdate", O),
                            function() {
                                o.off("selectionUpdate", O)
                            }
                    }, [o, O]), (0, l.useEffect)(function() {
                        h ? O() : setTimeout(function() {
                            x(!0), O()
                        }, 400)
                    }, [h, j, O, t]), (0, M.jsxs)(G.U, {
                        align: "end",
                        children: [(0, M.jsx)(F.B, {
                            size: "md",
                            children: (0, M.jsx)(U.g, {
                                "data-gamma-child-tiptap-editor": !0,
                                id: "ai-chat-input",
                                h: Y,
                                minH: Y,
                                ref: f,
                                resize: "none",
                                maxH: h ? 32 : Y,
                                bg: "white",
                                shadow: "md",
                                autoFocus: !0,
                                isDisabled: !d,
                                placeholder: j,
                                value: t,
                                onKeyPress: function(e) {
                                    "Enter" === e.key && t.length > 0 && !i && (e.preventDefault(), r())
                                },
                                onChange: function(e) {
                                    return n(e.target.value)
                                },
                                pr: 12
                            })
                        }), (0, M.jsx)(C.kH, {
                            placement: "top",
                            label: (0, M.jsxs)(W.g, {
                                spacing: 0,
                                children: [(0, M.jsx)(P.x, {
                                    children: "Send request"
                                }), !u && (0, M.jsxs)(P.x, {
                                    color: "gray.400",
                                    children: [(0, M.jsx)(V.J, {
                                        type: "chatSuggestion",
                                        ml: 0
                                    }), " if successful"]
                                }), (0, M.jsx)(C.f2, {
                                    shortcut: "Enter"
                                })]
                            }),
                            children: (0, M.jsx)(b.h, {
                                "aria-label": "Send message",
                                isDisabled: !t || i,
                                size: "sm",
                                h: Y,
                                w: Y,
                                variant: "solid",
                                icon: (0, M.jsx)(y.G, {
                                    icon: N.Fz,
                                    fixedWidth: !0
                                }),
                                onClick: r
                            })
                        })]
                    })
                },
                X = n(67541),
                J = n(70548),
                $ = n(20406),
                ee = n(28526),
                et = n.n(ee),
                en = n(12483),
                er = n(69862),
                ei = n(16034),
                eo = n(23313),
                es = n(96412),
                ea = n(13089),
                ec = n(41701),
                el = n(90129),
                ed = n(29017),
                eu = n(48200),
                ef = n(29395),
                ep = n(64426),
                eh = n(68941),
                ex = n(39429),
                em = n(50265),
                eg = [new(function(e) {
                    (0, el.Z)(s, e);
                    var t, n, r, i = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, eu.Z)(s);
                        if (t) {
                            var r = (0, eu.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return (0, ed.Z)(this, e)
                    });

                    function s(e) {
                        var t;
                        return (0, es.Z)(this, s), t = i.call(this, e), (0, o.Z)((0, ec.Z)(t), "prompt", void 0), t.prompt = e.prompt, t
                    }
                    return (0, ea.Z)(s, [{
                        key: "runPrompt",
                        value: (n = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o, s, a, c;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.input, r = t.context, i = t.variables, o = t.trackFns, a = void 0 === (s = t.retries) ? 2 : s, e.next = 3, (0, ep.I)(n, r.interactionId, {
                                            timeout: eh.VH.get("aiRequestTimeouts").basicReply
                                        });
                                    case 3:
                                        if (c = e.sent) {
                                            e.next = 6;
                                            break
                                        }
                                        throw Error("Couldn't get response from prompt");
                                    case 6:
                                        if (!((0, ex.y)(c) || null != c && c.includes("```"))) {
                                            e.next = 11;
                                            break
                                        }
                                        if (!(a <= 0)) {
                                            e.next = 9;
                                            break
                                        }
                                        throw new er.eo("Did not receive proper response after retries", {
                                            chatMessage: "Sorry, I am having trouble understanding. Could you try asking in a different way?",
                                            inputMessage: r.message,
                                            resp: c,
                                            interactionId: r.interactionId
                                        });
                                    case 9:
                                        return o.trackRequestRetry({
                                            interactionId: r.interactionId,
                                            retriesRemaining: a,
                                            resp: c
                                        }), e.abrupt("return", this.runPrompt({
                                            input: n,
                                            context: r,
                                            variables: i,
                                            trackFns: o,
                                            retries: a - 1
                                        }));
                                    case 11:
                                        return e.abrupt("return", c);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function(e) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "run",
                        value: (r = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o, s, a, c, l, d;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.context, r = t.addMessage, i = t.history, o = t.trackFns, s = t.provider, a = {
                                            message: n.message
                                        }, c = (0, em.x)(i || []), l = this.prompt.prepare({
                                            variables: a,
                                            history: c,
                                            params: {
                                                provider: s
                                            },
                                            interactionId: n.interactionId
                                        }), e.next = 6, this.runPrompt({
                                            input: l,
                                            context: n,
                                            variables: a,
                                            trackFns: o,
                                            retries: 1
                                        });
                                    case 6:
                                        d = e.sent, o.trackRequestComplete({
                                            taskContext: n,
                                            outputMessage: d
                                        }), r({
                                            from: "Designer",
                                            type: "text",
                                            message: d,
                                            resp: d,
                                            interactionId: n.interactionId
                                        });
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function(e) {
                            return r.apply(this, arguments)
                        })
                    }]), s
                }(ef.B))({
                    key: "CHAT",
                    description: "A general chat message, or a request that doesn't fit any of the previous categories",
                    classifyExamples: ["hi how are you", "hdfoho;safjw", "help there are bees everywhere", "great job!", "this looks ugly"],
                    prompt: new ei.V({
                        systemPromptOperation: eo.Run.BasicReplyChatSystem,
                        userPromptOperation: eo.Run.BasicReplyChatUser,
                        variables: ["message"],
                        params: {
                            maxTokens: 150,
                            temperature: 0
                        }
                    })
                })],
                ev = function(e) {
                    return eg.find(function(t) {
                        return t.key === e
                    })
                },
                ej = function(e) {
                    return !!eg.find(function(t) {
                        return t.key === e
                    })
                },
                eb = n(12741),
                ey = n(28248),
                eC = n(2492),
                eO = n(49945),
                ew = n(90399),
                ek = n(73593),
                eS = n(9850),
                eE = n.n(eS),
                eI = n(41261),
                eP = n(34264),
                eD = n(60636),
                eA = n(43981),
                eT = function() {
                    function e(t) {
                        (0, es.Z)(this, e), (0, o.Z)(this, "type", "insert-card"), (0, o.Z)(this, "description", void 0), (0, o.Z)(this, "cardId", void 0), (0, o.Z)(this, "afterCardId", void 0), (0, o.Z)(this, "content", void 0), this.description = t.description, this.cardId = t.cardId, this.afterCardId = t.afterCardId, this.content = t.content
                    }
                    return (0, ea.Z)(e, [{
                        key: "isApplied",
                        value: function(e) {
                            return !!(0, eP.Bw)(e, this.cardId)
                        }
                    }, {
                        key: "getPreviewJson",
                        value: function(e) {
                            var t = e.state.tr;
                            this.transact(e, t);
                            var n = eE()(t.doc.toJSON());
                            return (0, eA.Y0)(n, this.cardId)
                        }
                    }, {
                        key: "apply",
                        value: function(e) {
                            if (this.isApplied(e)) {
                                console.debug("[InsertCardModification] NOT applying modification, card already exists with cardId=".concat(this.cardId), {
                                    modification: this
                                });
                                return
                            }
                            var t = e.state.tr;
                            this.transact(e, t), console.debug("[InsertCardModification] Applying modification", {
                                modification: this
                            }), e.view.dispatch(t), (0, eI.YS)({
                                editor: e,
                                cardId: this.cardId
                            })
                        }
                    }, {
                        key: "transact",
                        value: function(e, t) {
                            var n = (0, eP.Bw)(e, this.afterCardId);
                            if (!n) return null;
                            var r = (0, eA.Fr)(e, this.content),
                                i = n.pos + n.node.nodeSize;
                            t.insert(i, r.content.firstChild);
                            var o = (0, eD.t)(t.doc.resolve(i), 1);
                            return t.setSelection(o), {
                                from: i,
                                to: i + t.doc.nodeAt(i).nodeSize
                            }
                        }
                    }, {
                        key: "getContentForTracking",
                        value: function() {
                            return this.content
                        }
                    }]), e
                }(),
                eR = function() {
                    function e(t) {
                        (0, es.Z)(this, e), (0, o.Z)(this, "type", "remove-card"), (0, o.Z)(this, "description", void 0), (0, o.Z)(this, "cardId", void 0), this.description = t.description, this.cardId = t.cardId
                    }
                    return (0, ea.Z)(e, [{
                        key: "isApplied",
                        value: function(e) {
                            return !(0, eP.Bw)(e, this.cardId)
                        }
                    }, {
                        key: "getPreviewJson",
                        value: function(e) {
                            return null
                        }
                    }, {
                        key: "apply",
                        value: function(e) {
                            var t = e.state.tr,
                                n = (0, eP.Bw)(e, this.cardId);
                            n && (t.delete(n.pos, n.pos + n.node.nodeSize), console.debug("[RemoveCardModification] Applying modification", {
                                modification: this
                            }), e.view.dispatch(t))
                        }
                    }, {
                        key: "getContentForTracking",
                        value: function() {
                            return this.cardId
                        }
                    }]), e
                }(),
                e_ = n(68933),
                eM = function(e) {
                    (0, el.Z)(i, e);
                    var t, n, r = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, eu.Z)(i);
                        if (t) {
                            var r = (0, eu.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return (0, ed.Z)(this, e)
                    });

                    function i() {
                        return (0, es.Z)(this, i), r.apply(this, arguments)
                    }
                    return (0, ea.Z)(i, [{
                        key: "getResponseMessages",
                        value: (n = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o, s, a, c, l, d, u, f, p, h, x, m;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.editor, r = t.context, o = (i = t.response).suggestion, s = i.message, a = i.raw, o) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new er.$D("No card content returned", {
                                            interactionId: r.interactionId,
                                            resp: a,
                                            chatMessage: s || (0, e_.az)(),
                                            inputMessage: r.message
                                        });
                                    case 3:
                                        return e.next = 5, (0, eC.y)(o);
                                    case 5:
                                        return c = e.sent.content, l = ew.C2.generate(), d = (0, ek.hx)((0, ek.VA)(n)), u = (0, eO.S)({
                                            bodyContent: c.toJSON(),
                                            index: 1,
                                            docFormatKey: d.key,
                                            theme: r.editorContext.theme,
                                            cardId: l
                                        }), p = {
                                            label: "New card",
                                            modification: f = new eT({
                                                description: "New Card",
                                                content: {
                                                    type: "json",
                                                    json: [u]
                                                },
                                                cardId: l,
                                                afterCardId: r.editorContext.card.cardId
                                            }),
                                            jsonContentPreview: f.getPreviewJson(n)
                                        }, x = {
                                            label: "Remove card",
                                            modification: h = new eR({
                                                description: "Remove card",
                                                cardId: l
                                            }),
                                            jsonContentPreview: h.getPreviewJson(n)
                                        }, m = {
                                            from: "Designer",
                                            type: "suggestContent",
                                            resp: a,
                                            message: s || "How about this?",
                                            suggestions: [p, x],
                                            interactionId: r.interactionId
                                        }, console.debug("[addCard]", {
                                            insert: p,
                                            remove: x,
                                            message: s,
                                            html: o,
                                            cardLayout: u,
                                            content: c
                                        }), e.abrupt("return", {
                                            messages: [m],
                                            suggestionToApply: p
                                        });
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return n.apply(this, arguments)
                        })
                    }]), i
                }(e_.w6),
                eL = new ei.V({
                    systemPromptOperation: eo.Run.AddCardSystem,
                    userPromptOperation: eo.Run.AddCardUser,
                    variables: ["html", "message", "outline"],
                    params: {
                        temperature: .7,
                        maxTokens: 1e3
                    }
                }),
                ez = new eM({
                    key: "ADD_CARD",
                    description: "Add a new card after the current one",
                    classifyExamples: ["add a new slide", "add a card describing our mission", "i want a new section for leadership development", "make another card", "on a new card compare the two options in a table"],
                    classifyReply: "Ok, I'll start writing a new card...",
                    prompt: eL
                }),
                eN = n(46695),
                eZ = function() {
                    function e(t) {
                        (0, es.Z)(this, e), (0, o.Z)(this, "type", "set-card-layout"), (0, o.Z)(this, "description", void 0), (0, o.Z)(this, "cardId", void 0), (0, o.Z)(this, "layout", void 0), this.description = t.description, this.cardId = t.cardId, this.layout = t.layout
                    }
                    return (0, ea.Z)(e, [{
                        key: "isApplied",
                        value: function(e) {
                            var t = (0, eP.Bw)(e, this.cardId);
                            return t ? t.node.attrs.layout === this.layout : (console.error("[SetCardLayoutModification.apply] Could not find card to update: ".concat(this.cardId, ", maybe deleted")), !1)
                        }
                    }, {
                        key: "getPreviewJson",
                        value: function(e) {
                            var t = e.state.tr;
                            this.transact(e, t);
                            var n = eE()(t.doc.toJSON()),
                                r = (0, eA.Y0)(n, this.cardId);
                            return console.debug("[SetCardLayoutModification.getPreviewJson] result", r), r
                        }
                    }, {
                        key: "apply",
                        value: function(e) {
                            if (this.isApplied(e)) {
                                console.debug("[SetCardLayoutModification] NOT applying modification, card already has layout=".concat(this.layout), {
                                    modification: this
                                });
                                return
                            }
                            var t = e.state.tr;
                            this.transact(e, t), console.debug("[SetCardLayoutModification] Applying modification", {
                                modification: this
                            }), e.view.dispatch(t), (0, eI.YS)({
                                editor: e,
                                cardId: this.cardId
                            })
                        }
                    }, {
                        key: "transact",
                        value: function(e, t) {
                            var n = (0, eP.Bw)(e, this.cardId);
                            if (!n) {
                                console.error("[SetCardLayoutModification.apply] Could not find card to update: ".concat(this.cardId, ", maybe deleted"));
                                return
                            }(0, eN.G)(e, t, n.pos, this.layout)
                        }
                    }, {
                        key: "getContentForTracking",
                        value: function() {
                            return this.layout
                        }
                    }]), e
                }(),
                eG = function() {
                    return Z.ag._({
                        id: "ppX7+s"
                    })
                },
                eF = new(function(e) {
                    (0, el.Z)(i, e);
                    var t, n, r = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, eu.Z)(i);
                        if (t) {
                            var r = (0, eu.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return (0, ed.Z)(this, e)
                    });

                    function i() {
                        return (0, es.Z)(this, i), r.apply(this, arguments)
                    }
                    return (0, ea.Z)(i, [{
                        key: "getResponseMessages",
                        value: (n = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o, s, a, c, l, d, u, f;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.editor, r = t.context, t.rangeId, o = (i = t.response).suggestion, s = i.raw, a = i.message, o) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new er.$D("No card layout returned", {
                                            resp: s,
                                            chatMessage: eG(),
                                            inputMessage: r.message,
                                            interactionId: r.interactionId
                                        });
                                    case 3:
                                        if ((0, eP.ol)(o)) {
                                            e.next = 6;
                                            break
                                        }
                                        throw console.error("Invalid card layout:", o), new er.$D("Invalid card layout: ".concat(o), {
                                            resp: s,
                                            chatMessage: eG(),
                                            inputMessage: r.message,
                                            interactionId: r.interactionId
                                        });
                                    case 6:
                                        return c = new eZ({
                                            description: Z.ag._({
                                                id: "nyQWMb"
                                            }),
                                            cardId: r.editorContext.card.cardId,
                                            layout: o
                                        }), l = {
                                            label: Z.ag._({
                                                id: "nyQWMb"
                                            }),
                                            modification: c,
                                            jsonContentPreview: c.getPreviewJson(n)
                                        }, d = new eZ({
                                            description: Z.ag._({
                                                id: "HxF6Fk"
                                            }),
                                            cardId: r.editorContext.card.cardId,
                                            layout: r.editorContext.card.attrs.layout
                                        }), u = {
                                            label: Z.ag._({
                                                id: "HxF6Fk"
                                            }),
                                            modification: d,
                                            jsonContentPreview: d.getPreviewJson(n)
                                        }, f = {
                                            from: "Designer",
                                            type: "suggestContent",
                                            resp: s,
                                            message: a || Z.ag._({
                                                id: "pMSbe+"
                                            }),
                                            interactionId: r.interactionId,
                                            suggestions: [l, u]
                                        }, e.abrupt("return", {
                                            messages: [f],
                                            suggestionToApply: l
                                        });
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return n.apply(this, arguments)
                        })
                    }]), i
                }(e_.w6))({
                    key: "MOVE_ACCENT_IMAGE",
                    description: "Move or remove the accent image of the card. Use ADD_IMAGE to add accent images.",
                    classifyExamples: ["move the sand dune to the left", "remove the cover photo"],
                    classifyReply: "Ok, I will move the accent image to the left...",
                    getTaskTarget: function(e) {
                        return e.card
                    },
                    prompt: new ei.V({
                        systemPromptOperation: eo.Run.ChangeAccentImageLayoutSystem,
                        userPromptOperation: eo.Run.ChangeAccentImageLayoutUser,
                        variables: ["html", "message"],
                        params: {
                            temperature: .2,
                            maxTokens: 100
                        }
                    }),
                    checkEnabled: function(e) {
                        return "blank" !== e.card.attrs.layout
                    }
                }),
                eU = new ei.V({
                    systemPromptOperation: eo.Run.ChangeContentSystem,
                    userPromptOperation: eo.Run.ChangeContentUser,
                    variables: ["html", "message", "outline"],
                    params: {
                        temperature: .7,
                        maxTokens: 1e3
                    }
                }),
                eW = new e_.w6({
                    key: "CHANGE_CONTENT",
                    description: "Rephrase, summarize, expand, change text formatting, add content, or express ideas differently.",
                    classifyExamples: ["condense this to just the key points", "say this like a pirate", "make this more formal", "add a box about health benefits", "add more text please", "make the bullets red", "make the text bigger", "fill in the last  column", "write something about ___", "add ___ to the table"],
                    classifyReply: "Ok, I'll try making it shorter...",
                    prompt: eU
                }),
                eH = n(71949),
                eV = n(21124),
                eB = n(67273),
                eq = n(73805),
                eK = n(81333),
                eY = new ei.V({
                    systemPromptOperation: eo.Run.RateImagesSystem,
                    userPromptOperation: eo.Run.RateImagesUser,
                    variables: ["dataset"],
                    params: {
                        temperature: .1,
                        maxTokens: 100
                    }
                }),
                eQ = (r = (0, $.Z)(et().mark(function e(t, n) {
                    var r, i, o;
                    return et().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.map(function(e, t) {
                                    var n = e.description,
                                        r = e.query;
                                    return "".concat(t + 1, ": ").concat(n, ": ").concat(r)
                                }).join("\n"), i = eY.prepare({
                                    variables: {
                                        dataset: r
                                    },
                                    history: []
                                }), e.next = 4, (0, ep.I)(i, n, {
                                    timeout: eh.VH.get("aiRequestTimeouts").rateImages
                                });
                            case 4:
                                if (e.t0 = e.sent, e.t0) {
                                    e.next = 7;
                                    break
                                }
                                e.t0 = "";
                            case 7:
                                return o = e.t0, e.abrupt("return", o.split("\n").map(function(e) {
                                    var t = e.split("-");
                                    return Number((0, eK.Z)(t, 2)[1].trim())
                                }));
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e, t) {
                    return r.apply(this, arguments)
                });

            function eX(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function eJ(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eX(Object(n), !0).forEach(function(t) {
                        (0, o.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eX(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var e$ = new(function(e) {
                    (0, el.Z)(o, e);
                    var t, n, r, i = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, eu.Z)(o);
                        if (t) {
                            var r = (0, eu.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return (0, ed.Z)(this, e)
                    });

                    function o() {
                        return (0, es.Z)(this, o), i.apply(this, arguments)
                    }
                    return (0, ea.Z)(o, [{
                        key: "getResponseData",
                        value: (n = (0, $.Z)(et().mark(function e(t, n) {
                            var r, i, o, s;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Promise.all(t.replaceAll(this.key, "").split("\n").map(function() {
                                            var e = (0, $.Z)(et().mark(function e(t) {
                                                var n, r;
                                                return et().wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return n = t.split(",").map(function(e) {
                                                                return e.trim()
                                                            }).slice(0, 2), e.next = 3, (0, eV.J)({
                                                                queries: n,
                                                                count: eB.x.count,
                                                                provider: "web",
                                                                prefetch: !0,
                                                                options: {
                                                                    gammaFeature: "aiChat"
                                                                }
                                                            });
                                                        case 3:
                                                            return r = e.sent, e.abrupt("return", r);
                                                        case 5:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e)
                                            }));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 2:
                                        return console.debug("[SuggestImagesTask][getResponseData] allResults", r = e.sent.flat()), console.debug("[SuggestImagesTask][imageRatingData]", {
                                            imagesToRate: i = r.map(function(e) {
                                                var t = e.image,
                                                    n = e.query,
                                                    r = (0, eq.C)(t, n, "web");
                                                return {
                                                    description: (0, eq.K)(r) || "",
                                                    query: n
                                                }
                                            })
                                        }), e.prev = 6, e.next = 9, eQ(i, n);
                                    case 9:
                                        if (console.debug("[SuggestImagesTask][imageRatingValues]", {
                                                imageRatingValues: o = e.sent
                                            }), !(o.length !== r.length)) {
                                            e.next = 13;
                                            break
                                        }
                                        throw Error("Image rating values length does not match allResults length");
                                    case 13:
                                        return console.debug("[SuggestImagesTask][allResultsSorted]", {
                                            allResultsSorted: s = r.map(function(e, t) {
                                                return eJ(eJ({}, e), {}, {
                                                    rating: o[t]
                                                })
                                            }).sort(function(e, t) {
                                                return t.rating - e.rating
                                            })
                                        }), e.abrupt("return", s);
                                    case 19:
                                        e.prev = 19, e.t0 = e.catch(6), console.warn("[SuggestImagesTask] Error rating images. Returing unsorted results.", e.t0);
                                    case 22:
                                        return e.abrupt("return", r);
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this, [
                                [6, 19]
                            ])
                        })), function(e, t) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "getResponseMessages",
                        value: (r = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o, s, a;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.context, i = (r = t.response).message, o = r.raw, s = r.suggestion) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new er.$D("No image results were returned", {
                                            resp: o,
                                            inputMessage: n.message,
                                            chatMessage: i || "I'm sorry, I wasn't able to find any images for this.",
                                            interactionId: n.interactionId
                                        });
                                    case 3:
                                        return e.next = 5, this.getResponseData(s, n.interactionId);
                                    case 5:
                                        return a = {
                                            from: "Designer",
                                            type: "suggestImages",
                                            suggestions: e.sent,
                                            resp: o,
                                            interactionId: n.interactionId,
                                            message: i || "Here are some suggestions:"
                                        }, e.abrupt("return", {
                                            messages: [a]
                                        });
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function(e) {
                            return r.apply(this, arguments)
                        })
                    }]), o
                }(e_.w6))({
                    key: "ADD_IMAGE",
                    description: "Add images, or replace an existing image. Do not use for moving or removing images.",
                    classifyExamples: ["add a picture of a bus", "find some different images", "this needs a pic", "show me dolphins", "find a meme of stonks", "give me more images", "add a background image", "i need a graph of population over time"],
                    classifyReply: "Let me look for some good bus pictures...",
                    getTaskTarget: function(e) {
                        return e.defaultRange
                    },
                    prompt: new ei.V({
                        systemPromptOperation: eo.Run.SuggestImagesSystem,
                        userPromptOperation: eo.Run.SuggestImagesUser,
                        variables: ["html", "message"],
                        params: {
                            temperature: .7,
                            maxTokens: 500
                        }
                    })
                }),
                e0 = n(24888);

            function e1(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function e2(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e1(Object(n), !0).forEach(function(t) {
                        (0, o.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : e1(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function e5(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var e3 = new(function(e) {
                    (0, el.Z)(i, e);
                    var t, n, r = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, eu.Z)(i);
                        if (t) {
                            var r = (0, eu.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return (0, ed.Z)(this, e)
                    });

                    function i() {
                        return (0, es.Z)(this, i), r.apply(this, arguments)
                    }
                    return (0, ea.Z)(i, [{
                        key: "getResponseData",
                        value: function(e) {
                            var t, n = [],
                                r = function(e, t) {
                                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (!n) {
                                        if (Array.isArray(e) || (n = function(e, t) {
                                                if (e) {
                                                    if ("string" == typeof e) return e5(e, t);
                                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return e5(e, t)
                                                }
                                            }(e))) {
                                            n && (e = n);
                                            var r = 0,
                                                i = function() {};
                                            return {
                                                s: i,
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
                                                f: i
                                            }
                                        }
                                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }
                                    var o, s = !0,
                                        a = !1;
                                    return {
                                        s: function() {
                                            n = n.call(e)
                                        },
                                        n: function() {
                                            var e = n.next();
                                            return s = e.done, e
                                        },
                                        e: function(e) {
                                            a = !0, o = e
                                        },
                                        f: function() {
                                            try {
                                                s || null == n.return || n.return()
                                            } finally {
                                                if (a) throw o
                                            }
                                        }
                                    }
                                }(e.matchAll(/^\/\/\s*(.*)$\n(.*)$/gm));
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var i = t.value,
                                        o = i[1],
                                        s = i[2];
                                    n.push({
                                        reason: o,
                                        value: s
                                    })
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            return n
                        }
                    }, {
                        key: "getResponseMessages",
                        value: (n = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o, s, a, c, l, d, u, f, p;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.editor, r = t.context, i = t.rangeId, s = (o = t.response).suggestion, a = o.message, c = o.raw, s) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new er.$D("No suggestions found in response", {
                                            interactionId: r.interactionId,
                                            inputMessage: r.message,
                                            chatMessage: a || Z.ag._({
                                                id: "7KKeOM"
                                            })
                                        });
                                    case 3:
                                        return l = this.getResponseData(s).map(function(e) {
                                            var t = new e0.O(n, {
                                                description: e.reason,
                                                content: {
                                                    type: "html",
                                                    html: e.value
                                                },
                                                rangeId: i
                                            });
                                            return e2(e2({}, e), {}, {
                                                modification: t
                                            })
                                        }), d = this.determineTaskTarget(r.editorContext).html, u = new e0.O(n, {
                                            description: Z.ag._({
                                                id: "HxF6Fk"
                                            }),
                                            content: {
                                                type: "html",
                                                html: d
                                            },
                                            rangeId: i
                                        }), f = {
                                            reason: Z.ag._({
                                                id: "HxF6Fk"
                                            }),
                                            value: d,
                                            modification: u
                                        }, p = {
                                            from: "Designer",
                                            type: "suggestText",
                                            message: a || Z.ag._({
                                                id: "3YHvwF"
                                            }),
                                            resp: c,
                                            suggestions: [].concat((0, eb.Z)(l), [f]),
                                            interactionId: r.interactionId
                                        }, e.abrupt("return", {
                                            messages: [p]
                                        });
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function(e) {
                            return n.apply(this, arguments)
                        })
                    }]), i
                }(e_.w6))({
                    key: "SUGGEST_TEXT",
                    description: "Open-ended request to rephrase a sentence or paragraph",
                    classifyExamples: ["write a better headline", "How else could i say this?", "this feels too corporate", "suggest a more engaging way to say this", "give me a more interesting description"],
                    classifyReply: "Let me think of some other headlines...",
                    getTaskTarget: function(e) {
                        return e.selectionRange
                    },
                    prompt: new ei.V({
                        systemPromptOperation: eo.Run.SuggestTextSystem,
                        userPromptOperation: eo.Run.SuggestTextUser,
                        variables: ["html", "message"],
                        params: {
                            temperature: .7,
                            maxTokens: 1e3
                        }
                    }),
                    checkEnabled: function(e) {
                        var t = e.selection,
                            n = t instanceof H.Bs,
                            r = t.$from.parent.eq(t.$to.parent);
                        return n && !t.empty && t.to - t.from < 800 && r
                    }
                }),
                e4 = function() {
                    function e(t, n) {
                        (0, es.Z)(this, e), (0, o.Z)(this, "type", "change-theme"), (0, o.Z)(this, "description", void 0), (0, o.Z)(this, "themeId", void 0), this.description = n.description, this.themeId = n.themeId
                    }
                    return (0, ea.Z)(e, [{
                        key: "apply",
                        value: function(e, t) {
                            t.setThemeWithAccentImages(this.themeId)
                        }
                    }, {
                        key: "isApplied",
                        value: function(e, t) {
                            return t.isThemeApplied(this.themeId)
                        }
                    }, {
                        key: "getPreviewJson",
                        value: function() {
                            return null
                        }
                    }, {
                        key: "getContentForTracking",
                        value: function() {
                            return this.themeId
                        }
                    }]), e
                }(),
                e6 = function(e) {
                    (0, el.Z)(o, e);
                    var t, n, r, i = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, eu.Z)(o);
                        if (t) {
                            var r = (0, eu.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return (0, ed.Z)(this, e)
                    });

                    function o() {
                        return (0, es.Z)(this, o), i.apply(this, arguments)
                    }
                    return (0, ea.Z)(o, [{
                        key: "getResponseMessages",
                        value: (n = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o, s, a, c, l, d, u, f, p, h;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.editor, r = t.context, o = (i = t.response).raw, s = i.suggestion, a = i.message, l = (c = t.themeModificationController).currentThemeId, d = c.isValidTheme, u = null == s ? void 0 : s.split("\n"), e.next = 5, this.getFilteredSuggestions({
                                            ids: u,
                                            idToRemove: l,
                                            editor: n,
                                            isValid: d
                                        });
                                    case 5:
                                        if (0 !== (f = e.sent).length) {
                                            e.next = 8;
                                            break
                                        }
                                        throw new er.$D("[SuggestContentTask] No themes provided in prompt response", {
                                            resp: o,
                                            chatMessage: Z.ag._({
                                                id: "GNHk+9"
                                            }),
                                            inputMessage: r.message,
                                            interactionId: r.interactionId
                                        });
                                    case 8:
                                        return p = {
                                            label: Z.ag._({
                                                id: "HxF6Fk"
                                            }),
                                            themeId: l,
                                            modification: new e4(n, {
                                                description: Z.ag._({
                                                    id: "HxF6Fk"
                                                }),
                                                themeId: l
                                            }),
                                            isOriginal: !0
                                        }, h = {
                                            from: "Designer",
                                            type: "suggestThemes",
                                            resp: o,
                                            message: a || Z.ag._({
                                                id: "pMSbe+"
                                            }),
                                            suggestions: [].concat((0, eb.Z)(f), [p]),
                                            interactionId: r.interactionId
                                        }, e.abrupt("return", {
                                            messages: [h],
                                            suggestionToApply: f[0]
                                        });
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function(e) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "getFilteredSuggestions",
                        value: (r = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o, s;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.ids, r = t.idToRemove, i = t.editor, o = t.isValid, !(!n || 0 === n.length)) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", []);
                                    case 3:
                                        return e.next = 5, Promise.all(n.map(function(e) {
                                            return o(e).then(function(t) {
                                                return t ? e : null
                                            })
                                        }));
                                    case 5:
                                        return s = e.sent.filter(function(e) {
                                            return null !== e
                                        }).filter(function(e) {
                                            return e !== r
                                        }).map(function(e) {
                                            var t = new e4(i, {
                                                description: Z.ag._({
                                                    id: "nyQWMb"
                                                }),
                                                themeId: e
                                            });
                                            return {
                                                label: Z.ag._({
                                                    id: "nyQWMb"
                                                }),
                                                themeId: e,
                                                modification: t
                                            }
                                        }), e.abrupt("return", s);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return r.apply(this, arguments)
                        })
                    }]), o
                }(e_.w6),
                e8 = new ei.V({
                    systemPromptOperation: eo.Run.SuggestThemeSystem,
                    userPromptOperation: eo.Run.SuggestThemeUser,
                    variables: ["html", "message", "outline"],
                    params: {
                        temperature: .7,
                        maxTokens: 100,
                        model: "gpt-4"
                    }
                }),
                e9 = new e6({
                    key: "SUGGEST_THEME",
                    description: "Suggest a theme for the deck. This task will suggest themes based on the deck content or the prompt",
                    classifyExamples: ["change the theme", "give me a blue theme", "change the color palette", "make this a dark theme", "use a more colorful theme", "let's change the look and the feel", "change the theme to lilac and periwinkle", "i'd like it to look more cheerful and welcoming"],
                    classifyReply: "Let me find some themes...",
                    prompt: e8
                }),
                e7 = [eF, eH.a, eW, e3, e$, ez, e9],
                te = function(e) {
                    return e7.find(function(t) {
                        return t.key === e
                    })
                },
                tt = function(e) {
                    return !!e7.find(function(t) {
                        return t.key === e
                    })
                },
                tn = function(e) {
                    (0, el.Z)(i, e);
                    var t, n, r = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, eu.Z)(i);
                        if (t) {
                            var r = (0, eu.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return (0, ed.Z)(this, e)
                    });

                    function i(e) {
                        var t;
                        return (0, es.Z)(this, i), t = r.call(this, e), (0, o.Z)((0, ec.Z)(t), "apology", void 0), (0, o.Z)((0, ec.Z)(t), "apologyLink", void 0), t.apology = e.apology, t.apologyLink = e.apologyLink, t
                    }
                    return (0, ea.Z)(i, [{
                        key: "run",
                        value: (n = (0, $.Z)(et().mark(function e(t) {
                            var n, r, i, o;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        n = t.classificationResult, r = t.addMessage, i = t.context, o = t.trackFns, r({
                                            from: "Designer",
                                            type: "unsupported",
                                            task: n.classification,
                                            message: this.apology,
                                            learnMoreLink: this.apologyLink,
                                            resp: n.resp,
                                            interactionId: i.interactionId
                                        }), o.trackRequestComplete({
                                            taskContext: i,
                                            outputMessage: this.apology
                                        });
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function(e) {
                            return n.apply(this, arguments)
                        })
                    }]), i
                }(ef.B),
                tr = new tn({
                    key: "CHANGE_CARD_BACKGROUND",
                    description: "Change the background of the entire section.",
                    classifyExamples: ["make the background red", "put a tunnel in the background", "remove the background", "get rid of the image in the background"],
                    apology: "Sorry, I can't change backgrounds yet, but you can click on a card and change the background yourself. You can also change the doc background by clicking the Theme button."
                }),
                ti = new tn({
                    key: "CHANGE_FONT",
                    description: "Change the font family or font style.",
                    classifyExamples: ["give me a more playful font", "make the headings use arial", "change the font to be more readable"],
                    apology: "Sorry, I can't change fonts yet. But you can edit them yourself by creating a custom theme.",
                    apologyLink: "https://gamma.app/public/o2he6ual8noal7u#card-82e40n78edir2x8"
                }),
                to = new tn({
                    key: "RESIZE_IMAGE",
                    description: "Change the size of an image (its dimensions), or crop an image",
                    classifyExamples: ["make the image smaller", "can you make the cat bigger", "crop it so it's just the face", "I want the disposition of the photos for more portrait instead of landscape"],
                    apology: "Sorry, I can't resize images yet. But you can do it yourself by clicking on the image and dragging the boxes on the corners, or pressing the crop button above the image."
                }),
                ts = new tn({
                    key: "EXPORT",
                    description: "Export or download the deck into a different a format.",
                    classifyExamples: ["download as ppt", "make a pdf", "export to google slides"],
                    apology: "Sorry, I can't export files yet. However, you can download a PDF yourself by using the Share menu."
                }),
                ta = new tn({
                    key: "SPLIT_CARD",
                    description: "Split a card into multiple cards, or move content between cards.",
                    classifyExamples: ["break this into two cards", "split this up as multiple slides", "put the gallery on the next card"],
                    apology: "Sorry, I can't split cards or move things between them yet. However, you can split cards yourself by typing /split inside a card."
                }),
                tc = new tn({
                    key: "NEW_DECK",
                    description: "Create a whole new deck",
                    classifyExamples: ["i need a presentation about [topic]", "write a whole document about animal", "make me a landing page about this"],
                    apology: "To make a new deck, go back to the home screen and click New with AI."
                }),
                tl = new tn({
                    key: "CHANGE_MULTIPLE_CARDS",
                    description: "Make changes across multiple cards at once",
                    classifyExamples: ["I want this entire deck to be summarized", "combine the cards together in one", "make the whole doc sound more professional", "make the deck more consistent"],
                    apology: "Sorry, I can only change one card at a time right now."
                }),
                td = new tn({
                    key: "ADD_VIDEO",
                    description: "Add a video or replace an existing video",
                    classifyExamples: ["add a youtube video about scrum", "find videos of cats", "i need more videos"],
                    apology: "Sorry, I can't search for videos yet. You can embed video by copying the URL and pasting it into the card directly."
                }),
                tu = new tn({
                    key: "ADD_FOOTNOTE",
                    description: "Add a footnote to a card, or change footnotes",
                    classifyExamples: ["add a biography for him in a footnote", "put the details into footnotes"],
                    apology: "Sorry, I haven't learned to add footnotes yet. You can make footnotes by highlighting text and clicking the footnote button in the menu."
                }),
                tf = [tr, ti, to, ts, ta, new tn({
                    key: "MOVE_CARD",
                    description: "Move a card to a different position in the deck",
                    classifyExamples: ["shift the slide to the top", "move this card to the bottom"],
                    apology: "Sorry, I haven't learned to move cards yet. You can move them by hovering on the table of contents on the left side of the screen and dragging them around."
                }), tc, tl, td, tu, new tn({
                    key: "ADD_CHART",
                    description: "Add a chart, diagram, or graph",
                    classifyExamples: ["put this information into a scatter plot", "add a card about market share using a pie chart", "i need to display this as a flow chart", "create a diagram illustrating the interactions and relationships", "can you change the card to have a line graph", "turn this into a gantt chart", "could you do this as a funnel diagram"],
                    apology: "Sorry, Gamma doesn't support charts yet. You can paste in images of charts from other tools, or type /diagram in the editor to draw your own."
                }), new tn({
                    key: "ANIMATION",
                    description: "Add animations to a card or edit animations",
                    classifyExamples: ["animate transitions", "make the text appear one by one", "fade in the images", "make the bullets fly in"],
                    apology: 'Sorry, Gamma doesn\'t support custom animations yet. You can animate line by line by going into Present mode and pressing S for "spotlight".'
                }), new tn({
                    key: "FOLLOW_LINK",
                    description: "Read content from an external website",
                    classifyExamples: ["go to this website and add the content to this card http://www.example.com/", "here is his linkedin page now add the details https://www.linkedin.com/...", "add the images from https://medium.com/posts/2022/9/6/..."],
                    apology: "Sorry, I'm not able to open links and read the content."
                })],
                tp = function(e) {
                    return tf.find(function(t) {
                        return t.key === e
                    })
                },
                th = new ei.V({
                    variables: ["message", "taskList", "ackExamples", "html", "cardHtml"],
                    systemPromptOperation: eo.Run.ClassifySystem,
                    userPromptOperation: eo.Run.ClassifyUser,
                    params: {
                        maxTokens: 100,
                        temperature: .2
                    }
                }),
                tx = [].concat((0, eb.Z)(e7), (0, eb.Z)(tf), (0, eb.Z)(eg)),
                tm = "\uD83D\uDE14 Sorry, I didn't understand your request. Could you please try asking a different way?",
                tg = (i = (0, $.Z)(et().mark(function e(t) {
                    var n, r, i, o, s, a, c, l, u, f, p, h, x;
                    return et().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.message, r = t.context, i = t.history, o = t.provider, a = (s = tb(tx, r.editorContext)).ackExamples, c = s.taskList, l = s.enabledTasks, u = ty(i), f = th.prepare({
                                    variables: {
                                        message: n,
                                        ackExamples: a,
                                        taskList: c,
                                        html: r.editorContext.defaultRange.html,
                                        cardHtml: r.editorContext.card.html
                                    },
                                    params: {
                                        provider: o
                                    },
                                    history: u
                                }), console.debug("[AIChat classify] Getting classification", {
                                    classifyHistory: u,
                                    input: f
                                }), e.next = 7, (0, ey.oO)(f);
                            case 7:
                                return p = e.sent, e.next = 10, (0, ep.I)(p, r.interactionId, {
                                    timeout: d.VH.get("aiRequestTimeouts").classify
                                });
                            case 10:
                                if (x = tj(h = e.sent, l)) {
                                    e.next = 18;
                                    break
                                }
                                return console.debug("Failed classification, trying again...", {
                                    resp: h,
                                    parsedResp: x
                                }), e.next = 16, (0, ep.I)(f, r.interactionId);
                            case 16:
                                x = tj(h = e.sent, l);
                            case 18:
                                if (x) {
                                    e.next = 20;
                                    break
                                }
                                return e.abrupt("return", {
                                    type: "UNKNOWN",
                                    classification: "UNKNOWN",
                                    ack: tm,
                                    resp: h || ""
                                });
                            case 20:
                                return console.debug("[AIChat classify] Got classification", {
                                    resp: h,
                                    parsedResp: x
                                }), e.abrupt("return", x);
                            case 22:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e) {
                    return i.apply(this, arguments)
                }),
                tv = "Ok, I'll get right on it.",
                tj = function(e, t) {
                    if (e) {
                        var n, r = e.split("\n"),
                            i = null === (n = r[0]) || void 0 === n ? void 0 : n.trim().toUpperCase();
                        if (t.find(function(e) {
                                return e.key === i
                            })) {
                            var o = r[1];
                            return {
                                classification: i.trim(),
                                ack: o.includes(i.trim()) ? tv : o || ("UNKNOWN" !== i ? tv : tm),
                                resp: e,
                                type: "CLASSIFICATION"
                            }
                        }
                    }
                },
                tb = function(e, t) {
                    var n = e.filter(function(e) {
                        return !t || !e.checkEnabled || e.checkEnabled(t)
                    });
                    return {
                        taskList: n.map(function(e) {
                            var t;
                            return "".concat(e.key, ": ").concat(e.description, "\n").concat(null === (t = e.classifyExamples) || void 0 === t ? void 0 : t.map(function(e) {
                                return "- ".concat(e)
                            }).join("\n"))
                        }).join("\n\n"),
                        ackExamples: n.filter(function(e) {
                            return e.classifyExamples && e.classifyExamples.length > 0 && e.classifyReply
                        }).map(function(e) {
                            return "Request:\n".concat(e.classifyExamples[0], "\nResponse:\n").concat([e.key, e.classifyReply].join("\n"))
                        }).join("\n\n"),
                        enabledTasks: n
                    }
                },
                ty = function(e) {
                    return e.slice(-7).map(function(e) {
                        return "User" === e.from ? {
                            role: eo.XaP.User,
                            content: e.message
                        } : e.isClassification ? {
                            role: eo.XaP.Assistant,
                            content: e.resp
                        } : null
                    }).filter(function(e) {
                        return !!e
                    })
                },
                tC = n(6201),
                tO = n(97782),
                tw = n(70099),
                tk = n(54113),
                tS = n(12172),
                tE = n(65185),
                tI = n(95472),
                tP = n(39428),
                tD = function(e, t) {
                    var n = e.state.doc.slice(t.from, t.to).content;
                    return (0, tS.c)(e, n)
                },
                tA = function(e, t) {
                    var n = e.state.selection,
                        r = (0, tI.Ru)(n.$from, eP.KH)[0],
                        i = r && (0, S.NE)(r.node, r.pos);
                    if (!r || !i) throw Error("Cant find parent card for selection ".concat(n));
                    var o = {
                            from: r.pos,
                            to: r.pos + r.node.nodeSize
                        },
                        s = {
                            from: i.pos + 1,
                            to: i.pos + i.node.nodeSize - 1
                        },
                        a = n.$from.blockRange(n.$to),
                        c = {
                            from: a.start,
                            to: a.end
                        },
                        l = {
                            range: (0, tP.bb)(e.state, s),
                            html: tD(e, s)
                        },
                        d = {
                            range: (0, tP.bb)(e.state, n),
                            html: tD(e, n)
                        },
                        u = {
                            range: (0, tP.bb)(e.state, c),
                            html: tD(e, c)
                        },
                        f = n instanceof H.qv && (0, eP.KH)(n.node) || n.empty || 0 === d.html.trim().length || n instanceof H.qv && n.node.isAtom,
                        p = !n.$from.parent.eq(n.$to.parent) || 0 === a.$from.parentOffset && a.$to.parentOffset === a.$to.parent.content.size,
                        h = d,
                        m = "selectionRange";
                    f ? (h = l, m = "cardContent") : p && (h = u, m = "blockRange");
                    var g = tT(t),
                        v = (0, x.Pu)(t.getState());
                    return {
                        card: {
                            cardId: r.node.attrs.id,
                            range: (0, tP.bb)(e.state, o),
                            html: tD(e, o),
                            attrs: r.node.attrs
                        },
                        cardContent: l,
                        blockRange: u,
                        selectionRange: d,
                        defaultRange: h,
                        selection: n,
                        outline: g,
                        selectedDefaultRange: m,
                        theme: v
                    }
                },
                tT = function(e) {
                    var t = e.getState(),
                        n = (0, x.X9)(t),
                        r = (0, tE.mT)(t);
                    return Object.keys(n.tree).map(function(e) {
                        var t;
                        return null === (t = r.find(function(t) {
                            return t.id === e
                        })) || void 0 === t ? void 0 : t.title
                    }).filter(function(e) {
                        return !!e
                    }).join("\n")
                },
                tR = n(24272),
                t_ = function(e) {
                    var t, n = e.editor,
                        r = e.addMessage,
                        i = e.getMessageHistory,
                        o = (0, l.useState)("idle"),
                        s = o[0],
                        a = o[1],
                        c = (0, p.qr)(),
                        d = (0, tR.E)(),
                        u = (0, B.q)().hasEnoughCreditsToChat,
                        f = (0, tO.T)(),
                        h = (0, tw.g5)();
                    return {
                        sendMessage: (0, l.useCallback)((t = (0, $.Z)(et().mark(function e(t) {
                            var o, s, l, p, x, m, g, v, j, b, y, C, O;
                            return et().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o = t.message, n) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        if (s = void 0, l = void 0, p = void 0, x = (0, tC.nZ)(), e.prev = 7, s = tA(n, c), console.debug("[AIChat] starting interaction", l = {
                                                interactionId: x,
                                                startTime: performance.now(),
                                                message: o,
                                                editorContext: s,
                                                docId: n.gammaDocId
                                            }), m = i(), r({
                                                from: "User",
                                                type: "text",
                                                message: o,
                                                interactionId: x
                                            }), d.trackRequestSent(l, h), u) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 16:
                                        return a("classifying"), e.next = 19, tg({
                                            message: o,
                                            context: l,
                                            history: m,
                                            provider: h
                                        });
                                    case 19:
                                        if (g = e.sent, d.trackClassification({
                                                taskContext: l,
                                                classification: g.classification
                                            }), a("fetching"), console.debug("[AIChat] Starting task", {
                                                taskContext: l,
                                                classification: g.classification,
                                                history: m
                                            }), "UNKNOWN" !== g.type) {
                                            e.next = 28;
                                            break
                                        }
                                        r({
                                            from: "Designer",
                                            type: "text",
                                            message: g.ack,
                                            resp: g.resp,
                                            isClassification: !0,
                                            interactionId: x
                                        }), d.trackRequestComplete({
                                            taskContext: l,
                                            outputMessage: g.ack
                                        }), e.next = 47;
                                        break;
                                    case 28:
                                        if (!ej(g.classification)) {
                                            e.next = 34;
                                            break
                                        }
                                        return v = ev(g.classification), e.next = 32, v.run({
                                            editor: n,
                                            addMessage: r,
                                            context: l,
                                            classificationResult: g,
                                            history: m,
                                            trackFns: d,
                                            themeModificationController: f,
                                            provider: h
                                        });
                                    case 32:
                                    case 38:
                                        e.next = 47;
                                        break;
                                    case 34:
                                        if (!tp(g.classification)) {
                                            e.next = 40;
                                            break
                                        }
                                        return j = tp(g.classification), e.next = 38, j.run({
                                            editor: n,
                                            context: l,
                                            addMessage: r,
                                            classificationResult: g,
                                            history: m,
                                            trackFns: d,
                                            themeModificationController: f,
                                            provider: h
                                        });
                                    case 40:
                                        if (!tt(g.classification)) {
                                            e.next = 47;
                                            break
                                        }
                                        return r({
                                            from: "Designer",
                                            type: "text",
                                            message: g.ack || "Sure, let me see what I can do...",
                                            resp: g.resp,
                                            isClassification: !0
                                        }), b = i(), y = te(g.classification), e.next = 46, y.run({
                                            editor: n,
                                            context: l,
                                            addMessage: r,
                                            classificationResult: g,
                                            history: b,
                                            trackFns: d,
                                            themeModificationController: f,
                                            provider: h
                                        });
                                    case 46:
                                        p = "chatSuggestion";
                                    case 47:
                                        e.next = 54;
                                        break;
                                    case 49:
                                        e.prev = 49, e.t0 = e.catch(7), console.log("[AIChat.sendMessage] ERROR: ".concat(e.t0.message, "}"), {
                                            err: e.t0,
                                            taskContext: l
                                        }), C = "Sorry, something unexpected happened. Please try again.", e.t0 instanceof er.Og ? (r({
                                            from: "Designer",
                                            type: "text",
                                            message: O = e.t0.opts.chatMessage || C,
                                            resp: e.t0.opts.resp,
                                            interactionId: x
                                        }), d.trackRequestError({
                                            errorName: e.t0.name,
                                            interactionId: x,
                                            outputMessage: O,
                                            errorMessage: e.t0.message,
                                            resp: e.t0.opts.resp
                                        })) : (en.Tb(e.t0), r({
                                            from: "Designer",
                                            type: "text",
                                            message: C,
                                            interactionId: x
                                        }), d.trackRequestError({
                                            errorName: e.t0.name,
                                            interactionId: x,
                                            outputMessage: C,
                                            errorMessage: e.t0.message,
                                            errorCode: (0, ey.uc)(e.t0)[0]
                                        }));
                                    case 54:
                                        p && (0, tk.d)(p), a("idle");
                                    case 56:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [7, 49]
                            ])
                        })), function(e) {
                            return t.apply(this, arguments)
                        }), [n, c, i, r, d, u, f, h]),
                        status: s
                    }
                };

            function tM(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var tL = function(e) {
                    var t = e.editor,
                        n = e.scrollSelector,
                        r = e.onClose,
                        i = (0, l.useState)(""),
                        s = i[0],
                        c = i[1],
                        u = (0, d.ye)("openAiStatus"),
                        f = (0, p.TL)(),
                        h = (0, w.As)("editor"),
                        x = (0, p.qr)(),
                        m = (0, p.CG)(J.AZ),
                        E = (0, p.CG)(J.Q_),
                        I = (0, l.useState)(null),
                        P = I[0],
                        D = I[1],
                        A = (0, l.useCallback)(function() {
                            return (0, J.AZ)(x.getState())
                        }, [x]),
                        T = (0, l.useCallback)(function(e) {
                            var t = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? tM(Object(n), !0).forEach(function(t) {
                                        (0, o.Z)(e, t, n[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tM(Object(n)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({
                                timestamp: Date.now()
                            }, e);
                            f((0, J.Hz)({
                                message: t
                            }))
                        }, [f]),
                        R = (0, l.useCallback)(function() {
                            f((0, J.mc)())
                        }, [f]),
                        _ = t_({
                            addMessage: T,
                            getMessageHistory: A,
                            editor: t
                        }),
                        N = _.status,
                        Z = _.sendMessage;
                    (0, l.useEffect)(function() {
                        var e = n && document.querySelector(n);
                        e && requestAnimationFrame(function() {
                            e.scrollTop = e.scrollHeight
                        })
                    }, [n, m]);
                    var G = "idle" !== N;
                    (0, l.useEffect)(function() {
                        if (E.length && !G) {
                            var e = E[0],
                                t = e.task,
                                n = e.id;
                            !1 === t.submit ? c(t.message) : Z({
                                message: t.message
                            }), f((0, J.VB)({
                                id: n
                            }))
                        }
                    }, [G, Z, f, E]);
                    var F = (0, l.useCallback)(function() {
                            if (P && t) {
                                var e = document.querySelector('[data-card-id="'.concat(P, '"]')),
                                    n = (0, w.v4)(e, 100);
                                null != n && n.yAxisInView || h.scrollElementIntoView({
                                    element: e
                                })
                            }
                        }, [t, h, P]),
                        U = (0, l.useCallback)(function(e) {
                            F(), Z({
                                message: e
                            })
                        }, [F, Z]),
                        W = (0, l.useCallback)(function() {
                            U(s), c("")
                        }, [U, s]);
                    return ((0, l.useEffect)(function() {
                        if (t) {
                            var e = function() {
                                var e = (0, S.AQ)(t, t.state.selection.from);
                                e && D(e.node.attrs.id)
                            };
                            return e(), t.on("selectionUpdate", e),
                                function() {
                                    t.off("selectionUpdate", e)
                                }
                        }
                    }, [t]), t) ? "DOWN" === u ? (0, M.jsx)(L, {
                        onClose: r
                    }) : (0, M.jsxs)(a.k, {
                        direction: "column",
                        h: "100%",
                        w: "100%",
                        px: 6,
                        pb: 2,
                        children: ["DEGRADED" === u && (0, M.jsx)(z, {}), (0, M.jsx)(X.rN, {
                            scrollSelector: n,
                            messages: m,
                            editor: t,
                            sendMessage: U,
                            isLoading: G,
                            onClose: r
                        }), (0, M.jsxs)(j.K, {
                            pos: "sticky",
                            bottom: 0,
                            py: 2,
                            pt: 4,
                            bg: "gray.50",
                            children: [(0, M.jsx)(Q, {
                                editor: t,
                                value: s,
                                onChange: c,
                                onSubmit: W,
                                isLoading: G,
                                resetMessages: R
                            }), (0, M.jsx)(O.r, {
                                modalId: "ai-credits-modal-message-list",
                                variant: "ghost",
                                justify: "flex-end",
                                segmentEvent: k.AA.GAMMA_UPSELL_CALLOUT_AI_CREDITS_CHAT
                            })]
                        }), (0, M.jsx)(C.kH, {
                            label: (0, M.jsx)(v.cC, {
                                id: "5eg0kp"
                            }),
                            placement: "top",
                            children: (0, M.jsx)(b.h, {
                                variant: "ghost",
                                colorScheme: "blackAlpha",
                                color: "currentColor",
                                "aria-label": "reset-chat",
                                icon: (0, M.jsx)(y.G, {
                                    icon: g.Yc
                                }),
                                onClick: R,
                                position: "absolute",
                                left: 4,
                                top: 1,
                                isRound: !0
                            })
                        })]
                    }) : null
                },
                tz = n(81234),
                tN = n(97907),
                tZ = function(e) {
                    var t = e.onClose;
                    return (0, M.jsx)(a.k, {
                        width: "100%",
                        px: 6,
                        py: 4,
                        justifyContent: "space-between",
                        alignItems: "center",
                        h: 8,
                        tabIndex: 0,
                        outline: "none",
                        position: "absolute",
                        top: 0,
                        children: (0, M.jsx)(tN.P, {
                            "data-design-partner-close-button": !0,
                            position: "absolute",
                            top: 2,
                            right: 6,
                            zIndex: 1,
                            onClick: t
                        })
                    })
                },
                tG = ["closePanel"];

            function tF(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tU(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tF(Object(n), !0).forEach(function(t) {
                        (0, o.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tF(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tW = "design-partner-panel-wrapper",
                tH = function(e) {
                    var t = e.toggleDesignPartnerPanel,
                        n = e.isDesignPartnerPanelOpen,
                        r = e.editor,
                        i = (0, d.ye)("aiChat"),
                        o = (0, p.TL)();
                    (0, l.useEffect)(function() {
                        return function() {
                            o((0, J.mc)())
                        }
                    }, []);
                    var s = (0, p.CG)(x.hN);
                    (0, l.useEffect)(function() {
                        !s && n && t()
                    }, [s, n, t]), (0, l.useEffect)(function() {
                        var e, t;
                        r && (null === (e = (t = r.commands).setSalOpen) || void 0 === e || e.call(t, n))
                    }, [r, n]), (0, l.useEffect)(function() {
                        if (i) return tz.T.on("toggle", function(e) {
                            t(e.config)
                        })
                    }, [t, i]), (0, l.useEffect)(function() {
                        if (i) return h.pw.on("queueDesignPartnerTask", function(e) {
                            o((0, J.Lj)({
                                task: e
                            })), t({
                                disableTransition: !1,
                                override: "open"
                            }), console.log("queueDesignPartnerTask", e)
                        })
                    }, [o, i, t]), (0, l.useEffect)(function() {
                        if (i && s) {
                            var e = (0, c.ZP)("mod+shift+S");
                            return u.F7.on("keydown", "DESIGN_PARTNER_PANEL", function(n) {
                                return !!e(n) && (t(), !0)
                            })
                        }
                    }, [t, i, s])
                },
                tV = function(e) {
                    var t = e.closePanel,
                        n = (0, s.Z)(e, tG),
                        r = (0, m._)().editor;
                    return (0, l.useEffect)(function() {
                        return u.F7.on("keydown", "DESIGN_PARTNER_PANEL", function(e) {
                            return !!document.activeElement.closest('[data-panelid="design-partner-panel"]') && "Escape" === e.key && (t(), !0)
                        })
                    }, [t]), (0, M.jsx)(f.s, tU(tU({}, n), {}, {
                        bgColor: "gray.50",
                        "data-panelid": "design-partner-panel",
                        borderLeftWidth: "1px",
                        children: (0, M.jsxs)(a.k, {
                            direction: "column",
                            h: "100%",
                            overflowY: "auto",
                            overflowX: "hidden",
                            className: tW,
                            w: "100%",
                            children: [(0, M.jsx)(tZ, {
                                onClose: t
                            }), (0, M.jsx)(tL, {
                                editor: r,
                                scrollSelector: ".".concat(tW),
                                onClose: t
                            })]
                        })
                    }))
                };
            tV.panelPosition = "right"
        },
        75033: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return b
                }
            });
            var r = n(95235),
                i = n(55452),
                o = n(11919),
                s = n(45650),
                a = n(84103),
                c = n(36895),
                l = n(55966),
                d = n(2784),
                u = n(75085),
                f = n(74586),
                p = n(32333),
                h = n(32736),
                x = n(59734),
                m = n(9734),
                g = n(52322);

            function v(e, t) {
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
                    t % 2 ? v(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var b = function(e) {
                var t = (0, x._i)().docId,
                    n = (0, h.Yy)(),
                    r = (0, p.z$)(),
                    v = (0, d.useCallback)(function() {
                        null == r || r.track(p.AA.MADE_WITH_GAMMA_CLICKED, {
                            doc_id: t
                        })
                    }, [r, t]),
                    b = (0, f.dU)();
                return void 0 === b || b ? null : (0, g.jsx)(o.k, j(j(j({}, (0, m.s2)() ? {
                    display: "flex",
                    justifyContent: "center",
                    m: 6,
                    position: "relative"
                } : {
                    position: "fixed",
                    right: [1, 6],
                    bottom: [1, 4]
                }), e), {}, {
                    children: (0, g.jsx)(l.Wk, {
                        isDark: n,
                        children: (0, g.jsx)(s.z, {
                            as: a.r,
                            onClick: v,
                            variant: "plain",
                            target: "_blank",
                            href: "https://gamma.app",
                            textDecoration: "none !important",
                            leftIcon: (0, g.jsx)(c.E, {
                                src: "/_next/static/media/GammaLogoGradient.43edb67f.svg",
                                h: "1em"
                            }),
                            size: "sm",
                            children: (0, g.jsx)(i.cC, {
                                id: "vo61Ld",
                                values: {
                                    GAMMA_PROPER_NOUN: u.N6
                                }
                            })
                        })
                    })
                }))
            }
        },
        96302: function(e, t, n) {
            n.d(t, {
                VN: function() {
                    return f
                },
                rJ: function() {
                    return d
                },
                us: function() {
                    return u
                }
            });
            var r = n(2784),
                i = n(98875),
                o = n(46358),
                s = n(41261),
                a = n(62141),
                c = n(14115),
                l = "disable-card-size-animations",
                d = function() {
                    var e = (0, i.ye)("autoZoomToFit"),
                        t = (0, o.CG)(a.Kk);
                    return null != t ? t : e
                },
                u = function() {
                    var e = (0, o.CG)(a.i2),
                        t = (0, r.useRef)(),
                        n = d(),
                        i = !c.Pv && n;
                    (0, r.useEffect)(function() {
                        var n = !t.current;
                        t.current = e;
                        var r = n ? s.nY : s.id / 4;
                        e && i && setTimeout(function() {
                            document.body.classList.add(l), f(), setTimeout(function() {
                                document.body.classList.remove(l)
                            }, s.id / 2)
                        }, r)
                    }, [e, i])
                },
                f = function() {
                    var e = (0, o.bh)(),
                        t = document.documentElement.clientHeight,
                        n = document.querySelector('[data-animate-value="presentCurrent"][data-card-scroll-element]');
                    n && (e.dispatch((0, a.Ic)({
                        zoomLevel: 1
                    })), setTimeout(function() {
                        var r = n.scrollHeight,
                            i = t / r;
                        if (c.QX) i = Math.max(t / r, .7);
                        else {
                            if (i < .7) return;
                            i = Math.floor(10 * i) / 10
                        }
                        e.dispatch((0, a.Ic)({
                            zoomLevel: i
                        })), console.debug("[zoomPresentModeToFit] zooming", JSON.stringify({
                            viewportHeight: t,
                            cardHeight: r,
                            targetZoom: i
                        }))
                    }))
                }
        },
        50376: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return et
                }
            });
            var r = n(81333),
                i = n(55452),
                o = n(87254),
                s = n(81927),
                a = n(8848),
                c = n(24798),
                l = n(11919),
                d = n(91012),
                u = n(4036),
                f = n(53738),
                p = n(73848),
                h = n(45650),
                x = n(55479),
                m = n(78116),
                g = n(56915),
                v = n(16796),
                j = n(64827),
                b = n(92619),
                y = n(2167),
                C = n(89190),
                O = n(80353),
                w = n(76648),
                k = n(55966),
                S = n(65742),
                E = n(31807),
                I = n(65903),
                P = n.n(I),
                D = n(2784),
                A = n(24021),
                T = n(23313),
                R = n(75085),
                _ = n(8388),
                M = n(51331),
                L = n(49922),
                z = n(32333),
                N = n(36738),
                Z = n(41261),
                G = n(1153);

            function F(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var U = function(e, t) {
                    var n = [];
                    return ! function e(r) {
                        if (t(r) && n.push(r), r.content) {
                            var i, o = function(e, t) {
                                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!n) {
                                    if (Array.isArray(e) || (n = function(e, t) {
                                            if (e) {
                                                if ("string" == typeof e) return F(e, t);
                                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return F(e, t)
                                            }
                                        }(e))) {
                                        n && (e = n);
                                        var r = 0,
                                            i = function() {};
                                        return {
                                            s: i,
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
                                            f: i
                                        }
                                    }
                                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var o, s = !0,
                                    a = !1;
                                return {
                                    s: function() {
                                        n = n.call(e)
                                    },
                                    n: function() {
                                        var e = n.next();
                                        return s = e.done, e
                                    },
                                    e: function(e) {
                                        a = !0, o = e
                                    },
                                    f: function() {
                                        try {
                                            s || null == n.return || n.return()
                                        } finally {
                                            if (a) throw o
                                        }
                                    }
                                }
                            }(r.content);
                            try {
                                for (o.s(); !(i = o.n()).done;) {
                                    var s = i.value;
                                    e(s)
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                        }
                    }(e), n
                },
                W = n(59734),
                H = n(81188),
                V = n(67453),
                B = n(52322),
                q = function() {
                    return (0, B.jsxs)(B.Fragment, {
                        children: [(0, B.jsx)(s.O, {
                            w: "350px",
                            h: 12
                        }), (0, B.jsx)(a.N, {
                            mt: 3,
                            w: 64,
                            noOfLines: 1
                        })]
                    })
                },
                K = function(e) {
                    var t = e.createdTime,
                        n = e.editors,
                        r = e.isLatest,
                        o = e.onClick,
                        s = e.showPaywall,
                        a = e.paywallCount;
                    if (!n || !n.length) return (0, B.jsx)(B.Fragment, {});
                    var p = s ? "linear-gradient(rgb(0, 0, 0) 15%, transparent 100%)" : "",
                        h = (0, B.jsxs)(c.O, {
                            flexDirection: "row",
                            borderRadius: "base",
                            style: {
                                WebkitMaskImage: p,
                                maskImage: p
                            },
                            border: "none",
                            isDisabled: s,
                            opacity: "1 !important",
                            onClick: o,
                            alignItems: "flex-start",
                            width: "100%",
                            textAlign: "left",
                            children: [(0, B.jsxs)(l.k, {
                                w: "100%",
                                direction: "column",
                                children: [(0, B.jsx)(d.x, {
                                    fontSize: "sm",
                                    children: P()((0, H.P9)(t))
                                }), (0, B.jsx)(d.x, {
                                    fontSize: "xs",
                                    flex: 1,
                                    children: n[0].displayName
                                })]
                            }), r && (0, B.jsx)(u.C, {
                                colorScheme: "green",
                                py: "0.5",
                                fontSize: "0.65em",
                                children: (0, B.jsx)(i.cC, {
                                    id: "wL3cK8"
                                })
                            })]
                        });
                    return s ? (0, B.jsxs)(B.Fragment, {
                        children: [(0, B.jsx)(k.kH, {
                            placement: "top",
                            isDisabled: !s,
                            label: s ? (0, B.jsx)(i.cC, {
                                id: "PYTBm5",
                                values: {
                                    paywallCount: a
                                }
                            }) : void 0,
                            children: (0, B.jsx)(f.xu, {
                                mb: 4,
                                children: h
                            })
                        }), (0, B.jsx)(L.m, {
                            isNarrow: !0,
                            segmentEvent: z.AA.GAMMA_PRO_UPSELL_CALLOUT_CHANGE_HISTORY,
                            description: (0, B.jsx)(i.cC, {
                                id: "mVKYtH"
                            })
                        })]
                    }) : h
                },
                Y = function(e) {
                    var t, n = (0, M.Yt)(),
                        r = (0, D.useMemo)(function() {
                            if ("unlimited" === n) return {
                                items: e,
                                paywalledItems: []
                            };
                            var t = parseInt(n),
                                r = e.filter(function(e, n) {
                                    return 0 === n || (0, E.Z)(e.createdTime) >= new Date(Date.now() - 864e5 * t)
                                }),
                                i = e.slice(r.length, e.length),
                                o = i.length ? i[0] : null;
                            return {
                                items: r.concat(o ? [o] : []),
                                paywalledItems: i
                            }
                        }, [n, e]),
                        i = r.items,
                        o = r.paywalledItems;
                    return {
                        groupedSnapshots: (0, D.useMemo)(function() {
                            return (0, H.yd)({
                                items: i,
                                sortBy: "createdTime"
                            })
                        }, [i]),
                        paywalledSnapshotId: null === (t = o[0]) || void 0 === t ? void 0 : t.id,
                        paywallCount: o.length
                    }
                },
                Q = function(e) {
                    var t = e.groupedSnapshots,
                        n = e.paywalledSnapshotId,
                        s = e.paywallCount,
                        a = e.onClick,
                        c = e.showFetchMore,
                        l = e.onFetchMoreClick,
                        d = e.isFetchingMore;
                    return (0, B.jsxs)(p.t, {
                        w: "100%",
                        children: [Object.entries(t).filter(function(e) {
                            return (0, r.Z)(e, 2)[1].length
                        }).map(function(e) {
                            var t = (0, r.Z)(e, 2),
                                i = t[0],
                                c = t[1];
                            return (0, B.jsxs)(D.Fragment, {
                                children: [(0, B.jsx)(k.NZ, {
                                    px: 4,
                                    py: 2,
                                    mx: 0,
                                    mt: 2,
                                    children: {
                                        today: o.ag._({
                                            id: "ecUA8p"
                                        }),
                                        thisWeek: o.ag._({
                                            id: "yByRxz"
                                        }),
                                        earlier: o.ag._({
                                            id: "HGg4T/"
                                        })
                                    }[i]
                                }), c.map(function(e, t) {
                                    var r = e.createdTime,
                                        i = e.editors,
                                        o = e.id;
                                    return (0, B.jsx)(K, {
                                        onClick: function() {
                                            return a(o)
                                        },
                                        isLatest: 0 === t,
                                        createdTime: r,
                                        editors: i,
                                        showPaywall: n === o,
                                        paywallCount: s
                                    }, o)
                                })]
                            }, i)
                        }), c && (0, B.jsx)(h.z, {
                            isLoading: d,
                            onClick: l,
                            children: (0, B.jsx)(i.cC, {
                                id: "yQ2kGp"
                            })
                        })]
                    })
                },
                X = function() {
                    return (0, B.jsxs)(p.t, {
                        w: "100%",
                        children: [(0, B.jsx)(s.O, {
                            h: 16
                        }), (0, B.jsx)(s.O, {
                            h: 16,
                            mt: 2
                        }), (0, B.jsx)(s.O, {
                            h: 16,
                            mt: 2
                        }), (0, B.jsx)(s.O, {
                            h: 16,
                            mt: 2
                        }), (0, B.jsx)(s.O, {
                            h: 16,
                            mt: 2
                        }), (0, B.jsx)(s.O, {
                            h: 16,
                            mt: 2
                        }), (0, B.jsx)(s.O, {
                            h: 16,
                            mt: 2
                        }), (0, B.jsx)(s.O, {
                            h: 16,
                            mt: 2
                        })]
                    })
                },
                J = function(e) {
                    var t = e.title,
                        n = e.createdBy,
                        r = e.createdTime,
                        o = e.numSnapshots;
                    return (0, B.jsxs)(B.Fragment, {
                        children: [(0, B.jsx)(d.x, {
                            mt: 1,
                            children: (0, B.jsx)(i.cC, {
                                id: "yf//Op",
                                values: {
                                    0: (0, _.Dw)(r),
                                    1: (0, _.Dw)(r),
                                    numSnapshots: o
                                }
                            })
                        }), (0, B.jsx)(d.x, {
                            color: "gray.500",
                            fontSize: "sm",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            children: (0, B.jsx)(i.cC, {
                                id: "JVHTIo",
                                values: {
                                    0: null != n && n.displayName ? null == n ? void 0 : n.displayName : "Unknown",
                                    1: (0, _.p6)(r, "PPp"),
                                    title: t
                                }
                            })
                        })]
                    })
                },
                $ = "snapshot-editor-root",
                ee = function(e) {
                    var t = e.id,
                        n = e.doc,
                        r = e.content,
                        i = (0, D.useMemo)(function() {
                            if (r) return U(r, function(e) {
                                return e.type === Z.W4
                            }).map(function(e) {
                                var t;
                                return {
                                    __typename: "Card",
                                    id: (null === (t = e.attrs) || void 0 === t ? void 0 : t.id) || "",
                                    docId: n.id,
                                    title: (0, S.getCardTitle)(e),
                                    createdTime: n.createdTime,
                                    updatedTime: n.updatedTime,
                                    archived: !1
                                }
                            })
                        }, [r, n]);
                    return (0, B.jsx)(N.fb, {
                        reduxData: {
                            cards: i
                        },
                        initialContent: r,
                        doc: n,
                        docId: n.id,
                        scrollingParentSelector: ".".concat($),
                        isInsideDrawer: !0
                    }, t)
                },
                et = function(e) {
                    var t = e.isOpen,
                        n = e.onClose,
                        o = e.doc,
                        s = (0, x.p)(),
                        a = (0, W._i)().getCollaborativeEditorInstance,
                        c = (0, D.useState)(!1),
                        d = c[0],
                        u = c[1],
                        p = (0, T.pfN)({
                            variables: {
                                docId: o.id,
                                first: 25
                            },
                            skip: !o || !t,
                            fetchPolicy: "network-only",
                            nextFetchPolicy: "network-only"
                        }),
                        S = p.loading,
                        E = p.data,
                        I = p.called,
                        P = p.fetchMore,
                        M = (0, T.opq)({
                            nextFetchPolicy: "cache-only"
                        }),
                        L = (0, r.Z)(M, 2),
                        z = L[0],
                        N = L[1],
                        Z = N.loading,
                        F = N.data,
                        U = (null == E ? void 0 : E.snapshots.edges.map(function(e) {
                            return e.node
                        })) || [],
                        H = Y(U),
                        K = H.groupedSnapshots,
                        et = H.paywalledSnapshotId,
                        en = H.paywallCount,
                        er = null == E ? void 0 : E.snapshots.pageInfo,
                        ei = !!(!et && I && (null == er ? void 0 : er.hasNextPage) && (null == er ? void 0 : er.endCursor)),
                        eo = (0, D.useCallback)(function() {
                            null != er && er.hasNextPage && null != er && er.endCursor && (u(!0), P({
                                variables: {
                                    after: er.endCursor
                                }
                            }).finally(function() {
                                u(!1)
                            }))
                        }, [P, null == er ? void 0 : er.endCursor, null == er ? void 0 : er.hasNextPage]),
                        es = U[0];
                    (0, D.useEffect)(function() {
                        null != es && es.id && z({
                            variables: {
                                snapshotId: es.id,
                                docId: o.id
                            }
                        })
                    }, [o.id, z, null == es ? void 0 : es.id]);
                    var ea = (0, V.$)(null == o ? void 0 : o.title),
                        ec = null == o ? void 0 : o.createdBy,
                        el = null == o ? void 0 : o.createdTime,
                        ed = null == F ? void 0 : F.snapshot,
                        eu = ed && ed.id === o.currentSnapshotId;
                    return (0, B.jsx)(k.Wk, {
                        isDark: !1,
                        children: (0, B.jsxs)(m.d, {
                            placement: "bottom",
                            onClose: n,
                            isOpen: t,
                            trapFocus: !0,
                            isFullHeight: !0,
                            blockScrollOnMount: !1,
                            children: [(0, B.jsx)(g.Z, {}), (0, B.jsxs)(v.s, {
                                borderTopRadius: "xl",
                                h: "calc(var(--100vh) - 24px)",
                                transform: "none !important",
                                children: [(0, B.jsx)(j.o, {}), (0, B.jsxs)(b.x, {
                                    borderBottom: "1px solid #000",
                                    borderColor: "gray.200",
                                    children: [S && (0, B.jsx)(q, {}), o && U && (0, B.jsx)(J, {
                                        numSnapshots: (null == U ? void 0 : U.length) || 0,
                                        createdBy: ec,
                                        createdTime: el,
                                        title: ea
                                    })]
                                }), (0, B.jsx)(y.f, {
                                    p: 0,
                                    h: "100%",
                                    children: (0, B.jsxs)(l.k, {
                                        direction: "row",
                                        h: "100%",
                                        children: [(0, B.jsx)(f.xu, {
                                            p: 2,
                                            w: "17rem",
                                            overflowY: "auto",
                                            bg: "gray.50",
                                            children: (0, B.jsxs)(C.m, {
                                                variant: "soft-rounded",
                                                orientation: "vertical",
                                                size: "md",
                                                children: [S && (0, B.jsx)(X, {}), !S && U && (0, B.jsx)(Q, {
                                                    onClick: function(e) {
                                                        z({
                                                            variables: {
                                                                snapshotId: e,
                                                                docId: o.id
                                                            }
                                                        })
                                                    },
                                                    groupedSnapshots: K,
                                                    paywalledSnapshotId: et,
                                                    paywallCount: en,
                                                    showFetchMore: ei,
                                                    onFetchMoreClick: eo,
                                                    isFetchingMore: d
                                                })]
                                            })
                                        }), (0, B.jsx)(l.k, {
                                            flex: 1,
                                            bg: "gray.100",
                                            overflowY: "scroll",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignItems: "flex-start",
                                            width: "100%",
                                            height: "100%",
                                            className: $,
                                            css: {
                                                "--editor-width": "100%"
                                            },
                                            children: (0, B.jsxs)(l.k, {
                                                direction: "column",
                                                position: "relative",
                                                width: "100%",
                                                height: "100%",
                                                children: [(0, B.jsx)(G.Y, {}), (!ed || Z) && (0, B.jsx)(A.AA, {}), ed && !Z && (0, B.jsx)(ee, {
                                                    id: ed.id,
                                                    doc: o,
                                                    content: null == ed ? void 0 : ed.content.default
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, B.jsx)(O.m, {
                                    borderTop: "1px solid #000",
                                    borderColor: "gray.200",
                                    children: (0, B.jsxs)(w.h, {
                                        spacing: 4,
                                        children: [(0, B.jsx)(h.z, {
                                            variant: "ghost",
                                            onClick: n,
                                            children: (0, B.jsx)(i.cC, {
                                                id: "dEgA5A"
                                            })
                                        }), (0, B.jsx)(k.kH, {
                                            label: eu ? (0, B.jsx)(i.cC, {
                                                id: "HJo72u"
                                            }) : (0, B.jsx)(i.cC, {
                                                id: "sonTm1"
                                            }),
                                            shouldWrapChildren: !0,
                                            children: (0, B.jsx)(h.z, {
                                                variant: "solid",
                                                isDisabled: !ed || eu,
                                                onClick: function() {
                                                    if (ed) {
                                                        var e, t = null == U ? void 0 : null === (e = U.find(function(e) {
                                                                return e.id === ed.id
                                                            })) || void 0 === e ? void 0 : e.createdTime,
                                                            r = a();
                                                        if (r) {
                                                            r.commands.setContent(ed.content.default, !0);
                                                            var o = ed.content.annotationsAbsolute;
                                                            o ? r.commands.restoreAnnotations(o) : r.commands.clearAnnotations(), n(), s({
                                                                title: (0, B.jsx)(i.cC, {
                                                                    id: "7ovf4C"
                                                                }),
                                                                description: (0, B.jsx)(i.cC, {
                                                                    id: "DTim6X",
                                                                    values: {
                                                                        0: t ? (0, _.p6)(t, "PPp") : "selected snapshot",
                                                                        GAMMA_ARTIFACT_PROPER_NOUN: R.Yc
                                                                    }
                                                                }),
                                                                status: "success",
                                                                duration: 5e3,
                                                                isClosable: !0
                                                            })
                                                        }
                                                    }
                                                },
                                                children: (0, B.jsx)(i.cC, {
                                                    id: "yKu/3Y"
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                }
        },
        33902: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return _
                }
            });
            var r, i, o = n(76547),
                s = n(55452),
                a = n(87254),
                c = n(82642),
                l = n(55479),
                d = n(11919),
                u = n(12221),
                f = n(91012),
                p = n(76648),
                h = n(45650),
                x = n(67887),
                m = n(8283),
                g = n(30807),
                v = n(80040),
                j = n(95258),
                b = n(53738),
                y = n(49929),
                C = n(55966),
                O = n(28957),
                w = n(2784),
                k = n(43997),
                S = n(98621),
                E = n.n(S),
                I = n(62141),
                P = n(10710),
                D = n(59734),
                A = n(13720),
                T = n(10939),
                R = n(52322),
                _ = function() {
                    var e = (0, P.SE)(),
                        t = e.user,
                        n = e.anonymousUser,
                        r = (0, k.I0)(),
                        o = (0, l.p)(),
                        v = (0, D._i)().editor,
                        j = (0, k.v9)((0, I._h)((null == t ? void 0 : t.id) || n.id)),
                        b = j.collaborators,
                        y = j.followers;
                    (0, T.rU)({
                        editor: v,
                        collaborators: b,
                        user: t
                    });
                    var O = (0, k.v9)(I.Ok),
                        S = (0, k.v9)(I.e0),
                        _ = (0, k.v9)(I.yn),
                        L = (0, k.v9)(I.gs),
                        z = (0, k.v9)(I.JA);
                    (0, w.useEffect)(function() {
                        O.forEach(function(e) {
                            o({
                                duration: 2e3,
                                position: "bottom",
                                render: function() {
                                    return (0, R.jsxs)(d.k, {
                                        bg: "gray.50",
                                        p: 3,
                                        px: 6,
                                        align: "center",
                                        borderRadius: "md",
                                        shadow: "md",
                                        children: [(0, R.jsx)(u.q, {
                                            size: "sm",
                                            src: e.profileImageUrl,
                                            border: "solid 2px ".concat(e.color),
                                            color: E()(e.color).isDark() ? "white" : "black",
                                            bg: e.color,
                                            ignoreFallback: !0
                                        }), (0, R.jsx)(f.x, {
                                            ml: 2,
                                            children: (0, R.jsx)(s.cC, {
                                                id: "DSaSKH",
                                                values: {
                                                    0: e.name
                                                }
                                            })
                                        })]
                                    })
                                }
                            })
                        })
                    }, [O, o]), (0, w.useEffect)(function() {
                        var e = !_ && L && !z;
                        if (v && e) {
                            o.closeAll();
                            var t = o({
                                id: "detached-toast",
                                render: function() {
                                    return (0, R.jsxs)(d.k, {
                                        bg: "gray.50",
                                        p: 3,
                                        px: 6,
                                        m: 4,
                                        justify: "flex-end",
                                        align: "center",
                                        borderRadius: "md",
                                        shadow: "md",
                                        children: [(0, R.jsx)(f.x, {
                                            size: "sm",
                                            mr: 6,
                                            children: (0, R.jsx)(s.cC, {
                                                id: "PjodLp"
                                            })
                                        }), (0, R.jsxs)(p.h, {
                                            size: "sm",
                                            alignItems: "center",
                                            children: [(0, R.jsx)(h.z, {
                                                onClick: function() {
                                                    r((0, I.Qx)({
                                                        attached: !0
                                                    }))
                                                },
                                                variant: "solid",
                                                children: (0, R.jsx)(s.cC, {
                                                    id: "f/C2ic"
                                                })
                                            }), (0, R.jsx)(C.kH, {
                                                label: (0, R.jsx)(s.cC, {
                                                    id: "5JWVnj"
                                                }),
                                                children: (0, R.jsx)(x.h, {
                                                    isRound: !0,
                                                    variant: "ghost",
                                                    size: "xs",
                                                    "aria-label": a.ag._({
                                                        id: "5JWVnj"
                                                    }),
                                                    icon: (0, R.jsx)(c.T, {}),
                                                    onClick: function() {
                                                        r((0, I.Qx)({
                                                            attached: !1,
                                                            following: null
                                                        }))
                                                    }
                                                })
                                            })]
                                        })]
                                    })
                                },
                                position: "bottom",
                                duration: null
                            });
                            return function() {
                                o.close(t)
                            }
                        }
                    }, [v, _, L, z, o, r]), (0, w.useEffect)(function() {
                        L || !v || v.isDestroyed || r((0, I.Qx)({
                            following: null
                        }))
                    }, [v, L, r]);
                    var N = (0, A.i)({
                            base: 4,
                            md: 6,
                            xl: 8
                        }) || 6,
                        Z = N / (y.length ? 2 : 1),
                        G = N / (b.length ? 2 : 1);
                    return (0, R.jsx)(d.k, {
                        children: (0, R.jsxs)(m.U, {
                            divider: (0, R.jsx)(g.c, {
                                borderColor: "gray.200"
                            }),
                            children: [y.length && (0, R.jsx)(M, {
                                type: i.FOLLOWERS,
                                collaborators: y,
                                max: G,
                                isEveryone: 0 === b.length,
                                localCollaborator: S,
                                localIsAttached: _
                            }), b.length && (0, R.jsx)(M, {
                                type: i.COLLABORATORS,
                                collaborators: b,
                                max: Z,
                                isEveryone: 0 === y.length,
                                localCollaborator: S,
                                localIsAttached: _
                            })]
                        })
                    })
                };
            (r = i || (i = {})).FOLLOWERS = "FOLLOWERS", r.COLLABORATORS = "COLLABORATORS";
            var M = function(e) {
                    var t = e.collaborators,
                        n = e.localCollaborator,
                        r = e.localIsAttached,
                        o = e.type,
                        c = e.max,
                        l = e.isEveryone,
                        u = (0, T.OM)(),
                        p = o === i.FOLLOWERS,
                        h = t.length > c,
                        x = h ? t.slice(0, c - 1) : t,
                        m = h ? t.length - c + 1 : 0,
                        g = function(e) {
                            var t = e.localIsFollowing,
                                n = e.collaborator;
                            p || u({
                                localIsFollowing: t,
                                localIsAttached: r,
                                collaborator: n
                            })
                        };
                    return (0, R.jsx)(O.S, {
                        children: (0, R.jsxs)(v.H, {
                            size: "sm",
                            spacing: p ? -2 : 0,
                            children: [p && (0, R.jsx)(L, {
                                isEveryone: l
                            }), x.map(function(e, t) {
                                var i, o = (null == n ? void 0 : null === (i = n.memoState) || void 0 === i ? void 0 : i.following) === e.sessionId,
                                    a = !!e.idleSince,
                                    c = !p && (h || x.length - 1 !== t);
                                return (0, R.jsx)(C.Vw, {
                                    ignoreFallback: !0,
                                    name: e.name,
                                    label: (0, R.jsxs)(d.k, {
                                        direction: "column",
                                        justify: "center",
                                        align: "center",
                                        children: [(0, R.jsx)(f.x, {
                                            children: e.name
                                        }), (0, R.jsx)(f.x, {
                                            fontSize: "xs",
                                            children: p ? (0, R.jsx)(s.cC, {
                                                id: "iRohzP"
                                            }) : o && r ? (0, R.jsx)(s.cC, {
                                                id: "1QTvS5"
                                            }) : (0, R.jsx)(s.cC, {
                                                id: "2Ldadb"
                                            })
                                        })]
                                    }),
                                    pointerEvents: a ? "none" : "auto",
                                    opacity: a ? .4 : 1,
                                    transitionProperty: "common",
                                    transitionDuration: "normal",
                                    src: e.profileImageUrl,
                                    border: "solid 2px ".concat(e.color),
                                    nubbin: o && r,
                                    bg: e.color,
                                    shadow: "base",
                                    color: E()(e.color).isDark() ? "white" : "black",
                                    cursor: p ? "" : "pointer",
                                    boxProps: c ? {
                                        marginEnd: -2
                                    } : {},
                                    onClick: function() {
                                        return g({
                                            localIsFollowing: o,
                                            collaborator: e
                                        })
                                    }
                                }, e.sessionId)
                            }), m > 0 && (0, R.jsxs)(C.Z9, {
                                tooltipLabel: a.ag._({
                                    id: "25VyZX"
                                }),
                                onClick: function(e) {
                                    var r, i = t.find(function(t) {
                                        return t.id === e.id
                                    });
                                    g({
                                        localIsFollowing: !!(i && (null == n ? void 0 : null === (r = n.memoState) || void 0 === r ? void 0 : r.following) === i.sessionId),
                                        collaborator: i
                                    })
                                },
                                avatars: t,
                                count: m,
                                disabled: p,
                                children: [(0, R.jsx)(f.x, {
                                    px: 2,
                                    children: p ? (0, R.jsx)(s.cC, {
                                        id: "vliZud",
                                        values: {
                                            0: t.length
                                        }
                                    }) : (0, R.jsx)(s.cC, {
                                        id: "sC4bhw",
                                        values: {
                                            0: t.length
                                        }
                                    })
                                }), !p && (0, R.jsx)(f.x, {
                                    px: 2,
                                    fontSize: "sm",
                                    color: "gray.500",
                                    children: (0, R.jsx)(s.cC, {
                                        id: "miJbY4"
                                    })
                                }), (0, R.jsx)(j.R, {})]
                            })]
                        })
                    })
                },
                L = function(e) {
                    var t = e.isEveryone,
                        n = (0, w.useState)(!1),
                        r = n[0],
                        i = n[1],
                        a = (0, w.useState)(!1),
                        c = a[0],
                        l = a[1],
                        d = (0, w.useState)(!1),
                        u = d[0],
                        f = d[1];
                    return ((0, w.useEffect)(function() {
                        !r && t && (l(!0), i(!0), setTimeout(function() {
                            l(!1)
                        }, 3e3))
                    }, [t, r]), t) ? (0, R.jsx)(b.xu, {
                        fontSize: "sm",
                        color: "",
                        px: 2,
                        mr: 2,
                        children: (0, R.jsx)(C.kH, {
                            label: (0, R.jsx)(s.cC, {
                                id: "w7dTyp"
                            }),
                            isOpen: u || c,
                            children: (0, R.jsx)(b.xu, {
                                mr: 2,
                                px: 1,
                                bg: "green.300",
                                color: "green.900",
                                borderRadius: "full",
                                onMouseEnter: function() {
                                    return f(!0)
                                },
                                onMouseLeave: function() {
                                    return f(!1)
                                },
                                children: (0, R.jsx)(y.G, {
                                    icon: o.Md
                                })
                            })
                        })
                    }) : (0, R.jsx)(b.xu, {
                        fontSize: "sm",
                        color: "gray.700",
                        pr: 4,
                        children: (0, R.jsx)(y.G, {
                            icon: o.Md
                        })
                    })
                }
        },
        74624: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return z
                }
            });
            var r = n(81333),
                i = n(60670),
                o = n(54728),
                s = n(51434),
                a = n(94301),
                c = n(91333),
                l = n(10344),
                d = n(49929),
                u = n(2784),
                f = n(23313),
                p = n(26087),
                h = n(2875),
                x = n(10710),
                m = n(60521),
                g = n(23015),
                v = n(34860),
                j = n(51823),
                b = n(25298),
                y = n(53738),
                C = n(71354),
                O = n(98841),
                w = n(25925),
                k = n(6563),
                S = n(52322),
                E = (0, O.E)(y.xu),
                I = function(e) {
                    var t = e.commentFeedItems,
                        n = e.editor,
                        r = e.doc,
                        i = e.user;
                    return n && i ? (0, S.jsx)(C.K, {
                        p: 2,
                        children: (0, S.jsx)(w.M, {
                            initial: !1,
                            children: t.map(function(e) {
                                return (0, S.jsx)(E, {
                                    layout: !0,
                                    initial: {
                                        opacity: 0,
                                        scale: .85
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: .85
                                    },
                                    bg: "gray.100",
                                    borderColor: "gray.200",
                                    borderWidth: "1px",
                                    borderRadius: "md",
                                    shadow: "sm",
                                    children: (0, S.jsx)(k.q, {
                                        comment: e,
                                        editor: n,
                                        selfUser: i,
                                        docId: r.id,
                                        userCanComment: !1,
                                        instanceType: "notification"
                                    }, e.id)
                                }, e.id)
                            })
                        })
                    }) : null
                },
                P = n(95235),
                D = n(55479),
                A = n(38140),
                T = n(37914);

            function R(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? R(Object(n), !0).forEach(function(t) {
                        (0, P.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var M = function(e) {
                    return !!e.comment && null !== e.timeout
                },
                L = function(e) {
                    var t = e.user,
                        n = e.docId,
                        i = e.docComments,
                        o = void 0 === i ? [] : i,
                        s = e.pauseExiration,
                        a = void 0 !== s && s,
                        c = e.duration,
                        l = void 0 === c ? 5e3 : c,
                        d = (0, D.p)(),
                        p = null == t ? void 0 : t.id,
                        h = (0, u.useMemo)(function() {
                            if (!p) return null;
                            var e = new A.default(T.v.KNOCK_PUBLIC_KEY);
                            return e.authenticate(p), e
                        }, [p]),
                        x = (0, u.useState)({}),
                        m = x[0],
                        g = x[1],
                        v = (0, u.useRef)(!0),
                        j = (0, u.useRef)(a);
                    j.current = a, (0, u.useEffect)(function() {
                        return function() {
                            v.current = !1
                        }
                    }, []);
                    var b = (0, u.useCallback)(function() {
                            return g({})
                        }, []),
                        y = (0, u.useCallback)(function(e) {
                            g(function(t) {
                                return Object.entries(t).reduce(function(t, n) {
                                    var i = (0, r.Z)(n, 2),
                                        o = i[0],
                                        s = i[1];
                                    return (!0 === e ? -1 === s.timeout : o === e) || (t[o] = s), t
                                }, {})
                            })
                        }, []);
                    return (0, u.useEffect)(function() {
                        a || y(!0)
                    }, [y, a]), (0, u.useEffect)(function() {
                        Object.entries(m).forEach(function(e) {
                            var t = (0, r.Z)(e, 2),
                                n = t[0],
                                i = t[1],
                                s = i.entry;
                            if (null === i.timeout) {
                                var a = s.data.commentId,
                                    c = null == o ? void 0 : o.find(function(e) {
                                        return e.id === a
                                    });
                                if (c) {
                                    var d = setTimeout(function() {
                                        v.current && (j.current ? g(function(e) {
                                            var t = _({}, e);
                                            return t[n].timeout = -1, t
                                        }) : y(n))
                                    }, l);
                                    g(function(e) {
                                        return _(_({}, e), {}, (0, P.Z)({}, n, {
                                            entry: s,
                                            comment: c,
                                            timeout: d
                                        }))
                                    })
                                }
                            }
                        })
                    }, [m, o, l, y]), (0, u.useEffect)(function() {
                        if (h && n) {
                            var e = h.feeds.initialize(T.v.KNOCK_FEED_ID, {
                                    source: "new-comment",
                                    status: "unseen"
                                }),
                                t = e.listenForUpdates();
                            e.on("messages.new", function(t) {
                                var i = t.entries,
                                    o = (0, r.Z)(i, 1)[0];
                                o.data.docId === n && (g(function(e) {
                                    return _(_({}, e), {}, (0, P.Z)({}, o.id, {
                                        entry: o,
                                        timeout: null
                                    }))
                                }), e.markAsSeen(o).then(function() {
                                    console.debug("New notification marked as seen")
                                }).catch(function(e) {
                                    console.error("Unable to mark notification as seen", e)
                                }))
                            });
                            var i = f.C9N.on("status", function(e) {
                                var t = e.isConnected,
                                    n = h.client();
                                t ? n.connectSocket() : n.disconnectSocket()
                            });
                            return function() {
                                i(), t()
                            }
                        }
                    }, [n, d, h]), {
                        reset: b,
                        comments: Object.values(m).filter(M).map(function(e) {
                            return e.comment
                        })
                    }
                },
                z = function(e) {
                    var t, n = e.toggleCommentsPanel,
                        y = e.isCommentsPanelOpen,
                        C = e.doc,
                        O = e.mode,
                        w = (0, x.SE)().user,
                        k = (0, m._i)().editor,
                        E = (0, v.XI)(),
                        P = (0, r.Z)(E, 2),
                        D = P[0],
                        A = P[1],
                        T = L({
                            user: w,
                            docId: null == C ? void 0 : C.id,
                            docComments: null == C ? void 0 : C.comments,
                            pauseExiration: A
                        }),
                        R = T.comments,
                        _ = T.reset,
                        M = !!(k && C && C.comments);
                    (0, u.useEffect)(function() {
                        if (M) {
                            var e = (0, j.sY)().commentId;
                            e && h.pw.emit(h.TI.OPEN_POPUP_COMMENT, {
                                commentId: e,
                                highlightComment: !0
                            })
                        }
                    }, [M]), (0, u.useEffect)(function() {
                        (y || O === p.q.SLIDE_VIEW) && _()
                    }, [y, _, O]);
                    var z = !!R.length && !y && O !== p.q.SLIDE_VIEW,
                        N = (null == C ? void 0 : null === (t = C.comments) || void 0 === t ? void 0 : t.filter(function(e) {
                            return e.status === f.Ux9.Open
                        }).length) || 0;
                    return (0, S.jsxs)(o.J, {
                        isLazy: !0,
                        lazyBehavior: "keepMounted",
                        returnFocusOnClose: !1,
                        isOpen: z,
                        placement: "bottom",
                        children: [(0, S.jsx)(s.x, {
                            children: (0, S.jsx)(b.h, {
                                onMouseDown: g.br,
                                onClick: n,
                                icon: (0, S.jsx)(d.G, {
                                    icon: i.Mz
                                }),
                                isActive: y,
                                "aria-label": y ? "Hide comments" : "Show comments",
                                borderRadius: 5,
                                children: N
                            })
                        }), (0, S.jsx)(a.h, {
                            children: C && (0, S.jsxs)(c.y, {
                                bg: "white",
                                shadow: "lg",
                                border: "none",
                                ref: D,
                                children: [(0, S.jsx)(l.Q, {
                                    bg: "white"
                                }), (0, S.jsx)(I, {
                                    editor: k,
                                    user: w,
                                    commentFeedItems: R,
                                    doc: C
                                })]
                            })
                        })]
                    })
                }
        },
        5735: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return u
                }
            });
            var r = n(16686),
                i = n(55452),
                o = n(11919),
                s = n(49929),
                a = n(55966),
                c = n(81234),
                l = n(25298),
                d = n(52322),
                u = function() {
                    return (0, d.jsx)(o.k, {
                        children: (0, d.jsx)(a.kH, {
                            closeOnMouseDown: !1,
                            closeOnClick: !1,
                            label: (0, d.jsx)(i.cC, {
                                id: "EVnzPs"
                            }),
                            children: (0, d.jsx)(l.r, {
                                "data-guider-highlight": "design-partner-button",
                                "aria-label": "Edit with AI",
                                colorScheme: "trueblue",
                                variant: "plain",
                                onClick: function() {
                                    c.T.emit("toggle", {})
                                },
                                icon: (0, d.jsx)(s.G, {
                                    icon: r.Jy
                                })
                            })
                        })
                    })
                }
        },
        45390: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return d
                }
            });
            var r = n(53738),
                i = n(98841),
                o = n(25925),
                s = n(46358),
                a = n(62141),
                c = n(52322),
                l = (0, i.E)(r.xu),
                d = function() {
                    var e = (0, s.CG)(a.WI),
                        t = (0, s.CG)(a.yn);
                    return (0, c.jsx)(o.M, {
                        initial: !1,
                        children: e && t && (0, c.jsx)(l, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            position: "absolute",
                            pointerEvents: "none",
                            borderTop: "solid ".concat(4, "px ").concat(e.color),
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            height: "var(--100vh)"
                        })
                    })
                }
        },
        47090: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return eW
                }
            });
            var r = n(95235),
                i = n(60697),
                o = n(2885),
                s = n(47557),
                a = n(55452),
                c = n(78116),
                l = n(56915),
                d = n(16796),
                u = n(64827),
                f = n(92619),
                p = n(2167),
                h = n(89190),
                x = n(73848),
                m = n(24798),
                g = n(53738),
                v = n(84520),
                j = n(95085),
                b = n(49929),
                y = n(55966),
                C = n(2784),
                O = n(30118),
                w = n(46358),
                k = n(2875),
                S = n(21529),
                E = n(62141),
                I = n(6985),
                P = n(81333),
                D = n(8097),
                A = n(60831),
                T = n(69943),
                R = n(97968),
                _ = n(34302),
                M = n(87254),
                L = n(71354),
                z = n(40110),
                N = n(9088),
                Z = n(30893),
                G = n(45650),
                F = n(40771),
                U = n(63849),
                W = n(2575),
                H = n(91012),
                V = n(4036),
                B = n(8283),
                q = n(50390),
                K = n(71193),
                Y = n(54336),
                Q = n(11919),
                X = n(81170),
                J = n(52322);

            function $(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var et = function(e) {
                    var t = e.updateDocSetting,
                        n = (0, w.CG)(E.US),
                        r = n.defaultFullBleed,
                        i = n.defaultContentWidth,
                        s = n.presentBackdrop,
                        c = n.cardDimensions,
                        l = (0, X.l)(c);
                    return (0, J.jsxs)(L.K, {
                        spacing: 5,
                        mt: 4,
                        divider: (0, J.jsx)(z.i, {}),
                        children: [(0, J.jsx)(en, {
                            title: M.ag._({
                                id: "jBvtuq"
                            }),
                            description: M.ag._({
                                id: "Q3Qdcd"
                            }),
                            icon: _.qn,
                            control: (0, J.jsxs)(N.v, {
                                isLazy: !0,
                                children: [(0, J.jsx)(Z.j, {
                                    minW: 28,
                                    as: G.z,
                                    size: "sm",
                                    variant: "plain",
                                    leftIcon: (0, J.jsx)(b.G, {
                                        icon: l.icon,
                                        fixedWidth: !0
                                    }),
                                    rightIcon: (0, J.jsx)(b.G, {
                                        icon: D.pt
                                    }),
                                    style: {
                                        marginLeft: "1rem"
                                    },
                                    children: l.label()
                                }), (0, J.jsx)(F.q, {
                                    maxW: "400px",
                                    children: (0, J.jsx)(U._, {
                                        value: c,
                                        type: "radio",
                                        onChange: function(e) {
                                            t("cardDimensions", e)
                                        },
                                        children: Object.entries(X.b).map(function(e) {
                                            var t = (0, P.Z)(e, 2),
                                                n = t[0],
                                                r = t[1],
                                                i = r.label,
                                                o = r.description;
                                            return (0, J.jsxs)(W.i, {
                                                value: n,
                                                children: [(0, J.jsxs)(H.x, {
                                                    children: [i(), "fluid" === n && (0, J.jsxs)(J.Fragment, {
                                                        children: [" ", (0, J.jsx)(V.C, {
                                                            colorScheme: "gray",
                                                            ml: 1,
                                                            children: (0, J.jsx)(a.cC, {
                                                                id: "ovBPCi"
                                                            })
                                                        })]
                                                    })]
                                                }), (0, J.jsx)(H.x, {
                                                    fontSize: "xs",
                                                    color: "gray.500",
                                                    children: o()
                                                })]
                                            }, n)
                                        })
                                    })
                                })]
                            })
                        }), (0, J.jsx)(en, {
                            title: M.ag._({
                                id: "lklIf1"
                            }),
                            description: M.ag._({
                                id: "aJ+ISV"
                            }),
                            icon: R.dH,
                            value: "lg" === i,
                            onChange: function(e) {
                                return t("defaultContentWidth", e ? "lg" : void 0)
                            }
                        }), (0, J.jsx)(en, {
                            title: M.ag._({
                                id: "lsVq2Z"
                            }),
                            description: M.ag._({
                                id: "u/0NJZ"
                            }),
                            icon: T.r9,
                            value: "full" === r,
                            onChange: function(e) {
                                return t("defaultFullBleed", e ? "full" : void 0)
                            }
                        }), (0, J.jsx)(en, {
                            title: M.ag._({
                                id: "7VfbQM"
                            }),
                            description: M.ag._({
                                id: "XZHPlI"
                            }),
                            icon: o.UH,
                            value: s,
                            onChange: function(e) {
                                return t("presentBackdrop", e)
                            }
                        }), (0, J.jsxs)(L.K, {
                            children: [(0, J.jsx)(H.x, {
                                fontSize: "xs",
                                color: "gray.600",
                                children: (0, J.jsx)(a.cC, {
                                    id: "ymPKi7"
                                })
                            }), (0, J.jsxs)(B.U, {
                                alignItems: "flex-start",
                                spacing: "4",
                                children: [(0, J.jsx)(ei, {
                                    label: M.ag._({
                                        id: "wl99H6"
                                    }),
                                    cardDimensions: l,
                                    isWide: "lg" === i,
                                    showBackdrop: "full" !== r,
                                    scaleCardUp: !1
                                }), (0, J.jsx)(ei, {
                                    label: M.ag._({
                                        id: "GWjDlt"
                                    }),
                                    cardDimensions: l,
                                    isWide: "lg" === i,
                                    showBackdrop: s && "full" !== r,
                                    scaleCardUp: !s || "full" === r
                                })]
                            })]
                        })]
                    })
                },
                en = function(e) {
                    var t = e.title,
                        n = e.description,
                        r = e.icon,
                        i = e.children,
                        o = e.helpDescription,
                        s = e.value,
                        a = e.onChange,
                        c = e.control;
                    return (0, J.jsxs)(B.U, {
                        alignItems: "flex-start",
                        spacing: 2,
                        children: [r && (0, J.jsx)(H.x, {
                            fontSize: "lg",
                            width: 8,
                            maxW: 8,
                            children: (0, J.jsx)(b.G, {
                                icon: r,
                                fixedWidth: !0
                            })
                        }), (0, J.jsxs)(L.K, {
                            spacing: 4,
                            flex: 1,
                            children: [(0, J.jsxs)(L.K, {
                                spacing: 1,
                                children: [(0, J.jsxs)(q.X, {
                                    size: "sm",
                                    fontWeight: "semibold",
                                    children: [t, " ", o ? (0, J.jsx)(y.Yq, {
                                        label: o,
                                        ml: 1
                                    }) : null]
                                }), (0, J.jsx)(H.x, {
                                    fontSize: "xs",
                                    color: "gray.600",
                                    children: n
                                })]
                            }), i]
                        }), a && (0, J.jsx)(K.r, {
                            isChecked: s,
                            onChange: function(e) {
                                return a(e.target.checked)
                            }
                        }), c]
                    })
                },
                er = function(e) {
                    var t = e.hideExtraLines;
                    return (0, J.jsxs)(L.K, {
                        w: "100%",
                        py: 2,
                        px: 2.5,
                        children: [(0, J.jsx)(g.xu, {
                            w: 20,
                            h: 1.5,
                            bg: "gray.200"
                        }), (0, J.jsxs)(B.U, {
                            flex: "1",
                            alignItems: "flex-start",
                            children: [(0, J.jsx)(Y.o, {
                                ratio: 4 / 3,
                                color: "gray.600",
                                w: 12,
                                bg: "gray.200",
                                children: (0, J.jsx)(g.xu, {
                                    fontSize: "lg",
                                    children: (0, J.jsx)(b.G, {
                                        icon: A.Vm
                                    })
                                })
                            }), (0, J.jsxs)(L.K, {
                                flex: "1",
                                spacing: "1",
                                children: [(0, J.jsx)(g.xu, {
                                    h: 1,
                                    bg: "gray.200"
                                }), (0, J.jsx)(g.xu, {
                                    h: 1,
                                    bg: "gray.200"
                                }), (0, J.jsx)(g.xu, {
                                    h: 1,
                                    bg: "gray.200"
                                }), (0, J.jsx)(g.xu, {
                                    w: t ? "80%" : "100%",
                                    h: 1,
                                    bg: "gray.200"
                                }), !t && (0, J.jsx)(g.xu, {
                                    w: "80%",
                                    h: 1,
                                    bg: "gray.200"
                                })]
                            })]
                        })]
                    })
                },
                ei = function(e) {
                    var t = e.cardDimensions,
                        n = e.showBackdrop,
                        r = e.isWide,
                        i = e.label,
                        o = e.scaleCardUp,
                        s = {
                            boxShadow: "".concat(n ? "sm" : ""),
                            w: "".concat(r ? "85%" : "65%"),
                            mx: "auto",
                            borderRadius: "sm",
                            bg: "white",
                            transform: "".concat(o ? "scale(1.15)" : "none")
                        };
                    return (0, J.jsxs)(L.K, {
                        flex: "1",
                        alignItems: "center",
                        sx: {
                            "*": {
                                transition: "all 0.2s ease"
                            }
                        },
                        spacing: 1.5,
                        maxW: "50%",
                        mx: "auto",
                        children: [(0, J.jsx)(Q.k, {
                            bg: n ? "gray.200" : "white",
                            borderWidth: "1px",
                            borderColor: "gray.200",
                            width: "100%",
                            minH: 32,
                            borderRadius: "sm",
                            alignItems: "center",
                            py: 2,
                            overflow: "hidden",
                            children: t.aspectRatio ? (0, J.jsx)(Y.o, ee(ee({}, s), {}, {
                                ratio: t.aspectRatio,
                                children: (0, J.jsx)(g.xu, {
                                    children: (0, J.jsx)(er, {
                                        hideExtraLines: r
                                    })
                                })
                            })) : (0, J.jsx)(L.K, ee(ee({}, s), {}, {
                                children: (0, J.jsx)(er, {
                                    hideExtraLines: r
                                })
                            }))
                        }), (0, J.jsx)(H.x, {
                            fontSize: "xs",
                            color: "gray.700",
                            children: i
                        })]
                    })
                },
                eo = n(72360),
                es = n(48322),
                ea = n(35634),
                ec = n(74928),
                el = n(35258),
                ed = function(e) {
                    var t = e.editor,
                        n = (0, w.CG)(E.Pu),
                        r = (0, w.CG)(E.XV),
                        i = (0, C.useCallback)(function(e) {
                            null == t || t.commands.updateNestedAttributesAtPos(0, e)
                        }, [t]);
                    return (0, J.jsx)(el.o, {
                        editor: t,
                        background: r,
                        updateNestedAttributes: i,
                        defaultMessage: (0, J.jsxs)(eo.b, {
                            children: [(0, J.jsx)(es.z, {}), (0, J.jsx)(a.cC, {
                                id: "dyXYfJ"
                            })]
                        }),
                        isDark: (0, ea.wj)(n),
                        isValidSource: ec.Rr
                    })
                },
                eu = n(2046),
                ef = n(70287),
                ep = n(27777),
                eh = n(25793),
                ex = n(69232),
                em = n(23313),
                eg = n(65185),
                ev = n(98875),
                ej = n(87796),
                eb = n(51331),
                ey = n(78308),
                eC = n(52596),
                eO = n(85041),
                ew = n(55479),
                ek = n(93319),
                eS = n(21891),
                eE = n(92936),
                eI = n(79821),
                eP = n(76648),
                eD = n(60807),
                eA = n(84103),
                eT = n(42879),
                eR = n(68197),
                e_ = n(47827),
                eM = n(21357),
                eL = function(e, t) {
                    var n;
                    return null == e ? void 0 : null === (n = e.routes.find(function(e) {
                        return e.docId === t
                    })) || void 0 === n ? void 0 : n.path
                },
                ez = function() {
                    var e = (0, ew.p)(),
                        t = (0, e_.AA)().openPageSetup,
                        n = (0, ev.ye)("sites"),
                        r = (0, w.CG)(eR.yx),
                        i = (0, w.CG)(eM.lH),
                        o = (0, em.qbt)(),
                        s = (0, P.Z)(o, 2),
                        c = s[0],
                        l = s[1].loading,
                        d = eL(i, null == r ? void 0 : r.id),
                        u = (0, C.useState)(function() {
                            return (0, eT.es)(d || "")
                        }),
                        f = u[0],
                        p = u[1],
                        h = (0, C.useState)(function() {
                            return (0, eT.es)(d || "")
                        }),
                        x = h[0],
                        m = h[1],
                        v = (0, eT.gT)({
                            routes: (null == i ? void 0 : i.routes) || [],
                            path: (0, eT.fJ)(f),
                            docId: null == r ? void 0 : r.id
                        }),
                        j = !!v,
                        b = x !== f && !j,
                        y = (0, C.useCallback)(function() {
                            p(x)
                        }, [x]),
                        O = (0, C.useCallback)(function() {
                            if (b) {
                                if (!(null != i && i.id) || !(null != r && r.id)) {
                                    console.error("Missing site or doc");
                                    return
                                }
                                var t = (0, eT.fJ)(f);
                                c({
                                    variables: {
                                        input: {
                                            siteId: i.id,
                                            docId: r.id,
                                            path: t
                                        }
                                    },
                                    refetchQueries: ["GetSite"]
                                }).then(function() {
                                    m(f), p(f)
                                }).catch(function(t) {
                                    e({
                                        status: "error",
                                        title: (0, J.jsx)(a.cC, {
                                            id: "dl5vwx"
                                        }),
                                        description: t.message
                                    }), console.error("[UrlSlugForm] Error setting route", t.message)
                                })
                            }
                        }, [b, null == r ? void 0 : r.id, f, c, null == i ? void 0 : i.id, e]);
                    return n ? (0, J.jsxs)(L.K, {
                        pb: 6,
                        children: [(0, J.jsx)(L.K, {
                            direction: "row",
                            children: (0, J.jsxs)(H.x, {
                                children: [(0, J.jsx)(a.cC, {
                                    id: "dq8+qI"
                                }), " "]
                            })
                        }), (0, J.jsx)(ek.L, {}), (0, J.jsx)(L.K, {
                            spacing: 2,
                            children: (0, J.jsx)(B.U, {
                                spacing: 1,
                                children: (0, J.jsxs)(eu.NI, {
                                    as: "fieldset",
                                    isInvalid: j,
                                    children: [(0, J.jsx)(B.U, {
                                        children: (0, J.jsxs)(eS.B, {
                                            children: [(0, J.jsx)(eE.Ui, {
                                                children: "/"
                                            }), (0, J.jsx)(ep.I, {
                                                isDisabled: l,
                                                bg: "white",
                                                flex: 2,
                                                value: f,
                                                onKeyDown: function(e) {
                                                    "Enter" === e.key && (e.preventDefault(), O())
                                                },
                                                onChange: function(e) {
                                                    p((0, eT.pi)(e.currentTarget.value))
                                                }
                                            }), (0, J.jsx)(eI.R, { in: b,
                                                unmountOnExit: !0,
                                                children: (0, J.jsx)(g.xu, {
                                                    ml: 2,
                                                    children: (0, J.jsxs)(eP.h, {
                                                        w: "100%",
                                                        children: [(0, J.jsx)(G.z, {
                                                            variant: "solid",
                                                            isLoading: l,
                                                            isDisabled: j,
                                                            onClick: O,
                                                            children: (0, J.jsx)(a.cC, {
                                                                id: "tfDRzk"
                                                            })
                                                        }), (0, J.jsx)(G.z, {
                                                            onClick: y,
                                                            children: (0, J.jsx)(a.cC, {
                                                                id: "dEgA5A"
                                                            })
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    }), v ? (0, J.jsx)(eD.J1, {
                                        justifyContent: "flex-end",
                                        alignItems: "flex-start",
                                        children: (0, J.jsx)(H.x, {
                                            fontSize: "xs",
                                            children: (0, J.jsx)(a.cC, {
                                                id: "DQaTdC",
                                                components: {
                                                    0: (0, J.jsx)(eA.r, {
                                                        textDecoration: "underline",
                                                        onClick: function() {
                                                            return t(v.docId, "preview")
                                                        }
                                                    })
                                                }
                                            })
                                        })
                                    }) : (0, J.jsx)(eu.Q6, {
                                        fontSize: "sm",
                                        children: (0, J.jsx)(L.K, {
                                            alignContent: "flex-start",
                                            justifyContent: "space-between",
                                            direction: "row",
                                            w: "100%",
                                            children: (0, J.jsx)(L.K, {
                                                spacing: 1,
                                                children: (0, J.jsx)(H.x, {
                                                    color: "gray.500",
                                                    children: (0, J.jsx)(a.cC, {
                                                        id: "ZMlbHK"
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                })
                            })
                        })]
                    }) : (0, J.jsx)(J.Fragment, {})
                },
                eN = n(34860),
                eZ = function(e) {
                    var t = e.updateDocSetting,
                        n = (0, w.CG)(E.US).metaDescription;
                    (0, ev.ye)("sites");
                    var r = (0, w.CG)(E.yx),
                        i = (0, w.CG)(eg.cn),
                        o = (0, w.CG)(eg.$4),
                        s = (0, C.useState)(function() {
                            return (null == r ? void 0 : r.title) || ""
                        }),
                        c = s[0],
                        l = s[1],
                        d = (0, C.useState)(function() {
                            return n || ""
                        }),
                        u = d[0],
                        f = d[1],
                        p = (0, em.D1_)(),
                        h = (0, P.Z)(p, 1)[0],
                        x = (0, C.useCallback)(function(e) {
                            r && h({
                                variables: {
                                    id: r.id,
                                    title: e
                                }
                            })
                        }, [r, h]),
                        m = (0, eN.Kt)(x, 300),
                        v = (0, C.useCallback)(function(e) {
                            l(e.target.value.substring(0, eO.S8)), m(e.target.value.substring(0, eO.S8))
                        }, [m]),
                        j = (0, C.useCallback)(function(e) {
                            t("metaDescription", e)
                        }, [t]),
                        b = (0, eN.Kt)(j, 300),
                        y = (0, w.CG)(eg.NN),
                        O = null == y ? void 0 : y.previewUrl,
                        k = (0, eb.dU)(null == r ? void 0 : r.organization),
                        S = (0, ej.U)(c || i, k),
                        I = (0, ej.V)(u || o, k);
                    return (0, J.jsxs)(L.K, {
                        spacing: 4,
                        children: [(0, J.jsxs)(eu.NI, {
                            children: [(0, J.jsxs)(B.U, {
                                justifyContent: "center",
                                children: [(0, J.jsx)(ef.l, {
                                    flex: "1",
                                    children: (0, J.jsx)(a.cC, {
                                        id: "MHrjPM"
                                    })
                                }), (0, J.jsx)(ex.W, {
                                    length: c.length || 0,
                                    idealLength: eO.si,
                                    maxLength: eO.S8
                                })]
                            }), (0, J.jsx)(ep.I, {
                                value: c,
                                placeholder: i || M.ag._({
                                    id: "bTzMt5"
                                }),
                                _placeholder: {
                                    opacity: 1,
                                    color: "gray.500"
                                },
                                onKeyDown: function(e) {
                                    "Enter" === e.key && x(c)
                                },
                                onChange: v,
                                "data-title-input": !0
                            })]
                        }), (0, J.jsx)(ez, {}), (0, J.jsxs)(eu.NI, {
                            children: [(0, J.jsxs)(B.U, {
                                justifyContent: "center",
                                children: [(0, J.jsx)(ef.l, {
                                    flex: "1",
                                    children: (0, J.jsx)(a.cC, {
                                        id: "Nu4oKW"
                                    })
                                }), (0, J.jsx)(ex.W, {
                                    length: u.length || 0,
                                    idealLength: eO.cl,
                                    maxLength: eO.Us
                                })]
                            }), (0, J.jsx)(eh.g, {
                                bg: "white",
                                rows: 4,
                                value: u,
                                placeholder: o || M.ag._({
                                    id: "2VBqT4"
                                }),
                                onChange: function(e) {
                                    f(e.target.value.substring(0, eO.Us)), b(e.target.value.substring(0, eO.Us))
                                }
                            })]
                        }), (0, J.jsxs)(g.xu, {
                            p: 4,
                            pt: 3,
                            bg: "gray.100",
                            borderRadius: "md",
                            children: [(0, J.jsxs)(L.K, {
                                spacing: 2,
                                mb: 4,
                                children: [(0, J.jsx)(H.x, {
                                    size: "sm",
                                    children: (0, J.jsx)(a.cC, {
                                        id: "h8sMnd"
                                    })
                                }), (0, J.jsx)(eG, {
                                    title: S,
                                    description: I,
                                    screenshotUrl: O
                                })]
                            }), (0, J.jsxs)(L.K, {
                                spacing: 2,
                                children: [(0, J.jsx)(H.x, {
                                    size: "sm",
                                    children: (0, J.jsx)(a.cC, {
                                        id: "d3xOlk"
                                    })
                                }), (0, J.jsx)(eF, {
                                    title: S,
                                    description: I,
                                    screenshotUrl: O
                                }), (0, J.jsx)(H.x, {
                                    fontSize: "sm",
                                    color: "gray.500",
                                    children: (0, J.jsx)(a.cC, {
                                        id: "gkahtG"
                                    })
                                })]
                            })]
                        }), (0, J.jsx)(eC.V, {
                            label: (0, J.jsx)(a.cC, {
                                id: "SDyz5I"
                            }),
                            segmentEvent: ey.AA.GAMMA_PRO_UPSELL_PAGE_SETUP_REMOVE_WATERMARK,
                            doc: r
                        })]
                    })
                },
                eG = function(e) {
                    var t = e.title,
                        n = e.description,
                        r = e.screenshotUrl;
                    return (0, J.jsxs)(g.xu, {
                        cursor: "not-allowed",
                        bg: "white",
                        border: "1px solid",
                        borderColor: "gray.200",
                        borderRadius: "md",
                        overflow: "hidden",
                        children: [(0, J.jsx)(Y.o, {
                            ratio: 1200 / 630,
                            bg: "gray.300",
                            borderBottom: "1px solid",
                            borderColor: "gray.200",
                            children: (0, J.jsx)(g.xu, {
                                bgColor: "gray.200",
                                bgImage: "url(".concat(r, ")"),
                                backgroundSize: "cover",
                                position: "relative"
                            })
                        }), (0, J.jsxs)(L.K, {
                            px: 4,
                            py: 3,
                            spacing: 1,
                            children: [(0, J.jsx)(H.x, {
                                fontSize: "md",
                                fontWeight: "bold",
                                noOfLines: 2,
                                children: t
                            }), (0, J.jsx)(H.x, {
                                fontSize: "xs",
                                noOfLines: 2,
                                children: n
                            })]
                        })]
                    })
                },
                eF = function(e) {
                    var t = e.title,
                        n = e.description;
                    return (0, J.jsxs)(L.K, {
                        cursor: "not-allowed",
                        bg: "white",
                        border: "1px solid",
                        borderColor: "gray.200",
                        borderRadius: "md",
                        overflow: "hidden",
                        px: 4,
                        py: 3,
                        spacing: 1,
                        pos: "relative",
                        children: [(0, J.jsx)(H.x, {
                            color: "blue.600",
                            fontSize: "lg",
                            lineHeight: 1.3,
                            noOfLines: 2,
                            children: t
                        }), (0, J.jsx)(H.x, {
                            color: "gray.700",
                            fontSize: "sm",
                            noOfLines: 3,
                            children: n
                        })]
                    })
                },
                eU = ["cards", "background", "preview"],
                eW = function(e) {
                    var t = e.editor,
                        n = (0, w.CG)(E.ke),
                        P = (0, O.M)({
                            id: "pageSetupDisclosure"
                        }),
                        D = P.isOpen,
                        A = P.onClose,
                        T = P.onOpen,
                        R = (0, C.useState)(0),
                        _ = R[0],
                        M = R[1];
                    (0, C.useEffect)(function() {
                        var e = function(e) {
                                M(eU.indexOf(e)), T()
                            },
                            t = I.T.on("openPageSetup", e),
                            n = k.pw.on(k.TI.OPEN_PAGE_SETUP, e);
                        return function() {
                            t(), n()
                        }
                    }, [T, A]);
                    var L = (0, S.A)(t),
                        z = (0, C.useCallback)(function(e, n) {
                            null == t || t.commands.updateNestedAttributesAtPos(0, {
                                settings: (0, r.Z)({}, e, n)
                            })
                        }, [t]);
                    return (0, J.jsx)(y.Wk, {
                        isDark: !1,
                        children: (0, J.jsxs)(c.d, {
                            returnFocusOnClose: !1,
                            isOpen: D,
                            placement: "right",
                            onClose: A,
                            size: "md",
                            blockScrollOnMount: !1,
                            children: [(0, J.jsx)(l.Z, {
                                background: "none"
                            }), (0, J.jsxs)(d.s, {
                                "data-testid": "page-setup-drawer",
                                onKeyDown: L,
                                motionProps: {
                                    variants: {
                                        enter: {
                                            x: "0%",
                                            transition: {
                                                duration: .2
                                            }
                                        },
                                        exit: {
                                            x: "100%",
                                            transition: {
                                                duration: .1
                                            }
                                        }
                                    }
                                },
                                children: [(0, J.jsx)(u.o, {}), (0, J.jsx)(f.x, {
                                    children: (0, J.jsx)(a.cC, {
                                        id: "fvaOtb"
                                    })
                                }), (0, J.jsx)(p.f, {
                                    overflowX: "hidden",
                                    children: (0, J.jsxs)(h.m, {
                                        variant: "soft-rounded",
                                        size: "sm",
                                        isFitted: !0,
                                        isLazy: !0,
                                        index: _,
                                        onChange: M,
                                        children: [(0, J.jsxs)(x.t, {
                                            children: [(0, J.jsxs)(m.O, {
                                                children: [(0, J.jsx)(g.xu, {
                                                    mr: 2,
                                                    children: (0, J.jsx)(b.G, {
                                                        icon: s.s2
                                                    })
                                                }), (0, J.jsx)(a.cC, {
                                                    id: "Ccpbzh"
                                                })]
                                            }), (0, J.jsxs)(m.O, {
                                                children: [(0, J.jsx)(g.xu, {
                                                    mr: 2,
                                                    children: (0, J.jsx)(b.G, {
                                                        icon: o.UH
                                                    })
                                                }), (0, J.jsx)(a.cC, {
                                                    id: "GtJbUa"
                                                })]
                                            }), (0, J.jsxs)(m.O, {
                                                children: [(0, J.jsx)(g.xu, {
                                                    mr: 2,
                                                    children: (0, J.jsx)(b.G, {
                                                        icon: i.g4
                                                    })
                                                }), (0, J.jsx)(a.cC, {
                                                    id: "rdUucN"
                                                })]
                                            })]
                                        }), (0, J.jsxs)(v.n, {
                                            children: [(0, J.jsx)(j.x, {
                                                p: 2,
                                                mt: 4,
                                                children: (0, J.jsx)(et, {
                                                    editor: t,
                                                    updateDocSetting: z
                                                }, n)
                                            }), (0, J.jsx)(j.x, {
                                                p: 2,
                                                mt: 4,
                                                children: (0, J.jsx)(ed, {
                                                    editor: t,
                                                    updateDocSetting: z
                                                }, n)
                                            }), (0, J.jsx)(j.x, {
                                                p: 2,
                                                mt: 4,
                                                children: (0, J.jsx)(eZ, {
                                                    editor: t,
                                                    updateDocSetting: z
                                                }, n)
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                }
        },
        46231: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return eh
                }
            });
            var r = n(12741),
                i = n(60697),
                o = n(26673),
                s = n(55452),
                a = n(9088),
                c = n(91012),
                l = n(30893),
                d = n(53738),
                u = n(94301),
                f = n(40771),
                p = n(82904),
                h = n(95258),
                x = n(8283),
                m = n(93319),
                g = n(4036),
                v = n(49929),
                j = n(55966),
                b = n(2784),
                y = n(56317),
                C = n(98875),
                O = n(75085),
                w = n(30118),
                k = n(32333),
                S = n(18748),
                E = n(35330),
                I = n(16092),
                P = n(92779),
                D = n(27901),
                A = n(10710),
                T = n(59734),
                R = n(95235),
                _ = n(81333),
                M = n(49626),
                L = n(46973),
                z = n(55479),
                N = n(20010),
                Z = n(56915),
                G = n(48273),
                F = n(92619),
                U = n(64827),
                W = n(2167),
                H = n(11919),
                V = n(72360),
                B = n(48322),
                q = n(71354),
                K = n(76360),
                Y = n(75342),
                Q = n(36895),
                X = n(40110),
                J = n(80353),
                $ = n(5632),
                ee = n(24021),
                et = n(23313),
                en = n(42879),
                er = n(93589),
                ei = n(52322);

            function eo(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function es(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eo(Object(n), !0).forEach(function(t) {
                        (0, R.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eo(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ea = function(e) {
                    var t, n = e.title,
                        r = e.site,
                        i = e.docId,
                        o = "/".concat((0, er.IR)(n || "untitled"));
                    return null != r && null !== (t = r.routes) && void 0 !== t && t.find(function(e) {
                        return e.path === o
                    }) && (o = "".concat(o, "-").concat(i.slice(0, 4))), o
                },
                ec = {
                    variant: "outline",
                    transitionProperty: "all",
                    transitionDuration: "normal",
                    cursor: "pointer",
                    boxShadow: "none",
                    tabIndex: 0,
                    _hover: {
                        shadow: "lg",
                        borderColor: "trueblue.300",
                        bg: "trueblue.50"
                    },
                    _focusVisible: {
                        boxShadow: "none",
                        outline: "none"
                    },
                    _focus: {
                        boxShadow: "outline"
                    }
                },
                el = function(e) {
                    var t = e.isOpen,
                        n = e.onClose,
                        r = e.doc,
                        i = e.onCreateSiteClick,
                        o = (0, A.SE)().currentWorkspace,
                        a = (0, et.qbt)(),
                        l = (0, _.Z)(a, 1)[0],
                        d = (0, b.useState)(!1),
                        u = d[0],
                        f = d[1],
                        p = (0, et.VP0)(),
                        h = (0, _.Z)(p, 1)[0],
                        g = (0, et.bBo)({
                            variables: {
                                workspaceId: null == o ? void 0 : o.id
                            },
                            skip: !(null != o && o.id)
                        }),
                        y = g.data,
                        C = g.loading,
                        w = (0, z.p)(),
                        k = (0, $.useRouter)().push,
                        S = null == y ? void 0 : y.sites,
                        E = r && r.orgAccess !== et.y3$.Manage,
                        I = (0, b.useCallback)(function(e) {
                            f(!0);
                            var t = null == S ? void 0 : S.find(function(t) {
                                    return t.id === e
                                }),
                                n = r.id,
                                i = ea({
                                    title: r.title,
                                    site: t,
                                    docId: n
                                });
                            h({
                                variables: {
                                    id: n,
                                    orgAccess: et.y3$.Manage,
                                    themeId: null
                                }
                            }).then(function() {
                                l({
                                    variables: {
                                        input: {
                                            siteId: e,
                                            docId: n,
                                            path: i
                                        }
                                    },
                                    refetchQueries: ["GetSite"]
                                }).then(function() {
                                    var t = (0, en.as)(e, n);
                                    console.debug("[PublishToWebModal] Doc added to site. Adding route then navigating to editor", n), w({
                                        position: "top",
                                        title: (0, ei.jsx)(s.cC, {
                                            id: "oMgC5V"
                                        }),
                                        description: (0, ei.jsx)(s.cC, {
                                            id: "/qBkEJ"
                                        }),
                                        status: "success",
                                        duration: 5e3
                                    }), k(t)
                                }).catch(function(e) {
                                    w({
                                        position: "top",
                                        title: "Error",
                                        description: e.message,
                                        status: "error",
                                        duration: 5e3
                                    }), f(!1)
                                }).finally(function() {
                                    f(!1)
                                })
                            }).catch(function(e) {
                                w({
                                    position: "top",
                                    title: "Error",
                                    description: e.message,
                                    status: "error",
                                    duration: 5e3
                                }), f(!1)
                            })
                        }, [r.id, r.title, k, l, S, w, h]),
                        P = C || u;
                    return (0, ei.jsx)(j.Wk, {
                        isDark: !1,
                        children: (0, ei.jsxs)(N.u_, {
                            isOpen: t,
                            onClose: n,
                            size: "2xl",
                            children: [(0, ei.jsx)(Z.Z, {}), (0, ei.jsxs)(G.h, {
                                children: [(0, ei.jsx)(F.x, {
                                    children: (0, ei.jsx)(s.cC, {
                                        id: "TMYPtj"
                                    })
                                }), (0, ei.jsx)(U.o, {}), (0, ei.jsxs)(W.f, {
                                    position: "relative",
                                    children: [P && (0, ei.jsx)(H.k, {
                                        w: "100",
                                        h: "400px",
                                        maxH: "30vh",
                                        children: (0, ei.jsx)(ee.AA, {})
                                    }), E && (0, ei.jsxs)(V.b, {
                                        status: "warning",
                                        mb: 4,
                                        children: [(0, ei.jsx)(B.z, {}), (0, ei.jsx)(s.cC, {
                                            id: "FOQwny",
                                            values: {
                                                GAMMA_ARTIFACT_PROPER_NOUN: O.Yc
                                            }
                                        })]
                                    }), !P && (0, ei.jsxs)(q.K, {
                                        spacing: 4,
                                        children: [S && S.length > 0 && (0, ei.jsxs)(ei.Fragment, {
                                            children: [(0, ei.jsx)(c.x, {
                                                fontSize: "lg",
                                                fontWeight: 600,
                                                children: (0, ei.jsx)(s.cC, {
                                                    id: "/yFyyN"
                                                })
                                            }), null == S ? void 0 : S.map(function(e) {
                                                return (0, ei.jsx)(K.Z, es(es({
                                                    onClick: function() {
                                                        return I(e.id)
                                                    },
                                                    onKeyPress: function(t) {
                                                        "Enter" === t.key && I(e.id)
                                                    }
                                                }, ec), {}, {
                                                    children: (0, ei.jsx)(Y.e, {
                                                        children: (0, ei.jsxs)(x.U, {
                                                            children: [(0, ei.jsxs)(q.K, {
                                                                spacing: 0,
                                                                children: [(0, ei.jsxs)(x.U, {
                                                                    children: [e.faviconUrl && (0, ei.jsx)(Q.E, {
                                                                        w: "4",
                                                                        src: e.faviconUrl
                                                                    }), (0, ei.jsx)(c.x, {
                                                                        fontWeight: "600",
                                                                        children: e.name
                                                                    })]
                                                                }), (0, ei.jsx)(c.x, {
                                                                    fontSize: "sm",
                                                                    color: "gray.500",
                                                                    children: (0, ei.jsx)(s.cC, {
                                                                        id: "MoI916",
                                                                        values: {
                                                                            GAMMA_ARTIFACT_PROPER_NOUN: O.Yc
                                                                        }
                                                                    })
                                                                })]
                                                            }), (0, ei.jsx)(m.L, {}), (0, ei.jsx)(v.G, {
                                                                icon: L.eF
                                                            })]
                                                        })
                                                    })
                                                }), e.id)
                                            }), (0, ei.jsxs)(x.U, {
                                                children: [(0, ei.jsx)(X.i, {}), (0, ei.jsx)(c.x, {
                                                    fontSize: "sm",
                                                    color: "gray.500",
                                                    children: (0, ei.jsx)(s.cC, {
                                                        id: "ZAVklK"
                                                    })
                                                }), (0, ei.jsx)(X.i, {})]
                                            })]
                                        }), (0, ei.jsx)(K.Z, es(es({
                                            onClick: function() {
                                                i()
                                            },
                                            onKeyPress: function(e) {
                                                "Enter" === e.key && i()
                                            }
                                        }, ec), {}, {
                                            children: (0, ei.jsx)(Y.e, {
                                                children: (0, ei.jsxs)(x.U, {
                                                    children: [(0, ei.jsxs)(q.K, {
                                                        spacing: 0,
                                                        children: [(0, ei.jsx)(c.x, {
                                                            fontWeight: "600",
                                                            children: (0, ei.jsx)(s.cC, {
                                                                id: "xaUIb2"
                                                            })
                                                        }), (0, ei.jsx)(x.U, {
                                                            children: (0, ei.jsx)(c.x, {
                                                                fontSize: "sm",
                                                                color: "gray.500",
                                                                children: (0, ei.jsx)(s.cC, {
                                                                    id: "pdnqNS",
                                                                    values: {
                                                                        GAMMA_ARTIFACT_PROPER_NOUN: O.Yc
                                                                    }
                                                                })
                                                            })
                                                        })]
                                                    }), (0, ei.jsx)(m.L, {}), (0, ei.jsx)(v.G, {
                                                        icon: M.r8
                                                    })]
                                                })
                                            })
                                        }))]
                                    })]
                                }), (0, ei.jsx)(J.m, {})]
                            })]
                        })
                    })
                },
                ed = n(31912),
                eu = n(23015),
                ef = n(25298),
                ep = n(6985),
                eh = function(e) {
                    var t, n, R = e.doc,
                        _ = e.showAnalytics,
                        M = e.showSharePublic,
                        L = void 0 === M || M,
                        z = e.showEmbed,
                        N = void 0 === z || z,
                        Z = (0, w.M)({
                            id: "titleModalDisclosure"
                        });
                    Z.isOpen, Z.onOpen, Z.onClose;
                    var G = (0, w.M)({
                            id: "analyticsModalDisclosure"
                        }),
                        F = G.isOpen,
                        U = G.onClose,
                        W = G.onOpen,
                        H = (0, E.y)(),
                        V = H.isSharePanelOpen,
                        B = H.onSharePanelOpen,
                        q = H.onSharePanelClose,
                        K = H.view,
                        Y = H.setView,
                        Q = (0, w.M)({
                            id: "publishToWeb"
                        }),
                        X = Q.isOpen,
                        J = Q.onClose,
                        $ = Q.onOpen,
                        ee = (0, w.M)({
                            id: "create-site-modal"
                        }),
                        et = ee.isOpen,
                        en = ee.onOpen,
                        er = ee.onClose,
                        eo = (0, C.ye)("sites"),
                        es = (0, A.SE)(),
                        ea = es.user,
                        ec = es.currentWorkspace,
                        eh = (0, T._i)().editor,
                        ex = (0, A.py)("view", R),
                        em = (0, A.py)("edit", R),
                        eg = (0, A.py)("manage", R),
                        ev = (0, k.z$)(),
                        ej = (0, I.ei)({
                            showSharePublic: L,
                            showEmbed: N
                        });
                    (0, b.useEffect)(function() {
                        return ep.T.on("openSharePanel", function(e) {
                            var t = e.view;
                            B(), Y(t)
                        })
                    }, [B, Y]);
                    var eb = (0, b.useCallback)(function() {
                        null == ev || ev.track(k.AA.DOC_ANALYTICS_VIEWED, {
                            docId: null == R ? void 0 : R.id,
                            source: "share_panel",
                            type: eg ? "full" : "personal"
                        }), W()
                    }, [ev, eg, null == R ? void 0 : R.id, W]);
                    if (!ex || !ea || !R) return null;
                    var ey = R.collaborators || [],
                        eC = R.channels || [],
                        eO = (0, ed.Hs)((0, r.Z)(ey).sort(function(e, t) {
                            return e.user.id === ea.id ? -1 : t.user.id === ea.id ? 1 : 0
                        }).map(function(e) {
                            return e.user.id === ea.id ? "You" : e.user.displayName || ""
                        }).concat(R.orgAccess ? eC.map(function(e) {
                            return e.name || ""
                        }) : [])),
                        ew = (0, P.h_)(R, ea),
                        ek = ew ? (0, P.Xp)()[ew] : null,
                        eS = (0, P.Gi)(R, ec),
                        eE = eo && !R.site && eg;
                    return null === ek ? (console.error("[SharePanel] Unknown VisibilityValue for doc", R), null) : (0, ei.jsxs)(ei.Fragment, {
                        children: [(0, ei.jsxs)(a.v, {
                            children: [(0, ei.jsx)(j.kH, {
                                label: (0, ei.jsxs)(ei.Fragment, {
                                    children: [eS && (0, ei.jsx)(c.x, {
                                        fontWeight: "bold",
                                        children: (0, ei.jsx)(s.cC, {
                                            id: "OS9x6e",
                                            values: {
                                                GAMMA_ARTIFACT_PROPER_NOUN: O.Yc
                                            }
                                        })
                                    }), ek.title(null == R ? void 0 : null === (t = R.organization) || void 0 === t ? void 0 : t.name) ? (0, ei.jsx)(c.x, {
                                        children: ek.title(null == R ? void 0 : null === (n = R.organization) || void 0 === n ? void 0 : n.name)
                                    }) : null, (0, ei.jsx)(c.x, {
                                        fontSize: "xs",
                                        children: ek.subtitle ? ek.subtitle(eO || "") : ""
                                    })]
                                }),
                                children: (0, ei.jsx)(l.j, {
                                    onFocus: function(e) {
                                        return e.preventDefault()
                                    },
                                    as: ef.h,
                                    "data-guider-highlight": "share-button",
                                    onMouseDown: eu.br,
                                    icon: (0, ei.jsx)(d.xu, {
                                        children: (0, ei.jsx)(S.aA, {
                                            visibility: ek,
                                            isFromOtherOrg: eS
                                        })
                                    }),
                                    rightIcon: (0, ei.jsx)(v.G, {
                                        "aria-label": "",
                                        icon: o.pt
                                    }),
                                    isDisabled: !em,
                                    children: (0, ei.jsx)(s.cC, {
                                        id: "Z8lGw6"
                                    })
                                })
                            }), (0, ei.jsx)(u.h, {
                                children: (0, ei.jsxs)(f.q, {
                                    zIndex: "popover",
                                    maxH: "100vh",
                                    minW: "280px",
                                    overflow: "auto",
                                    children: [ej.map(function(e) {
                                        return (0, ei.jsx)(p.s, {
                                            onClick: function() {
                                                ep.T.emit("openSharePanel", {
                                                    view: e.viewKey
                                                })
                                            },
                                            icon: (0, ei.jsx)(v.G, {
                                                icon: e.icon,
                                                fixedWidth: !0
                                            }),
                                            children: e.label
                                        }, e.viewKey)
                                    }), eE && (0, ei.jsxs)(ei.Fragment, {
                                        children: [(0, ei.jsx)(h.R, {}), (0, ei.jsx)(p.s, {
                                            icon: (0, ei.jsx)(v.G, {
                                                icon: i.g4
                                            }),
                                            onClick: $,
                                            children: (0, ei.jsxs)(x.U, {
                                                children: [(0, ei.jsx)(s.cC, {
                                                    id: "TMYPtj"
                                                }), (0, ei.jsx)(m.L, {}), (0, ei.jsx)(g.C, {
                                                    colorScheme: "green",
                                                    children: "Beta"
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })]
                        }), eE && X && (0, ei.jsx)(el, {
                            isOpen: X,
                            onClose: J,
                            doc: R,
                            onCreateSiteClick: en
                        }), (0, ei.jsx)(S.WQ, {
                            doc: R,
                            editor: eh,
                            isSharePanelOpen: V,
                            onSharePanelOpen: B,
                            onSharePanelClose: q,
                            onAnalyticsPanelOpen: eb,
                            view: K,
                            setView: Y,
                            showAnalytics: void 0 === _ || _,
                            showSharePublic: L,
                            showEmbed: N
                        }), F && (0, ei.jsx)(y.r, {
                            doc: R,
                            onSharePanelOpen: B,
                            onAnalyticsPanelClose: U,
                            isAnalyticsPanelOpen: F,
                            mode: eg ? "full" : "personal"
                        }), eE && et && (0, ei.jsx)(D.M, {
                            isOpen: et,
                            onClose: er,
                            existingDocId: R.id
                        })]
                    })
                }
        },
        10939: function(e, t, n) {
            n.d(t, {
                OM: function() {
                    return w
                },
                Zd: function() {
                    return O
                },
                rU: function() {
                    return k
                }
            });
            var r = n(55452),
                i = n(55479),
                o = n(11919),
                s = n(12221),
                a = n(91012),
                c = n(54073),
                l = n.n(c),
                d = n(18149),
                u = n.n(d),
                f = n(2784),
                p = n(98621),
                h = n.n(p),
                x = n(53923),
                m = n(46358),
                g = n(30341),
                v = n(62141),
                j = n(95472),
                b = n(59131),
                y = n(17477),
                C = n(52322),
                O = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "body",
                        n = (0, m.TL)(),
                        r = (0, g.As)("editor"),
                        i = (0, x.nO)(),
                        o = (0, m.CG)(v.yn, u()),
                        s = (0, m.CG)(v.k8, u()),
                        a = !!(null == s ? void 0 : s.pos);
                    (0, f.useEffect)(function() {
                        if (e) {
                            var t = l()(function() {
                                    o && n((0, v.Qx)({
                                        attached: !1
                                    }))
                                }, 500, {
                                    leading: !0
                                }),
                                r = (0, y.B$)({
                                    topOffset: 100,
                                    requiredCookie: "spotlightScrollDebug=true"
                                });
                            return document.addEventListener("wheel", t, !0),
                                function() {
                                    r(), t.cancel(), document.removeEventListener("wheel", t, !0)
                                }
                        }
                    }, [e, n, o, a, t]);
                    var c = (0, m.CG)(v.ks, u());
                    (0, f.useEffect)(function() {
                        if (e && !c) {
                            var t = l()(function() {
                                    if (!r.inProgress) {
                                        var t = (0, j.lI)(e, 100, i);
                                        if (!t) {
                                            console.debug("[useHandleScrollAndSelectionChange][handleScroll] Unable to find topPosPct.");
                                            return
                                        }
                                        n((0, v.Us)(t))
                                    }
                                }, 250, {
                                    trailing: !0,
                                    maxWait: 500
                                }),
                                o = l()(function() {
                                    if (!(e.state.selection instanceof b.c)) {
                                        var t = document.querySelector(r.scrollSelector || ""),
                                            i = null == t ? void 0 : t.getBoundingClientRect(),
                                            o = e.state.selection.from,
                                            s = (0, j.Sh)(e, o);
                                        if (!t || !i || !s) {
                                            console.debug("[useHandleScrollAndSelectionChange][handleSelectionChange] missing data", {
                                                domNodeToUse: s
                                            });
                                            return
                                        }
                                        var a = s.getBoundingClientRect(),
                                            c = parseFloat(((e.view.coordsAtPos(o).top - a.y) / a.height).toFixed(2));
                                        n((0, v.Us)({
                                            pos: o,
                                            pct: c
                                        }))
                                    }
                                }, 250, {
                                    trailing: !0,
                                    maxWait: 500
                                });
                            return t(), e.on("selectionUpdate", o), window.addEventListener("scroll", t, !0),
                                function() {
                                    e.off("selectionUpdate", o), window.removeEventListener("scroll", t, !0)
                                }
                        }
                    }, [e, n, r, c, i])
                },
                w = function() {
                    var e = (0, i.p)(),
                        t = (0, m.TL)();
                    return (0, f.useCallback)(function(n) {
                        var i = n.collaborator,
                            c = n.localIsFollowing,
                            l = n.localIsAttached,
                            d = {
                                attached: !0
                            };
                        c ? l ? d.following = null : e.closeAll() : (d.following = i.sessionId, e.closeAll(), e({
                            duration: 2e3,
                            position: "bottom",
                            render: function() {
                                return (0, C.jsxs)(o.k, {
                                    bg: "gray.50",
                                    p: 3,
                                    px: 6,
                                    align: "center",
                                    borderRadius: "md",
                                    shadow: "md",
                                    children: [(0, C.jsx)(s.q, {
                                        size: "sm",
                                        src: i.profileImageUrl,
                                        border: "solid 2px ".concat(i.color),
                                        color: h()(i.color).isDark() ? "white" : "black",
                                        bg: i.color
                                    }), (0, C.jsx)(a.x, {
                                        ml: 2,
                                        children: (0, C.jsx)(r.cC, {
                                            id: "lULvWe",
                                            values: {
                                                0: i.name
                                            }
                                        })
                                    })]
                                })
                            }
                        })), console.debug("[CollaboratorsPanel] Clicked on collaborator ".concat(i.name, ". Setting following to ").concat(d)), t((0, v.Qx)(d))
                    }, [e, t])
                },
                k = function(e) {
                    var t = e.editor,
                        n = e.collaborators,
                        r = e.user,
                        i = (0, f.useRef)(!1),
                        o = w(),
                        s = new URLSearchParams(window.location.search),
                        a = s.get("following_id"),
                        c = s.get("follow_on_start");
                    (0, f.useEffect)(function() {
                        if (!i.current && c && (null == r ? void 0 : r.id) !== a && t) {
                            var e = n.find(function(e) {
                                return e.id === a
                            });
                            e && (o({
                                collaborator: e,
                                localIsAttached: !1,
                                localIsFollowing: !1
                            }), i.current = !0)
                        }
                    }, [a, c, t, n, r, o])
                }
        },
        34684: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return y
                },
                P: function() {
                    return b
                }
            });
            var r = n(55452),
                i = n(55479),
                o = n(87202),
                s = n(2784),
                a = n(46358),
                c = n(30341),
                l = n(47592),
                d = n(34264),
                u = n(42734),
                f = n(47191),
                p = n(62141),
                h = n(95472),
                x = n(60521),
                m = n(17477),
                g = n(52322),
                v = (0, o.ZP)("mod+S"),
                j = (0, o.ZP)("mod+shift+O"),
                b = function() {
                    var e = (0, i.p)();
                    (0, s.useEffect)(function() {
                        var t = function(t) {
                                v(t) && (t.preventDefault(), e.isActive("save_toast") || e({
                                    id: "save_toast",
                                    title: (0, g.jsx)(r.cC, {
                                        id: "4ebE67"
                                    }),
                                    status: "success",
                                    duration: 5e3,
                                    isClosable: !0
                                }))
                            },
                            n = (0, m.B$)({
                                requiredCookie: "cardCollapseDebug=true"
                            });
                        return window.addEventListener("keydown", t),
                            function() {
                                null == n || n(), window.removeEventListener("keydown", t)
                            }
                    }, [e])
                },
                y = function() {
                    var e = (0, a.qr)(),
                        t = (0, a.TL)(),
                        n = (0, x._i)().editor;
                    (0, s.useEffect)(function() {
                        if (n) {
                            var r = function(r) {
                                if (j(r)) {
                                    r.preventDefault();
                                    var i = e.getState(),
                                        o = i.TipTap,
                                        s = o.cardIdMap,
                                        a = o.cardIds,
                                        c = o.memoState.expandedCards,
                                        d = (0, p.i2)(i),
                                        u = a.reduce(function(e, t) {
                                            var n = !0 === c[t],
                                                r = s.parents[t] || [],
                                                i = r.length > 0,
                                                o = !d || r.includes(d);
                                            return i && o && (e.cardIds.push(t), e.total++, e.expanded += n ? 1 : 0), e
                                        }, {
                                            total: 0,
                                            expanded: 0,
                                            cardIds: []
                                        }),
                                        f = u.total,
                                        h = u.expanded,
                                        x = u.cardIds;
                                    t((0, p.bj)({
                                        disable: !0
                                    })), setTimeout(function() {
                                        t((0, p.bj)({
                                            disable: !1
                                        }))
                                    }, 100);
                                    var m = f === h;
                                    C(n, 100, !m), (0, l.Nn)(x, m)
                                }
                            };
                            return window.addEventListener("keydown", r),
                                function() {
                                    window.removeEventListener("keydown", r)
                                }
                        }
                    }, [t, e, n])
                },
                C = function(e, t, n) {
                    for (var r = (0, c.cC)("editor"), i = void 0, o = 200; o > 0; o -= 25) {
                        var s, a = (0, h.Je)(e, r.scrollSelector, o);
                        if (null !== (s = a.pos) && void 0 !== s && s.pos) {
                            var l = void 0;
                            e.state.doc.nodeAt(a.pos.pos) ? l = a.pos.pos : e.state.doc.nodeAt(a.pos.inside) && (l = a.pos.inside), l && (!i || l > i) && (i = l)
                        }
                    }
                    if (!i) {
                        console.warn("[pinPageDuringAnimation] No result for getTopCenterIshNode");
                        return
                    }
                    var d = O(e, i, n);
                    if (!d) {
                        console.warn("[pinPageDuringAnimation] No element for getElementToPin");
                        return
                    }(0, m.wO)({
                        element: d,
                        requiredCookie: "cardCollapseDebug=true"
                    });
                    var u = +new Date,
                        f = r.scroller.scrollTop,
                        p = (0, m.LY)(d, r.scrollSelector),
                        x = f - p,
                        g = x < 0 ? 0 : Math.max(x + 200, 0);
                    ! function e() {
                        if (d) {
                            var n = (0, m.LY)(d, r.scrollSelector);
                            r.scroller.scroll({
                                top: f + (n - p - g)
                            }), +new Date - u < t && requestAnimationFrame(e)
                        }
                    }()
                },
                O = function(e, t, n) {
                    var r, i = e.state.doc.resolve(t),
                        o = e.state.doc.nodeAt(t),
                        s = (0, h.Sh)(e, t);
                    if (!o) {
                        console.warn("[getElementToPin] nodeAt null for $pos", i);
                        return
                    }
                    var a = (0, h.nv)(i, function() {
                        return !0
                    }).reverse();
                    for (a.push({
                            start: i.start(i.depth + 1),
                            pos: t,
                            depth: i.depth,
                            node: o
                        }); a.length;) {
                        var c = a.shift();
                        if (c) {
                            var l = (0, d.KH)(c.node),
                                p = (0, u.SA)(c.node),
                                x = (0, f.CU)(c.node),
                                m = l || c.node.isAtom ? c.pos : c.start;
                            if (s = (0, h.Sh)(e, m), !n && l && c.depth > 2 || p || x) break
                        }
                    }
                    for (;
                        (null === (r = s) || void 0 === r ? void 0 : r.offsetParent) === null && s.parentElement;) s = s.parentElement;
                    return s
                }
        },
        28615: function(e, t, n) {
            n.d(t, {
                j: function() {
                    return h
                }
            });
            var r = n(5632),
                i = n(2784),
                o = n(1368),
                s = n(46358),
                a = n(41261),
                c = n(28463),
                l = n(62141),
                d = n(26087),
                u = n(43227),
                f = n(59734),
                p = n(51823),
                h = function() {
                    var e = (0, f._i)().editor,
                        t = (0, r.useRouter)(),
                        n = (0, s.qr)();
                    (0, i.useEffect)(function() {
                        if (e) {
                            t.beforePopState(function(e) {
                                return !e.as.startsWith("/docs/")
                            });
                            var r = o.fI.on("changed", function(t) {
                                var r, i = (0, p.sY)(t.url).cardId,
                                    o = n.getState(),
                                    s = (0, l.gh)(o);
                                if (console.debug("[useHandleCardHash][handleURLChange]", {
                                        payload: t,
                                        cardId: i
                                    }), s === d.q.DOC_VIEW && null !== (r = t.state) && void 0 !== r && r.fromPos && "pop" === t.method) {
                                    var u = t.state,
                                        f = u.fromPos,
                                        h = u.fromPct;
                                    e.chain().scrollToPositionInCard(f, h || void 0).command(function(e) {
                                        var t = e.tr;
                                        return (0, c.B0)(f)(t), !0
                                    }).run()
                                } else {
                                    var x = (0, l.xb)(o)[0];
                                    (0, a.YS)({
                                        cardId: i || x,
                                        editor: e
                                    })
                                }
                            });
                            return function() {
                                t.beforePopState(function() {
                                    return !0
                                }), r()
                            }
                        }
                    }, [e, t, n]), (0, i.useEffect)(function() {
                        if (e) {
                            var t = (0, p.sY)(window.location.href).cardId;
                            t && (0, u.D)({
                                cardId: t,
                                method: "replace"
                            })
                        }
                    }, [e])
                }
        },
        60521: function(e, t, n) {
            n.d(t, {
                dM: function() {
                    return le
                },
                Ur: function() {
                    return cV
                },
                nz: function() {
                    return lf
                },
                _i: function() {
                    return tV._i
                }
            });
            var r, i, o, s, a = n(95235),
                c = n(93812),
                l = n(55452),
                d = n(87254),
                u = n(11919),
                f = n(91012),
                p = n(53738),
                h = n(34676),
                x = n(49929),
                m = n(55966),
                g = n(97729),
                v = n.n(g),
                j = n(2784),
                b = n(43997),
                y = n(23313),
                C = n(43602),
                O = n(64288),
                w = n(87796),
                k = n(11197),
                S = n(81333),
                E = n(29106),
                I = n(75944),
                P = n(54728),
                D = n(51434),
                A = n(67887),
                T = n(91333),
                R = n(83897),
                _ = n(96412),
                M = n(13089),
                L = n(41701),
                z = n(90129),
                N = n(29017),
                Z = n(48200),
                G = n(30733),
                F = n.n(G),
                U = n(12436),
                W = n.n(U),
                H = function(e) {
                    (0, z.Z)(r, e);
                    var t, n = (t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, n = (0, Z.Z)(r);
                        if (t) {
                            var i = (0, Z.Z)(this).constructor;
                            e = Reflect.construct(n, arguments, i)
                        } else e = n.apply(this, arguments);
                        return (0, N.Z)(this, e)
                    });

                    function r() {
                        var e;
                        return (0, _.Z)(this, r), e = n.call(this), (0, a.Z)((0, L.Z)(e), "throttled", void 0), e.throttled = W()(function(t) {
                            e.emit("move", t)
                        }, 200, {
                            leading: !0
                        }), document.addEventListener("mousemove", e.throttled), e
                    }
                    return (0, M.Z)(r, [{
                        key: "cleanup",
                        value: function() {
                            document.removeEventListener("mousemove", this.throttled)
                        }
                    }]), r
                }(n(98555).v),
                V = F()(function() {
                    return new H
                }),
                B = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = V(),
                        r = (0, j.useState)(!1),
                        i = r[0],
                        o = r[1],
                        s = (0, j.useRef)(t);
                    return (0, j.useEffect)(function() {
                        s.current = t
                    }, [t]), (0, j.useEffect)(function() {
                        return n.on("move", function(t) {
                            s.current || o(e(t))
                        })
                    }, [n, e]), i
                },
                q = n(46358),
                K = n(62141),
                Y = n(93858),
                Q = n(49392),
                X = n(8812),
                J = n(17815),
                $ = n(35232),
                ee = n(63613),
                et = n(80891),
                en = n(61374),
                er = n(8283),
                ei = n(96530),
                eo = n(71354),
                es = n(50390),
                ea = n(5766),
                ec = n(40110),
                el = n(45650),
                ed = n(52322),
                eu = function(e) {
                    var t = e.label,
                        n = e.shortcuts;
                    return (0, ed.jsxs)(er.U, {
                        children: [n.map(function(e, t) {
                            return (0, ed.jsx)(ei.T, {
                                padding: 1,
                                children: e
                            }, t)
                        }), (0, ed.jsx)(f.x, {
                            fontSize: "sm",
                            fontWeight: "medium",
                            whiteSpace: "nowrap",
                            children: t
                        })]
                    })
                },
                ef = function(e) {
                    var t = e.onClose;
                    return (0, ed.jsx)(p.xu, {
                        children: (0, ed.jsxs)(eo.K, {
                            spacing: 6,
                            children: [(0, ed.jsxs)(eo.K, {
                                spacing: 1,
                                children: [(0, ed.jsxs)(er.U, {
                                    color: "gray.500",
                                    children: [(0, ed.jsx)(x.G, {
                                        icon: E.UF
                                    }), " ", (0, ed.jsx)(es.X, {
                                        size: "xs",
                                        fontWeight: "normal",
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "h7MgpO"
                                        })
                                    })]
                                }), (0, ed.jsx)(es.X, {
                                    size: "md",
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "UodEcE"
                                    })
                                })]
                            }), (0, ed.jsxs)(ea.M, {
                                spacing: 3,
                                columns: 1,
                                children: [(0, ed.jsx)(eu, {
                                    label: (0, ed.jsx)(l.cC, {
                                        id: "9xCxY6"
                                    }),
                                    shortcuts: [(0, ed.jsx)(x.G, {
                                        icon: en.ac
                                    }, "left"), (0, ed.jsx)(x.G, {
                                        icon: et.eF
                                    }, "right")]
                                }), (0, ed.jsx)(eu, {
                                    label: (0, ed.jsx)(l.cC, {
                                        id: "IkakN2"
                                    }),
                                    shortcuts: ["Esc"]
                                }), (0, ed.jsx)(eu, {
                                    label: (0, ed.jsx)(l.cC, {
                                        id: "K0Oq/D"
                                    }),
                                    shortcuts: ["R"]
                                }), (0, ed.jsx)(ec.i, {
                                    borderColor: "gray.300"
                                }), (0, ed.jsx)(eu, {
                                    label: (0, ed.jsx)(l.cC, {
                                        id: "CgmvBu"
                                    }),
                                    shortcuts: ["S"]
                                }), (0, ed.jsx)(eu, {
                                    label: (0, ed.jsx)(l.cC, {
                                        id: "/5i2oX"
                                    }),
                                    shortcuts: [(0, ed.jsx)(x.G, {
                                        icon: ee.FP
                                    }, "up"), (0, ed.jsx)(x.G, {
                                        icon: $.r5
                                    }, "down")]
                                }), (0, ed.jsx)(eu, {
                                    label: (0, ed.jsx)(l.cC, {
                                        id: "rEj/lx"
                                    }),
                                    shortcuts: ["Enter"]
                                })]
                            }), (0, ed.jsx)(el.z, {
                                size: "sm",
                                variant: "solid",
                                onClick: t,
                                children: (0, ed.jsx)(l.cC, {
                                    id: "76gPWk"
                                })
                            })]
                        })
                    }, "coach-bar")
                };

            function ep(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function eh(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ep(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ep(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ex = (0, j.memo)(function() {
                var e = (0, I.q)(),
                    t = e.isOpen,
                    n = e.onToggle,
                    r = e.onClose,
                    i = (0, Y._)(Q.H.hasSeenCoachBar, !1),
                    o = (0, S.Z)(i, 2),
                    s = o[0],
                    a = o[1],
                    c = (0, q.CG)(K.Tf),
                    l = (0, j.useCallback)(function() {
                        s || a(!0), r()
                    }, [s, r, a]),
                    d = !s || t,
                    u = B((0, j.useCallback)(function(e) {
                        return e.clientX > window.innerWidth - 150 && e.clientY > window.innerHeight - 150
                    }, []));
                return (0, ed.jsx)(J.H, {
                    mr: c && s && !d && !u ? "-100%" : "0px",
                    transitionProperty: "margin-right",
                    transitionDuration: "ultra-slow",
                    transitionTimingFunction: "ease-in-out",
                    children: (0, ed.jsxs)(P.J, {
                        returnFocusOnClose: !1,
                        isOpen: d,
                        onClose: l,
                        closeOnBlur: !0,
                        children: [(0, ed.jsx)(D.x, {
                            children: (0, ed.jsx)(A.h, {
                                onClick: function() {
                                    t && a(!0), n()
                                },
                                "aria-label": "Help",
                                isRound: !0,
                                size: "md",
                                icon: (0, ed.jsx)(x.G, {
                                    icon: E.UF
                                })
                            })
                        }), (0, ed.jsx)(T.y, eh(eh({}, X.Ro), {}, {
                            children: (0, ed.jsx)(R.b, {
                                children: (0, ed.jsx)(ef, {
                                    onClose: l
                                })
                            })
                        }))]
                    })
                })
            });
            ex.displayName = "PresentModeHelpWidget";
            var em = n(75085),
                eg = n(51331),
                ev = n(53923),
                ej = n(21061),
                eb = n(72043),
                ey = n(59115),
                eC = n(15087),
                eO = n(32736),
                ew = n(36738),
                ek = n(74637),
                eS = n(94301),
                eE = n(35741),
                eI = n(82269),
                eP = n(20299),
                eD = n(46974),
                eA = n(48798),
                eT = n(85249),
                eR = n(20176),
                e_ = n(36471),
                eM = n(1410),
                eL = n(46510),
                ez = n(80304),
                eN = n(55479),
                eZ = n(84103),
                eG = n(49294),
                eF = n(34638),
                eU = n(56143),
                eW = n(65742),
                eH = n(50381),
                eV = n.n(eH),
                eB = n(97705),
                eq = n(93506),
                eK = n(98841),
                eY = n(25925),
                eQ = ["children", "style"];

            function eX(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function eJ(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eX(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eX(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var e$ = {
                    enter: {
                        visibility: "visible",
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: .2,
                            ease: [.4, 0, .2, 1]
                        }
                    },
                    exit: {
                        transitionEnd: {
                            visibility: "hidden"
                        },
                        opacity: 0,
                        scale: .8,
                        transition: {
                            duration: .1,
                            easings: "easeOut"
                        }
                    }
                },
                e0 = "custom" in eK.E ? eK.E.custom(eB.m.div) : (0, eK.E)(eB.m.div),
                e1 = (0, j.forwardRef)(function(e, t) {
                    var n, r, i = e.children,
                        o = e.style,
                        s = (0, eI.Z)(e, eQ),
                        a = (0, eq.jC)("Menu", s);
                    return (0, ed.jsx)(eB.m.div, eJ(eJ({
                        ref: t,
                        __css: {
                            zIndex: null !== (n = e.zIndex) && void 0 !== n ? n : null === (r = a.list) || void 0 === r ? void 0 : r.zIndex
                        },
                        style: eJ({}, o)
                    }, s), {}, {
                        children: (0, ed.jsx)(eY.M, {
                            children: (0, ed.jsx)(e0, {
                                className: (0, h.cx)("chakra-menu__menu-list"),
                                variants: e$,
                                style: {
                                    transformOrigin: "top left"
                                },
                                initial: e$.exit,
                                animate: e$.enter,
                                exit: e$.exit,
                                __css: eJ({
                                    outline: 0
                                }, a.list),
                                children: i
                            })
                        })
                    }))
                }),
                e2 = n(17107),
                e5 = ["type"],
                e3 = ["icon", "iconSpacing", "command", "commandSpacing", "children"],
                e4 = ["className", "children"],
                e6 = ["className"];

            function e8(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function e9(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e8(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : e8(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var e7 = (0, e2.G)(function(e, t) {
                    var n = e.type,
                        r = (0, eI.Z)(e, e5),
                        i = (0, eq.jC)("Menu", r),
                        o = r.as ? null != n ? n : void 0 : "button",
                        s = e9({
                            textDecoration: "none",
                            color: "inherit",
                            userSelect: "none",
                            display: "flex",
                            width: "100%",
                            alignItems: "center",
                            textAlign: "start",
                            flex: "0 0 auto",
                            outline: 0
                        }, i.item);
                    return (0, ed.jsx)(eB.m.button, e9(e9({
                        ref: t,
                        type: o
                    }, r), {}, {
                        __css: s,
                        _hover: i.item._focus
                    }))
                }),
                te = (0, e2.G)(function(e, t) {
                    var n = e.icon,
                        r = e.iconSpacing,
                        i = e.command,
                        o = e.commandSpacing,
                        s = e.children,
                        a = (0, eI.Z)(e, e3),
                        c = n || i ? (0, ed.jsx)("span", {
                            style: {
                                pointerEvents: "none",
                                flex: 1
                            },
                            children: s
                        }) : s;
                    return (0, ed.jsxs)(e7, e9(e9({}, a), {}, {
                        className: (0, h.cx)("chakra-menu__menuitem"),
                        children: [n && (0, ed.jsx)(tt, {
                            fontSize: "0.8em",
                            marginEnd: void 0 === r ? "0.75rem" : r,
                            children: n
                        }), c, i && (0, ed.jsx)(tn, {
                            marginStart: void 0 === o ? "0.75rem" : o,
                            children: i
                        })]
                    }))
                });
            te.displayName = "MenuItem";
            var tt = function(e) {
                var t = e.className,
                    n = e.children,
                    r = (0, eI.Z)(e, e4),
                    i = j.Children.only(n),
                    o = j.isValidElement(i) ? j.cloneElement(i, {
                        focusable: "false",
                        "aria-hidden": !0,
                        className: (0, h.cx)("chakra-menu__icon", i.props.className)
                    }) : null,
                    s = (0, h.cx)("chakra-menu__icon-wrapper", t);
                return (0, ed.jsx)(eB.m.span, e9(e9({
                    className: s
                }, r), {}, {
                    __css: {
                        flexShrink: 0
                    },
                    children: o
                }))
            };
            tt.displayName = "MenuIcon";
            var tn = (0, e2.G)(function(e, t) {
                var n = (0, eq.jC)("Menu", e);
                return (0, ed.jsx)(eB.m.span, e9(e9({
                    ref: t
                }, e), {}, {
                    __css: n.command,
                    className: "chakra-menu__command"
                }))
            });
            tn.displayName = "MenuCommand";
            var tr = function(e) {
                var t = e.className,
                    n = (0, eI.Z)(e, e6),
                    r = (0, eq.jC)("Menu", e);
                return (0, ed.jsx)(eB.m.hr, e9(e9({
                    role: "separator",
                    "aria-orientation": "horizontal",
                    className: (0, h.cx)("chakra-menu__divider", t)
                }, n), {}, {
                    __css: r.divider
                }))
            };
            tr.displayName = "MenuDivider";
            var ti = n(23015),
                to = n(583),
                ts = n(81212),
                ta = n(29787),
                tc = ["editor", "openStyleDrawer", "cardUrl", "getPos", "isNested", "isFirstCard", "isCollapsed", "hasCardBackground", "onClose", "updateAttributes", "previewContent"];

            function tl(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function td(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tl(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tl(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tu = (0, ed.jsx)(x.G, {
                    icon: ez.TX,
                    fixedWidth: !0
                }),
                tf = (0, ed.jsx)(x.G, {
                    icon: eL.WM,
                    fixedWidth: !0
                }),
                tp = (0, ed.jsx)(x.G, {
                    icon: eM.O4,
                    fixedWidth: !0
                }),
                th = (0, ed.jsx)(x.G, {
                    icon: e_.$,
                    fixedWidth: !0
                }),
                tx = (0, ed.jsx)(x.G, {
                    icon: eR.FP,
                    fixedWidth: !0
                }),
                tm = (0, ed.jsx)(x.G, {
                    icon: eT.oK,
                    fixedWidth: !0
                }),
                tg = (0, ed.jsx)(x.G, {
                    icon: eA.re,
                    fixedWidth: !0
                }),
                tv = (0, ed.jsx)(x.G, {
                    icon: eD.z1,
                    fixedWidth: !0
                }),
                tj = (0, ed.jsx)(x.G, {
                    icon: eP.UP,
                    fixedWidth: !0
                }),
                tb = (0, j.forwardRef)(function(e, t) {
                    var n = e.editor,
                        r = e.openStyleDrawer,
                        i = e.cardUrl,
                        o = e.getPos,
                        s = e.isNested,
                        a = e.isFirstCard,
                        c = e.isCollapsed,
                        p = e.hasCardBackground,
                        h = e.onClose,
                        x = e.updateAttributes,
                        m = e.previewContent,
                        g = (0, eI.Z)(e, tc);
                    console.debug("%c [<ManageCardMenu />] RENDER", "background-color: limegreen");
                    var v = (0, eN.p)(),
                        b = (0, ta.K)(),
                        y = (0, j.useCallback)(function() {
                            x && x({
                                previewContent: null === m ? "" : null
                            })
                        }, [x, m]),
                        C = (0, j.useCallback)(function() {
                            var e = o();
                            if (e && n) {
                                var t = n.state.doc.nodeAt(e),
                                    r = t && (0, eW.getCardTitle)(t.toJSON());
                                n.chain().deleteCard(e).focus().run();
                                var i = d.ag._({
                                        id: "0MWv65",
                                        values: {
                                            displayTitle: r ? '"'.concat(r, '"') : "card"
                                        }
                                    }),
                                    s = d.ag._({
                                        id: "9uI/rE"
                                    }),
                                    a = v({
                                        title: (0, ed.jsxs)(er.U, {
                                            children: [(0, ed.jsx)(f.x, {
                                                noOfLines: 1,
                                                children: i
                                            }), (0, ed.jsx)(eZ.r, {
                                                textDecoration: "underline",
                                                onClick: function() {
                                                    (0, eU.Yw)(n.state), v.close(a)
                                                },
                                                children: s
                                            })]
                                        }),
                                        status: "info",
                                        duration: 3e3,
                                        position: "top"
                                    })
                            }
                        }, [n, o, v]),
                        O = (0, j.useCallback)(function() {
                            var e = o();
                            e && (null == n || n.commands.duplicateCard(e))
                        }, [n, o]),
                        w = (0, j.useCallback)(function() {
                            var e = o();
                            e && (null == n || n.commands.unnestCard(e))
                        }, [n, o]),
                        k = (0, j.useCallback)(function() {
                            var e = o();
                            e && (null == n || n.chain().mergeCardsAtPos(e).focus().run())
                        }, [n, o]),
                        S = (0, j.useCallback)(function() {
                            r(0)
                        }, [r]),
                        E = (0, j.useCallback)(function() {
                            r(1)
                        }, [r]),
                        I = (0, q.CG)(K.hN),
                        P = (0, eG.V)(i).onCopy,
                        D = (0, eF.ff)("red.500", "red.300"),
                        A = (0, j.useCallback)(function(e) {
                            var t;
                            if (e.target && null !== (t = e.target) && void 0 !== t && t.closest('[data-testid="open-share"]')) {
                                e.preventDefault();
                                return
                            }
                            P(), v({
                                title: d.ag._({
                                    id: "h5GS+N"
                                }),
                                status: "success",
                                duration: 3e3,
                                position: "top"
                            })
                        }, [P, v]),
                        T = (0, j.useCallback)(function() {
                            var e = o();
                            if (e && n) {
                                var t = (0, to.PZ)(n, e);
                                if (!t) {
                                    v({
                                        title: d.ag._({
                                            id: "FntfNT"
                                        }),
                                        status: "error",
                                        duration: 3e3,
                                        position: "top"
                                    });
                                    return
                                }
                                eV()(t, {
                                    format: "text/html"
                                }), v({
                                    title: d.ag._({
                                        id: "LHDpRL"
                                    }),
                                    status: "success",
                                    duration: 3e3,
                                    position: "top"
                                })
                            }
                        }, [n, o, v]);
                    return (0, ed.jsxs)(e1, td(td({}, g), {}, {
                        zIndex: "popover",
                        ref: t,
                        onClick: h,
                        "data-testid": "manage-card-menu",
                        children: [(0, ed.jsx)(te, {
                            icon: (0, ed.jsx)(ts.x, {
                                isLocked: !b
                            }),
                            onClick: A,
                            "data-testid": "copy-card-link",
                            children: (0, ed.jsx)(l.cC, {
                                id: "F0YmUY"
                            })
                        }), (0, ed.jsx)(te, {
                            icon: tp,
                            onClick: T,
                            children: (0, ed.jsx)(l.cC, {
                                id: "Bq0HJ4"
                            })
                        }), (0, ed.jsxs)(u.k, {
                            direction: "column",
                            display: I ? "flex" : "none",
                            children: [(0, ed.jsx)(tr, {}), (0, ed.jsx)(te, {
                                icon: tf,
                                onClick: O,
                                "data-testid": "duplicate-card",
                                children: (0, ed.jsx)(l.cC, {
                                    id: "euc6Ns"
                                })
                            }), x && s && c && (0, ed.jsx)(te, {
                                icon: "" === m ? tv : tj,
                                onClick: y,
                                "data-testid": "hide-preview",
                                children: "" === m ? (0, ed.jsx)(l.cC, {
                                    id: "dK2evu"
                                }) : (0, ed.jsx)(l.cC, {
                                    id: "691flv"
                                })
                            }), r && void 0 !== p && !c && (0, ed.jsx)(te, {
                                icon: tg,
                                onClick: S,
                                onMouseDown: ti.br,
                                "data-testid": "card-background",
                                children: p ? (0, ed.jsx)(l.cC, {
                                    id: "sIpTuZ"
                                }) : (0, ed.jsx)(l.cC, {
                                    id: "T6eZ9z"
                                })
                            }), r && !c && (0, ed.jsx)(te, {
                                icon: tu,
                                onClick: E,
                                onMouseDown: ti.br,
                                "data-testid": "card-style",
                                children: (0, ed.jsx)(l.cC, {
                                    id: "k7zVgS"
                                })
                            }), s ? (0, ed.jsx)(te, {
                                icon: tm,
                                onClick: w,
                                "data-testid": "merge-into-parent-card",
                                children: (0, ed.jsx)(l.cC, {
                                    id: "b+J8Wt"
                                })
                            }) : !1 != s || a ? null : (0, ed.jsx)(te, {
                                icon: tx,
                                onClick: k,
                                "data-testid": "merge-into-card-above",
                                children: (0, ed.jsx)(l.cC, {
                                    id: "kV34zB"
                                })
                            }), (0, ed.jsx)(tr, {}), (0, ed.jsx)(te, {
                                icon: th,
                                color: D,
                                onClick: C,
                                "data-testid": "delete-card",
                                children: (0, ed.jsx)(l.cC, {
                                    id: "cnGeoo"
                                })
                            })]
                        })]
                    }))
                }),
                ty = n(62490);

            function tC(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tO(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tC(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tC(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tw = (0, j.memo)(function(e) {
                    var t = e.editor,
                        n = (0, q.CG)(ty.tk),
                        r = n.isOpen,
                        i = n.ref,
                        o = n.options,
                        s = (0, j.useState)(null),
                        a = s[0],
                        c = s[1],
                        l = (0, eE.D)(i, a, {
                            placement: "bottom-start",
                            modifiers: [{
                                name: "preventOverflow",
                                enabled: !0,
                                options: {
                                    boundary: "clippingParents"
                                }
                            }, {
                                name: "offset",
                                options: {
                                    offset: [0, 8]
                                }
                            }],
                            strategy: "absolute"
                        }).styles,
                        d = (0, b.I0)(),
                        u = (0, j.useCallback)(function() {
                            d((0, ty.kG)({
                                saveRef: !0
                            }))
                        }, [d]),
                        f = (0, j.useCallback)(function() {
                            d((0, ty.kG)({
                                saveRef: !1
                            }))
                        }, [d]);
                    return (0, ek.O)({
                        ref: {
                            current: a
                        },
                        handler: function() {
                            r && (u(), setTimeout(function() {
                                d((0, ty.gQ)())
                            }, 0))
                        }
                    }), (0, j.useEffect)(function() {
                        return function() {
                            return f()
                        }
                    }, []), (0, ed.jsx)(eS.h, {
                        children: r && o && (0, ed.jsx)(tb, tO(tO({}, o), {}, {
                            style: tO({}, l.popper),
                            onClose: f,
                            ref: c,
                            editor: t
                        }))
                    })
                }),
                tk = n(25756),
                tS = n(40618),
                tE = n(32333),
                tI = n(67769),
                tP = n(84636),
                tD = n.n(tP),
                tA = n(54073),
                tT = n.n(tA),
                tR = n(72338),
                t_ = n(30341),
                tM = n(34264),
                tL = n(17477),
                tz = n(26087),
                tN = function(e, t, n, r, i) {
                    var o = r - n,
                        s = Math.max(o - Math.max(e - n, 0) - Math.max(r - t, 0), 0),
                        a = s / o,
                        c = a > 0 && s == t - e;
                    return {
                        overlap: a,
                        viewing: i && (c || a > .5 || s > 400),
                        only: c
                    }
                };

            function tZ(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var tG = function(e, t) {
                    var n = (0, t_.As)("editor"),
                        r = (0, j.useState)(null),
                        i = r[0],
                        o = r[1],
                        s = (0, j.useRef)({
                            presentingCardId: null,
                            scrollTop: 0,
                            containerHeight: 0,
                            expandedCards: {}
                        }),
                        c = (0, q.CG)(K.gh),
                        l = (0, q.CG)(K.i2);
                    (0, j.useEffect)(function() {
                        s.current.presentingCardId = null != l ? l : null
                    }, [l]);
                    var d = (0, q.CG)(K.Q5);
                    (0, j.useEffect)(function() {
                        s.current.expandedCards = d
                    }, [d]), (0, j.useEffect)(function() {
                        var e = document.querySelector(n.scrollSelector);
                        if (e) {
                            o(e);
                            var t = e.getBoundingClientRect().height;
                            s.current.scrollTop = e.scrollTop, s.current.containerHeight = t
                        }
                    }, [n.scrollSelector, s]), (0, j.useEffect)(function() {
                        var e = tT()(function() {
                            i && (s.current.scrollTop = i.scrollTop)
                        }, 250, {
                            trailing: !0,
                            maxWait: 500
                        });
                        return window.addEventListener("scroll", e, !0),
                            function() {
                                return window.removeEventListener("scroll", e, !0)
                            }
                    }, [i]), (0, j.useEffect)(function() {
                        var e = tT()(function() {
                            i && (s.current.containerHeight = i.getBoundingClientRect().height)
                        }, 250, {
                            trailing: !0,
                            maxWait: 500
                        });
                        return window.addEventListener("resize", e),
                            function() {
                                return window.removeEventListener("resize", e)
                            }
                    }, [i]), (0, j.useEffect)(function() {
                        if (e) {
                            if (c === tz.q.SLIDE_VIEW) {
                                var r = setInterval(function() {
                                    t.emit("cardViewed", {
                                        cardId: s.current.presentingCardId,
                                        interval: 1e3
                                    })
                                }, 1e3);
                                return function() {
                                    return clearInterval(r)
                                }
                            }
                            var i = setInterval(function() {
                                if (!document.hidden) {
                                    var r = s.current,
                                        i = r.scrollTop,
                                        o = r.containerHeight,
                                        c = r.expandedCards,
                                        l = i + o;
                                    tD()((0, tR.N2)(e.state.doc, tM.KH), function(e) {
                                        return e.node.attrs.id
                                    }).map(function(t) {
                                        var r, o = t.node.attrs.id,
                                            s = c[o];
                                        if (!s) return null;
                                        try {
                                            r = e.view.nodeDOM(t.pos)
                                        } catch (e) {
                                            return null
                                        }
                                        if (r instanceof HTMLElement) {
                                            var d = (0, tL.LY)(r, n.scrollSelector),
                                                u = r.offsetHeight + d;
                                            return function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {};
                                                    t % 2 ? tZ(Object(n), !0).forEach(function(t) {
                                                        (0, a.Z)(e, t, n[t])
                                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tZ(Object(n)).forEach(function(t) {
                                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                    })
                                                }
                                                return e
                                            }({
                                                id: o
                                            }, tN(i, l, d, u, s))
                                        }
                                        return null
                                    }).filter(function(e) {
                                        return !!(null != e && e.viewing)
                                    }).forEach(function(e) {
                                        t.emit("cardViewed", {
                                            cardId: e.id,
                                            interval: 1e3
                                        })
                                    })
                                }
                            }, 1e3);
                            return function() {
                                return clearInterval(i)
                            }
                        }
                    }, [c, e, s, t, n.scrollSelector])
                },
                tF = function(e) {
                    var t = e.editor,
                        n = e.backoffFactor,
                        r = void 0 === n ? 1 : n,
                        i = (0, tE.z$)(),
                        o = (0, j.useState)(15e3),
                        s = o[0],
                        a = o[1];
                    tG(t, tI.f);
                    var c = (0, j.useCallback)(function() {
                        tI.f.flush(), a(Math.min(s * r, 12e4))
                    }, [r, s]);
                    return (0, j.useEffect)(function() {
                        if (i) {
                            tI.f.initialize(), tI.f.on("flush", function(e) {
                                for (var t = e.viewed, n = 0, r = Object.entries(t); n < r.length; n++) {
                                    var o = (0, S.Z)(r[n], 2),
                                        s = o[0],
                                        a = o[1];
                                    i.trackDocEvent(tE.AA.CARD_VIEWED, {
                                        card_id: s,
                                        duration: a
                                    })
                                }
                            });
                            var e = setInterval(function() {
                                return c()
                            }, s);
                            return function() {
                                clearInterval(e), tI.f.destroy()
                            }
                        }
                    }, [i, s, c]), null
                },
                tU = n(10710),
                tW = n(28916),
                tH = n(62517),
                tV = n(59734),
                tB = n(68197),
                tq = n(20406),
                tK = n(28526),
                tY = n.n(tK),
                tQ = n(78116),
                tX = n(56915),
                tJ = n(16796),
                t$ = n(64827),
                t0 = n(2167),
                t1 = n(80353),
                t2 = n(76648),
                t5 = n(58125),
                t3 = n(30764),
                t4 = n(24021),
                t6 = n(66825),
                t8 = n(53865),
                t9 = n(35634),
                t7 = n(95876),
                ne = n(50685),
                nt = n(91465),
                nn = n(1153),
                nr = n(35231),
                ni = n(34860);

            function no(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var ns = j.createContext({
                enabled: !1,
                registerEditor: function(e, t) {},
                getAllCards: function() {
                    return []
                },
                userMessage: "",
                setUserMessage: function(e) {}
            });

            function na() {
                return (0, j.useContext)(ns)
            }
            var nc = function(e) {
                    var t = e.children,
                        n = (0, j.useRef)(new Map),
                        r = (0, j.useRef)(""),
                        i = (0, j.useRef)(function(e, t) {
                            n.current.set(e, t)
                        }),
                        o = (0, j.useRef)(function() {
                            return Array.from(n.current.values()).map(function(e) {
                                var t, n;
                                return null === (t = e.state.doc.firstChild) || void 0 === t ? void 0 : null === (n = t.content.toJSON()) || void 0 === n ? void 0 : n[0]
                            }).filter(Boolean)
                        }),
                        s = (0, j.useCallback)(function(e) {
                            r.current = e
                        }, []);
                    return (0, ed.jsx)(ns.Provider, {
                        value: {
                            enabled: !0,
                            registerEditor: i.current,
                            getAllCards: o.current,
                            userMessage: r.current,
                            setUserMessage: s
                        },
                        children: t
                    })
                },
                nl = n(82511),
                nd = n(69936),
                nu = n(56581),
                nf = n(27302),
                np = n(420),
                nh = n(86297),
                nx = function(e) {
                    var t = e.cardId,
                        n = e.onClick,
                        r = (0, q.CG)((0, nl.NB)(t)),
                        i = (0, q.CG)(K.Pu);
                    return r ? (0, ed.jsxs)(eo.K, {
                        zIndex: 1,
                        mt: "4.5em",
                        width: "180px",
                        bg: "whiteAlpha.500",
                        border: "1px solid",
                        borderColor: "blackAlpha.300",
                        borderRadius: "lg",
                        p: 4,
                        sx: {
                            "*": {
                                "backdrop-filter": "none !important",
                                "-webkit-backdrop-filter": "none !important"
                            }
                        },
                        children: [r.variants.map(function(e) {
                            if (!e) return null;
                            var o = e.label,
                                s = e.card,
                                a = e.id;
                            return (0, ed.jsx)(nm, {
                                theme: i,
                                isSelected: r.selected === a,
                                label: o,
                                card: s,
                                onClick: function() {
                                    n({
                                        cardId: t,
                                        variationId: a
                                    })
                                }
                            }, a)
                        }), r.variants.length < 2 && (0, ed.jsx)(nf.M, {
                            children: (0, ed.jsx)(np.$, {})
                        })]
                    }) : null
                },
                nm = function(e) {
                    var t = e.label,
                        n = e.card,
                        r = e.theme,
                        i = e.isSelected,
                        o = void 0 !== i && i,
                        s = e.onClick,
                        a = (0, j.useMemo)(function() {
                            return (0, nh.vL)({
                                docFlags: {
                                    cardLayoutsEnabled: !0
                                }
                            }, [n])
                        }, [n]);
                    return (0, ed.jsxs)(eo.K, {
                        align: "start",
                        children: [(0, ed.jsx)(u.k, {
                            borderRadius: "md",
                            bg: "white",
                            shadow: o ? "outline" : "md",
                            overflow: "hidden",
                            cursor: "pointer",
                            _hover: {
                                bg: "trueblue.50"
                            },
                            transitionProperty: "common",
                            transitionDuration: "fast",
                            onClick: void 0 === s ? function() {} : s,
                            children: (0, ed.jsx)(u.k, {
                                sx: nt.n,
                                css: {
                                    "--editor-font-size": "0.15rem",
                                    "--editor-width": "150px"
                                },
                                justifyContent: "center",
                                alignItems: "top",
                                pointerEvents: "none",
                                children: (0, ed.jsx)(nt.m, {
                                    content: a,
                                    theme: r,
                                    isThumbnail: !0
                                })
                            })
                        }), (0, ed.jsxs)(f.x, {
                            fontSize: "sm",
                            children: [o && (0, ed.jsx)(nu.n, {
                                boxSize: 3,
                                mr: 2
                            }), t]
                        })]
                    })
                };

            function ng(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nv(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ng(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ng(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var nj = "ai-wizard-editor-root",
                nb = function(e) {
                    var t = e.doc,
                        n = e.cards,
                        r = e.theme,
                        i = void 0 === r ? t8.mU : r,
                        o = (0, nr.R5)(i),
                        s = (0, t9.wj)(i),
                        a = (0, nr.wh)(o, s),
                        c = (0, q.TL)(),
                        l = na().registerEditor;
                    return ((0, j.useEffect)(function() {
                        return function() {
                            c((0, nl.mc)())
                        }
                    }, [c]), t) ? (0, ed.jsxs)(u.k, nv(nv({
                        bg: "gray.100",
                        overflowY: "auto",
                        overflowX: "hidden",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        alignItems: "center",
                        alignSelf: "stretch",
                        direction: "column",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        className: nj
                    }, a), {}, {
                        children: [(0, ed.jsx)(nn.Y, {}), n.map(function(e, n) {
                            var r, i = null === (r = e.attrs) || void 0 === r ? void 0 : r.id;
                            return i ? (0, ed.jsx)(ny, {
                                doc: t,
                                cardId: i,
                                cardIndex: n,
                                cardJSON: e,
                                onCreate: function(e) {
                                    l(i, e)
                                }
                            }, i) : null
                        })]
                    })) : null
                },
                ny = function(e) {
                    var t = e.cardId,
                        n = e.cardIndex,
                        r = e.cardJSON,
                        i = e.doc,
                        o = e.onCreate,
                        s = (0, q.TL)(),
                        a = (0, j.useState)(null),
                        c = a[0],
                        l = a[1],
                        d = na().userMessage,
                        f = (0, nd.b)({
                            editor: c
                        });
                    (0, j.useEffect)(function() {
                        c && f({
                            doc: c.state.doc,
                            cardId: t,
                            message: d
                        })
                    }, [f, c, t, n, d]);
                    var p = (0, j.useMemo)(function() {
                            return (0, t7.vL)({
                                docFlags: {
                                    cardLayoutsEnabled: !0
                                }
                            }, [r])
                        }, [r]),
                        h = (0, q.CG)((0, nl.a4)(t));
                    (0, ni.vm)(function() {
                        if (c && h) {
                            var e = (0, tM.Bw)(c, t);
                            e && c.commands.command(function(t) {
                                var n = t.tr,
                                    r = t3.NB.fromJSON(c.schema, h.card);
                                return n.replaceWith(e.pos, e.pos + e.node.nodeSize, r), !0
                            })
                        }
                    }, [c, h, t], [h]);
                    var x = (0, j.useCallback)(function(e) {
                        var n = e.cardId,
                            r = e.variationId;
                        c && n === t && s((0, nl.dx)({
                            cardId: t,
                            variantId: r
                        }))
                    }, [s, c, t]);
                    return null != i && i.id ? (0, ed.jsxs)(u.k, {
                        className: "ai-variation-editor-".concat(t),
                        alignItems: "flex-start",
                        sx: nt.n,
                        my: -8,
                        children: [(0, ed.jsx)(nx, {
                            cardId: t,
                            onClick: x
                        }), (0, ed.jsx)(ne.y, {
                            initialContent: p,
                            onCreate: function(e) {
                                var t = e.editor;
                                l(t), o(t)
                            },
                            doc: i,
                            docId: i.id,
                            scrollingParentSelector: ".".concat(nj),
                            readOnly: !0,
                            isStatic: !0,
                            animationsEnabled: !1,
                            extensions: [],
                            shouldSupportMenus: !1
                        })]
                    }) : null
                },
                nC = n(30118);

            function nO(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nw(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nO(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nO(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var nk = function(e) {
                    var t = (0, nC.M)({
                            id: "cardSuggestionDrawer"
                        }),
                        n = t.isOpen,
                        r = t.onClose,
                        i = t.onOpen,
                        o = (0, q.CG)(K.Pu),
                        s = (0, j.useState)(function() {
                            return (0, t5.xC)({
                                reducer: q.Ct
                            })
                        })[0];
                    return (0, ed.jsx)(b.zt, {
                        store: s,
                        children: (0, ed.jsx)(nS, nw(nw({}, e), {}, {
                            isOpen: n,
                            onClose: r,
                            onOpen: i,
                            theme: o
                        }))
                    })
                },
                nS = (r = function(e) {
                    var t, n = e.doc,
                        r = e.editor,
                        i = e.theme,
                        o = e.isOpen,
                        s = e.onClose,
                        a = e.onOpen,
                        c = (0, j.useState)([]),
                        d = c[0],
                        u = c[1],
                        f = (0, j.useState)(null),
                        p = f[0],
                        h = f[1],
                        x = na(),
                        m = x.getAllCards,
                        g = x.setUserMessage,
                        v = (0, j.useCallback)(function() {
                            s(), u([]), h(null)
                        }, [s]),
                        b = (0, j.useCallback)(function() {
                            if (v(), r) {
                                var e = {
                                    type: "document",
                                    content: m()
                                };
                                console.log("[handleConfirm] contentToUse", e);
                                var t = 1,
                                    n = r.state.doc.nodeSize - 2,
                                    i = (0, tM.Bw)(r, p);
                                if (i) {
                                    n = (t = i.pos) + i.node.nodeSize;
                                    var o = e.content.find(function(e) {
                                        var t;
                                        return (null === (t = e.attrs) || void 0 === t ? void 0 : t.id) === p
                                    });
                                    if (!o) {
                                        console.warn("[handleConfirm] Count not find card to use");
                                        return
                                    }
                                    e = o
                                }
                                r.commands.command(function(i) {
                                    return i.tr.replaceRangeWith(t, n, t3.NB.fromJSON(r.schema, e)), !0
                                })
                            }
                        }, [v, r, p, m]),
                        y = (0, j.useCallback)((t = (0, tq.Z)(tY().mark(function e(t, n, r) {
                            return tY().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        a(), h(n), u(t.toJSON().content[0].content.filter(function(e) {
                                            var t;
                                            return null === n || (null === (t = e.attrs) || void 0 === t ? void 0 : t.id) === n
                                        })), g(r);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e, n, r) {
                            return t.apply(this, arguments)
                        }), [a, g]);
                    return (0, j.useEffect)(function() {
                        if (r) return t6.T.on("openSuggestionEditor", function(e) {
                            var t = e.cardId,
                                n = e.userMessage;
                            y(r.view.state.doc, t, n)
                        })
                    }, [r, y]), (0, ed.jsxs)(tQ.d, {
                        placement: "bottom",
                        onClose: s,
                        isOpen: o,
                        trapFocus: !0,
                        isFullHeight: !0,
                        children: [(0, ed.jsx)(tX.Z, {}), (0, ed.jsxs)(tJ.s, {
                            borderTopRadius: "xl",
                            h: "calc(var(--100vh) - 24px)",
                            transform: "none !important",
                            children: [(0, ed.jsx)(t$.o, {
                                zIndex: "10",
                                backgroundColor: "white",
                                mr: 2,
                                shadow: "md"
                            }), (0, ed.jsx)(t0.f, {
                                p: 0,
                                h: "100%",
                                children: d.length > 0 && n ? (0, ed.jsx)(nb, {
                                    doc: n,
                                    cards: d,
                                    theme: i
                                }) : (0, ed.jsx)(t4.AA, {})
                            }), (0, ed.jsx)(t1.m, {
                                borderTop: "1px solid #000",
                                borderColor: "gray.200",
                                children: (0, ed.jsxs)(t2.h, {
                                    spacing: 4,
                                    children: [(0, ed.jsx)(el.z, {
                                        variant: "ghost",
                                        onClick: s,
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "dEgA5A"
                                        })
                                    }), (0, ed.jsx)(el.z, {
                                        variant: "solid",
                                        onClick: b,
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "7VpPHA"
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                }, (0, j.memo)(function(e) {
                    return (0, ed.jsx)(nc, {
                        children: (0, ed.jsx)(r, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? no(Object(n), !0).forEach(function(t) {
                                    (0, a.Z)(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : no(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, e))
                    })
                })),
                nE = n(80405),
                nI = n(28677),
                nP = n(31145),
                nD = n(49626),
                nA = n(61751),
                nT = n(49747),
                nR = n(56133),
                n_ = n(39097),
                nM = n.n(n_),
                nL = n(46988),
                nz = n(8661),
                nN = n(20252),
                nZ = n(38876),
                nG = n(9734),
                nF = n(51823),
                nU = n(76035),
                nW = n(50281),
                nH = n(54119),
                nV = n(77779),
                nB = n(2046),
                nq = n(70287),
                nK = n(25793),
                nY = n(14304),
                nQ = n.n(nY),
                nX = n(6201),
                nJ = [{
                    key: "bad",
                    label: (0, ed.jsx)(l.cC, {
                        id: "XSfVsn"
                    }),
                    ariaLabel: function() {
                        return d.ag._({
                            id: "XSfVsn"
                        })
                    },
                    icon: nV.Kf,
                    color: "red"
                }, {
                    key: "meh",
                    label: (0, ed.jsx)(l.cC, {
                        id: "0ASQJH"
                    }),
                    ariaLabel: function() {
                        return d.ag._({
                            id: "0ASQJH"
                        })
                    },
                    icon: nH.C4,
                    color: "yellow"
                }, {
                    key: "good",
                    label: (0, ed.jsx)(l.cC, {
                        id: "9ZYnL5"
                    }),
                    ariaLabel: function() {
                        return d.ag._({
                            id: "9ZYnL5"
                        })
                    },
                    icon: nW.I3,
                    color: "green"
                }],
                n$ = function(e) {
                    var t = e.docId,
                        n = e.isDark,
                        r = e.interactionId,
                        i = (0, j.useState)(null),
                        o = i[0],
                        s = i[1],
                        a = (0, j.useState)(!1),
                        c = a[0],
                        d = a[1],
                        u = (0, j.useState)(""),
                        h = u[0],
                        m = u[1],
                        g = (0, j.useRef)(null),
                        v = (0, eN.p)(),
                        b = (0, j.useCallback)(function(e) {
                            s(e), (0, nX.fM)({
                                rating: e,
                                doc_id: t,
                                interactionId: r
                            }), v({
                                title: (0, ed.jsx)(l.cC, {
                                    id: "2gZOCV"
                                }),
                                status: "success",
                                position: "top",
                                duration: 1e3
                            }), setTimeout(function() {
                                var e;
                                null == g || null === (e = g.current) || void 0 === e || e.scrollIntoView({
                                    behavior: "smooth"
                                })
                            }, 200)
                        }, [t, r, v]),
                        y = (0, j.useCallback)(function(e) {
                            e || ((0, nX.XH)({
                                feedback: nQ().sanitize(h),
                                doc_id: t,
                                interactionId: r
                            }), v({
                                title: (0, ed.jsx)(l.cC, {
                                    id: "+Rq0s/"
                                }),
                                status: "success",
                                position: "top",
                                duration: 2e3,
                                isClosable: !0
                            })), d(!0)
                        }, [t, h, r, v]);
                    return (0, ed.jsx)(p.xu, {
                        p: 4,
                        borderRadius: "lg",
                        border: "1px solid",
                        borderColor: n ? "whiteAlpha.100" : "gray.200",
                        position: "relative",
                        children: c ? (0, ed.jsxs)(f.x, {
                            color: n ? "green.400" : "green.600",
                            textAlign: "center",
                            children: [(0, ed.jsx)(x.G, {
                                icon: nU.faCircleCheck
                            }), " ", (0, ed.jsx)(l.cC, {
                                id: "SOk0EB"
                            })]
                        }) : (0, ed.jsxs)(eo.K, {
                            spacing: 4,
                            children: [(0, ed.jsxs)(eo.K, {
                                alignItems: "center",
                                spacing: "1",
                                children: [(0, ed.jsx)(f.x, {
                                    fontSize: "sm",
                                    color: n ? "whiteAlpha.800" : "gray.500",
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "TxHdBh"
                                    })
                                }), o ? (0, ed.jsxs)(f.x, {
                                    textAlign: "center",
                                    color: n ? "green.400" : "green.600",
                                    children: [(0, ed.jsx)(x.G, {
                                        icon: nU.faCircleCheck
                                    }), " ", (0, ed.jsx)(l.cC, {
                                        id: "SOk0EB"
                                    })]
                                }) : (0, ed.jsx)(f.x, {
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "cNzndx"
                                    })
                                })]
                            }), (0, ed.jsx)(er.U, {
                                fontSize: "xl",
                                width: "100%",
                                children: nJ.map(function(e) {
                                    var t = e.key,
                                        r = e.ariaLabel,
                                        i = e.label,
                                        s = e.icon,
                                        a = e.color,
                                        c = o === t;
                                    return (0, ed.jsx)(n0, {
                                        ariaLabel: r,
                                        label: i,
                                        icon: s,
                                        color: a,
                                        onClick: function() {
                                            return b(t)
                                        },
                                        isSelected: c,
                                        isDisabled: !!(o && !c),
                                        isDark: n
                                    }, t)
                                })
                            }), o && (0, ed.jsxs)(nB.NI, {
                                textAlign: "center",
                                children: [(0, ed.jsx)(nq.l, {
                                    fontSize: "sm",
                                    color: n ? "whiteAlpha.800" : "gray.500",
                                    children: "good" === o ? (0, ed.jsx)(l.cC, {
                                        id: "AmM8eQ"
                                    }) : (0, ed.jsx)(l.cC, {
                                        id: "8+bwIa"
                                    })
                                }), (0, ed.jsx)(nK.g, {
                                    value: h,
                                    onChange: function(e) {
                                        m(e.target.value)
                                    },
                                    placeholder: "",
                                    size: "sm",
                                    mb: "4"
                                }), (0, ed.jsxs)(t2.h, {
                                    spacing: "4",
                                    ref: g,
                                    children: [(0, ed.jsx)(el.z, {
                                        variant: "text",
                                        onClick: function() {
                                            y(!0)
                                        },
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "6Uau97"
                                        })
                                    }), (0, ed.jsx)(el.z, {
                                        variant: "solid",
                                        isDisabled: "" === h,
                                        onClick: function() {
                                            return y(!1)
                                        },
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "hQRttt"
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                },
                n0 = function(e) {
                    var t = e.label,
                        n = e.ariaLabel,
                        r = e.icon,
                        i = e.color,
                        o = e.isSelected,
                        s = e.onClick,
                        a = e.isDisabled,
                        c = e.isDark;
                    return (0, ed.jsx)(m.kH, {
                        label: t,
                        placement: "top",
                        children: (0, ed.jsx)(A.h, {
                            "aria-label": n(),
                            boxShadow: "none",
                            bg: o ? c ? "".concat(i, ".200") : "".concat(i, ".100") : c ? "whiteAlpha.300" : "gray.50",
                            _disabled: {
                                opacity: "".concat(o ? 1 : .5),
                                cursor: "not-allowed"
                            },
                            color: o ? c ? "".concat(i, ".600") : "".concat(i, ".500") : c ? "whiteAlpha.800" : "gray.500",
                            _hover: {
                                backgroundColor: "".concat(i, ".100"),
                                color: "".concat(i, ".500")
                            },
                            flex: 1,
                            icon: (0, ed.jsx)(f.x, {
                                fontSize: "2xl",
                                children: (0, ed.jsx)(x.G, {
                                    icon: r
                                })
                            }),
                            isDisabled: a,
                            variant: "plain",
                            onClick: s
                        })
                    })
                },
                n1 = n(1368),
                n2 = n(97907),
                n5 = ["90%", "360px"],
                n3 = function(e) {
                    var t = e.onClose,
                        n = e.eyebrowText,
                        r = e.mainText,
                        i = e.callsToAction;
                    return (0, ed.jsxs)(p.xu, {
                        bg: "white",
                        border: "0.5px solid var(--chakra-colors-gray-100)",
                        borderRadius: "md",
                        shadow: "md",
                        p: 4,
                        w: n5,
                        maxW: n5,
                        position: "relative",
                        children: [(0, ed.jsx)(n2.P, {
                            size: "sm",
                            onClick: t,
                            position: "absolute",
                            insetEnd: 1,
                            top: 1
                        }), (0, ed.jsxs)(eo.K, {
                            spacing: 4,
                            children: [(0, ed.jsxs)(eo.K, {
                                spacing: 1,
                                paddingEnd: 3,
                                children: [!(0, nG.s2)() && (0, ed.jsx)(f.x, {
                                    fontSize: "sm",
                                    color: "gray.600",
                                    children: n
                                }), (0, ed.jsx)(f.x, {
                                    fontSize: "md",
                                    children: r
                                })]
                            }), (0, ed.jsx)(p.xu, {
                                w: "100%",
                                children: i
                            })]
                        })]
                    })
                },
                n4 = function(e) {
                    var t = e.onClose,
                        n = e.startTour;
                    return (0, ed.jsx)(n3, {
                        eyebrowText: (0, ed.jsxs)(ed.Fragment, {
                            children: [(0, ed.jsx)("span", {
                                "aria-label": "Wave",
                                role: "img",
                                children: "\uD83D\uDC4B"
                            }), " ", (0, ed.jsx)(l.cC, {
                                id: "IiwaCT",
                                values: {
                                    GAMMA_ARTIFACT_PROPER_NOUN: em.Yc
                                }
                            })]
                        }),
                        mainText: (0, ed.jsx)(l.cC, {
                            id: "ntWFEH"
                        }),
                        onClose: t,
                        callsToAction: (0, ed.jsx)(el.z, {
                            size: "md",
                            w: "100%",
                            variant: "solid",
                            onClick: function() {
                                n(0), t()
                            },
                            children: (0, ed.jsx)(l.cC, {
                                id: "VzFYDl"
                            })
                        })
                    })
                },
                n6 = n(77245),
                n8 = ["90%", "360px"],
                n9 = function(e) {
                    var t = e.onClose,
                        n = (0, j.useState)(!0),
                        r = n[0],
                        i = n[1];
                    return (0, j.useEffect)(function() {
                        setTimeout(function() {
                            i(!1)
                        }, 3e3)
                    }, []), (0, ed.jsxs)(p.xu, {
                        bg: "white",
                        border: "0.5px solid var(--chakra-colors-gray-100)",
                        borderRadius: "md",
                        shadow: "md",
                        p: 4,
                        w: n8,
                        maxW: n8,
                        position: "relative",
                        children: [(0, ed.jsx)(n2.P, {
                            size: "md",
                            onClick: t,
                            position: "absolute",
                            insetEnd: 1,
                            top: 1
                        }), (0, ed.jsxs)(eo.K, {
                            direction: "row",
                            spacing: 3,
                            justify: "center",
                            w: "100%",
                            alignItems: "center",
                            children: [(0, ed.jsx)(p.xu, {
                                color: "trueblue.300",
                                children: (0, ed.jsx)(x.G, {
                                    icon: n6.tc,
                                    size: "2x",
                                    className: r ? "fa-bounce" : void 0
                                })
                            }), (0, ed.jsxs)(eo.K, {
                                spacing: 0,
                                direction: "column",
                                flex: 1,
                                textAlign: "left",
                                children: [(0, ed.jsx)(f.x, {
                                    fontSize: "sm",
                                    color: "gray.600",
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "eoDgVo"
                                    })
                                }), (0, ed.jsx)(f.x, {
                                    fontSize: "md",
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "p7dFyi"
                                    })
                                })]
                            })]
                        })]
                    })
                };

            function n7(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n7(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : n7(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var rt = "source",
                rn = "desktop-tour-toast",
                rr = "switch-from-mobile-to-desktop-toast",
                ri = function(e) {
                    var t, n = e.editor,
                        r = (0, eN.p)(),
                        i = (0, q.CG)(tB.yx),
                        o = (0, O.c8)().startTour,
                        s = (0, tU.SE)(),
                        c = s.user,
                        l = s.setSettings,
                        d = (0, j.useState)(!1),
                        u = d[0],
                        f = d[1],
                        p = (0, j.useRef)(!1),
                        h = !!(null != c && null !== (t = c.settings) && void 0 !== t && t.needsEditorOnboarding),
                        x = (0, q.CG)((0, nL.oH)(null == n ? void 0 : n.gammaDocId)),
                        m = !!x && "running" === x.status,
                        g = !!x && ("complete" === x.status || "error" === x.status),
                        v = (0, t_.As)("editor"),
                        b = (0, j.useState)(null),
                        y = b[0],
                        C = b[1],
                        w = (0, j.useState)(function() {
                            return (0, nF.SJ)()[rt] === nz.VY
                        })[0],
                        k = (0, j.useState)(function() {
                            return w && (0, nG.s2)()
                        })[0],
                        S = w && g;
                    return (0, j.useEffect)(function() {
                        n && f(!m && !(0, nG.s2)() && w && h)
                    }, [n, w, m, h]), (0, j.useEffect)(function() {
                        setTimeout(function() {
                            (0, n1.lO)({
                                query: re(re({}, (0, nF.SJ)()), {}, (0, a.Z)({}, rt, void 0)),
                                emitChange: !1
                            })
                        })
                    }, []), (0, j.useEffect)(function() {
                        return u && !r.isActive(rn) && setTimeout(function() {
                                r({
                                    id: rn,
                                    position: "bottom-left",
                                    render: function(e) {
                                        var t = e.onClose;
                                        return n4({
                                            onClose: function() {
                                                null == l || l({
                                                    remove: ["needsEditorOnboarding"]
                                                }), t()
                                            },
                                            startTour: o
                                        })
                                    },
                                    isClosable: !0,
                                    duration: null
                                })
                            }, 2e3),
                            function() {
                                r.isActive(rn) && r.close(rn)
                            }
                    }, [l, u, o, r]), (0, j.useEffect)(function() {
                        if ((0, nG.s2)()) {
                            var e = document.querySelector(v.scrollSelector);
                            if (e) {
                                C(e);
                                var t = function() {
                                    y && (0, nG.s2)() && (null == y ? void 0 : y.scrollTop) >= (null == y ? void 0 : y.scrollHeight) / 4 && k && !r.isActive(rr) && !p.current && (p.current = !0, r({
                                        id: rr,
                                        position: "top",
                                        render: function(e) {
                                            return n9({
                                                onClose: e.onClose
                                            })
                                        },
                                        isClosable: !0,
                                        duration: null,
                                        containerStyle: {
                                            minWidth: "100%",
                                            display: "flex",
                                            justifyContent: "center"
                                        }
                                    }))
                                };
                                return window.addEventListener("scroll", t, !0),
                                    function() {
                                        window.removeEventListener("scroll", t, !0), r.isActive(rr) && r.close(rr)
                                    }
                            }
                        }
                    }, [i, y, v.scrollSelector, k, r]), {
                        showDocWizardFooter: S
                    }
                };

            function ro(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function rs(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ro(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ro(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ra = (0, j.memo)(function(e) {
                var t, n = e.interactionId,
                    r = (0, q.CG)(tB.yx),
                    i = null != r && !!r.theme && (0, t8.wj)(null == r ? void 0 : r.theme),
                    o = (0, j.useState)(!1),
                    s = o[0],
                    a = o[1],
                    c = (0, eN.p)(),
                    d = null == r ? void 0 : null === (t = r.accessLinks) || void 0 === t ? void 0 : t[0],
                    f = (0, j.useMemo)(function() {
                        return (0, nF.Gn)({
                            docTitle: null == r ? void 0 : r.title,
                            docId: null == r ? void 0 : r.id,
                            token: null == d ? void 0 : d.token,
                            absolute: !0
                        })
                    }, [r, null == d ? void 0 : d.token]),
                    p = (0, eG.V)(f).onCopy,
                    h = (0, j.useCallback)(function() {
                        (0, nN.J)({
                            docId: null == r ? void 0 : r.id,
                            source: "docWizardFooter",
                            type: "tokenUrl"
                        }), p(), c({
                            title: (0, ed.jsx)(l.cC, {
                                id: "pQjjYo"
                            }),
                            status: "success",
                            position: "top",
                            duration: 1e3,
                            isClosable: !1
                        })
                    }, [null == r ? void 0 : r.id, p, c]),
                    g = (0, j.useCallback)(function() {
                        a(!0)
                    }, []);
                return r ? (0, ed.jsx)(m.Wk, {
                    isDark: i,
                    children: (0, ed.jsx)(u.k, {
                        className: "chakra-dont-set-collapse",
                        "data-doc-wizard-footer": !0,
                        w: "100%",
                        mt: (0, nG.s2)() ? void 0 : "-".concat(nZ.m),
                        children: (0, ed.jsx)(nT.U, { in: !s,
                            style: {
                                width: "100%"
                            },
                            unmountOnExit: !0,
                            children: (0, ed.jsx)(u.k, rs(rs({
                                pt: [10, 10, 20],
                                pb: [4, 4, 8],
                                w: "100%",
                                position: "relative"
                            }, i ? {
                                background: "gray.900",
                                color: "white",
                                borderTop: "2px solid var(--chakra-colors-whiteAlpha-200)"
                            } : {
                                background: "white",
                                color: void 0,
                                borderTop: "2px solid var(--chakra-colors-blackAlpha-200)"
                            }), {}, {
                                children: (0, ed.jsx)(nR.W, {
                                    maxW: "420px",
                                    children: (0, ed.jsxs)(eo.K, {
                                        spacing: 8,
                                        children: [(0, ed.jsxs)(eo.K, {
                                            spacing: 4,
                                            textAlign: "center",
                                            children: [(0, ed.jsx)(es.X, {
                                                size: "md",
                                                children: (0, ed.jsx)(l.cC, {
                                                    id: "bB+DHs"
                                                })
                                            }), (0, ed.jsx)(el.z, {
                                                leftIcon: (0, ed.jsx)(x.G, {
                                                    icon: nA.nN
                                                }),
                                                variant: "solid",
                                                onClick: h,
                                                children: (0, ed.jsx)(l.cC, {
                                                    id: "RGCCrg"
                                                })
                                            }), (0, ed.jsx)(el.z, {
                                                as: nM(),
                                                target: (0, nG.Q5)() ? "_self" : "_blank",
                                                variant: "plain",
                                                colorScheme: i ? "blackAlpha" : "whiteAlpha",
                                                leftIcon: (0, ed.jsx)(x.G, {
                                                    icon: nD.r8
                                                }),
                                                rightIcon: (0, nG.Q5)() ? void 0 : (0, ed.jsx)(x.G, {
                                                    icon: nP.faArrowUpRightFromSquare,
                                                    size: "xs"
                                                }),
                                                href: nz.ET,
                                                children: (0, ed.jsx)(l.cC, {
                                                    id: "xFxi2V"
                                                })
                                            })]
                                        }), (0, ed.jsx)(n$, {
                                            docId: r.id,
                                            isDark: i,
                                            interactionId: n
                                        }), (0, ed.jsx)(nf.M, {
                                            pt: [0, 0, 4],
                                            w: "100%",
                                            children: (0, ed.jsx)(el.z, {
                                                size: "sm",
                                                onClick: g,
                                                variant: "text",
                                                colorScheme: "blackAlpha",
                                                children: (0, ed.jsx)(l.cC, {
                                                    id: "vLyv1R"
                                                })
                                            })
                                        })]
                                    })
                                })
                            }))
                        })
                    })
                }) : null
            });
            ra.displayName = "DocWizardFooterInner";
            var rc = function(e) {
                    var t = e.editor,
                        n = ri({
                            editor: t
                        }).showDocWizardFooter,
                        r = (0, q.CG)((0, nL.oH)(null == t ? void 0 : t.gammaDocId)),
                        i = null == r ? void 0 : r.id;
                    return n && i ? (0, ed.jsx)(ra, {
                        interactionId: i
                    }) : (0, ed.jsx)(ed.Fragment, {})
                },
                rl = n(98537),
                rd = n.n(rl),
                ru = n(87063),
                rf = function(e) {
                    var t = e.onCloneClick,
                        n = e.onSignupClick,
                        r = e.isLoggedIn;
                    return (0, ed.jsx)(p.xu, {
                        bg: "white",
                        border: "0.5px solid var(--chakra-colors-gray-100)",
                        borderRadius: "md",
                        shadow: "md",
                        display: "column",
                        p: 4,
                        position: "relative",
                        children: r ? (0, ed.jsxs)(er.U, {
                            children: [(0, ed.jsxs)(f.x, {
                                mr: 1,
                                children: [(0, ed.jsx)(l.cC, {
                                    id: "HMsJrS",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: em.Yc
                                    },
                                    components: {
                                        0: (0, ed.jsx)("strong", {})
                                    }
                                }), " ", "\uD83D\uDE0D"]
                            }), (0, ed.jsx)(el.z, {
                                variant: "solid",
                                onClick: t,
                                children: (0, ed.jsx)(l.cC, {
                                    id: "he3ygx"
                                })
                            })]
                        }) : (0, ed.jsxs)(er.U, {
                            children: [(0, ed.jsxs)(f.x, {
                                mr: 1,
                                children: [(0, ed.jsx)(l.cC, {
                                    id: "FEyEJk",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: em.Yc,
                                        GAMMA_PROPER_NOUN: em.N6
                                    },
                                    components: {
                                        0: (0, ed.jsx)("strong", {})
                                    }
                                }), " ", "\uD83D\uDE0D"]
                            }), (0, ed.jsx)(nM(), {
                                href: "/signup",
                                passHref: !0,
                                legacyBehavior: !0,
                                children: (0, ed.jsx)(el.z, {
                                    as: eZ.r,
                                    onClick: n,
                                    variant: "solid",
                                    textDecoration: "none !important",
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "e+RpCP"
                                    })
                                })
                            })]
                        })
                    })
                },
                rp = function(e) {
                    var t = !(0, nG.s2)(),
                        n = (0, tU.SE)().user,
                        r = (0, eN.p)(),
                        i = (0, j.useRef)(),
                        o = (0, ru.e)(),
                        s = (0, j.useCallback)(function() {
                            e && (null === tE.co || void 0 === tE.co || tE.co.track(tE.AA.EXAMPLE_SIGNUP_CLICKED, {
                                doc_id: e.id,
                                title: e.title
                            }))
                        }, [e]),
                        a = (0, j.useCallback)(function() {
                            o({
                                docId: null == e ? void 0 : e.id,
                                docTitle: null == e ? void 0 : e.title,
                                source: "example_deck_clone_toast"
                            })
                        }, [e, o]);
                    (0, j.useEffect)(function() {
                        return function() {
                            i.current && r.close(i.current)
                        }
                    }, [r]);
                    var c = t && e,
                        l = !!n;
                    (0, ni.vm)(function() {
                        i.current && r.close(i.current), c && (i.current = r({
                            position: "bottom",
                            render: function() {
                                return rf({
                                    onCloneClick: a,
                                    isLoggedIn: l,
                                    onSignupClick: s
                                })
                            },
                            isClosable: !0,
                            duration: null
                        }))
                    }, [e, t, a, s, c, n, r, l], [c, l])
                },
                rh = n(99703),
                rx = n(91718),
                rm = n(75033),
                rg = "sessionId1",
                rv = tR.hj.create({
                    addStorage: function() {
                        return {
                            user: {}
                        }
                    },
                    addCommands: function() {
                        var e = this;
                        return {
                            user: function(t) {
                                return function() {
                                    var n = (0, q.bh)();
                                    return e.storage.user = rd()({}, e.storage.user, t), n.dispatch((0, K.MU)({
                                        sessionId: rg
                                    })), n.dispatch((0, K.Tx)({
                                        collaborators: [e.storage.user]
                                    })), !0
                                }
                            }
                        }
                    }
                }),
                rj = function(e) {
                    var t, n = e.docId,
                        r = e.snapshotId,
                        i = e.scrollingParentSelector,
                        o = e.onCreate,
                        s = (0, q.CG)(tB.yx);
                    rp(s);
                    var a = (0, j.useState)(function() {
                            return [rx.$1.configure({
                                scrollerSelector: i
                            }), rv, rh._g]
                        })[0],
                        c = (0, tU.SE)(),
                        l = c.user,
                        d = c.anonymousUser,
                        f = c.isUserLoading,
                        h = c.color,
                        x = (0, j.useState)(),
                        m = x[0],
                        g = x[1],
                        v = (0, y.EDv)({
                            variables: {
                                docId: n,
                                snapshotId: r
                            },
                            skip: !r
                        }),
                        b = v.data,
                        C = v.loading,
                        O = v.error;
                    (0, j.useEffect)(function() {
                        !f && m && m.commands.user({
                            id: (null == l ? void 0 : l.id) || d.id,
                            color: h.value,
                            sessionId: rg,
                            idleSince: null,
                            name: (null == l ? void 0 : l.displayName) || d.displayName || "",
                            profileImageUrl: (null == l ? void 0 : l.profileImageUrl) || "",
                            isReady: !f
                        })
                    }, [m, l, h, f, d]);
                    var w = b && void 0 !== b.snapshot && !C && s;
                    return (0, ed.jsxs)(p.xu, {
                        "data-testid": "example-static-editor-wrapper",
                        flex: "1",
                        height: "100%",
                        children: [!w || O ? (0, ed.jsxs)(u.k, {
                            direction: "column",
                            height: "100%",
                            flex: "1",
                            bg: "gray.100",
                            alignItems: "center",
                            justifyContent: "center",
                            children: [!w && (0, ed.jsx)(np.$, {}), O && (0, ed.jsxs)(nf.M, {
                                h: "100%",
                                children: ["There was an error loading this ", em.Yc, ":", " ", O.message]
                            })]
                        }) : (0, ed.jsx)(p.xu, {
                            "data-testid": "example-static-editor-wrapper-inner",
                            transitionProperty: "common",
                            transitionDuration: "750ms",
                            transitionTimingFunction: "ease-out",
                            opacity: w ? 1 : 0,
                            children: (0, ed.jsx)(ew.yE, {
                                doc: s,
                                editorId: "main",
                                docId: n,
                                extensions: a,
                                onCreate: function(e) {
                                    var t = e.editor;
                                    g(t), setTimeout(function() {
                                        o && o(t)
                                    }, 10)
                                },
                                readOnly: !0,
                                initialContent: null === (t = b.snapshot) || void 0 === t ? void 0 : t.content.default,
                                scrollingParentSelector: i
                            })
                        }), (0, ed.jsx)(rm.m, {})]
                    })
                },
                rb = n(10939),
                ry = "sessionId1",
                rC = tR.hj.create({
                    addStorage: function() {
                        return {
                            user: {}
                        }
                    },
                    addCommands: function() {
                        var e = this;
                        return {
                            user: function(t) {
                                return function() {
                                    var n = (0, q.bh)();
                                    return e.storage.user = rd()({}, e.storage.user, t), n.dispatch((0, K.MU)({
                                        sessionId: ry
                                    })), n.dispatch((0, K.Tx)({
                                        collaborators: [e.storage.user]
                                    })), !0
                                }
                            }
                        }
                    }
                }),
                rO = function(e) {
                    var t, n = e.docId,
                        r = e.snapshotId,
                        i = e.scrollingParentSelector,
                        o = e.onCreate,
                        s = e.theme,
                        a = e.showMadeWithGammaBadge,
                        c = (0, j.useState)(function() {
                            return [rx.$1.configure({
                                scrollerSelector: i
                            }), rC, rh._g]
                        })[0],
                        l = (0, tU.SE)(),
                        d = l.user,
                        f = l.isUserLoading,
                        h = l.anonymousUser,
                        x = l.color,
                        m = (0, j.useState)(),
                        g = m[0],
                        v = m[1],
                        b = (0, y.EDv)({
                            variables: {
                                docId: n,
                                snapshotId: r
                            },
                            skip: !r
                        }),
                        C = b.data,
                        O = b.loading,
                        w = b.error,
                        k = (0, q.CG)(tB.yx);
                    (0, j.useEffect)(function() {
                        !f && g && g.commands.user({
                            id: (null == d ? void 0 : d.id) || h.id,
                            color: x.value,
                            sessionId: ry,
                            idleSince: null,
                            name: (null == d ? void 0 : d.displayName) || h.displayName || "",
                            profileImageUrl: (null == d ? void 0 : d.profileImageUrl) || "",
                            isReady: !f
                        })
                    }, [g, d, x, f, h]);
                    var S = C && void 0 !== C.snapshot && !O && k;
                    return (0, ed.jsxs)(p.xu, {
                        "data-testid": "public-static-editor-wrapper",
                        flex: "1",
                        height: "100%",
                        children: [!S || w ? (0, ed.jsxs)(u.k, {
                            direction: "column",
                            height: "100%",
                            flex: "1",
                            bg: "gray.100",
                            alignItems: "center",
                            justifyContent: "center",
                            children: [!S && (0, ed.jsx)(np.$, {}), w && (0, ed.jsxs)(nf.M, {
                                h: "100%",
                                children: ["There was an error loading this ", em.Yc, ":", " ", w.message]
                            })]
                        }) : (0, ed.jsx)(p.xu, {
                            "data-testid": "public-static-editor-wrapper-inner",
                            transitionProperty: "common",
                            transitionDuration: "750ms",
                            transitionTimingFunction: "ease-out",
                            opacity: S ? 1 : 0,
                            children: (0, ed.jsx)(ew.yE, {
                                doc: k,
                                editorId: "main",
                                docId: n,
                                theme: s || void 0,
                                extensions: c,
                                onCreate: function(e) {
                                    var t = e.editor;
                                    v(t), setTimeout(function() {
                                        o && o(t)
                                    }, 10)
                                },
                                readOnly: !0,
                                initialContent: null === (t = C.snapshot) || void 0 === t ? void 0 : t.content.default,
                                scrollingParentSelector: i
                            })
                        }), g && (0, ed.jsx)(tF, {
                            editor: g,
                            backoffFactor: 2
                        }), (void 0 === a || a) && (0, ed.jsx)(rm.m, {})]
                    })
                },
                rw = n(16019);

            function rk(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function rS(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? rk(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rk(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var rE = (o = {}, (0, a.Z)(o, tz.q.DOC_VIEW, "doc"), (0, a.Z)(o, tz.q.SLIDE_VIEW, "present"), o),
                rI = function(e) {
                    var t = (0, b.I0)(),
                        n = (0, nF.SJ)().mode,
                        r = (0, q.CG)(K.gh),
                        i = (0, j.useCallback)(function(e) {
                            var t = e || r,
                                n = (0, nF.SJ)().mode,
                                i = rE[t];
                            n !== i && (0, n1.lO)({
                                query: rS(rS({}, (0, nF.SJ)()), {}, {
                                    mode: i
                                }),
                                emitChange: !1
                            })
                        }, [r]);
                    (0, rw.r)(i, [r]), (0, j.useEffect)(function() {
                        return n1.fI.on("changed", function() {
                            return i()
                        })
                    }, [i]), (0, ni.vm)(function() {
                        if (e) {
                            var r = n === rE.SLIDE_VIEW ? tz.q.SLIDE_VIEW : tz.q.DOC_VIEW,
                                o = (0, nF.sY)().cardId;
                            r === tz.q.SLIDE_VIEW && (o ? (console.debug("[useQuerySync] initializeModeFromQuery - Entering slide view -> spotlightCardById:", o), e.commands.spotlightCardById(o)) : (console.debug("[useQuerySync] initializeModeFromQuery - Entering slide view -> spotlightCurrentCard"), e.commands.spotlightCurrentCard())), t((0, K.PM)({
                                mode: r
                            })), i(r)
                        }
                    }, [e, t, n, i], [e])
                },
                rP = n(87202),
                rD = n(56692),
                rA = n(96302),
                rT = n(10469),
                rR = n(27440),
                r_ = n(71170),
                rM = n(56241),
                rL = n(99336),
                rz = n(92527),
                rN = n(89814),
                rZ = n(56261),
                rG = (0, rP.ZP)("mod+Escape"),
                rF = new Set(["h", "j", "k", "l", "s", "PageUp", "PageDown", "ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Enter", "Escape"]),
                rU = function(e, t) {
                    var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        r = (0, t_.cC)("editor"),
                        i = r.scroller;
                    if (i) {
                        e.commands.turnOffSpotlight();
                        var o = i.scrollHeight - i.offsetHeight;
                        if ("down" === t) {
                            if (!(r.isAtBottom(90) && n && e.commands.spotlightNextCard(!1, "top"))) {
                                var s = i.scrollTop + .5 * i.offsetHeight;
                                s > o - 150 && (s = o), r.scrollTo({
                                    top: s
                                })
                            }
                        } else if (!(r.isAtTop(90) && n && e.commands.spotlightNextCard(!0, "bottom"))) {
                            var a = i.scrollTop - .5 * i.offsetHeight;
                            a < 150 && (a = 0), r.scrollTo({
                                top: a
                            })
                        }
                    }
                },
                rW = function(e) {
                    var t = e.enabled,
                        n = e.setActiveKey,
                        r = (0, tE.z$)(),
                        i = (0, q.TL)(),
                        o = (0, tV._i)().editor,
                        s = (0, q.CG)(rL.C),
                        a = (0, rN.g)(o),
                        c = a.enabled,
                        l = a.pos,
                        d = (0, j.useCallback)(function() {
                            c ? null == o || o.commands.turnOffSpotlight() : null == o || o.commands.spotlightNextBlock()
                        }, [null == o ? void 0 : o.commands, c]);
                    return (0, j.useEffect)(function() {
                        if (t) return rD.F7.on("keydown", "NAVIGATION_CONTROLS", function(e) {
                            var t, i, a = (0, q.bh)(),
                                u = e.target,
                                f = Object.keys((0, K.X9)(a.getState()).tree);
                            if (!o || null != u && null !== (t = u.closest) && void 0 !== t && t.call(u, "[data-gamma-child-tiptap-editor]") || null != u && null !== (i = u.closest) && void 0 !== i && i.call(u, "input") || e.metaKey || s) return !1;
                            switch (rF.has(e.key) && ("s" !== e.key && (n(e.key), setTimeout(function() {
                                n(null)
                            }, 100)), e.preventDefault()), e.key) {
                                case "s":
                                    return d(), !0;
                                case "l":
                                case "ArrowRight":
                                    return (0, rz.p7)(), a.dispatch((0, K.Qx)({
                                        attached: !1
                                    })), null == r || r.trackDocEvent(tE.AA.PRESENT_MODE_NAVIGATED, {
                                        direction: tE.xQ.CARD_NEXT,
                                        method: tE.SY.KEYBOARD,
                                        key: e.key
                                    }), o.commands.spotlightNextCard();
                                case "h":
                                case "ArrowLeft":
                                    return (0, rz.p7)(), a.dispatch((0, K.Qx)({
                                        attached: !1
                                    })), null == r || r.trackDocEvent(tE.AA.PRESENT_MODE_NAVIGATED, {
                                        direction: tE.xQ.CARD_PREV,
                                        method: tE.SY.KEYBOARD,
                                        key: e.key
                                    }), o.commands.spotlightNextCard(!0);
                                case "j":
                                case "ArrowDown":
                                case "PageDown":
                                    if ((0, rz.p7)(), a.dispatch((0, K.Qx)({
                                            attached: !1
                                        })), !c) {
                                        var p = (0, rh.ei)(o.state.selection);
                                        return o.commands.goToNextExpandableNode() || rU(o, "down", !p), !0
                                    }
                                    return null == r || r.trackDocEvent(tE.AA.PRESENT_MODE_NAVIGATED, {
                                        direction: tE.xQ.TELEPROMPTER_DOWN,
                                        method: tE.SY.KEYBOARD,
                                        key: e.key
                                    }), o.commands.spotlightNextBlock();
                                case "k":
                                case "ArrowUp":
                                case "PageUp":
                                    if ((0, rz.p7)(), a.dispatch((0, K.Qx)({
                                            attached: !1
                                        })), !c) {
                                        var h = (0, rh.ei)(o.state.selection);
                                        return o.commands.goToNextExpandableNode(!0) || rU(o, "up", !h), !0
                                    }
                                    return null == r || r.trackDocEvent(tE.AA.PRESENT_MODE_NAVIGATED, {
                                        direction: tE.xQ.TELEPROMPTER_UP,
                                        method: tE.SY.KEYBOARD,
                                        key: e.key
                                    }), o.commands.spotlightNextBlock(!0);
                                case "r":
                                    if (f[0]) return (0, rz.p7)(), o.commands.spotlightCardById(f[0]), a.dispatch((0, K.Qx)({
                                        attached: !1
                                    })), !0;
                                    return !1;
                                case "Escape":
                                    if (rG(e)) return !1;
                                    var x = c && l;
                                    if (o.commands.spotlightCollapseNearestExpandableNode(x ? l : null)) return o.commands.reHighlightExpandableNode(), !0;
                                    if (c) return o.commands.turnOffSpotlight(), !0;
                                    return a.dispatch((0, K.Qx)({
                                        attached: !1
                                    })), null == r || r.track(tE.AA.CARD_COLLAPSED, {
                                        is_present_mode: !0,
                                        method: "escape_key"
                                    }), o.commands.ascendUpToParentCard(!1);
                                case "Enter":
                                    var m = c && l;
                                    if (o.commands.expandOrCollapseExpandableNode(m ? l : null)) return !0;
                                    if (m) {
                                        var g = o.state.doc.resolve(l).parent;
                                        if (g && (0, rZ.AH)(g)) return (0, rZ.xB)(g.attrs.id, !1), o.commands.spotlightNextBlock(!0), !0;
                                        return o.commands.spotlightCollapseNearestExpandableNode(l)
                                    }
                                    return !1;
                                default:
                                    return !1
                            }
                        })
                    }, [o, i, r, t, d, c, l, s, n]), c
                },
                rH = function(e) {
                    var t = new KeyboardEvent("keydown", {
                        key: e
                    });
                    n.g.dispatchEvent(t)
                },
                rV = {
                    ArrowUp: {
                        icon: ee.FP,
                        label: (0, ed.jsx)(l.cC, {
                            id: "VbggDE"
                        }),
                        ariaLabel: function() {
                            return d.ag._({
                                id: "VbggDE"
                            })
                        },
                        shortcuts: ["↑", "K"],
                        key: "ArrowUp",
                        onClick: function() {
                            rH("ArrowUp")
                        },
                        gridPos: [1, 2]
                    },
                    ArrowLeft: {
                        icon: en.ac,
                        label: (0, ed.jsx)(l.cC, {
                            id: "4jciC3"
                        }),
                        ariaLabel: function() {
                            return d.ag._({
                                id: "4jciC3"
                            })
                        },
                        shortcuts: ["←", "H"],
                        key: "ArrowLeft",
                        onClick: function() {
                            rH("ArrowLeft")
                        },
                        gridPos: [2, 1]
                    },
                    ArrowDown: {
                        icon: $.r5,
                        label: (0, ed.jsx)(l.cC, {
                            id: "e3GOIZ"
                        }),
                        ariaLabel: function() {
                            return d.ag._({
                                id: "e3GOIZ"
                            })
                        },
                        shortcuts: ["↓", "J"],
                        key: "ArrowDown",
                        onClick: function() {
                            rH("ArrowDown")
                        },
                        gridPos: [2, 2]
                    },
                    ArrowRight: {
                        icon: et.eF,
                        label: (0, ed.jsx)(l.cC, {
                            id: "ZjQRVw"
                        }),
                        ariaLabel: function() {
                            return d.ag._({
                                id: "ZjQRVw"
                            })
                        },
                        shortcuts: ["→", "L"],
                        key: "ArrowRight",
                        onClick: function() {
                            rH("ArrowRight")
                        },
                        gridPos: [2, 3]
                    },
                    Spotlight: {
                        icon: rT.GT,
                        label: (0, ed.jsx)(l.cC, {
                            id: "Xon9jp"
                        }),
                        ariaLabel: function() {
                            return d.ag._({
                                id: "Xon9jp"
                            })
                        },
                        shortcuts: ["S"],
                        key: "S",
                        onClick: function() {
                            rH("s")
                        },
                        gridPos: [1, 3]
                    }
                },
                rB = function(e) {
                    var t = e.shortcuts;
                    return (0, ed.jsx)(f.x, {
                        as: "span",
                        color: "gray.400",
                        ml: 2,
                        children: t.map(function(e, n) {
                            return (0, ed.jsxs)(j.Fragment, {
                                children: [e, n === t.length - 1 ? null : (0, ed.jsx)(f.x, {
                                    fontSize: "11px",
                                    as: "span",
                                    color: "gray.500",
                                    mx: 1,
                                    children: "or"
                                })]
                            }, e)
                        })
                    })
                },
                rq = function(e) {
                    var t = e.activeKey,
                        n = e.spotlightingByBlock;
                    return (0, ed.jsx)(eS.h, {
                        children: (0, ed.jsxs)(p.xu, {
                            position: "absolute",
                            bottom: 4,
                            right: 6,
                            zIndex: "sticky",
                            children: [(0, ed.jsx)(es.X, {
                                children: (0, ed.jsx)(l.cC, {
                                    id: "wja8aL"
                                })
                            }), (0, ed.jsx)(rR.r, {
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gridTemplateRows: "repeat(2, 1fr)",
                                children: Object.values(rV).map(function(e) {
                                    var r = e.gridPos,
                                        i = e.icon,
                                        o = e.label,
                                        s = e.ariaLabel,
                                        a = e.shortcuts,
                                        c = e.key,
                                        l = e.onClick,
                                        d = t === c;
                                    return (0, ed.jsx)(r_.P, {
                                        gridColumn: r[1],
                                        gridRow: r[0],
                                        children: (0, ed.jsx)(rM.u, {
                                            hasArrow: !0,
                                            placement: "top",
                                            label: (0, ed.jsxs)(f.x, {
                                                whiteSpace: "nowrap",
                                                children: [o, (0, ed.jsx)(rB, {
                                                    shortcuts: a
                                                })]
                                            }),
                                            children: (0, ed.jsx)(A.h, {
                                                m: 1,
                                                shadow: "base",
                                                size: "md",
                                                variant: "S" == c && n ? "solid" : "plain",
                                                isActive: d || "S" === c && n,
                                                onClick: l,
                                                onMouseDown: function(e) {
                                                    return e.preventDefault()
                                                },
                                                "aria-label": s(),
                                                icon: (0, ed.jsx)(x.G, {
                                                    icon: i
                                                })
                                            })
                                        })
                                    }, c)
                                })
                            })]
                        })
                    })
                },
                rK = n(5751),
                rY = n(26721),
                rQ = n(9088),
                rX = n(30893),
                rJ = n(40771),
                r$ = n(8022),
                r0 = n(95258),
                r1 = n(63849),
                r2 = n(2575),
                r5 = n(17651),
                r3 = n(72466),
                r4 = n(6185),
                r6 = n.n(r4),
                r8 = n(68642),
                r9 = n(27875),
                r7 = n.n(r9),
                ie = n(18149),
                it = n.n(ie),
                ir = n(98875),
                ii = n(6057),
                io = n(74542),
                is = {
                    easeOutLinear: io.gA,
                    easeOutSine: io.vh,
                    easeOutCubic: io.w2,
                    easeOutCirc: io.ei,
                    easeOutQuad: io.hl,
                    easeOutQuart: io.Y3,
                    easeOutExpo: io.ad,
                    bezierCustom1: r6()(.13, .97, .035, .73),
                    bezierCustom2: r6()(.105, 1.15, .15, .355)
                },
                ia = {
                    UP: "up",
                    DOWN: "down"
                },
                ic = function(e) {
                    return e ? +new Date - +new Date(e) : 1 / 0
                },
                il = function(e, t) {
                    var n = (0, j.useMemo)(function() {
                            return new r8.Lethargy(6, 120, .3, 150)
                        }, []),
                        r = t || {},
                        i = r.easing,
                        o = void 0 === i ? "easeOutCubic" : i,
                        s = r.touchpadFactor,
                        a = void 0 === s ? 1.5 : s,
                        c = r.triggerThreshold,
                        l = void 0 === c ? 1200 : c,
                        d = (0, t_.As)("editor"),
                        u = (0, q.CG)(K.i2),
                        f = (0, j.useRef)(null),
                        p = (0, j.useRef)(null),
                        h = (0, j.useRef)(null),
                        x = (0, j.useRef)(!1),
                        m = (0, j.useRef)(null),
                        g = (0, j.useRef)(null),
                        v = (0, j.useState)(!1),
                        b = v[0],
                        y = v[1],
                        C = (0, j.useState)(!1),
                        O = C[0],
                        w = C[1],
                        k = (0, j.useRef)({
                            counterTarget: 0,
                            counterCurrent: 0,
                            direction: ia.DOWN
                        }),
                        S = (0, j.useCallback)(function() {
                            if (f.current) {
                                var e, t = k.current.counterTarget / l * 100,
                                    n = (null != t ? t : 0) * 2.64,
                                    r = "".concat(n, " ").concat(264 - n),
                                    i = null === (e = f.current.querySelector(".chakra-progress")) || void 0 === e ? void 0 : e.lastElementChild,
                                    o = f.current.querySelector(".chakra-progress__indicator");
                                o && o.setAttribute("stroke-dasharray", r), i && (i.innerHTML = "".concat(t.toFixed(0), "%"))
                            }
                        }, [l]),
                        E = (0, j.useCallback)(function() {
                            var e = h.current,
                                t = p.current;
                            if (t && e) {
                                var n = e.querySelector(".chakra-progress__indicator"),
                                    r = t.querySelector(".chakra-progress__indicator");
                                if (n && r) {
                                    var i = k.current.counterCurrent / l,
                                        s = (550 > ic(g.current) ? 1 : null != i ? i : 0) * 264,
                                        a = "".concat(s, " ").concat(264 - s),
                                        c = Math.max(56 - 56 * is[o](Math.min(i, 1)), 0);
                                    e.style.transform = "translateY(".concat(c, "px)"), t.style.transform = "translateY(-".concat(c, "px)"), r.setAttribute("stroke-dasharray", a), n.setAttribute("stroke-dasharray", a)
                                }
                            }
                        }, [o, l]),
                        I = (0, j.useCallback)(function() {
                            if (!x.current) {
                                var e;
                                requestAnimationFrame(function t(n) {
                                    var r = e ? n - e : 0;
                                    if (e = n, .1 > Math.abs(k.current.counterTarget - k.current.counterCurrent)) {
                                        k.current.counterCurrent = k.current.counterTarget, E(), x.current = !1;
                                        return
                                    }
                                    k.current.counterCurrent = (0, io.t7)(k.current.counterCurrent, k.current.counterTarget, r7()(.3 * (60 / (r ? 1e3 / r : 60)), .3, 1)), E(), requestAnimationFrame(t)
                                })
                            }
                        }, [E]),
                        P = (0, j.useCallback)(function() {
                            k.current.counterTarget = 0, y(!1), w(!1), S(), I()
                        }, [I, S]);
                    return (0, j.useEffect)(function() {
                        if (!u || !e) return P();
                        var t, r, i = document.querySelector((0, ii.U8)(u));
                        if (!i) return P();
                        var o = function(t) {
                                if (!t.target.closest("[data-comments-wrapper]")) {
                                    var i = n.check(t);
                                    if (null !== h.current && null !== p.current) {
                                        var o = ic(m.current);
                                        if (!(o < 500) && (!(o < 1e3) || !1 !== i)) {
                                            var s = ic(g.current);
                                            if (!(s < 500) && (!(s < 1e3) || !1 !== i)) {
                                                var c = 0 === Math.abs(t.deltaY) ? k.current.direction : t.deltaY > 0 ? ia.DOWN : ia.UP;
                                                if ("down" === c ? d.isAtBottom() : d.isAtTop()) {
                                                    clearTimeout(r);
                                                    var u = t.wheelDeltaY ? t.wheelDeltaY === -3 * t.deltaY : 0 === t.deltaMode,
                                                        f = Math.abs(void 0 !== t.deltaY ? t.deltaY : 40) * (u ? a : 1);
                                                    if (c !== k.current.direction) {
                                                        k.current.direction = c, P();
                                                        return
                                                    }
                                                    w(c === ia.DOWN), y(c === ia.UP), k.current.counterTarget += f, k.current.direction = c, k.current.counterTarget / l >= 1 ? (e.commands.spotlightNextCard(c === ia.UP, c === ia.UP ? "bottom" : "top"), g.current = +new Date, setTimeout(function() {
                                                        P(), S()
                                                    }, 250), setTimeout(function() {
                                                        g.current = null
                                                    }, 1e3)) : r = setTimeout(P, 500), I(), S()
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            s = function() {
                                m.current = +new Date, clearTimeout(t), P(), t = setTimeout(function() {
                                    m.current = null
                                }, 1e3)
                            };
                        return i.addEventListener("scroll", s), i.addEventListener("wheel", o, {
                                passive: !0
                            }), S(),
                            function() {
                                i.removeEventListener("scroll", s), i.removeEventListener("wheel", o)
                            }
                    }, [e, n, I, o, a, l, d, S, E, P, u]), {
                        debugRef: f,
                        nextCardRef: h,
                        prevCardRef: p,
                        showNextCard: O,
                        showPrevCard: b
                    }
                },
                id = function(e) {
                    var t = e.editor,
                        n = (0, ir.ye)("debugLogging"),
                        r = (0, j.useState)("easeOutExpo"),
                        i = r[0],
                        o = r[1],
                        s = (0, j.useState)(1.5),
                        a = s[0],
                        c = s[1],
                        l = (0, j.useState)(1200),
                        d = l[0],
                        u = l[1],
                        f = il(t, {
                            easing: i,
                            touchpadFactor: a,
                            triggerThreshold: d
                        }),
                        p = f.debugRef,
                        h = f.nextCardRef,
                        x = f.prevCardRef,
                        m = f.showNextCard,
                        g = f.showPrevCard,
                        v = (0, q.CG)(function(e) {
                            var t = (0, K.i2)(e) || "",
                                n = (0, K.X9)(e),
                                r = Object.keys((n.parents[t] || []).reduce(function(e, t) {
                                    return e[t]
                                }, n.tree)),
                                i = null,
                                o = null;
                            return r.forEach(function(e, s) {
                                if (e === t) {
                                    var a = n.parents[t];
                                    0 === s ? a.length && (i = {
                                        cardId: a[a.length - 1],
                                        isSibling: !1
                                    }) : i = {
                                        cardId: r[s - 1],
                                        isSibling: !0
                                    }, s === r.length - 1 ? a.length && (o = {
                                        cardId: a[a.length - 1],
                                        isSibling: !1
                                    }) : o = {
                                        cardId: r[s + 1],
                                        isSibling: !0
                                    }
                                }
                            }), {
                                prevCard: i,
                                nextCard: o
                            }
                        }, it()),
                        b = v.prevCard,
                        y = v.nextCard,
                        C = null == y ? void 0 : y.cardId,
                        O = null == b ? void 0 : b.cardId,
                        w = (0, j.useMemo)(function() {
                            var e = null,
                                n = null;
                            return t && t.state.doc.descendants(function(t) {
                                return !(0, tM.KH)(t) || (t.attrs.id === O ? e = t : t.attrs.id === C && (n = t), !!(!e && O) || !!(!n && C))
                            }), {
                                prev: e,
                                next: n
                            }
                        }, [t, C, O]);
                    return (0, ed.jsxs)(ed.Fragment, {
                        children: [n && (0, ed.jsx)(iu, {
                            ref: p,
                            setEasing: o,
                            setTouchpadFactor: c,
                            setTriggerThreshold: u
                        }), (0, ed.jsx)(ip, {
                            ref: x,
                            direction: "up",
                            node: w.prev,
                            enabled: g,
                            offset: 16
                        }), (0, ed.jsx)(ip, {
                            ref: h,
                            direction: "down",
                            node: w.next,
                            enabled: m,
                            offset: 24
                        })]
                    })
                },
                iu = j.forwardRef(function(e, t) {
                    var n = e.setEasing,
                        r = e.setTouchpadFactor,
                        i = e.setTriggerThreshold;
                    return (0, ed.jsxs)(u.k, {
                        position: "absolute",
                        alignItems: "center",
                        bg: "gray.100",
                        left: 2,
                        bottom: 16,
                        zIndex: "overlay",
                        borderRadius: "md",
                        border: "solid 2px var(--chakra-colors-trueblue-300)",
                        p: 1,
                        children: [(0, ed.jsxs)(rQ.v, {
                            closeOnSelect: !1,
                            children: [(0, ed.jsx)(rX.j, {
                                as: el.z,
                                colorScheme: "trueblue",
                                children: "Options"
                            }), (0, ed.jsxs)(rJ.q, {
                                minWidth: "240px",
                                children: [(0, ed.jsx)(m.kH, {
                                    label: "How much total scrolling work do we need to do to trigger next/prev card?",
                                    placement: "right",
                                    children: (0, ed.jsxs)(f.x, {
                                        color: "gray",
                                        fontSize: "sm",
                                        fontWeight: "600",
                                        ml: 2,
                                        pb: 2,
                                        children: ["Scroll Threshold", " ", (0, ed.jsxs)("i", {
                                            children: ["(default=", 1200, ")"]
                                        })]
                                    })
                                }), (0, ed.jsxs)(r$.Y2, {
                                    defaultValue: 1200,
                                    min: 100,
                                    max: 1e4,
                                    precision: 0,
                                    step: 100,
                                    onChange: function(e, t) {
                                        return i(t)
                                    },
                                    children: [(0, ed.jsx)(r$.zu, {}), (0, ed.jsxs)(r$.Fi, {
                                        children: [(0, ed.jsx)(r$.WQ, {}), (0, ed.jsx)(r$.Y_, {})]
                                    })]
                                }), (0, ed.jsx)(r0.R, {}), (0, ed.jsx)(m.kH, {
                                    label: "How much extra weight do we give to touchpad scroll events?",
                                    placement: "right",
                                    children: (0, ed.jsxs)(f.x, {
                                        color: "gray",
                                        fontSize: "sm",
                                        fontWeight: "600",
                                        ml: 2,
                                        pb: 2,
                                        children: ["Touchpad Multiplier", " ", (0, ed.jsxs)("i", {
                                            children: ["(default=", 1.5, ")"]
                                        })]
                                    })
                                }), (0, ed.jsxs)(r$.Y2, {
                                    defaultValue: 1.5,
                                    min: 1,
                                    max: 10,
                                    precision: 1,
                                    step: .1,
                                    onChange: function(e, t) {
                                        return r(t)
                                    },
                                    children: [(0, ed.jsx)(r$.zu, {}), (0, ed.jsxs)(r$.Fi, {
                                        children: [(0, ed.jsx)(r$.WQ, {}), (0, ed.jsx)(r$.Y_, {})]
                                    })]
                                }), (0, ed.jsx)(r0.R, {}), (0, ed.jsxs)(r1._, {
                                    defaultValue: "easeOutExpo",
                                    title: "Easing (of peek element)",
                                    type: "radio",
                                    onChange: function(e) {
                                        return n(e)
                                    },
                                    children: [(0, ed.jsx)(r2.i, {
                                        value: "easeOutLinear",
                                        children: "easeOutLinear"
                                    }), (0, ed.jsx)(r2.i, {
                                        value: "easeOutSine",
                                        children: "easeOutSine"
                                    }), (0, ed.jsx)(r2.i, {
                                        value: "easeOutCubic",
                                        children: "easeOutCubic"
                                    }), (0, ed.jsx)(r2.i, {
                                        value: "easeOutCirc",
                                        children: "easeOutCirc"
                                    }), (0, ed.jsx)(r2.i, {
                                        value: "easeOutQuad",
                                        children: "easeOutQuad"
                                    }), (0, ed.jsx)(r2.i, {
                                        value: "easeOutQuart",
                                        children: "easeOutQuart"
                                    }), (0, ed.jsx)(r2.i, {
                                        value: "easeOutExpo",
                                        children: "easeOutExpo"
                                    }), (0, ed.jsx)(r2.i, {
                                        value: "bezierCustom1",
                                        children: "bezierCustom1"
                                    }), (0, ed.jsx)(r2.i, {
                                        value: "bezierCustom2",
                                        children: "bezierCustom2"
                                    })]
                                })]
                            })]
                        }), (0, ed.jsx)(u.k, {
                            ref: t,
                            direction: "column",
                            alignItems: "center",
                            width: "85px",
                            ml: 1,
                            sx: {
                                ".chakra-progress__indicator": {
                                    transition: "none !important",
                                    opacity: 1
                                }
                            },
                            children: (0, ed.jsx)(r5.D, {
                                value: 40,
                                color: "trueblue.500",
                                children: (0, ed.jsx)(r3.i, {})
                            })
                        })]
                    })
                });
            iu.displayName = "PeekDebugger";
            var ip = j.forwardRef(function(e, t) {
                var n = e.direction,
                    r = e.enabled,
                    i = e.node,
                    o = e.offset,
                    s = (0, j.useState)(!1),
                    a = s[0],
                    c = s[1],
                    l = (0, j.useState)(i),
                    d = l[0],
                    p = l[1];
                (0, j.useEffect)(function() {
                    c(!0);
                    var e = setTimeout(function() {
                        c(!1), p(i)
                    }, 550);
                    return function() {
                        clearTimeout(e)
                    }
                }, [i]);
                var h = (0, j.useMemo)(function() {
                        return d ? (0, eW.getCardTitle)(d.toJSON()) : ""
                    }, [d]),
                    m = !!d;
                return (0, ed.jsx)(u.k, {
                    ref: t,
                    pointerEvents: "none",
                    position: "absolute",
                    justifyContent: "center",
                    width: "100%",
                    zIndex: "overlay",
                    top: "up" === n ? "".concat(o, "px") : "inherit",
                    bottom: "down" === n ? "".concat(o, "px") : "inherit",
                    children: (0, ed.jsxs)(u.k, {
                        bg: "gray.100",
                        borderRadius: "md",
                        boxShadow: "md",
                        h: "".concat(40, "px"),
                        maxWidth: "450px",
                        justifyContent: "center",
                        opacity: r ? 1 : 0,
                        transition: "opacity ".concat(300, "ms ease-out"),
                        textAlign: "center",
                        alignItems: "center",
                        direction: "row",
                        px: 2,
                        sx: {
                            ".chakra-progress__indicator": {
                                transition: "none !important",
                                opacity: 1
                            }
                        },
                        children: [(0, ed.jsx)(r5.D, {
                            display: m ? "block" : "none",
                            color: "trueblue.500",
                            size: "20px",
                            thickness: "16px",
                            children: (0, ed.jsx)(r3.i, {
                                visibility: a ? "visible" : "hidden",
                                children: (0, ed.jsx)(x.G, {
                                    icon: nU.faCircleCheck,
                                    fontSize: "14px",
                                    style: {
                                        color: "var(--chakra-colors-gray-100)",
                                        backgroundColor: "var(--chakra-colors-trueblue-500)",
                                        borderRadius: "10px"
                                    }
                                })
                            })
                        }), m || "up" !== n ? m || "down" !== n ? null : (0, ed.jsx)(x.G, {
                            icon: rK.m5,
                            size: "xs",
                            color: "var(--chakra-colors-gray-600)"
                        }) : (0, ed.jsx)(x.G, {
                            icon: rY.yt,
                            size: "xs",
                            color: "var(--chakra-colors-gray-600)"
                        }), (0, ed.jsx)(u.k, {
                            width: 1
                        }), (0, ed.jsx)(f.x, {
                            noOfLines: 1,
                            textOverflow: "ellipsis",
                            overflowX: "hidden",
                            fontSize: "md",
                            color: m ? "gray.800" : "gray.600",
                            px: 2,
                            children: m ? h : "down" === n ? "End of presentation" : "Start of presentation"
                        })]
                    })
                })
            });
            ip.displayName = "PeekCardTab";
            var ih = n(12741),
                ix = function() {
                    var e = (0, j.useState)(["", [], {}]),
                        t = e[0],
                        n = e[1],
                        r = (0, q.qr)();
                    return (0, j.useEffect)(function() {
                        return r.subscribe(function() {
                            var e = r.getState(),
                                t = (0, K.X9)(e),
                                i = (0, K.i2)(e) || "",
                                o = t.parents[i] || [],
                                s = {};
                            Object.keys(t.tree).forEach(function(e) {
                                var n = [];
                                (function e(t) {
                                    Object.keys(t).forEach(function(r) {
                                        n.push(r), e(t[r])
                                    })
                                })(t.tree[e]), s[e] = n
                            }), n([i, o, s])
                        })
                    }, [r]), t
                },
                im = function() {
                    var e = ix(),
                        t = (0, S.Z)(e, 3),
                        n = t[0],
                        r = t[1],
                        i = t[2],
                        o = Object.keys(i);
                    return (0, ed.jsx)(er.U, {
                        position: "fixed",
                        bottom: 0,
                        w: "100vw",
                        zIndex: 10,
                        background: "blackAlpha.200",
                        px: "6px",
                        py: "2px",
                        align: "end",
                        spacing: "2px",
                        opacity: n ? 1 : 0,
                        transitionProperty: "opacity",
                        transitionDuration: "normal",
                        children: o.map(function(e, t) {
                            var s = [].concat((0, ih.Z)(r), [n])[0],
                                a = o.indexOf(s),
                                c = i[s],
                                l = 0,
                                d = 100;
                            return n && c && -1 === o.indexOf(n) && (l = (c.indexOf(n) + 1) / c.length * 100, d = 1 / c.length * 100), (0, ed.jsx)(ij, {
                                cardId: e,
                                state: t === a ? "current" : t <= a ? "prev" : "next",
                                percent: l,
                                unit: d
                            }, e)
                        })
                    })
                },
                ig = "var(--chakra-colors-trueblue-200)",
                iv = "var(--chakra-colors-trueblue-100)",
                ij = function(e) {
                    var t = e.cardId,
                        n = e.state,
                        r = e.percent,
                        i = e.unit,
                        o = "linear-gradient(to right, ".concat(ig, " 0% ").concat(r, "%, ").concat("var(--chakra-colors-trueblue-300)", " ").concat(r, "% ").concat(r + i, "%, ").concat(iv, " ").concat(r + i, "% 100%)");
                    return (0, ed.jsx)(u.k, {
                        borderRadius: "2px",
                        flex: "1",
                        h: "6px",
                        bg: "current" === n ? o : "prev" === n ? ig : iv
                    }, t)
                },
                ib = (0, rP.ZP)("Esc"),
                iy = function(e) {
                    var t = e.editor,
                        n = e.showNavigationControls,
                        r = (0, b.v9)(K.gh) === tz.q.SLIDE_VIEW,
                        i = (0, j.useState)(null),
                        o = i[0],
                        s = i[1],
                        a = (0, b.v9)(K.JA),
                        c = (0, j.useRef)(a),
                        d = (0, b.I0)(),
                        p = rW({
                            enabled: r && !a,
                            setActiveKey: s
                        });
                    return (0, j.useEffect)(function() {
                        d((0, K.e)({
                            isEditingInSlideView: !1
                        }))
                    }, [r, d]), c.current = a, (0, j.useEffect)(function() {
                        return rD.F7.on("keydown", "SLIDE_VIEW", function(e) {
                            return !!(c.current && ib(e)) && (d((0, K.e)({
                                isEditingInSlideView: !1
                            })), e.preventDefault(), !0)
                        })
                    }, [d]), (0, rA.us)(), (0, ed.jsxs)(ed.Fragment, {
                        children: [r && (0, ed.jsx)(id, {
                            editor: t
                        }), r && (0, ed.jsx)(im, {}), r && (0, ed.jsx)(u.k, {
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                            justify: "flex-end",
                            children: (0, ed.jsxs)(u.k, {
                                bg: "gray.50",
                                position: "fixed",
                                bottom: 6,
                                right: 6,
                                p: 3,
                                px: 6,
                                justify: "flex-end",
                                align: "center",
                                opacity: a ? 1 : 0,
                                pointerEvents: a ? "auto" : "none",
                                transitionProperty: "opacity, transform",
                                transitionDuration: "normal",
                                transitionTimingFunction: "ease",
                                transform: a ? "translate(0,0)" : "translate(0,100%)",
                                borderRadius: "md",
                                shadow: "md",
                                zIndex: "overlay",
                                children: [(0, ed.jsx)(f.x, {
                                    size: "sm",
                                    mr: 3,
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "DjD/sG"
                                    })
                                }), (0, ed.jsx)(el.z, {
                                    size: "sm",
                                    variant: "solid",
                                    onClick: function() {
                                        return d((0, K.e)({
                                            isEditingInSlideView: !1
                                        }))
                                    },
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "DPfwMq"
                                    })
                                })]
                            })
                        }), r && n && (0, ed.jsx)(rq, {
                            activeKey: o,
                            spotlightingByBlock: p
                        })]
                    })
                },
                iC = n(85946),
                iO = n(13414),
                iw = n(89634),
                ik = n(21819),
                iS = {
                    duration: .25,
                    delay: .75
                },
                iE = {
                    duration: .25
                },
                iI = {
                    initial: {
                        x: -190
                    },
                    animate: {
                        x: 0,
                        transition: iS
                    },
                    exit: {
                        x: -190,
                        transition: iE
                    }
                },
                iP = "filmstrip-root",
                iD = ".".concat(iP),
                iA = "filmstrip-scroller",
                iT = ".".concat(iA),
                iR = j.createContext({
                    navItemPreviewRefMap: {}
                });

            function i_() {
                return (0, j.useContext)(iR)
            }
            var iM = n(83484),
                iL = n(6110),
                iz = n(38815),
                iN = n(11895),
                iZ = n(52949);

            function iG(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var iF = function(e) {
                    var t = (0, iN.i)(e),
                        n = t.content,
                        r = t.selection,
                        i = !!(null != n && n.content),
                        o = (0, j.useMemo)(function() {
                            if (!i) return [];
                            var e, t = n.content,
                                r = (null == t ? void 0 : t[0].content) || [],
                                o = null === (e = n.content) || void 0 === e ? void 0 : e[0].attrs;
                            return r.map(function(e) {
                                var t;
                                return o && null !== (t = e.attrs) && void 0 !== t && t.id ? {
                                    cardId: e.attrs.id,
                                    isDragging: !1,
                                    displayBehavior: "normal"
                                } : null
                            }).filter(function(e) {
                                return null !== e
                            })
                        }, [n, i]),
                        s = (0, q.CG)(iZ.ZD).map(function(e) {
                            return o.find(function(t) {
                                return t.cardId === e.cardId
                            }) ? function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? iG(Object(n), !0).forEach(function(t) {
                                        (0, a.Z)(e, t, n[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : iG(Object(n)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({}, e) : null
                        }).filter(function(e) {
                            return null !== e
                        }),
                        c = (0, q.CG)(iZ.Ae);
                    return {
                        isDragging: c,
                        cards: c ? s : o,
                        editorContent: n,
                        selection: r,
                        isLoaded: i
                    }
                },
                iU = n(5715),
                iW = n(46802),
                iH = n(86378),
                iV = n(1587),
                iB = n(43926),
                iq = n(82904),
                iK = n(38564),
                iY = n(7935),
                iQ = n(9850),
                iX = n.n(iQ),
                iJ = n(78308),
                i$ = n(16975),
                i0 = n(10221),
                i1 = n(90399),
                i2 = n(60636),
                i5 = n(33295),
                i3 = function(e, t) {
                    var n = iK.Gk.getState(e.state).undoManager,
                        r = n.undoStack[n.undoStack.length - 1];
                    r && r.meta.set("filmstripState", t)
                },
                i4 = function(e) {
                    var t = (0, q.CG)(iz.wg),
                        n = (0, q.CG)(iz.zq),
                        r = (0, q.TL)(),
                        i = (0, eN.p)(),
                        o = (0, j.useCallback)(function(n, r, o) {
                            if (e) {
                                var s, a = (0, tM.Lz)(e, t);
                                if (a.length) {
                                    var c = t3.HY.from(a),
                                        d = (0, to.G8)(c, e.schema);
                                    if (!d) {
                                        i({
                                            title: (0, ed.jsx)(l.cC, {
                                                id: "fFgBN7",
                                                values: {
                                                    errorMessage: r
                                                }
                                            }),
                                            status: "error",
                                            duration: 3e3,
                                            position: "top"
                                        });
                                        return
                                    }
                                    null === (s = document.getSelection()) || void 0 === s || s.removeAllRanges(), eV()(d, {
                                        format: "text/html"
                                    });
                                    var u = i0.Z.getState(e.state);
                                    u && !o && u.clearCutData(), i({
                                        title: (0, ed.jsx)(l.cC, {
                                            id: "8p/xVT",
                                            values: {
                                                0: a.length,
                                                1: n.one,
                                                2: n.other
                                            }
                                        }),
                                        status: "success",
                                        duration: 3e3,
                                        position: "top"
                                    })
                                }
                            }
                        }, [e, t, i]),
                        s = (0, j.useCallback)(function() {
                            o({
                                one: "Copied card.",
                                other: "Copied ".concat(t.length, " cards.")
                            }, "Error copying card.", !1)
                        }, [o, t]),
                        a = (0, j.useCallback)(function() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (e) {
                                var i = (0, iz.ym)((0, q.bh)().getState());
                                r((0, iz.jf)()), e.commands.deleteCardsById(t, n), i3(e, i)
                            }
                        }, [r, e, t]),
                        c = (0, j.useCallback)(function() {
                            if (e) {
                                var n = "";
                                if (1 === t.length) {
                                    var r = (0, tM.Bw)(e, t[0]);
                                    r && (n = (0, iY.getCardTitle)(r.node.toJSON()))
                                }
                                a();
                                var o = n ? '"'.concat(n, '"') : d.ag._({
                                        id: "FyJPFh"
                                    }),
                                    s = i({
                                        title: (0, ed.jsxs)(er.U, {
                                            children: [(0, ed.jsx)(f.x, {
                                                noOfLines: 1,
                                                children: (0, ed.jsx)(l.cC, {
                                                    id: "OJTPnC",
                                                    values: {
                                                        0: t.length,
                                                        1: t.length,
                                                        displayTitle: o
                                                    }
                                                })
                                            }), (0, ed.jsx)(eZ.r, {
                                                textDecoration: "underline",
                                                onClick: function() {
                                                    (0, eU.Yw)(e.state), i.close(s)
                                                },
                                                children: (0, ed.jsx)(l.cC, {
                                                    id: "9uI/rE"
                                                })
                                            })]
                                        }),
                                        status: "info",
                                        duration: 3e3,
                                        position: "top"
                                    })
                            }
                        }, [a, e, t, i]),
                        u = (0, j.useCallback)(function() {
                            o({
                                one: "Cut card.",
                                other: "Cut ".concat(t.length, " cards")
                            }, "Error cutting card.", !0), a(!0)
                        }, [a, o, t]),
                        p = (0, j.useCallback)(function() {
                            if (e) {
                                var o = (0, tM.Lz)(e, t);
                                if (o.length) {
                                    var s = (0, tM.Bw)(e, n),
                                        a = s ? s.pos + s.node.nodeSize : e.state.doc.content.size - 1,
                                        c = o.map(function(e) {
                                            return (0, i5.h)(iX()(e.toJSON()))
                                        }).map(function(e) {
                                            return (0, i1.Zs)(e)
                                        }),
                                        d = (0, iz.ym)((0, q.bh)().getState());
                                    e.chain().insertContentAt(a, c, {
                                        updateSelection: !1
                                    }).command(function(e) {
                                        var t = e.tr,
                                            n = (0, i2.t)(t.doc.resolve(a));
                                        return n && (t = t.setSelection(n)), !0
                                    }).scrollIntoView().run(), i3(e, d), r((0, iz.xi)({
                                        beforeCardId: null == s ? void 0 : s.node.attrs.id,
                                        cardCount: c.length
                                    })), i({
                                        title: (0, ed.jsx)(l.cC, {
                                            id: "ClnFsQ",
                                            values: {
                                                0: o.length,
                                                1: o.length
                                            }
                                        }),
                                        status: "success",
                                        duration: 3e3,
                                        position: "top"
                                    })
                                }
                            }
                        }, [r, e, n, i, t]);
                    return {
                        handleAddCard: (0, j.useCallback)(function() {
                            if (e) {
                                var t = (0, iz.zq)((0, q.bh)().getState()),
                                    n = (0, tM.Bw)(e, t);
                                if (n) {
                                    var i = n.pos,
                                        o = e.view.state.doc.nodeAt(i);
                                    if (!o) {
                                        console.error("[Filmstrip] Cannot append card. Node unknown");
                                        return
                                    }
                                    var s = i + o.nodeSize,
                                        a = i$.e1.blankCard;
                                    (0, i$.ZT)({
                                        key: "blankCard",
                                        nodeName: "card"
                                    }, iJ.fe.FILMSTRIP_CARD_MENU);
                                    var c = (0, iz.ym)((0, q.bh)().getState());
                                    e.chain().insertContentAt(s, (0, i1.Zs)(a), {
                                        updateSelection: !1
                                    }).command(function(e) {
                                        var t = e.tr,
                                            n = (0, i2.t)(t.doc.resolve(s));
                                        return n && (t = t.setSelection(n)), !0
                                    }).scrollIntoView().run(), i3(e, c), r((0, iz.xi)({
                                        beforeCardId: null == n ? void 0 : n.node.attrs.id,
                                        cardCount: 1
                                    }))
                                }
                            }
                        }, [r, e]),
                        handleCopy: s,
                        handleDelete: c,
                        handleCut: u,
                        handleDuplicate: p
                    }
                },
                i6 = ["children", "icon", "onClick", "shouldHide"];

            function i8(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function i9(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i8(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i8(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var i7 = function(e) {
                    var t = e.children,
                        n = e.icon,
                        r = e.onClick,
                        i = e.shouldHide,
                        o = (0, eI.Z)(e, i6);
                    return void 0 !== i && i ? null : (0, ed.jsx)(iq.s, i9(i9({
                        icon: n,
                        onClick: r
                    }, o), {}, {
                        children: t
                    }))
                },
                oe = (0, j.memo)(function(e) {
                    var t = e.isDark;
                    return (0, ed.jsxs)(p.xu, {
                        as: "span",
                        className: "fa-layers fa-fw",
                        children: [(0, ed.jsx)(x.G, {
                            fixedWidth: !0,
                            icon: iB.faRectangle
                        }), (0, ed.jsx)(x.G, {
                            icon: iW.di,
                            transform: "shrink-4 right-6 down-4",
                            color: "var(--menu-bg, white)"
                        }), (0, ed.jsx)(x.G, {
                            icon: iW.di,
                            transform: "shrink-7 right-6 down-4"
                        }), (0, ed.jsx)(x.G, {
                            icon: iU.r8,
                            color: t ? "var(--chakra-colors-gray-800)" : "var(--chakra-colors-gray-100)",
                            transform: "shrink-10 right-6 down-4"
                        })]
                    })
                });
            oe.displayName = "AddCardIcon";
            var ot = function(e, t) {
                    if (0 === e.length || !t) return null;
                    if (1 === e.length) {
                        var n = (0, tM.Bw)(t, e[0]);
                        return n ? (0, eW.getCardTitle)(n.node.toJSON()) || "Untitled card" : null
                    }
                    return "Multiple cards selected"
                },
                on = (0, j.forwardRef)(function(e, t) {
                    var n = e.editor,
                        r = e.isOpen,
                        i = e.onClose,
                        o = e.readOnly,
                        s = e.clearPositioning,
                        a = e.rootStyles,
                        c = e.isDark,
                        d = (0, q.CG)(K.yx),
                        u = (0, eN.p)(),
                        p = i4(n),
                        h = p.handleCopy,
                        g = p.handleDelete,
                        v = p.handleCut,
                        b = p.handleDuplicate,
                        y = p.handleAddCard,
                        C = (0, q.CG)(iz.wg),
                        O = 1 === C.length,
                        w = (0, j.useMemo)(function() {
                            return O ? (0, nF.gq)({
                                cardId: C[0],
                                docId: null == d ? void 0 : d.id,
                                isPresentMode: !1
                            }) : ""
                        }, [null == d ? void 0 : d.id, O, C]),
                        k = (0, eG.V)(w).onCopy,
                        S = (0, j.useCallback)(function() {
                            k(), u({
                                title: (0, ed.jsx)(l.cC, {
                                    id: "h5GS+N"
                                }),
                                status: "success",
                                duration: 3e3,
                                position: "top"
                            })
                        }, [k, u]),
                        E = (0, ta.K)(),
                        I = (0, j.useMemo)(function() {
                            return ot(C, n)
                        }, [n, C]),
                        P = (0, j.useMemo)(function() {
                            return c ? {
                                "--menu-bg": "var(--chakra-colors-gray-900)",
                                "&:focus": {
                                    "--menu-bg": "var(--chakra-colors-gray-800)"
                                }
                            } : {}
                        }, [c]);
                    return (0, ed.jsx)(rQ.v, {
                        isOpen: r,
                        onClose: i,
                        children: (0, ed.jsxs)(rJ.q, {
                            className: "filmstrip-card-menu",
                            onContextMenu: function(e) {
                                e.preventDefault()
                            },
                            zIndex: "popover",
                            ref: t,
                            rootProps: {
                                style: a
                            },
                            w: "260px",
                            overflowY: "auto",
                            onTransitionEnd: function() {
                                r || s()
                            },
                            children: [I && (0, ed.jsxs)(ed.Fragment, {
                                children: [(0, ed.jsx)(f.x, {
                                    pl: 3,
                                    color: c ? "gray.400" : "gray.600",
                                    noOfLines: 1,
                                    children: I
                                }), (0, ed.jsx)(r0.R, {})]
                            }), (0, ed.jsx)(i7, {
                                shouldHide: o,
                                command: (0, m.cE)("Mod+X"),
                                icon: (0, ed.jsx)(x.G, {
                                    fixedWidth: !0,
                                    icon: iV.XV
                                }),
                                onClick: v,
                                children: (0, ed.jsx)(l.cC, {
                                    id: "cCd8Bs"
                                })
                            }), (0, ed.jsx)(i7, {
                                shouldHide: o,
                                command: (0, m.cE)("Mod+C"),
                                icon: (0, ed.jsx)(x.G, {
                                    fixedWidth: !0,
                                    icon: iH.kZ
                                }),
                                onClick: h,
                                children: (0, ed.jsx)(l.cC, {
                                    id: "he3ygx"
                                })
                            }), (0, ed.jsx)(i7, {
                                shouldHide: o,
                                command: (0, m.cE)("Mod+D"),
                                icon: (0, ed.jsx)(x.G, {
                                    fixedWidth: !0,
                                    icon: eL.WM
                                }),
                                onClick: b,
                                children: (0, ed.jsx)(l.cC, {
                                    id: "euc6Ns"
                                })
                            }), (0, ed.jsx)(i7, {
                                shouldHide: o,
                                icon: (0, ed.jsx)(oe, {
                                    isDark: c
                                }),
                                onClick: y,
                                sx: P,
                                children: (0, ed.jsx)(l.cC, {
                                    id: "90n2YU"
                                })
                            }), !o && (0, ed.jsx)(r0.R, {}), (0, ed.jsx)(i7, {
                                shouldHide: !O,
                                icon: (0, ed.jsx)(ts.x, {
                                    isLocked: !E,
                                    isDark: c
                                }),
                                onClick: S,
                                children: (0, ed.jsx)(l.cC, {
                                    id: "F0YmUY"
                                })
                            }), (0, ed.jsx)(i7, {
                                color: c ? "red.300" : "red.500",
                                icon: (0, ed.jsx)(x.G, {
                                    icon: e_.$,
                                    fixedWidth: !0
                                }),
                                onClick: g,
                                shouldHide: o,
                                children: (0, ed.jsx)(l.cC, {
                                    id: "cnGeoo"
                                })
                            })]
                        })
                    })
                });
            on.displayName = "FilmstripCardMenuComponent";
            var or = (0, j.memo)(on),
                oi = n(34717),
                oo = n(8635),
                os = n(57474),
                oa = n(17033),
                oc = function(e) {
                    var t = e.filmstripItemRef,
                        n = e.cardId,
                        r = e.isFilmstripSelected,
                        i = e.currentFocusedCard,
                        o = e.editor,
                        s = e.isAnimating,
                        a = (0, t_.As)("filmstrip"),
                        c = (0, q.CG)(iz.DM);
                    (0, j.useEffect)(function() {
                        t.current && n === i && (null != o && o.isFocused && !s ? a.scrollElementIntoView({
                            element: t.current,
                            offsetFromTop: 200
                        }) : r && n === c && requestAnimationFrame(function() {
                            if (t.current && a.scroller) {
                                var e, n = a.scroller.getBoundingClientRect(),
                                    r = t.current.getBoundingClientRect(),
                                    i = r.top,
                                    o = r.bottom,
                                    s = r.height,
                                    c = null !== (e = (0, tL.LY)(t.current, iT)) && void 0 !== e ? e : 0;
                                if (o >= n.bottom) {
                                    var l = Math.max(0, c + s - a.scroller.clientHeight + 4);
                                    a.scrollTo({
                                        top: l
                                    })
                                } else i <= n.top && a.scrollTo({
                                    top: c
                                })
                            }
                        }))
                    }, [n, i, o, c, r, a, t, s])
                };

            function ol(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function od(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ol(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ol(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ou = (0, eK.E)(u.k),
                of = function(e) {
                    var t = e.card,
                        n = e.index,
                        r = e.isFirst,
                        i = e.isEditorFocused,
                        o = e.currentFocusedCard,
                        s = e.isFilmstripSelected,
                        a = e.showScreenshots,
                        c = e.screenshotsEnabled,
                        l = e.readOnly,
                        d = e.shouldHide,
                        h = e.isDragInProgress,
                        x = e.useXsFontSize,
                        g = e.numberOfCardsDragging,
                        v = e.onContextClick,
                        b = e.editor,
                        y = e.isAnimating,
                        C = t.cardId,
                        O = t.isDragging,
                        w = (0, j.useRef)(null);
                    oc({
                        filmstripItemRef: w,
                        cardId: C,
                        isFilmstripSelected: s,
                        currentFocusedCard: o,
                        editor: b,
                        isAnimating: y
                    });
                    var k = (0, q.TL)(),
                        S = (0, oo.c)(C),
                        E = null == S ? void 0 : S.previewUrl,
                        I = (0, j.useMemo)(function() {
                            return {
                                boxShadow: s ? "var(--fs-item-selected-box-shadow)" : i ? "var(--fs-item-focused-box-shadow)" : "0 0 0 1px var(--fs-item-border-color)"
                            }
                        }, [i, s]),
                        P = (0, j.useCallback)(function(e) {
                            if (C) {
                                var t = e.shiftKey,
                                    n = !t && (e.metaKey || e.ctrlKey);
                                if (t && !l) k((0, iz.YC)({
                                    id: C,
                                    currentFocusedCard: o
                                }));
                                else if (n && !l) k((0, iz.sY)({
                                    id: C
                                }));
                                else {
                                    if (h) return;
                                    k((0, iz.Ti)({
                                        id: C
                                    })), k((0, K.Qx)({
                                        attached: !1
                                    })), b && (0, oa.YS)({
                                        cardId: C,
                                        editor: b
                                    })
                                }
                            }
                        }, [C, l, k, o, h, b]);
                    return (0, ed.jsx)(p.xu, {
                        pos: "relative",
                        className: "filmstrip-item",
                        ref: w,
                        pt: 1,
                        mt: r ? void 0 : 1,
                        onClick: P,
                        onContextMenu: v,
                        cursor: "pointer",
                        userSelect: "none",
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        display: d ? "none" : void 0,
                        children: (0, ed.jsxs)(u.k, {
                            justifyContent: "space-between",
                            align: "flex-start",
                            gap: "6px",
                            children: [(0, ed.jsx)(f.x, {
                                lineHeight: 1,
                                transitionProperty: "common",
                                transitionDuration: "normal",
                                opacity: O ? 0 : 1,
                                textAlign: "center",
                                color: s ? "var(--fs-item-selected-text-color)" : "inherit",
                                fontSize: x ? "xs" : "sm",
                                w: x ? 6 : 5,
                                children: n
                            }), (0, ed.jsxs)(p.xu, {
                                position: "relative",
                                children: [(0, ed.jsx)(p.xu, od(od({}, I), {}, {
                                    borderRadius: "md",
                                    overflow: "hidden",
                                    children: a ? (0, ed.jsx)(m.qh, {
                                        src: c ? E : oi.Z.src,
                                        fallbackSrc: oi.Z.src,
                                        shouldShow: !!E,
                                        w: "100px",
                                        m: 1
                                    }) : (0, ed.jsx)(op, {
                                        cardId: C
                                    })
                                })), (0, ed.jsx)(eY.M, {
                                    children: g && (0, ed.jsx)(u.k, {
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        transform: "translate(-50%, 50%)",
                                        children: (0, ed.jsx)(ou, {
                                            initial: {
                                                scale: .5,
                                                opacity: 0
                                            },
                                            exit: {
                                                scale: .5,
                                                opacity: 0
                                            },
                                            animate: {
                                                scale: 1,
                                                opacity: 1
                                            },
                                            h: 5,
                                            minW: 5,
                                            px: 1,
                                            borderRadius: "full",
                                            bg: "trueblue.300",
                                            color: "white",
                                            fontSize: "xs",
                                            fontWeight: 600,
                                            boxShadow: "sm",
                                            justify: "center",
                                            align: "center",
                                            children: (0, ed.jsx)(f.x, {
                                                children: g
                                            })
                                        }, "badge-number")
                                    })
                                })]
                            })]
                        })
                    })
                },
                op = function(e) {
                    var t = e.cardId,
                        n = i_().navItemPreviewRefMap,
                        r = (0, q.CG)(K.Pu),
                        i = (0, os.J)(r, !1);
                    return (0, ed.jsx)(u.k, {
                        sx: nt.n,
                        css: {
                            "--editor-font-size": "0.125rem",
                            "--editor-width": "".concat(100, "px"),
                            "--thumbnail-min-height": "40px"
                        },
                        justifyContent: "center",
                        overflow: "hidden",
                        pointerEvents: "none",
                        bg: "gray.100",
                        minH: "var(--thumbnail-min-height)",
                        w: "var(--editor-width)",
                        children: (0, ed.jsx)("div", {
                            className: "ProseMirror",
                            children: (0, ed.jsx)(u.k, {
                                className: "doc-content-wrapper",
                                direction: "column",
                                align: "center",
                                sx: i,
                                children: (0, ed.jsx)("div", {
                                    style: {
                                        width: "100%"
                                    },
                                    ref: function(e) {
                                        e && (n[t] = e)
                                    }
                                })
                            })
                        })
                    })
                },
                oh = n(28316),
                ox = n(12691),
                om = (0, j.memo)(function(e) {
                    var t = e.content,
                        n = e.theme,
                        r = (0, j.useState)(!1),
                        i = r[0],
                        o = r[1];
                    return ((0, j.useEffect)(function() {
                        requestAnimationFrame(function() {
                            o(!0)
                        })
                    }, []), i) ? (0, ed.jsx)(nt.m, {
                        theme: n,
                        content: t,
                        isThumbnail: !0,
                        portalComponent: og
                    }) : null
                }),
                og = function(e) {
                    var t = e.renderers,
                        n = i_().navItemPreviewRefMap;
                    return (0, ed.jsx)(ed.Fragment, {
                        children: Object.entries(t).map(function(e) {
                            var t = (0, S.Z)(e, 2),
                                r = t[0],
                                i = t[1],
                                o = i.props.node;
                            if ("document" === o.type.name) return null;
                            var s = (0, ox.KH)(o) ? n[o.attrs.id] : null;
                            return oh.createPortal(i.reactElement, s || i.element, r)
                        })
                    })
                };
            om.displayName = "FilmstripPreviewEditor";
            var ov = function(e, t) {
                    if (!e || !t) return {
                        id: null,
                        pos: null
                    };
                    var n = e.$from,
                        r = e.from,
                        i = e.to,
                        o = null,
                        s = null;
                    return n.doc.nodesBetween(r, i, function(e, t) {
                        var r = n.doc.resolve(t).depth;
                        return !(!o && (0, tM.KH)(e)) || 1 !== r || (o = e.attrs.id, s = t, !1)
                    }), {
                        id: o,
                        pos: s
                    }
                },
                oj = function() {
                    var e;
                    return !!(null !== (e = document.activeElement) && void 0 !== e && e.closest(iD))
                },
                ob = function() {
                    var e = (0, j.useRef)(null),
                        t = (0, j.useState)(!1),
                        n = t[0],
                        r = t[1],
                        i = (0, j.useState)([0, 0]),
                        o = i[0],
                        s = i[1],
                        a = (0, j.useState)("bottom"),
                        c = a[0],
                        l = a[1],
                        d = (0, q.TL)(),
                        u = (0, j.useCallback)(function() {
                            r(!1)
                        }, []),
                        f = (0, j.useCallback)(function() {
                            s([0, 0]), l("bottom")
                        }, []),
                        p = (0, j.useCallback)(function(e) {
                            r(!0), s(e)
                        }, []),
                        h = (0, j.useCallback)(function(t) {
                            return function(n) {
                                n.preventDefault(), d((0, iz.uu)({
                                    id: t
                                })), p([n.clientX, n.clientY]);
                                var r, i = null === (r = e.current) || void 0 === r ? void 0 : r.offsetHeight;
                                if (null != i) {
                                    var o = window.innerHeight < n.clientY + i,
                                        s = n.clientY < i;
                                    o && !s ? l("top") : o && s ? l("center") : l("bottom")
                                }
                            }
                        }, [d, e, p]),
                        x = (0, j.useMemo)(function() {
                            var t, n = o[1],
                                r = null === (t = e.current) || void 0 === t ? void 0 : t.offsetHeight,
                                i = r ? window.innerHeight - (n + r + 8) : void 0,
                                s = "center" === c && i ? "translateY(".concat(i, "px)") : "top" === c ? "translateY(-100%)" : void 0;
                            return {
                                left: o[0],
                                top: o[1],
                                transform: s,
                                transformOrigin: "top"
                            }
                        }, [c, o]);
                    return {
                        menuRef: e,
                        isFilmstripCardMenuOpen: n,
                        onFilmstripCardMenuClose: u,
                        handleContextMenu: h,
                        menuRootStyles: x,
                        clearPositioning: f
                    }
                },
                oy = n(41261),
                oC = tT()(oy.YS, 200),
                oO = function(e) {
                    var t = e.isFocused,
                        n = e.readOnly,
                        r = e.firstFocusedCardId,
                        i = e.editor,
                        o = e.isDragging,
                        s = i4(i),
                        a = s.handleCopy,
                        c = s.handleDelete,
                        l = s.handleCut,
                        d = s.handleDuplicate,
                        u = (0, q.TL)(),
                        f = (0, q.qr)();
                    (0, j.useEffect)(function() {
                        return iw.F7.on("keydown", "FILMSTRIP", function(e) {
                            if (!t) return !1;
                            switch (e.key) {
                                case "Escape":
                                    if (o) return u((0, iZ.vL)()), !0;
                                    return !1;
                                case "Backspace":
                                case "Delete":
                                    if (!n) return c(), !0;
                                    return !1;
                                case "a":
                                case "A":
                                    if (!n && (e.ctrlKey || e.metaKey)) return e.preventDefault(), u((0, iz.td)({
                                        currentFocusedCard: r
                                    })), !0;
                                    return !1;
                                case "c":
                                case "C":
                                    if (!n && (e.ctrlKey || e.metaKey)) return a(), !0;
                                    return !1;
                                case "d":
                                case "D":
                                    if (!n && (e.ctrlKey || e.metaKey)) return e.preventDefault(), d(), !0;
                                    return !1;
                                case "x":
                                case "X":
                                    if (!n && (e.ctrlKey || e.metaKey)) return l(), !0;
                                    return !1;
                                case "ArrowDown":
                                    u((0, iz.ut)({
                                        direction: "down",
                                        withShift: !n && e.shiftKey,
                                        currentFocusedCard: r
                                    }));
                                    var s = (0, iz.wg)(f.getState())[0];
                                    return !e.shiftKey && i && s && (oC({
                                        cardId: s,
                                        editor: i
                                    }), u((0, K.Qx)({
                                        attached: !1
                                    }))), !0;
                                case "ArrowUp":
                                    u((0, iz.ut)({
                                        direction: "up",
                                        withShift: !n && e.shiftKey,
                                        currentFocusedCard: r
                                    }));
                                    var p = (0, iz.wg)(f.getState())[0];
                                    return !e.shiftKey && i && p && (oC({
                                        cardId: p,
                                        editor: i
                                    }), u((0, K.Qx)({
                                        attached: !1
                                    }))), !0;
                                default:
                                    return !1
                            }
                        })
                    }, [u, r, t, o, c, a, d, l, n, i, f])
                },
                ow = n(74993),
                ok = function(e) {
                    var t = (0, q.qr)(),
                        n = (0, eN.p)(),
                        r = (0, q.TL)();
                    (0, j.useEffect)(function() {
                        var i = function(i) {
                            var o, s = t.getState();
                            if (e && oj() && (0, K.hN)(s)) {
                                var a = null === (o = i.clipboardData) || void 0 === o ? void 0 : o.getData("text/html");
                                if (a) {
                                    var c = (0, ow.T)(a, e.schema).content.content.filter(function(e) {
                                        return (0, ox.KH)(e)
                                    });
                                    if (c.length) {
                                        var d = (0, tM.Bw)(e, (0, iz.zq)(s)),
                                            u = d ? d.pos + d.node.nodeSize : e.state.doc.content.size - 1,
                                            f = c.map(function(e) {
                                                return (0, i5.h)(iX()(e.toJSON()))
                                            }).map(function(e) {
                                                return (0, i1.Zs)(e)
                                            }),
                                            p = (0, iz.ym)((0, q.bh)().getState());
                                        e.chain().insertContentAt(u, f, {
                                            updateSelection: !1
                                        }).command(function(e) {
                                            var t = e.tr;
                                            t.setMeta("annotationEvent", {
                                                type: "filmstrip-paste",
                                                insertPos: u
                                            });
                                            var n = (0, i2.t)(t.doc.resolve(u));
                                            return n && (t = t.setSelection(n)), !0
                                        }).scrollIntoView().run(), i.preventDefault(), i3(e, p), r((0, iz.xi)({
                                            beforeCardId: null == d ? void 0 : d.node.attrs.id,
                                            cardCount: f.length
                                        })), n({
                                            title: (0, ed.jsx)(l.cC, {
                                                id: "3viq5b",
                                                values: {
                                                    0: c.length,
                                                    1: c.length
                                                }
                                            }),
                                            status: "success",
                                            duration: 3e3,
                                            position: "top"
                                        })
                                    }
                                }
                            }
                        };
                        return document.addEventListener("paste", i),
                            function() {
                                document.removeEventListener("paste", i)
                            }
                    }, [r, e, t, n])
                },
                oS = n(30453),
                oE = function() {
                    var e = (0, oS.o)(),
                        t = (0, j.useRef)(null),
                        n = (0, j.useRef)(),
                        r = (0, j.useRef)(),
                        i = (0, j.useRef)(),
                        o = (0, j.useCallback)(function(e) {
                            if (i.current) {
                                var t = oP(i.current),
                                    o = e.target;
                                if (t && o && void 0 !== n.current && void 0 !== r.current) {
                                    var s = o.scrollTop - n.current;
                                    t.y = r.current - s
                                }
                            }
                        }, []),
                        s = (0, j.useCallback)(function(e, n) {
                            var r, i = t.current;
                            if (i) {
                                var o = i.getBoundingClientRect(),
                                    s = n.point.y,
                                    a = null === (r = e.target) || void 0 === r ? void 0 : r.closest("[draggable]"),
                                    c = null == a ? void 0 : a.parentElement;
                                c && (s < o.top + 25 && (a !== c.firstElementChild || i.scrollTop > 0) ? i.scrollTop -= 5 : s > o.bottom - 25 && (a !== c.lastElementChild || i.scrollTop < i.scrollHeight) && (i.scrollTop += 5))
                            }
                        }, []),
                        a = (0, j.useCallback)(function() {
                            var o = t.current,
                                s = oI(e);
                            if (o && s) {
                                i.current = s, n.current = o.scrollTop;
                                var a = oP(s);
                                a && (r.current = a.y)
                            }
                        }, [e]);
                    return {
                        scrollerRef: t,
                        onScroll: o,
                        dragControls: e,
                        onDrag: s,
                        onDragStart: a,
                        onDragEnd: (0, j.useCallback)(function() {
                            n.current = void 0, r.current = void 0, i.current = void 0
                        }, [])
                    }
                },
                oI = function(e) {
                    try {
                        return Array.from(e.componentControls).find(function(e) {
                            return e.isDragging
                        })
                    } catch (e) {
                        console.error("[caught] findDraggingElementControls", e);
                        return
                    }
                },
                oP = function(e) {
                    try {
                        return e.panSession.history[0]
                    } catch (e) {
                        console.error("[caught] getDraggingElementStartPoint", e);
                        return
                    }
                };

            function oD(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function oA(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? oD(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oD(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var oT = (0, eK.E)(u.k),
                oR = (0, eK.E)(p.xu),
                o_ = "data-".concat(ik.dh),
                oM = function(e) {
                    var t = e.handleClose,
                        n = e.editor,
                        r = e.readOnly,
                        i = (0, j.useState)(!1),
                        o = i[0],
                        s = i[1],
                        c = (0, j.useRef)(null),
                        d = iF(n),
                        f = d.cards,
                        h = d.isDragging,
                        g = d.editorContent,
                        v = d.selection,
                        b = d.isLoaded,
                        y = (0, j.useMemo)(function() {
                            return ov(v, n)
                        }, [n, v]).id,
                        C = (0, q.TL)(),
                        O = (0, q.CG)(iz.wg),
                        w = (0, q.CG)(iZ.pe),
                        k = (0, q.CG)(iZ.u9),
                        S = (0, q.CG)(iZ.K3),
                        E = (0, j.useRef)(h),
                        I = ob(),
                        P = I.menuRef,
                        D = I.isFilmstripCardMenuOpen,
                        A = I.onFilmstripCardMenuClose,
                        T = I.clearPositioning,
                        R = I.handleContextMenu,
                        _ = I.menuRootStyles,
                        M = (0, j.useCallback)(function() {
                            if (A(), o) {
                                var e;
                                null === (e = c.current) || void 0 === e || e.focus()
                            }
                        }, [o, A]),
                        L = oE(),
                        z = L.scrollerRef,
                        N = L.onScroll,
                        Z = L.dragControls,
                        G = L.onDrag,
                        F = L.onDragStart,
                        U = L.onDragEnd,
                        W = (0, j.useCallback)(function(e) {
                            return function() {
                                if (E.current = !0, F(), c.current) {
                                    var t = c.current.getBoundingClientRect().height;
                                    c.current.style.height = "".concat(t, "px")
                                }
                                var n = O.includes(e) ? O : [e];
                                C((0, iz.WF)({
                                    selectedCardIdsToDrag: n
                                })), C((0, iZ.CA)({
                                    cardIds: f.map(function(e) {
                                        return e.cardId
                                    }),
                                    leaderCardId: e,
                                    selectedCardIds: n
                                }))
                            }
                        }, [f, C, O, F]),
                        H = (0, j.useCallback)(function() {
                            n && (C((0, iZ.vL)()), n.commands.rearrangeCardsById(f.map(function(e) {
                                return e.cardId
                            }), k), U())
                        }, [f, C, n, k, U]),
                        V = (0, j.useCallback)(function() {
                            c.current && (c.current.style.height = "auto"), E.current = !1
                        }, []);
                    ok(n), oO({
                        isFocused: o,
                        readOnly: r,
                        firstFocusedCardId: y,
                        editor: n,
                        isDragging: h
                    }), (0, ek.O)({
                        ref: c,
                        handler: function(e) {
                            P.current && P.current.contains(e.target) || (D && A(), C((0, iz.Mt)()))
                        }
                    });
                    var B = (0, ir.ye)("filmstripWithScreenshots"),
                        Y = (0, ir.ye)("screenshotsEnabled"),
                        Q = (0, q.CG)(K.Pu),
                        X = (0, eF.ff)("whiteAlpha.600", "whiteAlpha.100"),
                        J = (0, eF.ff)("#F9FAFBDD", "gray.900"),
                        $ = (0, eF.ff)("gray.800", "gray.200"),
                        ee = (0, eF.ff)("blackAlpha.400", "whiteAlpha.500"),
                        et = (0, eF.ff)("trueblue.500", "trueblue.200"),
                        en = (0, eF.If)().colorMode,
                        er = (0, j.useMemo)(function() {
                            var e;
                            return {
                                "--fs-item-border-color": (e = "dark" === en) ? "var(--chakra-colors-whiteAlpha-300)" : "var(--chakra-colors-gray-200)",
                                "--fs-item-focused-box-shadow": "0 0 0 2px var(--chakra-ring-color)",
                                "--fs-item-selected-box-shadow": "0 0 0 2px var(--chakra-colors-trueblue-300)",
                                "--fs-item-selected-text-color": e ? "var(--chakra-colors-trueblue-200)" : "var(--chakra-colors-trueblue-500)"
                            }
                        }, [en]),
                        ei = (0, j.useMemo)(function() {
                            return f.length >= 100
                        }, [f.length]),
                        eo = (0, j.useMemo)(function() {
                            var e = k.length;
                            return h && e > 1 ? e : null
                        }, [h, k.length]),
                        es = (0, j.useState)(!1),
                        ea = es[0],
                        ec = es[1],
                        eu = (0, t_.As)("filmstrip");
                    return (0, j.useEffect)(function() {
                        eu.setScrollSelector(iT)
                    }, [eu]), (0, ed.jsxs)(ed.Fragment, {
                        children: [(0, ed.jsxs)(u.k, {
                            pointerEvents: "none",
                            position: "absolute",
                            direction: "column",
                            left: 2,
                            top: 12,
                            bottom: 2,
                            justifyContent: "center",
                            color: $,
                            children: [n && b && (0, ed.jsx)(om, {
                                content: g,
                                theme: Q
                            }), (0, ed.jsxs)(oT, oA(oA(oA({
                                "data-guider-highlight": "filmstrip",
                                pointerEvents: "auto"
                            }, (0, a.Z)({}, o_, !0)), {}, {
                                className: iP,
                                onAnimationComplete: function() {
                                    ec(!1)
                                },
                                onAnimationStart: function() {
                                    return ec(!0)
                                }
                            }, iI), {}, {
                                zIndex: 11,
                                tabIndex: 0,
                                _focus: {
                                    outline: "none"
                                },
                                onFocus: function() {
                                    s(!0), null == n || n.commands.blur()
                                },
                                onBlur: function(e) {
                                    var t, n;
                                    c.current && null !== (t = c.current) && void 0 !== t && t.contains(e.relatedTarget) || null !== (n = P.current) && void 0 !== n && n.contains(e.relatedTarget) || s(!1)
                                },
                                borderRadius: "md",
                                bg: J,
                                borderWidth: "1px",
                                borderColor: X,
                                shadow: "lg",
                                backdropFilter: "blur(20px)",
                                maxHeight: "100%",
                                alignSelf: "flex-start",
                                ref: c,
                                _hover: {
                                    ".filmstrip-nubbin": {
                                        opacity: 1
                                    }
                                },
                                children: [(0, ed.jsx)(oR, {
                                    className: iA,
                                    layoutScroll: !0,
                                    overflowY: "auto",
                                    position: "relative",
                                    sx: oA({
                                        "&::-webkit-scrollbar": {
                                            opacity: 1,
                                            width: "5px"
                                        },
                                        "&::-webkit-scrollbar-track": {
                                            opacity: 0,
                                            width: "5px"
                                        },
                                        "&::-webkit-scrollbar-thumb": {
                                            background: ee,
                                            borderRadius: "full"
                                        },
                                        scrollbarGutter: "stable"
                                    }, er),
                                    ref: z,
                                    onScroll: N,
                                    py: 2,
                                    pl: 1,
                                    pr: 2,
                                    children: (0, ed.jsx)(iL.t.Group, {
                                        onReorder: function(e) {
                                            var t = e.map(function(e) {
                                                return e.cardId
                                            });
                                            C((0, iZ.k)({
                                                reorderedCardIds: t
                                            }))
                                        },
                                        values: f,
                                        axis: "y",
                                        children: n && b && f.map(function(e, t) {
                                            var i = e.cardId,
                                                o = e.displayBehavior,
                                                s = O.includes(i),
                                                a = S === i;
                                            return (0, ed.jsx)(iL.t.Item, {
                                                drag: !r && "y",
                                                value: e,
                                                onDragStart: W(i),
                                                onDragEnd: H,
                                                onDragTransitionEnd: V,
                                                className: "reorder-item",
                                                dragControls: Z,
                                                onDrag: G,
                                                style: {
                                                    position: "relative",
                                                    listStyle: "none"
                                                },
                                                children: (0, ed.jsx)( of , {
                                                    readOnly: r,
                                                    editor: n,
                                                    card: e,
                                                    index: h && void 0 !== w[i] ? w[i] : t + 1,
                                                    isFirst: 0 === t,
                                                    useXsFontSize: ei,
                                                    shouldHide: "hidden" === o,
                                                    isDragInProgress: E.current,
                                                    isEditorFocused: y === i && n.isFocused,
                                                    isFilmstripSelected: !!s,
                                                    currentFocusedCard: y,
                                                    showScreenshots: B,
                                                    screenshotsEnabled: Y,
                                                    numberOfCardsDragging: a ? eo : null,
                                                    onContextClick: R(i),
                                                    isAnimating: ea
                                                })
                                            }, i)
                                        })
                                    })
                                }), (0, ed.jsx)(iO.TX, {
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "C8DFL7"
                                    })
                                }), (0, ed.jsx)(m.kH, {
                                    placement: "top",
                                    label: (0, ed.jsx)(l.cC, {
                                        id: "C8DFL7"
                                    }),
                                    shortcut: "Mod+\\",
                                    children: (0, ed.jsx)(p.xu, {
                                        as: el.z,
                                        variant: "unstyled",
                                        position: "absolute",
                                        right: 0,
                                        top: "50%",
                                        transform: "translate(calc(100%), -50%)",
                                        onClick: t,
                                        h: 10,
                                        fontSize: "sm",
                                        borderWidth: "1px",
                                        borderColor: X,
                                        borderLeft: "none",
                                        shadow: "lg",
                                        bg: J,
                                        borderRightRadius: "md",
                                        borderLeftRadius: "none",
                                        opacity: 0,
                                        minW: 0,
                                        p: 2,
                                        transitionProperty: "common",
                                        transitionDuration: "normal",
                                        transitionTimingFunction: "ease",
                                        _hover: {
                                            color: et
                                        },
                                        className: "filmstrip-nubbin",
                                        children: (0, ed.jsx)(x.G, {
                                            icon: iM.A3
                                        })
                                    })
                                })]
                            }))]
                        }), n && (0, ed.jsx)(or, {
                            ref: P,
                            editor: n,
                            readOnly: r,
                            isOpen: D,
                            onClose: M,
                            clearPositioning: T,
                            rootStyles: _,
                            isDark: "dark" === en
                        })]
                    })
                },
                oL = n(13720),
                oz = function() {
                    var e = (0, q.TL)(),
                        t = (0, q.CG)(K.GX),
                        n = (0, oL.i)({
                            base: !1,
                            lg: !0
                        }) || !1,
                        r = (0, j.useState)(!1),
                        i = r[0],
                        o = r[1],
                        s = (0, j.useState)(!1),
                        a = s[0],
                        c = s[1],
                        l = (0, j.useCallback)(function() {
                            e((0, K.dQ)({
                                isOpen: !1
                            })), e((0, iz.Mt)()), c(!0)
                        }, [e]),
                        d = (0, j.useCallback)(function() {
                            n || o(!0), e((0, K.dQ)({
                                isOpen: !0
                            }))
                        }, [n, e]),
                        u = !n && i;
                    return (0, j.useEffect)(function() {
                        var t = !n && !i,
                            r = n && !a;
                        t ? e((0, K.dQ)({
                            isOpen: !1
                        })) : r && e((0, K.dQ)({
                            isOpen: !0
                        }))
                    }, [e, n, i, a]), {
                        onClose: l,
                        onOpen: d,
                        isOpen: t && (n || !n && u)
                    }
                },
                oN = (0, eK.E)(el.z),
                oZ = (0, j.memo)(function() {
                    var e = (0, tV._i)().editor,
                        t = oz(),
                        n = t.isOpen,
                        r = t.onClose,
                        i = t.onOpen,
                        o = (0, j.useRef)({
                            navItemPreviewRefMap: {}
                        }),
                        s = (0, ik.Br)("edit"),
                        a = (0, q.CG)(K.hN),
                        c = (0, eO.Yy)(),
                        d = (0, j.useState)(!1),
                        f = d[0],
                        p = d[1],
                        h = (0, j.useCallback)(function() {
                            p(!0), setTimeout(function() {
                                i()
                            }), setTimeout(function() {
                                p(!1)
                            }, 750)
                        }, [i]);
                    return (0, j.useEffect)(function() {
                        return iw.F7.on("keydown", "FILMSTRIP", function(e) {
                            return !!(0, rP.ZP)("Mod+\\")(e) && (n ? r() : h(), !0)
                        })
                    }, [n, r, h]), (0, ed.jsx)(iR.Provider, {
                        value: o.current,
                        children: (0, ed.jsx)(m.Wk, {
                            isDark: c,
                            children: (0, ed.jsx)(eY.M, {
                                children: n ? (0, ed.jsx)(oM, {
                                    handleClose: r,
                                    editor: e,
                                    readOnly: !s || !a
                                }, "filmstrip") : (0, ed.jsx)(m.kH, {
                                    placement: "top-end",
                                    label: (0, ed.jsx)(l.cC, {
                                        id: "7ShgZt"
                                    }),
                                    isDisabled: f,
                                    shortcut: "Mod+\\",
                                    children: (0, ed.jsxs)(oN, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            transition: iE
                                        },
                                        exit: {
                                            opacity: 0,
                                            transition: iS
                                        },
                                        zIndex: 11,
                                        css: {
                                            "--trigger-height": "var(--chakra-sizes-14)"
                                        },
                                        tabIndex: -1,
                                        position: "fixed",
                                        left: 2,
                                        top: "calc(50% - (var(--trigger-height) / 2) + var(--chakra-sizes-5))",
                                        borderRadius: "xl",
                                        "data-guider-highlight": "filmstrip",
                                        h: "var(--trigger-height)",
                                        w: 8,
                                        onClick: h,
                                        children: [(0, ed.jsx)(iO.TX, {
                                            children: (0, ed.jsx)(l.cC, {
                                                id: "7ShgZt"
                                            })
                                        }), f ? (0, ed.jsx)(u.k, {
                                            children: (0, ed.jsx)(np.$, {
                                                size: "sm"
                                            })
                                        }) : (0, ed.jsx)(x.G, {
                                            icon: iC.Cj
                                        })]
                                    }, "filmstrip-opener")
                                })
                            })
                        })
                    })
                });
            oZ.displayName = "Filmstrip";
            var oG = n(3974),
                oF = n(1472),
                oU = n(93319),
                oW = n(91128),
                oH = n(97873),
                oV = n(42879),
                oB = function(e) {
                    var t, n = e.doc,
                        r = (0, j.useState)(!1),
                        i = r[0],
                        o = r[1],
                        s = null == n ? void 0 : n.id,
                        a = null == n ? void 0 : null === (t = n.organization) || void 0 === t ? void 0 : t.id,
                        c = (0, tU.py)("manage", n),
                        d = (0, y.bBo)({
                            variables: {
                                workspaceId: a
                            },
                            skip: !a || !c
                        }).data,
                        u = (0, oV.uK)({
                            doc: n,
                            sites: null == d ? void 0 : d.sites
                        }),
                        f = (0, oV.D5)({
                            site: u,
                            docId: s
                        }),
                        p = (0, oH.q)({
                            doc: n,
                            site: u,
                            path: f
                        }).publishAndDeploy,
                        h = (0, j.useCallback)((0, tq.Z)(tY().mark(function e() {
                            return tY().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o(!0), e.next = 3, p();
                                    case 3:
                                        o(!1);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [p]);
                    return u ? (0, ed.jsx)(el.z, {
                        size: "sm",
                        variant: "solid",
                        fontWeight: "400",
                        leftIcon: (0, ed.jsx)(x.G, {
                            icon: oW.A$
                        }),
                        onClick: h,
                        isLoading: i,
                        children: (0, ed.jsx)(l.cC, {
                            id: "EEYbdt"
                        })
                    }) : null
                },
                oq = n(92743),
                oK = n(56317),
                oY = n(6985),
                oQ = n(25298),
                oX = n(20010),
                oJ = n(48273),
                o$ = n(92619),
                o0 = n(27777),
                o1 = n(67453),
                o2 = function(e) {
                    var t = e.isOpen,
                        n = e.onClose,
                        r = e.onSaveSuccess,
                        i = e.docId,
                        o = (0, eN.p)(),
                        s = (0, j.useRef)(null),
                        a = (0, j.useState)(""),
                        c = a[0],
                        d = a[1],
                        u = (0, y.D1_)(),
                        f = (0, S.Z)(u, 2),
                        p = f[0],
                        h = f[1].loading,
                        x = function() {
                            p({
                                variables: {
                                    id: i,
                                    title: c
                                }
                            }).then(function() {
                                d(function() {
                                    return ""
                                }), r()
                            }).catch(function(e) {
                                console.error(e), o({
                                    title: (0, ed.jsx)(ed.Fragment, {
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "AToAqe",
                                            values: {
                                                0: e.message
                                            }
                                        })
                                    }),
                                    position: "top",
                                    status: "error"
                                })
                            })
                        };
                    return (0, ed.jsxs)(oX.u_, {
                        returnFocusOnClose: !1,
                        onClose: n,
                        closeOnOverlayClick: !0,
                        isOpen: t,
                        initialFocusRef: s,
                        children: [(0, ed.jsx)(tX.Z, {}), (0, ed.jsxs)(oJ.h, {
                            children: [(0, ed.jsx)(o$.x, {
                                children: (0, ed.jsx)(l.cC, {
                                    id: "kq/0Sg",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: em.Yc
                                    }
                                })
                            }), (0, ed.jsx)(t$.o, {}), (0, ed.jsx)(t0.f, {
                                children: (0, ed.jsx)(o0.I, {
                                    ref: s,
                                    value: c,
                                    required: !0,
                                    placeholder: (0, o1.$)(),
                                    onChange: function(e) {
                                        return d(e.target.value)
                                    },
                                    onKeyDown: function(e) {
                                        "Enter" === e.key && x()
                                    }
                                })
                            }), (0, ed.jsx)(t1.m, {
                                children: (0, ed.jsx)(eo.K, {
                                    spacing: 2,
                                    direction: "row",
                                    align: "center",
                                    children: (0, ed.jsx)(el.z, {
                                        isLoading: h,
                                        isDisabled: h || !c || !c.length,
                                        onClick: function() {
                                            x()
                                        },
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "tfDRzk"
                                        })
                                    })
                                })
                            })]
                        })]
                    })
                },
                o5 = (0, j.memo)(function(e) {
                    var t = e.doc,
                        n = (0, j.useCallback)(function() {
                            return oY.T.emit("openSharePanel", {
                                view: "invite"
                            })
                        }, []),
                        r = (0, nC.M)({
                            id: "analyticsModalDisclosure"
                        }),
                        i = r.isOpen,
                        o = r.onClose,
                        s = r.onOpen,
                        a = (0, nC.M)({
                            id: "titleModalDisclosure"
                        }),
                        c = a.isOpen,
                        f = a.onOpen,
                        p = a.onClose,
                        h = (0, tE.z$)(),
                        g = (0, tU.SE)().user,
                        v = (0, tU.py)("manage", t) && !!g,
                        b = (0, j.useCallback)(function() {
                            t && (t.title && "" !== t.title ? n() : f())
                        }, [t, n, f]),
                        y = (0, j.useCallback)(function(e) {
                            return function() {
                                null == h || h.track(tE.AA.DOC_ANALYTICS_VIEWED, {
                                    docId: null == t ? void 0 : t.id,
                                    source: e,
                                    type: "full"
                                }), s()
                            }
                        }, [h, null == t ? void 0 : t.id, s]);
                    return v && t ? (0, ed.jsxs)(ed.Fragment, {
                        children: [(0, ed.jsx)(u.k, {
                            children: (0, ed.jsx)(m.kH, {
                                closeOnMouseDown: !1,
                                closeOnClick: !1,
                                label: (0, ed.jsx)(l.cC, {
                                    id: "YaUqUV"
                                }),
                                children: (0, ed.jsx)(oQ.r, {
                                    "data-guider-highlight": "view-analytics-button",
                                    "aria-label": d.ag._({
                                        id: "YaUqUV"
                                    }),
                                    onMouseDown: ti.br,
                                    onClick: y("toolbar_analytics_block"),
                                    icon: (0, ed.jsx)(x.G, {
                                        icon: oq.M
                                    })
                                })
                            })
                        }), c && (0, ed.jsx)(o2, {
                            onClose: p,
                            isOpen: c,
                            onSaveSuccess: function() {
                                p(), n()
                            },
                            docId: null == t ? void 0 : t.id
                        }), i && (0, ed.jsx)(oK.r, {
                            doc: t,
                            onSharePanelOpen: b,
                            onAnalyticsPanelClose: o,
                            isAnalyticsPanelOpen: i,
                            mode: "full"
                        })]
                    }) : null
                }),
                o3 = n(24657),
                o4 = n(67784),
                o6 = n(94370),
                o8 = n(67755),
                o9 = n(67925),
                o7 = n(73716),
                se = n(10920),
                st = n(15756),
                sn = n(81410),
                sr = n(5632),
                si = n(43227),
                so = n(57973);

            function ss(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function sa(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ss(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ss(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var sc = (0, eK.E)(u.k),
                sl = function(e) {
                    var t = e.doc;
                    return (0, ed.jsx)(sc, {
                        initial: {
                            opacity: 1
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        children: (0, ed.jsx)(eY.M, {
                            initial: !1,
                            children: (0, ed.jsx)(sh, {
                                doc: t
                            })
                        })
                    })
                },
                sd = (0, j.memo)(function(e) {
                    var t = e.doc,
                        n = (0, tV._i)().editor,
                        r = (0, y.$gs)().isConnected,
                        i = (0, eN.p)(),
                        o = (0, j.useRef)(null),
                        s = (0, j.useRef)(null),
                        a = (0, y.D1_)(),
                        c = (0, S.Z)(a, 2),
                        u = c[0],
                        f = c[1].loading,
                        h = (0, j.useState)(null),
                        x = h[0],
                        g = h[1],
                        v = (0, j.useState)(!1),
                        b = v[0],
                        C = v[1],
                        O = (0, j.useState)(!1),
                        w = O[0],
                        k = O[1],
                        E = (0, tU.py)("edit", t),
                        I = (0, j.useCallback)(function() {
                            if (!n) return "";
                            var e = (0, tR.N2)(n.state.doc, tM.KH),
                                t = (0, S.Z)(e, 1)[0];
                            return t && (0, eW.getCardTitle)(t.node.toJSON()) || ""
                        }, [n]);
                    (0, j.useEffect)(function() {
                        !t || b || f || (g(t.title || ""), k(!!t.titleEdited))
                    }, [t, b, f]);
                    var P = function() {
                            o.current.style.width = s.current.offsetWidth + 0 + "px"
                        },
                        D = (0, eF.ff)("gray.800", "gray.200");
                    return (0, ed.jsx)(m.kH, {
                        label: E ? r ? (0, ed.jsx)(l.cC, {
                            id: "2wxgft"
                        }) : (0, ed.jsx)(l.cC, {
                            id: "Cb+Bgk"
                        }) : null,
                        "aria-label": d.ag._({
                            id: "2wxgft"
                        }),
                        children: (0, ed.jsxs)(o8.C, {
                            value: x || "",
                            placeholder: x || I(),
                            isDisabled: f || !E || !r,
                            isPreviewFocusable: E,
                            maxW: 300,
                            width: "100%",
                            fontWeight: "normal",
                            onCancel: function() {
                                P(), C(!1)
                            },
                            onFocus: function() {
                                P(), t && !f && C(!0)
                            },
                            onChange: function(e) {
                                P(), b && (g(e), k(!!e))
                            },
                            onSubmit: function() {
                                if (t && !f) {
                                    C(!1);
                                    var e = x || I();
                                    u({
                                        variables: {
                                            id: t.id,
                                            title: e,
                                            titleEdited: w
                                        }
                                    }).catch(function(e) {
                                        console.error(e), i({
                                            title: (0, ed.jsx)(l.cC, {
                                                id: "AToAqe",
                                                values: {
                                                    0: e.message
                                                }
                                            }),
                                            position: "top",
                                            status: "error"
                                        })
                                    })
                                }
                            },
                            children: [(0, ed.jsx)(o9.w, {
                                px: 1,
                                py: .5,
                                display: b ? "inline" : "block",
                                overflowX: "hidden",
                                textOverflow: "ellipsis",
                                color: w ? D : "inherit"
                            }), (0, ed.jsx)(o7.V, {
                                ref: o,
                                px: 1,
                                py: .5,
                                color: w ? D : "inherit",
                                maxW: 300,
                                _focus: {
                                    outline: "none",
                                    shadow: "0 0 0 2px rgb(66 153 225 / 60%)"
                                }
                            }), (0, ed.jsx)(p.xu, {
                                ref: s,
                                as: "span",
                                display: "inline-block",
                                position: "absolute",
                                left: "-9999px",
                                opacity: 0,
                                zIndex: -1,
                                minW: "180px",
                                px: 1,
                                dangerouslySetInnerHTML: {
                                    __html: nQ().sanitize((x || "").replace(/\s/g, "&nbsp;"))
                                }
                            })]
                        })
                    })
                });
            sd.displayName = "EditableDocTitle";
            var su = function(e) {
                    var t = e.cardId,
                        n = e.isEllipsis,
                        r = e.value,
                        i = e.onClick,
                        o = (0, oo.c)(t);
                    if (n) return (0, ed.jsx)(x.G, {
                        icon: o6.cN
                    });
                    if (!t && !r) return null;
                    var s = r || (null == o ? void 0 : o.title) || "";
                    return (0, ed.jsx)(f.x, {
                        noOfLines: 1,
                        onClick: i,
                        maxW: 180,
                        fontWeight: "normal",
                        children: s
                    })
                },
                sf = function(e) {
                    var t = e.isPresentModeFlat;
                    return function(e) {
                        var n = (0, K.gh)(e),
                            r = (0, K.i2)(e) || "",
                            i = (0, K.X9)(e).parents[r] || [];
                        if ("DOC_VIEW" === n || t) return [{
                            isHome: !0
                        }, {
                            isDocTitle: !0
                        }];
                        var o = i[0],
                            s = i[i.length - 1];
                        return [{
                            isHome: !0
                        }, i.length > 1 ? {
                            cardId: o
                        } : null, i.length > 2 ? {
                            isEllipsis: !0
                        } : null, i.length > 0 ? {
                            cardId: s
                        } : null, {
                            cardId: r
                        }]
                    }
                },
                sp = function() {
                    var e = (0, ir.ye)("presentModeFlat");
                    return (0, q.CG)(sf({
                        isPresentModeFlat: e
                    }), function(e, t) {
                        return JSON.stringify(e) === JSON.stringify(t)
                    })
                },
                sh = (0, j.memo)(function(e) {
                    var t = e.doc,
                        n = sp(),
                        r = (0, so.X)(Q.H.lastHomeUrl, "/"),
                        i = (0, S.Z)(r, 1)[0],
                        o = (0, ir.ye)("offline"),
                        s = (0, tU.SE)().user,
                        a = (0, y.$gs)().isConnected,
                        h = (0, tV._i)().confirmNavigation,
                        g = (0, sr.useRouter)().push,
                        v = (0, oL.i)({
                            base: "xs",
                            sm: "sm"
                        }),
                        j = (0, eF.ff)("gray.500", "gray.400"),
                        b = (0, eF.ff)("gray.800", "gray.100");
                    return (0, ed.jsxs)(er.U, {
                        spacing: 0,
                        as: el.z,
                        textAlign: "left",
                        px: 0,
                        _hover: {
                            color: b
                        },
                        h: 8,
                        children: [(0, ed.jsx)(se.a, {
                            display: "flex",
                            alignItems: "center",
                            whiteSpace: "nowrap",
                            size: v,
                            spacing: ["4px", "8px"],
                            variant: "plainButton",
                            separator: (0, ed.jsx)(p.xu, {
                                color: "gray.300",
                                mt: ["0.2rem", "0.125rem"],
                                children: (0, ed.jsx)(x.G, {
                                    icon: o4._t
                                })
                            }),
                            children: n.map(function(e, r) {
                                if (!e) return null;
                                var o = r === n.length - 1,
                                    a = e.cardId,
                                    c = e.isEllipsis,
                                    l = e.isDocTitle,
                                    d = e.isHome,
                                    u = e.value,
                                    f = d ? "home" : c ? "ellipsis" : a || u || r;
                                if (d && !s) return null;
                                var p = {
                                    as: nM(),
                                    href: i || "/",
                                    colorScheme: "gray",
                                    fontWeight: "normal",
                                    "data-testid": "toolbar-home-link"
                                };
                                return (0, ed.jsx)(st.g, {
                                    children: (0, ed.jsx)(sc, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        children: (0, ed.jsx)(sn.A, sa(sa({
                                            isCurrentPage: o,
                                            pointerEvents: o && !l ? "none" : "inherit",
                                            color: o ? j : "inherit"
                                        }, d ? sa({}, p) : {}), {}, {
                                            children: l ? (0, ed.jsx)(sd, {
                                                doc: t
                                            }) : d ? (0, ed.jsx)(eZ.r, {
                                                href: p.href,
                                                onClick: function(e) {
                                                    e.preventDefault(), h().then(function() {
                                                        g(p.href)
                                                    })
                                                },
                                                mr: 1,
                                                children: (0, ed.jsx)(x.G, {
                                                    size: "1x",
                                                    icon: o3.J9
                                                })
                                            }) : (0, ed.jsx)(su, {
                                                cardId: a,
                                                value: u,
                                                isEllipsis: c,
                                                onClick: function() {
                                                    a && (0, si.D)({
                                                        cardId: a,
                                                        method: "push"
                                                    })
                                                }
                                            })
                                        }))
                                    }, f)
                                }, f)
                            })
                        }), !a && (0, ed.jsx)(m.kH, {
                            label: (0, ed.jsxs)(ed.Fragment, {
                                children: [(0, ed.jsx)(f.x, {
                                    mr: 2,
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "ysdDIA"
                                    })
                                }), o && (0, ed.jsx)(f.x, {
                                    color: "gray.300",
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "+QNhGE"
                                    })
                                })]
                            }),
                            "aria-label": d.ag._({
                                id: "IcHxhR"
                            }),
                            children: (0, ed.jsx)(u.k, {
                                color: "gray.300",
                                alignItems: "center",
                                pr: 3,
                                children: (0, ed.jsx)(x.G, {
                                    icon: c.bK
                                })
                            })
                        })]
                    })
                });
            sh.displayName = "BreadcrumbGroup";
            var sx = n(33902),
                sm = n(74624),
                sg = n(5735),
                sv = n(45390),
                sj = n(57895),
                sb = n(68871),
                sy = n(90282),
                sC = n(24799),
                sO = n(1672),
                sw = n(10649),
                sk = n(4036),
                sS = n(82282),
                sE = n(31807),
                sI = n(9846),
                sP = n(21010),
                sD = n(76360),
                sA = n(75342),
                sT = function(e) {
                    var t = e.onAddDomain,
                        n = e.isAddingDomain,
                        r = (0, j.useState)(""),
                        i = r[0],
                        o = r[1],
                        s = (0, oV.m6)(i);
                    return (0, ed.jsx)(sD.Z, {
                        my: 2,
                        variant: "filled",
                        children: (0, ed.jsx)(sA.e, {
                            fontSize: "sm",
                            children: (0, ed.jsxs)(eo.K, {
                                spacing: 5,
                                children: [(0, ed.jsx)(f.x, {
                                    fontSize: "xl",
                                    fontWeight: "bold",
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "MPZogu",
                                        values: {
                                            GAMMA_PROPER_NOUN: em.N6
                                        }
                                    })
                                }), (0, ed.jsxs)(nB.NI, {
                                    children: [(0, ed.jsx)(nq.l, {
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "49uOXe"
                                        })
                                    }), (0, ed.jsxs)(er.U, {
                                        children: [(0, ed.jsx)(o0.I, {
                                            bg: "white",
                                            placeholder: "www.yourdomain.com",
                                            value: i,
                                            onChange: function(e) {
                                                return o(e.target.value)
                                            },
                                            onKeyDown: function(e) {
                                                "Enter" === e.key && s && (e.preventDefault(), t(i))
                                            }
                                        }), (0, ed.jsx)(eo.K, {
                                            children: (0, ed.jsx)(m.kH, {
                                                label: (0, ed.jsx)(l.cC, {
                                                    id: "aUB5ST"
                                                }),
                                                placement: "top",
                                                shouldWrapChildren: !0,
                                                isDisabled: s,
                                                children: (0, ed.jsx)(el.z, {
                                                    isDisabled: !s,
                                                    variant: "solid",
                                                    onClick: function() {
                                                        return t(i)
                                                    },
                                                    isLoading: n,
                                                    children: (0, ed.jsx)(l.cC, {
                                                        id: "SbL5Je"
                                                    })
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                sR = n(89458),
                s_ = n(74995),
                sM = n(21891),
                sL = n(92936),
                sz = n(60807),
                sN = n(72360),
                sZ = n(48322),
                sG = n(35837),
                sF = n(2875),
                sU = function(e) {
                    var t = e.path,
                        n = e.pathError,
                        r = e.conflictingRoute,
                        i = e.onPathUpdate,
                        o = e.isPathInputDisabled,
                        s = e.onClose;
                    return (0, ed.jsxs)(eo.K, {
                        pb: 6,
                        children: [(0, ed.jsx)(eo.K, {
                            direction: "row",
                            children: (0, ed.jsxs)(f.x, {
                                children: [(0, ed.jsx)(l.cC, {
                                    id: "dq8+qI"
                                }), ":", " "]
                            })
                        }), (0, ed.jsx)(oU.L, {}), (0, ed.jsx)(eo.K, {
                            spacing: 2,
                            children: (0, ed.jsx)(er.U, {
                                spacing: 1,
                                children: (0, ed.jsxs)(nB.NI, {
                                    as: "fieldset",
                                    isInvalid: void 0 !== n && n,
                                    children: [(0, ed.jsx)(er.U, {
                                        children: (0, ed.jsxs)(sM.B, {
                                            children: [(0, ed.jsx)(sL.Ui, {
                                                children: "/"
                                            }), (0, ed.jsx)(o0.I, {
                                                isDisabled: o,
                                                bg: "white",
                                                flex: 2,
                                                value: t,
                                                onChange: function(e) {
                                                    i((0, oV.pi)(e.currentTarget.value))
                                                }
                                            })]
                                        })
                                    }), (0, ed.jsxs)(eo.K, {
                                        spacing: 4,
                                        children: [(0, ed.jsx)(nB.Q6, {
                                            fontSize: "sm",
                                            children: (0, ed.jsxs)(eo.K, {
                                                alignContent: "flex-start",
                                                justifyContent: "space-between",
                                                direction: "row",
                                                w: "100%",
                                                children: [(0, ed.jsx)(eo.K, {
                                                    spacing: 1,
                                                    children: (0, ed.jsx)(f.x, {
                                                        color: "gray.500",
                                                        children: (0, ed.jsx)(l.cC, {
                                                            id: "ZMlbHK"
                                                        })
                                                    })
                                                }), r && (0, ed.jsx)(sz.J1, {
                                                    justifyContent: "flex-end",
                                                    alignItems: "flex-start",
                                                    children: (0, ed.jsx)(f.x, {
                                                        fontSize: "xs",
                                                        children: (0, ed.jsx)(l.cC, {
                                                            id: "DQaTdC",
                                                            components: {
                                                                0: (0, ed.jsx)(eZ.r, {
                                                                    textDecoration: "underline",
                                                                    href: (0, nF.Gn)({
                                                                        docId: r.docId
                                                                    }),
                                                                    target: "_blank"
                                                                })
                                                            }
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, ed.jsx)(f.x, {
                                            fontSize: "sm",
                                            color: "gray.500",
                                            mt: 4,
                                            children: (0, ed.jsx)(l.cC, {
                                                id: "g4cZni",
                                                components: {
                                                    0: (0, ed.jsx)(el.z, {
                                                        variant: "link",
                                                        as: "span",
                                                        size: "sm",
                                                        cursor: "pointer",
                                                        onClick: function() {
                                                            s(), sF.pw.emit(sF.TI.OPEN_PAGE_SETUP, "preview")
                                                        }
                                                    })
                                                }
                                            })
                                        }), (0, ed.jsxs)(sN.b, {
                                            colorScheme: "gray",
                                            bg: "blackAlpha.100",
                                            children: [(0, ed.jsx)(sZ.z, {}), (0, ed.jsxs)(eo.K, {
                                                children: [(0, ed.jsx)(f.x, {
                                                    fontWeight: "bold",
                                                    fontSize: "sm",
                                                    children: (0, ed.jsx)(l.cC, {
                                                        id: "E29kJ/"
                                                    })
                                                }), (0, ed.jsxs)(sG.QI, {
                                                    pl: "4",
                                                    spacing: "1",
                                                    fontSize: "xs",
                                                    children: [(0, ed.jsxs)(sG.HC, {
                                                        children: [(0, ed.jsx)(l.cC, {
                                                            id: "tB9qsK",
                                                            values: {
                                                                GAMMA_PROPER_NOUN: em.N6
                                                            }
                                                        }), " ", (0, ed.jsx)(m.Yq, {
                                                            label: d.ag._({
                                                                id: "9sEGjz"
                                                            })
                                                        })]
                                                    }), (0, ed.jsx)(sG.HC, {
                                                        children: (0, ed.jsx)(l.cC, {
                                                            id: "8Ijq31"
                                                        })
                                                    }), (0, ed.jsx)(sG.HC, {
                                                        children: (0, ed.jsx)(l.cC, {
                                                            id: "0rExAx"
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                },
                sW = function(e) {
                    var t = e.onClose,
                        n = e.onConfirm,
                        r = (0, j.useCallback)(function() {
                            t(), n()
                        }, [t, n]);
                    return (0, ed.jsxs)(oX.u_, {
                        onClose: t,
                        isOpen: !0,
                        children: [(0, ed.jsx)(tX.Z, {}), (0, ed.jsxs)(oJ.h, {
                            children: [(0, ed.jsx)(o$.x, {
                                children: (0, ed.jsx)(l.cC, {
                                    id: "dqU8B8"
                                })
                            }), (0, ed.jsx)(t$.o, {}), (0, ed.jsx)(t0.f, {
                                children: (0, ed.jsxs)(eo.K, {
                                    spacing: 4,
                                    children: [(0, ed.jsx)(f.x, {
                                        fontWeight: "bold",
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "TKppIR"
                                        })
                                    }), (0, ed.jsx)(f.x, {
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "jvL5br"
                                        })
                                    })]
                                })
                            }), (0, ed.jsx)(t1.m, {
                                children: (0, ed.jsxs)(t2.h, {
                                    children: [(0, ed.jsx)(el.z, {
                                        variant: "ghost",
                                        onClick: t,
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "dEgA5A"
                                        })
                                    }), (0, ed.jsx)(el.z, {
                                        variant: "ghost",
                                        colorScheme: "red",
                                        onClick: r,
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "3EbjfR"
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                },
                sH = n(84558),
                sV = n(8388),
                sB = function(e) {
                    var t = e.heading,
                        n = e.subheading,
                        r = e.icon,
                        i = e.children;
                    return (0, ed.jsxs)(u.k, {
                        gap: 4,
                        alignItems: "center",
                        children: [(0, ed.jsx)(u.k, {
                            h: "8",
                            w: "8",
                            bg: "gray.200",
                            borderRadius: "full",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "gray.800",
                            children: (0, ed.jsx)(x.G, {
                                icon: r
                            })
                        }), (0, ed.jsxs)(eo.K, {
                            spacing: 0,
                            children: [t, n]
                        }), (0, ed.jsx)(oU.L, {}), i]
                    })
                },
                sq = function(e) {
                    var t, n, r = e.doc,
                        i = e.site,
                        o = e.path,
                        s = e.isPublishing,
                        a = void 0 !== s && s,
                        c = e.isUnpublishing,
                        u = void 0 !== c && c,
                        p = e.enabled,
                        h = e.publishButtonTooltipLabel,
                        g = e.onPublishClick,
                        v = e.onUnpublishClick,
                        b = null == r ? void 0 : r.title,
                        y = !!(null == r ? void 0 : r.publishedSnapshotId),
                        C = null == i ? void 0 : null === (t = i.currentDeployment) || void 0 === t ? void 0 : t.deploymentTime,
                        O = y && !!C && (null == i ? void 0 : i.currentDeployment) && (null == r ? void 0 : r.publishedTime) && new Date(null == i ? void 0 : i.currentDeployment.deploymentTime) > new Date(r.publishedTime),
                        w = null == i ? void 0 : null === (n = i.domains) || void 0 === n ? void 0 : n[0],
                        k = (0, oV.mn)({
                            domain: w,
                            path: o
                        }),
                        S = (0, j.useMemo)(function() {
                            return {
                                fromNow: (0, sV.Km)(C),
                                calendar: (0, sV.p6)(C, "PPpp")
                            }
                        }, [C]);
                    return (0, ed.jsx)(sB, {
                        heading: (0, ed.jsxs)(er.U, {
                            children: [(0, ed.jsx)(f.x, {
                                noOfLines: 1,
                                children: b
                            }), O && (0, ed.jsx)(sk.C, {
                                colorScheme: "green",
                                children: "Live"
                            })]
                        }),
                        subheading: O ? (0, ed.jsxs)(er.U, {
                            spacing: 1.5,
                            fontSize: "sm",
                            children: [(0, ed.jsx)(f.x, {
                                color: "gray.500",
                                fontSize: "sm",
                                children: (0, ed.jsx)(l.cC, {
                                    id: "ay/UB+",
                                    values: {
                                        0: S.fromNow
                                    },
                                    components: {
                                        0: (0, ed.jsx)(m.kH, {
                                            label: S.calendar,
                                            placement: "top",
                                            shouldWrapChildren: !0
                                        }),
                                        1: (0, ed.jsx)(f.x, {
                                            as: "span",
                                            cursor: "pointer",
                                            style: {
                                                textDecoration: "underline"
                                            }
                                        })
                                    }
                                })
                            }), (0, ed.jsx)(f.x, {
                                fontSize: "sm",
                                color: "gray.500",
                                children: "•"
                            }), (0, ed.jsx)(el.z, {
                                variant: "link",
                                size: "sm",
                                onClick: v,
                                isDisabled: a || u,
                                isLoading: u,
                                children: (0, ed.jsx)(l.cC, {
                                    id: "4DLZUa"
                                })
                            })]
                        }) : u || a ? (0, ed.jsx)(f.x, {
                            fontSize: "sm",
                            color: "gray.500",
                            children: (0, ed.jsx)(np.$, {
                                size: "xs"
                            })
                        }) : (0, ed.jsx)(f.x, {
                            fontSize: "sm",
                            color: "gray.500",
                            children: (0, ed.jsx)(l.cC, {
                                id: "mY40hj"
                            })
                        }),
                        icon: sH.Rk,
                        children: (0, ed.jsxs)(t2.h, {
                            children: [(0, ed.jsx)(m.kH, {
                                label: h,
                                shouldWrapChildren: !0,
                                placement: "top",
                                children: (0, ed.jsx)(el.z, {
                                    variant: "solid",
                                    isDisabled: !p,
                                    isLoading: a || u,
                                    loadingText: a ? d.ag._({
                                        id: "Bdha5y"
                                    }) : u ? d.ag._({
                                        id: "JZOp0b"
                                    }) : void 0,
                                    onClick: g,
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "qcawwg"
                                    })
                                })
                            }), O && (0, ed.jsx)(m.kH, {
                                label: k,
                                shouldWrapChildren: !0,
                                placement: "top",
                                children: (0, ed.jsx)(el.z, {
                                    variant: "plain",
                                    as: "a",
                                    target: "_blank",
                                    _hover: {
                                        textDecoration: "none",
                                        color: "trueblue.500"
                                    },
                                    href: k,
                                    isDisabled: !p,
                                    rightIcon: (0, ed.jsx)(x.G, {
                                        icon: nP.faArrowUpRightFromSquare
                                    }),
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "Zel0o2"
                                    })
                                })
                            })]
                        })
                    })
                };

            function sK(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function sY(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? sK(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sK(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var sQ = {
                    path: ""
                },
                sX = function(e) {
                    var t, n = e.isOpen,
                        r = e.onClose,
                        i = e.doc,
                        o = (0, eN.p)(),
                        s = (0, j.useState)(sQ),
                        a = s[0],
                        c = s[1],
                        d = (0, j.useState)(sQ),
                        u = d[0],
                        f = d[1],
                        p = (0, j.useState)(!1),
                        h = p[0],
                        x = p[1],
                        g = i.id,
                        v = null === (t = i.organization) || void 0 === t ? void 0 : t.id,
                        b = (0, sP.bBo)({
                            variables: {
                                workspaceId: v
                            },
                            skip: !v
                        }),
                        y = b.data,
                        C = b.refetch,
                        O = (0, nC.M)({
                            id: "domainSetupModal"
                        }),
                        w = O.isOpen,
                        k = O.onOpen,
                        S = O.onClose,
                        E = (0, nC.M)({
                            id: "publishModalWarning"
                        }),
                        I = E.isOpen,
                        P = E.onOpen,
                        D = E.onClose,
                        A = null == y ? void 0 : y.sites,
                        T = (0, oV.uK)({
                            doc: i,
                            sites: A
                        }),
                        R = (0, oV.D5)({
                            site: T,
                            docId: g
                        }),
                        _ = (0, oV.Rh)({
                            site: T,
                            docId: g
                        }),
                        M = (0, oV.gT)({
                            routes: (null == T ? void 0 : T.routes) || [],
                            path: a.path,
                            docId: g
                        }),
                        L = null == T ? void 0 : T.domains.find(function(e) {
                            return "pending" === e.status
                        }),
                        z = a.path !== u.path || void 0 === R,
                        N = !!i && !!y,
                        Z = !it()(a, u),
                        G = (0, j.useState)("coldStart"),
                        F = G[0],
                        U = G[1],
                        W = (0, j.useState)(null),
                        H = W[0],
                        V = W[1],
                        B = (0, j.useState)(!1),
                        q = B[0],
                        K = B[1],
                        Y = !!q && !M && !1 === h,
                        Q = (0, j.useState)(),
                        X = Q[0],
                        J = Q[1],
                        $ = (0, oH.q)({
                            doc: i,
                            site: T,
                            path: a.path
                        }),
                        ee = $.publishAndDeploy,
                        et = $.addDomain,
                        en = $.isAddingDomain,
                        er = $.createSite,
                        ei = $.isCreatingSite,
                        ea = $.unpublishAndDeploy,
                        ec = $.updateRoutes;
                    (0, j.useEffect)(function() {
                        if (L) {
                            var e = setInterval(function() {
                                C()
                            }, 1e4);
                            return function() {
                                clearInterval(e)
                            }
                        }
                    }, [L, C, T]), (0, j.useEffect)(function() {
                        N && T && K(!0)
                    }, [N, T, R]), (0, j.useEffect)(function() {
                        N && T && U("hasDomains")
                    }, [N, T]), (0, j.useEffect)(function() {
                        c({
                            path: R || ""
                        }), f({
                            path: R || ""
                        })
                    }, [R]);
                    var el = (0, j.useCallback)(function(e) {
                            J(e), k()
                        }, [k]),
                        eu = (0, j.useCallback)((0, tq.Z)(tY().mark(function e() {
                            return tY().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (g) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (!M) {
                                            e.next = 5;
                                            break
                                        }
                                        return o({
                                            description: (0, ed.jsx)(l.cC, {
                                                id: "ldkJkh",
                                                values: {
                                                    GAMMA_ARTIFACT_PROPER_NOUN: em.Yc
                                                }
                                            }),
                                            status: "error",
                                            position: "top",
                                            duration: 5e3,
                                            isClosable: !0
                                        }), e.abrupt("return");
                                    case 5:
                                        if (x("publish"), !z) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 9, ec();
                                    case 9:
                                        return e.next = 11, ee();
                                    case 11:
                                        x(!1);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [M, g, z, ee, o, ec]),
                        ef = (0, j.useCallback)((0, tq.Z)(tY().mark(function e() {
                            return tY().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return x("unpublish"), e.next = 3, ea();
                                    case 3:
                                        x(!1);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [ea]),
                        ep = (0, j.useCallback)(function() {
                            Z ? P() : r()
                        }, [Z, r, P]),
                        eh = (0, j.useCallback)(function(e) {
                            "addDomain" === H ? (et(e), S()) : "createSite" === H && (er(e), S())
                        }, [et, H, er, S]);
                    return console.log("%cPublishWebsite debug", "background-color: #cc00ff", {
                        doc: i,
                        sites: A,
                        siteToUse: T,
                        pathForPathEditor: R
                    }), (0, ed.jsx)(m.Wk, {
                        isDark: !1,
                        children: (0, ed.jsxs)(oX.u_, {
                            isOpen: n,
                            onClose: ep,
                            size: "4xl",
                            closeOnOverlayClick: !1,
                            children: [(0, ed.jsx)(tX.Z, {}), (0, ed.jsx)(oJ.h, {
                                children: N ? (0, ed.jsxs)(ed.Fragment, {
                                    children: [(0, ed.jsxs)(eo.K, {
                                        px: 6,
                                        py: 4,
                                        borderBottomWidth: "1px",
                                        children: [(0, ed.jsx)(es.X, {
                                            mb: 2,
                                            children: (0, ed.jsx)(l.cC, {
                                                id: "Khu3PV"
                                            })
                                        }), "hasDomains" === F && (0, ed.jsx)(sq, {
                                            doc: i,
                                            path: _,
                                            site: T,
                                            enabled: Y,
                                            publishButtonTooltipLabel: q ? void 0 === R ? (0, ed.jsx)(l.cC, {
                                                id: "O7BXvp"
                                            }) : void 0 : (0, ed.jsx)(l.cC, {
                                                id: "XDmUdC"
                                            }),
                                            onPublishClick: eu,
                                            onUnpublishClick: ef,
                                            isPublishing: "publish" === h,
                                            isUnpublishing: "unpublish" === h
                                        })]
                                    }), (0, ed.jsx)(t$.o, {}), (0, ed.jsx)(t0.f, {
                                        children: (0, ed.jsxs)(eo.K, {
                                            spacing: 6,
                                            children: ["coldStart" === F && (0, ed.jsx)(sT, {
                                                onAddDomain: function(e) {
                                                    V("createSite"), J(e), k()
                                                },
                                                isAddingDomain: ei
                                            }), "hasDomains" === F && T && (0, ed.jsxs)(ed.Fragment, {
                                                children: [(0, ed.jsx)(sR.T, {
                                                    path: _,
                                                    site: T,
                                                    onDomainSetupClick: el,
                                                    onAddDomain: function(e) {
                                                        k(), J(e), V("addDomain")
                                                    },
                                                    isAddingDomain: en,
                                                    refetchSites: C
                                                }), (0, ed.jsx)(sU, {
                                                    path: a.path,
                                                    pathError: !!M,
                                                    conflictingRoute: M,
                                                    isPathInputDisabled: !1 !== h,
                                                    onPathUpdate: function(e) {
                                                        c(function(t) {
                                                            return sY(sY({}, t), {}, {
                                                                path: e
                                                            })
                                                        })
                                                    },
                                                    onClose: r
                                                })]
                                            })]
                                        })
                                    })]
                                }) : (0, ed.jsx)(np.$, {})
                            }), w && X && (0, ed.jsx)(s_.w, {
                                domainName: X,
                                isOpen: w,
                                onClose: function() {
                                    S(), V(null)
                                },
                                onDomainConfirmed: H ? eh : null
                            }), I && (0, ed.jsx)(sW, {
                                onClose: D,
                                onConfirm: r
                            })]
                        })
                    })
                },
                sJ = function(e) {
                    var t, n = e.doc,
                        r = (0, nC.M)({
                            id: "publishModal"
                        }),
                        i = r.isOpen,
                        o = r.onClose,
                        s = r.onOpen,
                        a = null === (t = n.organization) || void 0 === t ? void 0 : t.id,
                        c = (0, sP.bBo)({
                            variables: {
                                workspaceId: a
                            },
                            skip: !a
                        }).data,
                        d = (null == c ? void 0 : c.sites) || [];
                    return (0, ed.jsxs)(iq.s, {
                        icon: (0, ed.jsx)(x.G, {
                            icon: oW.A$,
                            fixedWidth: !0
                        }),
                        onClick: function() {
                            s()
                        },
                        children: [(0, ed.jsxs)(er.U, {
                            children: [d.length > 0 ? (0, ed.jsx)(l.cC, {
                                id: "BCIqs5"
                            }) : (0, ed.jsx)(l.cC, {
                                id: "TMYPtj"
                            }), (0, ed.jsx)(oU.L, {}), (0, ed.jsx)(sk.C, {
                                colorScheme: "green",
                                ml: 2,
                                children: (0, ed.jsx)(l.cC, {
                                    id: "YBt9YP"
                                })
                            })]
                        }), n && i && (0, ed.jsx)(sX, {
                            doc: n,
                            isOpen: i,
                            onClose: o
                        })]
                    })
                },
                s$ = n(42048),
                s0 = n(65903),
                s1 = n.n(s0),
                s2 = n(98649),
                s5 = function(e) {
                    var t = (0, q.CG)(K.e_),
                        n = (0, q.TL)(),
                        r = (0, j.useCallback)(function(e) {
                            n((0, K.Qt)({
                                docAttrs: {
                                    format: e
                                }
                            }))
                        }, [n]);
                    return (0, ed.jsx)(t2.h, {
                        size: "sm",
                        isAttached: !0,
                        my: 2,
                        children: s2.n.map(function(e) {
                            return (0, ed.jsx)(el.z, {
                                isActive: e.key === t.key,
                                onClick: function() {
                                    return r(e.key)
                                },
                                children: s1()(e.label)
                            }, e.key)
                        })
                    })
                },
                s3 = n(85147),
                s4 = n(20387),
                s6 = function() {
                    var e;
                    return e = {}, (0, a.Z)(e, tz.q.DOC_VIEW, {
                        buttonLabel: (0, ed.jsx)(l.cC, {
                            id: "eZb+lw"
                        }),
                        shortcutIcon: s4.zc,
                        shortcutKeys: (0, m.cE)("Mod+Enter"),
                        shortcutLabel: (0, ed.jsx)(l.cC, {
                            id: "9vUn+H"
                        })
                    }), (0, a.Z)(e, tz.q.SLIDE_VIEW, {
                        buttonLabel: (0, ed.jsx)(l.cC, {
                            id: "ydzS9x"
                        }),
                        shortcutIcon: s3.Bg,
                        shortcutKeys: "Esc",
                        shortcutLabel: (0, ed.jsx)(l.cC, {
                            id: "5Rfo7J"
                        })
                    }), e
                },
                s8 = n(8699),
                s9 = n(47592),
                s7 = n(59131),
                ae = (0, rP.ZP)("mod+Enter"),
                at = (0, rP.ZP)("Esc"),
                an = (0, rP.ZP)("mod+Esc"),
                ar = (0, rP.ZP)("shift+mod+Enter"),
                ai = function(e, t) {
                    var n = document.querySelector(t);
                    if (n) {
                        var r = n.getBoundingClientRect();
                        e.commands.scrollToNodeWithPin(document.elementFromPoint(r.width / 2, 100), 100)
                    }
                },
                ao = function(e) {
                    var t = e.editorWrapperEl,
                        n = e.scrollingParentSelector,
                        r = (0, q.TL)(),
                        i = (0, j.useState)(!1),
                        o = i[0],
                        s = i[1],
                        a = (0, j.useState)(!1),
                        c = a[0],
                        l = a[1],
                        d = (0, tV._i)().editor,
                        u = (0, q.CG)(K.gh),
                        f = (0, j.useRef)(u);
                    (0, j.useEffect)(function() {
                        f.current = u
                    }, [u]);
                    var p = (0, q.CG)(K.yq),
                        h = (0, q.CG)(K.JA),
                        x = (0, q.CG)(rL.C),
                        m = (0, tE.z$)(),
                        g = (0, j.useCallback)(function(e) {
                            d && !d.isDestroyed && (e === tz.q.SLIDE_VIEW ? ((0, s9.E0)(d.state.doc, r), (0, rZ.U6)(d, !1), d.commands.spotlightCurrentCard()) : (d.commands.turnOffSpotlight(!0), ai(d, n)), r(function(t) {
                                t((0, K.Qx)({
                                    attached: !1
                                })), t((0, K.PM)({
                                    mode: e
                                }))
                            }))
                        }, [r, d, n]),
                        v = (0, j.useCallback)(function() {
                            try {
                                var e, t, n, r;
                                if (null !== (e = document.body) && void 0 !== e && e.requestFullscreen) {
                                    null === (n = document.body) || void 0 === n || n.requestFullscreen();
                                    return
                                }
                                null !== (t = document.body) && void 0 !== t && t.webkitRequestFullscreen && (null === (r = document.body) || void 0 === r || r.webkitRequestFullscreen())
                            } catch (e) {
                                console.debug("[PresentBlock] Error entering fullscreen:", e)
                            }
                        }, []),
                        b = (0, j.useCallback)(function() {
                            try {
                                if (document.fullscreenElement) {
                                    document.exitFullscreen();
                                    return
                                }
                                document.webkitCurrentFullScreenElement && document.webkitExitFullscreen && document.webkitExitFullscreen()
                            } catch (e) {
                                console.debug("[PresentBlock] Error exiting fullscreen:", e)
                            }
                        }, []),
                        y = (0, ir.ye)("realUserMetrics"),
                        C = (0, s8.wK)(y),
                        O = C.recordExitSlideModePerformance,
                        w = C.recordEnterSlideModePerformance,
                        k = (0, j.useCallback)(function(e) {
                            var t = e.fullscreen,
                                n = void 0 !== t && t;
                            f.current !== tz.q.SLIDE_VIEW && (g(tz.q.SLIDE_VIEW), n && v(), null == m || m.trackDocEvent(tE.AA.PRESENT_MODE_ENTERED), w({
                                isFullscreen: n
                            }), setTimeout(function() {
                                document.activeElement && document.activeElement instanceof HTMLElement && document.activeElement.blur()
                            }))
                        }, [g, w, v, f, m]),
                        S = (0, j.useCallback)(function() {
                            f.current !== tz.q.DOC_VIEW && (g(tz.q.DOC_VIEW), o && b(), null == m || m.trackDocEvent(tE.AA.PRESENT_MODE_EXITED), O({
                                isFullscreen: o
                            }))
                        }, [g, o, b, O, f, m]);
                    return (0, j.useEffect)(function() {
                        var e = function() {
                            null !== document.fullscreenElement || c || S(), null !== document.webkitCurrentFullScreenElement || c || S(), s(function(e) {
                                return !e
                            }), l(!1)
                        };
                        return document.addEventListener("fullscreenchange", e), document.addEventListener("webkitfullscreenchange", e), document.addEventListener("mozfullscreenchange", e),
                            function() {
                                document.removeEventListener("fullscreenchange", e), document.removeEventListener("webkitfullscreenchange", e), document.removeEventListener("mozfullscreenchange", e)
                            }
                    }, [c, S, b]), (0, rw.r)(function() {
                        d && !d.isDestroyed && u === tz.q.DOC_VIEW && requestAnimationFrame(function() {
                            var e = d.state.selection;
                            e instanceof s7.c && d.commands.command(function(t) {
                                return t.tr.setSelection(e.createSelectionNear()), !0
                            })
                        })
                    }, [d, u]), (0, j.useEffect)(function() {
                        return rD.F7.on("keydown", "PRESENT_BLOCK", function(e) {
                            var t, n, r, i = f.current === tz.q.SLIDE_VIEW;
                            if (!x) {
                                if (ae(e)) {
                                    if (null != e && null !== (t = e.target) && void 0 !== t && t.closest("[data-gamma-child-tiptap-editor]")) return;
                                    return e.preventDefault(), k({
                                        fullscreen: !1
                                    }), !0
                                }
                                if (ar(e)) {
                                    if (null != e && null !== (n = e.target) && void 0 !== n && n.closest("[data-gamma-child-tiptap-editor]")) return;
                                    return e.preventDefault(), k({
                                        fullscreen: !0
                                    }), !0
                                }
                                if (an(e) && i) return S(), !0;
                                if (at(e) && i && !p && !h) {
                                    if (null != e && null !== (r = e.target) && void 0 !== r && r.closest("[data-gamma-child-tiptap-editor]")) return;
                                    return S(), !0
                                }
                            }
                        })
                    }, [k, S, v, p, h, t, x]), {
                        enterSlideView: k,
                        exitSlideView: S,
                        enterFullscreen: v,
                        exitFullscreen: b,
                        exitedFullscreenByClick: c,
                        isFullscreen: o,
                        setIsFullscreen: s,
                        setExitedFullscreenByClick: l
                    }
                },
                as = function(e) {
                    var t = e.editorWrapperEl,
                        n = e.scrollingParentSelector,
                        r = (0, q.CG)(K.gh),
                        i = (0, ir.ye)("presentFullScreen"),
                        o = s6()[r],
                        s = o.shortcutIcon,
                        a = o.shortcutKeys,
                        c = o.buttonLabel,
                        l = ao({
                            editorWrapperEl: t,
                            scrollingParentSelector: n
                        }),
                        d = l.enterSlideView,
                        u = l.exitSlideView;
                    return (0, ed.jsx)(iq.s, {
                        icon: (0, ed.jsx)(x.G, {
                            icon: s,
                            fixedWidth: !0
                        }),
                        command: a,
                        onClick: function() {
                            r === tz.q.SLIDE_VIEW ? u() : d({
                                fullscreen: i
                            })
                        },
                        children: c
                    })
                },
                aa = n(50376),
                ac = n(47090);

            function al(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ad(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? al(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : al(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var au = function(e) {
                    var t, n, r = e.doc,
                        i = e.editorWrapperEl,
                        o = e.scrollingParentSelector,
                        s = (0, tU.SE)().user,
                        a = (0, y.$gs)().isConnected,
                        c = (0, ru.e)(),
                        d = (0, tV._i)().editor,
                        u = (0, o1.$)(null == r ? void 0 : r.title),
                        h = (null == r ? void 0 : r.createdTime) && (0, sS.Z)((0, sE.Z)(r.createdTime), "PPP"),
                        g = null == r ? void 0 : r.id,
                        v = (0, nC.M)({
                            id: "snapshotsDrawer"
                        }),
                        b = v.isOpen,
                        C = v.onClose,
                        O = v.onOpen,
                        w = (0, nC.M)({
                            id: "analyticsPanelDisclosure"
                        }),
                        k = w.isOpen,
                        E = w.onClose,
                        I = w.onOpen,
                        P = (0, y.LT4)(),
                        D = (0, S.Z)(P, 1)[0],
                        A = (0, y.iX9)(),
                        T = (0, S.Z)(A, 1)[0],
                        R = (0, tE.z$)(),
                        _ = (0, tU.py)("view", r) && !!s,
                        M = (0, tU.py)("edit", r),
                        L = (0, tU.py)("manage", r) && !!s,
                        z = (0, ir.ye)("pageSetup") && M,
                        N = !!(s && 0 !== s.workspaceMemberships.length),
                        Z = (0, ir.ye)("publishing"),
                        G = (0, ir.ye)("docFormats"),
                        F = (0, q.CG)(K.hN),
                        U = (0, j.useCallback)(function() {
                            null == R || R.track(tE.AA.DOC_ANALYTICS_VIEWED, {
                                docId: g,
                                source: "toolbar_doc_menu",
                                type: "personal"
                            }), I()
                        }, [R, g, I]),
                        W = (0, j.useCallback)(function(e) {
                            return function() {
                                if (g) {
                                    var t = {
                                        id: g
                                    };
                                    e ? D({
                                        variables: t,
                                        optimisticResponse: {
                                            archiveDoc: ad(ad({}, t), {}, {
                                                archived: e,
                                                __typename: "Doc"
                                            })
                                        }
                                    }) : T({
                                        variables: t,
                                        optimisticResponse: {
                                            unarchiveDoc: ad(ad({}, t), {}, {
                                                archived: e,
                                                __typename: "Doc"
                                            })
                                        }
                                    })
                                }
                            }
                        }, [D, g, T]),
                        H = (0, j.useCallback)(function() {
                            d && d.commands.undo()
                        }, [d]),
                        V = (0, nC.M)({
                            id: "codeEditor"
                        }),
                        B = V.isOpen,
                        Y = V.onOpen,
                        Q = V.onClose,
                        X = (0, ir.ye)("docCustomCode") && M;
                    return (0, ed.jsxs)(rQ.v, {
                        children: [(0, ed.jsx)(rX.j, {
                            as: oQ.r,
                            borderRadius: "md",
                            isDisabled: b,
                            icon: (0, ed.jsx)(x.G, {
                                icon: o6.cN
                            }),
                            onMouseDown: ti.br,
                            "data-testid": "doc-toolbar-menu-button"
                        }), (0, ed.jsx)(eS.h, {
                            children: r && (0, ed.jsxs)(rJ.q, {
                                zIndex: "popover",
                                maxH: "100vh",
                                minW: "280px",
                                overflow: "auto",
                                children: [(0, ed.jsxs)(p.xu, {
                                    px: 4,
                                    py: 2,
                                    children: [(0, ed.jsx)(f.x, {
                                        noOfLines: 6,
                                        children: u
                                    }), (0, ed.jsx)(f.x, {
                                        fontSize: "sm",
                                        color: "gray.500",
                                        noOfLines: 1,
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "jlWdji",
                                            values: {
                                                createdTime: h
                                            }
                                        })
                                    }), (0, ed.jsx)(m.kH, {
                                        label: null == r ? void 0 : null === (t = r.createdBy) || void 0 === t ? void 0 : t.email,
                                        children: (0, ed.jsx)(f.x, {
                                            display: "inline-block",
                                            fontSize: "sm",
                                            color: "gray.500",
                                            noOfLines: 1,
                                            children: (0, ed.jsx)(l.cC, {
                                                id: "t490IT",
                                                values: {
                                                    0: null == r ? void 0 : null === (n = r.createdBy) || void 0 === n ? void 0 : n.displayName
                                                }
                                            })
                                        })
                                    }), G && (0, ed.jsx)(s5, {})]
                                }), (0, ed.jsx)(r0.R, {}), (0, ed.jsx)(sI.V, {
                                    label: (0, ed.jsx)(l.cC, {
                                        id: "IdcoRx"
                                    }),
                                    isConnected: a,
                                    maxWidth: "300px"
                                }), a && (0, ed.jsxs)(ed.Fragment, {
                                    children: [!!s && !L && (0, ed.jsx)(iq.s, {
                                        icon: (0, ed.jsx)(x.G, {
                                            icon: oq.M,
                                            fixedWidth: !0
                                        }),
                                        onClick: U,
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "ZlwDi6"
                                        })
                                    }), Z && L && (0, ed.jsx)(sJ, {
                                        doc: r
                                    }), (0, ed.jsx)(as, {
                                        editorWrapperEl: i,
                                        scrollingParentSelector: o
                                    }), N && (0, ed.jsx)(iq.s, {
                                        icon: (0, ed.jsx)(x.G, {
                                            icon: iH.kZ,
                                            fixedWidth: !0
                                        }),
                                        onClick: function() {
                                            d && c({
                                                docId: g,
                                                initialContent: d.getJSON(),
                                                source: "editor_toolbar_doc_menu_duplicate",
                                                newWindow: !(0, nG.Q5)()
                                            })
                                        },
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "euc6Ns"
                                        })
                                    }), _ && (0, ed.jsx)(iq.s, {
                                        icon: (0, ed.jsx)(x.G, {
                                            icon: sw.kw,
                                            fixedWidth: !0
                                        }),
                                        onClick: function() {
                                            oY.T.emit("openSharePanel", {
                                                view: "export"
                                            })
                                        },
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "U8WPSi"
                                        })
                                    }), z && (0, ed.jsx)(iq.s, {
                                        icon: (0, ed.jsx)(x.G, {
                                            icon: sO.gr,
                                            fixedWidth: !0
                                        }),
                                        onClick: function() {
                                            oY.T.emit("openPageSetup", "cards")
                                        },
                                        children: (0, ed.jsxs)(er.U, {
                                            children: [(0, ed.jsx)(l.cC, {
                                                id: "Kx2GmY"
                                            }), (0, ed.jsx)(oU.L, {}), (0, ed.jsx)(sk.C, {
                                                colorScheme: "green",
                                                ml: 2,
                                                children: (0, ed.jsx)(l.cC, {
                                                    id: "isRobC"
                                                })
                                            })]
                                        })
                                    }), X && (0, ed.jsx)(iq.s, {
                                        icon: (0, ed.jsx)(x.G, {
                                            icon: sC.dT,
                                            fixedWidth: !0
                                        }),
                                        onClick: Y,
                                        children: (0, ed.jsxs)(er.U, {
                                            children: [(0, ed.jsx)(l.cC, {
                                                id: "cnlGIm"
                                            }), (0, ed.jsx)(oU.L, {}), (0, ed.jsx)(sk.C, {
                                                colorScheme: "green",
                                                ml: 2,
                                                children: (0, ed.jsx)(l.cC, {
                                                    id: "YBt9YP"
                                                })
                                            })]
                                        })
                                    }), F && (0, ed.jsx)(r0.R, {}), F && (0, ed.jsx)(iq.s, {
                                        icon: (0, ed.jsx)(x.G, {
                                            icon: sy.faArrowRotateLeft,
                                            fixedWidth: !0
                                        }),
                                        onClick: H,
                                        command: (0, m.cE)("Mod+Z"),
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "9uI/rE"
                                        })
                                    }), M && (0, ed.jsx)(iq.s, {
                                        icon: (0, ed.jsx)(x.G, {
                                            icon: sb.SZ,
                                            fixedWidth: !0
                                        }),
                                        onClick: O,
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "6Z5x06"
                                        })
                                    }), L && (0, ed.jsx)(r0.R, {}), L ? r.archived ? (0, ed.jsx)(iq.s, {
                                        icon: (0, ed.jsx)(x.G, {
                                            icon: sj.Ze,
                                            fixedWidth: !0
                                        }),
                                        onClick: W(!1),
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "yKu/3Y"
                                        })
                                    }) : (0, ed.jsx)(iq.s, {
                                        "data-testid": "doc-menu-trash-button",
                                        color: "red.500",
                                        icon: (0, ed.jsx)(x.G, {
                                            icon: e_.$,
                                            fixedWidth: !0
                                        }),
                                        onClick: W(!0),
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "1C/Yjq"
                                        })
                                    }) : null]
                                })]
                            })
                        }), r && (0, ed.jsx)(aa.Z, {
                            doc: r,
                            isOpen: b,
                            onClose: C
                        }), r && k && (0, ed.jsx)(oK.r, {
                            doc: r,
                            isAnalyticsPanelOpen: k,
                            onAnalyticsPanelClose: E,
                            mode: "personal"
                        }), X && (0, ed.jsx)(s$.B, {
                            editor: d,
                            isOpen: B,
                            onClose: Q
                        }), z && (0, ed.jsx)(ac.T, {
                            editor: d
                        })]
                    })
                },
                af = n(22595),
                ap = n(26886),
                ah = n(71528),
                ax = n(26384),
                am = n(26673),
                ag = n(91930),
                av = n(7328),
                aj = n(84807),
                ab = n(28165),
                ay = n(12221),
                aC = n(97442),
                aO = {
                    followOnStart: "follow_on_start",
                    followingId: "following_id"
                },
                aw = function(e, t) {
                    var n = t.followOnStart,
                        r = t.followingId,
                        i = new URL(e);
                    return r && i.searchParams.append(aO.followingId, r), n && i.searchParams.append(aO.followOnStart, "true"), i.toString()
                },
                ak = function(e) {
                    switch (e) {
                        case "edit":
                            return d.ag._({
                                id: "UZN1cZ"
                            });
                        case "comment":
                            return d.ag._({
                                id: "jFTs0A"
                            });
                        case "view":
                            return d.ag._({
                                id: "Ya6CJ0"
                            });
                        default:
                            return d.ag._({
                                id: "Txd1qM"
                            })
                    }
                },
                aS = function(e) {
                    var t, n, r = e.isOpen,
                        i = e.onClose,
                        o = e.accessLinkUrl,
                        a = e.onPlayClick,
                        c = (0, tU.SE)().user,
                        u = (0, sr.useRouter)().replace,
                        h = {
                            followOnStart: !0,
                            followingId: null == c ? void 0 : c.id
                        },
                        g = (0, j.useState)(h),
                        v = g[0];
                    g[1];
                    var b = aw(o, v),
                        y = (0, tU.SE)(),
                        C = y.user,
                        O = y.color,
                        w = (0, q.CG)(tB.yx),
                        k = null == w ? void 0 : null === (t = w.accessLinks) || void 0 === t ? void 0 : null === (n = t[0]) || void 0 === n ? void 0 : n.permission,
                        S = (0, ab.keyframes)(s || (s = (0, av.Z)(["\n    0% { transform: scale(1.0); filter: brightness(1.0);  }\n    3% { transform: scale(1.0); filter: brightness(1.0);  }\n    8% {  transform: scale(0.90); filter: brightness(1.30);  }\n    18% { transform: scale(1.05); filter: brightness(1.0); }\n    30% { transform: scale(1.0); filter: brightness(1.0); }\n  "])));
                    return (0, ed.jsx)(m.Wk, {
                        isDark: !1,
                        children: (0, ed.jsxs)(oX.u_, {
                            isOpen: r,
                            onClose: i,
                            size: "lg",
                            children: [(0, ed.jsx)(tX.Z, {}), (0, ed.jsxs)(oJ.h, {
                                children: [(0, ed.jsx)(o$.x, {
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "88XnIQ"
                                    })
                                }), (0, ed.jsx)(t$.o, {}), (0, ed.jsx)(ec.i, {}), (0, ed.jsx)(t0.f, {
                                    pt: "6",
                                    children: (0, ed.jsxs)(eo.K, {
                                        spacing: "4",
                                        children: [(0, ed.jsx)(f.x, {
                                            children: (0, ed.jsx)(l.cC, {
                                                id: "oYTLJe",
                                                values: {
                                                    0: ak(k),
                                                    GAMMA_ARTIFACT_PROPER_NOUN: em.Yc
                                                },
                                                components: {
                                                    0: (0, ed.jsx)(f.x, {
                                                        as: "span",
                                                        fontWeight: "bold",
                                                        borderBottom: "1px dashed",
                                                        borderColor: "gray.400",
                                                        display: "inline-block"
                                                    }),
                                                    1: (0, ed.jsx)(m.kH, {
                                                        label: d.ag._({
                                                            id: "8LnpqL"
                                                        }),
                                                        placement: "top"
                                                    })
                                                }
                                            })
                                        }), (0, ed.jsx)(p.xu, {
                                            mb: "2",
                                            children: (0, ed.jsx)(aC.I, {
                                                url: b,
                                                variant: "solid"
                                            })
                                        }), (0, ed.jsxs)(sN.b, {
                                            children: [(0, ed.jsx)(sZ.z, {}), (0, ed.jsxs)(er.U, {
                                                flexBasis: "100%",
                                                alignItems: "top",
                                                children: [(0, ed.jsx)(f.x, {
                                                    fontSize: "sm",
                                                    width: "100%",
                                                    children: (0, ed.jsx)(l.cC, {
                                                        id: "EApNIe"
                                                    })
                                                }), (0, ed.jsxs)(p.xu, {
                                                    position: "relative",
                                                    textShadow: "sm",
                                                    children: [(0, ed.jsx)(ay.q, {
                                                        animation: "".concat(S, " 2s infinite ease-out"),
                                                        name: null == C ? void 0 : C.displayName,
                                                        src: null == C ? void 0 : C.profileImageUrl,
                                                        size: "md",
                                                        border: "solid 3px ".concat(O.value),
                                                        shadow: "lg"
                                                    }), (0, ed.jsx)(p.xu, {
                                                        position: "absolute",
                                                        top: "1.75rem",
                                                        left: "1.75rem",
                                                        outline: "0 0 2px rgba(255,255,255,1.0)",
                                                        sx: {
                                                            path: {
                                                                stroke: "white",
                                                                strokeWidth: 48
                                                            }
                                                        },
                                                        color: "black",
                                                        children: (0, ed.jsx)(x.G, {
                                                            icon: aj.q,
                                                            fixedWidth: !0
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0, ed.jsx)(t1.m, {
                                    children: (0, ed.jsxs)(t2.h, {
                                        children: [(0, ed.jsx)(el.z, {
                                            variant: "ghost",
                                            colorScheme: "gray",
                                            onClick: function() {
                                                i()
                                            },
                                            children: (0, ed.jsx)(l.cC, {
                                                id: "DPfwMq"
                                            })
                                        }), (0, ed.jsx)(el.z, {
                                            variant: "solid",
                                            onClick: function() {
                                                i(), a(), u(b, b, {
                                                    shallow: !0
                                                })
                                            },
                                            leftIcon: (0, ed.jsx)(x.G, {
                                                icon: s4.zc
                                            }),
                                            children: (0, ed.jsx)(l.cC, {
                                                id: "tbDuNX"
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                aE = function(e) {
                    var t, n, r, i, o = e.doc,
                        s = e.isStaticEditor,
                        a = e.editorWrapperEl,
                        c = e.scrollingParentSelector,
                        h = (0, nC.M)({
                            id: "meetModal"
                        }),
                        g = h.onOpen,
                        v = h.onClose,
                        b = h.isOpen,
                        y = ao({
                            editorWrapperEl: a,
                            scrollingParentSelector: c
                        }),
                        C = y.enterSlideView,
                        O = y.exitSlideView,
                        w = y.setExitedFullscreenByClick,
                        k = y.isFullscreen,
                        S = y.enterFullscreen,
                        E = y.exitFullscreen,
                        I = (0, tU.SE)().user,
                        P = (0, q.CG)(K.gh),
                        D = (0, j.useRef)(P);
                    (0, j.useEffect)(function() {
                        D.current = P
                    }, [P]);
                    var A = s6()[P],
                        T = A.shortcutLabel,
                        R = A.shortcutIcon,
                        _ = A.shortcutKeys,
                        M = A.buttonLabel,
                        L = null == o ? void 0 : null === (t = o.accessLinks) || void 0 === t ? void 0 : null === (n = t[0]) || void 0 === n ? void 0 : n.url,
                        z = !!(null == o ? void 0 : null === (r = o.accessLinks) || void 0 === r ? void 0 : null === (i = r[0]) || void 0 === i ? void 0 : i.permission),
                        N = (0, tU.py)("manage", o || void 0),
                        Z = (0, ir.ye)("presentFullScreen"),
                        G = "present" === (0, q.CG)(K.e_).primaryAction ? "solid" : "plain";
                    return (0, ed.jsxs)(u.k, {
                        children: [(0, ed.jsxs)(t2.h, {
                            isAttached: !0,
                            size: "sm",
                            "data-guider-highlight": "present-button-group",
                            "data-editor-mode": P === tz.q.SLIDE_VIEW ? "slide" : "doc",
                            children: [(0, ed.jsx)(m.kH, {
                                closeOnMouseDown: !1,
                                closeOnClick: !1,
                                label: T,
                                shortcut: _,
                                children: (0, ed.jsx)(oQ.h, {
                                    fontWeight: "normal",
                                    size: "sm",
                                    variant: G,
                                    onClick: function() {
                                        P === tz.q.SLIDE_VIEW ? O() : C({
                                            fullscreen: Z
                                        })
                                    },
                                    onMouseDown: ti.br,
                                    icon: (0, ed.jsx)(x.G, {
                                        icon: R
                                    }),
                                    "data-present-button": !0,
                                    children: M
                                })
                            }), (0, ed.jsxs)(rQ.v, {
                                children: [(0, ed.jsx)(rX.j, {
                                    variant: G,
                                    as: oQ.r,
                                    icon: (0, ed.jsx)(x.G, {
                                        icon: am.pt
                                    })
                                }), (0, ed.jsx)(eS.h, {
                                    children: (0, ed.jsxs)(rJ.q, {
                                        zIndex: "popover",
                                        children: [P === tz.q.DOC_VIEW && (0, ed.jsxs)(ag.k, {
                                            title: d.ag._({
                                                id: "9vUn+H"
                                            }),
                                            children: [(0, ed.jsx)(iq.s, {
                                                icon: (0, ed.jsx)(x.G, {
                                                    icon: sH.Rk,
                                                    fixedWidth: !0
                                                }),
                                                command: (0, m.cE)("Mod+Enter"),
                                                onClick: function() {
                                                    return C({
                                                        fullscreen: !1
                                                    })
                                                },
                                                children: (0, ed.jsx)(l.cC, {
                                                    id: "LRFe2O"
                                                })
                                            }), (0, ed.jsx)(iq.s, {
                                                icon: (0, ed.jsx)(x.G, {
                                                    icon: ax.tc,
                                                    fixedWidth: !0
                                                }),
                                                command: (0, m.cE)("Mod+Shift+Enter"),
                                                onClick: function() {
                                                    return C({
                                                        fullscreen: !0
                                                    })
                                                },
                                                children: (0, ed.jsx)(l.cC, {
                                                    id: "OwIqiD"
                                                })
                                            })]
                                        }), P === tz.q.SLIDE_VIEW && (0, ed.jsx)(iq.s, {
                                            icon: (0, ed.jsx)(x.G, {
                                                icon: s3.Bg,
                                                fixedWidth: !0
                                            }),
                                            command: "ESC",
                                            onClick: O,
                                            children: (0, ed.jsx)(l.cC, {
                                                id: "5Rfo7J"
                                            })
                                        }), !s && I && N && (0, ed.jsxs)(ed.Fragment, {
                                            children: [(0, ed.jsx)(r0.R, {}), (0, ed.jsx)(m.kH, {
                                                isDisabled: z,
                                                label: (0, ed.jsx)(l.cC, {
                                                    id: "zk6wKo"
                                                }),
                                                children: (0, ed.jsx)(p.xu, {
                                                    children: (0, ed.jsx)(iq.s, {
                                                        onClick: function() {
                                                            var e;
                                                            null != o && null !== (e = o.accessLinks) && void 0 !== e && e[0].permission && g()
                                                        },
                                                        isDisabled: !z,
                                                        icon: (0, ed.jsx)(x.G, {
                                                            icon: ah.AS,
                                                            fixedWidth: !0
                                                        }),
                                                        children: (0, ed.jsx)(eo.K, {
                                                            spacing: "0",
                                                            children: (0, ed.jsx)(l.cC, {
                                                                id: "z7gRub",
                                                                components: {
                                                                    0: (0, ed.jsx)(f.x, {}),
                                                                    1: (0, ed.jsx)(f.x, {
                                                                        fontSize: "sm",
                                                                        color: "gray.600"
                                                                    })
                                                                }
                                                            })
                                                        })
                                                    })
                                                })
                                            })]
                                        }), !s && I && L && (0, ed.jsx)(aS, {
                                            isOpen: b,
                                            onClose: v,
                                            accessLinkUrl: L,
                                            onPlayClick: function() {
                                                C({
                                                    fullscreen: !1
                                                })
                                            }
                                        })]
                                    })
                                })]
                            })]
                        }), P === tz.q.SLIDE_VIEW && (0, ed.jsx)(u.k, {
                            ml: P === tz.q.SLIDE_VIEW ? 2 : 0,
                            children: (0, ed.jsx)(m.kH, {
                                label: k ? "Exit full screen" : "Enter full screen",
                                children: (0, ed.jsx)(oQ.r, {
                                    "aria-label": k ? "Exit full screen" : "Enter full screen",
                                    borderRadius: "md",
                                    icon: (0, ed.jsx)(x.G, {
                                        icon: k ? ap.Qj : af.TL
                                    }),
                                    onClick: k ? function() {
                                        w(!0), E()
                                    } : S
                                })
                            })
                        })]
                    })
                },
                aI = n(46231),
                aP = n(38621),
                aD = function(e) {
                    var t = e.spotlightingByBlock,
                        n = (0, tV._i)().editor,
                        r = (0, j.useCallback)(function() {
                            t ? null == n || n.commands.turnOffSpotlight() : null == n || n.commands.spotlightNextBlock()
                        }, [n, t]);
                    return (0, ed.jsx)(u.k, {
                        children: (0, ed.jsx)(m.kH, {
                            closeOnMouseDown: !1,
                            closeOnClick: !1,
                            label: (0, ed.jsxs)(f.x, {
                                whiteSpace: "nowrap",
                                children: [t ? "Turn off spotlight" : "Turn on spotlight", (0, ed.jsx)(f.x, {
                                    as: "span",
                                    display: "inline",
                                    color: "gray.400",
                                    ml: 2,
                                    children: "S"
                                })]
                            }),
                            children: (0, ed.jsx)(oQ.h, {
                                colorScheme: "trueblue",
                                variant: t ? "solid" : "plain",
                                onClick: function(e) {
                                    r(), e.target.blur()
                                },
                                icon: (0, ed.jsx)(x.G, {
                                    icon: aP.QM
                                }),
                                children: "Spotlight"
                            })
                        })
                    })
                },
                aA = n(18504),
                aT = n(60271),
                aR = n(4685),
                a_ = n(18066),
                aM = (0, j.memo)(function(e) {
                    var t = e.isOpen,
                        n = e.onClose,
                        r = e.openThemeEditor,
                        i = e.setDocTheme,
                        o = (0, q.CG)(K.Pu);
                    return (0, ed.jsx)(m.Wk, {
                        isDark: !1,
                        children: (0, ed.jsxs)(tQ.d, {
                            returnFocusOnClose: !1,
                            isOpen: t,
                            placement: "right",
                            onClose: n,
                            size: "sm",
                            children: [(0, ed.jsx)(tX.Z, {
                                background: "none"
                            }), (0, ed.jsxs)(tJ.s, {
                                "data-testid": "doc-theme-drawer",
                                "data-doc-theme-drawer": !0,
                                motionProps: {
                                    variants: {
                                        enter: {
                                            x: "0%",
                                            transition: {
                                                duration: .2
                                            }
                                        },
                                        exit: {
                                            x: "100%",
                                            transition: {
                                                duration: .1
                                            }
                                        }
                                    }
                                },
                                children: [(0, ed.jsx)(t$.o, {}), (0, ed.jsx)(o$.x, {
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "FEr96N"
                                    })
                                }), (0, ed.jsx)(t0.f, {
                                    overflowX: "hidden",
                                    children: (0, ed.jsx)(a_.y, {
                                        currentTheme: o,
                                        setTheme: i,
                                        openThemeEditor: r,
                                        onClose: n
                                    })
                                }), (0, ed.jsx)(t1.m, {
                                    children: (0, ed.jsx)(el.z, {
                                        w: "100%",
                                        variant: "solid",
                                        onClick: n,
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "DPfwMq"
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                });
            aM.displayName = "DocThemeDrawer";
            var aL = (0, j.memo)(function() {
                var e, t = (0, eN.p)(),
                    n = (0, y.$gs)().isConnected,
                    r = (0, tV._i)(),
                    i = r.docId,
                    o = r.getCollaborativeEditorInstance,
                    s = (0, nC.M)({
                        id: "themeEditor"
                    }),
                    a = s.isOpen,
                    c = s.onOpen,
                    h = s.onClose,
                    g = (0, nC.M)({
                        id: "themeStyleDrawer"
                    }),
                    v = g.isOpen,
                    b = g.onOpen,
                    C = g.onClose,
                    O = null === (e = o()) || void 0 === e ? void 0 : e.state.doc.toJSON(),
                    w = (0, q.CG)(K.Pu),
                    k = (0, aR.g)(),
                    E = (0, S.Z)(k, 2),
                    I = E[0],
                    P = E[1],
                    D = (0, j.useCallback)(function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        e ? t ? P({
                            type: "SET_NEW_THEME_FOR_SELECTING",
                            data: {
                                theme: e
                            }
                        }) : P({
                            type: "SET_THEME_EDITING",
                            data: {
                                theme: e
                            }
                        }) : P({
                            type: "NEW_BLANK_THEME"
                        }), c()
                    }, [P, c]),
                    A = o();
                (0, eO.bb)(A, D);
                var T = (0, tE.z$)(),
                    R = (0, eO.vi)({
                        docId: i,
                        editor: A
                    }).updateDocThemeWithAccentImages,
                    _ = (0, j.useCallback)(function(e) {
                        e.id !== w.id && R(e.id).then(function() {
                            null == T || T.track(tE.AA.DOC_THEME_UPDATED, {
                                doc_id: i,
                                theme_id: e.id
                            })
                        }).catch(function(e) {
                            console.error(e), t({
                                title: (0, ed.jsx)(l.cC, {
                                    id: "Fulf8b",
                                    values: {
                                        0: e.message
                                    }
                                }),
                                position: "top",
                                status: "error"
                            })
                        })
                    }, [T, w.id, i, t, R]);
                return (0, j.useEffect)(function() {
                    var e = oY.T.on("toggleThemeBlock", b),
                        t = sF.pw.on(sF.TI.OPEN_THEME_DRAWER, b);
                    return function() {
                        e(), t()
                    }
                }, [b]), (0, ed.jsxs)(u.k, {
                    children: [(0, ed.jsx)(m.kH, {
                        label: n ? (0, ed.jsx)(l.cC, {
                            id: "JkEyR8"
                        }) : (0, ed.jsx)(l.cC, {
                            id: "GvC+mL",
                            components: {
                                0: (0, ed.jsx)(f.x, {}),
                                1: (0, ed.jsx)(f.x, {
                                    color: "gray.300"
                                })
                            }
                        }),
                        "aria-label": d.ag._({
                            id: "JkEyR8"
                        }),
                        children: (0, ed.jsx)(p.xu, {
                            children: (0, ed.jsx)(oQ.h, {
                                "data-guider-highlight": "toolbar-theme-button",
                                onClick: b,
                                isDisabled: !n,
                                icon: (0, ed.jsx)(x.G, {
                                    icon: aA.q2
                                }),
                                "data-testid": "toolbar-theme-button",
                                children: (0, ed.jsx)(l.cC, {
                                    id: "FEr96N"
                                })
                            })
                        })
                    }), (0, ed.jsx)(aM, {
                        isOpen: v && !a,
                        onClose: C,
                        openThemeEditor: D,
                        setDocTheme: _
                    }), (0, ed.jsx)(aT.z, {
                        isOpen: a,
                        onClose: h,
                        state: I,
                        dispatch: P,
                        docContent: O,
                        onThemeCreated: _,
                        disableDrawerTransition: !0
                    })]
                })
            });
            aL.displayName = "ThemeBlock";
            var az = n(31997),
                aN = n(74588),
                aZ = n(95472),
                aG = [.5, .8, .9, 1, 1.1, 1.2, 1.5, 2],
                aF = function(e) {
                    return "".concat((100 * e).toFixed(0), "%")
                },
                aU = function() {
                    var e = (0, ir.ye)("presentZoom"),
                        t = (0, tV._i)().editor,
                        n = (0, tE.z$)(),
                        r = (0, b.I0)(),
                        i = (0, q.CG)(K.SU),
                        o = (0, j.useCallback)(function(e) {
                            r((0, K.Ic)({
                                zoomLevel: e
                            })), r((0, K.fT)({
                                enabled: !1
                            })), null == n || n.track(tE.AA.DOC_ZOOMED, {
                                direction: "set",
                                level: e
                            })
                        }, [r, n]),
                        s = (0, j.useCallback)(function() {
                            r((0, K.fT)({
                                enabled: !0
                            }))
                        }, [r]),
                        a = (0, j.useCallback)(function() {
                            var e = Math.min(ii.v4, i + .1);
                            r((0, K.Ic)({
                                zoomLevel: e
                            })), r((0, K.fT)({
                                enabled: !1
                            })), null == n || n.track(tE.AA.DOC_ZOOMED, {
                                direction: "in",
                                level: e
                            })
                        }, [r, n, i]),
                        c = (0, j.useCallback)(function() {
                            var e = Math.max(ii.Ou, i - .1);
                            r((0, K.Ic)({
                                zoomLevel: e
                            })), r((0, K.fT)({
                                enabled: !1
                            })), null == n || n.track(tE.AA.DOC_ZOOMED, {
                                direction: "in",
                                level: e
                            })
                        }, [r, n, i]),
                        u = (0, j.useCallback)(function() {
                            var e = ii.aX;
                            r((0, K.Ic)({
                                zoomLevel: e
                            })), r((0, K.fT)({
                                enabled: !1
                            })), null == n || n.track(tE.AA.DOC_ZOOMED, {
                                direction: "reset",
                                level: e
                            })
                        }, [r, n]),
                        p = (0, q.CG)(rL.C),
                        h = (0, rA.rJ)();
                    return ((0, j.useEffect)(function() {
                        if (e) return rD.F7.on("keydown", "PRESENT_BLOCK", function(e) {
                            return !(p || !t || (0, aZ.KB)(t) || (0, tL.Hx)(e.target)) && ((0, rP.ZP)("=")(e) ? (a(), e.preventDefault(), !0) : (0, rP.ZP)("-")(e) ? (c(), e.preventDefault(), !0) : (0, rP.ZP)("0")(e) ? (u(), e.preventDefault(), !0) : !!(0, rP.ZP)("9")(e) && (s(), e.preventDefault(), !0))
                        })
                    }, [p, e, t, a, c, u, s]), e) ? (0, ed.jsxs)(t2.h, {
                        spacing: "0",
                        size: "sm",
                        variant: "plain",
                        isAttached: !0,
                        children: [(0, ed.jsx)(m.kH, {
                            closeOnMouseDown: !1,
                            closeOnClick: !1,
                            shortcut: "-",
                            label: d.ag._({
                                id: "FjkaiT"
                            }),
                            children: (0, ed.jsx)(A.h, {
                                "aria-label": d.ag._({
                                    id: "FjkaiT"
                                }),
                                fontWeight: "normal",
                                onClick: c,
                                icon: (0, ed.jsx)(x.G, {
                                    icon: az.Kl
                                })
                            })
                        }), (0, ed.jsxs)(rQ.v, {
                            closeOnSelect: !0,
                            children: [(0, ed.jsx)(m.kH, {
                                label: d.ag._({
                                    id: "VZ3UQG"
                                }),
                                children: (0, ed.jsx)(rX.j, {
                                    minW: 20,
                                    as: el.z,
                                    variant: "plain",
                                    size: "sm",
                                    rightIcon: (0, ed.jsx)(x.G, {
                                        icon: aN.eW
                                    }),
                                    children: h ? (0, ed.jsx)(l.cC, {
                                        id: "R9Khdg"
                                    }) : aF(i)
                                })
                            }), (0, ed.jsxs)(rJ.q, {
                                maxW: "220px",
                                children: [(0, ed.jsx)(r1._, {
                                    value: h ? "auto" : i.toString(),
                                    type: "radio",
                                    children: (0, ed.jsx)(r2.i, {
                                        value: "auto",
                                        onClick: s,
                                        children: (0, ed.jsxs)(er.U, {
                                            children: [(0, ed.jsxs)(f.x, {
                                                children: [(0, ed.jsx)(l.cC, {
                                                    id: "R9Khdg"
                                                }), " ", (0, ed.jsx)(f.x, {
                                                    as: "span",
                                                    color: "gray.500",
                                                    children: (0, ed.jsx)(l.cC, {
                                                        id: "P9Cyl9"
                                                    })
                                                })]
                                            }), (0, ed.jsx)(oU.L, {}), (0, ed.jsx)(f.x, {
                                                as: "span",
                                                opacity: "0.6",
                                                children: "9"
                                            })]
                                        })
                                    })
                                }), (0, ed.jsx)(r0.R, {}), (0, ed.jsx)(r1._, {
                                    value: h ? "auto" : i.toString(),
                                    type: "radio",
                                    children: aG.map(function(e) {
                                        return (0, ed.jsx)(r2.i, {
                                            value: (e / 100).toString(),
                                            onClick: function() {
                                                o(e)
                                            },
                                            children: (0, ed.jsxs)(er.U, {
                                                children: [(0, ed.jsx)(f.x, {
                                                    children: aF(e)
                                                }), (0, ed.jsx)(oU.L, {}), e === ii.aX && (0, ed.jsx)(f.x, {
                                                    as: "span",
                                                    opacity: "0.6",
                                                    children: "0"
                                                })]
                                            })
                                        }, e)
                                    })
                                })]
                            })]
                        }), (0, ed.jsx)(m.kH, {
                            closeOnMouseDown: !1,
                            closeOnClick: !1,
                            shortcut: "+",
                            label: d.ag._({
                                id: "AWOSPo"
                            }),
                            children: (0, ed.jsx)(A.h, {
                                fontWeight: "normal",
                                "aria-label": d.ag._({
                                    id: "AWOSPo"
                                }),
                                onClick: a,
                                icon: (0, ed.jsx)(x.G, {
                                    icon: nD.r8
                                })
                            })
                        })]
                    }) : null
                };
            (0, eK.E)(p.xu);
            var aW = (0, j.memo)(function(e) {
                    var t, r, i = e.scrollingParentSelector,
                        o = e.toggleCommentsPanel,
                        s = e.isCommentsPanelOpen,
                        c = e.editorWrapperEl,
                        l = e.docEditorType,
                        d = (0, oF.a)(["(max-width: 840px)", "(min-width: 841px)"]),
                        f = (0, S.Z)(d, 1)[0],
                        p = (0, oL.i)({
                            base: !0,
                            lg: !1
                        }),
                        h = (0, nF.LQ)(window.location.href),
                        x = (0, q.CG)(K.gh),
                        m = (0, q.CG)(tB.yx),
                        g = (0, tV._i)().editor,
                        v = (0, tU.py)("comment", m),
                        b = (0, rN.g)(g).enabled;
                    (0, q.CG)(K.WI), (0, q.CG)(K.yn);
                    var y = "SLIDE_VIEW" !== x,
                        C = (0, q.CG)(K.hN),
                        O = l !== tH.Z.COLLABORATIVE,
                        w = l === tH.Z.PUBLIC_STATIC,
                        k = (0, q.CG)(K.Tf),
                        E = (0, ir.ye)("aiChat");
                    (0, ir.ye)("pptExport") && (window.exportToPptx = (t = (0, tq.Z)(tY().mark(function e(t) {
                        var r;
                        return tY().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (g) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, Promise.all([n.e(9775), n.e(5743), n.e(3496)]).then(n.bind(n, 13448));
                                case 4:
                                    return r = e.sent.exportToPptx, e.abrupt("return", r(g, t));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return t.apply(this, arguments)
                    }));
                    var I = B((0, j.useCallback)(function(e) {
                            var t = P.current;
                            return !!t && (!!(t.querySelector("[data-active]") || t.querySelector('[aria-expanded="true"]')) || e.clientY < 100)
                        }, []), !k),
                        P = (0, j.useRef)(null),
                        D = !k || k && I,
                        A = !!(null == m ? void 0 : m.publishedSnapshotId),
                        T = !(0, nG.s2)() && !f && !h;
                    return (0, ed.jsxs)(u.k, {
                        "data-editor-toolbar": !0,
                        ref: P,
                        bg: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.1) 100%)",
                        position: "absolute",
                        zIndex: "overlay",
                        top: 0,
                        left: 0,
                        right: 0,
                        p: 2,
                        alignItems: "center",
                        pr: 6,
                        marginTop: D ? 0 : "-100%",
                        pointerEvents: "none",
                        sx: (r = {}, (0, a.Z)(r, "&:focus-within", {
                            marginTop: 0
                        }), (0, a.Z)(r, "> *", {
                            pointerEvents: "auto"
                        }), (0, a.Z)(r, "> #toolbar-spacer", {
                            pointerEvents: "none"
                        }), r),
                        transitionProperty: "margin-top",
                        transitionDuration: "ultra-slow",
                        transitionTimingFunction: "ease-in-out",
                        "data-print-hidden": !0,
                        children: [(0, ed.jsx)(sv.a, {}), !w && (0, ed.jsx)(er.U, {
                            children: (0, ed.jsx)(sl, {
                                doc: m
                            })
                        }), (0, ed.jsx)(oU.L, {
                            pointerEvents: "none",
                            id: "toolbar-spacer"
                        }), (0, ed.jsxs)(er.U, {
                            children: [!f && (0, ed.jsx)(sx.D, {}), !f && !y && (0, ed.jsx)(aU, {}), !f && !y && (0, ed.jsx)(ed.Fragment, {
                                children: (0, ed.jsx)(aD, {
                                    spotlightingByBlock: b
                                })
                            }), !f && !O && C && (0, ed.jsx)(aL, {}), !f && !O && (0, ed.jsx)(aI.S, {
                                doc: m
                            }), T && !A && (0, ed.jsx)(aE, {
                                doc: m,
                                isStaticEditor: O,
                                editorWrapperEl: c,
                                scrollingParentSelector: i
                            }), T && A && (0, ed.jsx)(oB, {
                                doc: m
                            }), !O && v && (0, ed.jsx)(sm.U, {
                                doc: m,
                                mode: x,
                                isCommentsPanelOpen: s,
                                toggleCommentsPanel: o
                            }), !f && p && !O && C && E && (0, ed.jsx)(sg.u, {}), !f && !O && (0, ed.jsx)(o5, {
                                doc: m
                            }), !f && !O && (0, ed.jsx)(au, {
                                doc: m,
                                editorWrapperEl: c,
                                scrollingParentSelector: i
                            }), !w && (0, ed.jsx)(u.k, {
                                children: (0, ed.jsx)(t4.DY, {
                                    showRing: !0
                                })
                            })]
                        })]
                    })
                }),
                aH = n(34684),
                aV = n(18751),
                aB = n(95993),
                aq = n(33266),
                aK = n(27483),
                aY = n(81891),
                aQ = n(2702),
                aX = n(60081),
                aJ = n(17665),
                a$ = n(54113),
                a0 = n(51663),
                a1 = n(73593),
                a2 = n(20362),
                a5 = n(34768),
                a3 = n(4038),
                a4 = n(43862),
                a6 = n(42545),
                a8 = n(80591),
                a9 = n(82360),
                a7 = (i = (0, tq.Z)(tY().mark(function e(t) {
                    var n, r, i, o, s, a, c;
                    return tY().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                n = t.editor, r = t.chain, i = t.node, o = t.imageAttrs, s = t.pos, r.updateAttributesAtPos(s, (0, a8.j6)(i, {
                                    uploadStatus: a4.D.Uploading
                                })), a = o.tempUrl, c = o.src, (0, a3.WY)(c, n.storage.mediaUpload.orgId, {
                                    onUploadComplete: function(e) {
                                        (0, a8.Ns)(n, a, e)
                                    },
                                    onUploadFailed: function(e) {
                                        (0, a8.f8)(n, a, e, !0)
                                    }
                                });
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e) {
                    return i.apply(this, arguments)
                }),
                ce = function(e, t) {
                    console.debug("[AIStream processAIImages] for cardId: ", t);
                    var n = e.chain(),
                        r = (0, tR.N2)(e.state.doc, function(e) {
                            return (0, tM.KH)(e) && e.attrs.id === t
                        })[0];
                    if (!r) {
                        console.error("[processAIImages] can not find card with id: ", t);
                        return
                    }
                    var i = r.pos,
                        o = i + r.node.nodeSize;
                    e.state.doc.descendants(function(t, r) {
                        if (r < i || r > o) return !0;
                        var s, a = t.attrs,
                            c = t.type,
                            l = void 0;
                        return "image" === c.name ? l = a : (0, a9.E)(t) ? l = a.image : ((0, tM.KH)(t) || (0, a6.pt)(t)) && (l = null === (s = a.background) || void 0 === s ? void 0 : s.image), l && l.uploadStatus === a4.D.Queued && (console.debug("[AIStream processAIImages]: ".concat(t.type.name, " node with AI queries at pos ").concat(r, ":"), l), a7({
                            editor: e,
                            chain: n,
                            node: t,
                            imageAttrs: l,
                            pos: r
                        })), !0
                    }), n.run()
                },
                ct = ["latency"];

            function cn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function cr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? cn(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cn(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ci = "[CONTENT_FILTER]",
                co = function() {
                    return (0, ed.jsxs)(sN.b, {
                        status: "error",
                        variant: "solid",
                        children: [(0, ed.jsx)(sZ.z, {}), (0, ed.jsx)(aV.X, {
                            children: (0, ed.jsxs)(eo.K, {
                                children: [(0, ed.jsx)("strong", {
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "7g5s/N"
                                    })
                                }), (0, ed.jsx)(f.x, {
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "Xp43Ei"
                                    })
                                })]
                            })
                        })]
                    })
                },
                cs = function(e) {
                    var t = e.editor,
                        n = e.chunk,
                        r = e.theme,
                        i = e.docFormatKey,
                        o = n.id,
                        s = n.index,
                        a = (0, aJ.a)({
                            chunk: n,
                            theme: r,
                            docFormatKey: i
                        }),
                        c = (0, tR.N2)(t.state.doc, function(e) {
                            return (0, ox.KH)(e)
                        })[0],
                        l = (0, tR.N2)(t.state.doc, function(e) {
                            return (0, ox.KH)(e) && e.attrs.id === o
                        })[0];
                    if (!c) throw Error("Doc does not have a first card");
                    var d = l ? {
                        from: l.pos,
                        to: l.pos + l.node.nodeSize
                    } : 0 === s ? {
                        from: c.pos,
                        to: c.pos + c.node.nodeSize
                    } : t.state.doc.nodeSize - 3;
                    try {
                        if (t.commands.insertContentAt(d, a, {
                                updateSelection: !1
                            }), n.cardComplete && 0 === n.index) {
                            var u = (0, i2.t)(t.state.doc.resolve(c.pos));
                            u && t.commands.command(function(e) {
                                return e.tr.setSelection(u), !0
                            })
                        }
                    } catch (e) {
                        console.warn("[useCreateFromStream] ERROR updating card", a), console.warn(e)
                    }
                },
                ca = function(e) {
                    var t = e.docId,
                        n = e.store,
                        r = e.generateInfo,
                        i = e.editor;
                    if (!r.lastEventId || !r.streamId || !r.interactionId) {
                        console.error("Trying to resume stream for doc (id=".concat(t, ") without lastEventId or streamId or interactionId"), {
                            lastEventId: r.lastEventId,
                            streamId: r.streamId,
                            interactionId: r.interactionId
                        });
                        return
                    }
                    aY.a.trackRequestSent(n, {
                        interface: "wizard",
                        streaming: !0,
                        interactionId: r.interactionId,
                        isResuming: !0
                    });
                    var o = (0, aK.pM)({
                        interactionId: r.interactionId,
                        lastEventId: r.lastEventId,
                        streamId: r.streamId,
                        retries: 3
                    }).stream;
                    return (0, aq.Nl)({
                        stream: o,
                        docId: t,
                        interactionId: r.interactionId,
                        lastCompletedCardId: r.lastCompletedCardId,
                        lastCompletedCardIndex: r.lastCompletedCardIndex,
                        options: {
                            imageOptions: r.imageOptions || {
                                license: r.imageLicense
                            },
                            docFormatKey: (0, a1.hx)((0, a1.VA)(i)).key
                        },
                        store: n
                    })
                },
                cc = function(e, t) {
                    var n, r = (0, q.qr)(),
                        i = (0, q.TL)(),
                        o = (0, q.CG)(K.KV),
                        s = (0, ir.ye)("streamResumingEnabled"),
                        a = (0, j.useRef)(!1),
                        c = cl({
                            docId: e
                        }),
                        l = c.isStreaming,
                        d = c.onStreamData,
                        u = c.onStreamDone,
                        f = c.onStreamError,
                        p = c.onStreamStart,
                        h = c.onAbortStream,
                        x = cu(l),
                        m = (0, j.useCallback)((n = (0, tq.Z)(tY().mark(function n(i) {
                            var o, s, c;
                            return tY().wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (t) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        p({
                                            editor: t
                                        }), s = cd({
                                            streamResponse: i,
                                            editor: t,
                                            store: r,
                                            docId: e
                                        }).getReader(), n.prev = 5;
                                    case 6:
                                        return n.next = 8, s.read();
                                    case 8:
                                        if ((o = n.sent).done) {
                                            n.next = 18;
                                            break
                                        }
                                        if (o.value) {
                                            n.next = 11;
                                            break
                                        }
                                        return n.abrupt("continue", 6);
                                    case 11:
                                        if (!a.current) {
                                            n.next = 14;
                                            break
                                        }
                                        return console.log("[AIStream] has aborted -- no longer reading stream"), n.abrupt("break", 18);
                                    case 14:
                                        "data" === (c = o.value).event && (d({
                                            value: c.data,
                                            editor: t,
                                            streamResponse: i
                                        }), x()), n.next = 6;
                                        break;
                                    case 18:
                                        n.next = 24;
                                        break;
                                    case 20:
                                        return n.prev = 20, n.t0 = n.catch(5), f({
                                            err: n.t0,
                                            streamResponse: i,
                                            editor: t
                                        }), n.abrupt("return");
                                    case 24:
                                        if (!a.current) {
                                            n.next = 26;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 26:
                                        c && "done" !== c.event && console.error('[AIStream] incomplete stream: last message received is not `event="done"`', {
                                            lastMessage: c
                                        }), u({
                                            editor: t,
                                            streamResponse: i
                                        });
                                    case 28:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, null, [
                                [5, 20]
                            ])
                        })), function(e) {
                            return n.apply(this, arguments)
                        }), [e, t, d, u, f, p, x, r]);
                    (0, a5.v)(function() {
                        if (t && o && !l) {
                            var n = (0, nL.oH)(e)(r.getState()),
                                i = (0, nL.nl)(r.getState());
                            if (n) {
                                "running" === n.status && m(n);
                                return
                            }
                            if (s && !i) {
                                var a = (0, a1.VA)(t),
                                    c = a.generateInfo;
                                if ("streaming" === a.generateStatus) {
                                    var d = (0, K.yx)(r.getState());
                                    if ((null == d ? void 0 : d.createdTime) && Date.now() - new Date(d.createdTime).getTime() > 36e5) {
                                        t.commands.updateAttributesAtPos(0, {
                                            generateStatus: "done"
                                        });
                                        return
                                    }
                                    var u = ca({
                                        docId: e,
                                        generateInfo: c,
                                        editor: t,
                                        store: r
                                    });
                                    u && m(u)
                                }
                            }
                        }
                    }, [e, t, r, o, p, f, d, u, s, m, l], [t, o]), (0, j.useEffect)(function() {
                        return function() {
                            var n = (0, nL.oH)(e)(r.getState());
                            t && n && "running" === n.status && (a.current = !0, h({
                                editor: t,
                                streamResponse: n
                            }))
                        }
                    }, [i, e, h, t, r])
                },
                cl = function(e) {
                    var t = e.docId,
                        n = (0, eN.p)(),
                        r = (0, q.TL)(),
                        i = (0, q.qr)(),
                        o = (0, ir.ye)("aiWizardUploadImages"),
                        s = (0, q.CG)(K.Pu),
                        a = (0, j.useState)(!1),
                        c = a[0],
                        d = a[1],
                        u = (0, j.useRef)(null);
                    (0, j.useEffect)(function() {
                        return function() {
                            u.current && (n.close(u.current), u.current = null)
                        }
                    }, [n]);
                    var f = (0, j.useCallback)(function() {
                            u.current || (u.current = n({
                                id: "ai-generating-toast",
                                isClosable: !1,
                                render: function() {
                                    return (0, ed.jsxs)(sN.b, {
                                        variant: "light",
                                        children: [(0, ed.jsx)(np.$, {
                                            size: "sm",
                                            mr: 2
                                        }), (0, ed.jsxs)(aV.X, {
                                            children: [(0, ed.jsx)("strong", {
                                                children: (0, ed.jsx)(l.cC, {
                                                    id: "n2cF1o"
                                                })
                                            }), " ", (0, ed.jsx)(l.cC, {
                                                id: "BFGwQA"
                                            })]
                                        })]
                                    })
                                },
                                position: "top",
                                duration: null
                            }))
                        }, [n]),
                        p = (0, j.useCallback)(function(e) {
                            var t = e.editor;
                            t && (d(!0), t.commands.setAIGenerationRunning(!0), f())
                        }, [f]),
                        h = (0, j.useCallback)(function(e) {
                            var t = e.editor,
                                n = e.value;
                            if (e.streamResponse && t) {
                                var r = (0, a1.hx)((0, a1.VA)(t)),
                                    i = n.id,
                                    a = n.cardComplete;
                                cs({
                                    chunk: n,
                                    editor: t,
                                    theme: s,
                                    docFormatKey: r.key
                                }), a && o && ce(t, i)
                            }
                        }, [o, s]),
                        x = (0, j.useCallback)(function(e) {
                            var t = e.editor,
                                o = e.streamResponse;
                            if (t && o) {
                                var s = o.id,
                                    a = (0, a1.hx)((0, a1.VA)(t));
                                d(!1), t.commands.setAIGenerationRunning(!1), t.commands.updateAttributesAtPos(0, {
                                    generateStatus: "done"
                                }), (0, aX.rD)(), r((0, nL.G0)({
                                    id: s,
                                    status: "complete"
                                })), aY.a.trackStreamComplete(i, s), (0, a$.d)("wizardCreation"), u.current && n.update(u.current, {
                                    title: (0, ed.jsx)(l.cC, {
                                        id: "2/LpWt",
                                        values: {
                                            0: a.generationLabel || a.label
                                        }
                                    }),
                                    status: "success",
                                    position: "top",
                                    duration: 3e3,
                                    isClosable: !0
                                })
                            }
                        }, [r, i, n]);
                    return {
                        isStreaming: c,
                        onStreamStart: p,
                        onStreamData: h,
                        onStreamError: (0, j.useCallback)(function(e) {
                            var o = e.err,
                                s = e.editor,
                                a = e.streamResponse,
                                c = a.id,
                                f = (0, aQ.uS)(o),
                                p = f.errorMessage,
                                h = f.errorCode;
                            d(!1), s.commands.setAIGenerationRunning(!1), s.commands.updateAttributesAtPos(0, {
                                generateStatus: "done"
                            }), (0, aX.rD)(), r((0, nL.G0)({
                                id: c,
                                status: "error"
                            }));
                            var x = (0, nL.Sn)(c)(i.getState());
                            if (x) {
                                var m = x.latency,
                                    g = (0, eI.Z)(x, ct);
                                (0, nX.pQ)(cr(cr({}, g), {}, {
                                    errorName: "StreamError",
                                    errorMessage: p,
                                    errorCode: h,
                                    outputMessage: "",
                                    latency: m || performance.now() - g.startTime,
                                    isResuming: a.isResuming,
                                    docId: t
                                }))
                            }
                            u.current && (p === ci ? n.update(u.current, {
                                render: co,
                                position: "top",
                                duration: null,
                                isClosable: !0
                            }) : n.update(u.current, {
                                title: (0, ed.jsx)(l.cC, {
                                    id: "sbsGk/"
                                }),
                                status: "error",
                                position: "top",
                                duration: null,
                                isClosable: !0
                            }))
                        }, [r, t, i, n]),
                        onStreamDone: x,
                        onAbortStream: (0, j.useCallback)(function(e) {
                            var t = e.editor,
                                n = e.streamResponse.id;
                            d(!1), t.commands.setAIGenerationRunning(!1), aY.a.trackStreamAbort(i, {
                                interactionId: n,
                                abortReason: "leave-editor"
                            }), r((0, nL.Of)({
                                id: n
                            }))
                        }, [r, i])
                    }
                },
                cd = function(e) {
                    var t = e.streamResponse,
                        n = e.editor,
                        r = e.store,
                        i = e.docId,
                        o = t.id,
                        s = t.stream,
                        a = !0;
                    return s.pipeThrough(new aB.GJ({
                        transform: function(e, t) {
                            if ("done" === e.event && "content_filter" === e.finishReason) {
                                t.error(Error(ci));
                                return
                            }
                            t.enqueue(e)
                        }
                    })).pipeThrough((0, aq.c1)(function(e) {
                        a && "data" === e.event && (aY.a.trackStreamStart(r, {
                            interactionId: o,
                            docId: i
                        }), t.isResuming && n.commands.deleteCardsAfter(t.lastCompletedCardId || null), a = !1), "data" === e.event && e.data.cardComplete && n.commands.updateNestedAttributesAtPos(0, {
                            generateInfo: {
                                lastEventId: e.data.eventId,
                                lastCompletedCardId: e.data.id,
                                lastCompletedCardIndex: e.data.index
                            }
                        })
                    }))
                },
                cu = function(e) {
                    var t = (0, a0.As)("editor"),
                        n = (0, j.useRef)(!0);
                    (0, j.useEffect)(function() {
                        if (e) {
                            var r = t.scroller;
                            if (r) {
                                var i = function() {
                                        t.isAtBottom(40) ? n.current = !0 : n.current = !1
                                    },
                                    o = function() {
                                        n.current = !1
                                    };
                                return r.addEventListener("wheel", i, {
                                        passive: !0
                                    }), r.addEventListener("touchend", i, {
                                        passive: !0
                                    }), r.addEventListener("touchstart", o, {
                                        passive: !0
                                    }), r.addEventListener("touchmove", o, {
                                        passive: !0
                                    }),
                                    function() {
                                        r.removeEventListener("wheel", i), r.removeEventListener("touchend", i), r.removeEventListener("touchstart", o), r.removeEventListener("touchmove", o)
                                    }
                            }
                        }
                    }, [t, e]);
                    var r = (0, j.useCallback)(function() {
                        if (n.current) {
                            var e;
                            null === (e = t.scroller) || void 0 === e || e.scrollTo({
                                top: t.scroller.scrollHeight,
                                behavior: "auto"
                            })
                        }
                    }, [t]);
                    return (0, a2.Z_)(r, 100)
                },
                cf = n(14198),
                cp = function(e) {
                    var t = e.toggleToCPanel,
                        n = e.initializeToCPanel,
                        r = e.isToCPanelOpen,
                        i = (0, cf.F)().breakpoints.xl,
                        o = (0, q.CG)(K.gh),
                        s = (0, j.useState)(o !== tz.q.SLIDE_VIEW),
                        a = s[0],
                        c = s[1],
                        l = (0, j.useState)(!1),
                        d = l[0];
                    l[1];
                    var u = (0, b.I0)();
                    (0, ni.vm)(function() {
                        n()
                    }, [i, t, n, u], []), (0, ni.vm)(function() {
                        o === tz.q.SLIDE_VIEW ? (c(r), t({
                            disableTransition: !1,
                            override: "closed"
                        })) : d && o === tz.q.DOC_VIEW && t({
                            disableTransition: !1,
                            override: a ? "open" : "closed"
                        })
                    }, [t, r, a, o, d], [o])
                };

            function ch(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function cx(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ch(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ch(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var cm = "doc_archived_warning",
                cg = function(e, t) {
                    var n = (0, eN.p)(),
                        r = (0, y.iX9)(),
                        i = (0, S.Z)(r, 1)[0];
                    (0, j.useEffect)(function() {
                        return function() {
                            n.close(cm)
                        }
                    }, []), (0, j.useEffect)(function() {
                        e && t === tH.Z.COLLABORATIVE && (e.archived && !n.isActive(cm) ? n({
                            id: cm,
                            title: (0, ed.jsxs)(f.x, {
                                "data-testid": "trash-confirmation-toast",
                                children: [(0, ed.jsx)(l.cC, {
                                    id: "fkHPZu"
                                }), " ", (0, ed.jsx)(eZ.r, {
                                    textDecoration: "underline",
                                    onClick: function() {
                                        var t = {
                                            id: e.id
                                        };
                                        i({
                                            variables: t,
                                            optimisticResponse: {
                                                unarchiveDoc: cx(cx({}, t), {}, {
                                                    archived: !0,
                                                    __typename: "Doc"
                                                })
                                            }
                                        })
                                    },
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "7wfwc0"
                                    })
                                })]
                            }),
                            status: "warning",
                            position: "top",
                            isClosable: !1,
                            duration: null
                        }) : !e.archived && n.isActive(cm) && n.close(cm))
                    }, [e, t, n, i])
                },
                cv = function() {
                    var e = (0, ir.ye)("filmstrip"),
                        t = (0, q.CG)(tB.fh),
                        n = (0, ik.Br)("comment"),
                        r = (0, q.CG)(K.gh);
                    return e && t === tH.Z.COLLABORATIVE && n && r === tz.q.DOC_VIEW && !(0, nG.s2)()
                },
                cj = n(20372),
                cb = n(27910),
                cy = n(80102),
                cC = n(50350),
                cO = function() {
                    var e = (0, ev.nO)(),
                        t = (0, ev.UV)(),
                        n = (0, oL.i)({
                            base: !1,
                            lg: !0,
                            "2xl": !1
                        }),
                        r = (0, q.CG)(K.Hl),
                        i = (0, q.CG)(K.GX),
                        o = cv(),
                        s = (0, cb.k)(),
                        c = (0, cj.S)((0, a.Z)({
                            base: "0px"
                        }, cy.K0, cC.bk)) || "0px";
                    return (0, j.useMemo)(function() {
                        return {
                            "--doc-padding-left": i && o && n ? "".concat(150, "px") : "0px",
                            "--doc-padding-right": r ? c : s ? "60px" : "0px",
                            "--present-padding-left": "".concat(e, "px"),
                            "--present-padding-right": "".concat(t, "px"),
                            "--comment-slide-margin": c
                        }
                    }, [i, e, r, t, s, n, c, o])
                },
                cw = n(28615),
                ck = n(93665),
                cS = n(85422),
                cE = n(95896),
                cI = function(e) {
                    var t = e.onClose;
                    return (0, ed.jsxs)(u.k, {
                        p: 4,
                        color: "white",
                        bg: "yellow.500",
                        borderRadius: "md",
                        alignItems: "center",
                        position: "relative",
                        children: [(0, ed.jsx)(n2.P, {
                            size: "sm",
                            onClick: t,
                            position: "absolute",
                            insetEnd: 1,
                            top: 1
                        }), (0, ed.jsx)(x.G, {
                            icon: ck.xH,
                            size: "2x"
                        }), (0, ed.jsxs)(u.k, {
                            direction: "column",
                            ml: 3,
                            children: [(0, ed.jsx)(p.xu, {
                                children: (0, ed.jsx)(f.x, {
                                    lineHeight: 6,
                                    fontSize: "sm",
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "4YARE9",
                                        values: {
                                            GAMMA_ARTIFACT_PROPER_NOUN: em.Yc
                                        },
                                        components: {
                                            0: (0, ed.jsx)("b", {})
                                        }
                                    })
                                })
                            }), (0, ed.jsx)(f.x, {
                                lineHeight: 6,
                                fontSize: "sm",
                                pt: 2,
                                children: (0, ed.jsx)(l.cC, {
                                    id: "Enj8Kw",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: em.Yc
                                    },
                                    components: {
                                        0: (0, ed.jsx)(el.z, {
                                            as: eZ.r,
                                            variant: "link",
                                            textDecoration: "underline",
                                            fontSize: "sm",
                                            onClick: function() {
                                                (0, cS.pU)()
                                            },
                                            colorScheme: "white"
                                        })
                                    }
                                })
                            })]
                        })]
                    })
                },
                cP = function(e, t) {
                    var n = (0, eN.p)(),
                        r = (0, cE.z$)();
                    (0, j.useEffect)(function() {
                        t === tH.Z.COLLABORATIVE && e && null === e.currentSnapshotId && (n({
                            render: cI,
                            duration: null,
                            position: "top",
                            isClosable: !0
                        }), null == r || r.track(tE.xW.NO_CURRENT_SNAPSHOT, {
                            docId: e.id
                        }))
                    }, [r, e, t, n])
                },
                cD = function(e) {
                    var t = (0, q.TL)(),
                        n = (0, q.CG)(K.GX),
                        r = (0, j.useRef)(!1);
                    (0, j.useEffect)(function() {
                        !e || r.current || n || (r.current = !0, t((0, K.dQ)({
                            isOpen: !0
                        })))
                    }, [t, n, e])
                },
                cA = n(56675),
                cT = n(65185);

            function cR(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function c_(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? cR(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cR(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var cM = function(e) {
                    var t = (0, cA.x)(),
                        n = (0, q.CG)(cT.cn);
                    (0, j.useEffect)(function() {
                        n && t.cache.updateQuery({
                            query: sP.yE1,
                            variables: {
                                id: e
                            }
                        }, function(e) {
                            if (!(null != e && e.doc)) return e;
                            var t = e.doc;
                            return t.titleEdited ? e : {
                                doc: c_(c_({}, t), {}, {
                                    title: n
                                })
                            }
                        })
                    }, [n, t, e])
                },
                cL = n(47947),
                cz = n(46732),
                cN = function(e, t) {
                    var n = (0, cz._)().isUnauthorized;
                    (0, tE.If)(function(r) {
                        !0 !== n && void 0 !== n && (r.track(tE.AA.DOC_VIEWED, {
                            doc_id: e
                        }), t === tH.Z.EXAMPLE_STATIC && r.track(tE.AA.EXAMPLE_VIEWED, {
                            doc_id: e
                        }))
                    }, [e, t, n]), (0, cL.d)();
                    var r = (0, ir.ye)("realUserMetrics"),
                        i = t === tH.Z.COLLABORATIVE && r,
                        o = (0, ir.ye)("rumKeystrokeSampleRate");
                    (0, s8.lh)(i, o)
                },
                cZ = function(e) {
                    var t = (0, b.I0)(),
                        n = (0, tE.z$)();
                    (0, j.useEffect)(function() {
                        var r, i = function() {
                                var i = (0, q.bh)().getState();
                                r = (0, K.Q5)(i), (0, s9.I7)(e), t((0, K.lx)({
                                    isEditingDisabled: !0
                                })), null == n || n.trackDocEvent(tE.AA.DOC_PRINTED)
                            },
                            o = function() {
                                t((0, K.lx)({
                                    isEditingDisabled: !1
                                })), t((0, K.xn)({
                                    expandedCardsMap: r
                                }))
                            };
                        return window.addEventListener("beforeprint", i), window.addEventListener("afterprint", o),
                            function() {
                                window.removeEventListener("beforeprint", i), window.removeEventListener("afterprint", o)
                            }
                    }, [t, e, n])
                };

            function cG(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function cF(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? cG(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cG(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var cU = "doc-root",
                cW = function(e) {
                    var t = e.isConnected;
                    return (0, ed.jsx)(u.k, {
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        color: "gray.500",
                        fontSize: "2xl",
                        children: t ? (0, ed.jsx)(l.cC, {
                            id: "svObPT",
                            values: {
                                GAMMA_ARTIFACT_PROPER_NOUN: em.Yc
                            }
                        }) : (0, ed.jsxs)(u.k, {
                            m: 8,
                            alignItems: "center",
                            direction: "row",
                            children: [(0, ed.jsx)(x.G, {
                                icon: c.bK,
                                size: "4x"
                            }), (0, ed.jsx)(f.x, {
                                ml: 8,
                                children: (0, ed.jsx)(l.cC, {
                                    id: "qercPA",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: em.Yc
                                    },
                                    components: {
                                        0: (0, ed.jsx)("strong", {})
                                    }
                                })
                            })]
                        })
                    })
                },
                cH = function(e) {
                    var t = e.doc,
                        n = e.user,
                        r = e.docEditorType,
                        i = (0, C.$m)(t, n),
                        o = (0, b.v9)(K.gh),
                        s = r === tH.Z.COLLABORATIVE && !i,
                        a = s && o === tz.q.SLIDE_VIEW;
                    return (null == i ? void 0 : i.permission) == "view" ? (0, ed.jsx)(rm.m, {}) : a ? (0, ed.jsx)(ex, {}) : s ? (0, ed.jsx)(k.C, {
                        showTourReplay: !0
                    }) : null
                },
                cV = (0, tV.eT)(function(e) {
                    var t = e.docEditorType,
                        n = (0, tV._i)(),
                        r = n.docId,
                        i = n.isUnauthorized,
                        o = n.setCollaborativeEditorInstance,
                        s = n.editor,
                        a = (0, q.CG)(tB.yx),
                        c = (0, y.$gs)().isConnected,
                        l = (0, tU.SE)().user;
                    (0, O.F3)(), cg(a, t), cP(a, t), cc(r, s), cM(r), cN(r, t), (0, cw.j)(), (0, aH.P)(), (0, aH.J)(), (0, rb.Zd)(s, ".".concat(cU)), rI(s), (0, tW.V)(), cZ(s), (0, C.DD)(a, t === tH.Z.COLLABORATIVE);
                    var f = (0, j.useRef)(null),
                        x = (0, q.TL)(),
                        g = (0, eO.Yy)(),
                        b = (0, j.useMemo)(function() {
                            return (0, tk.vu)(g)
                        }, [g]),
                        k = cv();
                    cD(k);
                    var S = cO(),
                        E = (0, j.useMemo)(function() {
                            return cF(cF({}, b), S)
                        }, [b, S]);
                    console.debug("%c[DocEditorComponent] RENDER - ".concat(r), "background-color: gold");
                    var I = (0, ev.Pp)(oG.Q),
                        P = I.togglePanel,
                        D = I.isPanelOpen,
                        A = I.initPanel,
                        T = (0, ev.Pp)(nE.s),
                        R = T.togglePanel,
                        _ = T.isPanelOpen,
                        M = (0, ev.Pp)(nI.Rr),
                        L = M.togglePanel,
                        z = M.isPanelOpen;
                    (0, nI.QK)({
                        toggleDesignPartnerPanel: L,
                        isDesignPartnerPanelOpen: z,
                        editor: s
                    }), cp({
                        toggleToCPanel: P,
                        isToCPanelOpen: D,
                        initializeToCPanel: A
                    }), (0, j.useEffect)(function() {
                        return function() {
                            x((0, ey.qo)())
                        }
                    }, [x]);
                    var N = (0, j.useCallback)(function() {
                            return !!(s && s.state.selection.empty)
                        }, [s]),
                        Z = (0, ev.Xy)(),
                        G = Z.leftPanelLifecycle,
                        F = Z.rightPanelLifecycle,
                        U = Z.globalPanelLifecycle,
                        W = (0, eg.dU)(null == a ? void 0 : a.organization),
                        H = (0, w.U)(null == a ? void 0 : a.title, W),
                        V = d.ag._({
                            id: "X6YCwz"
                        }),
                        B = d.ag._({
                            id: "abr3hR"
                        });
                    return (0, ed.jsxs)(ed.Fragment, {
                        children: [(0, ed.jsx)("style", {
                            id: "editorStyleOverride",
                            children: "body {overflow: hidden;}"
                        }), (0, ed.jsx)(v(), {
                            children: (0, ed.jsx)("title", {
                                children: H
                            })
                        }), (0, ed.jsx)(nk, {
                            doc: a,
                            editor: s
                        }), (0, ed.jsx)(eC.H9, {
                            isEnabledFn: N
                        }), i ? (0, ed.jsx)(cW, {
                            isConnected: c
                        }) : (0, ed.jsxs)(u.k, {
                            id: "doc-main",
                            direction: "row",
                            w: "100%",
                            h: "100%",
                            "data-testid": "doc-editor-root",
                            ref: f,
                            children: [(0, ed.jsx)(ej.Av, {
                                panelLifecycle: G
                            }), (0, ed.jsxs)(u.k, {
                                flex: "1",
                                direction: "column",
                                position: "relative",
                                minWidth: "0",
                                h: "100%",
                                children: [(0, ed.jsx)(m.Wk, {
                                    isDark: g,
                                    children: (0, ed.jsx)(aW, {
                                        scrollingParentSelector: ".".concat(cU),
                                        editorWrapperEl: f.current,
                                        docEditorType: t,
                                        isToCPanelOpen: D,
                                        toggleToCPanel: P,
                                        isCommentsPanelOpen: _,
                                        toggleCommentsPanel: R
                                    })
                                }), (0, ed.jsxs)(p.xu, {
                                    flex: "1",
                                    overflowY: "auto",
                                    overflowX: "hidden",
                                    minWidth: "0",
                                    h: "100%",
                                    className: (0, h.cx)(cU, z && "design-partner-panel-open"),
                                    style: {
                                        "--ai-editing-label": "'".concat(V, "'"),
                                        "--ai-generating-label": "'".concat(B, "'")
                                    },
                                    sx: E,
                                    children: [t === tH.Z.PUBLIC_STATIC ? (0, ed.jsx)(rO, {
                                        docId: r,
                                        snapshotId: null == a ? void 0 : a.currentSnapshotId,
                                        scrollingParentSelector: ".".concat(cU),
                                        onCreate: o
                                    }) : t === tH.Z.EXAMPLE_STATIC ? (0, ed.jsx)(rj, {
                                        docId: r,
                                        snapshotId: null == a ? void 0 : a.currentSnapshotId,
                                        scrollingParentSelector: ".".concat(cU),
                                        onCreate: o
                                    }) : (0, ed.jsxs)(eb.Mn.Provider, {
                                        value: U,
                                        children: [(0, ed.jsx)(ew.Ge, {
                                            doc: a,
                                            docId: r,
                                            readOnly: null == a ? void 0 : a.archived,
                                            onCreate: o,
                                            scrollingParentSelector: ".".concat(cU)
                                        }), s && (0, ed.jsx)(tF, {
                                            editor: s
                                        })]
                                    }), (0, ed.jsx)(rc, {
                                        editor: s
                                    }), (0, ed.jsx)(iy, {
                                        editor: s
                                    })]
                                })]
                            }), (0, ed.jsx)(ej.U8, {
                                panelLifecycle: F
                            }), (0, ed.jsx)(tS.a, {
                                editorId: "main",
                                children: (0, ed.jsxs)(ed.Fragment, {
                                    children: [(0, ed.jsx)(tw, {
                                        editor: s
                                    }), (0, ed.jsx)(cH, {
                                        doc: a,
                                        user: l,
                                        docEditorType: t
                                    }), k && (0, ed.jsx)(oZ, {})]
                                })
                            })]
                        })]
                    })
                }),
                cB = n(56768),
                cq = n(93031),
                cK = n(59195),
                cY = n(92488),
                cQ = n(38717),
                cX = n(21496),
                cJ = function(e) {
                    var t = e.theme,
                        n = e.onClick,
                        r = e.isChecked,
                        i = e.index,
                        o = e.startIndex;
                    return (0, ed.jsxs)(p.xu, {
                        gridColumnStart: i + 1 - o,
                        display: o > i ? "none" : "block",
                        gridRow: 1,
                        as: cQ.f,
                        p: 2,
                        transition: "all 0.2s ease-in-out",
                        bgColor: r ? "trueblue.100" : "linen.50",
                        textAlign: "left",
                        tabIndex: 0,
                        borderRadius: "md",
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        _focus: {
                            boxShadow: r ? void 0 : "outline"
                        },
                        outline: "none",
                        onClick: n,
                        _hover: {
                            bgColor: r ? "trueblue.100" : "gray.100"
                        },
                        onKeyDown: function(e) {
                            ("Enter" === e.key || " " === e.key) && n()
                        },
                        "data-theme-id": t.id,
                        "data-testid": r ? "current-theme-preview" : void 0,
                        cursor: "pointer",
                        children: [(0, ed.jsx)(cX.n, {
                            theme: t
                        }), (0, ed.jsxs)(eo.K, {
                            direction: "row",
                            spacing: 1,
                            pt: 1,
                            children: [r && (0, ed.jsx)(nu.n, {
                                w: 3,
                                h: "auto",
                                mr: 1,
                                color: "trueblue.700"
                            }), (0, ed.jsx)(f.x, {
                                fontSize: "sm",
                                noOfLines: 1,
                                "data-testid": "theme-name",
                                color: r ? "trueblue.700" : void 0,
                                children: t.name
                            })]
                        })]
                    })
                };
            cJ.displayName = "DemoDocThemePreview";
            var c$ = "linen.50",
                c0 = function(e) {
                    var t = e.templateTheme,
                        r = e.setTheme,
                        i = e.currentThemeId,
                        o = (0, b.v9)(K.gh) === tz.q.SLIDE_VIEW,
                        s = (0, j.useState)([]),
                        a = s[0],
                        c = s[1],
                        d = (0, j.useState)(!1),
                        f = d[0],
                        p = d[1],
                        h = (0, j.useState)(0),
                        m = h[0],
                        g = h[1],
                        v = (0, oL.i)({
                            base: 3,
                            md: 4,
                            lg: 5
                        }) || 3;
                    (0, j.useEffect)(function() {
                        n.e(3541).then(n.bind(n, 33541)).then(function(e) {
                            c(e.GLOBAL_THEMES)
                        })
                    }, []);
                    var y = [].concat((0, ih.Z)(t ? [t] : []), (0, ih.Z)(a.filter(function(e) {
                            return e.id !== (null == t ? void 0 : t.id)
                        }))),
                        C = (0, j.useCallback)(function(e) {
                            1 === e ? g(function(e) {
                                return e + 1
                            }) : g(function(e) {
                                return e - 1
                            })
                        }, []);
                    return o ? (0, ed.jsx)(ed.Fragment, {}) : (0, ed.jsx)(eS.h, {
                        children: (0, ed.jsxs)(u.k, {
                            w: "100%",
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            bgColor: c$,
                            zIndex: "sticky",
                            direction: "column",
                            borderTop: "3px solid var(--chakra-colors-trueblue-500)",
                            minH: 12,
                            p: 2,
                            justifyContent: "center",
                            children: [(0, ed.jsx)(u.k, {
                                alignItems: "flex-end",
                                justify: "flex-end",
                                children: (0, ed.jsx)(el.z, {
                                    variant: "ghost",
                                    size: "sm",
                                    rightIcon: (0, ed.jsx)(x.G, {
                                        icon: f ? cY.gc : cK.on
                                    }),
                                    onClick: function() {
                                        return p(function(e) {
                                            return !e
                                        })
                                    },
                                    children: f ? (0, ed.jsx)(l.cC, {
                                        id: "yz7wBu"
                                    }) : (0, ed.jsx)(l.cC, {
                                        id: "x6tIe+"
                                    })
                                })
                            }), (0, ed.jsx)(u.k, {
                                justify: "flex-start",
                                align: "flex-start",
                                bgColor: c$,
                                w: "100%",
                                children: f && (0, ed.jsxs)(eo.K, {
                                    direction: "row",
                                    align: "center",
                                    justify: "center",
                                    w: "100%",
                                    children: [(0, ed.jsx)(A.h, {
                                        "aria-label": "Left",
                                        onClick: function() {
                                            return C(-1)
                                        },
                                        variant: "ghost",
                                        isDisabled: 0 === m,
                                        icon: (0, ed.jsx)(x.G, {
                                            icon: cq.Ey
                                        })
                                    }), (0, ed.jsx)(rR.r, {
                                        w: "100%",
                                        flex: 1,
                                        overflow: "hidden",
                                        padding: 2,
                                        transition: "all 0.2s ease-in-out",
                                        templateColumns: ["repeat(".concat(v, ", calc(100% / ").concat(v, " - 1em))")],
                                        gap: "0 1em",
                                        bgColor: c$,
                                        children: y.map(function(e, t) {
                                            return (0, ed.jsx)(cJ, {
                                                index: t,
                                                startIndex: m,
                                                isChecked: e.id === i,
                                                theme: e,
                                                onClick: function() {
                                                    r(e)
                                                }
                                            }, e.id)
                                        })
                                    }), (0, ed.jsx)(A.h, {
                                        "aria-label": "Right",
                                        variant: "ghost",
                                        isDisabled: m + v > y.length,
                                        onClick: function() {
                                            return C(1)
                                        },
                                        icon: (0, ed.jsx)(x.G, {
                                            icon: cB.yO
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                },
                c1 = n(53589),
                c2 = n(68690),
                c5 = n(10344),
                c3 = n(70091),
                c4 = n(88963),
                c6 = [{
                    description: (0, ed.jsx)(l.cC, {
                        id: "gtWy3j"
                    }),
                    shortcut: ["←", "→"]
                }, {
                    description: (0, ed.jsx)(l.cC, {
                        id: "UCxK2S"
                    }),
                    shortcut: ["↑", "↓"]
                }, {
                    description: (0, ed.jsx)(l.cC, {
                        id: "IkakN2"
                    }),
                    shortcut: "Esc"
                }, {
                    description: (0, ed.jsx)(l.cC, {
                        id: "CgmvBu"
                    }),
                    shortcut: "S"
                }, {
                    description: (0, ed.jsx)(l.cC, {
                        id: "rEj/lx"
                    }),
                    shortcut: "Enter"
                }, {
                    description: (0, ed.jsx)(l.cC, {
                        id: "dQU33K"
                    }),
                    shortcut: "Mod+Shift+O"
                }, {
                    description: (0, ed.jsx)(l.cC, {
                        id: "K0Oq/D"
                    }),
                    shortcut: "R"
                }],
                c8 = function(e) {
                    var t = ao({
                            editorWrapperEl: e.editorWrapperEl,
                            scrollingParentSelector: e.scrollingParentSelector
                        }),
                        n = t.enterSlideView,
                        r = t.exitSlideView,
                        i = t.setExitedFullscreenByClick,
                        o = t.isFullscreen,
                        s = t.enterFullscreen,
                        a = t.exitFullscreen,
                        c = (0, q.CG)(K.gh),
                        u = (0, j.useRef)(c);
                    return (0, j.useEffect)(function() {
                        u.current = c
                    }, [c]), (0, ed.jsxs)(er.U, {
                        children: [(0, ed.jsxs)(t2.h, {
                            isAttached: !0,
                            size: "sm",
                            children: [(0, ed.jsx)(m.kH, {
                                label: c === tz.q.DOC_VIEW ? (0, ed.jsx)(l.cC, {
                                    id: "ek5OwP",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: em.Yc
                                    }
                                }) : (0, ed.jsx)(l.cC, {
                                    id: "43JI0J",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: em.Yc
                                    }
                                }),
                                children: (0, ed.jsx)(el.z, {
                                    variant: c === tz.q.DOC_VIEW ? "solid" : "plain",
                                    cursor: c === tz.q.SLIDE_VIEW ? "pointer" : "auto",
                                    onClick: function() {
                                        c === tz.q.SLIDE_VIEW && r()
                                    },
                                    leftIcon: (0, ed.jsx)(x.G, {
                                        icon: c2.cw
                                    }),
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "7Zdnlq"
                                    })
                                })
                            }), (0, ed.jsx)(m.kH, {
                                label: c === tz.q.SLIDE_VIEW ? (0, ed.jsx)(l.cC, {
                                    id: "Zfr5aa",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: em.Yc
                                    }
                                }) : (0, ed.jsx)(l.cC, {
                                    id: "rK6Cev",
                                    values: {
                                        GAMMA_ARTIFACT_PROPER_NOUN: em.Yc
                                    }
                                }),
                                children: (0, ed.jsx)(el.z, {
                                    variant: c === tz.q.SLIDE_VIEW ? "solid" : "plain",
                                    cursor: c === tz.q.DOC_VIEW ? "pointer" : "auto",
                                    onClick: function() {
                                        c === tz.q.DOC_VIEW && n({
                                            fullscreen: !1
                                        })
                                    },
                                    leftIcon: (0, ed.jsx)(x.G, {
                                        icon: c1.bg
                                    }),
                                    children: (0, ed.jsx)(l.cC, {
                                        id: "FOoDGS"
                                    })
                                })
                            })]
                        }), c === tz.q.SLIDE_VIEW && (0, ed.jsxs)(ed.Fragment, {
                            children: [(0, ed.jsx)(ec.i, {
                                orientation: "vertical"
                            }), (0, ed.jsx)(m.kH, {
                                label: o ? (0, ed.jsx)(l.cC, {
                                    id: "IkOhTI"
                                }) : (0, ed.jsx)(l.cC, {
                                    id: "q8ARHN"
                                }),
                                children: (0, ed.jsx)(A.h, {
                                    size: "sm",
                                    "aria-label": o ? d.ag._({
                                        id: "IkOhTI"
                                    }) : d.ag._({
                                        id: "q8ARHN"
                                    }),
                                    borderRadius: "md",
                                    icon: (0, ed.jsx)(x.G, {
                                        icon: o ? ap.Qj : af.TL
                                    }),
                                    onClick: o ? function() {
                                        i(!0), a()
                                    } : s
                                })
                            }), (0, ed.jsxs)(P.J, {
                                children: [(0, ed.jsx)(D.x, {
                                    children: (0, ed.jsx)(el.z, {
                                        size: "sm",
                                        variant: "plain",
                                        fontWeight: "normal",
                                        children: (0, ed.jsx)(l.cC, {
                                            id: "77Emn0"
                                        })
                                    })
                                }), (0, ed.jsxs)(T.y, {
                                    border: "1px solid #eee !important",
                                    children: [(0, ed.jsx)(c5.Q, {}), (0, ed.jsx)(c3.u, {}), (0, ed.jsx)(R.b, {
                                        children: (0, ed.jsx)(c4.A, {
                                            list: c6
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                c9 = (0, j.memo)(function(e) {
                    var t = e.scrollingParentSelector,
                        n = e.editorWrapperEl;
                    (0, q.CG)(tB.yx);
                    var r = (0, j.useRef)(null);
                    return (0, ed.jsx)(u.k, {
                        ref: r,
                        bg: "white",
                        borderBottom: "3px solid var(--chakra-colors-trueblue-600)",
                        position: "absolute",
                        zIndex: "overlay",
                        top: 0,
                        left: 0,
                        right: 0,
                        p: 2,
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        pr: 6,
                        children: (0, ed.jsx)(u.k, {
                            direction: "column",
                            w: "100%",
                            children: (0, ed.jsx)(c8, {
                                editorWrapperEl: n,
                                scrollingParentSelector: t
                            })
                        })
                    })
                }),
                c7 = "doc-root",
                le = (0, tV.eT)(function(e) {
                    var t, n = e.docEditorType,
                        r = void 0 === n ? tH.Z.COLLABORATIVE : n,
                        i = (0, tV._i)(),
                        o = i.docId,
                        s = i.setCollaborativeEditorInstance,
                        a = i.editor,
                        c = (0, q.CG)(tB.yx);
                    cN(o, r), (0, cw.j)(), (0, aH.P)(), (0, aH.J)(), (0, rb.Zd)(a, ".".concat(c7)), rI(a), (0, tW.V)(), cZ(a), (0, C.DD)(c, r === tH.Z.COLLABORATIVE);
                    var l = (0, j.useRef)(null),
                        d = null == c ? void 0 : c.theme,
                        f = (0, j.useState)(function() {
                            return d
                        }),
                        h = f[0],
                        x = f[1],
                        m = (0, q.TL)(),
                        g = (0, j.useRef)(!1),
                        b = (0, y.EDv)({
                            variables: {
                                docId: o,
                                snapshotId: null == c ? void 0 : c.currentSnapshotId
                            },
                            skip: !(null != c && c.currentSnapshotId)
                        }).data,
                        O = null == b ? void 0 : null === (t = b.snapshot) || void 0 === t ? void 0 : t.content.default;
                    console.debug("%c[DemoDocEditorComponent] RENDER - ".concat(o), "background-color: gold"), (0, j.useEffect)(function() {
                        d && !g.current && (x(d), g.current = !0)
                    }, [d]), (0, j.useEffect)(function() {
                        if (a) {
                            var e = null == h ? void 0 : h.config.accentBackgrounds;
                            if (!e || 0 === e.length) {
                                O && a.commands.setContent(O);
                                return
                            }
                            a.commands.updateThemeAccentImages(e)
                        }
                    }, [a, h, O]);
                    var w = (0, ev.Pp)(oG.Q);
                    cp({
                        toggleToCPanel: w.togglePanel,
                        isToCPanelOpen: w.isPanelOpen,
                        initializeToCPanel: w.initPanel
                    }), (0, j.useEffect)(function() {
                        return function() {
                            m((0, ey.qo)())
                        }
                    }, [m]);
                    var k = (0, ev.Xy)(),
                        S = k.leftPanelLifecycle;
                    return k.globalPanelLifecycle, (0, ed.jsxs)(ed.Fragment, {
                        children: [(0, ed.jsx)("style", {
                            id: "editorStyleOverride",
                            children: "body {overflow: hidden;}"
                        }), (0, ed.jsx)(v(), {
                            children: (0, ed.jsxs)("title", {
                                children: ["".concat(c ? (0, o1.$)(c.title) + " | " : ""), "Gamma"]
                            })
                        }), (0, ed.jsxs)(u.k, {
                            id: "doc-main",
                            direction: "row",
                            w: "100%",
                            h: "100%",
                            "data-testid": "doc-editor-root",
                            ref: l,
                            children: [(0, ed.jsx)(ej.Av, {
                                panelLifecycle: S
                            }), (0, ed.jsxs)(u.k, {
                                flex: "1",
                                direction: "column",
                                position: "relative",
                                minWidth: "0",
                                h: "100%",
                                children: [a && (0, ed.jsx)(c9, {
                                    scrollingParentSelector: ".".concat(c7),
                                    editorWrapperEl: l.current,
                                    setTheme: x,
                                    currentThemeId: (null == h ? void 0 : h.id) || (null == d ? void 0 : d.id),
                                    templateTheme: d
                                }), (0, ed.jsxs)(p.xu, {
                                    flex: "1",
                                    overflowY: "auto",
                                    overflowX: "hidden",
                                    minWidth: "0",
                                    h: "100%",
                                    className: c7,
                                    children: [(0, ed.jsx)(rO, {
                                        docId: o,
                                        snapshotId: null == c ? void 0 : c.currentSnapshotId,
                                        scrollingParentSelector: ".".concat(c7),
                                        onCreate: s,
                                        theme: h,
                                        showMadeWithGammaBadge: !1
                                    }), (0, ed.jsx)(iy, {
                                        editor: a,
                                        showNavigationControls: !0
                                    })]
                                })]
                            }), (0, ed.jsx)(tw, {
                                editor: a
                            }), (0, ed.jsx)(c0, {
                                setTheme: x,
                                currentThemeId: (null == h ? void 0 : h.id) || (null == d ? void 0 : d.id),
                                templateTheme: d
                            })]
                        })]
                    })
                }),
                lt = n(1005),
                ln = n(86633),
                lr = "body",
                li = n(56648),
                lo = n(60670),
                ls = function(e) {
                    var t = (0, a0.As)(e),
                        n = (0, j.useState)("up"),
                        r = n[0],
                        i = n[1];
                    return (0, j.useEffect)(function() {
                        var e = document.querySelector(t.scrollSelector);
                        if (e) {
                            var n = (null == e ? void 0 : e.scrollTop) || 0,
                                r = function() {
                                    var t = (null == e ? void 0 : e.scrollTop) || 0;
                                    Math.abs(t - n) > 0 && (i(!(t > n) || n > 0 && 0 === t || t > 0 && 0 === n ? "up" : "down"), n = t > 0 ? t : 0)
                                },
                                o = W()(function() {
                                    return window.requestAnimationFrame(r)
                                }, 500, {
                                    leading: !0
                                });
                            return null == e || e.addEventListener("scroll", o),
                                function() {
                                    return null == e ? void 0 : e.removeEventListener("scroll", o)
                                }
                        }
                    }, [t.scrollSelector]), r
                },
                la = n(26806);

            function lc(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ll(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? lc(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lc(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ld = function(e) {
                    var t, n, r, i = e.doc,
                        o = e.onCommentFeedOpen,
                        s = e.onTocOpen,
                        a = e.commentsEnabled,
                        c = (0, so.X)(Q.H.lastHomeUrl, "/"),
                        l = (0, S.Z)(c, 1)[0],
                        d = (0, tU.SE)().user,
                        u = (null == i ? void 0 : null === (t = i.comments) || void 0 === t ? void 0 : t.filter(function(e) {
                            return e.status === y.Ux9.Open
                        }).length) || 0,
                        p = ls("editor"),
                        h = (0, b.v9)(K.Pu),
                        m = (0, la.Jh)(h),
                        g = null !== (n = h.config.bodyColor) && void 0 !== n ? n : (0, t8.wj)(h) ? "white" : "gray.800",
                        v = null !== (r = h.accentColor) && void 0 !== r ? r : (0, t8.wj)(h) ? "trueblue.300" : "trueblue.700";
                    return (0, ed.jsxs)(er.U, {
                        p: 1,
                        px: 2,
                        bg: "gray.50",
                        shadow: "lg",
                        position: "sticky",
                        top: 0,
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        transform: "up" == p ? "translate(0px,0px)" : "translate(0px,-100%)",
                        opacity: "up" == p ? 1 : 0,
                        zIndex: "sticky",
                        sx: ll(ll({}, (0, la.Oj)(m, h, !0)), {}, {
                            border: "none",
                            filter: "none",
                            borderRadius: 0
                        }),
                        color: g,
                        children: [d && (0, ed.jsx)(nM(), {
                            href: l,
                            passHref: !0,
                            legacyBehavior: !0,
                            children: (0, ed.jsx)(A.h, {
                                as: eZ.r,
                                "aria-label": "Home",
                                color: g,
                                _hover: {
                                    bg: "transparent",
                                    color: v
                                },
                                icon: (0, ed.jsx)(x.G, {
                                    icon: o3.J9,
                                    size: "1x"
                                }),
                                variant: "ghost"
                            })
                        }), (0, ed.jsx)(f.x, {
                            flex: 1,
                            fontSize: "sm",
                            noOfLines: 1,
                            ml: 2,
                            color: g,
                            children: null == i ? void 0 : i.title
                        }), (0, ed.jsxs)(t2.h, {
                            variant: "ghost",
                            children: [(void 0 === a || a) && (0, ed.jsx)(el.z, {
                                color: g,
                                _hover: {
                                    bg: "transparent",
                                    color: v
                                },
                                fontSize: "sm",
                                onClick: o,
                                leftIcon: (0, ed.jsx)(x.G, {
                                    icon: lo.Mz
                                }),
                                children: u
                            }), (0, ed.jsx)(A.h, {
                                color: g,
                                "aria-label": "Open table of contents",
                                _hover: {
                                    bg: "transparent",
                                    color: v
                                },
                                onClick: s,
                                icon: (0, ed.jsx)(x.G, {
                                    icon: li.xi
                                })
                            })]
                        })]
                    })
                },
                lu = function(e) {
                    var t = e.doc,
                        n = e.docEditorType,
                        r = e.commentsEnabled,
                        i = void 0 === r || r,
                        o = (0, tV._i)(),
                        s = o.docId,
                        a = o.setCollaborativeEditorInstance,
                        c = o.editor,
                        l = (0, I.q)({
                            id: "mobile-comment-feed-panel-drawer"
                        }),
                        d = l.isOpen,
                        f = l.onOpen,
                        p = l.onClose,
                        h = (0, I.q)({
                            id: "mobile-toc-drawer"
                        }),
                        x = h.isOpen,
                        g = h.onOpen,
                        v = h.onClose,
                        b = (0, j.useState)(null),
                        y = b[0],
                        C = b[1];
                    return console.debug("%c[MobileEditorWrapper] RENDER - ".concat(s), "background-color: gold"), (0, ed.jsxs)(u.k, {
                        ref: (0, j.useCallback)(function(e) {
                            return C(e)
                        }, []),
                        direction: "column",
                        flex: 1,
                        children: [(0, ed.jsx)(ld, {
                            doc: t,
                            onCommentFeedOpen: f,
                            onTocOpen: g,
                            commentsEnabled: i
                        }), n === tH.Z.PUBLIC_STATIC ? (0, ed.jsx)(rO, {
                            docId: s,
                            snapshotId: null == t ? void 0 : t.currentSnapshotId,
                            scrollingParentSelector: lr,
                            onCreate: a
                        }) : n === tH.Z.EXAMPLE_STATIC ? (0, ed.jsx)(rj, {
                            docId: s,
                            snapshotId: null == t ? void 0 : t.currentSnapshotId,
                            scrollingParentSelector: lr,
                            onCreate: a
                        }) : (0, ed.jsxs)(ed.Fragment, {
                            children: [(0, ed.jsx)(ew.Ge, {
                                doc: t,
                                docId: s,
                                readOnly: !0,
                                onCreate: a,
                                scrollingParentSelector: lr
                            }), c && (0, ed.jsx)(tF, {
                                editor: c
                            })]
                        }), i && d && (0, ed.jsx)(m.Aj, {
                            isOpen: d,
                            onClose: p,
                            drawerProps: {
                                autoFocus: !1
                            },
                            children: (0, ed.jsx)(lt.m, {
                                onClose: p,
                                editor: c
                            })
                        }), x && (0, ed.jsx)(m.Aj, {
                            isOpen: x,
                            onClose: v,
                            children: (0, ed.jsx)(ln.o, {
                                rootElement: y,
                                handleClose: v
                            })
                        }), (0, ed.jsx)(tS.a, {
                            children: (0, ed.jsx)(rc, {
                                editor: c
                            })
                        })]
                    })
                },
                lf = (0, tV.eT)(function(e) {
                    var t = e.docEditorType,
                        n = (0, tV._i)(),
                        r = n.docId,
                        i = n.isUnauthorized,
                        o = n.editor;
                    cN(r, t), cc(r, o), (0, cw.j)();
                    var s = (0, j.useRef)(null),
                        a = (0, b.v9)(tB.yx);
                    console.debug("%c[MobileDocViewerComponent] RENDER - ".concat(r), "background-color: gold");
                    var c = t === tH.Z.COLLABORATIVE;
                    return (0, ed.jsxs)(ed.Fragment, {
                        children: [(0, ed.jsxs)(v(), {
                            children: [(0, ed.jsxs)("title", {
                                children: ["".concat(a ? (0, o1.$)(a.title) + " | " : ""), "Gamma"]
                            }), (0, ed.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width, user-scalable=no"
                            })]
                        }), (0, ed.jsx)(ab.Global, {
                            styles: {
                                html: {
                                    overflowX: "hidden"
                                },
                                body: {
                                    overflow: "hidden scroll",
                                    WebkitOverflowScrolling: "touch"
                                }
                            }
                        }), i ? (0, ed.jsxs)(u.k, {
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            color: "gray.500",
                            fontSize: "2xl",
                            p: 6,
                            textAlign: "center",
                            children: ["It looks like you don't have access to this", " ", em.Yc, "."]
                        }) : (0, ed.jsx)(u.k, {
                            id: "doc-main",
                            direction: "column",
                            w: "100%",
                            h: "100%",
                            "data-testid": "doc-editor-root",
                            ref: s,
                            flex: "1",
                            children: (0, ed.jsx)(lu, {
                                doc: a,
                                docEditorType: t,
                                commentsEnabled: c
                            })
                        })]
                    })
                })
        },
        47827: function(e, t, n) {
            n.d(t, {
                AA: function() {
                    return h
                },
                DN: function() {
                    return f
                },
                mb: function() {
                    return p
                }
            });
            var r = n(20406),
                i = n(28526),
                o = n.n(i),
                s = n(5632),
                a = n(2784),
                c = n(46358),
                l = n(42879),
                d = n(62141),
                u = n(6985),
                f = (0, a.createContext)({
                    openPageSetup: function(e, t) {},
                    openSharePanel: function(e, t) {}
                }),
                p = function(e, t) {
                    var n = (0, s.useRouter)().push,
                        i = (0, c.qr)();
                    return (0, a.useMemo)(function() {
                        var s, a;
                        return {
                            openPageSetup: (s = (0, r.Z)(o().mark(function r(s, a) {
                                var c, f;
                                return o().wrap(function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (t) {
                                                r.next = 2;
                                                break
                                            }
                                            return r.abrupt("return");
                                        case 2:
                                            if (c = function() {
                                                    return u.T.emit("openPageSetup", a)
                                                }, !(s !== e)) {
                                                r.next = 9;
                                                break
                                            }
                                            return r.next = 6, n((0, l.as)(t, s));
                                        case 6:
                                            f = i.subscribe(function() {
                                                (0, d.ke)(i.getState()) === s && (c(), f())
                                            }), r.next = 10;
                                            break;
                                        case 9:
                                            c();
                                        case 10:
                                        case "end":
                                            return r.stop()
                                    }
                                }, r)
                            })), function(e, t) {
                                return s.apply(this, arguments)
                            }),
                            openSharePanel: (a = (0, r.Z)(o().mark(function r(s, a) {
                                var c, f;
                                return o().wrap(function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (t) {
                                                r.next = 2;
                                                break
                                            }
                                            return r.abrupt("return");
                                        case 2:
                                            if (c = function() {
                                                    return u.T.emit("openSharePanel", a)
                                                }, !(s !== e)) {
                                                r.next = 9;
                                                break
                                            }
                                            return r.next = 6, n((0, l.as)(t, s));
                                        case 6:
                                            f = i.subscribe(function() {
                                                (0, d.ke)(i.getState()) === s && (c(), f())
                                            }), r.next = 10;
                                            break;
                                        case 9:
                                            c();
                                        case 10:
                                        case "end":
                                            return r.stop()
                                    }
                                }, r)
                            })), function(e, t) {
                                return a.apply(this, arguments)
                            })
                        }
                    }, [e, n, t, i])
                },
                h = function() {
                    return (0, a.useContext)(f)
                }
        },
        28916: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return o
                }
            });
            var r = n(2784),
                i = "drag-in-progress",
                o = function() {
                    (0, r.useEffect)(function() {
                        var e = function() {
                                document.body.classList.add(i)
                            },
                            t = function() {
                                document.body.classList.remove(i)
                            };
                        return document.body.addEventListener("dragstart", e, !0), document.body.addEventListener("dragend", t, !0), document.body.addEventListener("drop", t, !0), document.body.addEventListener("mouseup", t, !0),
                            function() {
                                document.body.removeEventListener("dragstart", e, !0), document.body.removeEventListener("dragend", t, !0), document.body.removeEventListener("drop", t, !0), document.body.removeEventListener("mouseup", t, !0)
                            }
                    }, [])
                }
        }
    }
]);
//# sourceMappingURL=3275-570a70a532dda001.js.map