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
    <div>
        <SCcard color={item?.brand}>
          <ScBeforeHover>
            <SCcoffeeImg src={item?.img}/>
            <SCcardText style={{fontSize:'1.0625em'}}>{item?.name}</SCcardText>
            <SCprice>₩{pricePair[0].price}</SCprice>
          </ScBeforeHover>
        <SChover>
          <div>
          <ScLogo src={brandLogo}></ScLogo>
          </div>
          <SCcardText style={{fontSize:'0.8125em'}}>{item?.brand}</SCcardText>
          <SCcardText2 style={{fontSize:'1.0625em'}}>{item?.name}</SCcardText2>
          <SCcardPrice>₩{pricePair[0].price}</SCcardPrice>
          <ScStar>

          <div style={{fontSize:'0.8125em'}}>총 별점</div>
          {item?.star === "NaN" ? 
          <>
          <div style={{fontSize:'1.125em'}}>0.0</div>
          <ScStarImg><img src={StarUnfilled} alt=""/><img src={StarUnfilled} alt=""/><img src={StarUnfilled} alt=""/><img src={StarUnfilled} alt=""/><img src={StarUnfilled} alt=""/></ScStarImg>
          </>
          :
          <div style={{fontSize:'1.125em'}}>{item?.star.toFixed(1)}</div>}
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
    </div>
  )
}

export default CoffeeCard


const SCcardText = styled.div`    
    margin-bottom: 5px;

`;
const SCcardText2 = styled.div`    
    margin-bottom: 5px;
    width: 80%;
`;

const ScBeforeHover = styled.div`
    /* display: flex;
    flex-direction: column; */
    text-align: center;
    margin: auto;
`
const ScLogoWrap =styled.div`
  
`
const ScLogo = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 100%;
    margin: 40px 0 20px 0;
`

const ScStar = styled.div`
    width: 105px;
    height: 66px;
    margin: 20px 0 21px 0;
`

const ScStarImg =styled.div`
  img{
    margin:0 1px;
  }
`

const SCcardPrice = styled.div`
    border: 1px white solid;
    border-radius: 10px;
    width: 76px;
    /* height: 21px; */
`
  const SCcoffeeImg = styled.img`
    max-width: 240px;
    height: 240px;
    margin: 25px auto 24px;
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
`

const ScLens = styled.img`
    margin-right: 5px;
    width: 18px;
`;

  const SCprice = styled.div`
    border: 1px black solid;
    border-radius: 10px;
    width: 76px;
    /* height: 21px; */
    margin: 10px auto;
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
    `
