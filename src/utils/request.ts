import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse ,InternalAxiosRequestConfig } from 'axios'

enum RequestEnums {
    TIMEOUT = 30000,
    SUCCESS = 200, // 请求成功
}
const URL: string = '/'
const config = {
    // 默认地址
    baseURL: URL as string,
    // 设置超时时间
    timeout: RequestEnums.TIMEOUT as number,
    // 跨域时候允许携带凭证
    // withCredentials: true,
    // headers: {
    //     'post': {
    //         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    //     }
    // }
}
 
class RequestHttp {
    service: AxiosInstance
    constructor(config:AxiosRequestConfig){
        this.service = axios.create(config)
        //请求拦截
        this.service.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                return  config
            },
            (error: AxiosError) => {
                // 请求报错
                Promise.reject(error)
            }
        )
        //响应拦截
        this.service.interceptors.response.use(
            (response:AxiosResponse) => {
                const { data } = response
                if (data.code && data.code !== RequestEnums.SUCCESS) {
                    return Promise.reject(data)
                }
                return data
            },
            (error: AxiosError) => {
                const { response } = error
                if (response) {
                    this.handleCode(response.status)
                }
                if (!window.navigator.onLine) {
                    //网络连接失败可操作或提示
                    console.log('浏览器未连接网络')
                }
            }
        )
    }
    handleCode(code:number):void{
        console.log(code)
    }
    // 常用方法封装
    get<T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<T> {
        return this.service.get(url, {
            params,
            ...config
        })
    }
    post<T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<T> {
        return this.service.post(url, params, config)
    }
    put<T>(url: string, params?: object): Promise<T> {
        return this.service.put(url, params)
    }
    delete<T>(url: string, params?: object): Promise<T> {
        return this.service.delete(url, {
            params
        })
    }
}

export default new RequestHttp(config)