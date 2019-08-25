import FastAverageColor from 'fast-average-color';
import { IVKPhoto } from '../typings';
import User from './User';

class Photo {
  private origin: IVKPhoto;
  public provider: User;
  public id: number;
  public src: string;
  public likes: number;
  public width: number;
  public height: number;
  public description: string;
  public preview: string;
  public date: number;
  public color?: string;
  public scale: number;
  public w: number;
  public h: number;

  constructor(provider: User, photo: IVKPhoto) {
    this.origin = photo;
    this.provider = provider;
    this.id = photo.id;
    this.description = photo.text;
    this.likes = photo.likes.count;
    this.date = photo.date;

    const large = this.getSize('x');
    this.src = large.url;
    this.width = large.width;
    this.height = large.height;

    this.scale = window.innerWidth / 2 / this.width;
    this.w = this.width * this.scale - 30;
    this.h = this.height * this.scale;

    this.preview = this.getSize('s').url;
  }

  public getSize(size: 's' | 'x') {
    return this.origin.sizes.find(({ type }) => type === size)!;
  }

  public async preprocess(): Promise<string> {
    if (this.color) return this.color;

    const fac = new FastAverageColor();
    const { url } = this.getSize('s');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = url;

    const { hex } = await fac.getColorAsync(img);
    return (this.color = hex);
  }
}

export default Photo;
