var winston = require('winston');
var moment = require('moment');   //한국시간을 나타내기 위한 모듈 추가
const fs = require('fs');
const logDir ='log';

exports.logfunc = function(msg) {
  /*로그 만드는 함수(방법) */
  function log(info){
      console.log(info);
      if (!fs.existsSync(logDir)) {
          fs.mkdirSync(logDir);
      }

      var logger = new (winston.createLogger)({
          transports: [
            new (winston.transports.Console)({
             colorize: true,
             level: 'info',
             timestamp: function(){             //한국 시간 나타내는법
              return moment().format("YYYY-MM-DD HH:mm:ss");
            }
           }),
            new (require('winston-daily-rotate-file'))({
              level: 'info',
              filename: `${logDir}/log.log`,
              prepend: true,
              timestamp: function(){             //한국 시간 나타내는법
                  return moment().format("YYYY-MM-DD HH:mm:ss");
                }
            })
          ]
        });
    try{
        logger.info(info);
      }catch(exception){
        logger.error("ERROR=>" +exception);
      }
  }

  var info = msg.channel;
  log(info);
}
