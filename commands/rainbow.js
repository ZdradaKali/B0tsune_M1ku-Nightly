const Discord = require("discord.js");
const bot = new Discord.Client();
const snek = require('snekfetch');
const fsn = require('fs-nextra');
exports.run = async (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission('ATTACH_FILES')) return message.reply('Désolé, je n\'ai pas les permissions pour faire cette commande. J\'ai besoin de la permission ATTACH_FILES. :x:')
   const { Canvas } = require('canvas-constructor');
    if (message.mentions.users.size < 1) return message.channel.send("Vous n'avez pas mentionné d'utilisateur à rainbowifier");
   const getSlapped = async (person) => {
    const plate = await fsn.readFile('./assets/images/rainbow.png');
    const png = person.replace('.gif', '.png');
    const { body } = await snek.get(png);
    return new Canvas(250, 250)
    .resetTransformation()
    .addImage(body, 0, 0, 250, 250)
    .addImage(plate, 0, 0, 250, 250)
    .toBuffer();
  }
     try {
    const person = message.mentions.users.first().avatarURL;
    const result = await getSlapped(person);
    await message.channel.send({ files: [{ attachment: result, name: 'rainbow.png' }] });
  } catch (error) {
    throw error;
  }
}