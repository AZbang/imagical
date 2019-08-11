import React, { useEffect } from 'react';
import styled from 'styled-components';
import { History } from 'history';
import { withRouter } from 'react-router-dom';
import { StoresI } from '../stores';
import { watch, print } from '../utils';
import { Layout } from './Layout';
import groups from '../static/groups.json';

const Header = styled.h1`
  text-align: center;
  font-size: 3.5em;
  color: #fff;
  font-weight: bold;
`;

type Props = { history: History } & StoresI;
const Start: React.FC<Props> = ({ history, publics, api }) => {
  useEffect(() => {
    const init = async (): Promise<void> => {
      const allow = await api.requestPermissions('photos');
      if (!allow) return init();
      await publics.load(groups.new);
      history.push('/feed');
    };
    init();
  }, []);

  print(publics);

  return (
    <Layout>
      <Header>magical</Header>
    </Layout>
  );
};

export default withRouter(watch(Start, 'api', 'publics'));
