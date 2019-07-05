import React from 'react';
import { Feed, User, View } from '../components';

const Main: React.FC = () => (
  <View>
    <User />
    <Feed feed={new Array(100).fill(1)} />
  </View>
);

export default Main;
