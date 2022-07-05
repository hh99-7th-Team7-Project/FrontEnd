import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled, {css} from 'styled-components';



const CoffeeCard = ({item}) => {

const navigate = useNavigate()
// console.log(item.pricePair)
const pricePair = item.pricePair
// console.log(pricePair)

const moveOnclick = () => {
navigate(`/${item?.brand}/${item?.name}/${item?.id}`)
}

  return (
    <div>
        <SCcard color={item?.brand} onClick={moveOnclick}>
        <SCcoffeeImg src={item?.img}/>
        <SChover>
         <SCcardText>{item?.brand}</SCcardText>
        <SCcardText>{item?.name}</SCcardText>
        {pricePair.map((price,idx)=>{
          return(<SCcardText key={idx}>{price?.size}:{price?.price}</SCcardText> )
        })}
        </SChover>
        </SCcard>
    </div>
  )
}

export default CoffeeCard

const SCcardText = styled.div`    
    margin: 20px auto;
    font-size: 50px;
    text-align: center;
`;

  const SCcoffeeImg = styled.img`
    width: 227px;
    height: 55%;
    margin: auto;
  `
  const SChover =styled.div`
      background-color: #808080e8;
      position: absolute;
      transform: translate(-50%,-50%) ;
      top: 50%;
      left: 50%;
      opacity: 0;
      width: 100%;
      height: 100%;
      border-radius: 30px;
  `
const SCcard = styled.div`
    position: relative;
    background-color: ${(props) => {
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
          case "컴포즈커피" :
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
  }};
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    width: 227px;
    height: 401px;
    /* padding: 80px 0; */
    margin: 50px;
    border-radius: 30px;
    &:hover {
        cursor: pointer;
      ${SChover}{
        opacity: 1;
      }
    }
    `
