const { find } = require("../models/User");
const User = require("../models/User");

const getAllUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }
    catch(error){
        res.status(400).json({message: 'could not get all users'});
    }
}

const getAllStudents = async (req,res) => {
    try{
        const students = await User.find({role: "student"});
        res.json(students);
    }
    catch(error){
        res.status(400).json({message: error});
    }
}

const getMentor = async (req,res) => {
    try{
        const mentor = await User.find({role: "mentor"});
        res.json(mentor);
    }
    catch(error){
        res.status(400).json({message: 'could not get mentor'});
    }
}

const getStudent = async (req,res) => {
    try{
        const student = await student.find(); //TODO
        res.json(student);
    }
    catch(error){
        res.status(400).json({message: 'could not get student'});
    }
}

const addStudent = async (req,res) => {
    try{
        const student = new User({
            username: 'gal',
            password: '123',
            role: 'mentor'
        });
        await student.save()
        .then(data=> {console.log('success')})
        .catch(err => console.log(err));
        res.json(student);
    }
    catch(error){
        console.log(error)
        res.status(400).json(error);
    }
}

const validateLogin = async (req,res) => {
    try{
        console.log(req.body.data.username)
        const user = await User.find({username: req.body.data.username, password: req.body.data.password});
        console.log("user is",user)
        res.json(user);

    }
    catch(error){
        console.log(error)
        res.status(400).json(error);
    }
}



module.exports = {
    getAllUsers,
    getAllStudents,
    getMentor,
    getStudent,
    addStudent,
    validateLogin,
};