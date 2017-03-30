export function increment() {
	return {
		type: 'INCREMENT_VALUE'
	}
}

export function decrement() {
	return {
		type: 'DECREMENT_VALUE'
	}
}

export function incrementAsync() {
	return {
		type: 'INCREMENT_ASYNC'
	}
}

export function decrementAsync() {
	return {
		type: 'DECREMENT_ASYNC'
	}
}
