import { takeEvery } from 'redux-saga/effects'
import { incrementAsync, decrementAsync } from './value';


export default function*() {
	yield [
		takeEvery( 'DECREMENT_ASYNC', decrementAsync ),
		takeEvery( 'INCREMENT_ASYNC', incrementAsync ),
	];
}
