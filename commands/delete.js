const Discord = require("discord.js");
const bot = new Discord.Client();
const snek = require('snekfetch');
const fsn = require('fs-nextra');
exports.run = async (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission('ATTACH_FILES')) return message.reply('Désolé, je n\'ai pas les permissions pour faire cette commande. J\'ai besoin de la permission ATTACH_FILES. :x:')
   const { Canvas } = require('canvas-constructor');
    if (message.mentions.users.size < 1) return message.channel.send("Vous n'avez pas mentionné d'utilisateur à effacer.");
   const getSlapped = async (person) => {
    const plate = await fsn.readFile('./assets/images/plate_delete.png');
    const png = person.replace('.gif', '.png');
    const { body } = await snek.get(png);
    return new Canvas(550, 275)
    .setColor(0x7700cf)
    .addRect(0, 0, 634, 675)
    .addImage(plate, 0, 0, 550, 275)
    .addImage(body, 92, 106, 139, 151)
    .toBuffer();
  }
     try {
    const person = message.mentions.users.first().avatarURL;
    const result = await getSlapped(person);
    await message.channel.send({ files: [{ attachment: result, name: 'garbagememe.png' }] });
  } catch (error) {
    throw error;
  }
}