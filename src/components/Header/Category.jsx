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

const ScCategoryBox = styled.ul`  
  display: flex;
  justify-content:center;
  width: 40%;
  font-size: 13pt;
  /* margin: auto; */
  /* justify-content: space-between; */
  gap:4%;
  /* margin: 0 0 0 40px; */
  color: #2C278C;
  list-style: none;

  @media screen and (max-width:768px){
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;  
  }
`;

const ScCategory = Styled.li` 
  background-color: white;
  /* margin-left: 30px; */
  &: hover {
    cursor: pointer;
    background-color: #2C278C;
    color: white;
    border-radius: 4px;
  }
  padding: 8px 12px;
  @media screen and (max-width:768px){    
    width: 100%;
    text-align: center;    
  }
  
`;

export default Category;
