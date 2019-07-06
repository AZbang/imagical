import React, { SyntheticEvent } from 'react';
import Grid from './Grid';
import Item from './Item';
import { ImagicI } from '../../typings';

interface Props {
  feed: ImagicI[];
  loading: boolean;
  onFeedEnd?: () => void;
}

const Feed: React.FC<Props> = ({ feed, loading, onFeedEnd }) => {
  const scrolled = ({ currentTarget: el }: SyntheticEvent<HTMLElement>) => {
    if (el.scrollHeight - el.scrollTop < el.clientHeight * 2) {
      !loading && onFeedEnd && onFeedEnd();
    }
  };

  return (
    <Grid onScroll={scrolled} x={3}>
      {feed.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Grid>
  );
};

Feed.defaultProps = {
  feed: [],
};

export default Feed;
