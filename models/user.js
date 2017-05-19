const bcrypt = require('bcryptjs');
const database = require('../config/database');

// User Schema
var userSchema = function (name, email, username, password, type) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
    this.type = type;
}

const User = module.exports = userSchema;


module.exports.getUserById = (function (id, callback) {
    const query = database.query(`SELECT * FROM usuario WHERE id = ($1)`, [id], callback);
});

module.exports.getUserByUsername = (function (username, callback) {
    const query = database.query(`SELECT * FROM usuario WHERE username = ($1)`, [username], callback);
});

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
};

// Add um usuário no banco
module.exports.addUser = (function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            database.query('INSERT INTO usuario(nome, email, username, password, tipo) values($1, $2, $3, $4, $5)', [newUser.name, newUser.email, newUser.username, newUser.password, newUser.type], callback);
        });
    });
});