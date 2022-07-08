import axios from "axios";
import apis from "../../shared/api/main";

// initialState 

const initialState = {
    posts: [],
};

// action 

const ADD_COMMENT = "comment_reducer/ADD_COMMENT";
const LOAD_COMMENT = "comment_reducer/LOAD_COMMENT"
const DELETE_COMMENT = "comment_reducer/DELETE_COMMENT"
const UPDATE_COMMENT = "comment_reducer/UPDATE_COMMENT"


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

    return {
        type: UPDATE_COMMENT,
        payload

    }
}

// middleware

export const __addComment = (payload) => async (dispatch, getState) => {
    try {
        console.log("add", payload);
        const response = await apis.postComment( payload.brand, payload.boardId, payload.data );
        alert("Review 저장완료!")
        console.log(response);
        dispatch(addComment(response.data));
    } catch (error) {
        console.log(error);
    }
};

export const __loadComment = (payload) => async (dispatch, getState) => {
    
    try {
        console.log(payload);
        const posts = await apis.getComment(payload.brand, payload.boardId);
        dispatch(loadComment(posts.data))
    }
    catch (error) {
        console.log(error)
    }
};

export const __deleteComment = (brand, boardId, reviewId) => async (dispatch, getState) => {
    try {
        console.log("삭제", brand, boardId, reviewId);
        const response = await apis.deleteComment(brand, boardId, reviewId);
        console.log(response.data);
        dispatch(deleteComment(response.data));
        alert("삭제완료!");
    } catch (error) {
        console.log(error);
    }
}

export const __updateComment = (payload) => async (dispatch, getState) => {

    try {
        console.log("수정", payload);
        const response = await apis.updatecomment(payload.brand, payload.boardId, payload.commentId, {
            review: payload.data.review,
            star: 5,            
        });
        console.log(response);
        dispatch(updateComment(response.data));
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
                return action.payload.data.id !== state.posts.id;
            })
            return {
                ...state,
                posts: [...new_comment_list]
            };
        case UPDATE_COMMENT:
            const updateCommentList = state.posts.map((value) => {
                return value.id === Number(action.payload.commentId) ?
                    action.payload.data.review : value.review;
            });
            return { ...state, posts: updateCommentList }
        default:
            return state;
    }
};
