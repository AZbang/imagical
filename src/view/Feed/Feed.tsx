import React, { SyntheticEvent } from 'react';
import FeedGrid from './FeedGrid';
import FeedItem from './FeedItem';
import { ImagicI } from '../../typings';

interface Props {
  feed: ImagicI[];
  size: number;
  onSelect?: (id: number) => void;
  onFeedEnd?: () => void;
}

const Feed: React.FC<Props> = ({ feed, size, onSelect, onFeedEnd }) => {
  const scrolled = ({ currentTarget: el }: SyntheticEvent<HTMLElement>) => {
    if (el.scrollHeight - el.scrollTop < el.clientHeight * 2) {
      onFeedEnd && onFeedEnd();
    }
  };

  const selected = (id: number) => onSelect && onSelect(id);

  return (
    <FeedGrid onScroll={scrolled} size={size}>
      {feed.map(item => (
        <FeedItem key={item.id} onSelect={selected} item={item} />
      ))}
    </FeedGrid>
  );
};

Feed.defaultProps = {
  feed: [],
  size: 3,
};

export default Feed;
