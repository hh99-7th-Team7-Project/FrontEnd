import React, { useState } from 'react';
import styled from 'styled-components';
import apis from '../../shared/api/main';
import svg from './svg/BookMark.svg';
import { bookmark, bookmarkck } from '../../shared/svg/A-index';
import { getCookie } from '../../shared/Cookie';
import Swal from 'sweetalert2';

const ImgCard = ({ url, item, like, setLike }) => {
  // console.log(item);

const token = getCookie("token")

  const likeCoffee = async () => {
    if(token){
       await apis.likeCoffee(item?.brand, item?.id).then((res) => {
      // console.log(res.data);
      setLike(res.data);
    });
    }else{
      Swal.fire({
        title: '로그인 후 이용 가능한 서비스입니다!',
        icon: 'warning',
        confirmButtonText: '확인',
      });
    }
   
  };

  return (
    <>
      <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <ScBrandTitle>
          <ScH3>{item?.brand}</ScH3>
        </ScBrandTitle>
        <ScCoffeeTitle>
          {item?.loveCheck ? (
            <ScImgBookMark
              onClick={likeCoffee}
              src={bookmarkck}
              alt=""
              style={{ width: '39px' }}
            />
          ) : (
            <ScImgBookMark
              onClick={likeCoffee}
              src={bookmark}
              alt=""
              style={{ width: '50px' }}
            />
          )}

          <ScH1>{item?.name}</ScH1>
        </ScCoffeeTitle>
        <ScSubTitle>
          <ScH4>{item?.category}</ScH4>
        </ScSubTitle>
      </div>
      <ScImgWrap>
            {item?.brand === "더벤티" || item?.brand === "컴포즈" || item?.brand === "엔제리너스" ||item?.brand === "빽다방"? <ScImgVenti src={url} /> : <ScImg src={url} /> }
      </ScImgWrap>

    </>
  );
};

const ScBrandTitle = styled.div`
  border: 2px solid black;
  width: 117px;
  height: 43px;
  left: 103px;
  margin: 10px auto;
  border-radius: 100px;
  padding: 8px, 20px, 8px, 20px;
  gap: 10px;
  @media screen and (max-width: 768px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 33px;
    border: 1px solid black;
  }
`;

const ScH3 = styled.div`
  text-align: center;
  margin: 10px auto;  
  
`;

const ScCoffeeTitle = styled.div`
  margin: auto;
  position: relative;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.75em;
  transform: translateX(-5%);
  @media screen and (max-width: 768px){
    /* border: 1px red solid; */
    width: 90%;
    margin: auto;
    transform: translateX(0%);
  }
`;

const ScImgBookMark = styled.img`
  margin: auto;
  width: 30px;
  @media screen and (max-width: 768px){
    /* border: 1px red solid; */
    /* width: 5px; */
    height: 25px;
    position: absolute;
    top: 13px;
    left: 16px;

  }
`;

const ScH1 = styled.div`
  width: 500px;
  padding: 20px auto;
  margin: 20px auto;
  line-height: 70px;
  text-align: center;
  @media screen and (max-width: 768px){
    /* border: 1px red solid; */
    width: 60%;
    padding:0;
    margin: 0px auto;
    line-height: 50px;
  }
`;

const ScSubTitle = styled.div`
  width: 80px;
  margin: auto;
`;

const ScH4 = styled.div`
  color: gray;
  width: 80px;
  text-align: center;
  
`;

const ScImgWrap = styled.div`
  width: 500px;
  height: 500px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px){
    /* display: flex; */
    /* flex-direction: column; */
    /* margin: auto; */
    /* border: 1px red solid; */
    height: 400px;
    width: 100%;
  }
`;

const ScImgVenti = styled.img`
  width: 300px;
  height: 400px;
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width:100%;
    width: 200px;
    height: 300px;
  }
`;

const ScImg = styled.img`
  width: 500px;
  height: 500px;
`;


export default ImgCard;
