var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

router.get("/ultimas/:idPontuacao", function (req, res) {
   pontuacaoController.buscarUltimasPontuacoes(req, res);
});

router.get("/tempo-real/:idPontuacao", function (req, res) {
    pontuacaoController.buscarPontuacoesEmTempoReal(req, res);
})

module.exports = router;