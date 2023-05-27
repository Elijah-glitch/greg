(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    196: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(12)
          , o = (n(62),
        n(2).default.extend({
            mounted: function() {
                var t = this;
                return Object(r.a)(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                t.$store.dispatch("request/getHealthStatus");
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            computed: {
                health: function() {
                    var t = this.$store.getters["request/getHealthStatus"];
                    return t || this.$Toast.show({
                        type: "danger",
                        text: "System Unhealthy",
                        duration: 5e3
                    }),
                    t
                }
            }
        }))
          , c = n(1)
          , component = Object(c.a)(o, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "w-full z-30 bg-accent1 border-t border-accent2"
            }, [n("footer", {
                staticClass: "max-w-5xl mx-auto"
            }, [n("div", {
                staticClass: "border-b border-accent2 py-8"
            }, [n("div", {
                staticClass: "flex flex-col md:flex-row justify-between items-center gap-4"
            }, [n("NuxtLink", {
                staticClass: "inline-flex cursor-pointer text-accent8",
                attrs: {
                    to: "/",
                    "aria-label": "logo"
                }
            }, [n("package-icon", {
                staticClass: "h-10 w-10"
            }), t._v(" "), n("p", {
                staticClass: "text-2xl font-bold pl-4"
            }, [t._v("Krates")])], 1), t._v(" "), n("CommonTheme")], 1)]), t._v(" "), n("div", {
                staticClass: "\n        flex flex-col\n        md:flex-row\n        justify-between\n        items-center\n        py-10\n        gap-4\n      "
            }, [n("div", {
                staticClass: "text-accent6 text-sm text-center py-2"
            }, [t._v("\n        © 2021 Krates. All rights reserved.\n      ")]), t._v(" "), n("div", {
                staticClass: "\n          border border-accent2\n          p-2\n          bg-geist-background\n          rounded-md\n          text-sm\n        "
            }, [n("span", {
                staticClass: "font-semibold"
            }, [t._v("Status:")]), t._v(" "), n("zi-dot", {
                staticClass: "pl-1",
                attrs: {
                    type: t.health ? "success" : "danger"
                }
            }), t._v(" "), n("span", {
                class: t.health ? "text-blue-500 font-medium px-1" : "text-red-500 font-medium px-1"
            }, [t._v("\n          " + t._s(t.health ? "System Healthy" : "System Unhealthy") + "\n        ")])], 1), t._v(" "), n("a", {
                staticClass: "text-accent8 hover:text-accent4",
                attrs: {
                    href: "https://github.com/sumitkolhe/krates",
                    target: "_blank"
                }
            }, [n("github-icon")], 1)])])])
        }
        ), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            CommonTheme: n(604).default
        })
    },
    201: function(t, e, n) {
        "use strict";
        var r = n(2)
          , o = n(317)
          , c = n.n(o);
        n(555),
        n(138),
        n(565),
        n(567),
        n(569),
        n(571),
        n(236),
        n(573),
        n(575),
        n(577),
        n(579),
        n(581),
        n(583),
        n(584),
        n(585),
        n(586),
        n(587),
        n(588),
        n(589),
        n(590),
        n(591),
        n(311),
        n(592),
        n(195),
        n(593);
        r.default.use(c.a)
    },
    202: function(t, e, n) {
        "use strict";
        var r = n(2)
          , o = n(77)
          , c = n.n(o)
          , l = n(320);
        n(594),
        n(596),
        n(598),
        n(600),
        n(602);
        r.default.use(c.a),
        Object(l.a)(r.default)
    },
    237: function(t, e, n) {
        var content = n(379);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(18).default)("0770f3dd", content, !0, {
            sourceMap: !1
        })
    },
    238: function(t, e, n) {
        var content = n(381);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(18).default)("593fbd59", content, !0, {
            sourceMap: !1
        })
    },
    239: function(t, e, n) {
        var content = n(383);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(18).default)("7e3426bd", content, !0, {
            sourceMap: !1
        })
    },
    312: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(2).default.extend({})
          , o = n(1)
          , component = Object(o.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("header", {
                staticClass: "\n    w-full\n    z-30\n    transition\n    duration-300\n    ease-in-out\n    bg-geist-background\n    md:opacity-90\n  "
            }, [n("div", {
                staticClass: "max-w-5xl mx-auto md:px-2 px-4"
            }, [n("div", {
                staticClass: "flex items-center justify-between h-16 md:h-20"
            }, [n("div", {
                staticClass: "flex-shrink-0"
            }, [n("NuxtLink", {
                staticClass: "\n            font-medium\n            inline-flex\n            cursor-pointer\n            items-center\n            justify-center\n            border border-transparent\n            rounded\n            leading-snug\n            transition\n            duration-150\n            ease-in-out\n            py-3\n            text-accent8\n          ",
                attrs: {
                    to: "/dashboard"
                }
            }, [n("package-icon", {
                staticClass: "w-10 h-10"
            }), t._v(" "), n("p", {
                staticClass: "pl-4 font-bold text-2xl"
            }, [t._v("Krates")])], 1)], 1), t._v(" "), n("zi-popover", {
                attrs: {
                    align: "right"
                },
                scopedSlots: t._u([{
                    key: "dropdown",
                    fn: function() {
                        return [n("zi-popover-item", {
                            attrs: {
                                title: ""
                            }
                        }, [t._v("Dashboard")]), t._v(" "), n("zi-popover-item", {
                            attrs: {
                                line: ""
                            }
                        }), t._v(" "), n("zi-popover-item", {
                            attrs: {
                                primary: ""
                            }
                        }, [t._v("New Krate")]), t._v(" "), n("zi-popover-item", {
                            attrs: {
                                line: ""
                            }
                        }), t._v(" "), n("zi-popover-item", {
                            attrs: {
                                primary: ""
                            }
                        }, [n("zi-link", {
                            attrs: {
                                href: "https://docs.krat.es",
                                more: ""
                            }
                        }, [t._v("Docs")])], 1), t._v(" "), n("zi-popover-item", {
                            attrs: {
                                primary: ""
                            }
                        }, [n("zi-link", {
                            attrs: {
                                href: "https:////github.com/sumitkolhe/krates",
                                more: ""
                            }
                        }, [t._v("Github")])], 1)]
                    },
                    proxy: !0
                }])
            }, [n("zi-button", {
                attrs: {
                    size: "medium",
                    auto: ""
                }
            }, [t._v("Menu")])], 1)], 1)])])
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    313: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = {
            props: {
                currentTab: {
                    type: String,
                    required: !0
                },
                tabs: {
                    type: Array,
                    required: !0
                },
                updated: {
                    type: [Boolean, String, Array],
                    default: void 0
                }
            },
            watch: {
                currentTab: function(t) {
                    this.newTab !== t && (this.moveActiveLine(t),
                    this.newTab = t)
                },
                updated: function() {
                    this.moveActiveLine(this.currentTab)
                }
            },
            data: function() {
                return {
                    activeLineWidth: 0,
                    activeLineOffset: 0,
                    newTab: ""
                }
            },
            methods: {
                handleClick: function(t) {
                    this.$emit("onClick", t),
                    this.moveActiveLine(t),
                    this.newTab = t
                },
                moveActiveLine: function(t) {
                    if (this.currentTab && this.$refs && this.$refs[t] && this.$refs[t][0]) {
                        var element = this.$refs[t][0];
                        this.activeLineWidth = element.clientWidth,
                        this.activeLineOffset = element.offsetLeft
                    }
                }
            },
            mounted: function() {
                this.moveActiveLine(this.currentTab),
                this.newTab = this.currentTab
            }
        }
          , o = n(1)
          , component = Object(o.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("nav", {
                staticClass: "relative mx-auto max-w-5xl"
            }, [t._l(t.tabs, (function(e) {
                return n("button", {
                    key: e.title,
                    ref: e.value,
                    refInFor: !0,
                    class: [(e.value,
                    t.currentTab,
                    ""), "hover:bg-accent2 hover:rounded-md mx-2 my-2 p-2 text-sm"],
                    attrs: {
                        type: "button",
                        disabled: e.disabled || !1
                    },
                    domProps: {
                        innerHTML: t._s(e.title)
                    },
                    on: {
                        click: function(n) {
                            return t.handleClick(e.value)
                        }
                    }
                })
            }
            )), t._v(" "), n("div", {
                staticClass: "border-b-2 border-geist-foreground",
                style: {
                    width: t.activeLineWidth + "px",
                    transform: "translateX(" + t.activeLineOffset + "px)",
                    "transition-duration": "200ms"
                }
            })], 2)
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    321: function(t, e, n) {
        "use strict";
        var r = n(2).default.extend({
            data: function() {
                return {
                    navigationItems: [{
                        title: "Overview",
                        value: "/"
                    }],
                    currentTab: "/"
                }
            },
            methods: {
                handleClick: function(t) {
                    "/" === t && (t = ""),
                    this.$router.push({
                        path: "/dashboard/".concat(t)
                    })
                }
            }
        })
          , o = (n(378),
        n(1))
          , component = Object(o.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("DashboardHeader"), t._v(" "), n("div", {
                staticClass: "px-2"
            }, [n("CommonTabs", {
                attrs: {
                    tabs: t.navigationItems,
                    currentTab: t.currentTab,
                    "wrapper-class": "relative mx-auto max-w-5xl",
                    "tab-class": "hover:bg-accent2 hover:rounded-md mx-2 my-2 p-2 text-sm",
                    "tab-active-class": "font-medium",
                    "line-class": "border-b border-b-2 border-geist-foreground "
                },
                on: {
                    onClick: t.handleClick
                }
            })], 1), t._v(" "), n("main", {
                staticClass: "border-t border-accent2"
            }, [n("Nuxt")], 1), t._v(" "), n("CommonFooter")], 1)
        }
        ), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            DashboardHeader: n(312).default,
            CommonTabs: n(313).default,
            CommonFooter: n(196).default
        })
    },
    322: function(t, e, n) {
        "use strict";
        var r = n(2).default.extend({})
          , o = (n(380),
        n(1))
          , component = Object(o.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("CommonHeader"), t._v(" "), n("main", {
                staticClass: "flex-grow dark:bg-black"
            }, [n("Nuxt")], 1), t._v(" "), n("CommonFooter")], 1)
        }
        ), [], !1, null, "11f68e3a", null);
        e.a = component.exports;
        installComponents(component, {
            CommonHeader: n(605).default,
            CommonFooter: n(196).default
        })
    },
    323: function(t, e, n) {
        "use strict";
        n(57),
        n(132);
        var r = n(2).default.extend({
            layout: "dashboard",
            data: function() {
                return {
                    navigationItems: [{
                        title: "Details",
                        value: "details"
                    }, {
                        title: "Queries",
                        value: "query"
                    }, {
                        title: "Settings",
                        value: "settings"
                    }],
                    currentTab: this.$route.fullPath.split("/")[3]
                }
            },
            methods: {
                handleClick: function(t) {
                    this.$router.push(t)
                }
            }
        })
          , o = (n(382),
        n(1))
          , component = Object(o.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("DashboardHeader"), t._v(" "), n("div", {
                staticClass: "px-2 md:px-0"
            }, [n("CommonTabs", {
                attrs: {
                    tabs: t.navigationItems,
                    currentTab: t.currentTab
                },
                on: {
                    onClick: t.handleClick
                }
            })], 1), t._v(" "), n("main", {
                staticClass: "border-t border-accent2"
            }, [n("Nuxt")], 1), t._v(" "), n("CommonFooter")], 1)
        }
        ), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            DashboardHeader: n(312).default,
            CommonTabs: n(313).default,
            CommonFooter: n(196).default
        })
    },
    332: function(t, e, n) {
        n(333),
        t.exports = n(334)
    },
    373: function(t, e, n) {
        var content = n(374);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(18).default)("ce1470b4", content, !0, {
            sourceMap: !1
        })
    },
    374: function(t, e, n) {
        var r = n(17)((function(i) {
            return i[1]
        }
        ));
        r.push([t.i, "#app,#docs-root,#root,.root,html{--geist-background:var(--geist-background);--geist-foreground:var(--geist-foreground);--accent1:var(--accents-1);--accent2:var(--accents-2);--accent3:var(--accents-3);--accent4:var(--accents-4);--accent5:var(--accents-5);--accent6:var(--accents-6);--accent7:var(--accents-7);--accent8:var(--accents-8)}", ""]),
        r.locals = {},
        t.exports = r
    },
    378: function(t, e, n) {
        "use strict";
        n(237)
    },
    379: function(t, e, n) {
        var r = n(17)((function(i) {
            return i[1]
        }
        ));
        r.push([t.i, '#app{font-family:"Inter",sans-serif}.zi-input-group,.zi-input-group.prefix input{height:42px!important}.zi-toggle{height:20px!important;width:40px!important}.zi-toggle:before{height:1rem!important;width:1rem!important}.zi-snippet>pre:before{content:"";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.zi-dialog-content{padding:0!important}', ""]),
        r.locals = {},
        t.exports = r
    },
    380: function(t, e, n) {
        "use strict";
        n(238)
    },
    381: function(t, e, n) {
        var r = n(17)((function(i) {
            return i[1]
        }
        ));
        r.push([t.i, '#app[data-v-11f68e3a]{font-family:"Inter",sans-serif}[data-v-11f68e3a]::-moz-selection{background:var(--geist-cyan)}[data-v-11f68e3a]::selection{background:var(--geist-cyan)}.zi-input-group[data-v-11f68e3a],.zi-input-group.prefix input[data-v-11f68e3a]{height:42px!important}.zi-toggle[data-v-11f68e3a]{height:20px!important;width:40px!important}.zi-toggle[data-v-11f68e3a]:before{height:1rem!important;width:1rem!important}.zi-snippet>pre[data-v-11f68e3a]:before{content:"";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}', ""]),
        r.locals = {},
        t.exports = r
    },
    382: function(t, e, n) {
        "use strict";
        n(239)
    },
    383: function(t, e, n) {
        var r = n(17)((function(i) {
            return i[1]
        }
        ));
        r.push([t.i, '#app{font-family:"Inter",sans-serif}.zi-input-group,.zi-input-group.prefix input{height:42px!important}.zi-toggle{height:20px!important;width:40px!important}.zi-toggle:before{height:1rem!important;width:1rem!important}.zi-snippet>pre:before{content:"";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.CodeMirror{height:300px!important}', ""]),
        r.locals = {},
        t.exports = r
    },
    384: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "state", (function() {
            return r
        }
        )),
        n.d(e, "getters", (function() {
            return o
        }
        )),
        n.d(e, "mutations", (function() {
            return c
        }
        )),
        n.d(e, "actions", (function() {
            return l
        }
        ));
        var r = function() {
            return {}
        }
          , o = {}
          , c = {}
          , l = {}
    },
    385: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "state", (function() {
            return r
        }
        )),
        n.d(e, "mutations", (function() {
            return o
        }
        )),
        n.d(e, "actions", (function() {
            return c
        }
        )),
        n.d(e, "getters", (function() {
            return l
        }
        ));
        n(49);
        var r = function() {
            return {
                allKrates: Array(),
                selectedKrate: Object()
            }
        }
          , o = {
            setKrate: function(t, e) {
                t.allKrates.unshift(e)
            },
            setSelectedKrate: function(t, e) {
                t.selectedKrate = e
            },
            deleteKrate: function(t, e) {
                t.allKrates = t.allKrates.filter((function(t) {
                    return t.krateId !== e
                }
                ))
            }
        }
          , c = {
            createNewKrate: function(t, e) {
                (0,
                t.commit)("setKrate", {
                    krateId: e.krateId,
                    krateName: e.krateName,
                    apiKey: e.apiKey,
                    createdAt: Date.now()
                })
            }
        }
          , l = {
            getAllKrates: function(t) {
                return t.allKrates
            },
            getSelectedKrate: function(t) {
                return t.selectedKrate
            }
        }
    },
    404: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "state", (function() {
            return c
        }
        )),
        n.d(e, "mutations", (function() {
            return l
        }
        )),
        n.d(e, "getters", (function() {
            return d
        }
        ));
        var r = n(77)
          , o = n.n(r)
          , c = function() {
            return {
                isDark: !1
            }
        }
          , l = {
            setTheme: function(t) {
                t.isDark ? (t.isDark = !t.isDark,
                o.a.theme.enableLight()) : (t.isDark = !t.isDark,
                o.a.theme.enableDark()),
                localStorage.setItem("isDark", JSON.stringify(t.isDark))
            },
            initTheme: function(t) {
                t.isDark = JSON.parse(localStorage.getItem("isDark")) || !1,
                t.isDark ? o.a.theme.enableDark() : o.a.theme.enableLight()
            }
        }
          , d = {
            getTheme: function(t) {
                return t.isDark
            }
        }
    },
    459: function(t, e) {},
    461: function(t, e) {},
    471: function(t, e) {},
    473: function(t, e) {},
    498: function(t, e) {},
    500: function(t, e) {},
    501: function(t, e) {},
    506: function(t, e) {},
    508: function(t, e) {},
    514: function(t, e) {},
    516: function(t, e) {},
    535: function(t, e) {},
    547: function(t, e) {},
    550: function(t, e) {},
    604: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(2).default.extend({
            methods: {
                changeTheme: function() {
                    this.$store.commit("theme/setTheme")
                }
            },
            computed: {
                themeType: function() {
                    return this.$store.getters["theme/getTheme"] ? "Dark Theme" : "Light Theme"
                }
            },
            mounted: function() {
                this.$store.commit("theme/initTheme")
            }
        })
          , o = n(1)
          , component = Object(o.a)(r, (function() {
            var t = this
              , e = t.$createElement;
            return (t._self._c || e)("zi-button", {
                attrs: {
                    size: "medium",
                    auto: "",
                    action: ""
                },
                on: {
                    click: t.changeTheme
                }
            }, [t._v("\n  " + t._s(t.themeType))])
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    605: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(2).default.extend({})
          , o = n(1)
          , component = Object(o.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("header", {
                staticClass: "\n    fixed\n    w-full\n    z-30\n    transition\n    duration-300\n    ease-in-out\n    bg-geist-background\n    md:opacity-90\n    border-b border-accent2\n  "
            }, [n("div", {
                staticClass: "max-w-5xl mx-auto px-4"
            }, [n("div", {
                staticClass: "flex items-center justify-between h-16 md:h-20"
            }, [n("div", {
                staticClass: "flex-shrink-0"
            }, [n("NuxtLink", {
                staticClass: "\n            inline-flex\n            cursor-pointer\n            items-center\n            justify-center\n            border border-transparent\n            rounded\n            leading-snug\n            transition\n            duration-150\n            ease-in-out\n            text-accent8\n          ",
                attrs: {
                    to: "/",
                    "aria-label": "logo"
                }
            }, [n("package-icon", {
                staticClass: "h-10 w-10"
            }), t._v(" "), n("p", {
                staticClass: "text-2xl font-bold pl-4"
            }, [t._v("Krates")])], 1)], 1), t._v(" "), n("NuxtLink", {
                staticClass: "flex flex-grow justify-end flex-wrap items-center",
                attrs: {
                    to: "/dashboard"
                }
            }, [n("zi-button", {
                attrs: {
                    type: "primary",
                    auto: ""
                }
            }, [t._v(" Dashboard ")])], 1)], 1)])])
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    },
    606: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, "state", (function() {
            return x
        }
        )),
        n.d(e, "mutations", (function() {
            return k
        }
        )),
        n.d(e, "actions", (function() {
            return y
        }
        )),
        n.d(e, "getters", (function() {
            return _
        }
        ));
        var r, o, c, l, d, f, m = n(12), h = (n(59),
        n(70),
        n(62),
        n(109)), v = n.n(h).a.create({
            baseURL: "https://krat.es/",
            timeout: 1e4
        }), x = function() {
            return {
                health: !0,
                responsePayload: void 0,
                requestPayload: Object() || Array(),
                krateStats: Object()
            }
        }, k = {
            setResponsePayload: function(t, e) {
                t.responsePayload = e
            },
            setKrateStats: function(t, e) {
                t.krateStats = e
            },
            setHealth: function(t, e) {
                t.health = e
            }
        }, y = {
            getKrateData: (f = Object(m.a)(regeneratorRuntime.mark((function t(e, n) {
                var r;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return r = e.commit,
                            t.next = 3,
                            v.get(n).then((function(t) {
                                r("setResponsePayload", t.data)
                            }
                            ));
                        case 3:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            function(t, e) {
                return f.apply(this, arguments)
            }
            ),
            setKrateData: (d = Object(m.a)(regeneratorRuntime.mark((function t(e, n) {
                var r, o, c, l;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return r = e.commit,
                            o = n.requestUrl,
                            c = n.payload,
                            l = n.headers,
                            t.next = 4,
                            v.post(o, c, {
                                headers: l
                            }).then((function(t) {
                                r("setResponsePayload", t.data)
                            }
                            ));
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            function(t, e) {
                return d.apply(this, arguments)
            }
            ),
            putKrateData: (l = Object(m.a)(regeneratorRuntime.mark((function t(e, n) {
                var r, o, c, l;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return r = e.commit,
                            o = n.requestUrl,
                            c = n.payload,
                            l = n.headers,
                            t.next = 4,
                            v.put(o, c, {
                                headers: l
                            }).then((function(t) {
                                r("setResponsePayload", t.data)
                            }
                            ));
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            function(t, e) {
                return l.apply(this, arguments)
            }
            ),
            deleteKrateData: (c = Object(m.a)(regeneratorRuntime.mark((function t(e, n) {
                var r, o, c;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return r = e.commit,
                            o = n.requestUrl,
                            c = n.headers,
                            t.next = 4,
                            v.delete(o, {
                                headers: c
                            }).then((function(t) {
                                r("setResponsePayload", t.data),
                                20 !== o.length || o.includes("query") || r("krates/deleteKrate", o, {
                                    root: !0
                                })
                            }
                            ));
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            function(t, e) {
                return c.apply(this, arguments)
            }
            ),
            getKrateStats: (o = Object(m.a)(regeneratorRuntime.mark((function t(e, n) {
                var r;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return r = e.commit,
                            t.next = 3,
                            v.get("meta/" + n).then((function(t) {
                                r("setKrateStats", t.data)
                            }
                            ));
                        case 3:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            function(t, e) {
                return o.apply(this, arguments)
            }
            ),
            getHealthStatus: (r = Object(m.a)(regeneratorRuntime.mark((function t(e) {
                var n;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return n = e.commit,
                            t.next = 3,
                            v.get("/health").then((function(t) {
                                n("setHealth", !0)
                            }
                            )).catch((function(t) {
                                n("setHealth", !1)
                            }
                            ));
                        case 3:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            function(t) {
                return r.apply(this, arguments)
            }
            )
        }, _ = {
            getResponsePayload: function(t) {
                return t.responsePayload
            },
            getHealthStatus: function(t) {
                return t.health
            },
            getKrateStats: function(t) {
                return t.krateStats
            }
        }
    }
}, [[332, 20, 2, 21]]]);
