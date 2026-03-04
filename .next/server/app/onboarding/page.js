(() => {
  var e = {};
  ((e.id = 461),
    (e.ids = [461]),
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
      375: (e, t, n) => {
        "use strict";
        (n.r(t),
          n.d(t, {
            GlobalError: () => s.a,
            __next_app__: () => u,
            originalPathname: () => c,
            pages: () => p,
            routeModule: () => x,
            tree: () => d,
          }),
          n(8435),
          n(9176),
          n(5866));
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
                "onboarding",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(n.bind(n, 8435)),
                        "/Users/kostiantyn/Downloads/bratislava-app/src/app/onboarding/page.tsx",
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
          p = [
            "/Users/kostiantyn/Downloads/bratislava-app/src/app/onboarding/page.tsx",
          ],
          c = "/onboarding/page",
          u = { require: n, loadChunk: () => Promise.resolve() },
          x = new r.AppPageRouteModule({
            definition: {
              kind: o.x.APP_PAGE,
              page: "/onboarding/page",
              pathname: "/onboarding",
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
      6343: (e, t, n) => {
        Promise.resolve().then(n.bind(n, 9985));
      },
      9985: (e, t, n) => {
        "use strict";
        (n.r(t), n.d(t, { default: () => i }));
        var r = n(326),
          o = n(5047),
          a = n(7577);
        let s = [
          {
            emoji: "\uD83D\uDC4B",
            title: "Свои в Братиславе",
            desc: "Сообщество русскоязычных жителей Братиславы. Здесь все говорят на твоём языке.",
          },
          {
            emoji: "\uD83D\uDDC2",
            title: "Найди своего специалиста",
            desc: "Врачи, юристы, мастера — люди из нашего сообщества, которым можно доверять.",
          },
          {
            emoji: "\uD83D\uDCBC",
            title: "Работа и жильё",
            desc: "Вакансии, резюме, аренда и продажа — всё в одном месте на русском языке.",
          },
          {
            emoji: "⚠️",
            title: "Будь осторожен",
            desc: "Чёрный список поможет избежать мошенников и недобросовестных работодателей.",
          },
        ];
        function i() {
          let e = (0, o.useRouter)(),
            [t, n] = (0, a.useState)(0),
            i = s[t],
            l = t === s.length - 1;
          return (0, r.jsxs)("div", {
            style: {
              minHeight: "100vh",
              background: "var(--blue)",
              display: "flex",
              flexDirection: "column",
              padding: "48px 24px 40px",
            },
            children: [
              !l &&
                r.jsx("button", {
                  onClick: function () {
                    (localStorage.setItem("onboarding_done", "1"), e.push("/"));
                  },
                  style: {
                    alignSelf: "flex-end",
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "14px",
                    cursor: "pointer",
                    padding: "4px",
                  },
                  children: "Пропустить",
                }),
              (0, r.jsxs)("div", {
                style: {
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                },
                children: [
                  r.jsx("div", {
                    style: {
                      fontSize: "80px",
                      marginBottom: "32px",
                      lineHeight: 1,
                    },
                    children: i.emoji,
                  }),
                  r.jsx("h1", {
                    style: {
                      margin: "0 0 16px",
                      color: "#fff",
                      fontSize: "26px",
                      fontFamily: "Unbounded, sans-serif",
                      lineHeight: 1.2,
                    },
                    children: i.title,
                  }),
                  r.jsx("p", {
                    style: {
                      margin: 0,
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "16px",
                      lineHeight: 1.6,
                      maxWidth: "280px",
                    },
                    children: i.desc,
                  }),
                ],
              }),
              r.jsx("div", {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  gap: "8px",
                  marginBottom: "32px",
                },
                children: s.map((e, n) =>
                  r.jsx(
                    "div",
                    {
                      style: {
                        width: n === t ? "24px" : "8px",
                        height: "8px",
                        borderRadius: "100px",
                        transition: "width 0.3s ease",
                        background: n === t ? "#fff" : "rgba(255,255,255,0.3)",
                      },
                    },
                    n,
                  ),
                ),
              }),
              r.jsx("button", {
                onClick: function () {
                  t < s.length - 1
                    ? n(t + 1)
                    : (localStorage.setItem("onboarding_done", "1"),
                      e.push("/"));
                },
                style: {
                  background: "#fff",
                  color: "var(--blue)",
                  border: "none",
                  padding: "17px",
                  borderRadius: "var(--radius)",
                  fontSize: "16px",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "Unbounded, sans-serif",
                },
                children: l ? "Начать →" : "Далее",
              }),
            ],
          });
        }
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
      9176: (e, t, n) => {
        "use strict";
        (n.r(t), n.d(t, { default: () => g, metadata: () => x }));
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
          { __esModule: p, $$typeof: c } = d;
        d.default;
        let u = (0, o.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/OnboardingGate.tsx#OnboardingGate`,
          ),
          x = {
            title: "Свои в Братиславе",
            description: "Русскоязычное сообщество в Братиславе",
          };
        function g({ children: e }) {
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
                    children: [r.jsx(u, {}), e],
                  }),
                  r.jsx(l, {}),
                ],
              }),
            ],
          });
        }
      },
      8435: (e, t, n) => {
        "use strict";
        (n.r(t),
          n.d(t, { $$typeof: () => s, __esModule: () => a, default: () => i }));
        var r = n(8570);
        let o = (0, r.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/app/onboarding/page.tsx`,
          ),
          { __esModule: a, $$typeof: s } = o;
        o.default;
        let i = (0, r.createProxy)(
          String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/app/onboarding/page.tsx#default`,
        );
      },
      5023: () => {},
    }));
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var n = (e) => t((t.s = e)),
    r = t.X(0, [24], () => n(375));
  module.exports = r;
})();
