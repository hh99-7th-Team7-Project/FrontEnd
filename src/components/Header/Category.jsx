import React from 'react';
import Styled from 'styled-components';

const Category = () => {
    return (
        <ScCategoryBox>
            <ScCategory>카테고리 1</ScCategory>
            <ScCategory>카테고리 2</ScCategory>
            <ScCategory>카테고리 3</ScCategory>
            <ScCategory>카테고리 4</ScCategory>
        </ScCategoryBox>
    )
}

const ScCategoryBox = Styled.div`  
  /* margin-left: 50px; */
  /* margin: 20px 30px auto;   */
  /* width: 550px; */
  /* padding: 10px; */
  display: flex;
`;

const ScCategory = Styled.div` 
  /* width: 100px; */
  background-color: white;
  /* margin-left: 30px; */
  &: hover {
    cursor: pointer;
  }
`;

export default Category