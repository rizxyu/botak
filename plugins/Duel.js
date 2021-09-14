/*
* By Rizxyu
* Terimakasih udah support saya bang
*/

const { MessageType } = require('@adiwajshing/baileys')

let handler = async ( m, { conn, args, command}) => {

let who = m.mentionedJid ? m.mentionedJid[0] : (args[0].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')

let enemy = global.DATABASE.data.users[who]
let user = global.DATABASE.data.users[m.sender]

let count = args[1] && args[1].length > 0 ? Math.min(100, Math.max(parseInt(args[1]), 1)) : Math.min(1)

let nama = conn.getName[m.sender]

     try {

   if (/duel/.test(command)) {
   if (!who || !args[0]) return m.reply('tag yg ingin di ajak duel!')
   conn.send2Button(m.chat, ` ${nama} Mengajak duel ${args[0]}\n\nPilih Y Atau No`, `Games wabot`, `Ya`, `.dya`, `No`, `.dno`, m)
           }
   if (/dya/.test(command)) {
   m.reply(`mbuh`)
   }
       } catch (e) {
        return conn.sendButton( m.chat, `Sepertinya ada bug`, `laporkan ke owner`, `Kanjut Badag`, `.bug eror duel`, m)
         }
   }

handler.tags = ['rpg']
handler.command = /^(duel|dya|dno)/i

module.exports = handler
