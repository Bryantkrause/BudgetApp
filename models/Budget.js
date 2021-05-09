module.exports = (model, Schema) => {
    const Budget = new Schema({
      name: String,
      id: String,
      expense: String,
      expAmt: Number,
      User: { type: Schema.Types.ObjectId, ref: 'User' },
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'pcChange' } })
  
    Budget.set('toObject', {virtuals: true})
    Budget.set('toJson', {virtuals: true})

    Budget.virtual('id')
    .get(function() {
      
    })

    return model('Budget', Budget)
  }