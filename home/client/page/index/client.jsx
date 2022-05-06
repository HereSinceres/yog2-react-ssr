import defaultReact, * as React from 'react';
import defaultReactDom, * as ReactDOM from 'react-dom/client';

import {App} from './App';

console.log(defaultReact === React);
console.log(defaultReactDom === ReactDOM);
module.exports = () => {
    ReactDOM.hydrateRoot(document.getElementById('root'), <App />);
};
