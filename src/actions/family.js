import firebase from 'firebase';
import {browserHistory} from 'react-router';

export const IS_ADDING_FAMILY = "IS_ADDING_FAMILY";
export const IS_FAMILY_ADDED = "IS_FAMILY_ADDED";
export const IS_SEARCHING_FAMILY = "IS_SEARCHING_FAMILY";
export const CURRENT_FAMILY = "CURRENT_FAMILY";
export const FAMILY_ERROR = "FAMILY_ERROR";
export const SEARCH_ERROR = "SEARCH_ERROR";

export function searchError(error){
    return {
        type: SEARCH_ERROR,
        error
    }
}

export function currentFamily(family){
    if(family != null){
        browserHistory.push('/'+family.id);
    }
    
    console.log(family);
    return {
        type: CURRENT_FAMILY,
        currentFamily: family
    }
}
export function isAddingFamily(isAdding){
    return {
        type: IS_ADDING_FAMILY,
        isAdding
    }
}
export function isAddedFamily(isAdded){
    return {
        type: IS_FAMILY_ADDED,
        isAdded
    }
}
export function error(err){
    return {
        type: FAMILY_ERROR,
        error: err
    }
}
export function isSearchingFamily(isSearchingFamily){
    return {
        type: IS_SEARCHING_FAMILY,
        isSearchingFamily
    }
}
export function searchFamily(id){
    return (dispatch) => {
        dispatch(isSearchingFamily(true));
        dispatch(searchError({message: null}));
        const familiesRef = firebase.database().ref("families/"+id);
        familiesRef.once('value')
        .then((snapshot) => {
            if(snapshot.val()){
                dispatch(currentFamily(snapshot.val()));
            }
            else{
                dispatch(currentFamily(null));
                dispatch(searchError({message: "Family with the given ID not found."}));
            }
            dispatch(isSearchingFamily(false));
        })
        .catch((err)=>{
            dispatch(error(err));
            dispatch(isSearchingFamily(false));
        });
    }
}
export function addFamily(family){

    return (dispatch) => {
        dispatch(isAddingFamily(true));
        dispatch(isAddedFamily(false));
        dispatch(error({message: null}));
        const familyRef = firebase.database().ref("families/"+family.id);
        familyRef.once('value').then((snapshot)=>{
            if(snapshot.val()){
                dispatch(error({message: "The family with the given ID already exists"}));
            }
            else{
                familyRef.set(family)
                .then(()=>{
                    
                    dispatch(isAddingFamily(false));
                    dispatch(isAddedFamily(false));
                    dispatch(currentFamily(family));
                    dispatch(error(null));
                })
                .catch((err)=>{
                    dispatch(error(err));
                    dispatch(isAddingFamily(false));
                });
            }
        })

    }
} 
export function deleteFamily(id){
    return (dispatch) => {
        const familyRef = firebase.database().ref("families/"+id);
        familyRef.set(null)
        .then(()=>{
            dispatch(currentFamily(null));
            browserHistory.push("/main");
        })
        .catch((err)=>{

        });
    }   
}