/*
* By Rizxyu
* Terimakasih udah support saya bang
* Fitur Beta
*/

const { MessageType } = require('@adiwajshing/baileys')

let handler = async ( m, { conn, args, command}) => {
  conn.duel = conn.duel ? conn.duel : []
  args.length != 0 ? conn.duel.push(m.mentionedJid ? m.mentionedJid[0] : (args[0].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')) : ""
  let who = conn.duel[0]
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
       if (!who) return m.reply('tag yg ingin di ajak duel!')
       conn.send2Button(m.chat, ` @${who.split("@")[0]} Mengajak duel ${args[0]}\n\nPilih Y Atau No`, `Games wabot`, `Ya`, `+dya`, `No`, `+dno`, m)
     }

     if (/dya/.test(command)) {
     let kenal = !who.includes(m.sender)
     if(kenal) throw 'Lu siapa?\nkok ikut kut mau duel'
     if (Aku > Kamu) {
       user.money -= 900
       enemy.money += 900
       conn.reply(m.chat, `@${m.sender.split("@")[0]} KALAH dan @${who.split("@")[0]} Menang\n*Hadiah:*\n900 Money buat beli gorengan`.trim(), m)
     } else if (Aku < Kamu) {
       user.money += 900
       enemy.money -= 900
       conn.reply(m.chat, `@${m.sender.split("@")[0]} MENANG🎉 dan @${who.split("@")[0]} kalah\n*Hadiah:*\n 900 money`.trim(), m)
     } else {
       user.money += 450
       enemy.money += 450
       conn.reply(m.chat, `@${m.sender.split("@")[0]} Dan @${who.split("@")[0]}\n *Seri*, kamu Mendapatkan masing masing 450 Money`.trim(), m)
     }
   }
   if (/dno/.test(command)) {
     conn.reply( m.chat, `@${who.split("@")[0]} Membatalkan Ajakan Duel`, m)
   }
 } catch (e) {
   //return conn.sendButton( m.chat, `Sepertinya ada bug`, `laporkan ke owner`, `Kanjut Badag`, `+bug duel ${e.stack}`, m)
   return m.reply(`${e}`)
 }
}

handler.help = ['Duel @tag <Fitur Baru>']
handler.tags = ['rpg']
handler.command = /^(duel|dya|dno)/i

module.exports = handler
