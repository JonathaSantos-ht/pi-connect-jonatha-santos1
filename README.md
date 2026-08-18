# API Connect

API REST desenvolvida como parte da Experiência Prática II da disciplina de Desenvolvimento Back-end.

## Objetivo

A API Connect é um MVP para gerenciamento de usuários. A aplicação permite cadastrar, listar, buscar, atualizar e remover usuários por meio de endpoints REST, utilizando JSON para a comunicação entre cliente e servidor.

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- JSON
- Nodemon
- Thunder Client
- Git
- GitHub

## Estrutura do projeto

api-connect/
├── controllers/
├── data/
│   ├── users.json
│   └── usersData.js
├── routes/
│   └── users.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js

## Instalação

Clone o repositório:

git clone URL_DO_REPOSITORIO

Entre na pasta do projeto:

cd api-connect

Instale as dependências:

npm install

## Executando a aplicação

Inicie o servidor:

node server.js

A API será executada em:

http://localhost:3000

## Endpoints

| Método | Endpoint | Descrição |
| --- | --- | --- |
| GET | /users | Lista todos os usuários |
| GET | /users/:id | Busca um usuário pelo ID |
| POST | /users | Cadastra um novo usuário |
| PUT | /users/:id | Atualiza um usuário |
| DELETE | /users/:id | Remove um usuário |

## Exemplo de cadastro

POST /users

Body JSON:

{
  "nome": "Carlos",
  "email": "carlos@email.com"
}

Resposta de sucesso:

Status: 201 Created

{
  "data": {
    "id": 3,
    "nome": "Carlos",
    "email": "carlos@email.com"
  }
}

## Validação

Os campos `nome` e `email` são obrigatórios para o cadastro de usuários.

Caso algum campo obrigatório não seja informado, a API retorna:

Status: 400 Bad Request

{
  "error": "Os campos nome e email são obrigatórios."
}

## Códigos HTTP utilizados

- 200 OK - Requisição processada com sucesso.
- 201 Created - Usuário criado com sucesso.
- 400 Bad Request - Dados obrigatórios não informados.
- 404 Not Found - Usuário não encontrado.
- 500 Internal Server Error - Erro interno durante o processamento.

## Testes

Os endpoints foram testados utilizando o Thunder Client no Visual Studio Code, incluindo cenários de sucesso e falha.

## Autor

Projeto desenvolvido para a disciplina de Desenvolvimento Back-end.