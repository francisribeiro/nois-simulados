const database = require('../config/database');
const Question = require('./question');
const Alternative = require('./alternative');

var questoesSimuladoSchema = function(id, simulado, questao){
	this.id = id;
	this.simulado = simulado;
	this.questao = questao;
}

const QuestoesSimulado = module.exports = questoesSimuladoSchema;

module.exports.insertQuestaoSimulado = insertQuestaoSimulado;
module.exports.countQuestionsSimulado = countQuestionsSimulado;

// Insert Questão Simulado
function insertQuestaoSimulado(informacoes, callback){

	var simulado = informacoes.simulado;
	var questoes = informacoes.questoes;

	var cont = 0;
	questoes.forEach(function(questao, index, array){
		database.query(
			'INSERT INTO questoessimulado(simulado, questao) values($1, $2)',
			[simulado, questao],
			function(err, result){
				cont++;
				if(cont ===  array.length){
					callback();
				}			
			}
		);	
		
	});
}

// Count Questões de um Simulado
function countQuestionsSimulado(simuladoID, callback){
	database.query(
		'select count(*) from questoessimulado  where simulado = $1',
		[simuladoID],
		callback
	);
}
