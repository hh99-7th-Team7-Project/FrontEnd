import {api,instance,instances} from "./core/api";

const apis = {

//회원가입로그인 + 유효성검사
    checkEmail: (username) => api.post("/api/signup/checkID",username),
    checkNickName: (nickname) => api.post("/api/signup/nickID",nickname),
    addUser: (newUser) => instances.post("/api/signup", newUser),
    addUserWO: (newUser) => api.post("/api/user/signup",newUser),
    postLogin : (userdata) => api.post("/api/login", userdata),
    postImg: (data)=> instance.post("/coffees/image",data),

//마이페이지
    getMypage : (userId) => api.get(`/mypage/userInfo/${userId}`),
    updateMypage : (userId, data) => api.put(`/mypage/userInfo/${userId}`,data),
    getMyBoard : (userId) => api.get(`/mypage/myboard/${userId}`),


//커피정보
    getCoffee: (brand) => api.get(`/coffees/${brand}`),
    getCoffeeDetail: (brand, id) => api.get(`/coffees/${brand}/${id}`),
    getStar: (brand,id)=> api.get(`/coffee/${brand}/${id}/star`),
    getCoffeeCategory: (category) => api.get(`/coffees/sidebars?category=${category}`),
    addCoffee: (brand, coffee) => instance.post(`/coffees/${brand}`,coffee),
    getRandomCoffee: ()=> api.get("/coffees/random?brand=스타벅스&category=coffee"),
    getCoffees: ()=> api.get("/coffees"),

//리뷰
    postComment : (brand, id, data) => api.post(`coffees/${brand}/${id}/reviews`, data),
    getComment : (brand, boardId) => api.get(`coffees/${brand}/${boardId}/reviews`),
    deleteComment : (brand, boardId, reviewId) => api.delete(`/coffees/${brand}/${boardId}/reviews/${reviewId}`),
    updateComment : (brand, boardId, reviewId, data) => api.put(`/coffees/${brand}/${boardId}/reviews/${reviewId}`, data),
    getAveComment : (brand, boardId) => api.get(`/coffees/${brand}/${boardId}/star`),


//검색
    searchCoffee : (keyword)=> api.get(`/coffees/searches?keyword=${keyword}`),
    searchBoard : (keyword) => api.get(`/posts/searches?keyword=${keyword}`),


//게시판
    getBoards: () => api.get('/posts'),
    getBoardsLike: () => api.get('/posts?orders=like'),
    getBoardsCategory: (category) => api.get(`/posts?category=${category}`),
    getBoard: (boardId)=> api.get(`/posts/${boardId}`),
    postBoard : (post)=> api.post('/posts',post),
    updateBoard: (boardId,data)=> api.put(`/posts/${boardId}`,data),
    deleteBoard: (boardId)=> api.delete(`/posts/${boardId}`),
    postBoardComment: (boardId, data) => api.post(`/posts/${boardId}/comments`, data),
    getBoardComment: (boardId) => api.get(`/posts/${boardId}/comments`),
    deleteBoardComment: (boardId, commentId) => api.delete(`/posts/${boardId}/comments/${commentId}`),
    updateBoardComment: (boardId, commentId, data) => api.put(`/posts/${boardId}/comments/${commentId}`, data)
}

export default apis;