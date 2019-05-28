const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapSchema = new Schema({
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip_code: {
    type: Number
  }
})

module.exports = Map = mongoose.model('map', mapSchema);