let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} logo`
  let res = await fetch(global.API('zeks', '/api/pinimg', {
    q: text
  }, 'apikey'))
  if (!res.ok) throw 'eror bang'
  let json = await res.json()
  if (!json.status) throw json
  let pint = json.data[Math.floor(Math.random() * json.data.length)];
  conn.sendButImg(m.chat, await ( await fetch(pint)).buffer(), `Sukses mencari ${text}`, botwm, `Lagi`, `.pinterest ${text}`, m)
}
handler.help = ['pinterest <pencarian>']
handler.tags = ['internet']
handler.command = /^(pint(erest)?)$/i

module.exports = handler
