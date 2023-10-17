import { API_URL } from "../../utilits/BaseUrl";
import { DELETE_MEDICHINES, GET_MEDICHINES } from "../ActionTypes";


export const getMedichines = () => (dispatch) => {

    try {
        fetch(API_URL + "medicines")
            .then((response) => response.json())
            .then((data) => dispatch({type: GET_MEDICHINES, payload: data}));
    }catch (error) {
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
    } catch (error) {
        console.log(error);
    }
}