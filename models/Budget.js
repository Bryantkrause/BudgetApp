module.exports = (model, Schema) => {
    const Budget = new Schema({
      name: String,
      expense: String,
      expAmt: Number,
      User: { type: Schema.Types.ObjectId, ref: 'User' },
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'pcChange' } })

    return model('Budget', Budget)
  }