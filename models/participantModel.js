var AWS = require('aws-sdk');

AWS.config.logger = console;

var DynamoDBModel = require('dynamodb-model');

var participantSchema = new DynamoDBModel.Schema({
    name: String,
    email: String,
    skills: String,
    team: String,
    comments: String,
    leader: Boolean,
    created: Date     // will be converted to a number with Date.getTime
});

var participantTable = new DynamoDBModel.Model('hackathon_participates', participantSchema);


module.exports = participantTable;
