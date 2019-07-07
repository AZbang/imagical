import React, { useEffect } from 'react';
import { StoresI } from '../stores';
import { watch, print } from '../utils';

import { Layout, Badge, Board } from './Layout';
import Preview from './Preview/Preview';
import Feed from './Feed/Feed';

const Main: React.FC<StoresI> = ({ feed }) => {
  useEffect(() => {
    feed.fetch();
  }, []);

  print(feed.data);
  return (
    <Layout>
      <Board blur={!!feed.active}>
        <Badge position="bottom" center show={feed.loading}>
          Loading
        </Badge>
        <Feed
          size={3}
          feed={feed.data}
          onSelect={feed.select.bind(feed)}
          onFeedEnd={feed.fetch.bind(feed)}
        />
      </Board>
      {feed.active && (
        <Preview onClose={feed.close.bind(feed)} photo={feed.active} />
      )}
    </Layout>
  );
};

export default watch(Main, 'feed');
