const express = require('express')
const app = express()
const usersRouts = require('./routs/userRouts');
const codeBlockRoutes = require('./routs/codeBlockRouts')
const sessionRoutes = require('./routs/sessionRouts')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 5000;

const uri = 'mongodb+srv://Shaked:123@codelearn.uqobdhi.mongodb.net/?retryWrites=true&w=majority'
app.listen(port, () => console.log('server started'));

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
// app.use(bodyParser.json())
// app.use(bodyParser .urlencoded({ extended: true }))

