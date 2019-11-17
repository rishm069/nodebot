const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome home!'))
bot.help((ctx) => ctx.reply('Send me a sticker')) 
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch((ctx) => ctx.reply('Welcome!'))

const inlineMessageRatingKeyboard = Markup.inlineKeyboard([
    Markup.callbackButton('👍', 'like'),
    Markup.callbackButton('👎', 'dislike')
]).extra()

bot.on('message', (ctx) => ctx.telegram.sendMessage(
    ctx.from.id,
    'Like?',
    inlineMessageRatingKeyboard)
)