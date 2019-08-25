import { observable, action, computed } from 'mobx';
import Photo from '../models/Photo';
import { client } from '.';
import { print } from '../utils';

class Feed {
  fetchCount = 18;
  @observable colorType = 'all';
  @observable store: Photo[] = [];
  @observable active: Photo | null = null;
  @observable loading: boolean = false;

  public toFeed(photos: Photo[]) {
    this.store = this.store.concat(photos);
  }

  public select(id: number) {
    this.active = this.store.find(item => item.id === id) || null;
  }

  public close() {
    this.active = null;
  }

  @computed
  public get filtered() {
    if (this.colorType === 'all') return this.store;
    return this.store.filter(item => item.color === this.colorType);
  }

  @action
  public async fetchPhotos() {
    if (this.loading) return;
    this.loading = true;
    try {
      let photos: Photo[] = [];
      const users = client.getRandomFriends(5);
      for (const user of users) {
        const data = await user.getPhotos(10);
        photos = photos.concat(data);
      }
      this.toFeed(photos.sort(() => Math.random() - 0.5));
      this.loading = false;
    } catch (e) {
      this.loading = false;
    }
  }
}

export default Feed;
