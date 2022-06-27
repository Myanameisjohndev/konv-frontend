import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useContextApp } from '../../Context';
import {
  Form, H1, ContainerAuth, Button, Input, InputContainer, Konv, Header,
} from '../../global/styles/globals';
import api from '../../services';
import { HasAccount } from './styles';

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPaword] = useState('');
  const [cpf, setCpf] = useState('');
  const { user, setUser } = useContextApp();
  const navigate = useNavigate();
  function LoginUser(e: any) {
    e.preventDefault();

    if (!name) {
      alert('Informe seu nome');
    }
    if (!password) {
      alert('Informe seu nome');
    }
    if (!cpf) {
      alert('Informe seu cpf');
    }

    api.post('/account/register', { name, password, cpf })
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  }

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user]);

  return (
    <ContainerAuth>
      <Form>
        <Header>
          <Konv>Konv</Konv>
          <H1>Cadastre sua conta</H1>
        </Header>
        <InputContainer>
          <Input placeholder='Nome: '
             value={name}
             onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Input placeholder='Cpf: '
             value={cpf}
             onChange={(e) => setCpf(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <Input placeholder='Senha: '
            type="password"
            value={password}
            onChange={(e) => setPaword(e.target.value)}
          />
        </InputContainer>
        <Button onClick={(e) => LoginUser(e)}>Cadastrar</Button>
        <HasAccount to="/">Já tenho uma conta</HasAccount>
      </Form>
    </ContainerAuth>
  );
};

export default Signup;
