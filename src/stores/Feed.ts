import { observable, action } from 'mobx';
import { ImagicI, VKPhotoI } from '../typings';
import { account } from '.';

class Feed {
  @observable
  data: ImagicI[] = [];

  @observable
  loading: boolean = false;

  offset = 0;
  count = 99;

  @action
  public async fetch(): Promise<void> {
    this.loading = true;
    const data = await account.api('photos.get', {
      owner_id: -95775916,
      album_id: 'wall',
      count: this.count,
      offset: this.offset,
      rev: 0,
    });
    const newPhotos = this.parseImages(data).sort(() => Math.random() - 0.5);
    this.data = this.data.concat(newPhotos);
    this.loading = false;
    this.offset += this.count;
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

  public parseImages(response: VKPhotoI[]): ImagicI[] {
    return response.map(photo => {
      const { url, width, height } = this.getPhotoSize(photo, 'x');
      return {
        photo: url,
        text: photo.text,
        width,
        height,
      };
    });
  }
}

export default Feed;
