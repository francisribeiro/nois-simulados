const express = require('express');
const QuestoesSimulado = require('../models/questoesSimulado');
const WrappedResponse = require('../models/wrappedResponse');
const database = require('../config/database');
const router = express.Router();
const Alternative = require('../models/alternative');

module.exports = router;

// Insert Questões Simulado
router.post('/', function (req, res, next) {
    jsonRes = res;
    let informacoes = {
        simulado: req.body.simulado,
        questoes: req.body.questoes
    };

    QuestoesSimulado.insertQuestaoSimulado(informacoes, function(err, result){
        if(err)
        	res.json(WrappedResponse.generateResponse(400, 'error', 'Error at Question Simulado Successfully!', ''));
        else
        	res.json(WrappedResponse.generateResponse(200, 'success', 'Insert Question Simulado Successfully!', ''));
    });
});

// Count Questões de um Simulado
router.get('/simulado/:id', function(req, res, next){
	QuestoesSimulado.countQuestionsSimulado(req.params.id, function(err, result){
		if(err)
        	res.json(WrappedResponse.generateResponse(400, 'error', 'Error at Count Question Simulado Successfully!', ''));
        else
        	res.json(WrappedResponse.generateResponse(200, 'success', 'Count Question Simulado Successfully!', result.rows[0].count));	
	});
});

// Update Correta
router.post('/s/:s/q/:q', function(req, res, next){
    QuestoesSimulado.updateCorreta(req.params.s, req.params.q, function(err, result){
        if(err)
            res.json(WrappedResponse.generateResponse(400, 'error', 'Error at Update Correta Successfully!', ''));
        else
            res.json(WrappedResponse.generateResponse(200, 'success', 'Update Correta Successfully!', ''));
    });
});

// Get Questoes Por Simulado
router.get('/s/:s', function(req, res, next){
    QuestoesSimulado.getQuestoesSimulado(req.params.s, function(err, result){
        if(err)
            res.json(WrappedResponse.generateResponse(400, 'error', 'Error at Get Questions Simulado Successfully!', ''));
        else{
            if(result.rows == null){
                res.json(WrappedResponse.generateResponse(200, 'success', 'Get Questions Simulado Successfully!', ''));  
            }else{
                var array = [];
                result.rows.forEach(function(q){
                    var obj = {
                        questao: q.questao,
                        correta: q.correta
                    };
                    array.push(obj);
                });
                res.json(WrappedResponse.generateResponse(200, 'success', 'Get Questions Simulado Successfully!', array));  
            }            
        }
    });
});