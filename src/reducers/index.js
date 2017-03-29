import {combineReducers} from 'redux';
import {isLoggingReducer, loginDataReducer, loginStatusReducer, loginErrorReducer} from './authReducer';

const rootReducer = combineReducers({
    isLogging: isLoggingReducer,
    isLoggedIn: loginStatusReducer,
    loginData: loginDataReducer,
    loginError: loginErrorReducer
});

export default rootReducer;