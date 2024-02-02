import express from "express"
import DBCONNECT from "./config/dbConnect.js"


const conexao = await DBCONNECT()

conexao.on("error", (erro) => {
  console.error(`Erro de conexão ${erro}`)
})

conexao.once("open", () => {
  console.log("Conexao com mongodb realizada com sucesso.")
})

const app = express()
app.use(express.json())


const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis"
  },
  {
    id: 2,
    titulo: "O Hobbit"
  }
]

function buscaLivro(id) {
  return livros.findIndex(livro => {
    return livro.id === Number(id)
  })
}


app.get('/', (req, res) => {
  res.status(200).send("Curso de NodeJs!!!")
})

app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
  let livroId = buscaLivro(req.params.id)
  res.status(200).json(livros[livroId])

})

app.post('/livros', (req, res) => {
  livros.push(req.body)
  res.status(201).send("Livro cadastrado com sucesso")
})

app.put('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id)
  const newTitulo = req.body.newTitulo
  const newPaginas = req.body.newPaginas

  livros[index].titulo = newTitulo
  livros[index].paginas = newPaginas
  res.status(200).send("Livro alterado com sucesso")
})

app.delete('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id)
  livros.splice(index, 1)
  res.status(200).send('Livro deletado com sucesso')
})




export default app;

