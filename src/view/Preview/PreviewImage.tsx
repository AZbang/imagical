import React from 'react';
import styled from 'styled-components';
import Image from '../Layout/Image';

const ImageWrap = styled.div`
  height: 50vh;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
`;

interface PreviewImageI {
  src: string;
  preview: string;
}

const PreviewImage: React.FC<PreviewImageI> = ({ src, preview }) => (
  <ImageWrap>
    <Image src={src} preview={preview} />
  </ImageWrap>
);

export default PreviewImage;
