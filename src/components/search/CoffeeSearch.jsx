import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { __loadCoffee, __loadCoffees } from '../../redux/modules/coffee'
import apis from '../../shared/api/main'
import CoffeeCard from '../main/CoffeeCard'

const CoffeeSearch = (props) => {
  const {keyword} = props
  console.log(keyword)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [coffeeReducer, setCoffeeReducer] = useState()
  // const coffeeReducer = useSelector((state) => state.coffee.list);
  console.log(coffeeReducer)
  //처음 4개만 보여주기위해서 검색결과에서 4개 짜름
  const sliceCoffee = coffeeReducer?.slice(0,4)
  console.log(sliceCoffee)

  //임시
  useEffect(()=>{
    const search = async()=>{
      apis.searchCoffee(keyword)
          .then((res)=>{
            console.log(res)
            setCoffeeReducer(res?.data)
          })
    }
    search()
  },[dispatch])
    

  return (
   
    (coffeeReducer?
     ( <>
       <div style={{display:"flex"}}>
      {sliceCoffee&&sliceCoffee.map((item,idx)=>{
        return(<CoffeeCard key={idx} item={item}/>)
      })} </div>
      <button style={{marginLeft:"600px"}}
      onClick={()=>{navigate(`/search/coffee/${keyword}`)}}>더 보기</button></>):
       ( <div>검색 결과가 없습니다</div>) 
    )
    

  )
}

export default CoffeeSearch