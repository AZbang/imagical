import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

interface ImageProps {
  onClick?: () => void;
  preview?: string;
  src: string;
}

const Img = styled.img<{ blur: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${({ blur }) => blur && `blur(10px)`};
`;

const Picture: FC<ImageProps> = ({ onClick, src, preview }) => {
  const [loaded, setLoaded] = useState(!!preview);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = src;
  }, [src]);

  return <Img onClick={onClick} src={loaded ? src : preview} blur={!loaded} />;
};

export default Picture;
