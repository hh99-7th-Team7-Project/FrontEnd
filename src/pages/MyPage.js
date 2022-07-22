import React, { useEffect, useState } from 'react'
import { deleteCookie, getCookie, setCookie } from '../shared/Cookie'
import Header from './Header/Header'
import  {UserBoardBoard, UserBoardWrite, UserInfo, UserPhoto, UserBoardCoffee, UserInfoUpdate, UserPhotoUpdate} from '../components/mypage/index'
import styled from 'styled-components'
import apis from '../shared/api/main'

const MyPage = () => {
  const userId = getCookie("userId")//아직설정안해쓰
  const nickOrigin = getCookie("nickname")
  const profileOrigin = getCookie("profileImg")
  const [menu, setMenu] = useState(1)
  const [update,setUpdate] = useState(false)
  const [nick,setNick] = useState(nickOrigin)
  const [email, setEmail] = useState()
  const [newProfileImg, setNewProfileImg] =useState(null)
  const [convertImg, setConvertImg] = useState(profileOrigin)
  const[changeImg,setChangeImg]=useState(false)
  const [condition, setCondition] = useState("")
  
  console.log(changeImg)

  useEffect(()=>{
    const profile =async()=>{
        await apis.getMypage(userId)
                  .then((res)=>{
                    console.log(res)
                    setEmail(res.data.username)
                  })
      }
      profile()
  },[setUpdate])

  console.log(nick)
  console.log(newProfileImg)

  const updateProfile = async(e)=>{
    e.preventDefault();
    //formdata로 이미지 변환
    const form = new FormData();
    form.append('imgUrl', newProfileImg)
    console.log(form)
    //만약 이미지값이 변경 되었다면 이미지 변환성공하면 그 url값 받아서 수정정보에 넣어서 보내줌 put
    if(changeImg){
      const update = await apis.postImg(form)
              .then((res)=>{
                 setConvertImg(res?.data.img) 
                const data = {nickname: nick, profileImage: res?.data.img} 
                const update2 = apis.updateMypage(userId, data)
                              .then((response)=>{
                                  deleteCookie("nickname")
                                  deleteCookie("profileImg")
                                  setCookie("nickname",nick)
                                  setCookie("profileImg", res?.data.img)
                                  setUpdate(false)
                              })
                              .catch((err)=>{
                                setCondition(err.response.data.message)
                              })
                 
              })
              .catch((err)=>{
                setCondition("알 수 없는 에러가 발생했습니다. 다시 시도 해주세요")

              }) 
                   }
    else{
            const data = {nickname: nick, profileImage: profileOrigin} 
            const update2 = apis.updateMypage(userId, data)
                      .then((response)=>{
                          deleteCookie("nickname")
                          setCookie("nickname",nick)
                          setUpdate(false)
                      })
                      .catch((err)=>{
                        setCondition(err.response.data.message)
                      })
    }
      
                                        }

  return (
    <>
        <div style={{margin:"auto"}}>
          <Header />
        </div>
    <ScsecondHead/>
    {update?(

    <ScMyprofile>
      <UserPhotoUpdate setNewProfileImg={setNewProfileImg} setChangeImg={setChangeImg}/>
      <UserInfoUpdate setNick={setNick} />
      <div>{condition}</div>
        <div>
        <button onClick={updateProfile}>수정완료</button>
       <button onClick={()=>{setUpdate(false)}}>취소하기</button>
       </div>
      </ScMyprofile>):
      (<ScWrap>
      <ScMyprofile>
      <UserPhoto/>
      <UserInfo email={email}/>
      <button onClick={()=>{setUpdate(true)}}>수정하러가기</button>
      <ScMywrite> <button onClick={()=>{setMenu(3)}}>내가쓴글</button></ScMywrite>
      <ScChat></ScChat>
      </ScMyprofile>
      <ScBookmark>
      <div>북마크</div>
      <div>
        <div style={{ display:"flex", gap:"10px"}}>
        <ScBookmarkCategory onClick={()=>{setMenu(1)}}>음료</ScBookmarkCategory>
        <div style={{border:"1px solid black"}}></div>
        <ScBookmarkCategory onClick={()=>{setMenu(2)}}>게시판</ScBookmarkCategory>
        </div>
        {(menu===1)&&<UserBoardCoffee/>}    
        {(menu===2)&&<UserBoardBoard/>}
        {(menu===3)&&<UserBoardWrite/>}
      </div>
      </ScBookmark>
    </ScWrap>
    )}
    </>
  )
}

export default MyPage

const ScsecondHead =styled.div`
height: 135px;
background-color: #ddd;

`

const ScMyprofile = styled.div`
display: flex;
flex-direction: row;
gap: 30px;
//justify-contents
align-items: center;
margin: 50px auto 0 auto;
`

const ScBookmark =styled.div`
font-size: 24px;
`
const ScBookmarkCategory =styled.div`
font-size: 22px;
cursor: pointer;
`
const ScWrap = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`

const ScMywrite = styled.div`
width: 277px;
height: 214px;
background-color: #EDE2F2;
border-radius: 10px;
`

const ScChat = styled.div`
width: 277px;
height: 214px;
background-color: #FEEEF4;
border-radius: 10px;
`