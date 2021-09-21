let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
    let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
    let [_, code] = link.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    if (isMods || isOwner || m.fromMe) {
        let __timers = (new Date - global.DATABASE.data.chats[res.gid].expired)
        let _timers = (86400000 - __timers)
        let timers = clockString(_timers) 
        let res = await conn.acceptInvite(code)
        global.DATABASE.data.chats[res.gid].expired += new Date * 1
        let gray = global.DATABASE.data.chats[res.gid].expired
        m.reply(`Berhasil join grup ${res.gid}\n berakhir dalam ${gray}`)
    } else {
        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply('*dari:* ' + m.sender.split('@')[0] + '\n*Link:* ' + link, jid)
        m.reply('Sedang di process Owner')
    }
}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']

handler.command = /^join$/i

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
