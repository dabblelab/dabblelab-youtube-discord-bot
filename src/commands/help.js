const Discord = require("discord.js");
const { DABBLELAB_LOGO_NEW } = require("../constants/botConstatnts");

module.exports = {
	name: "help",
	description: "Displays a list of available commands",
	args: false,
	usage: "",
	guildOnly: false,
	async execute(message, args) {
		const helpEmbed = new Discord.MessageEmbed()
			.setColor("#0099ff")
			.setTitle("Welcome to DabbleLab bot")
			.setURL("https://dabblelab.com")
			.setDescription("Here is a list of commands which you can use:")
			.setThumbnail(DABBLELAB_LOGO_NEW)
			.addFields(
				{
					name: "1. Search videos from DabbleLab's YouTube channel",
					value: "**Command:**  \u200B   //yt\u200B <your search query here>",
				},
				{ name: "\u200B", value: "\u200B" }
			);

		message.channel.send(helpEmbed);
	},
};
