import React from 'react';
import Styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Category = () => {
  const navigate = useNavigate();

  return (
    <ScCategoryBox>
      <ScCategory
        onClick={() => {
          navigate('/menucategory');
        }}
      >
        Menu
      </ScCategory>
      <ScCategory
        onClick={() => {
          navigate('/chatposts');
        }}
      >
        커피모임
      </ScCategory>
      <ScCategory
        onClick={() => {
          navigate('/board');
        }}
      >
        커피연구소
      </ScCategory>
    </ScCategoryBox>
  );
};

const ScCategoryBox = styled.div`  
  display: flex;
  justify-content:center;
  width: 40% ;
  font-size: 13pt;
  /* margin: auto; */
  /* justify-content: space-between; */
  gap:11%;
  /* margin: 0 0 0 40px; */
  color: #2C278C;
`;

const ScCategory = Styled.div` 
  background-color: white;
  /* margin-left: 30px; */
  &: hover {
    cursor: pointer;
  }
`;

export default Category;
