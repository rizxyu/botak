/*
* THANKS TO
* FAUZAN
* RIZXYU (KANG REKODE)
* G usah hapus kredit anjg
*/

module.exports = {
async Command(conn, m, chatsUpdate) {
let usedPrefix
if (typeof m.text !== 'string') m.text = ''
let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {} || {}
let participants = m.isGroup ? groupMetadata.participants : [] || []
let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} 
let bot = m.isGroup ? participants.find(u => u.jid == conn.user.jid) : {} 
let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false
let isAdmin = user.isAdmin || user.isSuperAdmin || false // Is User Admin?
let isOwner = userbot['owner'].map(v => v + '@s.whatsapp.net').includes(m.sender) || false

//-------|plugins|---------//
for (let name in global.plugins) {
let plugin = global.plugins[name]
if (!plugin) continue
if (plugin.disabled) continue
if (!plugin.all) continue
if (typeof plugin.all !== 'function') continue
try {
await plugin.all.call(conn, m, chatsUpdate)
} catch (e) {
if (typeof e === 'string') continue
console.error(e)
}
}
for (let name in global.plugins) {
let plugin = global.plugins[name]
if (!plugin) continue
if (plugin.disabled) continue
const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
let match = (_prefix instanceof RegExp ? // RegExp Mode?
[[_prefix.exec(m.text), _prefix]] :
Array.isArray(_prefix) ? // Array?
_prefix.map(p => {
let re = p instanceof RegExp ? // RegExp in Array?
p :
new RegExp(str2Regex(p))
return [re.exec(m.text), re]
}) :
typeof _prefix === 'string' ? // String?
[[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
[[[], new RegExp]]
).find(p => p[1])
if (typeof plugin.before === 'function')
await plugin.before.call(conn, m, {
conn: conn,
groupMetadata,
chatsUpdate,
match
})
if (typeof plugin !== 'function') continue
if ((usedPrefix = (match[0] || '')[0])) {
let noPrefix = m.text.replace(usedPrefix, '')
let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
args = args || []
let _args = noPrefix.trim().split` `.slice(1)
let text = _args.join` `
command = (command || '').toLowerCase()
global.data = {
match,
conn: conn,
command,
usedPrefix,
args,
text,
noPrefix,
groupMetadata
}


let fail = plugin.fail || global.dfail // When failed
let Cmd = plugin.command instanceof RegExp ? plugin.command.test(command) : Array.isArray(plugin.command) ? plugin.command.some(cmd => cmd instanceof RegExp ? cmd.test(command) : cmd === command) : typeof plugin.command === 'string' ? plugin.command === command : false
if (!Cmd) continue
if (plugin.owner && !isOwner) { // Number Owner
fail('owner', m, conn)
continue
}
if (plugin.grup && !m.isGroup) { //only group
fail('grup', m, conn)
continue
}
if (plugin.admin && !isAdmin) { // only admin
fail('admin', m, conn)
continue
}
if (plugin.botAdmin && !isBotAdmin) { // bot admin
fail('botAdmin', m, conn)
continue
}
if (plugin.me && !user) { // jadibot user
fail('user', m, conn)
continue
}
let extra = {
match,
conn: conn,
command,
usedPrefix,
args,
text,
noPrefix,
groupMetadata
}
await plugin.call(conn, m, extra)
}
global.dfail = (type, m, conn) => {
let msgnye = {
grup: global.userbot['setting'].group,
admin: global.userbot['setting'].admin,
botAdmin: global.userbot['setting'].botadmin,
user: global.userbot['setting'].jadibot,
}[type]
if (msgnye) return m.reply(msgnye)
}
}

/*
Case 
*/

switch(global.command) {
case 'tes': 
m.reply('workas')
break
}
}
}
