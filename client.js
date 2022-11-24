const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("G'day! You are connected, mate!")
  });

  conn.on("connect", () => {
    conn.write("Name: MRG");
   
  });

  conn.on("data", () => {
    console.log("We kick idlers here, mate!")
  });

  return conn;
};

module.exports = connect

// console.log("Connecting ...");
// connect();

// setTimeout(() => {
//   conn.write("Move: up");
// }, 2000);

// setInterval(() => {
//   conn.write("Move: down");
// }, 1000);