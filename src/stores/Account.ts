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
    const { data } = await connect.send('VKWebAppGetAuthToken', {
      app_id: 7045022,
      scope: '',
    });
    this.access = data.access_token;
    console.log(this);
  }

  public async api(method: string, params: {}): Promise<[]> {
    const { data } = await connect.send('VKWebAppCallAPIMethod', {
      method,
      params: {
        ...params,
        v: '5.77',
        access_token: this.access,
      },
    });
    return data.response.items;
  }
}

export default Account;
