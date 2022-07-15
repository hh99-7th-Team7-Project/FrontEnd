import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import CoffeeCard from '../../components/main/CoffeeCard';
import { __loadCoffees } from '../../redux/modules/coffee';
import apis from '../../shared/api/main';
import Header from '../Header/Header';

const SearchCoffee = () => {
  const {keyword} = useParams();
  const dispatch = useDispatch()
  const [coffeeReducer, setCoffeeReducer] = useState()

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
    <div>
      <div style={{margin:"auto"}}> 
        <Header/>
      </div>
      <div style={{display:"flex",maxWidth:"1400px",flexWrap:"wrap"}}>
        {coffeeReducer&&coffeeReducer.map((item,idx)=>{
          return(<CoffeeCard key={idx} item={item}/>)
        })} 
      </div>
    </div>
  )
}

export default SearchCoffee