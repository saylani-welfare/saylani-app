import {combineReducers} from 'redux';
import {isLoggingReducer, loginDataReducer, loginStatusReducer, loginErrorReducer} from './authReducer';
import {currentFamilyReducer,isAddedFamilyReducer,isFamilyAddingReducer,isSearchingFamilyReducer} from './familyReducer';

const rootReducer = combineReducers({
    // login info
    isLogging: isLoggingReducer,
    isLoggedIn: loginStatusReducer,
    loginData: loginDataReducer,
    loginError: loginErrorReducer,
    // family info
    currentFamily: currentFamilyReducer,
    isAddedFamily: isAddedFamilyReducer,
    isFamilyAdding: isFamilyAddingReducer,
    isSearchingFamily: isSearchingFamilyReducer
});

export default rootReducer;