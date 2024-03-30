import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = async () => {
    const response = await axios
        .get(baseUrl)
    return response.data
}

const create = async (personObject) => {
    const response = await axios
        .post(baseUrl, personObject)
    return response.data
}

const remove = async (personId) => {
    const response = await axios
        .delete(`${baseUrl}/${personId}`)
    return response
}

const update = async (personId, newObject) => {
    const response = await axios.put(`${baseUrl}/${personId}`, newObject)
    return response.data
}

export default { getAll, create, remove, update }