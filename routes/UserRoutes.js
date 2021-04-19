const { User } = require('../models')

module.exports = app => {

  // GET all user
  app.get('/user', (req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(e => console.error(e))
  })

    // GET one user
    app.get('/user/:id', (req, res) => {
        User.findOne({ _id: req.params.id })
          .then(user => res.json(user))
          .catch(e => console.error(e))
      })

  // POST one user
  app.post('/user', (req, res) => {
    User.create(req.body)
    .then( r => console.log(res.json(r)))
    .catch(e => console.error(e))
  })


    // update one user
    app.put('/user/:id', (req, res) => {
      console.log("user put route hit")
      User.updateOne({ _id: req.params.id }, { $set: req.body })
        .then( r => console.log(res.json(r)))
        .catch(e => console.log(e))
    })

        // remove one user
        app.delete('/user/:id', (req, res) => {
            User.deleteOne({ _id: req.params.id })
              .then(user => res.json(user))
              .catch(e => console.log(e))
      })
    }