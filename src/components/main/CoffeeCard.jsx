import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StarFilled, StarUnfilled } from '../../shared/svg/A-index';
import Lens from './svg/Lens.svg';



const CoffeeCard = ({item}) => {

const navigate = useNavigate()
// console.log(item.pricePair)
const pricePair = item.pricePair
// console.log(pricePair)
const [brandLogo, setBrandLogo] = useState()


const moveOnclick = () => {
navigate(`/coffee/${item?.brand}/${item?.name}/${item?.id}`)
}

useEffect(()=>{
switch(item?.brand){
      case "스타벅스":
        return setBrandLogo("/brandlogo/스타벅스.png")
      case "할리스":
        return setBrandLogo("/brandlogo/할리스.jpg")
      case "엔제리너스" : 
      return setBrandLogo("/brandlogo/엔제리너스.png")
        case "이디야" : 
        return setBrandLogo("/brandlogo/이디야.png")
        case "커피빈" : 
        return setBrandLogo("/brandlogo/커피빈.png")
        case "더벤티" : 
        return setBrandLogo("/brandlogo/더벤티.png")
        case "드롭탑" :
        return setBrandLogo("/brandlogo/드롭탑.png")
          case "컴포즈" :
        return setBrandLogo("/brandlogo/컴포즈.png")
          case "탐앤탐스" :
        return setBrandLogo("/brandlogo/탐앤탐스.png")
          case "빽다방" :
        return setBrandLogo("/brandlogo/빽다방.png")
          case "폴바셋" :
        return setBrandLogo("/brandlogo/폴바셋.png")
          case "카페베네" :
        return setBrandLogo("/brandlogo/카페베네.png")
          case "메가커피":
        return setBrandLogo("/brandlogo/메가커피.png")
      default:
        return undefined
    }
},[item])



  return (
    <>
        <SCcard color={item?.brand}>
          <ScBeforeHover>
            <SCcoffeeImg src={item?.img}/>
            <SCcardText>{item?.name}</SCcardText>
            <SCprice>₩{pricePair[0].price}</SCprice>
          </ScBeforeHover>
        <SChover>
          <div>
          <ScLogo src={brandLogo}></ScLogo>
          </div>
          <SCcardText3 style={{fontSize:'0.8125em'}}>{item?.brand}</SCcardText3>
          <SCcardText2 style={{fontSize:'1.0625em'}}>{item?.name}</SCcardText2>
          <SCcardPrice>₩{pricePair[0].price}</SCcardPrice>
          <ScStar>

          <ScStarName style={{fontSize:'0.8125em'}}>총 별점</ScStarName>
          {item?.star === "NaN" ? 
          <>
          <ScStarRate style={{fontSize:'1.125em'}}>0.0</ScStarRate>
          <ScStarImg><img src={StarUnfilled} alt=""/><img src={StarUnfilled} alt=""/><img src={StarUnfilled} alt=""/><img src={StarUnfilled} alt=""/><img src={StarUnfilled} alt=""/></ScStarImg>
          <ScStarImgMobile><img src={StarFilled} alt=""/>0.0</ScStarImgMobile>
          </>
          :
          <>
          <ScStarRate style={{fontSize:'1.125em'}}>{item?.star.toFixed(1)}</ScStarRate>
          <ScStarImgMobile><img src={StarFilled} alt=""/>{item?.star.toFixed(1)}</ScStarImgMobile></>
          }
          <div>            
            {Math.floor(item?.star) === 1 &&  <ScStarImg><img src={StarFilled} alt=""/><img src={StarUnfilled} alt=""/><img src={StarUnfilled} alt=""/><img src={StarUnfilled} alt=""/><img src={StarUnfilled} alt=""/></ScStarImg>}
            {Math.floor(item?.star) === 2 &&  <ScStarImg><img src={StarFilled} alt=""/><img src={StarFilled} alt=""/><img src={StarUnfilled} alt=""/><img src={StarUnfilled} alt=""/><img src={StarUnfilled} alt=""/></ScStarImg>}
            {Math.floor(item?.star) === 3 &&  <ScStarImg><img src={StarFilled} alt=""/><img src={StarFilled} alt=""/><img src={StarFilled} alt=""/><img src={StarUnfilled} alt=""/><img src={StarUnfilled} alt=""/></ScStarImg>}
            {Math.floor(item?.star) === 4 &&  <ScStarImg><img src={StarFilled} alt=""/><img src={StarFilled} alt=""/><img src={StarFilled} alt=""/><img src={StarFilled} alt=""/><img src={StarUnfilled} alt=""/></ScStarImg>}
            {Math.floor(item?.star) === 5 &&  <ScStarImg><img src={StarFilled} alt=""/><img src={StarFilled} alt=""/><img src={StarFilled} alt=""/><img src={StarFilled} alt=""/><img src={StarFilled} alt=""/></ScStarImg>}
          </div>
          
          </ScStar>
          <ScZoomIn onClick={moveOnclick}><ScLens src={Lens} alt=""/>자세히 보러 가기</ScZoomIn>
        </SChover>
        </SCcard>
    </>
  )
}

export default CoffeeCard


const SCcardText = styled.div`    
    margin-bottom: 5px;
    font-size: 1em;
    font-weight: 600;
    color: #000000c8;
    @media screen and (max-width:768px){ 
          font-size: 10px;
          width: 100px;
          height: 45px;
          margin-bottom:0;
          line-height: 16px;
        }

`;
const SCcardText2 = styled.div`    
    margin-bottom: 5px;
    width: 80%;
    font-size:1.0625em;
    @media screen and (max-width:768px){ 
    display: none;
  }
`;

const ScStarRate =styled.div`
     @media screen and (max-width:768px){ 
    display: none;
  }
`

const SCcardText3 = styled.div`    
    margin-bottom: 5px;
    width: 80%;
    @media screen and (max-width:768px){ 
    margin-top: -8px;
  }
`;

const ScBeforeHover = styled.div`
    /* display: flex;
    flex-direction: column; */
    text-align: center;
    margin: auto;
    @media screen and (max-width:768px){ 
    display: flex;
    flex-direction: column;
    text-align  :center ;
    align-items: center;
    width: 100%;  
    border: 1px red solid;  
  }
`
const ScLogoWrap =styled.div`
  
`
const ScLogo = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 100%;
    margin: 40px 0 20px 0;   
    @media screen and (max-width:768px){ 
      width: 60px;
     height: 60px;
     margin: 30px 0 0 0;
  }
`
const ScStarName =styled.div`
      @media screen and (max-width:768px){ 
    display: none;
    
  }

`
const ScStarImgMobile =styled.div`
    display: none;
    @media screen and (max-width:768px){ 
    display: block;
    img{
      width: 12px;
    }
  }
`

const ScStar = styled.div`
    width: 105px;
    height: 66px;
    margin: 20px 0 21px 0;
    @media screen and (max-width:768px){ 
    /* display: none; */
    margin:  0;
    height: 30px;
  }
`

const ScStarImg =styled.div`
  img{
    margin:0 1px;
  }
  @media screen and (max-width:768px){ 
    img{
      display: none;
  }
  }
`

const SCcardPrice = styled.div`
    border: 1px white solid;
    border-radius: 10px;
    width: 76px;
    /* height: 21px; */
    @media screen and (max-width:768px){ 
    display: none;
  }
`
  const SCcoffeeImg = styled.img`
    max-width: 260px;
    height: 260px;
    margin: 25px auto 10px;
    @media screen and (max-width:768px){ 
          max-width: 140px;
          max-height: 140px;
          margin: 0;
        }
  `

const ScZoomIn = styled.div`
    display: flex;
    justify-content:center ;
    align-items: center;
    width: 148px;
    height: 33px;
    border: 1px white solid;
    border-radius: 20px;
    background-color: var(--main);
    border-color: #2c278c;
    color: white;
    cursor: pointer;
    opacity: 100%!important;
    padding: 2px;
    @media screen and (max-width:768px){ 
      border-radius: 10px;
       width: 92px;
      font-size: 10px;
      font-weight: 500;
  }
`

const ScLens = styled.img`
    margin-right: 5px;
    width: 18px;
    @media screen and (max-width:768px){ 
      width: 15px;
  }
`;

  const SCprice = styled.div`
    border: 1px black solid;
    border-radius: 20px;
    margin: 10px auto;
    width: 30%;
    font-weight: 400;
    font-size: 14px;
    @media screen and (max-width:768px){ 
          margin:0;
          border-radius: 10px;
          /* width:180%; */
          font-size: 9px;
        }
  `
  const SChover =styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      position: absolute;
      transform: translate(-50%,-50%) ;
      top: 50%;
      left: 50%;
      opacity: 0;
      width: 100%;
      height: 100%;   
      text-align: center;
      color: white;
      transition: all 0.5s;
      @media screen and (max-width:768px){ 
        display  :flex; 
        align-items: center;
        justify-content: center;
        margin: 0;
        height: 220px;
        }
  `
const SCcard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 247px;
    height: 401px;
    margin: 30px;
    /* border-radius: 30px; */
    &:hover {
      ${SChover}{
        opacity: 100%;
        background-color: #000000bc;
        /* background: linear-gradient(to bottom, #aaaaaa40, #0000004b); */
      }
    }
    @media screen and (max-width:768px){  
        display  :flex; 
        align-items: center;
        justify-content: center;
        width: 47%; 
        margin: 10px 3px;
        height: 200px;
        &:hover {
      ${SChover}{
        opacity: 100%;
        background-color: #000000a9;
      }
    }
  }
    `
