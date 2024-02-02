import express from "express"
import DBCONNECT from "./config/dbConnect.js"
import livro from "./models/Livro.js"

const conexao = await DBCONNECT('livraria')

conexao.on("error", (erro) => {
  console.error(`Erro de conexão ${erro}`)
})


conexao.once("open", () => {
  console.log("Conexao com mongodb realizada com sucesso.")
})

const app = express()
app.use(express.json())


app.get('/', (req, res) => {
  res.status(200).send("Curso de NodeJs!!!")
})


app.get('/editoras', async (req, res) => {
  const listaEditoras = await editora.find({})
  res.status(200).json(listaEditoras)
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

