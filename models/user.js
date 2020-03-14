const mongoose = require('mongoose')
const schema = mongoose.Schema

let ingredientSchema = new Schema({
  name: {type: String, required: true},
  isVeggie: {type: Boolean, default: true},
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema)

module.exports = Ingredient