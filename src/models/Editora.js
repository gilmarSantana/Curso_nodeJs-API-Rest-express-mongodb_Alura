import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
  id: { type: mongoose.Types.ObjectId },
  cnpj: { type: Number, unique: true, required: true },
  razao_social: { type: String, unique: true, required: true },
  nome_fantasia: { type: String, unique: true, required: true },
  situacao: { type: String, unique: true, required: true }
}, { versionKey: false })

const editora = mongoose.model("editoras", editoraSchema)

export default editora