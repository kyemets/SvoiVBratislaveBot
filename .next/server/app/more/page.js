(() => {
  var e = {};
  ((e.id = 12),
    (e.ids = [12]),
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
      1076: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => a.a,
            __next_app__: () => u,
            originalPathname: () => p,
            pages: () => c,
            routeModule: () => x,
            tree: () => d,
          }),
          r(7645),
          r(9176),
          r(5866));
        var n = r(3191),
          s = r(8716),
          o = r(7922),
          a = r.n(o),
          i = r(5231),
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
        r.d(t, l);
        let d = [
            "",
            {
              children: [
                "more",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 7645)),
                        "/Users/kostiantyn/Downloads/bratislava-app/src/app/more/page.tsx",
                      ],
                    },
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
            "/Users/kostiantyn/Downloads/bratislava-app/src/app/more/page.tsx",
          ],
          p = "/more/page",
          u = { require: r, loadChunk: () => Promise.resolve() },
          x = new n.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: "/more/page",
              pathname: "/more",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      9363: (e, t, r) => {
        (Promise.resolve().then(r.t.bind(r, 2994, 23)),
          Promise.resolve().then(r.t.bind(r, 6114, 23)),
          Promise.resolve().then(r.t.bind(r, 9727, 23)),
          Promise.resolve().then(r.t.bind(r, 9671, 23)),
          Promise.resolve().then(r.t.bind(r, 1868, 23)),
          Promise.resolve().then(r.t.bind(r, 4759, 23)));
      },
      7309: (e, t, r) => {
        Promise.resolve().then(r.t.bind(r, 9404, 23));
      },
      7764: (e, t, r) => {
        (Promise.resolve().then(r.bind(r, 9596)),
          Promise.resolve().then(r.bind(r, 108)));
      },
      9596: (e, t, r) => {
        "use strict";
        r.d(t, { BottomNav: () => i });
        var n = r(326),
          s = r(434),
          o = r(5047);
        let a = [
          { href: "/", icon: "\uD83C\uDFE0", label: "Главная" },
          { href: "/catalog", icon: "\uD83D\uDDC2", label: "Каталог" },
          { href: "/search", icon: "\uD83D\uDD0D", label: "Поиск" },
          { href: "/add", icon: "＋", label: "Добавить" },
          { href: "/more", icon: "⋯", label: "Ещё" },
        ];
        function i() {
          let e = (0, o.usePathname)();
          return "/onboarding" === e
            ? null
            : n.jsx("nav", {
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
                children: a.map((t) => {
                  let r = "/" === t.href ? "/" === e : e.startsWith(t.href),
                    o = "/add" === t.href;
                  return (0, n.jsxs)(
                    s.default,
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
                        n.jsx("span", {
                          style: {
                            fontSize: o ? "22px" : "20px",
                            lineHeight: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: o ? "36px" : "auto",
                            height: o ? "36px" : "auto",
                            borderRadius: o ? "50%" : 0,
                            background: o ? "var(--blue)" : "transparent",
                            color: o ? "#fff" : "inherit",
                            marginBottom: o ? "2px" : 0,
                          },
                          children: t.icon,
                        }),
                        n.jsx("span", {
                          style: {
                            fontSize: "10px",
                            fontWeight: r ? 600 : 400,
                            color: r ? "var(--blue)" : "var(--text-muted)",
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
      108: (e, t, r) => {
        "use strict";
        (r.d(t, { OnboardingGate: () => s }), r(7577));
        var n = r(5047);
        function s() {
          return ((0, n.useRouter)(), (0, n.usePathname)(), null);
        }
      },
      7371: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => s.a });
        var n = r(1812),
          s = r.n(n);
      },
      1812: (e, t, r) => {
        "use strict";
        let { createProxy: n } = r(8570);
        e.exports = n(
          "/Users/kostiantyn/Downloads/bratislava-app/node_modules/next/dist/client/link.js",
        );
      },
      9176: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => f, metadata: () => x }));
        var n = r(9510);
        r(5023);
        var s = r(8570);
        let o = (0, s.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/layout/BottomNav.tsx`,
          ),
          { __esModule: a, $$typeof: i } = o;
        o.default;
        let l = (0, s.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/layout/BottomNav.tsx#BottomNav`,
          ),
          d = (0, s.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/OnboardingGate.tsx`,
          ),
          { __esModule: c, $$typeof: p } = d;
        d.default;
        let u = (0, s.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/OnboardingGate.tsx#OnboardingGate`,
          ),
          x = {
            title: "Свои в Братиславе",
            description: "Русскоязычное сообщество в Братиславе",
          };
        function f({ children: e }) {
          return (0, n.jsxs)("html", {
            lang: "ru",
            children: [
              n.jsx("head", {
                children: n.jsx("script", {
                  src: "https://telegram.org/js/telegram-web-app.js",
                }),
              }),
              (0, n.jsxs)("body", {
                children: [
                  n.jsx("script", {
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
                  (0, n.jsxs)("main", {
                    style: { paddingBottom: "80px", minHeight: "100vh" },
                    children: [n.jsx(u, {}), e],
                  }),
                  n.jsx(l, {}),
                ],
              }),
            ],
          });
        }
      },
      7645: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => a }));
        var n = r(9510),
          s = r(7371);
        let o = [
          {
            href: "/listings",
            icon: "\uD83D\uDCE2",
            label: "Объявления",
            desc: "Купить, продать, отдать",
            color: "#FFF8EE",
            border: "#F0D898",
          },
          {
            href: "/events",
            icon: "\uD83C\uDF89",
            label: "События",
            desc: "Места и встречи",
            color: "#F0FAF0",
            border: "#A8D8A8",
          },
          {
            href: "/jobs",
            icon: "\uD83D\uDCBC",
            label: "Работа",
            desc: "Вакансии и резюме",
            color: "#EEF5EE",
            border: "#A8C8A8",
          },
          {
            href: "/housing",
            icon: "\uD83C\uDFE0",
            label: "Жильё",
            desc: "Аренда, покупка, соседи",
            color: "#F5F0FF",
            border: "#C8A8E8",
          },
          {
            href: "/blacklist",
            icon: "⚠️",
            label: "Чёрный список",
            desc: "Мошенники и кидалы",
            color: "#0F1923",
            border: "#2A3540",
          },
        ];
        function a() {
          return (0, n.jsxs)("div", {
            children: [
              n.jsx("div", {
                style: { background: "var(--blue)", padding: "24px 20px 20px" },
                children: n.jsx("h1", {
                  style: {
                    margin: 0,
                    color: "#fff",
                    fontSize: "22px",
                    fontFamily: "Unbounded, sans-serif",
                  },
                  children: "Разделы",
                }),
              }),
              n.jsx("div", {
                style: {
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                },
                children: o.map((e) =>
                  n.jsx(
                    s.default,
                    {
                      href: e.href,
                      style: { textDecoration: "none" },
                      children: (0, n.jsxs)("div", {
                        style: {
                          background: e.color,
                          border: `1px solid ${e.border}`,
                          borderRadius: "var(--radius)",
                          padding: "18px 20px",
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                        },
                        children: [
                          n.jsx("span", {
                            style: { fontSize: "28px", lineHeight: 1 },
                            children: e.icon,
                          }),
                          (0, n.jsxs)("div", {
                            children: [
                              n.jsx("div", {
                                style: {
                                  fontWeight: 700,
                                  fontSize: "15px",
                                  color:
                                    "/blacklist" === e.href
                                      ? "#fff"
                                      : "var(--text)",
                                  fontFamily: "Unbounded, sans-serif",
                                },
                                children: e.label,
                              }),
                              n.jsx("div", {
                                style: {
                                  fontSize: "13px",
                                  marginTop: "2px",
                                  color:
                                    "/blacklist" === e.href
                                      ? "rgba(255,255,255,0.5)"
                                      : "var(--text-muted)",
                                },
                                children: e.desc,
                              }),
                            ],
                          }),
                          n.jsx("span", {
                            style: {
                              marginLeft: "auto",
                              fontSize: "18px",
                              color:
                                "/blacklist" === e.href
                                  ? "rgba(255,255,255,0.4)"
                                  : "var(--text-muted)",
                            },
                            children: "›",
                          }),
                        ],
                      }),
                    },
                    e.href,
                  ),
                ),
              }),
            ],
          });
        }
      },
      5023: () => {},
    }));
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [24], () => r(1076));
  module.exports = n;
})();
