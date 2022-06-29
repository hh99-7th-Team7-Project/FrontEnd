import {api} from "./core/api";

const apis = {

    checkEmail: (username) => api.post("/api/signup/checkID",username),
    checkNickName: (nickname) => api.post("/api/signup/nickID",nickname),
    addUser: (newUser) => api.post("/api/signup", newUser),
    postLogin : (userdata) => api.post("/api/login", userdata)
}

export default apis;