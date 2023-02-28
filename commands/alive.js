const { Insta,cmd } = require('../lib')
cmd({
   // created by inrl
var NewGen, templateButtons;
const os = require("os");
const got = require('got')
const speed = require("performance-now");
const  { inrl , tiny, config, inrlQuita, insult , getBuffer, randomStyle, styletext, send_alive, send_menu }= require('../lib/')
const Config = require("../config");

inrl(
	   {
		pattern: ['ping'],
		desc: 'To check ping',
                sucReact: "💯",
                category: ["system", "all"],
	   },
	async (message, client) => {
             try {
		const start = new Date().getTime()
		await client.sendMessage( message.from, { text: '*❮ ࿇ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ࿐ ❯*' }, { quoted: message })
		const end = new Date().getTime()
		await client.sendMessage( message.from, { text: '*ʀᴇsᴘᴏɴsᴇ ɪɴ ' + (end - start) + ' _ᴍs_*' }, { quoted: message })
		global.catchError = false;
                } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage( message.from, error, message.key, message );
                }
	 }
);
inrl({ pattern: ['del'], desc: "to delete unwanted grp msg sended by bot",sucReact: "⚒️",  category: ["all"]}, async (message, client) => {
if (message.client.isCreator && message.isGroup) {
                if (!message.quoted) return await client.sendMessage(message.from, { text :"replay to a group content"},{ quoted: message })
                let { chat, fromMe, id } = message.quoted
                client.sendMessage(message.from, { delete: { remoteJid: message.chat, fromMe: message.quoted.fromMe, id: message.quoted.id, participant: message.quoted.sender }})
        }
    }
);
inrl(
	   {
		pattern: ['dlt'],
		desc: 'To dlt unwanted msg by admin from group content',
                sucReact: "🤌",
                category: ["system", "all"],
	   },
	async (message, client) => {
        const groupMetadata = message.isGroup ? await client.groupMetadata(message.from).catch(e => {}) : ''
	const participants = message.isGroup ? await groupMetadata.participants : ''
        let admins = message.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
if(admins.includes(message.sender) && message.isGroup) {
await client.sendMessage(message.from, {
		delete: {
			remoteJid: message.from,
			fromMe: message.quoted.fromMe,
			id: message.quoted.id,
			participant: message.quoted.sender
            }
     })
}
})
inrl(
  {
    pattern: ["alive"],
    desc: "to check the bot status",
    sucReact: "🥰",
    category: ["system", "all"],
  },
  async (message, client) => {
await send_alive(message, client)
});
inrl(
  {
    pattern: ["script"],
    desc: "to get the bot script",
    sucReact: "🥵",
    category: ["system", "all"],
  },
  async (message, client) => {
      const response = await got("https://api.github.com/repos/dayanisuru/King-Queen")
      const json = JSON.parse(response.body);
      let captIon = `╭═══〘${Config.BOT_INFO.split(",")[0]}〙═══⊷❍
┃☯︎╭──────────────
┃☯︎│
┃☯︎│ ᴜꜱᴇʀ : _${message.client.pushName}_
┃☯︎│ ᴠᴇʀꜱɪᴏɴ : ${tiny(Config.VERSION)}
┃☯︎│ ɢɪᴛʜᴜʙ : _${Config.GIT}_
┃☯︎│ ᴛᴜʀᴛᴏʀɪᴀʟ : _${Config.VIDEO}_
┃☯︎│ ᴛᴏᴛᴇʟ ꜱᴛᴀʀᴇꜱ :* ${json.stargazers_count} stars
┃☯︎│ ꜰᴏʀᴋꜱ:* ${json.forks_count} forks
┃☯︎│
┃☯︎╰───────────────
╰═════════════════⊷`
 
let buttonMessage = {
            image: { url: json.owner.avatar_url },
            caption: captIon,
            footer: Config.FOOTER,
            headerType: 1,
            contextInfo: {
                externalAdReply: {
                    title: json.name,
                    body: json.description ,
                    thumbnail: await getBuffer(Config.BOT_INFO.split(',')[2]),
                    mediaType: 2,
                    mediaUrl: Config.INSTAGRAM,
                    sourceUrl: Config.GIT,
                },
            },
        };
    await client.sendMessage(message.from, buttonMessage, { quoted: message });
});
const bots = require("../lib/perfix");
const Lang = bots.getString("_whats");
// const fs = require("fs");
// const path = require("path");
let cTitle = { "search": "Search",  "all": 'All', "downloade": "Downloade", "chat": "Chat","inrl":"Inrl","ibot":"Ibot", "system": "System", 'fun': "Fun", '18+': "18+","ff:":"Ff", 'owner': "Owner", 'create': "Create", 'group': "Group", "logo": "Logo","photo": "Photo","sticker": "Sticker","anime": "Anime" }

inrl({ pattern: ["menu", "king", "help"], desc: Lang.DESCC, sucReact: "📰", category: ["all", "system"] }, async (message, client) => {
 await send_menu(message, client);
});
bots.categories.map(category => {
  if (category == 'all') return;
  bots.inrl({ pattern: [`${category}-menu`], sucReact: "📰", category: ["all", "system"] }, async (message, client) => {
  try {
    let prefix = new String; 
    if (!message.client.prefix || !message.client.prefix.length == 1) prefix = '.';
    let CMD_HELP =  ` ╭═══〘 ${Config.BOT_INFO.split(",")[0]} 〙═══⊷❍
 ┃
 ┃  ╭════〘 about 〙════⊷❍
 ┃  │
 ┃  │  Owner : ${Config.BOT_INFO.split(",")[1]}
 ┃  │  User : ${message.client.pushName}
 ┃  │  webSite : ${Config.WEB}
 ┃  │  Server : ${Config.HEROKU.APP_NAME}
 ┃  │  Disk Space: 620 GB
 ┃  │  Version: ${Config.VERSION}
 ┃  │
 ┃  │    ${Config.BOT_INFO.split(",")[0]}
 ┃  │
 ┃  ╰───────────────
 ┃  ╭════〘 all-cmds 〙═══⊷❍\n`;
    bots.commands.map((command) => {
      if (command.dontAddCommandList || command.pattern === undefined || command.pattern === null) return;
      if (command.category.includes(category)) { command.pattern.map((cmd) => CMD_HELP +=  " ┃  │      "+cmd+"\n")}
    }); 
   CMD_HELP += ` ┃  ╰─═════════════⊷❍
 ╰══════════════════⊷❍`;
    await client.sendMessage( message.from,{ image: { url: Config.BOT_INFO.split(",")[2]  }, caption: CMD_HELP, }, { quoted: message });
    global.catchError = false;
  } catch (error) { global.catchError = true; return await client.sendErrorMessage( message.from, error, message.key, message);}
  });
})


bots.inrl({ pattern: [`cmds-count`], sucReact: "🆗", category: ["all", "system"] }, async (message, client) => {
  try {
    await client.sendMessage( message.from, { text: bots.infoMessage('Counting commands 💯') }, { quoted: bots.config.quoted.product });
    let all_cmd = 0;
    let visible_cmd = 0;
    let invisible_cmd = 0;
    let search_cmd = 0;
    let downloade_cmd = 0;
    let chat_cmd = 0;
    let system_cmd = 0;
    let fun_cmd = 0;
    let eighteenplus_cmd = 0;
    let owner_cmd = 0;
    let create_cmd = 0;
    let group_cmd = 0;
    let logo_cmd = 0;
    let countcmdOfCmd = 0;
    bots.commands.map(command => {
      if (command.category.includes("all")) all_cmd += command.pattern.length;
      if (!command.dontAddCommandList) visible_cmd += command.pattern.length;
      if (command.dontAddCommandList) invisible_cmd += command.pattern.length;
      if (command.category.includes("search")) search_cmd += command.pattern.length;
      if (command.category.includes("downloade")) downloade_cmd += command.pattern.length;
      if (command.category.includes("chat")) chat_cmd += command.pattern.length;
      if (command.category.includes("system")) system_cmd += command.pattern.length;
      if (command.category.includes("fun")) fun_cmd += command.pattern.length;
      if (command.category.includes("18+")) eighteenplus_cmd += command.pattern.length;
      if (command.category.includes("owner")) owner_cmd += command.pattern.length; 
      if (command.category.includes("create")) create_cmd += command.pattern.length; 
      if (command.category.includes("group")) group_cmd += command.pattern.length; 
      if (command.category.includes("logo")) logo_cmd += command.pattern.length; 
      countcmdOfCmd += command.pattern.length;
    });
    let text = `------- Command Count -------

𖠌 All Commands: ${all_cmd.toString()}
𖠌 Visible Commands: ${visible_cmd.toString()}
𖠌 Invisible Commands: ${invisible_cmd.toString()}
𖠌 Search Commands: ${system_cmd.toString()}
𖠌 Downloade Commands: ${downloade_cmd.toString()}
𖠌 Chat Commands: ${chat_cmd.toString()}
𖠌 System Commands: ${system_cmd.toString()}
𖠌 Fun Commands: ${fun_cmd.toString()}
𖠌 Adult Commands: ${eighteenplus_cmd.toString()}
𖠌 Owner Commands: ${owner_cmd.toString()}
𖠌 Create Commands: ${create_cmd.toString()}
𖠌 Group Commands: ${group_cmd.toString()}
𖠌 Logo Commands: ${logo_cmd.toString()}

💢 Count Of All Commands: ${countcmdOfCmd.toString()}
`;
    const buttons = [
      { buttonId: ".extra_urls", buttonText: { displayText: "urls" }, type: 1, },
      { buttonId: ".system-menu", buttonText: { displayText: "system menu" }, type: 1, },
    ];
    const Message = {
      image: { url: bots.config.image.url.D_E_DP_ },
      caption: text,
      footer: bots.config.exif.footer,
      buttons,
    };
    await client.sendMessage( message.from, Message, { quoted: message })
    global.catchError = false;
  } catch (error) { 
    global.catchError = true; 
    let countcmdOfCmd = 0;
    bots.commands.map((command) => { countcmdOfCmd += command.pattern.length });
    await client.sendMessage(message.from, {text: countcmdOfCmd.toString()}, { quoted: message });
    return await client.sendErrorMessage( message.from, error, message.key, message);
  }
});
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:'+Config.PACKNAME+'\n' // full name
            + 'ORG:'+Config.FOOTER+';\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid='+Config.SUDO+':'+Config.SUDO+'\n' // WhatsApp ID + phone number
            + 'END:VCARD'
 inrl({pattern: ['owner'], desc: "to check whether", sucReact: "🥺", category: ['all']},   async (message, client) => {
 await client.sendMessage( message.from, { contacts:{ displayName:`${Config.BOT_INFO.split(",")[0]}`, contacts: [{ vcard }],}})
});
const GDM = "it sends good morning message";
const GDN = "it sends Night message";

inrl(
  { pattern: ["gm","GoodMornig","gdmornig"], desc: GDM, sucReact: "💖", category: ["chat"] },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "❀🍃Good❀ ❀morning❀🥰❀ ";
    r_text[1] = "☘️𝐺𝑜𝑜𝑑 🌅𝑚𝑜𝑟𝑛𝑖𝑛𝑔 💐 ";
    r_text[2] = "🍃𝙶𝚘𝚘𝚍 🌻𝚖𝚘𝚛𝚗𝚒𝚗𝚐 🥰 ";
    r_text[3] = "🍀𝗚𝗼𝗼𝗱 😘𝗺𝗼𝗿𝗻𝗶𝗻𝗴 🌸 ";
    r_text[4] = "🌻𝓖𝓸𝓸𝓭 𝓶𝓸𝓻𝓷𝓲𝓷𝓰 💞 ";
    r_text[5] = "🌼🅖🅞🅞🅓 🅜🅞🅡🅝🅘🅝🅖 🐶 ";
    r_text[6] = "🍃Ⓖⓞⓞⓓ 🌈ⓜⓞⓡⓝⓘⓝⓖ 🥰 ";
    const i = Math.floor(7 * Math.random());
let returNtxt = await r_text[i] 
    await client.sendMessage( message.from, { text: returNtxt + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);

inrl(
  { pattern: ["ge", "good evening", "evening"], desc: "good evening", sucReact: "💖", category: ["chat"] },
  async (message, client) => {
    var r_text = new Array();
r_text[0] = "😻ɢᴏᴏᴅ 💗ᴇᴠᴇɴɪɴɢ",
r_text[1] = "❣️𝐺𝛩𝛩𝐷 💓𝛯𝛻𝛯𝛮𝛪𝛮𝐺",
r_text[2] = "🥰ｇｏｏｄ 💞ｅｖｅｎｉｎｇ",
r_text[3] = "🥳𝓰𝓸𝓸𝓭 💝𝓮𝓿𝓮𝓷𝓲𝓷𝓰",
r_text[4] = "😍ムののり 💘乇√乇刀ﾉ刀ム",
r_text[5] = "🤩ᎶᎧᎧᎴ 💕ᏋᏉᏋᏁᎥᏁᎶ",
r_text[6] = "😛 ɠơơɖ 💔ɛ۷ɛŋıŋɠ"
const i = Math.floor(7 * Math.random());
let returNtxt = await r_text[i] 
    await client.sendMessage( message.from, { text: returNtxt + message.client.pushName }, { quoted: message } );
    global.catchError = false;
  }
);

inrl(
  { pattern: ["gn", "gdnight", "goodnight","gd8","gdn8"], desc: GDN, sucReact: "💖", category: ["chat"] },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "😘𝙂𝙤𝙤𝙙 🙈𝙣𝙞𝙜𝙝𝙩 💫✨";
    r_text[1] = "🤗𝓖𝓸𝓸𝓭 🧚‍♀𝓷𝓲𝓰𝓱𝓽 ❄️✨";
    r_text[1] = "🌌❡០០ᖱ 🌙⩎ɨ❡ϦƬ 🌎";
    r_text[3] = "😘ցօօժ ⭐️ղíցհԵ 💝";
    r_text[4] = "🌃Ꮐᝪᝪᗞ 🙈ᑎᏆᏀᕼᎢ 💫✨";
    const i = Math.floor(5 * Math.random());
let returNtxt = await r_text[i] 
    await client.sendMessage( message.from, { text: returNtxt + message.client.pushName }, { quoted: message, adReply: true } );
    global.catchError = false;
  }
);
inrl(
  { pattern: ["ga", "gdafternoon", "goodafternoon","gda",], desc: GDN, sucReact: "💖", category: ["chat"] },
  async (message, client) => {
    var r_text = new Array();
    r_text[0] = "😘Ꮆㄖㄖᗪ 🥵卂千ㄒ乇尺几ㄖㄖ几💫✨";
    r_text[1] = "🤗𝙂𝙤𝙤𝙙 💖𝙖𝙛𝙩𝙚𝙧𝙣𝙤𝙤𝙣❄️✨";
    r_text[1] = "♢♞  𝐆Ⓞ𝐨๔ 𝐀ƒт𝔢𝓇Ňｏ𝐎ภ  💲🎀";
    r_text[3] = "😘ɢᴏᴏᴅ ⭐️ᴀꜰᴛᴇʀɴᴏᴏɴ 💝";
    r_text[4] = "🌃₲ØØĐ  🙈₳₣₮ɆⱤ₦ØØ₦💫✨";
    const i = Math.floor(5 * Math.random());
let returNtxt = await r_text[i] 
    await client.sendMessage( message.from, { text: returNtxt + message.client.pushName }, { quoted: message, adReply: true } );
    global.catchError = false;
  }
);
inrl(
	   {
		pattern: ['menu'],
		desc: 'To convert text to random style as you want',
                sucReact: "🙀",
                category: ["system", "all"],
	   },
	async (message, client, match) => {
     const text = message.client.text;
if(!text){
let NewText =`
Enter A Text Quary
_ex_ : Enter a text like this *fancy 55,hi*
1 Fᴀɴᴄʏ
2 ʎɔuɐℲ
3 F⃣ a⃣ n⃣  c⃣ y⃣
4 fancy
5 ʏɔᴎɒꟻ
6 F̸̧̥̠͔̯̻̱̋̏̾͗̈́͝a̵̟̠̯̐n̷̡̤̪͓͖̹̯̙͂̊͋̊̈́̐͑̋̏c̴̯̒͆́y̶͖̘̹̦͆̎̑͗͝
7 Ⓕⓐⓝⓒⓨ
8 F̶a̶n̶c̶y̶
9 F̴a̴n̴c̴y̴
10 F̷a̷n̷c̷y̷
11 F̲a̲n̲c̲y̲
12 F̳a̳n̳c̳y̳
13 F♥a♥n♥c♥y
14 F͎a͎n͎c͎y͎
15 F͓̽a͓̽n͓̽c͓̽y͓̽
16 ☞︎♋︎■︎♍︎⍓︎
17 Fａncｙ
18 ҒΔΠCΨ
19 千卂几匚ㄚ
20 ꎇꍏꈤꏳꌩ
21 ቻልክርሃ
22 𝐅𝐚𝐧𝐜𝐲
23 𝑭𝒂𝒏𝒄𝒚
24 𝐹𝑎𝑛𝑐𝑦
25 ᠻꪖꪀᥴꪗ
26 𝙵𝚊𝚗𝚌𝚢
27 fคຖ¢ฯ
28 ʄąŋƈყ
29 ｷﾑ刀ᄃﾘ
30 千卂几匚ㄚ
31 🄵🄰🄽🄲🅈
32 ᎦᏗᏁፈᎩ
33 ᖴᗩᑎᑕY
34 ʄǟռƈʏ
35 𝙵𝚊𝚗𝚌𝚢
36 𝙁𝙖𝙣𝙘𝙮
37 𝗙𝗮𝗻𝗰𝘆
38 𝐅𝐚𝐧𝐜𝐲
39 𝘍𝘢𝘯𝘤𝘺
40 Fαɳƈყ
41 ₣₳₦₵Ɏ
42 £åñ¢¥
43 ƒαη¢у
44 FΛПᄃY
45 Ƒąղçվ
46 Fₐₙcy
47 ᶠᵃⁿᶜʸ
48 Ŧคภςץ
49 𝔽𝕒𝕟𝕔𝕪
50 𝕱𝖆𝖓𝖈𝖞
51 🅵🅰🅽🅲🆈
52 𝓕𝓪𝓷𝓬𝔂
53 𝔉𝔞𝔫𝔠𝔶
54 Ｆａｎｃｙ
55 𝑭𝒂𝒏𝒄𝒚
56 𝐹𝛥𝛮𝐶𝑌
57 𝙁𝞓𝞜𝘾𝙔
58 𝐅𝚫𝚴𝐂𝐘
59 ᖴᗩᑎᑕᎩ
_ex_ : Enter a text like this *fancy 55,hi*`
return await client.sendMessage(message.from, { text : NewText });
    }
         var split = text.split(',');
         Num = split[0] || match || "55";
         Text = message.quoted.text || split[1] || "enter A text with number ex 31,text";
let ThenText = await styletext(Text, Num)
return await client.sendMessage(message.from, { text : ThenText });
    }
);
