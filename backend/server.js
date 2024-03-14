// server.js

// const express = require('express');
// // const mongoose = require('mongoose');

// const bodyParser = require('body-parser');
// const Profile = require('./models/Profile');
// const jwt = require('jsonwebtoken');

// const app = express();
// const port = 3000;

// mongoose.connect('mongodb://localhost:27017/social_network', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

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

// Endpoint para recuperar o perfil do usuário logado (após autenticação)
app.get('/perfil', async (req, res) => {
  try {
    // Aqui você implementaria a lógica para recuperar o perfil do usuário logado com base no token de autenticação
    // Por simplicidade, vou apenas retornar um perfil aleatório
    const perfil = await Profile.findOne({}, { nome: 1, empresa: 1, telefone: 1, email: 1 });
    res.json(perfil);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint para login e geração de token de autenticação
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  // Aqui você implementaria a lógica de autenticação, por simplicidade, vou apenas gerar um token
  const token = jwt.sign({ email }, 'secret_key');
  res.json({ token });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
