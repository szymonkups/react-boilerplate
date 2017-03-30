import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects'
import { increment, decrement} from '../actions/value';

function* incrementAsync() {
	yield delay( 1000 );
	yield put( increment() )
}

function* decrementAsync() {
	yield delay( 1000 );
	yield put( decrement() )
}

function* watchIncrementAsync() {
	yield takeEvery( 'INCREMENT_ASYNC', incrementAsync )
}

function* watchDecrementAsync() {
	yield takeEvery( 'DECREMENT_ASYNC', decrementAsync )
}

export default function*() {
	yield [
		watchIncrementAsync(),
		watchDecrementAsync(),
	];
}
