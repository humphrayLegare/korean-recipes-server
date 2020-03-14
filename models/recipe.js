const mongoose = require('mongoose')
const schema = mongoose.Schema

let recipeSchema = new Schema({
  userId = mongoose.SchemaTypes.ObjectId,
  notes: {type: String, default: ''},
  createdOn: {type: Date, default: Date.now},
  ingredients: [
    {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Ingredient"
    }
  ]
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe