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
  //let kita = conn.duel[m.sender]
  let enemy = global.DATABASE.data.users[who]
  let user = global.DATABASE.data.users[m.sender]
  let count = args[1] && args[1].length > 0 ? Math.min(100, Math.max(parseInt(args[1]), 1)) : Math.min(1)
  let nama = conn.getName(m.sender)

  let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
  let randomkamu = `${Math.floor(Math.random() * 81)}`.trim()
  let Aku = (randomaku * 1)
  let Kamu = (randomkamu * 1)

  let __timers = (new Date - user.lastduel)
  let _timers = (300000 - __timers) 
  let timers = clockString(_timers)

   try {
     if (/duel/.test(command)) {
       if (!who) return m.reply('tag yg ingin di ajak duel!')
       if (new Date - user.lastduel > 300000) {
      conn.send2Button(m.chat, ` @${who.split("@")[0]} Mengajak duel ${args[0]}\n\nPilih Y Atau No`, `Games wabot`, `Ya`, `+dya`, `No`, `+dno`, m)
       user.lastduel = new Date * 1
      } else conn.reply( m.chat, `Kamu Sudah Berduel Tunggu hingga *${timers}*`, m)
     }

     if (/dya/.test(command)) {
     let kenal = !who.includes(m.sender)
     if(kenal) throw 'Lu siapa?\nkok ikut kut mau duel'
     if (Aku > Kamu) {
       user.money -= 900
       enemy.money += 900
       delete conn.duel
       conn.reply(m.chat, `@${who.split("@")[0]} Menang Gelud🤼\n*Hadiah:*\n900 Money buat beli gorengan`.trim(), m)
     } else if (Aku < Kamu) {
       user.money += 450
       enemy.money -= 450
       delete conn.duel
       conn.reply(m.chat, `@${who.split("@")[0]} Kalah Gelud🤼\n*Hadiah:*\n 450 money`.trim(), m)
     } else {
       user.money += 450
       enemy.money += 450
       delete conn.duel
       conn.reply(m.chat, `@${who.split("@")[0]}\n *Seri*, kamu Mendapatkan masing masing 450 Money`.trim(), m)
     }
   }
   if (/dno/.test(command)) {
   let kenal = !who.includes(m.sender)
   if(kenal) throw 'Lu siapa?\nkok ikut kut mau duel'
    //if (!who) return m.reply('tag yg ingin di ajak duel!')
    conn.reply( m.chat, `@${who.split("@")[0]} Membatalkan Ajakan Duel`, m)
    delete conn.duel
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

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
