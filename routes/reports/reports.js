const express = require('express');
const User = require('../../models/user');
const Question = require('../../models/question');
const WrappedResponse = require('../../models/wrappedResponse');
const database = require('../../config/database');
const router = express.Router();

module.exports = router;

// Coutn Users
router.get('/count-users', function(req, res, next){
    User.countUsers(function(err, result){
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at count users!', null));
        else res.json(WrappedResponse.generateResponse(200, 'success', 'Count Users Successfully!', result.rows[0].count));
    });
});

// Count Users by Type
router.get('/count-users-type/:type', function(req, res, next){
	User.countUsersByType(req.params.type, function(err, result){
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at count users by type!', null));
        else {
        	let countUsers = {
        		type: req.params.type,
        		count: result.rows[0].count
        	}
        	res.json(WrappedResponse.generateResponse(200, 'success', 'Count Users by Type Successfully!', countUsers));
        }
    });
});

// Count Questions
router.get('/count-questions', function(req, res, next){
    Question.countQuestions(function(err, result){
        if (err) res.json(WrappedResponse.generateResponse(400, 'error', 'Error at count questions!', null));
        else res.json(WrappedResponse.generateResponse(200, 'success', 'Count Questions Successfully!', result.rows[0].count));
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

