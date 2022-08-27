//Configuração inicial 
import express from "express" 
import { appendFile } from "fs";
import mongoose from "mongoose"
const server = express (); //variável chamando o express ncomo  uma função

//inicar a leitura JSON / criar middlewares
server.use (//criando uma middlewares
   express.urlencoded({
      extended: true,
     })
) 
  
server.use (express.json()); //criando outra middlewares - resposta de volta do JSON

//rota inicial / endpoint 
server.get ('/', (req, res) => { //função callback
   
   //mostrar requisição

   return res.json ({message:'teste'})

}) 

//PROMESSAS - Conexão com o Banco de dados

//Login e Senha do Banco de Dados

const DB_USER = 'startech'
const DB_PASSWORD = encodeURIComponent('grupo5')
server.listen (3600)
//Acesso ao banco



mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.dz3q6eu.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
   
   console.log('Conectado ao Banco de Dados - MongoBD')
})

.catch((err) => console.log(err))




