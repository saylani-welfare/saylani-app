import {combineReducers} from 'redux';
import {
    isLoggingReducer,
    loginDataReducer,
    loginStatusReducer,
    loginErrorReducer
} from './authReducer';
import {
    searchErrorReducer as familySearchErrorReducer,
    currentFamilyReducer,
    isAddedFamilyReducer,
    isFamilyAddingReducer,
    isSearchingFamilyReducer,
    familyErrorReducer,
    currentChildrenListReducer
} from './familyReducer';
import {
    searchErrorReducer as childSearchErrorReducer,
    currentChildReducer,
    isAddedChildReducer,
    isChildAddingReducer,
    isSearchingChildReducer,
    childErrorReducer
} from './childReducer';

const rootReducer = combineReducers({
    // login info
    isLogging: isLoggingReducer,
    isLoggedIn: loginStatusReducer,
    loginData: loginDataReducer,
    loginError: loginErrorReducer,
    // family info
    currentFamily: currentFamilyReducer,
    currentChildrenList: currentChildrenListReducer,
    isAddedFamily: isAddedFamilyReducer,
    isFamilyAdding: isFamilyAddingReducer,
    isSearchingFamily: isSearchingFamilyReducer,
    familyError: familyErrorReducer,
    familySearchError: familySearchErrorReducer,
    //child info
    currentChild: currentChildReducer,
    isAddedChild: isAddedChildReducer,
    isSearchingChild: isSearchingChildReducer,
    isChildAdding: isChildAddingReducer,
    childError : childErrorReducer,
    childSearchError: childSearchErrorReducer
});

export default rootReducer;