const express = require ('express')
const socketio = require ('socket.io')
const http = require ('http')

const PORT = process.env.PORT || 5000;

const router = require ('./router')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on ('conection', (socket) => {
    console.log('we hae a new conection!!!');

    socket.on ('disconnect', () => {
        console.log('user had left!!!')
    })
});

app.use (router);

server.listen (PORT, () => console.log('Server has started on port ${PORT}'));