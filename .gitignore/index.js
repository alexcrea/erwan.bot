const Discord = require('discord.js')
const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
const fs = require('fs');
const { version } = require("discord.js");
const moment = require("moment");
const YTDL = require("ytdl-core");
const url = require("url")
const GitHub = require( 'github-api');
const config = require("./config.json");



client.on('ready', function() {
	client.user.setActivity(`| --help | Heberger24/24 | En codage |`);
	console.log("Conections en cour")
});

client.login(config.token);

var gh = new GitHub({
  username: process.env.GITUSER,
  password: process.env.GITPW
});
let gist = gh.getGist(); // not a gist yet


client.on('message', async message => {
 
var msg = message
var points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));

 if(message.author.bot) return;
  if(message.channel.type === "dm") return;






let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);
var sender = message.author;


 if (message.content.indexOf(prefix + 'dé') === 0) {
   
 let cdseconds = 5;	
     var value = parseInt(message.content.split(' ')[1], 10)
     var min = 1, max = 6
     var botvalue = Math.floor(Math.random() * (max - min +1)) + min;
   
     if(value >= min && value <= max) {
     
     escapeAuthor = message.author.id
     
     joueur = {'tag':'','score':0,'date':0}
     var toto =  new Date().getTime()
     
     if(points['dé'][escapeAuthor] == undefined){
       points['dé'][escapeAuthor] = joueur
       
     }
     
     points['dé'][escapeAuthor].tag = sender.tag //+ ' ' + sender.username
     var derniereDate = points['dé'][escapeAuthor].date + 5000
       
     if(toto>derniereDate) {
       
       //ou : points['dé'][escapeAuthor].score += 1
       
       if (value==botvalue) {
       
       
         message.reply('GG tu a gagner');
         points['dé'][escapeAuthor].score = points['dé'][escapeAuthor].score + 1
         //if(data.deClassement == undefined) { data.deClassement = {}; }
         //escapeAuthor = message.author.username //.escapeSpecialChars()
       } else {
       
         message.reply(':game_die: Ta perdu il falllai faire '+botvalue)
       
       }
       save = true;
     } else {
       message.reply('il est trop tot pour rejouer')
     }
     
     points['dé'][escapeAuthor].date = toto
     }
     else {
   
     message.reply(':game_die: il faut rentrer un nombre entre 1 et 6');    
 
     }
 } else

if (message.content.indexOf(prefix + 'topdé') === 0) {
 
 var sortable = [];
 for (var user in points['dé']) {
   var pts = points['dé'][user].score;
   sortable.push([ user , pts]);
 }

 sortable.sort(function(b, a) {
   return a[1] - b[1];
 });

 
 var nombreDeJoueurAfficher = 0;
 var nombreDeJoueurAfficherMaximum = 10
 var classementTexte = ':trophy: Top 10 Des meilleur joueur \n '
 for(var position in sortable) {
   if(nombreDeJoueurAfficher <= nombreDeJoueurAfficherMaximum) {
   var userId = sortable[position][0]
 
   var pts = sortable[position][1]
   classementTexte = classementTexte + (parseInt(position)+1) + ' ' + points['dé'][userId].tag + '    Win  ' + pts + '\n'
   nombreDeJoueurAfficher = nombreDeJoueurAfficher + 1
   }
 }
 
 message.channel.send( classementTexte.replace('_', '\\_') )

}
    

console.log(JSON.stringify(points))
	
	/*
	console.log(fs.existsSync('./points.json'))
fs.writeFileSync('./points.json', JSON.stringify(points), (err) => {
 // if (err) 
	  console.error(err);
});

gist.create({
   public: true,
   description: 'My first gist',
   files: {
      'points.json': {
         content: JSON.stringify(points)
      }
   }
}).then(function(httpResponse) {
     var gistJson = httpResponse.data;
  console.log(gistJson);
})

*/
  fs.writeFile("./points.json", JSON.stringify(config), (err) => console.error);












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










 /* if(message.content == '--help') {

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

*/













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

