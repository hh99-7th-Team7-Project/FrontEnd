import React from 'react';
/** CSS */
import styled from 'styled-components';
/** react-router-dom */
import { useNavigate } from 'react-router-dom';


const MobileCategory = () => {

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
  width: 60% ;
  font-size: 13pt;
  margin: auto;
  justify-content: space-around;
  gap:11%;
  /* margin: 0 0 0 40px; */
  color: #2C278C;
`;

const ScCategory = styled.div` 
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

export default MobileCategory;
