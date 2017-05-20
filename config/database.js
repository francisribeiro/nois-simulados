const pg = require('pg');
const secret = 'yoursecret';

// Cria uma configuração para o comportamento do pooling e opções do cliente.
var config = {
    user: 'admin',
    database: 'nois-simulados',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};

// Iniciando o pool de conecções
const pool = new pg.Pool(config);

pool.on('error', function (err, client) {
    console.error('Erro no cliente Postgres!', err.message, err.stack);
});

// A query para passar queries para o pool 
module.exports.query = function (text, values, callback) {
    console.log('query: ', text, values);
    if(values == null || values == '') pool.query(text, callback);
    else return pool.query(text, values, callback);
};

// Multiplas operações, como as de transação 
module.exports.connect = function (callback) {
    return pool.connect(callback);
};

module.exports.secret = secret;