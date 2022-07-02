import axios from "axios";

// initialState 

const initialState = {
    posts: [],        
};

// action 

const ADD_COMMENT = "comment_reducer/ADD_COMMENT";
const LOAD_COMMENT = "comment_reducer/LOAD_COMMENT"


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


// middleware

export const __addComment = (payload) => async (dispatch, getState) => {
    try {
        const response = await axios.post(
            
            payload
        );
        dispatch(addComment(response.data));
    } catch (error) {
        console.log(error);
    }
};

export const __loadComment = () => async(dispatch, getState) => {
    
    try {
        const posts = await axios.get("http://localhost:4000/Review");
        console.log(posts); 
        dispatch(loadComment(posts.data))
        }
        
    catch (error) {
        console.log(error)
    }
}



// reducer

export default function postReducer (state = initialState, action) {
    switch (action.type){
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
        default:
            return state;
        }
    };
