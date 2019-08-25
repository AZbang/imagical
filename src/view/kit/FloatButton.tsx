import styled from 'styled-components';
import theme from './theme';

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  right: 10px;
  bottom: 10px;
  background-color: ${theme.color};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border: none;
`;

export default FloatButton;
