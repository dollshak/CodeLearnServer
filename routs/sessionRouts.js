const express = require('express')
const router = express.Router();
const sessionController = require('../controllers/sessionController')

router.get('/', sessionController.getAllSessions);
router.get('/:uuid', sessionController.getSession);
router.post('/', sessionController.addSession);

module.exports = router