const { v4: uuidv4 } = require('uuid');
const Session = require("../models/Session");

const getAllSessions = async (_req, res) => {
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
        const session = await Session.find({uuid: req?.params?.uuid});
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
            userId: req?.body?.data?.userId,
            codeBlockId: req?.body?.data?.codeBlockId,
        });
        await session.save();
        res.json(session);
    }
    catch(error){
        console.log("could not add session")
        res.status(400).json(error);
    }
}

module.exports = {
    getAllSessions,
    getSession,
    addSession
};