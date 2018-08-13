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

if(message.content == '--duel') {
    //checks if the username to fight is in the message
    let author1 = message.author.username;
    let user = message.mentions.users.first();
    if(!user) return message.reply("vous n'avez pas précisé qui vous aimeriez combattre!");

    //checks if the users is trying to fight themselves
    if(user.id == message.author.id) return message.reply('vous ne pouvez pas vous battre vous-même!');

    //checks if the user is trying to fight the bot
    if(user.bot ==  true)
        return message.reply('vous ne pouvez pas combattre un bot!');

    //saves the two user ids to variables
    var fighter1 = message.author.id;
    var fighter2 = user.id;

    //announces challenge and awaits response
    var challenged = user.toString();
    message.channel.send(`${challenged}, ${author1} vous a défié à un duel. Acceptez-vous le défi, oui ou non?`)
        .then(() => {
            message.channel.awaitMessages(response => response.content == 'oui' && response.author.id == fighter2 || response.content == 'non' && response.author.id == fighter2, {
                max: 1,
                time: 60000,
                errors: ['time'],
            })
            .then((collected) => {
                if (collected.first().content == 'oui') {
                    message.channel.send(`${challenged} a accepté le défi! `);
                }
                else if(collected.first().content == 'non') {
                    message.channel.send(`Nan`);
                }
            })
            .catch(() => {
                message.channel.send(`Pas de réponse. Le combat a été annulé.`);
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
