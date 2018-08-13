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



if (message.content.startsWith(prefix + "global")) {
    let xoargs = message.content.split(" ").slice(1);
    let xo03 = xoargs.join(" ")
    var xo02 = message.guild.channels.find('name', 'Channel name');
    if (!xo02) return message.reply(`the channel "channel name" does not exist!`)
    if (message.channel.name !== 'redtchat') return message.reply('command to be made in the "channel name "')
                if (!xo03) return message.reply('You must write a message")
                    message.delete();
                    var tchat_embed = new Discord.RichEmbed()
                        .setColor("#677BC4")
                        .setTitle("RedChat Global")
                        .setThumbnail(`${message.author.displayAvatarURL}`)
                        .addField("Name of user:", message.author.username + "#" + message.author.discriminator, true)
                        .addField("From server", message.guild.name, true)
                        .addField("Message:", "**-----------------------------------------------------------**")
                        .addField(`${xo03}`, `**------------------------------------------------------------**`)
                        .setTimestamp()
                    bot.channels.findAll('name', 'channel name').map(channel => channel.send(tchat_embed))
                }


var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
//message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Heure:\` \`${today.toString().split(" ")[4]}\``)

 if (message.content === '--date') {
  message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Heure:\` \`${today.toString().split(" ")[4]}\``)
   
 }


 if (message.content === '--ping') {
  message.channel.send(`**${message.author.username} Pong! \nLa latence est** ${msg.createdTimestamp - message.createdTimestamp}ms`)
   
 }

 if (message.content === '--invite') {
   message.channel.send("Il semble que vous vouliez m\'inviter sur votre serveur. Vérifiez vos DM.")
    msg.author.send("https://discordapp.com/oauth2/authorize?client_id=468140538537967626&scope=bot&permissions=14")
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
      },
	 {
        name: "--date",
        value: "Je te donne la date est l'heure",
      },
	{
        name: "--invite",
        value: "Pour inviter mon bot sur ton serveur",
      }

   ]
	}
	
	});
	
       }


});
