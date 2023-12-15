const os = require("os");
const http = require("http");
const event = require("events");
const eventEmitter = new event.EventEmitter();
const dns = require("dns");
const path = require('path')

const server4 = http.createServer((req, res) => {
  // console.log("CPU architecture: " + os.arch());

  // console.log("Free memory: " + os.freemem());

  // console.log("Total memory: " + os.totalmem());

  // console.log('List of network : ' + os.networkInterfaces());

  // console.log('OS directory for temp files : ' + os.tmpdir());

  ///events

  // function eventHandler(){
  //     console.log("the event handler is triggerd");
  // }
  // eventEmitter.on('scream', eventHandler)
  // eventEmitter.emit('scream')

  //process

  //   console.log("Command Line Arguments:", process.argv);

  //   console.log("Node.js Version:", process.version);

  //   console.log("Platform:", process.platform);

  //   console.log("Current Working Directory:", process.cwd());

  //   console.log("Environment Variables:", process.env);

  //   process.on("exit", (code) => {
  //     console.log(`Process is about to exit with code ${code}`);
  //   });

  //   process.exitCode = 0;
  //   process.exit();

  //DNS

//   dns.lookup("www.geeksforgeeks.org", (err, adderess, family) => {
//     if (err) {
//       console.log("Error in fetching the address", err);
//       return;
//     }

//     console.log("IP adddress", adderess);
//   });

//   dns.resolve("www.geeksforgeeks.org", (err, adderess) => {
//     if (err) {
//       console.log("Error in fetching the address", err);
//       return;
//     }
//     console.log("resolved ip address"), adderess;
//   });

//   const ipAddress = "93.184.216.34";
//   dns.reverse(ipAddress, (err, hostnames) => {
//     if (err) {
//       console.log("Reverse DNS Lookup Error:", err);
//       return;
//     }

//     console.log("Hostnames for IP Address:", hostnames);
//   });


///path

const joinedPath = path.join('folder', 'subfolder', 'file.txt');
console.log('Joined Path:', joinedPath);

const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');
console.log('Absolute Path:', absolutePath);

const parsedPath = path.parse('/home/user/documents/file.txt');
console.log('Parsed Path:', parsedPath);

const createdPath = path.format({
  root: '/',
  dir: '/home/user/documents',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
});
console.log('Created Path:', createdPath);
});

const PORT = 3000;

server4.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
