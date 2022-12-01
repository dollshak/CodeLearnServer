const { find } = require("../models/User");
const User = require("../models/User");

const getAllUsers = async (_req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }
    catch(error){
        res.status(400).json({message: 'could not get all users'});
    }
}

const getAllStudents = async (_req,res) => {
    try{
        const students = await User.find({role: "student"});
        res.json(students);
    }
    catch(error){
        res.status(400).json({message: error});
    }
}

const addStudent = async (req,res) => {
    try{
        const student = new User({
            username: req.body.username,
            password: req.body.password,
            role: 'student'
        });
        await student.save();
        res.json(student);
    }
    catch(error){
        console.log("add student got error:",error)
        res.status(400).json(error);
    }
}

const addMentor = async (req,res) => {
    try{
        const mentor = new User({
            username: req.body.username,
            password: req.body.password,
            role: 'mentor'
        });
        await mentor.save();
        res.json(mentor);
    }
    catch(error){
        console.log("add mentor got error:",error)
        res.status(400).json(error);
    }
}

const validateLogin = async (req,res) => {
    try{
        const user = {
            username: "mentor",
            password: "123",
            role: 'mentor'
        }
        // const user = await User.find({username: req.body.data.username, password: req.body.data.password});
        res.json(user);
    }
    catch(error){
        console.log("validate login got error:", error)
        res.status(400).json(error);
    }
}



module.exports = {
    getAllUsers,
    getAllStudents,
    addStudent,
    addMentor,
    validateLogin,
};