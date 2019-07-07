import { keyframes } from 'styled-components';

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3) translate3d(0,0,0);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.1);
  }
  80% {
    opacity: 1;
    transform: scale(0.89);
  }
  100% {
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
  }
`;

export { bounceIn };
