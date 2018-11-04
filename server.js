const net = require('net');
const logger = require('./loggerSetup')

const server = net.createServer((socket) => {
    // socket.end('goodbye\n');
    socket.on("data",(data)=>{
        // logger.info(data)
        socket.write(`acknowldged by server at : ${JSON.stringify(server.address())} \n`);
        socket.write(data.toString())
        socket.pipe(socket);
        socket.end()
    })
    socket.on('end', () => {
        logger.info('client disconnected');
    });
  })
  .on('connection',()=>{
      logger.info('connected to a socket')
  })
  .on('error', (err) => {
    // handle errors here
    logger.error(err)
    throw err;
  });
  
  // grab an arbitrary unused port.
  server.listen(2222,"0.0.0.0",() => {
    logger.info('opened server on', server.address());
  });