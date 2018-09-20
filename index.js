const argv = require('minimist')(process.argv.slice(2));
const imgcat = require('imgcat');
const twilioClient = require('./telephone.js');
const meigen = require('./meigen.js');
const image = "kawasima.gif";
const semicolon = "semicolon.jpg";
const lisper = "lisper.jpg";

async function main(args) {
  if (args[0] === 'meigen') {
    const message = meigen[Math.floor(Math.random() * meigen.length)];
    console.log(message);
  } else if (args[0] === 'img') {
    const img = await imgcat(image)
    console.log(img);
  } else if (args[0] === 'semicolon') {
    const img = await imgcat(semicolon)
    console.log(img);
  } else if (args[0] === 'lisper') {
    const img = await imgcat(lisper)
    console.log(img);
  } else if (args[0] === 'telephone') {
    const tel = args[1];
    const message = args[2];
    const from = args[3];
    await twilioClient.messages.create({
      body: message,
      to: `+${tel}`,
      from: `+${from}`,
    }).catch(e => console.error(e));
  }
}

main(argv._);
