import "dotenv/config";
import { Telegraf, Markup } from "telegraf";

const BOT_TOKEN = process.env.BOT_TOKEN;
const WEBAPP_URL = process.env.WEBAPP_URL;

if (!BOT_TOKEN) throw new Error("BOT_TOKEN is required");
if (!WEBAPP_URL) throw new Error("WEBAPP_URL is required");

const bot = new Telegraf(BOT_TOKEN as string);
const APP_URL = WEBAPP_URL as string;

const MAIN_KEYBOARD = Markup.inlineKeyboard([
  [
    Markup.button.webApp("🗂 Каталог", `${APP_URL}/catalog`),
    Markup.button.webApp("📢 Объявления", `${APP_URL}/listings`),
  ],
  [
    Markup.button.webApp("🎉 События", `${APP_URL}/events`),
    Markup.button.webApp("⚠️ Чёрный список", `${APP_URL}/blacklist`),
  ],
  [Markup.button.webApp("➕ Добавить запись", `${APP_URL}/add`)],
]);

function sectionButton(label: string, path: string) {
  return Markup.inlineKeyboard([
    [Markup.button.webApp(label, `${APP_URL}${path}`)],
  ]);
}

bot.start(async (ctx) => {
  await bot.telegram.setChatMenuButton({
    chatId: ctx.chat.id,
    menuButton: {
      type: "web_app",
      text: "🏠 Открыть",
      web_app: { url: APP_URL },
    },
  });

  const name = ctx.from.first_name ?? "друг";
  const text =
    `👋 <b>Привет, ${name}!</b>\n\n` +
    `Добро пожаловать в <b>Свои в Братиславе</b> — сообщество русскоязычных жителей города.\n\n` +
    `<b>Что здесь есть:</b>\n` +
    `🗂 <b>Каталог</b> — врачи, юристы, мастера, репетиторы\n` +
    `📢 <b>Объявления</b> — купить, продать, отдать, снять\n` +
    `🎉 <b>События</b> — встречи, места, мероприятия\n` +
    `⚠️ <b>Чёрный список</b> — осторожно, кидалы\n\n` +
    `Выбери раздел 👇`;

  return ctx.reply(text, { parse_mode: "HTML", ...MAIN_KEYBOARD });
});

bot.help((ctx) => {
  const text =
    `<b>Команды бота:</b>\n\n` +
    `/start — главное меню\n` +
    `/catalog — каталог специалистов\n` +
    `/listings — объявления\n` +
    `/events — события и места\n` +
    `/blacklist — чёрный список\n` +
    `/add — добавить запись\n\n` +
    `Или нажми кнопку <b>🏠 Открыть</b> рядом со строкой ввода 👇`;

  return ctx.reply(text, { parse_mode: "HTML", ...MAIN_KEYBOARD });
});

bot.command("catalog", (ctx) =>
  ctx.reply(
    `🗂 <b>Каталог специалистов</b>\n\nНайди своего врача, юриста, мастера или репетитора среди русскоязычных специалистов Братиславы.`,
    { parse_mode: "HTML", ...sectionButton("🗂 Открыть каталог", "/catalog") },
  ),
);

bot.command("listings", (ctx) =>
  ctx.reply(
    `📢 <b>Объявления</b>\n\nКупи, продай, отдай или найди нужную вещь в сообществе. Без посредников, только свои.`,
    {
      parse_mode: "HTML",
      ...sectionButton("📢 Открыть объявления", "/listings"),
    },
  ),
);

bot.command("events", (ctx) =>
  ctx.reply(
    `🎉 <b>События и места</b>\n\nВстречи сообщества, интересные места в городе и мероприятия для русскоязычных жителей Братиславы.`,
    { parse_mode: "HTML", ...sectionButton("🎉 Открыть события", "/events") },
  ),
);

bot.command("blacklist", (ctx) =>
  ctx.reply(
    `⚠️ <b>Чёрный список</b>\n\nМошенники, недобросовестные работодатели и арендодатели. Проверь перед тем как доверять.`,
    {
      parse_mode: "HTML",
      ...sectionButton("⚠️ Открыть чёрный список", "/blacklist"),
    },
  ),
);

bot.command("add", (ctx) =>
  ctx.reply(
    `➕ <b>Добавить запись</b>\n\nЗнаешь хорошего специалиста? Продаёшь что-то? Организуешь встречу?\n\nПомоги сообществу расти 🙌`,
    { parse_mode: "HTML", ...sectionButton("➕ Добавить", "/add") },
  ),
);

bot.on("message", (ctx) =>
  ctx.reply("Используй /start чтобы открыть меню 👇", MAIN_KEYBOARD),
);

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

bot.launch().then(() => console.log("✅ Bot is running"));
