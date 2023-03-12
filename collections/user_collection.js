const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
}, { collection: 'user'});

const User = mongoose.model('User',userSchema);

function getAllUsers(){
    return new Promise(async function(resolve,reject){
        try{
            const allUsers = await User.find();
            resolve({'success': true, 'value': allUsers});
        } catch (error) {
            reject({'success': false});
        }
    });
}

function getUser(data){
    return new Promise(async function(resolve,reject){
        try{
            const value = await User.findById(data.id);
            resolve({'success': true, 'value': value});
        } catch (error) {
            reject({'success': false});
        }
    });
}

function insertUser(data){
    return new Promise(async function(resolve,reject){
        const user = new User({
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age
        });
        try{
            const savedUser = await user.save();
            resolve({'success': true, 'value': savedUser});
        } catch(error){
            reject({'success': false});
        }
    });
}

function updateUser(data){
    return new Promise(async function(resolve,reject){
        const user = {
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age
        };
        try{
            const updatedUser = await User.findByIdAndUpdate(
                data.id,
                user
            );
            resolve({'success': true, 'value': updatedUser});
        } catch(error){
            console.log(error);
            reject({'success': false});
        }
    });
}

function deleteUser(data){
    return new Promise(async function(resolve,reject){
        try{
            const deletedUser = await User.findByIdAndDelete(data.id);
            resolve({'success': true, 'value': deletedUser});
        } catch(error){
            console.log(error);
            reject({'success': false});
        }
    });
}

module.exports = {
    insertUser,
    updateUser,
    deleteUser,
    getUser,
    getAllUsers
}