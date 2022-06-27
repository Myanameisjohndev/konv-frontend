import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Bars from '../../assets/bars-solid.svg';
import Navbar from '../../Components/Navbar';
import { useContextApp } from '../../Context';
import {
  H1, ContainerAuth, InputContainer, Input, Button,
} from '../../global/styles/globals';
import api from '../../services';
import {
  Container, HeaderDashboard, Text, Content, IconNav, Row, AreaCard, FormOperation,
} from './styles';

const Withdraw = () => {
  const { user, setUser } = useContextApp();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    if (Number(value) < 0) {
      setValue('0');
    }
  }, [value]);

  const validNotes = (data: any) => {
    let finalString = '';
    if (data[0].note100 > 0) {
      finalString = `${data[0].note100 > 1 ? `${data[0].note100} notas de 100 reais` : `${data[0].note100} nota de 100 reais`} `;
    }
    if (data[1].note50 > 0) {
      finalString = `${finalString} ${data[1].note50 > 1 ? `${data[1].note50} notas de 50 reais` : `${data[1].note50} nota de 50 reais`} `;
    }
    if (data[2].note20 > 0) {
      finalString = `${finalString} ${data[2].note20 > 1 ? `${data[2].note20} notas de 20 reais` : `${data[2].note20} nota de 20 reais`} `;
    }
    if (data[3].note10 > 0) {
      finalString = `${finalString} ${data[3].note10 > 1 ? `${data[3].note10} notas de 10 reais` : `${data[3].note10} nota de 10 reais`} `;
    }
    if (data[4].note5 > 0) {
      finalString = `${finalString} ${data[4].note5 > 1 ? `${data[4].note5} notas de 5 reais` : `${data[4].note5} nota de 5 reais`} `;
    }
    if (data[5].note2 > 0) {
      finalString = `${finalString} ${data[5].note2 > 1 ? `${data[5].note2} notas de 2 reais` : `${data[5].note2} nota de 2 reais`} `;
    }
    if (data[6].note1 > 0) {
      finalString = `${finalString} ${data[6].note1 && `${data[6].note1} nota de 1 real`} `;
    }
    alert(`Você vai receber ${finalString}`);
  };

  const deposit = async () => {
    if (!value) {
      alert('Informe um valor para sacar');
    } else if (Number(value) > Number(user?.account_value)) {
      alert('Você não possui esse valor em conta');
    } else {
      const withdraw = await api.post(`/operations/withdraw/${user?.cpf}`, { value });
      if (withdraw.status === 200) {
        console.log(withdraw.data.Notes);
        validNotes(withdraw.data.Notes);
        const valueAccount = Number(user?.account_value) - Number(value);
        if (user) {
          const newUser = { ...user, account_value: valueAccount };
          setUser(newUser);
          localStorage.setItem('token', JSON.stringify(newUser));
          // navigate('/dashboard');
        }
      }
    }
  };

  return (
    <ContainerAuth>
      <Container>
      <HeaderDashboard>
        <Text>Faça seus saques</Text>
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
                <Button onClick={deposit}>Sacar</Button>
              </FormOperation>
            </AreaCard>
            </Row>
        </Content>
      </Container>
    </ContainerAuth>
  );
};

export default Withdraw;
