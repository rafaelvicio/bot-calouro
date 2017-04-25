const TelegramBot = require( `node-telegram-bot-api` )

const token = `318394911:AAE6OsdVjWyPTxJ1X0Vcf2lzYEeJxPBq52c`

const bot = new TelegramBot( token, { polling: true } )

const logErrorEcho = ( msg ) => ( err ) =>
  console.log( msg, err )

const logSuccessEcho = ( msg, match ) => ( data ) =>
  console.log( `Success: `, data )

const sendHello = ( msg, match ) =>
  bot.sendMessage( msg.chat.id,  msg.chat.first_name)
      .then( logSuccessEcho( msg, match ) )
      .catch( logErrorEcho( `Error: ` ) )

const sendRepeat = ( msg, match ) =>
  bot.sendMessage( msg.chat.id,  match[ 1 ])
    .then( logSuccessEcho( msg, match ) )
    .catch( logErrorEcho( `Error: ` ) )

const sendBomDia = ( msg, match ) =>
  bot.sendMessage( msg.chat.id, 'Olá, ' + msg.chat.first_name + ' Bom dia!')
    .then( logSuccessEcho( msg, match ) )
    .catch( logErrorEcho( `Error: ` ) )

bot.onText( /\/hello (.*)/, sendHello)
bot.onText( /\/repeat (.*)/, sendRepeat)
bot.onText( /bom dia (.*)/, sendBomDia)
