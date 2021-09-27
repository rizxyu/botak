let ft = require('node-fetch')

let { MessageType }= require('@adiwajshing/baileys')
let { contactsArray } = MessageType
let handler = function (m, { conn }) {
this.sendContact(m.chat, '6282328303332', 'Owner', m)
conn.sendButtonLoc(m.chat, await ( await ft(fla + 'Owner')).buffer(),`INU CONTACT OWNER G USAH CHAT ANEH ANEH AAMA MINTA SAVE`, botwm, `Menu`, `Donasi`,  m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
