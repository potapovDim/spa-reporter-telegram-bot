const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const { token } = require('./token.json')

const tg = new Telegram.Telegram(token, {
    workers: 1
})
const PingController = require('./controllers/ping')
const OtherWiseController = require('./controllers/otherwise')



tg.router
    .when(
    new TextCommand('ping', 'pingCommand'),
    new PingController()
    ).otherwise(new OtherWiseController())