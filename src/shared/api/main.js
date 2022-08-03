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

  //마이페이지
  getMypage: (userId) => api.get(`/mypage/userInfo/${userId}`),
  updateMypage: (userId, data) => api.put(`/mypage/userInfo/${userId}`, data),
  getMyBoard: (userId) => api.get(`/mypage/myboard/${userId}`),
  getMyCoffee: (userId) => api.get(`/mypage/coffee/like/${userId}`),
  getMyBoardBookmark: (userId) => api.get(`mypage/posts/bookmarks/${userId}`),
  getMyBoardCount: (userId) => api.get(`/mypage/myboards/${userId}`),
  getMyChatCount: (userId) => api.get(`/mypage/myChat/${userId}`),
  getMyChatRoom: (userId) => api.get(`/mypage/myChatRoom/${userId}`),
  getMyReport:(userId) => api.get(`/mypage/report/${userId}`),

  //커피정보
  getCoffee: (brand) => api.get(`/coffees/${brand}`),
  getCoffeeBrandnCate: (brand,category) => api.get(`/coffees/${brand}/category?keyword=${category}`),
  getCoffeeDetail: (brand, id) => api.get(`/coffees/${brand}/${id}`),
  getCoffeeDetailLogin: (brand, id) => api.get(`/auths/coffees/${brand}/${id}`),
  getStar: (brand, id) => api.get(`/coffee/${brand}/${id}/star`),
  getCoffeeCategory: (category) => api.get(`/coffees/category?keyword=${category}`),
  addCoffee: (brand, coffee) => instance.post(`/coffees/${brand}`, coffee),
  getRandomCoffee: () => api.get('/coffees/random?brand=스타벅스&category=coffee'),
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

  //채팅
  getOneChatItem: (id) => api.get(`/chatposts/detail/${id}`),
  addChatItem: (data) => api.post('/chatposts', data),
  deleteChatItem: (id) => api.delete(`/chatposts/${id}`),
  updateChatItem: (data, id) => api.put(`/chatposts/${id}`, data),
  attendChatMember: (chatpostId) => api.post(`/chatposts/attend/${chatpostId}`),
  prepostchat: (chatpostId) => api.get(`/postchat/get/${chatpostId}`),
  getChatLists: (page) => api.get(`/chatposts/${page}`),


//게시판
    getBoards: (page) => api.get(`/posts?page=${page}`),
    getBoardsLogin: (page) => api.get(`/auths/posts?page=${page}`),
    postBoardsLike: (id) => api.post(`/postslogin/postlove/${id}`),
    postBoardsBookmark: (id) => api.post(`/posts/bookmark/${id}`),
    getBoardsCategory: (category, page) => api.get(`/posts?category=${category}&page=${page}`),
    getBoardsCategoryLogin: (category,page) => api.get(`/auths/posts/?category=${category}&page=${page}`),
    getBoardsLike:(page)=> api.get(`/posts?category=love&page=${page}`),
    getBoardsLikeLogin:(page)=> api.get(`/auths/posts?category=love&page=${page}`),
    getBoard: (boardId)=> api.get(`/posts/${boardId}`),
    getBoardLogin: (boardId)=> api.get(`/auths/posts/${boardId}`),
    postBoard : (post)=> api.post('/posts',post),
    updateBoard: (boardId,data)=> api.put(`/posts/${boardId}`,data),
    deleteBoard: (boardId)=> api.delete(`/posts/${boardId}`),
    postBoardComment: (boardId, data) => api.post(`/posts/${boardId}/comments`, data),
    getBoardComment: (boardId) => api.get(`/posts/${boardId}/comments`),
    deleteBoardComment: (boardId, commentId) => api.delete(`/posts/${boardId}/comments/${commentId}`),
    updateBoardComment: (boardId, commentId, data) => api.put(`/posts/${boardId}/comments/${commentId}`, data),

  //검색
  searchCoffee: (keyword) => api.get(`/coffees/searches?keyword=${keyword}`),
  searchBoard: (keyword,page) => api.get(`/posts/searches?keyword=${keyword}&page=${page}`),
  searchBoardLogin: (keyword,page) => api.get(`/posts/searches?keyword=${keyword}&page=${page}`),

  //랜덤커피

  randomCoffee1: (brand, min, max) => api.get(`/coffees/random?brand=${brand}&min=${min}&max=${max}`),
  randomCoffee2: (category, min, max) => api.get(`/coffees/random?category=${category}&min=${min}&max=${max}`),
  randomCoffee3: (brand, category, min, max) => api.get(`/coffees/random?brand=${brand}&category=${category}&min=${min}&max=${max}`),
  randomCoffee4: (min, max) => api.get(`/coffees/random?min=${min}&max=${max}`),

  //신고
  reportBoard : (userId,data)=> api.post(`/reports/posts/${userId}`,data),
  reportChat : (userId,data)=> api.post(`/reports/chatposts/${userId}`,data),
};


export default apis;
