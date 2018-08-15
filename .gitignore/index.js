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



client.on('message', async message => {
 
var msg = message









let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);






if(cmd === `${prefix}botinfo`){

let bicon = bot.user.displayAvatarURL;
let botembed = new Discord.RichEmbed()
 .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
}













 if (msg.content === '--test') {
    msg.channel.send('Orig msg...')
     .then(nmsg => nmsg.edit('┬─┬ノ( º _ ºノ)'))
      .then(nmsg => nmsg.edit('(°-°)\\ ┬─┬'))
      .then(nmsg => nmsg.edit('(╯°□°)╯    ]'))
      .then(nmsg => nmsg.edit('(╯°□°)╯  ︵  ┻━┻'));
   
   
  }


 const guildArray = client.guilds.map((guild) => {
    return `${guild.memberCount} : ${guild.name} : ${guild.id}`
    })


if (message.content === '--guildlist') {
  message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
   
 }

 







if (message.content === '--chanellinfo') {
  message.channel.send(`${msg.channel.id}`)
   
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


let user;
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	// Define the member of a guild.
    const member = message.guild.member(user);

if(message.content == '--userinfo') {

message.channel.send({embed: {
    color: 9247003,
    title: "Info Du Joueur",
    description: "info",
    fields: [{
        name: `${user.username}#${user.discriminator}`,
        value: `ID : ${user.id}`,
      },
      {
        name: `Nom : ${member.nickname !== null ? `${member.nickname}` : 'None'}`,
        value: `Crée le : ${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`,
      },
	 {
        name:  `A rejoins le server : ${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`,
        value: `Status : ${user.presence.status}`,
      },
	{
        name: `Game : ${user.presence.game ? user.presence.game.name : 'None'}`,
        value: member.roles.map(roles => `${roles.name}`).join(', '),
      }

   ]
	}
	
	});
	
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
 
  if (message.content === '--edit') {
  message.channel.send('Si tu le dit')
    message.edit('Voilat chef')
 }
 
});

//client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
 // console.log(`Une Nouvelle guilde a ajouter mon bot : ${guild.name} (id: ${guild.id}). Cette guilde a ${guild.memberCount} Membre!`);
// guild.channels.get('479011053494337538').send('**Une Nouvelle guilde a ajouter mon bot : ${guild.name} (id: ${guild.id}). Cette guilde a ${guild.memberCount} Membre!**');
//});

