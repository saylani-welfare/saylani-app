import {LOGIN_STATUS, IS_LOGGING_IN, LOGIN_DATA, LOGIN_ERROR} from '../actions/auth';

export function isLoggingReducer(state = false, action){
    switch(action.type){
        case IS_LOGGING_IN:
            return action.isLoggingIn;
        default:
            return state;
    }
}
export function loginDataReducer(state = null, action){
    switch(action.type){
        case LOGIN_DATA:
            return action.loginData;
        default:
            return state;
    }
}
export function loginStatusReducer(state = false, action){
    switch(action.type){
        case LOGIN_STATUS:
            return action.isLoggedIn;
        default:
            return state;
    }
} 
export function loginErrorReducer(state = null, action){
    switch(action.type){
        case LOGIN_ERROR:
            return action.error;
        default:
            return state;
    }
}