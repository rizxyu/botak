let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {

let res = await fetch(`https://api-zeeoneofc.herokuapp.com/api/jadwalshalat?kota=${text}&apikey=Alphabot`)
json = await res.json()

let caption = `
${json.result.tanggal}

Imsyak : ${json.result.imsyak}
Shubuh : ${json.result.shubuh}
Dzuhur : ${json.result.dzuhur}
Ashar : ${json.result.ashr}
Maghrib : ${json.result.magrib}
Isya : ${json.result.isya}`

if (!json.result) 

conn.reply( m.chat, caption, m)
else conn.sendButton( m.chat, 'Sepertinya ada yg eror', 'Eror404', 'Report', '.bug ayatkursi')
}

handler.help = ['jadwalsolat <daerah>']
handler.tags = ['quran']
handler.command = /^(jadwalsholat|jadwalsolat)$/i

module.exports = handler

