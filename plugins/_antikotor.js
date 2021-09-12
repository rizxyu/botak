let handler = m => m

let bhsKotor = /(a(su|njeng)kontol|kntl||bngst|anjime|anjim|pepek|memek|anjg|pantek)/i
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe ) return true
  let chat = global.DATABASE.data.chats[m.sender]
  let grup = bhsKotor.exec(m.text)
  let botol = global.botwm

if (chat.antiToxic && grup ) {

m.reply(`*[ ANTI BADWORD ]*

_JANGAN TOXIC BANG DOSA!_

*untuk mematikan Anti toxic
Ketik /disable antitoxic
`)
 if (global.opts['restrict']) {
        }
    }
 return true
}

modular.exports = handler
