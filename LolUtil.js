const Discord = require("discord.js");
const { Client, Attachment } = require('discord.js');
const client = new Discord.Client();

///////// 멜론순위권확인
var cheerio = require('cheerio');
var request = require('request');

var url = 'https://www.op.gg/summoner/userName=윤마게';
var title = new Array(),
    artist = new Array(),
    up_date,
    up_time;
var rank = 1;  //10위까지 확인


exports.Lolfunc = function(msg) {
    if (msg.content === "!롤전적") {
      console.log("들어온다1");
      if (!msg.guild) return;
        request(url, function(error, response, html) {
          console.log("들어온다2");
          console.log(error);
          if (!error) {
            console.log("들어온다3");
            var $ = cheerio.load(html);
            console.log(url);
          }
        });
      }
    }
       // // 곡명 파싱
       //  for (var i = 0; i < rank; i++) {
       //    $('.ellipsis.rank01 > span > a').each(function(){
       //      var title_info = $(this);
       //      var title_info_text = title_info.text();
       //      title[i] = title_info_text;
       //      i++;
       //    })
       //  }
       //
       //  // 아티스트명 파싱
       //  for (var i = 0; i < rank; i++) {
       //    $('.checkEllipsis').each(function(){
       //      var artist_info = $(this);
       //      var artist_info_text = artist_info.text();
       //      artist[i] = artist_info_text;
       //      i++;
       //    })
       //  }
       //
       //  // 업데이트 날짜
       //  $('.year').each(function(){
       //    var date_info = $(this);
       //    var date_info_text = date_info.text();
       //    up_date = date_info_text;
       //  })
       //
       //  // 업데이트 시간
       //  $('.hhmm > span').each(function(){
       //    var time_info = $(this);
       //    var time_info_text = time_info.text();
       //    up_time = time_info_text;
       //  })
       //
       //  //xxxx년 xx월 xx일 오후/오전 xx시 format
       //  var up_date_arr = new Array();
       //  var up_date_arr = up_date.split('.');
       //  var up_time_arr = new Array();
       //  var up_time_arr = up_time.split(':');
       //  var newtime;
       //
       //  // 오후 오전 삽입
       //  if (up_time_arr[0] >12) {
       //    up_time_arr[0] = up_time_arr[0] - 12
       //    newtime = "오후 "+up_time_arr[0];
       //  } else {
       //    newtime = "오전 " +up_time_arr[0];
       //  }

        // 콘솔창 출력
        // var melonlist;
        // var melonlist = "< 멜론 차트 1 ~ "+rank+"위 >";
        // 순위 제목 - 아티스트명
        // for (var i = 1; i < rank+1; i++) {
        //   var melonlist = i+ "위" + " " + title[i-1] + " - " + artist[i-1];
        //   var melonno1 = title[i-1] + ".mp3";
        // }
        // // 업데이트 시간
        // melonlist += '\n'+up_date_arr[0]+"년 "+up_date_arr[1]+"월 "+up_date_arr[2]+"일 "+newtime+"시에 업데이트됨";
