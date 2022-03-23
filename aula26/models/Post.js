const db = require('./db')

const Post = db.sequelize.define('postagens',{
  titulo:{
    type:db.Sequelize.STRING
  },
  conteudo:{
    type:db.Sequelize.TEXT
  }
})

// executar esse comando apenas uma vez para criar
// Post.sync({force: true})

module.exports = Post