import React from 'react';

class About extends React.Component {
	constructor() {
		super();

		this.state = { counter: 0 };
		this.onClick = this.onClick.bind( this );
	}

	onClick() {
		this.setState( ( prev, props ) => ( {
			counter: prev.counter + 1
		} ) );
	}

	render() {
		return (
			<div>
				<h2>About</h2>
				<p>Current state is { this.state.counter }</p>
				<button onClick={ this.onClick }>Increment</button>
			</div>
		);
	}
}

export { About };
