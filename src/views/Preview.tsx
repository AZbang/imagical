import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { StoresI } from '../stores';

const ButtonLink = styled(Link)`
  margin-top: 10px;
  display: block;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  padding: 20px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.2);

  :hover {
    background: rgba(255, 255, 255, 0.3);
  }

  :active {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Header = styled.h1`
  text-align: center;
  color: #fff;
`;

const Layout = styled.div`
  padding: 0 10vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #673ab7;
`;

const Preview: React.FC<StoresI> = ({ account }) => {
  useEffect(() => {
    account.init();
  }, []);

  return (
    <Layout>
      <Header>✨ imagical ✨</Header>
      <ButtonLink to="/feed">Go to Feed!</ButtonLink>
      <ButtonLink to="/feed">Go to Saved!</ButtonLink>
    </Layout>
  );
};

export default inject('account')(observer(Preview));
