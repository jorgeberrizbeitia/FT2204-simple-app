const { Schema, model } = require("mongoose");

const pokemonSchema = new Schema({
  name: {
    type: String,
  },
  url: {
    type: String,
  }
})

const PokemonModel = model("pokemon", pokemonSchema);

module.exports = PokemonModel;