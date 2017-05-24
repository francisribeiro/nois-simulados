const database = require('../config/database');

var simuladoSchema = function(id, user, executionTime, title){
	this.id = id;
	this.user = user;
	this.executionTime = executionTime;
	this.title = title;
}

const Simulado = module.exports = simuladoSchema;

module.exports.insertSimulado = insertSimulado;
module.exports.getSimulado = getSimulado;
module.exports.listSimulados = listSimulados;
module.exports.updateSimulado = updateSimulado;
module.exports.deleteSimulado = deleteSimulado;
module.exports.getLastIdSimulado = getLastIdSimulado;
module.exports.getSimuladosByUsuario = getSimuladosByUsuario;

// Insert Simulado
function insertSimulado(simulado, callback){
    database.query(
		'INSERT INTO simulado(usuario, tempoExecucao, titulo) values($1, $2, $3)',
		[simulado.user, simulado.executionTime, simulado.title], 
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

// Update Simulado
function updateSimulado(simulado, callback){
	database.query(
		'UPDATE simulado set tempoExecucao = $1, titulo = $2 WHERE id = $3',
		[simulado.executionTime, simulado.title, simulado.id], 
		callback
	);
}

// Delete Simulado
function deleteSimulado(id, callback){
	database.query(
		'DELETE from simulado where id = ($1)',
		[id],
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