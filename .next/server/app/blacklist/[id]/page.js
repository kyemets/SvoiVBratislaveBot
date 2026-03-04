(() => {
  var e = {};
  ((e.id = 167),
    (e.ids = [167]),
    (e.modules = {
      7849: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external");
      },
      2934: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external.js");
      },
      5403: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external");
      },
      4580: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external.js");
      },
      4749: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external");
      },
      5869: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external.js");
      },
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      2406: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => s.a,
            __next_app__: () => p,
            originalPathname: () => c,
            pages: () => l,
            routeModule: () => f,
            tree: () => u,
          }),
          r(4229),
          r(9176),
          r(5866));
        var n = r(3191),
          o = r(8716),
          i = r(7922),
          s = r.n(i),
          a = r(5231),
          d = {};
        for (let e in a)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (d[e] = () => a[e]);
        r.d(t, d);
        let u = [
            "",
            {
              children: [
                "blacklist",
                {
                  children: [
                    "[id]",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(r.bind(r, 4229)),
                            "/Users/kostiantyn/Downloads/bratislava-app/src/app/blacklist/[id]/page.tsx",
                          ],
                        },
                      ],
                    },
                    {},
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 9176)),
                "/Users/kostiantyn/Downloads/bratislava-app/src/app/layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.t.bind(r, 5866, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          l = [
            "/Users/kostiantyn/Downloads/bratislava-app/src/app/blacklist/[id]/page.tsx",
          ],
          c = "/blacklist/[id]/page",
          p = { require: r, loadChunk: () => Promise.resolve() },
          f = new n.AppPageRouteModule({
            definition: {
              kind: o.x.APP_PAGE,
              page: "/blacklist/[id]/page",
              pathname: "/blacklist/[id]",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: u },
          });
      },
      7309: (e, t, r) => {
        Promise.resolve().then(r.t.bind(r, 9404, 23));
      },
      8585: (e, t, r) => {
        "use strict";
        var n = r(1085);
        r.o(n, "notFound") &&
          r.d(t, {
            notFound: function () {
              return n.notFound;
            },
          });
      },
      1085: (e, t, r) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            ReadonlyURLSearchParams: function () {
              return s;
            },
            RedirectType: function () {
              return n.RedirectType;
            },
            notFound: function () {
              return o.notFound;
            },
            permanentRedirect: function () {
              return n.permanentRedirect;
            },
            redirect: function () {
              return n.redirect;
            },
          }));
        let n = r(3953),
          o = r(6399);
        class i extends Error {
          constructor() {
            super(
              "Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams",
            );
          }
        }
        class s extends URLSearchParams {
          append() {
            throw new i();
          }
          delete() {
            throw new i();
          }
          set() {
            throw new i();
          }
          sort() {
            throw new i();
          }
        }
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      6399: (e, t) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            isNotFoundError: function () {
              return o;
            },
            notFound: function () {
              return n;
            },
          }));
        let r = "NEXT_NOT_FOUND";
        function n() {
          let e = Error(r);
          throw ((e.digest = r), e);
        }
        function o(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            "digest" in e &&
            e.digest === r
          );
        }
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      8586: (e, t) => {
        "use strict";
        var r;
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "RedirectStatusCode", {
            enumerable: !0,
            get: function () {
              return r;
            },
          }),
          (function (e) {
            ((e[(e.SeeOther = 303)] = "SeeOther"),
              (e[(e.TemporaryRedirect = 307)] = "TemporaryRedirect"),
              (e[(e.PermanentRedirect = 308)] = "PermanentRedirect"));
          })(r || (r = {})),
          ("function" == typeof t.default ||
            ("object" == typeof t.default && null !== t.default)) &&
            void 0 === t.default.__esModule &&
            (Object.defineProperty(t.default, "__esModule", { value: !0 }),
            Object.assign(t.default, t),
            (e.exports = t.default)));
      },
      3953: (e, t, r) => {
        "use strict";
        var n;
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            RedirectType: function () {
              return n;
            },
            getRedirectError: function () {
              return d;
            },
            getRedirectStatusCodeFromError: function () {
              return g;
            },
            getRedirectTypeFromError: function () {
              return f;
            },
            getURLFromRedirectError: function () {
              return p;
            },
            isRedirectError: function () {
              return c;
            },
            permanentRedirect: function () {
              return l;
            },
            redirect: function () {
              return u;
            },
          }));
        let o = r(4580),
          i = r(2934),
          s = r(8586),
          a = "NEXT_REDIRECT";
        function d(e, t, r) {
          void 0 === r && (r = s.RedirectStatusCode.TemporaryRedirect);
          let n = Error(a);
          n.digest = a + ";" + t + ";" + e + ";" + r + ";";
          let i = o.requestAsyncStorage.getStore();
          return (i && (n.mutableCookies = i.mutableCookies), n);
        }
        function u(e, t) {
          void 0 === t && (t = "replace");
          let r = i.actionAsyncStorage.getStore();
          throw d(
            e,
            t,
            (null == r ? void 0 : r.isAction)
              ? s.RedirectStatusCode.SeeOther
              : s.RedirectStatusCode.TemporaryRedirect,
          );
        }
        function l(e, t) {
          void 0 === t && (t = "replace");
          let r = i.actionAsyncStorage.getStore();
          throw d(
            e,
            t,
            (null == r ? void 0 : r.isAction)
              ? s.RedirectStatusCode.SeeOther
              : s.RedirectStatusCode.PermanentRedirect,
          );
        }
        function c(e) {
          if (
            "object" != typeof e ||
            null === e ||
            !("digest" in e) ||
            "string" != typeof e.digest
          )
            return !1;
          let [t, r, n, o] = e.digest.split(";", 4),
            i = Number(o);
          return (
            t === a &&
            ("replace" === r || "push" === r) &&
            "string" == typeof n &&
            !isNaN(i) &&
            i in s.RedirectStatusCode
          );
        }
        function p(e) {
          return c(e) ? e.digest.split(";", 3)[2] : null;
        }
        function f(e) {
          if (!c(e)) throw Error("Not a redirect error");
          return e.digest.split(";", 2)[1];
        }
        function g(e) {
          if (!c(e)) throw Error("Not a redirect error");
          return Number(e.digest.split(";", 4)[3]);
        }
        ((function (e) {
          ((e.push = "push"), (e.replace = "replace"));
        })(n || (n = {})),
          ("function" == typeof t.default ||
            ("object" == typeof t.default && null !== t.default)) &&
            void 0 === t.default.__esModule &&
            (Object.defineProperty(t.default, "__esModule", { value: !0 }),
            Object.assign(t.default, t),
            (e.exports = t.default)));
      },
      4229: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => d }));
        var n = r(9510),
          o = r(8585),
          i = r(7371),
          s = r(63),
          a = r(7351);
        function d({ params: e }) {
          let t = s.hl.find((t) => t.id === e.id);
          return t
            ? (0, n.jsxs)("div", {
                style: { background: "#0F1923", minHeight: "100vh" },
                children: [
                  (0, n.jsxs)("div", {
                    style: { padding: "24px 20px 20px" },
                    children: [
                      n.jsx(i.default, {
                        href: "/blacklist",
                        style: {
                          color: "rgba(255,255,255,0.4)",
                          fontSize: "13px",
                          textDecoration: "none",
                        },
                        children: "← Чёрный список",
                      }),
                      n.jsx("div", {
                        style: {
                          marginTop: "16px",
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        },
                        children: (0, n.jsxs)("span", {
                          style: {
                            fontSize: "11px",
                            fontWeight: 600,
                            padding: "4px 12px",
                            borderRadius: "100px",
                            background: "rgba(255,60,60,0.15)",
                            color: "#FF6B6B",
                          },
                          children: [a.tP[t.type], " ", a.vB[t.type]],
                        }),
                      }),
                      n.jsx("h1", {
                        style: {
                          margin: "12px 0 0",
                          color: "#fff",
                          fontSize: "22px",
                          fontFamily: "Unbounded, sans-serif",
                        },
                        children: t.name,
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    style: {
                      padding: "0 16px 24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    },
                    children: [
                      (0, n.jsxs)("div", {
                        style: {
                          background: "#1A2530",
                          border: "1px solid #2A3540",
                          borderRadius: "16px",
                          padding: "18px",
                        },
                        children: [
                          n.jsx("div", {
                            style: {
                              fontSize: "12px",
                              color: "rgba(255,255,255,0.3)",
                              fontWeight: 600,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              marginBottom: "8px",
                            },
                            children: "Что произошло",
                          }),
                          n.jsx("p", {
                            style: {
                              margin: 0,
                              color: "rgba(255,255,255,0.8)",
                              lineHeight: 1.6,
                              fontSize: "14px",
                            },
                            children: t.description,
                          }),
                        ],
                      }),
                      t.contact &&
                        (0, n.jsxs)("div", {
                          style: {
                            background: "#1A2530",
                            border: "1px solid #2A3540",
                            borderRadius: "16px",
                            padding: "18px",
                          },
                          children: [
                            n.jsx("div", {
                              style: {
                                fontSize: "12px",
                                color: "rgba(255,255,255,0.3)",
                                fontWeight: 600,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                marginBottom: "8px",
                              },
                              children: "Контакт / аккаунт",
                            }),
                            n.jsx("div", {
                              style: { color: "#FF6B6B", fontWeight: 600 },
                              children: t.contact,
                            }),
                          ],
                        }),
                      n.jsx("div", {
                        style: {
                          background: "rgba(255,200,0,0.08)",
                          border: "1px solid rgba(255,200,0,0.2)",
                          borderRadius: "12px",
                          padding: "14px 16px",
                          fontSize: "12px",
                          color: "rgba(255,200,0,0.7)",
                          lineHeight: 1.5,
                        },
                        children:
                          "⚠️ Информация предоставлена пользователями сообщества. Делай собственные выводы.",
                      }),
                    ],
                  }),
                ],
              })
            : (0, o.notFound)();
        }
      },
      7351: (e, t, r) => {
        "use strict";
        r.d(t, {
          Hs: () => n,
          gO: () => o,
          tP: () => a,
          vB: () => s,
          wW: () => i,
        });
        let n = {
            doctors: "Врачи",
            lawyers: "Юристы",
            masters: "Мастера",
            nannies: "Няни",
            tutors: "Репетиторы",
            accountants: "Бухгалтеры",
            other: "Другое",
          },
          o = {
            doctors: "\uD83E\uDE7A",
            lawyers: "⚖️",
            masters: "\uD83D\uDD27",
            nannies: "\uD83D\uDC76",
            tutors: "\uD83D\uDCDA",
            accountants: "\uD83D\uDCCA",
            other: "✨",
          },
          i = { vacancy: "Вакансия", resume: "Резюме" },
          s = {
            person: "Мошенник",
            employer: "Работодатель",
            company: "Компания",
            landlord: "Арендодатель",
            other: "Другое",
          },
          a = {
            person: "\uD83D\uDC64",
            employer: "\uD83D\uDCBC",
            company: "\uD83C\uDFE2",
            landlord: "\uD83C\uDFE0",
            other: "⚠️",
          };
      },
    }));
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [24, 867], () => r(2406));
  module.exports = n;
})();
