//OOM MAU NGAPAIN OMMM
//> w <
//ape lu mau hapus kredit ya
//BY RIZKY

const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {

let apikey = 'HIRO'//BELI SENDIRI NGENTOT

let caption = `[ ❗ ] Sudah Jadi Nih we`
let wait = `await`


//APIKEY WEB
let res = `https://api.lolhuman.xyz/api/photooxy1/shadow?apikey=${apikey}&text=${text}`
let lov = `https://api.lolhuman.xyz/api/photooxy1/love?apikey=${apikey}&text=${text}`
let wud = `https://api.lolhuman.xyz/api/photooxy1/woodheart?apikey=${apikey}&text=${text}`
let cu = `https://api.lolhuman.xyz/api/photooxy1/cup?apikey=${apikey}&text=${text}`
let cu2 = `https://api.lolhuman.xyz/api/photooxy1/cup2?apikey=${apikey}&text=${text}`
let kopi = `https://api.lolhuman.xyz/api/photooxy1/coffe?apikey=${apikey}&text=${text}`
     
 //FUNCTION SEND FILENYA CUK
try {
conn.reply( m.chat, wait, m)
      if (/shadow/.test(command)) else conn.sendFile( m.chat, res, 'p.jpg', caption, m)
      if (/love/.test(command)) else conn.sendFile( m.chat, lov, 'p.jpg', caption, m)
     if (/woodheart/.test(command))  else conn.sendFile( m.chat, wud, 'p.jpg', caption, m)
     if (/cup/.test(command)) else  conn.sendFile( m.chat, cu, 'p.jpg', caption, m)
     if (/cup2/.test(command))  else conn.sendFile( m.chat, cu2, 'p.jpg', caption, m)
     if (/coffe/.test(command)) else conn.sendFile( m.chat, kopi, 'p.jpg', caption, m)
     
} catch (e) {
   throw e
    }
}

handler.help = ['shadow','love','woodheart','cup','cup2','coffe'].map(v => v + ' [TEKS]')
handler.tags = ['photooxy']
handler.command = /^(shadow|love|woodheart|cup|cup2|coffe)$/i

handler.limit = true //or false

module.exports = handler
