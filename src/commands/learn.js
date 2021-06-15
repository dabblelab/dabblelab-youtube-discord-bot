const Discord = require("discord.js");
const { fetchCourses } = require("../utils/airtable");

const { DABBLELAB_LOGO_NEW } = require("../constants/botConstatnts");

const description = `**Courses for getting started with artificial intelligence and natural language processing (NLP)**

Each course contains a collection of dabbles (mini-courses) that we're constantly adding to. Dabbles include easy-to-follow videos instructions and hands-on projects (labs) for learning and building faster.

📌 [Check our all of our tutorials](https://learn.dabblelab.com/ 'visit our tutorial website')

📌 [Visit our website for more Information about us](https://dabblelab.com/ 'visit our official website')

**Check out some of our latest course:**
`;


const createCourseListEmbed = function (courses) {
	const courseListEmbed = new Discord.MessageEmbed()
		.setColor("GOLD")
		.setTitle("🖐 Welcome to dabble lab learning!")
		.setURL("https://learn.dabblelab.com/ ")
		.setDescription(description)
		.setThumbnail(DABBLELAB_LOGO_NEW);

	courses.forEach((course) => {
		courseEmbed.addField(`${course.number}) ${course.name}`, `${course.description}`);
	})
	return courseListEmbed
}


module.exports = {
	name: "learn",
	description: "Displays a list of courses",
	args: false,
	usage: "< (optional) index of course>",
	guildOnly: true,
	cooldown: 2,
	async execute(message, args) {
		const channelId = message.channel.id;
		const requiredChannelId = process.env.BOT_DISCORD_CHANNEL_ID;
		const requiredChannelName =
			message.guild.channels.cache.get(requiredChannelId)?.name;

		if (channelId !== process.env.BOT_DISCORD_CHANNEL_ID) {
			const reply = new Discord.MessageEmbed()
				.setColor("#ff0000")
				.setTitle("Error")
				.setDescription(
					`This command will only work in the following channel(s):
           **${requiredChannelName}**`
				);

			return message.channel.send(reply);
		}

		const courseId = args[0];

		if (!courseId) {
			const records = await fetchCourses();
			if (!records.length) return message.channel.send(`Sorry 😕, no courses are available at this moment. Please check later!!`);

			// Send a list of courses listed with index
			const courses = records.map((record) => ({
				number: record.fields.number,
				name: record.fields.name,
				description: record.fields.description,
				last_updated: record.fields.last_updated
			}));
			console.log(courses)
			message.channel.send(createCourseListEmbed(courses))
			message.channel.send('For more details on a specific course use the command with the course number. \ne.g `//learn 2`')
		} else {
			// Send a list of chapters from a given course with index courseId
			message.channel.send(`Hi, here is a list of chapter in #${courseId}:`);
		}
	},
};
