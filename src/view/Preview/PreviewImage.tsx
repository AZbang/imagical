import React from 'react';
import styled from 'styled-components';
import { bounceIn } from './animation';
import { LazyImage } from '../Layout';
import PreviewControl from './PreviewControl';
import PreviewPublic from './PreviewPublic';

const Wrap = styled.div`
  text-align: center;
  animation: ${bounceIn} 0.5s;
`;

const Image = styled.img`
  width: 90%;
  object-fit: cover;
  border-radius: 20px;
`;

interface PreviewImageI {
  src?: string;
  cover?: string;
}

const PreviewImage: React.FC<PreviewImageI> = ({ src, cover }) => (
  <Wrap>
    <PreviewPublic />
    <LazyImage Image={Image} src={src} cover={cover} />
    <PreviewControl likes={342} photo={src} />
  </Wrap>
);

export default PreviewImage;
