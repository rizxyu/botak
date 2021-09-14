const fbdl = require("fbdl-core");
const fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
const getBuffer = require('./lib/functions.js')

let handler = async ( m, { conn, command}) => {

fbdl.download("https://www.facebook.com/alanwalkermusic/videos/277641643524720")
    .then(res => {
        res.pipe(getBuffer.fs.createWriteStream("./aw.mp4"));
    });

await conn.sendMessage(m.chat, getBuffer.fs.readFileSync("./aw.mp4"), MessageType.video)

   }

handler.command = /bro/i

module.exports = handler
