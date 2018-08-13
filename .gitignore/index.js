const Discord = require('discord.js')
const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
const fs = require('fs');
const { version } = require("discord.js");
const moment = require("moment");


var prefix = ("--")

client.on('ready', function() {
	client.user.setActivity(`| --help | Heberger24/24 | En codage |`);
	console.log("Conections en cour")
});

client.login(process.env.TOKEN);

client.on('message', message => {

  let args1 = msg.content.split(" ").slice(1);

  let command = msg.content.split(" ")[0];
  command = command.slice(config.prefix.length);

 if (command === "--say") {
     msg.delete();
     msg.channel.sendMessage(args.join(" "));
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






  if(message.content == '--help') {

message.channel.send({embed: {
    color: 9247003,
    title: "Liste des commandes",
    description: "Commande",
    fields: [{
        name: "--ping",
        value: "Ton ping actuele (Grosse maintenance)",
      },
      {
        name: "--botinfo",
        value: "Toute les info sur le bot",
      }

   ]
	}
	
	});
	
       }


});
