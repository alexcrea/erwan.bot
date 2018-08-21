const Discord = require('discord.js')
const client = new Discord.Client({fetchAllMembers:true});
const { Client, MessageAttachment } = require('discord.js');
const fs = require('fs');
const { version } = require("discord.js");
const moment = require("moment");
const YTDL = require("ytdl-core");
const url = require("url")
const GitHub = require( 'github-api');
const config = require ('./config.json')



client.on('ready', function() {
	client.user.setActivity(`| --help | Heberger24/24 | En codage |`);
	console.log("Conections en cour")

});

client.login(process.env.TOKEN);


client.on('message', async message => {
 
var prefix = "--";
var msg = message
var points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));

 if(message.author.bot) return;
  if(message.channel.type === "dm") return;






let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);
var sender = message.author;

/*
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


  fs.writeFile("./points.json", JSON.stringify(points), (err) => console.error);


*/









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
if(message.author.id !== config.ownerID) return;
  message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
 
 



 }

 







if (message.content === '--chanellinfo') {
  message.channel.send(`${msg.channel.id}`)
   
 }










  if(message.content == '--help') {

message.channel.send("Vérifiez vos DM.")

msg.author.send({embed: {
    color: 9247003,
    title: "--help \<Nom\>",
    description: "Commande help",
    fields: [{
        name: "--help fun",
        value: "Toute les Commande Fun (pas encore sorti)",
      },
      {
        name: "--help info",
        value: "Toute les Comande Informations ",
      },
	 {
        name: "--help admin",
        value: "Toute Les Command De Modérations (pas encore sorti) ",
      }
	

   ]
	}
	
	});
	
       }

 if(message.content == '--help info') {
message.channel.send("Vérifiez vos DM.")
msg.author.send({embed: {
    color: 9247003,
    title: "--help info",
    description: "Commande info",
    fields: [{
        name: "--invite",
        value: "Je te donne une invite pour ajouter mon bot",
      },
      {
        name: "--botinfo",
        value: "Toute les info sur le bot",
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










var isPlaying = false
//The variable round is a placeholder for now, is increased every round.
var round = 0
//Empty variable for stats.
var stats = {}
//Starts the bot.

  //If the enemy is under 1 hp they die.
  if(stats.HP < 1 && isPlaying == true) {
    isPlaying = false
    round = 0
    msg.channel.sendMessage('Good job, you killed the foe.')

  }
  //If you are under 1 hp, you die.
  if(stats.plrHP < 1 && isPlaying == true) {
    isPlaying = false
    round = 0
    msg.channel.sendMessage('You died!')
  }
              var input = msg.content.toLowerCase();
//Starts the game and sets the stats.
if(input === prefix + "start" && isPlaying == false) {
  //Here is the enemy creation framework.
  stats.enemies = ['Titan', 'Green Slime', 'Demon', 'Mage', 'Blue Slime', 'Red Slime', 'Goblin', 'Skeleton']
    stats.enemy = stats.enemies[Math.floor(Math.random() * stats.enemies.length)]
    //Copy this IF statement and add your enemy to the stats.enemies array, then change Slime to your new enemy.
    //stats.HP is how much health the new enemy will have, and attackMul is multiplies the damage by your number.
  if(stats.enemy == 'Green Slime') {
    stats.attackMul = 1.0
      stats.HP = 30
  }
  if(stats.enemy == 'Blue Slime') {
    stats.attackMul = 1.25
      stats.HP = 35
  }
  if(stats.enemy == 'Red Slime') {
    stats.attackMul = 1.50
      stats.HP = 40
  }
  if(stats.enemy == 'Titan') {
    stats.attackMul = 0.5
      stats.HP = 65
  }
  if(stats.enemy == 'Demon') {
    stats.attackMul = 2.5
      stats.HP = 35
  }
  if(stats.enemy == 'Mage') {
    stats.attackMul = 3.0
      stats.HP = 25
  }
  if(stats.enemy == 'Goblin') {
    stats.attackMul = 1.25
      stats.HP = 45
  }
  if(stats.enemy == 'Skeleton') {
    stats.attackMul = 0.75
      stats.HP = 50
  }
  stats.cooldown = 1
  stats.cooldown = 1
  round = round + 1
  isPlaying = true

  stats.plrHP = 40
  stats.maxHP = stats.plrHP
  stats.Mana = 50
stats.fireUsed = 0
  stats.onFire = false
  msg.channel.sendMessage(stats.enemy + '\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nYour Mana ' + stats.Mana + '\nAttack? Heal? Fireball? Shield? Leech?')
}

//Attacks the foe.
if(input === "attack" && isPlaying == true) {

  if(stats.attackMul == 0.5) {
      attackDmg = Math.floor(Math.random() * 16) + 3 / 2
  }
  if(stats.attackMul == 0.75) {
    attackDmg = Math.floor(Math.random() * 16) + 3 / 3

  }
  if(stats.attackMul != 0.5) {
        attackDmg = Math.floor(Math.random() * 16) + 3 * stats.attackMul
  }
  if(stats.attackMul != 0.75) {
        attackDmg = Math.floor(Math.random() * 16) + 3 * stats.attackMul
  }
  stats.attackChance = ['1', '2', '3', '4', '1', '1', '1', '1', '1', '1']
  stats.missChance = stats.attackChance[Math.floor(Math.random() * stats.attackChance.length)]
  if(stats.missChance == 10) {
    msg.channel.sendMessage('You missed and lost a turn.')
    stats.plrHP = stats.plrHP - attackDmg
      msg.channel.sendMessage('Ouch! The ' + stats.enemy + ' hit you for ' + attackDmg + ' damage.')
      round = round + 1
          stats.cooldown = 1
                    stats.cooldown2 = 1
      if(stats.onFire == true && isPlaying == true) {
            msg.channel.sendMessage('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')
        stats.toTakeAway = 5 * stats.fireUsed
    stats.HP = stats.HP - stats.toTakeAway

    msg.channel.sendMessage('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')
      }

      msg.channel.sendMessage(stats.enemy + '\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nYour Mana ' + stats.Mana + '\nAttack? Heal? Fireball? Shield? Leech?')
  }
  if(stats.missChance != 10) {
    stats.plrHP = stats.plrHP - attackDmg
      msg.channel.sendMessage('Ouch! The ' + stats.enemy + ' hit you for ' + attackDmg + ' damage.')
      round = round + 1
          stats.cooldown = 1
          msg.channel.sendMessage('You did ' + attackDmg + ' damage.')
          stats.HP = stats.HP - attackDmg
          stats.cooldown2 = 1
      if(stats.onFire == true && isPlaying == true) {
        var attackDmg = Math.floor(Math.random() * 15) + 4

        stats.toTakeAway = 5 * stats.fireUsed
    stats.HP = stats.HP - stats.toTakeAway

    msg.channel.sendMessage('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')
      }
      msg.channel.sendMessage(stats.enemy + '\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nYour Mana ' + stats.Mana + '\nAttack? Heal? Fireball? Shield? Leech?')
  }

}

//If you say "heal" and you have enough Mana this code will execute.
if(input === "heal" && isPlaying == true && stats.Mana > 24) {
  var heal = Math.floor(Math.random() * 13) + 6
  stats.test = heal + stats.plrHP
  stats.plrHP = stats.plrHP + heal
  stats.Mana = stats.Mana - 25
  msg.channel.sendMessage('You healed for ' + heal + ' hitpoints and used 25 mana.')
  msg.channel.sendMessage('The foe didn\'t attack.')
  round = round + 1
      stats.cooldown = 1
                stats.cooldown2 = 1
  if(stats.onFire == true && isPlaying == true) {
    stats.toTakeAway = 5 * stats.fireUsed
stats.HP = stats.HP - stats.toTakeAway

msg.channel.sendMessage('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')
  }
  msg.channel.sendMessage(stats.enemy + '\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nYour Mana ' + stats.Mana + '\nAttack? Heal? Fireball? Shield? Leech?')
}
//If you dont have enough mana this triggers.
if(input === "heal" && isPlaying == true && stats.Mana < 25) {
msg.channel.sendMessage('You don\'t have enough Mana!')
}
if(input === "fireball" && isPlaying == true && stats.Mana > 5) {

  if(stats.attackMul == 0.5) {
      attackDmg = Math.floor(Math.random() * 16) + 3 / 2
  }
  if(stats.attackMul == 0.75) {
    attackDmg = Math.floor(Math.random() * 16) + 3 / 3

  }
  if(stats.attackMul != 0.5) {
        attackDmg = Math.floor(Math.random() * 16) + 3 * stats.attackMul
  }
  if(stats.attackMul != 0.75) {
        attackDmg = Math.floor(Math.random() * 16) + 3 * stats.attackMul
  }
  stats.attackChance = ['1', '1', '1', '1', '5', '1', '1', '1', '1', '1']
  stats.missChance = stats.attackChance[Math.floor(Math.random() * stats.attackChance.length)]
  if(stats.missChance == 5) {
    msg.channel.sendMessage('You missed and lost a turn.')
  stats.plrHP = stats.plrHP - attackDmg
  msg.channel.sendMessage('Ouch! The ' + stats.enemy + ' hit you for ' + attackDmg + ' damage.')
  round = round + 1
    stats.cooldown = 1
              stats.cooldown2 = 1
  if(stats.onFire == true && isPlaying == true) {
    stats.toTakeAway = 5 * stats.fireUsed
stats.HP = stats.HP - stats.toTakeAway
}
  msg.channel.sendMessage(stats.enemy + '\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nYour Mana ' + stats.Mana + '\nAttack? Heal? Fireball? Shield? Leech?')



} else {
  var attackDmg = Math.floor(Math.random() * 6) + 2
stats.fireUsed = stats.fireUsed + 1
  stats.Mana = stats.Mana - 3
      stats.cooldown = 1
          stats.cooldown2 = 1
  msg.channel.sendMessage('You shot a fireball at the enemy and used 5 mana.')
  stats.onFire = true
  if(stats.onFire == true && isPlaying == true) {
    stats.toTakeAway = 5 * stats.fireUsed
stats.HP = stats.HP - stats.toTakeAway

msg.channel.sendMessage('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')
  }
  stats.plrHP = stats.plrHP - attackDmg
  msg.channel.sendMessage('Ouch! The ' + stats.enemy + ' hit you for ' + attackDmg + ' damage.')
  round = round + 1
  msg.channel.sendMessage(stats.enemy + '\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nYour Mana ' + stats.Mana + '\nAttack? Heal? Fireball? Shield? Leech?')
}
}

//If you dont have enough mana this triggers.
if(input === "fireball" && isPlaying == true && stats.Mana < 5) {
msg.channel.sendMessage('You don\'t have enough Mana!')
}


if(input === "shield" && isPlaying == true && stats.Mana > 5 && stats.cooldown == 1) {

  msg.channel.sendMessage('You blocked the incoming attack.')
  attackDmg = 0.5
  stats.plrHP = stats.plrHP - attackDmg
  msg.channel.sendMessage('The shield blocked most of the damage from the ' + stats.enemy + ' but you still lost ' + attackDmg + ' HP.')
  round = round + 1
  stats.cooldown = 1
  stats.cooldown2 = 1
  if(stats.onFire == true && isPlaying == true) {
                stats.toTakeAway = 5 * stats.fireUsed
        stats.HP = stats.HP - stats.toTakeAway

    msg.channel.sendMessage('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')


  }
  msg.channel.sendMessage(stats.enemy + '\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nYour Mana ' + stats.Mana + '\nAttack? Heal? Fireball? Shield? Leech?')



}
if(input === 'shield' && stats.cooldown == 0) {
  msg.channel.sendMessage('The shield is on cooldown.')
}

if(input === "leech" && isPlaying == true && stats.Mana > 9 && stats.cooldown2 == 1) {
  var heal = Math.floor(Math.random() * 5) + 2
  stats.test = heal + stats.plrHP
  stats.HP = stats.HP - heal
  stats.plrHP = stats.plrHP + heal
  stats.Mana = stats.Mana - 10
  msg.channel.sendMessage('You leeched the enemy for ' + heal + ' hitpoints and used 10 mana.')
  msg.channel.sendMessage('The foe didn\'t attack.')
  round = round + 1
    stats.cooldown2 = 0
      stats.cooldown = 1
  if(stats.onFire == true && isPlaying == true) {
    stats.toTakeAway = 5 * stats.fireUsed
stats.HP = stats.HP - stats.toTakeAway

msg.channel.sendMessage('The foe is on fire and lost ' + stats.toTakeAway + ' hitpoints!')
  }
  msg.channel.sendMessage(stats.enemy + '\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nYour Mana ' + stats.Mana + '\nAttack? Heal? Fireball? Shield? Leech?')
}
if(input === 'leech' && stats.cooldown2 == 0) {
  msg.channel.sendMessage('Leech is on cooldown.')
}
//If you dont have enough mana this triggers.
if(input === "leech" && isPlaying == true && stats.Mana < 10) {
msg.channel.sendMessage('You don\'t have enough Mana!')
}
//Evaluation command, if you self-hosting this bot replace my user id with yours.
if(msg.content.startsWith(prefix + "eval ")) {
if (msg.author.id != ownerID) return;
try {
var code = msg.content.substring(6);
var evaled = eval(code);
msg.channel.sendCode("xl", (evaled));
} catch(err) {
    msg.channel.sendMessage(
    "`ERROR`" + "\n" + err
    );
  }
}



 
});

client.on("guildCreate", guild => {
  console.log(`Une Nouvelle guilde a ajouter mon bot : ${guild.name} (id: ${guild.id}). Cette guilde a ${guild.memberCount} Membre!`);
   client.channels.get('479011053494337538').send(`**Une Nouvelle guilde a ajouter mon bot** \n   Nom : ${guild.name}  \n (id: ${guild.id}). \n  Cette guilde a ${guild.memberCount} Membre!`);
});

client.on("guildDelete", guild => {
  console.log(`GuildDelete`);
   client.channels.get('479011053494337538').send(`**Une guilde a enlever mon bot** \n  Nom : ${guild.name}.`);
});

