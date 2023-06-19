process.on('uncaughtException', console.error) //Safe Log Error 
const fs = require('fs')
const chalk = require('chalk')

 
//bodyy
global.style = '║'
global.style1 = '╠❒'
global.tengah = '═════════════════➤'
global.atas = '╔═════════════════➤' 
global.bawah = '╚═════════════════➤' 
//settings 
global.owners = 'wa.me/6285879466965'
global.txt =  '*ᴛᴇxᴛ*'
global.link = '*ʟɪɴᴋ*'
global.query = '*ᴛᴇxᴛ*'
global.npo = '*ɴᴜᴍʙᴇʀ*'
global.mv = '*ɪᴍᴀɢᴇ/ᴠɪᴅᴇᴏ*'
global.im = '*ɪᴍᴀɢᴇ*'
global.sd = '*sᴏᴜɴᴅ*'
global.stc = '*sᴛɪᴄᴋᴇʀ*' 
global.vd ='*ᴠɪᴅᴇᴏ*'
global.emo = '*ᴇᴍᴏᴊɪ*'
global.prefix = '#'
global.pw = 'ye827e'
//style      

//Ubah Disini
global.fekg = 'ytmp3' 
global.fekg2 = 'ytmp4' 
global.fekg3 = 'play' 
global.fek = ['https://telegra.ph/file/d15a806974332a1c18b02.jpg'] 
global.owner = ['6285879466965']
global.premium = ['6285879466965']
global.bot = ['62858794669655']
global.ownerName = 'Nevz'
global.namaBot =  'ғᴢʏʙᴏᴛ-ᴍᴅ'
global.packname = 'Created By' 
global.author = 'Nevz'
global.prefa = ['#']
global.sessionName = 'botmd'
global.uangAwal = '2000' 
global.tahunTerbit ='2021-2023' 
global.koinAwal = '0' 
global.limitawal = {
	free: "75",
        premium: "unlimited"
}
global.ban = `_Anda terbanned mintalah owner untuk dibuka_`

//Message Nya Ubah Disini
global.mess = {
	prem: `Fitur ini khusus user premium`,
end: `Limit request anda *sudah habis*\nbisa didapatkan dengan *buylimit/Bermain Games* \n_Note : Jika ingin *premium* silahkan chat owner_`, 
admin: '*ᴏɴʟʏ ᴀᴅᴍɪɴ* • ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',
botAdmin: 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin!',
botOwner: '*ᴏɴʟʏ ᴅᴇᴠᴇʟᴏᴘᴇʀ* • ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ',
group: 'Perintah ini hanya bisa di gunakan dalam group!', 
private: 'Only Private Chat',
wait: `☾◅ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ ᴀ ᴍɪɴᴜᴛᴇs...▻☽`,
link: 'link yang anda kirim tidak valid!', 
link1: 'link Yang Anda Gunakan Eror',
nsfw: 'Nsfw Belum Diaktifkan Di Group ini',
regis: 'Silakan Daftar terlebih dahulu dengan ketik #verifikasi nama.umur\nContoh : #verifikasi Night.19',
done: 'Done!',

}
//listmenu
global.listOwner = `_╔═══[ᴏᴡɴᴇʀ ғᴇᴀᴛᴜʀᴇs]═══➤_
${global.style1} _${global.prefix}leave_
${global.style1} _${global.prefix}ban ${global.link}_
${global.style1} _${global.prefix}join_
${global.style1} _${global.prefix}unban_
${global.style1} _${global.prefix}bc_
${global.style1} _${global.prefix}self_
${global.style1} _${global.prefix}public_
${global.style1} _${global.prefix}listpc_
${global.style1} _${global.prefix}listgc_
${global.style1} _${global.prefix}on_
${global.style1} _${global.prefix}off_
${global.style1} _${global.prefix}case_
${global.style1} _${global.prefix}block_
${global.style1} _${global.prefix}unblock_
${global.style1} _${global.prefix}setexif_
${global.style1} _${global.prefix}user_
${global.style1} _${global.prefix}setppbot_
${global.style1} _${global.prefix}setfake_
╚═════════════════➤`
global.menu = `_╔══[ᴏᴡɴᴇʀ ғᴇᴀᴛᴜʀᴇs]══➤_
${global.style1} _${global.prefix}00_
╚═══════════════➤
_╔════[ sʜᴇᴀʀᴄʜɪɴɢ]════➤_
${global.style1} _${global.prefix}play ${global.query}_
${global.style1} _${global.prefix}ytsearch ${global.query}_
${global.style1} _${global.prefix}tinyurl ${global.link}_
${global.style1} _${global.prefix}lirik ${global.txt}_
${global.style1} _${global.prefix}tourl ${global.im}_
${global.style1} _${global.prefix}ssweb ${global.link}_
${global.style1} _${global.prefix}kbbi ${global.txt}_
${global.style1} _${global.prefix}ai ${global.txt}_
${global.style1} _${global.prefix}igstalk ${global.txt}_ 
${global.style1} _${global.prefix}githubstalk ${global.txt}_
${global.style1} _${global.prefix}mlstalk ${global.txt}_ 
${global.style1} _${global.prefix}wikipedia ${global.txt}_
${global.style1} _${global.prefix}google ${global.query}_
${global.style1} _${global.prefix}brainly ${global.query}_
╚═══════════════▻
_╔═════[ ɢᴀᴍᴇs ]═════➤_
${global.style1} _${global.prefix}tictactoe *reply partner*_
${global.style1} _${global.prefix}deltt_
${global.style1} _${global.prefix}slot_
${global.style1} _${global.prefix}tebakan_
${global.style1} _${global.prefix}tebaklirik_
${global.style1} _${global.prefix}tebakkata_
${global.style1} _${global.prefix}tebakkimia_
${global.style1} _${global.prefix}tebakbendera_
${global.style1} _${global.prefix}caklontong_
${global.style1} _${global.prefix}asahotak_
${global.style1} _${global.prefix}siapaaku_
${global.style1} _${global.prefix}susunkata_
${global.style1} _${global.prefix}tebakkalimat_
${global.style1} _${global.prefix}tekateki_
╚═══════════════▻
_╔═════[ᴘɪɴᴛᴇʀᴇsᴛ ]════➤_
${global.style1} _${global.prefix}pinterest ${global.query}_
${global.style1} _${global.prefix}loli_
${global.style1} _${global.prefix}waifu_
${global.style1} _${global.prefix}husbu_
╚═══════════════▻
_╔═════[ ᴏᴛʜᴇʀs]══════➤_
${global.style1} _${global.prefix}sewabot_
${global.style1} _${global.prefix}readme_
${global.style1} _${global.prefix}snk_
${global.style1} _${global.prefix}owner_
${global.style1} _${global.prefix}listonline_
${global.style1} _${global.prefix}litsprivate_
${global.style1} _${global.prefix}litsgroup_
${global.style1} _${global.prefix}listblock_
${global.style1} _${global.prefix}afk ${global.txt}_
${global.style1} _${global.prefix}ai ${global.txt}_
${global.style1} _${global.prefix}tts ${global.txt}_
${global.style1} _${global.prefix}nowa ${global.npo}_
${global.style1} _${global.prefix}runtime_
${global.style1} _${global.prefix}ping_
${global.style1} _${global.prefix}tagme_
${global.style1} _${global.prefix}me_
╚═══════════════▻
_╔══════[ ǫᴜᴏᴛᴇs]═════➤_
${global.style1} _${global.prefix}cinta_
${global.style1} _${global.prefix}rindu_
${global.style1} _${global.prefix}mimpi_
${global.style1} _${global.prefix}sedih_
${global.style1} _${global.prefix}sendiri_
${global.style1} _${global.prefix}sabar_
${global.style1} _${global.prefix}kesedihan_
${global.style1} _${global.prefix}pernikahan_
${global.style1} _${global.prefix}kemerdekaan_
╚═══════════════▻
_╔═══[ ɢʀᴏᴜᴘ sᴇᴛᴛɪɴɢ]════➤_
${global.style1} _${global.prefix}antivionce on/off_
${global.style1} _${global.prefix}antilink on/off_
${global.style1} _${global.prefix}ephemeral_
${global.style1} _${global.prefix}welcomegroup on/off_
${global.style1} _${global.prefix}delete_
${global.style1} _${global.prefix}linkgc_
${global.style1} _${global.prefix}revoke_
${global.style1} _${global.prefix}kick_ 
${global.style1} _${global.prefix}add_
${global.style1} _${global.prefix}promote_
${global.style1} _${global.prefix}demote_
${global.style1} _${global.prefix}setsubject_
${global.style1} _${global.prefix}setdesc_
${global.style1} _${global.prefix}setppgrup_
${global.style1} _${global.prefix}tagall_
${global.style1} _${global.prefix}hidetag_
╚═══════════════▻
_╔════[ ғᴜɴᴍᴇɴᴜ ]═════➤_
${global.style1} _${global.prefix}cerpen_
${global.style1} _${global.prefix}faktaunik_
${global.style1} _${global.prefix}tembakpasangan_ 
${global.style1} _${global.prefix}terimapasangan_
${global.style1} _${global.prefix}cekpasangan_
${global.style1} _${global.prefix}putuspasangan_
${global.style1} _${global.prefix}tolakpasangan_
${global.style1} _${global.prefix}ikhlasinpasangan_
${global.style1} _${global.prefix}halah_
${global.style1} _${global.prefix}hilih_
${global.style1} _${global.prefix}huluh_
${global.style1} _${global.prefix}heleh_
${global.style1} _${global.prefix}holoh_
${global.style1} _${global.prefix}rate ${global.txt}_
${global.style1} _${global.prefix}bisakah ${global.txt}_
${global.style1} _${global.prefix}apakah ${global.txt}_
${global.style1} _${global.prefix}kapankah ${global.txt}_
${global.style1} _${global.prefix}ganteng ${global.txt}_
${global.style1} _${global.prefix}cantik ${global.txt}_
${global.style1} _${global.prefix}kerang ${global.txt}_
${global.style1} _${global.prefix}more ${global.txt} | ${global.txt}_
${global.style1} _${global.prefix}couple_
╚═══════════════▻
_╔════[ ᴅᴏᴡɴʟᴏᴀᴅ]════➤_
${global.style1} _${global.prefix}igvideo  _${global.link}_
${global.style1} _${global.prefix}igfoto ${global.link}_
${global.style1} _${global.prefix}ytmp3 ${global.link}_
${global.style1} _${global.prefix}ytmp4 ${global.link}_
${global.style1} _${global.prefix}mediafire ${global.link}_
${global.style1} _${global.prefix}cocofun ${global.link}_
${global.style1} _${global.prefix}likevideo ${global.link}_
${global.style1} _${global.prefix}gitclone ${global.link}_
${global.style1} _${global.prefix}tiktok ${global.link}_
${global.style1} _${global.prefix}tiktoknowm ${global.link}_
${global.style1} _${global.prefix}tiktokmusic ${global.link}_
${global.style1} _${global.prefix}soundcloud ${global.link}_
╚═══════════════▻
_╔════[Converter]════➤_
${global.style1} _${global.prefix}qc ${global.txt}_
${global.style1} _${global.prefix}ebinary ${global.txt}_
${global.style1} _${global.prefix}dbinary ${global.txt}_
${global.style1} _${global.prefix}style ${global.txt}_
${global.style1} _${global.prefix}sticker ${global.im}_
${global.style1} _${global.prefix}enc ${global.txt}_
${global.style1} _${global.prefix}ttp ${global.txt}_
${global.style1} _${global.prefix}tomp3 ${global.vd}_
${global.style1} _${global.prefix}swm ${global.txt}_
${global.style1} _${global.prefix}toimg ${global.stc}_
${global.style1} _${global.prefix}tomp4 ${global.stc}_
${global.style1} _${global.prefix}tovn ${global.sd}_
${global.style1} _${global.prefix}stickergif ${global.vd}_
${global.style1} _${global.prefix}removebg ${global.im}_
${global.style1} _${global.prefix}stickerwm ${global.txt}_
${global.style1} _${global.prefix}bass ${global.sd}_
${global.style1} _${global.prefix}bown ${global.sd}_
${global.style1} _${global.prefix}robot ${global.sd}_
${global.style1} _${global.prefix}deep ${global.sd}_
${global.style1} _${global.prefix}earrape ${global.sd}_
${global.style1} _${global.prefix}fast ${global.sd}_
${global.style1} _${global.prefix}fat ${global.sd}_
${global.style1} _${global.prefix}nightcore ${global.sd}_
${global.style1} _${global.prefix}reverse ${global.sd}_
${global.style1} _${global.prefix}slow ${global.sd}_
${global.style1} _${global.prefix}smooth ${global.sd}_
╚═══════════════▻
_╔═════[Nulis]═════➤_
${global.style1} _${global.prefix}nulis_
${global.style1} _${global.prefix}nulis2_
${global.style1} _${global.prefix}folio_
${global.style1} _${global.prefix}folio2_
${global.style1} _${global.prefix}hvs_
╚═══════════════▻
_╔═════[Primbon]═════➤_
${global.style1} _${global.prefix}nomerhoki_
${global.style1} _${global.prefix}artimimpi_
${global.style1} _${global.prefix}ramaljodoh_
${global.style1} _${global.prefix}ramaljodohbali_
${global.style1} _${global.prefix}suamiistri_
${global.style1} _${global.prefix}ramalcinta_
${global.style1} _${global.prefix}artinama_
${global.style1} _${global.prefix}cocoknama_
${global.style1} _${global.prefix}cocokpasangan_
${global.style1} _${global.prefix}jadiannikah_
${global.style1} _${global.prefix}sifatusaha_
${global.style1} _${global.prefix}rezeki_
${global.style1} _${global.prefix}pekerjaan_
${global.style1} _${global.prefix}nasib_
${global.style1} _${global.prefix}penyakit_
${global.style1} _${global.prefix}tarot_
${global.style1} _${global.prefix}fengshui_
${global.style1} _${global.prefix}haribaik_
${global.style1} _${global.prefix}harisangar_
${global.style1} _${global.prefix}harisial_
${global.style1} _${global.prefix}harinaga_
${global.style1} _${global.prefix}arahrezeki_
${global.style1} _${global.prefix}peruntungan_
${global.style1} _${global.prefix}weton_
${global.style1} _${global.prefix}karakter_
${global.style1} _${global.prefix}keberuntungan_
${global.style1} _${global.prefix}memancing_
${global.style1} _${global.prefix}masasubur_
╚═══════════════▻
_╔════[ ᴛᴇxᴛ ᴍᴀᴋᴇʀ]═══➤_
${global.style1} _${global.prefix}candy ${global.txt}_
${global.style1} _${global.prefix}tahta ${global.txt}_
${global.style1} _${global.prefix}christmas ${global.txt}_
${global.style1} _${global.prefix}3dchristmas ${global.txt}_
${global.style1} _${global.prefix}sparklechristmas ${global.txt}_
${global.style1} _${global.prefix}deepsea ${global.txt}_
${global.style1} _${global.prefix}scifi ${global.txt}_
${global.style1} _${global.prefix}rainbow2 ${global.txt}_
${global.style1} _${global.prefix}waterpipe ${global.txt}_
${global.style1} _${global.prefix}spooky ${global.txt}_
${global.style1} _${global.prefix}pencil ${global.txt}_
${global.style1} _${global.prefix}circuit ${global.txt}_
${global.style1} _${global.prefix}discovery ${global.txt}_
${global.style1} _${global.prefix}metalic ${global.txt}_
${global.style1} _${global.prefix}fiction ${global.txt}_
${global.style1} _${global.prefix}demon ${global.txt}_
${global.style1} _${global.prefix}transformer ${global.txt}_
${global.style1} _${global.prefix}berry ${global.txt}_
${global.style1} _${global.prefix}thunder ${global.txt}_
${global.style1} _${global.prefix}3dstone2 ${global.txt}_
${global.style1} _${global.prefix}neonlight ${global.txt}_
${global.style1} _${global.prefix}glitch ${global.txt}_
${global.style1} _${global.prefix}harrypotter ${global.txt}_
${global.style1} _${global.prefix}brokenglass ${global.txt}_
${global.style1} _${global.prefix}papercut ${global.txt}_
${global.style1} _${global.prefix}watercolor ${global.txt}_
${global.style1} _${global.prefix}multicolor ${global.txt}_
${global.style1} _${global.prefix}neondevil ${global.txt}_
${global.style1} _${global.prefix}underwater ${global.txt}_
${global.style1} _${global.prefix}graffitibike ${global.txt}_
${global.style1} _${global.prefix}snow ${global.txt}_
${global.style1} _${global.prefix}cloud ${global.txt}_
${global.style1} _${global.prefix}honey ${global.txt}_
${global.style1} _${global.prefix}ice ${global.txt}_
${global.style1} _${global.prefix}fruitjuice ${global.txt}_
${global.style1} _${global.prefix}biscuit ${global.txt}_
${global.style1} _${global.prefix}wood ${global.txt}_
${global.style1} _${global.prefix}chocolate ${global.txt}_
${global.style1} _${global.prefix}strawberry ${global.txt}_
${global.style1} _${global.prefix}matrix ${global.txt}_
${global.style1} _${global.prefix}blood ${global.txt}_
${global.style1} _${global.prefix}dropwater ${global.txt}_
${global.style1} _${global.prefix}toxic ${global.txt}_
${global.style1} _${global.prefix}lava ${global.txt}_
${global.style1} _${global.prefix}rock ${global.txt}_
${global.style1} _${global.prefix}bloodglas ${global.txt}_
${global.style1} _${global.prefix}halloween ${global.txt}_
${global.style1} _${global.prefix}darkgold ${global.txt}_
${global.style1} _${global.prefix}joker ${global.txt}_
${global.style1} _${global.prefix}wicker ${global.txt}_
${global.style1} _${global.prefix}firework ${global.txt}_
${global.style1} _${global.prefix}skeleton ${global.txt}_
${global.style1} _${global.prefix}blackpink ${global.txt}_
${global.style1} _${global.prefix}sand ${global.txt}_
${global.style1} _${global.prefix}glue ${global.txt}_
${global.style1} _${global.prefix}1917 ${global.txt}_
${global.style1} _${global.prefix}leaves ${global.txt}_
${global.style1} _${global.prefix}demon ${global.txt}_
╚═══════════════➤
𝚃𝚑𝚡 𝚃𝚘
~@𝚊𝚍𝚒𝚠𝚊𝚓𝚜𝚑𝚒𝚗𝚐
~𝚑𝚒𝚜𝚘𝚔𝚊-𝚖𝚘𝚛𝚘𝚞
~𝙳𝚒𝚔𝚊 𝚊𝚛𝚍𝚗𝚝
~𝚁𝚎𝚜𝚝𝚊
~𝙸𝚕𝚑𝚊𝚖
~𝙽𝚎𝚟𝚣
_~𝚊𝚗𝚍 𝚊𝚕𝚕 𝚌𝚛𝚎𝚊𝚝𝚘𝚛 𝙱𝚘𝚝_
The Bot program has been running from ${global.tahunTerbit}`
//global.quotes

//Sesuaikan
global.thumb = { url : 'https://telegra.ph/file/de6d085e41436bf460be3.jpg'}
global.thumb1 ={ url: 'https://telegra.ph/file/b86bec7b5889031848108.jpg'} 
global.thumb2 = { url: 'https://telegra.ph/file/cfa44511b60419ea31cb0.jpg'}
global.thumb3 = { url: 'https://telegra.ph/file/53e9f3c2b76afe9b3ad98.jpg'}
global.erorurl =  {url: 'https://telegra.ph/file/df5397e6ed9ebcd05c0cb.jpg'} 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
