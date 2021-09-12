const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let { buttonsMessage, image, MimeType } = MessageType

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} california`
  let chat = global.DATABASE.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Konten Tidak ditemukan'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
 /*
 *Wm BOT
 * let name = global.nama
 */
  let botol = global.botwm
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw 'semua server gagal'
  if (yt2 === false) throw 'semua server gagal'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
try {
if (/play/.test(command)) {
  conn.send2ButtonImg(m.chat,`
*Judul:* ${title}
*Ukuran File Audio:* ${filesizeF}
*Ukuran File Video:* ${yt2.filesizeF}
*Server y2mate:* ${usedServer}
`.trim(), thumb,  `${botol}`, `🎵Audio ${filesizeF}`, `.aplay`, `🎥Video ${yt2.filesizeF}`, `.vplay`, {
    quoted: m,
    contextInfo: {
        externalAdReply: {
            title: `${title}`,
            body: `Apakah ini Benar dengan Lagu yg dicari?`,
            description: `Apakah ini benar dengan lagu yg dicari?`,
            mediaType: 2,
          thumbnail: thumb,
         mediaUrl: vid.url
        }
     }
    })
    let _thumb = {}
    try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
}
if (/aplay/.test(command)) {
m.reply(`Sabar Kang Lagi di kirim`)
conn.sendFile(m.chat, dl_link, title + '.mp3', `
*Title:* ${title}
*Filesize:* ${filesizeF}
`.trim(), m, null, {
  asDocument: chat.useDocument
})
}
if (/vplay/.test(command)) {
conn.sendFile(m.chat, dl_link, title + '.mp4', `
*Title:* ${title}
*Filesize:* ${filesizeF}

🔥CREATED BY RIZXYU
`.trim(), m, false, {
..._thumb,
 asDocument: chat.useDocument
})
}
        } catch (e) {
	return conn.sendButton(m.chat, `there seems to be something wrong or an error`, `${botol}`, `⚠️REPORT`, `.bug Bug di bagian Play musik`, m)
  }
 /*
 *KOK KAMU MAU HAPUS KREDIT YA?
 *JANGAN GITU LUH
 */
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(p|play|aplay|vplay)$/i

handler.exp = 0

module.exports = handler

/*
* CONTACT ME IF YOU FIND A BUGS THIS SCRIPT
* wa.me/6282328303332
*/
