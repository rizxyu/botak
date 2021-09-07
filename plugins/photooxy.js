//OOM MAU NGAPAIN OMMM
//> w <
//ape lu mau hapus kredit ya
//BY RIZKY

const fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {

let apikey = 'HIRO'//BELI SENDIRI NGENTOT

let caption = `[ ❗ ] Sudah Jadi Nih we`
let wait = `await`

//APIKEY WEB
let res = `https://api.lolhuman.xyz/api/photooxy1/shadow?apikey=${apikey}&text=${args[0]}`
let lov = `https://api.lolhuman.xyz/api/photooxy1/shadow?apikey=${apikey}&text=${args[0]}`
let wud = `https://api.lolhuman.xyz/api/photooxy1/woodheart?apikey=${apikey}&text=${args[0]}`
let cu = `https://api.lolhuman.xyz/api/photooxy1/cup?apikey=${apikey}&text=${args[0]}`
let cu2 = `https://api.lolhuman.xyz/api/photooxy1/cup2?apikey=${apikey}&text=${args[0]}`
let kopi = `https://api.lolhuman.xyz/api/photooxy1/coffe?apikey=${apikey}&text=${args[0]}`
     
 
try {
conn.reply( m.chat, wait, m)
      if (/shadow/.test(command)) return conn.sendFile( m.chat, res, caption, m)
      if (/love/.test(command)) return conn.sendFile( m.chat, lov, caption, m)
     if (/woodheart/.test(command)) return conn.sendFile( m.chat, wud, caption, m)
     if (/cup/.test(command)) return conn.sendFile( m.chat, cu, caption, m)
     if (/cup2/.test(command)) return conn.sendFile( m.chat, cu2, caption, m)
     if (/coffe/.test(command)) return conn.sendFile( m.chat, kopi, caption, m)
     
} catch (e) {
   throw e
    }
}

handler.help = ['shadow','love','woodheart','cup','cup2','coffe'].map(v => v + ' [TEKS]')
handler.tags = ['photooxy']
handler.command = /^(shadow|love|woodheart|cup|cup2|coffe)$/i

handler.limit = true //or false

module.exports = handler
