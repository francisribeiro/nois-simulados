const database = require('../config/database');

var simuladoSchema = function(id, user, executionTime, title, area){
	this.id = id;
	this.user = user;
	this.executionTime = executionTime;
	this.title = title;
	this.area = area;
}

const Simulado = module.exports = simuladoSchema;

module.exports.insertSimulado = insertSimulado;
module.exports.getSimulado = getSimulado;
module.exports.listSimulados = listSimulados;
module.exports.getLastIdSimulado = getLastIdSimulado;
module.exports.getSimuladosByUsuario = getSimuladosByUsuario;
module.exports.countSimulados = countSimulados;
module.exports.getSimuladoByID = getSimuladoByID;
module.exports.listSimuladosArea = listSimuladosArea;
module.exports.getSimuladoArea = getSimuladoArea;

// Insert Simulado
function insertSimulado(simulado, callback){
    database.query(
		'INSERT INTO simulado(usuario, tempoExecucao, titulo, area) values($1, $2, $3, $4)',
		[simulado.user, simulado.executionTime, simulado.title, simulado.area], 
		callback
	);
}

// Get Simulado
function getSimulado(usuario, titulo, callback){
	database.query(
		'SELECT * from simulado where usuario = ($1) and titulo = ($2)',
		[usuario, titulo],
		callback
	);
}

// List Simulados
function listSimulados(callback){
	database.query(
		'SELECT * from simulado',
		'',
		callback
	);	
}


// Get last ID Simulado
function getLastIdSimulado(callback){
	database.query(
		'SELECT max(id) from simulado',
		'',
		callback
	);	
}

// Get Simulados por Usuário
function getSimuladosByUsuario(usuario, callback){
	database.query(
		'SELECT * from simulado where usuario = ($1)',
		[usuario],
		callback
	);
}

// Count Simulado
function countSimulados(callback){
	database.query(
		'SELECT count(*) from simulado',
		'',
		callback
	);	
}

// Get Simulado por ID
function getSimuladoByID(id, callback){
	database.query(
		'SELECT * from simulado where id = ($1)',
		[id],
		callback
	);
}

// Delete Simulado
module.exports.deleteSimulado = (function (id, callback) {
    database.query(
        'DELETE from simulado where id = ($1)', [id],
        callback
    );
});

// List Simulado por Area
function listSimuladosArea(callback){
	database.query(
		'SELECT area, count(id) FROM simulado GROUP BY area',
		[],
		callback
	);
}

// GEt Simulado por Area
function getSimuladoArea(area, callback){
	database.query(
		'SELECT * FROM simulado simulado WHERE area = ($1)',
		[area],
		callback
	);
}