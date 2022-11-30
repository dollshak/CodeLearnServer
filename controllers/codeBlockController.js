const { find } = require("../models/User");
const CodeBlock = require("../models/CodeBlock");

const getAllCodeBlocks = async (_req, res) => {
    try{
        const codeBlocks = await CodeBlock.find();
        res.json(codeBlocks);
    }
    catch(error){
        res.status(400).json({message: 'could not get all code Blocks'});
    }
}

const getCodeBlock = async (req,res) => {
    try{
        const codeBlock = await CodeBlock.find({_id: req?.params?.id});
        res.json(codeBlock);
    }
    catch(error){
        res.status(400).json({message: error});
    }
}

const addCodeBlock = async (req,res) => {
    try{
        const codeBlock = new CodeBlock({
            title: req?.body?.title,
            code: req?.body?.code,
        });
        await codeBlock.save()
        .then(data=> {console.log('success')})
        .catch(err => console.log(err));
        res.json(codeBlock);
    }
    catch(error){
        console.log("could not add codeBlock")
        res.status(400).json(error);
    }
}


module.exports = {
    getAllCodeBlocks,
    getCodeBlock,
    addCodeBlock
};