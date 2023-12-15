const https = require("https");

const ex = {
  hostname: "www.example.com",
  port: 443,
  path: "/",
  method: "GET",
};

const testServer = https.request(ex, (response) => {
  let data = " ";
  response.on("data", (chunks) => {
    data = data + chunks;
  });
  response.on("end", () => {
    console.log("Response:", data);
  });
});

testServer.on("error", (e) => {
  console.error("Error:", e.message);
});

testServer.end();
