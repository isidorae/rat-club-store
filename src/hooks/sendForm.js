import axios from './axios'

export const saveFormDBreq = (body) => {
    return axios.post('/form', body)
}