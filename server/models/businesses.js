const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let businessSchema = new Schema({
  business_id: {
    type: Number
  },
  business_name: {
    type: String,
    unique: true
  },
  business_rating: {
    type: Number
  },
  business_genre: {
    type: String
  },
  business_phone: {
    type: String
  },
  business_reviews: {
    type: Number
  }
});

module.exports = Business = mongoose.model('business', businessSchema);