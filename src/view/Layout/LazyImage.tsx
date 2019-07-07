import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

interface LazyI {
  src?: string;
  cover?: string;
  Image: React.ComponentType<{ src?: string }>;
}

interface LazyWrapI {
  loading: boolean;
}

const bluredState = css`
  img {
    position: absolute;
    filter: blur(10px);
    width: 130%;
    height: 130%;
    left: -15%;
    top: -15%;
  }
`;

const Lazy = styled.div<LazyWrapI>`
  overflow: hidden;
  ${({ loading }) => loading && bluredState};
`;

const LazyImage: React.FC<LazyI> = ({ cover, src, Image: Img }) => {
  const [loaded, setLoaded] = useState(false);
  const getSrc = () => (loaded ? src : cover);

  useEffect(() => {
    if (!cover) return;
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = src || '';
  }, [src]);

  return (
    <Lazy loading={!loaded}>
      <Img src={getSrc()} />
    </Lazy>
  );
};

export default LazyImage;
