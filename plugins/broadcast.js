let fetch = require ('node-fetch')

let handler  = async (m, { conn, text }) => {
  let chats = conn.chats.all().filter(v => !v.read_only && v.message).map(v => v.jid)
  let content = (/bc|broadcast/i.test(text) ? text : text + '\n' + readMore + '〔 ' + conn.getName(conn.user.jid) + ' Broadcast 〕')
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_\nestimasi selesai ${chats.length * 1.5} detik`, m)
  for (let id of chats) {
     await delay(1500)
    await conn.sendButtonLoc(id, await ( await fetch( fla + 'broadcast')).buffer(), content, botwm, `Menu`, `/menu`, m)
    }
  m.reply('_*Broadcast Selesai*_')
}
handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

const delay = time => new Promise(res => setTimeout(res, time))