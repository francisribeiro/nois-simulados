const express = require('express');
const Simulado = require('../models/simulado');
const WrappedResponse = require('../models/wrappedResponse');
const database = require('../config/database');
const router = express.Router();

module.exports = router;

// Insert Simulado
router.post('/', function (req, res, next) {
    let executionTime = '0';

    let novoSimulado = new Simulado(
        req.body.id,
        req.body.user,
        executionTime,
        req.body.title
    );

    Simulado.insertSimulado(novoSimulado, function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at insert simulado!', null));
        else {
            Simulado.getLastIdSimulado(function (error, data) {
                if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at insert simulado!', null));
                else
                    res.json(WrappedResponse.generateResponse(200, 'success',
                        'Insert Simulado Successfully!', {
                            id: data.rows[0].max
                        }));
            });
        }
    });
});

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

// Update Simulado
router.put('/', function (req, res, next) {
    let simulado = new Simulado(
        req.body.id,
        req.body.user,
        req.body.executionTime,
        req.body.title
    );

    Simulado.updateSimulado(simulado, function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at update simulado!', null));
        else res.json(WrappedResponse.generateResponse(200, 'success', 'Update Simulado Successfully!', simulado));
    });
});

// Delete Simulado
router.delete('/:id', function (req, res, next) {
    Simulado.deleteSimulado(req.params.id, function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at delete simulado!', null));
        else res.json(WrappedResponse.generateResponse(200, 'success', 'Delete Simulado Successfully!', null));
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