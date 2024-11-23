var database = require("../database/config");

function buscarUltimasPontuacoes(idPontuacao) {

    var instrucaoSql = `SELECT 
                        pontos, 
                        datahora,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                        FROM pontuacao
                        WHERE fkUsuario = ${idUsuario}
                        ORDER BY id DESC LIMIT 7`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPontuacoesEmTempoReal(idPontuacao) {

    var instrucaoSql = `SELECT 
                        pontos,
                        DATE_FORMAT(datahora,'%H:%i:%s') as datahora_grafico, 
                        fkUsuario
                        FROM pontuacao 
                        WHERE fkUsuario = ${idUsuario} 
                        ORDER BY idPontuacao DESC 
                        LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasPontuacoes,
    buscarPontuacoesEmTempoReal
}
