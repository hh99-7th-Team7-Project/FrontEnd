import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import apis from "../shared/api/main";
import styled from "styled-components";
import axios from 'axios';


const SignUp = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");
  const [Nickname, setNickname] = useState("");
  const [fileImage, setFileImage] = React.useState("");
  const [ProfileImage, setProfileImage] = React.useState([])

  const fileInputRef = React.useRef();
  const passwordRef = React.useRef();
  const password2Ref = React.useRef();
  const emailRef = React.useRef();
  const nicknameRef = React.useRef();
  const check = React.useRef();
  const [okid, setOkid] = React.useState(false);
  const [oknickname, setokNickname] = React.useState(false);


  console.log(fileImage)
  // 이메일 중복 체크
  const dupEmail = async () => {
    if (!idCheck(Email)) {
      window.alert("이메일 형식이 아닙니다")
    } else {
      await apis.checkEmail({ username: Email })
        .then((res) => {
          console.log(res)
          if (res.data) {
            window.alert("사용가능한 메일 입니다.");
            setOkid(true);
          } else {
            window.alert("이미 사용중인 메일입니다.");
          }
        })
        .catch((error) => {

          // console.log("Login Error", error);
        });
    }

  };

  // 닉네임 중복 체크
  const dupNick = async () => {
    if (!nickCheck(Nickname)) {
      window.alert("올바른 닉네임 형식을 작성해주세요")
    } else {
      await apis.checkNickName({ nickname: Nickname })
        .then((res) => {
          if (res.data) {
            window.alert("사용가능한 닉네임 입니다.");
            setokNickname(true);
          } else {
            window.alert("이미 사용중인 닉네임입니다.");
          }
        })
    }
  };

  if (Password && Password2 && Password === Password2) {
    check.current.innerText = "✔";
  } else if (Password !== Password2) {
    check.current.innerText = "✖ 비밀번호가 일치하지 않습니다";
  }

  //아이디,비번,닉네임 정규식
  const idCheck = (email) => {
    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
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
    if (!pwCheck(Password, Password2)) {
      window.alert("숫자 및 영어만 입력가능합니다.");
      return;
    }
    if (Password !== Password2) {
      window.alert("비밀번호 불일치 : 고새 까먹었어?");
      return;
    }
    if (!(okid && oknickname)) {
      window.alert("중복체크를 모두 해주세요!")
    } else {
      const form = new FormData();
      const datas = {
        username: emailRef.current.value,
        nickname: nicknameRef.current.value,
        password: passwordRef.current.value,
      }
      form.append("signup", new Blob([JSON.stringify(datas)], {
        type: "application/json"
      }))
      form.append('profileImage', fileInputRef.current.files[0])
      console.log(form)

      const res = await apis.addUser(form);
      // console.log(res);
      // alert(res.data.body.message);
      navigate("/login")
    }
    // console.log(ProfileImage[0])
  };
  //프로필 사진 업로드
  const saveFileImage = async (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    // setProfileImage(e.target.files)
  };

  // console.log(ProfileImage)

  return (
    <div>
      <section>
        <main>
          <div style={{ marginTop: "30px" }}>
            <ScWrap>
              <ScInputbox
                type="email"
                placeholder="Email"
                ref={emailRef}
                value={Email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                style={{ marginRight: "10px" }}
              />
              <ScDuplicateButton onClick={dupEmail}>중복확인</ScDuplicateButton>
            </ScWrap>
            <ScCondition>E-mail주소를 입력해 주세요</ScCondition>
            <br />
            <ScWrap>
              <ScInputbox
                type="text"
                placeholder="Nickname"
                ref={nicknameRef}
                value={Nickname}
                onChange={(event) => {
                  setNickname(event.target.value);
                }}
                style={{ marginRight: "10px" }}
              />
              <ScDuplicateButton onClick={dupNick}>중복확인</ScDuplicateButton>
            </ScWrap>
            <ScCondition>당신이 불리고 싶은 이름을 입력해주세요</ScCondition>
            <br />
            <ScInputbox
              type="password"
              placeholder="Password"
              value={Password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              ref={passwordRef}
              style={{ marginRight: "110px" }}
            />
            <ScCondition>비밀번호는 8자 이상 영문과 숫자로만 만들어 주세요</ScCondition>
            <br />

            <ScInputbox
              type="password"
              placeholder="Password check"
              value={Password2}
              onChange={(event) => {
                setPassword2(event.target.value);
              }}
              ref={password2Ref}
              style={{ marginRight: "110px" }}
            />
            <div ref={check} />
            <ScCondition>비밀번호를 다시 입력해주세요</ScCondition>
            <br />
            <h5 style={{ marginLeft: "70px" }}>프로필 사진</h5>
            {fileImage && (
              <img
                alt="sample"
                src={fileImage}
                style={{ margin: "10px auto 7px 80px", maxWidth: "300px", maxHeight: "250px" }}
                multiple="multiple"
              />)}
            <ScInputbox
              name="imgUpload"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={saveFileImage}
            />
            <ScLoginButton onClick={onSubmitUserHandler}>가입하기</ScLoginButton>
          </div>
        </main>
      </section>
    </div>

  );
};

const ScInputbox = styled.input`
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

const ScDuplicateButton = styled.div`
  background-color: rgb(74,21,75);
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 12px;
  margin: 0 30px 0 0;
  cursor: pointer;
`

const ScWrap = styled.div`
  display: flex;
`
const ScLoginButton = styled.button`
padding: 7px 10px;
display: flex;
margin: 20px  auto 8px auto;
width: 80px;
justify-content: center;
background-color: rgb(74,21,75);

color: white;
border-radius: 5px;

`

const ScCondition = styled.h6`
  margin: 6px 0 10px 78px;
  text-align: left;

`
export default SignUp;