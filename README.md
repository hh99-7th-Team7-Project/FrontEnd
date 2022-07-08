

## 💻 프로젝트 소개



## ⚙️ 아키텍쳐

## 코드컨벤션
- 기본 카멜케이스사용
- 기본 리덕스 구조
    
    ```jsx
    let intialstate = {
      list: [],
      detail_list: null,
    
      heart_list: null,
    };
    /* ----------------- 액션 타입 ------------------ */
    
    const LOAD_POSTS = "post_reducer/LOAD";
    const CREATE_POST = "post_reducer/CREATE";
    const UPDATE_POST = "post_reducer/UPDATE";
    const REMOVE_POST = "post_reducer/REMOVE";
    // const CREATE_HEART = "post_reducer/CREATE";
    
    /* ----------------- 액션 생성 함수 ------------------ */
    export function loadPosts(payload) {
      return { type: LOAD_POSTS, payload };
    }
    export function createPost(payload) {
      return { type: CREATE_POST, payload };
    }
    export function updatePost(post_index) {
      return { type: UPDATE_POST, post_index };
    }
    export function removePost(post_index) {
      return { type: REMOVE_POST, post_index };
    }
    
    /* ----------------- 미들웨어 ------------------ */
    미들웨어는 언더바 __두개 이후 관련이름
    export const __loadPost = () => {
      return async function (dispatch) {
        const loadData = await apis.getPosts();
        // console.log(loadData.data);
        dispatch(loadPosts(loadData.data));
      };
    };
    
    /* ----------------- 리듀서 ------------------ */
    export default function Post_reducer(state = intialstate, action) {
      // 새로운 액션 타입 추가시 case 추가한다.
      switch (action.type) {
        case LOAD_POSTS: {
          return { list: action.payload.reverse() };
        }
        case CREATE_POST: {
          return { ...state, list: [...state.list, action.payload] };
        }
        case LOAD_DETAIL: {
          return { ...state, detail_list: action.loadDetailData };
        }
        case REMOVE_POST: {
          return state.filter((list) => list.id !== action.id);
        }
        default:
          return state;
      }
    }
    ```
    
- combineReducer설정시 key : value로 이름 지정 (예시) post: PostReducer
- 토큰은 쿠키에 저장 (브라우저 storage 에 관해서도 알아볼것!)
    
    
- image의 경우 image폴더 안에 필요한 페이지 폴더를 만들어 넣는다.
- Page는.js 확장자 사용 component는 .jsx 확장자 사용
- component도 페이지에 따라서 폴더 분류한 후 그 폴더 내에서 index+폴더명 으로 모아서 export하여 사용한다.
- import의 경우 사용하지 않는건 바로 지워주고 종류별로 묶어주는걸 원칙으로 한다.(Page, component, hook, css,,)
- git의 경우 개인 브랜치 커밋은 맘대로 메인브랜치 머지시
    
    [본인이름] 정확한 머지 내역
    
    으로 머지한다. 충돌 발생 시 해당 페이지 관리자와 충분한 상의 후 충돌 해결한다.
    
- 보안 상 문제가 될 수 있는 내용이 있는 파일은 gitignore에 넣은 후 커밋 머지하기⭐
- 사용하지 않는 코드는 정리하고 커밋시에 개인적인 확인을 위한 console.log는 주석처리 후 커밋한다.
- 서로의 코드를 건들일 땐 당사자와 충분한 협의 후에 적용시킨다 (사소한거라도 !!)
- 대부분은 css보다는 styled-components를 사용하되 특수한 경우에만 css파일을 사용한다. (shared 의 css폴더에 넣는다)
- Styled-Components의 경우 앞에 SC를 붙인 후 관련 이름으로 네이밍한다.


## 😇‍ 프론트엔드 팀원

<table>
  <tr>
    <td align="center"><b>최서현</b></td>
    <td align="center"><b>이윤진</b></td>
    <td align="center"><b>안소진</b></td>
    
  </tr>
  <tr>
    <td align="center"><b>🤩 Frontend 🤩 </b></td>
    <td align="center"><b>🤩 Frontend 🤩 </b></td>
      <td align="center"><b>🤩 Frontend 🤩 </b></td>
   
   
  </tr>
</table>

### ✅ 커밋 종류


## ⚛️ 개인 역할

<code>최서현</code> 

<code>이윤진</code>


<code>안소진</code>

## 🔨 Trouble Shooting

<br/>

### 👀 사용 라이브러리 👀