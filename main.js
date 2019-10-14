const Discord = require("discord.js");
const { Client, Attachment } = require('discord.js');
const client = new Discord.Client();
const bugumlib = require('./BugumManager.js');
const meronlib = require('./melon.js');
const loglib = require('./log.js');
const lollib = require('./LolUtil.js');
const onelib = require('./OnepiceManager.js');
const fs = require('fs');
const cfg = require('./config.json');
const bot = new Discord.Client();


const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//////////////////////
const newUsers = [];
client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  newUsers[guild.id].set(member.id, member.user);

  if (newUsers.size > 10) {
    const defaultChannel = guild.channels.find(channel => channel.permissionsFor(guild.me).has("SEND_MESSAGES"));
    const userlist = newUsers.map(u => u.toString()).join(" ");
    defaultChannel.send("Welcome our new users!\n" + userlist);
    newUsers.clear();
  }
});
//////////////////////




// client.users.get("TEST");


bot.on('guildMemberAdd', member => {
  console.log(member);
  console.log('???');
    member.guild.channels.get('channelID').send('**' + member.user.username + '**, has joined the server!');
});

// 봇상태 변경
client.on("ready", () => {
   // client.user.setActivity("my code", { type: "STREAMING", url: "https://www.twitch.tv/something" })

    client.user.setPresence({
        game: {
            name: 'TOKYO HOT',
            type: 'WATCHING'
            //PLAYING ,STREAMING ,LISTENING ,WATCHING
        },
        status: 'idle'
    })
})




bot.on("guildMemberAdd", member => {
    let mem = member.guild
    mem.defaultChannel.sendMessage(member.user + " welcome to the server!"); });


// 추가한 채널 확인가능
client.on('channelCreate', channel => {
  console.log(channel);
   //channel.guild.defaultChannel.send(`A new channel has been created: ${channel.name}`);
});


// client.on('guildMemberAdd', member => {
//    console.log('DEBUG: 테스트중 ');
//    var role = member.guild.roles.find('name', 'Beginner role name');
//     member.addRole(role); // Adds the default role to members
//       member.guild.channels.get('625641424070770688').send({embed: {
//         color: 3447003,
//         title: "**SERVER NAME** Welcome Bot!",
//         url: "WEBSITE URL",
//         description: "Welcome *" + member + "* to the **Server name** discord server!",
//         fields: [{
//             name: "Information",
//             value: "Some info on the server"
//           }
//         ],
//         timestamp: new Date(),
//         footer: {
//           icon_url: client.user.avatarURL,
//           text: "© NAME OF SERVER 2018 - 2019"
//         }
//       }});
// });


// client.on('guildMemberAdd', member => {
//   console.log('DEBUG: 테스트중 ');
//   console.log(ch);
//   const channel = member.guild.channels.find(ch => ch.username === 'davejin');
//   if (!channel) return;
//   channel.send(`Welcome to the server, ${member}`);
// });


client.on('message', (receivedMessage) => {
  var jsonStr = receivedMessage.author.lastMessage.channel.messages;
  console.log();

  if (receivedMessage.mentions._content == '!워크아이디') {
    if (receivedMessage.author.username == 'davejin') {
      receivedMessage.channel.send("-loed Sr-Jy-3f 입니다.");
    } else if (receivedMessage.author.username == '윤상혁') {
      receivedMessage.channel.send("-loed Sr-ekV-sw 입니다.");
    } else if (receivedMessage.author.username == '광민쓰') {
      receivedMessage.channel.send("워크아이디가 없습니다... 장애인인가요?");
    } else if (receivedMessage.author.username == '홍방') {
      receivedMessage.channel.send("-loed Sr-e3t-w 입니다.");
    } else {
      receivedMessage.channel.send("이이잉앗살라말라이쿰");
    }
    // if (receivedMessage.author.username == 'davejin') {
    // }

      // if (message.content === '!워크아이디') {
      //   msg.reply('-load Sr-Jy-3f');
      // }
      console.log('DEBUG: 테스트중 ');
    }
    // 봇이 자신의 메시지에 응답하지 못하도록 방지
    if (receivedMessage.author == client.user) {
        return
    }
    // 봇의 사용자가 메시지에 태그되어 있는지 확인
    if (receivedMessage.content.includes(client.user.toString())) {
        // 승인 메시지 보내기
        receivedMessage.channel.send("초고열용광로!!!! " +
            receivedMessage.author.toString() + ": " + receivedMessage.content)
    }
})

client.on('message', msg => {
  // msg.author.sendMessage("간다드래프트!!!");

  // 브금재생...Manager.js에서 처리....
  bugumlib.bugumfunc(msg);
  meronlib.meronfunc(msg);
  loglib.logfunc(msg);
  lollib.Lolfunc(msg);
  // 원피스관련
  onelib.Onefunc(msg);
});

client.login('NjIyODM0OTY2Mjc0NzY4OTA1.XYeEFg.3rDz4MpHJil9g5vIxeTjw_Mkf6M');
