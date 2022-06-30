import axios from "axios";

// initialState 

const initialState = {
    posts: [],        
};

// action 

const ADD_POST = "comment_reducer/ADD_POST";
const LOAD_POST = "comment_reducer/LOAD_POST"


// action creator

export const addPost = (payload) => { 
    return {
        type: ADD_POST, 
        payload
    }; 
}
export const loadPost = (payload) => { 
    return {
        type: LOAD_POST, 
        payload
    }; 
}


// middleware

export const __addPost = (payload) => async (dispatch, getState) => {
    try {
        const response = await axios.post(
            "http://localhost:4000/Review",
            payload
        );

        dispatch(addPost(response.data));
    } catch (error) {
        console.log(error);
    }
};

export const __loadPost = () => async(dispatch, getState) => {
    
    try {
        const posts = await axios.get("http://localhost:4000/Review");
        console.log(posts); 
        dispatch(loadPost(posts.data))
        }
        
    catch (error) {
        console.log(error)
    }
}



// reducer

export default function postReducer (state = initialState, action) {
    switch (action.type){
        case ADD_POST:
            return {
                ...state, 
                posts: [...state.posts, action.payload]
            };
        case LOAD_POST:
            return {
                ...state,
                posts: [...action.payload]
            }
        default:
            return state;
        }
    };
