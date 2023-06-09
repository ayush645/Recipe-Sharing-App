
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  myRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }]
});

const RecipeSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  name: {type: String, required: true},
  description: {type: String, required: true},
  method: {type: String, required: true},
  picture_url: {type: String, required: true}
})


const url = "https//localhost:3000"



const User = mongoose.model('User', UserSchema);
const Recipe = mongoose.model('Recipe', RecipeSchema);
// mongoose.connect(dbconf);
module.exports = User;
module.exports = Recipe;
