//created by @inrl
const { inrl, dogphoto, lovephoto, cartoonphoto } = require('../lib');
const fs = require('fs');
const Config = require('../config');

inrl({ pattern: ['photo'], desc: "thus send random fun dog imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await dogphoto();
let buttons = [
        {buttonId:'.photo', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg},
      caption:  `HeHe!`,
      footer: Config.FOOTER,
      buttons: buttons,
      headerType: 4
      }
await client.sendMessage(message.from, buttonMsg, {quoted: message})
})
inrl({ pattern: ['lovephoto'], desc: "thus send random love photos,imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await lovephoto();
let buttons = [
        {buttonId:'.lovephoto', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg},
      caption:  `HeHe!!`,
      footer: Config.FOOTER,
      buttons: buttons,
      headerType: 4
      }
await client.sendMessage(message.from, buttonMsg, {quoted: message})
})
inrl({ pattern: ['cphoto'], desc: "thus send random cartoon imgs, maybe bad",sucReact: "💗",  category: ["anime"],}, async (message, client) => {
let ttimg = await cartoonphoto();
let buttons = [
        {buttonId:'.cphoto', buttonText: {displayText: `ɴᴇxᴛ ➪`}, type: 1},
      ]
      let buttonMsg = {
      image: {url:ttimg},
      caption:  `HeHe!!!`,
      footer: Config.FOOTER,
      buttons: buttons,
      headerType: 4
      }
await client.sendMessage(message.from, buttonMsg, {quoted: message})
})
