import firebase from 'firebase';


export const IS_ADDING_FAMILY = "IS_ADDING_FAMILY";
export const IS_FAMILY_ADDED = "IS_FAMILY_ADDED";
export const IS_SEARCHING_FAMILY = "IS_SEARCHING_FAMILY";
export const CURRENT_FAMILY = "CURRENT_FAMILY";
export const ADDING_ERROR = "ADDING_ERROR";

// const db = firebase.database();

export function currentFamily(family){
    // browserHistory.push('/'+family.id);
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
        type: ADDING_ERROR,
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
        const familiesRef = firebase.database().ref("families/"+id);
        familiesRef.once('value')
        .then((snapshot) => {
            if(snapshot){
                dispatch(currentFamily(snapshot.val()));
            }
            else{
                dispatch(currentFamily(null));
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
        
        const familyRef = firebase.database().ref("families/"+family.id);
        // check if the family with the id exists
        familyRef.once('value')
        .then((snapshot) => {
            if(snapshot.val() == null){//if not set the family
                familyRef.set(family)
                .then(()=>{
                    dispatch(isAddingFamily(false));
                    dispatch(isAddedFamily(false));
                    dispatch(currentFamily(family));
                })
                .catch((err)=>{
                    dispatch(error(err));
                    dispatch(isAddingFamily(false));
                });
            }
            else{
                dispatch(error({message: "Family already exists"}));
            }
        }).catch((err) => {
            dispatch(error(err));
            dispatch(isAddingFamily(false));
        });

    }
} 