const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const database = require('../config/database');

const router = express.Router();

// Registrar
router.post('/register', (req, res, next) => {
    let newUser = new User(
        req.body.nome,
        req.body.email,
        req.body.username,
        req.body.password,
        req.body.type
    );

    User.addUser(newUser, (err, user) => {
        if (err) res.json({success: false, msg: 'Falha ao registrar usuário'});
        else res.json({success: true, msg: 'Usuário Registrado'});
    });
});


// Autenticação
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user.rows[0]) return res.json({ success: false, msg: 'Usuário não encontrado' });
        User.comparePassword(password, user.rows[0].password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user.rows[0], database.secret, {
                    expiresIn: 604800 // 1 semana
                });
                res.json({
                    success: true,
                    token: `JWT ${token}`,
                    user: {
                        name: user.rows[0].name,
                        username: user.rows[0].username,
                        email: user.rows[0].email
                    }
                })
            } else return res.json({ success: false, msg: 'Password Inválido' });
        });
    });
});

// Perfil
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user.rows[0] });
});

module.exports = router;