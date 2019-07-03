import { observable, action } from 'mobx';
import account from './Account';

interface IFeed {

}

class Feed {
  @observable
  data: IFeed[] = [];

  @observable
  loading: boolean = false;

  @action
  public async fetchData() {
    this.loading = true;
    this.data = await account.api('wall.get');
    this.loading = false;
  }
}

export default new Feed();
