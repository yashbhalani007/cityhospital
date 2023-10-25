import { deletetMedicinesData, getMedicinesData, postMedicinesData, putMedicinesData } from "../../common/api/medicines.api";
import { API_URL } from "../../utilits/BaseUrl";
import { ADD_MEDICHINES, DELETE_MEDICHINES, ERROR_MEDICHINES, GET_MEDICHINES, LOADING_MEDICHINES, UPDATE_MEDICHINES } from "../ActionTypes";


export const getMedichines = () => (dispatch) => {

    try {
        dispatch(loadingMedichines())

        setTimeout(function () {
            getMedicinesData()
                .then((response) => dispatch({ type: GET_MEDICHINES, payload: response.data }))
                .catch((error) => dispatch(errorMedichines(error)))
        }, 2000)
    }
    catch (error) {
        dispatch(errorMedichines(error))
    }

}

export const deleteMedichines = (id) => (dispatch) => {

    try {
        deletetMedicinesData(id)
        .then(dispatch({type: DELETE_MEDICHINES,payload: id}))
        .catch((error) => dispatch(errorMedichines(error)))
        // fetch(API_URL + "medicines/" + id, {
        //     method: 'DELETE'
        // })
        //     .then((response) => {
        //         if (response.ok) {
        //             return response.json()
        //         }
        //     })
        //     .then(
        //         dispatch({ type: DELETE_MEDICHINES, payload: id })
        //     )
        //     .catch((error) => dispatch(errorMedichines(error)))
    } catch (error) {
        dispatch(errorMedichines(error))
    }

}

export const addMedichines = (data) => (dispatch) => {
    try {
        postMedicinesData(data)
            .then((response) => dispatch({ type: ADD_MEDICHINES, payload: response.data }))
            .catch((error) => dispatch(errorMedichines(error)))
        // fetch(API_URL + "medicines", {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((response) => {
        //         if (response.ok) {
        //             return response.json()
        //         }
        //     })
        //     .then((data) => dispatch({ type: ADD_MEDICHINES, payload: data }))
        //     .catch((error) => dispatch(errorMedichines(error)))
    } catch (error) {
        dispatch(errorMedichines(error))
    }
}

export const updateMedichines = (data) => (dispatch) => {
    try {
        putMedicinesData(data)
            .then((response) => dispatch({ type: UPDATE_MEDICHINES, payload: response.data }))
            .catch((error) => dispatch(errorMedichines(error)))
        // fetch(API_URL + "medicines/" + data.id, {
        //     method: 'PUT',
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((response) => {
        //         if (response.ok) {
        //             return response.json()
        //         }
        //     })
        //     .then((data) => dispatch({ type: UPDATE_MEDICHINES, payload: data }))
        //     .catch((error) => dispatch(errorMedichines(error)))
    } catch (error) {
        dispatch(errorMedichines(error))
    }
}

export const loadingMedichines = () => (dispatch) => {
    dispatch({ type: LOADING_MEDICHINES })
}

export const errorMedichines = (error) => (dispatch) => {
    dispatch({ type: ERROR_MEDICHINES, payload: error.message })
}