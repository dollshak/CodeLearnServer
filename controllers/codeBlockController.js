const { find } = require("../models/User");
const CodeBlock = require("../models/CodeBlock");

const getAllCodeBlocks = async (req, res) => {
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
        const codeBlock = await CodeBlocks.find({name: "student"});
        res.json(codeBlock);
    }
    catch(error){
        res.status(400).json({message: error});
    }
}

const addCodeBlock = async (req,res) => {
    try{
        const codeBlock = new CodeBlock({
            title: 'codeBlock1',
            code: 'if true print(1)'
        });
        await codeBlock.save()
        .then(data=> {console.log('success')})
        .catch(err => console.log(err));
        res.json(codeBlock);
    }
    catch(error){
        console.log(error)
        res.status(400).json(error);
    }
}


module.exports = {
    getAllCodeBlocks,
    getCodeBlock,
    addCodeBlock
};