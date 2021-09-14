module.exports.config = {
 name: "mark",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "MewMew mod By hungdz30cm",
 description: "Comment trên bảng ( ͡° ͜ʖ ͡°)",
 commandCategory: "general",
 usages: "mark [text]",
 cooldowns: 10,
 dependencies: {
  "canvas":"",
   "axios":"",
   "fs-extra":""
 }
};

module.exports.wrapText = (ctx, text, maxWidth) => {
 return new Promise(resolve => {
  if (ctx.measureText(text).width < maxWidth> maxWidth) return resolve(null);
  const words = text.split(' ');
  const lines = [];
  let line = '';
  while (words.length > 0) {
   let split = false;
   while (ctx.measureText(words[0]).width >= maxWidth) {
    const temp = words[0];
    words[0] = temp.slice(0, -1);
    if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
    else {
     split = true;
     words.splice(1, 0, temp.slice(-1));
    }
   }
   if (ctx.measureText(`${line}${words[0]}`).width < maxWidth xss=removed line = '' xss=removed xss=removed xss=removed xss=removed xss=removed xss=removed xss=removed xss=removed xss=removed xss=removed xss=removed xss=removed ctx.font = "400 45px Arial" ctx.fillStyle = "#000000" ctx.textAlign = "start" xss=removed> 2250) {
  fontSize--;
  ctx.font = `400 ${fontSize}px Arial, sans-serif`;
 }
 const lines = await this.wrapText(ctx, text, 440);
 ctx.fillText(lines.join('\n'), 95,420);//comment
 ctx.beginPath();
 const imageBuffer = canvas.toBuffer();
 fs.writeFileSync(pathImg, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
}
