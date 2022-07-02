import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled, {css} from 'styled-components';



const CoffeeCard = ({item}) => {

const navigate = useNavigate()
console.log(item.pricePair)
const pricePair = item.pricePair
console.log(pricePair)

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
        return "green"
      case "할리스":
        return "red"
      case "엔젤인어스" : 
        return "blue"
      default:
        return "white"
    }
  }};
    display: flex;
    flex-direction: column;
    border: 2px solid #ddd;
    width: 300px;
    padding: 80px 0;
    margin: 50px;
    border-radius: 30px;
    &:hover {
        cursor: pointer;
      ${SChover}{
        opacity: 1;
      }
    }
    `
