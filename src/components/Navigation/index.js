import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export default () => (
	<nav className="navigation">
		<NavLink exact to="/">Home</NavLink>
		<NavLink to="/about">About</NavLink>
	</nav>
);
