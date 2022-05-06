// lo unico que hará este archivo es cojer el json y subirlo a la DB

// 1. conectar a la DB
// const mongoose = require("mongoose")

// mongoose.connect()
require("../db"); // siempre busca archivo index.js

// 2. Usar la herramienta que nos permite acceder a la DB
// tenemos el modelo ???
const PokemonModel = require("../models/Pokemon.model.js")
const pokemonArr = require("./pokemon.json")

// 3. insertar los elementos

// async function addPokemon() {}
const addPokemon = async () => {
  try {
    await PokemonModel.insertMany(pokemonArr)
    // esto es lo que ocurre luego de que la promesa de arriba fue resuelta
    console.log("todo bien, los pokemon fueron agregados")

  } catch(err) {
    console.log(err)
  }
}
addPokemon()

//then/catch

// PokemonModel.insertMany(pokemonArr)
// .then((response) => {
//   console.log("todo bien, los pokemon fueron agregados")

// })
// .catch((err) => {
//   console.log(err)
// })


