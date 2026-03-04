(() => {
  var e = {};
  ((e.id = 857),
    (e.ids = [857]),
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
      7293: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => s.a,
            __next_app__: () => p,
            originalPathname: () => c,
            pages: () => u,
            routeModule: () => f,
            tree: () => l,
          }),
          r(2361),
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
        let l = [
            "",
            {
              children: [
                "events",
                {
                  children: [
                    "[id]",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(r.bind(r, 2361)),
                            "/Users/kostiantyn/Downloads/bratislava-app/src/app/events/[id]/page.tsx",
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
          u = [
            "/Users/kostiantyn/Downloads/bratislava-app/src/app/events/[id]/page.tsx",
          ],
          c = "/events/[id]/page",
          p = { require: r, loadChunk: () => Promise.resolve() },
          f = new n.AppPageRouteModule({
            definition: {
              kind: o.x.APP_PAGE,
              page: "/events/[id]/page",
              pathname: "/events/[id]",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      3209: (e, t, r) => {
        (Promise.resolve().then(r.t.bind(r, 9404, 23)),
          Promise.resolve().then(r.bind(r, 2068)));
      },
      2068: (e, t, r) => {
        "use strict";
        r.d(t, { Badge: () => s, Card: () => o, PageHeader: () => i });
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
        function i({ title: e, subtitle: t }) {
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
        function s({
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
              return x;
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
              return u;
            },
            redirect: function () {
              return l;
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
        function l(e, t) {
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
        function u(e, t) {
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
        function x(e) {
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
      2361: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => d }));
        var n = r(9510),
          o = r(8585),
          i = r(7371),
          s = r(63),
          a = r(3718);
        function d({ params: e }) {
          let t = s.FP.find((t) => t.id === e.id);
          return t
            ? (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("div", {
                    style: {
                      background: "var(--blue)",
                      padding: "24px 20px 28px",
                    },
                    children: [
                      n.jsx(i.default, {
                        href: "/events",
                        style: {
                          color: "rgba(255,255,255,0.7)",
                          fontSize: "13px",
                          textDecoration: "none",
                        },
                        children: "← События",
                      }),
                      n.jsx("div", {
                        style: { marginTop: "16px" },
                        children: n.jsx(a.Ct, {
                          color: t.isPlace
                            ? "rgba(255,255,255,0.15)"
                            : "rgba(232,184,75,0.3)",
                          textColor: "#fff",
                          children: t.isPlace
                            ? "\uD83D\uDCCD Место"
                            : "\uD83C\uDF89 Событие",
                        }),
                      }),
                      n.jsx("h1", {
                        style: {
                          margin: "10px 0 0",
                          color: "#fff",
                          fontSize: "20px",
                        },
                        children: t.title,
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
                      t.date &&
                        (0, n.jsxs)(a.Zb, {
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
                              children: "Когда",
                            }),
                            n.jsx("div", {
                              style: { fontWeight: 600, color: "var(--blue)" },
                              children: new Date(t.date).toLocaleDateString(
                                "ru-RU",
                                {
                                  weekday: "long",
                                  day: "numeric",
                                  month: "long",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                },
                              ),
                            }),
                          ],
                        }),
                      t.address &&
                        (0, n.jsxs)(a.Zb, {
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
                              children: "Где",
                            }),
                            (0, n.jsxs)("div", {
                              style: { fontWeight: 500 },
                              children: ["\uD83D\uDCCD ", t.address],
                            }),
                          ],
                        }),
                      (0, n.jsxs)(a.Zb, {
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
                      t.link &&
                        n.jsx("a", {
                          href: t.link,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          style: {
                            display: "block",
                            background: "var(--blue)",
                            color: "#fff",
                            textAlign: "center",
                            padding: "16px",
                            borderRadius: "var(--radius)",
                            textDecoration: "none",
                            fontWeight: 600,
                            fontSize: "15px",
                          },
                          children: "Подробнее →",
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
        r.d(t, { Ct: () => l, Zb: () => a, mr: () => d });
        var n = r(8570);
        let o = (0, n.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/index.tsx`,
          ),
          { __esModule: i, $$typeof: s } = o;
        o.default;
        let a = (0, n.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/index.tsx#Card`,
          ),
          d = (0, n.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/index.tsx#PageHeader`,
          ),
          l = (0, n.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/index.tsx#Badge`,
          );
      },
    }));
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [24, 867], () => r(7293));
  module.exports = n;
})();
