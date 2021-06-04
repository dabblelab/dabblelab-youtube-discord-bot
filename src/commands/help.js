const Discord = require("discord.js");
const { DABBLELAB_LOGO_NEW } = require("../constants/botConstatnts");

const description = `**We help you build NLP & AI solutions to engage & delight your customers.**

Dabble Lab is an education-first tech consultancy. Our team of passionate technologists spends half of their time researching emerging technologies and developing tools and educational resources for the development community. We then use this experience to work inside your company to build great solutions and keep your team educated on the latest innovations.

📌 [Check our YouTube channel](https://www.youtube.com/channel/UCfY-LopSxGekh9LruXLjffg 'visit our youtube channel')

📌 [Check our recent tutorials](https://learn.dabblelab.com/ 'visit our tutorial website')

📌 [Visit our website for more Information about us](https://dabblelab.com/ 'visit our official website')

This BOT helps you quickly find video tutorials and complete courses provided by DabbleLab right inside your discord server.

Just type the following commands to get results-
`;
module.exports = {
	name: "help",
	description: "Displays a list of available commands",
	args: false,
	usage: "",
	guildOnly: false,
	async execute(message, args) {
		const helpEmbed = new Discord.MessageEmbed()
			.setColor("#0099ff")
			.setTitle("Welcome to DabbleLab")
			.setURL("https://dabblelab.com")
			.setDescription(description)
			.setThumbnail(DABBLELAB_LOGO_NEW)
			.addFields(
				{
					name: "1. Search videos from DabbleLab's YouTube channel",
					value: "`//yt <your search query here>`",
				},
				{
					name: "2. Search videos from DabbleLab's courses",
					value: "`//learn <your search query here>`",
				},
				{
					name: "3. Get Help",
					value: "`//help`",
				}
			);

		message.channel.send(helpEmbed);
	},
};
