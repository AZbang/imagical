import styled, { css } from 'styled-components';

interface ImageProps {
  blur?: boolean;
  fit?: boolean;
  src?: string;
}

const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  ${({ fit }) => fit && `object-fit: cover`};
  ${({ blur }) =>
    blur &&
    css`
      filter: blur(10px);
      width: 130%;
      height: 130%;
      left: -15%;
      top: -15%;
    `};
`;

Image.defaultProps = {
  src: '',
  blur: false,
  fit: false,
};

export default Image;
