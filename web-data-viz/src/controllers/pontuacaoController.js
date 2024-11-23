var pontuacaoModel = require("../models/pontuacaoModel");

function buscarUltimasPontuacoes(req, res) {

    const limite_linhas = 7;

    var idPontuacao = req.params.idPontuacao;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasPontuacoes(idPontuacao, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas pontuacoes.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarPontuacoesEmTempoReal(req, res) {

    var idPontuacao = req.params.idPontuacao;

    console.log(`Recuperando pontuacoes em tempo real`);

    medidaModel.buscarPontuacoesEmTempoReal(idPontuacao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasPontuacoes,
    buscarPontuacoesEmTempoReal

}