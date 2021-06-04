require("dotenv").config();
const axios = require("axios");
const { NO_RESULT_RESPONSE } = require("../constants/botConstatnts");
const { getYouTubeLink } = require("../utils/youtube");

const API_BASE_URL = `https://youtube.googleapis.com/youtube/v3`;
const API_SEARCH_URL = "/search";
const KEY = process.env.YOUTUBE_DATA_API_KEY;
const CHANNEL_ID = process.env.DABBLELAB_CHANNEL_ID;
const PART = "snippet";
const RESULT_LIMIT = 3;

const getVideos = async (query) => {
	const requestConfig = {
		method: "get",
		url: API_BASE_URL + API_SEARCH_URL,
		params: {
			part: PART,
			channelId: CHANNEL_ID,
			key: KEY,
			type: "video",
			maxResults: RESULT_LIMIT,
			q: query,
		},
	};

	// console.log(requestConfig);
	const res = await axios(requestConfig);

	if (res.status !== 200 || res.data.pageInfo.totalResults === 0) return [];

	return res.data.items;
};

module.exports = {
	name: "yt-test",
	description: "Search videos from dabbleLab's youtube channel!",
	args: true,
	usage: "<search term e.g Discord Bot Tutorial>",
	guildOnly: false,
	cooldown: 2,
	execute: async (message, args) => {
		try {
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
	},
};
