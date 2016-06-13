var express = require('express'),
    util = require('util');

var routes = function(){
    var inviteRouter = express.Router();

    inviteRouter.route('/')
        .get(function(rec,res){
            var invite = require('../models/inviteModel');

            invite.scan({}, function (err, item, response) {
                console.log(util.inspect(item));
                res.json(item);
            });
        });

    inviteRouter.route('/:inviteId')
        .get(function(rec,res){
            var invite = require('../models/inviteModel');

            invite.getItem({ inviteId:rec.params.inviteId}, function (err, item, response) {
                console.log(util.inspect(item));
                res.json(item);
            });
        });

    return inviteRouter;
};

module.exports = routes;


