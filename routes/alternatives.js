const express = require('express');
const Alternative = require('../models/alternative');
const WrappedResponse = require('../models/wrappedResponse');
const database = require('../config/database');
const router = express.Router();

module.exports = router;

// Insert Alternative
router.post('/', function(req, res, next){
    // objeto exemplo:
    //  {
    //     "alternativas": [
    //         {"letra": "letra A", "correta":false},
    //         {"letra": "letra B", "correta":true},
    //         {"letra": "letra C", "correta":false},
    //         {"letra": "letra D", "correta":false}
    //     ],
    //     "questao": 3017
    // }
    
   let alternativeList = {
        alternativas: req.body.alternativas,
        questao: req.body.questao
    };
 
    Alternative.insertAlternative(alternativeList, 
        function(err, result){
            res.json(WrappedResponse.generateResponse(200, 'success', 'Insert Alternative Successfully!', alternativeList));
        },
        function(err, result){
            res.json(WrappedResponse.generateResponse(400, 'error', 'Error at insert alternative!', ''))
        }
    );
});

// List Alternatives by Question
router.get('/list/:q', function(req, res, next){
    Alternative.listAlternativesByQuestion(req.params.q, function(err, result){
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at list alternatives by question!', null));
        else { 
            let alternatives = new Array();
            result.rows.forEach(function(q){
                alternatives.push(new Alternative(
                    q.id,
                    q.alternativa,
                    q.correta,
                    q.questao
                ));
            });            
            res.json(WrappedResponse.generateResponse(200, 'success', 'List Alternatives by Question Successfully!', alternatives));
        }
    });
});

// Update Alternative
router.put('/:id', function(req, res, next){
    let alternative = new Alternative(
        req.body.id,
        req.body.alternative,
        req.body.correct,
        req.body.questionId
    );

    Alternative.updateAlternative(req.params.id, alternative, function(err, result){
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at update alternative!', null));
        else res.json(WrappedResponse.generateResponse(200, 'success', 'Update Alternative Successfully!', alternative));
    });
});

// Get Corret Alternative
router.get('/correct/:q', function(req, res, next){
    Alternative.getCorrect(req.params.q, function(err, result){
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at get correct alternative!', null));
        else {
        	let data = (result.rows.length != 0) ? {id: result.rows[0].alternativa} : null;
        	res.json(WrappedResponse.generateResponse(200, 'success', 
        		'Get Correct Alternative Successfully!', data));
        }
    });
});

// Get ID Alternative
router.get('/a/:a/q/:q', function(req, res, next){
    Alternative.getId(req.params.a, req.params.q, function(err, result){
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at get id correct alternative!', null));
        else {
        	let data = (result.rows.length != 0) ? {id: result.rows[0].id} : null;
        	res.json(WrappedResponse.generateResponse(200, 'success', 
        		'Get ID Alternative Successfully!', data));
        }
    });
});