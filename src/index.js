/* globals module */
import 'babel-polyfill';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './components/App';
import rootReducer from './reducers';
import rootSaga from './sagas';

// Create saga middleware.
const sagaMiddleware = createSagaMiddleware();

// Create store starting from root reducer.
const store = createStore( rootReducer, applyMiddleware( sagaMiddleware ) );

// Run the saga.
sagaMiddleware.run( rootSaga );

// Setup hot replacement.
const render = ( Component ) => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={ store }>
				<Component/>
			</Provider>
		</AppContainer>,
		document.getElementById( 'app' )
	);
};

render( App );

// Hot Module Replacement API
if ( module.hot ) {
	module.hot.accept( './components/App', () => {
		render( App )
	} );
}
