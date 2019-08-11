import Api from './Api';
import Feed from './Feed';
import Publics from './Publics';

export interface StoresI {
  feed: Feed;
  publics: Publics;
  api: Api;
}

export const api = new Api(7045022);
export const feed = new Feed();
export const publics = new Publics();
