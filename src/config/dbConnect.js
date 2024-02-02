import mongoose from "mongoose"

async function DBCONNECT(db_name) {
  mongoose.connect(`mongodb+srv://gilmarr:8628473@cluster0.jfrlsmp.mongodb.net/${db_name}?retryWrites=true&w=majority`)



  return mongoose.connection

}


export default DBCONNECT
