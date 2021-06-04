const PREFIX = "//";

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

const DABBLELAB_LOGO_ORANGE =
	"https://user-images.githubusercontent.com/28767301/120794431-dc122200-c555-11eb-8d94-f946a9f76a46.png";

const DABBLELAB_LOGO_NEW =
	"https://user-images.githubusercontent.com/28767301/120794561-07950c80-c556-11eb-8ef8-ab74687a6b70.png";

module.exports = {
	PREFIX,
	GREETING_TEXTS,
	HELP_RESPONSE,
	WRONG_QUERY_RESPONSE,
	NO_RESULT_RESPONSE,
	DABBLELAB_LOGO_ORANGE,
	DABBLELAB_LOGO_NEW,
};
