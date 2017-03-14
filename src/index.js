import React from 'react';
import ReactDOM from 'react-dom';

import Utils from './utils';
import './index.scss';

const u = new Utils();

ReactDOM.render(
	<h1>{ u.getName() }</h1>,
	document.getElementById( 'app' )
);
