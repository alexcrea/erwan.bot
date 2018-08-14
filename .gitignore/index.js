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


var sender = message.author;

 var points = JSON.parse(fs.readFileSync('erwan.bot/.gitignore/point.json', 'utf8'));



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
    


fs.writeFile('erwan.bot/.gitignore/point.json', JSON.stringify(points), (err) => {
  if (err) console.error(err);
});





















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
