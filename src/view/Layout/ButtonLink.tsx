import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonLink = styled(Link)`
  margin-top: 10px;
  display: block;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  padding: 20px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.2);

  :hover {
    background: rgba(255, 255, 255, 0.3);
  }

  :active {
    background: rgba(255, 255, 255, 0.4);
  }
`;

export default ButtonLink;
