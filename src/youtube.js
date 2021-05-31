require("dotenv").config();
const axios = require("axios");

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

	console.log(requestConfig);
	const res = await axios(requestConfig);

	if (res.status !== 200 || res.data.pageInfo.totalResults === 0) return [];

	return res.data.items;
};

module.exports = {
	getVideos,
};
