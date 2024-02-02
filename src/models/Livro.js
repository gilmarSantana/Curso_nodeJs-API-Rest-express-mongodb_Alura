import mongoose from "mongoose"

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: true, unique: true },
  editora: { type: String, required: false },
  preco: { type: Number, required: true },
  paginas: { type: Number, required: false }
}, { versionKey: false })


const livro = mongoose.model("livros", livroSchema)

export default livro;