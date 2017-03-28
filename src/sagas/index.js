import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects'
import { increment as incrementValue } from '../actions/value';

function* incrementAsync() {
	yield delay( 1000 );
	yield put( incrementValue() )
}

function* watchIncrementAsync() {
	yield takeEvery( 'INCREMENT_ASYNC', incrementAsync )
}

export default function*() {
	yield [
		watchIncrementAsync()
	];
}
