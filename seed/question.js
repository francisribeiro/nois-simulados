const Question = require('../models/question');
const Alternative = require('../models/alternative');

module.exports = (function () {
	var area = ['Área 1', 'Área 2', 'Área 3', 'Área 4', 'Área 5'];
	var feedback = ['OK', 'NOT OK'];
	var alternatives = ['letra A', 'letra B', 'letra C', 'letra D'];

	return {
		run: run
	};


	function run() {
		questions();
	}

	function questions(){
		for(var i = 1; i <= 300; i++){
			if(i <= 280)
				insertQuestion(generateQuestion(i, 'ativa', 'ok'));
			else
				insertQuestion(generateQuestion(i, 'inativa', 'not ok'));
		}
	}


	function insertQuestion(question){
		if(question != null){
			Question.insertQuestion(question, (err, result) => {
		        if (!err) {
		        	console.log('Question insert successfully!');
		        	getIdQuestion(question.question);
		        }
		    });
		}
	};
	
	function getTimesAppeared(){
		return Math.floor(Math.random() * 200);
	}

	function getArea(){
		return area[Math.floor(Math.random() * 4)];
	}

	function generateQuestion(i, status, feedback){
		return new Question(
			status,
			getTimesAppeared(),
			getArea(),
			feedback,
			'Pergunta ' + i
		);
	}

	function getIdQuestion(question, callback){
		Question.getIdQuestion(question, function(err, result){
			generateAlternatives(result.rows[0].id).forEach(function(alt){
				insertAlternative(alt);
			});
		});
	}

	function generateAlternatives(questionId){
		var array = new Array();
		for(var i = 0; i < 4; i++){
			array.push(new Alternative(
				alternatives[i],
				true,
				questionId
			));
		}
		return array;
	}

	function insertAlternative(alternative){
		Alternative.insertAlternative(alternative, function(err, result){
			console.log('Alternativa Inserida!');
		});
	}
})();