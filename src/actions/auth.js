import firebase from 'firebase';
import {browserHistory} from 'react-router';

export const LOGIN_STATUS = "LOGIN_STATUS";
export const IS_LOGGING_IN = "IS_LOGGING_IN";
export const LOGIN_DATA  = "LOGIN_DATA";
export const LOGIN_ERROR = "LOGIN_ERROR";
// sets the isLoggedIn

export function isLoggedIn(isLoggedIn){
    return {
        type: LOGIN_STATUS,
        isLoggedIn
    }
}
// this will help us change the loader visibility in case we add it in the future
export function isLoggingIn(isLoggingIn){
    return {
        type: IS_LOGGING_IN,
        isLoggingIn
    }
}
export function loginError(error){
    return {
        type: LOGIN_ERROR,
        error
    }
}
export function loginData(loginData){
    return {
        type: LOGIN_DATA,
        loginData
    }
}
export function logout(){
    return (dispatch) => {
        firebase.auth().signOut().then(function () {
            console.log("sign out successful");
            browserHistory.replace('/');
        }).catch(function (error) {
            dispatch(loginError(error));
        });
    }
}
export function login(email, pw){
    return (dispatch) => {
        
        dispatch(isLoggingIn(true));
        firebase.auth().signInWithEmailAndPassword(email, pw)
        .then((result) => { 
            console.log("login successful");
            dispatch(isLoggingIn(false));
            browserHistory.push('/main');
        })
        .catch((error) => {
            dispatch(isLoggingIn(false));
            dispatch(loginError(error));
        });
    }
}