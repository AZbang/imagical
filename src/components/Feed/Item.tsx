import React from 'react';
import styled from 'styled-components';
import { ImagicI } from '../../typings';

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #09091d;
  object-fit: cover;
`;

const Wrap = styled.div`
  position: relative;
  padding-bottom: 100%;
  width: 100%;
`;

interface Props {
  item: ImagicI;
}

const Item: React.FC<Props> = ({ item }) => {
  return (
    <Wrap>
      <Image src={item.photo || ''} />
    </Wrap>
  );
};

export default Item;
