(() => {
  var e = {};
  ((e.id = 43),
    (e.ids = [43]),
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
      829: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => p,
            originalPathname: () => u,
            pages: () => c,
            routeModule: () => x,
            tree: () => d,
          }),
          r(7445),
          r(9176),
          r(5866));
        var s = r(3191),
          n = r(8716),
          a = r(7922),
          o = r.n(a),
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
                "catalog",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 7445)),
                        "/Users/kostiantyn/Downloads/bratislava-app/src/app/catalog/page.tsx",
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
            "/Users/kostiantyn/Downloads/bratislava-app/src/app/catalog/page.tsx",
          ],
          u = "/catalog/page",
          p = { require: r, loadChunk: () => Promise.resolve() },
          x = new s.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/catalog/page",
              pathname: "/catalog",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      2657: (e, t, r) => {
        (Promise.resolve().then(r.t.bind(r, 9404, 23)),
          Promise.resolve().then(r.bind(r, 2068)));
      },
      2068: (e, t, r) => {
        "use strict";
        r.d(t, { Badge: () => o, Card: () => n, PageHeader: () => a });
        var s = r(326);
        function n({ children: e, onClick: t, style: r }) {
          return s.jsx("div", {
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
        function a({ title: e, subtitle: t }) {
          return (0, s.jsxs)("div", {
            style: { padding: "24px 20px 16px", background: "var(--blue)" },
            children: [
              s.jsx("h1", {
                style: {
                  margin: 0,
                  fontSize: "22px",
                  color: "#fff",
                  fontFamily: "Unbounded, sans-serif",
                },
                children: e,
              }),
              t &&
                s.jsx("p", {
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
        function o({
          children: e,
          color: t = "var(--blue-muted)",
          textColor: r = "var(--blue)",
        }) {
          return s.jsx("span", {
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
      7445: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => d }));
        var s = r(9510),
          n = r(7371),
          a = r(63),
          o = r(7351),
          i = r(3718);
        let l = Object.keys(o.Hs);
        function d() {
          return (0, s.jsxs)("div", {
            children: [
              s.jsx(i.mr, {
                title: "Каталог",
                subtitle: "Найди своего специалиста",
              }),
              s.jsx("div", {
                style: { padding: "20px 16px" },
                children: s.jsx("div", {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                  },
                  children: l.map((e) => {
                    let t = a.jt.filter((t) => t.category === e).length;
                    return s.jsx(
                      n.default,
                      {
                        href: `/catalog/${e}`,
                        style: { textDecoration: "none" },
                        children: (0, s.jsxs)(i.Zb, {
                          style: { padding: "20px 16px" },
                          children: [
                            s.jsx("div", {
                              style: { fontSize: "32px", marginBottom: "10px" },
                              children: o.gO[e],
                            }),
                            s.jsx("div", {
                              style: {
                                fontWeight: 700,
                                fontSize: "14px",
                                fontFamily: "Unbounded, sans-serif",
                                color: "var(--text)",
                              },
                              children: o.Hs[e],
                            }),
                            (0, s.jsxs)("div", {
                              style: {
                                fontSize: "12px",
                                color: "var(--text-muted)",
                                marginTop: "4px",
                              },
                              children: [
                                t,
                                " ",
                                1 === t
                                  ? "специалист"
                                  : t < 5
                                    ? "специалиста"
                                    : "специалистов",
                              ],
                            }),
                          ],
                        }),
                      },
                      e,
                    );
                  }),
                }),
              }),
            ],
          });
        }
      },
      3718: (e, t, r) => {
        "use strict";
        r.d(t, { Ct: () => d, Zb: () => i, mr: () => l });
        var s = r(8570);
        let n = (0, s.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/index.tsx`,
          ),
          { __esModule: a, $$typeof: o } = n;
        n.default;
        let i = (0, s.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/index.tsx#Card`,
          ),
          l = (0, s.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/index.tsx#PageHeader`,
          ),
          d = (0, s.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/index.tsx#Badge`,
          );
      },
      7351: (e, t, r) => {
        "use strict";
        r.d(t, {
          Hs: () => s,
          gO: () => n,
          tP: () => i,
          vB: () => o,
          wW: () => a,
        });
        let s = {
            doctors: "Врачи",
            lawyers: "Юристы",
            masters: "Мастера",
            nannies: "Няни",
            tutors: "Репетиторы",
            accountants: "Бухгалтеры",
            other: "Другое",
          },
          n = {
            doctors: "\uD83E\uDE7A",
            lawyers: "⚖️",
            masters: "\uD83D\uDD27",
            nannies: "\uD83D\uDC76",
            tutors: "\uD83D\uDCDA",
            accountants: "\uD83D\uDCCA",
            other: "✨",
          },
          a = { vacancy: "Вакансия", resume: "Резюме" },
          o = {
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
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [24, 867], () => r(829));
  module.exports = s;
})();
