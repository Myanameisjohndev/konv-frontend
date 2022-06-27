import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useContextApp } from '../../Context';
import {
  Form, H1, ContainerAuth, Button, Input, InputContainer, Konv, Header,
} from '../../global/styles/globals';
import api from '../../services';
import { HasAccount } from './styles';

const Login = () => {
  const [password, setPaword] = useState('');
  const [cpf, setCpf] = useState('');
  const { user, setUser } = useContextApp();
  const navigate = useNavigate();
  function LoginUser(e: any) {
    e.preventDefault();

    if (!password) {
      alert('Informe seu nome');
    }
    if (!cpf) {
      alert('Informe seu cpf');
    }

    api.get(`/account/login/${password}/${cpf}`)
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.data.returnUser));
        setUser(res.data.returnUser);
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
          <H1>Entrar na sua conta</H1>
        </Header>
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
        <Button onClick={(e) => LoginUser(e)}>Entrar</Button>
        <HasAccount to="/signup">Não tenho conta</HasAccount>
      </Form>
    </ContainerAuth>
  );
};

export default Login;
