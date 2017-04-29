const TelegramBot = require( `node-telegram-bot-api` )

const token = `318394911:AAE6OsdVjWyPTxJ1X0Vcf2lzYEeJxPBq52c`

const bot = new TelegramBot( token, { polling: true } )

const logErrorEcho = ( msg ) => ( err ) =>
  console.log( msg, err )

const logSuccessEcho = ( msg, match ) => ( data ) =>
  console.log( `Success: `, data )

const sendStart = ( msg, match ) =>
  bot.sendMessage( msg.chat.id, 'Olá, ' + msg.chat.first_name + ' eu sou o Bot Calouro, digite /help para conhecer o que eu posso fazer por voce! ;)')
    .then( logSuccessEcho( msg, match ) )
    .catch( logErrorEcho( `Error: ` ) )

const sendHelp = ( msg, match ) =>
  bot.sendMessage( msg.chat.id, 'Olá, os comandos que eu sei são os seguintes: /start, /repeat')
    .then( logSuccessEcho( msg, match ) )
    .catch( logErrorEcho( `Error: ` ) )

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

const sendRisada = ( msg, match ) =>
  bot.sendMessage( msg.chat.id, 'hahahahhah')
    .then( logSuccessEcho( msg, match ) )
    .catch( logErrorEcho( `Error: ` ) )


bot.onText( /\/start (.*)/, sendStart)
bot.onText( /\/help (.*)/, sendHelp)

bot.onText( /\/hello (.*)/, sendHello)
bot.onText( /\/repeat (.*)/, sendRepeat)
bot.onText(/b(oa|om) (dia|tarde|noite)/i, sendBomDia)
bot.onText(/lol|kkkk|huehue|h+a+h+a+|h+e+h+e+|h+i+h+i+|h+u+a+s+|j+e+j+e+|h+u+a+h+u+a|h+u+e+h+u+e/i, sendRisada)
