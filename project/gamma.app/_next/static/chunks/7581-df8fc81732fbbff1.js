(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7581], {
        69297: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return r
                }
            });
            var r = n(2784).lazy(function() {
                return Promise.all([n.e(8917), n.e(7120), n.e(4100), n.e(3421)]).then(n.bind(n, 23421)).then(function(e) {
                    return {
                        default: e.default
                    }
                })
            })
        },
        25344: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return i
                }
            });
            var r = n(55452),
                o = n(52322),
                i = function() {
                    return {
                        100: (0, o.jsx)(r.cC, {
                            id: "RGjFMI"
                        }),
                        200: (0, o.jsx)(r.cC, {
                            id: "GMGHcE"
                        }),
                        300: (0, o.jsx)(r.cC, {
                            id: "1njn7W"
                        }),
                        400: (0, o.jsx)(r.cC, {
                            id: "xfqlmg"
                        }),
                        500: (0, o.jsx)(r.cC, {
                            id: "agPptk"
                        }),
                        600: (0, o.jsx)(r.cC, {
                            id: "KVGfPY"
                        }),
                        700: (0, o.jsx)(r.cC, {
                            id: "KmydK6"
                        }),
                        800: (0, o.jsx)(r.cC, {
                            id: "NV46Ki"
                        }),
                        900: (0, o.jsx)(r.cC, {
                            id: "THokF3"
                        })
                    }
                }
        },
        92686: function(e, t, n) {
            "use strict";
            n.d(t, {
                Av: function() {
                    return k
                },
                B_: function() {
                    return T
                },
                CZ: function() {
                    return O
                },
                QP: function() {
                    return S
                },
                Sd: function() {
                    return _
                },
                UK: function() {
                    return C
                },
                ZN: function() {
                    return w
                },
                cC: function() {
                    return P
                },
                x_: function() {
                    return E
                },
                zn: function() {
                    return v
                }
            });
            var r, o = n(12741),
                i = n(95235),
                a = n(20406),
                c = n(28526),
                l = n.n(c),
                s = n(18149),
                u = n.n(s),
                d = n(53553),
                f = n(23313);

            function h(e, t) {
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
                    t % 2 ? h(Object(n), !0).forEach(function(t) {
                        (0, i.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function m(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return j(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(e, t)
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
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
                var i, a = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        c = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c) throw i
                        }
                    }
                }
            }

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var x = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        n = ["italic", "oblique"],
                        r = m(t);
                    try {
                        for (r.s(); !(e = r.n()).done;) {
                            var o, i = e.value,
                                a = m(n);
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var c = o.value;
                                    if (-1 !== i.toLowerCase().indexOf(c)) return !0
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                    return !1
                },
                g = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        n = m(t);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var r = e.value;
                            if (b(r, ["thin"])) return 100;
                            if (b(r, ["light", "lite"], ["extra", "ultra", "x"])) return 200;
                            if (b(r, ["light"])) return 300;
                            if (b(r, ["medium"])) return 500;
                            if (b(r, ["bold"], ["demi", "semi"])) return 600;
                            if (b(r, ["bold"], ["extra", "x"])) return 800;
                            if (b(r, ["bold"])) return 700;
                            if (b(r, ["black", "heavy", "ultra"])) return 900
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    return 400
                },
                b = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        o = m(n);
                    try {
                        for (o.s(); !(t = o.n()).done;) {
                            var i = t.value;
                            if (0 === r.length) {
                                if (-1 !== e.toLowerCase().indexOf(i.toLowerCase())) return !0
                            } else {
                                var a, c = m(r);
                                try {
                                    for (c.s(); !(a = c.n()).done;) {
                                        var l = a.value;
                                        if (-1 !== e.toLowerCase().indexOf(i.toLowerCase()) && -1 !== e.toLowerCase().indexOf(l.toLowerCase())) return !0
                                    }
                                } catch (e) {
                                    c.e(e)
                                } finally {
                                    c.f()
                                }
                            }
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                    return !1
                },
                v = (r = (0, a.Z)(l().mark(function e(t) {
                    return l().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise(function(e, n) {
                                    var r = new FileReader;
                                    r.onload = function(t) {
                                        var r = null === (o = t.target) || void 0 === o ? void 0 : o.result;
                                        try {
                                            var o, i, a, c, l, s, u, f, h, p, m, j, b, v, y, O, C, E, P, k = d.ZP.parse(r),
                                                w = null !== (i = null === (a = Object.values(null !== (c = null === (l = k.tables) || void 0 === l ? void 0 : null === (s = l.name) || void 0 === s ? void 0 : s.preferredSubfamily) && void 0 !== c ? c : null === (u = k.tables) || void 0 === u ? void 0 : null === (f = u.name) || void 0 === f ? void 0 : f.fontSubfamily)) || void 0 === a ? void 0 : a[0]) && void 0 !== i ? i : "",
                                                T = null !== (h = null === (p = Object.values(null === (m = k.tables) || void 0 === m ? void 0 : null === (j = m.name) || void 0 === j ? void 0 : j.fullName)) || void 0 === p ? void 0 : p[0]) && void 0 !== h ? h : "",
                                                S = null !== (b = null === (v = Object.values(null !== (y = null === (O = k.tables) || void 0 === O ? void 0 : null === (C = O.name) || void 0 === C ? void 0 : C.preferredFamily) && void 0 !== y ? y : null === (E = k.tables) || void 0 === E ? void 0 : null === (P = E.name) || void 0 === P ? void 0 : P.fontFamily)) || void 0 === v ? void 0 : v[0]) && void 0 !== b ? b : "";
                                            e({
                                                familyName: S,
                                                isItalic: x([w, T]),
                                                weight: g([w, T])
                                            })
                                        } catch (e) {
                                            n(e)
                                        }
                                    }, r.onerror = function(t) {
                                        console.error("[parseFontFile] unable to read the font file, providing defaults", t), e({
                                            familyName: "",
                                            isItalic: !1,
                                            weight: 400
                                        })
                                    }, r.readAsArrayBuffer(t)
                                }));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                })), function(e) {
                    return r.apply(this, arguments)
                }),
                y = function(e) {
                    var t = e.lastIndexOf(".");
                    return -1 === t || t === e.length - 1 ? {
                        name: e,
                        extension: void 0
                    } : {
                        name: e.slice(0, t),
                        extension: e.slice(t + 1)
                    }
                },
                O = function(e) {
                    var t = y(e).extension;
                    return t === f.sA6.Otf || t === f.sA6.Ttf ? t : f.sA6.Ttf
                },
                C = function(e) {
                    var t = e.existingFont;
                    if (!t) return !0;
                    var n = {
                            fontName: t.name,
                            fontId: t.id,
                            fontFiles: t.fontFiles.map(function(e) {
                                return {
                                    id: e.id,
                                    name: e.name,
                                    weight: e.weight,
                                    isItalic: e.isItalic,
                                    fileType: e.fileType,
                                    sourceUrl: e.sourceUrl
                                }
                            })
                        },
                        r = {
                            fontName: e.fontName,
                            fontId: e.fontId,
                            fontFiles: e.uploadFontFiles.map(function(e) {
                                return {
                                    id: e.fontFile.id,
                                    name: e.fontFile.name,
                                    weight: e.fontFile.weight,
                                    isItalic: e.fontFile.isItalic,
                                    fileType: e.fontFile.fileType,
                                    sourceUrl: e.fontFile.sourceUrl
                                }
                            })
                        };
                    return !u()(n, r)
                },
                E = function(e) {
                    return Object.keys(e.reduce(function(e, t) {
                        var n = [t.weight, t.isItalic].join("__");
                        return p(p({}, e), {}, (0, i.Z)({}, n, !0))
                    }, {})).length
                },
                P = function(e) {
                    return Object.values(e.reduce(function(e, t) {
                        var n = t.fontFile,
                            r = [n.weight, n.isItalic, n.fileType].join("__");
                        return e[r] = e[r] || [], e[r].push(t), e
                    }, {})).reduce(function(e, t) {
                        if (t.length > 1) {
                            var n, r = m(t);
                            try {
                                for (r.s(); !(n = r.n()).done;) e[n.value.uploadId] = !0
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                        }
                        return e
                    }, {})
                },
                k = function(e) {
                    return e.reduce(function(e, t) {
                        var n = t.fontFile.weight;
                        return p(p({}, e), {}, (0, i.Z)({}, n, [].concat((0, o.Z)(e[n] || []), [t])))
                    }, {})
                },
                w = function(e) {
                    var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return e.sort(function(e, n) {
                        return t ? Number(e) - Number(n) : Number(n) - Number(e)
                    })
                },
                T = function(e) {
                    return w(Array.from(new Set(e.map(function(e) {
                        return e.weight
                    }))))
                },
                S = function(e, t) {
                    if (void 0 !== t) {
                        if (t > e[e.length - 1]) return e[e.length - 1];
                        for (var n = 1 / 0, r = -1, o = 0; o < e.length; o++) {
                            var i = Math.abs(t - e[o]);
                            if (i < n) n = i, r = o;
                            else break
                        }
                        return e[r]
                    }
                },
                _ = function(e) {
                    return !!e && 0 !== e.length && -1 === e.findIndex(function(e) {
                        return !e.isItalic
                    })
                }
        },
        60271: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return nb
                }
            });
            var r, o, i = n(82269),
                a = n(95235),
                c = n(81333),
                l = n(55452),
                s = n(87254),
                u = n(55479),
                d = n(78116),
                f = n(56915),
                h = n(16796),
                p = n(92619),
                m = n(11919),
                j = n(91012),
                x = n(53738),
                g = n(76648),
                b = n(45650),
                v = n(2167),
                y = n(64827),
                O = n(27302),
                C = n(420),
                E = n(55966),
                P = n(18149),
                k = n.n(P),
                w = n(2784),
                T = n(43997),
                S = n(23313),
                _ = n(32333),
                D = n(62141),
                A = n(10710),
                I = n(34860),
                F = n(35878),
                M = n(47299),
                N = n(47557),
                R = n(89190),
                U = n(73848),
                H = n(24798),
                z = n(8283),
                G = n(84520),
                L = n(95085),
                W = n(8848),
                Z = n(49929),
                B = n(65185),
                V = n(75085),
                q = n(46358),
                K = n(36738),
                Q = n(1153),
                Y = n(13110),
                J = n(13720),
                $ = n(67453),
                X = n(32736),
                ee = n(59836),
                et = n(35634),
                en = n(12741),
                er = n(16686),
                eo = n(5766),
                ei = n(3334),
                ea = n(76817),
                ec = n(52322),
                el = (0, w.memo)(function(e) {
                    var t = e.theme,
                        n = e.onThemeClick,
                        r = e.onSelectClick,
                        o = (0, S.BCl)({
                            variables: {
                                workspaceId: null,
                                archived: !1
                            },
                            fetchPolicy: "cache-first",
                            nextFetchPolicy: "cache-only"
                        }),
                        i = o.data,
                        a = o.loading,
                        c = (null == i ? void 0 : i.themes) || [];
                    return (0, ec.jsxs)(ec.Fragment, {
                        children: [a ? (0, ec.jsx)(ei.S, {
                            size: 4
                        }) : (0, ec.jsx)(x.xu, {
                            flex: 1,
                            p: 6,
                            children: (0, ec.jsx)(eo.M, {
                                columns: {
                                    base: 1,
                                    lg: 2
                                },
                                spacing: 1,
                                children: (0, en.Z)(c).sort(et.qb).map(function(e) {
                                    return (0, ec.jsx)(ea.o, {
                                        type: "standard",
                                        theme: e,
                                        isChecked: e.id === t.id,
                                        onThemeClicked: n,
                                        variant: "ghost"
                                    }, e.id)
                                })
                            })
                        }), (0, ec.jsx)(m.k, {
                            pos: "sticky",
                            bottom: 0,
                            px: 6,
                            py: 4,
                            alignItems: "center",
                            bg: "white",
                            children: (0, ec.jsx)(b.z, {
                                "data-testid": "select-this-theme",
                                flex: 1,
                                variant: "solid",
                                leftIcon: (0, ec.jsx)(Z.G, {
                                    icon: er.Jy
                                }),
                                onClick: r,
                                children: (0, ec.jsx)(l.cC, {
                                    id: "UJfhAS"
                                })
                            })
                        })]
                    })
                }),
                es = n(63248),
                eu = n(98841),
                ed = n(25925),
                ef = (0, w.createContext)({});

            function eh(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ep(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eh(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eh(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var em = (0, eu.E)(x.xu),
                ej = {
                    enter: function(e) {
                        return {
                            position: "absolute",
                            width: "100%",
                            x: "push" === e ? "100%" : "-100%",
                            opacity: 0
                        }
                    },
                    center: {
                        width: "100%",
                        position: "static",
                        x: 0,
                        opacity: 1
                    },
                    exit: function(e) {
                        return {
                            width: "100%",
                            position: "absolute",
                            x: "push" === e ? "-100%" : "100%",
                            opacity: 0
                        }
                    }
                },
                ex = function(e) {
                    var t = e.containerProps,
                        n = e.motionProps,
                        r = e.InitialComponent,
                        o = (0, w.useState)(r ? [r] : []),
                        i = o[0],
                        a = o[1],
                        c = (0, w.useRef)("push"),
                        l = (0, w.useCallback)(function() {
                            c.current = "pop", a((0, en.Z)(i.slice(0, -1)))
                        }, [i]),
                        s = (0, w.useCallback)(function(e) {
                            c.current = "push", a([].concat((0, en.Z)(i), [e]))
                        }, [i]),
                        u = i[i.length - 1];
                    return ((0, w.useEffect)(function() {
                        0 === i.length && r && s(r)
                    }, [r, s, i]), u) ? (0, ec.jsx)(ef.Provider, {
                        value: {
                            push: s,
                            pop: l
                        },
                        children: (0, ec.jsx)(x.xu, ep(ep({}, t || {}), {}, {
                            position: "relative",
                            children: (0, ec.jsx)(ed.M, {
                                initial: !1,
                                custom: c.current,
                                children: (0, ec.jsx)(em, ep(ep({
                                    variants: ej,
                                    custom: c.current,
                                    initial: "enter",
                                    animate: "center",
                                    exit: "exit",
                                    transition: {
                                        default: {
                                            duration: .2
                                        }
                                    }
                                }, n || {}), {}, {
                                    children: (0, ec.jsx)(u, {})
                                }), i.length)
                            })
                        }))
                    }) : null
                };

            function eg(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function eb(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eg(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eg(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ev = (0, w.createContext)({});

            function ey() {
                var e = (0, w.useContext)(ev),
                    t = (0, w.useContext)(ef);
                return eb(eb({}, e), t)
            }
            var eO = n(55997),
                eC = n(37578),
                eE = n(4519),
                eP = n(97200),
                ek = n(29113),
                ew = n(18746),
                eT = n(30771),
                eS = n(90950),
                e_ = n(35837),
                eD = n(98875),
                eA = n(71354),
                eI = n(2046),
                eF = n(70287),
                eM = n(30302),
                eN = n(18882),
                eR = n(40064),
                eU = n(83484),
                eH = n(67784),
                ez = ["icon", "label", "onClick"];

            function eG(e, t) {
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
                    t % 2 ? eG(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eG(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var eW = {
                    width: "100%",
                    variant: "unstyled",
                    borderRadius: "revert",
                    height: "revert",
                    justifyContent: "flex-start"
                },
                eZ = (0, w.memo)(function(e) {
                    var t = e.icon,
                        n = e.label,
                        r = e.onClick,
                        o = (0, i.Z)(e, ez);
                    return (0, ec.jsxs)(m.k, eL(eL(eL({
                        "data-testid": "theme-config-menu-button-".concat(n.replace(/^\d+\.\s*/, "").replaceAll(/\s/g, "-").toLowerCase()),
                        as: b.z
                    }, eW), {}, {
                        onClick: r,
                        p: 4,
                        borderBottomWidth: "1px",
                        _hover: {
                            bg: "trueblue.50"
                        }
                    }, o), {}, {
                        children: [(0, ec.jsx)(x.xu, {
                            color: "trueblue.500",
                            children: (0, ec.jsx)(Z.G, {
                                icon: t,
                                fixedWidth: !0
                            })
                        }), (0, ec.jsx)(x.xu, {
                            fontWeight: "600",
                            ml: 2,
                            mr: "auto",
                            children: n
                        }), (0, ec.jsx)(x.xu, {
                            color: "gray.600",
                            children: (0, ec.jsx)(Z.G, {
                                icon: eH._t
                            })
                        })]
                    }))
                });

            function eB(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function eV(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eB(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eB(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            eZ.displayName = "ThemeConfigNavigationMenuButton";
            var eq = function(e) {
                    var t = e.label,
                        n = e.onBackClick,
                        r = e.children;
                    return (0, ec.jsxs)(ec.Fragment, {
                        children: [(0, ec.jsxs)(m.k, eV(eV({
                            "data-testid": "theme-config-back-button",
                            as: b.z
                        }, eW), {}, {
                            p: 4,
                            borderBottomWidth: "1px",
                            bg: "gray.50",
                            _hover: {
                                bg: "gray.200"
                            },
                            onClick: n,
                            children: [(0, ec.jsx)(x.xu, {
                                color: "gray.600",
                                mr: 2,
                                children: (0, ec.jsx)(Z.G, {
                                    icon: eU.A3
                                })
                            }), (0, ec.jsx)(x.xu, {
                                fontWeight: "600",
                                children: t
                            })]
                        })), (0, ec.jsx)(x.xu, {
                            p: 6,
                            children: r
                        })]
                    })
                },
                eK = n(49626),
                eQ = n(72360),
                eY = n(48322),
                eJ = n(36895),
                e$ = n(37164),
                eX = n(28139),
                e0 = n(43862),
                e1 = n(39965),
                e2 = n(73352),
                e3 = n(74928);

            function e5(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function e4(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e5(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : e5(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var e8 = function(e) {
                    return (0, e3.bH)(e) && (0, e3.Rr)(e)
                },
                e7 = function(e) {
                    var t = e.setBackground,
                        n = e.background,
                        r = e.defaultMessage,
                        o = e.isDark,
                        i = e.isValidSource,
                        a = (0, w.useState)(eX.hq.key),
                        c = a[0],
                        l = a[1],
                        s = e1.ah[c],
                        u = (0, w.useCallback)(function(e) {
                            return i ? i(e) && e8(e) : e8(e)
                        }, [i]),
                        d = (0, w.useCallback)(function(e) {
                            t(e4(e4({}, n), e))
                        }, [n, t]);
                    return (0, ec.jsx)(e2.O, {
                        isDark: o,
                        isValidSource: u,
                        defaultMessage: r,
                        currentBackground: n,
                        currentSource: s,
                        updateCurrentBackground: d,
                        setCurrentSourceKey: l,
                        currentSourceKey: c
                    })
                },
                e6 = n(76451),
                e9 = n(57532),
                te = n(53634);

            function tt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tt(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tt(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tr = function(e) {
                    return e.backgroundType !== e6.E.NONE
                },
                to = tn(tn({}, Y.Gx), {}, {
                    accentId: void 0
                }),
                ti = function(e) {
                    var t = e.theme,
                        n = e.updateTheme,
                        r = (0, w.useState)(!1),
                        o = r[0],
                        i = r[1],
                        a = (0, w.useState)(null),
                        c = a[0],
                        s = a[1],
                        u = (0, w.useState)(null),
                        d = u[0],
                        f = u[1],
                        h = c && !!c.accentId,
                        p = t.config.accentBackgrounds,
                        m = (0, w.useCallback)(function() {
                            f(to), s(to)
                        }, []),
                        x = (0, w.useCallback)(function() {
                            s(null), f(null)
                        }, []),
                        v = (0, w.useCallback)(function(e) {
                            var t = e || c;
                            if (t) {
                                var r = tn(tn({}, t), {}, {
                                        source: F.cx,
                                        originalSource: t.source,
                                        accentId: (0, e$.x0)()
                                    }),
                                    o = p || [];
                                if (h) {
                                    var i = o.findIndex(function(e) {
                                        return e.accentId === c.accentId
                                    });
                                    if (-1 === i) {
                                        console.warn("[AccentImagePicker] Could not find accent image to edit");
                                        return
                                    }
                                    n({
                                        accentBackgrounds: [].concat((0, en.Z)(o.slice(0, i)), [r], (0, en.Z)(o.slice(i + 1)))
                                    })
                                } else n({
                                    accentBackgrounds: [].concat((0, en.Z)(o), [r])
                                });
                                x()
                            }
                        }, [p, c, h, x, n]),
                        y = (0, w.useCallback)(function(e) {
                            n({
                                accentBackgrounds: (p || []).filter(function(t) {
                                    return t.accentId !== e.accentId
                                })
                            })
                        }, [p, n]),
                        O = (0, w.useCallback)(function(e) {
                            f(tn(tn({}, e), {}, {
                                source: e.originalSource
                            })), s(tn(tn({}, e), {}, {
                                source: e.originalSource
                            }))
                        }, []),
                        C = (0, w.useCallback)(function(e) {
                            if (e.source === eX.hq.key || e.source === eX.$5.key) {
                                v(e);
                                return
                            }
                            if (e.source === eX.in.key) {
                                var t, n, r, o;
                                (null === (t = e.image) || void 0 === t ? void 0 : t.uploadStatus) === e0.D.Uploading ? i(!0) : (null === (n = e.image) || void 0 === n ? void 0 : n.uploadStatus) === e0.D.Done && (null === (r = e.image) || void 0 === r ? void 0 : r.uploadResultStep) === "optimized" ? i(!1) : (null === (o = e.image) || void 0 === o ? void 0 : o.uploadStatus) === e0.D.Error && i(!1)
                            }
                            s(e)
                        }, [v]),
                        E = (0, w.useMemo)(function() {
                            return !k()(c, d)
                        }, [c, d]),
                        P = (0, et.wj)(t);
                    return c ? (0, ec.jsxs)(ec.Fragment, {
                        children: [(0, ec.jsx)(e7, {
                            setBackground: C,
                            background: c,
                            isValidSource: tr,
                            defaultMessage: (0, ec.jsxs)(eQ.b, {
                                children: [(0, ec.jsx)(eY.z, {}), (0, ec.jsx)(l.cC, {
                                    id: "VPwqDS"
                                })]
                            }),
                            isDark: P
                        }), (0, ec.jsxs)(g.h, {
                            pt: 6,
                            display: "flex",
                            children: [(0, ec.jsx)(b.z, {
                                variant: "ghost",
                                onClick: x,
                                children: (0, ec.jsx)(l.cC, {
                                    id: "dEgA5A"
                                })
                            }), (0, ec.jsx)(b.z, {
                                variant: "solid",
                                onClick: function() {
                                    return v()
                                },
                                isLoading: o,
                                isDisabled: !E,
                                flex: 1,
                                children: h ? (0, ec.jsx)(l.cC, {
                                    id: "tfDRzk"
                                }) : (0, ec.jsx)(l.cC, {
                                    id: "B6vyEa"
                                })
                            })]
                        })]
                    }) : (0, ec.jsxs)(ec.Fragment, {
                        children: [(0, ec.jsxs)(eA.K, {
                            spacing: 3,
                            children: [(0, ec.jsx)(b.z, {
                                leftIcon: (0, ec.jsx)(Z.G, {
                                    icon: eK.r8
                                }),
                                alignSelf: "flex-start",
                                onClick: m,
                                children: (0, ec.jsx)(l.cC, {
                                    id: "m16xKo"
                                })
                            }), p && (null == p ? void 0 : p.length) !== 0 ? (0, ec.jsx)(te.U, {
                                accentImages: p,
                                isDark: P,
                                handleDelete: y,
                                handleItemClick: O
                            }) : (0, ec.jsx)(ta, {})]
                        }), (0, ec.jsxs)(eQ.b, {
                            fontSize: "xs",
                            mt: 6,
                            children: [(0, ec.jsx)(eY.z, {}), (0, ec.jsx)(j.x, {
                                children: (0, ec.jsx)(l.cC, {
                                    id: "M6esHH"
                                })
                            })]
                        })]
                    })
                },
                ta = function() {
                    return (0, ec.jsxs)(x.xu, {
                        alignSelf: "center",
                        maxWidth: 52,
                        children: [(0, ec.jsx)(eJ.E, {
                            src: e9.Z.src,
                            alt: "Sal, the Gamma mascot, flying and spraying pink and purple flecks of stars and slide deck icons",
                            py: 4
                        }), (0, ec.jsx)(j.x, {
                            fontSize: "sm",
                            color: "gray.700",
                            textAlign: "center",
                            children: (0, ec.jsx)(l.cC, {
                                id: "lHlzHV"
                            })
                        })]
                    })
                };

            function tc(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var tl = n(8022),
                ts = n(20406),
                tu = n(28526),
                td = n.n(tu),
                tf = n(60807),
                th = n(69297),
                tp = (r = (0, ts.Z)(td().mark(function e(t, r, o) {
                    var i, a, c;
                    return td().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, Promise.all([n.e(5489), n.e(4751)]).then(n.bind(n, 94207));
                            case 3:
                                return i = e.sent.default, e.next = 6, Promise.all([n.e(5489), n.e(9224)]).then(n.bind(n, 30058));
                            case 6:
                                a = e.sent.default, c = i.parse(t), r(a.objectify(c)), e.next = 15;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(0), o(e.t0.message);
                            case 15:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [0, 12]
                    ])
                })), function(e, t, n) {
                    return r.apply(this, arguments)
                }),
                tm = (o = (0, ts.Z)(td().mark(function e(t, r, o) {
                    var i, a;
                    return td().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, Promise.all([n.e(5489), n.e(4751)]).then(n.bind(n, 94207));
                            case 3:
                                return i = e.sent.default, e.next = 6, Promise.all([n.e(5489), n.e(9224)]).then(n.bind(n, 30058));
                            case 6:
                                a = e.sent.default, i().process(t, {
                                    parser: a
                                }).then(function(e) {
                                    r(e.css)
                                }), e.next = 13;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(0), o(e.t0.message);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [0, 10]
                    ])
                })), function(e, t, n) {
                    return o.apply(this, arguments)
                }),
                tj = function(e) {
                    var t = e.label,
                        r = e.initialValue,
                        o = e.updateValue,
                        i = e.helperText,
                        a = (0, w.useState)(""),
                        c = a[0],
                        l = a[1],
                        s = (0, w.useState)(null),
                        u = s[0],
                        d = s[1],
                        f = (0, w.useState)(),
                        h = f[0],
                        p = f[1],
                        m = (0, I.Kt)(tp, 100);
                    return ((0, w.useEffect)(function() {
                        Promise.all([n.e(8917), n.e(7120), n.e(6214)]).then(n.bind(n, 65284)).then(function(e) {
                            p(e.css())
                        })
                    }, []), (0, I.vm)(function() {
                        d(null), r && tm(r, l, d)
                    }, [r], []), (0, I.vm)(function() {
                        d(null), m(c, o, d)
                    }, [c, o, m], [c]), h) ? (0, ec.jsxs)(eI.NI, {
                        isInvalid: !!u,
                        children: [(0, ec.jsx)(eF.l, {
                            children: t
                        }), u && (0, ec.jsx)(tf.J1, {
                            children: u
                        }), i && (0, ec.jsx)(eI.Q6, {
                            children: i
                        }), (0, ec.jsx)(x.xu, {
                            border: "1px solid",
                            borderColor: "gray.200",
                            fontSize: "md",
                            children: (0, ec.jsx)(w.Suspense, {
                                fallback: (0, ec.jsx)("span", {}),
                                children: (0, ec.jsx)(th.B, {
                                    value: c,
                                    height: "300px",
                                    extensions: [h],
                                    onChange: l
                                })
                            })
                        })]
                    }) : null
                },
                tx = n(71199),
                tg = n(26673),
                tb = n(9088),
                tv = n(30893),
                ty = n(40771),
                tO = n(2575),
                tC = n(74897);

            function tE(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var tP = function(e) {
                    var t = e.theme,
                        n = e.dispatch,
                        r = (0, tC.c)(t);
                    return (0, ec.jsxs)(eI.NI, {
                        children: [(0, ec.jsx)(eF.l, {
                            children: (0, ec.jsx)(l.cC, {
                                id: "x5htAS"
                            })
                        }), (0, ec.jsxs)(tb.v, {
                            matchWidth: !0,
                            children: [(0, ec.jsx)(tv.j, {
                                size: "lg",
                                as: b.z,
                                borderRadius: "md",
                                rightIcon: (0, ec.jsx)(Z.G, {
                                    icon: tg.pt,
                                    transform: "shrink-6"
                                }),
                                variant: "toolbar",
                                px: 4,
                                h: 10,
                                w: "100%",
                                border: "1px solid",
                                borderColor: "gray.200",
                                children: (0, ec.jsx)(j.x, {
                                    textAlign: "left",
                                    fontWeight: "400",
                                    children: r.name()
                                })
                            }), (0, ec.jsx)(ty.q, {
                                maxH: "320px",
                                maxW: "100%",
                                overflow: "auto",
                                children: tC.N.map(function(e) {
                                    return (0, ec.jsx)(tO.i, {
                                        isChecked: r.key === e.key,
                                        value: e.key,
                                        onClick: function() {
                                            return n({
                                                type: "THEME_UPDATE_THEME_CONFIG",
                                                data: {
                                                    themeConfig: {
                                                        themeBase: e.key
                                                    }
                                                }
                                            })
                                        },
                                        children: (0, ec.jsxs)(z.U, {
                                            maxW: "100%",
                                            children: [(0, ec.jsx)(tk, {
                                                base: e
                                            }), (0, ec.jsxs)(x.xu, {
                                                flex: "1",
                                                minW: "0",
                                                children: [e.name(), e.description && (0, ec.jsx)(j.x, {
                                                    color: "gray.400",
                                                    fontSize: "sm",
                                                    children: e.description()
                                                })]
                                            })]
                                        })
                                    }, e.key)
                                })
                            })]
                        })]
                    })
                },
                tk = function(e) {
                    var t = e.base,
                        n = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? tE(Object(n), !0).forEach(function(t) {
                                    (0, a.Z)(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tE(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({
                            "--card-color": "#FFF"
                        }, t.getCSSVars({
                            cardColor: "#FFF",
                            accentColor: "#F00",
                            accentPalette: ["#F00"]
                        }));
                    return (0, ec.jsx)(x.xu, {
                        backgroundColor: "gray.200",
                        p: 4,
                        css: n,
                        children: (0, ec.jsx)(x.xu, {
                            sx: t.cardSx,
                            h: "3em",
                            w: "5em"
                        })
                    })
                },
                tw = (0, w.memo)(function() {
                    var e, t = ey(),
                        n = t.state,
                        r = t.pop,
                        o = t.dispatch,
                        i = t.label,
                        a = n.theme,
                        c = (null === (e = a.config.cardBackground) || void 0 === e ? void 0 : e.type) === e6.E.COLOR ? a.config.cardBackground.color : null;
                    return (0, ec.jsx)(eq, {
                        onBackClick: r,
                        label: i,
                        children: (0, ec.jsxs)(eA.K, {
                            children: [(0, ec.jsxs)(eI.NI, {
                                "data-testid": "custom-theme-card-color-picker",
                                children: [(0, ec.jsx)(eF.l, {
                                    children: (0, ec.jsx)(l.cC, {
                                        id: "9d2iLQ"
                                    })
                                }), (0, ec.jsx)(eI.Q6, {
                                    mb: 4,
                                    children: (0, ec.jsx)(l.cC, {
                                        id: "7wiFpy"
                                    })
                                }), (0, ec.jsx)(tx.T, {
                                    value: (null == c ? void 0 : c.hex) || null,
                                    updateValue: function(e) {
                                        return o({
                                            type: "THEME_UPDATE_THEME_CONFIG",
                                            data: {
                                                themeConfig: {
                                                    cardBackground: e ? {
                                                        type: e6.E.COLOR,
                                                        color: {
                                                            hex: e
                                                        }
                                                    } : void 0
                                                }
                                            }
                                        })
                                    },
                                    defaultValue: "#FFFFFF"
                                })]
                            }), (0, ec.jsx)(tP, {
                                theme: a,
                                dispatch: o
                            })]
                        })
                    })
                });
            tw.displayName = "ThemeConfigCardStylesPanel";
            var tT = n(92686),
                tS = n(77032),
                t_ = n(51823),
                tD = n(91128),
                tA = n(63849),
                tI = n(95258),
                tF = n(47457),
                tM = function(e) {
                    var t = e.label,
                        n = e.description,
                        r = e.labelColor,
                        o = e.fontFamily,
                        i = e.fontStyle,
                        a = e.fontWeight,
                        c = (0, ec.jsxs)(z.U, {
                            alignItems: "baseline",
                            children: [(0, ec.jsx)(x.xu, {
                                color: "yellow.400",
                                children: (0, ec.jsx)(Z.G, {
                                    icon: tF.e7
                                })
                            }), (0, ec.jsx)(j.x, {
                                textAlign: "left",
                                color: void 0 === r ? "black" : r,
                                fontWeight: void 0 === a ? 400 : a,
                                fontSize: "lg",
                                fontFamily: o,
                                fontStyle: void 0 === i ? "normal" : i,
                                children: t
                            })]
                        });
                    return n ? (0, ec.jsxs)(x.xu, {
                        children: [c, (0, ec.jsx)(j.x, {
                            fontSize: "xs",
                            color: "gray.500",
                            children: n
                        })]
                    }) : c
                },
                tN = ["value", "updateValue", "onFontUploadClick", "weight", "defaultFont", "fonts", "customFontsEnabled"];

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

            function tU(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tR(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tR(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tH = function(e) {
                    var t = e.value,
                        n = e.updateValue,
                        r = e.onFontUploadClick,
                        o = e.weight,
                        a = void 0 === o ? "regular" : o,
                        c = e.defaultFont,
                        s = e.fonts,
                        u = e.customFontsEnabled,
                        d = (0, i.Z)(e, tN),
                        f = s.workspaceFonts,
                        h = s.globalFonts,
                        p = (0, w.useMemo)(function() {
                            var e = [].concat((0, en.Z)(f), (0, en.Z)(h));
                            return [e.find(function(e) {
                                return e.id === t
                            }), (0, tS.Yw)(e, t), (0, tS.Yw)(e, t, !1)]
                        }, [h, f, t]),
                        m = p[0],
                        x = p[1],
                        g = p[2],
                        v = u && f.filter(function(e) {
                            return !e.archived || e.id === (null == m ? void 0 : m.id)
                        }).length > 0,
                        y = !1,
                        O = "normal",
                        C = "bold" === a ? 700 : 400;
                    if (m && null !== m.workspaceId) {
                        y = !0 === m.archived;
                        var P = (0, en.Z)(m.fontFiles || []);
                        O = (0, tT.Sd)(P) ? "italic" : "normal";
                        var k = (0, tT.B_)(P);
                        C = (0, tT.QP)(k, "bold" === a ? 700 : 400) || 400
                    }
                    return (0, ec.jsxs)(tb.v, {
                        matchWidth: !0,
                        isLazy: !0,
                        children: [(0, ec.jsx)(tv.j, tU(tU({
                            size: "lg",
                            as: b.z,
                            borderRadius: "md",
                            rightIcon: (0, ec.jsx)(Z.G, {
                                icon: tg.pt,
                                transform: "shrink-6"
                            }),
                            variant: "toolbar",
                            px: 4,
                            h: 10,
                            w: "100%",
                            border: "1px solid",
                            borderColor: "gray.200"
                        }, d), {}, {
                            children: u && y ? (0, ec.jsx)(tM, {
                                label: g || "",
                                fontFamily: '"'.concat(x, '"'),
                                labelColor: t ? "gray.800" : "gray.400",
                                fontStyle: O,
                                fontWeight: C
                            }) : (0, ec.jsx)(j.x, {
                                textAlign: "left",
                                fontFamily: '"'.concat(x || c, '"'),
                                fontWeight: C,
                                color: t ? "gray.800" : "gray.400",
                                fontStyle: O,
                                children: g || (0, ec.jsx)(l.cC, {
                                    id: "Ff/YaY",
                                    values: {
                                        defaultFont: c,
                                        GAMMA_PROPER_NOUN: V.N6
                                    }
                                })
                            })
                        })), (0, ec.jsxs)(ty.q, {
                            maxH: "320px",
                            overflow: "auto",
                            zIndex: "dropdown",
                            children: [(0, ec.jsxs)(tA._, {
                                type: "radio",
                                value: t || "",
                                onChange: function(e) {
                                    return n(e || void 0)
                                },
                                children: [v && (0, ec.jsx)(E.NZ, {
                                    m: 2,
                                    children: (0, ec.jsx)(l.cC, {
                                        id: "syCKVA"
                                    })
                                }), v && f.map(function(e) {
                                    var n, r = e.id !== t,
                                        o = e.archived && r,
                                        i = (null === (n = e.fontFiles) || void 0 === n ? void 0 : n.length) === 0 && r;
                                    if (!e.fontFiles || i || o) return null;
                                    var c = (0, tT.Sd)(e.fontFiles) ? "italic" : "normal";
                                    return y && e.id === t ? (0, ec.jsx)(tO.i, {
                                        value: e.id,
                                        disabled: !0,
                                        children: (0, ec.jsx)(tM, {
                                            fontFamily: e.name,
                                            label: e.name,
                                            fontStyle: c,
                                            description: (0, ec.jsx)(l.cC, {
                                                id: "FZBl16"
                                            })
                                        })
                                    }, e.id) : (0, ec.jsx)(tO.i, {
                                        value: e.id,
                                        children: (0, ec.jsx)(j.x, {
                                            fontFamily: '"'.concat(e.name, '"'),
                                            fontSize: "lg",
                                            fontWeight: a,
                                            fontStyle: c,
                                            children: e.name
                                        })
                                    }, e.id)
                                }), v && (0, ec.jsxs)(ec.Fragment, {
                                    children: [(0, ec.jsx)(tI.R, {}), (0, ec.jsx)(E.NZ, {
                                        m: 2,
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "Z/0bkt"
                                        })
                                    })]
                                }), (0, ec.jsx)(tO.i, {
                                    value: "",
                                    children: (0, ec.jsx)(j.x, {
                                        fontFamily: c,
                                        fontSize: "lg",
                                        fontWeight: a,
                                        color: "gray.400",
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "fuNYg+"
                                        })
                                    })
                                }), h && h.map(function(e) {
                                    return (0, ec.jsx)(tO.i, {
                                        value: e.id,
                                        children: (0, ec.jsx)(j.x, {
                                            fontFamily: (0, tS.eu)(e.id) ? '"'.concat(e.id, '"') : '"'.concat(e.name, '"'),
                                            fontSize: "lg",
                                            fontWeight: a,
                                            children: e.name
                                        })
                                    }, e.id)
                                })]
                            }), u && (0, ec.jsx)(b.z, {
                                width: "calc(100% + var(--chakra-space-4))",
                                variant: "plain",
                                position: "sticky",
                                bottom: -2,
                                m: -2,
                                mt: 2,
                                p: 2,
                                borderX: "none",
                                borderBottom: "none",
                                fontSize: "sm",
                                borderRadius: "none",
                                onClick: r,
                                leftIcon: (0, ec.jsx)(Z.G, {
                                    icon: tD.A$
                                }),
                                children: (0, ec.jsx)(l.cC, {
                                    id: "vNYIdl"
                                })
                            })]
                        })]
                    })
                },
                tz = n(29705),
                tG = n(84103),
                tL = n(25344),
                tW = ["font", "value", "defaultWeight", "updateValue"];

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

            function tB(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tZ(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tZ(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tV = function(e) {
                    var t, n, r, o = e.font,
                        a = e.value,
                        c = e.defaultWeight,
                        s = e.updateValue,
                        u = (0, i.Z)(e, tW),
                        d = (0, w.useCallback)(function(e) {
                            var t = Number(e);
                            Number.isNaN(t) || s(t)
                        }, [s]),
                        f = (null == a ? void 0 : a.toString()) || "",
                        h = (0, tL.d)()[c],
                        p = (0, w.useMemo)(function() {
                            var e = (0, tS.W9)(o),
                                t = void 0 !== a && !e.includes(a);
                            return t && a ? {
                                isDeletedFontWeight: t,
                                weightOptions: [].concat((0, en.Z)(e), [a]).sort(function(e, t) {
                                    return e - t
                                })
                            } : {
                                isDeletedFontWeight: t,
                                weightOptions: e
                            }
                        }, [o, a]),
                        m = p.weightOptions,
                        x = p.isDeletedFontWeight,
                        g = o && (null == o ? void 0 : o.workspaceId) !== null,
                        v = g && (null === (t = o.fontFiles) || void 0 === t ? void 0 : t.length) === 0,
                        y = x && g,
                        O = (0, t_.p6)();
                    return (0, ec.jsxs)(ec.Fragment, {
                        children: [(0, ec.jsxs)(tb.v, {
                            matchWidth: !0,
                            isLazy: !0,
                            children: [(0, ec.jsx)(tv.j, tB(tB({
                                size: "lg",
                                as: b.z,
                                borderRadius: "md",
                                rightIcon: (0, ec.jsx)(Z.G, {
                                    icon: tg.pt,
                                    transform: "shrink-6"
                                }),
                                variant: "toolbar",
                                px: 4,
                                h: 10,
                                w: "100%",
                                border: "1px solid",
                                borderColor: "gray.200",
                                isDisabled: m.length <= 1
                            }, u), {}, {
                                children: x ? (0, ec.jsx)(tM, {
                                    label: v ? (0, ec.jsx)(l.cC, {
                                        id: "EqUVJs"
                                    }) : null !== (n = (0, tL.d)()[f]) && void 0 !== n ? n : h,
                                    labelColor: a ? "gray.800" : "gray.400"
                                }) : (0, ec.jsx)(j.x, {
                                    textAlign: "left",
                                    color: a ? "gray.800" : "gray.400",
                                    fontWeight: 400,
                                    children: null !== (r = (0, tL.d)()[f]) && void 0 !== r ? r : h
                                })
                            })), (0, ec.jsx)(ty.q, {
                                maxH: "320px",
                                overflow: "auto",
                                zIndex: "dropdown",
                                children: (0, ec.jsx)(tA._, {
                                    type: "radio",
                                    value: f,
                                    onChange: d,
                                    children: m.map(function(e) {
                                        var t, n;
                                        return x && a === e ? (0, ec.jsx)(tO.i, {
                                            value: e.toString(),
                                            disabled: !0,
                                            children: (0, ec.jsx)(tM, {
                                                label: null !== (n = (0, tL.d)()[e]) && void 0 !== n ? n : h,
                                                description: y ? (0, ec.jsx)(l.cC, {
                                                    id: "KFmni+"
                                                }) : (0, ec.jsx)(l.cC, {
                                                    id: "mGTUJj"
                                                })
                                            })
                                        }, e) : (0, ec.jsx)(tO.i, {
                                            value: e.toString(),
                                            children: (0, ec.jsx)(j.x, {
                                                fontSize: "lg",
                                                children: null !== (t = (0, tL.d)()[e]) && void 0 !== t ? t : h
                                            })
                                        }, e)
                                    })
                                })
                            })]
                        }), y && (0, ec.jsx)(j.x, {
                            fontSize: "xs",
                            mt: 1.5,
                            children: (0, ec.jsxs)(tG.r, {
                                href: O,
                                textDecoration: "underline",
                                isExternal: !0,
                                children: [(0, ec.jsx)(l.cC, {
                                    id: "RUO69p"
                                }), (0, ec.jsx)(tz.h, {
                                    ml: 1
                                })]
                            })
                        })]
                    })
                },
                tq = ["label", "helperText", "value", "defaultValue", "updateValue"];

            function tK(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tQ(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tK(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tK(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tY = function(e) {
                    var t = e.label,
                        n = e.helperText,
                        r = e.value,
                        o = e.defaultValue,
                        a = e.updateValue,
                        c = (0, i.Z)(e, tq);
                    return (0, ec.jsxs)(eI.NI, tQ(tQ({}, c), {}, {
                        children: [(0, ec.jsx)(eF.l, {
                            children: (0, ec.jsx)(j.x, {
                                children: t
                            })
                        }), (0, ec.jsx)(tx.T, {
                            value: r,
                            updateValue: a,
                            defaultValue: o
                        }), n && (0, ec.jsx)(eI.Q6, {
                            children: n
                        })]
                    }))
                },
                tJ = n(94659),
                t$ = n(15726),
                tX = n(23015),
                t0 = n(31889),
                t1 = function(e) {
                    var t = e.value,
                        n = e.updateValue,
                        r = e.onLogoUploadStart,
                        o = e.onLogoUploadFail,
                        i = (0, w.useState)(null),
                        a = i[0],
                        c = i[1],
                        u = (0, w.useState)(null),
                        d = u[0],
                        f = u[1],
                        h = (0, q.CG)(D.KV),
                        p = (0, A.SE)().currentWorkspace,
                        m = h || (null == p ? void 0 : p.id);
                    return m ? t || d ? (0, ec.jsxs)(tJ.g, {
                        align: "flex-start",
                        spacing: 4,
                        children: [(0, ec.jsxs)(x.xu, {
                            position: "relative",
                            w: "100%",
                            background: "gray.50",
                            children: ["placeholder" == d ? (0, ec.jsx)(t$.k3, {
                                w: "100%"
                            }) : (0, ec.jsx)(eJ.E, {
                                w: "100%",
                                src: t || d || void 0,
                                alt: "",
                                onMouseDown: tX.br
                            }), a == e0.D.Uploading && (0, ec.jsx)(t$.HI, {}), a == e0.D.Error && (0, ec.jsx)(t$.s7, {})]
                        }), (0, ec.jsx)(b.z, {
                            onClick: function() {
                                n(null), c(null)
                            },
                            mt: 2,
                            w: "100%",
                            children: (0, ec.jsx)(l.cC, {
                                id: "VlT9ID"
                            })
                        })]
                    }) : (0, ec.jsx)(eX.un, {
                        orgId: m,
                        uploadType: "image",
                        editType: "icon",
                        dropHereText: s.ag._({
                            id: "cmRkd1",
                            values: {
                                0: "%{browse}"
                            }
                        }),
                        customHeight: "250px",
                        customFontSize: "sm",
                        showTip: !1,
                        onUploadStart: function(e) {
                            var t = e.file,
                                n = e.tempUrl;
                            c(e0.D.Uploading), r && r(), t.type && (0, t0.Ns)(t.type) ? f("placeholder") : f(n)
                        },
                        onUploadSuccess: function(e) {
                            var t = e.src;
                            c(e0.D.Done), n(t), f(null)
                        },
                        onUploadFailed: function(e) {
                            c(e0.D.Error), o && o()
                        }
                    }) : null
                };

            function t2(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var t3 = [{
                    label: function() {
                        return s.ag._({
                            id: "uIeorD"
                        })
                    },
                    icon: eS.AV,
                    Component: function() {
                        var e = ey(),
                            t = e.dispatch,
                            n = e.state,
                            r = e.pop,
                            o = e.label,
                            i = (0, et.E7)(n.theme),
                            a = (0, et.wj)(n.theme),
                            c = (0, w.useCallback)(function(e) {
                                var n, r;
                                (null == e ? void 0 : e.type) === e6.E.IMAGE && (null === (n = e.image) || void 0 === n ? void 0 : n.uploadStatus) === e0.D.Uploading ? t({
                                    type: "THEME_BACKGROUND_IMAGE_UPLOAD_STARTED",
                                    data: {
                                        background: e
                                    }
                                }) : (null == e ? void 0 : e.type) === e6.E.IMAGE && (null === (r = e.image) || void 0 === r ? void 0 : r.uploadStatus) === e0.D.Error ? t({
                                    type: "THEME_BACKGROUND_IMAGE_UPLOAD_FAIL"
                                }) : t({
                                    type: "THEME_BACKGROUND_UPDATE_SUCCESS",
                                    data: {
                                        background: e
                                    }
                                })
                            }, [t]);
                        return (0, ec.jsx)(eq, {
                            onBackClick: r,
                            label: o,
                            children: (0, ec.jsx)(e7, {
                                setBackground: c,
                                background: i,
                                defaultMessage: (0, ec.jsxs)(eQ.b, {
                                    fontSize: "xs",
                                    children: [(0, ec.jsx)(eY.z, {}), (0, ec.jsx)(j.x, {
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "j+PsQe"
                                        })
                                    })]
                                }),
                                isDark: a
                            })
                        })
                    }
                }, {
                    label: function() {
                        return s.ag._({
                            id: "Roi1AL"
                        })
                    },
                    icon: eT.lC,
                    Component: tw
                }, {
                    label: function() {
                        return s.ag._({
                            id: "TzJ8ZI"
                        })
                    },
                    icon: ew.Zk,
                    Component: function() {
                        var e, t, n = ey(),
                            r = n.label,
                            o = n.state,
                            i = n.dispatch,
                            a = n.pop,
                            c = o.theme,
                            s = (0, w.useCallback)(function(e) {
                                return i({
                                    type: "THEME_UPDATE_THEME_PROPS",
                                    data: {
                                        themeProps: {
                                            accentColor: null != e ? e : void 0
                                        }
                                    }
                                })
                            }, [i]);
                        return (0, ec.jsx)(eq, {
                            onBackClick: a,
                            label: r,
                            children: (0, ec.jsxs)(eA.K, {
                                spacing: 2,
                                children: [(0, ec.jsxs)(eI.NI, {
                                    "data-testid": "custom-theme-accent-color-picker",
                                    children: [(0, ec.jsx)(eF.l, {
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "Udsgl4"
                                        })
                                    }), (0, ec.jsx)(eI.Q6, {
                                        mb: 4,
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "7ldaTf"
                                        })
                                    }), (0, ec.jsx)(eN.U, {
                                        color: c.accentColor,
                                        defaultColor: F.uP,
                                        updateColor: s,
                                        gradient: c.config.accentGradient,
                                        updateGradient: function(e) {
                                            return i({
                                                type: "THEME_UPDATE_THEME_CONFIG",
                                                data: {
                                                    themeConfig: {
                                                        accentGradient: e
                                                    }
                                                }
                                            })
                                        }
                                    })]
                                }), (0, ec.jsxs)(eI.NI, {
                                    children: [(0, ec.jsx)(eF.l, {
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "NEXUdn"
                                        })
                                    }), (0, ec.jsx)(eI.Q6, {
                                        mb: 2,
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "+50OB4"
                                        })
                                    }), (0, ec.jsx)(eR.Y, {
                                        value: (null === (e = c.config) || void 0 === e ? void 0 : e.secondaryAccentColors) || [],
                                        updateValue: function(e) {
                                            return i({
                                                type: "THEME_UPDATE_THEME_CONFIG",
                                                data: {
                                                    themeConfig: {
                                                        secondaryAccentColors: e
                                                    }
                                                }
                                            })
                                        },
                                        maxColors: 4
                                    })]
                                }), (0, ec.jsxs)(eI.NI, {
                                    children: [(0, ec.jsx)(eF.l, {
                                        mt: 4,
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "g/cMXH"
                                        })
                                    }), (0, ec.jsx)(eM.X, {
                                        isChecked: !(null !== (t = c.config) && void 0 !== t && t.disableReadabilityAdjustment),
                                        onChange: function() {
                                            var e;
                                            return i({
                                                type: "THEME_UPDATE_THEME_CONFIG",
                                                data: {
                                                    themeConfig: {
                                                        disableReadabilityAdjustment: !(null !== (e = c.config) && void 0 !== e && e.disableReadabilityAdjustment)
                                                    }
                                                }
                                            })
                                        },
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "fflXAI"
                                        })
                                    }), (0, ec.jsx)(eI.Q6, {
                                        mb: 2,
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "QjwqJE"
                                        })
                                    })]
                                })]
                            })
                        })
                    }
                }, {
                    label: function() {
                        return s.ag._({
                            id: "COXEr5"
                        })
                    },
                    icon: ek.l9,
                    Component: function() {
                        var e = ey(),
                            t = e.pop,
                            n = e.state,
                            r = e.dispatch,
                            o = e.label,
                            i = n.theme;
                        return (0, ec.jsx)(eq, {
                            onBackClick: t,
                            label: o,
                            children: (0, ec.jsx)(ti, {
                                theme: i,
                                updateTheme: function(e) {
                                    return r({
                                        type: "THEME_UPDATE_THEME_CONFIG",
                                        data: {
                                            themeConfig: function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {};
                                                    t % 2 ? tc(Object(n), !0).forEach(function(t) {
                                                        (0, a.Z)(e, t, n[t])
                                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tc(Object(n)).forEach(function(t) {
                                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                    })
                                                }
                                                return e
                                            }({}, e)
                                        }
                                    })
                                }
                            })
                        })
                    }
                }, {
                    label: function() {
                        return s.ag._({
                            id: "I0oBSl"
                        })
                    },
                    icon: eP.yG,
                    Component: function() {
                        var e, t = (0, eD.ye)("customFonts"),
                            n = ey(),
                            r = n.label,
                            o = n.dispatch,
                            i = n.state,
                            a = n.pop,
                            c = i.theme,
                            u = i.fontState,
                            d = u.fonts,
                            f = u.fontsMap,
                            h = (0, w.useCallback)(function(e) {
                                var t = f[e],
                                    n = (0, tS.W9)(t),
                                    r = (0, tT.QP)(n, c.headingFontWeight || F.ZT.heading) || F.ZT.heading,
                                    i = (0, tS.s8)({
                                        fontsMap: f,
                                        headingFontId: e,
                                        bodyFontId: c.bodyFont
                                    });
                                o({
                                    type: "THEME_UPDATE_THEME_PROPS",
                                    data: {
                                        themeProps: {
                                            headingFont: e,
                                            headingFontWeight: r,
                                            fonts: i
                                        }
                                    }
                                })
                            }, [o, f, c.bodyFont, c.headingFontWeight]),
                            p = (0, w.useCallback)(function(e) {
                                var t = f[e],
                                    n = (0, tS.W9)(t),
                                    r = (0, tT.QP)(n, c.bodyFontWeight || F.ZT.body) || F.ZT.body,
                                    i = (0, tS.s8)({
                                        fontsMap: f,
                                        bodyFontId: e,
                                        headingFontId: c.headingFont
                                    });
                                o({
                                    type: "THEME_UPDATE_THEME_PROPS",
                                    data: {
                                        themeProps: {
                                            bodyFont: e,
                                            bodyFontWeight: r,
                                            fonts: i
                                        }
                                    }
                                })
                            }, [o, f, c.headingFont, c.bodyFontWeight]),
                            m = (0, w.useCallback)(function(e) {
                                return o({
                                    type: "THEME_UPDATE_THEME_PROPS",
                                    data: {
                                        themeProps: {
                                            headingFontWeight: e
                                        }
                                    }
                                })
                            }, [o]),
                            x = (0, w.useCallback)(function(e) {
                                return o({
                                    type: "THEME_UPDATE_THEME_PROPS",
                                    data: {
                                        themeProps: {
                                            bodyFontWeight: e
                                        }
                                    }
                                })
                            }, [o]),
                            g = (0, w.useCallback)(function(e) {
                                return o({
                                    type: "THEME_UPDATE_THEME_CONFIG",
                                    data: {
                                        themeConfig: {
                                            headingColor: null != e ? e : void 0
                                        }
                                    }
                                })
                            }, [o]),
                            b = (0, w.useCallback)(function(e) {
                                return o({
                                    type: "THEME_UPDATE_THEME_CONFIG",
                                    data: {
                                        themeConfig: {
                                            headingGradient: null != e ? e : void 0
                                        }
                                    }
                                })
                            }, [o]),
                            v = (0, w.useCallback)(function(e) {
                                return o({
                                    type: "THEME_UPDATE_THEME_CONFIG",
                                    data: {
                                        themeConfig: {
                                            bodyColor: null != e ? e : void 0
                                        }
                                    }
                                })
                            }, [o]),
                            y = (0, w.useCallback)(function() {
                                var e = (0, t_.p6)();
                                window.open(e, "_blank")
                            }, []),
                            O = f[c.headingFont || F.ke.headingFont] || f[F.ke.headingFont],
                            C = f[c.bodyFont || F.ke.bodyFont] || f[F.ke.bodyFont],
                            E = c.headingFontWeight || F.ZT.heading,
                            P = c.bodyFontWeight || F.ZT.body,
                            k = (0, et.wj)(c);
                        return (0, ec.jsx)(eq, {
                            onBackClick: a,
                            label: r,
                            children: (0, ec.jsxs)(eA.K, {
                                children: [(0, ec.jsxs)(eI.NI, {
                                    mb: "2",
                                    children: [(0, ec.jsx)(eF.l, {
                                        children: (0, ec.jsx)(j.x, {
                                            children: (0, ec.jsx)(l.cC, {
                                                id: "7OvVwW"
                                            })
                                        })
                                    }), (0, ec.jsx)(tH, {
                                        fonts: d,
                                        value: c.headingFont,
                                        customFontsEnabled: t,
                                        updateValue: h,
                                        onFontUploadClick: y,
                                        weight: "bold",
                                        defaultFont: F.ke.headingFont,
                                        "data-testid": "custom-theme-heading-font-picker"
                                    }), t && (0, ec.jsx)(tV, {
                                        font: O,
                                        value: E,
                                        defaultWeight: 700,
                                        updateValue: m
                                    })]
                                }), (0, ec.jsxs)(eI.NI, {
                                    mb: "2",
                                    "data-testid": "custom-theme-heading-color-picker",
                                    children: [(0, ec.jsx)(eF.l, {
                                        children: (0, ec.jsx)(j.x, {
                                            children: (0, ec.jsx)(l.cC, {
                                                id: "v9mrgh"
                                            })
                                        })
                                    }), (0, ec.jsx)(eN.U, {
                                        color: c.config.headingColor,
                                        updateColor: g,
                                        defaultColor: k ? F.Qw : F.l0,
                                        gradient: c.config.headingGradient,
                                        updateGradient: b
                                    })]
                                }), (0, ec.jsxs)(eI.NI, {
                                    children: [(0, ec.jsx)(eF.l, {
                                        children: (0, ec.jsx)(j.x, {
                                            children: (0, ec.jsx)(l.cC, {
                                                id: "B4QCf7"
                                            })
                                        })
                                    }), (0, ec.jsx)(tH, {
                                        fonts: d,
                                        value: c.bodyFont,
                                        customFontsEnabled: t,
                                        updateValue: p,
                                        onFontUploadClick: y,
                                        weight: "normal",
                                        defaultFont: F.ke.bodyFont,
                                        "data-testid": "custom-theme-body-font-picker"
                                    }), t && (0, ec.jsx)(tV, {
                                        font: C,
                                        value: P,
                                        defaultWeight: 400,
                                        updateValue: x
                                    })]
                                }), (0, ec.jsx)(tY, {
                                    label: s.ag._({
                                        id: "jx8uni"
                                    }),
                                    value: (null === (e = c.config) || void 0 === e ? void 0 : e.bodyColor) || null,
                                    defaultValue: k ? F.Z_ : F.zL,
                                    updateValue: v
                                }), (0, ec.jsxs)(eQ.b, {
                                    fontSize: "xs",
                                    mt: "6",
                                    children: [(0, ec.jsx)(eY.z, {}), (0, ec.jsx)(j.x, {
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "3L+fCN"
                                        })
                                    })]
                                })]
                            })
                        })
                    }
                }, {
                    label: function() {
                        return s.ag._({
                            id: "iG7KNr"
                        })
                    },
                    icon: function(e) {
                        return e.logoUrl ? eE.Hh : eC.th
                    },
                    Component: function() {
                        var e = ey(),
                            t = e.pop,
                            n = e.state,
                            r = e.dispatch,
                            o = e.label,
                            i = n.theme;
                        return (0, ec.jsx)(eq, {
                            onBackClick: t,
                            label: o,
                            children: (0, ec.jsx)(eI.NI, {
                                children: (0, ec.jsx)(t1, {
                                    value: i.logoUrl || null,
                                    onLogoUploadStart: function() {
                                        r({
                                            type: "THEME_LOGO_UPLOAD_STARTED"
                                        })
                                    },
                                    updateValue: function(e) {
                                        return r({
                                            type: "THEME_LOGO_UPLOAD_SUCCESS",
                                            data: {
                                                logoUrl: null != e ? e : void 0
                                            }
                                        })
                                    },
                                    onLogoUploadFail: function() {
                                        r({
                                            type: "THEME_LOGO_UPLOAD_FAIL"
                                        })
                                    }
                                })
                            })
                        })
                    }
                }, {
                    label: function() {
                        return s.ag._({
                            id: "sxkWRg"
                        })
                    },
                    icon: eO.gr,
                    Component: function() {
                        var e, t, n, r = ey(),
                            o = r.pop,
                            i = r.state,
                            a = r.dispatch,
                            c = r.label,
                            u = i.theme;
                        return (0, ec.jsx)(eq, {
                            onBackClick: o,
                            label: c,
                            children: (0, ec.jsxs)(eA.K, {
                                children: [(0, ec.jsxs)(eI.NI, {
                                    children: [(0, ec.jsx)(eF.l, {
                                        children: (0, ec.jsx)(l.cC, {
                                            id: "q3il6U"
                                        })
                                    }), (0, ec.jsx)(tl.Y2, {
                                        defaultValue: null === (e = u.config) || void 0 === e ? void 0 : e.fontSize,
                                        onChange: function(e, t) {
                                            a({
                                                type: "THEME_UPDATE_THEME_CONFIG",
                                                data: {
                                                    themeConfig: {
                                                        fontSize: Number.isNaN(t) ? void 0 : t
                                                    }
                                                }
                                            })
                                        },
                                        children: (0, ec.jsx)(tl.zu, {})
                                    })]
                                }), (0, ec.jsx)(tj, {
                                    label: (0, ec.jsx)(l.cC, {
                                        id: "3loch2"
                                    }),
                                    initialValue: null === (t = u.config) || void 0 === t ? void 0 : t.contentStyles,
                                    updateValue: function(e) {
                                        return a({
                                            type: "THEME_UPDATE_THEME_CONFIG",
                                            data: {
                                                themeConfig: {
                                                    contentStyles: e
                                                }
                                            }
                                        })
                                    }
                                }), (0, ec.jsx)(tj, {
                                    label: (0, ec.jsx)(l.cC, {
                                        id: "r0cjYF"
                                    }),
                                    initialValue: null === (n = u.config) || void 0 === n ? void 0 : n.containerStyles,
                                    updateValue: function(e) {
                                        return a({
                                            type: "THEME_UPDATE_THEME_CONFIG",
                                            data: {
                                                themeConfig: {
                                                    containerStyles: e
                                                }
                                            }
                                        })
                                    },
                                    helperText: s.ag._({
                                        id: "W5hi5t"
                                    })
                                })]
                            })
                        })
                    },
                    isForGammaOnly: !0
                }],
                t5 = {
                    outline: "3px dashed var(--chakra-colors-sunglow-500)",
                    outlineOffset: "0"
                },
                t4 = function() {
                    var e = ey(),
                        t = e.push,
                        n = e.state,
                        r = e.setLabel,
                        o = n.theme,
                        i = (0, A.SE)().isGammaOrgUser,
                        c = (0, w.useMemo)(function() {
                            return t3.filter(function(e) {
                                return (!e.featureFlag || !!eD.VH.get(e.featureFlag)) && (!e.isForGammaOnly || !!i)
                            })
                        }, [i]);
                    return (0, ec.jsx)(e_.GS, {
                        listStyleType: "none",
                        marginStart: 0,
                        children: c.map(function(e, n) {
                            var c = e.label,
                                l = e.icon,
                                s = e.Component,
                                u = "".concat(n + 1, ". ").concat(c());
                            return (0, ec.jsx)(e_.HC, {
                                children: (0, ec.jsx)(eZ, function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? t2(Object(n), !0).forEach(function(t) {
                                            (0, a.Z)(e, t, n[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t2(Object(n)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        })
                                    }
                                    return e
                                }({
                                    icon: "function" == typeof l ? l(o) : l,
                                    label: u,
                                    onClick: function() {
                                        r(u), t(s)
                                    }
                                }, e.isForGammaOnly && i && t5))
                            }, c())
                        })
                    })
                },
                t8 = function(e) {
                    var t = e.theme,
                        n = e.dispatch,
                        r = e.fonts,
                        o = e.fontsMap,
                        i = (0, w.useState)(""),
                        a = i[0],
                        c = i[1];
                    return (0, ec.jsx)(ev.Provider, {
                        value: {
                            state: {
                                theme: t,
                                fontState: {
                                    fonts: r,
                                    fontsMap: o
                                }
                            },
                            dispatch: n,
                            label: a,
                            setLabel: c
                        },
                        children: (0, ec.jsx)(ex, {
                            InitialComponent: t4
                        })
                    })
                },
                t7 = n(18781),
                t6 = n(2321),
                t9 = n(41037),
                ne = n(67755),
                nt = n(67925),
                nn = n(27777),
                nr = n(73716),
                no = n(28238),
                ni = n(67887);

            function na(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nc(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? na(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : na(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var nl = function(e) {
                    var t = e.value,
                        n = e.onSave,
                        r = e.themeValidationError;
                    return (0, ec.jsxs)(eI.NI, {
                        isInvalid: !!r,
                        children: [(0, ec.jsx)(ne.C, {
                            defaultValue: t,
                            placeholder: (0, F.F)(),
                            onSubmit: n,
                            submitOnBlur: !0,
                            isPreviewFocusable: !0,
                            fontSize: "3xl",
                            children: (0, ec.jsxs)(z.U, {
                                minHeight: 14,
                                children: [(0, ec.jsx)(nt.w, {
                                    "data-testid": "custom-theme-name-preview"
                                }), (0, ec.jsx)(nn.I, {
                                    as: nr.V,
                                    w: {
                                        sm: "50%",
                                        lg: "40%",
                                        xl: "30%",
                                        "2xl": "20%"
                                    },
                                    "data-testid": "custom-theme-name-input"
                                }), (0, ec.jsx)(ns, {})]
                            })
                        }), r && (0, ec.jsx)(tf.J1, {
                            fontWeight: "500",
                            pb: 2,
                            children: r
                        })]
                    })
                },
                ns = function() {
                    var e = (0, no.Z)(),
                        t = e.isEditing,
                        n = e.getSubmitButtonProps,
                        r = e.getCancelButtonProps,
                        o = e.getEditButtonProps;
                    return t ? (0, ec.jsxs)(g.h, {
                        justifyContent: "center",
                        size: "sm",
                        spacing: 0,
                        children: [(0, ec.jsx)(E.kH, {
                            label: (0, ec.jsx)(l.cC, {
                                id: "dEgA5A"
                            }),
                            children: (0, ec.jsx)(ni.h, nc({
                                variant: "ghost",
                                "aria-label": s.ag._({
                                    id: "dEgA5A"
                                }),
                                icon: (0, ec.jsx)(Z.G, {
                                    icon: t9.YI
                                })
                            }, r()))
                        }), (0, ec.jsx)(E.kH, {
                            label: (0, ec.jsx)(l.cC, {
                                id: "fNzdjk"
                            }),
                            children: (0, ec.jsx)(ni.h, nc(nc({
                                variant: "ghost",
                                "aria-label": s.ag._({
                                    id: "fNzdjk"
                                }),
                                icon: (0, ec.jsx)(Z.G, {
                                    icon: t6.LE
                                })
                            }, n()), {}, {
                                "data-testid": "save-theme-name-button"
                            }))
                        })]
                    }) : (0, ec.jsx)(m.k, {
                        justifyContent: "center",
                        children: (0, ec.jsx)(E.kH, {
                            label: (0, ec.jsx)(l.cC, {
                                id: "+MxT3Q"
                            }),
                            children: (0, ec.jsx)(x.xu, {
                                children: (0, ec.jsx)(ni.h, nc(nc({
                                    variant: "ghost",
                                    "aria-label": s.ag._({
                                        id: "+MxT3Q"
                                    }),
                                    size: "sm",
                                    icon: (0, ec.jsx)(Z.G, {
                                        icon: t7.faPenToSquare
                                    })
                                }, o()), {}, {
                                    ref: null
                                }))
                            })
                        })
                    })
                },
                nu = "theme-editor-root",
                nd = function(e) {
                    var t, n = e.state,
                        r = e.dispatch,
                        o = e.docContent,
                        i = e.doc,
                        a = e.workspaceId,
                        c = n.theme,
                        s = n.customizationStep,
                        u = (0, w.useState)(),
                        d = u[0],
                        f = u[1],
                        h = (0, w.useState)(null),
                        p = h[0],
                        x = h[1],
                        g = (0, I.Kt)(f, 300);
                    (0, w.useEffect)(function() {
                        g(c)
                    }, [c, g]);
                    var b = (0, X.TY)(a),
                        v = b.globalFonts,
                        y = b.workspaceFonts,
                        C = b.fontsMap,
                        E = b.allThemeFonts;
                    null != o && o.content && null !== (t = o.content[0].attrs) && void 0 !== t && t.background && (o.content[0].attrs.background = Y.jg);
                    var P = (0, q.CG)(B.mT),
                        k = (0, J.i)({
                            base: "var(--chakra-sizes-xs)",
                            lg: "var(--chakra-sizes-md)",
                            "2xl": "var(--chakra-sizes-xl)"
                        }) || "var(--chakra-sizes-md)",
                        T = (0, w.useMemo)(function() {
                            return (0, ee.y)()
                        }, []);
                    (0, w.useEffect)(function() {
                        var e = null == d ? void 0 : d.config.accentBackgrounds;
                        if (e) {
                            if (p && 0 === e.length) {
                                p.commands.setContent(T);
                                return
                            }
                            null == p || p.commands.updateThemeAccentImages(e, !0)
                        }
                    }, [p, null == d ? void 0 : d.config.accentBackgrounds, T]);
                    var S = (0, w.useCallback)(function(e) {
                            r({
                                type: "SET_NEW_THEME_FOR_SELECTING",
                                data: {
                                    theme: (0, et.mg)(e)
                                }
                            })
                        }, [r]),
                        _ = (0, w.useCallback)(function() {
                            r({
                                type: "SET_NEW_THEME_FOR_CUSTOMIZING",
                                data: {
                                    theme: (0, et.mg)(c, !0)
                                }
                            })
                        }, [r, c]);
                    return (0, ec.jsxs)(m.k, {
                        direction: "row-reverse",
                        h: "100%",
                        children: [(0, ec.jsx)(m.k, {
                            direction: "column",
                            overflowY: "auto",
                            w: k,
                            borderLeft: "1px solid",
                            borderColor: "gray.200",
                            children: (0, ec.jsx)(m.k, {
                                flex: "1",
                                direction: "column",
                                position: "relative",
                                children: "selection" === s ? (0, ec.jsx)(el, {
                                    theme: c,
                                    onThemeClick: S,
                                    onSelectClick: _
                                }) : (0, ec.jsx)(t8, {
                                    theme: c,
                                    dispatch: r,
                                    fonts: {
                                        globalFonts: v,
                                        workspaceFonts: y
                                    },
                                    fontsMap: C
                                })
                            })
                        }), (0, ec.jsx)(m.k, {
                            flex: 1,
                            bg: "gray.100",
                            position: "relative",
                            maxW: "calc(100vw - ".concat(k, ")"),
                            children: (0, ec.jsxs)(m.k, {
                                className: nu,
                                overflowY: "scroll",
                                width: "100%",
                                height: "100%",
                                direction: "column",
                                position: "relative",
                                css: {
                                    "--editor-width": "100%"
                                },
                                children: [(0, ec.jsx)(Q.Y, {}), (0, ec.jsx)(es.J, {
                                    fonts: E
                                }), (0, ec.jsxs)(R.m, {
                                    variant: "soft-rounded",
                                    size: "sm",
                                    "data-testid": "custom-theme-tabs",
                                    children: [o && (0, ec.jsx)(O.M, {
                                        position: "sticky",
                                        top: 0,
                                        zIndex: 2,
                                        background: "white",
                                        children: (0, ec.jsxs)(U.t, {
                                            p: 2,
                                            position: "absolute",
                                            top: "1rem",
                                            background: "white",
                                            borderRadius: "full",
                                            shadow: "md",
                                            children: [(0, ec.jsx)(H.O, {
                                                "data-testid": "custom-theme-tester-deck-tab",
                                                children: (0, ec.jsxs)(z.U, {
                                                    children: [(0, ec.jsx)(Z.G, {
                                                        icon: M.Md
                                                    }), (0, ec.jsx)(j.x, {
                                                        children: (0, ec.jsx)(l.cC, {
                                                            id: "vat9WD"
                                                        })
                                                    })]
                                                })
                                            }), (0, ec.jsx)(H.O, {
                                                "data-testid": "custom-theme-current-deck-tab",
                                                children: (0, ec.jsxs)(z.U, {
                                                    children: [(0, ec.jsx)(Z.G, {
                                                        icon: N.s2
                                                    }), (0, ec.jsx)(j.x, {
                                                        children: (0, ec.jsx)(l.cC, {
                                                            id: "VJUm9p"
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    }), (0, ec.jsxs)(G.n, {
                                        "data-testid": "custom-theme-tab-panels",
                                        children: [(0, ec.jsx)(L.x, {
                                            p: 0,
                                            "data-testid": "custom-theme-preview-editor",
                                            children: (0, ec.jsx)(K.fb, {
                                                onCreate: function(e) {
                                                    return x(e.editor)
                                                },
                                                initialContent: T,
                                                theme: d,
                                                scrollingParentSelector: ".".concat(nu),
                                                isInsideDrawer: !0
                                            })
                                        }), o && (0, ec.jsx)(L.x, {
                                            p: 0,
                                            "data-testid": "custom-theme-preview-editor",
                                            children: (0, ec.jsx)(K.fb, {
                                                reduxData: {
                                                    cards: P
                                                },
                                                initialContent: o,
                                                theme: d,
                                                scrollingParentSelector: ".".concat(nu),
                                                doc: i,
                                                isInsideDrawer: !0
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                },
                nf = function(e) {
                    var t, n = e.name,
                        r = e.doc,
                        o = e.theme,
                        i = e.themeValidationError,
                        a = e.dispatch,
                        c = (0, w.useState)(),
                        s = c[0],
                        u = c[1],
                        d = (0, S.rxn)({
                            variables: {
                                id: null == o ? void 0 : o.id
                            },
                            skip: !o || "new" === o.id
                        }),
                        f = d.data,
                        h = d.loading,
                        p = (0, $.$)(null == r ? void 0 : r.title);
                    (0, w.useEffect)(function() {
                        !h && f && f.theme && u(f.theme)
                    }, [h, f, u]);
                    var m = (0, w.useCallback)(function(e) {
                        a({
                            type: "THEME_UPDATE_THEME_NAME",
                            data: {
                                name: e || (0, F.F)()
                            }
                        })
                    }, [a]);
                    return (0, ec.jsxs)(ec.Fragment, {
                        children: [(0, ec.jsx)(nl, {
                            value: n || (0, F.F)(),
                            onSave: m,
                            themeValidationError: i
                        }), h ? (0, ec.jsx)(W.N, {
                            noOfLines: 1,
                            fontSize: "sm",
                            maxW: "300px"
                        }) : (0, ec.jsxs)(j.x, {
                            color: "gray.700",
                            fontSize: "sm",
                            fontWeight: "normal",
                            letterSpacing: "normal",
                            children: [(null == s ? void 0 : s.createdBy) && (0, ec.jsx)(l.cC, {
                                id: "qeNU2j",
                                values: {
                                    0: s.createdBy.displayName
                                }
                            }), " ", null != s && s.docCount && (null == s ? void 0 : s.docCount) === 1 && (null == s ? void 0 : s.id) === (null == r ? void 0 : null === (t = r.theme) || void 0 === t ? void 0 : t.id) ? (0, ec.jsx)(l.cC, {
                                id: "On+kRG",
                                values: {
                                    docTitle: p,
                                    GAMMA_ARTIFACT_PROPER_NOUN: V.Yc
                                },
                                components: {
                                    0: (0, ec.jsx)("strong", {})
                                }
                            }) : (0, ec.jsx)(ec.Fragment, {
                                children: (0, ec.jsx)(l.cC, {
                                    id: "eVRfvp",
                                    values: {
                                        0: (null == s ? void 0 : s.docCount) || 0,
                                        GAMMA_ARTIFACT_PROPER_NOUN: V.Yc,
                                        GAMMA_ARTIFACT_PROPER_NOUN_PLURAL: V.aq
                                    },
                                    components: {
                                        0: (0, ec.jsx)("strong", {}),
                                        1: (0, ec.jsx)("strong", {})
                                    }
                                })
                            })]
                        })]
                    })
                },
                nh = ["id", "archived", "fonts"],
                np = ["__typename", "archived", "createdTime", "updatedTime", "createdBy", "fonts"];

            function nm(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function nj(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nx(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nj(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nj(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ng = ["headingFont", "bodyFont", "accentColor", "logoUrl"],
                nb = (0, w.memo)(function(e) {
                    var t, n = e.isOpen,
                        r = e.onClose,
                        o = e.state,
                        a = e.dispatch,
                        O = e.docContent,
                        C = e.onThemeCreated,
                        P = e.disableDrawerTransition,
                        M = void 0 !== P && P,
                        N = (0, _.z$)(),
                        R = (0, u.p)(),
                        U = (0, T.v9)(D.yx),
                        H = (0, I.NE)(n, 500),
                        z = (0, A.SE)(),
                        G = z.user,
                        L = z.currentWorkspace,
                        W = (0, w.useRef)(null),
                        Z = M ? n : H,
                        B = (0, S.Wu6)(),
                        V = (0, c.Z)(B, 2),
                        q = V[0],
                        K = V[1].loading,
                        Q = (0, S.suk)(),
                        Y = (0, c.Z)(Q, 2),
                        J = Y[0],
                        $ = Y[1].loading,
                        X = "loading" === o.themeBackgroundImgStatus || "loading" === o.themeLogoImgStatus,
                        ee = (0, w.useCallback)(function() {
                            a({
                                type: "THEME_RESET"
                            }), r()
                        }, [a, r]),
                        et = (0, w.useCallback)(function() {
                            if (G && L && o.theme) {
                                if (!o.theme.name) {
                                    a({
                                        type: "THEME_VALIDATION_ERROR",
                                        data: {
                                            errorMessage: "Theme name is required."
                                        }
                                    });
                                    return
                                }
                                if ("new" === o.theme.id) {
                                    var e = nx(nx({}, o.theme), {}, {
                                        workspaceId: L.id
                                    });
                                    e.id, e.archived, e.fonts, q({
                                        variables: {
                                            input: (0, i.Z)(e, nh)
                                        },
                                        update: function(t, n) {
                                            var r = n.data;
                                            null != r && r.createTheme && t.writeQuery({
                                                query: S.$LR,
                                                variables: {
                                                    workspaceId: e.workspaceId,
                                                    archived: !1
                                                },
                                                data: {
                                                    themes: [r.createTheme]
                                                }
                                            })
                                        },
                                        optimisticResponse: {
                                            createTheme: nx(nx({
                                                __typename: "Theme"
                                            }, e), {}, {
                                                createdTime: new Date().toISOString(),
                                                updatedTime: new Date().toISOString()
                                            })
                                        }
                                    }).then(function(t) {
                                        var n, r = t.data;
                                        null != r && r.createTheme && (null == N || N.track(_.AA.THEME_CREATED, {
                                            theme_id: null == r ? void 0 : null === (n = r.createTheme) || void 0 === n ? void 0 : n.id,
                                            type: "new"
                                        }), null == C || C(r.createTheme)), R({
                                            title: s.ag._({
                                                id: "NE6T/k",
                                                values: {
                                                    0: e.name
                                                }
                                            }),
                                            status: "success",
                                            duration: 3e3,
                                            position: "top",
                                            isClosable: !0
                                        }), ee()
                                    }).catch(function(t) {
                                        t.graphQLErrors && t.graphQLErrors.length > 0 && "duplicate_theme_name" === t.graphQLErrors[0].code ? a({
                                            type: "THEME_VALIDATION_ERROR",
                                            data: {
                                                errorMessage: t.message
                                            }
                                        }) : (console.error("Couldn't create theme ".concat(e.name, " error: ").concat(t)), R({
                                            title: s.ag._({
                                                id: "FcSGqc",
                                                values: {
                                                    e: t
                                                }
                                            }),
                                            status: "error",
                                            duration: 3e3,
                                            position: "top",
                                            isClosable: !1
                                        }))
                                    })
                                } else {
                                    var t, n = o.theme,
                                        r = (n.__typename, n.archived, n.createdTime, n.updatedTime, n.createdBy, n.fonts, (0, i.Z)(n, np)),
                                        c = function(e, t) {
                                            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (!n) {
                                                if (Array.isArray(e) || (n = function(e, t) {
                                                        if (e) {
                                                            if ("string" == typeof e) return nm(e, t);
                                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return nm(e, t)
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
                                            var i, a = !0,
                                                c = !1;
                                            return {
                                                s: function() {
                                                    n = n.call(e)
                                                },
                                                n: function() {
                                                    var e = n.next();
                                                    return a = e.done, e
                                                },
                                                e: function(e) {
                                                    c = !0, i = e
                                                },
                                                f: function() {
                                                    try {
                                                        a || null == n.return || n.return()
                                                    } finally {
                                                        if (c) throw i
                                                    }
                                                }
                                            }
                                        }(ng);
                                    try {
                                        for (c.s(); !(t = c.n()).done;) {
                                            var l = t.value;
                                            l in r && void 0 === r[l] && (r[l] = null)
                                        }
                                    } catch (e) {
                                        c.e(e)
                                    } finally {
                                        c.f()
                                    }
                                    J({
                                        variables: {
                                            input: r
                                        },
                                        update: function(e, t) {
                                            var n = t.data;
                                            null != n && n.updateTheme && e.writeQuery({
                                                query: S.$LR,
                                                variables: {
                                                    workspaceId: o.theme.workspaceId,
                                                    archived: !1
                                                },
                                                data: {
                                                    themes: [n.updateTheme]
                                                }
                                            })
                                        },
                                        optimisticResponse: {
                                            updateTheme: nx(nx({
                                                __typename: "Theme"
                                            }, o.theme), {}, {
                                                createdTime: new Date().toISOString(),
                                                updatedTime: new Date().toISOString()
                                            })
                                        }
                                    }).then(function() {
                                        null == N || N.track(_.AA.THEME_UPDATED, {
                                            theme_id: o.theme.id
                                        }), R({
                                            title: s.ag._({
                                                id: "WODDpW",
                                                values: {
                                                    0: o.theme.name
                                                }
                                            }),
                                            status: "success",
                                            duration: 3e3,
                                            position: "top",
                                            isClosable: !0
                                        }), ee()
                                    }).catch(function(e) {
                                        e.graphQLErrors && "duplicate_theme_name" === e.graphQLErrors[0].code ? a({
                                            type: "THEME_VALIDATION_ERROR",
                                            data: {
                                                errorMessage: e.message
                                            }
                                        }) : (console.error("Couldn't update theme ".concat(o.theme.name, " error: ").concat(e)), R({
                                            title: s.ag._({
                                                id: "hSYiXl",
                                                values: {
                                                    e: e
                                                }
                                            }),
                                            status: "error",
                                            duration: 3e3,
                                            position: "top",
                                            isClosable: !1
                                        }))
                                    })
                                }
                            }
                        }, [G, L, a, null == o ? void 0 : o.theme, q, R, ee, N, C, J]),
                        en = "new" === o.theme.id || !k()(o.theme, o.originalTheme);
                    return (0, ec.jsx)(E.Wk, {
                        isDark: !1,
                        children: (0, ec.jsxs)(d.d, {
                            placement: "bottom",
                            onClose: ee,
                            isOpen: n,
                            isFullHeight: !0,
                            initialFocusRef: W,
                            children: [(0, ec.jsx)(f.Z, {}), (0, ec.jsxs)(h.s, {
                                borderTopRadius: "xl",
                                h: "calc(var(--100vh) - 24px)",
                                transform: M ? "none !important" : void 0,
                                children: [(0, ec.jsx)(p.x, {
                                    borderBottom: "1px solid #000",
                                    borderColor: "gray.200",
                                    children: "selection" === o.customizationStep ? (0, ec.jsxs)(ec.Fragment, {
                                        children: [(0, ec.jsx)(m.k, {
                                            "align-items": "center",
                                            letterSpacing: "normal",
                                            fontSize: "3xl",
                                            minH: 14,
                                            py: 1,
                                            children: (0, ec.jsx)(j.x, {
                                                children: (0, ec.jsx)(l.cC, {
                                                    id: "ytpdnC"
                                                })
                                            })
                                        }), (0, ec.jsx)(j.x, {
                                            color: "gray.700",
                                            fontSize: "sm",
                                            fontWeight: "normal",
                                            letterSpacing: "normal",
                                            children: (0, ec.jsx)(l.cC, {
                                                id: "d9p6AC"
                                            })
                                        })]
                                    }) : (0, ec.jsxs)(m.k, {
                                        "justify-content": "space-between",
                                        alignItems: "flex-end",
                                        children: [(0, ec.jsx)(x.xu, {
                                            flex: 1,
                                            children: (0, ec.jsx)(nf, {
                                                name: (null === (t = o.theme) || void 0 === t ? void 0 : t.name) || (0, F.F)(),
                                                doc: U,
                                                theme: o.theme,
                                                dispatch: a,
                                                themeValidationError: o.themeValidationError
                                            })
                                        }), (0, ec.jsxs)(g.h, {
                                            children: [(0, ec.jsx)(b.z, {
                                                variant: "ghost",
                                                onClick: ee,
                                                children: (0, ec.jsx)(l.cC, {
                                                    id: "dEgA5A"
                                                })
                                            }), (0, ec.jsx)(E.kH, {
                                                isDisabled: !X,
                                                label: (0, ec.jsx)(l.cC, {
                                                    id: "yz1qqg"
                                                }),
                                                children: (0, ec.jsx)(x.xu, {
                                                    display: "inline-flex",
                                                    children: (0, ec.jsx)(b.z, {
                                                        variant: "solid",
                                                        isLoading: K || $ || X,
                                                        isDisabled: !en,
                                                        onClick: et,
                                                        "data-testid": "custom-theme-save",
                                                        children: (0, ec.jsx)(l.cC, {
                                                            id: "EsJdRp"
                                                        })
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, ec.jsx)(v.f, {
                                    p: 0,
                                    h: "100%",
                                    children: Z ? (0, ec.jsx)(nd, {
                                        state: o,
                                        workspaceId: null == L ? void 0 : L.id,
                                        dispatch: a,
                                        docContent: O,
                                        doc: U
                                    }) : (0, ec.jsx)(nv, {})
                                }), (0, ec.jsx)(y.o, {
                                    ref: W
                                })]
                            })]
                        })
                    })
                });
            nb.displayName = "ThemeEditorDrawer";
            var nv = function() {
                return (0, ec.jsx)(x.xu, {
                    flexDirection: "column",
                    flex: "1",
                    w: "100%",
                    h: "100%",
                    bg: "gray.100",
                    inset: 0,
                    children: (0, ec.jsx)(O.M, {
                        h: "100%",
                        children: (0, ec.jsx)(C.$, {})
                    })
                })
            }
        },
        3334: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return s
                }
            });
            var r = n(95235),
                o = n(27440),
                i = n(81927),
                a = n(52322);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var s = function(e) {
                var t = e.size,
                    n = e.gridProps;
                return (0, a.jsx)(o.r, l(l({
                    gap: 1,
                    flex: 1,
                    my: 2,
                    mx: -2
                }, n), {}, {
                    children: Array(t).fill(!0).map(function(e, t) {
                        return (0, a.jsx)(i.O, {
                            minH: "9em",
                            borderRadius: "base"
                        }, t)
                    })
                }))
            }
        },
        76817: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return ec
                }
            });
            var r = n(95235),
                o = n(82269),
                i = n(81333),
                a = n(55452),
                c = n(87254),
                l = n(56581),
                s = n(8283),
                u = n(91012),
                d = n(55479),
                f = n(75944),
                h = n(53738),
                p = n(11919),
                m = n(93319),
                j = n(2784),
                x = n(14990),
                g = n(23313),
                b = n(8388),
                v = n(32333),
                y = n(53865),
                O = n(21496),
                C = n(10710),
                E = n(59212),
                P = n(55580),
                k = n(9088),
                w = n(30893),
                T = n(67887),
                S = n(94301),
                _ = n(40771),
                D = n(82904),
                A = n(95258),
                I = n(49929),
                F = n(52322),
                M = (0, j.memo)(function(e) {
                    var t = e.onCustomizeThemeClick;
                    return (0, F.jsxs)(k.v, {
                        isLazy: !0,
                        children: [(0, F.jsx)(w.j, {
                            as: T.h,
                            isRound: !0,
                            size: "xs",
                            variant: "ghost",
                            colorScheme: "blackAlpha",
                            icon: (0, F.jsx)(I.G, {
                                icon: P.faEllipsis
                            }),
                            onClick: function(e) {
                                return e.stopPropagation()
                            },
                            children: (0, F.jsx)(a.cC, {
                                id: "7L01XJ"
                            })
                        }), (0, F.jsx)(S.h, {
                            children: (0, F.jsxs)(_.q, {
                                zIndex: "modal",
                                onClick: function(e) {
                                    return e.stopPropagation()
                                },
                                children: [(0, F.jsx)(D.s, {
                                    icon: (0, F.jsx)(I.G, {
                                        icon: E.Mw,
                                        fixedWidth: !0
                                    }),
                                    onClick: t,
                                    children: (0, F.jsx)(a.cC, {
                                        id: "XZd6AM"
                                    })
                                }), (0, F.jsx)(A.R, {}), (0, F.jsx)(h.xu, {
                                    px: 4,
                                    py: 0,
                                    maxW: 56,
                                    children: (0, F.jsx)(u.x, {
                                        fontSize: "sm",
                                        color: "gray.600",
                                        children: (0, F.jsx)(a.cC, {
                                            id: "FV8ABd"
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                }),
                N = n(36471),
                R = n(46510),
                U = n(18504),
                H = n(55966),
                z = n(82282),
                G = n(31807),
                L = n(20010),
                W = n(56915),
                Z = n(48273),
                B = n(92619),
                V = n(2167),
                q = n(81927),
                K = n(80353),
                Q = n(76648),
                Y = n(45650),
                J = n(64827),
                $ = n(75085);

            function X(e, t) {
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
                    t % 2 ? X(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var et = function(e) {
                    var t = e.theme,
                        n = e.isOpen,
                        r = e.onClose,
                        o = (0, j.useState)(),
                        l = o[0],
                        s = o[1],
                        f = (0, g.I3Y)(),
                        h = (0, i.Z)(f, 1)[0],
                        p = (0, d.p)(),
                        m = (0, g.rxn)({
                            variables: {
                                id: null == t ? void 0 : t.id
                            },
                            skip: !t || "new" === t.id
                        }),
                        x = m.data,
                        b = m.loading;
                    (0, j.useEffect)(function() {
                        var e;
                        !b && x && null !== (e = x.theme) && void 0 !== e && e.docCount && s(x.theme.docCount)
                    }, [b, x, s]);
                    var v = (0, j.useCallback)(function() {
                        t && t.id && h({
                            variables: {
                                id: t.id
                            },
                            update: function(e, n) {
                                var r = n.data;
                                null != r && r.archiveTheme && e.writeQuery({
                                    query: g.$LR,
                                    variables: {
                                        workspaceId: t.workspaceId,
                                        archived: !1
                                    },
                                    data: {
                                        themes: [r.archiveTheme]
                                    }
                                })
                            },
                            optimisticResponse: {
                                archiveTheme: ee(ee({
                                    __typename: "Theme"
                                }, t), {}, {
                                    archived: !0,
                                    updatedTime: new Date().toISOString()
                                })
                            }
                        }).then(function() {
                            p({
                                title: c.ag._({
                                    id: "Ww1KN1",
                                    values: {
                                        0: t.name
                                    }
                                }),
                                status: "success",
                                duration: 3e3,
                                position: "top",
                                isClosable: !0
                            })
                        }).catch(function(e) {
                            console.error("Couldn't create theme ".concat(t.name, " error: ").concat(e))
                        })
                    }, [h, t, p]);
                    return (0, F.jsxs)(L.u_, {
                        closeOnOverlayClick: !1,
                        isOpen: n,
                        onClose: r,
                        size: "lg",
                        children: [(0, F.jsx)(W.Z, {}), (0, F.jsxs)(Z.h, {
                            children: [(0, F.jsx)(B.x, {
                                children: (0, F.jsx)(a.cC, {
                                    id: "Tf88pC",
                                    values: {
                                        0: t.name
                                    }
                                })
                            }), (0, F.jsxs)(V.f, {
                                children: [l && l > 0 ? (0, F.jsxs)(u.x, {
                                    mb: 2,
                                    children: [(0, F.jsx)(a.cC, {
                                        id: "/rVqKL",
                                        values: {
                                            docCount: l,
                                            GAMMA_ARTIFACT_PROPER_NOUN: $.Yc,
                                            GAMMA_ARTIFACT_PROPER_NOUN_PLURAL: $.aq
                                        }
                                    }), (0, F.jsx)(a.cC, {
                                        id: "c+lbSJ",
                                        values: {
                                            GAMMA_ARTIFACT_PROPER_NOUN_PLURAL: $.aq
                                        }
                                    })]
                                }) : b ? (0, F.jsx)(q.O, {
                                    h: "1em",
                                    mb: 2
                                }) : (0, F.jsx)(u.x, {
                                    mb: 2,
                                    children: (0, F.jsx)(a.cC, {
                                        id: "KNTN0L",
                                        values: {
                                            GAMMA_ARTIFACT_PROPER_NOUN_PLURAL: $.aq
                                        }
                                    })
                                }), (0, F.jsx)(u.x, {
                                    color: "red.500",
                                    children: (0, F.jsx)(a.cC, {
                                        id: "2xOCJW"
                                    })
                                })]
                            }), (0, F.jsx)(K.m, {
                                children: (0, F.jsxs)(Q.h, {
                                    children: [(0, F.jsx)(Y.z, {
                                        variant: "ghost",
                                        onClick: r,
                                        children: (0, F.jsx)(a.cC, {
                                            id: "dEgA5A"
                                        })
                                    }), (0, F.jsx)(Y.z, {
                                        variant: "ghost",
                                        colorScheme: "red",
                                        onClick: function() {
                                            v(), r()
                                        },
                                        children: (0, F.jsx)(a.cC, {
                                            id: "848eTY"
                                        })
                                    })]
                                })
                            }), (0, F.jsx)(J.o, {})]
                        })]
                    })
                },
                en = (0, j.memo)(function(e) {
                    var t = e.theme,
                        n = e.openThemeEditorWithThisTheme,
                        r = e.onDuplicate,
                        o = e.onDeleteThemeModalOpen,
                        i = e.isDeleteThemeModalOpen,
                        c = e.onDeleteThemeModalClose;
                    return (0, F.jsxs)(k.v, {
                        isLazy: !0,
                        children: [(0, F.jsx)(w.j, {
                            as: T.h,
                            isRound: !0,
                            size: "xs",
                            variant: "ghost",
                            colorScheme: "blackAlpha",
                            icon: (0, F.jsx)(I.G, {
                                icon: P.faEllipsis
                            }),
                            onClick: function(e) {
                                return e.stopPropagation()
                            },
                            children: (0, F.jsx)(a.cC, {
                                id: "7L01XJ"
                            })
                        }), (0, F.jsx)(S.h, {
                            children: (0, F.jsxs)(_.q, {
                                zIndex: "modal",
                                onClick: function(e) {
                                    return e.stopPropagation()
                                },
                                children: [(0, F.jsxs)(h.xu, {
                                    px: 4,
                                    py: 0,
                                    maxWidth: "300px",
                                    children: [(0, F.jsx)(u.x, {
                                        noOfLines: 3,
                                        children: t.name
                                    }), t.createdTime && (0, F.jsx)(u.x, {
                                        fontSize: "sm",
                                        color: "gray.500",
                                        noOfLines: 1,
                                        children: (0, F.jsx)(a.cC, {
                                            id: "MXSt4t",
                                            values: {
                                                0: (0, z.Z)((0, G.Z)(t.createdTime), "PPP")
                                            }
                                        })
                                    }), t.createdBy && (0, F.jsx)(H.kH, {
                                        label: t.createdBy.email,
                                        children: (0, F.jsx)(u.x, {
                                            display: "inline-block",
                                            fontSize: "sm",
                                            color: "gray.500",
                                            noOfLines: 1,
                                            children: (0, F.jsx)(a.cC, {
                                                id: "t490IT",
                                                values: {
                                                    0: t.createdBy.displayName
                                                }
                                            })
                                        })
                                    })]
                                }), (0, F.jsx)(A.R, {}), (0, F.jsx)(D.s, {
                                    icon: (0, F.jsx)(I.G, {
                                        icon: U.q2,
                                        fixedWidth: !0
                                    }),
                                    onClick: n,
                                    children: (0, F.jsx)(a.cC, {
                                        id: "ePK91l"
                                    })
                                }), (0, F.jsx)(D.s, {
                                    icon: (0, F.jsx)(I.G, {
                                        icon: R.WM,
                                        fixedWidth: !0
                                    }),
                                    onClick: r,
                                    children: (0, F.jsx)(a.cC, {
                                        id: "euc6Ns"
                                    })
                                }), (0, F.jsx)(A.R, {}), (0, F.jsx)(D.s, {
                                    color: "red.500",
                                    icon: (0, F.jsx)(I.G, {
                                        icon: N.$,
                                        fixedWidth: !0
                                    }),
                                    onClick: o,
                                    children: (0, F.jsx)(a.cC, {
                                        id: "cnGeoo"
                                    })
                                })]
                            })
                        }), i && (0, F.jsx)(S.h, {
                            children: (0, F.jsx)(et, {
                                theme: t,
                                isOpen: !0,
                                onClose: c
                            })
                        })]
                    })
                }),
                er = ["id"];

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

            function ei(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eo(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eo(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ea = function(e) {
                    var t = e.isChecked,
                        n = e.name;
                    return (0, F.jsxs)(s.U, {
                        spacing: 1,
                        alignItems: "flex-start",
                        children: [t && (0, F.jsx)(l.n, {
                            w: 3,
                            h: "auto",
                            mr: 1,
                            mt: 1,
                            color: "trueblue.700"
                        }), (0, F.jsx)(u.x, {
                            fontSize: "sm",
                            noOfLines: 1,
                            "data-testid": "theme-name",
                            color: t ? "trueblue.700" : void 0,
                            children: n
                        })]
                    })
                },
                ec = (0, j.memo)(function(e) {
                    var t, n, r, l, u = e.theme,
                        E = e.onThemeClicked,
                        P = e.isChecked,
                        k = void 0 !== P && P,
                        w = e.type,
                        T = e.onEditClick,
                        S = e.variant,
                        _ = (0, v.z$)(),
                        D = (0, d.p)(),
                        A = "ghost" === (void 0 === S ? "outline" : S),
                        I = (0, j.useCallback)(function(e) {
                            return function() {
                                T && (e ? T((0, y.mg)(u, !0)) : T(u))
                            }
                        }, [T, u]),
                        N = (0, f.q)({
                            id: "deleteThemeModalDisclosure"
                        }),
                        R = N.isOpen,
                        U = N.onOpen,
                        H = N.onClose,
                        z = (0, C.SE)(),
                        G = z.user,
                        L = z.currentWorkspace,
                        W = (0, g.gFs)(),
                        Z = (0, i.Z)(W, 1)[0],
                        B = (0, j.useCallback)(function() {
                            if (G && L) {
                                var e = u.id;
                                Z({
                                    variables: {
                                        id: e
                                    },
                                    update: function(e, t) {
                                        var n = t.data;
                                        null != n && n.duplicateTheme && e.writeQuery({
                                            query: g.$LR,
                                            variables: {
                                                workspaceId: u.workspaceId,
                                                archived: !1
                                            },
                                            data: {
                                                themes: [n.duplicateTheme]
                                            }
                                        })
                                    },
                                    optimisticResponse: {
                                        duplicateTheme: ei(ei({
                                            id: "temp",
                                            __typename: "Theme"
                                        }, (0, o.Z)(u, er)), {}, {
                                            name: "".concat(u.name, " (copy)"),
                                            archived: !1,
                                            createdTime: new Date().toISOString(),
                                            updatedTime: new Date().toISOString()
                                        })
                                    }
                                }).then(function(t) {
                                    var n = t.data;
                                    n && (null == _ || _.track(v.AA.THEME_DUPLICATED, {
                                        theme_id: n.duplicateTheme.id,
                                        source_theme_id: e,
                                        name: u.name
                                    }), null == _ || _.track(v.AA.THEME_CREATED, {
                                        theme_id: n.duplicateTheme.id,
                                        name: n.duplicateTheme.name,
                                        type: "duplicate"
                                    }), D({
                                        title: c.ag._({
                                            id: "DvRoa4",
                                            values: {
                                                0: n.duplicateTheme.name
                                            }
                                        }),
                                        status: "success",
                                        duration: 3e3,
                                        position: "top",
                                        isClosable: !0
                                    }))
                                }).catch(function(e) {
                                    console.error("Couldn't duplicate theme ".concat(u.name, " error: ").concat(e)), D({
                                        title: c.ag._({
                                            id: "aOi88n",
                                            values: {
                                                err: e
                                            }
                                        }),
                                        status: "error",
                                        duration: 3e3,
                                        position: "top",
                                        isClosable: !1
                                    })
                                })
                            }
                        }, [G, L, u, Z, _, D]),
                        V = "custom" === (void 0 === w ? "custom" : w) && !!(null !== (t = u.createdBy) && void 0 !== t && t.displayName),
                        q = !!E,
                        K = !T;
                    return (0, F.jsxs)(h.xu, {
                        bgColor: k ? "trueblue.100" : A ? void 0 : "linen.50",
                        textAlign: "left",
                        tabIndex: q ? 0 : void 0,
                        borderRadius: "md",
                        transitionProperty: A ? "common" : "none",
                        transitionDuration: "normal",
                        outline: "none",
                        onClick: function() {
                            return null == E ? void 0 : E(u)
                        },
                        onKeyPress: function(e) {
                            q && "Enter" === e.key && (null == E || E(u))
                        },
                        _hover: q ? {
                            shadow: A || k ? void 0 : "lg",
                            bgColor: k ? "trueblue.100" : A ? "trueblue.50" : "gray.100"
                        } : void 0,
                        _focus: {
                            boxShadow: k || !q ? void 0 : "outline"
                        },
                        shadow: A ? void 0 : "md",
                        p: A ? 2 : 0,
                        "data-theme-id": u.id,
                        "data-testid": k ? "current-theme-preview" : void 0,
                        cursor: q ? "pointer" : void 0,
                        children: [(0, F.jsx)(O.n, {
                            theme: u
                        }), (0, F.jsxs)(p.k, {
                            align: "baseline",
                            mt: 1,
                            direction: "column",
                            p: A ? 0 : 2,
                            children: [V && (0, F.jsx)(p.k, {
                                my: 2,
                                children: (0, F.jsx)(ea, {
                                    name: u.name,
                                    isChecked: k
                                })
                            }), (0, F.jsxs)(s.U, {
                                alignItems: "flex-start",
                                w: "100%",
                                children: [V ? (0, F.jsx)(x.l, {
                                    createdByYou: (null === (n = u.createdBy) || void 0 === n ? void 0 : n.id) === (null == G ? void 0 : G.id),
                                    createdByName: null === (r = u.createdBy) || void 0 === r ? void 0 : r.displayName,
                                    createdByProfileImageUrl: null === (l = u.createdBy) || void 0 === l ? void 0 : l.profileImageUrl,
                                    timestampDescription: u.updatedTime && (0, F.jsx)(a.cC, {
                                        id: "E1dtM3",
                                        values: {
                                            0: (0, b.Dw)(u.updatedTime)
                                        }
                                    })
                                }) : (0, F.jsx)(ea, {
                                    name: u.name,
                                    isChecked: k
                                }), (0, F.jsx)(m.L, {}), K ? null : u.workspaceId ? (0, F.jsx)(en, {
                                    theme: u,
                                    openThemeEditorWithThisTheme: I(!1),
                                    onDuplicate: B,
                                    onDeleteThemeModalOpen: U,
                                    isDeleteThemeModalOpen: R,
                                    onDeleteThemeModalClose: H
                                }) : (0, F.jsx)(M, {
                                    onCustomizeThemeClick: I(!0)
                                })]
                            })]
                        })]
                    })
                });
            ec.displayName = "ThemePreview"
        },
        4685: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return d
                }
            });
            var r = n(95235),
                o = n(9850),
                i = n.n(o),
                a = n(2784);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var s = {
                theme: n(35878).mU,
                themeValidationError: null,
                status: "new",
                themeBackgroundImgStatus: "idle",
                themeLogoImgStatus: "idle",
                customizationStep: null,
                originalTheme: null
            };

            function u(e, t) {
                switch (t.type) {
                    case "NEW_BLANK_THEME":
                        return l(l({}, i()(s)), {}, {
                            customizationStep: "customization"
                        });
                    case "THEME_RESET":
                        return i()(s);
                    case "SET_THEME_EDITING":
                        var n = t.data.theme,
                            r = i()(n);
                        return l(l({}, e), {}, {
                            status: "editing",
                            theme: n,
                            originalTheme: r,
                            customizationStep: "customization"
                        });
                    case "SET_NEW_THEME_FOR_SELECTING":
                        var o = t.data.theme;
                        return l(l({}, e), {}, {
                            status: "new",
                            theme: o,
                            customizationStep: "selection"
                        });
                    case "SET_NEW_THEME_FOR_CUSTOMIZING":
                        var a = t.data.theme,
                            c = i()(a);
                        return l(l({}, e), {}, {
                            theme: a,
                            originalTheme: c,
                            customizationStep: "customization"
                        });
                    case "THEME_UPDATE_THEME_PROPS":
                        var u = e.theme,
                            d = t.data.themeProps;
                        return l(l({}, e), {}, {
                            theme: l(l({}, u), d)
                        });
                    case "THEME_UPDATE_THEME_CONFIG":
                        var f = e.theme,
                            h = t.data.themeConfig;
                        return l(l({}, e), {}, {
                            theme: l(l({}, f), {}, {
                                config: l(l({}, f.config), h)
                            })
                        });
                    case "THEME_BACKGROUND_IMAGE_UPLOAD_STARTED":
                        var p = e.theme,
                            m = t.data.background;
                        return l(l({}, e), {}, {
                            themeBackgroundImgStatus: "loading",
                            theme: l(l({}, p), {}, {
                                config: l(l({}, p.config), {}, {
                                    background: m
                                })
                            })
                        });
                    case "THEME_BACKGROUND_UPDATE_SUCCESS":
                        var j = e.theme,
                            x = t.data.background;
                        return l(l({}, e), {}, {
                            themeBackgroundImgStatus: "idle",
                            theme: l(l({}, j), {}, {
                                config: l(l({}, j.config), {}, {
                                    background: x
                                })
                            })
                        });
                    case "THEME_BACKGROUND_IMAGE_UPLOAD_FAIL":
                        return l(l({}, e), {}, {
                            themeBackgroundImgStatus: "idle"
                        });
                    case "THEME_LOGO_UPLOAD_STARTED":
                        return l(l({}, e), {}, {
                            themeLogoImgStatus: "loading"
                        });
                    case "THEME_LOGO_UPLOAD_SUCCESS":
                        var g = e.theme,
                            b = t.data.logoUrl;
                        return l(l({}, e), {}, {
                            themeLogoImgStatus: "idle",
                            theme: l(l({}, g), {}, {
                                logoUrl: b
                            })
                        });
                    case "THEME_LOGO_UPLOAD_FAIL":
                        return l(l({}, e), {}, {
                            themeLogoImgStatus: "idle"
                        });
                    case "THEME_UPDATE_THEME_NAME":
                        var v = e.theme,
                            y = t.data.name;
                        return l(l({}, e), {}, {
                            theme: l(l({}, v), {}, {
                                name: y
                            }),
                            themeValidationError: null
                        });
                    case "THEME_VALIDATION_ERROR":
                        var O = t.data.errorMessage;
                        return l(l({}, e), {}, {
                            themeValidationError: O
                        });
                    case "THEME_VALIDATION_ERROR_RESET":
                        return l(l({}, e), {}, {
                            themeValidationError: null
                        })
                }
            }

            function d() {
                return a.useReducer(u, s)
            }
        },
        2517: function() {}
    }
]);
//# sourceMappingURL=7581-df8fc81732fbbff1.js.map