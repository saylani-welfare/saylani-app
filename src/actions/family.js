import firebase from 'firebase';
import {browserHistory} from 'react-router';
export const IS_ADDING_FAMILY = "IS_ADDING_FAMILY";
export const IS_FAMILY_ADDED = "IS_FAMILY_ADDED";
export const IS_SEARCHING_FAMILY = "IS_SEARCHING_FAMILY";
export const CURRENT_FAMILY = "CURRENT_FAMILY";
export const FAMILY_ERROR = "FAMILY_ERROR";
export const SEARCH_ERROR = "SEARCH_ERROR";
export const CURRENT_CHILDREN_LIST = "CURRENT_CHILDREN_LIST";
export const FETCHING_CHILDREN_LIST = "FETCHING_CHILDREN_LIST";

export function searchError(error){
    return {
        type: SEARCH_ERROR,
        error
    }
}
export function currentChildrenList(list){
    return {
        type: CURRENT_CHILDREN_LIST,
        list
    }
}
export function fetchingChildrenList(fetchingChildrenList){
    return {
        type: FETCHING_CHILDREN_LIST,
        fetchingChildrenList
    }
}
export function currentFamily(family){
    if(family != null){
        browserHistory.push('/'+family.id);
    }
    
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
export function fetchChildrenList(familyId){
    return (dispatch) => {
        dispatch(fetchingChildrenList(true));
        const childrenRef = firebase.database().ref('children');
        childrenRef.once('value')
        .then((snapshot) => {
            const list = snapshot.val();
            let arr = [];
            for(let childId in list){
                const child = list[childId];
                if(child.familyId === familyId){
                    arr.push(child);
                }
            }
            dispatch(fetchingChildrenList(false));
            dispatch(currentChildrenList(arr));
        })
        .catch((error) => {
            dispatch(fetchingChildrenList(false));
            dispatch(currentChildrenList([]));
        });
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