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
  font-size: 1.0625em;
  /* margin: auto; */
  /* justify-content: space-between; */
  gap:4%;
  /* margin: 0 0 0 40px; */
  color: #2C278C;
  list-style: none;

  @media screen and (max-width:768px){
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    text-align: center;

  }
`;

const ScCategory = Styled.li` 
  background-color: white;
  /* margin-left: 30px; */
  &: hover {
    cursor: pointer;
    font-family: SUIT ExtraBold;
    border-radius: 4px;
  }
  padding: 8px 12px;
  @media screen and (max-width:768px){   

  }
  
`;

export default Category;
