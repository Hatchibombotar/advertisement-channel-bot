// require dependencies
const Discord = require("discord.js")
const config = require('./config.json');

// set up discord client
const client = new Discord.Client()
client.login(config.token)

// log when bot is running
client.once("ready", () => console.log("bot running"))

// move messages
client.on("message", message => {

	if (
		message.channel.id != config.advertisment_id ||
		message.author.id == client.user.id ||
		message.attachments.array().length > 0 ||
		message.content.includes("http://") ||
		message.content.includes("https://")

	) return

	message.author.send("Hey! Your message was deleted because it didn't contain an image or link. I have sent it here for you to copy!");
	message.author.send("`" + message.content + "`");
	message.delete()
})
