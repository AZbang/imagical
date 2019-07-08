import React, { useEffect } from 'react';
import styled from 'styled-components';
import { StoresI } from '../stores';
import { watch } from '../utils';

import { ButtonLink, Layout } from './Layout';
import Preview from './Preview/Preview';

const Header = styled.h1`
  text-align: center;
  font-size: 3.5em;
  color: #fff;
  font-weight: bold;
`;

const Start: React.FC<StoresI> = ({ account }) => {
  useEffect(() => {
    account.init();
  }, []);

  return (
    <Layout>
      <Preview
        photo={{
          id: 1,
          cover: 'code.png',
          photo: 'code.png',
          text: '',
          width: 343,
          height: 345,
        }}
      />
    </Layout>
  );
};

export default watch(Start, 'account');
