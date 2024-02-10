import { Telegraf, Markup } from 'telegraf'

const token = '6896568845:AAG4rWUGl-k-YfZXbipCt-2v-47OQxGb-Qw'
const webAppUrl = 'https://create-meme-telegram-bot.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
    'Welcome! Press button to enter chat',
    Markup.keyboard([Markup.button.webApp('Enter chat', webAppUrl)])
  )
})

bot.launch()
