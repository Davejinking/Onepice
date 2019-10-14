const Discord = require("discord.js");
const { Client, Attachment } = require('discord.js');
const client = new Discord.Client();

exports.Onefunc = function(msg) {
  if (msg.content === '!명령어') {
    msg.reply('\n!조합\n!버전\n!브금');
    // 이미지출력
    // const attachment = new Attachment('주소');
    // msg.channel.send(attachment);
  }
  if (msg.content === '!조합') {
    msg.reply('[명령어입력방법:검색명령어 앞에 !을 붙여서 입력]\n안흔함 / 특별 / 희귀 / 전설 / 변화');
    msg.reply('\n히든 / 초월 / 불멸 / 영원 / 제한 \n랜덤유닛 / 특수유닛');
  } else if (msg.content === '!버전') {
    msg.reply('2019-09-16 (버전 1.1) 간다드래프트 추가');
  } else if (msg.content === '!브금') {
    msg.reply('\n누구?\n간다드래프트\n비올레타\n거상\n밥먹냐?\n똥');
  }

  // 원랜디 흔한조합식
   if (msg.content === '!히든') {
     // URL에있는사진을 보여줄때
     // msg.channel.send("My Bot's message", {files: ["https://source.unsplash.com/random"]});
     msg.reply('\n히든 피셔타이거\n히든 반더데켄\n히든 이완코브\n히든 킨에몬\n히든 사보\n히든 레베카\n히든 코알라\n히든 캐럿\n  \n히든 아카이누\n히든 아오키지\n히든 베르고\n  \n히든 검호미호크\n히든 킬러\n히든 봉쿠레\n히든 류마\n히든 시류\n히든 페로나\n  \n히든 써니호\n히든 모비딕호\n히든 발라티에\n히든 방주맥심\n히든 레드포스호');
   } else if (msg.content === '!초월') {
     msg.reply('\n초월 루피\n초월 조로\n초월 나미\n초월 우솝\n초월 상디\n초월 쵸파\n초월 로빈\n초월 프랑키\n초월 브룩\n초월 시라호시\n초월 아카이누\n초월 아오키지\n초월 키자루\n초월 검은수염\n초월 샹크스\n초월 로우\n초월 도플라밍고\n초월 사보\n초월 후지토라\n초월 타시기\n초월 빅맘\n초월 루치');
   } else if (msg.content === '!불멸') {
     msg.reply('\n불멸 로져\n불멸 레일리\n불멸 스코퍼 가반\n불멸 거프\n불멸 흰수염\n불멸 센고쿠\n불멸 시키\n불멸 드래곤\n불멸 제트');
   } else if (msg.content === '!영원') {
     msg.reply('\n영원 에이스\n영원 핸콕\n영원 카번딧슈\n영원 버기\n영원 비비\n영원 미호크');
   } else if (msg.content === '!제한') {
     msg.reply('\n제한 크로커다일\n제한 에넬갓\n제한 레드필드\n제한 레베카\n제한 아인\n제한 카타쿠리');
   } else if (msg.content === '!랜덤유닛') {
     msg.reply('이잉앗살라말라이쿰');
   } else if (msg.content === '!특수유닛') {
     msg.reply('이잉앗살라말라이쿰');
   } else if (msg.content === '!안흔함') {
     msg.reply('이잉앗살라말라이쿰');
   } else if (msg.content === '!특별') {
     msg.reply('이잉앗살라말라이쿰');
   } else if (msg.content === '!희귀') {
     msg.reply('이잉앗살라말라이쿰');
   } else if (msg.content === '!전설') {
     msg.reply('이잉앗살라말라이쿰');
   } else if (msg.content === '!변화') {
     msg.reply('이잉앗살라말라이쿰');
   }

// 히든 기타
  if (msg.content === '!히든 피셔타이거') {
      const test = '히든 피셔타이거';
      // somelib.somefunc(test);
      const attachment = new Attachment('./원랜디/히든/피셔타이거.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('\n 희귀 반더데켄 \n 희귀 핸콕 \n 특별 파이러츠도킹5 \n 히든 레일리');
      msg.reply('⇒총갯수 : 루피 x8 / 나미 x7 / 총병 x5 / 조로 x3 / 우솝 x2 / 칼병 x2 / 상디 / 쵸파 / 버기');
  } else if (msg.content === '!히든 반더데켄') {
      const attachment = new Attachment('./원랜디/히든/반더데켄.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('\n 희귀 반더데켄 \n 희귀 검은수염 \n 특별 아론 \n 히든 해적선');
      msg.reply('⇒총갯수 : 총병 x8 / 루피 x6 / 나미 x5 / 칼병 x5 / 쵸파 x4 / 조로 x2 / 우솝 x2 / 상디 / 버기');

  } else if (msg.content === '!히든 이완코브') {
      const attachment = new Attachment('./원랜디/히든/이완코브.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('\n 희귀 이완코브 \n 희귀 크로커다일 MR.0 \n 특별 버기 마기탄 \n 특별 봉쿠레');
      msg.reply('⇒총갯수 : 상디 x8 / 나미 x6 / 우솝 x6 / 버기 x6 / 조로 x4 / 루피 x3 / 칼병 x2 / 쵸파 / 총병');

  } else if (msg.content === '!히든 킨에몬') {
      const attachment = new Attachment('./원랜디/히든/킨에몬.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('\n 희귀 킨에몬 \n 희귀 조로현상금사냥꾼 \n 특별 키드초신성');
      msg.reply('⇒총갯수 : 조로 x7 / 총병 x5 / 쵸파 x4 / 루피 x3 / 나미 x3 / 칼병 x3 / 버기 x3 / 상디 x2 / 우솝');

  } else if (msg.content === '!히든 사보') {
      const attachment = new Attachment('./원랜디/히든/사보.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('\n 희귀 마인오즈 \n 희귀 로우 \n 희귀 사보');
      msg.reply('⇒총갯수 : 루피 x9 / 조로 x8 / 쵸파 x8 / 상디 x6 / 총병 x4 / 우솝 x3 / 버기 x2 / 나미 / 칼병');

  } else if (msg.content === '!히든 레베카') {
      const attachment = new Attachment('./원랜디/히든/레베카.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('\n 희귀 바제스 \n 희귀 루피 기어써드 \n 안흔함 로빈 + 확장팩');
      msg.reply('⇒총갯수 : 루피 x5 / 상디 x5 / 총병 x5 / 나미 x4 / 버기 x4 / 우솝 x3 / 조로 / 쵸파');

  } else if (msg.content === '!히든 코알라') {
      const attachment = new Attachment('./원랜디/히든/코알라.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('\n 전설 징베 \n 희귀 비비 \n 안흔함 로빈 + 확장팩');
      msg.reply('⇒총갯수 : 루피 x9 / 우솝 x9 / 총병 x8 / 나미 x7 / 조로 x5 / 상디 x5 / 쵸파 x5 / 칼병 x5 / 버기 x5');

  } else if (msg.content === '!히든 캐럿') {
      const attachment = new Attachment('./원랜디/히든/캐럿.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('\n 희귀 가드포인트 \n 특별 에넬 \n 특별 압살롬 x2 \n 히든 레일리');
      msg.reply('⇒총갯수 :상디 x5 / 쵸파 x5 / 조로 x3 / 루피 x2 / 우솝 x2 / 칼병 x2 / 총병 / 버기');
  }
// TODO: 작업 여기서부터 시작.......
// 히든 해군
  if (msg.content === '!히든 아카이누') {
      const attachment = new Attachment('./원랜디/히든/아카이누.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('\n 희귀 아카이누 \n 희귀 반더데켄 \n 희귀 캡틴키드');
      msg.reply('⇒총갯수 : 루피 x6 / 나미 x6 / 총병 x6 / 조로 x5 / 버기 x5 / 우솝 x4 / 상디 x3 / 쵸파 x3 / 칼병 x3');

  } else if (msg.content === '!히든 아오키지') {
      const attachment = new Attachment('./원랜디/히든/아오키지.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('\n 희귀 아오키지 \n 희귀 다이아몬드 죠즈 \n 희귀 모몬가');
      msg.reply('⇒총갯수 : 쵸파 x7 / 나미 x6 / 칼병 x6 / 상디 x5 / 루피 x4 / 우솝 x4 / 총병 x4 / 조로 x3 / 버기 x2');

  } else if (msg.content === '!히든 베르고') {
      const attachment = new Attachment('./원랜디/히든/베르고.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('\n 희귀 상디디아블잠브 \n 희귀 킨에몬 \n 희귀 바르톨로메오 \n 특별 타시기');
      msg.reply('⇒총갯수 : 총병 x8 / 루피 x6 / 나미 x6 / 조로 x5 / 상디 x5 / 칼병 x5 / 쵸파 x4 / 우솝 x3 / 버기 x3');
  }

  // 히든 해적
  if (msg.content === '!히든 검호미호크') {
      const attachment = new Attachment('./원랜디/히든/검호미호크.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('\n 희귀 미호크 \n 희귀 샹크스 \n 희귀 다이아몬드죠즈');
      msg.reply('⇒총갯수 : 칼병x7 / 조로x5 / 우솝x5 / 루피x4 / 총병x4 / 버기x4 / 나미x3 / 쵸파x3');
  } else if (msg.content === '!히든 킬러') {
      const attachment = new Attachment('./원랜디/히든/킬러.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('\n 희귀 캡틴키드 \n 특별 헤르메포 \n 특별 킬러 \n 특별 바질호킨스');
      msg.reply('⇒총갯수 : 나미x5 / 버기x5 / 조로x4 / 쵸파x4 / 총병x4 / 칼병x2 / 루피x1 / 우솝x1 / 상디x1');
  } else if (msg.content === '!히든 봉쿠레') {
      const attachment = new Attachment('./원랜디/히든/봉쿠레.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('\n 희귀 핸콕 \n 특별 봉쿠레 \n 특별 버기마기탄 \n 특별 이나즈마혁명군');
      msg.reply('⇒총갯수 : 나미x7 / 루피x4 / 상디x4 / 조로x3 / 버기x3 / 총병x2');
  } else if (msg.content === '!히든 류마') {
      const attachment = new Attachment('./원랜디/히든/류마.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('\n 희귀 조로현상금사냥꾼 \n 희귀 류마 \n 안흔함 브룩');
      msg.reply('⇒총갯수 : 조로x11 / 쵸파x5 / 상디x3 / 나미x2 / 우솝x2 / 칼병x2 / 총병x1 / 버기x1');
  } else if (msg.content === '!히든 시류') {
      const attachment = new Attachment('./원랜디/히든/시류.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('시류조합(shiryu): 시류 / 키자루 / 항마의 상 / 벤베크만');
      msg.reply('⇒총갯수 : 칼병x9 / 총병x8 / 우솝x7 / 쵸파x7 / 버기x7 / 상디x6 / 루피x4 / 조로x3 / 나미x3');
  } else if (msg.content === '!히든 페로나') {
      const attachment = new Attachment('./원랜디/히든/페로나.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('페로나조합(perona): 모리아 / 페로나 네거티브프린세스 / 압살롬 / 저격왕 x2 / 장군좀비');
      msg.reply('⇒총갯수 :  조로x12 / 상디x10 / 쵸파x10 / 우솝x7 / 나미x5 / 버기x5 / 루피x3 / 칼병x1');
  }




  // 해적선
  if (msg.content === '!히든 써니호') {
      const attachment = new Attachment('./원랜디/히든/써니호.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('검호조합(mihawk): 미호크 / 샹크스 / 다이아몬드 죠즈');
      msg.reply('⇒총갯수 : 칼병x7 / 조로x5 / 우솝x5 / 루피x4 / 총병x4 / 버기x4 / 나미x3 / 쵸파x3');
  } else if (msg.content === '!히든 모비딕호') {
      const attachment = new Attachment('./원랜디/히든/모비딕호.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('킬러조합(killer): 캡틴 키드 / 헤르메포 / 킬러 / 바질 호킨스');
      msg.reply('⇒총갯수 : 나미x5 / 버기x5 / 조로x4 / 쵸파x4 / 총병x4 / 칼병x2 / 루피x1 / 우솝x1 / 상디x1');
  } else if (msg.content === '!히든 발라티에') {
      const attachment = new Attachment('./원랜디/히든/발라티에.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('봉쿠레조합(bonkurei): 핸콕 / 봉쿠레 / 버기 마기탄 / 이나즈마 혁명군');
      msg.reply('⇒총갯수 : 나미x7 / 루피x4 / 상디x4 / 조로x3 / 버기x3 / 총병x2');
  } else if (msg.content === '!히든 방주맥심') {
      const attachment = new Attachment('./원랜디/히든/방주맥심.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('류마조합(ryuma): 조로 현상금 사냥꾼 / 류마 / 브룩');
      msg.reply('⇒총갯수 : 조로x11 / 쵸파x5 / 상디x3 / 나미x2 / 우솝x2 / 칼병x2 / 총병x1 / 버기x1');
  } else if (msg.content === '!히든 레드포스호') {
      const attachment = new Attachment('./원랜디/히든/레드포스호.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('시류조합(shiryu): 시류 / 키자루 / 항마의 상 / 벤베크만');
      msg.reply('⇒총갯수 : 칼병x9 / 총병x8 / 우솝x7 / 쵸파x7 / 버기x7 / 상디x6 / 루피x4 / 조로x3 / 나미x3');
  }





// 초월
if (msg.content === '!초월 루피') {
    msg.reply('루피 JET개틀링 / 루피 나이트메어 / 에넬 뇌신 / 쿠마');
    msg.reply('⇒총갯수 : 상디x17 / 우솝x15 / 루피x14 / 쵸파x12 / 조로x11 / 나미x11 / 칼병x7 / 총병x4 / 버기x2');
} else if (msg.content === '!초월 조로') {
    msg.reply('전설 조로 / 히든 검호미호크 / 희귀 바르톨로메오 / 안흔함 페로나 / 초월 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 나미') {
    msg.reply('나미 / 금사자 시키 / 나미 크리마텍트 / 아론 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 우솝') {
    msg.reply('카르가라 / 슈가 / 벤베크만 / 페로나 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 상디') {
    msg.reply('상디 / 제프 / 나미 크리마텍트 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 쵸파') {
    msg.reply('쵸파 폭주 / Dr.히루루크 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 로빈') {
    msg.reply('바르톨로메오 / 로브 루치 / 로빈 오하라 / 크로커다일 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 프랑키') {
    msg.reply('쿠마 폭군 / 킨에몬 / 카쿠 / 프랑키 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 브룩') {
    msg.reply('라분 / 류마 / 페로나 네거티브프린세스 / 모리아 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 시라호시') {
    msg.reply('징베 / 반더데켄 / 비비 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 아카이누') {
    msg.reply('센고쿠 / 아카이누 / 에이스 2번대대장 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 아오키지') {
    msg.reply('제파 / 아오키지 / 로빈 오하라 / 스모커 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 키자루') {
    msg.reply('후지토라 / 레일리 / 키자루 / 조로 초신성 / 아론 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 검은수염') {
    msg.reply('검은수염 / 흰수염 / 바질 호킨스 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 샹크스') {
    msg.reply('샹크스 / 검호 미호크 / 캡틴 키드 / 루피 기어세컨드 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 로우') {
    msg.reply('로우 / 시저 / 베포 x2 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 도플라밍고') {
    msg.reply('베르고 / 도플라밍고 / 슈가 / 로우 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 사보') {
    msg.reply('킬러조합(killer): 캡틴 키드 / 헤르메포 / 킬러 / 바질 호킨스');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 후지토라') {
    msg.reply('후지토라 / 킨에몬 / 모몬가 / 스모커 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 타시기') {
    msg.reply('코비 / 시저 / 타시기 / 스모커 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 빅맘') {
    msg.reply('레이쥬 / 상디 / 발라티에 / 브룩 / 쿠마');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!초월 루치') {
    msg.reply('로브 루치 / 사보 / 로빈 오하라 / 쿠마');
    msg.reply('⇒총갯수 : ');
}

// 불멸
if (msg.content === '!불멸 로져') {
    msg.reply('센고쿠 / 에이스 / 거프 + 나무 x10');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!불멸 레일리') {
    msg.reply('핸콕 / 루피 나이트메어 / 레일리 + 나무 x10');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!불멸 스코퍼가반') {
    msg.reply('레이쥬 / 조로 / 샹크스 + 나무 x10');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!불멸 거프') {
    msg.reply('거프 / 코비 / 루피 JET개틀링 + 나무 x5');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!불멸 흰수염') {
    msg.reply('흰수염 / 바르톨로메오 / 마르코 환수종불사조 + 나무 x10');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!불멸 센고쿠') {
    msg.reply('센고쿠 / 레이쥬 / 로브 루치 + 나무 x10');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!불멸 시키') {
    msg.reply('금사자 시키 / 상디 / 카르가라 + 나무 x10');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!불멸 드래곤') {
    msg.reply('드래곤 / 쿠마 폭군 / 제프 + 나무 x10');
    msg.reply('⇒총갯수 : ');
} else if (msg.content === '!불멸 제트') {
    msg.reply('제파 / 루피 JET개틀링 / 슈가 + 나무 x10');
    msg.reply('⇒총갯수 : ');
}



  }
