import { observable, action } from 'mobx';
import groups from '../static/groups.json';
import { ImagicI, VKPhotoI } from '../typings';
import { account } from '.';

class Feed {
  offsets = new Map(groups.map(group => [group.id, 0]));

  @observable
  data: ImagicI[] = [];

  @observable
  loading: boolean = false;

  offset = 0;
  count = 99;

  public setLoading(v: boolean) {
    this.loading = v;
  }

  public addPhotos(photos: ImagicI[]) {
    const shuffle = photos.sort(() => Math.random() - 0.5);
    this.data = this.data.concat(shuffle);
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

  public getPhotoSize(photo: VKPhotoI, size: string) {
    return (
      photo.sizes.find(({ type }) => type === size) || {
        url: null,
        width: null,
        height: null,
      }
    );
  }

  public parsePhotos(response: VKPhotoI[]): ImagicI[] {
    return response.map(photo => {
      const { url, width, height } = this.getPhotoSize(photo, 'x');
      const { url: cover } = this.getPhotoSize(photo, 's');
      return {
        text: photo.text,
        photo: url,
        cover,
        width,
        height,
      };
    });
  }
}

export default Feed;
