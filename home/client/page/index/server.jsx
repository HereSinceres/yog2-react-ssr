import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import {App} from './App';

module.exports = props => { 
    return ReactDOMServer.renderToString(<App />);
};
