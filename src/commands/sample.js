module.exports = {
	name: "sample",
	description: "sample command setup",
	args: true,
	usage: "<any text>",
	guildOnly: false,
	cooldown: 2,
	async execute(message, args) {
		message.channel.send(`Hi, your aruments are ${args.join(",")}`);
	},
};
