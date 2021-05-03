const opts = { toJSON: { virtuals: true } };

module.exports = (model, Schema) => {
    const Budget = new Schema({
      name: String,
      id: String,
      expense: String,
      expAmt: Number,
      User: { type: Schema.Types.ObjectId, ref: 'User' },
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'pcChange' } },
    opts)
  
    return model('Budget', Budget)
  }