import { useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
const baseURL = 'http://localhost:3000'


function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  
    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(`${baseURL}/login`, {
            email,
            senha
          });
      onLogin(response.data.token); // Passa o token para a função de callback do componente pai
       // Limpar os campos do formulário após o envio bem-sucedido
    //    setEmail('');
    //    setSenha('');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
        <>
        <Container className='box-container p-5' >
      <Row>
        <Col>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button type="submit">Login</button>
      </form>
        </Col>
        
      </Row>
    
    </Container>
        </>
  );
}

export default LoginForm;
