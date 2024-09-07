const express = require('express');
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);


io.on("connection", (socket) => {
    
  socket.on("user-message", (message) => {
    io.emit("message", message);
  });
});

app.use(express.static(path.resolve("./public")));

app.get('/',function(req,res){
    return res.sendFile("./public/index.html");
})


const PORT = 9000; 

server.listen(PORT, ()=>{
    console.log(`Server running on PORT 9000`);
})

