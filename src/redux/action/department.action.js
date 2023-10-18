import { API_URL } from "../../utilits/BaseUrl";
import { ADD_DEPARTMENT, DELETE_DEPARTMENT, GET_DEPARTMENT, UPDATE_DEPARTMENT } from "../ActionTypes";

export const getDepartment = () => (dispatch) => {

    try {
        fetch(API_URL + "department")
            .then((response) => response.json())
            .then((data) => dispatch({type: GET_DEPARTMENT, payload: data}));
    }catch (error) {
    console.log(error);
}

}

export const deleteDepartment = (id) => (dispatch) => {
    try {
        fetch(API_URL + "department/" + id, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then(
                dispatch({ type: DELETE_DEPARTMENT, payload: id })
            )
            .catch((error) => console.log(error))  
    } catch (error) {
        console.log(error);
    }
}

export const addDepartment = (data) => (dispatch) => {
    try {
        fetch(API_URL + "department" , {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({type: ADD_DEPARTMENT, payload: data}))
            .catch((error) => console.log(error))  
    }catch(error) {
        console.log(error);
    }
}

export const updateDepartment = (data) => (dispatch) => {
    try {
        fetch(API_URL + "department/" + data.id  , {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({type: UPDATE_DEPARTMENT, payload: data}))
            .catch((error) => console.log(error))    
    }catch(error) {
        console.log(error);
    }
}