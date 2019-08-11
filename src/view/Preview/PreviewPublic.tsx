import React from 'react';
import styled from 'styled-components';

const Badge = styled.div`
  display: flex;
  width: calc(90% - 20px);
  margin: 20px auto;
  border: none;
  border-radius: 20px;
  background: #fff;
  font-weight: bold;
  align-items: center;
  padding: 10px;
`;

const BadgeAvatar = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const BadgeContent = styled.div`
  text-align: left;
  margin-left: 10px;
`;

const BadgeTitle = styled.h1`
  margin: 0;
  font-size: 1em;
  font-weight: normal;
`;

const BadgeText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 1em;
`;

interface PreviewPublicI {
  cover: string;
  name: string;
  text?: string;
  url?: string;
}

const PreviewPublic: React.FC<PreviewPublicI> = ({ cover, name }) => (
  <Badge>
    <BadgeAvatar src={cover} alt="cover" />
    <BadgeContent>
      <BadgeTitle>{name}</BadgeTitle>
    </BadgeContent>
  </Badge>
);

export default PreviewPublic;
