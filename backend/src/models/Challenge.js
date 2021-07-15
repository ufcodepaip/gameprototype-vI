const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 //Desafio e seus elementos
const ChallengeSchema = new Schema({
  name: String,
  area: String,
  posX: Number,
  posY: Number,
  description: String,
  input: String,
  output: String
});

module.exports = mongoose.model('Challenge', ChallengeSchema);