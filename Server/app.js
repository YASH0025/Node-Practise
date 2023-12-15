const http = require("http");
const fs = require("fs");

const server1 = http.createServer((req, res) => {
  fs.readFile("./sample.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });

  fs.writeFile("newFile.txt", "this is the new file, ", (err) => {
    if (err) throw err;
    console.log("suceefully saved");
  });
  fs.appendFile("newFile.txt", "this is the newest 1 text", (err) => {
    if (err) throw err;
    console.log("updated");
  });

  // fs.unlink('fix.txt',(err)=>{
  //     if(err) throw err
  //     console.log("fileDeleted");
  // })
  fs.rename("newFile.txt", "updatedFile.txt", (err) => {
    if (err) throw err;
    console.log("fileRenamed");
  });
});

PORT = 5500;

server1.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
