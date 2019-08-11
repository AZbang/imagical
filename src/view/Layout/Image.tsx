import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

interface ImageProps {
  preview: string;
  src: string;
}

const Img = styled.img<{ blur: boolean }>`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  object-fit: cover;
  filter: ${({ blur }) => blur && `blur(10px)`};
`;

const Lazy: FC<ImageProps> = ({ src, preview }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = src;
  }, [src]);

  return <Img src={loaded ? src : preview} blur={!loaded} />;
};

export default Lazy;
