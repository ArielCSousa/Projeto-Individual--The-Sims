var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

router.get("/ultimas", function (req, res) {
   pontuacaoController.buscarUltimasPontuacoes(req, res);
});

router.get("/tempo-real", function (req, res) {
    pontuacaoController.buscarPontuacoesEmTempoReal(req, res);
})

router.post("/cadastrarPontos", function (req, res) {
    pontuacaoController.cadastrarPontos(req, res);
})

router.get("/pontuacaoUsuario/:idUsuario", function(req,res){
    pontuacaoController.pontuacaoUsuario(req,res)
})

module.exports = router;