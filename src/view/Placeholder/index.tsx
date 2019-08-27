import React, { FC } from 'react';
import MasonryLayout from 'react-masonry-layout';
import PlaceholderCard from './PlaceholderCard';
import { print } from '../../utils';

const placeholders = [150, 280, 250, 100, 200, 120, 350, 300];
const Placeholder: FC = () => (
  <MasonryLayout id="placeholder-layout">
    {placeholders.map((size, i) => (
      <PlaceholderCard
        key={i}
        width={window.innerWidth / 2 - 30}
        height={size}
      ></PlaceholderCard>
    ))}
  </MasonryLayout>
);

export default Placeholder;
