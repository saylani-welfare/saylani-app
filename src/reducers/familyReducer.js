import {
    IS_ADDING_FAMILY,
    IS_FAMILY_ADDED,
    IS_SEARCHING_FAMILY,
    CURRENT_FAMILY
} from '../actions/family';

export function currentFamilyReducer(state = null, action){
    switch(action.type){
        case CURRENT_FAMILY:
            return action.currentFamily;
        default:
            return state;
    }
}
export function isAddedFamilyReducer(state = false ,action){
    switch(action.type){
        case IS_FAMILY_ADDED:
            return action.isAdded;
        default:
            return state;
    }
}
export function isFamilyAddingReducer(state = false ,action){
    switch(action.type){
        case IS_ADDING_FAMILY:
            return action.isAdding;
        default:
            return state;
    }
}
export function isSearchingFamilyReducer(state = false ,action){
    switch(action.type){
        case IS_SEARCHING_FAMILY:
            return action.isSearchingFamily;
        default:
            return state;
    }
}