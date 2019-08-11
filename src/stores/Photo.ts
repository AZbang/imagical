import FastAverageColor from 'fast-average-color';
import { VKPhotoI } from '../typings';

class Photo {
  private origin: VKPhotoI;
  public publicId: number;
  public id: number;
  public src: string;
  public likes: number;
  public width: number;
  public height: number;
  public description: string;
  public preview: string;
  public color?: string;

  constructor(publicId: number, photo: VKPhotoI) {
    this.origin = photo;
    this.publicId = publicId;

    this.id = photo.id;
    this.description = photo.text;
    this.likes = photo.likes.count;

    const large = this.getSize('x');
    this.src = large.url;
    this.width = large.width;
    this.height = large.height;

    this.preview = this.getSize('s').url;
    this.preprocess();
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
