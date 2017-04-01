import {
    IS_ADDING_CHILD,
    IS_CHILD_ADDED,
    IS_SEARCHING_CHILD,
    CURRENT_CHILD,
    CHILD_ERROR,
    CHILD_SEARCH_ERROR
} from '../actions/child';

export function searchErrorReducer(state = {message: null}, action){
    switch(action.type){
        case CHILD_SEARCH_ERROR:
            return action.error;
        default:
            return state;
    }
}
export function currentChildReducer(state = null, action){
    switch(action.type){
        case CURRENT_CHILD:
            return action.currentChild;
        default:
            return state;
    }
}
export function isAddedChildReducer(state = false ,action){
    switch(action.type){
        case IS_CHILD_ADDED:
            return action.isAdded;
        default:
            return state;
    }
}
export function isChildAddingReducer(state = false ,action){
    switch(action.type){
        case IS_ADDING_CHILD:
            return action.isAdding;
        default:
            return state;
    }
}
export function isSearchingChildReducer(state = false ,action){
    switch(action.type){
        case IS_SEARCHING_CHILD:
            return action.isSearchingChild;
        default:
            return state;
    }
}
export function childErrorReducer(state = {message: null}, action){
    switch(action.type){
        case CHILD_ERROR:      
            return action.error
        default:
            return state;
    }
}