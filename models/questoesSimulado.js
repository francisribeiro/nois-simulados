const database = require('../config/database');

var questoesSimuladoSchema = function(id, simulado, questao){
	this.id = id;
	this.simulado = simulado;
	this.questao = questao;
}

const QuestoesSimulado = module.exports = questoesSimuladoSchema;

module.exports.insertQuestaoSimulado = insertQuestaoSimulado;

// Insert Questão Simulado
function insertQuestaoSimulado(questoesSimulado, callback){
    database.query(
		'INSERT INTO questoesSimulado(simulado, questao) values($1, $2)',
		[questoesSimulado.simulado, questoesSimulado.questao], 
		callback
	);
}