require("dotenv").config();
const { default: axios } = require("axios");
var validUrl = require("valid-url");

const { Client } = require("discord.js");

const client = new Client();
const PREFIX = "$";

client.on("ready", () => {
	console.log(`${client.user.tag} has logged in`);
});

client.on("message", async (message) => {
	if (message.author.bot) return;

	console.log(`[${message.author.username}]: ${message.content}`);

	if (
		["hello", "test", "hi", "help", "hello!", `hii`].includes(
			message.content.toLowerCase().trim()
		)
	) {
		message.channel.send(
			`Welcome  ${message.author.username} 🙂, Type **$help** to get a list of commands for the Dabble Bot`
		);
	}

	if (message.content.startsWith(PREFIX)) {
		const [CMD_NAME, ...args] = message.content
			.trim()
			.substring(PREFIX.length)
			.split(/\s+/);

		console.log(CMD_NAME);

		switch (CMD_NAME) {
			case "help":
				message.channel
					.send(`Just enter a command with a **$** prefix and get the result.
**Following commannds are supported:**
**$help**: List of all commands
**$searchYT [a search query e.g how to build a discord bot]**: Returns a list of youtube videos related to the query,
`);
				break;

			case "searchYT":
				try {
					message.channel.send("Your command is received");
				} catch (e) {
					console.log(e);
					message.channel.send(
						"⚠️ Error: Please check if you have entered a valid command"
					);
				}
				break;

			default:
				message.channel.send(`**Following commannds are supported:**
**$help**: List of all commands
**$searchYT [a search query e.g how to build a discord bot]**: Returns a list of youtube videos related to the query,
`);
		}
	}
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
