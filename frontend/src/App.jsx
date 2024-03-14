import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
// import LoginForm from './LoginForm';
import CadastroForm from './CadastroForm';
import Perfil from './Perfil';
import axios from 'axios';
// import Form from 'react-bootstrap/Form';
import './App.css'
import { Col, Container, Row } from 'react-bootstrap';
const baseURL = 'http://localhost:3000'
function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [token, setToken] = useState(null); // Estado para armazenar o token de autenticação
  const [perfil, setPerfil] = useState(null); // Estado para armazenar os detalhes do perfil do usuário logado
  const navigate = useNavigate(); // Instância para redirecionamento de página
  // const [token, setToken] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseURL}/login`, {
      email,
      senha
    });
    const { token, perfil } = response.data; // Extrair token e perfil da resposta
    console.log('Token de autenticação:', response.data);

      setToken(token); // Armazenar o token no estado
      setPerfil(perfil); // Armazenar os detalhes do perfil no estado
    // Limpar os campos do formulário após o envio bem-sucedido
    navigate('/perfil')
    setEmail('');
    setSenha('');
  } catch (error) {
    console.error('Erro ao fazer login:', error);
  }
};
useEffect(() => {
  // Função para carregar o perfil após o login bem-sucedido
  const carregarPerfil = async () => {
    if (token) {
      try {
        const response = await axios.get(`${baseURL}/perfil`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { perfil } = response.data;
        setPerfil(perfil);
      } catch (error) {
        console.error('Erro ao carregar perfil:', error);
      }
    }}
  carregarPerfil();

  }, [token]);
  useEffect(() => {
    // Verificar se há um token salvo no localStorage ao carregar o componente
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    // Se o token mudar, armazená-lo no localStorage
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

const handleCadastro = () => {
  navigate('/cadastro')

  };
  return (
    <>
      <Container className='box-container p-5' >
      <Row>
        <Col className='col-hide'>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button type="submit">Login</button>
       <button onClick={handleCadastro}>Cadastrar Perfil</button>
      </form>
     

        </Col>
        
      </Row>
      {perfil && (
        
        <div  >
          <h2>Perfil do usuário logado</h2>
          <p>Token Gerado: {token}</p>
          <p>ID: {perfil.id}</p>
          <p>Nome: {perfil.nome}</p>
          <p>Email: {perfil.email}</p>
          <p>Empresa: {perfil.empresa}</p>
          <p>Telefone: {perfil.telefone}</p>
        </div>
      )}
    </Container>
 
    
      <Routes>
      <Route path="/cadastro" element={<CadastroForm />}/>
              
      </Routes>
      <Routes>
      <Route path="/perfil" element={ <Perfil  perfil={perfil} />}/>
              
      </Routes>
     
         
      
    
   
    </>
    
    
  )
}

export default App
