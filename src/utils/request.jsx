import axios from "axios";

console.log(process.env);

export const httpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/'
})
export default httpRequest;

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
}
