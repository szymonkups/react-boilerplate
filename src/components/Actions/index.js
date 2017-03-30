import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as valueActionCreators from '../../actions/value';

class Actions extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<h2>Actions</h2>
				<p>Current value is { this.props.value }.</p>
				<h4>Async actions</h4>
				<button onClick={ this.props.increment }>Increment</button>&nbsp;
				<button onClick={ this.props.decrement }>Decrement</button>
			</div>
		);
	}
}

const mapStateToProps = ( state ) => ( {
	value: state.value
} );

const mapDispatchToProps = ( dispatch ) => ( {
	increment: bindActionCreators( valueActionCreators.incrementAsync, dispatch ),
	decrement: bindActionCreators( valueActionCreators.decrementAsync, dispatch )
} );


export default connect( mapStateToProps, mapDispatchToProps )( Actions );
