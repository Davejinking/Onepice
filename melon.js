const Discord = require("discord.js");
const { Client, Attachment } = require('discord.js');
const client = new Discord.Client();
const main0lib = require('./main0.js');
const melonUtill = require('./MelonUtil.js');


///////// 멜론순위권확인
var cheerio = require('cheerio');
var request = require('request');

var url = 'http://www.melon.com/chart/';
var title = new Array(),
    artist = new Array(),
    up_date,
    up_time;
var rank = 1;  //10위까지 확인
////////////////////////




// var melonlist = main0lib.main0func();
// console.log(melonlist);
// msg.reply(melonsong + melonlists);

///////////////////////////////////////////
const melon001 = "001 볼빨간사춘기 - 워커홀릭.mp3";
const melon002 = "002 폴킴 - 안녕.mp3";
const melon003 = "003 케이시 (Kassy) - 가을밤 떠난 너.mp3";
const melon004 = "004 휘인 (Whee In) - 헤어지자 (Prod. 정키).mp3";
const melon005 = "005 마크툽 (MAKTUB) - 오늘도 빛나는 너에게 (To You My Light) (Feat.이라온).mp3";
const melon006 = "006 HYNN(박혜원) - 시든 꽃에 물을 주듯.mp3";
const melon007 = "007 거미 - 기억해줘요 내 모든 날과 그때를.mp3";
const melon008 = "008 장범준 - 흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야.mp3";
const melon009 = "009 황인욱 - 포장마차.mp3";
const melon010 = "010 송하예 - 니 소식.mp3";
const melon011 = "011 태연 (TAEYEON) - 그대라는 시.mp3";
const melon012 = "012 전상근 - 사랑이란 멜로는 없어.mp3";
const melon013 = "013 장혜진, 윤민수 - 술이 문제야.mp3";
const melon014 = "014 펀치 (Punch) - Done For Me.mp3";
const melon015 = "015 선미 - 날라리 (LALALAY).mp3";
const melon016 = "016 Anne-Marie - 2002.mp3";
const melon017 = "017 벤 - 내 목소리 들리니.mp3";
const melon018 = "018 임재현 - 사랑에 연습이 있었다면 (Prod. 2soo).mp3";
const melon019 = "019 먼데이 키즈 (Monday Kiz) - 사랑이 식었다고 말해도 돼.mp3";
const melon020 = "020 Crush - 나빠(NAPPA).mp3";
const melon021 = "021 Camila Cabello, Shawn Mendes - Señorita.mp3";
const melon022 = "022 X1 (엑스원) - FLASH.mp3";
const melon023 = "023 벤 - 헤어져줘서 고마워.mp3";
const melon024 = "024 10cm - 나의 어깨에 기대어요.mp3";
const melon025 = "025 헤이즈 (Heize) - 내 맘을 볼수 있나요.mp3";
const melon026 = "026 ITZY (있지) - ICY.mp3";
const melon027 = "027 창모 (CHANGMO), Hash Swan, ASH ISLAND, 김효은 - BAND.mp3";
const melon028 = "028 Billie Eilish - bad guy.mp3";
const melon029 = "029 방탄소년단 - 작은 것들을 위한 시 (Boy with Luv).mp3";
const melon030 = "030 볼빨간사춘기 - XX.mp3";
const melon031 = "031 닐로(Nilo) - 벗.mp3";
const melon032 = "032 세븐틴 - 독：Fear.mp3";
const melon033 = "033 V.O.S - 다시 만날까 봐.mp3";
const melon034 = "034 Naomi Scott - Speechless (Full).mp3";
const melon035 = "035 폴킴 - 모든 날, 모든 순간 (Every day, Every Moment).mp3";
const melon036 = "036 볼빨간사춘기 - 25.mp3";
const melon037 = "037 김나영 - 솔직하게 말해서 나.mp3";
const melon038 = "038 Red Velvet (레드벨벳) - 음파음파 (Umpah Umpah).mp3";
const melon039 = "039 스윙스, Kid Milli, 매드클라운 - 담아 (Feat. 염따, pH-1) (Prod. BOYCOLD).mp3";
const melon040 = "040 X1 (엑스원) - 웃을 때 제일 예뻐.mp3";
const melon041 = "041 폴킴 - 너를 만나.mp3";
const melon042 = "042 윤비 (YunB), 영비 - 트루먼 쇼.mp3";
const melon043 = "043 청하 - Snapping.mp3";
const melon044 = "044 케이시 (Kassy) - 그때가 좋았어.mp3";
const melon045 = "045 먼데이 키즈 (Monday Kiz), 펀치 (Punch) - Another Day.mp3";
const melon046 = "046 이우 - 내 안부.mp3";
const melon047 = "047 다비치 - 너에게 못했던 내 마지막 말은.mp3";
const melon048 = "048 멜로망스 - 인사.mp3";
const melon049 = "049 BewhY (비와이) - 가라사대.mp3";
const melon050 = "050 기리보이 - 아퍼 (Feat. Kid Milli, Lil tachi, 김승민, NO：EL, C JAMM).mp3";
const melon051 = "051 X1 (엑스원) - U GOT IT (X1 Ver.).mp3";
const melon052 = "052 장범준 - 노래방에서.mp3";
const melon053 = "053 태연 - 사계 (Four Seasons).mp3";
const melon054 = "054 Lauv - Paris In The Rain.mp3";
const melon055 = "055 세븐틴 - 거짓말을 해.mp3";
const melon056 = "056 TWICE (트와이스) - FANCY.mp3";
const melon057 = "057 X1 (엑스원) - 움직여 (MOVE) (Prod. by ZICO) (X1 Ver.).mp3";
const melon058 = "058 디오 (D.O.) - 괜찮아도 괜찮아 (That`s okay).mp3";
const melon059 = "059 Woodie Gochild, 최엘비 (CHOILB), BIG Naughty (서동현), 영비, Chillin Homie - 바다 (Feat. 기리보이) (Prod. 기리보이).mp3";
const melon060 = "060 볼빨간사춘기 - Taste.mp3";
const melon061 = "061 첸 (CHEN) - 사월이 지나면 우리 헤어져요 (Beautiful goodbye).mp3";
const melon062 = "062 세븐틴 - Let me hear you say.mp3";
const melon063 = "063 세븐틴 - Snap Shoot.mp3";
const melon064 = "064 세븐틴 - 247.mp3";
const melon065 = "065 X1 (엑스원) - 괜찮아요.mp3";
const melon066 = "066 ITZY (있지) - 달라달라.mp3";
const melon067 = "067 헤이즈 (Heize) - We don`t talk together (Feat. 기리보이) (Prod. SUGA).mp3";
const melon068 = "068 세븐틴 - Second Life.mp3";
const melon069 = "069 잔나비 - 주저하는 연인들을 위해.mp3";
const melon070 = "070 Imagine Dragons - Believer.mp3";
const melon071 = "071 청하 - 그 끝에 그대.mp3";
const melon072 = "072 세븐틴 - Network Love.mp3";
const melon073 = "073 X1 (엑스원) - Stand Up (Intro.).mp3";
const melon074 = "074 세븐틴 - Happy Ending (Korean Ver.).mp3";
const melon075 = "075 폴킴 - 비.mp3";
const melon076 = "076 세븐틴 - Lucky.mp3";
const melon077 = "077 세븐틴 - Back it up.mp3";
const melon078 = "078 에이치코드 (H：CODE) - 꿈속에 너 (Feat, 전상근).mp3";
const melon079 = "079 볼빨간사춘기 - 낮 (Day off).mp3";
const melon080 = "080 엠씨더맥스 - 사계 (하루살이).mp3";
const melon081 = "081 방탄소년단 - 봄날.mp3";
const melon082 = "082 숀 (SHAUN) - Way Back Home.mp3";
const melon083 = "083 박효신 - Goodbye.mp3";
const melon084 = "084 엔플라잉 (N.Flying) - 옥탑방.mp3";
const melon085 = "085 세븐틴 - Home.mp3";
const melon086 = "086 볼빨간사춘기 - 나만, 봄.mp3";
const melon087 = "087 송하예 - Say Goodbye.mp3";
const melon088 = "088 방탄소년단 - IDOL.mp3";
const melon089 = "089 청하 - 벌써 12시.mp3";
const melon090 = "090 윤하 (YOUNHA) - 비가 내리는 날에는.mp3";
const melon091 = "091 EXO - Love Shot.mp3";
const melon092 = "092 양다일 - 너만 너만 너만.mp3";
const melon093 = "093 엠씨더맥스 - 넘쳐흘러.mp3";
const melon094 = "094 백현 (BAEKHYUN) - UN Village.mp3";
const melon095 = "095 Jeremy Zucker - comethru.mp3";
const melon096 = "096 비, 소유 (SOYOU) - 시작할까, 나.mp3";
const melon097 = "097 창모 (CHANGMO), Hash Swan, ASH ISLAND, 김효은, Leellamarz, The Quiett - 비워 (Beer) (Prod. Way Ched).mp3";
const melon098 = "098 세븐틴 - HIT.mp3";
const melon099 = "099 방탄소년단 - 소우주 (Mikrokosmos).mp3";
const melon100 = "100 오마이걸 - BUNGEE (Fall in Love).mp3";
/////////////////////////////////////////////////////////////

const notyou = "널 따라갈건데 너가 보이스채널에 없어.";

exports.meronfunc = function(msg) {
  if (msg.content === "실시간 멜론순위1위 재생") {if (!msg.guild) return;
    request(url, function(error, response, html) {
      if (!error) {
        var $ = cheerio.load(html);

       // 곡명 파싱
        for (var i = 0; i < rank; i++) {
          $('.ellipsis.rank01 > span > a').each(function(){
            var title_info = $(this);
            var title_info_text = title_info.text();
            title[i] = title_info_text;
            i++;
          })
        }

        // 아티스트명 파싱
        for (var i = 0; i < rank; i++) {
          $('.checkEllipsis').each(function(){
            var artist_info = $(this);
            var artist_info_text = artist_info.text();
            artist[i] = artist_info_text;
            i++;
          })
        }

        // 업데이트 날짜
        $('.year').each(function(){
          var date_info = $(this);
          var date_info_text = date_info.text();
          up_date = date_info_text;
        })

        // 업데이트 시간
        $('.hhmm > span').each(function(){
          var time_info = $(this);
          var time_info_text = time_info.text();
          up_time = time_info_text;
        })

        //xxxx년 xx월 xx일 오후/오전 xx시 format
        var up_date_arr = new Array();
        var up_date_arr = up_date.split('.');
        var up_time_arr = new Array();
        var up_time_arr = up_time.split(':');
        var newtime;

        // 오후 오전 삽입
        if (up_time_arr[0] >12) {
          up_time_arr[0] = up_time_arr[0] - 12
          newtime = "오후 "+up_time_arr[0];
        } else {
          newtime = "오전 " +up_time_arr[0];
        }

        // 콘솔창 출력
        // var melonlist;
        // var melonlist = "< 멜론 차트 1 ~ "+rank+"위 >";
        // 순위 제목 - 아티스트명
        for (var i = 1; i < rank+1; i++) {
          var melonlist = i+ "위" + " " + title[i-1] + " - " + artist[i-1];
          var melonno1 = title[i-1] + ".mp3";
        }
        // 업데이트 시간
        melonlist += '\n'+up_date_arr[0]+"년 "+up_date_arr[1]+"월 "+up_date_arr[2]+"일 "+newtime+"시에 업데이트됨";

        console.log(melonno1);
        console.log(melonlist);
        if (msg.member.voiceChannel){
          msg.member.voiceChannel.join().then(connection => {
                const melonlists = "을 재생합니다."
                msg.reply(melonlist + melonlists);
                const dispatcher = connection.playFile("멜론100/"+ melonno1);
                dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
          } else {msg.reply(notyou);}

        // msg.reply(melonlist);
        return melonlist;
      }
    });
  }
  if (msg.content === "노래정지") {
    msg.reply("지금 재생중인 노래를 정지합니다.");
    msg.member.voiceChannel.join().then(connection => {
      connection.disconnect();
      });
  }
  if (msg.content === "멜론1위") {if (!msg.guild) return;
    console.log(melonUtill.Hashtest());
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonlists = "을 재생합니다."
              msg.reply(melon001 + melonlists);
              const dispatcher = connection.playFile("멜론100/"+melon001);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonlists = "을 재생합니다."
              msg.reply(melon002 + melonlists);
              const dispatcher = connection.playFile("멜론100/"+melon002);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론3위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonlists = "을 재생합니다."
              msg.reply(melon003 + melonlists);
              const dispatcher = connection.playFile("멜론100/"+melon003);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론4위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonlists = "을 재생합니다."
              msg.reply(melon004 + melonlists);
              const dispatcher = connection.playFile("멜론100/"+melon004);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론5위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonlists = "을 재생합니다."
              msg.reply(melon005 + melonlists);
              const dispatcher = connection.playFile("멜론100/"+melon005);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론6위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonlists = "을 재생합니다."
              msg.reply(melon005 + melonlists);
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론7위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonlists = "을 재생합니다."
              msg.reply(melon005 + melonlists);
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론8위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonlists = "을 재생합니다."
              msg.reply(melon005 + melonlists);
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonlists = "을 재생합니다."
              msg.reply(melon005 + melonlists);
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonlists = "을 재생합니다."
              msg.reply(melon005 + melonlists);
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonlists = "을 재생합니다."
              msg.reply(melon005 + melonlists);
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonlists = "을 재생합니다."
              msg.reply(melon005 + melonlists);
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}
  } else if (msg.content === "멜론2위") {if (!msg.guild) return;
        if (msg.member.voiceChannel) {msg.member.voiceChannel.join().then(connection => {
              const melonsong = "001 볼빨간사춘기 - 워커홀릭.mp3";
              const melonlists = "을 재생합니다."
              const dispatcher = connection.playFile("멜론100/"+melonsong);
              dispatcher.on('end', reason => {connection.disconnect();});}).catch(console.log);
        } else {msg.reply(notyou);}

    }
}
