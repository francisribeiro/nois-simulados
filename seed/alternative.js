const Question = require('../models/question');

module.exports = (function () {
	var area = ['Área 1', 'Área 2', 'Área 3', 'Área 4', 'Área 5'];
	var feedback = ['OK', 'NOT OK'];

	return {
		run: run
	};


	function run() {
		questions();
	}

	function questions(){
		for(var i = 0; i < 300; i++){
			if(i <= 280)
				insertQuestion(generateQuestion(i, 'ativa', 'ok'));
			else
				insertQuestion(generateQuestion(i, 'inativa', 'not ok'));
		}
	}


	function insertQuestion(question){
		if(question != null){
			Question.insertQuestion(question, (err, question) => {
		        if (!err) console.log('Question insert successfully!');
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


})();