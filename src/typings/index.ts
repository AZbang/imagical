export type ColorT = 'white' | 'red' | 'green' | 'yellow';

export interface PublicI {
  name: string;
  cover: string;
  link: string;
}

export interface VKPhotoSizeI {
  type: 's' | 'x';
  width: number;
  height: number;
  url: string;
}

export interface VKPublicI {
  id: number;
  name: string;
  screen_name: string;
  photo_200: string;
  photo_100: string;
  photo_50: string;
}

export interface VKPhotoI {
  id: number;
  text: string;
  sizes: VKPhotoSizeI[];
  date: number;
  likes: {
    user_likes: number;
    count: number;
  };
}
