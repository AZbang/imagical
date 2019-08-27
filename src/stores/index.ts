import Feed from './Feed';
import Client from './Client';

export interface StoresI {
  feed: Feed;
  client: Client;
}

export const feed = new Feed();
export const client = new Client();
