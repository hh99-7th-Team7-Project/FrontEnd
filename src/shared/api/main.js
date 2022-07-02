import {api,instance,instances} from "./core/api";

const apis = {

    checkEmail: (username) => api.post("/api/signup/checkID",username),
    checkNickName: (nickname) => api.post("/api/signup/nickID",nickname),
    addUser: (newUser) => instances.post("/api/signup", newUser),
    postLogin : (userdata) => api.post("/api/login", userdata),

    getCoffee: () => api.get("/coffee"),
    getCoffees: ()=> api.get("/coffee"),
    addCoffee: (brand, coffee) => instance.post(`/coffee/${brand}`,coffee),
    getRandomCoffee: ()=> api.get("/coffee/random?brand=스타벅스&category=coffee")
}

export default apis;