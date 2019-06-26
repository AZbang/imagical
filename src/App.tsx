import React from 'react';
import { Card, Layout } from './ui';

const App: React.FC = () => {
  return (
    <Layout>
      <Card>
        <h1>React</h1>
      </Card>
      <Card>
        <h1>Typescript</h1>
      </Card>
      <Card>
        <h1>VK Apps</h1>
      </Card>
    </Layout>
  );
}

export default App;
