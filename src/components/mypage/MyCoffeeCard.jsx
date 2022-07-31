import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Lens from '../main/svg/Lens.svg'

const MyCoffeeCard = ({item}) => {

  const navigate = useNavigate()
  const [brandLogo, setBrandLogo] = useState()

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
    



  const moveOnclick = () => {
    navigate(`/coffee/${item?.brand}/${item?.name}/${item?.id}`)
    }
  return (
    <div>
    <SCcard color={item?.brand}>
      <ScBeforeHover>
        <div style={{width:"175px", marginBottom:"8px"}}>
        <SCcoffeeImg src={item?.img}/>
        </div>
        <div style={{fontSize:'1em'}}>{item?.name}</div>
      </ScBeforeHover>
    <SChover>
      <ScLogo src={brandLogo}></ScLogo>
      <div style={{fontSize:'0.8125em'}}>{item?.brand}</div>
      <div style={{fontSize:'1em', fontWeight:"400"}}>{item?.name}</div>
      <ScZoomIn onClick={moveOnclick}><ScLens src={Lens} alt=""/>자세히 보러 가기</ScZoomIn>
    </SChover>
    </SCcard>
</div>
  )
}

export default MyCoffeeCard

const ScBeforeHover = styled.div`
    /* display: flex;
    flex-direction: column; */
    text-align: center;
    margin: 0 auto;
`
const ScLogo = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 100%;
    background-color: white;
    margin: 20px 0 15px 0;
`
  const SCcoffeeImg = styled.img`
    max-width: 202px;
    height: 182px;
    /* width: 150px; */
    /* margin: 10px auto 10px; */
  `

const ScZoomIn = styled.div`
    width: 148px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    border: 1px white solid;
    border-radius: 20px;
    background-color: #2c278c;
    border-color: #2c278c;
    color: white;
    cursor: pointer;
    opacity: 100%!important;
    margin-top: 7px;
    padding: 2px;
`

const ScLens = styled.img`
    margin-right: 5px;
    width: 18px;
`;

  const SChover =styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #000;
      border-radius: 12px;
      position: absolute;
      transform: translate(-50%,-60%) ;
      top: 50%;
      left: 50%;
      opacity: 0;
      width: 100%;
      height: 90%;   
      text-align: center;
      color: white;
      padding: 10px;
  `
const SCcard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    /* border: 1px solid #ddd; */
    /* width: 100%; */
    width: 202px;
    height: 291px;
    /* padding: 80px 0; */
    margin: 30px;
    /* border-radius: 30px; */
    &:hover {
      ${SChover}{
        opacity: 100%;
        background-color: #000000bc;
      }
      
    }
    `