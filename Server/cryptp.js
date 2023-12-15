const http = require("http");
const crypto = require("crypto");

const server3 = http.createServer((req, res) => {
    const secretKey = 'MySecretKey';

  const plainText = "hello";
  const cipher = crypto.createCipher("aes-256-cbc", secretKey);

  let encryptedText = cipher.update(plainText, "utf-8", "hex");
  encryptedText += cipher.final("hex");

  console.log("Encrypted Text:", encryptedText);

  const decipher = crypto.createDecipher("aes-256-cbc", secretKey);

  let decryptedText = decipher.update(encryptedText, "hex", "utf-8");
  decryptedText += decipher.final("utf-8");

  console.log("Decrypted Text:", decryptedText);
});


const PORT = 3000;

server3.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})


