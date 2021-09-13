
let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let fs = require('fs')

let handler  = async (m, { conn, text }) => {
	
	
      let pp = './src/avatar_contact.png'
  try {
  pp = await conn.getProfilePicture(m.sender)
   } catch (e) {

    } finally {
    let { exp, limit, level, role } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
 
    let res = `http://hardianto-chan.herokuapp.com/api/rankcard?profile=${pp}&name=${name}&bg=https://i.ibb.co/4YBNyvP/images-76.jpg&needxp=${max}&curxp=${exp}&level=${level}&logorank=https://i.ibb.co/Wn9cvnv/FABLED.png`
    let caption = `*👾Your Profile!:*
*👤Name:* ${name}
*🎏Role :* ${role}
*🏮Level:* ${level}
*🎋Exp :* ${exp} --> ${max}

😟DoNasi gan biar bot aktif terus
`
conn.sendFile(m.chat, res, 'test.jpg', caption, m, false)
     } 
 }

handler.help = ['rank']
handler.tags = ['info']
handler.command = /^(rank?card)$/i

handler.fail = null

module.exports = handler
