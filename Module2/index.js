//Configuração inicial - OK
import express from "express" 
import { appendFile } from "fs";
import mongoose from "mongoose"
const server = express (); //variável chamando o express ncomo uma função

import BancoSchema from './models/BancoSchema.js'

//inicar a leitura JSON / criar middlewares - OK
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

//Criação de dados
server.post ('/product', async (req, res) => {

   // requisição do body / = 
    const {descricao, preco} = req.body 

   //processo de validacao para garantir de seja inserido um dado valido
   if (!descricao) {
      res.status(422).json({error:'A descricao e obrigatoria!'})
      return
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

//Read - Leitura de dados
server.get('/product', async (req, res) => {
   try {
      const dados = await BancoSchema.find()
      res.status(200).json(dados)

   } catch (error) {
      res.status(500).json({error: error})
   }
})

server.get('/product/:id', async (req, res) => {
   //estrair dados da requisição pela url = req.params
   const id = req.params.id
   try {
      const product = await BancoSchema.findOne({_id: id})

      if(!product) {
         res.status(422).json({message: 'Produto não encontrado!'})
         return
      }
      res.status(200).json(product)
   } catch (error) {
      res.status(500).json({error: error})
   }
})



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