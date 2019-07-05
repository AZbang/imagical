import { observable, action } from 'mobx';
import account from './Account';
import { ImagicI } from '../typings';

class Feed {
  @observable
  data: ImagicI[] = [];

  @observable
  loading: boolean = false;

  @action
  public async fetchData(): Promise<void> {
    this.loading = true;
    this.data = await account.api('wall.get');
    this.loading = false;
  }
}

export default new Feed();
