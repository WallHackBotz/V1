// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to King Of Bear Official
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = 'https://chat.whatsapp.com/LDLbTSvavg62nEVQH3xFTN'
gc2 = 'https://chat.whatsapp.com/KsPXe06GnCNC4pg1BYf9wT'
gc3 = 'https://chat.whatsapp.com/Fh0eaf7IuuG3i67wXRC1O8'
global.linkGC = ['https://chat.whatsapp.com/KsPXe06GnCNC4pg1BYf9wT', 'https://chat.whatsapp.com/Fh0eaf7IuuG3i67wXRC1O8'] // ganti jadi group lu
global.owner = ['62895328255152','6281226675327','62895401928948','6285713735857','6281807254833','6282146189699','6287876723313','6285388958035','6281932715031','6285236600390'] // Put your number here //owner eval
global.kontak = ['62895328255152','6281226675327','6281285921254','6282146189699'] //Ketika ada yang ngetik #owner
global.mods = ['62881026342148','6285780689812','6281226675327'] // Want some help?
global.prems = ['6281226675327','62895328255152','62895401928948','6287882887768','6282291374279','6285236600390','6285780689812','6287876723133','628193271503','62881026341248','6289635009900','6289653145792',] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  bear: 'https://apikey-bear.herokuapp.com',
  bear2: 'https://apikey-bear2.herokuapp.com',
  bear3: 'https://apikey-bear3.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'buy',
  'https://api.lolhuman.xyz': 'buy',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://apikey-bear.herokuapp.com': 'buy',
  'https://apikey-bear2.herokuapp.com': 'buy',
  'https://apikey-bear3.herokuapp.com': 'buy',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'buy'
zekskey = 'apivinz'
xteamkey = 'buy'
leyskey = 'dappakntlll'
bearkey = 'buy'

//xteam        MIMINETBOT
namaig = 'https://instagram.com/drak_ipul123'
namagithub = 'GAK ADA :)'
kasihcaption = `Nih kak`
namakontak1 = 'Owner Utama'
namakontak2 = 'Wakil gwejh'

//kasihcaption = `Nih Kak`

// Sticker WM
global.packname = 'By King Of Bear' // ganti aja
global.author = 'King Of Bear' // ganti aja

//yyy
bc = 'Alan BOTZ || V3' //King Of Bear Broadcast
footer = '\n©FRANZ BOT'
namabot = 'FRANZ BOT'
namalu = 'Alan Si Colikiawan'


// 
wait = '_*Tunggu Sebentar...*_'
global.wait = '_*Tunggu Sebentar...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
