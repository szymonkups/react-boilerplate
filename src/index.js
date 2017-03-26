import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';

// Create store starting from root reducer.
const store = createStore( rootReducer );

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
	});
}
