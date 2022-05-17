import Axios from 'axios'

export const getInstance = async () => {
    const axiosInstance = Axios.create({
        baseURL:
            'http://localhost:4000',
        timeout: 100000,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return axiosInstance
}
