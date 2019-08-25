import React, { FC, useEffect } from 'react';
import MasonryLayout from 'react-masonry-layout';
import PictureCard from '../kit/PictureCard';
import Photo from '../../models/Photo';

interface Props {
  data?: Photo[];
  liked?: number[];
  loading?: boolean;
  onSelect?: (photo: Photo) => void;
  onLike?: (photo: Photo) => void;
  onEnd?: () => void;
}

const Collection: FC<Props> = ({
  onEnd,
  onLike,
  onSelect,
  liked = [],
  data = [],
}) => {
  return (
    <MasonryLayout id="masonry-layout" infiniteScroll={onEnd}>
      {data.map(item => (
        <PictureCard
          key={item.date}
          width={item.w}
          height={item.h}
          picture={item.src}
          avatar={item.provider.cover}
          liked={!!liked.find(id => id === item.id)}
          onSelect={() => onSelect && onSelect(item)}
          onLike={() => onLike && onLike(item)}
        ></PictureCard>
      ))}
    </MasonryLayout>
  );
};

export default Collection;
