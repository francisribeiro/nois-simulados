const express = require('express');
const Question = require('../models/question');
const WrappedResponse = require('../models/wrappedResponse');
const database = require('../config/database');
const router = express.Router();

module.exports = router;

// Insert Question
router.post('/', function (req, res, next) {
    let newQuestion = new Question(
        req.body.id,
        req.body.status,
        req.body.timesAppeared,
        req.body.area,
        req.body.feedback,
        req.body.question
    );

    Question.insertQuestion(newQuestion, function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at insert question!', null));
        else {
            Question.getLastIdQuestion(function (error, data) {
                if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at insert question!', null));
                else
                    res.json(WrappedResponse.generateResponse(200, 'success',
                        'Insert Question Successfully!', {
                            id: data.rows[0].max
                        }));
            });
        }
    });
});

// Get Question
router.get('/q/:q', function (req, res, next) {
    Question.getQuestion(req.params.q, function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at get question!', null));
        else {
            let row = result.rows[0];
            let question = new Question(
                row.status,
                row.vezesapareceu,
                row.area,
                row.feedback,
                row.pergunta
            );
            res.json(WrappedResponse.generateResponse(200, 'success', 'Get Question Successfully!', question));
        }
    });
});

// List Questions
router.get('/list', function (req, res, next) {
    Question.listQuestions(function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at list question!', null));
        else {
            let questions = new Array();
            result.rows.forEach(function (q) {
                questions.push(new Question(
                    q.id,
                    q.status,
                    q.vezesapareceu,
                    q.area,
                    q.feedback,
                    q.pergunta
                ));
            });
            res.json(WrappedResponse.generateResponse(200, 'success', 'List Question Successfully!', questions));
        }
    });
});

// Update Question
router.put('/', function (req, res, next) {
    let question = new Question(
        req.body.id,
        req.body.status,
        req.body.timesAppeared,
        req.body.area,
        req.body.feedback,
        req.body.question
    );

    Question.updateQuestion(question, function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at update question!', null));
        else res.json(WrappedResponse.generateResponse(200, 'success', 'Update Question Successfully!', question));
    });
});

// Delete Question
router.delete('/q/:id', function (req, res, next) {
    Question.deleteQuestion(req.params.id, function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at delete question!', null));
        else res.json(WrappedResponse.generateResponse(200, 'success', 'Delete Question Successfully!', null));
    });
});

// Get ID Question
router.get('/q-id/:q', function (req, res, next) {
    Question.getIdQuestion(req.params.q, function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at get question id!', null));
        else res.json(WrappedResponse.generateResponse(200, 'success', 'Get Question ID Successfully!', {
            id: result.rows[0].id
        }));
    });
});

// Get Question by ID
router.get('/q-s/:id', function (req, res, next) {
    Question.getQuestionById(req.params.id, function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at get question per ID!', null));
        else {
            let row = result.rows[0];
            if(row == null){
                res.json(WrappedResponse.generateResponse(200, 'success', 'Get Question Successfully!', ''));
            }else {
                let question = new Question(
                    row.id,
                    row.status,
                    row.vezesapareceu,
                    row.area,
                    row.feedback,
                    row.pergunta
                );
                res.json(WrappedResponse.generateResponse(200, 'success', 'Get Question Successfully!', question));
            }
        }
    });
});

// Get Questions by Area
router.get('/area/:a', function(req, res, next){
    Question.getQuestionsByArea(req.params.a, function(err, result){
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at get questions by area!', null));
        else {
            let questions = new Array();
            result.rows.forEach(function (q) {
                questions.push(new Question(
                    q.id,
                    q.status,
                    q.vezesapareceu,
                    q.area,
                    q.feedback,
                    q.pergunta
                ));
            });
            res.json(WrappedResponse.generateResponse(200, 'success', 'Get Questions by Area Successfully!', questions));
        }
    });
});

// Get last ID question
router.get('/q-l-id', function (req, res, next) {
    Question.getLastIdQuestion(function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at get question ID!', null));
        else {
            let row = result.rows[0];
            let question = new Question(
                row.id,
                row.status,
                row.vezesapareceu,
                row.area,
                row.feedback,
                row.pergunta
            );
            res.json(WrappedResponse.generateResponse(200, 'success', 'Get Question ID Successfully!', question));
        }
    });
});

// Get number of questions
router.get('/q-c', function (req, res, next) {
    Question.countQuestions(function (err, result) {
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at count questions!', null));
        else {
            let numberOfQuestions = result.rows[0];
            res.json(WrappedResponse.generateResponse(200, 'success', 'Count Questions Successfully!', numberOfQuestions));
        }
    });
});

// List Area
router.get('/list-area', function(req, res, next){
    Question.listArea(function(err, result){
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at count questions!', null));
        else {
            var areas = new Array();
            result.rows.forEach(function(a){
                areas.push(a.area);
            });
            res.json(WrappedResponse.generateResponse(200, 'success', 'List Areas Successfully!', areas));
        }
    });
});

// Get Pergunta
router.get('/pergunta/:id', function(req, res, next){
    Question.getPergunta(req.params.id, function(err, result){
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at get pergunta!', null));
        else {
            res.json(WrappedResponse.generateResponse(200, 'success', 'Get Pergunta Successfully!', result.rows[0]));
        }
    });
});

// Count Questions by Area
router.get('/count-questions-area/:area', function(req, res, next){
    Question.countQuestionsByArea(req.params.area, function(err, result){
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at count questions by area!', null));
        else {
            let countArea = {
                area: req.params.area,
                count: result.rows[0].count
            }
            res.json(WrappedResponse.generateResponse(200, 'success', 'Count Questions by Area Successfully!', countArea));
        }
    });
});