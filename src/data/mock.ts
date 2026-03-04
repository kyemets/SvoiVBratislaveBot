import type { Specialist, Listing, Event } from "@/types";

export const SPECIALISTS: Specialist[] = [
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
];

export const LISTINGS: Listing[] = [
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
      "Уютная комната 14м² в квартире с двумя соседями. Рядом метро. Только для порядочных людей.",
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
];

export const EVENTS: Event[] = [
  {
    id: "e1",
    title: "Встреча русскоязычного сообщества",
    description:
      "Ежемесячная встреча в кафе. Знакомимся, общаемся, делимся опытом жизни в Братиславе. Все желающие приветствуются.",
    date: "2024-03-20T18:00:00",
    address: "Café Verne, Obchodná 18",
    isPlace: false,
    addedBy: "user_14",
    createdAt: "2024-03-10",
  },
  {
    id: "e2",
    title: "Русская библиотека",
    description:
      "Небольшая библиотека с книгами на русском. Можно взять домой или читать на месте. Работает по субботам.",
    address: "Štefánikova 25, каждую субботу 10:00–14:00",
    isPlace: true,
    addedBy: "user_15",
    createdAt: "2024-02-01",
  },
  {
    id: "e3",
    title: "Мастер-класс по словацкому языку",
    description:
      "Разговорный клуб для начинающих. Ведёт носитель языка, занятия проходят в неформальной обстановке.",
    date: "2024-03-22T17:30:00",
    address: "Coworking Hub, Primaciálne námestie 1",
    isPlace: false,
    addedBy: "user_16",
    createdAt: "2024-03-08",
  },
  {
    id: "e4",
    title: "Детская площадка у Дуная",
    description:
      "Место где собираются русскоязычные семьи с детьми по выходным. Неформально, без записи.",
    address: "Nábrežie arm. gen. L. Svobodu, рядом с фонтаном",
    isPlace: true,
    addedBy: "user_17",
    createdAt: "2024-02-15",
  },
];

import type { BlacklistEntry } from "@/types";

export const BLACKLIST: BlacklistEntry[] = [
  {
    id: "b1",
    name: "Маклер Виктор",
    type: "landlord",
    description:
      "Берёт залог за квартиру, показывает её, потом исчезает. Работает в районе Petržalka. Несколько человек пострадали.",
    contact: "@viktor_realtor",
    addedBy: "user_20",
    createdAt: "2024-03-01",
  },
  {
    id: "b2",
    name: 'IT стартап "QuickDev s.r.o."',
    type: "employer",
    description:
      'Не выплатили зарплату за 2 месяца троим разработчикам. Обещают "вот-вот" уже полгода. Офис на Bajkalská.',
    addedBy: "user_21",
    createdAt: "2024-03-05",
  },
  {
    id: "b3",
    name: "Андрей К.",
    type: "person",
    description:
      "Продаёт технику которой нет — берёт предоплату и пропадает. В объявлениях пишет с разных аккаунтов.",
    addedBy: "user_22",
    createdAt: "2024-03-08",
  },
  {
    id: "b4",
    name: 'Агентство переводов "TransSK"',
    type: "company",
    description:
      "Берут деньги за срочные переводы документов, затягивают на недели. На звонки не отвечают после оплаты.",
    addedBy: "user_23",
    createdAt: "2024-03-10",
  },
];
