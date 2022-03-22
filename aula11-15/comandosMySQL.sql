
-- criar tabela de maneira fácil, cria no editor e cola no terminal
-- 


-- cria tabela
CREATE TABLE usuarios(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);

-- inseri informações dentro da tabela
INSERT INTO usuarios(nome,emaii,idade) VALUES(
  "Pedro",
  "email@teste.com",
  8
);

-- selecina todos os usuarios com idade de 8 anos
SELECT * FROM usuarios WHERE idade = 8;


-- seleciona todos os usuarios com nome lucas
SELECT * FROM usuarios WHERE nome = "Lucas";

--seleciona todos os usuarios com idade maior que 18
SELECT * FROM usuarios WHERE idade >= 18;

--deletar toda a tablela
DELETE FROM usuarios

DELETE FROM usuarios WHERE nome = "Lucas";


-- altera o nome de pedro para nome de teste
UPDATE usuarios SET nome = "Nome de teste" WHERE nome = "Pedro";

-- mysql>

--  SHOW DATABASES; -  mostra todas as tabelas do banco 

-- CREATE DATABASE sistemaDeCadastro; - criar banco de dados

-- USE sistemaDeCadastro; - acessa o banco de dados

-- SHOW TABLES; - mostra as tabelas criadas