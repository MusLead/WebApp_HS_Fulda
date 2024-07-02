const fs = require('fs');

var database= {
    users: require('../public/users.json'),
    setPosts: function(data){
        this.users=data;
    }
}

// var lastID = database.users[database.users.length - 1].id;
var lastID = database.users.length;

const getAllUsers = {
    status: 200,
    json: {
        "success": true,
        data: database.users
    }
}

const createUser = req => {
    const { username, password, email } = req.body;
    lastID++;
    const newUser = {
        id: lastID++,
        username,
        password,
        email
    };
    database.users.push(newUser);
    let usersJSON = JSON.stringify(database.users);
    fs.writeFileSync('public/users.json', usersJSON);
    return {
        status: 201,
        json: { "success": true, user: newUser}
    };
    
}

const signInUser = req => {
    const { username, password } = req.body;
    const user = database.users.find(u => u.username == username && u.password == password);
    if (user) {
        return {
            status: 200,
            json: { "success": true, user: user}
        }
    } else {
        return {
            status: 404,
            json: { "success": false, "message" : "User not found"}
        }
    }
}

const updateUser = req => {  
    const user = database.users.find(u => u.id == req.params.id);
    if (user) {
        const { username, password, email } = req.body; // take the data from the submited request
        user.username = username;
        user.password = password;
        user.email = email;
        let usersJSON = JSON.stringify(database.users);
        fs.writeFileSync('public/users.json', usersJSON);
        return {
            status: 200,
            json: { "success": true, user: user}
        };
    } else {
        return createUser(user);
    }
}

const deleteUser =  req => {
    const user = database.users.find(u => u.id == req.params.id);
    if (user) {
        database.users = database.users.filter(u => u.id != req.params.id);
        let usersJSON = JSON.stringify(database.users);
        fs.writeFileSync('public/users.json', usersJSON);
        return {
            status: 200,
            json: { "success": true, "message" : "Deleted user is " + user.username }
        };
    } else {
        return {
            status: 200,
            json: { "success": true, "message" : "User has been deleted"}
        };
    }
    
}

const readUser =  req => {
    const user = database.users.find(u => u.id == req.params.id);
    if (user) {
        return {
            status: 200,
            json: { "success": true, user: user}
        }
    } else {
        return {
            status: 404,
            json: { "success": false, "message" : "User not found"}
        }
    }
}

module.exports = {
    createUser,
    signInUser,
    updateUser,
    deleteUser,
    readUser,
    getAllUsers
}