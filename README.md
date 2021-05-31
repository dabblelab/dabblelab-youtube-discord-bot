# Dabble Discord Bot

> Discord bots are AIs that can perform a number of useful automated tasks and Discord bot commands on your server, such as welcoming new members, moderating content, and banning rule breakers.

**DabbleBot is a discord bot which has the following features-**

1. Greet users when they text Hi, Hello etc. in any channel.

![](https://user-images.githubusercontent.com/28767301/118215254-d2cdf200-b48e-11eb-8be9-6993e65bcd16.png)

2. It supports multiple commands to enable users do various things as shown below-

**Following commannds are supported:**

- `$help`: List of all commands

![](https://user-images.githubusercontent.com/28767301/118215252-d2355b80-b48e-11eb-9e67-a9b9884cd3ed.png)

- `$searchYT [a search query e.g how to build a discord bot]`: Returns a list of youtube videos related to the query from DabbleLab's YouTube channel

## How to try this BOT?

You can either run this bot locally and install it in your own discord server or just join my discord servre to play with it.

Here is our discord server, feel free to join it: [https://discord.gg/GSq4q6e4TY](https://discord.gg/GSq4q6e4TY)

## Instructions

To develop this discord bot locally, follow the instructions:

1. Install all dependencies:

   `npm i`

2. Create a `.env` same as the `.env.example` file for environment variables in the root directory of this repository, not inside the `src` folder!

3. It will contain these three environment variables:

   - **DISCORDJS_BOT_TOKEN** - Your Bot Token
   - **YOUTUBE_DATA_API_KEY** - YouTube data API key obtained from [here](https://developers.google.com/youtube/v3/quickstart/nodejs#step_1_turn_on_the)

4. Run `npm run start` or `npm run dev` in the project directory

## Author

**Shubham Prakash**

🌐 [https://shubhamprakash.dev/](https://shubhamprakash.dev/)
