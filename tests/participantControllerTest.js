var should = require('should'),
    sinon = require('sinon'),
    util = require('util');

describe('Participant Controller Tests:', function(){
    describe('GET', function(){
        it('Should not allow empty Id On GET', function(){
            var Participant  =  function(participant){this.getItem = function(){}};

            var req = {
                params:{
                    participantId:'INVALID'
                }
            }

            var res = {
                status: sinon.spy(),
                json: sinon.spy()
            };

            var participantController = require('../controllers/participantController')(Participant);

            participantController.get(req, res);

            res.status.calledWith(404).should.equal(true, 'Bad Status:' + res.status)



        })
    })
})