let handler  = async (m, { conn, usedPrefix: _p }) => {
ye = `@${m.sender.split`@`[0]}`
let info = `Hai Kak ${ye} lagi nyari sc nya ya?
Link Sc Dibawah Ini :
https://www.youtube.com/channel/UCTK9VwCXKJXOLh8XusN1JpQ/featured

*Jangan Lupa Subscribe ya kak, kalo gak subscribe saya doakan gak work aminn...*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*${global.packname}*`, 'status@broadcast') 
}
handler.help = ['github']
handler.tags = ['info']
handler.command = ['script', 'sc', 'scbot', 'github']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

module.exports = handler
