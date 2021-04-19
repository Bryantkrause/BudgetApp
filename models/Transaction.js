module.exports = (model, Schema) => {
    const Transaction = new Schema({
      name: String,
      User: { type: Schema.Types.ObjectId, ref: 'User' },
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'pcChange' } })
  
    return model('Transaction', Transaction)
  }