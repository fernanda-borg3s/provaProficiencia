const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Profile = require('./models/Profile');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const Perfil = require('./models/Profile'); // Importe o modelo de Perfil

const connectDatabase = require('./database/database')
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

connectDatabase() //chama banco
app.use(express.json())

// Endpoint para criar um novo perfil
app.post('/perfis', async (req, res) => {
    try {
      const { nome, email, empresa, senha, telefone } = req.body;
      const profile = new Profile({ nome, email, empresa, senha, telefone });
      await profile.save();
      res.status(201).json(profile);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Endpoint para recuperar todos os perfis
  app.get('/perfis', async (req, res) => {
    try {
      const perfis = await Profile.find({}, { _id: 1, nome: 1, email: 1 });
      res.json(perfis);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Endpoint para recuperar um perfil por ID
  app.get('/perfis/:id', async (req, res) => {
    
    try {
      const perfil = await Profile.findById(req.params.id, { nome: 1, email: 1 });
      res.json(perfil);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Endpoint para recuperar o perfil do usuário logado 
  app.get('/perfil', async (req, res) => {
    try {
      const token = req.headers.authorization.split(' ')[1]; // Obtém o token do cabeçalho Authorization
      // Verifica e decodifica o token JWT
      const decoded = jwt.verify(token, 'secret_key');
      const email = decoded.email;

      // Consulta o perfil com base no email obtido do token
      const perfil = await Perfil.findOne({ email });

      if (!perfil) {
          return res.status(401).json({ message: 'Usuário não autorizado' });
      }

      // Retorna os detalhes do perfil
      res.json({
          perfil: {
              id: perfil._id,
              nome: perfil.nome,
              email: perfil.email,
              empresa: perfil.empresa,
              telefone: perfil.telefone
          }
      });
  } catch (error) {
      if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Token inválido ou expirado' });
      }
      res.status(500).json({ message: error.message });
  }
});

  // Endpoint para login e geração de token de autenticação
  app.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    
    try {
      // Consulta o perfil no banco de dados com as credenciais fornecidas
      const perfil = await Perfil.findOne({ email, senha });
  
      if (!perfil) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }
      const token = jwt.sign({ email }, 'secret_key');
      res.json({ 
        token,
        perfil: {
          id: perfil._id,
          nome: perfil.nome,
          email: perfil.email,
          empresa: perfil.empresa,
          telefone: perfil.telefone
        }
      });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  































// import express from 'express'
// import connectDatabase from "./src/database/db.js"
// import userRoute from "./src/routes/user.route.js"
// const app = express();

// //fuction (CAllback) - responsalvel por executar algum comando
// // app.get('/route', (req, res) => {
// //   res.send('Hello World')
// // })
// connectDatabase()
// app.use(express.json())
// app.use("/perfil", userRoute);
// app.listen(3000, () => console.log(`Servidor funciona`))