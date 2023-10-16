import { API_URL } from "../../utilits/BaseUrl";
import { GET_MEDICHINES } from "../ActionTypes";


export const getMedichines = () => (dispatch) => {

    try {
        fetch(API_URL + "medicines")
            .then((response) => response.json())
            .then((data) => dispatch({type: GET_MEDICHINES, payload: data}));
    }catch (error) {
    console.log(error);
}

}