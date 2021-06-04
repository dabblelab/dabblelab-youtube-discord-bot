require("dotenv").config();
const fs = require("fs");
const Discord = require("discord.js");
const { PREFIX } = require("./constants/botConstatnts");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
	.readdirSync(__dirname + "/commands")
	.filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.on("ready", () => {
	console.log(`${client.user.tag} has logged in`);
});

client.on("message", async (message) => {
	if (!message.content.startsWith(PREFIX) || message.author.bot) return;

	const args = message.content.slice(PREFIX.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${PREFIX}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (command.guildOnly && message.channel.type === "dm") {
		return message.reply("I can't execute that command inside DMs!");
	}

	try {
		console.log("command execution begin");
		command.execute(message, args);
		console.log("command executed");
	} catch (error) {
		console.error(error);
		message.reply("there was an error trying to execute that command!");
	}
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
