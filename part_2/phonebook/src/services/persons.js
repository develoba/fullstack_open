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

export default { getAll, create }