const Discord = require("discord.js");
const { DABBLELAB_LOGO_NEW } = require("../constants/botConstatnts");

const description = `**Courses for getting started with artificial intelligence and natural language processing (NLP)**

Each course contains a collection of dabbles (mini-courses) that we're constantly adding to. Dabbles include easy-to-follow videos instructions and hands-on projects (labs) for learning and building faster.

📌 [Check our all of our tutorials](https://learn.dabblelab.com/ 'visit our tutorial website')

📌 [Visit our website for more Information about us](https://dabblelab.com/ 'visit our official website')

**Check out some of our latest course:**
`;

const courseLinks = `https://learn.dabblelab.com/courses/dabbling-with-openai
https://learn.dabblelab.com/courses/dabbling-with-amazon-comprehend
https://learn.dabblelab.com/courses/dabbling-with-alexa-custom-skills`;
module.exports = {
	name: "learn",
	description: "Displays a list of available course from DabbleLab learn",
	args: false,
	usage: "",
	guildOnly: false,
	async execute(message, args) {
		const learnEmbed = new Discord.MessageEmbed()
			.setColor("GOLD")
			.setTitle("🖐 Welcome to dabble lab learning!")
			.setURL("https://learn.dabblelab.com/ ")
			.setDescription(description)
			.setThumbnail(DABBLELAB_LOGO_NEW);

		message.channel.send(learnEmbed);
		message.channel.send(courseLinks);
	},
};
