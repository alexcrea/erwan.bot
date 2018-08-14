const Discord = require('discord.js')
const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
const fs = require('fs');
const { version } = require("discord.js");
const moment = require("moment");
const YTDL = require("ytdl-core");
const url = require("url")

var prefix = ("--")

client.on('ready', function() {
	client.user.setActivity(`| --help | Heberger24/24 | En codage |`);
	console.log("Conections en cour")
});

client.login(process.env.TOKEN);

function play(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {
        filter: "audioonly"
    }));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });

}
var servers = {};

client.on('message', message => {
 
var msg = message

 const guildArray = client.guilds.map((guild) => {
    return ` ${guild.name} : ${guild.id}`
    })

if (message.content === '--guildlist') {
  message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
   
 }


//var today = new Date()
//let Day = today.toString().split(" ")[0].concat("day");
//let Month = today.toString().split(" ")[1]
//let Year = today.toString().split(" ")[3]
//message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Heure:\` \`${today.toString().split(" ")[4]}\``)

 //if (message.content === '--date') {
  //message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Heure:\` \`${today.toString().split(" ")[4]}\``)
   
// }


 if (message.content === '--ping') {
  message.channel.send(`**${message.author.username} Pong! \nLa latence est** ${msg.createdTimestamp - message.createdTimestamp}ms`)
   
 }

 if (message.content === '--invite') {
   message.channel.send("Il semble que vous vouliez m\'inviter sur votre serveur. Vérifiez vos DM.")
    msg.author.send("https://discordapp.com/oauth2/authorize?client_id=468140538537967626&scope=bot&permissions=14")
  }
 
 
 
});
