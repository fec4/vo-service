const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
  picture_author: {
    type: Number
  },
  picture_url: {
    type: String
  },
  business_id: {
    type: Schema.Types.ObjectId, ref: 'business'
  }
})

module.exports = Picture = mongoose.model("picture", pictureSchema);