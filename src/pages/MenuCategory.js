import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import { Brand , Coffee } from '../components/CoffeeDetail/A-CoffeeDetailIndex'; 
import { Flower } from '../components/main/Flower';


const MenuCategory = () => {

    const [category, setCategory] = useState(true);

    const [ brandVisible , setBrandVisible ] = useState(false);
    const [ categoryVisible , setCategoryVisible ] = useState(false);

    const closeCategory = () => {
        
    }



  return (
    <>
        <Flower/>
        <div style={{margin:"auto"}}>
            <Header/>
        </div>
        <div style={{maxWidth:"1230px",width:"84vw", margin:"auto"}}>
            <ScNavbarWrap>
                <ScButtonWrap>
                    <div onClick={()=>{setBrandVisible(!brandVisible)}}>브랜드</div>
                    <p>|</p>
                    <div onClick={()=>{setCategoryVisible(!categoryVisible)}}>음료</div>
                </ScButtonWrap>
            </ScNavbarWrap>
            {brandVisible  ? <Brand open={brandVisible} setOpen={setBrandVisible} />: null } 
            {categoryVisible ? <Coffee open={categoryVisible} setOpen={setCategoryVisible} /> : null } 
        </div>
        
    </>
  )
}


const ScButtonWrap = styled.div`
    margin: 20px auto;
    display: flex;
    gap: 28px;
    font-size: 14pt;
    &:hover {
        cursor: pointer;
    }
`;

const ScNavbarWrap =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export default MenuCategory