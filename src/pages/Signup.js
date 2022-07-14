import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import apis from "../shared/api/main";
import styled from "styled-components";
import { motion } from "framer-motion"
import unchecked from '../shared/svg/Unchecked.svg'
import checked from '../shared/svg/Checked.svg'

const SignUp = (props) => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");
  const [Nickname, setNickname] = useState("");
  const [fileImage, setFileImage] = React.useState("/프로필.PNG");
  const [ProfileImage, setProfileImage] = React.useState([])
  const [Selected, setSelected] = useState("");
  const fileInputRef = React.useRef("/프로필.PNG");
  const passwordRef = React.useRef();
  const password2Ref = React.useRef();
  const emailRef = React.useRef();
  const emailSelect =React.useRef();
  const nicknameRef = React.useRef();
  const check = React.useRef();
  const [okid, setOkid] = React.useState(false);
  const [oknickname, setokNickname] = React.useState(false);
  const [alert,setAlert] =React.useState("이거 만족 못했어")
  const [emailCheck, setEmailCheck] = React.useState(true)
  const [nicknameCheck, setNicknameCheck] = React.useState(true)
  const [samePw, setSamePw] = React.useState(true)

  // 이메일 중복 체크
  const dupEmail = async () => {
    if (!idCheck(Email+Selected)) {
      setAlert("이메일 형식이 아닙니다")
    } else {
      await apis.checkEmail({ username: Email+Selected })
                .then((res) => {
                    setOkid(true);
                    setEmailCheck(false)
                })
                .catch((error) => {
                    setAlert("이미 사용중인 메일입니다.");
                    setEmailCheck(true)
                });
    }

  };
console.log(Email+Selected)
  // 닉네임 중복 체크
  const dupNick = async () => {
    if (!nickCheck(Nickname)) {
      setAlert("올바른 닉네임 형식을 작성해주세요")
    } else {
      await apis.checkNickName({ nickname: Nickname })
        .then((res) => {
           setNicknameCheck(false)
            setokNickname(true);
          })
          .catch((err)=>{
            setAlert("이미 사용중인 닉네임입니다.");
            setokNickname(false)
          })
    }
  };
console.log(samePw) 
  useEffect(()=>{
    if (Password && Password2 && Password === Password2) {
        setSamePw(false)
        check.current.innerText = "✔"; 
      } 
  },[setSamePw,check,password2Ref])
  // if (Password && Password2 && Password === Password2) {
  //   setSamePw(false) 
  //   check.current.innerText = "✔";
  // } else if (Password !== Password2) {
  //   // setSamePw(true)
  //   check.current.innerText = "✖ 비밀번호가 일치하지 않습니다";
  // }

  //아이디,비번,닉네임 정규식
  const idCheck = (email) => {
    let regExp = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\w+\.)+\w+$/;
    // ^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\w+\.)+\w+$
    // 대문자 포함
    return regExp.test(email);
  };
  const pwCheck = (email) => {
    let regExp = /^[0-9a-zA-Z]{6,}$/;
    //(?=.*[A-Za-z0-9])(?=.*\\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\\d~!@#$%^&*()+|=]{8,20}
    // 대문자 포함 영어필수 숫자필수 특문 필수 8-20글자
    return regExp.test(email);
  };
  const nickCheck = (nick) => {
    let regExp = /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣!@#$%^&*]{2,8}/;
    //모두가능 2자에서10자
    return regExp.test(nick);
  };

  //submit handler
  const onSubmitUserHandler = async (event) => {
    event.preventDefault();
    if (
      Email === "" ||
      Password === "" ||
      Password2 === "" ||
      Nickname === ""
      //  ||
      // fileImage === ""
    ) {
      setAlert("아이디,비밀번호,닉네임을 모두 입력해주세요!");
      return;
    }
    if (!pwCheck(Password, Password2)) {
      setAlert("비밀번호는 숫자 및 영어만 입력가능합니다.");
      return;
    }
    if (Password !== Password2) {
      setAlert("비밀번호 불일치");
      return;
    }
    if (!(okid && oknickname)) {
      setAlert("중복체크를 모두 해주세요!")
    } else {
      const form = new FormData();
      //사진이 들어가지 않았을 때와 들어갔을 때 구분해서 보내줌
      const datas = {
        username: emailRef.current.value+Selected,
        nickname: nicknameRef.current.value,
        password: passwordRef.current.value,
      }
      const data = {
        username: emailRef.current.value+Selected,
        nickname: nicknameRef.current.value,
        password: passwordRef.current.value,
        profileImage: null
      }
      form.append("signup", new Blob([JSON.stringify(datas)], {
        type: "application/json"
      }))
      form.append('profileImage', fileInputRef.current.files[0])
      // console.log(fileInputRef.current.files[0].name)
      if(fileInputRef.current.files?.length===0){
        const response = await apis.addUserWO(data)
      }else{
        const res = await apis.addUser(form);
      }
      
      navigate("/login")
    }

  };
  //프로필 사진 업로드
  const saveFileImage = async (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    // setProfileImage(e.target.files)
  };
//input창 숨기고 사진 넣기
  const onClickImageUpload = () => {
    fileInputRef.current.click();
  };
  //이메일 셀렉트 박스 값 집어넣기
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <ScWrap2>
          <ScSignupWrap>
            <div>{alert}</div>
            <ScProfileImg style={{ backgroundImage:`url(${fileImage})`}}>
            <img onClick={onClickImageUpload} src="./카메라.png" style={{width:"50px"}} alt=""/>  
            </ScProfileImg>
            <input
              name="imgUpload"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={saveFileImage}
              style={{ display: "none" }}
            />

            <ScInputWrap>
            <ScWrap>
              <input
                type="email"
                placeholder="Email"
           
                ref={emailRef}
                value={Email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                style={{width:"160px"}}
              />
              <h1 style={{width:"50px", textAlign:"center", fontSize:"23px"}}>@</h1>

              <ScSelect onChange={handleSelect} value={Selected}>
                <option value="email">--Email--</option>
                <option value="@naver.com" >naver.com</option>
                <option value="@hanmail.net">hanmail.net</option>
                <option value="@hotmail.com">hotmail.com</option>
                <option value="@nate.com">nate.com</option>
                <option value="@korea.com">korea.com</option>
                <option value="@gmail.com">gmail.com</option>
              </ScSelect>
              
              <ScDuplicateButton onClick={dupEmail}>중복검사</ScDuplicateButton>
            {emailCheck?<ScCheck src={unchecked} alt=""/>:<ScCheck src={checked} alt=""/>}  
            </ScWrap>
            {/* <ScCondition>E-mail주소를 입력해 주세요</ScCondition> */}
            <br />
            <ScWrap>
              <input
                type="text"
                placeholder="Nickname"
                ref={nicknameRef}
                value={Nickname}
                maxLength={8}
                onChange={(event) => {
                  setNickname(event.target.value);
                }}
                style={{  width:"362px" }}
              />
              <ScDuplicateButton onClick={dupNick}>중복검사</ScDuplicateButton>
              {nicknameCheck?<ScCheck src={unchecked} alt=""/>:<ScCheck src={checked} alt=""/>} 
            </ScWrap>
            <ScCondition>2자 이상 8자 이하의 닉네임을 작성해 주세요.</ScCondition>
              <ScWrap>
              <input
                type="password"
                placeholder="Password"
                value={Password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                ref={passwordRef}
              />
              {samePw?<ScCheck src={unchecked} alt=""/>:<ScCheck src={checked} alt=""/>} 
              </ScWrap>
              <ScCondition>비밀번호는 8자 이상 영문과 숫자로만 만들어 주세요(영문, 숫자 필수 포함)</ScCondition>
        
              <ScWrap>
              <input
              type="password"
              placeholder="Password check"
              value={Password2}
              onChange={(event) => {
                setPassword2(event.target.value);
              }}
              ref={password2Ref}
              />
              {samePw?<ScCheck src={unchecked} alt=""/>:<ScCheck src={checked} alt=""/>} 
              </ScWrap>
            <div ref={check} />
            <ScCondition>비밀번호를 다시 입력해주세요</ScCondition>
            <br />
            </ScInputWrap>
            <ScLoginButton onClick={onSubmitUserHandler}>가입하기</ScLoginButton>
          </ScSignupWrap>
          <ScImageBox/>
      </ScWrap2>
    </motion.div>

  );
};

const ScWrap2= styled.div`
display: flex;
width: 100%;
`
const ScCheck = styled.img`
margin-left: 10px;
`

const ScImageBox = styled.div`
flex: 4;
height: 100vh;
width: 100vh;
background: url('https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/d818028e-d92a-4077-b35e-41f3c945e4a9.jpeg') center center no-repeat;
background-size:cover;
`

const ScSignupWrap = styled.div`
flex: 6;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
`
const ScProfileImg =styled.div`
 width: 130px;
 height: 130px; 
 border:1px #ddd solid;
 border-radius:50% ; 
background-size:cover;
margin-bottom: 40px;
`


const ScSelect = styled.select`
width:148px;
border-radius:10px;
height:60px;
padding-left: 10px;
option{
  background-color: #2C278C; 
  color: white;
  font-size:15px;
  padding: 3px;
}
`

const ScInputWrap =styled.div`
display: flex;
flex-direction: column;
input{
  padding-left: 20px ;
  width: 462px;
  height: 60px;
  border-radius: 10px;
  /* margin: 8px 0; */
  border: 1px #ddd solid;
  background-color: rgb(233, 230, 230);
  &::placeholder{
    color: gray;
  }
}
`

const ScDuplicateButton = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  background-color: black;
  color: white;
  width: 94px;
  height: 60px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
  /* margin: 0 30px 0 0; */
  cursor: pointer;
`

const ScWrap = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`

// const ScButtonWrap =styled.div`
// display: flex;
// flex-direction: column;
// margin-top: 50px;
// button{
// width: 482px;
// height: 60px;
// border-radius: 10px;
// text-align: center;
// cursor: pointer;
// margin: 5px 0;
// border: none;
// }
// `
const ScLoginButton = styled.button`
width: 482px;
height: 60px;
border-radius: 10px;
text-align: center;
cursor: pointer;
margin: 5px 0;
border: none;
color: white;
background-color: gray;
`

const ScCondition = styled.div`
  font-size: 8pt;
`
export default SignUp;