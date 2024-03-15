import { useEffect, useState} from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:3000'
 
const Perfis = () => {
  const [perfis, setPerfis] = useState([]);

  useEffect(() => {
    const fetchPerfis = async () => {
      try {
        const response = await axios.get(`${baseURL}/perfis`);
        setPerfis(response.data);
      } catch (error) {
        console.error('Erro ao recuperar perfis:', error);
      }
    };
    fetchPerfis();
  }, []); 

  return (
    <div className='body-perfil'>
      <div className='paragrafos-perfil'>
        <h1>Lista de Perfis</h1>
      <ol>
        {perfis.map(perfil => (
          <li key={perfil._id}>
            <p><strong>ID: {perfil._id}</strong></p>
            <p>Nome: {perfil.nome}</p>
            <p>Email: {perfil.email}</p>
          </li>
          
        ))}
      </ol>
      <button></button>
      </div>
      
    </div>
  );
}

export default Perfis;
