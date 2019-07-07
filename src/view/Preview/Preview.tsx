import React from 'react';
import { ImagicI } from '../../typings';
import { Badge } from '../Layout';
import PreviewWrap from './PreviewWrap';
import PreviewImage from './PreviewImage';

interface PreviewProps {
  photo: ImagicI;
  onClose?: () => void;
}

const Preview: React.FC<PreviewProps> = ({ photo, onClose }) => {
  return (
    <PreviewWrap>
      <PreviewImage src={photo.photo} cover={photo.cover} />
      <Badge onClick={onClose} show center position="bottom">
        Back
      </Badge>
    </PreviewWrap>
  );
};

export default Preview;
