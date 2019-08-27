import styled from 'styled-components';

interface Props {
  width: number;
  height: number;
}

const setSize = ({ height, width }: Props) => ({
  style: { height: height + 'px', width: width + 'px' },
});

const PlaceholderCard = styled.div.attrs(setSize)<Props>`
  background: #607d8b3d;
  overflow: hidden;
  border-radius: 20px;
  position: relative;
`;

export default PlaceholderCard;
