"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8923], {
        97782: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return g
                }
            });
            var r = n(20406),
                i = n(28526),
                o = n.n(i),
                s = n(2784),
                a = n(23313),
                c = n(46358),
                d = n(32736),
                u = n(62141),
                l = n(46732),
                g = function() {
                    var e, t = (0, l._)().editor,
                        n = null == t ? void 0 : t.gammaDocId,
                        i = (0, d.vi)({
                            docId: n,
                            editor: t
                        }).updateDocThemeWithAccentImages,
                        g = (0, c.CG)(u.F_),
                        p = (0, s.useCallback)(function(e) {
                            return g === e
                        }, [g]),
                        f = (0, a.WQq)();
                    return {
                        setThemeWithAccentImages: i,
                        isThemeApplied: p,
                        currentThemeId: g,
                        isValidTheme: (0, s.useCallback)((e = (0, r.Z)(o().mark(function e(t) {
                            var n;
                            return o().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, f.query({
                                            query: a.vGj,
                                            variables: {
                                                id: t
                                            },
                                            returnPartialData: !1
                                        });
                                    case 3:
                                        return n = e.sent.data, e.abrupt("return", (null == n ? void 0 : n.theme) !== null);
                                    case 8:
                                        return e.prev = 8, e.t0 = e.catch(0), console.warn("[useThemeModificationController.isValidTheme] Error checking if theme is valid", e.t0), e.abrupt("return", !1);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [0, 8]
                            ])
                        })), function(t) {
                            return e.apply(this, arguments)
                        }), [f])
                    }
                }
        },
        73062: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return r
                }
            });
            var r = function() {
                var e = document.createElement("div");
                e.style.visibility = "hidden", e.style.overflow = "scroll", e.style.msOverflowStyle = "scrollbar", document.body.appendChild(e);
                var t = document.createElement("div");
                e.appendChild(t);
                var n = e.offsetWidth - t.offsetWidth;
                return e.parentNode.removeChild(e), n
            }
        },
        91465: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return k
                },
                n: function() {
                    return I
                }
            });
            var r = n(20406),
                i = n(95235),
                o = n(82269),
                s = n(28526),
                a = n.n(s),
                c = n(53738),
                d = n(2784),
                u = n(43997),
                l = n(70204),
                g = n(47592),
                p = n(79073),
                f = n(66843),
                m = n(62141),
                h = n(24363),
                x = n(13121),
                v = n(19700),
                j = n(50685),
                b = n(52322),
                C = ["reduxData"];

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
            var k = function(e) {
                    var t = e.reduxData,
                        n = (0, o.Z)(e, C),
                        r = (0, v.c)(t);
                    return (0, b.jsx)(u.zt, {
                        store: r,
                        children: (0, b.jsx)(w, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? y(Object(n), !0).forEach(function(t) {
                                    (0, i.Z)(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, n))
                    })
                },
                w = function(e) {
                    var t = e.onCreate,
                        n = void 0 === t ? function() {} : t,
                        i = e.initialContent,
                        o = e.content,
                        s = e.theme,
                        v = e.isThumbnail,
                        C = e.portalComponent,
                        y = (0, d.useState)(!1),
                        k = y[0],
                        w = y[1],
                        I = (0, d.useMemo)(function() {
                            return (0, j.e)()
                        }, []),
                        S = (0, u.I0)();
                    (0, d.useEffect)(function() {
                        S((0, m.Dc)({
                            theme: s || null
                        })), S((0, m.iS)({
                            isAllowedToEdit: !1
                        })), S((0, m.Nr)({
                            animationsEnabled: !1
                        }))
                    }, [s, S]);
                    var T = (0, x.jE)({
                        onCreate: function(e) {
                            return (0, r.Z)(a().mark(function t() {
                                var r, i;
                                return a().wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            i = e.editor, console.debug("[EditorPreview][onCreate] TipTap editor is now ready"), null === (r = p.Z8.getState(i.state)) || void 0 === r || r.compute(i.state).processChanges(S), i.commands.command(function() {
                                                return (0, g.E0)(i.state.doc, S), !0
                                            }), w(!0), null == n || n({
                                                editor: i
                                            });
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            }))()
                        },
                        extensions: I,
                        content: void 0 === i ? void 0 : i,
                        editable: !1
                    });
                    return (T.isThumbnail = v, (0, d.useEffect)(function() {
                        var e;
                        o && T && (T.commands.setContent(o), T.commands.command(function() {
                            return (0, g.E0)(T.state.doc, S), !0
                        }), null === (e = f.S.getState(T.state)) || void 0 === e || e.compute(T.state.doc).processChanges(S))
                    }, [o, T, S]), (0, l.p)([], T), k) ? (0, b.jsx)(c.xu, {
                        className: "editor-preview-root",
                        "data-variation-preview": !0,
                        "data-testid": "editor-preview-root",
                        width: "100%",
                        position: "relative",
                        sx: h.I,
                        children: (0, b.jsx)(x.kg, {
                            editor: T,
                            portalComponent: C,
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            className: "highlight-mask"
                        })
                    }) : (0, b.jsx)(b.Fragment, {})
                },
                I = {
                    "[data-thumbnail-hidden]": {
                        display: "none !important"
                    },
                    "*": {
                        backdropFilter: "none !important",
                        webkitBackdropFilter: "none !important"
                    },
                    contain: "paint",
                    ".editor-core-root, .editor-preview-root": {
                        height: "100% !important",
                        width: "auto !important"
                    },
                    ".doc-content-wrapper": {
                        pb: "0 !important",
                        minH: "auto !important"
                    },
                    "[data-doc-background-element], [data-doc-background-element-present-mode]": {
                        display: "none !important"
                    },
                    ".card2-background": {
                        mt: 0
                    }
                }
        },
        67541: function(e, t, n) {
            n.d(t, {
                xg: function() {
                    return ej
                },
                rN: function() {
                    return ex
                },
                r8: function() {
                    return eh
                }
            });
            var r = n(11919),
                i = n(71354),
                o = n(25925),
                s = n(2784),
                a = n(95498),
                c = n(55452),
                d = n(87254),
                u = n(91012),
                l = n(3915),
                g = n(88299),
                p = n(45393),
                f = n.n(p),
                m = n(94659),
                h = n(45650),
                x = n(52322),
                v = function(e) {
                    var t = e.sendMessage,
                        n = (0, s.useState)(f()([d.ag._({
                            id: "91gjMr"
                        }), d.ag._({
                            id: "PHyjBQ"
                        }), d.ag._({
                            id: "zhFV/H"
                        }), d.ag._({
                            id: "4ReFRy"
                        }), d.ag._({
                            id: "aepNQh"
                        }), d.ag._({
                            id: "fr8euV"
                        }), d.ag._({
                            id: "+TEOEl"
                        }), d.ag._({
                            id: "gQIRQv"
                        }), d.ag._({
                            id: "pbDMHv"
                        }), d.ag._({
                            id: "LP7cSD"
                        }), d.ag._({
                            id: "ugneAh"
                        })], 4).concat(f()([d.ag._({
                            id: "DZ/eyq"
                        }), d.ag._({
                            id: "S2U0+k"
                        }), d.ag._({
                            id: "YZJ7kT"
                        }), d.ag._({
                            id: "fLq3m1"
                        }), d.ag._({
                            id: "1nrH2R"
                        })], 2)))[0];
                    return (0, x.jsx)(m.g, {
                        spacing: 2,
                        align: "flex-start",
                        children: n.map(function(e, n) {
                            return (0, x.jsx)(h.z, {
                                variant: "unstyled",
                                bg: "white",
                                borderRadius: "md",
                                size: "sm",
                                px: 2,
                                border: "1px solid",
                                borderColor: "gray.200",
                                color: "orchid.400",
                                fontWeight: "500",
                                _hover: {
                                    bg: "trueblue.50",
                                    color: "trueblue.700"
                                },
                                onClick: function() {
                                    t(e)
                                },
                                children: e
                            }, n)
                        })
                    })
                },
                j = function(e) {
                    var t, n = e.sendMessage,
                        r = e.hideSuggestions,
                        i = (0, l.SE)().user;
                    return (0, x.jsxs)(x.Fragment, {
                        children: [(0, x.jsx)(g.K, {
                            from: "Designer",
                            children: (t = null == i ? void 0 : i.firstName, {
                                from: "Designer",
                                type: "text",
                                message: d.ag._({
                                    id: "q65R55",
                                    values: {
                                        userName: t
                                    }
                                }),
                                timestamp: Date.now()
                            }).message
                        }), !(void 0 !== r && r) && (0, x.jsxs)(x.Fragment, {
                            children: [(0, x.jsx)(u.x, {
                                color: "gray.500",
                                fontSize: "sm",
                                children: (0, x.jsx)(c.cC, {
                                    id: "MVir6z"
                                })
                            }), (0, x.jsx)(v, {
                                sendMessage: n
                            })]
                        })]
                    })
                },
                b = n(10676),
                C = n(13813),
                y = n(40110),
                k = n(8283),
                w = n(53738),
                I = n(15110),
                S = n(49929),
                T = n(97782),
                O = n(46358),
                M = n(91465),
                E = n(62141),
                D = n(24272),
                _ = n(54073),
                A = n.n(_);

            function R(e, t, n) {
                var r;
                return null !== (r = n.find(function(n) {
                    return n.modification.isApplied(e, t)
                })) && void 0 !== r ? r : null
            }

            function P(e, t) {
                var n = (0, O.CG)(E.Pu),
                    r = (0, T.T)(),
                    i = (0, s.useState)(function() {
                        return e ? R(e, r, t) : null
                    }),
                    o = i[0],
                    a = i[1],
                    c = (0, s.useCallback)(function() {
                        e && a(R(e, r, t))
                    }, [e, t, r]);
                return (0, s.useEffect)(function() {
                    if (e) {
                        var n = A()(function() {
                            a(R(e, r, t))
                        }, 1e3);
                        return e.on("update", n),
                            function() {
                                e.off("update", n)
                            }
                    }
                }, [e, t, r]), (0, s.useEffect)(function() {
                    c()
                }, [c, n]), {
                    activeSuggestion: o,
                    forceUpdate: c
                }
            }
            var L = n(20280),
                z = n(30628),
                F = n(55479),
                N = n(93319),
                q = n(76648),
                K = n(67887),
                U = n(49747),
                G = n(25793),
                W = n(55966),
                B = n(32333),
                H = (0, s.memo)(function(e) {
                    var t = e.message,
                        n = (0, F.p)(),
                        r = (0, B.z$)(),
                        o = eh().scrollToBottom,
                        a = (0, s.useRef)(null),
                        u = (0, s.useState)(!1),
                        l = u[0],
                        g = u[1],
                        p = (0, s.useState)(null),
                        f = p[0],
                        m = p[1];
                    (0, s.useEffect)(function() {
                        if (l) {
                            var e;
                            null === (e = a.current) || void 0 === e || e.focus(), null == o || o()
                        }
                    }, [l, o, r]);
                    var v = t.interactionId,
                        j = t.type,
                        b = (0, s.useCallback)(function(e) {
                            m(e), g(!0), null == r || r.track(B.AA.AI_SUGGESTION_FEEDBACK, {
                                interactionId: v,
                                rating: e,
                                type: j
                            })
                        }, [r, v, j]),
                        C = (0, s.useCallback)(function() {
                            var e;
                            g(!1), null == r || r.track(B.AA.AI_SUGGESTION_FEEDBACK, {
                                interactionId: v,
                                rating: f,
                                type: j,
                                feedback: null === (e = a.current) || void 0 === e ? void 0 : e.value
                            }), a.current && (a.current.value = ""), n({
                                title: (0, x.jsx)(c.cC, {
                                    id: "d6N994"
                                }),
                                description: (0, x.jsx)(c.cC, {
                                    id: "s/fQ3s"
                                }),
                                status: "success",
                                duration: 5e3,
                                isClosable: !0
                            })
                        }, [n, r, v, f, j]);
                    return (0, x.jsxs)(i.K, {
                        width: "100%",
                        children: [(0, x.jsxs)(k.U, {
                            children: [(0, x.jsx)(N.L, {}), (0, x.jsxs)(q.h, {
                                size: "xs",
                                variant: "ghost",
                                colorScheme: "blackAlpha",
                                children: [(0, x.jsx)(W.kH, {
                                    label: (0, x.jsx)(c.cC, {
                                        id: "kR82DG"
                                    }),
                                    placement: "top",
                                    children: (0, x.jsx)(K.h, {
                                        "aria-label": "thumbs down",
                                        color: "poor" === f ? "red.600" : void 0,
                                        borderWidth: "1px",
                                        borderColor: "poor" === f ? "red.600" : "transparent",
                                        bg: "poor" === f ? "red.100" : void 0,
                                        _hover: {
                                            bg: "poor" === f ? "red.200" : "blackAlpha.100"
                                        },
                                        icon: (0, x.jsx)(S.G, {
                                            icon: z.b
                                        }),
                                        onClick: function() {
                                            b("poor")
                                        }
                                    })
                                }), (0, x.jsx)(W.kH, {
                                    label: (0, x.jsx)(c.cC, {
                                        id: "y1GvbS"
                                    }),
                                    placement: "top",
                                    children: (0, x.jsx)(K.h, {
                                        "aria-label": "thumbs up",
                                        color: "good" === f ? "green.600" : void 0,
                                        borderWidth: "1px",
                                        borderColor: "good" === f ? "green.600" : "transparent",
                                        bg: "good" === f ? "green.100" : void 0,
                                        _hover: {
                                            bg: "good" === f ? "green.200" : "blackAlpha.100"
                                        },
                                        icon: (0, x.jsx)(S.G, {
                                            icon: L.u8
                                        }),
                                        onClick: function() {
                                            b("good")
                                        }
                                    })
                                })]
                            })]
                        }), (0, x.jsx)(U.U, { in: l,
                            children: (0, x.jsxs)(i.K, {
                                children: [(0, x.jsx)(G.g, {
                                    ref: a,
                                    bg: "white",
                                    size: "sm",
                                    placeholder: d.ag._({
                                        id: "ZVGh9y"
                                    })
                                }), (0, x.jsxs)(q.h, {
                                    children: [(0, x.jsx)(N.L, {}), (0, x.jsx)(h.z, {
                                        onClick: function() {
                                            return g(!1)
                                        },
                                        size: "xs",
                                        variant: "ghost",
                                        colorScheme: "blackAlpha",
                                        children: (0, x.jsx)(c.cC, {
                                            id: "6Uau97"
                                        })
                                    }), (0, x.jsx)(h.z, {
                                        onClick: C,
                                        size: "xs",
                                        variant: "plain",
                                        children: (0, x.jsx)(c.cC, {
                                            id: "RoafuO"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                });
            H.displayName = "SuggestionFeedback";
            var Z = (0, s.memo)(function(e) {
                var t = e.message,
                    n = e.editor,
                    r = (0, D.E)(),
                    o = (0, T.T)(),
                    a = P(n, t.suggestions),
                    c = a.activeSuggestion,
                    d = a.forceUpdate,
                    l = (0, s.useCallback)(function(e) {
                        n && (r.trackSuggestionApplied({
                            interactionId: t.interactionId,
                            suggestionType: e.type,
                            suggestionLabel: e.description,
                            suggestionContent: e.getContentForTracking()
                        }), e.apply(n, o), d())
                    }, [n, d, t.interactionId, o, r]);
                return n ? (0, x.jsx)(g.K, {
                    children: (0, x.jsxs)(i.K, {
                        divider: (0, x.jsx)(y.i, {
                            borderColor: "blackAlpha.200"
                        }),
                        children: [(0, x.jsx)(u.x, {
                            children: t.message || "How's this?"
                        }), t.suggestions.map(function(e, t) {
                            return (0, x.jsx)(V, {
                                isSelected: e.label === (null == c ? void 0 : c.label),
                                jsonContentPreview: e.jsonContentPreview,
                                label: e.label,
                                modification: e.modification,
                                onClick: function() {
                                    l(e.modification)
                                }
                            }, t)
                        }), (0, x.jsx)(H, {
                            message: t
                        })]
                    })
                }) : null
            });
            Z.displayName = "SuggestContent";
            var V = function(e) {
                    var t = e.label,
                        n = e.modification,
                        i = e.jsonContentPreview,
                        o = e.isSelected,
                        a = e.onClick,
                        c = (0, O.CG)(E.Pu);
                    console.debug("[".concat(t, "] jsonContentPreview"), i, n);
                    var d = (0, s.useCallback)(function() {
                        o || a()
                    }, [o, a]);
                    return (0, x.jsxs)(k.U, {
                        onClick: d,
                        cursor: "pointer",
                        px: 2,
                        py: 1,
                        borderRadius: "xl",
                        _hover: {
                            bg: "blackAlpha.100"
                        },
                        bg: o ? "whiteAlpha.600" : void 0,
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        spacing: 4,
                        children: [i && (0, x.jsx)(r.k, {
                            sx: {
                                "mask-image": "linear-gradient(to bottom, black 75%, transparent 100%)"
                            },
                            children: (0, x.jsx)(r.k, {
                                sx: M.n,
                                justifyContent: "center",
                                alignItems: "top",
                                width: "150px",
                                h: 16,
                                children: (0, x.jsx)(w.xu, {
                                    transformOrigin: "top",
                                    transform: "scale(0.15)",
                                    pointerEvents: "none",
                                    children: (0, x.jsx)(M.m, {
                                        content: i,
                                        theme: c
                                    })
                                })
                            })
                        }), (0, x.jsx)(u.x, {
                            flex: 1,
                            fontSize: "sm",
                            children: t
                        }), (0, x.jsx)(I.M, { in: o,
                            children: (0, x.jsx)(S.G, {
                                icon: C.LE,
                                fixedWidth: !0
                            })
                        })]
                    })
                },
                Q = n(75652),
                Y = n.n(Q),
                X = n(5766),
                J = n(36895),
                $ = n(73805),
                ee = n(16975),
                et = n(31889),
                en = (0, s.memo)(function(e) {
                    var t = e.message,
                        n = e.editor,
                        r = t.suggestions.slice(0, 8),
                        o = Y()(r.map(function(e) {
                            return e.query
                        })),
                        s = 0 === o.length ? d.ag._({
                            id: "QICyFn"
                        }) : 1 == o.length ? d.ag._({
                            id: "x/YBq7",
                            values: {
                                0: o[0].toLowerCase()
                            }
                        }) : 2 == o.length ? d.ag._({
                            id: "Tn1hkb",
                            values: {
                                0: o[0].toLowerCase(),
                                1: o[1].toLowerCase()
                            }
                        }) : d.ag._({
                            id: "Z918ro",
                            values: {
                                0: o[0].toLowerCase(),
                                1: o[1].toLowerCase(),
                                2: o[2].toLowerCase()
                            }
                        });
                    return (0, x.jsx)(g.K, {
                        children: (0, x.jsxs)(i.K, {
                            align: "start",
                            children: [(0, x.jsxs)(u.x, {
                                children: [s, " ", (0, x.jsx)(c.cC, {
                                    id: "CvUN7V"
                                })]
                            }), (0, x.jsx)(u.x, {
                                color: "gray.500",
                                textAlign: "center",
                                fontSize: "xs",
                                children: (0, x.jsx)(c.cC, {
                                    id: "fg3FfA"
                                })
                            }), (0, x.jsx)(X.M, {
                                columns: 2,
                                spacing: 2,
                                w: "100%",
                                children: r.map(function(e) {
                                    var t = e.image,
                                        r = e.query,
                                        i = e.provider,
                                        o = (0, et.SN)(t.thumbnailUrl, {
                                            width: 250,
                                            height: 250
                                        });
                                    return (0, x.jsx)(J.E, {
                                        src: o,
                                        fallbackSrc: t.thumbnailUrl,
                                        onDragStart: function() {
                                            n && (0, ee.UV)(n, {
                                                type: "image",
                                                attrs: (0, $.C)(t, r, i)
                                            })
                                        },
                                        h: 24,
                                        draggable: !0,
                                        w: "100%",
                                        borderRadius: "md",
                                        transitionDuration: "normal",
                                        transitionProperty: "common",
                                        objectFit: "cover",
                                        cursor: "grab",
                                        _hover: {
                                            shadow: "outline"
                                        }
                                    }, t.id)
                                })
                            }), (0, x.jsx)(H, {
                                message: t
                            })]
                        })
                    })
                });
            en.displayName = "SuggestImage";
            var er = (0, s.memo)(function(e) {
                    var t = e.message,
                        n = e.editor,
                        r = (0, D.E)(),
                        i = (0, T.T)(),
                        o = P(n, t.suggestions),
                        s = o.activeSuggestion,
                        a = o.forceUpdate;
                    return (0, x.jsx)(g.K, {
                        from: t.from,
                        children: (0, x.jsxs)(m.g, {
                            spacing: 2,
                            align: "start",
                            children: [(0, x.jsx)(u.x, {
                                children: t.message || "Here are some ideas:"
                            }), t.suggestions.map(function(e, o) {
                                return (0, x.jsx)(ei, {
                                    value: e,
                                    isSelected: e === s,
                                    onClick: function() {
                                        if (n) {
                                            var o = e.modification;
                                            r.trackSuggestionApplied({
                                                interactionId: t.interactionId,
                                                suggestionType: o.type,
                                                suggestionLabel: o.description,
                                                suggestionContent: o.getContentForTracking()
                                            }), o.apply(n, i), a()
                                        }
                                    }
                                }, o)
                            }), (0, x.jsx)(H, {
                                message: t
                            })]
                        })
                    })
                }),
                ei = function(e) {
                    var t = e.value,
                        n = e.isSelected,
                        r = e.onClick,
                        i = (0, s.useCallback)(function() {
                            n || r()
                        }, [n, r]);
                    return (0, x.jsxs)(k.U, {
                        onClick: i,
                        cursor: "pointer",
                        p: 4,
                        borderRadius: "xl",
                        _hover: {
                            bg: "whiteAlpha.600"
                        },
                        bg: "white",
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        spacing: 4,
                        shadow: "md",
                        align: "start",
                        children: [(0, x.jsxs)(w.xu, {
                            children: [(0, x.jsx)(u.x, {
                                fontSize: "sm",
                                color: "gray.500",
                                children: t.reason
                            }), (0, x.jsx)(u.x, {
                                fontSize: "sm",
                                noOfLines: 3,
                                children: t.value.replace(/(<([^>]+)>)/gi, "")
                            })]
                        }), (0, x.jsx)(I.M, { in: n,
                            children: (0, x.jsx)(S.G, {
                                icon: C.LE,
                                fixedWidth: !0
                            })
                        })]
                    })
                };
            er.displayName = "SuggestText";
            var eo = n(18504),
                es = n(21496),
                ea = n(32736),
                ec = n(6985),
                ed = (0, s.memo)(function(e) {
                    var t = e.message,
                        n = e.editor,
                        r = eh().onClose,
                        o = (0, D.E)(),
                        a = (0, T.T)(),
                        d = P(n, t.suggestions).activeSuggestion,
                        l = (0, s.useCallback)(function(e) {
                            n && (o.trackSuggestionApplied({
                                interactionId: t.interactionId,
                                suggestionType: t.type,
                                suggestionLabel: e.description,
                                suggestionContent: e.getContentForTracking()
                            }), e.apply(n, a))
                        }, [n, o, t, a]);
                    return (0, x.jsx)(g.K, {
                        children: (0, x.jsxs)(i.K, {
                            children: [(0, x.jsx)(u.x, {
                                children: t.message
                            }), t.suggestions.map(function(e) {
                                var t = e.themeId,
                                    n = e.label,
                                    r = e.isOriginal;
                                return (0, x.jsxs)(s.Fragment, {
                                    children: [r && (0, x.jsxs)(x.Fragment, {
                                        children: [(0, x.jsx)(y.i, {
                                            borderColor: "blackAlpha.200"
                                        }), (0, x.jsxs)(u.x, {
                                            children: [n, ": "]
                                        })]
                                    }), (0, x.jsx)(eu, {
                                        themeId: t,
                                        onClick: function() {
                                            return l(e.modification)
                                        },
                                        isSelected: (null == d ? void 0 : d.themeId) === t
                                    })]
                                }, t)
                            }), (0, x.jsx)(u.x, {
                                children: (0, x.jsx)(c.cC, {
                                    id: "eVMeEi"
                                })
                            }), (0, x.jsx)(h.z, {
                                leftIcon: (0, x.jsx)(S.G, {
                                    icon: eo.q2
                                }),
                                w: "100%",
                                onClick: function() {
                                    r(), ec.T.emit("toggleThemeBlock", !0)
                                },
                                children: (0, x.jsx)(c.cC, {
                                    id: "ni+gIz"
                                })
                            }), (0, x.jsx)(H, {
                                message: t
                            })]
                        })
                    })
                });
            ed.displayName = "SuggestThemes";
            var eu = (0, s.memo)(function(e) {
                var t = e.themeId,
                    n = e.onClick,
                    r = e.isSelected,
                    i = (0, ea.c2)(t);
                return "new" === i.id ? null : (0, x.jsxs)(m.g, {
                    onClick: n,
                    cursor: "pointer",
                    p: 2,
                    borderRadius: "xl",
                    _hover: {
                        bg: "blackAlpha.100"
                    },
                    bg: r ? "whiteAlpha.600" : void 0,
                    transitionProperty: "common",
                    transitionDuration: "normal",
                    children: [(0, x.jsx)(w.xu, {
                        borderRadius: "lg",
                        overflow: "hidden",
                        w: "100%",
                        children: (0, x.jsx)(es.n, {
                            theme: i,
                            variant: "outline"
                        })
                    }), (0, x.jsxs)(k.U, {
                        alignSelf: "flex-start",
                        color: r ? "trueblue.700" : void 0,
                        children: [(0, x.jsx)(I.M, { in: r,
                            unmountOnExit: !0,
                            children: (0, x.jsx)(S.G, {
                                icon: C.LE,
                                fixedWidth: !0
                            })
                        }), (0, x.jsx)(u.x, {
                            fontSize: "sm",
                            fontWeight: r ? "semibold" : void 0,
                            children: i.name
                        })]
                    })]
                })
            });
            eu.displayName = "ThemeMessageThumbnailPreview";
            var el = n(29705),
                eg = n(84103),
                ep = (0, s.memo)(function(e) {
                    var t = e.message,
                        n = e.sendMessage;
                    return (0, x.jsxs)(x.Fragment, {
                        children: [(0, x.jsx)(g.K, {
                            children: t.message && (0, x.jsx)(x.Fragment, {
                                children: (0, x.jsxs)(u.x, {
                                    children: [(0, x.jsx)("span", {
                                        className: "emoji",
                                        role: "img",
                                        "aria-label": "sorry",
                                        children: "\uD83D\uDE14"
                                    }), " ", t.message, " ", t.learnMoreLink && (0, x.jsxs)(eg.r, {
                                        href: t.learnMoreLink,
                                        textDecoration: "underline",
                                        isExternal: !0,
                                        children: ["Learn more ", (0, x.jsx)(el.h, {
                                            mx: "2px",
                                            fontSize: "sm"
                                        })]
                                    })]
                                })
                            })
                        }), (0, x.jsx)(u.x, {
                            color: "gray.500",
                            fontSize: "sm",
                            children: "Here are some other things I can do:"
                        }), (0, x.jsx)(v, {
                            sendMessage: n
                        })]
                    })
                });
            ep.displayName = "UnsupportedTask";
            var ef = (0, s.memo)(function(e) {
                var t = e.message;
                return (0, x.jsx)(g.K, {
                    warning: t.warning,
                    from: t.from,
                    children: t.message
                })
            });
            ef.displayName = "UserDesignerMessage";
            var em = s.createContext({
                    scrollToBottom: function() {},
                    onClose: function() {}
                }),
                eh = function() {
                    return s.useContext(em)
                },
                ex = function(e) {
                    var t = e.messages,
                        n = e.scrollSelector,
                        c = e.editor,
                        d = e.sendMessage,
                        u = e.isLoading,
                        l = e.onClose,
                        g = (0, a.q)(),
                        p = g.hasEnoughCreditsToChat,
                        f = g.isCreditsReady && !p,
                        m = (0, s.useCallback)(function() {
                            var e = n && document.querySelector(n);
                            e && setTimeout(function() {
                                requestAnimationFrame(function() {
                                    e.scrollTo({
                                        top: e.scrollHeight,
                                        behavior: "smooth"
                                    })
                                })
                            }, 400)
                        }, [n]),
                        h = (0, s.useRef)({
                            scrollToBottom: m,
                            onClose: l
                        });
                    return h.current.scrollToBottom = m, (0, x.jsx)(em.Provider, {
                        value: h.current,
                        children: (0, x.jsx)(r.k, {
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            children: (0, x.jsx)(i.K, {
                                pt: 12,
                                spacing: 2,
                                children: (0, x.jsxs)(o.M, {
                                    children: [(0, x.jsx)(j, {
                                        sendMessage: d,
                                        hideSuggestions: f
                                    }), t.map(function(e, t) {
                                        return "text" === e.type ? (0, x.jsx)(ef, {
                                            message: e
                                        }, e.timestamp) : "suggestImages" === e.type ? (0, x.jsx)(en, {
                                            message: e,
                                            editor: c
                                        }, e.timestamp) : "suggestText" === e.type ? (0, x.jsx)(er, {
                                            message: e,
                                            editor: c
                                        }, e.timestamp) : "suggestThemes" === e.type ? (0, x.jsx)(ed, {
                                            message: e,
                                            editor: c
                                        }, e.timestamp) : "suggestContent" === e.type ? (0, x.jsx)(Z, {
                                            message: e,
                                            editor: c
                                        }, e.timestamp) : "unsupported" === e.type ? (0, x.jsx)(ep, {
                                            message: e,
                                            sendMessage: d
                                        }, e.timestamp) : (console.warn("[MessageList] Message type not found", e), null)
                                    }), f && (0, x.jsx)(b.x, {}), u && (0, x.jsx)(ev, {}, "loading")]
                                })
                            })
                        })
                    })
                },
                ev = function() {
                    return (0, x.jsx)(g.K, {
                        from: "Designer",
                        children: (0, x.jsx)(ej, {})
                    })
                },
                ej = function() {
                    return (0, x.jsxs)(r.k, {
                        className: "bouncing-loader",
                        justify: "center",
                        children: [(0, x.jsx)("div", {}), (0, x.jsx)("div", {}), (0, x.jsx)("div", {})]
                    })
                }
        },
        24272: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return a
                }
            });
            var r = n(2784),
                i = n(6201),
                o = n(46358),
                s = n(15400),
                a = function() {
                    var e = (0, o.qr)(),
                        t = (0, o.TL)(),
                        n = (0, r.useCallback)(function(e, n) {
                            t((0, s.Cj)({
                                taskContext: e,
                                provider: n
                            })), (0, i.hq)({
                                interactionId: e.interactionId,
                                interface: "chat",
                                inputMessage: e.message,
                                docId: e.docId,
                                cardId: e.editorContext.card.cardId,
                                provider: n
                            })
                        }, [t]),
                        a = (0, r.useCallback)(function(e) {
                            t((0, s.z5)(e))
                        }, [t]),
                        c = (0, r.useCallback)(function(e) {
                            t((0, s.zw)(e))
                        }, [t]),
                        d = (0, r.useCallback)(function(n) {
                            t((0, s._M)(n));
                            var r = n.taskContext,
                                o = (0, s.FK)(r.interactionId)(e.getState());
                            if (!o) {
                                console.error("[trackRequestComplete] no data found for interactionId", r.interactionId);
                                return
                            }(0, i.gb)({
                                interactionId: r.interactionId,
                                interface: "chat",
                                docId: r.docId,
                                cardId: o.cardId,
                                classification: o.classification,
                                provider: o.provider,
                                inputMessage: r.message,
                                inputContent: o.inputContent,
                                rawResponse: n.resp,
                                outputMessage: o.outputMessage,
                                outputContent: o.outputContent,
                                latency: performance.now() - r.startTime,
                                timeToComplete: performance.now() - r.startTime
                            })
                        }, [t, e]),
                        u = (0, r.useCallback)(function(t) {
                            var n = t.outputMessage,
                                r = t.errorMessage,
                                o = t.errorCode,
                                a = t.interactionId,
                                c = t.resp,
                                d = t.errorName,
                                u = (0, s.FK)(a)(e.getState());
                            if (!u) {
                                console.error("[trackRequestError] no data found for interactionId", a);
                                return
                            }(0, i.pQ)({
                                interactionId: a,
                                interface: "chat",
                                docId: u.docId,
                                cardId: u.cardId,
                                classification: u.classification,
                                provider: u.provider,
                                inputMessage: u.message,
                                inputContent: u.inputContent,
                                outputMessage: n,
                                errorName: d,
                                errorMessage: r,
                                errorCode: o,
                                rawResponse: c,
                                latency: performance.now() - u.startTime
                            })
                        }, [e]),
                        l = (0, r.useCallback)(function(t) {
                            var n = t.interactionId,
                                r = t.retriesRemaining,
                                o = t.resp,
                                a = (0, s.FK)(n)(e.getState());
                            if (!a) {
                                console.error("[trackRequestRetry] no data found for interactionId", n);
                                return
                            }(0, i.Wf)({
                                interactionId: n,
                                interface: "chat",
                                classification: a.classification,
                                docId: a.docId,
                                cardId: a.cardId,
                                provider: a.provider,
                                inputMessage: a.message,
                                inputContent: a.inputContent,
                                rawResponse: o,
                                retriesRemaining: r
                            })
                        }, [e]),
                        g = (0, r.useCallback)(function(t) {
                            var n = t.interactionId,
                                r = t.suggestionContent,
                                o = t.suggestionType,
                                a = t.suggestionLabel,
                                c = t.autoApplied,
                                d = (0, s.FK)(n)(e.getState());
                            if (!d) {
                                console.error("[trackSuggestionApplied] no data found for interactionId", n);
                                return
                            }
                            var u = "string" == typeof r ? r : "html" === r.type ? r.html : "json" === r.type ? r.json : void 0;
                            (0, i.vL)({
                                interactionId: n,
                                interface: "chat",
                                docId: d.docId,
                                cardId: d.cardId,
                                classification: d.classification,
                                provider: d.provider,
                                inputMessage: d.message,
                                inputContent: d.inputContent,
                                outputMessage: d.outputMessage,
                                outputContent: d.outputContent,
                                suggestionType: o,
                                suggestionLabel: a,
                                suggestionContent: u,
                                autoApplied: !!c
                            })
                        }, [e]);
                    return (0, r.useMemo)(function() {
                        return {
                            trackClassification: a,
                            trackRequestComplete: d,
                            trackInputContent: c,
                            trackRequestSent: n,
                            trackRequestError: u,
                            trackRequestRetry: l,
                            trackSuggestionApplied: g
                        }
                    }, [a, c, d, n, u, l, g])
                }
        },
        88299: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return x
                }
            });
            var r = n(95235),
                i = n(82269),
                o = n(11919),
                s = n(34638),
                a = n(72360),
                c = n(48322),
                d = n(76360),
                u = n(75342),
                l = n(98841),
                g = n(52322),
                p = ["children", "from", "warning", "cardStyleOverrides", "error"];

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var h = (0, l.E)(o.k),
                x = function(e) {
                    var t = e.children,
                        n = e.from,
                        r = e.warning,
                        o = void 0 !== r && r,
                        l = e.cardStyleOverrides,
                        f = e.error,
                        x = void 0 !== f && f,
                        v = (0, i.Z)(e, p),
                        j = (0, s.ff)("orchid.400", "blue.700"),
                        b = (0, s.ff)("trueblue.50", "sunglow.700"),
                        C = (0, s.ff)("red.100", "red.500"),
                        y = "User" === (void 0 === n ? "Designer" : n),
                        k = y ? m({
                            bg: j,
                            borderBottomRightRadius: 0,
                            color: "white"
                        }, l) : m({
                            bg: o ? void 0 : x ? C : b,
                            borderBottomLeftRadius: 0
                        }, l);
                    return (0, g.jsx)(h, m(m({
                        justify: y ? "flex-end" : "flex-start",
                        initial: {
                            opacity: 0,
                            translateX: -20
                        },
                        animate: {
                            opacity: 1,
                            translateX: 0
                        }
                    }, v), {}, {
                        children: o ? (0, g.jsxs)(a.b, m(m({
                            status: "warning",
                            borderColor: "orange.200",
                            borderWidth: "1px",
                            fontSize: "inherit"
                        }, k), {}, {
                            children: [(0, g.jsx)(c.z, {}), t]
                        })) : (0, g.jsx)(d.Z, m(m({
                            size: "sm",
                            shadow: "sm",
                            borderRadius: "xl",
                            variant: "filled",
                            minH: 0,
                            borderColor: x ? "red.200" : "blackAlpha.200"
                        }, k), {}, {
                            children: (0, g.jsx)(u.e, {
                                py: 2,
                                px: 2,
                                children: t
                            })
                        }))
                    }))
                }
        },
        10676: function(e, t, n) {
            n.d(t, {
                x: function() {
                    return m
                }
            });
            var r = n(55452),
                i = n(87254),
                o = n(11919),
                s = n(45650),
                a = n(2784),
                c = n(68019),
                d = n(41033),
                u = n(30118),
                l = n(46358),
                g = n(88299),
                p = n(52322),
                f = function() {
                    var e = Date.now();
                    return {
                        from: "Designer",
                        type: "text",
                        message: i.ag._({
                            id: "ftZED+"
                        }),
                        timestamp: e
                    }
                },
                m = (0, a.memo)(function(e) {
                    var t = e.cardStyleOverrides,
                        n = (0, u.M)({
                            id: "ai-credits-modal-in-message"
                        }),
                        i = n.isOpen,
                        m = n.onOpen,
                        h = n.onClose,
                        x = (0, l.CG)(d.Lj),
                        v = (0, a.useMemo)(function() {
                            return f().message
                        }, []);
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsxs)(g.K, {
                            from: "Designer",
                            error: !0,
                            cardStyleOverrides: t,
                            children: [(0, p.jsx)("strong", {
                                children: v
                            }), " ", (0, p.jsx)(r.cC, {
                                id: "//XCY6"
                            }), (0, p.jsx)(o.k, {
                                pt: 3,
                                children: (0, p.jsx)(s.z, {
                                    onClick: m,
                                    leftIcon: (0, p.jsx)("span", {
                                        role: "img",
                                        "aria-label": "credits",
                                        children: "\uD83D\uDCB0"
                                    }),
                                    children: (0, p.jsx)(r.cC, {
                                        id: "89ftLJ"
                                    })
                                })
                            })]
                        }), (0, p.jsx)(c.H, {
                            credits: x,
                            onClose: h,
                            isOpen: i,
                            onOpen: m
                        })]
                    })
                })
        },
        6985: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return r
                }
            });
            var r = new(n(98555)).v
        },
        74542: function(e, t, n) {
            function r(e) {
                return e
            }

            function i(e) {
                return Math.sin(e * Math.PI / 2)
            }

            function o(e) {
                return 1 - Math.pow(1 - e, 3)
            }

            function s(e) {
                return Math.sqrt(1 - Math.pow(e - 1, 2))
            }

            function a(e) {
                return 1 - (1 - e) * (1 - e)
            }

            function c(e) {
                return 1 - Math.pow(1 - e, 4)
            }

            function d(e) {
                return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
            }

            function u(e, t, n) {
                return e * (1 - n) + t * n
            }
            n.d(t, {
                Y3: function() {
                    return c
                },
                ad: function() {
                    return d
                },
                ei: function() {
                    return s
                },
                gA: function() {
                    return r
                },
                hl: function() {
                    return a
                },
                t7: function() {
                    return u
                },
                vh: function() {
                    return i
                },
                w2: function() {
                    return o
                }
            })
        }
    }
]);
//# sourceMappingURL=8923-7ea943d2da61c6f8.js.map