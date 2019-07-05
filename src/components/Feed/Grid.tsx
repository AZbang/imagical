import styled from 'styled-components';

interface Props {
  x: number;
}

const Grid = styled.div<Props>`
  display: grid;
  height: 100vh;
  overflow-y: scroll;
  grid-template-columns: ${({ x }) => `repeat(${x}, 1fr)`};
`;
Grid.defaultProps = {
  x: 4,
};

export default Grid;
