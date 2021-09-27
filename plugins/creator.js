let { MessageType }= require('@adiwajshing/baileys')
let { contactsArray } = MessageType
let handler = function (m, { conn }) {
this.sendContact(m.chat, '6282328303332', 'Owner', m)
conn.reply(`INU CONTACT OWNER G USAH CHAT ANEH ANEH ANJG`)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
