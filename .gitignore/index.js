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

var msg = message 
function doMagic8BallVoodoo() {
    var rand = ['8ball: Absolument. ',': 8ball: Absolument pas. ',': 8ball: C\'est vrai. ',': 8ball: Impossible. ',': 8ball: Bien sûr. ',': 8ball so. ',': 8ball: C\'est vrai. ',': 8ball: Ce n\'est pas vrai. ',': 8ball: Je suis très certain de cela. ',': 8ball: J\'en doute beaucoup. ' , ': 8ball: Les sources pointent vers no.', ': 8ball: Les théories le prouvent.', ': 8ball: Réponse hazy essaie encore', ': 8ball: Demande encore plus tard', ': 8ball ',': 8ball: ne peut pas prédire maintenant ',': 8ball: se concentrer et demander à nouveau'];

 if(message.content == '--8ball') {
    msg.channel.sendMessage(doMagic8BallVoodoo())
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
