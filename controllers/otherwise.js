const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand

module.exports = class OtherWiseController extends TelegramBaseController {
    handle($) {
        $.sendMessage('Sorry i can`t do this')
    }
}
