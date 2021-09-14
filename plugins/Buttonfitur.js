const fbdl = require("fbdl-core");
const fs = require('fs')

let handler = async ( m, { conn, command}) => {

fbdl.download("https://www.facebook.com/alanwalkermusic/videos/277641643524720")
    .then(res => {
        res.pipe(fs.createWriteStream("./aw.mp4"));
    });

await conn.sendMessage(m.chat, fs.readFileSync("./aw.mp4"), mediaType.video)

   }

handler.command = /bro/i

module.exports = handler
