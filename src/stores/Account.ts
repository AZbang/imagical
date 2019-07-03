import { observable, action } from 'mobx';
import connect from '@vkontakte/vkui-connect-promise';

interface IUser {
  firstName?: string,
}

class Account {
  public access: string = '';

  @observable
  public user: IUser = {};

  @observable
  public ready: boolean = false;

  @action
  public async init() {
    this.access = await connect.send('VKWebAppAuth');
    this.user = await connect.send('VKWebAppGetUserInfo');
  }

  public async api(method: string): Promise<any> {
    const { response } = await connect.send('VKWebApi', { method });
    return response;
  }
}

export default new Account();
