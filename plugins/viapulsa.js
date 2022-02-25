let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Pulsa
╠➥ SAYANG SEKALI HANYA TERSEDIA
║➥ VIA DANA, GOPAY, OVO, SAWERIA
║
╠═〘 Fitur 〙 ═
║
╠➥ *FITUR DOWNLOADER 500++
║     YouTube, Twitter, 
║     Tiktok, Instagram, dll.
║    *FITUR STIKER*
╠➥ *FITUR ADMIN*
║    *KICK ORANG*
║    *JADIIN ADMIN*
╠➥ *FITUR ISLAM*
║   *QURAN*
║   *CEK JADWAL SHALAT*
╠➥ *INTERNET*
║   *BRAINLY*
║   *GOOGLE*
╠➥ *DAN 200 LEBIH*
║   *FITUR LAINNYA*
║ 
╠═ ©2022 Alan BOTZ || V3
╠═ Scrip original by Nurutomo
╠═〘 ${namabot} 〙 ═`.trim(), m)
}

handler.command = /^viapulsa$/i

module.exports = handler
