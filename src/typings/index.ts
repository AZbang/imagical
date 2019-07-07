export type ColorT = 'white' | 'red' | 'green' | 'yellow';

export interface PublicI {
  name: string;
  cover: string;
  link: string;
}

export interface ImagicI {
  id: number;
  text: string;
  photo?: string;
  cover?: string;
  width?: number;
  height?: number;
}

export interface VKPhotoSizeI {
  type: 's' | 'x';
  width: number;
  height: number;
  url: string;
}

export interface VKPhotoI {
  id: number;
  text: string;
  sizes: VKPhotoSizeI[];
}
