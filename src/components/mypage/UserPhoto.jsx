import React from 'react';
import styled from 'styled-components';

const UserPhoto = ({convertImg}) => {

  return (
    <>
      <ScProfileImg
        style={{ backgroundImage: `url(${convertImg})` }}
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
