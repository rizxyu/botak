/*
* Ban ban apa yg hilang?
* BANSOS AOSKWKAKAKKAKAKAA
*/

let peler = async (m, { conn, usedPrefix }) => {

let caption = `
${pickRandom(['Napa lur kok manggil saya', 'yntkts','Manggil gw bang?', 'Ya saya disini']}
`
conn.sendButton(m.chat, caption, botwm, `Menu`, `/menu`, m)
}

peler.command = /^(bot)/i

module.exports = peler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
