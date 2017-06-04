const Question = require('../models/question');
const Alternative = require('../models/alternative');

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
		for(var i = 1; i <= 300; i++){
			var num1 = Math.floor(Math.random() * 100);
			var num2 = Math.floor(Math.random() * 100);
			if(i <= 280)
				insertQuestion(generateQuestion(i, 'ativa', 'ok', num1, num2));
			else
				insertQuestion(generateQuestion(i, 'inativa', 'not ok', num1, num2));
		}
	}


	function insertQuestion(question){
		if(question != null){
			Question.insertQuestion(question, (err, result) => {
		        if (!err) {
		        	console.log('Question insert successfully!');
		        	getIdQuestion(question.question);
		        }else{
		        	console.log(err);
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

	function generateQuestion(i, status, feedback, num1, num2){
		var pergunta = num1 + "+" + num2;
		return new Question(
			i,
			status,
			getTimesAppeared(),
			getArea(),
			feedback,
			pergunta
		);
	}

	function getIdQuestion(question, callback){
		Question.getIdQuestion(question, function(err, result){
			insertAlternative(question, result.rows[0].id);
		});
	}
	
	function insertAlternative(question, questionId){
    	var indexCorrect = Math.floor(Math.random() * 4);
    	var aCorreta, bCorreta, cCorreta, dCorreta;
    	aCorreta = (indexCorrect == 0) ? true : false;
    	bCorreta = (indexCorrect == 1) ? true : false;
    	cCorreta = (indexCorrect == 2) ? true : false;
    	dCorreta = (indexCorrect == 3) ? true : false;

    	var res = question.split("+");
    	var correta = parseInt(res[0]) + parseInt(res[1]);

    	var letraA, letraB, letraC, letraD;
    	letraA = aCorreta ? parseInt(correta) : parseInt(randomSum());
    	letraB = bCorreta ? parseInt(correta) : parseInt(randomSum());
    	letraC = cCorreta ? parseInt(correta) : parseInt(randomSum());
    	letraD = dCorreta ? parseInt(correta) : parseInt(randomSum());

    	var alternativeList = {
    		alternativas: [
	            {letra: letraA, correta:aCorreta},
	            {letra: letraB, correta:bCorreta},
	            {letra: letraC, correta:cCorreta},
	            {letra: letraD, correta:dCorreta}
	        ],
	        questao: questionId	
    	};

		Alternative.insertAlternative(alternativeList, 
			function(err, result){
				console.log('Alternativa Inserida!');
			},
			function(err, result){
				console.log('Alternativa não foi inserida!');
			}
		);
	}

	function randomSum(){
		var num = (parseInt(Math.floor(Math.random() * 100))) + parseInt((Math.floor(Math.random() * 100)));
		return num;
	}
})();