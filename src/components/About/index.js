import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementAsync as incrementAsyncActionCreator } from '../../actions/value';

class About extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<h2>About</h2>
				<p>Current value is { this.props.value }.</p>
				<button onClick={ this.props.increment }>Increment</button>
			</div>
		);
	}
}

const mapStateToProps = ( state ) => ( {
	value: state.value
} );

const mapDispatchToProps = ( dispatch ) => ( {
	increment: bindActionCreators( incrementAsyncActionCreator, dispatch )
} );


export default connect( mapStateToProps, mapDispatchToProps )( About );
