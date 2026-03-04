(() => {
  var e = {};
  ((e.id = 409),
    (e.ids = [409]),
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
      7257: (e, t, n) => {
        "use strict";
        (n.r(t),
          n.d(t, {
            GlobalError: () => s.a,
            __next_app__: () => p,
            originalPathname: () => c,
            pages: () => u,
            routeModule: () => f,
            tree: () => d,
          }),
          n(7352),
          n(5866),
          n(9176));
        var r = n(3191),
          o = n(8716),
          a = n(7922),
          s = n.n(a),
          i = n(5231),
          l = {};
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
            ].indexOf(e) && (l[e] = () => i[e]);
        n.d(t, l);
        let d = [
            "",
            {
              children: [
                "/_not-found",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(n.t.bind(n, 5866, 23)),
                        "next/dist/client/components/not-found-error",
                      ],
                    },
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(n.bind(n, 9176)),
                "/Users/kostiantyn/Downloads/bratislava-app/src/app/layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(n.t.bind(n, 5866, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          u = [],
          c = "/_not-found/page",
          p = { require: n, loadChunk: () => Promise.resolve() },
          f = new r.AppPageRouteModule({
            definition: {
              kind: o.x.APP_PAGE,
              page: "/_not-found/page",
              pathname: "/_not-found",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      9363: (e, t, n) => {
        (Promise.resolve().then(n.t.bind(n, 2994, 23)),
          Promise.resolve().then(n.t.bind(n, 6114, 23)),
          Promise.resolve().then(n.t.bind(n, 9727, 23)),
          Promise.resolve().then(n.t.bind(n, 9671, 23)),
          Promise.resolve().then(n.t.bind(n, 1868, 23)),
          Promise.resolve().then(n.t.bind(n, 4759, 23)));
      },
      7764: (e, t, n) => {
        (Promise.resolve().then(n.bind(n, 9596)),
          Promise.resolve().then(n.bind(n, 108)));
      },
      9596: (e, t, n) => {
        "use strict";
        n.d(t, { BottomNav: () => i });
        var r = n(326),
          o = n(434),
          a = n(5047);
        let s = [
          { href: "/", icon: "\uD83C\uDFE0", label: "Главная" },
          { href: "/catalog", icon: "\uD83D\uDDC2", label: "Каталог" },
          { href: "/search", icon: "\uD83D\uDD0D", label: "Поиск" },
          { href: "/add", icon: "＋", label: "Добавить" },
          { href: "/more", icon: "⋯", label: "Ещё" },
        ];
        function i() {
          let e = (0, a.usePathname)();
          return "/onboarding" === e
            ? null
            : r.jsx("nav", {
                style: {
                  position: "fixed",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "#fff",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  zIndex: 100,
                  paddingBottom: "env(safe-area-inset-bottom)",
                },
                children: s.map((t) => {
                  let n = "/" === t.href ? "/" === e : e.startsWith(t.href),
                    a = "/add" === t.href;
                  return (0, r.jsxs)(
                    o.default,
                    {
                      href: t.href,
                      style: {
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px 4px 8px",
                        textDecoration: "none",
                        gap: "3px",
                      },
                      children: [
                        r.jsx("span", {
                          style: {
                            fontSize: a ? "22px" : "20px",
                            lineHeight: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: a ? "36px" : "auto",
                            height: a ? "36px" : "auto",
                            borderRadius: a ? "50%" : 0,
                            background: a ? "var(--blue)" : "transparent",
                            color: a ? "#fff" : "inherit",
                            marginBottom: a ? "2px" : 0,
                          },
                          children: t.icon,
                        }),
                        r.jsx("span", {
                          style: {
                            fontSize: "10px",
                            fontWeight: n ? 600 : 400,
                            color: n ? "var(--blue)" : "var(--text-muted)",
                            letterSpacing: "0.01em",
                          },
                          children: t.label,
                        }),
                      ],
                    },
                    t.href,
                  );
                }),
              });
        }
      },
      108: (e, t, n) => {
        "use strict";
        (n.d(t, { OnboardingGate: () => o }), n(7577));
        var r = n(5047);
        function o() {
          return ((0, r.useRouter)(), (0, r.usePathname)(), null);
        }
      },
      6399: (e, t) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var n in t)
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          })(t, {
            isNotFoundError: function () {
              return o;
            },
            notFound: function () {
              return r;
            },
          }));
        let n = "NEXT_NOT_FOUND";
        function r() {
          let e = Error(n);
          throw ((e.digest = n), e);
        }
        function o(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            "digest" in e &&
            e.digest === n
          );
        }
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      7352: (e, t, n) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var n in t)
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          })(t, {
            PARALLEL_ROUTE_DEFAULT_PATH: function () {
              return o;
            },
            default: function () {
              return a;
            },
          }));
        let r = n(6399),
          o = "next/dist/client/components/parallel-route-default.js";
        function a() {
          (0, r.notFound)();
        }
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      9176: (e, t, n) => {
        "use strict";
        (n.r(t), n.d(t, { default: () => x, metadata: () => f }));
        var r = n(9510);
        n(5023);
        var o = n(8570);
        let a = (0, o.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/layout/BottomNav.tsx`,
          ),
          { __esModule: s, $$typeof: i } = a;
        a.default;
        let l = (0, o.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/layout/BottomNav.tsx#BottomNav`,
          ),
          d = (0, o.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/OnboardingGate.tsx`,
          ),
          { __esModule: u, $$typeof: c } = d;
        d.default;
        let p = (0, o.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/OnboardingGate.tsx#OnboardingGate`,
          ),
          f = {
            title: "Свои в Братиславе",
            description: "Русскоязычное сообщество в Братиславе",
          };
        function x({ children: e }) {
          return (0, r.jsxs)("html", {
            lang: "ru",
            children: [
              r.jsx("head", {
                children: r.jsx("script", {
                  src: "https://telegram.org/js/telegram-web-app.js",
                }),
              }),
              (0, r.jsxs)("body", {
                children: [
                  r.jsx("script", {
                    dangerouslySetInnerHTML: {
                      __html: `
          window.addEventListener('load', function() {
            if (window.Telegram && window.Telegram.WebApp) {
              window.Telegram.WebApp.ready();
              window.Telegram.WebApp.expand();
            }
          });
        `,
                    },
                  }),
                  (0, r.jsxs)("main", {
                    style: { paddingBottom: "80px", minHeight: "100vh" },
                    children: [r.jsx(p, {}), e],
                  }),
                  r.jsx(l, {}),
                ],
              }),
            ],
          });
        }
      },
      5023: () => {},
    }));
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var n = (e) => t((t.s = e)),
    r = t.X(0, [24], () => n(7257));
  module.exports = r;
})();
