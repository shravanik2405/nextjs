import { createStore } from 'redux';
import sessionReducer from './reducers/session';

export default createStore(sessionReducer);
