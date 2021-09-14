module.exports.config = {
	name:"uptime",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DuyVuong",
	description: "Random ảnh theo api - uptime",
	commandCategory: "system",
	cooldowns: 3
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const fetch = global.nodemodule["node-fetch"];
	const fast = global.nodemodule["fast-speedtest-api"];
	const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
	const ketqua = await speedTest.getSpeed();
	var fetchcd = await fetch("https://raw.githubusercontent.com/HerokeyVN/API_Ca_Dao/main/CaDao.js")
    var jsoncd =  await fetchcd.json()
	const request = require('request');
	const fs = require("fs");
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D");
    var thang = moment.tz("Asia/Ho_Chi_Minh").format("MM");
    var nam = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	const timeStart = Date.now();
	axios.get('https:vangbanlanhat.tk/other?type=calendar').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `🌐Bây giờ là: ${gio} , Ngày : ${ngay} Tháng ${thang} Năm ${nam}!\n🤖Thời gian hoạt động : ${hours} giờ ${minutes} phút ${seconds} giây.\n\n📝Users: ${global.data.allUserID.length}\n📈 Threads: ${global.data.allThreadID.length}\n🔍 Cpu: ${pidusage.cpu.toFixed(1)}\n⚠️ Ram: ${byte2mb(pidusage.memory)}\n❗ Ping: ${Date.now() - timeStart}\nℹ️Tốc độ mạng : ${ketqua} Mbs\n💬Ca Dao : ${jsoncd.data[String(Math.floor(Math.random() * 268) + 1)]}\n🔞Code hentai : ${Math.floor(Math.random() * 99999)}`,
						attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
}
