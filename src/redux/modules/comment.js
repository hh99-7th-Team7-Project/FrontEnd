import apis from "../../shared/api/main";
import { getCookie } from "../../shared/Cookie";
import Swal from 'sweetalert2';


const nickname = getCookie("nickname");


// initialState 

const initialState = {
    posts: [],
};

// action 

const ADD_COMMENT = "comment_reducer/ADD_COMMENT";
const LOAD_COMMENT = "comment_reducer/LOAD_COMMENT";
const DELETE_COMMENT = "comment_reducer/DELETE_COMMENT";
const UPDATE_COMMENT = "comment_reducer/UPDATE_COMMENT";
const GET_AVE_STAR = "comment_reducer/GET_AVE_STAR";


// action creator

export const addComment = (payload) => {
    return {
        type: ADD_COMMENT,
        payload
    };
}
export const loadComment = (payload) => {
    return {
        type: LOAD_COMMENT,
        payload
    };
}

export const deleteComment = (payload) => {

    return {
        type: DELETE_COMMENT,
        payload
    };
}

export const updateComment = (payload) => {

    console.log("수정할거야!")

    return {        
        type: UPDATE_COMMENT,
        payload
    }
}

export const getAveStar = (payload) => {
    return {
        type: GET_AVE_STAR,
        payload
    }
}

// middleware

export const __addComment = (payload) => async (dispatch, getState) => {
    try {
        console.log("add", payload);
        const response = await apis.postComment( payload.brand, payload.boardId, payload.data );
        alert("Review 저장완료!")
        // console.log(response);
        dispatch(addComment(response.data));
    } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
            Swal.fire({
                title: '로그인을 해주세요!',
                icon: 'error',
                confirmButtonText: '확인'
                })            
        }
    }
};

export const __updateComment = (payload) => async (dispatch, getState) => {

    try {
        console.log("수정", payload);
        const response = await apis.updateComment(payload.brand, payload.boardId, payload.commentId, {
            review: payload.data.review,
            star: 5,
        });
        
        console.log("response data", response.data);
        dispatch(updateComment(response.data));
        
    } catch (error) {
        console.log(error);
    }
};

export const __loadComment = (payload) => async (dispatch, getState) => {
    
    try {
        console.log(payload);
        const posts = await apis.getComment(payload.brand, payload.boardId);
        console.log(posts.data);
        dispatch(loadComment(posts.data))
    }
    catch (error) {
        console.log(error);        
    }
};

export const __deleteComment = (brand, boardId, reviewId) => async (dispatch, getState) => {
    try {
        console.log("삭제", brand, boardId, reviewId);
        const response = await apis.deleteComment(brand,boardId,reviewId);
        console.log(response.data);
        dispatch(deleteComment(response.data));
        alert("삭제완료!");
    } catch (error) {
        console.log(error);
        if (error.response.status === 500) {
            alert ("내가 쓴 댓글만 삭제할 수 있습니다.");
        }
    }
}

export const __getAverageStar = (brand, boardId) => async (dispatch, getState) => {
    try {
        console.log("평점 가져오기", brand, boardId);
        const response = await apis.getAveComment(brand, boardId);
        console.log(response);
        dispatch(getAveStar(response));
    } catch (error) {
        console.log(error);
    }
}





// reducer

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case LOAD_COMMENT:
            return {
                ...state,
                posts: [...action.payload]
            }
        case DELETE_COMMENT:
            const new_comment_list = state.posts.filter((item, index) => {                
                return action.payload !== item.id;
            })
            return {
                ...state,
                posts: [...new_comment_list]
            };
        case UPDATE_COMMENT:
            const updateCommentList = state.posts.map((value, id) => {                
                return value.id === Number(action.payload.id) ?
                    action.payload : value;
            });
            return {
                ...state,
                posts: updateCommentList
            }
        default:
            return state;
    }
};
