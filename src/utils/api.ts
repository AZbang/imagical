import connect from '@vkontakte/vkui-connect-promise';
import { IVKPhoto, IVKUser, IVKPublic } from '../typings';

class Api {
  private accessToken: string = '';
  public readonly version = '5.77';
  public appId?: number;
  public scope?: string;

  constructor(appId: number) {
    this.appId = appId;
    connect.send('VKWebAppInit', {});
  }

  public async getClientData(): Promise<IVKUser> {
    const { data } = await connect.send('VKWebAppGetUserInfo', {});
    return data;
  }

  public async openPhotoViewer(images: string[]): Promise<void> {
    return await connect.send('VKWebAppShowImages', {
      images,
    });
  }

  public async requestPermissions(scope: string): Promise<boolean> {
    try {
      this.accessToken = await this.getAccessToken(scope);
      this.scope = scope;
      return true;
    } catch (e) {
      return false;
    }
  }

  private async getAccessToken(scope: string): Promise<string> {
    const { data } = await connect.send('VKWebAppGetAuthToken', {
      app_id: this.appId,
      scope: scope,
    });
    return data.access_token;
  }

  public async getSavedPhotos(
    id: number,
    count: number = 99,
    offset: number = 0,
  ): Promise<IVKPhoto[]> {
    const { items } = await this.api('photos.get', {
      owner_id: id,
      offset: offset,
      album_id: 'saved',
      extended: true,
      count: count,
      rev: 1,
    });
    return items;
  }

  public async savePhoto(owner: number, photo: number): Promise<void> {
    return await this.api('photos.copy', {
      owner_id: owner,
      photo_id: photo,
    });
  }

  public async removePhoto(photo: number): Promise<void> {
    return await this.api('photos.delete', {
      photo_id: photo,
    });
  }

  public async getFriends(id: number): Promise<IVKUser[]> {
    const { items } = await this.api('friends.get', {
      user_id: id,
      fields: 'photo_100, nickname',
      order: 'random',
    });
    return items;
  }

  public async getUsers(ids: number[]): Promise<IVKUser[]> {
    const data = await this.api('users.get', {
      user_ids: ids,
      fields: 'photo_100, nickname',
    });
    return data;
  }

  public async getPublics(ids: number[]): Promise<IVKPublic[]> {
    const publics = await this.api('groups.getById', {
      group_ids: ids.join(','),
    });
    return publics;
  }

  public async api(method: string, params: {}): Promise<any> {
    if (!this.accessToken) throw Error('VK Apps: Permissions not allowed');
    const { data } = await connect.send('VKWebAppCallAPIMethod', {
      method,
      params: {
        ...params,
        access_token: this.accessToken,
        v: this.version,
      },
    });
    return data.response;
  }
}

export default new Api(7045022);
