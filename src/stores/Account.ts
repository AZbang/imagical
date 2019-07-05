import { observable, action } from 'mobx';
import connect from '@vkontakte/vkui-connect-promise';

interface UserI {
  firstName?: string;
}

class Account {
  public access: string = '';

  @observable
  public user: UserI = {};

  @observable
  public ready: boolean = false;

  @action
  public async init(): Promise<void> {
    this.access = await connect.send('VKWebAppAuth');
    this.user = await connect.send('VKWebAppGetUserInfo');
  }

  public async api(method: string): Promise<[]> {
    const { response } = await connect.send('VKWebApi', { method });
    return response;
  }
}

export default new Account();
