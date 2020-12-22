import router from '../router'
import baseUrl from "./config";
import axios from 'axios'
import md5 from 'md5'
import {encode} from 'js-base64'

axios.defaults.baseURL = baseUrl; // 请求的默认域名
const sign = function(){
    let timestamp = new Date().getTime()
    let str = 'AJZ11bguZxcvLG#'
    let baseStr = encode(timestamp)
    let md = md5(str+timestamp)
    return encode(md+baseStr)
}
//创建axios实例
const service = axios.create({
    timeout: 30000 //超时时间
})

//添加request拦截器
service.interceptors.request.use(config => {
    return config;
})

//添加response拦截器
service.interceptors.response.use(
    response => {
        if (response.status == 200){
            console.log(response)
            let res = {};
            res.status = response.status;
            res.data = response.data;
            return res;
        }else if(response.status == 401){//如果未登录
            router.push({
                path: "login",
            })
        }
    },
    error => {
        if (error.response && error.response.status == 404) {
            //跳转到xx页面
            console.log("404错误")
        }
        if(error.response && error.response.status == 401){
            router.push({path: '/Login'}).catch(err => {err})
        }
        // return Promise.reject(error.response)
    }
)

//封装get接口
// params={} 是设置默认值
export function get(url, params = {}) {
    return service.get(url,params)
}

//封装post请求
export function post(url, data = {}) {
    //默认配置
    data.sign = sign()
    return service.post(url,data)
}
export function filePost(url, data = {}) {
    //默认配置
    return service.post(url,data,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
//封装put方法 (resfulAPI常用)
function put(url, data = {}) {
    return service({
        url: url,
        method: 'put',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify(data)
    })
}

//删除方法(resfulAPI常用)
function deletes(url) {
    return service({
        url: url,
        method: 'delete',
        headers: {}
    })
}

//patch方法(resfulAPI常用)
function patch(url) {
    return service({
        url: url,
        method: 'patch',
        headers: {}
    })
}

//处理格式化URL（/demo/{id}）
function render(url, data) {
    var re = /{([^]+)?}/
    var match = ''
    while ((match = re.exec(url))) {
        url = url.replace(match[0], data[match[1]])
    }
    return url
}

const fetch = (options) => {
    //process.env.VUE_APP_PATH为环境变量在.env文件中配置
    let url = process.env.VUE_APP_PATH + options.url;
    url = render(url, options.data)
    switch (options.method.toUpperCase()) {
        case 'GET':
            return get(url, options.data)
        case 'POST':
            return post(url, options.data)
        case 'PUT':
            return put(url, options.data)
        case 'DELETE':
            return deletes(url, options.data)
        case 'PATCH':
            return patch(url, options.data)
        default:
            return service(options)
    }
}

/**
 * 提供一个http方法
 * url 访问路径 不包括域名和项目名
 * data 参数对象
 * method 请求方式
 *  */
export function http(url = '', data = {}, method = "GET") {
    const options = { url: url, data: data, method: method }
    return fetch(options).catch(error => {
        console.log(error)
        throw error
    })
}

/**
 * 构造url的方法
 */
export function getUrl(url = '') {
    //process.env.VUE_APP_PATH为环境变量在.env文件中配置
    return process.env.VUE_APP_PATH + url;
}
