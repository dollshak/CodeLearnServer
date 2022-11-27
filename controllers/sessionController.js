const { v4: uuidv4 } = require('uuid');
const Session = require("../models/Session");

const getAllSessions = async (req, res) => {
    try{
        const sessions = await Session.find();
        res.json(sessions);
    }
    catch(error){
        res.status(400).json({message: 'could not get all sessions'});
    }
}

const getSession = async (req,res) => {
    try{
        const session = await Session.find({uuid: req.params.uuid});
        res.json(session);
    }
    catch(error){
        res.status(400).json({message: error});
    }
}

const addSession = async (req,res) => {
    try{
        const session = new Session({
            uuid: uuidv4(),
            userId: req.body.userId,
            codeBlockId: req.body.codeBlockId,
        });
        await session.save()
        .then(data=> {console.log('success')})
        .catch(err => console.log(err));
        res.json(Session);
    }
    catch(error){
        console.log(error)
        res.status(400).json(error);
    }
}

module.exports = {
    getAllSessions,
    getSession,
    addSession
};