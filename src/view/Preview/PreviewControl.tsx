import React from 'react';
import styled from 'styled-components';

const Controls = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px auto;
`;

interface PillI {
  circle?: boolean;
}

const Pill = styled.button<PillI>`
  width: ${({ circle }) => (circle ? 40 : 82)}px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background: #fff;
  font-weight: bold;
  outline: none;
`;

interface PreviewControlI {
  likes?: number;
  photo?: string;
}

const PreviewControl: React.FC<PreviewControlI> = ({ likes }) => (
  <Controls>
    <Pill>{likes}</Pill>
    <Pill circle>+</Pill>
    <Pill>Save</Pill>
  </Controls>
);

export default PreviewControl;
