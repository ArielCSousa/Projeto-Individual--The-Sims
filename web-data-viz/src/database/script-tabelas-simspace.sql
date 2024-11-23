-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

CREATE DATABASE simspace;

USE simspace;

-- CADASTRO DE USUÁRIOS DO SITE
CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) UNIQUE,
	senha VARCHAR(50)
);

CREATE TABLE pontuacao (
    idPontuacao INT PRIMARY KEY,
    acertos INT,
    erros INT,
    datahora DATETIME,
    fkUsuario INT,
    CONSTRAINT fkPontuacaoUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario) 
);


select*from usuario;

SELECT 
    pontos,
    DATE_FORMAT(datahora, '%H:%i:%s') as datahora_grafico, 
    fkUsuario
FROM pontuacao 
WHERE fkUsuario = 1 
ORDER BY idPontuacao DESC 
LIMIT 1;