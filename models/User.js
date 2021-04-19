module.exports = (model, Schema) => {
    const User = new Schema({
      name: String,
      Budget: [{ type: Schema.Types.ObjectId, ref: 'Budget' }],
      Transaction: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }]
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'userChange' } })
  
    return model('User', User)
  }