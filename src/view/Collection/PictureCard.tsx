import styled from 'styled-components';
import React, { FC } from 'react';
import { Picture } from '../kit';

interface Props {
  onLike?: () => void;
  onSave?: () => void;
  onSelect?: () => void;
  picture: string;
  avatar: string;
  width: number;
  height: number;
  liked: boolean;
}

const Wrap = styled.div`
  background: #607d8b3d;
  overflow: hidden;
  border-radius: 20px;
  width: 50vw;
  position: relative;
`;

const Avatar = styled.img`
  position: absolute;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  bottom: 14px;
  left: 10px;
`;

const Button = styled.button<{ active: boolean }>`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  border: none;
  bottom: 14px;
  left: 60px;
  font-size: 1.3em;
  color: red;
  filter: ${({ active }) => (active ? 'null' : `sepia(1)`)};
`;

const PictureCard: FC<Props> = ({
  width,
  height,
  onLike,
  onSelect,
  picture,
  avatar,
  liked,
}) => (
  <Wrap style={{ width: width + 'px', height: height + 'px' }}>
    <Picture onClick={onSelect} src={picture}></Picture>
    <Avatar src={avatar} />
    <Button onClick={onLike} active={liked}>
      ❤️
    </Button>
  </Wrap>
);

export default PictureCard;
