const Discord = require('discord.js')
const bot = new Discord.Client();

var prefix = ("--")

bot.on('ready', function() {
	bot.user.setActivity(`jsui heberger Cool`);
	console.log("Conections en cour")
});

bot.login('NDY4MTQwNTM4NTM3OTY3NjI2.Di49Gw._SlpwQY-RWE9r1hn5iBCs_r4NmE');

bot.on('message', message => {

   if (message.content === prefix + "ping"){
   message.channel.send("est non je tes troll xD")
   
  }

});
