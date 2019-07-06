import React, { useEffect, useState } from 'react';
import Img from './Image';

interface ImageProps {
  src: string;
  cover: string;
  fit?: boolean;
}

const LazyImage: React.FC<ImageProps> = ({ cover, src, fit }) => {
  const [loaded, setLoaded] = useState(false);
  const getSrc = () => (loaded ? src : cover);

  useEffect(() => {
    if (!cover) return;
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = src || '';
  }, [src]);

  return <Img fit={fit} blur={!loaded} src={getSrc()} />;
};

LazyImage.defaultProps = {
  src: '',
  cover: '',
};

export default LazyImage;
