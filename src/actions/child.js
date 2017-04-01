import firebase from 'firebase';
import {browserHistory} from 'react-router';

export const IS_ADDING_CHILD = "IS_ADDING_CHILD";
export const IS_CHILD_ADDED = "IS_CHILD_ADDED";
export const IS_SEARCHING_CHILD = "IS_SEARCHING_CHILD";
export const CURRENT_CHILD = "CURRENT_CHILD";
export const CHILD_ERROR = "CHILD_ERROR";
export const CHILD_SEARCH_ERROR = "CHILD_SEARCH_ERROR";

export function searchError(error){
    return {
        type: CHILD_SEARCH_ERROR,
        error
    }
}

export function isAddingChild(isAdding){
    return {
        type: IS_ADDING_CHILD,
        isAdding
    }
}
export function isAddedChild(isAdded){
    return {
        type: IS_CHILD_ADDED,
        isAdded
    }
}
export function currentChild(child, fromAddChild){
    if(child != null){
        if(fromAddChild){
            browserHistory.push('/'+child.familyId);    
        }
        else{
            browserHistory.push('/'+child.familyId+'/'+child.id);
        }
    }
    
    
    return {
        type: CURRENT_CHILD,
        currentChild: child
    }
}
export function error(err){
    return {
        type: CHILD_ERROR,
        error: err
    }
}
export function isSearchingChild(isSearchingChild){
    return {
        type: IS_SEARCHING_CHILD,
        isSearchingChild
    }
}
export function searchChild(id){
    return (dispatch) => {
        dispatch(isSearchingChild(true));
        dispatch(searchError({message: null}));
        const childrenRef = firebase.database().ref("children/"+id);
        childrenRef.once('value')
        .then((snapshot) => {
            if(snapshot.val()){
                dispatch(currentChild(snapshot.val()));
            }
            else{
                dispatch(currentChild(null));
                dispatch(searchError({message: "Child with the given ID not found."}));
            }
            dispatch(isSearchingChild(false));
        })
        .catch((err)=>{
            dispatch(error(err));
            dispatch(isSearchingChild(false));
        });
    }
}
export function addChild(child, fromAddChild){

    return (dispatch) => {
        dispatch(isAddingChild(true));
        dispatch(isAddedChild(false));
        dispatch(error({message: null}));
        const childRef = firebase.database().ref("children/"+child.id);
        childRef.once('value').then((snapshot)=>{
            if(snapshot.val()){
                dispatch(error({message: "The child with the given ID already exists"}));
            }
            else{
                childRef.set(child)
                .then(()=>{
                    dispatch(isAddingChild(false));
                    dispatch(isAddedChild(false));
                    dispatch(currentChild(child, fromAddChild));
                    dispatch(error(null));
                })
                .catch((err)=>{
                    dispatch(error(err));
                    dispatch(isAddingChild(false));
                });
            }
        })

    }
} 
export function deleteChild(id, familyId){
    return (dispatch) => {
        const childRef = firebase.database().ref("children/"+id);
        childRef.set(null)
        .then(()=>{
            dispatch(currentChild(null));
            browserHistory.push("/"+familyId);
        })
        .catch((err)=>{

        });
    }   
}