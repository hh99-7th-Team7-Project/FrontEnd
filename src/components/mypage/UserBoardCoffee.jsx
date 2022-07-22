import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import apis from '../../shared/api/main'
import { getCookie } from '../../shared/Cookie'
import MyCoffeeCard from './MyCoffeeCard'

const UserBoardCoffee = () => {
  const [content, setContent] = useState()
  const userId = getCookie("userId")

  useEffect(()=>{
    apis.getMyCoffee(userId)
        .then((res)=>{
        console.log(res.data)
        setContent(res.data)
    })
  },[])

  return (
    <SCcardWrap>
             <div>{content?.brand}</div>
                {content&&content.map((item, index) => {return (<MyCoffeeCard key={index} item={item}/>)})}        
    </SCcardWrap>
  )
}

export default UserBoardCoffee

const SCcardWrap = styled.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* border: 1px solid black; */
    /* height: 600px; */

`;