# 👥 Sistema de Registro de Pessoas

Este projeto é uma aplicação web completa desenvolvida com **React**, **Node.js**, **Express** e **MongoDB**, com autenticação baseada em **JSON Web Tokens (JWT)**. O sistema permite que usuários se cadastrem, façam login, visualizem seus próprios perfis e explorem os perfis de outras pessoas cadastradas. Esse projeto tem o objetivo de praticar rotas de API, conexão de banco de dados não relacional e modelegem de dados

## Funcionalidades

- **Cadastro de usuários**
- **Login com autenticação via JWT**
- **Visualizar perfil pessoal**
- **Visualizar perfis de outros usuários**
- **Restrições de acesso para rotas protegidas**
- **Armazenamento dos dados no MongoDB**

## Tecnologias utilizadas

### Front-end

- **React**
- **Vite**
- **JavaScript**

### Back-end
- **Node.js**
- **Express.js** – criação das rotas da API
- **MongoDB** – banco de dados não relacional
- **Mongoose** – modelagem de dados MongoDB
- **JSON Web Token (JWT)** – autenticação segura

## Pré-visualização
### Login
<img width="542" height="398" alt="image" src="https://github.com/user-attachments/assets/40b267d3-c646-4419-8dc2-0ccb4079b3d2" />

### Cadastro
<img width="808" height="285" alt="image" src="https://github.com/user-attachments/assets/bbc418b9-a593-4851-93ed-f40e01ba1f78" />

### Exemplo de Perfil Pessoal
<img width="522" height="340" alt="image" src="https://github.com/user-attachments/assets/ac264e1f-61db-48b2-b29e-7baa8f2e2605" />

### Exemplo de perfis de outros usuários
<img width="549" height="934" alt="image" src="https://github.com/user-attachments/assets/4966370a-fcc6-42c7-934a-31db4c2b54a5" />

## Como executar projeto

### 1. Clone o repositório
```bash
git clone https://github.com/fernanda-borg3s/sistema-de-registro.git
cd sistema-de-registro
```
### 2. Configure o banco de dados na pasta backend (database.js)
- Coloque a URL gerada no MongoDB no espeço indicado
```bash
 mongoose.connect("<Coloque a BASEURL gerada no mongo>",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
```
### 3. Inicie o backend
```bash
cd backend
npm install
npm run dev
```
### 4. Inicie o frontend
```bash
cd frontend
npm install
npm run dev
```
