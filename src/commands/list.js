const Discord = require("discord.js");

module.exports = {
	name: "list",
	description: "Displays a list of courses",
	args: false,
	usage: "<any text>",
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
			// Send a list of courses listed with index
			// message.channel.send(`Hi, here is a list of available courses:`);

			message.channel.send(channelId);
		} else {
			// Send a list of chapters from a given course with index courseId
			message.channel.send(`Hi, here is a list of chapter in #${courseId}:`);
		}
	},
};
