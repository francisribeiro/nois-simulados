const express = require('express');
const Simulado = require('../models/simulado');
const Question = require('../models/question');
const WrappedResponse = require('../models/wrappedResponse');
const database = require('../config/database');
const router = express.Router();

module.exports = router;

// Insert Simulado
router.post('/area/:a/limite/:l', function (req, res, next) {
    let executionTime = '0';

    let novoSimulado = new Simulado(
        req.body.id,
        req.body.user,
        executionTime,
        req.body.title,
        req.body.area
    );

    Simulado.insertSimulado(novoSimulado, function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at insert simulado!', null));
        else {
            Simulado.getLastIdSimulado(function (error, data) {
                if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at insert simulado!', null));
                else {
                    var area = req.params.a;
                    var limite = req.params.l;
                    var id = data.rows[0].max;

                    getQuestoes(area, limite, id, res);
                }
            });
        }
    });
});

function getQuestoes(area, limite, id, res){
    Question.getQuestionsSimulado(area, limite, function(err, result){
        if(result.rows.length == 0 || result.rows == null){
            res.json(WrappedResponse.generateResponse(200, 'success',
                        'Insert Simulado Successfully!', ''));
        }else{
            var cont = 0;
            var array = getIDs(result.rows);
            array.forEach(function(qId){
                Question.updateVezesApareceu(qId, function(err, result){
                    cont++;
                    if(cont == array.length){
                        response(id, array, res);
                    }
                });
            });
        }        
    });
}

function response(id, questoes, res){
    var obj = [];
    obj.push({id: id});
    obj.push({questoes: questoes});
    res.json(WrappedResponse.generateResponse(200, 'success',
                    'Insert Simulado Successfully!', obj));
}

function getIDs(array){
    var questoes = [];
    for(var i = 0; i < array.length; i++){
        questoes.push(array[i].id);
    }
    return questoes;
}

// Get Simulado
router.get('/usuario/:u/titulo/:t', function (req, res, next) {
    Simulado.getSimulado(req.params.u, req.params.t, function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at get simulado!', null));
        else {
            let row = result.rows[0];
            if(row == null){
                res.json(WrappedResponse.generateResponse(200, 'success', 'Get Simulado Successfully!', ''));
            }else{
                let simulado = new Simulado(
                    row.id,
                    row.usuario,
                    row.tempoexecucao,
                    row.titulo
                );
                res.json(WrappedResponse.generateResponse(200, 'success', 'Get Simulado Successfully!', simulado));
            }
        }
    });
});

// List Simulados
router.get('/list', function (req, res, next) {
    Simulado.listSimulados(function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at list simulado!', null));
        else {
            let simulados = new Array();
            result.rows.forEach(function (s) {
                simulados.push(new Simulado(
                    s.id,
                    s.usuario,
                    s.tempoexecucao,
                    s.titulo
                ));
            });
            res.json(WrappedResponse.generateResponse(200, 'success', 'List Simulado Successfully!', simulados));
        }
    });
});


// Get Simulados por Usuário
router.get('/usuario/:u', function(req, res, next){
    Simulado.getSimuladosByUsuario(req.params.u, function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at get simulado por usuario!', null));
        else {
            let row = result.rows[0];
            if(row == null){
                res.json(WrappedResponse.generateResponse(200, 'success', 'Get Simulado por Usuário Successfully!', ''));
            }else{
                let simulados = new Array();
                result.rows.forEach(function (s) {
                    simulados.push(new Simulado(
                        s.id,
                        s.usuario,
                        s.tempoexecucao,
                        s.titulo
                    ));
                });
                res.json(WrappedResponse.generateResponse(200, 'success', 'Get Simulado por Usuário Successfully!', simulados));
            }
        }
    });
});


// Get number of simulados
router.get('/s-c', function (req, res, next) {
    Simulado.countSimulados(function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at count simulados!', null));
        else {
            let numberOfSimulados = result.rows[0];
            res.json(WrappedResponse.generateResponse(200, 'success', 'Count Simulados Successfully!', numberOfSimulados));
        }
    });
});

// Get Simulado por ID
router.get('/:id', function(req, res, next){
    Simulado.getSimuladoByID(req.params.id, function(err, result){
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at get simulado by id!', null));
        else {
            res.json(WrappedResponse.generateResponse(200, 'success', 'Get Simulado by ID Successfully!', result.rows[0]));
        }
    });
});

// Delete User
router.delete('/:id', function (req, res, next) {
    Simulado.deleteSimulado(req.params.id, function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at delete simulado!', null));
        else res.json(WrappedResponse.generateResponse(200, 'success', 'Delete Simulado Successfully!', null));
    });
});

// Get Simulado por Area
router.get('/list/area', function(req, res, next){
    Simulado.listSimuladosArea(function(err, result){
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at get simulado per area!', null));
        else {
            var rows = result.rows;
            if(rows == null){
                res.json(WrappedResponse.generateResponse(200, 'success', 'Get Simulado per Successfully!', ''));
            }else{
                var array = [];
                rows.forEach(function(data){
                    array.push(
                        {
                            area: data.area,
                            quantidade: data.count     
                        }
                    );
                });
                res.json(WrappedResponse.generateResponse(200, 'success', 'Get Simulado per Successfully!', array));
            }
        }
    });
});

// Get Simulados by Area
router.get('/area/:a', function(req, res, next){
    Simulado.getSimuladoArea(req.params.a, function(err, result){
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at get simulado by area!', null));
        else {
            if(result.rows == null){
                res.json(WrappedResponse.generateResponse(200, 'success', 'Get Simulados by Area Successfully!', ''));
            }else{
                let simulados = new Array();
                result.rows.forEach(function (q) {
                    simulados.push(new Simulado(
                        q.id,
                        q.usuario,
                        q.tempoexecucao,
                        q.titulo,
                        q.area
                    ));
                });
                res.json(WrappedResponse.generateResponse(200, 'success', 'Get Simulados by Area Successfully!', simulados));
            }
        }
    });
});