import { api, instance, instances } from './core/api';

const apis = {
  checkEmail: (username) => api.post('/api/signup/checkID', username),
  checkNickName: (nickname) => api.post('/api/signup/nickID', nickname),
  addUser: (newUser) => instances.post('/api/signup', newUser),
  postLogin: (userdata) => api.post('/api/login', userdata),

  getCoffee: (brand) => api.get(`/coffees/${brand}`),
  getCoffeeDetail: (brand, id) => api.get(`/coffees/${brand}/${id}`),
  getCoffees: () => api.get('/coffees'),
  getCoffeeCategory: (category) =>
    api.get(`/coffees/sidebar?category=${category}`),
  addCoffee: (brand, coffee) => instance.post(`/coffees/${brand}`, coffee),
  getRandomCoffee: () =>
    api.get('/coffees/random?brand=스타벅스&category=coffee'),

  postComment: (brand, id, data) =>
    api.post(`coffees/${brand}/${id}/review`, data),
  getComment: (brand, boardId) => api.get(`coffee/${brand}/${boardId}/review`),
  deleteComment: (brand, boardId, reviewId) =>
    api.delete(`/coffees/${brand}/${boardId}/review/${reviewId}`, reviewId),
  updatecomment: (brand, boardId, reviewId, data) =>
    api.put(`/coffees/${brand}/${boardId}/review/${reviewId}`, data),

  prechat: () => instance.get(`/mainchat/get/main`),
  prepostchat: (id) => api.get(`/postchat/get/${id}`),
  getChatLists: () => api.get('/chatposts'),

  getOneChatItem: (id) => api.get(`/chatposts/detail/${id}`),
  getChatDetail: (id) => api.get(`/chatposts/${id}`),
  addChatItem: (data) => api.post('/chatposts', data),
  deleteChatItem: (id) => api.delete(`/chatposts/${id}`),
  updateChatItem: (data, id) => api.put(`/chatposts/${id}`, data),
};

export default apis;
