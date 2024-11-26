-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

CREATE DATABASE simspace;

USE simspace;

-- CADASTRO DE USUÁRIOS DO SITE
CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) UNIQUE,
	senha VARCHAR(50)
);

CREATE TABLE pontuacao (
    idPontuacao INT PRIMARY KEY AUTO_INCREMENT,
    acertos INT,
    erros INT,
    datahora DATETIME,
    fkUsuario INT,
    CONSTRAINT fkPontuacaoUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id) 
);
 

select*from usuario;
select*from pontuacao;
