const { model, Schema } = require('mongoose')

module.exports = {
    User: require('./User.js')(model, Schema),
    Transaction: require('./Transaction.js')(model, Schema),
    Budget: require('./Budget.js')(model, Schema)
}