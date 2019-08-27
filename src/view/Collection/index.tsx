import React, { FC } from 'react';
import MasonryLayout from 'react-masonry-layout';
import PictureCard from './PictureCard';
import { IPhotoModel } from '../../typings';
import { client } from '../../stores';

interface Props {
  data?: IPhotoModel[];
  onSelect?: (id: number) => void;
  onLike?: (id: number) => void;
  onEnd?: () => void;
}

const Collection: FC<Props> = ({ onEnd, onLike, onSelect, data = [] }) => (
  <MasonryLayout id="masonry-layout" infiniteScroll={onEnd}>
    {data.map(item => (
      <PictureCard
        key={item.date}
        width={item.width}
        height={item.height}
        picture={item.src}
        liked={item.saved}
        avatar={client.getFriend(item.provider)!.avatar}
        onSelect={() => onSelect && onSelect(item.id)}
        onLike={() => onLike && onLike(item.id)}
      ></PictureCard>
    ))}
  </MasonryLayout>
);

export default Collection;
