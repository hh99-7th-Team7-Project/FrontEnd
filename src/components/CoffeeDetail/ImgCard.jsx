import React, { useState } from 'react';
import styled from 'styled-components';
import apis from '../../shared/api/main';
import svg from './svg/BookMark.svg';


const ImgCard = ( {url, item,like,setLike} ) => {

  const likeCoffee =async()=>{
    await apis.likeCoffee(item?.brand,item?.id)
              .then((res)=>{
                  if(item?.love===0){
                    setLike(1)
                  }else{
                    setLike(0)
                  }
                 })
  }


  return (
    <>
        <div>
          <ScBrandTitle>
            <ScH3>{item?.brand}</ScH3>
          </ScBrandTitle>
          <ScCoffeeTitle>
            {like===0?(<div onClick={likeCoffee}>저장스</div>):( <ScImgBookMark onClick={likeCoffee} src={svg} alt=""/>)}
            <ScH1>{item?.name}</ScH1>
          </ScCoffeeTitle>
          <ScSubTitle>
            <ScH4>{item?.category}</ScH4>
          </ScSubTitle>
        </div>
        <ScImgWrap>            
            <ScImg src={url}/>
        </ScImgWrap>
    </>
  )
}

const ScBrandTitle = styled.div`
  border: 2px solid black;
  width: 117px;
  height: 43px;
  left: 103px;
  margin: 10px auto;
  border-radius: 100px;
  padding: 8px, 20px, 8px, 20px;
  gap: 10px;
`;



const ScH3 = styled.h3`
  text-align: center;
  margin: 10px auto;
`;

const ScCoffeeTitle = styled.div`  
  margin: auto;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

`;

const ScImgBookMark = styled.img`
  margin: auto;
  width: 30px;

`;

const ScH1 = styled.h1`
    width: 500px;
    padding: 20px auto;
    margin: 20px auto;
    line-height: 70px;
`;

const ScSubTitle = styled.div`
  width: 80px;
  margin: auto;
  
`;

const ScH4 = styled.h4`
    color: gray;
    width: 80px;    
    padding-left: 20px;
    
    
`;

const ScImgWrap = styled.div`    
    width: 500px;
    height: 500px;    
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ScImg = styled.img`
    width: 500px;
    height: 500px;
`;

export default ImgCard