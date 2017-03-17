import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

export default () => (
	<Router>
		<div>
			<Route path="/" component={ Home } />
			<Route path="/about" component={ Home } />
		</div>
	</Router>
);
