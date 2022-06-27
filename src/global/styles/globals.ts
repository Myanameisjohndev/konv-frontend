import styled, { css } from 'styled-components';

export const Konv = styled.h1`
  color: ${({ theme }) => theme.COLORS.COLOR_2};
  font-size: 50px;
  font-weight: bold;

  @media(max-width: 800px) {
    font-size: 50px;
  }
  @media(max-width: 600px) {
    font-size: 40px;
  }
  @media(max-width: 300px) {
    font-size: 20px;
  }

`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const H1 = styled.h6`
  color: ${({ theme }) => theme.COLORS.COLOR_2};

  @media(max-width: 800px) {
    font-size: 30px;
  }
  @media(max-width: 600px) {
    font-size: 20px;
  }
  @media(max-width: 300px) {
    font-size: 10px;
  }

`;

export const Form = styled.form`
  min-width: 600px;
  min-height: 500px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  padding: 10px;
  transition: all 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:hover{
    padding: 30px;
  }

  @media(max-width: 800px) {
    min-width: 400px;
    min-height: 400px;
  }

  @media(max-width: 600px) {
    min-width: 250px;
    min-height: 200px;
  }

  @media(max-width: 300px) {
    min-width: 60%;
    min-height: 30%;
  }

`;

export const ContainerAuth = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_GREY};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${css`
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 16s forwards infinite;
      @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 70%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `}

`;

export const Button = styled.button`
  width: 80%;
  height: 60px;
  border: 0;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.COLORS.COLOR_2};
  cursor: pointer;
  margin: 10px;
  padding: 0px 10px;

  transition: all 0.7s;

  &:hover{
    background-color: ${({ theme }) => theme.COLORS.COLOR_3};
  }

  @media(max-width: 800px) {
    font-size: 20px;
  }
  @media(max-width: 600px) {
    font-size: 15px;
  }
  @media(max-width: 300px) {
    font-size: 10px;
  }

`;

export const InputContainer = styled.div`
  width: 80%;
  height: 60px;
  border: 0;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.COLORS.GREY};
  cursor: pointer;
  margin: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  border: 0;
  width: 90%;
  height: 60px;
  color: ${({ theme }) => theme.COLORS.DARK_GREY};
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  outline: 0;
  ::placeholder{
    color: ${({ theme }) => theme.COLORS.DARK_GREY};
    opacity: 0.7;
  }
  @media(max-width: 800px) {
    font-size: 20px;
  }
  @media(max-width: 600px) {
    font-size: 15px;
  }
  @media(max-width: 300px) {
    font-size: 10px;
  }
`;
