import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60%;
  width: 100%;
  @media(max-width: 800px) {
    height: 80%;
  }
  @media(max-width: 600px) {
    height: 80%;
    width: 100%;
  }
  @media(max-width: 300px) {
    font-size: 10px;
  }
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  height: 80%;
  width: 60%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_GREY_SECONDARY};
`;

export const Text = styled.h3`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 15px;
  @media(max-width: 800px) {
    font-size: 15px;
  }
  @media(max-width: 600px) {
    font-size: 10px;
  }
  @media(max-width: 300px) {
    font-size: 10px;
  }
`;
export const TextSecondary = styled.h3`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 15px;
  font-weight: 400;
  @media(max-width: 800px) {
    font-size: 15px;
  }
  @media(max-width: 600px) {
    font-size: 10px;
  }
  @media(max-width: 300px) {
    font-size: 10px;
  }
`;

export const HeaderDashboard = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_GREY_SECONDARY};
  width: 58%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 1%;
`;
export const RowText = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: row;
`;

export const IconNav = styled.img`
  width: 25px;
  height: 25px;
  margin: 10px;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const CardValues = styled.div`
  width: 80%;
  height: 80px;
  margin: 10px;
  background-color: #FFF;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media(max-width: 800px) {
    width: 60%;
    height:60px;
  }
  @media(max-width: 600px) {
    width: 60%;
    height:30px;
  }
`;

export const CardValueTextSecondary = styled.h3`
  color: ${({ theme }) => theme.COLORS.DARK_GREY};
  font-size: 35px;
  font-weight: bold;
  @media(max-width: 800px) {
    font-size: 10px;
  }
  @media(max-width: 600px) {
    font-size: 8px;
  }
  @media(max-width: 300px) {
    font-size: 10px;
  }
`;

export const AreaCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormOperation = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
