const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const Post = require("./models/Post")

// Config
// Template Engine

app.engine('handlebars', handlebars.engine({
  defaultLayout: 'main',
  runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
  },
}))
app.set('view engine', 'handlebars')


// Body Parser - config
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Rotas
// recebe todos os posts na home
app.get('/', function(req,res){
  Post.findAll({order:[['id', 'DESC']]})
      .then(function(posts){

    // console.log(posts)
    res.render('home', {posts: posts})
  })
})

app.get('/cadastro', function(req, res){
  res.render("formulario")
})

//recebe dados de formulários
app.post('/addFormulario', function(req,res){
  
  Post.create({
    titulo:req.body.titulo,
    conteudo:req.body.conteudo
  }).then(function(){
      res.redirect('/')
  }).catch(function(erro){
    res.send("Houve um erro " + erro)
  })
})

app.listen(8081, function () {
  console.log("Servidor Rodando na url http://localhost:8081")
});






// ------------------------------------------------------

// app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }))
// app.set("view engine", "handlebars")

// ------------------------------------------------------
