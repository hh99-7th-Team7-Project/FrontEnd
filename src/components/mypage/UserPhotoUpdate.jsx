import React from 'react';
//css
import styled from 'styled-components';

const UserPhotoUpdate = ({ setNewProfileImg, setChangeImg , convertImg }) => {

  const [fileImage, setFileImage] = React.useState(convertImg);
  const fileInputRef = React.useRef();


  //프로필 사진 업로드
  const saveFileImage = async (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    setNewProfileImg(fileInputRef?.current.files[0]);
    setChangeImg(true);
  };
  //input창 숨기고 사진 넣기
  const onClickImageUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <ScWrap>
      <ScProfileImg style={{ backgroundImage: `url(${fileImage})` }}>
        <img
          onClick={onClickImageUpload}
          src="./카메라.png"
          style={{ width: '50px' }}
          alt=""
        />
      </ScProfileImg>
      <input
        name="imgUpload"
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={saveFileImage}
        style={{ display: 'none' }}
      />
    </ScWrap>
  );
};

export default UserPhotoUpdate;

const ScWrap = styled.div`
  @media screen and (max-width: 768px){
    margin: auto;
    width: 100%;
  }
`;

const ScProfileImg = styled.div`
  width: 140px;
  height: 140px;
  border: 7px #4147d5 solid;
  border-radius: 50%;
  background-size: cover;  
`;
