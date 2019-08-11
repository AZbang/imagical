import React from 'react';
import styled from 'styled-components';
import Image from '../Layout/Image';
import Photo from '../../stores/Photo';

const Item = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;
`;

interface Props {
  item: Photo;
  onSelect?: (id: number) => void;
}

const FeedItem: React.FC<Props> = ({ item, onSelect }) => {
  return (
    <Item onClick={() => onSelect && onSelect(item.id)}>
      <Image src={item.src} preview={item.preview} />
    </Item>
  );
};

export default FeedItem;
