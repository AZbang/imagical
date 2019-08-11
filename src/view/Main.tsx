import React, { useEffect } from 'react';
import { StoresI } from '../stores';
import { watch } from '../utils';

import { Layout, Badge, Board } from './Layout';
import Preview from './Preview/Preview';
import Feed from './Feed/Feed';

const Main: React.FC<StoresI> = ({ publics, feed }) => {
  useEffect(() => {
    feed.fetch();
  }, []);

  const loadFeed = () => !feed.loading && feed.fetch();

  return (
    <Layout>
      <Board blur={!!feed.active}>
        <Badge position="bottom" center show={feed.loading}>
          Loading
        </Badge>
        <Feed
          size={3}
          feed={feed.store}
          onSelect={feed.select.bind(feed)}
          onFeedEnd={loadFeed}
        />
      </Board>
      {feed.active && (
        <Preview
          onClose={feed.close.bind(feed)}
          group={publics.get(feed.active.publicId)!}
          photo={feed.active}
        />
      )}
    </Layout>
  );
};

export default watch(Main, 'feed', 'publics');
