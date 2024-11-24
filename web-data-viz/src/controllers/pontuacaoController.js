var pontuacaoModel = require("../models/pontuacaoModel");

function buscarUltimasPontuacoes(req, res) {

    const limite_linhas = 7;

    var idPontuacao = req.params.idPontuacao;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    pontuacaoModel.buscarUltimasPontuacoes(idPontuacao, limite_linhas).then(function (resultado) {
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

    pontuacaoModel.buscarPontuacoesEmTempoReal(idPontuacao).then(function (resultado) {
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

function cadastrarPontos(req, res) {
    // Recuperando valores enviados pelo front-end
    var idUsuario = req.body.idUsuario;
    var acertos = req.body.acerto;
    var erros = req.body.erros;

    // Validando os dados
    if (idUsuario == undefined) {
        res.status(400).send("O ID do usuário está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Os ACERTOS estão undefined!");
    } else if (erros == undefined) {
        res.status(400).send("Os ERROS estão undefined!");
    } else {
        pontuacaoModel.cadastrarPontos(idUsuario, acertos, erros)
            .then(
                function (resultado) {
                    res.status(200).json({ mensagem: "Pontos cadastrados com sucesso!", resultado });
                }
            )
            .catch(
                function (erro) {
                    console.log("\nHouve um erro ao cadastrar os pontos:", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    buscarUltimasPontuacoes,
    buscarPontuacoesEmTempoReal,
    cadastrarPontos

}