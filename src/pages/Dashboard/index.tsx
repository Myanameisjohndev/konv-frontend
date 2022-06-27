import { useEffect, useState } from 'react';

import Bars from '../../assets/bars-solid.svg';
import Navbar from '../../Components/Navbar';
import { useContextApp } from '../../Context';
import { ContainerAuth } from '../../global/styles/globals';
import api from '../../services';
import {
  Container,
  HeaderDashboard,
  Text,
  TextSecondary,
  RowText,
  Content,
  IconNav,
  AreaCard,
  CardValues,
  Row,
  CardValueTextSecondary,
} from './styles';

interface IOperation{
  cpf: string;
  createdAt: string;
  updatedAt: string;
  value: number;
}
export interface IAccount {
  Deposits : IOperation[];
  Withdraws : IOperation[];
  Saldo: number;
  TotalDeposits: number;
  TotalWithdraws: number;
}

const Dashboard = () => {
  const { user } = useContextApp();
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState<IAccount>();

  useEffect(() => {
    if (user) {
      api.get<IAccount>(`/operations/extract/${user?.cpf}`)
        .then((res) => {
          setAccount(res.data);
        })
        .catch(() => {
          // console.log(err.response.data);
        });
    }
  }, [user]);

  return (
    <ContainerAuth>
      <Container>
      <HeaderDashboard>
        <RowText>
            <Text>Seja bem vindo</Text>
            <TextSecondary>&nbsp;{user?.name}</TextSecondary>
        </RowText>
        <Text>Gerencie suas operações de forma mais eficaz</Text>
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
                  <CardValues>
                    <CardValueTextSecondary>Depósitos</CardValueTextSecondary>
                    <CardValueTextSecondary>
                      {account && String(account?.TotalDeposits)}
                    </CardValueTextSecondary>
                  </CardValues>
                  <CardValues>
                    <CardValueTextSecondary>Saques</CardValueTextSecondary>
                    <CardValueTextSecondary>
                    {account && String(account?.TotalWithdraws)}
                    </CardValueTextSecondary>
                  </CardValues>
                </AreaCard>
              </Row>
        </Content>
      </Container>
    </ContainerAuth>
  );
};

export default Dashboard;
