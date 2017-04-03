import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects'
import { increment, decrement} from '../actions/value';

export function* incrementAsync() {
	yield call( delay, 1000 );
	yield put( increment() )
}

export function* decrementAsync() {
	yield call( delay, 1000 );
	yield put( decrement() )
}
