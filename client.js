const net = require('net');
const logger = require('./loggerSetup')

const client = net.createConnection({ port: 2222, host:'0.0.0.0' }, () => {
  // 'connect' listener
//   logger.info('connected to server!');
  client.write('hello world');
});
client.on('data', (data) => {
  logger.info(data.toString());
//   client.end();
});
client.on('end', () => {
//   logger.info('disconnected from server');
});