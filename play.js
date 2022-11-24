const net = require("net");

const connect = require('./client') 

// setup interface to handle user input from stdin

// handleUserInput = function() {
// if (key === '\u0003') {
//   process.exit();
// }};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  process.stdin.on("data", (key) => {
    process.stdout.write('.');    
      if (key === '\u0003') {
        process.exit();
      }      
  });   
  //return stdin;
};

console.log("Connecting ...");
connect();

setupInput()