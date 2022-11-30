const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers);
router.get('/students', userController.getAllStudents);
router.post('/student', userController.addStudent);
router.post('/mentor', userController.addMentor)
router.post('/login', userController.validateLogin)

module.exports = router