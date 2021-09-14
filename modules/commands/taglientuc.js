module.exports.config = {
    name: "taglientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "VanHung & Dựa trên demo của NTKhang",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "taglientuc @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    let data = await api.getUserInfo(mention);
    let name = data[parseInt(mention)].name;
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu tag!");
setTimeout(() => {a({body: "Alo em đâu rồi ra đây chơi đi em" + " " + name, mentions: arraytag})} , 1000);
setTimeout(() => {a({body: "Alo con lợn" + " " + name, mentions: arraytag})} , 3000);
setTimeout(() => {a({body: "Có người cần gặp mày kìa đĩ ơi" + " " + name, mentions: arraytag})} , 7000);
setTimeout(() => {a({body: "Rep đi con lợn này" + " " + name, mentions: arraytag})} , 11000);
setTimeout(() => {a({body: "Bạn ơi, thôi nào" + " " + name, mentions: arraytag})} , 15000);
setTimeout(() => {a({body: "Ơ kìa" + " " + name, mentions: arraytag})} , 20000);
setTimeout(() => {a({body: "Em yêu à" + " " + name, mentions: arraytag})} , 24000);
setTimeout(() => {a({body: "Đjtme đâu rồi" + " " + name, mentions: arraytag})} , 28000);
setTimeout(() => {a({body: "Địt mẹ mày bố nói tử tế mà không nghe à" + " " + name, mentions: arraytag})} , 32000);
setTimeout(() => {a({body: "Đĩ ơi có người gặp kìa" + " " + name, mentions: arraytag})} , 36000);
setTimeout(() => {a({body: "Cháy nhà !!!" + " " + name, mentions: arraytag})} , 40000);
setTimeout(() => {a({body: "Hiện hồn đi mặt chồn" + " " + name, mentions: arraytag})} , 44000);
setTimeout(() => {a({body: "Đĩ mẹ mày ra đây bố xem nào" + " " + name, mentions: arraytag})} , 48000);
setTimeout(() => {a({body: "Đừng vô hình nữa" + " " + name, mentions: arraytag})} , 52000);
setTimeout(() => {a({body: "Gái Nhật đó mề ta rà xê ề ê ề ế ề ế ê" + " " + name, mentions: arraytag})} , 56000);
setTimeout(() => {a({body: "Hiện ra bố mày xem nào" + " " + name, mentions: arraytag})} , 60000);
setTimeout(() => {a({body: "Cút bố đéo gọi nữa" + " " + name, mentions: arraytag})} , 64000);
 }