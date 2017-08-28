import mongoose from 'mongoose'
const Schema = mongoose.Schema

export default mongoose.model('CharitableDonation', new Schema({ 
  purpose: {
    type: String,
    required: 'Please fill the purpose of this donation'
  },
  amount: {
    type: Number, 
    required: 'Please fill the amount to be donated'
  },
  pay_method: {
    type: String,
    required: 'Please fill the pay_method of this donation'
  },
  note: {
    type: String
  },
  charitableEntityId: {
    type: String,
    required: 'Please fill the id of the CharitableEntity (charitableEntityId) who will receive the donation'
  },
  createdByUserId: {
    type: String,
    required: 'Please fill the id of the user who donating'
  },
  created: {
    type: Date,
    default: Date.now
  }
}))