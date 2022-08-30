import mongoose from "mongoose"

const BancoSchema = mongoose.model ('BancoSchema',{
   descricao: String,
   preco: Number, 
})

export default BancoSchema
// module.exports = BancoSchema

