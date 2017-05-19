const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const users = require('./routes/users');

const app = express();
const port = process.env.port || 3000;

// CORS Middleware
app.use(cors());

// Setando a Pasta Estática
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Rota para Usuários
app.use('/users', users);

// Rota para o Index
app.get('/', (req, res) => {
    res.send('Invalid endpoint!');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Iniciando o Servidor
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Servidor rodando na porta ${port}`);
});
