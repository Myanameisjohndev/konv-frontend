import { useEffect, useState } from 'react';

import Bars from '../../assets/bars-solid.svg';
import Navbar from '../../Components/Navbar';
import { useContextApp } from '../../Context';
import {
  ContainerAuth, InputContainer, Input, Button,
} from '../../global/styles/globals';
import api from '../../services';
import {
  Container, HeaderDashboard, Text, Content, IconNav, Row, AreaCard, FormOperation,
} from './styles';

const Deposit = () => {
  const { user, setUser } = useContextApp();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (Number(value) < 0) {
      setValue('0');
    }
  }, [value]);

  const deposit = async () => {
    if (!value) {
      alert('Informe um valor para depositar');
    } else {
      const depositAccount = await api.post(`/operations/deposit/${user?.cpf}`, { value });
      if (depositAccount.status === 200) {
        const valueAccount = Number(user?.account_value) + Number(value);
        if (user) {
          const newUser = { ...user, account_value: valueAccount };
          setUser(newUser);
          localStorage.setItem('token', JSON.stringify(newUser));
        }
      }
    }
  };

  return (
    <ContainerAuth>
      <Container>
      <HeaderDashboard>
        <Text>Faça seus depósitos</Text>
        </HeaderDashboard>
        <Content>
          <Row>

            {!open ? (
              <IconNav src={Bars} onClick={() => setOpen(true)}/>
            )
              : <Navbar open={open} setOpen={setOpen}/>
            }
            <AreaCard>
            <FormOperation>
              <InputContainer>
                  <Input placeholder='Valor: '
                    min={0}
                    value={value}
                    type="number"
                    onChange={(e) => setValue(e.target.value)}
                  />
                </InputContainer>
                <Button onClick={deposit}>Depositar</Button>
              </FormOperation>
            </AreaCard>
            </Row>
        </Content>
      </Container>
    </ContainerAuth>
  );
};

export default Deposit;
