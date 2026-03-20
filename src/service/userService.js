import { userUtils } from "../utils/userUtils.js"
import { api } from "./requester.js"

const BASE_URL = "";

const endpoints = {
    login: BASE_URL + "",
    register: BASE_URL + "",
    logout: BASE_URL + "",

}

async function login(data){
   const userData = await api.post(endpoints.login, data);
   userUtils.setUserdata(userData);

}

async function register(data){
    const userData = await api.post(endpoints.register, data);
    userUtils.setUserdata(userData);
}

async function loguot(){
    await api.get(endpoints.logout);
    userUtils.clear();
}

export const userService = {
    login,
    register,
    loguot
}