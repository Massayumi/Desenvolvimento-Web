const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./rockcity.db')

db.serialize(function(){
    // criar a tabela
db.run(`

    CREATE TABLE IF NOT EXISTS cursos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
);
   
`)
    // inserir dados
 // const query = `
//  INSERT INTO cursos(
 //     image,
//      title,
//      category,
 //     description,
//      link
//  ) VALUES (?,?,?,?,?);
//  `

 //   const values =  [
 //     "https://cdn-icons-png.flaticon.com/128/3665/3665923.png",
 //     "Curso de linguagem C",
 //     "Estudo",
 //      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo, vero eos sint //doloremque cupiditate quidem veritatis est repellat dignissimos quaerat excepturi",
 //     "https://www.youtube.com/watch?v=2w8GYzBjNj8&list=PLpaKFn4Q4GMOBAeqC1S5_Fna_Y5XaOQS2"
 //  ]

  //  db.run(query, values, function(err) {
  //  if (err) return console.log(err)
  //      console.log(this)
  //  })

   


    //  Deletando um dado na tabela 

   // db.run(`DELETE FROM cursos WHERE id = ?`, [8], function(err){
    //  if (err) return console.log(err)
   //
   //     console.log("Deletei!", this)
   // })

    // consultar dados
    // db.all(`SELECT * FROM cursos`, function(err, rows){
    //    if (err) return console.log(err)

    //   console.log(rows)
    // })
})

module.exports = db 