import React, { useEffect, SyntheticEvent } from 'react';
import { StoresI } from '../stores';
import { watch, print } from '../utils';
import { Layout, Title } from './kit';
import Collection from './Collection';
import Menu from './Menu';

type Props = StoresI;
const Feed: React.FC<Props> = ({ feed, client }) => {
  useEffect(() => {
    if (client.ready) feed.fetchPhotos();
  }, [client.ready]);

  return (
    <Layout>
      <Title>imagical</Title>
      <Collection
        liked={client.liked}
        onSelect={client.openPhoto.bind(client)}
        onLike={client.toggleSave.bind(client)}
        onEnd={feed.fetchPhotos.bind(feed)}
        data={feed.store}
      />
      <Menu />
    </Layout>
  );
};

export default watch(Feed, 'client', 'feed');
