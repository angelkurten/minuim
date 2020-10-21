import axios from 'axios'
import { AxiosInstance } from 'axios'
import { AxiosRequestConfig } from 'axios'

export class HttpUtils {
    private static axiosDefaultConfiguration: AxiosRequestConfig = {
        validateStatus: (statusCode) => statusCode <= 500,
        timeout: 1000
    }

    static createAxiosClient(config: AxiosRequestConfig): AxiosInstance {
        return axios.create({ ...HttpUtils.axiosDefaultConfiguration, ...config })
    }
}
