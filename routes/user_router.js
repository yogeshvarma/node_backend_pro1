var express = require('express');
var usersRouter = express.Router();
var userController = require('../controllers/user_controller');

usersRouter.get('/getUser', userController.getUser);
usersRouter.get('/getAllUsers', userController.getAllUsers);
usersRouter.post('/insertUser', userController.insertUser);
usersRouter.post('/updateUser', userController.updateUser);
usersRouter.post('/deleteUser', userController.deleteUser);

module.exports = usersRouter;