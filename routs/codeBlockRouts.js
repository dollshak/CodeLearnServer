const express = require('express')
const router = express.Router();
const codeBlockController = require('../controllers/codeBlockController')

router.get('/:id', codeBlockController.getCodeBlock);
router.get('/', codeBlockController.getAllCodeBlocks);
router.post('/', codeBlockController.addCodeBlock);

module.exports = router