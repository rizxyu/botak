let fs = require('fs')
let handler = m => m

handler.all = async function (m, { conn, isOwner }) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        conn.setStatus(`Aktif selama ${uptime} | Powered By RainBot`).catch(_ => _)
}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
