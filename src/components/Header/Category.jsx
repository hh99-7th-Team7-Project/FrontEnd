import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom'

const Category = () => {
    return (
        <ScCategoryBox>
           <Link to={"/board"}> <ScCategory
           >게시판</ScCategory>
           </Link>
            <ScCategory>채팅방</ScCategory>
        </ScCategoryBox>
    )
}

const ScCategoryBox = Styled.div`  
  display: flex;
`;

const ScCategory = Styled.div` 
  background-color: white;
  margin-left: 30px;
  &: hover {
    cursor: pointer;
  }
`;

export default Category