// models/Profile.js

const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  nome: { 
    type: String, 
    required: true 
},
  email: { type: String, required: true, unique: true, },
  empresa: { type: String, required: true },
  senha: { type: String, required: true },
  telefone: { type: Number, required: true }
});

module.exports = mongoose.model('Profile', profileSchema);
