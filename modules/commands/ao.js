const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "ao",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ko nhớ :3 -mod by ghệ đít bự,
  description: "đấm vào mặt thăng nói ảo",
  commandCategory: "Hình Ảnh",
  usages: "ao",
  cooldowns: 5,
  dependencies: {
        "fs": "",
        "axios": "",
		"request": ""
    }
};

module.exports.run = ({ event, api }) => api.sendMessage(`dcm m ảo thật đấy`,event.threadID, event.messageID);
fs.createReadStream(__dirname + `/cache/ảo.mp4`)
   }
   return api.sendMessage(msg, threadID, messageID);
  }
 }
 module.exports.run = function({ api, event, client, global }) {

}
