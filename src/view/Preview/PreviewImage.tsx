import React from 'react';
import styled from 'styled-components';
import { bounceIn } from './animation';
import { LazyImage } from '../Layout';

const Wrap = styled.div`
  animation: ${bounceIn} 0.5s;
`;

const Image = styled.img`
  height: 60vh;
  max-width: 95vh;
  object-fit: cover;
  border-radius: 20px;
`;

interface PreviewImageI {
  src?: string;
  cover?: string;
}

const PreviewImage: React.FC<PreviewImageI> = ({ src, cover }) => (
  <Wrap>
    <LazyImage Image={Image} src={src} cover={cover} />
  </Wrap>
);

export default PreviewImage;
