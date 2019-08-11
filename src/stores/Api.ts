import connect from '@vkontakte/vkui-connect-promise';
import { VKPhotoI, VKPublicI } from '../typings';

class Api {
  private accessToken: string = '';
  public readonly version = '5.77';
  public appId?: number;
  public scope?: string;

  constructor(appId: number) {
    this.appId = appId;
    connect.send('VKWebAppInit', {});
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

  public async getPhotos(
    groupId: number,
    count: number = 99,
    offset: number = 0,
  ): Promise<VKPhotoI[]> {
    const { items } = await this.api('photos.get', {
      owner_id: -groupId,
      offset: offset,
      album_id: 'wall',
      extended: true,
      count: count,
      rev: 1,
    });
    return items;
  }

  public async getPublics(ids: number[]): Promise<VKPublicI[]> {
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

export default Api;
