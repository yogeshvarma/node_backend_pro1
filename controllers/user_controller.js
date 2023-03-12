var userCollection = require('../collections/user_collection')

function getUser(req,res){
    userCollection.getUser(req.query).then(
        result => res.send(result),
        error => res.send(error)
    );
}

function getAllUsers(req,res){
    userCollection.getAllUsers().then(
        result => res.send(result),
        error => res.send(error)
    );
}

function insertUser(req,res){
    userCollection.insertUser(req.body).then(
        result => res.send(result),
        error => res.send(error)
    );
}

function updateUser(req,res){
    userCollection.updateUser(req.body).then(
        result => res.send(result),
        error => res.send(error)
    );
}

function deleteUser(req,res){
    userCollection.deleteUser(req.body).then(
        result => res.send(result),
        error => res.send(error)
    );
}

module.exports = {
    insertUser,
    updateUser,
    deleteUser,
    getUser,
    getAllUsers
}