import React, { useState } from 'react';
import styled from 'styled-components';
import Brand from './Slide/Brand';
import Coffee from './Slide/Coffee';


const CoffeeCategory = () => {

    const [category, setCategory] = useState(true);

    const [ brandVisible , setBrandVisible ] = useState(false);
    const [ categoryVisible , setCategoryVisible ] = useState(false);



  return (
    <div style={{maxWidth:"1230px",width:"84vw", margin:"auto", position:"relative"}}>
          <ScNavbarWrap>
              <ScButtonWrap>
                  <ScCategoryBox onClick={()=>{
                    setBrandVisible(!brandVisible)                 
                    }}>브랜드</ScCategoryBox>
                  <p>|</p>
                  <ScCategoryBox onClick={()=>{
                    setCategoryVisible(!categoryVisible)                    
                    }}>음료</ScCategoryBox>
              </ScButtonWrap>
          </ScNavbarWrap>
          {brandVisible ? <Brand open={brandVisible} />: null } 
          {categoryVisible ? <Coffee open={categoryVisible} /> : null }          
    </div>
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

const ScCategoryBox = styled.div`
    position: relative;
    
`;

export default CoffeeCategory