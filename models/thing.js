const mongoose = require('mongoose');
const thingSchema = mongoose.Schema({
  name: {type: String, required: true},
  recipe: {type: String, required: true},
  ingredients: {type: String, required: true},
  imageUrl: {type: String, required: true},
  userId: {type: String, required: true},
  time: {type: Number, required: true},
});
module.exports = mongoose.model('Thing', thingSchema);
