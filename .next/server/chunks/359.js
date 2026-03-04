((exports.id = 359),
  (exports.ids = [359]),
  (exports.modules = {
    9363: (e, t, a) => {
      (Promise.resolve().then(a.t.bind(a, 2994, 23)),
        Promise.resolve().then(a.t.bind(a, 6114, 23)),
        Promise.resolve().then(a.t.bind(a, 9727, 23)),
        Promise.resolve().then(a.t.bind(a, 9671, 23)),
        Promise.resolve().then(a.t.bind(a, 1868, 23)),
        Promise.resolve().then(a.t.bind(a, 4759, 23)));
    },
    7764: (e, t, a) => {
      (Promise.resolve().then(a.bind(a, 9596)),
        Promise.resolve().then(a.bind(a, 108)));
    },
    9596: (e, t, a) => {
      "use strict";
      a.d(t, { BottomNav: () => n });
      var r = a(326),
        o = a(434),
        s = a(5047);
      let d = [
        { href: "/", icon: "\uD83C\uDFE0", label: "Главная" },
        { href: "/catalog", icon: "\uD83D\uDDC2", label: "Каталог" },
        { href: "/search", icon: "\uD83D\uDD0D", label: "Поиск" },
        { href: "/add", icon: "＋", label: "Добавить" },
        { href: "/more", icon: "⋯", label: "Ещё" },
      ];
      function n() {
        let e = (0, s.usePathname)();
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
              children: d.map((t) => {
                let a = "/" === t.href ? "/" === e : e.startsWith(t.href),
                  s = "/add" === t.href;
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
                          fontSize: s ? "22px" : "20px",
                          lineHeight: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: s ? "36px" : "auto",
                          height: s ? "36px" : "auto",
                          borderRadius: s ? "50%" : 0,
                          background: s ? "var(--blue)" : "transparent",
                          color: s ? "#fff" : "inherit",
                          marginBottom: s ? "2px" : 0,
                        },
                        children: t.icon,
                      }),
                      r.jsx("span", {
                        style: {
                          fontSize: "10px",
                          fontWeight: a ? 600 : 400,
                          color: a ? "var(--blue)" : "var(--text-muted)",
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
    108: (e, t, a) => {
      "use strict";
      (a.d(t, { OnboardingGate: () => o }), a(7577));
      var r = a(5047);
      function o() {
        return ((0, r.useRouter)(), (0, r.usePathname)(), null);
      }
    },
    2068: (e, t, a) => {
      "use strict";
      a.d(t, { Badge: () => d, Card: () => o, PageHeader: () => s });
      var r = a(326);
      function o({ children: e, onClick: t, style: a }) {
        return r.jsx("div", {
          onClick: t,
          style: {
            background: "var(--card)",
            borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
            overflow: "hidden",
            cursor: t ? "pointer" : "default",
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
            ...a,
          },
          onMouseDown: (e) =>
            t && (e.currentTarget.style.transform = "scale(0.98)"),
          onMouseUp: (e) => t && (e.currentTarget.style.transform = "scale(1)"),
          onTouchStart: (e) =>
            t && (e.currentTarget.style.transform = "scale(0.98)"),
          onTouchEnd: (e) =>
            t && (e.currentTarget.style.transform = "scale(1)"),
          children: e,
        });
      }
      function s({ title: e, subtitle: t }) {
        return (0, r.jsxs)("div", {
          style: { padding: "24px 20px 16px", background: "var(--blue)" },
          children: [
            r.jsx("h1", {
              style: {
                margin: 0,
                fontSize: "22px",
                color: "#fff",
                fontFamily: "Unbounded, sans-serif",
              },
              children: e,
            }),
            t &&
              r.jsx("p", {
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
      function d({
        children: e,
        color: t = "var(--blue-muted)",
        textColor: a = "var(--blue)",
      }) {
        return r.jsx("span", {
          style: {
            display: "inline-block",
            padding: "3px 10px",
            borderRadius: "100px",
            background: t,
            color: a,
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.02em",
          },
          children: e,
        });
      }
      a(7577);
    },
    1193: (e, t, a) => {
      "use strict";
      a.d(t, {
        FP: () => s,
        H: () => n,
        RH: () => o,
        WN: () => d,
        jt: () => r,
      });
      let r = [
          {
            id: "s1",
            name: "Анна Ковалёва",
            category: "doctors",
            description:
              "Терапевт, 12 лет опыта. Принимаю на русском и словацком. Помогу с направлениями к специалистам и разберусь с местной системой здравоохранения.",
            contact: "@anna_doc_ba",
            photo: "https://i.pravatar.cc/150?img=47",
            addedBy: "user_1",
            createdAt: "2024-01-15",
          },
          {
            id: "s2",
            name: "Дмитрий Лисов",
            category: "lawyers",
            description:
              "Специализируюсь на трудовом праве и вопросах ВНЖ/ПМЖ в Словакии. Консультирую по открытию бизнеса и налоговым вопросам.",
            contact: "@dmitry_law_sk",
            photo: "https://i.pravatar.cc/150?img=12",
            addedBy: "user_2",
            createdAt: "2024-01-20",
          },
          {
            id: "s3",
            name: "Сергей Майстер",
            category: "masters",
            description:
              "Сантехника, электрика, мелкий ремонт. Работаю качественно и по честным ценам. Выезжаю по всей Братиславе.",
            contact: "+421 900 123 456",
            photo: "https://i.pravatar.cc/150?img=33",
            addedBy: "user_3",
            createdAt: "2024-02-01",
          },
          {
            id: "s4",
            name: "Мария Петренко",
            category: "nannies",
            description:
              "Опыт с детьми от 1 до 8 лет. Могу забирать из садика/школы, помогать с домашними заданиями. Есть рекомендации.",
            contact: "@masha_nanny",
            photo: "https://i.pravatar.cc/150?img=44",
            addedBy: "user_4",
            createdAt: "2024-02-10",
          },
          {
            id: "s5",
            name: "Игорь Шевченко",
            category: "tutors",
            description:
              "Математика и физика для школьников и студентов. Готовлю к экзаменам. Онлайн или офлайн.",
            contact: "@igor_tutor_ba",
            photo: "https://i.pravatar.cc/150?img=57",
            addedBy: "user_5",
            createdAt: "2024-02-15",
          },
          {
            id: "s6",
            name: "Елена Волкова",
            category: "accountants",
            description:
              "Бухгалтерия для фрилансеров и малого бизнеса в Словакии. Помогу разобраться с налогами, SZCO, s.r.o.",
            contact: "@elena_buh_sk",
            photo: "https://i.pravatar.cc/150?img=25",
            addedBy: "user_6",
            createdAt: "2024-02-20",
          },
          {
            id: "s7",
            name: "Николай Бондарь",
            category: "doctors",
            description:
              "Стоматолог. Работаю в частной клинике в центре. Первичная консультация бесплатно для своих.",
            contact: "@kolia_dentist",
            photo: "https://i.pravatar.cc/150?img=60",
            addedBy: "user_7",
            createdAt: "2024-03-01",
          },
          {
            id: "s8",
            name: "Оксана Ткач",
            category: "masters",
            description:
              "Уборка квартир и офисов. Индивидуальный подход, собственные средства. Регулярно или разово.",
            contact: "@oksana_clean",
            photo: "https://i.pravatar.cc/150?img=38",
            addedBy: "user_8",
            createdAt: "2024-03-05",
          },
        ],
        o = [
          {
            id: "l1",
            type: "sell",
            title: "Детская коляска Bugaboo",
            description:
              "Почти новая, использовали 6 месяцев. Состояние отличное, все документы есть.",
            price: 350,
            photo:
              "https://images.unsplash.com/photo-1591016432367-d7e8b8b3ee74?w=400&q=80",
            contact: "@user_kolya",
            addedBy: "user_9",
            createdAt: "2024-03-10",
          },
          {
            id: "l2",
            type: "free",
            title: "Книги на русском языке",
            description:
              "Отдам коробку книг — классика, современная проза. Самовывоз из Petržalka.",
            contact: "@marina_ba",
            addedBy: "user_10",
            createdAt: "2024-03-11",
          },
          {
            id: "l3",
            type: "wanted",
            title: "Ищу велосипед для взрослого",
            description:
              "Нужен городской велосипед в хорошем состоянии, бюджет до 150€.",
            contact: "+421 911 222 333",
            addedBy: "user_11",
            createdAt: "2024-03-12",
          },
          {
            id: "l4",
            type: "rentout",
            title: "Сдаю комнату в Ružinov",
            description:
              "Уютная комната 14м\xb2 в квартире с двумя соседями. Рядом метро. Только для порядочных людей.",
            price: 450,
            contact: "@roman_room",
            addedBy: "user_12",
            createdAt: "2024-03-13",
          },
          {
            id: "l5",
            type: "sell",
            title: "iPhone 13 Pro, 256GB",
            description:
              "В отличном состоянии, со словацким чеком. Продаю в связи с переездом.",
            price: 600,
            photo:
              "https://images.unsplash.com/photo-1632633173522-47456de71b76?w=400&q=80",
            contact: "@iphone_seller",
            addedBy: "user_13",
            createdAt: "2024-03-14",
          },
        ],
        s = [
          {
            id: "e1",
            title: "Встреча русскоязычного сообщества",
            description:
              "Ежемесячная встреча в кафе. Знакомимся, общаемся, делимся опытом жизни в Братиславе. Все желающие приветствуются.",
            date: "2024-03-20T18:00:00",
            address: "Caf\xe9 Verne, Obchodn\xe1 18",
            isPlace: !1,
            addedBy: "user_14",
            createdAt: "2024-03-10",
          },
          {
            id: "e2",
            title: "Русская библиотека",
            description:
              "Небольшая библиотека с книгами на русском. Можно взять домой или читать на месте. Работает по субботам.",
            address: "Štef\xe1nikova 25, каждую субботу 10:00–14:00",
            isPlace: !0,
            addedBy: "user_15",
            createdAt: "2024-02-01",
          },
          {
            id: "e3",
            title: "Мастер-класс по словацкому языку",
            description:
              "Разговорный клуб для начинающих. Ведёт носитель языка, занятия проходят в неформальной обстановке.",
            date: "2024-03-22T17:30:00",
            address: "Coworking Hub, Primaci\xe1lne n\xe1mestie 1",
            isPlace: !1,
            addedBy: "user_16",
            createdAt: "2024-03-08",
          },
          {
            id: "e4",
            title: "Детская площадка у Дуная",
            description:
              "Место где собираются русскоязычные семьи с детьми по выходным. Неформально, без записи.",
            address: "N\xe1brežie arm. gen. L. Svobodu, рядом с фонтаном",
            isPlace: !0,
            addedBy: "user_17",
            createdAt: "2024-02-15",
          },
        ],
        d = [
          {
            id: "j1",
            type: "vacancy",
            title: "Водитель категории B/C",
            company: "Slovak Logistics s.r.o.",
            description:
              "Развозка товаров по Братиславе и окрестностям. Опыт от 1 года. Оформление официальное, зарплата вовремя.",
            salary: "1400–1700€",
            contact: "@slovak_logistics",
            remote: !1,
            addedBy: "user_30",
            createdAt: "2024-03-10",
          },
          {
            id: "j2",
            type: "vacancy",
            title: "Разработчик React / Next.js",
            company: "Стартап (удалённо)",
            description:
              "Ищем фронтенд-разработчика в небольшую команду. Проект интересный, стек современный. Оплата в евро.",
            salary: "2500–3500€",
            contact: "@dev_hiring_ba",
            remote: !0,
            addedBy: "user_31",
            createdAt: "2024-03-11",
          },
          {
            id: "j3",
            type: "resume",
            title: "Ищу работу — бухгалтер / финансист",
            description:
              "8 лет опыта, знаю словацкое законодательство, работала в s.r.o. Готова к частичной занятости или полной. Русский, словацкий, английский.",
            contact: "@irina_fin",
            remote: !1,
            addedBy: "user_32",
            createdAt: "2024-03-12",
          },
          {
            id: "j4",
            type: "vacancy",
            title: "Повар / помощник повара",
            company: "Ресторан в центре",
            description:
              "Русская и европейская кухня. Опыт обязателен. Условия обсуждаем лично. Легальное оформление.",
            salary: "1200–1500€",
            contact: "+421 902 345 678",
            remote: !1,
            addedBy: "user_33",
            createdAt: "2024-03-13",
          },
          {
            id: "j5",
            type: "resume",
            title: "Ищу работу — IT поддержка / системный администратор",
            description:
              "5 лет опыта в техподдержке и администрировании Windows/Linux. Есть ВНЖ, готов к работе сразу.",
            contact: "@sysadmin_ba",
            remote: !1,
            addedBy: "user_34",
            createdAt: "2024-03-14",
          },
        ],
        n = [
          {
            id: "h1",
            type: "rent",
            title: "2-комнатная квартира в Ružinov",
            description:
              "Светлая квартира 55м\xb2, свежий ремонт, вся техника. Рядом метро Ružinovsk\xe1. Только некурящие.",
            price: 950,
            address: "Ružinov, Bratislava",
            rooms: 2,
            photo:
              "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80",
            contact: "@apartment_ba",
            addedBy: "user_35",
            createdAt: "2024-03-10",
          },
          {
            id: "h2",
            type: "rent",
            title: "Комната в квартире с двумя соседями",
            description:
              "Комната 16м\xb2 в трёхкомнатной квартире. Соседи тихие, работающие. Petržalka, 10 мин до центра.",
            price: 420,
            address: "Petržalka, Bratislava",
            rooms: 1,
            contact: "@room_petrzalka",
            addedBy: "user_36",
            createdAt: "2024-03-11",
          },
          {
            id: "h3",
            type: "roommate",
            title: "Ищу соседа в 3-комнатную квартиру",
            description:
              "Занята одна комната, ищем третьего. Квартира большая, есть балкон. Старый город, удобно везде добираться.",
            price: 500,
            address: "Star\xe9 Mesto, Bratislava",
            contact: "@flatmate_search",
            addedBy: "user_37",
            createdAt: "2024-03-12",
          },
          {
            id: "h4",
            type: "buy",
            title: "Продаётся 3-комнатная квартира",
            description:
              "Просторная квартира 78м\xb2, хороший этаж, два балкона. Документы в порядке, собственник. Район Karlova Ves.",
            price: 185e3,
            address: "Karlova Ves, Bratislava",
            rooms: 3,
            photo:
              "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80",
            contact: "@sell_flat_ba",
            addedBy: "user_38",
            createdAt: "2024-03-13",
          },
        ];
    },
    5342: (e, t, a) => {
      "use strict";
      a.d(t, {
        Bv: () => s,
        Hs: () => r,
        Zz: () => n,
        gO: () => o,
        wW: () => d,
      });
      let r = {
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
        s = {
          sell: "Продам",
          buy: "Куплю",
          free: "Отдам",
          wanted: "Ищу",
          rent: "Сниму",
          rentout: "Сдам",
        },
        d = { vacancy: "Вакансия", resume: "Резюме" },
        n = { rent: "Аренда", buy: "Продажа", roommate: "Ищу соседа" };
    },
    9176: (e, t, a) => {
      "use strict";
      (a.r(t), a.d(t, { default: () => y, metadata: () => m }));
      var r = a(9510);
      a(5023);
      var o = a(8570);
      let s = (0, o.createProxy)(
          String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/layout/BottomNav.tsx`,
        ),
        { __esModule: d, $$typeof: n } = s;
      s.default;
      let i = (0, o.createProxy)(
          String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/layout/BottomNav.tsx#BottomNav`,
        ),
        c = (0, o.createProxy)(
          String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/OnboardingGate.tsx`,
        ),
        { __esModule: l, $$typeof: p } = c;
      c.default;
      let u = (0, o.createProxy)(
          String.raw`/Users/kostiantyn/Downloads/bratislava-app/src/components/ui/OnboardingGate.tsx#OnboardingGate`,
        ),
        m = {
          title: "Свои в Братиславе",
          description: "Русскоязычное сообщество в Братиславе",
        };
      function y({ children: e }) {
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
                r.jsx(i, {}),
              ],
            }),
          ],
        });
      }
    },
    5023: () => {},
  }));
