const mongoose = require('mongoose')

// Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/usuarios", {
  // useMongoClient: true
}).then(()=>{
  console.log('MongoDB Conectado...')

}).catch((err)=>{
  console.log('Houve um erro ao se conectar ao mongoDB: ' +err)
})

// Model
// Definindo o model
const UsuarioSchema = mongoose.Schema({
  nome:{
    type: String,
    require: true
  },
  sobrenome:{
    type: String,
    require: true
  },
  email:{
    type: String,
    require: true
  },
  idade:{
    type: Number,
    require: true
  },
  pais:{
    type: String
  }
})



// Collection
mongoose.model('usuarios', UsuarioSchema)

const Marcio = mongoose.model('usuarios')




// criar novo usuario

new Marcio({
  nome: "Diego",
  sobrenome: "Cunha",
  email: "email@teste.com",
  idade: 41,
  pais: "Brasil"
}).save().then(()=>{
  console.log('Usuário criado com sucesso!')
}).catch((err)=>{
  console.log('Houve um erro ao registrar o usuário: '+err)
})



