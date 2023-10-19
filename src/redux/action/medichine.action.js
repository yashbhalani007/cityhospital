import { API_URL } from "../../utilits/BaseUrl";
import { ADD_MEDICHINES, DELETE_MEDICHINES, ERROR_MEDICHINES, GET_MEDICHINES, LOADING_MEDICHINES, UPDATE_MEDICHINES } from "../ActionTypes";


export const getMedichines = () => (dispatch) => {

    try {
        dispatch(loadingMedichines())

        setTimeout(function () {
            fetch(API_URL + "medicines")
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    }

                    throw new Error("Something went wrong!");
                })
                .then((data) => dispatch({ type: GET_MEDICHINES, payload: data }))
                .catch((error) => dispatch(errorMedichines(error)))
        }, 4000)
    }
    catch (error) {
        dispatch(errorMedichines(error))
    }

}

export const deleteMedichines = (id) => (dispatch) => {

    try {
        fetch(API_URL + "medicines/" + id, {
            method: 'DELETE'
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(
                dispatch({ type: DELETE_MEDICHINES, payload: id })
            )
            .catch((error) => dispatch(errorMedichines(error)))
    } catch (error) {
        dispatch(errorMedichines(error))
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
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then((data) => dispatch({ type: ADD_MEDICHINES, payload: data }))
            .catch((error) => dispatch(errorMedichines(error)))
    } catch (error) {
        dispatch(errorMedichines(error))
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
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then((data) => dispatch({ type: UPDATE_MEDICHINES, payload: data }))
            .catch((error) => dispatch(errorMedichines(error)))
    } catch (error) {
        dispatch(errorMedichines(error))
    }
}

export const loadingMedichines = () => (dispatch) => {
    dispatch({ type: LOADING_MEDICHINES })
}

export const errorMedichines = (error) => (dispatch) => {
    dispatch({ type: ERROR_MEDICHINES, payload: error.message})
}