let handler = m => m

let bhsKotor = /(a(su|njeng)kontol|kntl||bngst|anjime|anjim|pepek|memek|anjg|pantek)/i
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe ) return true
  let chat = global.DATABASE.data.chats[m.sender]
  let grup = bhsKotor.exec(m.text)
  let botol = global.botwm

if (chat.antiToxic && grup ) {

conn.reply( m.chat, `*[ ANTI BADWORD ]*

_JANGAN TOXIC BANG DOSA!_
`, m)
 if (global.opts['restrict']) {
        }
    }
 return true
}

modular.exports = handler
