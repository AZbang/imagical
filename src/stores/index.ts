import Api from './Api';
import Feed from './Feed';
import Client from './Client';

export interface StoresI {
  feed: Feed;
  client: Client;
  api: Api;
}

export const api = new Api(7045022);
export const feed = new Feed();
export const client = new Client();
