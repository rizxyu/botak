let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*temat/i.test(m.quoted.contentText)) return !0
    conn.tebakkali = conn.tebakkali ? conn.tebakkali : {}
    if (!(id in conn.tebakkali)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == conn.tebakkali[id][0].id) {
        let json = JSON.parse(JSON.stringify(conn.tebakkali[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.result.jawaban.toLowerCase().trim()) {
            global.DATABASE.data.users[m.sender].money += conn.tebakkali[id][2]
            m.reply(`*Benar!*\n+${conn.tebakkali[id][2]} XP`)
            clearTimeout(conn.tebakkali[id][3])
            delete conn.tebakkali[id]
        } else if (m.text.toLowerCase().endsWith(json.math.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
