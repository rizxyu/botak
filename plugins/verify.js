const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let fs = require('fs')
let fetch = require('node-fetch')
let util = require('util')
let { MessageType } = require('@adiwajshing/baileys')
let { buttonsMessage, contactsArray, image, MimeType } = MessageType

let handler = async function (m, { text, conn, usedPrefix }) {
 let user = global.DATABASE.data.users[m.sender]
 if (user.registered === true) throw 'lu kan udah daftar'
   let name = conn.getName(m.sender)
   let age = `${Math.floor(Math.random() * 70)}`.trim()
  user.name = name
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')

  
  conn.reply( m.chat,
`_Verify Succes [ ✅ ]_
*🎐Name:* ${name}
*🎐SN:* ${sn}

Terimakasih karena sudah verifikasi`, m)
   
}
handler.help = ['verify']
handler.tags = ['main']

handler.command = /^verify$/i

module.exports = handler
