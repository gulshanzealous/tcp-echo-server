const winston =  require('winston')

let logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log` 
      // - Write all logs error (and below) to `error.log`.
      //
      new winston.transports.File({ 
          filename: 'error.log', 
          level: 'error',
          timestamp: true

        }),
      new winston.transports.File({ 
          filename: 'combined.log',
          timestamp: true
        })
    ]
  });
  
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  // 
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.json(),
      colorize: true,
    //   timestamp:true
    }));
}

// logger.stream = {
//     write: function(message, encoding){
//         logger.info(message);
//     }
// };

module.exports = logger



// LOGGING LEVELS
// { 
//     emerg: 0, 
//     alert: 1, 
//     crit: 2, 
//     error: 3, 
//     warning: 4, 
//     notice: 5, 
//     info: 6, 
//     debug: 7
//   }