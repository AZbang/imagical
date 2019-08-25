import { api } from '.';
import { observable, action } from 'mobx';
import { getStorage, setStorage, print } from '../utils';
import User from '../models/User';
import Photo from '../models/Photo';

class Client {
  @observable
  public friends: User[] = [];
  public saved: Photo[] = [];
  public id?: number;
  public avatar?: string;
  public name?: string;

  @observable
  public ready: boolean = false;
  @observable
  public liked: number[] = getStorage('liked') || [];

  constructor() {
    this.initialize();
  }

  @action
  private async initialize() {
    await api.requestPermissions('friends,photos');
    const { id, photo_100, first_name } = await api.getClientData();
    this.avatar = photo_100;
    this.name = first_name;
    this.id = id;

    const available = getStorage('friends');
    if (available) {
      const data = await api.getUsers(available);
      this.friends = data.map(v => new User(v));
    } else this.searchAvailableFriends();

    this.ready = true;
  }

  public async openPhoto(photo: Photo) {
    await api.openPhotoViewer([photo.src]);
  }

  @action // todo: refactoring
  public async toggleSave({ provider, id }: Photo) {
    const index = this.liked.indexOf(id);
    if (index === -1) {
      this.liked.push(id);
      await api.savePhoto(provider.id, id);
    }
    setStorage('liked', this.liked);
  }

  public async searchAvailableFriends() {
    const data = await api.getFriends(this.id || 0);
    const friends = data.map(v => new User(v));

    for (const user of friends) {
      const id = await user.checkSavedPhotos();
      if (id) this.friends.push(user);
    }
    setStorage('friends', this.friends.map(v => v.id));
  }

  public getRandomFriends(count: number): User[] {
    return new Array(count).fill(0).map(() => this.getRandomFriend());
  }

  public getFriend(id: number): User | null {
    return this.friends.find(pub => pub.id === id) || null;
  }

  public getRandomFriend(): User {
    const a = Math.floor(Math.random() * this.friends.length);
    print(this.friends, a);
    return this.friends[a];
  }
}

export default Client;
