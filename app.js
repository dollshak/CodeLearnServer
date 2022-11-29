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
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 5000;

const uri = 'mongodb+srv://Shaked:123@codelearn.uqobdhi.mongodb.net/?retryWrites=true&w=majority'
// app.listen(port, () => console.log('server started'));

server.listen(port, () => {
    console.log("listening")
})
async function connect(){
    try {
        await mongoose.connect(uri)
        console.log("connected to mongoDB");
    }
    catch(error){
        console.error(error);
    }
}

connect()

app.use('/users', usersRouts);
app.use('/codeBlock', codeBlockRoutes)
app.use('/session', sessionRoutes)

io.on("connection", (socket) => {
    console.log(`user connected: ${socket.id}`);

    socket.on("join_session", (data) => {
        socket.join(data);
    });
    socket.on("update_code", (data) => {
        console.log("data from client", data);
        socket.to(data.sessionUuid).emit("receive_updated_code", data)
    })


    // socket.on("send_message", (data) => {
    //     socket.broadcast.emit("receive_message", data)
    // });

    // socket.on("join_room", (data) => {
    //     socket.join(data);
    // })
});



