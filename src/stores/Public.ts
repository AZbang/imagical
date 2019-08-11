import { VKPublicI } from '../typings';
import Photo from './Photo';
import { api } from '.';

class Public {
  private origin: VKPublicI;
  public id: number;
  public name: string;
  public cover: string;

  public photos: Photo[] = [];
  public offset: number = 0;

  constructor(group: VKPublicI) {
    this.origin = group;
    this.id = group.id;
    this.name = group.name;
    this.cover = group.photo_200;
  }

  public async getFeed(count: number): Promise<Photo[]> {
    const data = await api.getPhotos(this.id, count, this.offset);
    const photos = data.map(v => new Photo(this.id, v));
    this.photos = this.photos.concat(photos);
    this.offset += count;
    return photos;
  }
}

export default Public;
