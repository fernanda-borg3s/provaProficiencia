import  { useEffect, useState } from 'react';
import axios from 'axios';
import App from './App'
import './Perfil.css'

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
  const handleAllPerfis = () => {
    navigate('/perfis')
  
    };
  return (
    <div className='body-perfil'>
      <h2>Meu Perfil</h2>
      {perfil && (
        <>
        <div className='paragrafos-perfil'>
        <p>ID: {perfil.id}</p>
          <p>Nome: {perfil.nome}</p>
          <p>Email: {perfil.email}</p>
          <p>Empresa: {perfil.empresa}</p>
          <p>Telefone: {perfil.telefone}</p>
        </div>
         
        </>
      )}
      <button>Ver todos os perfis</button>
    </div>
  );
}

export default Perfil;
