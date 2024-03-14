import  { useEffect, useState } from 'react';
import axios from 'axios';
import App from './App'
const baseURL = 'http://localhost:3000'

function Perfil({ perfil }) {
  const [perfilCompleto, setPerfilCompleto] = useState(null);
  const getPerfil = async () => {
    try {
      const response = await axios.get(`${baseURL}/perfil`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Perfil completo:', response.data);
      setPerfilCompleto(response.data);
    } catch (error) {
      console.error('Erro ao obter perfil:', error);
    }
  };
  useEffect(() => {
    if (perfil) {
      getPerfil();
    }
  }, [perfil]);
 
  return (
    <div>
      <h2>Perfil</h2>
      {perfil && (
        <>
        
          <p>ID: {perfil.id}</p>
          <p>Nome: {perfil.nome}</p>
          <p>Email: {perfil.email}</p>
          <p>Empresa: {perfil.empresa}</p>
          <p>Telefone: {perfil.telefone}</p>
        </>
      )}
    </div>
  );
}

export default Perfil;
