const express = require('express');
const QuestoesSimulado = require('../models/questoesSimulado');
const WrappedResponse = require('../models/wrappedResponse');
const database = require('../config/database');
const router = express.Router();

module.exports = router;

// Insert Questões Simulado
router.post('/', function (req, res, next) {
    
    let novoSimulado = new QuestoesSimulado(
        req.body.id,
        req.body.simulado,
        req.body.questao
    );

    QuestoesSimulado.insertQuestaoSimulado(novoSimulado, function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at insert questões simulado!', null));
        else {
            res.json(WrappedResponse.generateResponse(200, 'success', 'Insert questões simulado succesfully!', novoSimulado));
        }
    });
});