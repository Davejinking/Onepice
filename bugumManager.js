const Discord = require("discord.js");
const { Client, Attachment } = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

let rawdata1 = fs.readFileSync('bugum.json');
let bu = JSON.parse(rawdata1);
var test1 = bu.bu
// console.log(test1);

exports.bugumfunc = function(msg) {
  // json형식데이터 추출
  // 참고한곳 https://qiita.com/TakahiRoyte/items/dca532dd64bc782ad849
  test1.forEach((test1, index) => {
    var message;
    var bugum;
    if (msg.content === test1.id) {
      if (!msg.guild) return;
      message = test1.message;
      bugum = test1.bugum;
      // 테스트용으로 브금표시
      console.log(message);
      console.log(bugum);

      if (msg.member.voiceChannel) {
        msg.member.voiceChannel.join()
          .then(connection => {
            msg.reply(message);
            const dispatcher = connection.playFile(bugum);
            dispatcher.on('end', reason => {
                 connection.disconnect();
            });
          })
          .catch(console.log);
      } else {
        msg.reply("널 따라갈건데 너가 보이스채널에 없어.");
      }
    } else if (msg.content === "브금명령어"){
      msg.reply(test1.id);
    }
  })
}
  // // 궁예재생
  // } else if (msg.content === "누구?") {
  //   if (!msg.guild) return;
  //       if (msg.member.voiceChannel) {
  //         msg.member.voiceChannel.join()
  //           .then(connection => {
  //             msg.reply("누구인가?");
  //             const dispatcher = connection.playFile("브금/누구인가.mp3");
  //             dispatcher.on('end', reason => {
  //                  connection.disconnect();
  //             });
  //           })
  //           .catch(console.log);
  //     } else {
  //       msg.reply("널 따라갈건데 너가 보이스채널에 없어.");
  //     }
  // // 비올레타 아이즈원 음원재생
  // } else if (msg.content === "비올레타") {
  //   if (!msg.guild) return;
  //       if (msg.member.voiceChannel) {
  //         msg.member.voiceChannel.join()
  //           .then(connection => {
  //             msg.reply("아이즈원 비올레타 재생합니다.");
  //             const dispatcher = connection.playFile("브금/비올레타.mp3");
  //             dispatcher.on('end', reason => {
  //                  connection.disconnect();
  //             });
  //           })
  //           .catch(console.log);
  //       } else {
  //         msg.reply("널 따라갈건데 너가 보이스채널에 없어.");
  //       }
  //   // 거상재생
  // } else if (msg.content === "거상") {
  //     if (!msg.guild) return;
  //         if (msg.member.voiceChannel) {
  //           msg.member.voiceChannel.join()
  //             .then(connection => {
  //               msg.reply("거상이되거라!");
  //               const dispatcher = connection.playFile("브금/거상브금.mp3");
  //               dispatcher.on('end', reason => {
  //                    connection.disconnect();
  //               });
  //             })
  //             .catch(console.log);
  //         } else {
  //           msg.reply("널 따라갈건데 너가 보이스채널에 없어.");
  //         }
  // } else if (msg.content === "밥먹냐?") {
  //     if (!msg.guild) return;
  //         if (msg.member.voiceChannel) {
  //           msg.member.voiceChannel.join()
  //             .then(connection => {
  //               msg.reply("얼마나 처먹는 게야");
  //               const dispatcher = connection.playFile("브금/얼마나 처먹는 게야.mp3");
  //               dispatcher.on('end', reason => {
  //                    connection.disconnect();
  //               });
  //             })
  //             .catch(console.log);
  //         } else {
  //           msg.reply("널 따라갈건데 너가 보이스채널에 없어.");
  //         }
  // } else if (msg.content === "분노") {
  //     if (!msg.guild) return;
  //         if (msg.member.voiceChannel) {
  //           msg.member.voiceChannel.join()
  //             .then(connection => {
  //               msg.reply("이게뭔 개소리야");
  //               const dispatcher = connection.playFile("브금/분노.mp3");
  //               dispatcher.on('end', reason => {
  //                    connection.disconnect();
  //               });
  //             })
  //             .catch(console.log);
  //         } else {
  //           msg.reply("널 따라갈건데 너가 보이스채널에 없어.");
  //         }
  // } else if (msg.content === "똥") {
  //     if (!msg.guild) return;
  //         if (msg.member.voiceChannel) {
  //           msg.member.voiceChannel.join()
  //             .then(connection => {
  //               msg.reply("똥싸러갔군...");
  //               const dispatcher = connection.playFile("브금/똥.mp3");
  //               dispatcher.on('end', reason => {
  //                    connection.disconnect();
  //               });
  //             })
  //             .catch(console.log);
  //         } else {
  //           msg.reply("널 따라갈건데 너가 보이스채널에 없어.");
  //         }
  // } else if (msg.content === "트와이스신곡") {
  //     if (!msg.guild) return;
  //         if (msg.member.voiceChannel) {
  //           msg.member.voiceChannel.join()
  //             .then(connection => {
  //               msg.reply("Feel Special");
  //               const dispatcher = connection.playFile("브금/TWICE Feel Special MV.mp3");
  //               dispatcher.on('end', reason => {
  //                    connection.disconnect();
  //               });
  //             })
  //             .catch(console.log);
  //         } else {
  //           msg.reply("널 따라갈건데 너가 보이스채널에 없어.");
  //         }
  //   }
// }
