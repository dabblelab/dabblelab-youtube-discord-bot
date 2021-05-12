require("dotenv").config();
const { default: axios } = require("axios");
var validUrl = require("valid-url");

const { Client } = require("discord.js");

const client = new Client();
const PREFIX = "$";

// Weather
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const WEATHER_API_KEY = `&appid=${process.env.OPENWEATHER_KEY}&units=metric`;

// NLP
const NLP_API_URL = "https://api.meaningcloud.com/sentiment-2.1";
const NLP_API_KEY = process.env.MEANINGCLOUD;

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

		switch (CMD_NAME.toLocaleLowerCase()) {
			case "help":
				message.channel
					.send(`Just enter a command with a **$** prefix and get the result.
        Following commannds are supported:
        **$help**: List of all commands
        **$weather 10001**: Returns the weather of the specified US zip,
        **$nlp [website URL]**: Returns the result of sentiment analysis of the specified URL,
        **$searchImage apple**: Display an image of the searched item`);
				break;

			case "weather":
				try {
					const weatherData = await axios.get(
						`${WEATHER_API_URL}${args[0]}${WEATHER_API_KEY}`
					);
					// console.log(weatherData);

					message.channel.send(`🌤 **Weather information:**
📌 **Place:** ${weatherData.data.name}
📌 **Wind:** speed=${weatherData.data.wind.speed}  deg=${weatherData.data.wind.deg} gust=${weatherData.data.wind.gust}
📌 **Temperature:** ${weatherData.data.main.temp} °C
📌 **Min Temperature:** ${weatherData.data.main.temp_min} °C
📌 **Max Temperature:** ${weatherData.data.main.temp_max} °C
📌 **Pressure:** ${weatherData.data.main.pressure}
📌 **Humidity:** ${weatherData.data.main.humidity}
`);
				} catch (e) {
					console.log(e);
					message.channel.send(
						"⚠️ Error: Please check if you have entered a valid US zip code"
					);
				}
				break;

			case "nlp":
				try {
					if (!validUrl.isUri(args[0])) {
						throw new Error("Invalid URL passed");
					}

					const nlpData = await axios.get(
						`${NLP_API_URL}?key=${NLP_API_KEY}&of=json&txt=${args[0]}&lang=en`
					);
					console.log(nlpData);

					const {
						model,
						score_tag,
						agreement,
						subjectivity,
						confidence,
						irony,
					} = nlpData.data;

					message.channel
						.send(`🤖 **Sentiment analysis of the provided URL content:**
📌 **Model:** ${model}
📌 **Score Tag:** ${score_tag}
📌 **Agreement:** ${agreement}
📌 **Subjectivity:** ${subjectivity}
📌 **Confidence :** ${confidence}
📌 **Irony:** ${irony}
`);
				} catch (e) {
					console.log(e);
					message.channel.send(
						"⚠️ Error: Please check if you have entered a valid URL"
					);
				}

				break;

			case "searchImage":
				break;

			default:
				message.channel.send(`Following commannds are supported:
        $help: List of all commands
        $weather 10001: Returns the weather of the specified US zip,
        $nlp [website URL]: Returns the result of sentiment analysis of the specified URL,
        $searchImage apple: Display an image of the searched item`);
		}
	}
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
