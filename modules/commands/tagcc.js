module.exports.config = {
name: "tagcc",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "Jukie",
 description: "Tag adm thì ăn đấm nha",
 commandCategory: "Hệ thống",
 usages: "",
 cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
 var { threadID, messageID } = event;
        var tl = ["tag cc thằng admin bận rồi","tag làm gì, nó không có đây đâu","tag nữa t đấm cho","có cl th admin rep","nó ngu r đừng tag"];
        var rand = tl[Math.floor(Math.random() * tl.length)];
 if (event.body.indexOf("@Khoa Lê")==0 || (event.body.indexOf("@Bánh Mì Bơ Sữa")==0)) {         //thay tên vào
  var msg = {
    body: rand
   }
   return api.sendMessage(msg, threadID, messageID);
  }
 }
 module.exports.run = function({ api, event, client, __GLOBAL }) {

}