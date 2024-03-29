import * as actionTypes from './actionTypes';

export const saveResult = ( result ) => {
    return {
        type: actionTypes.STORE_RESULT,
        result
    };
}

export const storeResult = ( res ) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult( res ))
        }, 2000);
    }
};

export const deleteResult = (resultElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId
    };
};