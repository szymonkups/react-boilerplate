export default function value( state, action ) {
	if ( state === undefined ) {
		return 0;
	}

	if ( action.type === 'INCREMENT_VALUE' ) {
		return ++state;
	}

	return state;
}
