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

 var points = JSON.parse(fs.readFileSync('\\erwan.bot\\.gitignore\\point.json'utf8'));
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

















fs.writeFile('\\erwan.bot\\.gitignore\\point.json', JSON.stringify(points), (err) => {
  if (err) console.error(err);
});

   if (message.content === prefix + "ping"){
   message.channel.send("est non je tes troll xD")
   
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
                    name: ':computer:Discord.js Versions',
                    value: `v${version}`,
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
