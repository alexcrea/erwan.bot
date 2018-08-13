const Discord = require('discord.js')
const bot = new Discord.Client();

var prefix = ("--")

bot.on('ready', function() {
	bot.user.setActivity(`jsui heberger Cool`);
	console.log("Conections en cour")
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

   if (message.content === prefix + "ping"){
   message.channel.send("est non je tes troll xD")
   
  }

});
