import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/app/App';

window.renderEpam = (containerId: string) => {
  const elem = document.getElementById(containerId);

  if (elem) {
    ReactDOM.render(<App/>, elem);
  }
};

window.unmountEpam = (containerId: string) => {
  const elem = document.getElementById(containerId);
  if (elem) {
    ReactDOM.unmountComponentAtNode(elem);
  }
};

if (!window.isRenderedByContainer) {

  window.renderEpam('root');

}
