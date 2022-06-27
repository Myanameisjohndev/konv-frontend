import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HasAccount = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.COLOR_2};
`;
