import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import apis from "../shared/api/main";
import styled from "styled-components";


const SignUp = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");
  const [Nickname, setNickname] = useState("");
  const [fileImage, setFileImage] = React.useState("");
  const [ProfileImage,setProfileImage] = React.useState([])

  const fileInputRef = React.useRef();
  const passwordRef = React.useRef();
  const password2Ref = React.useRef();
  const emailRef = React.useRef();
  const nicknameRef = React.useRef();
  const check = React.useRef();
  const [okid, setOkid] = React.useState('false');
  const [oknickname, setokNickname] = React.useState('false');

  // 이메일 중복 체크
  const dupEmail = async () => {
    await apis.checkEmail({ username: Email })
      .then((res) => {
        window.alert("사용가능한 아이디 입니다.");
        setOkid(true);
      })
      .catch((error) => {
        window.alert("이미 사용중인 아이디입니다.");
        // console.log("Login Error", error);
      });
  };

  // 닉네임 중복 체크
  const dupNick = async () => {
    await apis.checkNickName({ nickname: Nickname })
      .then((res) => {
        window.alert("사용가능한 닉네임 입니다.");
        setokNickname(true);
      })
      .catch((error) => {
        window.alert("이미 사용중인 닉네임입니다.");
        // console.log("Login Error", error);
      });
  };

  if (Password && Password2 && Password === Password2) {
    check.current.innerText = "✔";
  } else if (Password !== Password2) {
    check.current.innerText = "✖";
  }

  //아이디,비번,닉네임 정규식
  const idCheck = (email) => {
    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // 대문자 포함
    return regExp.test(email);
  };
  const pwCheck = (email) => {
    let regExp = /^[0-9a-zA-Z]{6,}$/;
    // 대문자 포함
    return regExp.test(email);
  };
  const nickCheck = (nick) => {
    let regExp = /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣!@#$%^&*]/;
    return regExp.test(nick);
  };

  //submit handler
  const onSubmitUserHandler = async (event) => {
    event.preventDefault();
    if (
      Email === "" ||
      Password === "" ||
      Password2 === "" ||
      Nickname === "" ||
      fileImage === ""
    ) {
      window.alert("아이디,비밀번호,닉네임을 모두 입력해주세요!");
      return;
    }
    if (!idCheck(Email)) {
      window.alert("형식을 지켜주세요.");
      return;
    }
    if (!pwCheck(Password, Password2)) {
      window.alert("숫자 및 영어만 입력가능합니다.");
      return;
    }
    if (Password !== Password2) {
      window.alert("비밀번호 불일치 : 고새 까먹었어?");
      return;
    }
    if (!nickCheck(Nickname)) {
      window.alert("올바른 닉네임 형식을 작성해주세요");
      return;
    }
    if (!(okid && oknickname)) {
      window.alert("중복체크를 모두 해주세요!")
    }


    const form = new FormData();
    form.append('userProfileImage', ProfileImage)
    form.append('username', emailRef.current.value)
    form.append('nickname', nicknameRef.current.value)
    form.append('password', passwordRef.current.value)
    form.append('passwordck', password2Ref.current.value)
    const res = await apis.addUser({
      form
    });
    // console.log(res);
    // alert(res.data.body.message);
    navigate("/login")
  };
  //프로필 사진 업로드
  const saveFileImage = async (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    setProfileImage(e.target.files)
  };

console.log(ProfileImage)

  return (
    <div>
      <section>
        <main>
          <form onSubmit={onSubmitUserHandler} style={{ marginTop: "30px" }}>
            <Wrap>
              <Inputbox
                type="text"
                placeholder="Email"
                ref={emailRef}
                value={Email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                style={{ marginRight: "10px" }}
              />
              <DupliButton onClick={dupEmail}>중복확인</DupliButton>
            </Wrap>
            <Condition>E-mail주소를 입력해 주세요</Condition>
            <br />
            <Wrap>
              <Inputbox
                type="text"
                placeholder="Nickname"
                ref={nicknameRef}
                value={Nickname}
                onChange={(event) => {
                  setNickname(event.target.value);
                }}
                style={{ marginRight: "10px" }}
              />
              <DupliButton onClick={dupNick}>중복확인</DupliButton>
            </Wrap>
            <Condition>당신이 불리고 싶은 이름을 입력해주세요</Condition>
            <br />
            <Inputbox
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              ref={passwordRef}
              style={{ marginRight: "110px" }}
            />
            <Condition>비밀번호는 8자 이상 영문과 숫자로만 만들어 주세요</Condition>
            <br />

            <Inputbox
              type="password"
              placeholder="Password check"
              value={Password2}
              onChange={(event) => {
                setPassword2(event.target.value);
              }}
              ref={password2Ref}
              style={{ marginRight: "110px" }}
            />
           <p ref={check} />
            <Condition>비밀번호를 다시 입력해주세요</Condition>
            <br />
            <h5 style={{ marginLeft: "70px" }}>프로필 사진</h5>
            {fileImage && (
              <img
                alt="sample"
                src={fileImage}
                style={{ margin: "10px auto 7px 80px", maxWidth: "300px", maxHeight: "250px" }}
              />)}
            {fileImage ? (null) : (<Inputbox
              name="imgUpload"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={saveFileImage}
            />)}
            <LoginButton onClick={onSubmitUserHandler}>가입하기</LoginButton>
            {/* {okid === true && oknickname === true ? (<LoginButton onClick={onSubmitUserHandler}>가입하기</LoginButton>) : null} */}
          </form>
        </main>
      </section>
    </div>

  );
};

const Inputbox = styled.input`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 55%;
  margin: auto;
  height: 35px;
  border: none;
  border-bottom: solid rgb(74,21,75) 1px ;
  color: rgb(74,21,75);
`

const DupliButton = styled.button`
  background-color: rgb(74,21,75);
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 12px;
  margin: 0 30px 0 0;
`

const Wrap = styled.div`
  display: flex;
`
const LoginButton = styled.button`
padding: 7px 10px;
display: flex;
margin: 20px  auto 8px auto;
width: 80px;
justify-content: center;
background-color: rgb(74,21,75);

color: white;
border-radius: 5px;

`

const Condition = styled.h6`
  margin: 6px 0 10px 78px;
  text-align: left;

`
export default SignUp;