const PREFIX = "$";

const GREETING_TEXTS = [
	"hello",
	"test",
	"hi",
	"help",
	"hello!",
	"hii",
	"dabblelab",
];

const HELP_RESPONSE = `Just enter a command with a **$** prefix and get the result.
**Following commannds are supported:**
**$help**: List of all commands
**$searchYT [a search query e.g how to build a discord bot]**: Returns a list of youtube videos related to the query,
`;

const WRONG_QUERY_RESPONSE =
	"🤖 Sorry, you did not enter any search query text! Please try again!!";

const NO_RESULT_RESPONSE = "😕 Sorry, no videos found!!";

module.exports = {
	PREFIX,
	GREETING_TEXTS,
	HELP_RESPONSE,
	WRONG_QUERY_RESPONSE,
	NO_RESULT_RESPONSE,
};
