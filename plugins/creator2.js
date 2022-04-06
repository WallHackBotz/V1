const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "𝙾𝚠𝚗𝚎𝚛 𝚁𝚛𝚜𝚜𝚣𝚡𝚡",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:𝙾𝚠𝚗𝚎𝚛 𝚁𝚛𝚜𝚜𝚣𝚡𝚡\nitem1.TEL;waid=62895328255152:62895328255152\nitem1.X-ABLabel:📍 Creator\nitem2.EMAIL;type=INTERNET:rrsszxx98@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://api-invibot.herokuapp.com/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Otaku 🇯🇵\nitem5.X-ABLabel:───────[ ᴠᴇʀɪғʏ ʙʏ ᴡʜᴀᴛsᴀᴘᴘ ]───────\nEND:VCARD"
  }, {
    "displayName": "ʀʀꜱꜱᴢxx ʙᴏᴛ",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:ʀʀꜱꜱᴢxx ʙᴏᴛ\nitem1.TEL;waid=62895401928948:62895401928948\nitem1.X-ABLabel:📍 Bot Whatsapp\nitem2.EMAIL;type=INTERNET:rrsszxx98@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://api-invibot.herokuapp.com/\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;⛩️ Japan;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:📞 Official Bot Whatsapp\nitem5.X-ABLabel:───────[ ᴠᴇʀɪғʏ ʙʏ ᴡʜᴀᴛsᴀᴘᴘ ]───────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler