const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "๐พ๐ ๐๐๐ ๐๐๐๐๐ฃ๐ก๐ก",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:๐พ๐ ๐๐๐ ๐๐๐๐๐ฃ๐ก๐ก\nitem1.TEL;waid=62895328255152:62895328255152\nitem1.X-ABLabel:๐ Creator\nitem2.EMAIL;type=INTERNET:rrsszxx98@gmail.com\nitem2.X-ABLabel:๐ Email\nitem3.URL:https://api-invibot.herokuapp.com/\nitem3.X-ABLabel:๐ฎ Rest Api\nitem4.ADR:;;๐ฎ๐ฉ Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:๐ Region | Otaku ๐ฏ๐ต\nitem5.X-ABLabel:โโโโโโโ[ แด แดสษชาส สส แดกสแดแดsแดแดแด ]โโโโโโโ\nEND:VCARD"
  }, {
    "displayName": "สส๊ฑ๊ฑแดขxx สแดแด",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:สส๊ฑ๊ฑแดขxx สแดแด\nitem1.TEL;waid=62895401928948:62895401928948\nitem1.X-ABLabel:๐ Bot Whatsapp\nitem2.EMAIL;type=INTERNET:rrsszxx98@gmail.com\nitem2.X-ABLabel:๐ Email\nitem3.URL:https://api-invibot.herokuapp.com/\nitem3.X-ABLabel:โ๏ธ Rest Api\nitem4.ADR:;;โฉ๏ธ Japan;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:๐ Official Bot Whatsapp\nitem5.X-ABLabel:โโโโโโโ[ แด แดสษชาส สส แดกสแดแดsแดแดแด ]โโโโโโโ\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler