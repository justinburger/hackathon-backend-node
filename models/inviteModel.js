var DynamoDBModel = require('dynamodb-model');

var inviteSchema = new DynamoDBModel.Schema({
    inviteId: String,
    from: String,
    status: String,
    to: String,
    created: Date
});

var invitesTable = new DynamoDBModel.Model('hackathon_invites', inviteSchema);

module.exports = invitesTable;
