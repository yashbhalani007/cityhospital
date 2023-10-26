import { deletetDoctorsData, getDoctorsData, postDoctorsData, putMDoctorsData } from "../../common/api/doctors.api"
import { ADD_DOCTORS, DELETE_DOCTORS, ERROR_DOCTORS, GET_DOCTORS, LOADING_DOCTORS, UPDATE_DOCTORS } from "../ActionTypes"


export const getDoctors = () => (dispatch) => {

    try {
        dispatch(loadingDoctors())

        setTimeout(function () {
            getDoctorsData()
                .then((response) => dispatch({ type: GET_DOCTORS , payload: response.data }))
                .catch((error) => dispatch(errorDoctors(error)))
        }, 2000)
    }
    catch (error) {
        dispatch(errorDoctors(error))
    }

}

export const addDoctors = (data) => (dispatch) => {
    try {
        postDoctorsData(data)
            .then((response) => dispatch({ type: ADD_DOCTORS, payload: response.data }))
            .catch((error) => dispatch(errorDoctors(error)))

    } catch (error) {
        dispatch(errorDoctors(error))
    }
}

export const deleteDoctors = (id) => (dispatch) => {

    try {
        deletetDoctorsData(id)
        .then(dispatch({type: DELETE_DOCTORS,payload: id}))
        .catch((error) => dispatch(errorDoctors(error)))

    } catch (error) {
        dispatch(errorDoctors(error))
    }

}

export const updateDoctors = (data) => (dispatch) => {
    try {
        putMDoctorsData(data)
            .then((response) => dispatch({ type: UPDATE_DOCTORS, payload: response.data }))
            .catch((error) => dispatch(errorDoctors(error)))

    } catch (error) {
        dispatch(errorDoctors(error))
    }
}

export const loadingDoctors = () => (dispatch) => {
    dispatch({ type: LOADING_DOCTORS })
}

export const errorDoctors = (error) => (dispatch) => {
    dispatch({ type: ERROR_DOCTORS, payload: error.message })
}