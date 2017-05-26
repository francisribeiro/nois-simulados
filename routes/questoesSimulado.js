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

    QuestoesSimulado.insertQuestaoSimulado(informacoes, function(){
        res.json(WrappedResponse.generateResponse(200, 'success', 'Insert Question Simulado Successfully!', ''));
    });
});


// clicou em simulado abre a página para colocar o título e a área do simulado

// abre uma tela mostrando a quantidade de questões daquela área 
    // e o usuário escolhe a quantidade de questões para seu simulado(definir opções de quantidade)

// começa o simulado