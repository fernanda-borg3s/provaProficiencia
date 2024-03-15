import { useState } from 'react';
import axios from 'axios';
import './App.css'
import { Col, Container, Row } from 'react-bootstrap';
const baseURL = 'http://localhost:3000'


function CadastroForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(`${baseURL}/perfis`, {
          nome,
          email,
          empresa,
          senha,
          telefone
        });
        alert('Perfil criado com sucesso', response.data);
        // Limpar os campos do formulário após o envio bem-sucedido
        setNome('');
        setEmail('');
        setEmpresa('');
        setSenha('');
        setTelefone('');
      } catch (error) {
        alert('Erro ao criar perfil:', error);
      }
    };

  return (
    <>
     <Container className='box-container p-5' >
      <Row>
        <Col>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          <input type="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          <button type="submit">Criar Perfil</button>
        </form>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default CadastroForm;
