const Discord = require('discord.js')
const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
const fs = require('fs');
const { version } = require("discord.js");
const moment = require("moment");


var prefix = ("--")

client.on('ready', function() {
	client.user.setActivity(`jsui heberger Cool`);
	console.log("Conections en cour")
});

client.login(process.env.TOKEN);

client.on('message', message => {

var msg = message 

if(command === `${prefix}fight`) {
    //checks if the username to fight is in the message
    let author1 = message.author.username;
    let user = message.mentions.users.first();
    if(!user) return message.reply("you did not specify who you would like to fight!");

    //checks if the users is trying to fight themselves
    if(user.id == message.author.id) return message.reply('you cannot fight yourself!');

    //checks if the user is trying to fight the bot
    if(user.bot ==  true)
        return message.reply('you cannot fight a bot!');

    //saves the two user ids to variables
    var fighter1 = message.author.id;
    var fighter2 = user.id;

    //announces challenge and awaits response
    var challenged = user.toString();
    message.channel.send(`${challenged}, ${author1} has challenged you to a duel. Do you accept the challenge, yes or no?`)
        .then(() => {
            message.channel.awaitMessages(response => response.content == 'yes' && response.author.id == fighter2 || response.content == 'no' && response.author.id == fighter2, {
                max: 1,
                time: 60000,
                errors: ['time'],
            })
            .then((collected) => {
                if (collected.first().content == 'yes') {
                    message.channel.send(`${challenged} has accepted the challenge!`);
                }
                else if(collected.first().content == 'no') {
                    message.channel.send(`nope`);
                }
            })
            .catch(() => {
                message.channel.send(`No response. Fight has been cancelled.`);
            });
        });       
}

 if (message.content === '--ping') {
  message.channel.send(`**${message.author.username} Pong! \nLa latence est** ${msg.createdTimestamp - message.createdTimestamp}ms`)
   
 }

 
 
 
   if(message.content == '--botinfo') {

	
    message.channel.send({embed: {
        color: 9247003,
        title: "Information",
        description: "Information de Erwan.Bot ",
        fields: [{
            name: `***:robot:Nom***`,
            value:`Erwan.Bot `
          },
        {
                    name: ':desktop: Servers',
                    value: `${client.guilds.size.toLocaleString()}`,
          },
         {
                    name: ':baby: Users',
                    value: `${client.guilds.reduce((mem, g) => mem += g.memberCount, 0)}`,
           },
        {
                    name: ':keyboard: Channels',
                    value: `${client.channels.size.toLocaleString()}`,
          },
        {
                    name: ':ping_pong:Ping',
                    value: `${client.ping.toFixed(0)}ms`,
          },
	 {
                    name: ':timer:Onligne Timer',
                    value: `${duration}`,
          },
          {
                    name: ':computer:Node.js Versions',
                    value: `${process.version}`,
           },
        {
                    name: ':thinking: RAM usage',
                    value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
          }
       
    
          
          
        
      ]
	}
	
	});
	
       }

});
