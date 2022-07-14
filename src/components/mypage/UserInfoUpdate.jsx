import React from 'react'
import apis from '../../shared/api/main';
import { getCookie } from '../../shared/Cookie'

const UserInfoUpdate = ({setNick}) => {
  const userName = getCookie("nickname")
  const nickInputRef = React.useRef(userName);
  const [oknickname, setokNickname] = React.useState(false);
  const [condition, setCondition] =React.useState("값이 나오나")

  console.log(condition)

  const nickCheck = (nick) => {
    let regExp = /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣!@#$%^&*]{2,10}/;
    //모두가능 2자에서10자
    return regExp.test(nick);
  };

  // const nickck = async()=>{
  //      await apis.checkNickName({ nickname: nickInputRef?.current?.value })
  //       .then((res) => {
  //         if (res.data) {
  //           setCondition("사용가능한 닉네임 입니다.");
  //           setokNickname(true);
  //         } else {
  //           setCondition("이미 사용중인 닉네임입니다.");
  //         }
  //       })
  //   }

  // if(userName!==nickInputRef?.current?.value){
  //   if (!nickCheck(nickInputRef?.current?.value)) {
  //     setCondition("올바른 닉네임 형식을 작성해주세요")
  //   } else {
  //    nickck()
  //   }
  // }


  return (
    <div>
      <input 
        ref={nickInputRef}
        defaultValue={userName}
        onChange={()=>{
          setNick(nickInputRef.current.value)
        }}
        />
    <div>{condition}</div>
    </div>
  )
}

export default UserInfoUpdate