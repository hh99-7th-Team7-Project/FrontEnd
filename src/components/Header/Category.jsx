import React from 'react';
import Styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom'

const Category = () => {
  const navigate = useNavigate()

    return (
        <ScCategoryBox>
        <ScCategory>모여라!(채팅)</ScCategory>
        <ScCategory onClick={()=>{navigate("/board")}}>커뮤니티</ScCategory>
        </ScCategoryBox>
    )
}

const ScCategoryBox = Styled.div`  
  display: flex;
  font-size: 14pt;
`;

const ScCategory = Styled.div` 
  background-color: white;
  margin-left: 30px;
  &: hover {
    cursor: pointer;
  }
`;

export default Category