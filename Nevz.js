process.on('uncaughtException', console.error) //Safe Log Error 
require('./settings')
const { default: 
makeWASocket, 
BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
downloadContentFromMessage, 
downloadHistory, protَo, getMessage, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
areJidsSameUser, 
getContentType } = require('@adiwajshing/baileys')
const { parseMention, smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, getRandom, generateProfilePicture, reSize} = require('./lib/myfunc')
const axios = require('axios')
const scp1 = require('./scrape/scraper') 
const chalk = require('chalk')
const cheerio = require("cheerio")
const { exec, spawn, execSync } = require("child_process")
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const jsobfus = require('javascript-obfuscator')
const mlstalk = require('./scrape/mlstalk')
const fs = require('fs')
const moment = require('moment-timezone')
const util = require('util')
const ra = require("ra-api");
const xfar = require('xfarr-api');
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')
const { createHash } = require('crypto')
const yts = require('yt-search')
const crypto = require("crypto")
const brainly = require('brainly-scraper')
const {  tiktokdl, tiktokdlv3, tiktokdlv2, instagramStory, instagramdl, instagramdlv2, instagramdlv3, instagramdlv4, facebookdl, facebookdlv2} = require('@bochilteam/scraper')
let fakeimage = fs.readFileSync("./src/tas.jpeg")
let { msgFilter }= require('./lib/antispam')
const simple = require('./lib/myfunc')
const textpro = require('./lib/textpro')
const cron = require('node-cron')
const similarity = require('similarity')
const hx = require('hxz-api')
const { pinterest, hentai, wallpaper, wikimedia, quotesAnime } = require('./lib/scraper')
const noapi = require('./lib/api') 
const api2 = require('./lib/api2')
const {ytdl} = require('./lib/ytdl') 
const { toAudio, toPTT} = require('./lib/converter')
const { yta, ytv, ytv2} = require('./lib/y2mate')
const ban = JSON.parse(fs.readFileSync('./src/banned.json'))
const { slot, bahasa, sewa, readme, channel, snk}= require('./Nev/menu')
const threshold = 0.72
const level = require("./lib/level");
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
//======settings.js======//
//ubah di settings.js
const owners = global.owners
const textf = global.textf 
const link = global.link 
const query = global.query 
const npo = global.npo 
const mv = global.mv 
const im = global.im 
const sd = global.sd 
const vd = global.vd
const emo = global.emo 
const prefix = global.prefix
const menucok = global.menu
const listowner = global.listOwner

//body
const style = global.style 
const style1 = global.style1 
const tengah = global.tengah
const atas = global.atas 
const bawah = global.bawah
const joen = global.pw
//lib
const {
	rugaapi
	} = fs.readFileSync('./lib/rugaapi.js')
//games
tebaklirik = {}
tebakkata = {}
tebakkimia = {}
tebaktebakan = {}
tebakbendera = {}
tebakanime = {}
caklontong = {}
asahotak = {}
siapakahaku = {}
susunkata = {}
tebakkalimat = {}
tekateki = {}

//ping bnh

//====================
//Nev
//=====
  //'
module.exports = Nev = async(Nev, m, chatUpdate, store) => {
           try {
           	 
           	   if (!m.message) return
        m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
        if (m.key && m.key.remoteJid === 'status@broadcast') return
        if (!Nev.public && !m.key.fromMe && chatUpdate.type === 'notify') return
           const { type, quotedMsg, mentioned, now, fromMe } = m
           var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowI || m.text) : ''
           var budy = (typeof m.text == 'string' ? m.text : '')
           let senderr = m.isGroup ? m.participant : m.key.remoteJid
           const prefix = /^[!#$%^&./\\]/.test(body) ? body.match(/^[!#../\\]/gi) : '#'
           const isCmd = body.startsWith(prefix) 
           const command = body.replace(prefix, '').split(/ +/).shift().toLowerCase()
           const args = body.trim().split(/ +/).slice(1)
           const pushname = m.pushName || "No Name"
           const botNumber = await Nev.decodeJid(Nev.user.id)
           const isOwner = [...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
           const itsMe = m.sender == botNumber ? true : false
           const text = args.join(" ")
           const q = args.join(" ")
           const sender = m.sender 
           const quoted = m.quoted ? m.quoted : m
           const mime = (quoted.msg || quoted).mimetype || ''
           const qmsg = (quoted.msg || quoted)
           const isMedia = /image|video|sticker|document|audio/.test(mime)
           const from = m.key.remoteJid
           const isGroup = m.key.remoteJid.endsWith('@g.us')
           const groupMetadata = m.isGroup ? await Nev.groupMetadata(m.chat).catch(e => {}) : ''
           const groupName = m.isGroup ? groupMetadata.subject : ''
           const participants = m.isGroup ? await groupMetadata.participants : ''
           const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
           const groupOwner = m.isGroup ? groupMetadata.owner : ''
           const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
           const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
           const isLevelingOn = isGroup ? _leveling.includes(from) : true
           const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
           const isNumber = x => typeof x === 'number' && !isNaN(x)
           const time = moment().tz('asia/jakarta').format("hh:mm:ss")
           const wib = moment.tz('asia/jakarta').format('hh:mm:ss')
           const wita = moment.tz('asia/makassar').format("hh:mm:ss")
           const wit = moment.tz('asia/jayapura').format("hh:mm:ss")
           const hour_now = moment().format('hh:mm:ss')
           let user = db.data.users[m.sender]
           const isBanned = ban.includes(m.sender)
           const uangUser = global.uangAwal
const koinUser = global.koinAwal
const currentLevel = level.getLevelingLevel(m.sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 18)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       const userLevel = level.getLevelingLevel(m.sender, _level)
       const userXp = level.getLevelingXp(m.sender, _level)
      

    
                      //slot
             let uptime = await runtime(process.uptime())
           const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
                if(time2 < "23:59:00"){
        var ucapanWaktu = '𝑆𝑒𝑙𝑎𝑚𝑎𝑡 𝑚𝑎𝑙𝑎𝑚🌃'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = '𝑠𝑒𝑙𝑎𝑚𝑎𝑡 𝑝𝑒𝑡𝑎𝑛𝑔🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = '𝑠𝑒𝑙𝑎𝑚𝑎𝑡 𝑠𝑜𝑟𝑒🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = '𝑠𝑒𝑙𝑎𝑚𝑎𝑡 𝑠𝑖𝑎𝑛𝑔🏙️'
} 
        if(time2 < "11:00:00"){
        var ucapanWaktu = '𝑠𝑒𝑙𝑎𝑚𝑎𝑡 𝑝𝑎𝑔𝑖🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = '𝑆𝑒𝑙𝑎𝑚𝑎𝑡 𝑚𝑎𝑙𝑎𝑚🌃'
}
//redBright
	const levelRole = level.getLevelingLevel(m.sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        }
        

//fake reply
const floc = {
         key: {
            fromMe: false,
            "participant": "0@s.whatsapp.net",
            "remoteJid": "6289523258649-1604595598@g.us"
         },
         "message": {
            orderMessage: {
               itemCount: '750',
               status: 200,
               thumbnail: fs.readFileSync('./src/tas.jpeg'),
               surface: 200,
               message: `[${global.namaBot}]~[©Created By ${global.ownerName}_]`,
               orderTitle: 'memek',
               sellerJid: '0@s.whatsapp.net'
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
         sendEphemeral: true
      }
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const fkontak = {
         key: {
            participant: `0@s.whatsapp.net`,
            ...(from ? {
               remoteJid: `6283136505591-1614953337@g.us`
            } : {})
         },
         message: {
            'contactMessage': {
               'displayName': `${ucapanWaktu} ${pushname}`,
               'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanWaktu} ${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
               'jpegThumbnail': fakeimage,
               thumbnail: fakeimage,
               sendEphemeral: true
            }
         }
      }
      
  const ftroli = {
  	
         key: {
            fromMe: false,
            "participant": "0@s.whatsapp.net",
            "remoteJid": "6289523258649-1604595598@g.us"
         },
         "message": {
            orderMessage: {
               itemCount: 2023,
               status: 200,
               thumbnail: await fs.readFileSync('./src/tas.jpeg'),
               surface: 200,
               message: `${ucapanWaktu} ${pushname}`,
               orderTitle: 'memek',
               sellerJid: '0@s.whatsapp.net'
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
         sendEphemeral: true
      }
      
      const reply = async (teks) => {
         return await Nev.sendFakeLink(m.chat, teks, ucapanWaktu, pushname, m)
      }
      const getCase = (cases) => {
            return "case  "+`'${cases}'`+fs.readFileSync("./Nevz.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
        }
    const  reactionMessage = {
                    react: {
                        text: '🚮',
                        key: m.key
                    }
                }
          const  reactionMessage2 = {
                react: {
                        text: '🆗',
                        key: m.key
                    }
                }
                const  react3 = {
                react: {
                        text: '✅',
                        key: m.key
                    }
                }
                const  salahh = {

                react: {

                        text: '❎',
                        key: m.key
                    }
                }
                let urps = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
  const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`Nev Coding`, "h": `Hmm`,'seconds': '359996400', 'caption': `Nev Coding`, 'jpegThumbnail': fs.readFileSync('./src/tas.jpeg')}}}
  const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": `${global.namaBot}`, "caption": `${global.namaBot}`, 'jpegThumbnail': fs.readFileSync('./src/tas.jpeg')}}}
        const ftext = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${ucapanWaktu} ${pushname}\n  ${moment().utcOffset('+0700').format('HH:mm:ss')} ${moment.tz('Asia/Jakarta').format('DD/MM/YYYY')}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./src/tas.jpeg')}}}
        const ftoko = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./src/tas.jpeg`)},"title": `${ucapanWaktu} ${pushname}`,"description": "Nev Official", "currencyCode": "IDR","priceAmount1000": "p","retailerId": "Nev Official","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
       const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

        // FUNCTION LEVELING
       if (!m.key.fromMe && !level.isGained(m.sender)) {
                         	level.addLevelingXp(m.sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(m.sender, _level)) {
       level.addLevelingLevel(m.sender, 1, _level)
     const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
      } 
       }
                               try {
                         	
                         	let isNumber = x => typeof x === 'number' && !isNaN(x)
                            m = simple.smsg(Nev, m) || m
            if (!m) return
            m.exp = 0 
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
            	  
       
            if (!isNumber(user.afkTime)) user.afkTime = -1
            if (!('afkReason' in user))
            user.afkReason = ''
            if (!('pasangan' in user))
            user.pasangan = ''
            if (!('registered' in user))
            user.registered = false
            if (!user.registered) {
            if (!('name' in user)) 
            user.name = Nev.getName(m.sender)
            if (!isNumber(user.age))
            user.age = -1
            if (!isNumber(user.regTime))
            user.regTime = -1
            }
            if (!isNumber(user.level)) user.level = userLevel
            if (!isNumber(user.xp)) user.xp = userXp
            if (!isNumber(user.role)) user.role = role
            if (!('autolevelup' in user)) user.autolevelup = true
            } else global.db.data.users[m.sender] = {
            afkTime: -1,
            afkReason: '',
            pasangan: '',
            registered: false,
            name: Nev.getName(m.sender),
            age: -1,
            regTime: -1,
            exp: 0, 
                role: role,
            level: userLevel
                     
            }
            
            // limit
       
                     	
				
      //>>>
     
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
            	
            if (!('antilink' in chats)) chats.antilink = false
            if (!('welcome' in chats)) chats.welcome = false
            if (!('maintenance' in chats)) chats.maintenance = false
            if (!('antivionce' in chats)) chats.antivionce = false
            } else global.db.data.chats[m.chat] = {
            antivionce: false,
            antilink: false,
            welcome: false, 
            maintenance: false,
            }
            } catch (err) {
            console.error(err) 
            }
            async function sendPlay(from, query) {
  var url = await yts(query)
             url = url.videos[0].url
                noapi.youtube(url).then(async(data) => {
Nev.sendMessage(m.chat, {
text: `---- Youtube Play -----\n\n❒ *Title :* _${data.title}_\n❒ *Quality :* _${data.quality}_\n❒ *Url :* _${url}_\n\nᴍᴇᴅɪᴀ sᴇᴅᴀɴɢ ᴅɪᴋɪʀɪᴍ ᴍᴏʜᴏɴ ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ \n------ Search By Fzy-Bot --------`,
contextInfo: {
	mentionedJid: [m.sender],
	
externalAdReply: {
title: `Hai ${pushname}
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ${global.ownerName}`,
body: `${ucapanWaktu}`,
thumbnailUrl: data.thumb,
sourceUrl: "konsol.com",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true, 

}}},  
{
      quoted: m
   })
          Nev.sendMessage(m.chat, { audio: { url: data.mp3}, mimetype: 'audio/mpeg' , fileName: `${global.ownerName}.mp3` }, { quoted: m })
             })
             }
            function clockString(ms) {
            let h = Math.floor(ms / 3600000)
            let m = Math.floor(ms / 60000) % 60
            let s = Math.floor(ms / 1000) % 60
            console.log({ms,h,m,s})
            return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
            }
            function msToTime(duration) {
            var milliseconds = parseInt((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24)    
            hours = (hours < 10) ? "0" + hours : hours
            minutes = (minutes < 10) ? "0" + minutes : minutes
            seconds = (seconds < 10) ? "0" + seconds : seconds
            return hours + " jam " + minutes + " menit " + seconds + " detik"
            }
            const pickRandom = (arr) => {
	        return arr[Math.floor(Math.random() * arr.length)]
		    }
     
            iَf (global.db.data.chats[m.chat].antivionce) {
            if (m.mtype == 'viewOnceMَessage') {
            teks = `「 *Anti ViewOnce Message* 」\n➯ Name : ${m.pushName}\n➯ User : @${m.sender.split("@")[0]}\n➯ Clock : ${moment.tz('Asia/Kolkata').format('HH:mm:ss')} \n➯ Date : ${moment.tz('Asia/Kolkata').format('DD/MM/YYYY')}\n➯ MessageType : ${m.mtype}`
            Nev.sendTextWithMentions(m.chat, teks, m)
            await sleep(500)
            m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`Maybe it's been opened by a bot`))
            }
            }
            if (global.db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
            if (!isBotAdmins) return reply(mess.botAdmin)
            var gclink = (`https://chat.whatsapp.com/`+await Nev.groupInviteCode(m.chat))
            var isLinkThisGc = new RegExp(gclink, 'i')
            var isgclink = isLinkThisGc.test(m.text)
            if (isAdmins) return reply('[Admin Group Detected[NO KICK]') 
if (isgclink) return reply(`Link Grup Lain Terdeteksi, Link Group Ini Ternyata`)
            reply(`[Link Group Detected[KICK ${m.sender.split("@")[0]}]`)
            sleep(500)
            Nev.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
            }
            for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`Jangan tag dia!Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
            }
            if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            Nev.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''} Selama ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
            }
            // Public & Self
        if (!Nev.public) {
            if (!m.key.fromMe && !isOwner) return 
        }
                                 if (m.message && msgFilter.isFiltered(m.chat)) {
            Nev.readMessages([m.key])
            Nev.sendPresenceUpdate('available', m.chat)
console.log(chalk.yellow(`${pushname}[SPAM]=> ${command}`))
    reply('[DONT SPAM]')
    }
             if (m.mesَsage) {
             	 Nev.readMessages([m.key])
            Nev.sendPresenceUpdate('available', m.chat)
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m FzyBot-md \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.red(pushname), 'Di', chalk.yellow(groupName ? groupName : '[Private Chat]' ), 'args :', chalk.white(args.length))
            }
if (/^a(s|ss)alamu('|)alaikum$/.test(budy?.toLowerCase())) {
         const jawab_salam = 'Wa\'alaikumusalam Warohmatulahi Wabarokatuh'
         return reply(jawab_salam)
      }
//gamemenu
        if (tebaklirik.hasOwnProperty(m.chat) && !isCmd && m.quoted) {
                kuis = true
                jawaban = tebaklirik[m.chat]
                 if (budy.toLowerCase() == jawaban) {
                    Nev.sendMessage(m.chat, react3)
                	await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar ${pushname} (✅)🎉*\n`)
                	clearTimeout(tebaklirik[m.chat])
                    delete tebaklirik[m.chat]
                    fs.writeFileSync("./database/data2/tebaklirik.json", JSON.stringify(tebaklirik))
                    db.data.users[m.sender].uang += 1500
                }else Nev.sendMessage(m.chat, salahh)  
            }
            if (tebakkata.hasOwnProperty(m.chat) && !isCmd && m.quoted) {
                kuis = true
                jawaban = tebakkata[m.chat]
                if (budy.toLowerCase() == jawaban) {
                    Nev.sendMessage(m.chat, react3)
                	await reply(`*_🎮 tebakkata 🎮_*\n\n*•* *Jawaban Benar ${pushname} (✅)🎉*\n`)
                    db.data.users[m.sender].uang += 1500
                	clearInterval(tebakkata[m.chat])
                    delete tebakkata[m.chat]
                    fs.writeFileSync("./database/data2/tebakkata.json", JSON.stringify(tebakkata))
                }else Nev.sendMessage(m.chat, salahh) 
}
            
            if (tebakkimia.hasOwnProperty(m.chat) && !isCmd && m.quoted) {
                kuis = true
                jawaban = tebakkimia[m.chat]
                 if (budy.toLowerCase() == jawaban) {
                    Nev.sendMessage(m.chat, react3)
                     db.data.users[m.sender].uang += 1500
                	await reply(`*_🎮 tebakkimia 🎮_*\n\n*•* *Jawaban Benar ${pushname} (✅)🎉*\n`)
                	clearTimeout(tebakkimia[m.chat])
                    delete tebakkimia[m.chat]
                    fs.writeFileSync("./database/data2/tebakkimia.json", JSON.stringify(tebakkimia))
                }else Nev.sendMessage(m.chat, salahh) 
            }
            if (tebaktebakan.hasOwnProperty(m.chat) && !isCmd && m.quoted) {
                kuis = true
                jawaban = tebaktebakan[m.chat]
                 if (budy.toLowerCase() == jawaban) {
                    Nev.sendMessage(m.chat, react3)
                     db.data.users[m.sender].uang += 1500
                	await reply(`*_🎮 tebaktebakan 🎮_*\n\n*•* *Jawaban Benar ${pushname} (✅)🎉*\n`)
                	clearTimeout(tebaktebakan[m.chat])
                    delete tebaktebakan[m.chat]
                    fs.writeFileSync("./database/data2/tebaktebakan.json", JSON.stringify(tebaktebakan))
                }else Nev.sendMessage(m.chat, salahh) 
            }
            if (tebakbendera.hasOwnProperty(m.chat) && !isCmd && m.quoted) {
                kuis = true
                jawaban = tebakbendera[m.chat]
                if (budy.toLowerCase() == jawaban) {
                    Nev.sendMessage(m.chat, react3)
                      db.data.users[m.sender].uang += 1500
                	await reply(`*_🎮 tebakbendera 🎮_*\n\n*•* *Jawaban Benar ${pushname} (✅)🎉*\n`)
                	clearTimeout(tebakbendera[m.chat])
                    delete tebakbendera[m.chat]
                    fs.writeFileSync("./database/data2/tebakbendera.json", JSON.stringify(tebakbendera))
                }else Nev.sendMessage(m.chat, salahh) 
            }
            if (tebakanime.hasOwnProperty(m.chat) && !isCmd && m.quoted) {
                kuis = true
                jawaban = tebakanime[m.chat]
                 if (budy.toLowerCase() == jawaban) {
                    Nev.sendMessage(m.chat, react3)
                     db.data.users[m.sender].uang += 1500
                	await reply(`*_🎮 tebakanime 🎮_*\n\n*•* *Jawaban Benar ${pushname} (✅)🎉*\n`)
                	clearTimeout(tebakanime[m.chat])
                    delete tebakanime[m.chat]
                    fs.writeFileSync("./database/data2/tebakanime.json", JSON.stringify(tebakanime))
                }else Nev.sendMessage(m.chat, salahh) 
            }
            if (caklontong.hasOwnProperty(m.chat) && !isCmd && m.quoted) {
                kuis = true
                jawaban = caklontong[m.chat]
                 if (budy.toLowerCase() == jawaban) {
                    Nev.sendMessage(m.chat, react3)
                     db.data.users[m.sender].uang += 1500
                	await reply(`*_🎮 caklontong 🎮_*\n\n*•* *Jawaban Benar ${pushname} (✅)🎉*\n`)
                	clearTimeout(caklontong[m.chat])
                    delete caklontong[m.chat]
                    fs.writeFileSync("./database/data2/caklontong.json", JSON.stringify(caklontong))
                }else Nev.sendMessage(m.chat, salahh) 
            }
            if (asahotak.hasOwnProperty(m.chat) && !isCmd && m.quoted) {
                kuis = true
                jawaban = asahotak[m.chat]
                 if (budy.toLowerCase() == jawaban) {
                    Nev.sendMessage(m.chat, react3)
                     db.data.users[m.sender].uang += 1500
                	await reply(`*_🎮 asahotak 🎮_*\n\n*•* *Jawaban Benar ${pushname} (✅)🎉*\n`)
                	clearTimeout(asahotak[m.chat])
                    delete asahotak[m.chat]
                    fs.writeFileSync("./database/data2/asahotak.json", JSON.stringify(asahotak))
                }else Nev.sendMessage(m.chat, salahh) 
            }
            if (siapakahaku.hasOwnProperty(m.chat) && !isCmd && m.quoted) {
                kuis = true
                jawaban = siapakahaku[m.chat]
                 if (budy.toLowerCase() == jawaban) {
                    Nev.sendMessage(m.chat, react3)
                     db.data.users[m.sender].uang += 1500
                	await reply(`*_🎮 siapakahaku🎮_*\n\n*•* *Jawaban Benar ${pushname} (✅)🎉*\n`)
                	clearTimeout(siapakahaku[m.chat])
                    delete siapakahaku[m.chat]
                    fs.writeFileSync("./database/data2/siapakahaku.json", JSON.stringify(siapakahaku))
                }else Nev.sendMessage(m.chat, salahh) 
            }
            if (susunkata.hasOwnProperty(m.chat) && !isCmd && m.quoted) {
                kuis = true
                jawaban = susunkata[m.chat]
                 if (budy.toLowerCase() == jawaban) {
                    Nev.sendMessage(m.chat, react3)
                     db.data.users[m.sender].uang += 1500
                	await reply(`*_🎮 susunkata🎮_*\n\n*•* *Jawaban Benar ${pushname} (✅)🎉*\n`)
                	clearTimeout(susunkata[m.chat])
                    delete susunkata[m.chat]
                    fs.writeFileSync("./database/data2/susunkata.json", JSON.stringify(susunkata))
                }else Nev.sendMessage(m.chat, salahh) 
            }
            if (tebakkalimat.hasOwnProperty(m.chat) && !isCmd && m.quoted) {
                kuis = true
                jawaban = tebakkalimat[m.chat]
                 if (budy.toLowerCase() == jawaban) {
                    Nev.sendMessage(m.chat, react3)
                     db.data.users[m.sender].uang += 1500
                	await reply(`*_🎮 tebakkalimat 🎮_*\n\n*•* *Jawaban Benar ${pushname} (✅)🎉*\n`)
                	clearTimeout(tebakkalimat[m.chat])
                    delete tebakkalimat[m.chat]
                    fs.writeFileSync("./database/data2/tebakkalimat.json", JSON.stringify(tebakkalimat))
                }else Nev.sendMessage(m.chat, salahh) 
            }
            if (tekateki.hasOwnProperty(m.chat) && !isCmd && m.quoted) {
                kuis = true
                jawaban = tekateki[m.chat]
                 if (budy.toLowerCase() == jawaban) {
                    Nev.sendMessage(m.chat, react3)
                     db.data.users[m.sender].uang += 1500
                	await reply(`*_🎮 tekateki 🎮_*\n\n*•* *Jawaban Benar ${pushname} (✅)🎉*\n`)
                	clearTimeout(tekateki[m.chat])
                    delete tekateki[m.chat]
                    fs.writeFileSync("./database/data2/tekateki.json", JSON.stringify(tekateki))
                }else Nev.sendMessage(m.chat, salahh) 
            }
    
            
            //TICTACTOE
                this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `🏆@${winner.split('@')[0]} Menang!🏆` : isTie ? `Game berakhir seri` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await Nev.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await Nev.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

switch(command) {
	      case'menu':
                 case'help':
 {
 	const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
 		 let dnew = new Date(new Date + 3600000)
            let user = db.data.users[m.sender]
            let week = dnew.toLocaleDateString('en', {
               weekday: 'long'
            })
            let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(dnew / 84600000) % 5]
            let date = dnew.toLocaleDateString('en', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            })
            let dateIslamic = Intl.DateTimeFormat('en' + '-TN-u-ca-islamic', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            }).format(dnew)
if (isBanned) return reply(global.ban)

 Nev.sendMessage(m.chat, reactionMessage2) 
respon0hd = `_╔══════[USERS]═══════➤_
${style}⌬ ɴᴀᴍᴇ🪪: *${db.data.users[m.sender].name}*
${style}⌬ ɴᴜᴍʙᴇʀ: *wa.me/${m.sender.split("@")[0]}*
${style}⌬ ᴛᴀɢ🥏 : *@${m.sender.split("@")[0]}*
${style}⌬ ғᴇᴀᴛᴜʀᴇs : *ғʀᴇᴇ/ɴᴏ ʟɪᴍɪᴛ*
╚═════════════════➤
_╔═══════[INFO]═══════➤_
${style}⌬ ʀᴜɴᴛɪᴍᴇ: *${runtime(process.uptime())}*
${style}⌬ ᴍᴏᴅᴇ : *${Nev.public ? 'Public' : `Self`}*
${style}⌬ ᴏᴡɴᴇʀ : *wa.me/+${global.owner}*
${style}⌬ sᴘᴇᴇᴅ: *Kecepatan Respon ${latensi.toFixed(4)} Second*
${style}⌬ ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
${style}⌬ ᴍᴀsᴇʜɪ: *${week}, ${date}*
${style}⌬ ʜɪᴊʀɪᴀʜ: *${dateIslamic}*
${style}⌬ ʀᴇsᴛ ᴀᴘɪ: *https://mfarels.my.id/api*
${style}⌬ ᴡᴀᴋᴛᴜ:  *${wib}wib*
${style} 𝙉𝙤𝙩𝙚✆ : #reportdep 𝙟𝙞𝙠𝙖 𝙛𝙞𝙩𝙪𝙧 𝙚𝙧𝙤𝙧
╚═════════════════➤
${menucok}`
let jsonData = ['https://telegra.ph/file/c4f24f6a3f220cd1a9649.jpg','https://telegra.ph/file/b43b9d056386898be0505.jpg'] 
            let randIndex = jsonData[Math.floor(Math.random() * jsonData.length)] 
Nev.sendMessage(m.chat, { 
document: { url: 'https://chat.whatsapp.com/' }, 
mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
fileName: `[🅆🄴🄻🄲🄾🄼🄴]`, 
pageCount: 2023, 
fileLength: 9999, 
caption: `${respon0hd}`,
jpegThumbnailUrl: randIndex, 
contextInfo:{
	mentionedJid: [m.sender], 
        externalAdReply:{
        	thumbnailUrl: randIndex,
            title:`⫹⫺ 𝙷𝚒 ${pushname}, ʜᴇʀᴇ's ᴀ ᴍᴇɴᴜ ʟɪsᴛ ғʀᴏᴍ ${global.namaBot} ᴜsɪɴɢ ɪᴛ ᴡɪsᴇʟʏ`,
            body: `${global.namaBot}`,
            sourceUrl: `chat.whatsapp.com/settings`, 
            mediaType: 1,
renderLargerThumbnail: true, 
}}}, {quoted: floc}) } 

break
case'00':
if (!isOwner) return reply(mess.botOwner)
 {
 	const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
 		 let dnew = new Date(new Date + 3600000)
            let user = db.data.users[m.sender]
            let week = dnew.toLocaleDateString('en', {
               weekday: 'long'
            })
            let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(dnew / 84600000) % 5]
            let date = dnew.toLocaleDateString('en', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            })
            let dateIslamic = Intl.DateTimeFormat('en' + '-TN-u-ca-islamic', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            }).format(dnew)
if (isBanned) return reply(global.ban)

 Nev.sendMessage(m.chat, reactionMessage2) 
respon0hd = `_╔══════[USERS]═══════➤_
${style}⌬ ɴᴀᴍᴇ🪪: _${db.data.users[m.sender].name}_
${style}⌬ ɴᴜᴍʙᴇʀ: _wa.me/${m.sender.split("@")[0]}_
${style}⌬ ᴛᴀɢ🥏 : _@${m.sender.split("@")[0]}_
╚═════════════════➤
_╔═══════[INFO]═══════➤_
${style}⌬ ʀᴜɴᴛɪᴍᴇ⏱️: _${runtime(process.uptime())}_
${style}⌬ ᴍᴏᴅᴇ : _${Nev.public ? 'Public' : `Self`}_
${style}⌬ sᴘᴇᴇᴅ🚀: _Kecepatan Respon ${latensi.toFixed(4)} Second_
${style}⌬ ᴘʟᴀᴛғᴏʀᴍ📱 : ${os.platform()}
${style}⌬ ᴍᴀsᴇʜɪ🗓️ : ${week}, ${date}
${style}⌬ ʜɪᴊʀɪᴀʜ📆 : ${dateIslamic}
${style}⌬ ᴡᴀᴋᴛᴜ⏰ :  
${style} _${wib}wib_                        
${style} _${wit}wit_                       
${style} _${wita}wita_
╚═════════════════➤
${listowner}`
let jsonData = ['https://telegra.ph/file/d8a36f2f6a6acdbe9c462.jpg','https://telegra.ph/file/c4f24f6a3f220cd1a9649.jpg','https://telegra.ph/file/171e7ed2d775f9b98c2db.jpg'] 
            let randIndex = jsonData[Math.floor(Math.random() * jsonData.length)] 
Nev.sendMessage(m.chat, {
text: `${respon0hd}`,
contextInfo: {
	mentionedJid: [m.sender],
externalAdReply: {
title: `${ucapanWaktu} ${pushname}
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ${global.ownerName}`,
body: ``,
thumbnailUrl: randIndex,
sourceUrl: "https://chat.whatsapp.com/me",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true, 
}}}, 
{
      quoted: floc
   })} 

break

case 'tagme':
    	      if (isBanned) return reply(global.ban)

            Nev.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} `, ftroli)
            db.data.users[m.sender].koin += 1
 
break 
case 'me':
case'profil':
case'profile':
    	      if (isBanned) return reply(global.ban)

_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              for (let i = 0; i < 10; i++) 
negro = `_╔═══════[YOUR]═══════➤_
${style1} _Name🪪 : ${pushname}_
${style1} _Nomor🔢 : ${m.sender.split("@")[0]}_
${style1} _Tag : @${m.sender.split("@")[0]}_
${style1} _Xp : ${userXp}_
${style1} _Level : ${userLevel}_
${style1} _Role : ${role}_
${bawah} `
 Nev.sendMessage(m.chat, {text: `${negro}`,contextInfo: {mentionedJid: [m.sender],externalAdReply: {title: `${ucapanWaktu} ${pushname}©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ${global.ownerName}`,body: `YOUR DATA`,thumbnailUrl: 'https://telegra.ph/file/b46d75d5b53eca7d2234b.jpg',sourceUrl: "https://chat.whatsapp.com/",mediaType: 1,renderLargerThumbnail: true, }}}, {quoted: floc})

break 
case 'bc': case 'broadcast': case 'bcall': {
  if (!isOwner && !m.key.fromMe) return reply(mess.botOwner)
  if (!text) throw `Text mana?\n\nExample : ${prefix + command} ${global.ownerName}`
  anu = await store.chats.all().map(v => v.id)
  reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let yoi of anu) {
  await sleep(1500)
  let txt = `*Broadcast ${Nev.user.name}*\n\n${text}`
  Nev.sendText(yoi, txt, fkontak)
  }
  reply('Sukses Broadcast')
  }
            
 

break 
case'col':
Nev.sendPoll(m.chat, "List Menu", ['owner','Ping'])
break
case 'self': {
                if (!isOwner) return reply(mess.botOwner)
                Nev.public = false
                reply('Self Mode Activate')
            }
             

break 
            
            case 'public': {
                if (!isOwner && !itsMe) return reply(mess.botOwner)
                Nev.public = true
                reply('Public Mode Activate')
            }
             

break 
   case 'join':
              if (!isOwner) return reply(mess.botOwner)
              if (!text) throw reply( 'Masukkan Link Group!')
              if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
              reply(mess.wait)
              const pk = args[0].split('https://chat.whatsapp.com/')[1]
              await Nev.groupAcceptInvite(pk).then((res) => reply(jsonformat(res)))

break 
   
   case 'sewabot':{
              if (isBanned) return reply(global.ban)

cit =  `*Berikut List Harga Sewa Bot*
_Sewa Bot Untuk dimasukin kedalam group dan digunakan di dalam group_

• _5 hari: Rp. 5k_
• _1 minggu: Rp. 7k_ 
• _2 minggu: Rp. 14k_ 
• _3 minggu: Rp. 20k_ 

• _1 Bulan: Rp. 25k_
• _2 Bulan: Rp. 50k_ 
• _3 Bulan: Rp. 75k_
• _4 Bulan: Rp. 80k_ 
• _5 Bulan+owner: Rp. 100k_ 
   • Bot max 3 Group ✅
   • Durasi 1 Bulan/minggu ✅
   • Bisa Set Text Welcome/Left ✅
   • Fast Response
- *Jika Ingin Menambah Sewa Group Hanya : Rp. 10*
- *Jika Ingin Menambah Durasi Hanya : Rp. 10*
*Kegunaan Sewa Bot :*
• *Bot Bisa Di Masukin Kedalam Group*
• *Bisa Menyambut Member Baru / Keluar*
• *Fast Response & Ada Error Langsung di perbaiki*


Minat? Chat Owner Bot Dengan Ketik ${prefix}owner.`
              Nev.sendMessage(m.chat, {text: cit},{quoted: fkontak}) 
   }
               

break 
   case 'readme':
              if (isBanned) return reply(global.ban)


              Nev.sendText(m.chat, readme(prefix), fkontak)  

break 
              
   case 'snk':
              if (isBanned) return reply(global.ban)

              Nev.sendText(m.chat, snk(prefix), fkontak)  

break 
   case 'listchannel':
              if (isBanned) return reply(global.ban)

              Nev.sendText(m.chat, channel(prefix), fkontak)  

break 
   case 'owner':
   case 'ownerblok':
              Nev.sendContact(m.chat, global.owner, fkontak)           
break            
   case 'afk':   
    	      if (isBanned) return reply(global.ban)

              user.afkTime = + new Date
              user.afkReason = text
              Nev.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} Telah Afk${text ? ': ' + text : ''}`, ftroli)

break 
   case 'ceksn':
              if (isBanned) return reply(global.ban)

              let Regg = /\|?(.*)([.|] *?)([0-9]*)$/i
              let jp = createHash('md5').update(m.sender).digest('hex')
              reply(`*▷ YOU SN:* ${jp}`)

break 
   case 'tts': 
              if (isBanned) return reply(global.ban)

	          if (args.length < 1) return reply('Kirim perintah *#tts [ Bahasa ] [ Teks ]*, contoh *#tts id halo semua*')
	          try {
              const gtts = require('./lib/gtts')(args[0]) 
              if (args.length < 2) return reply('Textnya mana gan?') 
              var ngab = body.slice(8)
              ranm = getRandom('.mp3')
              rano = getRandom('.ogg')
              ngab.length > 600 ? reply('Textnya kebanyakan gan') : gtts.save(ranm, ngab, function() {
              exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
              fs.unlinkSync(ranm)
              buff = fs.readFileSync(rano) 
              if (err) return reply('Gagal gan:(')
              Nev.sendMessage(m.chat, {audio: buff, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
              fs.unlinkSync(rano)
              })
              }) 
              } catch (err) {
              console.log(err)
              Nev.sendText(m.chat, bahasa(prefix), fkontak)  
              }

break 
    case 'simi':
		      if (isBanned) return reply(global.ban)

			  if (!text) throw reply(`Penggunaan ${command} text`)
			  var cimcimi = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
              Nev.sendMessage(m.chat, { text: cimcimi.success}, {quoted:m}) 

break 


   case 'listblock':
              if (isBanned) return reply(global.ban)

              await Nev.fetchBlocklist().then(async data => {
		      let txt = `*「  Daftar Nomor Yang Diblokir  」*\n\n*Total:* ${data.length}\n\n┌─\n`
		      for (let i of data) {
			  txt += `├ @${i.split("@")[0]}\n`
		      }
		      txt += "└────"
		      return Nev.sendTextWithMentions(m.chat, txt, fkontak) 
	          }).catch(err => {
		      console.log(err);
		      reply('tidak ada yang diblokir!')
	          })

break 
   case 'litsprivate': {
     	     if (isBanned) return reply(global.ban)

              let abu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
              let tteks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${abu.length} Chat\n\n`
              for (let i of abu) {
              let nama = store.messages[i].array[0].pushName
              tteks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
              }
              Nev.sendTextWithMentions(m.chat, tteks, fkontak) 
              }    

break       
   case 'litsgroup':
      	    if (isBanned) return reply(global.ban)

              let jadin = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
              let tekps = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${jadin.length} Group\n\n`
              for (let i of jadin) {
              let metadata = await Nev.groupMetadata(i)
              tekps += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
              }
              Nev.sendTextWithMentions(m.chat, tekps, m)

break 
   case 'delete': case 'del':
                     if (!isOwner) return reply(mess.botOwner)
if (isBanned) return reply(global.ban)

              if (!m.quoted) throw reply('reply pesnya') 
              let { chat, fromMe } = m.quoted
                                Nev.sendMessage(m.chat, reactionMessage)
              Nev.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })

break 
   case 'listonline': case 'liston': 
              if (isBanned) return reply(global.ban)

              let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
              online = [...Object.keys(store.presences[id]), botNumber]
              Nev.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })   

break 
   case 'nowa':
              if (isBanned) return reply(global.ban)

              let regex = /x/g
	          if (!text) throw reply('Input Number')
	          if (!text.match(regex)) throw reply( `Ex: ${prefix + command} ${m.sender.split('@')[0]}x`)
	          let random = text.match(regex).length, total = Math.pow(10, random), array = []
	          await reply(mess.wait)
	          for (let i = 0; i < total; i++) {
		      let list = [...i.toString().padStart(random, '0')]
		      result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net'
	          if (await Nev.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
		      info = await Nev.fetchStatus(result).catch(_ => {})
		      array.push({ exists: true, jid: result, ...info })
		      } else {
			  array.push({ exists: false, jid: result })
		      }
	          }
	          txt = '• Registered\n\n' + array.filter(v => v.exists)
		     .map(v => `No: wa.me/${v.jid.split('@')[0]}\nBio: ${v.status || ''}\nDate: ${formatDate(v.setAt)}`).join('\n\n')
	          + '\n\n• Unregister\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n')
	          reply(txt) 

break
case'wikipedia':
case'wiki':
if (!text) return reply(`contoh: ${prefix+command} komet`)
if(args.length > 2) reply('gunakan bahasa yg baku') 
const res = await axios.get(`https://id.m.wikipedia.org/w/index.php?search=${text}`)
const $ = cheerio.load(res.data)
const hasil = []
let wiki = $('#mf-section-0').find('p').text()
let thumb = $('#mf-section-0').find('div > div > a > img').attr('src')
thumb = thumb ? thumb : '//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png'
thumb = 'https:' + thumb
let judul = $('h1#section_0').text()
reply(`*[WIKIPEDIA]*\n➠ *${text}*\n➠ ${wiki}`)
break
	case'ttp': 
if (args.length > 5) return reply('text terlalu banyak') 
{
const ttp = require('./lib/api');
  if (!text) throw reply(`Tolong berikan Text!\n\n*Example:* ${command} hai guys`)
 ttp(text)
    .then((res) => {
      return Nev.sendImageAsSticker(m.chat, res.result, m, { packname, author });
    })
    .catch((err) => {
      console.error(err);
    });    
    }

break
case'attp': 
if (args.length > 5) return reply('text terlalu banyak') 
{
const attp = require('./lib/api');
  if (!text) throw reply(`Tolong berikan Text!\n\n*Example:* ${command} hai guys`)
 attp(text)
    .then((res) => {
      return Nev.sendVideoAsSticker(m.chat, res.result, m, { packname, author });
    })
    .catch((err) => {
      console.error(err);
    });    
    }

break
///converter Link///
     case 'tourl':
               if (isBanned) return reply(global.ban)

if(!m.quoted) return reply('Balas image') 
               reply(mess.wait)
               let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
               let mpoedia = await Nev.downloadAndSaveMediaMessage(quoted)
               if (/image/.test(mime)) {
               anu = await TelegraPh(mpoedia)
               reply(util.format(anu))
               } else if (!/image/.test(mime)) {
               anu = await UploadFileUgu(mpoedia)
               reply(util.format(anu))
               }
               await fs.unlinkSync(mpoedia)  

break 
    case 'tinyurl':
               if (isBanned) return reply(global.ban)

               if (args.length < 1) return reply(`Penggunaan :\n*${prefix}tinyurl link*`)
               if (!isUrl(args[0])) return reply(`Masukkan link yang benar`)
               axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)
              .then((a) => reply(`Nih ${a.data}`))
              .catch(() => reply(`Error, harap masukkan link dengan benar`))

break 
//JADIAN//
   case 'tembakpasangan':
       case'tembak':
   if (isBanned) return reply(global.ban)

              if(isNaN(text)) {
              number = text.split`@`[1]
              } else if(!isNaN(text)) {
              number = text
              }             
              if (!m.isGroup) return reply(mess.group)
              if(!text && !m.quoted) return reply(`Masukan nomor, tag target atau balas pesan target`)
              if(isNaN(number)) return reply(`_*Nomor tidak valid.*_`)
              if(number.length > 15) return reply( `*_Format Tidak Valid.*_`)
              try {
              if(text) {
              user = number + '@s.whatsapp.net'
              } else if(m.quoted.sender) {
              user = m.quoted.sender
              } else if(m.mentionedJid) {
              user = number + '@s.whatsapp.net'
              }  
              } catch (e) {
              } finally {
              let groupMetadata = m.isGroup ? await Nev.groupMetadata(m.chat) : {}
              let participants = m.isGroup ? groupMetadata.participants : []
              let users = m.isGroup ? participants.find(u => u.id == user) : {}
              if(!users) return reply(`*_Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*_`)
              if(user === m.sender) return reply(`_*Tidak bisa berpacaran dengan diri sendiri.*_`)
              if(user === Nev.user.id) return reply( `_*Tidak bisa berpacaran dengan saya. :')*_`)
              if (typeof global.db.data.users[user] == "undefined") return reply("_*Orang yang anda tag tidak terdaftar di dalam database.*_")  
              if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
              Nev.sendTextWithMentions(m.chat,`Kamu sudah berpacaran dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}\n\nSilahkan putus dulu (ketik .putuspasangan untuk memutuskan hubungan) untuk menembak @${user.split('@')[0]}\n\nBtw yang setia dikit banget!`,m,{contextInfo: {mentionedJid: [user,global.db.data.users[m.sender].pasangan]}})
              }else if(global.db.data.users[user].pasangan != ""){
              var pacar = global.db.data.users[user].pasangan
              if (global.db.data.users[pacar].pasangan == user){
              if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return Nev.sendText(m.chat,`Anda sudah berpacaran dengan @${pacar.split('@')[0]}`,m,{contextInfo: {mentionedJid: [pacar]}})
              Nev.sendTextWithMentions(m.chat,`Maaf, @${user.split('@')[0]} sudah berpacaran dengan @${pacar.split('@')[0]}\nSilahkan cari pasangan lain!`,m,{contextInfo:{ mentionedJid: [user,pacar]}})
              }else{
              global.db.data.users[m.sender].pasangan = user
              Nev.sendTextWithMentions(m.chat,`Anda baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${prefix}terimapasangan @user* untuk menerima\n*${prefix}tolakpasangan @user untuk menolak*`,m,{contextInfo: {mentionedJid: [user]}})
              }
              }else if (global.db.data.users[user].pasangan == m.sender){
              global.db.data.users[m.sender].pasangan = user
              Nev.sendTextWithMentions(m.chat,`Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu 😉`,m,{contextInfo: {mentionedJid: [user] }})
              }else {
              global.db.data.users[m.sender].pasangan = user
              Nev.sendTextWithMentions(m.chat,`Kamu baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${prefix}terimapasangan @user* untuk menerima\n*${prefix}tolakpasangan @user untuk menolak*`,m,{contextInfo: {mentionedJid: [user]}})
              }
              }

break          
   case 'terimapasangan':
   if (isBanned) return reply(global.ban)

              if(isNaN(text)) {
              number = text.split`@`[1]
              } else if(!isNaN(text)) {
              number = text
              }
             const format = num => {
             const n = String(num),
             p = n.indexOf('.')
             return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) => p < 0 || i < p ? `${m},` : m)
             }
             if (!m.isGroup) return reply(mess.group)   
             if(!text && !m.quoted) return reply(`Masukan nomor, tag target atau balas pesan target`)
             if(isNaN(number)) return reply( `_*Nomor tidak valid.*_`)
             if(number.length > 15) return reply( `*_Format Tidak Valid.*_`)
             try {
             if(text) {
             user = number + '@s.whatsapp.net'
             } else if(m.quoted.sender) {
             user = m.quoted.sender
             } else if(m.mentionedJid) {
             user = number + '@s.whatsapp.net'
             }  
             } catch (e) {
             } finally {
             let groupMetadata = m.isGroup ? await Nev.groupMetadata(m.chat) : {}
             let participants = m.isGroup ? groupMetadata.participants : []
             let users = m.isGroup ? participants.find(u => u.jid == user) : {}
             if(users) return reply(`*_Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*_`)
             if(user === m.sender) return reply(`_*Tidak bisa berpacaran dengan diri sendiri.*_`)
             if(user === Nev.user.jid) return reply(`_*Tidak bisa berpacaran dengan saya. :')*_`)
             if (typeof global.db.data.users[user] == "undefined") return reply("_*Orang yang anda tag tidak terdaftar di dalam database.*_")   
             if(global.db.data.users[user].pasangan != m.sender){
             Nev.sendTextWithMentions(m.chat,`Maaf @${user.split('@')[0]} tidak sedang menembak anda`,m,{contextInfo: {mentionedJid: [user]}})
             }else{
             global.db.data.users[m.sender].pasangan = user
             Nev.sendTextWithMentions(m.chat,`Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu @${user.split('@')[0]}  ❤️ @${m.sender.split('@')[0]} 😉`,m,{contextInfo:{ mentionedJid: [m.sender,user]}})
             }
             }	
             
 

break 
  case 'cekpasangan':
  if (isBanned) return reply(global.ban)


             if(isNaN(text)) {
             number = text.split`@`[1]
             } else if(!isNaN(text)) {
             number = text
             }
             if(number.length > 15 || (number.length < 9 && number.length > 0)) return reply(`Maaf, Nomor yang anda masukan salah!`)
             if (!text && !m.quoted){
             user = m.sender
             orang = "Kamu"
             }else if(text) {
             user = number + '@s.whatsapp.net'
             orang = "Orang yang kamu tag"
             } else if(m.quoted.sender) {
             user = m.quoted.sender
             orang = "Orang yang kamu balas"
             } else if(m.mentionedJid) {
             user = number + '@s.whatsapp.net'
             orang = "Orang yang kamu tag"
             }
             if (typeof global.db.data.users[user] == "undefined"){
             return reply("Target tidak terdaftar di dalam database!")
             }
             if (typeof global.db.data.users[global.db.data.users[user].pasangan] == "undefined" && global.db.data.users[user].pasangan != ""){
             return reply("Target tidak terdaftar di dalam database!")
             }
             if (global.db.data.users[user].pasangan == "") {
             Nev.sendTextWithMentions(m.chat, `${orang} tidak memiliki pasangan dan tidak sedang menembak siapapun\n\n*Ketik .tembakpasangan @user untuk menembak seseorang*`, fkontak) 
             }else if (global.db.data.users[global.db.data.users[user].pasangan].pasangan != user){
             Nev.sendTextWithMentions(m.chat, `${orang} sedang menunggu jawaban dari @${global.db.data.users[user].pasangan.split('@')[0]} karena sedang tidak diterima atau di tolak\n\nKetik *${prefix}ikhlasinpasangan* untuk mengikhlaskan!`, m,{contextInfo: { mentionedJid: [global.db.data.users[user].pasangan]}})
             }else {
             Nev.sendTextWithMentions(m.chat, `${orang} sedang menjalani hubungan dengan @${global.db.data.users[user].pasangan.split('@')[0]} ❤️`, m,{contextInfo: { mentionedJid: [global.db.data.users[user].pasangan]}})
             }
             
 

break 
  case 'putuspasangan':
             if (isBanned) return reply(global.ban)


             ayg = global.db.data.users[m.sender]
             if(ayg.pasangan == ""){
             return reply(`Anda tidak memiliki pasangan.`)
             } 
             pacar = global.db.data.users[global.db.data.users[m.sender].pasangan]
             if (typeof pacar == "undefined"){
             Nev.sendTextWithMentions(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             ayg.pasangan = ""
             }
             if (m.sender == pacar.pasangan){
             Nev.sendTextWithMentions(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             ayg.pasangan = ""
             pacar.pasangan = ""
             }else {
             reply(`Anda tidak memiliki pasangan.`)
             }
             
 

break

  case 'tolakpasangan':
  if (isBanned) return reply(global.ban)


             if(isNaN(text)) {
             number = text.split`@`[1]
             } else if(!isNaN(text)) {
             number = text
             }
             if (!m.isGroup) return reply(mess.group)
             
             if(!text && !m.quoted) return Nev.sendText(m.chat, `Masukan nomor, tag atau balas pesan target.`, fkontak)  
             if(isNaN(number)) return Nev.sendText(m.chat, `Nomor yang anda masukan salah!`, fkontak) 
             if(number.length > 15) return Nev.sendText(m.chat, `Format salah!`, m)
             try {
             if(text) {
             user = number + '@s.whatsapp.net'
             } else if(m.quoted.sender) {
             user = m.quoted.sender
             } else if(m.mentionedJid) {
             user = number + '@s.whatsapp.net'
             }  
             } catch (e) {
             } finally {
             let groupMetadata = m.isGroup ? await Nev.groupMetadata(m.chat) : {}
             let participants = m.isGroup ? groupMetadata.participants : []
             let users = m.isGroup ? participants.find(u => u.id == user) : {}
             if(users) return reply(`Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.`)
             if(user === m.sender) return reply(`Tidak bisa berpacaran dengan diri sendiri!`)
             if(user === Nev.user.jid) return reply(`*Tidak bisa berpacaran dengan saya t_t`)    
             if(global.db.data.users[user].pasangan != m.sender){
             Nev.sendTextWithMentions(m.chat,`Maaf @${user.split('@')[0]} tidak sedang menembak anda`,m,{contextInfo: { mentionedJid: [user]}})
             }else{
             global.db.data.users[user].pasangan = ""
             Nev.sendTextWithMentions(m.chat,`Anda baru saja menolak @${user.split('@')[0]} untuk menjadi pasangan anda!`,m,{contextInfo: {mentionedJid: [user]}})
             }
             }
             
 

break 
  case 'ikhlasinpasangan':
             if (isBanned) return reply(global.ban)


             if (global.db.data.users[m.sender].pasangan == "") return reply( `Kamu sedang tidak menembak siapapun!`)
             if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return Nev.sendTextWithMentions(m.chat, `Kamu telah berpacaran dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`, m, {contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             Nev.sendTextWithMentions(m.chat, `Kamu sudah mengikhlaskan @${global.db.data.users[m.sender].pasangan.split('@')[0]} karena dia tidak memberikan jawaban diterima atau ditolak`, m, {contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             global.db.data.users[m.sender].pasangan = ""
             
 

break 
//TEXT MAKER//
    case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
    case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
    case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
    case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
    case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
    case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
    case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
    case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
    case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker': case'cool':
    case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
	           if (isBanned) return reply(global.ban)


               if (!q) return reply(`Example : ${prefix + command} ${global.ownerName}`)                 
               reply(mess.wait)
               let link
               if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
               if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
               if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
               if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
               if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
               if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
               if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
               if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
               if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
               if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
               if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
               if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
               if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
               if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
               if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
               if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
               if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
               if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
               if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
               if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
               if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
               if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
               if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
               if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
               if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
               if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
               if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
               if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
               if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
               if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
               if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
               if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
               if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
               if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
               if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
               if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
               if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
               if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
               if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
               if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
               if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
               if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
               if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
               if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
               if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
               if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
               if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
               if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
               if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
               if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
               if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
               if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
               if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
               if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
               if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
               if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
               if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
               if (/cool/.test(command)) link = 'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html' 
               anu = await textpro(link, q)
               Nev.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.namaBot}` }, { quoted: m })
               }
               
 

break 

	
//GROUP SETTINGS//
    case 'welcomegroup':
    case'welcome':
               if (isBanned) return reply(global.ban)


               if (!m.isGroup) return reply(mess.group)
               if (!isAdmins) return reply(mess.admin)
               if(!text) reply('contoh #welcome on/off') 
               if (args[0] === "on") {
               if (global.db.data.chats[m.chat].welcome) return reply(`Welcome Aktif Sebelumnya`)
               global.db.data.chats[m.chat].welcome = true
               reply(`Welcome Di Group Berhasil Di Aktifkan !`)
               } else if (args[0] === "off") {
               if (!global.db.data.chats[m.chat].welcome) return reply(`Welcome Nonaktif Sebelumnya`)
               global.db.data.chats[m.chat].welcome = false
               reply(`Welcome Berhasil Di Nonaktifkan !`)
               } else {
               buttonsantilin = [{ buttonId: `${command} enable`, buttonText: { displayText: 'Enable' }, type: 1 }, { buttonId: `${command} disable`, buttonText: { displayText: 'Disable' }, type: 1 }]
               await Nev.sendButtonText(m.chat, buttonsantilin, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
               }
               
 

break 

    case 'antilink':
               if (isBanned) return reply(global.ban)


               if (!m.isGroup) return reply(mess.group)
               if (!isBotAdmins) return reply(mess.botAdmin)
               if (!isAdmins) return reply(mess.admin)
               if(!text) return reply('contoh #antilink on/off') 
               if (args[0] === "on") {
               if (global.db.data.chats[m.chat].antilink) return reply(`Sudah Aktif Sebelumnya`)
               global.db.data.chats[m.chat].antilink = true
               reply(`Antilink Berhasil Di Aktifkan !`)
               } else if (args[0] === "off") {
               if (!global.db.data.chats[m.chat].antilink) return reply(`Sudah Nonaktif Sebelumnya`)
               global.db.data.chats[m.chat].antilink = false
               reply(`Antilink Berhasil Di Nonaktifkan !`)
               } else {
               buttonsantilin = [{ buttonId: `${prefix}Antilink on`, buttonText: { displayText: 'Enable' }, type: 1 }, { buttonId: `${prefix}Antilink off`, buttonText: { displayText: 'Disable' }, type: 1 }]
               await Nev.sendButtonText(m.chat, buttonsantilin, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
               }
               
 

break 

    case 'ephemeral':
	           if (isBanned) return reply(global.ban)


               if (!m.isGroup) return reply(mess.group)
               if (!isBotAdmins) return reply(mess.botAdmin)
               if (!isAdmins) return reply(mess.admin)
               if(!text) return reply( '#ephemeral 1/7/90/off')
               if (args[0] === '1') {
               await Nev.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
               } else if (args[0] === '7') {
               await Nev.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
               } else if (args[0] === '90') {
               await Nev.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
               } else if (args[0] === 'off') {
               await Nev.groupToggleEphemeral(m.chat, 0).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
               } else {
               let sections = [
               {
               title: "CHANGE EPHEMERAL GROUP",
               rows: [
               {title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
               {title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
               {title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
               {title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                Nev.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, Nev.user.name, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
                }
                
 

break 
     case 'leave':
     if (!quoted) return reply(`reply/tag target`)
     if (isBanned) return reply(global.ban)


                if (isBanned) return reply(global.ban)


                if(!isOwner) return reply(mess.botOwner) 
              reply('_Perintah diterima, Meninggalkan group_') 
                        await sleep(5000)
                await Nev.groupLeave(m.chat).then((res) => reply('Sayonara ðŸ‘‹\nSulit Di Kontrol Semoga Hari Kalian Mengontol')).catch((err) => reply('Fitur Error ❎'))
                
 

break 
     case 'linkgc':
         if (isBanned) return reply(global.ban)


                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let response = await Nev.groupInviteCode(m.chat)
                Nev.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
                
                Nev.sendMessage(global.bot,  react3) 
 

break 
     case 'revoke':
      if (isBanned) return reply(global.ban)


                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                await Nev.groupRevokeInvite(from)
                reply(mess.done)
                
 

break

case 'leaderboard': //Cek Leaderboard
       case 'leaderboards':
              if (!m.isGroup) return reply(mess.group)
                const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
              try {
              for (let i = 0; i < 5; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = 'Immortal'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
}
              Nev.sendTextWithMentions(m.chat, leaderboard, ftroli) 
              } catch (err) {
              console.error(err)
              reply('_Perlu setidaknya 5 user yang memiliki level di database!_')
}
              break
     case 'kick':
     if (!isAdmins) return reply(mess.admin)
     if (!m.quoted) return reply(`reply/tag target`)
       	     if (isBanned) return reply(global.ban)


		        if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Nev.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(mess.done)).catch((err) => reply(jsonformat(err)))
	            
 

break 
case 'reportdep':
           if (!text) return reply(`Ketik ${prefix}reportdep [fiturnya] [Error Nya Gimana]`) 
              let ownernya = global.owner + '@s.whatsapp.net'
              let me = m.sender
              let pjtxt = `
╔═══[BUG REPORT]════➤
${style1} _${ucapanWaktu} ${pushname}_
${style1} _[Dari] : wa.me/${m.sender.split("@")[0]}_
${style1} _[Pesan] : ${text}_
${bawah}`
              let ments = [ownernya, me]
              reply(`*[PESAN TELAH TERSAMPAIKAN]*\nTerima Kasih Telah Melaporkan Pada Owner\n`)
              Nev.sendMessage(`${global.owner}.@s.whatsapp.net`, react3) 
              Nev.sendTextWithMentions(`${global.owner}@s.whatsapp.net`, pjtxt , m, {mentions: ments})
break 
       



     case 'add':
     if (!m.quoted) return reply(`reply/tag target`)
		        if (isBanned) return reply(global.ban)


		        if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
		        users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Nev.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(mess.done)).catch((err) => reply(jsonformat(err)))
	            
 

break 
     case 'promote':
		        if (!m.quoted) return reply(`reply/tag target`)
		        if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Nev.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(mess.done)).catch((err) => reply(jsonformat(err)))
	            
 

break 
     case 'demote':
		        
		        if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!m.quoted) return reply(`reply/tag target`)
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Nev.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(mess.done)).catch((err) => reply(jsonformat(err)))
	            
 

break 
     case 'setname': case 'setsubject':
	            
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!text) throw reply('textnya?')
                await Nev.groupUpdateSubject(m.chat, text).then((res) => reply(mess.done)).catch((err) => reply(jsonformat(err)))
                
 

break 
     case 'setdesc': case 'setdesk':
                
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!text) throw reply('textnya?')
                await Nev.groupUpdateDescription(m.chat, text).then((res) => reply(mess.done)).catch((err) => reply(jsonformat(err)))
                
 

break 

     case 'setppgroup': case 'setppgrup': case 'setppgc':
                
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await Nev.downloadAndSaveMediaMessage(quoted)
                await Nev.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.done)
                
 

break 
     case 'tagall':
                if (isBanned) return reply(global.ban)


                if (!m.isGroup) return reply(mess.group)
                if(!isOwner && !isAdmins) return reply('fitur hanya untuk owner bot') 
                      let teks = `*👥 Tag All By Admin*\n\n🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `乂 @${mem.id.split('@')[0]}\n`
                }
                Nev.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                
 

break 
     case 'hidetag':
	            if (isBanned) return reply(global.ban)


                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isOwner) return reply(mess.admin)
                Nev.sendMessage(m.chat, { text : q ? q : 'kosong' , mentions: participants.map(a => a.id)}) 
                
 

break 
//STALK//
     case 'igstalk':
   
     if (isBanned) return reply(global.ban)


                if (!args || !args[0]) throw reply(`Gunakan format ${prefix}${command} [username] Contoh: ${prefix}${command} jokowi`)
                reply(mess.wait)
                try {
                res = await noapi.igstalk(args[0])
                json = JSON.parse(JSON.stringify(res))
                iggs = `▢ *Username:* ${json.username}\n▢ *Nickname:* ${json.fullName}\n▢ *Followers:* ${json.followers}\n▢ *Following:* ${json.following}\n▢ *Posting:* ${json.postsCount}\n▢ *Link:* https://instagram.com/${json.username}\n▢ *Bio:* ${json.bio}`
                Nev.sendImage(m.chat, json.profilePicHD, iggs, m)
                } catch (err) {
                console.log(err)
                await Nev.sendMessage(m.chat, { document: { url: 'https://chat.whatsapp.com/' }, mimetype: 'application/pdf', fileName: `404\nNot Found`, pageCount: 2023, fileLength: 9999, caption: `_[🆙] Eror Saat Memproses Data_`, footer: 'teks hitam:v', jpegThumbnail: thumb }, {quoted:ftroli})
                }
                
 

break 
                
case `${global.fekg2}`: case 'ytv':
if (isBanned) return reply(global.ban)

                  if (!text) return reply(`Gunakan Format : ${command} linknya`)
                if (!isUrl(text) && text.includes('youtu.be') && text.includes('youtube.com')) return reply(mess.link1)
                reply(mess.wait)
                try {
                let quality = args[1] ? args[1] : '240p'
                let media = await ytv(text, quality)
                if (media.seconds  > 1) return reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
                caption = `---- Youtube Downloader -----\n\n❒ Judul : ${media.title}\n❒ Size : ${media.filesizeF}\n❒ Url : ${isUrl(text)}\n❒ Format : MP4\n❒ Resolusi : ${args[1] || '480p'}\n\nᴍᴇᴅɪᴀ sᴇᴅᴀɴɢ ᴅɪᴋɪʀɪᴍ ᴍᴏʜᴏɴ ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ `
                 Nev.sendMessage(m.chat, {
text: caption,
contextInfo: {
	mentionedJid: [m.sender],
	
externalAdReply: {
title: `${ucapanWaktu} ${pushname}
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ${global.ownerName}`,
body: `${global.namaBot}`,
thumbnailUrl: media.thumb,
sourceUrl: text,
mediaType: 1,
renderLargerThumbnail: true, 

}}}, 
{
      quoted: m
   })
 Nev.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `${isUrl(text)}` }, { quoted: m })
                } catch (err) {
                console.log(err)
                await Nev.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                }
			     

break
case 'mediafire' :{
if (isBanned) return reply(global.ban)
const { lookup } = require('mime-types') 
const { mediafiredl } = require('@bochilteam/scraper') 
                  if (!text) return reply(`Gunakan Format : ${command} https://www.mediafire.com/file/6tknikx5f3jfsh8/alphabotv16.zip/file`)
                if (!isUrl(text) && text.includes('mediafire.com') && text.includes('mediafire.com')) return reply(mess.link1)
                reply(mess.wait)
                let res = await mediafiredl(text)
	let mimetype = await lookup(res.url)
	delete res.url2
	Nev.sendMessage(m.chat, { document: { url: res.url }, fileName: res.filename, mimetype }, { quoted: m })
               } 
                break 
                case 'kbbi' :{
if (isBanned) return reply(global.ban)
const { kbbi } = require('@bochilteam/scraper') 
                  if (!text) return reply(`Gunakan Format : ${command} halo`)
         const res = await kbbi(text)
    reply(`
${res.map(v => `
*📚${v.title}*

${v.means.map(v => '-' + v).join('\n`')}
`).join('\n').trim()}

Note:
p = Partikel: kelas kata yang meliputi kata depan, kata sambung, kata seru, kata sandang, ucapan salam
n = Nomina: kata benda
`.trim())
               } 
                break 
case `${global.fekg}`:
if (isBanned) return reply(global.ban)

                  if (!text) return reply(`Gunakan Format : ${command} linknya`)
                if (!isUrl(text) && text.includes('youtu.be') && text.includes('youtube.com')) return reply(mess.link1)
                reply(mess.wait)
                noapi.youtube(text).then(async(data) => {
                	yeh = data.size
                if (yeh > 5) return reply('File Melebihi Batas Silahkan Download Sendiri : '+data.mp3)
                try {
                     
                caption = `*------ Youtube Downloader -----*\n\n📄 Title : ${data.title}\nSize: ${data.size}\n🔗 Url : ${text}\n📥 Format : MP3\n📮 Resolusi : ${args[1] || '128kbps'}\n\nᴍᴇᴅɪᴀ sᴇᴅᴀɴɢ ᴅɪᴋɪʀɪᴍ ᴍᴏʜᴏɴ ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ `
                 Nev.sendMessage(m.chat, {
text: caption,
contextInfo: {
	mentionedJid: [m.sender],
	
externalAdReply: {
title: `${ucapanWaktu} ${pushname}
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ${global.ownerName}`,
body: `${global.namaBot}`,
thumbnailUrl: data.thumb,
sourceUrl: "https://wa.me/${global.owner}",
mediaType: 1,
renderLargerThumbnail: true, 

}}}, 
{
      quoted: m
   })

Nev.sendMessage(m.chat,{
    audio: {url: data.mp3},
    fileName: data.title + '.mp3',
    mimetype: 'audio/mpeg',
    contextInfo:{
        externalAdReply:{
            title:data.title,
            body: `${global.namaBot}`,
            thumbnailUrl: data.thumb,
            sourceUrl: data.title, 
            mediaType: 1,
renderLargerThumbnail: true, 
        }

    },
},{quoted:m})
                } catch (err) {
                console.log(err)
                await Nev.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                }
			    })
			

break

case'yts': case 'ytsearch': {
                if (!q) throw `Example : ${prefix + command} story wa anime`
                reply(mess.wait)
                let yts = require("yt-search")
                let search = await yts(q)
                let teks = '_[YOUTUBE SEARCH]_\n\n _HASIL PENCARIAN DARI '+text+'_\n\n_Kirim #getv <nomor>_  *untuk mengambil video*\n_Kirim #getmp3 <nomor>_  *untuk mengambil audio*\n\n' 
                let no = 1
                for (let i of search.all) {
				teks += `⏣ *No* : ❲${no++}❳
⏣ *Title* : ${i.title}
⏣ *Duration* : ${i.timestamp}
⏣ *Views* : ${i.views}
⏣ *Upload At* : ${i.ago}
⏣ *Video* ID : ${i.videoId}
⏣ *Type* : ${i.type}
⏣ *Url* : ${i.url}\n\n─────────────────\n\n`
                }
                     Nev.sendMessage(m.chat, {
text: teks,
contextInfo: {
	mentionedJid: [m.sender],
	
externalAdReply: {
title: `${ucapanWaktu} ${pushname}
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ${global.ownerName}`,
body: `${global.namaBot}`,
thumbnailUrl: search.all[0].thumbnail,
sourceUrl: "https://wa.me/${global.owner}",
mediaType: 1,
renderLargerThumbnail: true, 

}}}, 
{
      quoted: m
   })
            }
             

break

            
case 'getmusic':
    case'getmp3':{
     if (isBanned) return reply(global.ban)


                if (!text) throw reply(`Example : ${prefix + command} 1`) 
                if (!m.quoted) return reply('Reply Pesan Hasil Dari ytsearch')
                if (!m.quoted.isBaileys) throw reply (`Hanya Bisa Membalas Pesan Dari Bot`) 
                
                if (!urps) throw reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
                reply(mess.wait)
                noapi.youtube(urps[text - 1]).then(async(data) => {
                	try {
                   caption = `*------ Youtube Downloader -----*\n\n📄 Title : ${data.title}\n🔗 Url : ${text}\n📥 Format : MP3\n📮 Resolusi : ${args[1] || '128kbps'}\n\nᴍᴇᴅɪᴀ sᴇᴅᴀɴɢ ᴅɪᴋɪʀɪᴍ ᴍᴏʜᴏɴ ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ `
                 Nev.sendMessage(m.chat, {
text: caption,
contextInfo: {
	mentionedJid: [m.sender],
	
externalAdReply: {
title: `${ucapanWaktu} ${pushname}
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ${global.ownerName}`,
body: `${global.namaBot}`,
thumbnailUrl: data.thumb,
sourceUrl: "https://wa.me/${global.owner}",
mediaType: 1,
renderLargerThumbnail: true, 

}}}, 
{
      quoted: m
   })
                Nev.sendMessage(m.chat, {audio: {url: data.mp3}, mimetype: 'audio/mpeg', fileName: `${data.title}.mp3`}, { quoted: m }) 
               } catch (err) {
                console.log(err)
                await Nev.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                }
               }) 
} 

break
     case 'githubstalk':
     
     if (isBanned) return reply(global.ban)


                if (!text) return reply( 'Harap Masukan Username')
                await reply(mess.wait)
                try {
                ano = await fetch(`https://api.github.com/users/${text}`).then(a => a.json())
                thumb = await getBuffer(ano.avatar_url)
                hasilnya = `*── 「 GITHUB STALK 」 ──*\n\n➸ *Bio*: ${ano.bio}\n➸ *Perusahaan*: ${ano.company}\n➸ *Repo Publik:* ${ano.public_repos}\n➸ *Gists Publik:* ${ano.public_gists}\n➸ *Follower:* ${ano.followers}\n➸ *Following:* ${ano.following}\n➸ *Lokasi:* ${ano.location}\n➸ *Link:* ${ano.html_url}`
                await Nev.sendMessage(m.chat, { image: thumb, caption: hasilnya, quoted: m })
                } catch (err) {
                console.log(err)
                await Nev.sendMessage(m.chat, { document: { url: 'https://chat.whatsapp.com/' }, mimetype: 'application/pdf', fileName: `404\nNot Found`, pageCount: 2023, fileLength: 9999, caption: `_[🆙] Eror Saat Memproses Data_`, footer: 'teks hitam:v', jpegThumbnail: thumb }, {quoted:ftroli})
                }
                
 

break 

//SEARCHING//
    case 'whatmusic':
                if (isBanned) return reply(global.ban)


	            if (/video|audio/.test(mime)) {
		        let media = await quoted.download()
		        await reply(mess.wait)
		        let { status, metadata } = await acr.identify(media)
		        if (status.code !== 0) throw status.msg 
	            let { title, artists, album, genres, release_date } = metadata.music[0]
		        let txt = `*• Title:* ${title}${artists ? `\n*• Artists:* ${artists.map(v => v.name).join(', ')}` : ''}`
	            txt += `${album ? `\n*• Album:* ${album.name}` : ''}${genres ? `\n*• Genres:* ${genres.map(v => v.name).join(', ')}` : ''}\n`
		        txt += `*• Release Date:* ${release_date}`
                Nev.sendMessage(m.chat, { text: txt.trim(), buttons: [{ buttonText: { displayText: 'Play Music' }, buttonId: `${prefix}play ${title}` }] }, { quoted: m })
	            } else throw reply(`Reply audio/video with command ${prefix + command}`)
	           .catch((err) => Nev.sendMessage(m.chat, { document: { url: 'https://chat.whatsapp.com/' }, mimetype: 'application/pdf', fileName: `404\nNot Found`, pageCount: 2023, fileLength: 9999, caption: `_[🆙] Eror Saat Memproses Data_`, footer: 'teks hitam:v', jpegThumbnail: thumb }, {quoted:ftroli}))
	              
 

break 

                     case 'pinterest': 
           	 if (isBanned) return reply(global.ban)


                if (!text) return reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
                reply(mess.wait)
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                 Nev.sendMessage(m.chat, { image: { url: result }, caption: 'Source Url : '+result},{ quoted: m })
                
 

break
case 'faktaunik': {
           	 if (isBanned) return reply(global.ban)

    anu = ["Negara Indonesia berada di posisi ke-4 sebagai Negara Terindah di Dunia versi situs First Choice.","Di Italia, dalam aturannya minuman Cappuccino hanya boleh di minum sebelum waktu siang.","AS, Australia, Finlandia, Jerman dan Kanada adl negara maju tanpa UN. Tahukah anda sekolah trbaik di dunia ada di Finlandia walau tanpa UN.","","\"Jengkol is very nice\" komentar Pierre Bouvier vokalis Simple Plan.","Tiap satu kali jari kita mengklik mouse komputer, ada 1,42 kalori yang terbakar dalam tubuh. (Penelitian, Convert Anything to Calories).","Di Jepang kuno, prajurit diolesi minyak kodok pada tubuh mereka dengan keyakinan bahwa hal itu akan membuat tubuh mereka antirobek."," Di Jepang, ketiduran saat bekerja (inemuri) dapat ditolerir, karena dipandang sebagai kelelahan yang muncul akibat bekerja terlalu keras.","Gergaji mekanik awalnya diciptakan sebagai alat kedokteran untuk membantu melahirkan bayi.","Jangan sering mengatakan kata  di Australia dan Selandia Baru. Di sana, kata berarti mengajak untuk melakukan hubungan seks.","Jamur merang Laetiporus dikenal sebagai julukan \"ayam hutan\" karena konon rasanya mirip seperti daging ayam goreng.","Kaki katak merupakan hidangan istimewa di eropa. Tahukah Anda: sekitar 80% impor katak Eropa berasal dari Indonesia.","Jika Anda mengetik \"do the harlem shake\" di search bar YouTube, layar akan melakukan Harlem Shake!. [Google Chrome]","Melihat melalui lubang kecil akan segera meningkatkan penglihatan Anda sementara.","YouTube menyebutkan rata-rata ada 4000 video baru Harlem Shake yang diunggah setiap hari. [Yahoo!]","Semut memiliki kuburan sendiri. Tapi tahukah anda: Gurita memiliki kebun dan suka berkebun. (wikipedia)","Coklat mengandung Theobromine, molekul organik yang dapat membantu menguatkan enamel gigi. (Penelitian dari Tulane University).","Wanita 2 kali lebih banyak menggunakan emoticon dalam pesan teks dibandingkan pria. (Penelitian di Rice University)","Biarpun Buzz Aldrin adalah orang kedua yang menginjak di bulan tetapi ia adalah orang pertama yang membuang kotoran di ruang angkasa.","Fakta unik berikutnya adalah, Psikolog mengatakan bahwa mengirim dan menerima pesan teks benar-benar dapat meningkatkan mood Anda ketika Anda merasa kesepian. (Telegraph)","Thailand merupakan satu-satunya negara di Asia Tenggara yang tidak pernah dijajah.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. (cracked .com)"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. (BBCnews)","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Semakin pahit cokelat (tinggi zat theobromine), semakin tinggi manfaatnya. Rajin mengkonsumsi 1bar cokelat/hari dapat menyembuhkan batuk kronis.","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".","Tidur Siang (Power Nap) trbukti menambah tinggi badan, dikrnkan saat kita tidur siang hormon pertumbuhan (Growth Hormone) lbh aktif bekerja.","Bilangan prima terbesar di dunia saat ini panjangnya 17 juta digit angka, cukup banyak untuk mengisi 28 lembar halaman pada buku novel.","Menurut sebuah studi, minum teh hijau setelah makan ikan membantu menghalangi zat Mercury yang terkandung dalam ikan memasuki aliran darah."," Memperpanjang usia handphone hingga 4 tahun dapat mengurangi dampak lingkungan sampai 40 persen. [Hasil studi di Swiss]","Duduk bersama dgn teman-teman / keluarga utk makan bersama, dpt meningkatkan kebahagiaan & membantu meringankan depresi. [ehealthnewsdaily]","Abibliophobia adalah fobia atau ketakutan terhadap kehabisan bahan bacaan.","Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai \"emas putih\".","Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]","Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]","","35. Disarankan supaya membeli sepatu pada sore hari. Sebab, setelah seharian berjalan, di sore hari kaki akan membesar 5-8 persen.","Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]","Menurut penelitian baru, usia harapan hidup anak band rata-rata lebih tinggi dibandingkan musisi yang memilih solo karir. (detikHealth)","Pulau Dewata Bali merupakan 1 dari 10 pulau paling romantis di dunia. [majalah Travel+Leisure]","Universitas di Jepang selalu melakukan upacara peringatan bagi hewan (contoh: tikus) yang mati dalam pengujian laboratorium. [web.archive .org]","Berkedip memberikan otak Anda istirahat sebentar. [para ilmuan di Japan’s Osaka University]","Wanita yang bahagia dalam sebuah pernikahan akan mengalami berat badan naik setengah pound (0,22 kg) setiap 6 bulan. [DailyMail]","Rasa cemburu berlebihan bisa digolongkan penyakit jiwa, krna dpt mendorong ssorg utk bunuh diri / menghabisi nyawa org lain. [riset]","","Mengkonsumsi buah tomat beberapa kali dlm kurun waktu seminggu dpt mengatasi perasaan depresi. [peneliti di Tianjin Medical Univ., Cina]"," Perasaan kesepian memicu respon yang sama di otak sebagai rasa sakit fisik. [BBCnews]","Di Cape Town, Afrika Selatan, remaja laki-laki yang memiliki gigi ompong dianggap tampan / maskulin.","Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan","kecemasan, bahkn dpt meningkatkan memori. [Dailymail]","Kata \"Mouse\" (tikus) berasal dari turunan Bahasa Sansekerta \"Mus\" yang berarti \"pencuri\".Berjalan kaki atau bersepeda ke sekolah mempertajam konsentrasi siswa di kelas dan tetap bertahan sekitar 4 jam kemudian. [Medical Daily]","Menurut riset pasar global Euromonitor International, pria Korea adalah pria yang paling suka bersolek dari pria lain di dunia.","Rata-rata orang akan merasa 100 persen sehat / fit hanya 61 hari dalam setahun. (Penelitian di Inggris)","Polydactyl Cat adalah jenis kucing yang memiliki jempol di kaki mereka.","Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]","Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.","Wanita merasa diri mereka terlihat paling jelek dan terlihat lebih tua pada hari Rabu pukul 15.30 . [studi baru dari St Tropez]Orang yang rutin bermain video game ternyata memiliki penalaran yang baik dibanding kebanyakan orang. (detikHealth)","Nama \"Gorila\" berasal dari kata Yunani \"Gorillai\" yang berarti \"perempuan berbulu\".","IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.","Selama abad ke-13, kata \"nice\" sebenarnya berarti “stupid”, \"senseless\" dan “foolish\".","59. 49% dari pemilik Smartphone adalah jomblo. (Survei, \"2012 Online User Behavior and Engagement Study\")","Fakta Unik","60. Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)","Lalat dapat menyalurkan sekitar 300 bakteri setiap kali hinggap di benda.","Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.","Fobia matematika (mathematics anxiety) memicu respon yang sama di otak sbg rasa sakit fisik. Gejalanya yaitu melihat angka saja sudah nyeri."," Karakter kartun Bugs Bunny diberi pangkat kehormatan sersan-mayor di Korps Marinir AS pada akhir Perang Dunia II. (wikipedia)","Apel yang ditaruh di ruang terbuka akan matang 10 kali lebih cepat dibandingkan dengan apel yang ditaruh di kulkas.","Ungkapan 'Smitten' adalah untuk menyebut 'naksir' dalam bahasa Inggris.","Menurut etiket internasional, sebuah jabat tangan yang tepat dan baik harus berlangsung selama sekitar 3 detik & dilepaskan setelah goyang.","Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan."," \"Mwahahaha\" dan \"lolz\" telah ditambahkan ke Kamus Inggris Oxford.","Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.","Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut \"Barbe á Papa\" yang berarti \"Jenggot Ayah\".","Menurut penelitian, PR terlalu banyak sebenarnya dapat menyebabkan siswa menjadi stres, depresi & mendapat nilai lebih rendah.","Hangry adalah penggabungan kata dari \"Hungry\" dan \"Angry\", di pakai ketika anda sedang lapar dan marah.","Kentut dari bakteri membuat keju swiss memiliki lubang-lubang.","Mendengarkan musik benar-benar dapat mengurangi rasa sakit kronis hingga 20% dan membantu meringankan depresi hingga 25%. (sciencedaily)","Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)","Melamun dpt memendekkan telomere (bagian paling ujung sel DNA) yang berperan dlm menjaga kestabilan sel, dimana dapat mempercepat proses penuaan."]
                result = anu[Math.floor(Math.random() * anu.length)]
                 reply(`*[FAKTA UNIK]*\n${result}`) 
                
} 

break 

case 'kucing': {
           	 if (isBanned) return reply(global.ban)


                reply(mess.wait)
                anu = await pinterest(command)
result = anu[Math.floor(Math.random() * anu.length)]
                 Nev.sendMessage(m.chat, { image: { url: result }, caption: 'Source Url : '+result},{ quoted: m })
                
}
 

break 
case 'dino': {
           	 if (isBanned) return reply(global.ban)


                anu = await pinterest('stiker dino kuning')
result = anu[Math.floor(Math.random() * anu.length)]
  Nev.sendImageAsSticker(m.chat, result, m, { packname: global.packname, author: global.author })
              
                
}
 

break
case 'loli': {
           	 if (isBanned) return reply(global.ban)


                anu = await pinterest('stiker  loli')
result = anu[Math.floor(Math.random() * anu.length)]
  Nev.sendImageAsSticker(m.chat, result, m, { packname: global.packname, author: global.author })
              
                
}
 

break
case 'waifu': {
           	 if (isBanned) return reply(global.ban)


                anu = await pinterest('waifu')
result = anu[Math.floor(Math.random() * anu.length)]
  Nev.sendImageAsSticker(m.chat, result, m, { packname: global.packname, author: global.author })
              
                
}
 

break
case 'husbu': {
           	 if (isBanned) return reply(global.ban)


                anu = await pinterest('husbu')
result = anu[Math.floor(Math.random() * anu.length)]
  Nev.sendImageAsSticker(m.chat, result, m, { packname: global.packname, author: global.author })
              
                
}
 

break 
case 'patrik': {
           	 if (isBanned) return reply(global.ban)


                reply(mess.wait)
                anu = await pinterest('stiker patrick')
result = anu[Math.floor(Math.random() * anu.length)]
  Nev.sendImageAsSticker(m.chat, result, m, { packname: 'created By', author: global.author })
              
                
}
 

break 
    case 'sfilesearch':
                if (isBanned) return reply(global.ban)


                if (!q) return reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} WhatsApp mod*`)
                reply(mess.wait)
                api2.sfilesearch(`${q}`)
               .then(result => {
                res = '「 *sfilesearch* 」\n\n'
                for (let i of result) {
                res += `*Nama*: ${i.nama}\n*Ukuran*: ${i.size}\n*Link*: ${i.link}\n\n`
                }
                reply(res)
                });
                
 

break  
     case 'google':
                if (isBanned) return reply(global.ban)


                if (!args[0]) return reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
                let google = require('google-it')
                reply(mess.wait)
                google({'query': args.join(" ")}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `*Title* : ${g.title}\n`
                teks += `*Description* : ${g.snippet}\n`
                teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                }) 
                
  

break
case'translate':case 'tr':{
if (isBanned) return reply(global.ban)

if (!args.join(" ")) return reply(`*Example: ${prefix + command} id good morning*\n\n*List kode Bahasa*

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
    cy        Welsh `)
    const swn = args.join(" ")
                const pcknm = swn.split(" ")[0];
                const atnm = swn.split(" ")[1];
				

if(text) {
	
                axios.get(`https://mfarels.my.id/api/translate?bhs=${pcknm}&text=${atnm}`).then(({ data }) => {
				reply(data.result)

})}} 


			break
			case 'ai':case'openai':{
if (isBanned) return reply(global.ban)

			if (!text) return reply(`Example: ${prefix + command} komet`)
			axios.get(`https://mfarels.my.id/api/openai?text=${text}`).then(({ data }) => {
				reply(data.result)
})} 

			break
			case 'cerpen':{
if (isBanned) return reply(global.ban)
axios.get(`https://mfarels.my.id/api/randomcerpen`).then(({ data }) => {
reply(`
 *Judul* : ${data.Judul}
 *Penulis* : ${data.Penulis}
 *Sumber* : ${data.sumber}

${data.cerita}
`)
})} 

			break
			case 'tahta':{
if (isBanned) return reply(global.ban)
if(!text) return reply(`Contoh: ${prefix+command} Nevz`)
reply(mess.wait) 
Nev.sendMessage(m.chat, {image: {url: `https://mfarels.my.id/api/hartatahtav2?text=${text}`}, caption: `harta tahta ${text} `}, { quoted : m })
} 

			break
			case 'nulis':{
if (isBanned) return reply(global.ban)
if(!text) return reply(`Contoh: ${prefix+command} aku sedang menulis`)
reply(mess.wait) 
Nev.sendMessage(m.chat, {image: {url: `https://mfarels.my.id/api/magernulis1v2?text=${text}`}, caption: `Done`}, { quoted : m })
} 

			break
			case 'nulis2':{
if (isBanned) return reply(global.ban)
if(!text) return reply(`Contoh: ${prefix+command} aku sedang menulis`)
reply(mess.wait) 
Nev.sendMessage(m.chat, {image: {url: `https://mfarels.my.id/api/magernulis4?text=${text}`}, caption: `Done`}, { quoted : m })
} 

			break
			case 'folio':{
if (isBanned) return reply(global.ban)
if(!text) return reply(`Contoh: ${prefix+command} aku sedang menulis`)
reply(mess.wait) 
Nev.sendMessage(m.chat, {image: {url: `https://mfarels.my.id/api/magernulis15?text=${text}`}, caption: `Done`}, { quoted : m })
} 

			break
			case 'folio2':{
if (isBanned) return reply(global.ban)
if(!text) return reply(`Contoh: ${prefix+command} aku sedang menulis`)
reply(mess.wait) 
Nev.sendMessage(m.chat, {image: {url: `https://mfarels.my.id/api/magernulis16?text=${text}`}, caption: `Done`}, { quoted : m })
}

			break
			case 'hvs':{
if (isBanned) return reply(global.ban)
if(!text) return reply(`Contoh: ${prefix+command} aku sedang menulis`)
reply(mess.wait) 
Nev.sendMessage(m.chat, {image: {url: `https://mfarels.my.id/api/magernulis17?text=${text}`}, caption: `Done`}, { quoted : m })
}

			break
			
			
      case 'jooxg':
                 if (isBanned) return reply(global.ban)


                 if (!text) throw reply(`*Perintah ini untuk mencari lagu joox berdasarkan pencarian*\n\ncontoh:\n${prefix + command} akad`)
                 if (isUrl(text)) throw reply(`*Perintah ini untuk mencari lagu joox berdasarkan pencarian bukan link*\n\ncontoh:\n${prefix + command} akad`)
                 noapi.joox(text).then(res => {
                 let joox = JSON.stringify(res)
                 let jjson = JSON.parse(joox)
                 reply(mess.wait)
                 let random = Math.floor(Math.random() * jjson.data.length)
                 hasil = jjson.data[random]
                 let json = hasil
                 pesan = `*Penyanyi:* ${json.penyanyi}\n*Judul:* ${json.lagu}\n*Album:* ${json.album}\n*Diterbitkan:* ${json.publish}\nBy ${ownerName}\n\nPlease Be Patient We Are Sending The Data You Request`
                 Nev.sendMessage(m.chat, {text:pesan}, m)
                 Nev.sendMessage(m.chat, { audio: { url: json.mp3 }, mimetype: 'audio/mpeg', fileName: `${json.penyanyi}.mp3` }, { quoted: fkontak })
                 })
                 
 

break 
//DOWNLOADER//
       Nev.sendMessage(m.chat, { document: { url: 'https://chat.whatsapp.com/' }, mimetype: 'application/pdf', fileName: `404\nNot Found`, pageCount: 2023, fileLength: 9999, caption: `_[🆙] Eror Saat Memproses Data_`, footer: 'teks hitam:v', jpegThumbnail: thumb }, {quoted:kontak})
       
       case `${global.fekg3}`: case 'ytplay':
                    if (!q) return reply(`Kirim perintah ${command} query\nContoh : ${command} monokrom`)
               reply(mess.wait)
               await sendPlay(from, q)

                

break 
  case '0n': {
                if (!isOwner) return reply(mess.owner)
                if (!text) return reply(`Contoh : ${prefix + command} ytmp3`) 
                if (args[0] === "ytmp3") {
                global.fekg = 'ytmp3' 
                reply(`*${text}* Diaktifkan`)
               } else if (args[0] === "ytmp4") {
                        global.fekg2 = 'ytmp4' 
                 reply(`*${text}* Diaktifkan`)
               } else if (args[0] === "play") {
               	if (args[0] === "ytplay") 
               	 global.fekg3 = 'play' 
                 reply(`*${text}* Diaktifkan`)
               } 
            }
            break
            
              case '0ff': {
                if (!isOwner) return reply(mess.owner)
                if (!text) return reply(`Contoh : ${prefix + command} ytmp3`)
                if (args[0] === "ytmp3") {
                global.fekg = 'gdyes5' 
                reply(`*${text}* Dinonaktifkan`)
               } else if (args[0] === "ytmp4") {
               	 if (args[0] === "ytvideo") 
               	if (args[0] === "ytv") 
                global.fekg2 = 'gxk1199'
                 reply(`*${text}* Dinonaktifkan`)
               }else if (args[0] === "play") {
               	
               	 global.fekg3 = 'gxk11byf99'
                 reply(`*${text}* Dinonaktifkan`)
               } 
            }
            break
     
     case 'igfoto':
                if (isBanned) return reply(global.ban)


                if (!q) return reply(`Use example ${command} https://www.instagram.com/p/CMeFrnTp8as`)
                if (!isUrl(q)) throw reply(mess.link) 
		        if (!q.includes('instagram.com')) return reply(mess.link1)
	            reply(mess.wait)
                try {
                a = await instagramdlv2(args[0])
                await Nev.sendMessage(m.chat, {image: {url: a[0].url.split("snapsave.app")[1]}, caption: `By Mode ${namaBot}` }, { quoted: fkontak })
                } catch (err) {
                console.log(err)
                await Nev.sendMessage(m.chat, { document: { url: 'https://chat.whatsapp.com' }, mimetype: 'application/pdf', fileName: `404\nNot Found`, pageCount: 2023, fileLength: 9999, caption: `_[🆙] Eror Saat Memproses Data_`, footer: 'teks hitam:v', jpegThumbnail: thumb }, {quoted:fkontak})
                }
                
 

break 
                
                
     
                case 'setexif': {
                if (!isOwner) return reply(mess.owner)
                if (!args.join(" ")) return reply(`Contoh : ${prefix + command} https://telegra.ph/file/12dc404b223195b436385.jpg`) 
                const swn = args.join(" ")
                global.packname = swn.split("|")[0]
                global.author = swn.split("|")[1]
                reply(`Exif berhasil diubah menjadi\n\n Packname : ${global.packname}\nAuthor : ${global.author}`)
            }
            break
                case 'setfake': {
                if (!isOwner) return reply(mess.owner)
                if (!text) return reply(`Contoh : ${prefix + command} packname|author`) 
                 global.fek = text
                reply(`Fake reply berhasil diubah`)
            }
            break
                        case 'ig':case'instagram':
                if (isBanned) return reply(global.ban)


                if (!q) return reply(`Use example ${command} https://www.instagram.com/p/CMeFrnTp8as`)
                if (!isUrl(q)) throw reply(mess.link) 
		        if (!q.includes('instagram.com')) return reply(mess.link1)
	            reply(mess.wait)
	
                try {
                igm = require('./scrape/scraper')
                cokx = igm.instagram(text)
                await Nev.sendMessage(m.chat, {video: {url: cokx.data}, caption: `By Mode ${namaBot}` }, m) 
                } catch (err) {
                console.log(err)
                await Nev.sendMessage(m.chat, { document: { url: 'https://chat.whatsapp.com/' }, mimetype: 'application/pdf', fileName: `404\nNot Found`, pageCount: 2023, fileLength: 9999, caption: `_[🆙] Eror Saat Memproses Data_`, footer: 'teks hitam:v'}, {quoted:fkontak})
                }
                
 

break 
            
      case 'fbdl':
      case 'facebook':
      if (isBanned) return reply(global.ban)


                if (!text) return reply( `Example : ${prefix + command} link`)
                if (!q.includes('facebook.com')) return reply(`Link Invalid!!`)
                reply("Loading...")
                const { fbdl } = require("./lib/facebook");
                fbdl(q).then( data => {
                if (data.length == 0) return reply(`Maaf terjadi kesalahan, ganti link yang lain!`)
                Nev.sendMessage(m.chat, { video: { url: data[data.length - 1] }, caption: data.title }, { quoted: fkontak })
                })
                
 

break 
     case 'soundcloud':
                if (isBanned) return reply(global.ban)


                if (!q) return reply(`Gunakan Format : ${command} linknya`)
                if (!isUrl(q)) throw reply(mess.link) 
                if (!q.includes('soundcloudmp')/('soundcloud.com')) return reply('Link Invalid ❎')
                await reply(mess.wait)
                api2.soundcloud(`${q}`) 
               .then(result => {
                let text =`*🔰SOUNDCLOUD🔰*\n`
                text +=`*Title*: ${result.title}\n`
                text +=`*Durasi*: ${result.duration}\n`
                text +=`*Qulity*: ${result.quality}\n`
                text +=`*Author*: ${result.author}\n\n Wait Is Sending The Data You Request`
                Nev.sendImage(m.chat, result.thumbnail, text, m)
                Nev.sendMessage(m.chat, {document: {url:  result.download}, mimetype: 'audio/mpeg', fileName: `${result.title}.mp3`}, { quoted: m })
                }).catch(() => Nev.sendMessage(m.chat, { document: { url: 'https://chat.whatsapp.com/' }, mimetype: 'application/pdf', fileName: `404\nNot Found`, pageCount: 2023, fileLength: 9999, caption: `_[🆙] Eror Saat Memproses Data_`, footer: 'teks hitam:v', jpegThumbnail: thumb }, {quoted:ftroli}))
                
 

break 
case 'ssweb':
		      if (isBanned) return reply(global.ban)


			  if (!text) throw reply(`Penggunaan ${prefix}${command} github.com`)
			  reply(mess.wait) 
			  var esesw = await getBuffer(`https://sh.xznsenpai.xyz/api/ssweb?type=dekstop&url=${text} `)
              Nev.sendImage(m.chat, esesw, text, m)
              
 

break 

    case 'clearall': //menghapus seluruh pesan diakun bot
                    if (!isOwner) return reply('Perintah ini hanya untuk Owner bot')
                    const allChatx = await Nev.getAllChats()
                    for (let dchat of allChatx) {
                        await Nev.deleteChat(dchat.id)
                    }
                    reply( 'Success clear all chat!')
                     

break 
     case 'cocofun':
                if (isBanned) return reply(global.ban)


                if (!q) return reply(`Gunakan Format : ${command} https://www.icocofun.com/share/post/490013276810?lang=id&pkg=id&share_to=copy_link&m=253e3d90d057da0de4f9544ed67e4c54&d=0d18db9c398405eed9a59120805e336ff6dd6d841c556ada2b191c37a722a522&nt=1`)
                if (!isUrl(q)) throw reply(mess.link) 
                if (!q.includes('icocofun.com')/('cocofun.com')) return reply('Link Invalid ❎')
                await reply(mess.wait)
                api2.cocofun(`${q}`) 
               .then(result => {
                let text =`*🔰COCOFUN🔰*\n`
                text +=`*Topic*: ${result.topic}\n`
                text +=`*Caption*: ${result.caption}\n`
                text +=`*View*: ${result.play}\n`
                text +=`*Share*: ${result.share}\n`
                text +=`*Like*: ${result.like}\n`
                text +=`*Durasi*: ${result.duration}\n\n Wait Is Sending The Data You Request`
                Nev.sendImage(m.chat, result.thumbnail, text, m)
                Nev.sendMessage(from, {video:{url: result.no_watermark}, mimetype:"video/mp4", caption: `${result.caption}`}, {quoted:m})
                }).catch(() => Nev.sendMessage(m.chat, { document: { url: 'https://chat.whatsapp.com/' }, mimetype: 'application/pdf', fileName: `404
Not Found`, pageCount: 2023, fileLength: 9999, caption: `_[🆙] Eror Saat Memproses Data_`, footer: 'teks hitam:v', jpegThumbnail: thumb }, {quoted:fkontak}))
                
 

break 
     case 'likevideo':
                if (isBanned) return reply(global.ban)


                if (!q) return reply(`Gunakan Format : ${command} https://l.likee.video/v/JvI12V`)
                if (!isUrl(q)) throw reply(mess.link) 
                if (!q.includes('like.com')/('l.likee')) return reply('Link Invalid ❎')
                await reply(mess.wait)
                api2.like(`${q}`) 
               .then(result => {
                 let text =`*🔰Like Downloader🔰*\n`
                 text +=`*Title*: ${result.title}\n\n Wait Is Sending The Data You Request`
                 Nev.sendImage(m.chat, result.thumbnail, text, m)
                 Nev.sendMessage(from, {video:{url: result.no_watermark}, mimetype:"video/mp4", caption: `${result.title}`}, {quoted:m})
                 }).catch(() => Nev.sendMessage(m.chat, { document: { url: 'https://chat.whatsapp.com/' }, mimetype: 'application/pdf', fileName: `404
Not Found`, pageCount: 2023, fileLength: 9999, caption: `_[🆙] Eror Saat Memproses Data_`, footer: 'teks hitam:v', jpegThumbnail: thumb }, {quoted:fkontak}))
                 
 

break 
       case 'gitclone':
                 if (isBanned) return reply(global.ban)


                 if (!args[0]) return reply('Linknya?')
                 let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                 if (!regx.test(args[0])) return reply('Linknya salah')
                 reply(mess.wait)
                 let [, usker, repo] = args[0].match(regx) || []
                 repos = repo.replace(/.git$/, '')
                 let hasdl = `https://api.github.com/repos/${usker}/${repos}/zipball`
                 let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                 Nev.sendMessage(m.chat, { document: { url: hasdl }, fileName: `${namafile}`, mimetype: 'zip' }, { quoted: m })
                 
 

break 
       case 'tiktoknowm':
       case 'tiktok':
       case'tt':
                 if (isBanned) return reply(global.ban)


                 if (!args[0]) throw reply(`*Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`)
                 if (!args[0].match(/tiktok/gi)) throw reply(`*Link salah! Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`)
                 const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0]))
                 const irlandia = video.no_watermark || video.no_watermark_hd || video.with_watermark || video.no_watermark_raw
                 if (!irlandia) throw reply( 'Can\'t download video!')
                 reply(mess.wait)
                 Nev.sendMessage(from, {video:{url: irlandia}, mimetype:"video/mp4", caption: `${nickname}`}, {quoted:m}, m)
                 
 

break 

     case 'tiktokmp3':
     case 'tiktokmusic':
                if (isBanned) return reply(global.ban)


                if (args.length < 1) return reply(`Kirim perintah ${command} https://vm.tiktok.com/ZGJAmhSrp/`)        
                if (!isUrl(args[0])) return reply(mess.link)
	            if (!args[0].includes('tiktok')) return reply(mess.link)
	            reply(mess.wait)
                tiktokdlv2(args[0]).then(r => {
                let video = r.video.no_watermark
                Nev.sendMessage(from, { audio: { url: video }, mimetype: 'audio/mp4' }, { quoted: m })
                })
		        
 

break  
     case 'getmusic':
     if (isBanned) return reply(global.ban)


                if (!text) throw reply(`Example : ${prefix + command} 1`) 
                if (!m.quoted) return reply('Reply Pesan Hasil Dari Ytsearch')
                if (!m.quoted.isBaileys) throw reply (`Hanya Bisa Membalas Pesan Dari Bot`) 
		        let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`) 
                reply(mess.wait)
                let qualitty = args[1] ? args[1] : '128kbps'
                let mepdia = await yta(urls[text - 1], qualitty)
                if (mepdia.filesize >= 70) return reply('File Melebihi Batas '+util.format(mepdia))
                Nev.sendImage(m.chat, mepdia.thumb, `⭔ Title : ${mepdia.title}\n⭔ File Size : ${mepdia.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                Nev.sendMessage(m.chat, { audio: { url: mepdia.dl_link }, mimetype: 'audio/mpeg', fileName: `${mepdia.title}.mp3` }, { quoted: m })
                
 

break 
     case 'getvideo':
    case'getv':
     if (isBanned) return reply(global.ban)


                if (!text) throw reply(`Example : ${prefix + command} 1`) 
                if (!m.quoted) return reply('Reply Pesan Hasil Dari ytsearch')
                if (!m.quoted.isBaileys) throw reply (`Hanya Bisa Membalas Pesan Dari Bot`) 
                  if (!urps) throw reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
                reply(mess.wait)
                let qualyity = args[1] ? args[1] : '360p'
                let getvideo = await ytv(urps[text - 1], qualyity)
                if (getvideo.filesize >= 70) return reply('File Melebihi Batas '+util.format(mepdipa))
                Nev.sendMessage(m.chat, { video: { url: getvideo.dl_link }, mimetype: 'video/mp4', fileName: `${getvideo.title}.mp4`, caption: `⭔ Title : ${getvideo.title}\n⭔ File Size : ${getvideo.filesizeF}\n⭔ Url : ${urps[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
                
 

break


///RANDOM VIDEO//
    
     
///QUOTES TEXT//
case'quotes':
     if (isBanned) return reply(global.ban)


                var er = `contoh: ${prefix + command} cinta\n\nOpsi Tersedia:\n• cinta\n• rindu\n• mimpi\n• sedih\n• sendiri\n• sabar\n• kesedihan\n• pernikahan\n• kemerdekaan\n\n By ${ownerName}`
	            if (!text) throw reply(er)
		        case 'cinta':
		        case 'rindu':
		        case 'mimpi':
		        case 'sendiri':
		        case 'sabar':
		        case 'kesedihan':
		        case 'pernikahan':
		        case 'kemerdekaan':
		var erf = `contoh: ${prefix}quotes ${command}\n\nOpsi Tersedia:\n• cinta\n• rindu\n• mimpi\n• sedih\n• sendiri\n• sabar\n• kesedihan\n• pernikahan\n• kemerdekaan\n\n By ${ownerName}`
	            if (!text) throw reply(erf)
			    noapi.quotes(text.toLowerCase()).then(res => {
			    data = JSON.stringify(res)
		        json = JSON.parse(data)
			    let random = Math.floor(Math.random() * json.data.length)
			    hasil56 = json.data[random]
		        var { author, bio, quote } = hasil56
			    reply(`“${quote}”\n\n${author} - ${bio}`)
		        })
		       
 

break 
      

     
//CONVERTER MEDIA//
      case 'emojimix2':
		         if (isBanned) return reply(global.ban)


	             if (!text) throw reply(`Example : ${prefix + command} 😅`) 
	             anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		         for (let res of anu.results) {
		         let encmedia = await Nev.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		         await fs.unlinkSync(encmedia)
		         }
	             
 

break 
      case 'emojimix': {
                if (isBanned) return reply(global.ban)


		        let [emoji1, emoji2] = text.split`+`
		        if (!emoji1) throw reply (`Example : ${prefix + command} 😅+🤔`) 
		        if (!emoji2) throw reply (`Example : ${prefix + command} 😅+🤔`) 
		        anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		        for (let res of anu.results) {
		        let encmedia = await Nev.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		        await fs.unlinkSync(encmedia)
		        }
	            }
	            
 

break 
      case 'sticker': case 's': case 'stiker': case 'sgif': {
                 if (isBanned) return Nev.sendFakeLink(`_Anda terbanned mintalah owner untuk membukanya_`)

                 if (!quoted) return Nev.sendFakeLink(`Balas Video/Image Dengan Caption ${prefix + command}`)
                  if (/image/.test(mime)) {
                  	
                
                 let media = await quoted.download()
                 let encmedia = await Nev.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                 await fs.unlinkSync(encmedia)
                 } else if (/video/.test(mime)) {
                 if ((quoted.msg || quoted).seconds > 15) return reply('Maksimal 10 detik!')
                 let media = await quoted.download()
                 let encmedia = await Nev.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                 await fs.unlinkSync(encmedia)
                 } else {
                 throw reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`) 
                 }
                 }
                 
 

break 
                 case 'toimage': case 'toimg':
if (isBanned) return reply(global.ban)


 {
				          if (!quoted) throw 'Reply Image'
                  reply(mess.wait)
                  if (!/webp/.test(mime)) reply(`reply stiker/caption ${prefix}toimg`)
                let media = await Nev.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    Nev.sendMessage(m.chat, { image: buffer }, ftext)
                    fs.unlinkSync(ran)
                })
            }
            
 

break 
            
      case 'swm': case 'stickerwm': case'wm':
                if (isBanned) return reply(global.ban)


       	     if (!args.join(" ")) return reply(`Example :\nswm Nev | Gans`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0];
                const atnm = swn.split("|")[1];
                reply(mess.wait)
                if (quoted.msg === true) {
                Nev.downloadAndSaveMediaMessage(quoted, "gifee")
                Nev.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
                } else if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Nev.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await Nev.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                await fs.unlinkSync(encmedia)
                } else {
                reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
                
 

break 
case 'more':

if (!args.join(" ")) return reply(`Example :\n${prefix}more Nev | Gans`)
tels = args.join(" ") 
var teks1 = tels.split("|")[0];
var teks2 = tels.split("|")[1];
reply (`${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`) 

 

break 

 
      case 'imagenobg':
      case 'removebg': case 'remove-bg':
       	     if (isBanned) return reply(global.ban)


	            if (!quoted) throw reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            if (!/image/.test(mime)) throw reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            if (/webp/.test(mime)) throw reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            let remobg = require('remove.bg')
	            let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	            let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	            hmm = await './src/remobg-'+getRandom('')
	            localFile = await Nev.downloadAndSaveMediaMessage(qmsg, hmm)
	            outputFile = await './src/hremo-'+getRandom('.png')
	            reply(mess.wait)
	            remobg.removeBackgroundFromImageFile({
	            path: localFile,
	            apiKey: apinobg,
	            size: "regular",
	            type: "auto",
	            scale: "100%",
	            outputFile 
	            }).then(async result => {
	            Nev.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	            await fs.unlinkSync(localFile)
	            await fs.unlinkSync(outputFile)
	            })
	            
 

break 

case 'sremove':{
       	     if (isBanned) return reply(global.ban)


	            if (!quoted) throw reply(`Kirim/Reply stiker Dengan Caption ${prefix + command}`)
	            if (!/webp/.test(mime)) reply(`reply stiker/caption ${prefix}sremove`)
             let remobg = require('remove.bg')
	            let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	            let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	            hmm = await './src/remobg-'+getRandom('')
	            localFile = await Nev.downloadAndSaveMediaMessage(qmsg, hmm)
	            outputFile = await './src/hremo-'+getRandom('.png')
	            reply(mess.wait)
	            remobg.removeBackgroundFromImageFile({
	            path: localFile,
	            apiKey: apinobg,
	            size: "regular",
	            type: "auto",
	            scale: "100%",
	            outputFile 
	            }).then(async result => {
	            Nev.sendImageAsSticker(m.chat, {image: fs.readFileSync(outputFile)}, m, { packname: global.packname, author: global.author })
	            await fs.unlinkSync(localFile)
	            await fs.unlinkSync(outputFile)
	            })
	            
}
 

break 


	//gw add fitur dikit
	//agak berantakan  
	//by Nevz
	//hahanjg
	
case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
             

break 
            case 'runtime':
               case'run':
               case'tes':
const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
            	 
            Nev.sendMessage(m.chat, { 
document: { url: 'https://chat.whatsapp.com/' }, 
mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
fileName: `[404]`, 
pageCount: 2023, 
fileLength: 9999, 
caption: `_RUNTIME_ : *${runtime(process.uptime())}*\n_SPEED_ : *${latensi.toFixed(4)}* _SECONDS_`, 
hydratedFooterText: 'teks hitam:v',
 thumbnailUrl: {url: 'https://telegra.ph/file/e7fd3333fe4f9782afe5b.jpg' }, 
contextInfo:{
        externalAdReply:{
        	thumbnail: fs.readFileSync('./src/run.jpg'),
            title:`${global.ownerName}`,
            body: `${global.namaBot}`,
            sourceUrl: `google.com`, 
            mediaType: 1,
renderLargerThumbnail: true, 
}}}, {quoted: m}) 

            break 
	case 'ban':
	if (!isOwner) return reply(mess.botOwner)
					
	if (isBanned) return reply(global.ban)

	if (!m.quoted && !text) throw reply('Reply/tag target') 

					bnnd = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' 
					
					ban.push(`${bnnd}`)
					fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
					reply(`sukses banned!`)
					
 

break 
					case 'unban':
					if (!m.quoted && !text) throw reply('reply/tag target') 
					if (!isOwner) return reply(mess.botOwner)
					ya = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' 
					unb = ban.indexOf(ya)
					ban.splice(unb, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
				reply(`Nomor ${ya} telah di unban!`)
					
 

break
case 'case':
case'cs':{
					
					try{
						if (!isOwner) return reply(mess.botOwner)
                   if (!q) return reply(`Example: ${prefix + command} antilink`)
                   const getCase = (text) => {
                   return "case  "+`'${text}'`+fs.readFileSync("./Nevz.js").toString().split('case \''+text+'\'')[1].split("break")[0]+"break"
                  } 
   let nana = await getCase(q)
                reply(nana)
            } catch(err){
            console.log(err)
            reply(`Case ${q} tidak di temukan`)
        }
					
} 

break
  
        case 'enc': {
            if (!isOwner) return reply(mess.botOwner)
            if (!q) return reply(`Contoh ${prefix+command} const Nevz = require('@adiwajshing/baileys')`)
            const obfus = async (q) => {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(q,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Nevz`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
            let meg = await obfus(q)
            reply(`${meg.result}`)
        }
        break
case 'listpc': {
            	if (!isOwner) return reply(mess.botOwner)
					 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 reply(`⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`) 
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     reply(`⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n\n───────────────\n\n`)
                    }
                   } 
                             

break
case'md':
case'mediafire':{
if (!text) return reply(`Example ${prefix+command} link`)

reply(mess.wait)
axios.get(text)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').text();
				const size = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-info > ul > li:nth-child(1) > span').text();
				const upload_date = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
				const link = $('#downloadButton').attr('href')
				const hsil = {
					judul: link.split('/')[5],
					upload_date: upload_date,
					size: size,
					mime: link.split('/')[5].split('.')[1],
					link: link
				}}) 
				Nev.sendMessage(m.chat, { document: {url: link}, mimetype: 'application/zip', fileName: 'Nevz', pageCount: '99', fileLength: 9999, caption: 'mediafire' , footer: 'teks hitam:v'}, m)
}
break
case 'happymod':{
if (!q) return reply(`Example ${prefix+command} Sufway surfer mod`)
reply(mess.wait)
let data = await scp1.happymod(q)
let teks = '_[HAPPYMOD SEARCH]_\n\n _HASIL PENCARIAN DARI '+text+'_\n\n' 
let no = 1
                for (let i of data.all) {
				teks += `
				⏣ *Nama* : ${i.judul}
				⏣ *Rating* : ${i.rating}
				⏣ *link* : ${i.link}`
				} 

Nev.sendMessage(m.chat, {
text: teks,
contextInfo: {
	mentionedJid: [m.sender],
	
externalAdReply: {
title: `${ucapanWaktu} ${pushname}
©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ${global.ownerName}`,
body: `${global.namaBot}`,
thumbnailUrl: kat.thumb,
sourceUrl: "https://wa.me/${global.owner}",
mediaType: 1,
renderLargerThumbnail: true, 

}}}, 
{
      quoted: m
   })
            }
             

break
                            case 'listgc': {
                	if (!isOwner) return reply(mess.botOwner)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 reply(`⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`) 
                 for (let i of anu) {
                     let metadata = await Nev.groupMetadata(i)
                     reply(`⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n─────────────────\n\n`) 
                 }}
              

break 
             case 'ebinary': {
            if (!text) reply(`Example : ${prefix + command} text`) 
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
              reply(eb)
        }
         

break 
            case 'dbinary': {
            if (!text) reply(`Example : ${prefix + command} text`)
            
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            reply(db)
        }
         

break 
        case 'ttc': case 'ttt' : case 'tictactoe':
	if (!quoted) reply(` reply pesan target dan ketik ${prefix}tictactoe`) 
	if (isBanned) return reply(global.ban)


{
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw reply('Kamu masih didalam game')
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply(`
*Partner ditemukan!*`)
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await Nev.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await Nev.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('menunggu partner')   
            this.game[room.id] = room
            }
            }
            
 

break 
            case 'delttc': case 'deltt':
if (isBanned) return reply(global.ban)


 {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
            delete this.game[roomnya.id]
            reply(`Berhasil delete session room tictactoe !`)
            }
            
 

break

	case 'mlstalk': {
if (isBanned) return reply(global.ban)

if (!q) return reply(`Example ${prefix+command} 530793138|8129`)
reply(mess.wait)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
reply(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}


break
	case 'tovn': case 'toptt':
if (isBanned) return reply(global.ban)


 {
				           if (!/video/.test(mime) && !/audio/.test(mime))  reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
            if (!quoted) throw reply (`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
  reply(mess.wait)
  let media = await quoted.download()
  let audio = await toAudio(media, 'mp4')
            Nev.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:fgclink})
            }
            
 

break 

            case 'q':
         case 'quoted': {
            if (!m.quoted) return reply('balas pesan yang bereply' )
            let wokwol = await Nev.serializeM(await m.getQuotedObj())
            if (!wokwol.quoted) return reply('pesan tidak ada quoted' )
            await wokwol.quoted.copyNForward(m.chat, true)
         }
         
 

break 
    case 'tomp3':
    if (isBanned) return reply(global.ban)


 {
  if (/document/.test(mime)) throw reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
  if (!/video/.test(mime) && !/audio/.test(mime)) throw reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
  if (!quoted) throw reply (`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
  reply(mess.wait)
  let media = await quoted.download()
  let audio = await toAudio(media, 'mp4')
  Nev.sendMessage(m.chat, {audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Nev.user.name}.mp3`}, { quoted : m })
  }
  
 

break 

case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) reply(`Kirim/reply text dengan caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            
 

break 

               
			
                case 'totag': {
         	if (isBanned) return reply(mess.banned)
			
       	 
        		 
        	  if (!m.isGroup) return reply(mess.group) 
               if (!isBotAdmins) return reply(mess.botAdmin) 
               if (!isAdmins) return reply(mess.admin) 
               if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command} `
               Nev.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
                

break 
               case 'bass': case 'robot': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'slow': case 'smooth':
        		if (isBanned) return reply(mess.banned)
        
            
				 try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await Nev.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Nev.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                
                 

break 
                case 'ping': case 'statistic': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
             

break 
            case 'testspeed': case 'speed': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python tspeed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
             

break 
               case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await Nev.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: menst})
            }
             

break 
               
                   case 'style': case 'styletext': {
	         // respon ketika limit habis
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	 // -1 limit
	break
 case 'tahta': {
	         // respon ketika limit habis
	if(!text) return reply('contoh ${prefix+command} Nevz') 
		wez = await getBuffer(`https://mfarels.my.id/api/hartatahtav2?text=${text}`) 
		          
		await getBuffer(`https://mfarels.my.id/api/openai?text=${text}`).then(({ data }) => {
				Nev.sendMessage(m.chat, { image: { url: data }, caption: text }, { quoted: m })
})
		    }
	 // -1 limit
	break
	case 'bisakah':
	{
		if (isBanned) return reply(global.ban)


       	 	if (!text) reply(`Example : ${prefix + command} saya menang?`) 
            	let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                reply( `*Bisakah ${text}*\nJawab : ${keh}`) 
}
            
            
             

break 
            case 'apakah':
            {
            	if (isBanned) return reply(global.ban)


       	 
            	if (!text) throw `Example : ${prefix + command} saya bisa menang?`
            	let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Ayam']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                reply( `*Apakah ${text}*\nJawab : ${kah}`) 
          }
            
       	 
             

break 
            case 'kapan': case 'kapankah':
            {
            	if (isBanned) return reply(global.ban)


       	 
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                reply(`*${command} ${text}*\nJawab : ${koh}`) 
                            }
            
       	 
             

break 
            
            case 'rate': case 'nilai':
  {
  	           if (isBanned) return reply(global.ban)


       	 
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
reply(`Rate Bot : *${te}%*`) 
                    }
                    
       	
					 

break 
			case 'ganteng': case 'gantengcek': case 'handsome': case 'handsomecheck':
 {
 	
       	        if (isBanned) return reply(global.ban)


				    if (!text) return replay(`Tag Someone, Example : ${prefix + command} Nev`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
                    Nev.sendMessage(m.chat, { document: { url: 'https://chat.whatsapp.com/' }, mimetype: 'application/pdf', fileName: `[CEKGANTENG]`, pageCount: 999, fileLength: 999, caption: jawab , footer: 'teks hitam:v', jpegThumbnail: thumb }, ftroli)
                    }
                    

					 

break 
			case 'cantik': case 'cantikcek': case 'beautiful': case 'beautifulcheck': 
{
	
       	      if (isBanned) return reply(global.ban)


				    if (!text) return reply(`Tag Someone, Example : ${prefix + command} Nev`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
                    Nev.sendMessage(m.chat, { document: { url: 'https://chat.whatsapp.com/' }, mimetype: 'application/pdf', fileName: `[CEKCANTIK]`, pageCount: 999, fileLength: 999, caption: te , footer: 'teks hitam:v', jpegThumbnail: fs.readFileSync('./src/tas.jpeg')}, {quoted: ftroli} )
                    }
                    
  
					 


break
case 'lirik': case 'liriklagu':
			    if (args.length < 2) return reply(`Kirim perintah ${command} judul lagu`)
				reply(mess.wait)
			    ra.Musikmatch(q).then(async(data) => {
				  var teks = `*${data.result.judul} - ${data.result.penyanyi}*\n\n${data.result.lirik}`
				  Nev.sendMessage(m.chat, { image: { url: data.result.thumb }, caption: teks }, { quoted: m })
				}).catch(() => reply(`Judul lagu tidak ditemukan`))

				break
			case 'tanyakerang': case 'kerangajaib': case 'kerang':
			
{
	if (isBanned) return reply(global.ban)


       	 if (!text) throw `Example : ${prefix + command} saya menang?`
				let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
				let koh = krng[Math.floor(Math.random() * krng.length)]
                reply(`*${command} ${text}*\n*Jawab : ${koh}*`) 

				}
				

				 

break 
				case 'playstore': {
			try {
            if (!text) throw `Example : ${prefix + command} clash of clans`
            if(!q) return reply('what are you looking for?')
            let play = await hx.playstore(q)
            let storee = `
❉─────────────────────❉
「 *PLAY STORE* 」*\n
            - *Name* : ${i.name}
            - *Link* : ${i.link}\n
            - *Dev* : ${i.developer}
            - *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
            for (let i of play){
            storee += `\n*「 *PLAY STORE* 」*\n
            - *Name* : ${i.name}
            - *Link* : ${i.link}\n
            - *Dev* : ${i.developer}
            - *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(storee)
            } catch (e) {
		    reply('eror')
		    }
		    }
             

break 
case 'brainly2':
if (isBanned) return reply(global.ban)
                        if (args.length >= 2) {
                        const BrainlySearch = require('./lib/brainly')
                        let tanya = body.slice(9)
                        let jum = Number(tanya.split('.')[1]) || 2
                        if (jum > 10) return reply('Max 10!')
                        if (Number(tanya[tanya.length - 1])) {
                            tanya
                        }
                          await BrainlySearch(tanya.split('.')[0], Number(jum), function (res) {
                            res.forEach(x => {
                                if (x.jawaban.fotoJawaban.length == 0) {
                                    reply(`➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n`)
                                    sendText('nihh ngab')
                                } else {
                                    reply(`➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* 〙: ${x.jawaban.judulJawaban}\n\n➸ *Link foto jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`)
                                }
                            })
                        })
                    } else {
                        reply('Usage :\n/brainly [pertanyaan] [.jumlah]\n\nEx : \n/brainly NKRI .2')
                    }
                    
break 
                    
                    case 'brainly' :
                    if (isBanned) return reply(global.ban)
                        if(!text) return reply('masukan pertanyaan') 
                        const BrainlySearch = require('./lib/brainly')
                        
                        
                          await BrainlySearch(text,Number('1'), function (res) {
                            res.forEach(x => {
                                if (x.jawaban.fotoJawaban.length == 0) {
                                    reply(`➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n`)
                                    sendText('nihh ngab')
                                } else {
                                    reply(`➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* 〙: ${x.jawaban.judulJawaban}\n\n➸ *Link foto jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`)
                                }
                            })
                       })
                    
                    
break 
         case 'nomerhoki':
         case 'nomorhoki': {
            if (isBanned) return reply(global.ban)


       	      if (!Number(text)) return reply(`Example : ${prefix + command} 887435047326`)
            let anu = await primbon.nomer_hoki(Number(text))
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
         }
         
          

break
case'r':
if(!isOwner) return 
    reply(`Runtime : ${runtime(process.uptime())}`)

break       
         case 'artimimpi':
         case 'tafsirmimpi': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} belanja`)
            let anu = await primbon.tafsir_mimpi(text)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
         }
         
          

break 
         case 'ramalanjodoh':
         case 'ramaljodoh': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         
          

break 
         case 'ramalanjodohbali':
         case 'ramaljodohbali': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         
          

break 
         case 'suamiistri': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         
          

break 
         case 'ramalancinta':
         case 'ramalcinta': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         
          

break 
         case 'artinama': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} Zeeone`)
            let anu = await primbon.arti_nama(text)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         
          

break 
         case 'kecocokannama':
         case 'cocoknama': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004`)
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
         }
         
          

break 
         case 'kecocokanpasangan':
         case 'cocokpasangan':
         case 'pasangan': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} Zeeone|Clara`)
            let [nama1, nama2] = text.split`|`
            let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
            if (anu.status == false) return reply(anu.message)
            Nev.sendImage(m.chat, anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
         }
         
          

break 
         case 'jadianpernikahan':
         case 'jadiannikah': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} 6, 12, 2020`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
         }
         
          

break 
         case 'sifatusaha': {
            if (isBanned) return reply(global.ban)


       	      if (!ext) return reply(`Example : ${ command} 28, 12, 2021`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
         }
         
          

break 
         case 'rejeki':
         case 'rezeki': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         
          

break 
         case 'pekerjaan': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         
          

break 
         case 'ramalannasib':
         case 'ramalnasib':
         case 'nasib': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.ramalan_nasib(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
         }
         
          

break


         case 'potensipenyakit':
         case 'penyakit': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         
          

break 
         
         case 'artitarot':
         case 'tarot': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         
          

break 
         case 'fengshui': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} Zeeone, 1, 2004\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
            let [nama, gender, tahun] = text.split`,`
            let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
         }
         
          

break 
         case 'haribaik': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.petung_hari_baik(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         
          

break 
         case 'harisangar':
         case 'taliwangke': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         
          

break 
         case 'harinaas':
         case 'harisial': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
         }
         
          

break 
         case 'nagahari':
         case 'harinaga': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         
          

break 
         case 'arahrejeki':
         case 'arahrezeki': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         
          

break 
         case 'peruntungan': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
            let [nama, tgl, bln, thn, untuk] = text.split`,`
            let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         
          

break 
         case 'weton':
         case 'wetonjawa': {
               
            if (!text) return reply(`Example : ${prefix + command} 12, 1, 2004`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.weton_jawa(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
         }
         
          

break 
         case 'sifat':
         case 'karakter': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} ${global.ownerName},12, 1, 2004`)
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
         }
         
          

break 
         case 'keberuntungan': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} ${global.ownerName}, 12, 1, 2004`)
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
         }
         
          

break 
         case 'memancing': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022`)
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         
          

break 
         case 'masasubur': {
            if (isBanned) return reply(global.ban)


       	      if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
            let [tgl, bln, thn, siklus] = text.split`,`
            let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
            if (anu.status == false) return reply(anu.message)
            Nev.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
         }
         
          

break 
         case 'couple': 
if (isBanned) return reply(global.ban)


       	    {
            let data = fs.readFileSync('./Nev/ppcp.js');
            let jsonData = JSON.parse(data);
            let randIndex = Math.floor(Math.random() * jsonData.length);
            let json = jsonData[randIndex];
            let randCowo = await getBuffer(json.cowo)
            Nev.sendMessage(m.chat, {
               image: randCowo,
               caption: '*Boy*',
               quoted: m
            })
            let randCewe = await getBuffer(json.cewe)
            Nev.sendMessage(m.chat, {
               image: randCewe,
               caption: '*Girl*',
               quoted: m
            })
         }
         
          

break 
         
                  

                
				
              
				case 'qc':
  case 'fakechat': 
      if (isBanned) return reply(global.ban)


       {
    let inputText = m.quoted ? m.quoted.text : text
    if (inputText === "") return reply(`Masukkan pesan:\n${command} hello world`);
    let payload = {
      type: "quoted",
      format: "webp",
      backgroundColor: 'white',
      width: 768,
      height: 768,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: await Nev.getName(m.quoted ? m.quoted.sender : m.sender),
            photo: {
              url: await Nev.profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, 'image').catch(() => 'https://telegra.ph/file/999b290ecb3e50107a9da.jpg'),
            }
          },
          text: inputText,
          replyMessage: {},
        },
      ],
    }
    const response = await axios.post("https://bot.lyo.su/quote/generate", payload, {
      headers: { "Content-Type": "application/json" },
    })
    let buff = Buffer.from(response.data.result.image, "base64")
    if (buff == undefined) return reply('error')
    Nev.sendImageAsSticker(m.chat, buff, m, { packname, author })
  }
  
     

break ;
    
         case 'slot':
               if (isBanned) return reply(global.ban)


       
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🍐 : 🍊','🍐 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','?? : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : 🍇 : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
               db.data.users[m.sender].uang += 1500
              } else if (somtoyy == '🍒 : 🍒 : ??') {
                                db.data.users[m.sender].uang += 1500
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
                                db.data.users[m.sender].uang += 1500
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍐: 🍐 : 🍐') {
                                db.data.users[m.sender].uang += 1500
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
                                db.data.users[m.sender].uang += 1500
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
                                db.data.users[m.sender].uang += 1500
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}

               

break 

                  
                  
               //Recode bolak balik buat Buat ni case🗿
  

         case 'tebaklirik':{
         	if (isBanned) return reply(global.ban)
             if (!m.isGroup) return reply(mess.group)
             Nev.sendMessage(m.chat, {react: {text: '❓',key: m.key}})
                if (tebaklirik.hasOwnProperty(m.chat)) return reply("Masih ada soal yg belum terjawab")
              let anug = await JSON.parse(fs.readFileSync('./game/tebaklirik.json'))
let result = anug[Math.floor(Math.random() * anug.length)]
pertanyaan = result.soal
jawaban = result.jawaban
              lirikk = jawaban.replace(/[c|d|f|g|h|j|k|l|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*_🎮 ${command}🎮_*

_SOAL :_ *${pertanyaan}*
_waktu :_ *55 detik*
_Untuk Bantuan ketik :_ *${prefix}lirikk*

*Balas pesan bot untuk menjawab*
_Pecahkan Soal ini_
~${global.namaBot}`).then(() => {
                  
              tebaklirik[m.chat] = jawaban.toLowerCase()
              fs.writeFileSync("./database/data2/tebaklirik.json", JSON.stringify(tebaklirik))
})
              setTimeout( () => {  
              if (tebaklirik.hasOwnProperty(m.chat)) {
              
              reply(`_🕐waktu habis🕘_\n_Jawabannya:_ *${jawaban}*\n_Ingin Bermain lagi ketik ${prefix}${command}_`)
              delete tebaklirik[m.chat]
              db.data.users[m.sender].uang -= 3.000
              fs.writeFileSync("./database/data2/tebaklirik.json", JSON.stringify(tebaklirik))
}} , 55500) 
         }
               

break
case 'menfes': case 'confes': {
		 if (m.isGroup) return reply('fitur tidak dapat digunakan di grup')
            	if (!text) return reply(`Example : ${prefix + command} 6282xxxxx|nama samaran|pesan`)
            reply('pesan tersampaikan') 
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
                    let mq1 = m1 + '@s.whatsapp.net'
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
Nev.sendMessage(mq1, {text:` Hai kak ada Menfess nih!!\n─────────────\n*${global.namaBot}*\n─────────────\n\nDari : _${m2}_ \nPesan : _${m3}_`}, m) 
                 }
            break
            
              case 'tebakkata':{
              	if (isBanned) return reply(global.ban)
                  if (!m.isGroup) return reply(mess.group)
               

                if (tebakkata.hasOwnProperty(m.chat)) return reply("Masih ada soal yg belum terjawab")
              let anug = await JSON.parse(fs.readFileSync('./game/tebakkata.json'))
let result = anug[Math.floor(Math.random() * anug.length)]
pertanyaan = result.soal
jawaban = result.jawaban
              kataa = jawaban.replace(/[c|d|f|g|h|j|k|l|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*_🎮 ${command}🎮_*

_SOAL :_ *${pertanyaan}*
_waktu :_ *55 detik*
_Untuk Bantuan ketik :_ *${prefix}kataa*

*Balas pesan bot untuk menjawab*
_Pecahkan Soal ini_
~${global.namaBot}`).then(() => {
                  delete tebakkata[m.chat]
              tebakkata[m.chat] = jawaban.toLowerCase()
              fs.writeFileSync("./database/data2/tebakkata.json", JSON.stringify(tebakkata))
              setTimeout( () => {  
if (tebakkata.hasOwnProperty(m.chat)) {
              
            reply(`_🕐waktu habis🕘_\n_Jawabannya:_ *${jawaban}*\n_Ingin Bermain lagi ketik ${prefix}${command}_`)
              delete tebakkata[m.chat]
              db.data.users[m.sender].uang -= 300
              fs.writeFileSync("./database/data2/tebakkata.json", JSON.stringify(tebakkata))
}} , 55500) 
         
               
})} 


break 
              
case 'tebakkimia':{
	if (isBanned) return reply(global.ban)
    if (!m.isGroup) return reply(mess.group)
    Nev.sendMessage(m.chat, {react: {text: '❓',key: m.key}})
                if (tebakkimia.hasOwnProperty(m.chat)) return reply("Masih ada soal yg belum terjawab")
              let anug = await JSON.parse(fs.readFileSync('./game/tebakkimia.json'))
let result = anug[Math.floor(Math.random() * anug.length)]
pertanyaan2 = result.unsur
jawaban2 = result.lambang
              kimiaa = jawaban2.replace(/[e|c|d|f|g|h|j|k|l|o|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*_🎮 ${command}🎮_*

_unsur :_ *${pertanyaan2}*
_apa lambang unsur tersebut_
_waktu :_ *55 detik*


*Balas pesan bot untuk menjawab*
_Pecahkan Soal ini_
~${global.namaBot}`).then(() => {
                  delete tebakkimia[m.chat]
              tebakkimia[m.chat] = jawaban2.toLowerCase()
              fs.writeFileSync("./database/data2/tebakkimia.json", JSON.stringify(tebakkimia))
})
              setTimeout( () => {  
              if (tebakkimia.hasOwnProperty(m.chat)) {
              console.log("Jawaban: " + jawaban2)
              reply(`_🕐waktu habis🕘_\n_Jawabannya:_ *${jawaban2}*\n_Ingin Bermain lagi ketik ${prefix}${command}_`)
              delete tebakkimia[m.chat]
              db.data.users[m.sender].uang -= 300
              fs.writeFileSync("./database/data2/tebakkimia.json", JSON.stringify(tebakkimia))
}} , 55500) 
         }
               

break 
              case 'tebaktebakan':
                  case'tebakan':{
                  	if (isBanned) return reply(global.ban)
                      if (!m.isGroup) return reply(mess.group)
                      Nev.sendMessage(m.chat, {react: {text: '❓',key: m.key}})
                if (tebaktebakan.hasOwnProperty(m.chat)) return reply("Masih ada soal yg belum terjawab")
              let anug = await JSON.parse(fs.readFileSync('./game/tebaktebakan.json'))
let result = anug[Math.floor(Math.random() * anug.length)]
pertanyaan = result.soal
jawaban = result.jawaban
              tebakk = jawaban.replace(/[c|d|f|g|h|j|k|l|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*_🎮 ${command}🎮_*

_SOAL :_ *${pertanyaan}*
_waktu :_ *55 detik*
_Untuk Bantuan ketik :_ *${prefix}tebakk*

*Balas pesan bot untuk menjawab*
_Pecahkan Soal ini_
~${global.namaBot}`).then(() => {
                  delete tebaktebakan[m.chat]
              tebaktebakan[m.chat] = jawaban.toLowerCase()
              fs.writeFileSync("./database/data2/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              setTimeout( () => {  
              if (tebaktebakan.hasOwnProperty(m.chat)) {
              
              reply(`_🕐waktu habis🕘_\n_Jawabannya:_ *${jawaban}*\n_Ingin Bermain lagi ketik ${prefix}${command}_`)
              delete tebaktebakan[m.chat]
              db.data.users[m.sender].uang -= 300
              fs.writeFileSync("./database/data2/tebaktebakan.json", JSON.stringify(tebaktebakan))
}} , 55500) 
         }
               

break 
              case 'tebakbendera':{
              	if (isBanned) return reply(global.ban)
                  if (!m.isGroup) return reply(mess.group)
                  Nev.sendMessage(m.chat, {react: {text: '❓',key: m.key}})
                if (tebakbendera.hasOwnProperty(m.chat)) return reply("Masih ada soal yg belum terjawab")
              let anug = await JSON.parse(fs.readFileSync('./game/tebakbendera.json'))
let result = anug[Math.floor(Math.random() * anug.length)]
let bendera = await getBuffer(result.img)
img = result.img
jawaban = result.name
              flag = jawaban.replace(/[c|d|f|g|h|j|k|l|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              Nev.sendMessage(m.chat, {
               image: bendera,
               caption: `*_🎮 ${command}🎮_*

_SOAL :_ *Darimana Asal bendera tersebut?*
_waktu :_ *55 detik*
_Untuk Bantuan ketik :_ *${prefix}flag*
_img :_ _${img}_

*Balas pesan bot untuk menjawab*
_Pecahkan Soal ini_
~${global.namaBot}`,
               quoted: floc
            }).then(() => {
                  delete tebakbendera[m.chat]
              tebakbendera[m.chat] = jawaban.toLowerCase()
              fs.writeFileSync("./database/data2/tebakbendera.json", JSON.stringify(tebakbendera))
})
              setTimeout( () => {  
              if (tebakbendera.hasOwnProperty(m.chat)) {
              
              reply(`_🕐waktu habis🕘_\n_Jawabannya:_ *${jawaban}*\n_Ingin Bermain lagi ketik ${prefix}${command}_`)
              delete tebakbendera[m.chat]
              db.data.users[m.sender].uang -= 300
              fs.writeFileSync("./database/data2/tebakbendera.json", JSON.stringify(tebakbendera))
}} , 55500) 
         }
               

break 
                            case 'tebakanime':{
                            	if (isBanned) return reply(global.ban)
                                if (!m.isGroup) return reply(mess.group)
                                Nev.sendMessage(m.chat, {react: {text: '❓',key: m.key}})
                if (tebakanime.hasOwnProperty(m.chat)) return reply("Masih ada soal yg belum terjawab")
              let anug = await JSON.parse(fs.readFileSync('./game/tebakanime.json'))
let result = anug[Math.floor(Math.random() * anug.length)]
let bendera = await getBuffer(result.image)
imge = result.image
jawaban = result.jawaban
              wibu = jawaban.replace(/[e|c|d|f|g|h|k|l|o|n|p|q|r|t|v|w|x|y|z]/gi, '_')
              Nev.sendMessage(m.chat, {
               image: bendera,
               caption: `*_🎮 ${command}🎮_*

_SOAL :_ *apa nama anime tersebut?*
_waktu :_ *55َ detik*
_Untuk Bantuan ketik :_ *${prefix}wibu*
_img :_ _${imge}_

*Balas pesan bot untuk menjawab*
_Pecahkan Soal ini_.
~${global.namaBot}`,
               quoted: floc
            }).then(() => {
                  delete tebakanime[m.chat]
              tebakanime[m.chat] = jawaban.toLowerCase()
              fs.writeFileSync("./database/data2/tebakanime.json", JSON.stringify(tebakanime))
})
              setTimeout( () => {  
              if (tebakanime.hasOwnProperty(m.chat)) {
              
              reply(`_🕐waktu habis🕘_\n_Jawabannya:_ *${jawaban}*\n_Ingin Bermain lagi ketik ${prefix}${command}_`)
              delete tebakanime[m.chat]
              db.data.users[m.sender].uang -= 300
              fs.writeFileSync("./database/data2/tebakanime.json", JSON.stringify(tebakanime))
}} , 55500) 
         }
               

break
case 'tebakgambar':{
                            	if (isBanned) return reply(global.ban)
                                if (!m.isGroup) return reply(mess.group)
                                Nev.sendMessage(m.chat, {react: {text: '❓',key: m.key}})
                if (tebakgambar.hasOwnProperty(m.chat)) return reply("Masih ada soal yg belum terjawab")
              let anug = await JSON.parse(fs.readFileSync('./game/tebakgambar.json'))
let result = anug[Math.floor(Math.random() * anug.length)]
let gambare = await getBuffer(result.image)
imges = result.image
jawaban = result.jawaban
              pict = jawaban.replace(/[c|d|f|g|h|j|k|l|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              Nev.sendMessage(m.chat, {
               image: gambare,
               caption: `*_🎮 ${command}🎮_*

_SOAL :_ *apa nama anime tersebut?*
_waktu :_ *75 detik*
_Untuk Bantuan ketik :_ *${prefix}wibu*
_img :_ _${imges}_

*Balas pesan bot untuk menjawab*
_Pecahkan Soal ini_.
~${global.namaBot}`,
               quoted: floc
            }).then(() => {
                  delete tebakgambar[m.chat]
              tebakgambar[m.chat] = jawaban.toLowerCase()
              fs.writeFileSync("./database/data2/tebakgambar.json", JSON.stringify(tebakgambar))
})
              setTimeout( () => {  
              if (tebakgambar.hasOwnProperty(m.chat)) {
              
              reply(`_🕐waktu habis🕘_\n_Jawabannya:_ *${jawaban}*\n_Ingin Bermain lagi ketik ${prefix}${command}_`)
              delete tebakgambar[m.chat]
              db.data.users[m.sender].uang -= 300
              fs.writeFileSync("./database/data2/tebakgambar.json", JSON.stringify(tebakgambar))
}} , 55500) 
         }
               

break 
              case 'caklontong':{
              	if (isBanned) return reply(global.ban)
                  if (!m.isGroup) return reply(mess.group)
                  Nev.sendMessage(m.chat, {react: {text: '❓',key: m.key}})
                if (caklontong.hasOwnProperty(m.chat)) return reply("Masih ada soal yg belum terjawab")
              let anug = await JSON.parse(fs.readFileSync('./game/caklontong.json'))
let result = anug[Math.floor(Math.random() * anug.length)]
pertanyaan = result.soal
jawaban = result.jawaban
              cak = jawaban.replace(/[c|d|f|g|h|j|k|l|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*_🎮 ${command}🎮_*

_SOAL :_ *${pertanyaan}*
_waktu :_ *55 detik*
_Untuk Bantuan ketik :_ *${prefix}cak*

*Balas pesan bot untuk menjawab*
_Pecahkan Soal ini_
~${global.namaBot}`).then(() => {
                  delete caklontong[m.chat]
              caklontong[m.chat] = jawaban.toLowerCase()
              fs.writeFileSync("./database/data2/caklontong.json", JSON.stringify(caklontong))
})
              setTimeout( () => {  
              if (caklontong.hasOwnProperty(m.chat)) {
              
              reply(`_🕐waktu habis🕘_\n_Jawabannya:_ *${jawaban}*\n_Ingin Bermain lagi ketik ${prefix}${command}_`)
              delete caklontong[m.chat]
              db.data.users[m.sender].uang -= 300
              fs.writeFileSync("./database/data2/caklontong.json", JSON.stringify(caklontong))
}} , 55500) 
         }
               

break 
              case 'asahotak':{
              	if (isBanned) return reply(global.ban)
                  if (!m.isGroup) return reply(mess.group)
                  Nev.sendMessage(m.chat, {react: {text: '❓',key: m.key}})
                if (asahotak.hasOwnProperty(m.chat)) return reply("Masih ada soal yg belum terjawab")
              let anug = await JSON.parse(fs.readFileSync('./game/asahotak.json'))
let result = anug[Math.floor(Math.random() * anug.length)]
pertanyaan = result.soal
jawaban = result.jawaban
              asah = jawaban.replace(/[c|d|f|g|h|j|k|l|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*_🎮 ${command}🎮_*

_SOAL :_ *${pertanyaan}*
_waktu :_ *55 detik*
_Untuk Bantuan ketik :_ *${prefix}asah*

*Balas pesan bot untuk menjawab*
_Pecahkan Soal ini_
~${global.namaBot}`).then(() => {
                  delete asahotak[m.chat]
              asahotak[m.chat] = jawaban.toLowerCase()
              fs.writeFileSync("./database/data2/asahotak.json", JSON.stringify(asahotak))
})
              setTimeout( () => {  
              if (asahotak.hasOwnProperty(m.chat)) {
              
              reply(`_🕐waktu habis🕘_\n_Jawabannya:_ *${jawaban}*\n_Ingin Bermain lagi ketik ${prefix}${command}_`)
              delete asahotak[m.chat]
              db.data.users[m.sender].uang -= 300
              fs.writeFileSync("./database/data2/asahotak.json", JSON.stringify(asahotak))
}} , 55500) 
         }
               

break 
              case 'siapakahaku':
                  case'siapaaku':
                      case'siapaku':{
                      	if (isBanned) return reply(global.ban)
                          if (!m.isGroup) return reply(mess.group)
                          Nev.sendMessage(m.chat, {react: {text: '❓',key: m.key}})
                if (siapakahaku.hasOwnProperty(m.chat)) return reply("Masih ada soal yg belum terjawab")
              let anug = await JSON.parse(fs.readFileSync('./game/siapakahaku.json'))
let result = anug[Math.floor(Math.random() * anug.length)]
pertanyaan = result.soal
jawaban = result.jawaban
              who = jawaban.replace(/[c|d|f|g|h|j|k|l|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*_🎮 ${command}🎮_*

_SOAL :_ *${pertanyaan}*
_waktu :_ *55 detik*
_Untuk Bantuan ketik :_ *${prefix}who*

*Balas pesan bot untuk menjawab*
_Pecahkan Soal ini_
~${global.namaBot}`).then(() => {
                  delete siapakahaku[m.chat]
              siapakahaku[m.chat] = jawaban.toLowerCase()
              fs.writeFileSync("./database/data2/siapakahaku.json", JSON.stringify(siapakahaku))
})
              setTimeout( () => {  
              if (siapakahaku.hasOwnProperty(m.chat)) {
              
              reply(`_🕐waktu habis🕘_\n_Jawabannya:_ *${jawaban}*\n_Ingin Bermain lagi ketik ${prefix}${command}_`)
              delete siapakahaku[m.chat]
              db.data.users[m.sender].uang -= 300
              fs.writeFileSync("./database/data2/siapakahaku.json", JSON.stringify(siapakahaku))
}} , 55500) 
         }
               

break 
              case 'susunkata':{
              	if (isBanned) return reply(global.ban)
                  if (!m.isGroup) return reply(mess.group)
                  Nev.sendMessage(m.chat, {react: {text: '❓',key: m.key}})
                if (susunkata.hasOwnProperty(m.chat)) return reply("Masih ada soal yg belum terjawab")
              let anug = await JSON.parse(fs.readFileSync('./game/susunkata.json'))
let result = anug[Math.floor(Math.random() * anug.length)]
pertanyaan = result.soal
jawaban = result.jawaban
              susun = jawaban.replace(/[c|d|f|g|h|j|k|l|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*_🎮 ${command}🎮_*

_SOAL :_ *${pertanyaan}*
_waktu :_ *55 detik*
_Untuk Bantuan ketik :_ *${prefix}susun*

*Balas pesan bot untuk menjawab*
_Pecahkan Soal ini_
~${global.namaBot}`).then(() => {
                  delete susunkata[m.chat]
              susunkata[m.chat] = jawaban.toLowerCase()
              fs.writeFileSync("./database/data2/susunkata.json", JSON.stringify(susunkata))
})
              setTimeout( () => {  
              if (susunkata.hasOwnProperty(m.chat)) {
              
              reply(`_🕐waktu habis🕘_\n_Jawabannya:_ *${jawaban}*\n_Ingin Bermain lagi ketik ${prefix}${command}_`)
              delete susunkata[m.chat]
              db.data.users[m.sender].uang -= 300
              fs.writeFileSync("./database/data2/susunkata.json", JSON.stringify(susunkata))
}} , 55500) 
         }
               

break 
              case 'tebakkalimat':{
              	if (isBanned) return reply(global.ban)
                  if (!m.isGroup) return reply(mess.group)
                  Nev.sendMessage(m.chat, {react: {text: '❓',key: m.key}})
                if (tebakkalimat.hasOwnProperty(m.chat)) return reply("Masih ada soal yg belum terjawab")
              let anug = await JSON.parse(fs.readFileSync('./game/tebakkalimat.json'))
let result = anug[Math.floor(Math.random() * anug.length)]
pertanyaan = result.soal
jawaban = result.jawaban
              tence = jawaban.replace(/[c|d|f|g|h|j|k|l|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*_🎮 ${command}🎮_*

_SOAL :_ *${pertanyaan}*
_waktu :_ *55 detik*
_Untuk Bantuan ketik :_ *${prefix}tence*

*Balas pesan bot untuk menjawab*
_Pecahkan Soal ini_
~${global.namaBot}`).then(() => {
                  delete tebakkalimat[m.chat]
              tebakkalimat[m.chat] = jawaban.toLowerCase()
              fs.writeFileSync("./database/data2/tebakkalimat.json", JSON.stringify(tebakkalimat))
})
              setTimeout( () => {  
              if (tebakkalimat.hasOwnProperty(m.chat)) {
              
              reply(`_🕐waktu habis🕘_\n_Jawabannya:_ *${jawaban}*\n_Ingin Bermain lagi ketik ${prefix}${command}_`)
              delete tebakkalimat[m.chat]
              db.data.users[m.sender].uang -= 300
              fs.writeFileSync("./database/data2/tebakkalimat.json", JSON.stringify(tebakkalimat))
}} , 55500) 
         }
               

break 
              case 'tekateki':{
              	if (isBanned) return reply(global.ban)
                  if (!m.isGroup) return reply(mess.group)
               Nev.sendMessage(m.chat, {react: {text: '❓',key: m.key}})
                if (tekateki.hasOwnProperty(m.chat)) return reply("Masih ada soal yg belum terjawab")
              let anug = await JSON.parse(fs.readFileSync('./game/tekateki.json'))
let result = anug[Math.floor(Math.random() * anug.length)]
pertanyaan = result.soal
jawaban = result.jawaban
              teki = jawaban.replace(/[c|d|f|g|h|j|k|l|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*_🎮 ${command}🎮_*

_SOAL :_ *${pertanyaan}*
_waktu :_ *55 detik*
_Untuk Bantuan ketik :_ *${prefix}teki*

*Balas pesan bot untuk menjawab*
_Pecahkan Soal ini_
~${global.namaBot}`).then(() => {
                  delete tekateki[m.chat]
              tekateki[m.chat] = jawaban.toLowerCase()
              fs.writeFileSync("./database/data2/tekateki.json", JSON.stringify(tekateki))
})
              setTimeout( () => {  
              if (tekateki.hasOwnProperty(m.chat)) {
              
              reply(`_🕐waktu habis🕘_\n_Jawabannya:_ *${jawaban}*\n_Ingin Bermain lagi ketik ${prefix}${command}_`)
              delete tekateki[m.chat]
              db.data.users[m.sender].uang -= 300
              fs.writeFileSync("./database/data2/tekateki.json", JSON.stringify(tekateki))
}} , 55500) 
         }
               

break 
         
  case 'block': {
		if (!isOwner) return reply(mess.botOwner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Nev.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		reply('Berhasil memblokir target')
	}
	 

break 
	case 'setppbot': case 'setbotpp': {
   if (!isOwner) return reply(mess.botOwner)
if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
let media = await Nev.downloadAndSaveMediaMessage(quoted)
await Nev.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
reply('done')
}
 

break 
	case 'unblock': {
		if (!isOwner) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Nev.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	Nev.sendMessage(m.chat, reactionMessage2)
	    reply('Berhasil membuka blokir')
	}
	 

break 
	case 'user': {
		if (!isOwner) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		   reply(`${users}`)
		   Nev.sendMessage(m.chat, reactionMessage2)
	}
	 

break 
	case 'tomp4': case 'tovideo': case'tovid': {
		if (isBanned) return reply(global.ban)
                if (!quoted) return reply('Reply Image')
                if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await Nev.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Nev.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
                Nev.sendMessage(m.chat, reactionMessage2)
            }
            
             

break 

            case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!args.join(" ")) throw respond
            const swn = args.join(" ")
	        reply(mess.wait)
            atas = swn.split("|")[0];
            bawah = swn.split("|")[1];
	        let dwnld = await Nev.downloadMediaMessage(qmsg)
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await Nev.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
	        case 'joox':
                     if (!text) return reply(`Untuk mencari lagu dari joox\n\nPenggunaan: ${prefix}joox judul lagu`)
                     await reply(mess.wait)
                    await rugaapi.joox(text)
                        .then(async ({ result }) => {
                            await Nev.sendFileFromUrl(m.chat, result[0].linkImg, `${result[0].judul}.jpg`, `*Lagu ditemukan!*\n\n➸ *Penyanyi*: ${result[0].penyanyi}\n➸ *Judul*: ${result[0].judul}\n➸ *Album*: ${result[0].album}\n➸ *Ext*: ${result[0].ext}\n➸ *Size*: ${result[0].filesize}\n➸ *Durasi*: ${result[0].duration}\n\nMedia sedang dikirim, mohon tunggu...`)
                            await Nev.sendFileFromUrl(m.chat, result[0].linkMp3, `${result[0].judul}.mp3`, '')
                                .then(() => console.log('Success sending music from Joox!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await reply('Error!') 
                        })
                    


break   


	default:
       
if (body.startsWith(`${prefix}cak`)) {
        if (!m.quoted) return reply ('_Balas soal yang dikirim oleh bot_') 
    let urls = quoted.text.match(new RegExp(pertanyaan, 'gi'))
                if (!urls) return reply(`Mungkin soal yang anda balas, tidak mengandung soal`) 
reply(`Kisi kisinya : *${cak}*\n\n\n_~Created By ${global.ownerName}_`)
         
        
}
if (body.startsWith(`${prefix}asah`)) {
        if (!m.quoted) return reply ('_Balas soal yang dikirim oleh bot_') 
    let urls = quoted.text.match(new RegExp(pertanyaan, 'gi'))
                if (!urls) return reply(`Mungkin soal yang anda balas, tidak mengandung soal`) 
reply(`Kisi kisinya : *${asah}*\n\n\n_~Created By ${global.ownerName}_`)
         
        
}
if (budy.startsWith(`${prefix}whojejw`)) {
        if (!m.quoted) return reply ('_Balas soal yang dikirim oleh bot_') 
    let urls = quoted.text.match(new RegExp(pertanyaan, 'gi'))
                if (!urls) return reply(`Mungkin soal yang anda balas, tidak mengandung soal`) 
reply(`Kisi kisinya : *${who}*\n\n\n_~Created By ${global.ownerName}_`)
      
        
}
if (body.startsWith(`${prefix}susun`)) {
        if (!m.quoted) return reply ('_Balas soal yang dikirim oleh bot_') 
    let urls = quoted.text.match(new RegExp(pertanyaan, 'gi'))
                if (!urls) return reply(`Mungkin soal yang anda balas, tidak mengandung soal`) 
reply(`Kisi kisinya : *${susun}*\n\n\n_~Created By ${global.ownerName}_`)
         
        
}
if (body.startsWith(`${prefix}tence`)) {
        if (!m.quoted) return reply ('_Balas soal yang dikirim oleh bot_') 
    let urls = quoted.text.match(new RegExp(pertanyaan, 'gi'))
                if (!urls) return reply(`Mungkin soal yang anda balas, tidak mengandung soal`) 
reply(`Kisi kisinya : *${tence}*\n\n\n_~Created By ${global.ownerName}_`)
         
        
}
if (body.startsWith(`${prefix}teki`)) {
        if (!m.quoted) return reply ('_Balas soal yang dikirim oleh bot_') 
    let urls = quoted.text.match(new RegExp(pertanyaan, 'gi'))
                if (!urls) return reply(`Mungkin soal yang anda balas, tidak mengandung soal`) 
reply(`Kisi kisinya : *${teki}*\n\n\n_~Created By ${global.ownerName}_`)
         
        
}
if (body.startsWith(`${prefix}lirikk`)) {
        if (!m.quoted) return reply ('_Balas soal yang dikirim oleh bot_') 
    let urls = quoted.text.match(new RegExp(pertanyaan, 'gi'))
                if (!urls) return reply(`Mungkin soal yang anda balas, tidak mengandung soal`) 
reply(`Kisi kisinya : *${lirikk}*\n\n\n_~Created By ${global.ownerName}_`)
         
        
}
if (body.startsWith(`${prefix}kataa`)) {
        if (!m.quoted) return reply ('_Balas soal yang dikirim oleh bot_') 
    let urls = quoted.text.match(new RegExp(pertanyaan, 'gi'))
                if (!urls) return reply(`Mungkin soal yang anda balas, tidak mengandung soal`) 
reply(`Kisi kisinya : *${kataa}*\n\n\n_~Created By ${global.ownerName}_`)
      
        
}
if (body.startsWith(`${prefix}tebakk`)) {
        if (!m.quoted) return reply ('_Balas soal yang dikirim oleh bot_') 
    let urls = quoted.text.match(new RegExp(pertanyaan, 'gi'))
                if (!urls) return reply(`Mungkin soal yang anda balas, tidak mengandung soal`) 
reply(`Kisi kisinya : *${tebakk}*\n\n\n_~Created By ${global.ownerName}_`)
         
        
}
if (body.startsWith(`${prefix}flag`)) {
        if (!m.quoted) return reply ('_Balas soal yang dikirim oleh bot_') 
    let urls = quoted.text.match(new RegExp(img, 'gi'))
                if (!urls) return reply(`Mungkin soal yang anda balas, tidak mengandung soal`) 
reply(`Kisi kisinya : *${flag}*\n\n\n_~Created By ${global.ownerName}_`)
         
        
}

if (body.startsWith(`${prefix}song`)) {
        if (!m.quoted) return reply ('_Balas soal yang dikirim oleh bot_') 
    let urls = quoted.text.match(new RegExp(artist, 'gi'))
                if (!urls) return reply(`Mungkin soal yang anda balas, tidak mengandung soal`) 
reply(`Kisi kisinya : *${song}*\n\n\n_~Created By ${global.ownerName}_`)
         
        
}
if (body.startsWith(`${prefix}wibu`)) {
        if (!m.quoted) return reply ('_Balas soal yang dikirim oleh bot_') 
    let urls = quoted.text.match(new RegExp('55َ', 'gi'))
                if (!urls) return reply(`Mungkin soal yang anda balas, tidak mengandung soal`) 
reply(`Kisi kisinya : *${jawaban}*\n\n_~Created By ${global.ownerName}_`)
  
        
}
if (body.startsWith(`${joen}`)) {
         if (!text) throw reply( 'Masukkan Link Group!')
              if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
              reply(mess.wait)
              const pk = args[0].split('https://chat.whatsapp.com/')[1]
              await Nev.groupAcceptInvite(pk).then((res) => reply(jsonformat(res)))
reply('ok')
reply('jika bot belum join silahkan tanyakan owner')
      }
      


//owner
if (body.startsWith('0')) {
if (!isOwner) return reply(mess.botOwner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
 } catch (err) {
 await reply(String(err))
}
}
if (budy.startsWith('$')) {
if (!isOwner) return reply(mess.botOwner)
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}}
} catch (err) { 
console.log("error di bagian Nevz.js "+util.format(err))
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyanBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
