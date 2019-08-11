import styled from 'styled-components';

interface ImageProps {
  src?: string;
  color?: string;
}

const FeedImage = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`;

export default FeedImage;
