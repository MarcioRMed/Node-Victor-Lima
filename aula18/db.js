const Sequelize = require('sequelize')
const sequelize = new Sequelize('test','root','1234',{
  host:"localhost",
  dialect:'mysql'
})

sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso!")
}).catch(function(erro){
  console.log('Falha ao se conectar:' +erro)
})

// Models========================================
const Postagem = sequelize.define('postagem', {
  titulo:{
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})

const Usuario = sequelize.define('usuarios',{
  nome:{
    type: Sequelize.STRING
  },
  sobrenome:{
    type: Sequelize.STRING
  },
  idade:{
    type: Sequelize.INTEGER
  },
  email:{
    type: Sequelize.STRING
  }
})



// Postagem.create({
//   titulo: "Um Titulo qualquer",
//   conteudo:"este é o conteudo da postagem"
// })


Usuario.create({
  nome: "victor",
  sobrenome: 'silva',
  idade: 20,
  email: 'balbalba@gmail.com'
})


//apos gerar tabela comentar para não sobrescrever a tabela atual
// Postagem.sync({force: true})
// Usuario.sync({force:true})













// comandos terminal
// entrar no mysql
// mysql -h localhost -u root -p

// show databases;
// use test;
// show tables;
// describe postagem
// select * from postagems;