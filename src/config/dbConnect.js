import mongoose from "mongoose"

async function DBCONNECT() {
  mongoose.connect("mongodb+srv://gilmarr:8628473@cluster0.jfrlsmp.mongodb.net/livraria?retryWrites=true&w=majority")

  return mongoose.connection

}


export default DBCONNECT
