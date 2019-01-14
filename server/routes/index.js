const express = require('express');
const database = require("../database/database")
const router = express.Router();
const util = require("util");

const Pokemon = database.Mongoose.model("Pokemon", database.PokemonSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*

ISSUES:
a ideia é:
caso a pessoa digite numeros, a query sera feita por id; (mas como tudo em input é string, eu to verificando se é menor ou igual a 3)
caso seja maior que 3, to deduzindo que é uma palavra, e ai a busca é pra ser por
keywords

req.query/req.body nao encontram input que está no front end, apenas na pagina de teste
para rodar pagina de teste: nodemon app.js e substituir req.query.input por req.query.query

falta de conexao estabelecida entre front e back...??
*/

router.get("/search", function (req, res) {
  const searchParams = req.query.pokedexInput; /* ta dando undefined */
  
  if ( searchParams.length > 3 ) {
    /* localhost:3001/search?query=milton, por exemplo */
    Pokemon.findOne(
      { keywords: new RegExp('\\b' + searchParams + '\\b', 'i')}, function(err, results){
      if (err) {
        throw err;
      };
      res.send(results);
    });
  };

  if ( searchParams.length <= 3 ) {
    Pokemon.findById(
      { _id: searchParams }, function(err, results) {
        if (err) {
          throw err;
        }
        res.send(util.inspect(results)); /*nao tá adiantando usar o util e se voce der query por nome (teste procurar por localhost:3001/search?query=numeroqualquer) aparece que tem dois ids no DB, sendo que dentro dele mesmo só tem um... (?????) */
      });
  };
});

module.exports = router;
