import {createStore, combineReducers, applyMiddleware} from 'redux';
import data from './demo/reducer'
import todes from './todo/reducer'
import common from './common/reducer'
import thunk from 'redux-thunk'

let store = createStore(
  combineReducers({data, todes, common}),
  applyMiddleware(thunk)
);

export default store;