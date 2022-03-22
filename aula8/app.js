const express = require('express')
const app = express()

app.get('/', function(req,res){
  res.send('Seja bem-vindo ao meu app')
})

app.get('/sobre', function(req,res){
  res.send('Minha pagina sobre')
})

app.get('/blog', function(req,res){
  res.send('Bem-vindo ao meu blog!')
})

app.get('/ola/:cargo/:nome/:cor', function(req,res){
  res.send('<h1> Ola '   + req.params.nome + '</h1>' + '<h2> O seu cargo e ' + req.params.cargo + '</h2>' + '<h3>sua cor preferida e ' + req.params.cor + '</h3>')
  

})


app.listen(8081, function(){
  console.log('Servidor Rodando na url http://localhost:8081')
})


// app.get('/ola/:cargo/:nome/:cor', function(req,res){
  //   res.send('<h1> Ola '   + req.params.nome + '</h1>')
  
  // })
  
  // resposta
  // http://localhost:8081/ola/programador/marcio/preto