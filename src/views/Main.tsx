import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { Feed, Badge } from '../components';
import { StoresI } from '../stores';

const Main: React.FC<StoresI> = ({ feed }) => {
  useEffect(() => {
    feed.fetch();
  }, []);

  return (
    <>
      <Feed onFeedEnd={feed.fetch.bind(feed)} loading={feed.loading} feed={feed.data} />
      <Badge>Loading</Badge>
    </>
  );
};

export default inject('feed')(observer(Main));
