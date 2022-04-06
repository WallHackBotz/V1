let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
   heum = await fetch(`https://api-invibot.herokuapp.com/api/nsfw/pussy?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '🔥🥵🥵', '©YUKI BOT', 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['pussy']
handler.tags = ['hentai']

handler.command = /^(pussy)$/i

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
