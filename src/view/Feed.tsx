import React, { useEffect } from 'react';
import { StoresI } from '../stores';
import { watch, print } from '../utils';
import { Layout, Title } from './kit';
import Collection from './Collection';
import Placeholder from './Placeholder';

type Props = StoresI;
const Feed: React.FC<Props> = ({ feed, client }) => {
  const loadData = () => {
    if (feed.loading) return;
    const users = client.getRandomFriends(3);
    print(users, feed, client);
    feed.fetchFromUsers(users);
  };

  useEffect(() => {
    if (client.ready) feed.fetchFromUsers(client.getRandomFriends(3));
  }, [client.ready]);

  print(feed.photos);
  return (
    <Layout>
      <Title>imagical</Title>
      {(!client.ready || feed.loading) && <Placeholder />}
      <Collection
        onSelect={feed.openPhoto.bind(feed)}
        onLike={feed.savePhoto.bind(feed)}
        onEnd={loadData}
        data={feed.photos}
      />
    </Layout>
  );
};

export default watch(Feed, 'client', 'feed');
