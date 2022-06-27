import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_GREY};
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;
  transition: 0.4s all;
  @media(max-width: 800px) {
    width: 140px;
  }
  @media(max-width: 600px) {
    width: 60px;
  }
  @media(max-width: 300px) {
    width: 30px;
  }

`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin: 10px;
  cursor: pointer;
  @media(max-width: 800px) {
    width: 15px;
    height: 15px;
    margin: 5px;
  }
  @media(max-width: 600px) {
    width: 10px;
    height: 10px;
    margin: 5px;
  }
  @media(max-width: 300px) {
    margin: 5px;
  }
`;

export const NavOption = styled.h1`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: 400;
  height: 40px;
  font-size: 15px;
  text-align: center;
  transition: 0.3s all;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media(max-width: 800px) {
    font-size: 15px;
    height: 30px;
  }
  @media(max-width: 600px) {
    font-size: 8px;
    height: 25px;
  }
  @media(max-width: 300px) {
    font-size: 5px;
    height: 20px;
  }

  &:hover{
    background-color: ${({ theme }) => theme.COLORS.DARK_GREY_SECONDARY};
  }

`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;
