const chalk = require('chalk')
const fs = require('fs')
const moment = require('moment-timezone')
const hour_now = moment().format('hh:mm:ss')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
//runtime
//let uptime = await runtime(process.uptime())
//ping bnh

//====================
exports.one = (prefix, pushname, namaBot, ownerName) =>{
	return `ғᴢʏʙᴏᴛ ᴠᴇʀsɪᴏɴ 2.0
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɴᴇᴠᴢʏ
ᴀɴᴅ ᴛʜx ᴛᴏ ᴀʟʟ ᴄʀᴇᴀᴛᴏʀ ʙᴏᴛ
_╔═════════════════➤_
║▷𝑁𝑎𝑚𝑒🪪: _${db.data.users[m.sender].name}_
║▷𝑁𝑜𝑚𝑜𝑟📱: _wa.me/${m.sender.split("@")[0]}_
║▷𝑅𝑢𝑛𝑡𝑖𝑚𝑒⏱️: ${runtime(process.uptime())}
║▷𝐿𝑖𝑚𝑖𝑡🎫: _${db.data.users[m.sender].limit}_
║▷𝑂𝑤𝑛𝑒𝑟 🔖: _wa.me/+6285879466965_
║▷𝑅𝑎𝑚🗃️: _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_
║▷𝑆𝑝𝑒𝑒𝑑🚀: _Kecepatan Respon ${latensi.toFixed(4)} Second_
║▷ _${oldd - neww} miliseconds_
║▷𝑊𝑎𝑘𝑡𝑢⏰ :  _${wib}wib_
║                           _${wit}wit_
║                           _${wita}wita_
╠══════════════════➤
╠❒ _${prefix}play ${query}_
╠❒ _${prefix}joox ${query}_
╠❒ _${prefix}ytsearch ${query}_
╠❒ _${prefix}tinyurl_
╠❒ _${prefix}tourl_
╠❒ _${prefix}igstalk_ 
╠❒ _${prefix}githubstalk_
╠❒ _${prefix}pinterest ${query}_
╠❒ _${prefix}sfilesearch ${query}_
╠❒ _${prefix}google ${query}_
╚═══[ⒻⓩⓨⒷⓞⓣ-ⓜⓓ]════➤`} 
	exports.two = (prefix) =>{
	return `
 ғᴢʏʙᴏᴛ ᴠᴇʀsɪᴏɴ 2.0
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɴᴇᴠᴢʏ
ᴀɴᴅ ᴛʜx ᴛᴏ ᴀʟʟ ᴄʀᴇᴀᴛᴏʀ ʙᴏᴛ
_╔═════════════════➤_
║▷𝑁𝑎𝑚𝑒🪪: _${db.data.users[m.sender].name}_
║▷𝑁𝑜𝑚𝑜𝑟📱: _wa.me/${m.sender.split("@")[0]}_
║▷𝑅𝑢𝑛𝑡𝑖𝑚𝑒⏱️: ${runtime(process.uptime())}
║▷𝑂𝑤𝑛𝑒𝑟 🔖: _wa.me/+6285879466965_
║▷𝑅𝑎𝑚🗃️: _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_
║▷𝑆𝑝𝑒𝑒𝑑🚀: _Kecepatan Respon ${latensi.toFixed(4)} Second_
║▷ _${oldd - neww} miliseconds_
║▷𝑊𝑎𝑘𝑡𝑢⏰ :  _${wib}wib_
║                           _${wit}wit_
║                           _${wita}wita_
║═════════════════➤
╠❒ _${prefix}ceksn_
╠❒ _${prefix}sewabot_
╠❒ _${prefix}readme_
╠❒ _${prefix}snk_
╠❒ _${prefix}owner_
╠❒ _${prefix}listchannel_
╠❒ _${prefix}listonline_
╠❒ _${prefix}litsprivate_
╠❒ _${prefix}litsgroup_
╠❒ _${prefix}listblock_
╠❒ _${prefix}afk ${textf}_
╠❒ _${prefix}ai ${textf}_
╠❒ _${prefix}tts ${textf}_
╠❒ _${prefix}nowa ${npo}_
╚═════════════════➤
              `} 
	exports.tree = (prefix) =>{
	return `
 ғᴢʏʙᴏᴛ ᴠᴇʀsɪᴏɴ 2.0
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɴᴇᴠᴢʏ
ᴀɴᴅ ᴛʜx ᴛᴏ ᴀʟʟ ᴄʀᴇᴀᴛᴏʀ ʙᴏᴛ
_╔═════════════════➤_
║▷𝑁𝑎𝑚𝑒🪪: _${db.data.users[m.sender].name}_
║▷𝑁𝑜𝑚𝑜𝑟📱: _wa.me/${m.sender.split("@")[0]}_
║▷𝑅𝑢𝑛𝑡𝑖𝑚𝑒⏱️: ${runtime(process.uptime())}
║▷𝑂𝑤𝑛𝑒𝑟 🔖: _wa.me/+6285879466965_
║▷𝑅𝑎𝑚🗃️: _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_
║▷𝑆𝑝𝑒𝑒𝑑🚀: _Kecepatan Respon ${latensi.toFixed(4)} Second_
║▷ _${oldd - neww} miliseconds_
║▷𝑊𝑎𝑘𝑡𝑢⏰ :  _${wib}wib_
║                           _${wit}wit_
║                           _${wita}wita_
║═════════════════➤
╠❒ _${prefix}katabijak_
╠❒ _${prefix}quotes_
╠❒ _${prefix}pantun_
╚═════════════════➤
              `} 
	exports.four = (prefix) =>{
	return `
ғᴢʏʙᴏᴛ ᴠᴇʀsɪᴏɴ 2.0
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɴᴇᴠᴢʏ
ᴀɴᴅ ᴛʜx ᴛᴏ ᴀʟʟ ᴄʀᴇᴀᴛᴏʀ ʙᴏᴛ
_╔═════════════════➤_
║▷𝑁𝑎𝑚𝑒🪪: _${db.data.users[m.sender].name}_
║▷𝑁𝑜𝑚𝑜𝑟📱: _wa.me/${m.sender.split("@")[0]}_
║▷𝑅𝑢𝑛𝑡𝑖𝑚𝑒⏱️: ${runtime(process.uptime())}
║▷𝑂𝑤𝑛𝑒𝑟 🔖: _wa.me/+6285879466965_
║▷𝑅𝑎𝑚🗃️: _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_
║▷𝑆𝑝𝑒𝑒𝑑🚀: _Kecepatan Respon ${latensi.toFixed(4)} Second_
║▷ _${oldd - neww} miliseconds_
║▷𝑊𝑎𝑘𝑡𝑢⏰ :  _${wib}wib_
║                           _${wit}wit_
║                           _${wita}wita_
║═════════════════➤
╠❒ _${prefix}asupan_
╠❒ _${prefix}gorerandom_
╚═════════════════➤
              `} 
	exports.five = (prefix) =>{
	return `
ғᴢʏʙᴏᴛ ᴠᴇʀsɪᴏɴ 2.0
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɴᴇᴠᴢʏ
ᴀɴᴅ ᴛʜx ᴛᴏ ᴀʟʟ ᴄʀᴇᴀᴛᴏʀ ʙᴏᴛ
_╔═════════════════➤_
║▷𝑁𝑎𝑚𝑒🪪: _${db.data.users[m.sender].name}_
║▷𝑁𝑜𝑚𝑜𝑟📱: _wa.me/${m.sender.split("@")[0]}_
║▷𝑅𝑢𝑛𝑡𝑖𝑚𝑒⏱️: ${runtime(process.uptime())}
║▷𝑂𝑤𝑛𝑒𝑟 🔖: _wa.me/+6285879466965_
║▷𝑅𝑎𝑚🗃️: _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_
║▷𝑆𝑝𝑒𝑒𝑑🚀: _Kecepatan Respon ${latensi.toFixed(4)} Second_
║▷ _${oldd - neww} miliseconds_
║▷𝑊𝑎𝑘𝑡𝑢⏰ :  _${wib}wib_
║                           _${wit}wit_
║                           _${wita}wita_
║═════════════════➤
╠❒ _${prefix}antivionce_
╠❒ _${prefix}antilink_
╠❒ _${prefix}ephemeral_
╠❒ _${prefix}welcomegroup_
╠❒ _${prefix}delete_
╠❒ _${prefix}linkgc_
╠❒ _${prefix}revoke_
╠❒ _${prefix}kick_ 
╠❒ _${prefix}add_
╠❒ _${prefix}promote_
╠❒ _${prefix}demote_
╠❒ _${prefix}setsubject_
╠❒ _${prefix}setdesc_
╠❒ _${prefix}setppgrup_
╠❒ _${prefix}tagall_
╠❒ _${prefix}hidetag_
╚═════════════════➤
              `} 
	exports.six = (prefix) =>{
	return `
ғᴢʏʙᴏᴛ ᴠᴇʀsɪᴏɴ 2.0
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɴᴇᴠᴢʏ
ᴀɴᴅ ᴛʜx ᴛᴏ ᴀʟʟ ᴄʀᴇᴀᴛᴏʀ ʙᴏᴛ
_╔═════════════════➤_
║▷𝑁𝑎𝑚𝑒🪪: _${db.data.users[m.sender].name}_
║▷𝑁𝑜𝑚𝑜𝑟📱: _wa.me/${m.sender.split("@")[0]}_
║▷𝑅𝑢𝑛𝑡𝑖𝑚𝑒⏱️: ${runtime(process.uptime())}
║▷𝑂𝑤𝑛𝑒𝑟 🔖: _wa.me/+6285879466965_
║▷𝑅𝑎𝑚🗃️: _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_
║▷𝑆𝑝𝑒𝑒𝑑🚀: _Kecepatan Respon ${latensi.toFixed(4)} Second_
║▷ _${oldd - neww} miliseconds_
║▷??𝑎𝑘𝑡𝑢⏰ :  _${wib}wib_
║                           _${wit}wit_
║                           _${wita}wita_
║═════════════════➤
╠❒ _${prefix}tembakpasangan_ 
╠❒ _${prefix}terimapasangan_
╠❒ _${prefix}cekpasangan_
╠❒ _${prefix}putuspasangan_
╠❒ _${prefix}tolakpasangan_
╠❒ _${prefix}ikhlasinpasangan_
╠❒ _${prefix}tictactoe *reply partner*_
╠❒ _${prefix}slot_
╚═════════════════➤
              `} 
	exports.seven = (prefix) =>{
	return `
 ғᴢʏʙᴏᴛ ᴠᴇʀsɪᴏɴ 2.0
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɴᴇᴠᴢʏ
ᴀɴᴅ ᴛʜx ᴛᴏ ᴀʟʟ ᴄʀᴇᴀᴛᴏʀ ʙᴏᴛ
_╔═════════════════➤_
║▷𝑁𝑎𝑚𝑒🪪: _${db.data.users[m.sender].name}_
║▷𝑁𝑜𝑚𝑜𝑟📱: _wa.me/${m.sender.split("@")[0]}_
║▷𝑅𝑢𝑛𝑡𝑖𝑚𝑒⏱️: ${runtime(process.uptime())}
║▷𝑂𝑤𝑛𝑒𝑟 🔖: _wa.me/+6285879466965_
║▷𝑅𝑎𝑚🗃️: _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_
║▷𝑆𝑝𝑒𝑒𝑑🚀: _Kecepatan Respon ${latensi.toFixed(4)} Second_
║▷ _${oldd - neww} miliseconds_
║▷𝑊𝑎𝑘𝑡𝑢⏰ :  _${wib}wib_
║                           _${wit}wit_
║                           _${wita}wita_
║═════════════════➤
╠❒ _${prefix}igvideo  _${link}_
╠❒ _${prefix}igfoto ${link}_
╠❒ _${prefix}ytmp3 ${link}_
╠❒ _${prefix}ytmp4 ${link}_
╠❒ _${prefix}cocofun ${link}_
╠❒ _${prefix}likevideo ${link}_
╠❒ _${prefix}gitclone ${link}_
╠❒ _${prefix}tiktok ${link}_
╠❒ _${prefix}tiktoknowm ${link}_
╠❒ _${prefix}tiktokmusic ${link}_
╠❒ _${prefix}soundcloud ${link}_
╚═════════════════➤
              `} 
              exports.eight = (prefix) =>{
	return `ғᴢʏʙᴏᴛ ᴠᴇʀsɪᴏɴ 2.0
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɴᴇᴠᴢʏ
ᴀɴᴅ ᴛʜx ᴛᴏ ᴀʟʟ ᴄʀᴇᴀᴛᴏʀ ʙᴏᴛ
_╔═════════════════➤_
║▷𝑁𝑎𝑚𝑒🪪: _${db.data.users[m.sender].name}_
║▷𝑁𝑜𝑚𝑜𝑟📱: _wa.me/${m.sender.split("@")[0]}_
║▷𝑅𝑢𝑛𝑡𝑖𝑚𝑒⏱️: ${runtime(process.uptime())}
║▷𝑂𝑤𝑛𝑒𝑟 🔖: _wa.me/+6285879466965_
║▷𝑅𝑎𝑚🗃️: _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_
║▷𝑆𝑝𝑒𝑒𝑑🚀: _Kecepatan Respon ${latensi.toFixed(4)} Second_
║▷ _${oldd - neww} miliseconds_
║▷𝑊𝑎𝑘𝑡𝑢⏰ :  _${wib}wib_
║                           _${wit}wit_
║                           _${wita}wita_
║═════════════════➤
╠❒ _${prefix}candy ${textf}_
╠❒ _${prefix}christmas ${textf}_
╠❒ _${prefix}3dchristmas ${textf}_
╠❒ _${prefix}sparklechristmas ${textf}_
╠❒ _${prefix}deepsea ${textf}_
╠❒ _${prefix}scifi ${textf}_
╠❒ _${prefix}rainbow2 ${textf}_
╠❒ _${prefix}waterpipe ${textf}_
╠❒ _${prefix}spooky ${textf}_
╠❒ _${prefix}pencil ${textf}_
╠❒ _${prefix}circuit ${textf}_
╠❒ _${prefix}discovery ${textf}_
╠❒ _${prefix}metalic ${textf}_
╠❒ _${prefix}fiction ${textf}_
╠❒ _${prefix}demon ${textf}_
╠❒ _${prefix}transformer ${textf}_
╠❒ _${prefix}berry ${textf}_
╠❒ _${prefix}thunder ${textf}_
╠❒ _${prefix}3dstone2 ${textf}_
╠❒ _${prefix}neonlight ${textf}_
╠❒ _${prefix}glitch ${textf}_
╠❒ _${prefix}harrypotter ${textf}_
╠❒ _${prefix}brokenglass ${textf}_
╠❒ _${prefix}papercut ${textf}_
╠❒ _${prefix}watercolor ${textf}_
╠❒ _${prefix}multicolor ${textf}_
╠❒ _${prefix}neondevil ${textf}_
╠❒ _${prefix}underwater ${textf}_
╠❒ _${prefix}graffitibike ${textf}_
╠❒ _${prefix}snow ${textf}_
╠❒ _${prefix}cloud ${textf}_
╠❒ _${prefix}honey ${textf}_
╠❒ _${prefix}ice ${textf}_
╠❒ _${prefix}fruitjuice ${textf}_
╠❒ _${prefix}biscuit ${textf}_
╠❒ _${prefix}wood ${textf}_
╠❒ _${prefix}chocolate ${textf}_
╠❒ _${prefix}strawberry ${textf}_
╠❒ _${prefix}matrix ${textf}_
╠❒ _${prefix}blood ${textf}_
╠❒ _${prefix}dropwater ${textf}_
╠❒ _${prefix}toxic ${textf}_
╠❒ _${prefix}lava ${textf}_
╠❒ _${prefix}rock ${textf}_
╠❒ _${prefix}bloodglas ${textf}_
╠❒ _${prefix}halloween ${textf}_
╠❒ _${prefix}darkgold ${textf}_
╠❒ _${prefix}joker ${textf}_
╠❒ _${prefix}wicker ${textf}_
╠❒ _${prefix}firework ${textf}_
╠❒ _${prefix}skeleton ${textf}_
╠❒ _${prefix}blackpink ${textf}_
╠❒ _${prefix}sand ${textf}_
╠❒ _${prefix}glue ${textf}_
╠❒ _${prefix}1917 ${textf}_
╠❒ _${prefix}leaves ${textf}_
╠❒ _${prefix}demon ${textf}_
╚═════════════════➤`} 
	exports.nine = (prefix) =>{
	return `ғᴢʏʙᴏᴛ ᴠᴇʀsɪᴏɴ 2.0
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɴᴇᴠᴢʏ
ᴀɴᴅ ᴛʜx ᴛᴏ ᴀʟʟ ᴄʀᴇᴀᴛᴏʀ ʙᴏᴛ
_╔═════════════════➤_
║▷𝑁𝑎𝑚𝑒🪪: _${db.data.users[m.sender].name}_
║▷𝑁𝑜𝑚𝑜𝑟📱: _wa.me/${m.sender.split("@")[0]}_
║▷𝑅𝑢𝑛𝑡𝑖𝑚𝑒⏱️: ${runtime(process.uptime())}
║▷𝑂𝑤𝑛𝑒𝑟 🔖: _wa.me/+6285879466965_
║▷𝑅𝑎𝑚🗃️: _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_
║▷𝑆𝑝𝑒𝑒𝑑🚀: _Kecepatan Respon ${latensi.toFixed(4)} Second_
║▷ _${oldd - neww} miliseconds_
║▷𝑊𝑎𝑘𝑡𝑢⏰ :  _${wib}wib_
║                           _${wit}wit_
║                           _${wita}wita_
║═════════════════➤
╠❒ _${prefix}sticker ${im}_
╠❒ _${prefix}ttp ${im}_
╠❒ _${prefix}tomp3_
╠❒ _${prefix}swm_
╠❒ _${prefix}toimg_
╠❒ _${prefix}tovn_
╠❒ _${prefix}stickergif ${vd}_
╠❒ _${prefix}removebg ${im}_
╠❒ _${prefix}stickerwm ${textf}_
╠❒ _${prefix}emojimix2 ${emo}_
╠❒ _${prefix}emojimix ${emo} | ${emo}_
╠❒ _${prefix}whatmusic ${sd} | ${vd}_
╚═════════════════➤`} 
exports.bahasa = (prefix) => {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh `
}

exports.sewa= (prefix) => {
return `*Berikut List Harga Sewa Bot*

_Sewa Bot Untuk dimasukin kedalam group dan digunakan di dalam group_

• *Paket 1 : Rp. 15.000*
   • Bot Join 1 Group ✅
   • Durasi 1 Bulan ✅
   • Bisa Set Text Welcome/Left ✅
   • Fast Response  & 24 Jam Online✅

• *Paket 2 : Rp. 30.000*
    • Bot Join 1 Group ✅
    • Durasi 2 Bulan + 15 Hari ✅
    • Bisa Set Text Welcome/Left ✅
    • Fast Response  & 24 Jam Online✅


• *Paket 3 : Rp. 65.000*
    • Bot Join 2 Group ✅
    • Durasi 2 Bulan + 15 Hari ✅
    • Bisa Set Text Welcome/Left ✅
    • Fast Response  & 24 Jam Online✅


- *Jika Ingin Menambah Sewa Group Hanya : Rp. 10.000*
- *Jika Ingin Menambah Durasi Hanya : Rp. 10.000*


*Kegunaan Sewa Bot :*
• *Bot Bisa Di Masukin Kedalam Group*
• *Bisa Menyambut Member Baru / Keluar*
• *Fast Response & Ada Error Langsung di perbaiki*


Minat? Chat Owner Bot Dengan Ketik ${prefix}owner.`
}
exports.channel= (prefix) => {
return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.snk= (prefix) => {
return ` ➠ Batas usia pengguna (user) minimal 15 - 35 tahun, lebih atau kurang dari itu akan langsung ter-banned saat melakukan verifikasi.

➠ Data pengguna (user), grup, dan chat akan terhapus otomatis apabila tidak terdeteksi aktifitas selama 7 hari (alasan: pembersihan database).

➠ Dilarang melakukan spam, beri jeda untuk setiap penggunaan command selama 3 detik.

➠ Dilarang melakukan panggilan suara maupun video (Telepon & Video Call), jika itu dilakukan maka akan ter-blokir.

➠ Dilarang toxic terhadap bot karena akan medapatkan sanksi berupa banned dan blokir.

➠ Dilarang mencari & membuat konten dewasa (+18), misalnya membuat stiker dari foto telanjang atau mencari ASMR desah.

➠ Jika ingin membuka blokir dan banned masing² dikenai biaya sebesar 5K.

➠ Pelaku spam akan di banned permanen berlaku untuk user gratis dan premium (+ no refund).

➠ Semua Syarat & Ketentuan dapat berubah sewaktu waktu tanpa pemberitahuan terlebih dahulu.`
}
exports.readme= (prefix) => {
return ` *「 STALK 」*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktokstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}igstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smulestalk @tobz2k19*

            *「 YT SEARCH 」*

*[video]* Diisi dengan Judul Video yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}video Erpan1140*
Jika ingin mendownload video harap ketik #getvideo [IdDownload] atau #getvideo [urutan]

*[lagu]* Diisi dengan Judul Lagu yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}music Alan Walker Alone*
Jika ingin mendownload lagu harap ketik #getmusic [IdDownload] atau #getmusic [urutan]

*[IdDownload] atau [urutan]* Diisi dengan IdDownload yang valid tanpa tanda “[” dan “]”
Contoh : *Jika tidak reply pesan : ${prefix}getmusic Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getmusic 1*
Contoh : *Jika tidak reply pesan : ${prefix}getvideo Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getvideo 1*

            *「 DOWNLOADER 」*

*[linkStarmaker]* Diisi dengan link Starmaker yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*[linkTwitter]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp4 https://youtu.be/Bskehapzke8*

*[linkTiktok]* Diisi dengan link Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

*[linkSmule]* Diisi dengan link Smule yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smule https://www.smule.com/p/767512225_3062360163*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[linkTiktok]* Diisi dengan link facebookt Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalTv Indosiar*

*[query]* Diisi dengan query/pencarian yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}googlesearch siapa itu elaina*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}cuaca tangerang*

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *${prefix}quotemaker |Odading|Mang Oleh|Shark*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *${prefix}lirik aku bukan boneka*`
}
exports.slot=`📌55FIVE OFFICIAL💯

55five adalah game lotre terpercaya

🖌 Minimal isi ulang 20k untukk Penarikan 30k

🖌 Isi ulang dan penarikan bisa melalui Bank dan E-Wallet seperti DANA, OVO, GoPai dan lainya

🖇 Link daftar : https://55fivel.com/#/register?r_code=XoDaF476283

🖇 Link Grup : https://chat.whatsapp.com/HG2A8wTxbZG3OklmiQdgVB`

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyanBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})