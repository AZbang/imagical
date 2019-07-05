import styled from 'styled-components';

interface Props {
  x: number;
}

const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: ${({ x }) => `repeat(${x}, 1fr)`};
  grid-gap: 5px;
`;
Grid.defaultProps = {
  x: 4,
};

export default Grid;
