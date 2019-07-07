import styled, { css } from 'styled-components';

interface BoardI {
  blur?: boolean;
}

const blurredState = css`
  filter: blur(30px);
  overflow: hidden;
`;

const Board = styled.div<BoardI>`
  width: 100vw;
  height: 100vh;
  display: flex;
  transition: 0.5s filter;
  ${({ blur }) => blur && blurredState};
`;

Board.defaultProps = {
  blur: false,
};

export default Board;
