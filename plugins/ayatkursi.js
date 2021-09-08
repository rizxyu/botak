let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {

let res = await fetch(`https://api-zeeoneofc.herokuapp.com/api/muslim/ayatkursi?apikey=Alphabot`)
json = await res.json()
if (!json.result.data) 
conn.reply( m.chat, `*———[ AYAT KURSI ]———*\n\n${json.result.data}`, m)
else conn.sendButton( m.chat, 'Sepertinya ada yg eror', 'Eror404', 'Report', '.bug ayatkursi')
}

handler.help = ['ayatkursi']
handler.tags = ['quran']
handler.command = /^(ayatkursi)$/i

module.exports = handler

