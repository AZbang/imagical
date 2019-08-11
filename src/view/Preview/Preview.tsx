import React from 'react';
import styled from 'styled-components';
import { Badge } from '../Layout';
import PreviewImage from './PreviewImage';
import PreviewPublic from './PreviewPublic';
import PreviewControl from './PreviewControl';
import { bounceIn } from './animation';
import Photo from '../../stores/Photo';
import Public from '../../stores/Public';

interface PreviewProps {
  photo: Photo;
  group: Public;
  onClose?: () => void;
}

const PreviewWrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
`;

const PreviewContent = styled.div`
  text-align: center;
  width: 50vw;
  animation: ${bounceIn} 0.5s;
`;

const Preview: React.FC<PreviewProps> = ({ photo, group, onClose }) => {
  return (
    <PreviewWrap>
      <PreviewContent>
        <PreviewPublic name={group.name} cover={group.cover} />
        <PreviewImage src={photo.src} preview={photo.preview} />
        <PreviewControl likes={photo.likes} />
      </PreviewContent>
      <Badge onClick={onClose} show center position="bottom">
        Back
      </Badge>
    </PreviewWrap>
  );
};

export default Preview;
