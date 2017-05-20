const database = require('../config/database');

var questionSchema = function(status, timesAppeared, area, feedback, question){
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
		'UPDATE questao set status = $1, vezesapareceu = $2, area = $3, feedback = $4 WHERE pergunta = $5',
		[question.status, question.timesAppeared, question.area, question.feedback, question.question], 
		callback
	);
}

// Delete Question
function deleteQuestion(question, callback){
	database.query(
		'DELETE from questao where pergunta = ($1)',
		[question],
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