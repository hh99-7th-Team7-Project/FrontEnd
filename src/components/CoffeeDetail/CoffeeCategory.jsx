import React, { useState } from 'react';
import styled from 'styled-components';
import Brand from './Slide/Brand';
import Coffee from './Slide/Coffee';


const CoffeeCategory = () => {

    const [category, setCategory] = useState(true);


  return (
    <div style={{maxWidth:"1230px",width:"84vw", margin:"auto"}}>
          <ScNavbarWrap>
              <ScButtonWrap>
                  <div onClick={()=>{setCategory(true)}}>브랜드</div>
                  <p>|</p>
                  <div onClick={()=>{setCategory(false)}}>음료</div>
              </ScButtonWrap>
          </ScNavbarWrap>
          {category?<Brand/>:<Coffee/>}
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

export default CoffeeCategory