import React from 'react'
import styled from "styled-components";
import { getCookie } from '../../shared/Cookie';

const UserPhotoUpdate = ({setNewProfileImg,setChangeImg}) => {
  const profileImg = getCookie("profileImg")
  const [fileImage, setFileImage] = React.useState(profileImg);
  const fileInputRef = React.useRef();
  // console.log(fileInputRef?.current.files[0])
  
  //프로필 사진 업로드
  const saveFileImage = async (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    setNewProfileImg(fileInputRef?.current.files[0])
    setChangeImg(true)
    // setProfileImage(e.target.files)
  };
//input창 숨기고 사진 넣기
  const onClickImageUpload = () => {
    fileInputRef.current.click();
  };

  return (<div>
    <ScProfileImg style={{ backgroundImage:`url(${fileImage})`}}>
            <img onClick={onClickImageUpload} src="./카메라.png" style={{width:"50px"}} alt="" />  
            </ScProfileImg>
            <input
              name="imgUpload"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={saveFileImage}
              style={{ display: "none" }}
            />
            </div>
  )
}

export default UserPhotoUpdate

const ScProfileImg =styled.div`
width: 140px;
height: 140px; 
border: 7px #4147D5 solid;
border-radius:50% ; 
background-size:cover;
`