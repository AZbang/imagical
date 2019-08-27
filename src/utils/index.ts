import { ComponentType } from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';

const print = (...args: any[]) =>
  console.log(
    ...args.map(arg =>
      Array.isArray(arg) ? arg.map(v => toJS(v)) : toJS(arg),
    ),
  );

const watch = (component: ComponentType<any>, ...stores: string[]) =>
  inject(...stores)(observer(component));

const getStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data != null ? JSON.parse(data) : null;
};

const setStorage = (key: string, data: any) =>
  localStorage.setItem(key, JSON.stringify(data));

export { print, watch, getStorage, setStorage };
