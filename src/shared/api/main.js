import { api, apin, instance, instances } from './core/api';

const apis = {
  //회원가입로그인 + 유효성검사
  checkEmail: (username) => api.post('/api/signup/checkID', username),
  checkNickName: (nickname) => api.post('/api/signup/nickID', nickname),
  addUser: (newUser) => instances.post('/api/signup', newUser),
  addUserWO: (newUser) => api.post('/api/user/signup', newUser),
  postLogin: (userdata) => api.post('/api/login', userdata),
  postImg: (data) => instance.post('/coffees/image', data),
  verifyEmail: (data) => apin.post('/signup/emails', data),
  verifyDone: (data) => api.post('/signup/emails/checks', data),

  //회원가입로그인 + 유효성검사
  checkEmail: (username) => api.post('/api/signup/checkID', username),
  checkNickName: (nickname) => api.post('/api/signup/nickID', nickname),
  addUser: (newUser) => instances.post('/api/signup', newUser),
  addUserWO: (newUser) => api.post('/api/user/signup', newUser),
  postLogin: (userdata) => api.post('/api/login', userdata),
  postImg: (data) => instance.post('/coffees/image', data),
  verifyEmail: (data) => apin.post('/signup/emails', data),
  verifyDone: (data) => api.post('/signup/emails/checks', data),

  //마이페이지
  getMypage: (userId) => api.get(`/mypage/userInfo/${userId}`),
  updateMypage: (userId, data) => api.put(`/mypage/userInfo/${userId}`, data),
  getMyBoard: (userId) => api.get(`/mypage/myboard/${userId}`),
  getMyCoffee: (userId) => api.get(`/mypage/coffee/like/${userId}`),
  getMyBoardBookmark: (userId) => api.get(`mypage/posts/bookmarks/${userId}`),

  //커피정보
  getCoffee: (brand) => api.get(`/coffees/${brand}`),
  getCoffeeDetail: (brand, id) => api.get(`/coffees/${brand}/${id}`),
  getCoffeeDetailLogin: (brand, id) => api.get(`/auths/coffees/${brand}/${id}`),
  getStar: (brand, id) => api.get(`/coffee/${brand}/${id}/star`),
  getCoffeeCategory: (category) => api.get(`/coffees/sidebars/${category}`),
  addCoffee: (brand, coffee) => instance.post(`/coffees/${brand}`, coffee),
  getRandomCoffee: () =>
    api.get('/coffees/random?brand=스타벅스&category=coffee'),
  getCoffees: () => api.get('/coffees'),
  likeCoffee: (brand, id) => api.post(`/coffees/love/${brand}/${id}`),

  //리뷰
  postComment: (brand, id, data) =>
    api.post(`coffees/${brand}/${id}/reviews`, data),
  getComment: (brand, boardId) =>
    api.get(`coffees/${brand}/${boardId}/reviews`),
  deleteComment: (brand, boardId, reviewId) =>
    api.delete(`/coffees/${brand}/${boardId}/reviews/${reviewId}`),
  updateComment: (brand, boardId, reviewId, data) =>
    api.put(`/coffees/${brand}/${boardId}/reviews/${reviewId}`, data),
  // getAveComment : (brand, boardId) => api.get(`/coffees/${brand}/${boardId}/star`),

  getOneChatItem: (id) => api.get(`/chatposts/detail/${id}`),
  addChatItem: (data) => api.post('/chatposts', data),
  deleteChatItem: (id) => api.delete(`/chatposts/${id}`),
  updateChatItem: (data, id) => api.put(`/chatposts/${id}`, data),
  attendChatMember: (chatpostId) => api.post(`/chatposts/attend/${chatpostId}`),
  prepostchat: (chatpostId) => api.get(`/postchat/get/${chatpostId}`),
  getChatLists: (page) => api.get(`/chatposts/${page}`),

  //커피정보
  getCoffee: (brand) => api.get(`/coffees/${brand}`),
  getCoffeeDetail: (brand, id) => api.get(`/coffees/${brand}/${id}`),
  getStar: (brand, id) => api.get(`/coffee/${brand}/${id}/star`),
  getCoffeeCategory: (category) =>
    api.get(`/coffees/sidebars?category=${category}`),
  addCoffee: (brand, coffee) => instance.post(`/coffees/${brand}`, coffee),
  getRandomCoffee: () =>
    api.get('/coffees/random?brand=스타벅스&category=coffee'),
  getCoffees: () => api.get('/coffees'),
  likeCoffee: (brand, id) => api.post(`/coffees/love/${brand}/${id}`),

  //리뷰
  postComment: (brand, id, data) =>
    api.post(`coffees/${brand}/${id}/reviews`, data),
  getComment: (brand, boardId) =>
    api.get(`coffees/${brand}/${boardId}/reviews`),
  deleteComment: (brand, boardId, reviewId) =>
    api.delete(`/coffees/${brand}/${boardId}/reviews/${reviewId}`),
  updateComment: (brand, boardId, reviewId, data) =>
    api.put(`/coffees/${brand}/${boardId}/reviews/${reviewId}`, data),
  // getAveComment : (brand, boardId) => api.get(`/coffees/${brand}/${boardId}/star`),

  //검색
  searchCoffee: (keyword) => api.get(`/coffees/searches?keyword=${keyword}`),
  searchBoard: (keyword) => api.get(`/posts/searches?keyword=${keyword}`),
  searchBoardLogin: (keyword) =>
    api.get(`/posts/searches?keyword=${keyword}&page=0`),

  //게시판
  getBoards: () => api.get(`/posts?page=0`),
  getBoardsLogin: () => api.get('/auths/posts?page=0'),
  postBoardsLike: (category, id) =>
    api.post(`/postslogin/postlove/${category}/${id}`),
  postBoardsBookmark: (category, id) =>
    api.post(`/posts/bookmark/${category}/${id}`),
  getBoardsCategory: (category) => api.get(`/posts?category=${category}`),
  getBoardsCategoryLogin: (category) => api.get(`/posts?category=${category}`), //안만들었대
  getBoardsLike: () => api.get('/posts?category=like'),
  getBoardsLikeLogin: () => api.get('/posts?category=like'), ///아직
  getBoard: (boardId) => api.get(`/posts/${boardId}`),
  getBoardLogin: (boardId) => api.get(`/auths/posts/${boardId}`),
  postBoard: (post) => api.post('/posts', post),
  updateBoard: (boardId, data) => api.put(`/posts/${boardId}`, data),
  deleteBoard: (boardId) => api.delete(`/posts/${boardId}`),
  postBoardComment: (boardId, data) =>
    api.post(`/posts/${boardId}/comments`, data),
  getBoardComment: (boardId) => api.get(`/posts/${boardId}/comments`),
  deleteBoardComment: (boardId, commentId) =>
    api.delete(`/posts/${boardId}/comments/${commentId}`),
  updateBoardComment: (boardId, commentId, data) =>
    api.put(`/posts/${boardId}/comments/${commentId}`, data),
};

export default apis;
