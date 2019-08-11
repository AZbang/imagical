import { observable, action, computed } from 'mobx';
import Photo from './Photo';
import { publics } from '.';
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
  public async fetch(): Promise<void> {
    this.loading = true;
    const group = await publics.getRandom();
    if (group) {
      const photos = await group.getFeed(this.fetchCount);
      this.toFeed(photos);
    }
    print(this.store);
    this.loading = false;
  }
}

export default Feed;
