//**by Rizxyu
Kok kamu wibu
**\\


let handler = async (m, { conn, text, usedPrefix, command }) => {

let [ a1, a2 ] = text.split`|`

  try {
    if (/setwm/.test(command)) {
    if (!text) throw '.wm lord|lord'
    global.author = a1
    global.packname = a2
    conn.sendMessage(m.chat, `Berhasil ubah menjadi ${text}` m)
    }
    if (/setbotwm/.test(command)) {
    if (text) throw '.botwm Anjay alok'
    global.botwm = text
    conn.sendMessage(m.chat, `Berhasil mengubah wm bot menjadi ${text}`, m)
    }
   } catch(e) {
    throw 'eror ngab'
  }
 }

handler.help = ['setbotwm <text>','setwm <text>']
handler.tags = ['owner']
handler.command = /^(setbotwm|setwm)/i

handler.owner = true

module.exports = handler
