const fs = require("fs");
module.exports.config = {
	name: "Yêu bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Đăng", 
	description: "no prefix",
	commandCategory: "Nói yêu bot điiiiii",
	usages: "Yêu bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngủ nha")==0 || (event.body.indexOf("ngủ nhó")==0) || (event.body.indexOf("pai")==0) || (event.body.indexOf("pái pai")==0)) {
		var msg = {
				body: "ngủ ngon nha đĩ😘, chúc m nằm mơ tối ngủ ỉa chảy😘😽",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}