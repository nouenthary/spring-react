const baseUrl = "http://localhost:8080/api/employee"
import axios from "axios";

const employee = {};

employee.create = async (state) => {

    const datapost = {
        name: state.fieldName,
        email: state.fieldEmail,
        phone: state.fieldPhone,
        address: state.fieldAddress
    }

    const urlPost = baseUrl + "/create"

    const res = await axios.post(urlPost, datapost)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response;
        })

    return res;
}

employee.list = async () => {
    const urlList = baseUrl + "/list"
    const res = await axios.get(urlList)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error;
        })
    return res;
}

employee.get = async (id) => {
    const urlGet = baseUrl + "/get/" + id
    const res = await axios.get(urlGet)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error;
        })
    return res;
}

employee.update = async (state) => {

    const datapost = {
        name: state.fieldName,
        email: state.fieldEmail,
        phone: state.fieldPhone,
        address: state.fieldAddress
    }

    const urlUpdate = baseUrl + "/update/" + state.id

    const res = await axios.put(urlUpdate, datapost)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error.response
        })

    return res;
}


employee.delete = async (id) => {
    const urlDelete = baseUrl + "/delete/" + id
    const res = await axios.delete(urlDelete)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return error
        })
    return res;
}

export default employee