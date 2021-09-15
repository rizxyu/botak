/*
* By Rizxyu
* Terimakasih udah support saya bang
* Fitur Beta
*/

const { MessageType } = require('@adiwajshing/baileys')

let handler = async ( m, { conn, args, command}) => {

let who = m.mentionedJid ? m.mentionedJid[0] : (args[0].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')

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
   // if (!who || !args[2]) return m.reply('lu siapa')
    if (Aku > Kamu) {
             global.DATABASE.data.users[m.sender].money -= 900
             global.DATABASE.data.users[who].money += 900
                conn.reply(m.chat, `${nama} KALAH dan ${args[0]} Menang\n*Hadiah:*\n900 Money buat beli gorengan`.trim(), m)
            } else if (Aku < Kamu) {
                global.DATABASE.data.users[m.sender].money += 900
                global.DATABASE.data.users[who].money -= 900
                conn.reply(m.chat, `${nama} MENANG🎉 dan ${args[0]} kalah\n*Hadiah:*\n 900 money`.trim(), m)
            } else {
                global.DATABASE.data.users[m.sender].money += 450
                global.DATABASE.data.users[who].money += 450
                conn.reply(m.chat, `${nama} Dan ${args[0]}\n *Seri* \n kamu Mendapatkan masing masing 450 Money`.trim(), m)
            }
   }
    if (/dno/.test(command)) {
    conn.reply( m.chat, `${args[0]} Membatalkan Ajakan Duel`, m)
    }
       } catch (e) {
        return m.reply(`${e} `)
         }
   }
handler.help = ['Duel @tag <Fitur Baru>']
handler.tags = ['rpg']
handler.command = /^(duel|dya|dno)/i

module.exports = handler
