import { observable, action } from 'mobx';
import { getStorage, setStorage } from '../utils';
import { IVKPhoto, IPhotoModel, IUserModel } from '../typings';
import api from '../utils/api';

class Feed {
  public readonly FETCH_COUNT = 9;
  public saved: number[] = getStorage('saved') || [];

  @observable
  public photos: IPhotoModel[] = [];

  @observable
  public loading: boolean = false;

  @action
  public addPhoto(userId: number, photo: IVKPhoto) {
    const image = photo.sizes.find(size => size.type === 'x')!;
    const src = image.url;
    const originalWidth = image.width;
    const originalHeight = image.height;

    const scale = window.innerWidth / 2 / originalWidth;
    const width = originalWidth * scale - 30;
    const height = originalHeight * scale;

    this.photos.push({
      src,
      width,
      height,
      id: photo.id,
      date: photo.date,
      provider: userId,
      originalWidth,
      originalHeight,
      saved: !!this.saved.find(v => v === photo.id),
    });
  }

  @action
  public async fetchFromUsers(users: IUserModel[]) {
    this.loading = true;
    for (const user of users) {
      const data = await api.getSavedPhotos(
        user.id,
        this.FETCH_COUNT,
        user.offset,
      );
      data.forEach(photo => this.addPhoto(user.id, photo));
      user.offset += this.FETCH_COUNT;
    }
    this.loading = false;
  }

  public async openPhoto(id: number) {
    const photo = this.getPhoto(id);
    if (photo) await api.openPhotoViewer([photo.src]);
  }

  @action
  public async savePhoto(id: number) {
    const photo = this.getPhoto(id);
    if (!photo || photo.saved) return;
    await api.savePhoto(photo.provider, photo.id);

    photo.saved = true;
    this.saved.push(photo.id);
    setStorage('saved', this.saved);
  }

  public getPhoto(id: number): IPhotoModel | null {
    return this.photos.find(photo => photo.id === id) || null;
  }
}

export default Feed;
