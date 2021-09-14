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

let nama = conn.getName(m.sender)

let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
let randomkamu = `${Math.floor(Math.random() * 81)}`.trim()
let Aku = (randomaku * 1)
let Kamu = (randomkamu * 1)

     try {

   if (/duel/.test(command)) {
   if (!who || !args[0]) return m.reply('tag yg ingin di ajak duel!')
   conn.send2Button(m.chat, ` ${nama} Mengajak duel ${args[0]}\n\nPilih Y Atau No`, `Games wabot`, `Ya`, `.dya`, `No`, `.dno`, m)
           }

   if (/dya/.test(command)) {
   if (!who || !args[1]) throw 'Lu siapa?\nkok ikut kut mau duel'
   if (Aku > Kamu) {
             user.money -= 900
             enemy.money += 900
                conn.reply(m.chat, `${nama} KALAH dan ${who} Menang\n*Hadiah:*\n900 Money buat beli gorengan`.trim(), m)
            } else if (Aku < Kamu) {
                user.money += 900
                enemy.money -= 900
                conn.reply(m.chat, `${nama} MENANG🎉 dan ${who} kalah\n*Hadiah:*\n 900 money`.trim(), m)
            } else {
                user.money += 450
                enemy.money += 450
                conn.reply(m.chat, `${nama} Dan ${who}\n *Seri*, kamu Mendapatkan masing masing 450 Money`.trim(), m)
            }
   }
    if (/dno/.rest(command)) {
    conn.reply( m.chat, `${who} Membatalkan Ajakan Duel`, m)
    }
       } catch (e) {
        return conn.sendButton( m.chat, `Sepertinya ada bug`, `laporkan ke owner`, `Kanjut Badag`, `.bug eror duel`, m)
         }
   }
handler.help = ['Duel @tag <Fitur Baru>']
handler.tags = ['rpg']
handler.command = /^(duel|dya|dno)/i

module.exports = handler
