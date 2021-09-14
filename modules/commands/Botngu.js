const fs = require("fs");
module.exports.config = {
	name: "Bot ngu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Đăng", 
	description: "no prefix",
	commandCategory: "Chửi bot ngu đi",
	usages: "Bot ngu",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bot ngu")==0 || (event.body.indexOf("Bot ngu")==0)) {
		var msg = {
				body: "chửi lần nữa tao out ráng chịu :pp",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}