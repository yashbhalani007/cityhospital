import { deletetMedicinesData, getMedicinesData, postMedicinesData, putMedicinesData } from "../../common/api/medicines.api";
import { db } from "../../firebase/firebase";
import { API_URL } from "../../utilits/BaseUrl";
import { ADD_MEDICHINES, DELETE_MEDICHINES, ERROR_MEDICHINES, GET_MEDICHINES, LOADING_MEDICHINES, UPDATE_MEDICHINES } from "../ActionTypes";
import { collection, addDoc } from "firebase/firestore";



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
            .then(dispatch({ type: DELETE_MEDICHINES, payload: id }))
            .catch((error) => dispatch(errorMedichines(error)))
    } catch (error) {
        dispatch(errorMedichines(error))
    }

}

export const addMedichines = (data) => async (dispatch) => {
    console.log(data);
    try {
        // postMedicinesData(data)
        //     .then((response) => dispatch({ type: ADD_MEDICHINES, payload: response.data }))
        //     .catch((error) => dispatch(errorMedichines(error)))

        const docRef = await addDoc(collection(db, "medicines"), data);
        console.log("Document written with ID: ", docRef.id);

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const updateMedichines = (data) => (dispatch) => {
    try {
        putMedicinesData(data)
            .then((response) => dispatch({ type: UPDATE_MEDICHINES, payload: response.data }))
            .catch((error) => dispatch(errorMedichines(error)))
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