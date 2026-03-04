(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [311],
  {
    1167: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 297));
    },
    7138: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return n.a;
        },
      });
      var a = r(231),
        n = r.n(a);
    },
    297: function (e, t, r) {
      "use strict";
      (r.r(t),
        r.d(t, {
          default: function () {
            return p;
          },
        }));
      var a = r(7437),
        n = r(2265),
        i = r(7138),
        o = r(9774),
        d = r(4451),
        s = r(8347);
      let c = Object.keys(d.Bv),
        l = {
          sell: { bg: "#EEF3FA", text: "#1B3F6B" },
          buy: { bg: "#F0FAF0", text: "#2D7A2D" },
          free: { bg: "#FFF0F0", text: "#C0392B" },
          wanted: { bg: "#FFF8EE", text: "#B8860B" },
          rent: { bg: "#F5F0FF", text: "#6B2FA0" },
          rentout: { bg: "#F0F8FF", text: "#1A6EA0" },
        };
      function p() {
        let [e, t] = (0, n.useState)("all"),
          r = "all" === e ? o.RH : o.RH.filter((t) => t.type === e);
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsxs)("div", {
              style: { background: "var(--blue)", padding: "24px 20px 0" },
              children: [
                (0, a.jsx)("h1", {
                  style: {
                    margin: "0 0 16px",
                    color: "#fff",
                    fontSize: "22px",
                    fontFamily: "Unbounded, sans-serif",
                  },
                  children: "Объявления",
                }),
                (0, a.jsxs)("div", {
                  style: {
                    display: "flex",
                    gap: "8px",
                    overflowX: "auto",
                    paddingBottom: "16px",
                    scrollbarWidth: "none",
                  },
                  children: [
                    (0, a.jsx)("button", {
                      onClick: () => t("all"),
                      style: {
                        flexShrink: 0,
                        padding: "7px 16px",
                        borderRadius: "100px",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "13px",
                        fontWeight: 600,
                        background:
                          "all" === e ? "#fff" : "rgba(255,255,255,0.15)",
                        color: "all" === e ? "var(--blue)" : "#fff",
                      },
                      children: "Все",
                    }),
                    c.map((r) =>
                      (0, a.jsx)(
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
                            color: e === r ? "var(--blue)" : "#fff",
                          },
                          children: d.Bv[r],
                        },
                        r,
                      ),
                    ),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              style: {
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              },
              children: r.map((e) => {
                let t = l[e.type];
                return (0, a.jsx)(
                  i.default,
                  {
                    href: "/listings/".concat(e.id),
                    style: { textDecoration: "none" },
                    children: (0, a.jsxs)(s.Card, {
                      children: [
                        e.photo &&
                          (0, a.jsx)("img", {
                            src: e.photo,
                            alt: "",
                            style: {
                              width: "100%",
                              height: "160px",
                              objectFit: "cover",
                            },
                          }),
                        (0, a.jsxs)("div", {
                          style: { padding: "14px 16px" },
                          children: [
                            (0, a.jsxs)("div", {
                              style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                gap: "8px",
                              },
                              children: [
                                (0, a.jsx)("div", {
                                  style: {
                                    fontWeight: 700,
                                    fontSize: "15px",
                                    flex: 1,
                                  },
                                  children: e.title,
                                }),
                                e.price &&
                                  (0, a.jsxs)("div", {
                                    style: {
                                      fontWeight: 700,
                                      fontSize: "16px",
                                      color: "var(--blue)",
                                      flexShrink: 0,
                                    },
                                    children: [e.price, "€"],
                                  }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              style: {
                                margin: "6px 0 10px",
                                fontSize: "13px",
                                color: "var(--text-muted)",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              },
                              children: e.description,
                            }),
                            (0, a.jsx)(s.Badge, {
                              color: t.bg,
                              textColor: t.text,
                              children: d.Bv[e.type],
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  e.id,
                );
              }),
            }),
          ],
        });
      }
    },
    8347: function (e, t, r) {
      "use strict";
      r.d(t, {
        Badge: function () {
          return o;
        },
        Card: function () {
          return n;
        },
        PageHeader: function () {
          return i;
        },
      });
      var a = r(7437);
      function n(e) {
        let { children: t, onClick: r, style: n } = e;
        return (0, a.jsx)("div", {
          onClick: r,
          style: {
            background: "var(--card)",
            borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
            overflow: "hidden",
            cursor: r ? "pointer" : "default",
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
            ...n,
          },
          onMouseDown: (e) =>
            r && (e.currentTarget.style.transform = "scale(0.98)"),
          onMouseUp: (e) => r && (e.currentTarget.style.transform = "scale(1)"),
          onTouchStart: (e) =>
            r && (e.currentTarget.style.transform = "scale(0.98)"),
          onTouchEnd: (e) =>
            r && (e.currentTarget.style.transform = "scale(1)"),
          children: t,
        });
      }
      function i(e) {
        let { title: t, subtitle: r } = e;
        return (0, a.jsxs)("div", {
          style: { padding: "24px 20px 16px", background: "var(--blue)" },
          children: [
            (0, a.jsx)("h1", {
              style: {
                margin: 0,
                fontSize: "22px",
                color: "#fff",
                fontFamily: "Unbounded, sans-serif",
              },
              children: t,
            }),
            r &&
              (0, a.jsx)("p", {
                style: {
                  margin: "6px 0 0",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "13px",
                },
                children: r,
              }),
          ],
        });
      }
      function o(e) {
        let {
          children: t,
          color: r = "var(--blue-muted)",
          textColor: n = "var(--blue)",
        } = e;
        return (0, a.jsx)("span", {
          style: {
            display: "inline-block",
            padding: "3px 10px",
            borderRadius: "100px",
            background: r,
            color: n,
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.02em",
          },
          children: t,
        });
      }
      r(2265);
    },
    9774: function (e, t, r) {
      "use strict";
      r.d(t, {
        FP: function () {
          return i;
        },
        H: function () {
          return d;
        },
        RH: function () {
          return n;
        },
        WN: function () {
          return o;
        },
        jt: function () {
          return a;
        },
      });
      let a = [
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
        n = [
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
        i = [
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
        o = [
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
        d = [
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
    4451: function (e, t, r) {
      "use strict";
      r.d(t, {
        Bv: function () {
          return i;
        },
        Hs: function () {
          return a;
        },
        Zz: function () {
          return d;
        },
        gO: function () {
          return n;
        },
        wW: function () {
          return o;
        },
      });
      let a = {
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
        i = {
          sell: "Продам",
          buy: "Куплю",
          free: "Отдам",
          wanted: "Ищу",
          rent: "Сниму",
          rentout: "Сдам",
        },
        o = { vacancy: "Вакансия", resume: "Резюме" },
        d = { rent: "Аренда", buy: "Продажа", roommate: "Ищу соседа" };
    },
  },
  function (e) {
    (e.O(0, [231, 971, 23, 744], function () {
      return e((e.s = 1167));
    }),
      (_N_E = e.O()));
  },
]);
