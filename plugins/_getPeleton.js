let handler = async ( m, { conn }) => {

let user = global.DATABASE.data.users[m.sender]

if ( user.camptroops > 0 ) {
user.troops += 100
m.reply(`Kamu menyembuhkan pasukan kamu atau merekrut pasukan`)
} else conn.sendButton( m.chat, `Lawak lu pler mau dapet pasukan y bangun camptroops Dulu`, botwm, `Bangun🔨`, `/build camptroop`, m)
}

handler.help = ['getpeleton']
handler.tag = ['kingdom']
handler.command = /getpeleton/i

module.exports = handler
