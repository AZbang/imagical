import styled from 'styled-components';

interface BadgeI {
  show: boolean;
  center: boolean;
  position: 'top' | 'bottom';
}

const getPosition = ({ position, show }: BadgeI) =>
  `${position}: ${show ? '30px' : '-100px'}`;

const Badge = styled.div<BadgeI>`
  width: 30%;
  font-weight: bold;
  text-align: center;
  padding: 10px 30px;
  border-radius: 50px;
  position: fixed;
  color: #152b44;
  background: #fff;
  box-shadow: 0 2px 4px 0px #0000001a;
  transition: 0.5s all;

  ${({ center }) => center && `left: 30%`};
  ${getPosition};
`;

export default Badge;
