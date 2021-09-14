module.exports.config = {
name: "flopvl",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "JRT",
 description: "bot trùm",
 commandCategory: "Không cần dấu lệnh",
 usages: "noprfix",
 cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
 const fs = global.nodemodule["fs-extra"];
 var { threadID, messageID } = event;
 if (event.body.indexOf("Flop thật")==0 || (event.body.indexOf("Box flop quá")==0)) {
  var msg = {
    body: "t trùm bóc từ bây giờ :)",
    attachment: fs.createReadStream(__dirname + `/cache/flop.mp4`)
   }
   return api.sendMessage(msg, threadID, messageID);
  }
 }
 module.exports.run = function({ api, event, client, global }) {

}