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
router.delete('/q/:q', function (req, res, next) {
    Question.deleteQuestion(req.params.q, function (err, result) {
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
    });
});