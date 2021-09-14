module.exports.config = {
name: "tồi",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "JRT",
 description: "tồi vcl á",
 commandCategory: "Không cần dấu lệnh",
 usages: "noprfix",
 cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
 const fs = global.nodemodule["fs-extra"];
 var { threadID, messageID } = event;
 if (event.body.indexOf("m tồi vl")==0 || (event.body.indexOf("m là đồ tồi")==0)) {
  var msg = {
    body: "Đúng đúng m tồi vãi lon :)",
    attachment: fs.createReadStream(__dirname + `/cache/ditnhau.png`)
   }
   return api.sendMessage(msg, threadID, messageID);
  }
 }
 module.exports.run = function({ api, event, client, global }) {

}