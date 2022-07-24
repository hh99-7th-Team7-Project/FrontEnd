import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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
      case "엔젤인어스" : 
      return setBrandLogo("/brandlogo/엔젤인어스.png")
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
      default:
        return undefined
    }
},[item])



  return (
    <div>
        <SCcard color={item?.brand}>
          <ScBeforeHover>
            <SCcoffeeImg src={item?.img}/>
            <SCcardText style={{fontSize:'17px'}}>{item?.name}</SCcardText>
            <SCprice>₩{pricePair[0].price}</SCprice>
          </ScBeforeHover>
        <SChover>
          <ScLogo src={brandLogo}></ScLogo>
          <SCcardText style={{fontSize:'13px'}}>{item?.brand}</SCcardText>
          <SCcardText style={{fontSize:'17px'}}>{item?.name}</SCcardText>
          <SCcardPrice>₩{pricePair[0].price}</SCcardPrice>
          {/* {pricePair.map((price,idx)=>{
            return(<SCcardText key={idx}>{price?.size}:{price?.price}</SCcardText> )
          })} */}
          <ScStar>

          <div style={{fontSize:'13px'}}>총 별점</div>
          {item?.star === "NaN" ? 
          <div style={{fontSize:'18px'}}>0.0</div>:
          <div style={{fontSize:'18px'}}>{item?.star.toFixed(1)}</div>}
          <div>            
            {Math.floor(item?.star) === 1 &&  <div>⭐</div>}
            {Math.floor(item?.star) === 2 &&  <div>⭐⭐</div>}
            {Math.floor(item?.star) === 3 &&  <div>⭐⭐⭐</div>}
            {Math.floor(item?.star) === 4 &&  <div>⭐⭐⭐⭐</div>}
            {Math.floor(item?.star) === 5 &&  <div>⭐⭐⭐⭐⭐</div>}
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
    /* font-size: 1.875em; */
`;

const ScBeforeHover = styled.div`
    /* display: flex;
    flex-direction: column; */
    text-align: center;
    margin: auto;
`
const ScLogo = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 100%;
    background-color: white;
     /* background-color: ${(props) => {
    switch(props.color){
      case "스타벅스":
        return "rgb(1,98,65)"
      case "할리스":
        return "rgb(193,47,48)"
      case "엔젤인어스" : 
        return "#252525"
        case "이디야" : 
        return "rgb(36,60,132)"
        case "커피빈" : 
        return "rgb(76,44,105)"
        case "더벤티" : 
        return "rgb(123,0,155)"
        case "드롭탑" :
       return"rgb(26,38,138)"
          case "컴포즈" :
        return"rgb(254,217,0)"
          case "탐앤탐스" :
        return"rgb(79,21,29)"
          case "빽다방" :
         return"rgb(26,38,138)"
          case "폴바셋" :
        return"rgb(41,31,32)"
          case "카페베네" :
         return"rgb(121,98,80)"

      default:
        return "white"
    }
  }}; */
    margin: 42px 0 23px 0;
`

const ScStar = styled.div`
    width: 105px;
    height: 66px;
    margin: 25px 0 21px 0;
`
const SCcardPrice = styled.div`
    border: 1px white solid;
    border-radius: 10px;
    width: 76px;
    height: 21px;
`
  const SCcoffeeImg = styled.img`
    max-width: 240px;
    height: 240px;
    margin: 25px auto 24px;
  `

const ScZoomIn = styled.div`
    width: 148px;
    height: 33px;
    border: 1px white solid;
    border-radius: 20px;
    background-color: #2c278c;
    border-color: #2c278c;
    color: white;
    cursor: pointer;
    opacity: 100%!important;
    padding: 5px 2px 2px 2px;
`

const ScLens = styled.img`
    margin-right: 5px;
    width: 18px;
`;

  const SCprice = styled.div`
    border: 1px black solid;
    border-radius: 10px;
    width: 76px;
    height: 21px;
    margin: 10px auto;
  `
  const SChover =styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #000;
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
  `
const SCcard = styled.div`
    position: relative;
   
    display: flex;
    flex-direction: column;
    /* border: 1px solid #ddd; */
    /* width: 100%; */
    width: 247px;
    height: 401px;
    /* padding: 80px 0; */
    margin: 30px;
    /* border-radius: 30px; */
    &:hover {
      ${ScZoomIn}{
        opacity: 100%!important;
      }
      ${SChover}{
        opacity: 90%;
      }
      
    }
    `
