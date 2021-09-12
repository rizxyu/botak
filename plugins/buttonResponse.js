let { MessageType } = require(global.Baileys)
let fs = global.Ft.fs
let handler = async (m,{conn, command, usedPrefix}) => {
if (/buttonsc/.test(command)) {
textnye = `bot ini menggunakan script perpaduan dari:
https://github.com/Nurutomo/wabot-aq
dan
https://github.com/MhankBarBar/termux-wabot`
m.reply(textnye)
}
if (/buttonmenu/.test(command)) {
let f = usedPrefix
lr = await conn.getName(m.sender)
status = await conn.getStatus(m.sender)
conn.sendMessage(m.chat, `
halo kak ${lr} 
mohon maaf karena bot ini masih dalam mode beta
list menu
> ${f}jadibot 
> ${f}listjadibot
> ${f}ulangi <reply> 
> ${f}ttt <custom room name> 
> ${f}tictactoe <custom room name> 
> ${f}stats
> ${f}speed
`, MessageType.text, {isAnimated: true, quoted: m, contextInfo: {externalAdReply:{title:'hi '+conn.getName(m.sender),body:`Welcome To My Menu Stahh`,mediaType:2,thumbnail: fs.readFileSync('./action/thumb.jpeg'),mediaUrl:`https://youtu.be/oUDhYnugAIg`,sourceUrl: ``}}})
}
console.log(Ft.chalk.greenBright.bold('> [BUTTON RESPONSE] ' + command +' dari ' + await conn.getName(m.sender)))
}
handler.command = /^(buttonsc|buttonmenu)$/i
module.exports = handler