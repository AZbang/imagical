import { IVKUser } from '../typings';
import Photo from './Photo';
import { api } from '../stores';

class User {
  private origin: IVKUser;
  public id: number;
  public cover: string;
  public first_name: string;
  public last_name: string;
  public offset: number = 0;
  public photos: Photo[] = [];

  constructor(user: IVKUser) {
    this.origin = user;
    this.id = user.id;
    this.cover = user.photo_100;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
  }

  public async checkSavedPhotos(): Promise<boolean> {
    try {
      await this.getPhotos(0);
      return true;
    } catch (e) {
      return false;
    }
  }

  public async getPhotos(count: number): Promise<Photo[]> {
    const data = await api.getSavedPhotos(this.id, count, this.offset);
    const photos = data.map(v => new Photo(this, v));
    this.photos = this.photos.concat(photos);
    this.offset += count;
    return photos;
  }
}

export default User;
