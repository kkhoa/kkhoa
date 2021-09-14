module.exports.config = {
  name: "suthat",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Lazic Team",
  description: "là trò chơi bốc thăm câu hỏi",
  commandCategory: "random-text",
  cooldowns: 1
};

module.exports.run = async ({ api, event, args, Users,__GLOBAL,Currencies }) => {

  const axios = require("axios");

  const fs = require("fs-extra");

  const request = require("request");
   const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
  var emoji = ["Bạn đã làm gì và bạn chưa nói với ai?","Ai trong số những người chơi trong nhóm này có một cái miệng gợi cảm hơn?","Qua Lượt hên cho m đấy con quỷ ","Phần nào của cơ thể mà bạn thấy hấp dẫn nhất ở một người từ giới tính khác (hoặc giống nhau)?","Bạn đã bao giờ đánh hơi đồ lót của bạn để biết nếu nó sạch?","Tỏ tình cr hoặc 1 ng bất kỳ","Điều khó chịu nhất bạn đã làm ở nơi công cộng là gì?","kể cho cả gr rằng bạn đg thích hoặc yêu ai đó . và tag người đó vào nếu có","bạn có dám nói thật với người bạn yêu không","Bạn có dám đối diện với sự thật dù cho nó có tàn khốc cỡ nào","bạn có thật sự ổn","Hãy nói ra 1 câu nói khiến bạn buồn nhất","Điều bây giờ bạn muốn nhất là gì","bạn đã từng nói xấu ai chưa","hãy kể 1 việc bạn từng làm khiến mn kinh ngạc :c","Thứ Khiến bạn vui nhất là gì","Hãy kể 1 lần chơi ngu của em 😏","Bạn thấy trong group này ai xinh nhất ","bạn giỏi môn gì nhất","bạn có muốn ký đầu con qtv không và nếu có hãy tag nó để bot ký đầu hộ cho","hãy sử dụng tính chất môn bạn giỏi nhất để tỏ tình cr"]

  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
api.sendMessage(`Đây Là Sự Thật Của :` 
 + " [ {name} ] "
  .replace(/\{name}/g, nameUser) 
 + `: ${random_emoji}\n[ ! ] => Hãy Làm Theo Trước Khi Bấm Lại nhé !\n[ H ] Đóng góp thử thách thông qua \'/callad\' nhé !`, event.threadID, event.messageID);
} 