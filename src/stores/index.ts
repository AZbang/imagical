import Account from './Account';
import Feed from './Feed';

export interface StoresI {
  feed: Feed;
  account: Account;
}

export const feed = new Feed();
export const account = new Account();
