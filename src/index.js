import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
	BrowserRouter, Route
} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

const Top = () => {
	return  (
		<BrowserRouter>
			<Route path="/" component={App} />
		</BrowserRouter>
	)
}

ReactDOM.render(<Top />, document.getElementById('root'));
registerServiceWorker();
