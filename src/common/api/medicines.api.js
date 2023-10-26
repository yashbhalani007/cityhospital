import { GetRequest, deleteRequest, postRequest, putRequest } from "../Request"

export const getMedicinesData = () => {
    return GetRequest('medicines/')
}

export const postMedicinesData = (data) => {
    return postRequest('medicines/' ,data)
}

export const deletetMedicinesData = (id) => {
    return deleteRequest('medicines/' ,id)
}

export const putMedicinesData = (data) => {
    return putRequest('medicines/' ,data)
}



