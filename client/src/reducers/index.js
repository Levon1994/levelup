import { combineReducers } from 'redux';
import  LoginReducer  from './login-reducer';

const rootReducer = combineReducers({
    logged: LoginReducer
});

export default rootReducer;