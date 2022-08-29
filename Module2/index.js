//Configuração inicial - OK
import express from "express" 
import { appendFile } from "fs";
import mongoose from "mongoose"
const server = express (); //variável chamando o express ncomo uma função

import BancoSchema from './models/BancoSchema.js'


server.use (express.json()); //criando outra middlewares - resposta de volta do JSON

//inicar a leitura JSON / criar middlewares - OK
server.use ( 
   express.urlencoded({
      extended: true,
     })
) 

//rotas da API - TESTAR
server.post ('/product', async (req, res) => {

   // requisição do body
   const {codigo, descricao, preco} = req.body
   
   if (!codigo) {
      res.status(422).json({error:'produto não casdastrado!'})
   }
   
   const product = {codigo, descricao, preco}
   
   //Erro 
   try { 
      //Criando os dados
      await BancoSchema.create(product)

      res.status(201).json({message:'produto inserido com suceso!'})

   }  catch(error){
      res.status(500).json({error: error})
   }
  
})

server.get ('/product', async (req, res) => {
   res.status(200).json(product)
})

//rota inicial / endpoint 0K
server.get ('/', (req, res) => { //função callback
   
   //mostrar requisição
   return res.json ({message:'teste'})
}) 


//Função busca de produtos - TESTAR
//function buscaCelular (codigo) {
//    return product.findIndex(celular => celular.codigo == codigo)
//}


//PROMESSAS - Conexão com o Banco de dados
//Login e Senha do Banco de Dados - OK
const DB_USER = 'startech'
const DB_PASSWORD = encodeURIComponent('grupo5')
server.listen (3000)

//Acesso ao banco

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.dz3q6eu.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
   console.log('Conectado ao Banco de Dados - MongoBD')
})
.catch((err) => console.log(err))