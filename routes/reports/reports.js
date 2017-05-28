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



