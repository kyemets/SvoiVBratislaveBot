(() => {
  var e = {};
  ((e.id = 712),
    (e.ids = [712]),
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
      8116: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => a.a,
            __next_app__: () => p,
            originalPathname: () => l,
            pages: () => c,
            routeModule: () => f,
            tree: () => u,
          }),
          r(2955),
          r(9176),
          r(5866));
        var n = r(3191),
          o = r(8716),
          s = r(7922),
          a = r.n(s),
          i = r(5231),
          d = {};
        for (let e in i)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (d[e] = () => i[e]);
        r.d(t, d);
        let u = [
            "",
            {
              children: [
                "jobs",
                {
                  children: [
                    "[id]",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(r.bind(r, 2955)),
                            "/Users/kostiantyn/Downloads/bratislava-app/src/app/jobs/[id]/page.tsx",
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
          c = [
            "/Users/kostiantyn/Downloads/bratislava-app/src/app/jobs/[id]/page.tsx",
          ],
          l = "/jobs/[id]/page",
          p = { require: r, loadChunk: () => Promise.resolve() },
          f = new n.AppPageRouteModule({
            definition: {
              kind: o.x.APP_PAGE,
              page: "/jobs/[id]/page",
              pathname: "/jobs/[id]",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: u },
          });
      },
      3209: (e, t, r) => {
        (Promise.resolve().then(r.t.bind(r, 9404, 23)),
          Promise.resolve().then(r.bind(r, 2068)));
      },
      2068: (e, t, r) => {
        "use strict";
        r.d(t, { Badge: () => a, Card: () => o, PageHeader: () => s });
        var n = r(326);
        function o({ children: e, onClick: t, style: r }) {
          return n.jsx("div", {
            onClick: t,
            style: {
              background: "var(--card)",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              overflow: "hidden",
              cursor: t ? "pointer" : "default",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
              ...r,
            },
            onMouseDown: (e) =>
              t && (e.currentTarget.style.transform = "scale(0.98)"),
            onMouseUp: (e) =>
              t && (e.currentTarget.style.transform = "scale(1)"),
            onTouchStart: (e) =>
              t && (e.currentTarget.style.transform = "scale(0.98)"),
            onTouchEnd: (e) =>
              t && (e.currentTarget.style.transform = "scale(1)"),
            children: e,
          });
        }
        function s({ title: e, subtitle: t }) {
          return (0, n.jsxs)("div", {
            style: { padding: "24px 20px 16px", background: "var(--blue)" },
            children: [
              n.jsx("h1", {
                style: {
                  margin: 0,
                  fontSize: "22px",
                  color: "#fff",
                  fontFamily: "Unbounded, sans-serif",
                },
                children: e,
              }),
              t &&
                n.jsx("p", {
                  style: {
                    margin: "6px 0 0",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "13px",
                  },
                  children: t,
                }),
            ],
          });
        }
        function a({
          children: e,
          color: t = "var(--blue-muted)",
          textColor: r = "var(--blue)",
        }) {
          return n.jsx("span", {
            style: {
              display: "inline-block",
              padding: "3px 10px",
              borderRadius: "100px",
              background: t,
              color: r,
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.02em",
            },
            children: e,
          });
        }
        r(7577);
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
              return a;
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
        class s extends Error {
          constructor() {
            super(
              "Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams",
            );
          }
        }
        class a extends URLSearchParams {
          append() {
            throw new s();
          }
          delete() {
            throw new s();
          }
          set() {
            throw new s();
          }
          sort() {
            throw new s();
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
              return x;
            },
            getRedirectTypeFromError: function () {
              return f;
            },
            getURLFromRedirectError: function () {
              return p;
            },
            isRedirectError: function () {
              return l;
            },
            permanentRedirect: function () {
              return c;
            },
            redirect: function () {
              return u;
            },
          }));
        let o = r(4580),
          s = r(2934),
          a = r(8586),
          i = "NEXT_REDIRECT";
        function d(e, t, r) {
          void 0 === r && (r = a.RedirectStatusCode.TemporaryRedirect);
          let n = Error(i);
          n.digest = i + ";" + t + ";" + e + ";" + r + ";";
          let s = o.requestAsyncStorage.getStore();
          return (s && (n.mutableCookies = s.mutableCookies), n);
        }
        function u(e, t) {
          void 0 === t && (t = "replace");
          let r = s.actionAsyncStorage.getStore();
          throw d(
            e,
            t,
            (null == r ? void 0 : r.isAction)
              ? a.RedirectStatusCode.SeeOther
              : a.RedirectStatusCode.TemporaryRedirect,
          );
        }
        function c(e, t) {
          void 0 === t && (t = "replace");
          let r = s.actionAsyncStorage.getStore();
          throw d(
            e,
            t,
            (null == r ? void 0 : r.isAction)
              ? a.RedirectStatusCode.SeeOther
              : a.RedirectStatusCode.PermanentRedirect,
          );
        }
        function l(e) {
          if (
            "object" != typeof e ||
            null === e ||
            !("digest" in e) ||
            "string" != typeof e.digest
          )
            return !1;
          let [t, r, n, o] = e.digest.split(";", 4),
            s = Number(o);
          return (
            t === i &&
            ("replace" === r || "push" === r) &&
            "string" == typeof n &&
            !isNaN(s) &&
            s in a.RedirectStatusCode
          );
        }
        function p(e) {
          return l(e) ? e.digest.split(";", 3)[2] : null;
        }
        function f(e) {
          if (!l(e)) throw Error("Not a redirect error");
          return e.digest.split(";", 2)[1];
        }
        function x(e) {
          if (!l(e)) throw Error("Not a redirect error");
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
      2955: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => u }));
        var n = r(9510),
          o = r(8585),
          s = r(7371),
          a = r(63),
          i = r(7351),
          d = r(3718);
        function u({ params: e }) {
          let t = a.WN.find((t) => t.id === e.id);
          return t
            ? (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("div", {
                    style: { background: "#1A3A2A", padding: "24px 20px 28px" },
                    children: [
                      n.jsx(s.default, {
                        href: "/jobs",
                        style: {
                          color: "rgba(255,255,255,0.6)",
                          fontSize: "13px",
                          textDecoration: "none",
                        },
                        children: "← Работа",
                      }),
                      (0, n.jsxs)("div", {
                        style: {
                          marginTop: "14px",
                          display: "flex",
                          gap: "8px",
                          flexWrap: "wrap",
                        },
                        children: [
                          n.jsx(d.Ct, {
                            color: "rgba(255,255,255,0.15)",
                            textColor: "#fff",
                            children: i.wW[t.type],
                          }),
                          t.remote &&
                            n.jsx(d.Ct, {
                              color: "rgba(255,255,255,0.15)",
                              textColor: "#fff",
                              children: "\uD83C\uDF10 Удалённо",
                            }),
                        ],
                      }),
                      n.jsx("h1", {
                        style: {
                          margin: "10px 0 0",
                          color: "#fff",
                          fontSize: "20px",
                        },
                        children: t.title,
                      }),
                      t.company &&
                        (0, n.jsxs)("p", {
                          style: {
                            margin: "6px 0 0",
                            color: "rgba(255,255,255,0.6)",
                            fontSize: "14px",
                          },
                          children: ["\uD83C\uDFE2 ", t.company],
                        }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    style: {
                      padding: "16px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    },
                    children: [
                      t.salary &&
                        (0, n.jsxs)(d.Zb, {
                          style: { padding: "16px" },
                          children: [
                            n.jsx("div", {
                              style: {
                                fontSize: "12px",
                                color: "var(--text-muted)",
                                fontWeight: 600,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                marginBottom: "6px",
                              },
                              children: "Зарплата",
                            }),
                            n.jsx("div", {
                              style: {
                                fontWeight: 700,
                                fontSize: "20px",
                                color: "#1A3A2A",
                              },
                              children: t.salary,
                            }),
                          ],
                        }),
                      (0, n.jsxs)(d.Zb, {
                        style: { padding: "16px" },
                        children: [
                          n.jsx("div", {
                            style: {
                              fontSize: "12px",
                              color: "var(--text-muted)",
                              fontWeight: 600,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              marginBottom: "8px",
                            },
                            children: "Описание",
                          }),
                          n.jsx("p", {
                            style: { margin: 0, lineHeight: 1.6 },
                            children: t.description,
                          }),
                        ],
                      }),
                      (0, n.jsxs)("a", {
                        href: t.contact.startsWith("@")
                          ? `https://t.me/${t.contact.slice(1)}`
                          : `tel:${t.contact}`,
                        style: {
                          display: "block",
                          background: "#1A3A2A",
                          color: "#fff",
                          textAlign: "center",
                          padding: "16px",
                          borderRadius: "var(--radius)",
                          textDecoration: "none",
                          fontWeight: 600,
                          fontSize: "15px",
                        },
                        children: ["Написать ", t.contact],
                      }),
                    ],
                  }),
                ],
              })
            : (0, o.notFound)();
        }
      },
      3718: (e, t, r) => {
        "use strict";
        r.d(t, { Ct: () => u, Zb: () => i, mr: () => d });
        var n = r(8570);
        let o = (0, n.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/index.tsx`,
          ),
          { __esModule: s, $$typeof: a } = o;
        o.default;
        let i = (0, n.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/index.tsx#Card`,
          ),
          d = (0, n.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/index.tsx#PageHeader`,
          ),
          u = (0, n.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/index.tsx#Badge`,
          );
      },
      7351: (e, t, r) => {
        "use strict";
        r.d(t, {
          Hs: () => n,
          gO: () => o,
          tP: () => i,
          vB: () => a,
          wW: () => s,
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
          s = { vacancy: "Вакансия", resume: "Резюме" },
          a = {
            person: "Мошенник",
            employer: "Работодатель",
            company: "Компания",
            landlord: "Арендодатель",
            other: "Другое",
          },
          i = {
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
    n = t.X(0, [24, 867], () => r(8116));
  module.exports = n;
})();
