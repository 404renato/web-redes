import Axios, { AxiosError, AxiosResponse } from 'axios'

export const getInstance = async () => {
    const axiosInstance = Axios.create({
        baseURL: 'https://c7e0-2804-18-1852-b14d-44aa-c760-fe75-e287.ngrok.io',
        timeout: 100000,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return axiosInstance
}
