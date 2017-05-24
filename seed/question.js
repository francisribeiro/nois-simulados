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

	function generateQuestion(i, status, feedback){
		return new Question(
			i,
			status,
			getTimesAppeared(),
			getArea(),
			feedback,
			'Pergunta ' + i
		);
	}

	function getIdQuestion(question, callback){
		Question.getIdQuestion(question, function(err, result){
			// generateAlternatives(result.rows[0].id).forEach(function(alt){
			// 	insertAlternative(alt);
			// });
			insertAlternative(result.rows[0].id);
		});
	}

	// function generateAlternatives(questionId){
	// 	var array = new Array();
	// 	for(var i = 0; i < 4; i++){
	// 		array.push(new Alternative(
	// 			alternatives[i],
	// 			true,
	// 			questionId
	// 		));
	// 	}
	// 	return array;
	// }
	
	function insertAlternative(questionId){
		 //  {
    //     "alternativas": [
    //         {"letra": "letra A", "correta":false},
    //         {"letra": "letra B", "correta":true},
    //         {"letra": "letra C", "correta":false},
    //         {"letra": "letra D", "correta":false}
    //     ],
    //     "questao": 3017
    // }
    	var indexCorrect = Math.floor(Math.random() * 4);
    	var aCorreta, bCorreta, cCorreta, dCorreta;
    	aCorreta = (indexCorrect == 0) ? true : false;
    	bCorreta = (indexCorrect == 1) ? true : false;
    	cCorreta = (indexCorrect == 2) ? true : false;
    	dCorreta = (indexCorrect == 3) ? true : false;

    	var alternativeList = {
    		alternativas: [
	            {letra: alternatives[0], correta:aCorreta},
	            {letra: alternatives[1], correta:bCorreta},
	            {letra: alternatives[2], correta:cCorreta},
	            {letra: alternatives[3], correta:dCorreta}
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
})();