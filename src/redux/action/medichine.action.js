import { API_URL } from "../../utilits/BaseUrl";
import { ADD_MEDICHINES, DELETE_MEDICHINES, GET_MEDICHINES, LOADING_MEDICHINES, UPDATE_MEDICHINES } from "../ActionTypes";


export const getMedichines = () => (dispatch) => {
    
        try {
            dispatch(loadingMedichines())
        
            setTimeout(function () {
            fetch(API_URL + "medicines")
                .then((response) => response.json())
                .then((data) => dispatch({ type: GET_MEDICHINES, payload: data }));
        
    }, 4000)
}
     catch (error) {
        console.log(error);
    }

}

export const deleteMedichines = (id) => (dispatch) => {

    try {
        fetch(API_URL + "medicines/" + id, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then(
                dispatch({ type: DELETE_MEDICHINES, payload: id })
            )
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }

}

export const addMedichines = (data) => (dispatch) => {
    try {
        fetch(API_URL + "medicines", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ADD_MEDICHINES, payload: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const updateMedichines = (data) => (dispatch) => {
    try {
        fetch(API_URL + "medicines/" + data.id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: UPDATE_MEDICHINES, payload: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const loadingMedichines = () => (dispatch) => {
    dispatch({ type: LOADING_MEDICHINES })
}