

## ๐ป ํ๋ก์ ํธ ์๊ฐ



## โ๏ธ ์ํคํ์ณ

## ์ฝ๋์ปจ๋ฒค์
- ๊ธฐ๋ณธ ์นด๋ฉ์ผ์ด์ค์ฌ์ฉ
- ๊ธฐ๋ณธ ๋ฆฌ๋์ค ๊ตฌ์กฐ
    
    ```jsx
    let intialstate = {
      list: [],
      detail_list: null,
    
      heart_list: null,
    };
    /* ----------------- ์ก์ ํ์ ------------------ */
    
    const LOAD_POSTS = "post_reducer/LOAD";
    const CREATE_POST = "post_reducer/CREATE";
    const UPDATE_POST = "post_reducer/UPDATE";
    const REMOVE_POST = "post_reducer/REMOVE";
    // const CREATE_HEART = "post_reducer/CREATE";
    
    /* ----------------- ์ก์ ์์ฑ ํจ์ ------------------ */
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
    
    /* ----------------- ๋ฏธ๋ค์จ์ด ------------------ */
    ๋ฏธ๋ค์จ์ด๋ ์ธ๋๋ฐ __๋๊ฐ ์ดํ ๊ด๋ จ์ด๋ฆ
    export const __loadPost = () => {
      return async function (dispatch) {
        const loadData = await apis.getPosts();
        // console.log(loadData.data);
        dispatch(loadPosts(loadData.data));
      };
    };
    
    /* ----------------- ๋ฆฌ๋์ ------------------ */
    export default function Post_reducer(state = intialstate, action) {
      // ์๋ก์ด ์ก์ ํ์ ์ถ๊ฐ์ case ์ถ๊ฐํ๋ค.
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
    
- combineReducer์ค์ ์ key : value๋ก ์ด๋ฆ ์ง์  (์์) post: PostReducer
- ํ ํฐ์ ์ฟ ํค์ ์ ์ฅ (๋ธ๋ผ์ฐ์  storage ์ ๊ดํด์๋ ์์๋ณผ๊ฒ!)
    
    
- image์ ๊ฒฝ์ฐ imageํด๋ ์์ ํ์ํ ํ์ด์ง ํด๋๋ฅผ ๋ง๋ค์ด ๋ฃ๋๋ค.
- Page๋.js ํ์ฅ์ ์ฌ์ฉ component๋ .jsx ํ์ฅ์ ์ฌ์ฉ
- component๋ ํ์ด์ง์ ๋ฐ๋ผ์ ํด๋ ๋ถ๋ฅํ ํ ๊ทธ ํด๋ ๋ด์์ index+ํด๋๋ช ์ผ๋ก ๋ชจ์์ exportํ์ฌ ์ฌ์ฉํ๋ค.
- import์ ๊ฒฝ์ฐ ์ฌ์ฉํ์ง ์๋๊ฑด ๋ฐ๋ก ์ง์์ฃผ๊ณ  ์ข๋ฅ๋ณ๋ก ๋ฌถ์ด์ฃผ๋๊ฑธ ์์น์ผ๋ก ํ๋ค.(Page, component, hook, css,,)
- git์ ๊ฒฝ์ฐ ๊ฐ์ธ ๋ธ๋์น ์ปค๋ฐ์ ๋ง๋๋ก ๋ฉ์ธ๋ธ๋์น ๋จธ์ง์
    
    [๋ณธ์ธ์ด๋ฆ] ์ ํํ ๋จธ์ง ๋ด์ญ
    
    ์ผ๋ก ๋จธ์งํ๋ค. ์ถฉ๋ ๋ฐ์ ์ ํด๋น ํ์ด์ง ๊ด๋ฆฌ์์ ์ถฉ๋ถํ ์์ ํ ์ถฉ๋ ํด๊ฒฐํ๋ค.
    
- ๋ณด์ ์ ๋ฌธ์ ๊ฐ ๋  ์ ์๋ ๋ด์ฉ์ด ์๋ ํ์ผ์ gitignore์ ๋ฃ์ ํ ์ปค๋ฐ ๋จธ์งํ๊ธฐโญ
- ์ฌ์ฉํ์ง ์๋ ์ฝ๋๋ ์ ๋ฆฌํ๊ณ  ์ปค๋ฐ์์ ๊ฐ์ธ์ ์ธ ํ์ธ์ ์ํ console.log๋ ์ฃผ์์ฒ๋ฆฌ ํ ์ปค๋ฐํ๋ค.
- ์๋ก์ ์ฝ๋๋ฅผ ๊ฑด๋ค์ผ ๋ ๋น์ฌ์์ ์ถฉ๋ถํ ํ์ ํ์ ์ ์ฉ์ํจ๋ค (์ฌ์ํ๊ฑฐ๋ผ๋ !!)
- ๋๋ถ๋ถ์ css๋ณด๋ค๋ styled-components๋ฅผ ์ฌ์ฉํ๋ ํน์ํ ๊ฒฝ์ฐ์๋ง cssํ์ผ์ ์ฌ์ฉํ๋ค. (shared ์ cssํด๋์ ๋ฃ๋๋ค)
- Styled-Components์ ๊ฒฝ์ฐ ์์ SC๋ฅผ ๋ถ์ธ ํ ๊ด๋ จ ์ด๋ฆ์ผ๋ก ๋ค์ด๋ฐํ๋ค.


## ๐โ ํ๋ก ํธ์๋ ํ์

<table>
  <tr>
    <td align="center"><b>์ต์ํ</b></td>
    <td align="center"><b>์ด์ค์ง</b></td>
    <td align="center"><b>์์์ง</b></td>
    
  </tr>
  <tr>
    <td align="center"><b>๐คฉ Frontend ๐คฉ </b></td>
    <td align="center"><b>๐คฉ Frontend ๐คฉ </b></td>
      <td align="center"><b>๐คฉ Frontend ๐คฉ </b></td>
   
   
  </tr>
</table>

### โ ์ปค๋ฐ ์ข๋ฅ


## โ๏ธ ๊ฐ์ธ ์ญํ 

<code>์ต์ํ</code> 

<code>์ด์ค์ง</code>


<code>์์์ง</code>

## ๐จ Trouble Shooting

<br/>

### ๐ ์ฌ์ฉ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๐