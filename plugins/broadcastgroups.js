let fetch = require ('node-fetch')

let handler  = async (m, { conn, text }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
  let content = (/bcgc|broadcastgroup|bcgrup|bcgrup|broadcastgc/i.test(text) ? text : text + '\n' + readMore + '「 ' + conn.getName(conn.user.jid) + ' Broadcast 」')
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} chat_\nestimasi selesai ${groups.length * 1.5} detik`, m)
  for (let id of groups) {
  await delay(1500)
 await conn.send2ButtonLoc(id, await ( await fetch( fla + 'broadcast')).buffer(), content, botwm, `Menu`, `/menu`, `Donasi`, `/donasi`, m)
   }
  m.reply(m.chat, `_Berhasil broadcast ke ${groups.length} grup_`, m)
}
handler.help = ['broadcastgroup','bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const delay = time => new Promise(res => setTimeout(res, time))
