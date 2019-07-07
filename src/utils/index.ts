import { ComponentType } from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';

const print = (...args: any[]) => console.log(...args.map(arg => toJS(arg)));

const watch = (component: ComponentType<any>, ...stores: string[]) =>
  inject(...stores)(observer(component));

export { print, watch };
