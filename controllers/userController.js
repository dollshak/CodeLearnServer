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
            username: req?.body?.username,
            password: req?.body?.password,
            role: 'student'
        });
        await student.save()
        .then(data=> {})
        .catch(err => console.log(err));
        res.json(student);
    }
    catch(error){
        console.log("add student got error:",error)
        res.status(400).json(error);
    }
}

const validateLogin = async (req,res) => {
    try{
        const user = await User.find({username: req?.body?.data?.username, password: req?.body?.data?.password});
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
    validateLogin,
};