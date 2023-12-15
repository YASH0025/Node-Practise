const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);
    
    socket.write('Hello, client!');
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

const client = net.connect(3000, 'localhost', () => {
  client.on('data', (data) => {
    console.log(`Received data from server: ${data}`);
    
    client.end(); 
  });

  client.write('Hello, server!');
});
