import { observable, action } from 'mobx';
import Public from './Public';
import { api } from '.';
import { print } from '../utils';

class Publics {
  @observable store: Public[] = [];
  @observable loading: boolean = false;

  @action
  public async load(ids: number[]): Promise<void> {
    this.loading = true;
    const data = await api.getPublics(ids);
    const publics = data.map(v => new Public(v));
    this.store = this.store.concat(publics);
    this.loading = false;
  }

  public get(id: number): Public | null {
    return this.store.find(pub => pub.id === id) || null;
  }

  public getRandom(): Public | null {
    return this.store[Math.floor(Math.random() * this.store.length)];
  }
}

export default Publics;
