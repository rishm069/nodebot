const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome home!'))
bot.help((ctx) => ctx.reply('Send me a sticker')) 
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch((ctx) => ctx.reply('Welcome!'))

const testMenu = Telegraf.Extra
  .markdown()
  .markup((m) => m.inlineKeyboard([
    m.callbackButton('Test button', 'test')
  ]))

const aboutMenu = Telegraf.Extra
  .markdown()
  .markup((m) => m.keyboard([
    m.callbackButton('⬅️ Back')
  ]).resize())

app.hears('test', (ctx) => {
  ctx.reply('test message', testMenu).then(() => {
    ctx.reply('about', aboutMenu)
  })
})

app.action('test', (ctx) => ctx.answerCallbackQuery('Yay!'))