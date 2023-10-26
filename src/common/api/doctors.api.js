import { GetRequest, deleteRequest, postRequest, putRequest } from "../Request"


export const getDoctorsData = () => {
    return GetRequest('doctors/')
}

export const postDoctorsData = (data) => {
    return postRequest('doctors/' ,data)
}

export const deletetDoctorsData = (id) => {
    return deleteRequest('doctors/' ,id)
}

export const putMDoctorsData = (data) => {
    return putRequest('doctors/' ,data)
}