import React, { useEffect } from 'react'
import Styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Navigate, useNavigate } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import apis from '../../shared/api/main';
import { __loadCoffee } from '../../redux/modules/coffee';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const BrandCard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const coffeeReducer = useSelector((state) => state.coffee.list);
   console.log(coffeeReducer)

    useEffect(()=>{
        dispatch(__loadCoffee())
        console.log("돌아가?")
    },[])


  return (
    <>
        <div>
            <SCcardWrap>
                {coffeeReducer.map((item, index) => {                    
                    return (<CoffeeCard key={index} item={item}/>)
                })}        
            </SCcardWrap>
        </div>
    </>
  )
}

const SCcardWrap = Styled.div`    
    margin: auto;
    /* width: 80%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px solid black;
`;

// const Card = Styled.div`
//     border: 2px solid black;
//     width: 300px;
//     padding-top: 200px;
//     padding-bottom: 200px;
//     margin: 50px;
//     border-radius: 30px;
//     &:hover {
//         cursor: pointer;
//     }

// `;

// const CardText = Styled.div`    
//     margin: 20px auto;
//     font-size: 50px;
//     text-align: center;
// `;

export default BrandCard