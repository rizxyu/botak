let handler = async ( m, { conn, command}) => {

  try {
 if (command) {
    case 'komk':
   m.reply('iy work')
    break
     } catch (e) {
    throw e 
    }
 }

handler.command = /komk/i

module.exports = handler
