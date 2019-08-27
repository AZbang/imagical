import React, { useEffect } from 'react';
import { StoresI } from '../stores';
import { watch, print } from '../utils';
import { Layout, Title } from './kit';
import Collection from './Collection';
import Menu from './Menu';

type Props = StoresI;
const Feed: React.FC<Props> = ({ client }) => {
  return (
    <Layout>
      <Title>saved.</Title>
      <Collection data={[]} />
      <Menu />
    </Layout>
  );
};

export default watch(Feed, 'client');
