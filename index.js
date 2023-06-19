const { modul } = require('./module');
const moment = require('moment-timezone');
const { baileys, boom, chalk, fs, figlet, FileType, path, pino, process, PhoneNumber } = modul;
const { Boom } = boom
const yargs = require('yargs/yargs')
const _ = require('lodash')
const { default: NevConnect, useSingleFileAuthState, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, jidDecode, proto } = require("@adiwajshing/baileys")
const {
	default: makeWASocket,
	BufferJSON,
	initInMemoryKeyStore,
	DisconnectReason,
	AnyMessageContent,
        makeInMemoryStore,
	useMultiFileAuthState,
	delay
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./lib/color')
const colors = require('colors')
const { uncache, nocache } = require('./lib/loader')
const { start } = require('./lib/spinner')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')

var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}
           const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
           global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
 users: {},
 pasangan: {},
 chats: {},
 game: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

const me = 

require('./Nevz.js')
nocache('../Nevz.js', module => console.log(color('[ CHANGE ]', 'blue'), color(`'${module}'`, 'green'), color(`TerUpdate`,'red')))
require('./index.js')
nocache('../index.js', module => console.log(color('[ CHANGE ]', 'blue'), color(`'${module}'`, 'green'), color(`TerUpdate`,'red')))
 
function title() {
      console.clear()
      console.log(chalk.yellow(`\n\n               ${chalk.bold.yellow(`[ ${global.namaBot} ]`)}\n\n`))
      console.log(color(`< ================================================== >`, 'cyan'))
	}

async function NevBot() {
    	const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys')
        const Nev = NevConnect({
            printQRInTerminal: true,
            logger: pino({ level: 'fatal' }),
            auth: state,
            browser: [`${global.namaBot}`, "Safari", "3.0"],
	    getMessage: async key => {
              return {
                
              }
          }
        })
        store.bind(Nev.ev)

console.log(color(figlet.textSync(`welcome`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
whitespaceBreak: false
}), 'green'))

Nev.ws.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})

Nev.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!Nev.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
m = smsg(Nev, kay, store)
require('./Nevz')(Nev, m, chatUpdate, store)
} catch (err) {
console.log(err)}})

	// detect group update
		Nev.ev.on("groups.update", async (json) => {
			try {
ppgroup = await Nev.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
			console.log(json)
			const res = json[0];
			if (res.announce == true) {
				await sleep(2000)
				Nev.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup has been closed by admin, Now only admins can send messages !`,
				});
			} else if (res.announce == false) {
				await sleep(2000)
				Nev.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nThe group has been opened by admin, Now participants can send messages !`,
				});
			} else if (res.restrict == true) {
				await sleep(2000)
				Nev.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup info has been restricted, Now only admin can edit group info !`,
				});
			} else if (res.restrict == false) {
				await sleep(2000)
				Nev.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup info has been opened, Now participants can edit group info !`,
				});
			} else if(!res.desc == ''){
				await sleep(2000)
				Nev.sendMessage(res.id, { 
					text: `「 Group Settings Change 」\n\n*Group description has been changed to*\n\n${res.desc}`,
				});
      } else {
				await sleep(2000)
				Nev.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\n*Group name has been changed to*\n\n*${res.subject}*`,
				});
			} 
			
		});
		
Nev.sendFakeLink = (jid, text, ucapanWaktu, pushname, quoted) => Nev.sendMessage(jid, {
      text: text,
      contextInfo: {
      	
         "externalAdReply": {
            "title": `${ucapanWaktu} ${pushname}`,
            "body": `⫹⫺ Created By Nevz`,
            "previewType": "PHOTO",
            "thumbnailUrl": ``,
            "thumbnailUrl": global.fek,
            "sourceUrl": `https://chat.whatsapp.com`
         }
      }
   }, {
      quoted
   })
Nev.sendTextWithMentions = async (jid, text, quoted, options = {}) => Nev.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
 Nev.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await  Nev.sendContact(callerId, global.owner)
     Nev.sendMessage(callerId, { text: `Sistem otomatis block!\nJangan menelpon bot!\nSilahkan Hubungi Owner Untuk Dibuka !`}, { quoted : pa7rick })
    await sleep(8000)
    await  Nev.updateBlockStatus(callerId, "block")
    }
    })

Nev.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

Nev.ev.on('contacts.update', update => {
for (let contact of update) {
let id = Nev.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

Nev.getName = (jid, withoutContact  = false) => {
id = Nev.decodeJid(jid)
withoutContact = Nev.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Nev.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Nev.decodeJid(Nev.user.id) ?
Nev.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

Nev.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

 Nev.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await  Nev.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await  Nev.getName(i + '@s.whatsapp.net')}\nFN:${await  Nev.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET: FzyBot\nitem2.X-ABLabel:Email\nitem3.URL:wa.me/+6285879466965\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	 Nev.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
Nev.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return Nev.sendMessage(jid, { poll: { name, values, selectableCount }}) }
Nev.setStatus = (status) => {
Nev.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

Nev.public = true

Nev.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await Nev.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

Nev.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await Nev.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

Nev.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await Nev.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

Nev.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await Nev.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

Nev.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

Nev.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

Nev.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

Nev.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await Nev.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await Nev.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

Nev.sendText = (jid, text, quoted = '', options) => Nev.sendMessage(jid, { text: text, ...options }, { quoted })

Nev.serializeM = (m) => smsg(Nev, m, store)

Nev.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update	
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); Nev.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); NevBot(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); NevBot(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); Nev.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); Nev.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); NevBot(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); NevBot(); }
else Nev.end(`Unknown DisconnectReason: ${reason}|${connection}`)
} else if (connection === "open") 
Spc = '            '

Spc2 = '                   '

Spc3 = '     '

function _0x390d(){var _0x1572a6=['Hai\x20\x20\x20\x20\x20','3575875ubIxLO','Eror?\x20:\x20wa','9466965','==========','ing/bailey','.me/628587','4809721fZnNuC','6qsOEDl','[•]','ownerName','[Rens]','5298vIeBRK','[Nevz]','yellow','18tGFaqv','ated\x20By\x20:\x20','3948136MGOOeY','====\x20>','O\x20ALL\x20CREA','[AND\x20THX\x20T','[Ilham]','log','587CVJToP','namaBot','<\x20========','cyan','Script\x20Cre','TOR\x20BOT]','4335666tPezll','[DikaArdnt','[THX\x20TOO]','aqua','4980168leWpum','[BochilTea','13633310gunUCc',']=========','===\x20>','[@adiwajsh'];_0x390d=function(){return _0x1572a6;};return _0x390d();}function _0x45ef(_0x4aecc3,_0xe58994){var _0x557427=_0x390d();return _0x45ef=function(_0x6cae23,_0x55b2be){_0x6cae23=_0x6cae23-(0x9*0x1e7+0x7*-0x229+0x3b*-0x4);var _0xef18af=_0x557427[_0x6cae23];return _0xef18af;},_0x45ef(_0x4aecc3,_0xe58994);}var _0x26491e=_0x45ef;(function(_0xca157e,_0x5ef6ac){var _0x2e653c=_0x45ef,_0xf31ad3=_0xca157e();while(!![]){try{var _0xe1324b=-parseInt(_0x2e653c(0x11a))/(0xd4a+0x12e8+0xc9*-0x29)*(parseInt(_0x2e653c(0x136))/(0x1c06+-0x3ae*0x3+0x29*-0x6a))+parseInt(_0x2e653c(0x120))/(0xbfb*0x3+0x505*0x3+-0x32fd*0x1)+-parseInt(_0x2e653c(0x124))/(-0x3ed*-0x9+0x13d7+-0x3728)+parseInt(_0x2e653c(0x12b))/(-0x720+0x1*0x172b+-0x1006)+-parseInt(_0x2e653c(0x132))/(-0x7c5+0x2343+0x1b78*-0x1)*(parseInt(_0x2e653c(0x131))/(0x11c3*0x1+0x12ad+-0x2469))+-parseInt(_0x2e653c(0x114))/(0x2cd*0xa+-0x3*-0x111+-0x1f2d)+-parseInt(_0x2e653c(0x139))/(-0x3*0x903+-0x17*-0x25+0x17bf)*(-parseInt(_0x2e653c(0x126))/(-0x1ca3+-0x1817+0x4*0xd31));if(_0xe1324b===_0x5ef6ac)break;else _0xf31ad3['push'](_0xf31ad3['shift']());}catch(_0x4cae06){_0xf31ad3['push'](_0xf31ad3['shift']());}}}(_0x390d,0x1a7e84+0x655*0x45e+-0x2*0x14287c),console[_0x26491e(0x119)](color(Spc3+(_0x26491e(0x11c)+_0x26491e(0x12e)+'=[')+global[_0x26491e(0x11b)]+(_0x26491e(0x127)+_0x26491e(0x115)),_0x26491e(0x11d))),console[_0x26491e(0x119)](color(Spc2+_0x26491e(0x133),_0x26491e(0x123)),color(_0x26491e(0x12a)+global[_0x26491e(0x134)],_0x26491e(0x138))),console[_0x26491e(0x119)](color(Spc2+_0x26491e(0x133),_0x26491e(0x123)),color(_0x26491e(0x11e)+_0x26491e(0x13a)+_0x26491e(0x137),_0x26491e(0x138))),console[_0x26491e(0x119)](color(Spc2+_0x26491e(0x133),_0x26491e(0x123)),color(_0x26491e(0x12c)+_0x26491e(0x130)+_0x26491e(0x12d),_0x26491e(0x138))),console[_0x26491e(0x119)](color(Spc2+_0x26491e(0x133),_0x26491e(0x123)),color(_0x26491e(0x122),_0x26491e(0x138))),console[_0x26491e(0x119)](color(Spc2+_0x26491e(0x133),_0x26491e(0x123)),color(_0x26491e(0x129)+_0x26491e(0x12f)+'s]',_0x26491e(0x138))),console[_0x26491e(0x119)](color(Spc2+_0x26491e(0x133),_0x26491e(0x123)),color(_0x26491e(0x121)+']',_0x26491e(0x138))),console[_0x26491e(0x119)](color(Spc2+_0x26491e(0x133),_0x26491e(0x123)),color(_0x26491e(0x125)+'m]',_0x26491e(0x138))),console[_0x26491e(0x119)](color(Spc2+_0x26491e(0x133),_0x26491e(0x123)),color(_0x26491e(0x118),_0x26491e(0x138))),console[_0x26491e(0x119)](color(Spc2+_0x26491e(0x133),_0x26491e(0x123)),color(_0x26491e(0x135),_0x26491e(0x138))),console[_0x26491e(0x119)](color(Spc2+_0x26491e(0x133),_0x26491e(0x123)),color(_0x26491e(0x137),_0x26491e(0x138))),console[_0x26491e(0x119)](color(Spc2+_0x26491e(0x133),_0x26491e(0x123)),color(_0x26491e(0x117)+_0x26491e(0x116)+_0x26491e(0x11f),_0x26491e(0x138))),console[_0x26491e(0x119)](color(Spc3+(_0x26491e(0x11c)+_0x26491e(0x12e)+_0x26491e(0x12e)+_0x26491e(0x12e)+_0x26491e(0x128)),_0x26491e(0x11d))));

})

Nev.ev.on('creds.update', await saveCreds)

start('2',colors.bold.yellow('\n[Waiting for New Messages..]'))


Nev.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
Nev.sendMessage(jid, buttonMessage, { quoted, ...options })
}

Nev.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: Nev.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "INR",
"priceAmount1000": "100000",
"url": `${websitex}`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `${ownernumber}@s.whatsapp.net`
}
}, options)
return Nev.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

Nev.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but 
}
}
}), options)
Nev.relayMessage(jid, template.message, { messageId: template.key.id })
}

Nev.sendButImg = async (jid, path, teks, fke, but) => {
let img = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let fjejfjjjer = {
image: img, 
jpegThumbnail: img,
caption: teks,
fileLength: "1",
footer: fke,
buttons: but,
headerType: 4,
}
Nev.sendMessage(jid, fjejfjjjer, { quoted: m })
}

return Nev

}

NevBot()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})