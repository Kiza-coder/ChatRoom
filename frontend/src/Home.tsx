import React from 'react';
/**@jsx jsx */
import { jsx } from '@emotion/core';
import Page from './Page';
import Chat from './Chat';

export const Home: React.FC = () => {
  return (
    <Page title="Chat">
      <Chat />
    </Page>
  );
};

export default Home;
