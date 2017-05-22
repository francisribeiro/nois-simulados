const database = require('../config/database');

var alternativeSchema = function(id, alternative, correct, questionId){
	this.id = id;
	this.alternative = alternative;
	this.correct = correct;
	this.questionId = questionId;
}

const Alternative = module.exports = alternativeSchema;

module.exports.insertAlternative = insertAlternative;
module.exports.listAlternativesByQuestion = listAlternativesByQuestion;
module.exports.updateAlternative = updateAlternative;
module.exports.getCorrect = getCorrect;
module.exports.getId = getId;

// Insert Alternative
function insertAlternative(alternative, callback){
	database.query(
		'INSERT INTO alternativas(alternativa, correta, questao) values($1, $2, $3)',
		[alternative.alternative, alternative.correct, alternative.questionId], 
		callback
	);
}

// List Alternatives by Question
function listAlternativesByQuestion(questionId, callback){
	database.query(
		'SELECT * from alternativas where questao = $1',
		[questionId],
		callback
	);
}

// Update Alternative
function updateAlternative(id, alternative, callback){
	database.query(
		'UPDATE alternativas set alternativa = $2, correta = $3, questao = $4 where id = $1',
		[id, alternative.alternative, alternative.correct, alternative.questionId],
		callback
	);
}

// Get Correct Alternative
function getCorrect(questionId, callback){
	database.query(
		'SELECT alternativa from alternativas where questao = $1 and correta = true',
		[questionId],
		callback
	);
}

// Get ID Alternative
function getId(alternative, questionId, callback){
	database.query(
		'SELECT id from alternativas where questao = $1 and alternativa = $2',
		[questionId, alternative],
		callback
	);
}