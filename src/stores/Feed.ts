import { observable, action } from 'mobx';
import groups from '../static/groups.json';
import { ImagicI, VKPhotoI } from '../typings';
import { account } from '.';

class Feed {
  count = 99;
  offsets = new Map(groups.map(group => [group.id, 0]));

  @observable
  data: ImagicI[] = [];

  @observable
  active: ImagicI | null = null;

  @observable
  loading: boolean = false;

  public setLoading(v: boolean) {
    this.loading = v;
  }

  public addPhotos(photos: ImagicI[]) {
    const shuffle = photos.sort(() => Math.random() - 0.5);
    this.data = this.data.concat(shuffle);
  }

  public select(id: number) {
    this.active = this.data.find(item => item.id === id) || null;
  }

  public close() {
    this.active = null;
  }

  @action
  public async fetch(): Promise<void> {
    this.setLoading(true);

    const { id } = groups[Math.floor(Math.random() * groups.length)];
    const offset = this.offsets.get(id) || 0;
    const data = await account.api('photos.get', {
      owner_id: -id,
      album_id: 'wall',
      count: this.count,
      offset: offset,
      rev: 0,
    });

    this.offsets.set(id, offset + this.count);
    this.addPhotos(this.parsePhotos(data));
    this.setLoading(false);
  }

  public getPhotoSize(photo: VKPhotoI, size: 's' | 'x') {
    return photo.sizes.find(({ type }) => type === size);
  }

  public parsePhotos(response: VKPhotoI[]) {
    return response.map(photo => {
      const original = this.getPhotoSize(photo, 'x');
      const cover = this.getPhotoSize(photo, 's');

      return {
        id: photo.id,
        text: photo.text,
        likes: photo.likes,
        cover: cover && cover.url,
        photo: original && original.url,
        width: original && original.width,
        height: original && original.height,
      };
    });
  }
}

export default Feed;
