module.exports = {
	name: "test",
	description: "test if the code is working or not!",
	args: true,
	usage: "<any text>",
	guildOnly: false,
	cooldown: 2,
	async execute(message, args) {
		message.channel.send(`Hi, your aruments are ${args.join(",")}`);
	},
};
