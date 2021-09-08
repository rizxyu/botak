let handler = m => m
let levelling = require('../lib/levelling')
let fs = require('fs')
handler.before = m => {
    let user = global.DATABASE._data.users[m.sender]
    
    let name = m.fromMe ? conn.user : conn.contacts[m.sender] 
    let sortedExp = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].exp - a[1].exp)
  let sortedLim = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].limit - a[1].limit)
  let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
  let sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level)
  let usersExp = sortedExp.map(v => v[0])
  let usersLim = sortedLim.map(v => v[0])
  let usersmoney = sortedmoney.map(v => v[0])
  let userslevel = sortedlevel.map(v => v[0])
  
  
    if (!user.autolevelup) return
    if (m.sender === global.conn.user.jid) return
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    let img = await conn.getProfilePicture(m.sender)
    let url = `https://api.lolhuman.xyz/api/rank?apikey=HIRO&img=${pp}&background=https://i.ibb.co/8B6Q84n/LTqHsfYS.jpg&username=${name.notify}&level=${user.level}&ranking=${userslevel.indexOf(m.sender) + 1}&currxp=${min}&xpneed=${max}`
    if (before !== user.level) {
        let str = `Selamat @${m.sender.split`@`[0]} Anda Naik 🧬level 
*${before}* --> *${user.level}*
`.trim()
        conn.sendFile(m.chat, url, 'img.jpg', str, false, {
            contextInfo: {
                mentionedJid: [m.sender]
            }
        })
    }
    return true
}
 
module.exports = handler
