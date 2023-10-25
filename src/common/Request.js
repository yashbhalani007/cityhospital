import axios from "axios";
import { API_URL } from "../utilits/BaseUrl";


const instance = axios.create({
    baseURL: API_URL,
    timeout: 3000,
});

const SendRequest = (config) => {
    return instance.request(config)
}

export const GetRequest = (path) => {
    return SendRequest({
        method: 'GET',
        url: path
    })
}

export const postRequest = (path,data) => {
    return SendRequest({
        method: 'POST',
        url: path,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    })
}

export const deleteRequest = (path, id) => {
    return SendRequest({
        method: 'DELETE',
        url: path + id
    })
}

export const putRequest = (path,data) => {
    return SendRequest({
        method: 'PUT',
        url: path + data.id,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)

    })
}