const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers);
router.get('/students', userController.getAllStudents);
router.get('/student/:id', userController.getStudent);
router.get('/mentor/:id', userController.getMentor);
router.post('/studentTry', userController.addStudent)

module.exports = router