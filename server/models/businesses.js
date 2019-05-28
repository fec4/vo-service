const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  business_name: {
    type: String,
    required: true
  },
  business_reviews: {
    type: Number
  },
  business_genre: {
    type: String
  },
  business_phone: {
    type: String
  },
  map_id: {
    type: Schema.Types.ObjectId, ref: 'map'
  }
})

module.exports = Business = mongoose.model('business', businessSchema);