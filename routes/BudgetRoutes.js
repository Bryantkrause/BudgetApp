const { User, Budget } = require('../models')

module.exports = app => {

  // GET all Budgets
  app.get('/budget', (req, res) => {
    Budget.find()
      .then(budgets => res.json(budgets))
      .catch(e => console.error(e))
  })

    // GET one Budget
    app.get('/budget/:id', (req, res) => {
        Budget.findOne({ _id: req.params.id })
          .then(budgets => res.json(budgets))
          .catch(e => console.error(e))
      })
      
   // POST one budget
   app.post('/budget', (req, res) => {
    console.log("budgets creation")
    Budget.create(req.body)
      .then(({ _id }) => {
        User.updateOne({_id: req.body.user},
           {$push: {Budget: _id}
        })
        .then( r => console.log(res.json(r.body)))
          .catch(e => console.error(e))
      })
      .catch(e => console.error(e))
  })


    // update one Budget
    app.put('/budget/:id', (req, res) => {
      console.log("budgets put route hit")
      Budget.updateOne({ _id: req.params.id }, { $set: req.body })
        .then( r => console.log(res.json(r)))
        .catch(e => console.log(e))
    })

        // remove one Budget
        app.delete('/budget/:id', (req, res) => {
            Budget.deleteOne({ _id: req.params.id })
              .then(budgets => res.json(budgets))
              .catch(e => console.log(e))
      })
    }