import { useState} from 'react';
import axios from 'axios';
const baseURL = 'http://localhost:3000'


 

    const Perfis = async () => {
        const [perfis, setPerfis] = useState([]);
      try {
        const response = await axios.get(`${baseURL}/perfis`);
        setPerfis(response.data);
      } catch (error) {
        console.error('Erro ao recuperar perfis:', error);
      }


  return (
    <div>
      <h1>Perfis</h1>
      <ul>
        {perfis.map(perfil => (
          <li key={perfil._id}>
            <p>ID: {perfil._id}</p>
            <p>Nome: {perfil.nome}</p>
            <p>Email: {perfil.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Perfis;
