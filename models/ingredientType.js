const mongoose = require('mongoose')
const schema = mongoose.Schema

let ingredientTypeSchema = new Schema({
  name: {type: String, requires: true}
})

const IngredientType = mongoose.model('IngredientType', ingredientTypeSchema)

module.exports = IngredientType