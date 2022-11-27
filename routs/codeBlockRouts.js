const express = require('express')
const router = express.Router();
const codeBlockController = require('../controllers/codeBlockController')

router.get('/', codeBlockController.getAllCodeBlocks);
router.get('/:name', codeBlockController.getCodeBlock);
router.post('/pst', codeBlockController.addCodeBlock);

module.exports = router