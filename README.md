# Grupo 5 - ReConnect

Arícia Duarte, Damião Nerivon, Érica Manis, Paulo Estêvão, Tiago Silva

Projeto escrito em JavaScript utilizando Node.js e banco MongoDB

### 🔧 Instalação

Para instalar as bibliotecas necessárias utilize o seguinte caminho:

- 'npm install'

Para executar o projeto, execute:

- 'node index.js'



## ⚙️ Executando

Acesse 'Acesse http://localhost:3000'


Rotas:

GET

- Acesse 'http://localhost:3000/'   *Home

Corpo de resposta:
"Bem vindo a ReConnect"


- Acesse 'http://localhost:3000/product'  *Lista todos os produtos

Corpo de resposta:

{
"_id":
"descrição":
"preço":
"__v"
}

- Acesse 'http://localhost:3000/product/:id'  *Lista produto por id

Corpo de resposta:
{
"_id":
"descrição":
"preço":
"__v"
}


POST

Acesse 'http://localhost:3000/product' *Insere um novo produto

Corpo de pedido:
{
"descricao":
"preco":
}



PATCH
 
- Acesse 'http://localhost:3000/product/:id'  *Altera dados do produto a partir do id
Corpo de pedido e resposta:

{
"descricao":
"preco":
}


DELETE

- Acesse 'http://localhost:3000/product/:id' * deleta produto específico a partir do id

Corpo de pedido:

{
"id":
}





## 🛠️ Construído com

express: versão 4.18.1
mongoose: versão 6.5.3
nodemon: versão 2.0.19








---
⌨️ com ❤️ por [Armstrong Lohãns](https://gist.github.com/lohhans) 😊