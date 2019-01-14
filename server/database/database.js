const mongoose = require("mongoose");

mongoose.connect("mongodb://default:default1@ds155714.mlab.com:55714/pokemons");

const PokemonSchema = new mongoose.Schema(
    {
        _id: Number,
        photo: String,
        name: String,
        type: String,
        description: String,
        keywords: [ String ]
    },
    {
        collection: "pokemonlist",
        versionKey: false,
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    }
);

module.exports = { Mongoose: mongoose, PokemonSchema: PokemonSchema };