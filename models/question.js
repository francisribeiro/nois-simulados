const database = require('../config/database');

var questionSchema = function(id, status, timesAppeared, area, feedback, question){
	this.id = id;
	this.status = status;
	this.timesAppeared = timesAppeared;
	this.area = area;
	this.feedback = feedback;
	this.question = question;
}

const Question = module.exports = questionSchema;

module.exports.insertQuestion = insertQuestion;
module.exports.getQuestion = getQuestion;
module.exports.listQuestions = listQuestions;
module.exports.updateQuestion = updateQuestion;
module.exports.deleteQuestion = deleteQuestion;
module.exports.countQuestions = countQuestions;
module.exports.countQuestionsByArea = countQuestionsByArea;
module.exports.getIdQuestion = getIdQuestion;
module.exports.getLastIdQuestion = getLastIdQuestion;
module.exports.getQuestionById = getQuestionById;
module.exports.getQuestionsByAreaAtiva = getQuestionsByAreaAtiva;
module.exports.listArea = listArea;
module.exports.getPergunta = getPergunta;
module.exports.getQuestionsSimulado = getQuestionsSimulado;

// Insert Question
function insertQuestion(question, callback){
    database.query(
		'INSERT INTO questao(status, vezesapareceu, area, feedback, pergunta) values($1, $2, $3, $4, $5)',
		[question.status, question.timesAppeared, question.area, question.feedback, question.question], 
		callback
	);
}

// Get Question
function getQuestion(question, callback){
	database.query(
		'SELECT * from questao where pergunta = ($1)',
		[question],
		callback
	);
}

// List Question
function listQuestions(callback){
	database.query(
		'SELECT * from questao',
		'',
		callback
	);	
}

// Update Question
function updateQuestion(question, callback){
	database.query(
		'UPDATE questao set status = $1, vezesapareceu = $2, area = $3, feedback = $4, pergunta = $5 WHERE id = $6',
		[question.status, question.timesAppeared, question.area, question.feedback, question.question, question.id], 
		callback
	);
}

// Delete Question
function deleteQuestion(id, callback){
	database.query(
		'DELETE from questao where id = ($1)',
		[id],
		callback
	);
}

// Count Questions
function countQuestions(callback){
	database.query(
		'SELECT count(*) from questao',
		'',
		callback
	);	
}

// Count Questions by Area
function countQuestionsByArea(area, callback){
	database.query(
		'SELECT count(*) from questao where area = $1',
		[area],
		callback
	);	
}

// Get ID Question
function getIdQuestion(question, callback){
	database.query(
		'SELECT id from questao where pergunta = $1',
		[question],
		callback
	);	
}

// Get last ID Question
function getLastIdQuestion(callback){
	database.query(
		'SELECT * from questao where id = (select max(id) from questao)',
		'',
		callback
	);	
}

// Get Question by ID
function getQuestionById(id, callback){
	database.query(
		'SELECT * from questao where id = ($1)',
		[id],
		callback
	);
}

// Get Questions by Area
function getQuestionsByAreaAtiva(area, callback){
	database.query(
		'SELECT * from questao where area = ($1) and status = ($2)',
		[area, 'ativa'],
		callback
	);
}

// Get Areas
function listArea(callback){
	database.query(
		'SELECT DISTINCT area FROM questao',
		'',
		callback
	);
}

// Get Title
function getPergunta(questionId, callback){
	database.query(
		'SELECT pergunta FROM questao WHERE id = ($1)',
		[questionId],
		callback
	);
}

// Get Questions Simulado
function getQuestionsSimulado(area, limit, callback){
	database.query(
		'SELECT id FROM (SELECT DISTINCT * FROM questao WHERE area = ($1) and status = ($2)) questao ORDER BY RANDOM() LIMIT ($3)',
		[area, 'ativa', limit],
		callback
	);
}