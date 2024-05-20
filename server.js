//usnado express para criar e configurar o servirodr
const express = require("express")
const { createUnzip } = require("zlib")
const server = express()

const db = require("./db")



// configurandoa rquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

// habilitar uso do req.body
server.use(express.urlencoded({ extended: true}))

// Configuraçao do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

//criando uma rota/
//capturo o pedido do cliente para respoder
server.get("/", function(req, res){


    db.all(`SELECT * FROM cursos`, function(err, rows){

        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }

        const reversedCurso = [...rows].reverse()

        let lastcursos = []
        for (let curso of reversedCurso){
            if(lastcursos.length < 3){
                lastcursos.push(curso)
            }
        }

        return res.render( "index.html", {cursos: lastcursos})
     })
     
    
})

server.get("/cursos", function(req, res){

    db.all(`SELECT * FROM cursos`, function(err, rows){

        if (err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }

        const reversedCurso = [...rows].reverse()

        return res.render("cursos.html", { cursos: reversedCurso})

    })
})


server.post("/", function(req, res){
   //   inserir dados
  const query = `
  INSERT INTO cursos(
      image,
      title,
      category,
      description,
      link
  ) VALUES (?,?,?,?,?);
  `

   const values =  [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link,
   ]

   db.run(query, values, function(err) {
    if (err) {
        console.log(err)
        return res.send("Erro no banco de dados")
    }
     return res.redirect("/cursos")
  })
})

server.post("/cursos", function(req, res){
    //   inserir dados
   const query = `
   INSERT INTO cursos(
       image,
       title,
       category,
       description,
       link
   ) VALUES (?,?,?,?,?);
   `
 
    const values =  [
         req.body.image,
         req.body.title,
         req.body.category,
         req.body.description,
         req.body.link,
    ]
 
    db.run(query, values, function(err) {
     if (err) {
         console.log(err)
         return res.send("Erro no banco de dados")
     }
      return res.redirect("/cursos")
   })
 })
 
//ligando servidor na porta 3000
server.listen(3000)
