const Telegraf = require('telegraf')
const { Router, Markup } = Telegraf

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome home!'))
bot.help((ctx) => ctx.reply('Send me a sticker')) 
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch((ctx) => ctx.reply('Welcome!'))

const inlineMessageRatingKeyboard = Markup.inlineKeyboard([
    Markup.callbackButton('This is plain text 1', 'like'),
    Markup.callbackButton('This is plain text 2', 'dislike')
]).extra()

bot.on('message', (ctx) => ctx.telegram.sendMessage(
    ctx.from.id,
    'Like?',
    inlineMessageRatingKeyboard)
)

telegram.action('like', (ctx) => ctx.editMessageText('You have choosen 1'))
telegram.action('dislike', (ctx) => ctx.editMessageText('You have choosen 2'))