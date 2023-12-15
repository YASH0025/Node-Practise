const http = require("http");
const fs = require("fs");
 const net = require('net')

const readableStream = fs.createReadStream("updatedFile.txt");
const writableStream = fs.createWriteStream("test.txt");
const duplexStream = new net.Socket()


const server2 = http.createServer((req, res) => {
  readableStream.on("data", (chunk) => {
    console.log(`this the ${chunk.length} of data`);
  });
  readableStream.on("end", (chunk) => {
    console.log("the end");
  });
  writableStream.write("hello,");
  writableStream.write("vrooooo");
  writableStream.end();

  duplexStream.on('data', (data)=>{
    console.log(`server received data: ${data}`);
    duplexStream.end()
})
});

const PORT = 5500;

server2.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
