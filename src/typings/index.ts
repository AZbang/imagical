export type ColorT = 'white' | 'red' | 'green' | 'yellow';

export interface PublicI {
  name: string;
  cover: string;
  link: string;
}

export interface ImagicI {
  photo: string;
  likes: number;
  color: ColorT;
  public: PublicI;
}
