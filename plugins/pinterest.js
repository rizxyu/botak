let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix, isPrems }) => {
m.reply('This Feature Eror')
}
handler.help = ['pinterest'].map(v => v + ' [teks]')
handler.tags = ['internet', 'downloader']
handler.command = /^(pinterest)$/i

module.exports = handler

