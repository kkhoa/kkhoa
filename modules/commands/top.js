
module.exports.config = {
    name: "pay",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "DÅ©ng UwU",
    description: "Chuyá»ƒn tiá»n cá»§a báº£n thĂ¢n cho ai Ä‘Ă³",
    commandCategory: "Economy",
    usages: "pay @tag coins",
    cooldowns: 5,
     };

module.exports.run = async ({ event, api, Currencies, args }) => {
let { threadID, messageID, senderID } = event;
const mention = Object.keys(event.mentions)[0];
let name = event.mentions[mention].split(" ").length
if(!mention) return api.sendMessage('Vui lĂ²ng tag ngÆ°á»i muá»‘n chuyá»ƒn coins cho!',threadID,messageID);
else {
	if(!isNaN(args[0+ name])) {
		const coins = parseInt(args[0+ name]);
		let balance = (await Currencies.getData(senderID)).money;
        if (coins <= 0) return api.sendMessage('Sá»‘ coins báº¡n muá»‘n chuyá»ƒn khĂ´ng há»£p lá»‡',threadID,messageID);
		if (coins > balance) return api.sendMessage('Sá»‘ coins báº¡n muá»‘n chuyá»ƒn lá»›n hÆ¡n sá»‘ coins báº¡n hiá»‡n cĂ³!',threadID,messageID);
		else {
        return api.sendMessage({ body: 'ÄĂ£ chuyá»ƒn cho ' + event.mentions[mention].replace(/@/g, "") + ` ${args[0+ name]} coins`}, threadID, async () => {
            await Currencies.increaseMoney(mention, coins);
                  Currencies.decreaseMoney(senderID, coins)
            }, messageID);
		}
	} else return api.sendMessage('Vui lĂ²ng nháº­p sá»‘ coins muá»‘n chuyá»ƒn',threadID,messageID);
}
}