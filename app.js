const express = require('express')
const app = express()
const usersRouts = require('./routs/userRouts');
const codeBlockRoutes = require('./routs/codeBlockRouts')
const sessionRoutes = require('./routs/sessionRouts')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require("http")
const {Server} = require("socket.io")
const server = http.createServer(app)
const dotenv = require('dotenv');
dotenv.config({path: 'config.env'});
const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST"],
    },
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT;

server.listen(port, () => {
    console.log("server started on port", port)
})

const uri = process.env.DB_CONNECTION;

async function connect(){
    try {
        await mongoose.connect(uri)
        console.log("connected to mongoDB");
    }
    catch(error){
        console.error(error);
    }
}

connect();

//define routs
app.use('/users', usersRouts);
app.use('/codeBlock', codeBlockRoutes);
app.use('/session', sessionRoutes);

//define socket details
io.on("connection", (socket) => {
    console.log(`user connected: ${socket.id}`);

    socket.on("join_session", (data) => {
        socket.join(data);
    });
    socket.on("update_code", (data) => {
        console.log("data from client", data);
        socket.to(data.sessionUuid).emit("receive_updated_code", data)
    })
});



