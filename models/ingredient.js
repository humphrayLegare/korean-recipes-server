const mongoose = require('mongoose')
const schema = mongoose.Schema

let ingredientSchema = new Schema({
  ingredientTypeId: mongoose.SchemaTypes.Object,
  name: {type: String, required: true},
  colour: {type: String, requires: true},
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema)

module.exports = Ingredient