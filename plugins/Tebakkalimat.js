let fetch = require('node-fetch')

let timeout = 120000
let poin = 2500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkali = conn.tebakkali ? conn.tebakkali : {}
    let id = m.chat
    if (id in conn.tebakkali) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkali[id][0])
        throw false
    }
    let res = await fetch('https://hardianto.xyz/api/tebakkalimat?apikey=hardianto'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (json.status != 200) throw json
    let caption = `
${json.math.soal}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}temat untuk bantuan
Bonus: Rp${poin}
`.trim()
    conn.tebakkali[id] = [
        await conn.sendButton(m.chat, caption, `RainBot`, `Bantuan`, `.temat`, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkali[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.math.jawaban}*`, conn.tebakkali[id][0])
            delete conn.tebakkota[id]
        }, timeout)
    ]
}
handler.help = ['tebakkalimat']
handler.tags = ['game']
handler.command = /^tebakkalimat/i
handler.limit = false

module.exports = handler
