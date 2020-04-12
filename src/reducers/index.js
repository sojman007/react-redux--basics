import counterReducer from './counter';
import authReducer from './auth';
//combine reducers here
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    count: counterReducer,
    isLogged: authReducer
});

export default allReducers;
