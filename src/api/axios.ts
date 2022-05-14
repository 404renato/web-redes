import Axios from 'axios'

export const getInstance = async () => {
    const axiosInstance = Axios.create({
        baseURL:
            'https://2b69-2804-431-c7cb-46ff-9c31-eda6-21f8-6830.sa.ngrok.io',
        timeout: 100000,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return axiosInstance
}
