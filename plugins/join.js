let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, usedPrefix }) => {
    let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
    let [_, code] = link.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    if (isMods || isOwner || m.fromMe) {
        let res = await conn.acceptInvite(code)
        m.reply(`Berhasil join grup ${res.gid}`)
    } else {
        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply('*dari:* ' + m.sender.split('@')[0] + '\n*Link:* ' + link, jid)
        m.reply('Sedang di process Owner')
    }
    conn.sendButton(m.chat, `${conn.user.name} Adalah Bot WhatsApp Yg dibangun dengan NodeJs, *${conn.user.name}* diundang oleh @${m.sender.split`@`[0]}

Ketik *${usedPrefix}menu* untuk melihat daftar perintah`, '©RainXyZ', 'Menu', `${usedPrefix}menu`, { contextInfo: { mentionedJid: [m.sender]}})
}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']

handler.command = /^join$/i

module.exports = handler
