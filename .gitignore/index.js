const Discord = require('discord.js')
const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
const fs = require('fs');
const { version } = require("discord.js");
const moment = require("moment");
const YTDL = require("ytdl-core");
const url = require("url")
let XP = JSON.parse(fs.readFileSync('./XP.json', 'utf8'));



var prefix = ("--")

client.on('ready', function() {
	client.user.setActivity(`| --help | Heberger24/24 | En codage |`);
	console.log("Conections en cour")
});

client.login(process.env.TOKEN);



client.on('message', message => {
 


let userData = XP[msg.author.id];
	if (!userData) userData = {XP: 0, level: 0};
	
	let userXP = XP[msg.author.id] ? XP[msg.author.id].XP : 0;
	let curLevel = Math.floor(0.1 * Math.sqrt(userXP));
	if (curLevel > userData.level) {
		userData.level = curLevel;
		msg.reply(`You have lvled ^ to lvl **${curLevel}**!`);
	}
	
	console.log("level")
	if (msg.content.startsWith(prefix + "level")) {
		msg.reply(`You are lvl ${userData.level}, with ${userData.XP} XP Right Now.`);
	}
	
	if (!XP[msg.author.id]) XP[msg.author.id] = {XP: 0, level: 0}
	
	
	
	console.log("Example")
	if (msg.content.startsWith(prefix + "killExample")) {
		userData.XP += 10
		msg.channel.sendMessage(`${msg.author} has killed an Example!`)
	}
	
	console.log(XP)
	fs.writeFile('./XP.json', JSON.stringify(XP), console.error);

var msg = message

 const guildArray = client.guilds.map((guild) => {
    return ` ${guild.name} : ${guild.id}`
    })

if (message.content === '--guildlist') {
  message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
   
 }

 if ((message.content.startsWith('--8ball')) && (message.content.endsWith('?'))) {
   var rnd = randomIntInc(1,5);
   console.log(rnd);
   if(rnd===1) message.channel.sendMessage("No.");
   else if(rnd===2) message.channel.sendMessage("Pas probable");
   else if(rnd===3) message.channel.sendMessage("Peut être.");
   else if(rnd===4) message.channel.sendMessage("Probablement.");
   else if(rnd===5) message.channel.sendMessage("Oui.");
 };

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
 
 
 
});
