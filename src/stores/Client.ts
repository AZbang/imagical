import { observable, action } from 'mobx';
import { IUserModel, IVKUser } from '../typings';
import { getStorage, setStorage } from '../utils';
import api from '../utils/api';

class Client {
  @observable
  public friends: IUserModel[] = [];

  @observable
  public user: IUserModel = {
    id: 0,
    avatar: '',
    firstName: '',
    lastName: '',
    offset: 0,
  };

  @observable
  public ready: boolean = false;

  @observable
  public loading: boolean = false;

  constructor() {
    this.initialize();
  }

  @action
  private async initialize() {
    this.loading = false;

    await api.requestPermissions('friends,photos');
    await this.loadUserData();
    await this.loadFriends();

    this.loading = false;
    this.ready = true;
  }

  @action
  public addFriend({ id, photo_100, first_name, last_name }: IVKUser) {
    this.friends.push({
      id,
      offset: 0,
      avatar: photo_100,
      firstName: first_name,
      lastName: last_name,
    });
  }

  @action
  public async loadUserData() {
    const { id, photo_100, first_name, last_name } = await api.getClientData();
    this.user = {
      id,
      offset: 0,
      avatar: photo_100,
      firstName: first_name,
      lastName: last_name,
    };
  }

  public async checkFriend(id: number) {
    try {
      await api.getSavedPhotos(id, 1, 0);
      return true;
    } catch (e) {
      return false;
    }
  }

  @action
  public async loadFriends() {
    const available = getStorage('friends');
    if (!available) return this.searchAvailableFriends();
    const data = await api.getUsers(available);
    data.forEach(user => this.addFriend(user));
  }

  @action
  public async searchAvailableFriends() {
    const friends = await api.getFriends(this.user.id);

    for (const user of friends) {
      const available = await this.checkFriend(user.id);
      if (available) this.addFriend(user);
    }

    setStorage('friends', this.friends.map(v => v.id));
  }

  public getRandomFriends(count: number): IUserModel[] {
    return new Array(count).fill(0).map(() => this.getRandomFriend());
  }

  public getFriend(id: number): IUserModel | null {
    return this.friends.find(user => user.id === id) || null;
  }

  public getRandomFriend(): IUserModel {
    return this.friends[Math.floor(Math.random() * this.friends.length)];
  }
}

export default Client;
