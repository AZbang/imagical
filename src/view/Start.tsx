import React, { useEffect } from 'react';
import styled from 'styled-components';
import { StoresI } from '../stores';
import { watch } from '../utils';

import { ButtonLink, Layout } from './Layout';

const Header = styled.h1`
  text-align: center;
  font-size: 3.5em;
  color: #fff;
  font-weight: bold;
`;

const Preview: React.FC<StoresI> = ({ account }) => {
  useEffect(() => {
    account.init();
  }, []);

  return (
    <Layout>
      <Header>imagical</Header>
      <ButtonLink style={{ width: '60vw' }} to="/feed">
        Start
      </ButtonLink>
    </Layout>
  );
};

export default watch(Preview, 'account');
