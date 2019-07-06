export type ColorT = 'white' | 'red' | 'green' | 'yellow';

export interface PublicI {
  name: string;
  cover: string;
  link: string;
}

export interface ImagicI {
  photo: string | null;
  cover: string | null;
  width: number | null;
  height: number | null;
  text: string | null;
}

export interface VKPhotoSizeI {
  type: 's' | 'x';
  width: number;
  height: number;
  url: string;
}

export interface VKPhotoI {
  text: string;
  sizes: VKPhotoSizeI[];
}
