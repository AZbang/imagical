import React, { useState } from 'react';
import Grid from './Grid';
import Item from './Item';
import Menu from './Menu';
import { ImagicI } from '../../typings';

interface Props {
  feed: ImagicI[];
}
type FeedType = 'grid' | 'list';

const Feed: React.FC<Props> = ({ feed }) => {
  const [feedType, setFeedType] = useState<FeedType>('grid');
  const toggleFeedType = () => setFeedType(feedType === 'grid' ? 'list' : 'grid');
  const getGridSize = (): number => (feedType === 'grid' ? 3 : 1);

  return (
    <>
      <Menu onClick={toggleFeedType}>Imagical feed</Menu>
      <Grid x={getGridSize()}>
        {feed.map((item, i) => (
          <Item key={i} />
        ))}
      </Grid>
    </>
  );
};

Feed.defaultProps = {
  feed: [],
};

export default Feed;
