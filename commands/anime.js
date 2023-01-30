//created by @inrl
const lnn = "ANIME MAKER"
const { errorMessage, pass, inrl, config, anime, ffpack, ff1,ff2,ff3, ff4, ff5, ff6, ff7, ff8, ff9, ff10, ff11, ff12, ff13, ff14, ff15, ff16, ff17, ff18, ff19, ff20, ff21, ff22, ff23, ff24, ff25, ff26, ff27, ff28, ff29, ff30, ff31, ff32, ff33, ff34, ff35, ff36, ff37, ff38, ff39, ff40, ff41, ff42, ff43, ff44, ff45, ff46, ff47, ff48, ff49, ff50, animepack, an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15, an16, an17, bts, robote, spiderman, tentacion, youAreBad, ansay, ch, trumb, inrlQuita, insult }  = require('../lib')
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll ="*```Enter a word```"
const Ln = "Free Fire logo maker"
let N_T = "Need Text."
let T_L = "Text is too long."
let T_L_1 = "First text is too long."
let T_L_2 = "Secand text is too long."
let T_W = "Can use two words"
console.log(crtPass);
console.log(checkPass);
inrl(
  {
    pattern: ["xxx"],
    desc: "to get randome *** images",
    sucReact: "",
    category: ["all","18+"],
  },
  async (message, client) => {
if(!message.client.isCreator){
    return await client.sendMessage(message.from,{ text :"😼😛🤥"+ passErr }, { quoted: message });
}
if(!message.client.text){
if(checkPass === crtPass ){
let ttinullimg = youAreBad(); 
const Message = {
      image: { url: ttinullimg },
      caption: config.exif.cap,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
      }
    }
  }
);
inrl(
  {
    pattern: ["anime"],
    desc: "to get randome anime",
    sucReact: "",
    category: ["all"],
  },
  async (message, client) => {
const txt = message.client.text
if(!txt){
let ttinullimg = anime(); 
const Message = {
      image: { url: ttinullimg },
      caption: config.exif.cap,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
    }
  }
);

 let dataforpack = ffpack();
 inrl({pattern: ['ffpack'], desc: Ln ,sucReact: "⚒️",  category: ["ff","all"]}, async (message, client) => { await client.sendMessage(message.from, { text : dataforpack },{ quoted: message })
  });
  
 inrl({ pattern: ['ff01'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff1(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff02'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff2(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff03'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (message.client.text === '') return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff3(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
    });
 inrl({ pattern: ['ff04'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff4(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff05'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff5(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff06'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff6(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff07'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff7(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff08'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff8(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff09'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff9(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff10'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff10(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ffff'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff11(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff12'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff12(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff13'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff13(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff14'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff14(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff15'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff15(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff16'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff16(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff17'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff17(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff18'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff18(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff19'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff19(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff20'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff20(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff21'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff21(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff22'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff22(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff23'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff23(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff24'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff24(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff25'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff25(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff26'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff26(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff27'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff27(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
   inrl({ pattern: ['ff28'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff28(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff29'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff29(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff30'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff30(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff31'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff31(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff32'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff32(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff33'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff33(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff34'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff34(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff35'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff35(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff36'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff36(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff37'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff37(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff38'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff38(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff39'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff39(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff40'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff40(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

       await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff41'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff41(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff42'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff42(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
inrl({ pattern: ['ff43'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff43(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff44'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff44(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff45'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff45(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff46'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff46(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff47'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff47(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };


        await client.sendMessage( message.from, Message,{ quoted: message })
});
  inrl({ pattern: ['ff48'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff48(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff49'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff49(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })
});
 inrl({ pattern: ['ff50'], desc: "to create ff logo",sucReact: "⚒️",  category: ["ff", "logo"]}, async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = ff50(message.client.text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

 });
   inrl({pattern: ['apkmod','apk'], desc: "mode apk link",sucReact: "🌇",  category: ["apk","all"]}, async (message, client) => {
   if(!message.client.text){
      await client.sendMessage(message.from, { text :'┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMMANDS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ ↘️ Nova Launcher:\n     *.nova*\n\n┠⊷️ ↘️ CM Launcher:\n     *.cml*\n\n┠⊷️ ↘️ Apex Launcher:\n     *.apex*\n\n\n┠⊷️ ↘️ Kinemaster:\n     *.kinemaster*\n\n┠⊷️ ↘️ PicsArt Gold:\n     *.picsart*\n\n┠⊷️ ↘️ Canva Pro:\n     *.canva*\n\n┠⊷️ ↘️ Ligthrom:\n     *.lightroom*\n\n┠⊷️ ↘️ Photoshop Express:\n     *.pshop*\n\n┠⊷️ ↘️ Snapseed:\n     *.snaps*\n\n┠⊷️ ↘️ Retouch:\n     *.retouch*\n\n\n┠⊷️ ↘️ Vanced Manager:\n     *.vanced*\n\n┠⊷️ ↘️ Crunchyroll:\n     *.crunchy*\n\n┠⊷️ ↘️ Freezer Mod:\n     *.freez*\n\n┠⊷️ ↘️ Deezer Premium:\n     *.deezer*\n\n┠⊷️ ↘️ RadioBox:\n     *.rbox*\n\n┠⊷️ ↘️ Mx Player Pro:\n     *.mxpro*\n\n┠⊷️ ↘️ Power AMP:\n     *.amp*\n\n┠⊷️ ↘️ JetAudio:\n     *.jetau*\n\n\n┠⊷️ ↘️ ExpressVpn:\n     *.xpress*\n\n┠⊷️ ↘️ Hospot Shield:\n     *.hshield*\n\n┠⊷️ ↘️ TurboVpn:\n     *.Turbo*\n\n┠⊷️ ↘️ File Manager:\n     *.flmanager*\n\n┠⊷️ ↘️ CallRecorder:\n     *.callr*\n\n┠⊷️ ↘️ FingScanner:\n     *.fing*\n\n┠⊷️ ↘️ Shazam Encore:\n     *.shazam*\n\n┠⊷️ ↘️ QR Scanner Pro:\n     *.qrcode*\n\n┠⊷️ ↘️ Screen Recorder:\n     *.srecorder*\n\n┠⊷️ ↘️ TikTok Mod:\n     *.tiktok*\n\n┠⊷️ ↘️ Photomath:\n     *.pmath*\n\n┠⊷️ ↘️ WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *ᴍᴀᴅᴇ ʙʏ ɪɴʀʟ ᴡɪᴛʜ\nɴᴀᴢɪᴍ-ʙʀᴏ* 😉\n┗━━━━━━━━━━━━━━━━━━━\n'},{ quoted: message });
      }
});

   inrl({pattern: ['nova'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *NOVA LAUNCHER* 😹\npremium unlocked .\n📌 bit.ly/drknova'},{ quoted: message });
});

   inrl({pattern: ['cml'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *CM LAUNCHER* 😹\npremium unlocked.\n😞 No disponible en este momento.'},{ quoted: message });
});

   inrl({pattern: ['apex'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *APEX LAUNCHER* 😹\npremium unlocked.\n📌 bit.ly/drkapex'},{ quoted: message });
});

   inrl({pattern: ['kinemaster'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *KINEMASTER MOD* 😹\npremium unlocked.\n👉https://bit.ly/2RSyFVr.\n pass: 3456'},{ quoted: message });
});

   inrl({pattern: ['inshot'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *INSHOT MOD* 😹\npremium unlocked.\n👉https://bit.ly/3zyNjlZ'},{ quoted: message });
});

   inrl({pattern: ['alight'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *ALIGHT MOTION MOD* 😹\npremium unlocked.\n👉https://bit.ly/3cHUBdg\n pass: 3456'},{ quoted: message });
});

   inrl({pattern: ['capcut'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *CAP CUT MOD* 😹\npremium unlocked.\n👉https://bit.ly/3pSSlFu'},{ quoted: message });
});
   inrl({pattern: ['picsart'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *PICSART GOLD* 😹\npremium unlocked.\n📌 bit.ly/drkpicsart'},{ quoted: message });
});

   inrl({pattern: ['canva'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *CANVA PRO* 😹\npremium unlocked.\n📌 bit.ly/canvapro'},{ quoted: message });
});

   inrl({pattern: ['lightr'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *LIGTHROM* 😹\npremium unlocked.\n📌 bit.ly/drklightr'},{ quoted: message });
});

   inrl({pattern: ['pshop'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *PHOTOSHOP EXPRESS* 😹\npremium unlocked.\n📌 bit.ly/drkphotoshop'},{ quoted: message });
});

   inrl({pattern: ['snaps'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *SNAPSEED* 😹\npremium unlocked.\n📌 bit.ly/drksnaps'},{ quoted: message });
});

   inrl({pattern: ['retouch'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *RETOUCH* 😹\npremium unlocked.\n📌 bit.ly/drkretouch'},{ quoted: message });
});

   inrl({pattern: ['vanced'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *VANCED MANAGER* 😹\nyoutube vanced.\n📌 bit.ly/drkytubev'},{ quoted: message });
});

   inrl({pattern: ['freez'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *FREEZER MOD* 😹\nPremium Unlocked.\n📌 bit.ly/drkfreezer'},{ quoted: message });
});

   inrl({pattern: ['deezer'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *DEEZER MOD* 😹\npremium unlocked.\n📌 bit.ly/drkdeezer'},{ quoted: message });
});

   inrl({pattern: ['rbox'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *RADIO BOX* 😹\npremium unlocked.\n📌 bit.ly/drkradiobox'},{ quoted: message });
});

   inrl({pattern: ['mxpro'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *MX PLAYER PRO* 😹\npremium unlocked.\n⚠️ Versión Premium.\n📌 bit.ly/drkmxplayer'},{ quoted: message });
});

   inrl({pattern: ['amp'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *POWERAMP* 😹\npremium unlocked.\n📌 bit.ly/drkampplayer'},{ quoted: message });
});

   inrl({pattern: ['jetau'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *JetAudio* 😹\npremium unlocked.\n📌 bit.ly/drkjetau'},{ quoted: message });
});

   inrl({pattern: ['xpress'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *EXPRESS VPN* 😹\npremium unlocked.\n📌 bit.ly/drkXpress'},{ quoted: message });
});

   inrl({pattern: ['hshield'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *HOSPOT SHIELD VPN* 😹\npremium unlocked.\n📌 bit.ly/drkHShield'},{ quoted: message });
});

   inrl({pattern: ['avguard'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *TURBO VPN* 😹\npremium unlocked.\n📌 bit.ly/drkguard'},{ quoted: message });
});

   inrl({pattern: ['flmanager'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *FILE MANAGER* 😹\npremium unlocked.\n📌 bit.ly/drkesfile'},{ quoted: message });
});

   inrl({pattern: ['callr'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *CALL RECORDER* 😹\npremium unlocked.\n📌 bit.ly/drkcallr'},{ quoted: message });
});

   inrl({pattern: ['fing'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *FING SCANNER* 😹\npremium unlocked.\n📌 bit.ly/drkfing'},{ quoted: message });
});

   inrl({pattern: ['shazam'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *SHAZAM ENCORE* 😹\npremium unlocked.\n📌 bit.ly/drkshaz'},{ quoted: message });
});

   inrl({pattern: ['qrcode'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *QR CODE SCANER* 😹\npremium unlocked.\n📌 bit.ly/drkqrscanner'},{ quoted: message });
});

   inrl({pattern: ['srecorder'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *SCREEN RECORDER* 😹\npremium unlocked.\n📌 bit.ly/drkgrabr'},{ quoted: message });
});

   inrl({pattern: ['tiktok'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *TIKTOK MOD* 😹\npremium unlocked.\n📌 bit.ly/drktiktok'},{ quoted: message });
});

   inrl({pattern: ['pmath'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *PHOTOMATH* 😹\npremium unlocked.\n📌 bit.ly/drkphotomath'},{ quoted: message });
});

   inrl({pattern: ['waplus'], desc: "mode apk link",sucReact: "🌇",  category: ["apk"]}, async (message, client) => {
      await client.sendMessage(message.from, { text :'😹 *WHATSAPP PLUS* 😹\nwhattsapp mod.\n📌 bit.ly/drkWaPlus'},{ quoted: message });
});


inrl({pattern: ['animepack'], desc: lnn ,sucReact: "🌚",  category: ["logo"]}, (async (message, client) => {
let animeimgdat = animepack();
    await client.sendMessage(message.from, { text :animeimgdat},{ quoted: message })
  
  }));
  
inrl({ pattern: ['anime1'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an1(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
    
inrl({ pattern: ['anime2'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an2(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
        
inrl({ pattern: ['anime3'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an3(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
        
inrl({ pattern: ['anime4'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an4(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
        
inrl({ pattern: ['anime5'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an5(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
        
inrl({ pattern: ['anime6'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an6(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));

inrl({ pattern: ['anime7'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an7(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
        
inrl({ pattern: ['anime8'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an8(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message }) 

    }));      
        
inrl({ pattern: ['anime9'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an9(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));        
        
inrl({ pattern: ['anime10'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an10(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
        
inrl({ pattern: ['anime11'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an11(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })  

    }));      
        
inrl({ pattern: ['anime12'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an12(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));

inrl({ pattern: ['anime13'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an13(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
        
inrl({ pattern: ['anime14'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an14(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    }));
        
inrl({ pattern: ['anime15'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an15(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message }) 

    }));  
        
inrl({ pattern: ['anime16'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an16(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message }) 

    }));      
        
inrl({ pattern: ['anime17'], desc: lnn ,sucReact: "🌚",  category: ["logo"] }, (async (message, client) => {

        if (!message.client.text) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        var ttinullimage = an17(message.client.text)

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message }) 

    }));
    inrl(
  {
    pattern: ["bts"],
    desc: "to get randome bts image",
    sucReact: "",
    category: ["all"],
  },
  async (message, client) => {
const txt = message.client.text
if(!txt){
let ttinullimg = bts(); 
const Message = {
      image: { url: ttinullimg },
      caption: config.exif.cap,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
    }
  }
);
inrl(
  {
    pattern: ["tentacion"],
    desc: "to get randome anime",
    sucReact: "",
    category: ["all"],
  },
  async (message, client) => {
const txt = message.client.text
if(!txt){
let ttinullimg = tentacion(); 
const Message = {
      image: { url: ttinullimg },
      caption: config.exif.cap,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
    }
  }
);
inrl(
  {
    pattern: ["robote"],
    desc: "to get randome anime",
    sucReact: "",
    category: ["all"],
  },
  async (message, client) => {
const txt = message.client.text
if(!txt){
let ttinullimg = robote(); 
const Message = {
      image: { url: ttinullimg },
      caption: config.exif.cap,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
    }
  }
);
inrl(
  {
    pattern: ["spiderman"],
    desc: "to get randome anime",
    sucReact: "",
    category: ["all"],
  },
  async (message, client) => {
const txt = message.client.text
if(!txt){
let ttinullimg = spiderman(); 
const Message = {
      image: { url: ttinullimg },
      caption: config.exif.cap,
    };
    await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
    }
  }
);
   inrl({ pattern: ['an'], fromMe: true, desc: "to add " ,sucReact: "😹", category: ['all'],usage: '<word>',}, async (message, client) => {

const text = message.client.text;

    if (!text) return await client.sendMessage( message.from, { text: 'Enter A weard'}, { quoted: message });

        var ttinullimage = ansay(text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    });

    inrl({ pattern: ['ch'], fromMe: true, desc: 'just for fun' ,sucReact: "😹", category: ['all'], },  async (message, client) => {

const text = message.client.text;

            if (!text) return await client.sendMessage( message.from, { text: 'Enter A weard'}, { quoted: message });

        var ttinullimage = ch(text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap,  };

        await client.sendMessage( message.from, Message,{ quoted: message })

    });

    inrl({ pattern: ['tr'], fromMe: true, desc: 'funny trumb Twitter post' ,sucReact: "😹", category: ['all'],usage: '<word>',} , async (message, client) => {

const text = message.client.text;

     if (!text) return await client.sendMessage( message.from, { text: 'Enter A weard'}, { quoted: message });

        var ttinullimage = trumb(text);

const Message = { image: { url:  ttinullimage }, caption: config.exif.cap, };

        await client.sendMessage( message.from, Message,{ quoted: message })

    });

function _0x1bc6(){var _0x57f338=['https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html','https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html','p29','exif','split','https://textpro.me/neon-text-effect-online-963.html','16196mEuIfs','map','18550480GWBywP','https://textpro.me/ice-cold-text-effect-862.html','catch','5614050JVcsft','1450kcDehS','p25','length','logo','takes1','textpro','p24','heart','sendMessage','https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html','api','https://textpro.me/create-logo-joker-online-934.html','text','domain','inrl','p17','https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html','7JCOgLK','errorMessage','config','https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html','p18','https://textpro.me/create-thunder-text-effect-online-881.html','https://textpro.me/create-3d-avengers-logo-online-974.html','from','p23','https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html','https://textpro.me/create-lion-logo-mascot-online-938.html','8492064ywlYhQ','p19','https://textpro.me/create-art-paper-cut-text-effect-online-1022.html','6oLTZOh','https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html','https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html','2099970fUjvCg','640710JotdPk','sendErrorMessage','<word>','193447XJTNsh','catchError','client','https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html','https://textpro.me/create-logo-style-marvel-studios-online-971.html','includes','FREE_TXT','then','https://textpro.me/create-wolf-logo-galaxy-online-936.html','args','p28','https://textpro.me/thunder-text-effect-online-881.html','summer','key','https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html','../lib/perfix','p22','cap','https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html','https://textpro.me/advanced-glow-text-effect-873.html','p21','p30','p16'];_0x1bc6=function(){return _0x57f338;};return _0x1bc6();}var _0x3366b0=_0x1eda;(function(_0x4e34bb,_0x371fee){var _0x4617eb=_0x1eda,_0x831c30=_0x4e34bb();while(!![]){try{var _0x857988=parseInt(_0x4617eb(0x154))/0x1*(parseInt(_0x4617eb(0x14d))/0x2)+-parseInt(_0x4617eb(0x150))/0x3+parseInt(_0x4617eb(0x171))/0x4*(-parseInt(_0x4617eb(0x177))/0x5)+parseInt(_0x4617eb(0x176))/0x6*(-parseInt(_0x4617eb(0x13f))/0x7)+parseInt(_0x4617eb(0x14a))/0x8+-parseInt(_0x4617eb(0x151))/0x9+parseInt(_0x4617eb(0x173))/0xa;if(_0x857988===_0x371fee)break;else _0x831c30['push'](_0x831c30['shift']());}catch(_0x8f7957){_0x831c30['push'](_0x831c30['shift']());}}}(_0x1bc6,0x96598));function _0x1eda(_0xa6d488,_0x58414e){var _0x1bc66b=_0x1bc6();return _0x1eda=function(_0x1eda96,_0x56e131){_0x1eda96=_0x1eda96-0x12f;var _0x4f179a=_0x1bc66b[_0x1eda96];return _0x4f179a;},_0x1eda(_0xa6d488,_0x58414e);}const bots=require(_0x3366b0(0x163)),maker=require('mumaker');bots[_0x3366b0(0x13c)]({'pattern':['p1'],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':_0x3366b0(0x153)},async(_0x3451a6,_0x2a6fdd)=>{var _0x174e6f=_0x3366b0;if(!_0x3451a6[_0x174e6f(0x156)][_0x174e6f(0x15d)][0x0])return global[_0x174e6f(0x155)]=!![],await _0x2a6fdd[_0x174e6f(0x136)](_0x3451a6['from'],{'text':bots[_0x174e6f(0x140)](N_T)},{'quoted':_0x3451a6});;if(_0x3451a6[_0x174e6f(0x156)]['text'][_0x174e6f(0x130)]>=0xf)return global[_0x174e6f(0x155)]=!![],await _0x2a6fdd['sendMessage'](_0x3451a6[_0x174e6f(0x146)],{'text':bots[_0x174e6f(0x140)](T_L)},{'quoted':_0x3451a6});;let _0x1d9b78=_0x3451a6['client'][_0x174e6f(0x13a)];var _0x406213,_0x358f97;if(_0x1d9b78[_0x174e6f(0x159)](',')){var _0x37f859=_0x1d9b78['split'](',');_0x406213=_0x37f859[0x0],_0x358f97=_0x37f859[0x1];}var _0x3d5c5e=_0x406213||_0x1d9b78,_0x2608ed=_0x358f97||Config[_0x174e6f(0x15a)];await maker[_0x174e6f(0x133)]('https://textpro.me/create-blackpink-logo-style-online-1001.html',[_0x3d5c5e,_0x2608ed])[_0x174e6f(0x15b)](async _0x4243cb=>{var _0x4cd6e5=_0x174e6f;return global['catchError']=![],await _0x2a6fdd[_0x4cd6e5(0x136)](_0x3451a6[_0x4cd6e5(0x146)],{'image':{'url':_0x4243cb},'caption':bots[_0x4cd6e5(0x141)]['exif'][_0x4cd6e5(0x165)]},{'quoted':_0x3451a6});})[_0x174e6f(0x175)](async _0x2472ee=>{var _0x266f5c=_0x174e6f;return global[_0x266f5c(0x155)]=!![],await _0x2a6fdd[_0x266f5c(0x152)](_0x3451a6['from'],_0x2472ee,_0x3451a6[_0x266f5c(0x161)],_0x3451a6);});}),bots[_0x3366b0(0x13c)]({'pattern':['p2'],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':_0x3366b0(0x153)},async(_0x494f18,_0x4fc256)=>{var _0x3482d1=_0x3366b0;if(!_0x494f18[_0x3482d1(0x156)][_0x3482d1(0x15d)][0x0])return global[_0x3482d1(0x155)]=!![],await _0x4fc256[_0x3482d1(0x136)](_0x494f18[_0x3482d1(0x146)],{'text':bots['errorMessage'](N_T)},{'quoted':_0x494f18});;if(_0x494f18[_0x3482d1(0x156)][_0x3482d1(0x13a)][_0x3482d1(0x130)]>=0xf)return global[_0x3482d1(0x155)]=!![],await _0x4fc256[_0x3482d1(0x136)](_0x494f18[_0x3482d1(0x146)],{'text':bots[_0x3482d1(0x140)](T_L)},{'quoted':_0x494f18});;let _0x52561f=_0x494f18['client'][_0x3482d1(0x13a)];var _0x1ae8e1,_0x2fefc3;if(_0x52561f[_0x3482d1(0x159)](',')){var _0x1fb45d=_0x52561f[_0x3482d1(0x16f)](',');_0x1ae8e1=_0x1fb45d[0x0],_0x2fefc3=_0x1fb45d[0x1];}var _0x4710d8=_0x1ae8e1||_0x52561f,_0x2a71e7=_0x2fefc3||Config[_0x3482d1(0x15a)];await maker['textpro'](_0x3482d1(0x14c),[_0x4710d8,_0x2a71e7])['then'](async _0xaebab8=>{var _0x2ee83d=_0x3482d1;return global[_0x2ee83d(0x155)]=![],await _0x4fc256[_0x2ee83d(0x136)](_0x494f18[_0x2ee83d(0x146)],{'image':{'url':_0xaebab8},'caption':bots[_0x2ee83d(0x141)]['exif'][_0x2ee83d(0x165)]},{'quoted':_0x494f18});})[_0x3482d1(0x175)](async _0x49e2d1=>{var _0x63588d=_0x3482d1;return global[_0x63588d(0x155)]=!![],await _0x4fc256['sendErrorMessage'](_0x494f18[_0x63588d(0x146)],_0x49e2d1,_0x494f18[_0x63588d(0x161)],_0x494f18);});}),bots[_0x3366b0(0x13c)]({'pattern':['p3'],'sucReact':'💗','category':['logo'],'usage':_0x3366b0(0x153)},async(_0x459ee1,_0x26c315)=>{var _0x34d911=_0x3366b0;if(!_0x459ee1['client'][_0x34d911(0x15d)][0x0])return global[_0x34d911(0x155)]=!![],await _0x26c315[_0x34d911(0x136)](_0x459ee1[_0x34d911(0x146)],{'text':bots[_0x34d911(0x140)](N_T)},{'quoted':_0x459ee1});;if(_0x459ee1[_0x34d911(0x156)][_0x34d911(0x13a)]['length']>=0xf)return global[_0x34d911(0x155)]=!![],await _0x26c315[_0x34d911(0x136)](_0x459ee1[_0x34d911(0x146)],{'text':bots[_0x34d911(0x140)](T_L)},{'quoted':_0x459ee1});;let _0x9bf8f8=_0x459ee1[_0x34d911(0x156)][_0x34d911(0x13a)];var _0x59caae,_0x3854f6;if(_0x9bf8f8[_0x34d911(0x159)](',')){var _0x18029d=_0x9bf8f8[_0x34d911(0x16f)](',');_0x59caae=_0x18029d[0x0],_0x3854f6=_0x18029d[0x1];}var _0x56b5d8=_0x59caae||_0x9bf8f8,_0x3ce75f=_0x3854f6||Config[_0x34d911(0x15a)];await maker[_0x34d911(0x133)]('https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html',[_0x56b5d8,_0x3ce75f])[_0x34d911(0x15b)](async _0x1f580a=>{var _0x2f35c9=_0x34d911;return global[_0x2f35c9(0x155)]=![],await _0x26c315[_0x2f35c9(0x136)](_0x459ee1['from'],{'image':{'url':_0x1f580a},'caption':bots[_0x2f35c9(0x141)]['exif']['cap']},{'quoted':_0x459ee1});})[_0x34d911(0x175)](async _0x1343a7=>{var _0x334032=_0x34d911;return global[_0x334032(0x155)]=!![],await _0x26c315['sendErrorMessage'](_0x459ee1[_0x334032(0x146)],_0x1343a7,_0x459ee1[_0x334032(0x161)],_0x459ee1);});}),bots['inrl']({'pattern':['p4'],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':'<word>'},async(_0xb565cd,_0x33da13)=>{var _0x362f38=_0x3366b0;if(!_0xb565cd[_0x362f38(0x156)]['args'][0x0])return global[_0x362f38(0x155)]=!![],await _0x33da13['sendMessage'](_0xb565cd[_0x362f38(0x146)],{'text':bots[_0x362f38(0x140)](N_T)},{'quoted':_0xb565cd});;if(_0xb565cd[_0x362f38(0x156)][_0x362f38(0x13a)][_0x362f38(0x130)]>=0xf)return global[_0x362f38(0x155)]=!![],await _0x33da13[_0x362f38(0x136)](_0xb565cd['from'],{'text':bots[_0x362f38(0x140)](T_L)},{'quoted':_0xb565cd});;let _0x1c1111=_0xb565cd['client'][_0x362f38(0x13a)];var _0x167eec,_0x56a065;if(_0x1c1111[_0x362f38(0x159)](',')){var _0x26afdd=_0x1c1111['split'](',');_0x167eec=_0x26afdd[0x0],_0x56a065=_0x26afdd[0x1];}var _0x3d2b70=_0x167eec||_0x1c1111,_0x34e9e8=_0x56a065||Config[_0x362f38(0x15a)];await maker[_0x362f38(0x133)](_0x362f38(0x162),[_0x3d2b70,_0x34e9e8])['then'](async _0x52d986=>{var _0x3345ea=_0x362f38;return global[_0x3345ea(0x155)]=![],await _0x33da13[_0x3345ea(0x136)](_0xb565cd[_0x3345ea(0x146)],{'image':{'url':_0x52d986},'caption':bots['config'][_0x3345ea(0x16e)][_0x3345ea(0x165)]},{'quoted':_0xb565cd});})['catch'](async _0x9f12c4=>{var _0x329227=_0x362f38;return global[_0x329227(0x155)]=!![],await _0x33da13['sendErrorMessage'](_0xb565cd[_0x329227(0x146)],_0x9f12c4,_0xb565cd[_0x329227(0x161)],_0xb565cd);});}),bots[_0x3366b0(0x13c)]({'pattern':['p5'],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':_0x3366b0(0x153)},async(_0x49d442,_0x1ce4e2)=>{var _0x163439=_0x3366b0;if(!_0x49d442[_0x163439(0x156)][_0x163439(0x15d)][0x0])return global[_0x163439(0x155)]=!![],await _0x1ce4e2[_0x163439(0x136)](_0x49d442['from'],{'text':bots[_0x163439(0x140)](N_T)},{'quoted':_0x49d442});;if(_0x49d442[_0x163439(0x156)][_0x163439(0x13a)][_0x163439(0x130)]>=0xf)return global['catchError']=!![],await _0x1ce4e2[_0x163439(0x136)](_0x49d442[_0x163439(0x146)],{'text':bots['errorMessage'](T_L)},{'quoted':_0x49d442});;let _0x5f3dab=_0x49d442['client'][_0x163439(0x13a)];var _0x586c84,_0x2051d1;if(_0x5f3dab[_0x163439(0x159)](',')){var _0x28c7bd=_0x5f3dab['split'](',');_0x586c84=_0x28c7bd[0x0],_0x2051d1=_0x28c7bd[0x1];}var _0x524f53=_0x586c84||_0x5f3dab,_0x6c882b=_0x2051d1||Config[_0x163439(0x15a)];await maker['textpro'](_0x163439(0x16c),[_0x524f53,_0x6c882b])[_0x163439(0x15b)](async _0xee9031=>{var _0x151c59=_0x163439;return global[_0x151c59(0x155)]=![],await _0x1ce4e2[_0x151c59(0x136)](_0x49d442[_0x151c59(0x146)],{'image':{'url':_0xee9031},'caption':bots[_0x151c59(0x141)][_0x151c59(0x16e)][_0x151c59(0x165)]},{'quoted':_0x49d442});})[_0x163439(0x175)](async _0x3775f4=>{var _0x4b63bf=_0x163439;return global['catchError']=!![],await _0x1ce4e2[_0x4b63bf(0x152)](_0x49d442[_0x4b63bf(0x146)],_0x3775f4,_0x49d442[_0x4b63bf(0x161)],_0x49d442);});}),bots[_0x3366b0(0x13c)]({'pattern':['p6'],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':_0x3366b0(0x153)},async(_0x48481d,_0x2d3412)=>{var _0x45fd3c=_0x3366b0;if(!_0x48481d['client'][_0x45fd3c(0x15d)][0x0])return global[_0x45fd3c(0x155)]=!![],await _0x2d3412[_0x45fd3c(0x136)](_0x48481d['from'],{'text':bots['errorMessage'](N_T)},{'quoted':_0x48481d});;if(_0x48481d[_0x45fd3c(0x156)][_0x45fd3c(0x13a)][_0x45fd3c(0x130)]>=0xf)return global[_0x45fd3c(0x155)]=!![],await _0x2d3412[_0x45fd3c(0x136)](_0x48481d[_0x45fd3c(0x146)],{'text':bots['errorMessage'](T_L)},{'quoted':_0x48481d});;let _0x5a64f2=_0x48481d['client'][_0x45fd3c(0x13a)];var _0x357035,_0x29e580;if(_0x5a64f2[_0x45fd3c(0x159)](',')){var _0x34d8bf=_0x5a64f2['split'](',');_0x357035=_0x34d8bf[0x0],_0x29e580=_0x34d8bf[0x1];}var _0x4a64db=_0x357035||_0x5a64f2,_0x252839=_0x29e580||Config[_0x45fd3c(0x15a)];await maker['textpro'](_0x45fd3c(0x142),[_0x4a64db,_0x252839])[_0x45fd3c(0x15b)](async _0x579621=>{var _0x330810=_0x45fd3c;return global[_0x330810(0x155)]=![],await _0x2d3412[_0x330810(0x136)](_0x48481d[_0x330810(0x146)],{'image':{'url':_0x579621},'caption':bots['config'][_0x330810(0x16e)][_0x330810(0x165)]},{'quoted':_0x48481d});})[_0x45fd3c(0x175)](async _0x1c1e7b=>{var _0x4f814a=_0x45fd3c;return global['catchError']=!![],await _0x2d3412[_0x4f814a(0x152)](_0x48481d[_0x4f814a(0x146)],_0x1c1e7b,_0x48481d[_0x4f814a(0x161)],_0x48481d);});}),bots[_0x3366b0(0x13c)]({'pattern':['p7'],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':'<word>'},async(_0x5417af,_0xdc391a)=>{var _0x1162f9=_0x3366b0;if(!_0x5417af[_0x1162f9(0x156)][_0x1162f9(0x15d)][0x0])return global['catchError']=!![],await _0xdc391a['sendMessage'](_0x5417af['from'],{'text':bots[_0x1162f9(0x140)](N_T)},{'quoted':_0x5417af});;if(_0x5417af[_0x1162f9(0x156)]['text'][_0x1162f9(0x130)]>=0xf)return global[_0x1162f9(0x155)]=!![],await _0xdc391a[_0x1162f9(0x136)](_0x5417af['from'],{'text':bots[_0x1162f9(0x140)](T_L)},{'quoted':_0x5417af});;let _0x508cdf=_0x5417af['client'][_0x1162f9(0x13a)];var _0x4def46,_0x45609d;if(_0x508cdf[_0x1162f9(0x159)](',')){var _0x23369d=_0x508cdf['split'](',');_0x4def46=_0x23369d[0x0],_0x45609d=_0x23369d[0x1];}var _0x320b4c=_0x4def46||_0x508cdf,_0xa87bf2=_0x45609d||Config[_0x1162f9(0x15a)];await maker[_0x1162f9(0x133)](_0x1162f9(0x15c),[_0x320b4c,_0xa87bf2])[_0x1162f9(0x15b)](async _0x5385cb=>{var _0x592f71=_0x1162f9;return global[_0x592f71(0x155)]=![],await _0xdc391a[_0x592f71(0x136)](_0x5417af[_0x592f71(0x146)],{'image':{'url':_0x5385cb},'caption':bots[_0x592f71(0x141)][_0x592f71(0x16e)]['cap']},{'quoted':_0x5417af});})[_0x1162f9(0x175)](async _0xb8292a=>{var _0x4a68f7=_0x1162f9;return global[_0x4a68f7(0x155)]=!![],await _0xdc391a[_0x4a68f7(0x152)](_0x5417af[_0x4a68f7(0x146)],_0xb8292a,_0x5417af[_0x4a68f7(0x161)],_0x5417af);});}),bots[_0x3366b0(0x13c)]({'pattern':['p8'],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':'<word>'},async(_0x558cec,_0x2642ce)=>{var _0x49ce97=_0x3366b0;if(!_0x558cec[_0x49ce97(0x156)]['args'][0x0])return global[_0x49ce97(0x155)]=!![],await _0x2642ce[_0x49ce97(0x136)](_0x558cec['from'],{'text':bots['errorMessage'](N_T)},{'quoted':_0x558cec});;if(_0x558cec[_0x49ce97(0x156)][_0x49ce97(0x13a)][_0x49ce97(0x130)]>=0xf)return global[_0x49ce97(0x155)]=!![],await _0x2642ce['sendMessage'](_0x558cec[_0x49ce97(0x146)],{'text':bots[_0x49ce97(0x140)](T_L)},{'quoted':_0x558cec});;let _0x316a35=_0x558cec[_0x49ce97(0x156)][_0x49ce97(0x13a)];var _0x1eb417,_0x5c5be1;if(_0x316a35[_0x49ce97(0x159)](',')){var _0x3a58ed=_0x316a35[_0x49ce97(0x16f)](',');_0x1eb417=_0x3a58ed[0x0],_0x5c5be1=_0x3a58ed[0x1];}var _0x2ddab1=_0x1eb417||_0x316a35,_0x4f00fb=_0x5c5be1||Config[_0x49ce97(0x15a)];await maker[_0x49ce97(0x133)](_0x49ce97(0x14e),[_0x2ddab1,_0x4f00fb])[_0x49ce97(0x15b)](async _0x5c9bd3=>{var _0x3501f7=_0x49ce97;return global[_0x3501f7(0x155)]=![],await _0x2642ce[_0x3501f7(0x136)](_0x558cec[_0x3501f7(0x146)],{'image':{'url':_0x5c9bd3},'caption':bots['config']['exif'][_0x3501f7(0x165)]},{'quoted':_0x558cec});})[_0x49ce97(0x175)](async _0x12d0e0=>{var _0x199a61=_0x49ce97;return global['catchError']=!![],await _0x2642ce[_0x199a61(0x152)](_0x558cec[_0x199a61(0x146)],_0x12d0e0,_0x558cec[_0x199a61(0x161)],_0x558cec);});}),bots[_0x3366b0(0x13c)]({'pattern':['p9'],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':_0x3366b0(0x153)},async(_0x5f338a,_0x4fd9f8)=>{var _0x1c841c=_0x3366b0;if(!_0x5f338a[_0x1c841c(0x156)][_0x1c841c(0x15d)][0x0])return global[_0x1c841c(0x155)]=!![],await _0x4fd9f8[_0x1c841c(0x136)](_0x5f338a[_0x1c841c(0x146)],{'text':bots[_0x1c841c(0x140)](N_T)},{'quoted':_0x5f338a});;if(_0x5f338a['client'][_0x1c841c(0x13a)][_0x1c841c(0x130)]>=0xf)return global['catchError']=!![],await _0x4fd9f8[_0x1c841c(0x136)](_0x5f338a['from'],{'text':bots['errorMessage'](T_L)},{'quoted':_0x5f338a});;let _0x43b522=_0x5f338a[_0x1c841c(0x156)][_0x1c841c(0x13a)];var _0x58276d,_0x1986bf;if(_0x43b522[_0x1c841c(0x159)](',')){var _0x4be19a=_0x43b522[_0x1c841c(0x16f)](',');_0x58276d=_0x4be19a[0x0],_0x1986bf=_0x4be19a[0x1];}var _0x4ed0cf=_0x58276d||_0x43b522,_0x2f5928=_0x1986bf||Config[_0x1c841c(0x15a)];await maker[_0x1c841c(0x133)](_0x1c841c(0x145),[_0x4ed0cf,_0x2f5928])[_0x1c841c(0x15b)](async _0x50bebf=>{var _0x249355=_0x1c841c;return global['catchError']=![],await _0x4fd9f8[_0x249355(0x136)](_0x5f338a['from'],{'image':{'url':_0x50bebf},'caption':bots[_0x249355(0x141)]['exif'][_0x249355(0x165)]},{'quoted':_0x5f338a});})[_0x1c841c(0x175)](async _0x273e04=>{var _0x201928=_0x1c841c;return global[_0x201928(0x155)]=!![],await _0x4fd9f8['sendErrorMessage'](_0x5f338a[_0x201928(0x146)],_0x273e04,_0x5f338a[_0x201928(0x161)],_0x5f338a);});}),bots[_0x3366b0(0x13c)]({'pattern':['p10'],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':'<word>'},async(_0x21ec54,_0x511d78)=>{var _0x1e2930=_0x3366b0;if(!_0x21ec54[_0x1e2930(0x156)]['args'][0x0])return global[_0x1e2930(0x155)]=!![],await _0x511d78['sendMessage'](_0x21ec54[_0x1e2930(0x146)],{'text':bots[_0x1e2930(0x140)](N_T)},{'quoted':_0x21ec54});;if(_0x21ec54[_0x1e2930(0x156)][_0x1e2930(0x13a)][_0x1e2930(0x130)]>=0xf)return global[_0x1e2930(0x155)]=!![],await _0x511d78[_0x1e2930(0x136)](_0x21ec54['from'],{'text':bots[_0x1e2930(0x140)](T_L)},{'quoted':_0x21ec54});;let _0x4eaecd=_0x21ec54[_0x1e2930(0x156)]['text'];var _0x3ac9a,_0x29e3ad;if(_0x4eaecd[_0x1e2930(0x159)](',')){var _0x235a98=_0x4eaecd[_0x1e2930(0x16f)](',');_0x3ac9a=_0x235a98[0x0],_0x29e3ad=_0x235a98[0x1];}var _0x4c4e1a=_0x3ac9a||_0x4eaecd,_0x5cca16=_0x29e3ad||Config[_0x1e2930(0x15a)];await maker['textpro']('https://textpro.me/neon-text-effect-online-879.html',[_0x4c4e1a,_0x5cca16])[_0x1e2930(0x15b)](async _0x16c2da=>{var _0x732a92=_0x1e2930;return global['catchError']=![],await _0x511d78[_0x732a92(0x136)](_0x21ec54[_0x732a92(0x146)],{'image':{'url':_0x16c2da},'caption':bots['config']['exif'][_0x732a92(0x165)]},{'quoted':_0x21ec54});})[_0x1e2930(0x175)](async _0x2ae40a=>{var _0x2ca638=_0x1e2930;return global[_0x2ca638(0x155)]=!![],await _0x511d78[_0x2ca638(0x152)](_0x21ec54['from'],_0x2ae40a,_0x21ec54['key'],_0x21ec54);});}),bots[_0x3366b0(0x13c)]({'pattern':['p11'],'sucReact':'💗','category':['logo'],'usage':_0x3366b0(0x153)},async(_0x263e3e,_0x43f492)=>{var _0xe3d6d7=_0x3366b0;if(!_0x263e3e[_0xe3d6d7(0x156)]['args'][0x0])return global['catchError']=!![],await _0x43f492[_0xe3d6d7(0x136)](_0x263e3e[_0xe3d6d7(0x146)],{'text':bots[_0xe3d6d7(0x140)](N_T)},{'quoted':_0x263e3e});;if(_0x263e3e[_0xe3d6d7(0x156)][_0xe3d6d7(0x13a)][_0xe3d6d7(0x130)]>=0xf)return global['catchError']=!![],await _0x43f492['sendMessage'](_0x263e3e['from'],{'text':bots['errorMessage'](T_L)},{'quoted':_0x263e3e});;let _0x597309=_0x263e3e[_0xe3d6d7(0x156)][_0xe3d6d7(0x13a)];var _0x3b5957,_0x937f78;if(_0x597309[_0xe3d6d7(0x159)](',')){var _0x2104bd=_0x597309['split'](',');_0x3b5957=_0x2104bd[0x0],_0x937f78=_0x2104bd[0x1];}var _0x2e363b=_0x3b5957||_0x597309,_0x5d18e6=_0x937f78||Config['FREE_TXT'];await maker[_0xe3d6d7(0x133)](_0xe3d6d7(0x15f),[_0x2e363b,_0x5d18e6])[_0xe3d6d7(0x15b)](async _0x554aeb=>{var _0x2eda41=_0xe3d6d7;return global[_0x2eda41(0x155)]=![],await _0x43f492['sendMessage'](_0x263e3e['from'],{'image':{'url':_0x554aeb},'caption':bots[_0x2eda41(0x141)][_0x2eda41(0x16e)]['cap']},{'quoted':_0x263e3e});})['catch'](async _0x4cc4af=>{var _0x2f12a2=_0xe3d6d7;return global[_0x2f12a2(0x155)]=!![],await _0x43f492['sendErrorMessage'](_0x263e3e[_0x2f12a2(0x146)],_0x4cc4af,_0x263e3e[_0x2f12a2(0x161)],_0x263e3e);});}),bots['inrl']({'pattern':['p12'],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':_0x3366b0(0x153)},async(_0x5eea5e,_0x252d5e)=>{var _0x140bab=_0x3366b0;if(!_0x5eea5e[_0x140bab(0x156)][_0x140bab(0x15d)][0x0])return global[_0x140bab(0x155)]=!![],await _0x252d5e[_0x140bab(0x136)](_0x5eea5e[_0x140bab(0x146)],{'text':bots[_0x140bab(0x140)](N_T)},{'quoted':_0x5eea5e});;if(_0x5eea5e[_0x140bab(0x156)][_0x140bab(0x13a)][_0x140bab(0x130)]>=0xf)return global[_0x140bab(0x155)]=!![],await _0x252d5e[_0x140bab(0x136)](_0x5eea5e[_0x140bab(0x146)],{'text':bots['errorMessage'](T_L)},{'quoted':_0x5eea5e});;let _0x167998=_0x5eea5e[_0x140bab(0x156)]['text'];var _0x5704ef,_0x52f2d8;if(_0x167998[_0x140bab(0x159)](',')){var _0x5dcf4c=_0x167998[_0x140bab(0x16f)](',');_0x5704ef=_0x5dcf4c[0x0],_0x52f2d8=_0x5dcf4c[0x1];}var _0x4ca4b6=_0x5704ef||_0x167998,_0x3f15b7=_0x52f2d8||Config[_0x140bab(0x15a)];await maker[_0x140bab(0x133)](_0x140bab(0x139),[_0x4ca4b6,_0x3f15b7])[_0x140bab(0x15b)](async _0x24e526=>{var _0x2e7ccc=_0x140bab;return global['catchError']=![],await _0x252d5e[_0x2e7ccc(0x136)](_0x5eea5e['from'],{'image':{'url':_0x24e526},'caption':bots[_0x2e7ccc(0x141)][_0x2e7ccc(0x16e)][_0x2e7ccc(0x165)]},{'quoted':_0x5eea5e});})[_0x140bab(0x175)](async _0x49be32=>{var _0x5f318=_0x140bab;return global[_0x5f318(0x155)]=!![],await _0x252d5e[_0x5f318(0x152)](_0x5eea5e[_0x5f318(0x146)],_0x49be32,_0x5eea5e[_0x5f318(0x161)],_0x5eea5e);});}),bots[_0x3366b0(0x13c)]({'pattern':['p13'],'sucReact':'💗','category':['logo'],'usage':'<word>'},async(_0x3ec0d4,_0x4736e6)=>{var _0x551ffe=_0x3366b0;if(!_0x3ec0d4[_0x551ffe(0x156)][_0x551ffe(0x15d)][0x0])return global['catchError']=!![],await _0x4736e6[_0x551ffe(0x136)](_0x3ec0d4[_0x551ffe(0x146)],{'text':bots['errorMessage'](N_T)},{'quoted':_0x3ec0d4});;if(_0x3ec0d4[_0x551ffe(0x156)][_0x551ffe(0x13a)][_0x551ffe(0x130)]>=0xf)return global['catchError']=!![],await _0x4736e6[_0x551ffe(0x136)](_0x3ec0d4[_0x551ffe(0x146)],{'text':bots[_0x551ffe(0x140)](T_L)},{'quoted':_0x3ec0d4});;let _0x1e8193=_0x3ec0d4[_0x551ffe(0x156)]['text'];var _0x5cb157,_0xf9be0d;if(_0x1e8193['includes'](',')){var _0x31f217=_0x1e8193[_0x551ffe(0x16f)](',');_0x5cb157=_0x31f217[0x0],_0xf9be0d=_0x31f217[0x1];}var _0x5a5978=_0x5cb157||_0x1e8193,_0x203973=_0xf9be0d||Config[_0x551ffe(0x15a)];await maker[_0x551ffe(0x133)]('https://textpro.me/create-ninja-logo-online-935.html',[_0x5a5978,_0x203973])['then'](async _0x1f0eb5=>{var _0x26d7c9=_0x551ffe;return global['catchError']=![],await _0x4736e6[_0x26d7c9(0x136)](_0x3ec0d4[_0x26d7c9(0x146)],{'image':{'url':_0x1f0eb5},'caption':bots['config'][_0x26d7c9(0x16e)][_0x26d7c9(0x165)]},{'quoted':_0x3ec0d4});})[_0x551ffe(0x175)](async _0x1c2cc6=>{var _0x5ed4ff=_0x551ffe;return global['catchError']=!![],await _0x4736e6[_0x5ed4ff(0x152)](_0x3ec0d4['from'],_0x1c2cc6,_0x3ec0d4[_0x5ed4ff(0x161)],_0x3ec0d4);});}),bots[_0x3366b0(0x13c)]({'pattern':['p14'],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':_0x3366b0(0x153)},async(_0x244b6f,_0x599230)=>{var _0x4dff74=_0x3366b0;if(!_0x244b6f[_0x4dff74(0x156)][_0x4dff74(0x15d)][0x0])return global[_0x4dff74(0x155)]=!![],await _0x599230[_0x4dff74(0x136)](_0x244b6f[_0x4dff74(0x146)],{'text':bots[_0x4dff74(0x140)](N_T)},{'quoted':_0x244b6f});;if(_0x244b6f['client']['text'][_0x4dff74(0x130)]>=0xf)return global[_0x4dff74(0x155)]=!![],await _0x599230[_0x4dff74(0x136)](_0x244b6f[_0x4dff74(0x146)],{'text':bots[_0x4dff74(0x140)](T_L)},{'quoted':_0x244b6f});;let _0x3b3f7a=_0x244b6f[_0x4dff74(0x156)]['text'];var _0x461215,_0x215dc9;if(_0x3b3f7a['includes'](',')){var _0x11d663=_0x3b3f7a[_0x4dff74(0x16f)](',');_0x461215=_0x11d663[0x0],_0x215dc9=_0x11d663[0x1];}var _0x27a014=_0x461215||_0x3b3f7a,_0x530958=_0x215dc9||Config[_0x4dff74(0x15a)];await maker['textpro'](_0x4dff74(0x167),[_0x27a014,_0x530958])['then'](async _0x33c87d=>{var _0xdcdb8b=_0x4dff74;return global[_0xdcdb8b(0x155)]=![],await _0x599230['sendMessage'](_0x244b6f['from'],{'image':{'url':_0x33c87d},'caption':bots[_0xdcdb8b(0x141)][_0xdcdb8b(0x16e)]['cap']},{'quoted':_0x244b6f});})[_0x4dff74(0x175)](async _0x5162f9=>{var _0x4ed74f=_0x4dff74;return global[_0x4ed74f(0x155)]=!![],await _0x599230['sendErrorMessage'](_0x244b6f[_0x4ed74f(0x146)],_0x5162f9,_0x244b6f[_0x4ed74f(0x161)],_0x244b6f);});}),bots[_0x3366b0(0x13c)]({'pattern':['p15'],'sucReact':'💗','category':['logo'],'usage':'<word>'},async(_0x487e11,_0xfd3ea1)=>{var _0x2fe8ad=_0x3366b0;if(!_0x487e11[_0x2fe8ad(0x156)][_0x2fe8ad(0x15d)][0x0])return global[_0x2fe8ad(0x155)]=!![],await _0xfd3ea1[_0x2fe8ad(0x136)](_0x487e11['from'],{'text':bots['errorMessage'](N_T)},{'quoted':_0x487e11});;if(_0x487e11[_0x2fe8ad(0x156)]['text'][_0x2fe8ad(0x130)]>=0xf)return global['catchError']=!![],await _0xfd3ea1[_0x2fe8ad(0x136)](_0x487e11['from'],{'text':bots[_0x2fe8ad(0x140)](T_L)},{'quoted':_0x487e11});;let _0x3f415b=_0x487e11[_0x2fe8ad(0x156)]['text'];var _0x1eef8e,_0x153932;if(_0x3f415b['includes'](',')){var _0x1ee6db=_0x3f415b['split'](',');_0x1eef8e=_0x1ee6db[0x0],_0x153932=_0x1ee6db[0x1];}var _0x46637b=_0x1eef8e||_0x3f415b,_0x58e231=_0x153932||Config['FREE_TXT'];await maker[_0x2fe8ad(0x133)]('https://textpro.me/bokeh-text-effect-876.html',[_0x46637b,_0x58e231])[_0x2fe8ad(0x15b)](async _0x49cd3c=>{var _0xf06979=_0x2fe8ad;return global[_0xf06979(0x155)]=![],await _0xfd3ea1[_0xf06979(0x136)](_0x487e11[_0xf06979(0x146)],{'image':{'url':_0x49cd3c},'caption':bots['config'][_0xf06979(0x16e)][_0xf06979(0x165)]},{'quoted':_0x487e11});})[_0x2fe8ad(0x175)](async _0x5bf879=>{var _0x101131=_0x2fe8ad;return global[_0x101131(0x155)]=!![],await _0xfd3ea1[_0x101131(0x152)](_0x487e11[_0x101131(0x146)],_0x5bf879,_0x487e11[_0x101131(0x161)],_0x487e11);});}),bots[_0x3366b0(0x13c)]({'pattern':[_0x3366b0(0x16a)],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':'<word>'},async(_0x452bfb,_0x3e42fd)=>{var _0x5c71a7=_0x3366b0;if(!_0x452bfb['client'][_0x5c71a7(0x15d)][0x0])return global[_0x5c71a7(0x155)]=!![],await _0x3e42fd['sendMessage'](_0x452bfb[_0x5c71a7(0x146)],{'text':bots[_0x5c71a7(0x140)](N_T)},{'quoted':_0x452bfb});;if(_0x452bfb[_0x5c71a7(0x156)][_0x5c71a7(0x13a)][_0x5c71a7(0x130)]>=0xf)return global['catchError']=!![],await _0x3e42fd[_0x5c71a7(0x136)](_0x452bfb[_0x5c71a7(0x146)],{'text':bots[_0x5c71a7(0x140)](T_L)},{'quoted':_0x452bfb});;let _0x268798=_0x452bfb[_0x5c71a7(0x156)][_0x5c71a7(0x13a)];var _0x311c10,_0x480300;if(_0x268798[_0x5c71a7(0x159)](',')){var _0x5b0dd9=_0x268798[_0x5c71a7(0x16f)](',');_0x311c10=_0x5b0dd9[0x0],_0x480300=_0x5b0dd9[0x1];}var _0xa5a937=_0x311c10||_0x268798,_0xe59409=_0x480300||Config[_0x5c71a7(0x15a)];await maker[_0x5c71a7(0x133)](_0x5c71a7(0x158),[_0xa5a937,_0xe59409])[_0x5c71a7(0x15b)](async _0x215bb2=>{var _0x187dfe=_0x5c71a7;return global[_0x187dfe(0x155)]=![],await _0x3e42fd[_0x187dfe(0x136)](_0x452bfb[_0x187dfe(0x146)],{'image':{'url':_0x215bb2},'caption':bots[_0x187dfe(0x141)][_0x187dfe(0x16e)][_0x187dfe(0x165)]},{'quoted':_0x452bfb});})[_0x5c71a7(0x175)](async _0x1cb1b7=>{var _0xddc3bb=_0x5c71a7;return global[_0xddc3bb(0x155)]=!![],await _0x3e42fd[_0xddc3bb(0x152)](_0x452bfb[_0xddc3bb(0x146)],_0x1cb1b7,_0x452bfb[_0xddc3bb(0x161)],_0x452bfb);});}),bots[_0x3366b0(0x13c)]({'pattern':[_0x3366b0(0x13d)],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':_0x3366b0(0x153)},async(_0x4e2575,_0x321e27)=>{var _0x28ef16=_0x3366b0;if(!_0x4e2575[_0x28ef16(0x156)][_0x28ef16(0x15d)][0x0])return global[_0x28ef16(0x155)]=!![],await _0x321e27[_0x28ef16(0x136)](_0x4e2575[_0x28ef16(0x146)],{'text':bots[_0x28ef16(0x140)](N_T)},{'quoted':_0x4e2575});;if(_0x4e2575[_0x28ef16(0x156)][_0x28ef16(0x13a)]['length']>=0xf)return global['catchError']=!![],await _0x321e27[_0x28ef16(0x136)](_0x4e2575[_0x28ef16(0x146)],{'text':bots[_0x28ef16(0x140)](T_L)},{'quoted':_0x4e2575});;let _0x5ad14b=_0x4e2575[_0x28ef16(0x156)][_0x28ef16(0x13a)];var _0x205fcc,_0x5b54fa;if(_0x5ad14b[_0x28ef16(0x159)](',')){var _0x4c2531=_0x5ad14b[_0x28ef16(0x16f)](',');_0x205fcc=_0x4c2531[0x0],_0x5b54fa=_0x4c2531[0x1];}var _0x25e84f=_0x205fcc||_0x5ad14b,_0x577df8=_0x5b54fa||Config['FREE_TXT'];await maker[_0x28ef16(0x133)]('https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html',[_0x25e84f,_0x577df8])[_0x28ef16(0x15b)](async _0x1988b3=>{var _0x2c51f6=_0x28ef16;return global['catchError']=![],await _0x321e27[_0x2c51f6(0x136)](_0x4e2575[_0x2c51f6(0x146)],{'image':{'url':_0x1988b3},'caption':bots[_0x2c51f6(0x141)]['exif'][_0x2c51f6(0x165)]},{'quoted':_0x4e2575});})[_0x28ef16(0x175)](async _0x3d8a3a=>{var _0x1d558c=_0x28ef16;return global[_0x1d558c(0x155)]=!![],await _0x321e27['sendErrorMessage'](_0x4e2575[_0x1d558c(0x146)],_0x3d8a3a,_0x4e2575[_0x1d558c(0x161)],_0x4e2575);});}),bots['inrl']({'pattern':[_0x3366b0(0x143)],'sucReact':'💗','category':['logo'],'usage':_0x3366b0(0x153)},async(_0xe55dc0,_0x3da14c)=>{var _0x254b83=_0x3366b0;if(!_0xe55dc0[_0x254b83(0x156)][_0x254b83(0x15d)][0x0])return global[_0x254b83(0x155)]=!![],await _0x3da14c['sendMessage'](_0xe55dc0['from'],{'text':bots['errorMessage'](N_T)},{'quoted':_0xe55dc0});;if(_0xe55dc0[_0x254b83(0x156)]['text'][_0x254b83(0x130)]>=0xf)return global[_0x254b83(0x155)]=!![],await _0x3da14c[_0x254b83(0x136)](_0xe55dc0[_0x254b83(0x146)],{'text':bots[_0x254b83(0x140)](T_L)},{'quoted':_0xe55dc0});;let _0xc50814=_0xe55dc0[_0x254b83(0x156)][_0x254b83(0x13a)];var _0x409005,_0x22a0a4;if(_0xc50814[_0x254b83(0x159)](',')){var _0x2c7bb5=_0xc50814[_0x254b83(0x16f)](',');_0x409005=_0x2c7bb5[0x0],_0x22a0a4=_0x2c7bb5[0x1];}var _0x37941f=_0x409005||_0xc50814,_0x16fe63=_0x22a0a4||Config['FREE_TXT'];await maker[_0x254b83(0x133)](_0x254b83(0x16c),[_0x37941f,_0x16fe63])[_0x254b83(0x15b)](async _0x2bd547=>{var _0x589eee=_0x254b83;return global[_0x589eee(0x155)]=![],await _0x3da14c[_0x589eee(0x136)](_0xe55dc0[_0x589eee(0x146)],{'image':{'url':_0x2bd547},'caption':bots[_0x589eee(0x141)][_0x589eee(0x16e)]['cap']},{'quoted':_0xe55dc0});})[_0x254b83(0x175)](async _0x1b18b2=>{var _0x267b96=_0x254b83;return global[_0x267b96(0x155)]=!![],await _0x3da14c[_0x267b96(0x152)](_0xe55dc0['from'],_0x1b18b2,_0xe55dc0['key'],_0xe55dc0);});}),bots[_0x3366b0(0x13c)]({'pattern':[_0x3366b0(0x14b)],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':_0x3366b0(0x153)},async(_0x2be861,_0x2680d4)=>{var _0x1ef548=_0x3366b0;if(!_0x2be861[_0x1ef548(0x156)][_0x1ef548(0x15d)][0x0])return global[_0x1ef548(0x155)]=!![],await _0x2680d4['sendMessage'](_0x2be861[_0x1ef548(0x146)],{'text':bots[_0x1ef548(0x140)](N_T)},{'quoted':_0x2be861});;if(_0x2be861[_0x1ef548(0x156)][_0x1ef548(0x13a)][_0x1ef548(0x130)]>=0xf)return global[_0x1ef548(0x155)]=!![],await _0x2680d4[_0x1ef548(0x136)](_0x2be861['from'],{'text':bots[_0x1ef548(0x140)](T_L)},{'quoted':_0x2be861});;let _0x14a426=_0x2be861[_0x1ef548(0x156)]['text'];var _0x59ff3c,_0x227b5f;if(_0x14a426[_0x1ef548(0x159)](',')){var _0x3d6079=_0x14a426[_0x1ef548(0x16f)](',');_0x59ff3c=_0x3d6079[0x0],_0x227b5f=_0x3d6079[0x1];}var _0x76abcc=_0x59ff3c||_0x14a426,_0x250530=_0x227b5f||Config[_0x1ef548(0x15a)];await maker['textpro'](_0x1ef548(0x162),[_0x76abcc,_0x250530])['then'](async _0x3c1bf4=>{var _0x47ead7=_0x1ef548;return global['catchError']=![],await _0x2680d4['sendMessage'](_0x2be861[_0x47ead7(0x146)],{'image':{'url':_0x3c1bf4},'caption':bots[_0x47ead7(0x141)]['exif'][_0x47ead7(0x165)]},{'quoted':_0x2be861});})['catch'](async _0x5bce67=>{var _0x10c3b7=_0x1ef548;return global[_0x10c3b7(0x155)]=!![],await _0x2680d4[_0x10c3b7(0x152)](_0x2be861[_0x10c3b7(0x146)],_0x5bce67,_0x2be861[_0x10c3b7(0x161)],_0x2be861);});}),bots['inrl']({'pattern':['p20'],'sucReact':'💗','category':['logo'],'usage':_0x3366b0(0x153)},async(_0x25c033,_0x5175ef)=>{var _0x249226=_0x3366b0;if(!_0x25c033['client'][_0x249226(0x15d)][0x0])return global[_0x249226(0x155)]=!![],await _0x5175ef[_0x249226(0x136)](_0x25c033['from'],{'text':bots[_0x249226(0x140)](N_T)},{'quoted':_0x25c033});;if(_0x25c033[_0x249226(0x156)]['text'][_0x249226(0x130)]>=0xf)return global['catchError']=!![],await _0x5175ef[_0x249226(0x136)](_0x25c033['from'],{'text':bots[_0x249226(0x140)](T_L)},{'quoted':_0x25c033});;let _0x14924d=_0x25c033[_0x249226(0x156)]['text'];var _0xe455e4,_0xc4b2c3;if(_0x14924d[_0x249226(0x159)](',')){var _0x3d5074=_0x14924d[_0x249226(0x16f)](',');_0xe455e4=_0x3d5074[0x0],_0xc4b2c3=_0x3d5074[0x1];}var _0x4e5673=_0xe455e4||_0x14924d,_0x14ae94=_0xc4b2c3||Config[_0x249226(0x15a)];await maker[_0x249226(0x133)](_0x249226(0x149),[_0x4e5673,_0x14ae94])[_0x249226(0x15b)](async _0x2cc776=>{var _0x16ba25=_0x249226;return global['catchError']=![],await _0x5175ef['sendMessage'](_0x25c033['from'],{'image':{'url':_0x2cc776},'caption':bots[_0x16ba25(0x141)][_0x16ba25(0x16e)][_0x16ba25(0x165)]},{'quoted':_0x25c033});})[_0x249226(0x175)](async _0x26e040=>{var _0x39b69f=_0x249226;return global[_0x39b69f(0x155)]=!![],await _0x5175ef[_0x39b69f(0x152)](_0x25c033['from'],_0x26e040,_0x25c033[_0x39b69f(0x161)],_0x25c033);});}),bots['inrl']({'pattern':[_0x3366b0(0x168)],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':_0x3366b0(0x153)},async(_0x198516,_0x4a5c58)=>{var _0x20136a=_0x3366b0;if(!_0x198516['client'][_0x20136a(0x15d)][0x0])return global[_0x20136a(0x155)]=!![],await _0x4a5c58['sendMessage'](_0x198516[_0x20136a(0x146)],{'text':bots[_0x20136a(0x140)](N_T)},{'quoted':_0x198516});;if(_0x198516[_0x20136a(0x156)]['text']['length']>=0xf)return global[_0x20136a(0x155)]=!![],await _0x4a5c58[_0x20136a(0x136)](_0x198516[_0x20136a(0x146)],{'text':bots[_0x20136a(0x140)](T_L)},{'quoted':_0x198516});;let _0x45a0d2=_0x198516['client'][_0x20136a(0x13a)];var _0x3d6c06,_0x3f64d5;if(_0x45a0d2[_0x20136a(0x159)](',')){var _0x24c209=_0x45a0d2[_0x20136a(0x16f)](',');_0x3d6c06=_0x24c209[0x0],_0x3f64d5=_0x24c209[0x1];}var _0x4c7c74=_0x3d6c06||_0x45a0d2,_0x56324f=_0x3f64d5||Config['FREE_TXT'];await maker[_0x20136a(0x133)](_0x20136a(0x170),[_0x4c7c74,_0x56324f])[_0x20136a(0x15b)](async _0x46e3a1=>{var _0x34dbfb=_0x20136a;return global[_0x34dbfb(0x155)]=![],await _0x4a5c58[_0x34dbfb(0x136)](_0x198516[_0x34dbfb(0x146)],{'image':{'url':_0x46e3a1},'caption':bots[_0x34dbfb(0x141)]['exif'][_0x34dbfb(0x165)]},{'quoted':_0x198516});})[_0x20136a(0x175)](async _0x22bf5d=>{var _0x378c97=_0x20136a;return global['catchError']=!![],await _0x4a5c58[_0x378c97(0x152)](_0x198516[_0x378c97(0x146)],_0x22bf5d,_0x198516[_0x378c97(0x161)],_0x198516);});}),bots[_0x3366b0(0x13c)]({'pattern':[_0x3366b0(0x164)],'sucReact':'💗','category':['logo'],'usage':_0x3366b0(0x153)},async(_0x120418,_0x54751f)=>{var _0x5b7c00=_0x3366b0;if(!_0x120418['client'][_0x5b7c00(0x15d)][0x0])return global[_0x5b7c00(0x155)]=!![],await _0x54751f[_0x5b7c00(0x136)](_0x120418[_0x5b7c00(0x146)],{'text':bots[_0x5b7c00(0x140)](N_T)},{'quoted':_0x120418});;if(_0x120418[_0x5b7c00(0x156)]['text'][_0x5b7c00(0x130)]>=0xf)return global[_0x5b7c00(0x155)]=!![],await _0x54751f[_0x5b7c00(0x136)](_0x120418[_0x5b7c00(0x146)],{'text':bots[_0x5b7c00(0x140)](T_L)},{'quoted':_0x120418});;let _0x17659b=_0x120418['client'][_0x5b7c00(0x13a)];var _0xa3ec21,_0x1bbbad;if(_0x17659b['includes'](',')){var _0x17b33c=_0x17659b[_0x5b7c00(0x16f)](',');_0xa3ec21=_0x17b33c[0x0],_0x1bbbad=_0x17b33c[0x1];}var _0x1969b0=_0xa3ec21||_0x17659b,_0x45365e=_0x1bbbad||Config[_0x5b7c00(0x15a)];await maker[_0x5b7c00(0x133)](_0x5b7c00(0x174),[_0x1969b0,_0x45365e])[_0x5b7c00(0x15b)](async _0x285c28=>{var _0x5aa3eb=_0x5b7c00;return global[_0x5aa3eb(0x155)]=![],await _0x54751f[_0x5aa3eb(0x136)](_0x120418[_0x5aa3eb(0x146)],{'image':{'url':_0x285c28},'caption':bots[_0x5aa3eb(0x141)]['exif']['cap']},{'quoted':_0x120418});})[_0x5b7c00(0x175)](async _0x46bd4d=>{var _0x187ab8=_0x5b7c00;return global[_0x187ab8(0x155)]=!![],await _0x54751f[_0x187ab8(0x152)](_0x120418[_0x187ab8(0x146)],_0x46bd4d,_0x120418[_0x187ab8(0x161)],_0x120418);});}),bots[_0x3366b0(0x13c)]({'pattern':[_0x3366b0(0x147)],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':_0x3366b0(0x153)},async(_0xc3b2f9,_0x49eacb)=>{var _0x45e618=_0x3366b0;if(!_0xc3b2f9[_0x45e618(0x156)]['args'][0x0])return global['catchError']=!![],await _0x49eacb[_0x45e618(0x136)](_0xc3b2f9[_0x45e618(0x146)],{'text':bots[_0x45e618(0x140)](N_T)},{'quoted':_0xc3b2f9});;if(_0xc3b2f9[_0x45e618(0x156)]['text'][_0x45e618(0x130)]>=0xf)return global[_0x45e618(0x155)]=!![],await _0x49eacb['sendMessage'](_0xc3b2f9['from'],{'text':bots['errorMessage'](T_L)},{'quoted':_0xc3b2f9});;let _0x521228=_0xc3b2f9[_0x45e618(0x156)][_0x45e618(0x13a)];var _0x14c0cf,_0x5c288c;if(_0x521228[_0x45e618(0x159)](',')){var _0x5570b5=_0x521228['split'](',');_0x14c0cf=_0x5570b5[0x0],_0x5c288c=_0x5570b5[0x1];}var _0x5b2cc8=_0x14c0cf||_0x521228,_0x5dc423=_0x5c288c||Config[_0x45e618(0x15a)];await maker['textpro']('https://textpro.me/create-space-3d-text-effect-online-985.html',[_0x5b2cc8,_0x5dc423])['then'](async _0x2d4f96=>{var _0x3bb710=_0x45e618;return global['catchError']=![],await _0x49eacb[_0x3bb710(0x136)](_0xc3b2f9['from'],{'image':{'url':_0x2d4f96},'caption':bots[_0x3bb710(0x141)][_0x3bb710(0x16e)]['cap']},{'quoted':_0xc3b2f9});})[_0x45e618(0x175)](async _0x455570=>{var _0x3eeac0=_0x45e618;return global[_0x3eeac0(0x155)]=!![],await _0x49eacb['sendErrorMessage'](_0xc3b2f9[_0x3eeac0(0x146)],_0x455570,_0xc3b2f9[_0x3eeac0(0x161)],_0xc3b2f9);});}),bots[_0x3366b0(0x13c)]({'pattern':[_0x3366b0(0x134)],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':'<word>'},async(_0x59bd30,_0x29ca71)=>{var _0x4eaa1b=_0x3366b0;if(!_0x59bd30['client']['args'][0x0])return global[_0x4eaa1b(0x155)]=!![],await _0x29ca71['sendMessage'](_0x59bd30[_0x4eaa1b(0x146)],{'text':bots[_0x4eaa1b(0x140)](N_T)},{'quoted':_0x59bd30});;if(_0x59bd30[_0x4eaa1b(0x156)][_0x4eaa1b(0x13a)][_0x4eaa1b(0x130)]>=0xf)return global[_0x4eaa1b(0x155)]=!![],await _0x29ca71[_0x4eaa1b(0x136)](_0x59bd30[_0x4eaa1b(0x146)],{'text':bots[_0x4eaa1b(0x140)](T_L)},{'quoted':_0x59bd30});;let _0x25d034=_0x59bd30[_0x4eaa1b(0x156)][_0x4eaa1b(0x13a)];var _0x70515d,_0x33ad36;if(_0x25d034[_0x4eaa1b(0x159)](',')){var _0x435721=_0x25d034['split'](',');_0x70515d=_0x435721[0x0],_0x33ad36=_0x435721[0x1];}var _0x19cd8c=_0x70515d||_0x25d034,_0x3e23c2=_0x33ad36||Config[_0x4eaa1b(0x15a)];await maker[_0x4eaa1b(0x133)](_0x4eaa1b(0x148),[_0x19cd8c,_0x3e23c2])[_0x4eaa1b(0x15b)](async _0x42f5e8=>{var _0x27e4d2=_0x4eaa1b;return global[_0x27e4d2(0x155)]=![],await _0x29ca71[_0x27e4d2(0x136)](_0x59bd30[_0x27e4d2(0x146)],{'image':{'url':_0x42f5e8},'caption':bots[_0x27e4d2(0x141)][_0x27e4d2(0x16e)]['cap']},{'quoted':_0x59bd30});})['catch'](async _0x252a55=>{var _0x4a9820=_0x4eaa1b;return global[_0x4a9820(0x155)]=!![],await _0x29ca71[_0x4a9820(0x152)](_0x59bd30[_0x4a9820(0x146)],_0x252a55,_0x59bd30[_0x4a9820(0x161)],_0x59bd30);});}),bots[_0x3366b0(0x13c)]({'pattern':[_0x3366b0(0x12f)],'sucReact':'💗','category':['logo'],'usage':_0x3366b0(0x153)},async(_0x306290,_0x5d3623)=>{var _0x150af8=_0x3366b0;if(!_0x306290['client'][_0x150af8(0x15d)][0x0])return global[_0x150af8(0x155)]=!![],await _0x5d3623[_0x150af8(0x136)](_0x306290['from'],{'text':bots['errorMessage'](N_T)},{'quoted':_0x306290});;if(_0x306290[_0x150af8(0x156)][_0x150af8(0x13a)][_0x150af8(0x130)]>=0xf)return global[_0x150af8(0x155)]=!![],await _0x5d3623[_0x150af8(0x136)](_0x306290[_0x150af8(0x146)],{'text':bots['errorMessage'](T_L)},{'quoted':_0x306290});;let _0x150432=_0x306290[_0x150af8(0x156)][_0x150af8(0x13a)];var _0x3befee,_0x36f369;if(_0x150432['includes'](',')){var _0x2e2f5a=_0x150432[_0x150af8(0x16f)](',');_0x3befee=_0x2e2f5a[0x0],_0x36f369=_0x2e2f5a[0x1];}var _0x5afe14=_0x3befee||_0x150432,_0x13a3f2=_0x36f369||Config['FREE_TXT'];await maker[_0x150af8(0x133)](_0x150af8(0x137),[_0x5afe14,_0x13a3f2])['then'](async _0x565237=>{var _0x49443d=_0x150af8;return global[_0x49443d(0x155)]=![],await _0x5d3623[_0x49443d(0x136)](_0x306290['from'],{'image':{'url':_0x565237},'caption':bots['config'][_0x49443d(0x16e)]['cap']},{'quoted':_0x306290});})[_0x150af8(0x175)](async _0x4130fa=>{var _0x53f875=_0x150af8;return global[_0x53f875(0x155)]=!![],await _0x5d3623[_0x53f875(0x152)](_0x306290[_0x53f875(0x146)],_0x4130fa,_0x306290[_0x53f875(0x161)],_0x306290);});}),bots['inrl']({'pattern':['p26'],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':'<word>'},async(_0x43c000,_0x2219e8)=>{var _0x548f6f=_0x3366b0;if(!_0x43c000[_0x548f6f(0x156)]['args'][0x0])return global[_0x548f6f(0x155)]=!![],await _0x2219e8[_0x548f6f(0x136)](_0x43c000[_0x548f6f(0x146)],{'text':bots[_0x548f6f(0x140)](N_T)},{'quoted':_0x43c000});;if(_0x43c000[_0x548f6f(0x156)][_0x548f6f(0x13a)][_0x548f6f(0x130)]>=0xf)return global[_0x548f6f(0x155)]=!![],await _0x2219e8[_0x548f6f(0x136)](_0x43c000[_0x548f6f(0x146)],{'text':bots['errorMessage'](T_L)},{'quoted':_0x43c000});;let _0x2a0d9d=_0x43c000[_0x548f6f(0x156)][_0x548f6f(0x13a)];var _0x5717ad,_0x297f9e;if(_0x2a0d9d[_0x548f6f(0x159)](',')){var _0x1133ab=_0x2a0d9d[_0x548f6f(0x16f)](',');_0x5717ad=_0x1133ab[0x0],_0x297f9e=_0x1133ab[0x1];}var _0xcf6492=_0x5717ad||_0x2a0d9d,_0xe25e51=_0x297f9e||Config[_0x548f6f(0x15a)];await maker[_0x548f6f(0x133)](_0x548f6f(0x157),[_0xcf6492,_0xe25e51])['then'](async _0x562092=>{var _0x33bb39=_0x548f6f;return global[_0x33bb39(0x155)]=![],await _0x2219e8['sendMessage'](_0x43c000[_0x33bb39(0x146)],{'image':{'url':_0x562092},'caption':bots['config'][_0x33bb39(0x16e)][_0x33bb39(0x165)]},{'quoted':_0x43c000});})[_0x548f6f(0x175)](async _0x2a1210=>{var _0x1d4eb9=_0x548f6f;return global['catchError']=!![],await _0x2219e8[_0x1d4eb9(0x152)](_0x43c000['from'],_0x2a1210,_0x43c000[_0x1d4eb9(0x161)],_0x43c000);});}),bots[_0x3366b0(0x13c)]({'pattern':['p27'],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':_0x3366b0(0x153)},async(_0x1cd886,_0x34e127)=>{var _0x44c140=_0x3366b0;if(!_0x1cd886[_0x44c140(0x156)][_0x44c140(0x15d)][0x0])return global[_0x44c140(0x155)]=!![],await _0x34e127[_0x44c140(0x136)](_0x1cd886['from'],{'text':bots[_0x44c140(0x140)](N_T)},{'quoted':_0x1cd886});;if(_0x1cd886[_0x44c140(0x156)][_0x44c140(0x13a)][_0x44c140(0x130)]>=0xf)return global[_0x44c140(0x155)]=!![],await _0x34e127[_0x44c140(0x136)](_0x1cd886[_0x44c140(0x146)],{'text':bots['errorMessage'](T_L)},{'quoted':_0x1cd886});;let _0x2cbc14=_0x1cd886[_0x44c140(0x156)][_0x44c140(0x13a)];var _0x5f2268,_0x2784fe;if(_0x2cbc14[_0x44c140(0x159)](',')){var _0x31d493=_0x2cbc14[_0x44c140(0x16f)](',');_0x5f2268=_0x31d493[0x0],_0x2784fe=_0x31d493[0x1];}var _0xee392b=_0x5f2268||_0x2cbc14,_0x507cb4=_0x2784fe||Config[_0x44c140(0x15a)];await maker['textpro'](_0x44c140(0x14f),[_0xee392b,_0x507cb4])[_0x44c140(0x15b)](async _0x439e00=>{var _0x3d2594=_0x44c140;return global[_0x3d2594(0x155)]=![],await _0x34e127[_0x3d2594(0x136)](_0x1cd886[_0x3d2594(0x146)],{'image':{'url':_0x439e00},'caption':bots[_0x3d2594(0x141)]['exif'][_0x3d2594(0x165)]},{'quoted':_0x1cd886});})[_0x44c140(0x175)](async _0x48abd3=>{var _0x1c20ed=_0x44c140;return global['catchError']=!![],await _0x34e127['sendErrorMessage'](_0x1cd886[_0x1c20ed(0x146)],_0x48abd3,_0x1cd886[_0x1c20ed(0x161)],_0x1cd886);});}),bots[_0x3366b0(0x13c)]({'pattern':[_0x3366b0(0x15e)],'sucReact':'💗','category':['logo'],'usage':_0x3366b0(0x153)},async(_0x2456c5,_0x4667b1)=>{var _0x59d8bc=_0x3366b0;if(!_0x2456c5['client'][_0x59d8bc(0x15d)][0x0])return global[_0x59d8bc(0x155)]=!![],await _0x4667b1[_0x59d8bc(0x136)](_0x2456c5[_0x59d8bc(0x146)],{'text':bots[_0x59d8bc(0x140)](N_T)},{'quoted':_0x2456c5});;if(_0x2456c5[_0x59d8bc(0x156)][_0x59d8bc(0x13a)][_0x59d8bc(0x130)]>=0xf)return global[_0x59d8bc(0x155)]=!![],await _0x4667b1[_0x59d8bc(0x136)](_0x2456c5[_0x59d8bc(0x146)],{'text':bots[_0x59d8bc(0x140)](T_L)},{'quoted':_0x2456c5});;let _0x231d0d=_0x2456c5[_0x59d8bc(0x156)]['text'];var _0x48a206,_0x1f5017;if(_0x231d0d[_0x59d8bc(0x159)](',')){var _0x5f0a13=_0x231d0d['split'](',');_0x48a206=_0x5f0a13[0x0],_0x1f5017=_0x5f0a13[0x1];}var _0x733339=_0x48a206||_0x231d0d,_0x3e3c09=_0x1f5017||Config[_0x59d8bc(0x15a)];await maker[_0x59d8bc(0x133)](_0x59d8bc(0x166),[_0x733339,_0x3e3c09])[_0x59d8bc(0x15b)](async _0x282ae4=>{var _0x258350=_0x59d8bc;return global[_0x258350(0x155)]=![],await _0x4667b1[_0x258350(0x136)](_0x2456c5[_0x258350(0x146)],{'image':{'url':_0x282ae4},'caption':bots[_0x258350(0x141)][_0x258350(0x16e)][_0x258350(0x165)]},{'quoted':_0x2456c5});})[_0x59d8bc(0x175)](async _0x1ce880=>{var _0x2b4f19=_0x59d8bc;return global[_0x2b4f19(0x155)]=!![],await _0x4667b1['sendErrorMessage'](_0x2456c5[_0x2b4f19(0x146)],_0x1ce880,_0x2456c5[_0x2b4f19(0x161)],_0x2456c5);});}),bots['inrl']({'pattern':[_0x3366b0(0x16d)],'sucReact':'💗','category':['logo'],'usage':'<word>'},async(_0x1e824c,_0x3e849f)=>{var _0x2b5a9c=_0x3366b0;if(!_0x1e824c[_0x2b5a9c(0x156)][_0x2b5a9c(0x15d)][0x0])return global[_0x2b5a9c(0x155)]=!![],await _0x3e849f[_0x2b5a9c(0x136)](_0x1e824c[_0x2b5a9c(0x146)],{'text':bots['errorMessage'](N_T)},{'quoted':_0x1e824c});;if(_0x1e824c['client'][_0x2b5a9c(0x13a)][_0x2b5a9c(0x130)]>=0xf)return global[_0x2b5a9c(0x155)]=!![],await _0x3e849f[_0x2b5a9c(0x136)](_0x1e824c[_0x2b5a9c(0x146)],{'text':bots[_0x2b5a9c(0x140)](T_L)},{'quoted':_0x1e824c});;let _0xeb9fbc=_0x1e824c[_0x2b5a9c(0x156)]['text'];var _0x193ef2,_0x2c27a1;if(_0xeb9fbc[_0x2b5a9c(0x159)](',')){var _0x5f20a1=_0xeb9fbc[_0x2b5a9c(0x16f)](',');_0x193ef2=_0x5f20a1[0x0],_0x2c27a1=_0x5f20a1[0x1];}var _0x373408=_0x193ef2||_0xeb9fbc,_0x49dbb3=_0x2c27a1||Config[_0x2b5a9c(0x15a)];await maker[_0x2b5a9c(0x133)]('https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html',[_0x373408,_0x49dbb3])[_0x2b5a9c(0x15b)](async _0x1276ab=>{var _0x23cda5=_0x2b5a9c;return global['catchError']=![],await _0x3e849f[_0x23cda5(0x136)](_0x1e824c[_0x23cda5(0x146)],{'image':{'url':_0x1276ab},'caption':bots[_0x23cda5(0x141)][_0x23cda5(0x16e)][_0x23cda5(0x165)]},{'quoted':_0x1e824c});})[_0x2b5a9c(0x175)](async _0x45c481=>{var _0x1db901=_0x2b5a9c;return global[_0x1db901(0x155)]=!![],await _0x3e849f[_0x1db901(0x152)](_0x1e824c['from'],_0x45c481,_0x1e824c[_0x1db901(0x161)],_0x1e824c);});}),bots[_0x3366b0(0x13c)]({'pattern':[_0x3366b0(0x169)],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':_0x3366b0(0x153)},async(_0x55f879,_0x2da35a)=>{var _0x5b7dc3=_0x3366b0;if(!_0x55f879['client'][_0x5b7dc3(0x15d)][0x0])return global[_0x5b7dc3(0x155)]=!![],await _0x2da35a['sendMessage'](_0x55f879[_0x5b7dc3(0x146)],{'text':bots['errorMessage'](N_T)},{'quoted':_0x55f879});;if(_0x55f879[_0x5b7dc3(0x156)][_0x5b7dc3(0x13a)]['length']>=0xf)return global[_0x5b7dc3(0x155)]=!![],await _0x2da35a['sendMessage'](_0x55f879['from'],{'text':bots['errorMessage'](T_L)},{'quoted':_0x55f879});;let _0x553127=_0x55f879[_0x5b7dc3(0x156)]['text'];var _0x4ead2a,_0x24125e;if(_0x553127[_0x5b7dc3(0x159)](',')){var _0x3a3f97=_0x553127['split'](',');_0x4ead2a=_0x3a3f97[0x0],_0x24125e=_0x3a3f97[0x1];}var _0x2e2e20=_0x4ead2a||_0x553127,_0xc9277a=_0x24125e||Config[_0x5b7dc3(0x15a)];await maker[_0x5b7dc3(0x133)](_0x5b7dc3(0x144),[_0x2e2e20,_0xc9277a])[_0x5b7dc3(0x15b)](async _0x1d62e1=>{var _0xc3c5d2=_0x5b7dc3;return global[_0xc3c5d2(0x155)]=![],await _0x2da35a[_0xc3c5d2(0x136)](_0x55f879[_0xc3c5d2(0x146)],{'image':{'url':_0x1d62e1},'caption':bots['config']['exif'][_0xc3c5d2(0x165)]},{'quoted':_0x55f879});})['catch'](async _0x578442=>{var _0x86c047=_0x5b7dc3;return global[_0x86c047(0x155)]=!![],await _0x2da35a['sendErrorMessage'](_0x55f879['from'],_0x578442,_0x55f879[_0x86c047(0x161)],_0x55f879);});}),bots['inrl']({'pattern':[_0x3366b0(0x135)],'sucReact':'💗','category':['logo'],'usage':_0x3366b0(0x153)},async(_0x3f3895,_0xb5bba0)=>{var _0x76968b=_0x3366b0;if(!_0x3f3895[_0x76968b(0x156)][_0x76968b(0x15d)][0x0])return global[_0x76968b(0x155)]=!![],await _0xb5bba0[_0x76968b(0x136)](_0x3f3895['from'],{'text':bots[_0x76968b(0x140)](N_T)},{'quoted':_0x3f3895});;if(_0x3f3895['client'][_0x76968b(0x13a)]['length']>=0xf)return global[_0x76968b(0x155)]=!![],await _0xb5bba0[_0x76968b(0x136)](_0x3f3895['from'],{'text':bots[_0x76968b(0x140)](T_L)},{'quoted':_0x3f3895});;let _0x3dc6a2=_0x3f3895[_0x76968b(0x156)][_0x76968b(0x13a)];var _0x531a5d,_0x46a9bf;if(_0x3dc6a2[_0x76968b(0x159)](',')){var _0x537ab6=_0x3dc6a2[_0x76968b(0x16f)](',');_0x531a5d=_0x537ab6[0x0],_0x46a9bf=_0x537ab6[0x1];}var _0x5f3580=_0x531a5d||_0x3dc6a2,_0x36f019=_0x46a9bf||Config[_0x76968b(0x15a)];await maker[_0x76968b(0x133)](_0x76968b(0x16b),[_0x5f3580,_0x36f019])[_0x76968b(0x15b)](async _0x28425c=>{var _0x443e0c=_0x76968b;return global['catchError']=![],await _0xb5bba0[_0x443e0c(0x136)](_0x3f3895[_0x443e0c(0x146)],{'image':{'url':_0x28425c},'caption':bots[_0x443e0c(0x141)][_0x443e0c(0x16e)][_0x443e0c(0x165)]},{'quoted':_0x3f3895});})[_0x76968b(0x175)](async _0x423dbd=>{var _0x6ccef1=_0x76968b;return global[_0x6ccef1(0x155)]=!![],await _0xb5bba0[_0x6ccef1(0x152)](_0x3f3895[_0x6ccef1(0x146)],_0x423dbd,_0x3f3895[_0x6ccef1(0x161)],_0x3f3895);});}),bots[_0x3366b0(0x13c)]({'pattern':[_0x3366b0(0x160)],'sucReact':'💗','category':[_0x3366b0(0x131)],'usage':_0x3366b0(0x153)},async(_0x508570,_0x433cd0)=>{var _0x489c1f=_0x3366b0;if(!_0x508570['client'][_0x489c1f(0x15d)][0x0])return global[_0x489c1f(0x155)]=!![],await _0x433cd0[_0x489c1f(0x136)](_0x508570['from'],{'text':bots['errorMessage'](N_T)},{'quoted':_0x508570});;if(_0x508570[_0x489c1f(0x156)]['text'][_0x489c1f(0x130)]>=0xf)return global['catchError']=!![],await _0x433cd0[_0x489c1f(0x136)](_0x508570['from'],{'text':bots[_0x489c1f(0x140)](T_L)},{'quoted':_0x508570});;let _0x1028d8=_0x508570['client']['text'];var _0x2009b3,_0x182791;if(_0x1028d8['includes'](',')){var _0x1220a2=_0x1028d8[_0x489c1f(0x16f)](',');_0x2009b3=_0x1220a2[0x0],_0x182791=_0x1220a2[0x1];}var _0x49440c=_0x2009b3||_0x1028d8,_0x1846d2=_0x182791||Config[_0x489c1f(0x15a)];await maker['textpro'](_0x489c1f(0x13e),[_0x49440c,_0x1846d2])[_0x489c1f(0x15b)](async _0x295d8e=>{var _0x1218d3=_0x489c1f;return global[_0x1218d3(0x155)]=![],await _0x433cd0['sendMessage'](_0x508570[_0x1218d3(0x146)],{'image':{'url':_0x295d8e},'caption':bots[_0x1218d3(0x141)][_0x1218d3(0x16e)][_0x1218d3(0x165)]},{'quoted':_0x508570});})[_0x489c1f(0x175)](async _0x3b98f5=>{var _0x3e52ce=_0x489c1f;return global[_0x3e52ce(0x155)]=!![],await _0x433cd0[_0x3e52ce(0x152)](_0x508570[_0x3e52ce(0x146)],_0x3b98f5,_0x508570[_0x3e52ce(0x161)],_0x508570);});}),bots[_0x3366b0(0x141)]['api'][_0x3366b0(0x133)][_0x3366b0(0x132)][_0x3366b0(0x172)](_0x55d31e=>{var _0x382bd0=_0x3366b0;const {pattern:_0x4593d1,textLenth:_0x6c6b13,id:_0x45b6cb}=_0x55d31e,_0x3aedae=bots[_0x382bd0(0x141)][_0x382bd0(0x138)][_0x382bd0(0x133)][_0x382bd0(0x13b)]+_0x45b6cb;bots[_0x382bd0(0x13c)]({'pattern':_0x4593d1,'sucReact':'💗','category':['logo'],'usage':_0x382bd0(0x153)},async(_0x1f166c,_0x586aae)=>{var _0x40d662=_0x382bd0;if(!_0x1f166c[_0x40d662(0x156)]['args'][0x0])return global[_0x40d662(0x155)]=!![],await _0x586aae[_0x40d662(0x136)](_0x1f166c[_0x40d662(0x146)],{'text':bots[_0x40d662(0x140)](N_T)},{'quoted':_0x1f166c});;if(_0x1f166c[_0x40d662(0x156)][_0x40d662(0x13a)][_0x40d662(0x130)]>=_0x6c6b13)return global['catchError']=!![],await _0x586aae[_0x40d662(0x136)](_0x1f166c['from'],{'text':bots[_0x40d662(0x140)](T_L)},{'quoted':_0x1f166c});;await maker['textpro'](_0x3aedae,[_0x1f166c['client'][_0x40d662(0x13a)],_0x40d662(0x13c)])[_0x40d662(0x15b)](async _0x20b57c=>{var _0x4e5b35=_0x40d662;return global[_0x4e5b35(0x155)]=![],await _0x586aae[_0x4e5b35(0x136)](_0x1f166c['from'],{'image':{'url':_0x20b57c},'caption':bots[_0x4e5b35(0x141)]['exif'][_0x4e5b35(0x165)]},{'quoted':_0x1f166c});})[_0x40d662(0x175)](async _0x5a820a=>{var _0x5a245f=_0x40d662;return global[_0x5a245f(0x155)]=!![],await _0x586aae[_0x5a245f(0x152)](_0x1f166c['from'],_0x5a820a,_0x1f166c[_0x5a245f(0x161)],_0x1f166c);});});});

inrl({pattern: ['inrl'], desc: "to check i cmds", sucReact: "🙀", category: ['all'],},   async (message, client) => {
	  const txts =await inrlQuita();
await client.sendMessage( message.from, { text: "😇"+ txts },{ quoted: message });
});
inrl({pattern: ['🥲',"😦","🥺","😑","😕","🤧","😔","🙄","🤥","🥴","😐","😒","😢"], desc : "for und",sucReact: "😛", category: ['ibot'], },async (message, client) => {
   const texts = await insult();
   await client.sendMessage( message.from, { text : "😹"+texts },{ quoted: message });
});
