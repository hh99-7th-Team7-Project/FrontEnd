import React from 'react';
import styled from 'styled-components';
import { getCookie } from '../../shared/Cookie';

const UserPhoto = () => {
  const profileImg = getCookie('profileImg');
  const [fileImage, setFileImage] = React.useState(profileImg);
  const fileInputRef = React.useRef();

  //프로필 사진 업로드
  const saveFileImage = async (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    // setProfileImage(e.target.files)
  };
  //input창 숨기고 사진 넣기
  const onClickImageUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <ScProfileImg
        style={{ backgroundImage: `url(${fileImage})` }}
      ></ScProfileImg>
    </>
  );
};

export default UserPhoto;

const ScProfileImg = styled.div`
  width: 140px;
  height: 140px;
  border: 7px #4147d5 solid;

  border-radius: 50%;
  background-size: cover;
`;
