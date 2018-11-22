import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './components/RootReducer'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = createStore(RootReducer);

ReactDOM.render(( 
	<div>
		<BrowserRouter>
			<Provider store={store} >
		 		<App /> 
		 	</Provider>
		</BrowserRouter>
	</div>
	)
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
