import apis from "../../shared/api/main"
import axios from 'axios';


let intialstate = {
  boardcommentlist: [
    {
        nickname: "닉네임1",
        comment: "아메리카노 좋아요",
        day: "2022-07-09"
        },
        {
        nickname: "닉네임2",
        comment: "사진감성이 좋습니다.",
        day: "2022-07-09"
        },
        {
        nickname: "닉네임3",
        comment: "아메리카노 맛집",
        day: "2022-07-09"
        },
        {
        nickname: "닉네임4",
        comment: "최고",
        day: "2022-07-09"
        }
  ],
  
};
/* ----------------- 액션 타입 ------------------ */

const GET_BOARD_COMMENT = "boardcomment_reducer/LOAD";

// const CREATE_HEART = "COFFEE_reducer/CREATE";

/* ----------------- 액션 생성 함수 ------------------ */
export function getBoardComment(payload) {
    console.log("comment를 가져올거야!");
  return { type: GET_BOARD_COMMENT, payload };
}

/* ----------------- 미들웨어 ------------------ */
export const __getBoardComment = (payload) => {
  return async function (dispatch) {
    const loadCommentData = await axios.get("http://localhost:4000/boardcomment", payload);
    console.log(loadCommentData.data);
    dispatch(getBoardComment(loadCommentData.data));
  };
};


/* ----------------- 리듀서 ------------------ */
export default function boardCommentReducer(state = intialstate, action) {
  // 새로운 액션 타입 추가시 case 추가한다.
  switch (action.type) {
    case GET_BOARD_COMMENT: {
        console.log("comment", action.payload);
      return { boardcommentlist: action.payload };
    }
    default:
      return state;
  }
}