const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'isurudyan2001@gmail.com'
global.github = 'https://github.com/dayanisuru/Secktor-Md'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94783800632'
global.devs = '94783800632';
global.website = 'https://github.com/dayanisuru/Secktor-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  botname: process.env.BOT_NAME || 'King 𝐁𝐨𝐭𝐭𝐨',
  ownername:process.env.OWNER_NAME || 'dayanisuru',
  sessionName: process.env.SESSION_ID || 'PUT-HERE',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '🌸🌼 \n ᳆⃞⃚🎓❉⃟࿔ꦿ⃝⃘̉̉̉̉̉̉KING MARAYA ISUWA 🔥ᴮᴼᵀ⚖۝⃟̥̩̩̩̥̩̥͚̮🇦🇴\n* KING isuwa♡꧂✺⃘̶̶۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟̊̊̊̊̊̊͜͡✮ᰳᰳᰳᰳᰳᰳ▬▭ᘡ⃠⃤̭͍͍͍͍͍̭͍͍͍͍͍͍̬̽̽̽̽̌́̎̎̎ͦͦꦿ̥̯̯͚͚̊ࣧࣧ̑̆ᘡ⃠⃤̭͍͍͍͍͍̭͍͍͍͍͍͍̬̽̽̽̽̌́̎̎̎ͦͦꦿ.**KING ISURU KING.*\n\n:     .ılı.——Volume——.ılı. \n:    ▄ █ ▄ █ ▄ ▄ █ ▄ █ ▄ █ \n: Min- – – – – – – – – -●Max \n\n✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩ \n\n┈┈╭━╱▔▔▔▔╲━╮┈┈┈ɪ \n┈┈╰╱╭▅╮╭▅╮╲╯┈┈┈ꜱ \n╳┈┈▏╰┈▅▅┈╯▕┈┈┈┈ᴡ \n┈┈┈╲┈╰━━╯┈╱┈┈╳┈ᴀ \n┈┈┈╱╱▔╲╱▔╲╲┈┈┈┈ᴋ \n┈╭━╮▔▏┊┊▕▔╭━╮┈╳ɪ \n┈┃┊┣▔╲┊┊╱▔┫┊┃┈┈ɴ \n┈╰━━━━╲╱━━━━╯┈╳ɢ \n\n  ᴾᵒʷᵉʳᵈ ᴮʸ king isuru \n\n   ✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩\n\n\n ❉❥ ⃢⃟😘️●♡꧂➸⃟̗̗̗̗̗̗̗̗̗̗̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀❁ཻ͜͡💓❉⃟࿔ꦿ ꦿ ❀⃟⃟ꪶᵏⁱˡˡᵉŕ᭄ᘡ⃠⃤̭͍͍͍͍͍̭͍͍͍͍͍͍̬̽̽̽̽̌́̎̎̎ͦͦꦿ̥̯̯͚͚̊ࣧࣧ̑̆𖣦ڿڰۣڿ𖣦ڿڰۣڿ▽⍤⃝────★᭄⍤⃝────★᭄⍤⃝────★᭄⇝͜͡✪ஓீ᭄͜⋆⃟̥̥̥̥̩̩̩̩̩̩⃟̊̊̊̊̊̊̊̊̊̊̊̊⃟̥̥̥̥̥̥̥̥̥◎⃝₴ꦿ̸̷֟͝୭😕】₴ꦿ̸̷֟͝୭😕】❉❥ ⃢⃟😘️●♡꧂❉❥ ⃢⃟😘️●♡꧂ᵜ∰⟾╱╲ᘡ⃠⃤̭͍͍͍͍͍̭͍͍͍͍͍͍̬̽̽̽̽̌́̎̎̎ͦͦꦿ̥̯̯͚͚̊ࣧࣧ̑̆ᵜ∰⟾╱╲🌹⃝⃟⃤ࣩࣩࣩࣩࣩᵜ∰⟾╱╲ᘡ⃠⃤̭͍͍͍͍͍̭͍͍͍͍͍͍̬̽̽̽̽̌́̎̎̎ͦͦꦿ̥̯̯͚͚̊ࣧࣧ̑̆ᵜ∰⟾╱╲ᘡ⃠⃤̭͍͍͍͍͍̭͍͍͍͍͍͍̬̽̽̽̽̌́̎̎̎ͦͦꦿ̥̯̯͚͚̊ࣧࣧ̑̆▬▭➸⃟̗̗̗̗̗̗̗̗̗̗̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀❁ཻ͜͡💓➸⃟̗̗̗̗̗̗̗̗̗̗̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀❁ཻ͜͡💓❉❥ ⃢⃟😘️●♡꧂✺⃘̶̶۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟̊̊̊̊̊̊͜͡✮ᰳᰳᰳᰳᰳᰳ▬▭᭄๏҉➸⃟̗̗̗̗̗̗̗̗̗̗̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀❁ཻ͜͡💓๏҉➸⃟̗̗̗̗̗̗̗̗̗̗̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀❁ཻ͜͡💓➸⃟̗̗̗̗̗̗̗̗̗̗̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀❁ཻ͜͡💓▬▭➸⃟̗̗̗̗̗̗̗̗̗̗̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀❁ཻ͜͡💓❉❥ ⃢⃟😘️●♡꧂✺⃘̶̶۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟̊̊̊̊̊̊͜͡✮ᰳᰳᰳᰳᰳᰳ▬▭ᘡ⃠⃤̭͍͍͍͍͍̭͍͍͍͍͍͍̬̽̽̽̽̌́̎̎̎ͦͦꦿ̥̯̯͚͚̊ࣧࣧ̑̆ᘡ⃠⃤̭͍͍͍͍͍̭͍͍͍͍͍͍̬̽̽̽̽̌́̎̎̎ͦͦꦿ̥̯̯͚͚̊ࣧࣧ̑̆๏҉✺⃘̶̶۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟̊̊̊̊̊̊͜͡✮ᰳᰳᰳᰳᰳᰳᵜ∰⟾╱╲᭄ᵜ∰⟾╱╲᭄᭄⋆⃟̥̥̥̥̩̩̩̩̩̩⃟̊̊̊̊̊̊̊̊̊̊̊̊⃟̥̥̥̥̥̥̥̥̥◎⃝✺⃘̶̶۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟̊̊̊̊̊̊͜͡✮ᰳᰳᰳᰳᰳᰳ☜ཻ͜͡♥ཻ͜͡☞̱̱̱̱̱̱̱̱̱̱̱̱̄̄̄̄̄̄̄̄̄̄̄⃝⃕⃔ᘡ⃠⃤̭͍͍͍͍͍̭͍͍͍͍͍͍̬̽̽̽̽̌́̎̎̎ͦͦꦿ̥̯̯͚͚̊ࣧࣧ̑̆▬▭✺⃘̶̶۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟۟̊̊̊̊̊̊͜͡✮ᰳᰳᰳᰳᰳᰳᬊ̶꙰ཱི ͜͡ৣː̲̅͞ᵐ̶ᶦ̶ˢ̶ˢ̶̶̶̶ٜ⃕ː↳⊑␥༊␥᷍᷍●▹͢ᵀ͢ᴴ͢ᴱ͢༊⇡.͜.̆▴⃯↳̽ᬊ̶꙰ཱི ͜͡➤͜𖣁 \n\n*Hey guys* 😅✊💦\n☠🚫 *I m Live guys......* 🚫☠\n‼️☠‼️ *~මනෝවිකාර කොල්ලෝ කෙල්ලො ටික~* මෙ පැත්තට සෙට් වෙලා ආතල් එකේ සින්දුවක් බාගෙන වීඩීයෝ එකක් බාගෙන සැපේ ඉමුනේ ඒනන්😅✊💦⭕❌...බේසික් බොට් කෙනෙක් ඉන්නවා ගෲප් එකේ... ☠ *.king * ☠ කියලා ටයිප් කරන්න...🚫☠🚫\n 😈🔥🔥🔥🔥🔥🔥🔥🔥😈 \n\n🚫 *වලි බෑ* \n🚫 *ස්ටීකර් බෑ* \n 🚫 *වෙනත් link බෑ* \n\n😈🔥🔥🔥🔥🔥🔥🔥🔥😈 \n\n ☠🚫\n\n\n\n ```💢❗️⚜️❗️💢ඩිස්ක්‍රිප්ශන් එකේ සඳහන්🔱කිසියම් හෝ වරදක් සිදුවීද⭕️💢⭕️ \n පෙර දැනුම්දීමකින් තොරව⚠️‼️⚠️ඔබව ඉවත්කරනු ලැබේ...❗️️``️` \n\n\n 😅✊💦😈\n 😊😊😊😊😊😊😊😊😊😊😊😊😊 \n ‼️🚫☠🚫‼️ඒ වගේම ගෲප් එකේ ලින්ක් එක පල්ලේහා තියෙනවා‼️☠🚫☠‼️ශෙයා කරලා යාලුවන්වත් සෙට් කරගන්න....⛔😌❌😌⛔ \n ☢️☠☢️☠️☢️☠️☢️☠️☢️ \n *~සැ.යු:ඇඩ්මින් ඉල්ලා අමනාප නොවන්න~* \n\n ☠‼️☠🚫☠‼️☠ \n\n 👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻 \n\n 📌️⁣ඔබට අවශ්‍ය නම් group එකේ ඉල්ලීමට නොහැකි දෙයක් පෞද්ගලිකව Bot ගෙන් ලබා ගන්න. \n\n  \n\n http://Wa.me/+940776312185   \n\n\n 📌️GROUP link  යාලුවන්න යවලා ඇඩ් කර ගන්න. \n\n ✨️.https://chat.whatsapp.com/IohfWh24WgK2DX8mXT7weL.  \n\n ✨️.https://chat.whatsapp.com/Loh1XhHWl6F34iID6pnTOp. \n\n ✨️.https://chat.whatsapp.com/IohfWh24WgK2DX8mXT7weL. \n\n I'm online now....🌸🤗❤ \n\n*Thanx for use my bot*💞✨️* KING.*',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
