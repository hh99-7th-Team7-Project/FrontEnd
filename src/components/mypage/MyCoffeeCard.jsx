import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Lens from '../main/svg/Lens.svg'

const MyCoffeeCard = ({item}) => {

  const navigate = useNavigate()
  const moveOnclick = () => {
    navigate(`/coffee/${item?.brand}/${item?.name}/${item?.id}`)
    }
  return (
    <div>
    <SCcard color={item?.brand}>
      <ScBeforeHover>
        <SCcoffeeImg src={item?.img}/>
        <div style={{fontSize:'17px'}}>{item?.name}</div>
      </ScBeforeHover>
    <SChover>
      <ScLogo></ScLogo>
      <div style={{fontSize:'13px'}}>{item?.brand}</div>
      <div style={{fontSize:'17px'}}>{item?.name}</div>
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
    margin: 20px 0 23px 0;
`
  const SCcoffeeImg = styled.img`
    max-width: 202px;
    height: 182px;
    /* margin: 10px auto 10px; */
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

  const SChover =styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #000;
      border-radius: 12px;
      position: absolute;
      transform: translate(-50%,-63%) ;
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
      ${ScZoomIn}{
        opacity: 100%;
      }
      ${SChover}{
        opacity: 80%;
      }
      
    }
    `