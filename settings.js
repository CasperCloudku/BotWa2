const chalk = require("chalk")
const fs = require("fs")


//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

global.domain = "https://cloud.singularity.my.id/" // domain lu (pakai https)
global.apikey = 'ptla_eBtEyKdxk3neuE82BHhiL5mY8UeMcP0RyMM1qG6CX1a' //apikey ptla lu
global.capikey = 'ptlc_hWeQo2HlvU9OVEVqzoyqplN6ITMeXb5IrCVc8dKGfBo' // apikey ptlc lu

//batas
global.APIKeys = {
    'https://api.shinoa.xyz/docs': '451C1A14'
}

//owmner v card
global.owner = ['6282226688856'] //ur owner number
global.ownernomer = "6282226688856" //ur owner number2
global.ownername = "CasperDenomus" //ur owner name
global.namaku = "Casper - Assistant"
global.ytname = "Zhecrax" //ur yt chanel name
global.socialm = "JANGAN SPAM" //ur github or insta name
global.location = "Riau PekanBaru Sungay Raya, Indonesia " //ur location

//new
global.botname = "Casper - Assistant"
global.ownernumber = '6282226688856'
global.ownername = 'Casper'
global.ownerNumber = ["6282226688856@s.whatsapp.net"]
global.ownerweb = "http://tedeer.rf.gd"
global.websitex = "http://tedeer.rf.gd"
global.wagc = "Ga ada"
global.themeemoji = '🚩'
global.wm = "Created By Casper"
global.wmbot = "Created By Casper"
global.botscript = 'Sc Ini Private🤣?' //script link
global.packname = "Casper"
global.author = "Casper,"
global.creator = "6282226688856@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0
global.running = "Heroku"
//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Nih',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'proses...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})