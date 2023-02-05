const { tlang, getAdmin, prefix, Config, sck, fetchJson, runtime,cmd } = require('../lib')
 let { dBinary, eBinary } = require("../lib/binary");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
 const fs = require('fs')
 const axios = require('axios')

bots.inrl( { pattern: ["ttp"], sucReact: "🖼", category: ["all", "create"], },
  async (message, client) => {
    if (!message.client.text) { global.catchError = true; return await client.sendErrorMessage( message.from, lang.NEED_WORD, message.key, message ); }
    var uri = encodeURI(message.client.text);
    try {
      var resImage = await axios.get( "https://api.xteam.xyz/ttp?file&text=" + uri, { responseType: "arraybuffer" } );
    } catch (error) {
      global.catchError = true; 
      return await client.sendErrorMessage( message.from, error, message.key, message );
    }
    await client.sendMessage( message.from, { image: Buffer.from(resImage.data), caption: bots.config.exif.cap }, { quoted: message } );
    global.catchError = false;
  }
);

bots.inrl( { pattern: ["attp"], desc: lang.ATTP_DESC, sucReact: "☯", category: ["all", "create"], },
  async (message, client) => {
    if (!message.client.text) {global.catchError = true; return await client.sendErrorMessage(message.from,lang.NEED_WORD,message.key,message);}
    var uri = encodeURI(message.client.text);
    try {
      var resSticker = await axios.get( "https://api.xteam.xyz/attp?file&text=" + uri, { responseType: "arraybuffer" } );
    } catch (error) { 
        global.catchError = true; 
        return await client.sendErrorMessage( message.from, error, message.key, message );
    }
    client.sendMessage( message.from, { sticker: Buffer.from(resSticker.data) }, { quoted: message } );
    global.catchError = false;
  }
);
