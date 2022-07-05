import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import CoffeeCard from '../../components/main/CoffeeCard';
import { __loadCoffees } from '../../redux/modules/coffee';
import Header from '../Header/Header';

const SearchCoffee = () => {
  const {keyword} = useParams;
  const dispatch = useDispatch()
  const coffeeReducer = useSelector((state) => state.coffee.list);

  useEffect(()=>{
    dispatch(__loadCoffees())
  },[dispatch])

  return (
    <div>
    <Header/>
    <div style={{display:"flex",maxWidth:"1400px",flexWrap:"wrap"}}>
      {coffeeReducer&&coffeeReducer.map((item,idx)=>{
        return(<CoffeeCard key={idx} item={item}/>)
      })} </div>
      </div>
  )
}

export default SearchCoffee