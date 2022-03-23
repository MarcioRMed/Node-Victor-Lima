const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");

// Config
// Template Engine
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Conexão com o banco de dados
const sequelize = new Sequelize("test", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});
// Rotas
app.get("/cadastro", function (req, res) {
  res.render("formulario");
});

//recebe dados de formulários
app.post('/addFormulario', function(req,res){
  res.send('Formulário recebido!')
})

app.listen(8081, function () {
  console.log("Servidor Rodando na url http://localhost:8081");
});

/** 
 * 
 // aula que apresentou o erro
 https://www.youtube.com/watch?v=p6oubMfuNto&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=20&ab_channel=VictorLima-GuiadoProgramador


 voltara para aula 19 e testar


 */
