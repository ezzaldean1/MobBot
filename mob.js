const Discord = require('discord.js');
const client = new Discord.Client();
var Canvas = require('canvas')
const moment = require('moment');
const ms = require("ms");
var jimp = require('jimp')
var fs = require("fs");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();

client.on('ready', () => {
  console.log('---------------');
  console.log(' Mob Bot Is Online')
  console.log('---------------')
  client.user.setStatus("Online")
    client.user.setActivity(" Gladness Server",{type: 'PLAYING'})
});


            var prefix = "";

  





client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" ✅    تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**

-${message.guild.name}  Link
**`)
      message.author.sendEmbed(Embed11)
    }
});









var user = {};
var warn = {};

var user = {};
var warn = {};

client.on('message', function(message) {

    	 if (!message.channel.guild) return;
let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;

  if (message.author.id == client.user.id) return;
  if(JSON.stringify(user).indexOf(message.author.id) == -1) {
    user[message.author.id] = message.createdTimestamp;
    return;
  } else {
    if (Date.now() - user[message.author.id] < 695){
              message.author.delete

      if (JSON.stringify(warn).indexOf(message.author.id) == -1) {
        warn[message.author.id] = 1;
      } else {
        warn[message.author.id]++;
        message.author.delete
      }
      if (warn[message.author.id] < 8) {
        message.author.delete

      }
      delete user[message.author.id];
              message.author.delete

    } else {
      delete user[message.author.id];
              message.author.delete

    }
  }
  if (warn[message.author.id] == 8) {		   
     if (!message.channel.guild) return;
             message.author.delete

let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;
    var guild = message.channel.guild;
          var currentTime = new Date(),
                   Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate(),
hours = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes()+1,
            seconds = currentTime.getSeconds();

           if (!message.channel.guild) return;
     if (!muteRole1) return;
    var guild = message.channel.guild;
    message.guild.members.get(message.author.id).addRole(muteRole1);
    
     var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);

delete warn[message.author.id];
    delete user[message.author.id];
	const embed500 = new Discord.RichEmbed()
     .setTitle(`المرسل ${message.author.username}#${message.author.discriminator} `)
      .setDescription(":white_check_mark:  | `محاولة السبام`\n\nالاسم:\n"+`${message.author.username}#${message.author.discriminator}`+"\nالعقوبة:\nميوت شات\n")
          .setFooter("KiNg66S")
      .setColor("c91616")
    message.channel.send(embed500)
    	const embed20 = new Discord.RichEmbed()
      .setTitle(":scales: | تمت معاقبتك")
      .setDescription(`**لقد قمت بمخالفة قوانين السيرفر**\n\nتمت معاقبتك من قبل :\nL-RO3B BOT\nنوع العقوبة:\nميوت شات\nتاريخ العقوبة:\n`+ Year + "/" + Month + "/" + Day +', '+hours +'-' +minutes+'-'+seconds+"\n \n \n`في حال كانت العقوبة بالغلط, تواصل مع الادارة`")
          .setFooter("Mob Server")
      .setColor("c91616")
    
     message.author.send(embed20)
  
  }
});









client.on("message",function(message) {
    if(message.content.startsWith('uptime')) {
        let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }
    
let v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("RED")
  v1.setDescription('***__ Collecting Data __***')
  v1.setFooter("# | S Bot  |") 
let norelden = new Discord.RichEmbed()
.setColor('#9b59b6')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.addField("UpTime :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter("  S Bot |");
  message.channel.send({embed:v1}).then(m => m.edit({embed:norelden}),5000);
}
});






client.on('message', message => {
	if(message.content.startsWith(prefix + 'quran')) {
		message.delete();
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**يحب ان تكون في روم صوتي**`);

	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setFooter("بوت القرآن | صدقة جارية للجميع", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqVT5PZAfcy8qZxlr3SQv3mmCw9zPiu2YBLIQ4bBePL2jLm7h')
      .setDescription(` 
     🕋 اوامر بوت القرآن الكريم 🕋
	 
🇦 القرآن كاملاً ماهر المعيقلي
🇧 سورة البقرة كاملة للشيخ مشاري العفاسي
🇨 سورة الكهف كاملة بصوت مشارى بن راشد العفاسي
⏹ لإيقاف القرآن الكريم
🇩 القرآن كاملاً عبدالباسط عبدالصمد
🇪 القرآن كاملاً ياسر الدوسري
🇫 سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي`)
	
	message.channel.sendEmbed(embed).then(msg => {
			msg.react('🇦')
		.then(() => msg.react('🇧'))
		.then(() => msg.react('🇨'))
		.then(() => msg.react('⏹'))
		.then(() => msg.react('🇩'))
		.then(() => msg.react('🇪'))
		.then(() => msg.react('🇫'))

// Filters		
	let filter1 = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
	let filter2 = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
	let filter3 = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
	let filter4 = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;
	let filter5 = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
	let filter6 = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
	let filter7 = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;

// Collectors
	let collector1 = msg.createReactionCollector(filter1, { time: 120000 });
	let collector2 = msg.createReactionCollector(filter2, { time: 120000 });
	let collector3 = msg.createReactionCollector(filter3, { time: 120000 });
	let collector4 = msg.createReactionCollector(filter4, { time: 120000 });
	let collector5 = msg.createReactionCollector(filter5, { time: 120000 });
	let collector6 = msg.createReactionCollector(filter6, { time: 120000 });
	let collector7 = msg.createReactionCollector(filter7, { time: 120000 });
	
// Events
collector1.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=Ktync4j_nmA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
   });
});
collector2.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=qFq5h4wtjaM&t=30s", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector3.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=8UWKiKGQmsE", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector4.on('collect', r => {
	if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم إيقاف القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
});
collector5.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=vqXLGtZcUm8", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector6.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=WYT0pQne-7w", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector7.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=LTRcg-gR78o", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **تم تشغيل القرآن الكريم**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
})
}
});




/*
البكجآت
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
*/

client.on('message', msg => {

    if (msg.content == 'play') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join();
     }
    }
}
})
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			//by ,$ ReBeL ء , ��#4777 'CODES SERVER'
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر مقطع صوتي');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
				}
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

			return handleVideo(video, msg, voiceChannel);
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
		serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `stop`) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;
		//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		const embedqu = new Discord.RichEmbed()
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		queue.set(msg.guild.id, queueConstruct);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		queueConstruct.songs.push(song);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	console.log(serverQueue.songs);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			play(guild, serverQueue.songs[0]);
		})//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		.on('error', error => console.error(error));//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

	serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'



  
  

  client.on('message', message => {

    if(message.content === prefix + "mutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__:laughing:ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
           });
             }
 if(message.content === prefix + "unmutechnnel") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__:laughing:ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__تم فتح الشات__:white_check_mark:**")
           });
             }



});  
  
  
  
  
  client.on("message", (message) => {
if (message.content.startsWith(prefix + "ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startsWith(prefix + "cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')

}
});


client.on("message", (message) => {
if (message.content.startsWith(prefix + 'delet')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});












client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**USER:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**BY:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**REASON:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});











client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});








client.on('message', message => {   
if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "mute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين 

 ${message.author.tag} تمت معاقبتك بواسطة

[ ${reason} ] : السبب

اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين 
`)
.setFooter(`في سيرفر : ${message.guild.name}`)
.setColor("RANDOM")
 user.send( muteembeddm);
}
if (command == "unmute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انتا لا تملك صلاحيات").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).removeRole(muteRole);
const unmuteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
var unmuteembeddm = new Discord.RichEmbed()
.setDescription(`تم فك الميوت عنك ${user}`)
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setColor("RANDOM")
  user.send( unmuteembeddm);
}
});






 client.on('message', message => {
              if(!message.channel.guild) return;

    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
    message.delete();
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "DARK-GAMES";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('برودكاست')
       .addField('الرساله', args)
       .setThumbnail("https://cdn.discordapp.com/icons/430699681874706432/2393e2aad82a592882be2c1bb6c80f12.jpg")
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });















client.on("message", message => {
 
    var args = message.content.split(' ').slice(1);
    var msg = message.content.toLowerCase();
    if( !message.guild ) return;
    if( !msg.startsWith( prefix + 'role' ) ) return;
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
    if( msg.toLowerCase().startsWith( prefix + 'rerole' ) ){
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().removeRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.removeRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
        }  
    } else {
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().addRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.addRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
        }
    }
});





 client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})
  
  
  


client.on("message", async message => {
           let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'giveaway')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
    if (message.author.id !== message.guild.owner.id) {     
    message.channel.send('**هادا الامر لصاحب السيرفر فقط**' );
      return;
    }
    const array = [];
    message.guild.members.forEach((member) => {
      array.push(member.user.tag);
    });
    const rand = array[Math.floor(Math.random() * array.length)];
    message.channel.send(rand).then((m) => {
      m.split('#');
      m.edit(array);
    });
      
    };
});



client.on('message', function (message, member) {


			//var mess = message.content.toLowerCase();
			
			if(message.content.startsWith(prefix + 'tweet')) {
			      let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

				var Canvas = require('canvas')
				var jimp = require('jimp')

				var Canvas = require('canvas')
				var jimp = require('jimp')
				
const w = ['./img.png']

        let Image = Canvas.Image,
            canvas = new Canvas(802, 404),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 802, 404);

})



 var mentionned = message.mentions.users.first();
          var getvalueof;
          var bot;
          if(mentionned) {
            getvalueof = mentionned;
          } else {
            getvalueof = message.author;
          }

    ctx.font = '45px Impact';
    //ctx.rotate(.1);
    ctx.fillText(getvalueof.username, 60, 180);
    ctx.fillText('tweets :', 160, 310);
    ctx.fillStyle = 'blue';
    //ctx.drawImage(img, 70, 320)
   // var te = ctx.measureText(message.author.username);
    
        //var img = new Image;
    //img.url = message.author.avatarURL;




                        
                                        let url = message.author.avatarURL.endsWith(".webp") ? message.author.avatarURL.slice(5, -20) + ".png" : message.author.avatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                                //Avatar
                                let Avatar = Canvas.Image;
                                let ava = new Avatar;
                                ava.src = buf;
                                ctx.save();

                                ctx.beginPath();
                                ctx.arc(75, 75, 60, 0, Math.PI*2, true); 
                                ctx.closePath();
                                ctx.clip();
                                ctx.drawImage(ava, 0, 0, 150, 150);
                                ctx.restore();
                                               //wl
                        ctx.font = '35px Arial Bold';
                        ctx.fontSize = '40px';
                        ctx.fillStyle = "#dadada";
                        ctx.textAlign = "center";
                        ctx.fillText(`@${message.author.username}`, 250, 75);

                      //ur name
                        ctx.font = '35px Arial';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(args.join("  "), 445, 185);


    ctx.beginPath();
    //ctx.lineTo(50, 102);
    //ctx.lineTo(50 + te.width, 102);
    ctx.stroke();


  message.channel.sendFile(canvas.toBuffer());


})
})

}

		});



client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'سحب')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("لا استخدام الامر اكتب اسحب العضو")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك:white_check_mark: `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("#000000")
.setDescription(`<@${message.author.id}> moved you to his channel!\nServer => ${message.guild.name}`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
}
} else {
message.react("❌")
 }}});
 




client.on('ready', () => {

});
/*جميع الح��وق محفوظهه لريبل ولسيرفر كودز
رآح يرسل للأونر تحذير + م يتطلب ملفات سويته لكم داتا مؤقت
سو روم بأسم log 
أو غيره من الكود عشان يرسل هنا التحذير
nvm i 10 
nvm use 10
npm i discord.js
*/
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "logh"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "logh"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "logh"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });






















client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;

      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});






client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();

        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تــم مسح الشات ``",
          color: 0x06DF00,
          footer: {

          }
        }}).then(msg => {msg.delete(3000)});
                            }


  });





client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "مسح")) {
                  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();

        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تــم مسح الشات ``",
          color: 0x06DF00,
          footer: {

          }
        }}).then(msg => {msg.delete(3000)});
                            }


  });





      client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + 'ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });




  client.on('message', async message => {
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  if(message.content.startsWith(prefix + "invites")) {
    if(!args) return message.reply('**حدد اسم دعوة**');
    message.guild.fetchInvites().then(i => {
      let inv = i.get(args[0]);
      if(!inv) return message.reply(`**لم اقدر على ايجاد ${args}**`);
      var iNv = new Discord.RichEmbed()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .addField('# - صاحب الدعوة',inv.inviter,true)
      .addField('# - روم الدعوة',inv.channel,true)
      .addField('# - تاريخ انتهاء الدعوة',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
      .addField('# - تم انشاء الدعوة',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
      .addField('# - مدة الدعوة',moment(inv.maxAge).format('DD **ساعة** h **يوم**'),true)
      .addField('# - الاستخدامات',inv.uses || inv.maxUses,true)
      message.channel.send(iNv);
    });
  }
});
  



	client.on('message', msg => {
  if (msg.content === prefix + 'السلام عليكم') {
    msg.reply('**وعليكم السلام**');
  }
});


	client.on('message', msg => {
  if (msg.content === prefix + 'برب') {
    msg.reply('**لا تتاخر:tanabata_tree: **');
  }
});


   
                        
     




client.on('message', message => {
 if (message.content.startsWith("ترحيب 1")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 2")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***هلا باللي ملك قلبي هلا باللي فداه الروح هلا باللي شغل فكري هلا باللي هواه البوح.***')
  .setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 3")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحباً بك عدد ما خطته الأقلام من حروف وبعدد ما أزهر بالأرض زهور مرحباً ممزوجة بعطر الورد ورائحة البخور***')
  .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 4")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا باللي يجينا هلت الفرحة علينا نشدت الأشواق فينا مرحباً بكم مرحباً.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 5")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الي��ا***" ,mentionavatar.username )
  .setDescription('***لو علمت الدار بمن زارها فرحت وأستبشرت ثم باست موضع القدمين وأنشدت بلسان الحال قائلة أهلاً وسهلاً بأهل الجود والكرم.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 6")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بك كثر النجوم الساطعة وكثر الورود الفائحة التي تفوح بأزكى العطور وكثر ما تكتب الأقلام من الحروف والعبارات. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-For-Front-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 7")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***حي الله هذه الوجوه رؤيتها تزيد الأفراح، نسماتها تداوي الجروح، وعبيرها فواح، تنثره الرياح، على القمم في الليل في الصباح***')
  .setImage('https://www.askideas.com/media/13/Small-Welcome-Sign-On-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 8")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بكل الضيوف يوم نادى غير عادي مرحبا فوق الألوف ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Colorful-Sign-Picture.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ت��حيب 9")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***يا مرحبا وسهلاً بضيف لفانا، يزهي بك الأدب العربي وينثر لك أزهار يسقيك من نبع المشاعر وفانا، لين الهلا تثمر على غصونك أطيار. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.on('message', message => {
 if (message.content.startsWith("ترحيب 10")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;

               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***كل شيء يرحب بك كل شيء يتبسم ويتوهج فرحاً بقدومك كل شيء ينمق عبارات الترحيب ويصوغ كلمات الحب لوجودك كل شيء ينتظر مشارك��تك وقلمك الرائع وأبداعاتك كل شيء يردد حياك الله.***')
  .setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});











client.on('message', message => {
    if (message.content == prefix + "فكك") {
        var x = ['طيارة', 'اللهم صلي على سيدنا محمد', 'تفكيك', 'ريفيرس', 'مدرسة', 'معلم' , 'نقاط', 'القسطنطينية', 'المملكة العربيه السعودية', 'بنغلادش', 'موسى', 'لورد', ' هذا احسن بوت في العالم', 'اللؤلؤ المتلألئ في اللؤلؤه'
        ];
        var x2 = ['ط ي ا ر ة', 'ا ل ل ه م ص ل ي ع ل ى س ي د ن ا م ح م د', 'ت ف ك ي ك', 'ر ي ف ي ر س', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط', 'ا ل ق س ط ن ط ي ن ي ة', 'ا ل م م ل ك ة ا ل ع ر ب ي ة ا ل س ع و د ي ة', 'ب ن غ ل ا د ش', 'م و س ى', 'ل و ر د', 'ه ذ ا ا ح س ن ب و ت ف ي ا ل ع ا ل م', 'ا ل ؤ ل ؤ ا ل م ت ل أ ل ئ ف ي ا ل ؤ ل ؤ ه '        ];

        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`لديك من الوقت 20 ثآنية لتفكيك هذه الكلمة __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 20000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: :stopwatch:  انتهي الوقت `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} :ballot_box_with_check:  اجابتك صحيحه `);
        })
        })
    }
})







client.on('message', message => {
    if (message.content == prefix + "عواصم") {
        var x = ['السويد', 'البرتغال', 'ايطاليا', 'فلسطين', 'الاردن', 'مصر', 'السعوديه', 'الصومال', 'اليمن', 'قطر', 'البحرين', 'افغانستان', 'قبرص', 'اندونيسيا', 'الفلبين', 'تايلاند', 'البرازيل', 'الكويت', 'اثيوبيا', 'اليونان', 'موريتانيا', 'موريشيوس', 'بورت لويس'
        ];
        var x2 = ['ستوكهولم', 'لشبونة', 'روما' , 'القدس', 'عمان', 'القاهرة', 'الرياض', 'مقديشو', 'صنعاء', 'الدوحة ', 'المنامة', 'كابل', 'نيقوسيا', 'جاكرتا', 'مانيلا', 'بانكوك', 'برازيليا', 'الكويت', 'أديس أبابا', 'أثينا', 'نواكشوط', 'مابوتو'
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`لديك من الوقت 20 ثآنية لتكتب عاصمه __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 20000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: :stopwatch:  انتهي الوقت `)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} :ballot_box_with_check:  اجابتك صحيحه `);

        })
        })
    }
})







client.on('message', message => {
     if(message.author.bot) return;

    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "warn") {

        if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما معك برمشن MANAGE MESSAGES**");
    let args = message.content.split(" ").slice(1);
                    let reason = message.content.split(" ").slice(2).join(" ");
                if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
        if (!reason) return message.reply("**اكتب سبب التحذير**");

        message.channel.sendMessage(args.join("  "))
        message.delete();


    }

});



client.on('message', message =>{

    if(message.content == "roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
  





client.on('message', async message => {
  if(message.content.startsWith(prefix + "svoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});

  client.on('message', message => {
          

           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });


client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا
