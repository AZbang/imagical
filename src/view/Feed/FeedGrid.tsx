import styled from 'styled-components';

interface Props {
  size: number;
}

const FeedGrid = styled.div<Props>`
  display: grid;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  grid-template-columns: ${({ size }) => `repeat(${size}, 1fr)`};
`;

FeedGrid.defaultProps = {
  size: 4,
};

export default FeedGrid;
