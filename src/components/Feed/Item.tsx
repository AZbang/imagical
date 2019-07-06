import React from 'react';
import styled from 'styled-components';
import { ImagicI } from '../../typings';
import { Lazy } from '../';

const Wrap = styled.div`
  position: relative;
  padding-bottom: 100%;
  width: 100%;
  overflow: hidden;
`;

interface Props {
  item: ImagicI;
}

const Item: React.FC<Props> = ({ item }) => {
  return (
    <Wrap>
      <Lazy src={item.photo || ''} cover={item.cover || ''} fit />
    </Wrap>
  );
};

export default Item;
