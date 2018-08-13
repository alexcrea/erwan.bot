const Discord = require('discord.js')
const client = new Discord.Client();

var prefix = ("--")

client.on('ready', function() {
	client.user.setActivity(`jsui heberger Cool`);
	console.log("Conections en cour")
});

client.login(process.env.TOKEN);

client.on('message', message => {

   if (message.content === prefix + "ping"){
   message.channel.send("est non je tes troll xD")
   
  }

});
