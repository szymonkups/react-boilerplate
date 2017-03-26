import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import Home from '../Home';
import NotFound from '../NotFound';
import About from '../About';
import './style.scss';

export default () => (
	<Router>
		<div>
			<Header />
			<div className="content">
				<Navigation />
				<Switch>
					<Route exact path="/" component={ Home } />
					<Route exact path="/about" component={ About } />
					<Route render={ NotFound } />
				</Switch>
			</div>
		</div>
	</Router>
);
