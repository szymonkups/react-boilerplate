import { incrementAsync, decrementAsync} from '../../src/sagas/value';
import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { increment, decrement } from '../../src/actions/value';

describe( 'sagas', () => {
	describe( 'value', () => {
		describe( 'incrementAsync', () => {
			let iterator;

			beforeEach( () => {
				iterator = incrementAsync();
			} );

			it( 'should delay for 1s', () => {
				const value = iterator.next().value;

				expect( value ).toEqual( call( delay, 1000 ) );
			} );

			it( 'should call increment action', () => {
				iterator.next().value;
				const value = iterator.next().value;

				expect( value ).toEqual( put( increment() ) );
			} );
		} );

		describe( 'decrementAsync', () => {
			let iterator;

			beforeEach( () => {
				iterator = decrementAsync();
			} );

			it( 'should delay for 1s', () => {
				const value = iterator.next().value;

				expect( value ).toEqual( call( delay, 1000 ) );
			} );

			it( 'should call decrement action', () => {
				iterator.next().value;
				const value = iterator.next().value;

				expect( value ).toEqual( put( decrement() ) );
			} );
		} );
	} );
} );
