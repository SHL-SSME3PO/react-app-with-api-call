import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import postReducer from './reducers';

const intialState = {};
const middleware = [thunk];
const store = createStore (
	postReducer,
	intialState,
	applyMiddleware(...middleware)
)

export default store