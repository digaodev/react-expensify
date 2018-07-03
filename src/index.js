import React from 'react';
import { render } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import './firebase/firebase';

import Root from './containers/Root';

import { fetchInitialData } from './containers/Root/index';

render(<p>Loading...</p>, document.getElementById('root'));

fetchInitialData().then(() => {
  render(<Root />, document.getElementById('root'));
});

registerServiceWorker();
