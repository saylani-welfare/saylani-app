import {combineReducers} from 'redux';
import {isLoggingReducer, loginDataReducer, loginStatusReducer, loginErrorReducer} from './authReducer';
import {searchErrorReducer, currentFamilyReducer,isAddedFamilyReducer,isFamilyAddingReducer,isSearchingFamilyReducer,familyErrorReducer} from './familyReducer';

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
    isSearchingFamily: isSearchingFamilyReducer,
    familyError: familyErrorReducer,
    familySearchError: searchErrorReducer
});

export default rootReducer;