import { Telegraf, Markup } from 'telegraf'
import 'dotenv/config'

const BOT_TOKEN = process.env.BOT_TOKEN
const WEBAPP_URL = process.env.WEBAPP_URL

if (!BOT_TOKEN) throw new Error('BOT_TOKEN is required')
if (!WEBAPP_URL) throw new Error('WEBAPP_URL is required')

const bot = new Telegraf(BOT_TOKEN)

// Open WebApp button — reused in multiple places
const openButton = Markup.inlineKeyboard([
  Markup.button.webApp('🗂 Открыть приложение', WEBAPP_URL)
])

// /start
bot.start(ctx => ctx.reply(
  `Привет, ${ctx.from.first_name}! 👋\n\nЭто сообщество русскоязычных жителей Братиславы.\n\n` +
  `Здесь ты найдёшь:\n` +
  `🗂 Специалистов — врачей, юристов, мастеров\n` +
  `📢 Объявления — купить, продать, отдать\n` +
  `🎉 События и места для своих\n`,
  openButton
))

// /help
bot.help(ctx => ctx.reply(
  `Команды:\n\n` +
  `/start — главное меню\n` +
  `/catalog — каталог специалистов\n` +
  `/listings — объявления\n` +
  `/events — события и места\n` +
  `/add — добавить запись\n`,
  openButton
))

// Shortcuts that open WebApp on specific tab
// WebApp URL with hash — Next.js читает его на клиенте
bot.command('catalog', ctx => ctx.reply(
  'Каталог специалистов 🗂',
  Markup.inlineKeyboard([
    Markup.button.webApp('Открыть каталог', `${WEBAPP_URL}/catalog`)
  ])
))

bot.command('listings', ctx => ctx.reply(
  'Объявления 📢',
  Markup.inlineKeyboard([
    Markup.button.webApp('Открыть объявления', `${WEBAPP_URL}/listings`)
  ])
))

bot.command('events', ctx => ctx.reply(
  'События и места 🎉',
  Markup.inlineKeyboard([
    Markup.button.webApp('Открыть события', `${WEBAPP_URL}/events`)
  ])
))

bot.command('add', ctx => ctx.reply(
  'Добавить запись ➕',
  Markup.inlineKeyboard([
    Markup.button.webApp('Добавить', `${WEBAPP_URL}/add`)
  ])
))

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

bot.launch().then(() => {
  console.log('✅ Bot is running')
})
