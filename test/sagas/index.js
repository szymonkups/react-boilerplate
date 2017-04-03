import rootSage from '../../src/sagas/index';
import { incrementAsync, decrementAsync } from '../../src/sagas/value';
import { takeEvery } from 'redux-saga/effects';

describe( 'sagas', () => {
	describe( 'root saga', () => {
		it( 'should run increment and decrement in parallel', () => {
			const iterator = rootSage();

			expect( iterator.next().value ).toEqual( [
				takeEvery( 'DECREMENT_ASYNC', decrementAsync ),
				takeEvery( 'INCREMENT_ASYNC', incrementAsync ),
			] );
		} );
	} );
} );
