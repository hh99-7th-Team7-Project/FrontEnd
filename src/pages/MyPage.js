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
        console.log(err)
      })
                 
              })
              .catch((err)=>{
                console.log(err)
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
                        console.log(err)
                      })
    }
      
                                        }

  return (
    <>
        <div style={{margin:"auto"}}>
          <Header />
        </div>
    <div style={{margin:"auto"}}>
    {update?(<ScMyprofile>
      <UserPhotoUpdate setNewProfileImg={setNewProfileImg} setChangeImg={setChangeImg}/>
      <UserInfoUpdate setNick={setNick} />
        <button onClick={updateProfile}>수정완료</button>
       <button onClick={()=>{setUpdate(false)}}>취소하기</button>
      </ScMyprofile>):
      (<>
      <ScMyprofile>
      <UserPhoto/>
      <UserInfo email={email}/>
      <button onClick={()=>{setUpdate(true)}}>수정하러가기</button>
    </ScMyprofile>
     <button onClick={()=>{setMenu(1)}}>커피</button>
    <button onClick={()=>{setMenu(2)}}>게시판</button>
    <button onClick={()=>{setMenu(3)}}>내가쓴글</button>
    {(menu===1)&&<UserBoardCoffee/>}    
    {(menu===2)&&<UserBoardBoard/>}
    {(menu===3)&&<UserBoardWrite/>}
    </>
    )}
    </div>
   
    
    
 
    </>
  )
}

export default MyPage

const ScMyprofile = styled.div`
display: flex;
flex-direction: row;
//justify-contents
align-items: center;
`