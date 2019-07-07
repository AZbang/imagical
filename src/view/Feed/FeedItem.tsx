import React from 'react';
import styled from 'styled-components';
import { ImagicI } from '../../typings';
import { LazyImage } from '../Layout';
import FeedImage from './FeedImage';

const Item = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;
`;

interface Props {
  item: ImagicI;
  onSelect?: (id: number) => void;
}

const FeedItem: React.FC<Props> = ({ item, onSelect }) => {
  return (
    <Item onClick={() => onSelect && onSelect(item.id)}>
      <LazyImage Image={FeedImage} src={item.photo} cover={item.cover} />
    </Item>
  );
};

export default FeedItem;
