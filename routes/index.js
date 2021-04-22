module.exports = app => {
    require('./BudgetRoutes.js')(app),
    // require('./TransactionRoutes.js')(app),
    require('./UserRoutes.js')(app)
  }