// SIGINT
// SIGTERM
// SIGKILL

import express from "express";
import mysql from "mysql2";
// const connection = mysql.createConnection({
//   /* your config */
// });

import WebSocket from "ws";
// const ws = new WebSocket("ws://example.com");

import { fork } from "child_process";
// const child = fork("path/to/your/script.js");

const app = express();
const server = app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received.");
  server.close(() => {
    console.log("Closed out remaining connections");
    // closeDBConnection();
    // closeWSConnection();
    // child.kill('SIGINT');

    // Additional cleanup tasks go here

    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received.");
  server.close(() => {
    console.log("Closed out remaining connections");
    // closeDBConnection();
    // closeWSConnection();
    // child.kill('SIGINT');

    // Additional cleanup tasks go here

    process.exit(0);
  });
});

function closeDBConnection() {
  connection.end((err) => {
    if (err) {
      console.error("Error closing MySQL connection:", err);
      process.exit(1);
    } else {
      console.log("MySQL connection closed.");
      process.exit(0);
    }
  });
}

function closeWSConnection() {
  ws.close(1000, "Process terminated"); // 1000 is the normal closure code
}
