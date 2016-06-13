var util = require('util');


var participantController =
function(participant) {
   var get = function (rec, res) {

       if (!rec.params.participantId) {
           res.status('500');
           res.send('Participant Id is required.');
       } else {
           participant.getItem({email: rec.params.participantId}, function (err, item, response) {
               console.log(util.inspect(item));

               if(item == null){
                   res.status('404');
                   res.json('Participant not found.');
               }else {
                   res.status('200');
                   res.json(item);
               }
           });
       }
   };

    return {
        get: get
    };
};

module.exports = participantController;