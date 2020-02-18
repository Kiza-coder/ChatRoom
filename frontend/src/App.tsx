import React, { Fragment } from 'react';
/**@jsx jsx */
import { jsx } from '@emotion/core';
import { Home } from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header';

const App: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Home />
    </Fragment>
  );
};

export default App;
