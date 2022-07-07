import {api,instance,instances} from "./core/api";

const apis = {

    checkEmail: (username) => api.post("/api/signup/checkID",username),
    checkNickName: (nickname) => api.post("/api/signup/nickID",nickname),
    addUser: (newUser) => instances.post("/api/signup", newUser),
    postLogin : (userdata) => api.post("/api/login", userdata),

    getCoffee: (brand) => api.get(`/coffee/${brand}`),
    getCoffeeDetail: (brand, id) => api.get(`/coffee/${brand}/${id}`),
    getCoffees: ()=> api.get("/coffee"),
    getCoffeeCategory: (category) => api.get(`/coffee/sidebar?category=${category}`),
    addCoffee: (brand, coffee) => instance.post(`/coffee/${brand}`,coffee),
    getRandomCoffee: ()=> api.get("/coffee/random?brand=스타벅스&category=coffee"),



    postComment : (brand, id, data) => api.post(`coffee/${brand}/${id}/review`, data),
    getComment : (brand, boardId) => api.get(`coffee/${brand}/${boardId}/review`),
    deleteComment : (brand, boardId, reviewId) => api.delete(`/coffee/${brand}/${boardId}/review/${reviewId}`, reviewId),
    updatecomment : (brand, boardId, reviewId, data) => api.put(`/coffee/${brand}/${boardId}/review/${reviewId}`, data)

}

export default apis;