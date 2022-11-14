import axios from "axios";

export const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/'
})
export default request;

export const get = async (path, options = {}) => {
    const respone = await request.get(path, options);
    return respone.data;
}
