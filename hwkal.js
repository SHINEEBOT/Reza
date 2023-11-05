// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')

global.gr =''
global.ig = '@babynative_shine' // ubah aja
global.email = '' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'ShineeBotz' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6287810094757'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = 'ShineeBotz' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'ShineeX6' // ubah aja ini nama sticker
global.author = 'ShineeX6' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'Shinee' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})