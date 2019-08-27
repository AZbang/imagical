export type ColorT = 'white' | 'red' | 'green' | 'yellow';

export interface PublicI {
  name: string;
  cover: string;
  link: string;
}

export interface IVKPublic {
  id: number;
  name: string;
  screen_name: string;
  photo_200: string;
  photo_100: string;
  photo_50: string;
}

export interface IVKUser {
  id: number;
  first_name: string;
  last_name: string;
  is_closed?: boolean;
  can_access_closed?: boolean;
  nickname?: string;
  photo_100: string;
}

export interface IVKPhoto {
  id: number;
  text: string;
  sizes: {
    type: 's' | 'x' | 'z';
    width: number;
    height: number;
    url: string;
  }[];
  date: number;
  likes: {
    user_likes: number;
    count: number;
  };
}

export interface IPhotoModel {
  id: number;
  src: string;
  date: number;
  provider: number;
  originalWidth: number;
  originalHeight: number;
  width: number;
  height: number;
  saved: boolean;
}

export interface IUserModel {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  offset: number;
}
