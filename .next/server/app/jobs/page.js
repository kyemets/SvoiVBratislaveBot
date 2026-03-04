(() => {
  var e = {};
  ((e.id = 109),
    (e.ids = [109]),
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
      6183: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => x,
            originalPathname: () => c,
            pages: () => d,
            routeModule: () => u,
            tree: () => p,
          }),
          r(8485),
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
        let p = [
            "",
            {
              children: [
                "jobs",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 8485)),
                        "/Users/kostiantyn/Downloads/bratislava-app/src/app/jobs/page.tsx",
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
          d = [
            "/Users/kostiantyn/Downloads/bratislava-app/src/app/jobs/page.tsx",
          ],
          c = "/jobs/page",
          x = { require: r, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/jobs/page",
              pathname: "/jobs",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: p },
          });
      },
      4927: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 1862));
      },
      1862: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => p }));
        var s = r(326),
          n = r(7577),
          a = r(434),
          o = r(1193),
          i = r(5342),
          l = r(2068);
        function p() {
          let [e, t] = (0, n.useState)("all"),
            r = "all" === e ? o.WN : o.WN.filter((t) => t.type === e);
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsxs)("div", {
                style: { background: "#1A3A2A", padding: "24px 20px 0" },
                children: [
                  s.jsx("h1", {
                    style: {
                      margin: "0 0 16px",
                      color: "#fff",
                      fontSize: "22px",
                      fontFamily: "Unbounded, sans-serif",
                    },
                    children: "\uD83D\uDCBC Работа",
                  }),
                  s.jsx("div", {
                    style: {
                      display: "flex",
                      gap: "8px",
                      paddingBottom: "16px",
                    },
                    children: ["all", "vacancy", "resume"].map((r) =>
                      s.jsx(
                        "button",
                        {
                          onClick: () => t(r),
                          style: {
                            flexShrink: 0,
                            padding: "7px 16px",
                            borderRadius: "100px",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "13px",
                            fontWeight: 600,
                            background:
                              e === r ? "#fff" : "rgba(255,255,255,0.15)",
                            color: e === r ? "#1A3A2A" : "#fff",
                          },
                          children: "all" === r ? "Все" : i.wW[r],
                        },
                        r,
                      ),
                    ),
                  }),
                ],
              }),
              s.jsx("div", {
                style: {
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                },
                children: r.map((e) =>
                  s.jsx(
                    a.default,
                    {
                      href: `/jobs/${e.id}`,
                      style: { textDecoration: "none" },
                      children: s.jsx(l.Card, {
                        children: (0, s.jsxs)("div", {
                          style: { padding: "16px" },
                          children: [
                            (0, s.jsxs)("div", {
                              style: {
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "8px",
                                marginBottom: "8px",
                              },
                              children: [
                                s.jsx("div", {
                                  style: {
                                    fontWeight: 700,
                                    fontSize: "15px",
                                    flex: 1,
                                  },
                                  children: e.title,
                                }),
                                s.jsx(l.Badge, {
                                  color:
                                    "vacancy" === e.type
                                      ? "#EEF3FA"
                                      : "#F0FAF0",
                                  textColor:
                                    "vacancy" === e.type
                                      ? "#1B3F6B"
                                      : "#2D7A2D",
                                  children: i.wW[e.type],
                                }),
                              ],
                            }),
                            e.company &&
                              (0, s.jsxs)("div", {
                                style: {
                                  fontSize: "13px",
                                  color: "var(--text-muted)",
                                  marginBottom: "4px",
                                },
                                children: ["\uD83C\uDFE2 ", e.company],
                              }),
                            (0, s.jsxs)("div", {
                              style: {
                                display: "flex",
                                gap: "8px",
                                flexWrap: "wrap",
                                marginBottom: "8px",
                              },
                              children: [
                                e.salary &&
                                  s.jsx("span", {
                                    style: {
                                      fontSize: "13px",
                                      fontWeight: 700,
                                      color: "#1A3A2A",
                                    },
                                    children: e.salary,
                                  }),
                                e.remote &&
                                  s.jsx(l.Badge, {
                                    color: "#F0FAF0",
                                    textColor: "#2D7A2D",
                                    children: "\uD83C\uDF10 Удалённо",
                                  }),
                              ],
                            }),
                            s.jsx("p", {
                              style: {
                                margin: 0,
                                fontSize: "13px",
                                color: "var(--text-muted)",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              },
                              children: e.description,
                            }),
                          ],
                        }),
                      }),
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          });
        }
      },
      8485: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, { $$typeof: () => o, __esModule: () => a, default: () => i }));
        var s = r(8570);
        let n = (0, s.createProxy)(
            String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/app/jobs/page.tsx`,
          ),
          { __esModule: a, $$typeof: o } = n;
        n.default;
        let i = (0, s.createProxy)(
          String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/app/jobs/page.tsx#default`,
        );
      },
    }));
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [24, 359], () => r(6183));
  module.exports = s;
})();
