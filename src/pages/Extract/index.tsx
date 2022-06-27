import { useEffect, useState } from 'react';

import Bars from '../../assets/bars-solid.svg';
import Navbar from '../../Components/Navbar';
import { useContextApp } from '../../Context';
import { ContainerAuth } from '../../global/styles/globals';
import api from '../../services';
import { IAccount } from '../Dashboard';
import {
  Container,
  HeaderDashboard,
  Text,
  Content,
  IconNav,
  Row,
  AreaCard,
  CardValueTextSecondary,
  CardValues,
  CardDeposits,
  CardWithdraws,
  CardValueTextOperation,
} from './styles';

const Withdraw = () => {
  const { user } = useContextApp();
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState<IAccount>();

  useEffect(() => {
    if (user) {
      api.get<IAccount>(`/operations/extract/${user?.cpf}`)
        .then((res) => {
          setAccount(res.data);
        })
        .catch((err) => {
          // console.log(err.response.data);
        });
    }
  }, [user]);

  return (
    <ContainerAuth>
      <Container>
      <HeaderDashboard>
        <Text>Veja seu extrato</Text>
        </HeaderDashboard>
        <Content>
          <Row>

            {!open ? (
              <IconNav src={Bars} onClick={() => setOpen(true)}/>
            )
              : <Navbar open={open} setOpen={setOpen}/>
            }
            <AreaCard>
            <CardValues>
              <CardValueTextSecondary>Saldo</CardValueTextSecondary>
              <CardValueTextSecondary>
                {account?.Saldo.toFixed(2).replace('.', ',')}
              </CardValueTextSecondary>
            </CardValues>
            {account?.Deposits.map((item, index) => (
              <CardDeposits key={index}>
                <CardValueTextOperation>+ {item.value.toFixed(2).replace('.', ',')} reais</CardValueTextOperation>
              </CardDeposits>
            ))}
            {account?.Withdraws.map((item, index) => (
                <CardWithdraws key={index}>
                  <CardValueTextOperation>- {item.value.toFixed(2).replace('.', ',')} reais</CardValueTextOperation>
                </CardWithdraws>
            ))}
            </AreaCard>
            </Row>
        </Content>
      </Container>
    </ContainerAuth>
  );
};

export default Withdraw;
