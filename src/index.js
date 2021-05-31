require("dotenv").config();
const { Client } = require("discord.js");
const { getVideos } = require("./youtube");
const {
	PREFIX,
	GREETING_TEXTS,
	HELP_RESPONSE,
	WRONG_QUERY_RESPONSE,
	NO_RESULT_RESPONSE,
} = require("./constants/botConstatnts");
const { getYouTubeLink } = require("./utils/youtube");

const client = new Client();

client.on("ready", () => {
	console.log(`${client.user.tag} has logged in`);
});

client.on("message", async (message) => {
	if (message.author.bot) return;

	// console.log(`[${message.author.username}]: ${message.content}`);

	if (GREETING_TEXTS.includes(message.content.toLowerCase().trim())) {
		message.channel.send(
			`Welcome  ${message.author.username} 🙂, Type **$help** to get a list of commands for the Dabble Bot`
		);
	}

	if (message.content.startsWith(PREFIX)) {
		const [CMD_NAME, ...args] = message.content
			.trim()
			.substring(PREFIX.length)
			.split(/\s+/);

		switch (CMD_NAME) {
			case "help":
				message.channel.send(HELP_RESPONSE);
				break;

			case "searchYT":
				try {
					if (args.length === 0) {
						return message.channel.send(WRONG_QUERY_RESPONSE);
					}

					const searchQuery = args.join(" ");
					const searchResult = await getVideos(searchQuery);

					if (searchResult.length === 0) {
						return message.channel.send(NO_RESULT_RESPONSE);
					}

					// Creating response message
					const responseText = searchResult
						.map((video) => getYouTubeLink(video.id.videoId))
						.join("\n");
					message.channel.send(responseText);
				} catch (e) {
					console.log(e);
					message.channel.send(
						"⚠️ Error: Please check if you have entered a valid command"
					);
				}
				break;

			default:
				message.channel.send(HELP_RESPONSE);
		}
	}
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
