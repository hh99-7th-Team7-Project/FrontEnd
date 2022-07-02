import {api,instances} from "./core/api";

const apis = {

    checkEmail: (username) => api.post("/api/signup/checkID",username),
    checkNickName: (nickname) => api.post("/api/signup/nickID",nickname),
    addUser: (newUser) => instances.post("/api/signup", newUser),
    postLogin : (userdata) => api.post("/api/login", userdata),
    postComment : (review) => api.post(`/coffee/hal/2/review`,review),
    // getComment : () => api.get(`coffee/${brand}/${id}/review`),
    getCoffee: () => api.get("/coffee")
}

export default apis;