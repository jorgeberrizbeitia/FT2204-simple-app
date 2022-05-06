const router = require("express").Router();

const PokemonModel = require("../models/Pokemon.model.js")
const capitalized = require("../utils/capitalized")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index.hbs");
});

// /pokemon => listar todos los nombres de pokemon
router.get("/pokemon", (req, res, next) => {

  // 1. quiero buscar los nombres de los pokemons en mi DB
  PokemonModel.find().select("name")
  .then((response) => {
    console.log(response)

    // 2. quiero renderizar una vista al usuario para que vea los nombres de los pokemons
    res.render("pokemon-list.hbs", {
      pokemonList: response
    })

    // con map creamos un array nuevo modificado
    // let capitalizedPokemon = response.map((eachPokemon) => {
    //   return capitalized( eachPokemon.name )
    // })

    // res.render("pokemon-list.hbs", {
    //   pokemonList: capitalizedPokemon
    // })
  })
  .catch((err) => {
    console.log(err)
  })
})

router.get("/pokemon/:pokeId", async (req, res, next) => {

  // 1. obtener el id del pokemon que el usuario quiere visualizar
  const { pokeId } = req.params

  try {
    // 2. buscar el pokemon en la DB
    const response = await PokemonModel.findById(pokeId)
    console.log(response)
  
    // 3 Renderizar una vista al usuario con el pokemon
    res.render("pokemon-details.hbs", {
      pokeDetails: response
    })
  } catch(err) {
    console.log(err)
  }

})





module.exports = router;
