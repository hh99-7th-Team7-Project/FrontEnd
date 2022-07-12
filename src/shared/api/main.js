import {api,instance,instances} from "./core/api";

const apis = {

    checkEmail: (username) => api.post("/api/signup/checkID",username),
    checkNickName: (nickname) => api.post("/api/signup/nickID",nickname),
    addUser: (newUser) => instances.post("/api/signup", newUser),
    postLogin : (userdata) => api.post("/api/login", userdata),

    getCoffee: (brand) => api.get(`/coffees/${brand}`),
    getCoffeeDetail: (brand, id) => api.get(`/coffees/${brand}/${id}`),
    getCoffees: ()=> api.get("/coffees"),
    getCoffeeCategory: (category) => api.get(`/coffees/sidebar?category=${category}`),
    addCoffee: (brand, coffee) => instance.post(`/coffees/${brand}`,coffee),
    getRandomCoffee: (brand, coffee)=> api.get(`/coffees/random?${brand}=스타벅스&category=${coffee}`),



    postComment : (brand, id, data) => api.post(`coffees/${brand}/${id}/reviews`, data),
    getComment : (brand, boardId) => api.get(`coffees/${brand}/${boardId}/reviews`),
    deleteComment : (brand, boardId, reviewId) => api.delete(`/coffees/${brand}/${boardId}/reviews/${reviewId}`),
    updatecomment : (brand, boardId, reviewId, data) => api.put(`/coffees/${brand}/${boardId}/reviews/${reviewId}`, data)

}

export default apis;