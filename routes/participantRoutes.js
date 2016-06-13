var express = require('express');
var routes = function(){
    var participantRouter = express.Router();
    var participant = require('../models/participantModel');

    var participantController = require('../controllers/participantController')(participant);

    participantRouter.route('/:participantId')
        .get(participantController.get);

    return participantRouter;
};

module.exports = routes;


