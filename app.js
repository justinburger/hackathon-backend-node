var express = require('express'),
    bodyparser = require('body-parser'),
    util = require('util');

var app = express();
var port = process.env.PORT  || 5000;

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());



var participantController = require('./controllers/participantController'),
    participantRoutes =  require('./routes/participantRoutes')(),
    inviteRoutes =  require('./routes/inviteRoutes')();


app.use('/api/participant', participantRoutes);
app.use('/api/invite', inviteRoutes);

app.listen(port, function(err){
    console.log('running server on port ' + port);
});