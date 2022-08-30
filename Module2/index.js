//Configuração inicial 
import express from "express" 
import { appendFile } from "fs";
import mongoose from "mongoose"
const server = express (); //variável chamando o express ncomo uma função

import BancoSchema from './models/BancoSchema.js'

//inicar a leitura JSON / criar middlewares
server.use (
   express.urlencoded({
      extended: true,
     })
) 
//criando outra middlewares - resposta de volta do JSON
server.use (express.json());

// rota inicial endpoint
server.get('/', (req, res) => {
   res.json({ message: 'Bem vindo a nossa API!'})
})

//rotas da API
//criaçao de dados
server.post ('/products', async (req, res) => {

   // requisição do body / = 
    const {descricao, preco} = req.body 

   //processo de validacao para garantir de seja enserido um dado valido
   if (!descricao) {
      res.status(422).json({error:'A descricao e obrigatoria!'})
   }
   
   const product = {
      descricao,
      preco
   }

   try { 
      //Criando os dados
      await BancoSchema.create(product)
      //status 201 significando que o envio foi bem sucedido
      res.status(201).json({message:'produto inserido com sucesso!'})

   }  catch (error) {
      res.status(500).json({error: error})
   }
  
})



server.get ('/products', async (req, res) => {

   try {
      const products = await BancoSchema.find()

   } catch (error) {
      res.status(500).json({error: error})
   }

}) 

//PROMESSAS - Conexão com o Banco de dados

//Login e Senha do Banco de Dados

const DB_USER = 'startech'
const DB_PASSWORD = encodeURIComponent('grupo5')
server.listen (3000)

//Acesso ao banco

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.dz3q6eu.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
   
   console.log('Conectado ao Banco de Dados - MongoBD')
})

.catch((err) => console.log(err))